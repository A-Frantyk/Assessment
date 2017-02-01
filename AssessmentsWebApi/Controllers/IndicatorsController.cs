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
    public class IndicatorsController : BaseController
    {
        public IndicatorsController(ICompetenceManagerUnitOfWork _unit)
            : base(_unit)
        {
        }

        /// <summary>
        /// Get All Indicators
        /// </summary>
        /// <param></param>
        /// <returns>List of All Indicators</returns>        
        [HttpGet]
        [Route("api/indicators")]
        public HttpResponseMessage GetIndicators()
        {
            var query = UnitOfWork.IndicatorRepository.Get();

            var result = query.ToList()
                              .Select(i => DTOFactory.Create(i));

            return Request.CreateResponse(HttpStatusCode.OK, result.ToList());
        }

        /// <summary>
        /// Get DTOIndicators For Given Criterion
        /// </summary>
        /// <param name="id">CriterionId</param>
        /// <returns>List of DTOIndicators For Given Criterion</returns>        
        [HttpGet]
        public HttpResponseMessage GetIndicatorsOfCriterion(int id)
        {
            var query = UnitOfWork.IndicatorRepository.Get(i => i.CriteriaId == id);

            var result = query.ToList()
                              .Select(i => DTOFactory.Create(i));

            return Request.CreateResponse(HttpStatusCode.OK, result.ToList());
        }

        /// <summary>
        /// Get Indicators With Score's Info For Given Criterion
        /// </summary>
        /// <param name="id">CriterionId</param>
        /// <returns>List of Indicators With Score's Info For Given Criterion</returns>        
        [HttpGet]
        public HttpResponseMessage GetFullIndicatorsOfCriterion(int id)
        {
            var query = UnitOfWork.IndicatorRepository.Get(i => i.CriteriaId == id);

            var result = query.ToList()
                              .Select(i => DTOFactory.CreateFullIndicator(i));

            return Request.CreateResponse(HttpStatusCode.OK, result.ToList());
        }

        /// <summary>
        /// Get Indicator With Given Id
        /// </summary>
        /// <param name="id">IndicatorId</param>
        /// <returns>DTOIndicator With Given Id</returns>        
        [HttpGet]
        public HttpResponseMessage GetIndicatorById(int id)
        {
            var indicator = UnitOfWork.IndicatorRepository.GetByID(id);

            if(indicator != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicator));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        /// <summary>
        /// Get First DTOIndicator For Given Criterion
        /// </summary>
        /// <param name="id">CriterionId</param>
        /// <returns>First DTOIndicator For Given Criterion</returns>        
        [HttpGet]
        public HttpResponseMessage GetIndicatorByCriteriaId(int id)
        {
            var indicator = UnitOfWork.IndicatorRepository.Get(i => i.CriteriaId == id).FirstOrDefault();

            if(indicator != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicator));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        /// <summary>
        /// Save Comment To Indicator
        /// </summary>
        /// <param name="id">IndicatorId</param>
        /// <param name="indicatorDTO">IndicatorDTO</param>
        /// <returns>DTOIndicator With Comment</returns>        
        [HttpPut]
        public HttpResponseMessage PutAddNewCommentToIndicator(int id, [FromBody] FullIndicator indicatorDTO)
        {
            var indicator = UnitOfWork.IndicatorRepository.GetByID(id);

            if(indicator != null)
            {
                indicator.Comment = indicatorDTO.IndicatorComment;               // edit comment

                UnitOfWork.IndicatorRepository.Update(indicator);

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicator));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        /// <summary>
        /// Save IndicatorScore To Indicator
        /// </summary>
        /// <param name="id">IndicatorId</param>
        /// <param name="scoreDTO">IndicatorScoreDTO</param>
        /// <returns>DTOIndicator With IndicatorScore</returns>        
        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage PutIndicatorScoreIntoIndicator(int id, [FromBody]IndicatorScoreDTO scoreDTO)
        {
            var indicator = UnitOfWork.IndicatorRepository.GetByID(id);

            if (indicator != null)
            {               
                indicator.ScoreId = scoreDTO.Id; // Change id 

                UnitOfWork.IndicatorRepository.Update(indicator);

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicator));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }
    }
}
