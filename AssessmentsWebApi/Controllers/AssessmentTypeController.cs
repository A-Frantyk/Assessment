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

using AssessmentsWebApi.Controllers.BaseControllers;

namespace AssessmentsWebApi.Controllers
{
    public class AssessmentTypeController : BaseController
    {
        //private AssessmentModelContext db = new AssessmentModelContext();
        //private IAssessmentTypeRepository assessmentTypeRepository = new AssessmentTypeRepository(new AssessmentModelContext());

        // ICompetenceManagerUnitOfWork unit = new UnitOfWork();
        public AssessmentTypeController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

        // GET api/assessmentType
        //public IEnumerable<AssessmentTypeDTO> GetAssessmentTypes()
        public IEnumerable<AssessmentTypeDTO> GetAssessmentTypes()
        {
            IQueryable<AssessmentType> query;

            query = UnitOfWork.AssessmentTypeRepository.Get();

            var result = query.ToList()
                              .Select(a => DTOFactory.Create(a));

            return result.ToList();
        }

        // GET api/assessmentType/5
        public HttpResponseMessage GetAssessmentTypeById(int id)
        {
            if (id > 0)
            {
                var assessmentType = UnitOfWork.AssessmentTypeRepository.GetByID(id);

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(assessmentType));
            }

            throw new InvalidOperationException("Invalid id definition...");
        }
        [HttpPut]
        public HttpResponseMessage ModifyTypes([FromBody] AssessmentTypeDTO type)
        {
            var originalType = DTOFactory.Parse(type);
            UnitOfWork.AssessmentTypeRepository.Update(originalType);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/assessmentType
        [HttpPost]
        public HttpResponseMessage PostAssessmentType([FromBody] AssessmentTypeDTO assessmenttype)
        {
            var entity = DTOFactory.Parse(assessmenttype);
            UnitOfWork.AssessmentTypeRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }

        //  DELETE api/assessmentType/5
        [HttpDelete]
        public HttpResponseMessage DeleteAssessmentType([FromBody] AssessmentTypeDTO assessmenttype)
        {
            throw new NotImplementedException();
        }
    }
}