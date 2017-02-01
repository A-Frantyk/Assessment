using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Collections;
using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using AssessmentModel;
using AssessmentServices.CustomDTO;

namespace AssessmentsWebApi.Controllers
{
    public class CriteriaController : BaseController
    {
        public CriteriaController(ICompetenceManagerUnitOfWork unit)
            : base(unit)
        {
        }

        [HttpGet]
        public IEnumerable<CriterionDTO> GetCriteria()
        {
            IQueryable<Criterion> query;

            query = UnitOfWork.CriterionRepository.Get();

            var result = query.ToList()
                              .Select(c => DTOFactory.Create(c));

            return result.ToList();
        }

        /// <summary>
        /// Get Criteria With ScoreLeft Field (which means how many indicators with no score left) For Given Assessment
        /// </summary>
        /// <param name="id">AssessmentId</param>
        /// <returns>List of Criteria With ScoreLeft Field For Given Assessment</returns>        
        [HttpGet]
        public HttpResponseMessage GetAllCriteriaOfAssessment(int id)
        {
            var assessment = UnitOfWork.AssessmentRepository.GetByID(id);

            if (assessment == null)
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }

            var result = DTOFactory.CreateCriteriaWithScoreLeft(assessment);

            if(result != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, result.ToList());
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }


        [HttpGet]
        public HttpResponseMessage GetCritrionById(int id)
        {
            if (id > 0)
            {
                var criterion = UnitOfWork.CriterionRepository.Get(i => i.Id == id).FirstOrDefault();

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(criterion));
            }
            else
            {
                throw new InvalidOperationException(message: "Something happened while trying to find an instance of object in Database...");
            }
        }

        [HttpGet]
        public HttpResponseMessage GetCritriaByAreaId(int id)
        {
            if (id > 0)
            {
                var critrion = UnitOfWork.CriterionRepository.Get(i => i.AreaId == id).FirstOrDefault();

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(critrion));
            }
            else
            {
                throw new InvalidOperationException(message: "Something happened while trying to find an instance of object in Database...");
            }
        }

        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage EditCriteria([FromBody] CriterionDTO criterionDTO)
        {
            var criterion = DTOFactory.Parse(criterionDTO);
            UnitOfWork.CriterionRepository.Update(criterion);
            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(criterion));
        }
    }
}
