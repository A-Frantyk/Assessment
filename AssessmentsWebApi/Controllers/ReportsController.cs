using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;
using AssessmentServices.CustomDTO;
using AssessmentsWebApi.Controllers.BaseControllers;
using System.Collections;
using OfficeOpenXml;
using System.IO;
using System.Net.Http.Headers;
using AssessmentsWebApi.Pagination;

namespace AssessmentsWebApi.Controllers
{
    public class ReportsController : BaseController
    {
        public ReportsController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        [HttpGet]
        public HttpResponseMessage GetQuaterlyReport([FromUri] DateTime? start, [FromUri] DateTime? end, [FromUri] int? type)
        {
            var assessments = from a in UnitOfWork.AssessmentRepository.Get()
                              where a.FinishDate.HasValue && (a.FinishDate.Value >= start && a.FinishDate.Value <= end)
                              select a;

            if(type != null && type!=0)
            {
                assessments = from a in assessments where a.AssessmentTypeId == type select a;
            }

            if (!assessments.Any())
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }

            var result = DTOFactory.CreateQuarterlyReport(assessments);

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        // GET api/Repotrs/GetTopWeakAreas/?typeId=1&date=1&page=0&itemsPerPage=8
        [HttpGet]
        public HttpResponseMessage GetTopWeakAreas(int typeId, [FromUri] DateTime? start, [FromUri] DateTime? end, int page, int itemsPerPage)
        {
            List<StrongWeakAreasDTO> Areas = new List<StrongWeakAreasDTO>();
            var uniqueCriterion = (from c in UnitOfWork.CriterionRepository.Get()
                                  where c.Area.Assessment.AssessmentTypeId == typeId
                                  select new { criterion = c.Name, area = c.Area.Name }).Distinct();
            foreach (var u in uniqueCriterion)
            {
                var currentCriterion = from c in UnitOfWork.CriterionRepository.Get()
                                 where c.Name == u.criterion
                                 && c.CriteriaScore.Weight != null
                                 && c.CriteriaScore.Weight != 0
                                 && c.Area.Assessment.FinishDate.HasValue
                                 && c.Area.Assessment.FinishDate.Value >= start
                                 && c.Area.Assessment.FinishDate.HasValue
                                 && c.Area.Assessment.FinishDate.Value <= end
                                 select c.CriteriaScore.Weight;
                if (currentCriterion.ToList<int>().Count > 0)
                {
                    Areas.Add(new StrongWeakAreasDTO
                    {
                        Area = u.area,
                        Criterion = u.criterion,
                        Score = Math.Round(currentCriterion.ToList<int>().Average(), 2) + " %",
                        ScoreCount = currentCriterion.ToList<int>().Count
                    });
                }
            }

            if (Areas.Count > 0)
            {
                Paging<StrongWeakAreasDTO> p = new Paging<StrongWeakAreasDTO>(Areas.OrderBy(x => x.Score).ToList(), page, itemsPerPage);
                return Request.CreateResponse(HttpStatusCode.OK, p.getContent());
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }
    }
}
