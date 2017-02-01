using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AssessmentModel;
using AssessmentServices.UnitOfWork;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using AssessmentServices.ModelsDTO;

using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentsWebApi.Providers;

namespace AssessmentsWebApi.Controllers
{
     [WebApiFilter(Roles = "CompetenceManager")]
    public class IndicatorSampleController : BaseController
    {
        //private ICompetenceManagerUnitOfWork unit = new UnitOfWork();

        public IndicatorSampleController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        // GET: api/{controller}
        // Return an IEnumerable<IndicatorSample> array
        // that contain all area rows in the IndicatorSample database table
        [HttpGet]
        public IEnumerable<IndicatorSampleDTO> GetAllIndicatorSamples()
        {
            IQueryable<IndicatorSample> query;

            query = UnitOfWork.IndicatorSampleRepository.Get();

            var result = query.ToList()
                              .Select(cr => DTOFactory.Create(cr));

            return result.ToList();
        }

        // GET: api/{controller}/{action}/{id}
        // Return IndicatorSample serialized object
        // which Id == {id}
        [HttpGet]
        public HttpResponseMessage GetIndicatorSampleByID(int id)
        {
            var indicatorSample = UnitOfWork.IndicatorSampleRepository.GetByID(id);

            if (indicatorSample != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicatorSample));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Data not found in database.");
            }
        }

        // GET: api/{controller}/{action}/{id}
        // Return all IndicatorSample rows that are selected from IndicatorSamples table,
        // which CriteriaSampleId field are equal to id
        // id = means that is an Id column of Criteria table
        [HttpGet]
        public IEnumerable<IndicatorSampleDTO> GetIndicatorSampleByCriteriaSampleId(int id)
        {
            var indicatorSample = UnitOfWork.IndicatorSampleRepository.Get(i => i.CriteriaSampleId == id);

            var result = indicatorSample.ToList()
                                        .Select(ind => DTOFactory.Create(ind));

            return result.ToList();
        }

        // Enable to modify Inicator. Change an existing IndicatorSample
        // by id
        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage ModifyIndicatorSample([FromBody] IndicatorSampleDTO indicatorDTO)
        {
            var indicatorSample = DTOFactory.Parse(indicatorDTO);
            UnitOfWork.IndicatorSampleRepository.Update(indicatorSample);
            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicatorSample));
        }

        // Enable to add new IndicatorSample
        [HttpPost]
        public HttpResponseMessage AddIndicatorSample(IndicatorSampleDTO indicator)
        {
            var entity = DTOFactory.Parse(indicator);
            UnitOfWork.IndicatorSampleRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }
        // Enable to delete IndicatorSample using an Id
        [HttpDelete]
        [Route("api/IndicatorSamples/deleteIndicatorSample/{id}")]
        public HttpResponseMessage deleteIndicatorSample(int id)
        {
            var indicator = UnitOfWork.IndicatorSampleRepository.Get(a => a.Id == id).FirstOrDefault();

            UnitOfWork.IndicatorSampleRepository.Delete(indicator);
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
