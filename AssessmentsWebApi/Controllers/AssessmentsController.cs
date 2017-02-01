using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;
using AssessmentServices.CustomDTO;
using AssessmentsWebApi.Providers;
using AssessmentsWebApi.Controllers.BaseControllers;
using System.Collections;
using AssessmentModel;
using Microsoft.AspNet.SignalR;
using AssessmentsWebApi.Hubs;

namespace AssessmentsWebApi.Controllers
{
    public class AssessmentsController : BaseController
    {

        public AssessmentsController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        // GET: api/assessments
        [HttpGet]
        public IEnumerable<AssessmentDTO> GetAssessments()
        {
            IQueryable<Assessment> query;

            query = UnitOfWork.AssessmentRepository.Get();

            return query.ToList().Select((Assessment a) => DTOFactory.Create(a));
        }

        [HttpGet]
        [Route("api/assessments/getBriefAssessmentsInfo/")]
        public IQueryable GetBriefAssessmentsInfo()
        {
            var result = UnitOfWork.AssessmentRepository.Get()
                                    .Select(a => new
                                    {
                                        Id = a.Id,
                                        Name = a.Name,
                                        StartDate = a.StartDate,
                                        Coordinator = a.Coordinator.Name
                                    });

            return result.OrderByDescending(x => x.StartDate);
        }

        [HttpGet]
        [Route("api/assessments/GetBriefAssessmentsInfoWithFilter/{text}")]
        public IQueryable GetBriefAssessmentsInfoWithFilter(string text)
        {

            var result = UnitOfWork.AssessmentRepository.Get(w => w.Name.Contains(text)
                                        || w.AssessmentType.Name.Contains(text)
                                        || w.Version.Contains(text)
                                        || w.StartDate.ToString().Contains(text)
                                        || w.FinishDate.ToString().Contains(text)
                                        || w.ProjectManager.Name.Contains(text)
                                        || w.TechLead.Name.Contains(text)
                                        || w.Coordinator.Name.Contains(text))
                                    .Select(a => new
                                    {
                                        Id = a.Id,
                                        Name = a.Name,
                                        StartDate = a.StartDate,
                                        Coordinator = a.Coordinator.Name
                                    });

            return result.OrderByDescending(x => x.StartDate);
        }

        // GET: api/Assessments/getAssessmentById/{id}
        [HttpGet]
        public HttpResponseMessage GetAssessmentById(int id)
        {
            var assessment = UnitOfWork.AssessmentRepository.GetByID(id);

            if (assessment != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(assessment));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }

        [HttpGet]
        public IEnumerable GetAssessmentFormInfo(int id)
        {
            string currentUserId = CustomRoleProvider.GetUserId(UnitOfWork);
            var source = (from assessment in UnitOfWork.AssessmentRepository.Get()
                          join techLead in UnitOfWork.UserRepository.Get() on assessment.TechLeadId equals techLead.Id into ulist
                          from techLead in ulist.DefaultIfEmpty()
                          join coordinator in UnitOfWork.UserRepository.Get() on assessment.CoordinatorId equals coordinator.Id into wlist
                          from coordinator in wlist.DefaultIfEmpty()
                          join projectManager in UnitOfWork.UserRepository.Get() on assessment.ProjectManagerId equals projectManager.Id into vlist
                          from projectManager in vlist.DefaultIfEmpty()
                          where assessment.Id == id
                          select new
                         {
                             teachLeadName = techLead.Name,
                             coordinatorName = coordinator.Name,
                             projectManagerName = projectManager.Name,
                             assessmentName = assessment.Name,
                             assessmentVersion = assessment.Version,
                             assessmentUnit = assessment.Unit,
                             assessmentImprovements = assessment.Improvements,
                             assessmentServiceQualityScore = assessment.ServiceQualityScore,
                             assessmentURL = assessment.URL,
                             assessmentCoordinatorTime = assessment.CoordinatorTime,
                             assessmentExpertTime = assessment.ExpertTime,
                             assessmentStartDate = assessment.StartDate,
                             assessmentFinishDate = assessment.FinishDate,
                             assessmentCoordinatoorId = assessment.CoordinatorId,
                             currentUserId = currentUserId

                         }).ToList();

            return source;

        }


