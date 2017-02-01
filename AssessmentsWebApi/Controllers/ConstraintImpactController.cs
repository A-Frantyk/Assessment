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

using AssessmentServices.ModelsDTO;
using AssessmentsWebApi.Controllers.BaseControllers;
namespace AssessmentsWebApi.Controllers
{
    public class ConstraintImpactController : BaseController
    {
        public ConstraintImpactController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }
        [HttpGet]
        public IEnumerable<ConstraintImpactDTO> GetAllImpact()
        {
            IQueryable<ConstraintImpact> query;

            query = UnitOfWork.ConstraintImpactRepository.Get();

            var result = query.ToList()
                              .Select(s => DTOFactory.Create(s));

            return result.ToList();
        }
    }
}
