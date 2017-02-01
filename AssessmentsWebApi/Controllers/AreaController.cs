using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using AssessmentModel;

namespace AssessmentsWebApi.Controllers
{
    public class AreaController : BaseController
    {
        public AreaController(ICompetenceManagerUnitOfWork unit)
            : base(unit)
        {

        }

        [HttpGet]
        public IEnumerable<AreaDTO> GetAllArea()
        {
            IQueryable<Area> query;

            query = UnitOfWork.AreaRepository.Get();

            var result = query.ToList()
                              .Select(a => DTOFactory.Create(a));

            return result.ToList();
        }

        [HttpGet]
        public HttpResponseMessage GetAreaById(int id)
        {
            if (id > 0)
            {
                var area = UnitOfWork.AreaRepository.GetByID(id);

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(area));
            }

            throw new InvalidOperationException("Something happaned while trying find an Area in database by id...");
        }

        [HttpGet]
        public HttpResponseMessage GetAreaByAssessmentId(int id)
        {
            if (id > 0)
            {
                var area = UnitOfWork.AreaRepository.Get(i => i.AssesmentId == id).FirstOrDefault();

                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(area));
            }

            throw new InvalidOperationException("Invalid id definition, id: {id}...");
        }

        [HttpGet]
        public IEnumerable<AreaDTO> GetAllAreaOfAssessment(int id)
        {
            if (id != 0)
            {
                IQueryable<Area> query;

                query = UnitOfWork.AreaRepository.Get(i => i.AssesmentId == id);

                var result = query.ToList()
                                  .Select(a => DTOFactory.Create(a));

                return result.ToList();
            }

            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        [AcceptVerbs("PUT", "PATCH")]
        public HttpResponseMessage EditArea([FromBody] AreaDTO areaDTO)
        {
            var area = DTOFactory.Parse(areaDTO);
            UnitOfWork.AreaRepository.Update(area);
            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(area));
        }
    }
}