        // GET: api/Assessments/getAssessmentByAssessmentTypeId/{id}
        [HttpGet]
        public IEnumerable<AssessmentDTO> GetAssessmentByAssessmentTypeId(int id)
        {
            var assessment = UnitOfWork.AssessmentRepository.Get(i => i.AssessmentTypeId == id);

            var result = assessment.ToList()
                                   .Select(a => DTOFactory.Create(a));

            return result.ToList();
        }

        [HttpPost]
        public HttpResponseMessage PostAssessment([FromBody] AssessmentDTO assessment)
        {
            var entity = DTOFactory.Parse(assessment);

            if (entity == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Could not parse new Assessment");
            }

            UnitOfWork.AssessmentRepository.Insert(entity);

            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }

        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage EditAssessment([FromBody] AssessmentDTO assessmentDTO)
        {
            var assessment = DTOFactory.Parse(assessmentDTO);
            UnitOfWork.AssessmentRepository.Update(assessment);

            var _context = GlobalHost.ConnectionManager.GetHubContext<AssessmentHub>();
            _context.Clients.All.onUpdate();

            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(assessment));
        }

        // When you try to delete an assessment 
        // There are cascade deleting columns for other tables ( Area, Criteria, Indicator)
        // Which Assessment table are related.
        [HttpDelete]
        public HttpResponseMessage DeleteAssessment(int id)
        {

            var assessment = UnitOfWork.AssessmentRepository.GetByID(id);
            UnitOfWork.AssessmentRepository.Delete(assessment);

            return Request.CreateResponse(HttpStatusCode.OK, String.Format("{0} successfully deleted...", assessment.Name));
        }

        // GET api/Assessments/GetWeakAreas/3
        [HttpGet]
        public HttpResponseMessage GetWeakAreas(int id)
        {
            List<StrongWeakAreasDTO> WeakAreas = new List<StrongWeakAreasDTO>();

            var Areas = from a in UnitOfWork.AreaRepository.Get(x => x.AssesmentId == id)
                        select a;
            foreach (var a in Areas)
            {
                List<CriteriaAndScoresDTO> temp = new List<CriteriaAndScoresDTO>();
                foreach (var c in a.Criteria)
                {
                    if (c.CriteriaScore != null && c.CriteriaScore.Weight <= 50)
                    {
                        int count = UnitOfWork.RecommendationRepository.Get(x => x.CriterionId == c.Id).Select(s => new { name = s.CriterionId }).ToList().Count;
                        temp.Add(new CriteriaAndScoresDTO(c.Id, c.Name, c.CriteriaScore.Name, count));
                        
                    }
                }
                if (temp.Count != 0)
                {
                    WeakAreas.Add(new StrongWeakAreasDTO
                    {
                        Area = a.Name,
                        Description = a.Description,
                        CriteriaAndScores = temp
                    });
                }
            }

            if (WeakAreas.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, WeakAreas);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        // GET api/Assessments/GetStrongAreas/3
        [HttpGet]
        public HttpResponseMessage GetStrongAreas(int id)
        {
            List<StrongWeakAreasDTO> StrongAreas = new List<StrongWeakAreasDTO>();

            var Areas = from a in UnitOfWork.AreaRepository.Get(x => x.AssesmentId == id)
                        select a;
            foreach (var a in Areas)
            {
                List<CriteriaAndScoresDTO> temp = new List<CriteriaAndScoresDTO>();
                foreach (var c in a.Criteria)
                {
                    if (c.CriteriaScore != null && c.CriteriaScore.Weight > 50)
                    {
                        temp.Add(new CriteriaAndScoresDTO(c.Id, c.Name, c.CriteriaScore.Name));
                    }
                }
                if (temp.Count != 0)
                {
                    StrongAreas.Add(new StrongWeakAreasDTO
                    {
                        Area = a.Name,
                        Description = a.Description,
                        CriteriaAndScores = temp
                    });
                }
            }

            if (StrongAreas.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, StrongAreas);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

    }
}
