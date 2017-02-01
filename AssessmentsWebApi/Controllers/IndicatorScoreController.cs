using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;


using AssessmentsWebApi.Controllers.BaseControllers;

namespace AssessmentsWebApi.Controllers
{
    public class IndicatorScoreController : BaseController
    {
        public IndicatorScoreController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        // GET api/IndicatorScore
        [HttpGet]
        public IEnumerable<IndicatorScoreDTO> GetIndicatorScores()
        {
            IQueryable<IndicatorScore> query;

            query = UnitOfWork.IndicatorScoreRepository.Get();

            var result = query.ToList()
                              .Select(ind => DTOFactory.Create(ind));

            return result.ToList();
        }

        // GET api/IndicatorScore/5
        [HttpGet]
        public HttpResponseMessage GetIndicatorScoreById(int id)
        {
            if (id > 0)
            {
                var indicatorScore = UnitOfWork.IndicatorScoreRepository.GetByID(id);

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicatorScore));
            }
            else
            {
                throw new InvalidOperationException("Something happaned while trying to find in indicatoScore by id...");
            }
        }

        // PUT api/IndicatorScore/{id}
        // Where an id is an indicator.Id
        // and scoreId is an indicatorScore.Id
        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage PutIndicatorScore([FromBody] IndicatorScoreDTO indicatorScoreDTO)
        {
            var indicatorScore = DTOFactory.Parse(indicatorScoreDTO);
            UnitOfWork.IndicatorScoreRepository.Update(indicatorScore);

            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicatorScore));
        }

        // POST api/IndicatorScore
        [HttpPost]
        public HttpResponseMessage PostIndicatorScore([FromBody] IndicatorScoreDTO indicatorscore)
        {
            var entity = DTOFactory.Parse(indicatorscore);
            UnitOfWork.IndicatorScoreRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }

        // DELETE api/IndicatorScore/5
        [HttpDelete]
        public HttpResponseMessage DeleteIndicatorScore(int id)
        {
            throw new NotImplementedException();
        }

    }

}