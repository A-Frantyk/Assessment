using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;

namespace AssessmentsWebApi.Controllers
{
    public class RecommendationsController : BaseController
    {

        public RecommendationsController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        [HttpGet]
        [Route("api/Recommendations/GetAllCriteriaByAssessmentId/{id}")]
        public HttpResponseMessage GetAllCriteriaByAssessmentId(int id)
        {
            IQueryable Criteria = UnitOfWork.CriterionRepository
                .Get(x => x.Area.AssesmentId == id)
                .Select(c => new
                {
                    Id = c.Id,
                    Name = c.Name
                });
            if (Criteria  != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, Criteria);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        [HttpGet]
        [Route("api/Recommendations/GetAllRecommendations/{id}")]
        public HttpResponseMessage GetAllRecommendations(int id)
        {
            var Recommendations = UnitOfWork.RecommendationRepository
                .Get(w => w.Criterion.Area.AssesmentId == id)
                .Select(x => new
                {
                    Id = x.Id,
                    Name = x.Criterion.Name,
                    Text = x.Text,
                    Benefits = x.Benefits,
                    Order = x.Order
                });

            //CriterionRepository.Get(x => x.Area.AssesmentId == id)
            if (Recommendations != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, Recommendations);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        [HttpPost]
        public HttpResponseMessage SaveReccomendation([FromBody] RecommendationDTO recommendationDTO)
        {
            var recommendation = DTOFactory.Parse(recommendationDTO);
            UnitOfWork.RecommendationRepository.Insert(recommendation);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(recommendation));
        }


        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage EditReccomendation([FromBody] RecommendationDTO recommendationDTO)
        {
            var recommendation = DTOFactory.Parse(recommendationDTO);
            UnitOfWork.RecommendationRepository.Update(recommendation);
            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(recommendation));
        }
    }
}
