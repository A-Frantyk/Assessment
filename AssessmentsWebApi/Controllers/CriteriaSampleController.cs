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
using AssessmentsWebApi.Providers;

namespace AssessmentsWebApi.Controllers
{
     [WebApiFilter(Roles = "CompetenceManager")]
    public class CriteriaSampleController : BaseController
    {
        public CriteriaSampleController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        // GET api/CriteriaSample
        [HttpGet]
        public IEnumerable<CriteriaSampleDTO> GetCriteriaSamples()
        {
            IQueryable<CriteriaSample> query;

            query = UnitOfWork.CriteriaSampleRepository.Get();

            var result = query.ToList()
                              .Select(cr => DTOFactory.Create(cr));

            return result.ToList();
        }

        // GET: api/{controller}/{action}/{id}
        // Return IndicatorSample serialized object
        // which Id == {id}
        [HttpGet]
        public HttpResponseMessage GetCriteriaSampleByID(int id)
        {
            if (id > 0)
            {
                var criteriaSample = UnitOfWork.CriteriaSampleRepository.GetByID(id);

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(criteriaSample));
            }
            else
            {
                throw new InvalidOperationException("Something happaned while trying find CriteriaSample in Database...");
            }
        }

        // GET: api/{controller}/{action}/{id}
        // Return all CriteriaSample rows that are selected from CriteriaSamples table,
        // which AreaId field are equal to id
        // id = means that is an Id column of Area table
        [HttpGet]
        public IEnumerable<CriteriaSampleDTO> GetCriteriaSampleByAreaId(int id)
        {
            var criteriaSample = UnitOfWork.CriteriaSampleRepository.Get(i => i.AreaId == id);

            var result = criteriaSample.ToList()
                                       .Select(cr => DTOFactory.Create(cr));

            return result.ToList();
        }

        // Enable to modify Criteria. Change an existing CriteriaSample
        // by id
        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage ModifyCriteriaSample([FromBody] CriteriaSampleDTO critriaSampleDTO)
        {
            var criterionSample = DTOFactory.Parse(critriaSampleDTO);
            UnitOfWork.CriteriaSampleRepository.Update(criterionSample);
            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(criterionSample));
        }


        // Enable to add new CriteriaSample
        [HttpPost]
        public HttpResponseMessage AddCriteriaSample([FromBody] CriteriaSampleDTO criteria)
        {
            var entity = DTOFactory.Parse(criteria);
            UnitOfWork.CriteriaSampleRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }

        [HttpDelete]
        [Route("api/CriteriaSamples/deleteCriteriaSample/{id}")]
        public HttpResponseMessage deleteCriteriaSample(int id)
        {
            var criteria = UnitOfWork.CriteriaSampleRepository.Get(a => a.Id == id).FirstOrDefault();

            UnitOfWork.CriteriaSampleRepository.Delete(criteria);
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

    }
}