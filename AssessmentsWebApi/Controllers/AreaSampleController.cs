using AssessmentModel;
using AssessmentServices.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using AssessmentsWebApi.Providers;
using AssessmentServices.ModelsDTO;
using AssessmentsWebApi.Controllers.BaseControllers;

namespace AssessmentsWebApi.Controllers
{
    [WebApiFilter(Roles="CompetenceManager")]
    public class AreaSampleController : BaseController
    {
        //private ICompetenceManagerUnitOfWork unit = new UnitOfWork();
        public AreaSampleController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        // Return an IEnumerable<AreaSample> array
        // that contain all area rows in the Areas database table
        // GET: api/{controller}
        [HttpGet]
        public IEnumerable<AreaSampleDTO> GetAllAreaSample()
        {
            IQueryable<AreaSample> query;

            query = UnitOfWork.AreaSamlpeRepository.Get();

            var result = query.ToList()
                              .Select(s => DTOFactory.Create(s));

            return result;
        }


        // GET: api/{controller}/{action}/{id}
        // Return AreaSample serialized object
        // which Id == {id}
        [HttpGet]
        public HttpResponseMessage GetAreaSampleByID(int id)
        {
            if (id >= 0)
            {
                var area = UnitOfWork.AreaSamlpeRepository.GetByID(id);
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(area));
            }

            throw new InvalidOperationException("Invalid id definition...");
        }


        // GET: api/{controller}/{action}/{id}
        // Return all Area rows that are selected from AreaSample table,
        // which AssessmentTypeID field are equal to id
        // id = means that is an Id column of Assessments table
        [HttpGet]
        public IEnumerable<AreaSampleDTO> GetAreaSamplesByAssessmentTypeId(int id)
        {
            IQueryable<AreaSample> query = UnitOfWork.AreaSamlpeRepository.Get(i => i.AssesmentTypeId == id);

            var result = query.ToList()
                              .Select(a => DTOFactory.Create(a));

            return result.ToList();
        }


        // Enable to modify AreaSample. Change an existing AreaSample
        [HttpPut]
        public HttpResponseMessage ModifyAreaSample([FromBody] AreaSampleDTO areaSample)
        {
            var originalArea = UnitOfWork.AreaSamlpeRepository.GetByID(areaSample.Id);
            originalArea = DTOFactory.Parse(areaSample);
            UnitOfWork.AreaSamlpeRepository.Update(originalArea);

            return Request.CreateResponse(HttpStatusCode.OK);
        }


        // Enable to add new areaSample
        [HttpPost]
        public HttpResponseMessage AddAreaSample([FromBody] AreaSampleDTO areaSample)
        {
            var entity = DTOFactory.Parse(areaSample);
            UnitOfWork.AreaSamlpeRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }
        [HttpDelete]
        [Route("api/AreaSample/deleteAreaSample/{id}")]
        public HttpResponseMessage deleteAreaSample(int id)
        {
            var area = UnitOfWork.AreaSamlpeRepository.Get(a => a.Id == id).FirstOrDefault();

            UnitOfWork.AreaSamlpeRepository.Delete(area);
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
