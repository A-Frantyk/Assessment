using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;

namespace AssessmentsWebApi.Controllers.BaseControllers
{
    public class BaseController : ApiController
    {
        private ICompetenceManagerUnitOfWork  _unit;
        private DTOFactory   _factory;

        public BaseController(ICompetenceManagerUnitOfWork unit)
        {
            //_factory = new DTOFactory(_unit);
            _unit = unit;
            _factory = new DTOFactory(_unit);
        }

        public ICompetenceManagerUnitOfWork UnitOfWork
        {
            get
            {
                //if (_unit == null)
                //{
                //    _unit = new UnitOfWork();
                //}
                return _unit;
            }
        }

        public DTOFactory DTOFactory
        {
            get
            {
                //if(_factory == null)
                //{
                //    _factory = new DTOFactory(_unit);
                //}
                return _factory;
            }
            set
            {
                _factory = value;
            }
        }

    }
}
