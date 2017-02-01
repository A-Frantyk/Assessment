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
using Microsoft.AspNet.SignalR;
using AssessmentsWebApi.Hubs;
using AssessmentsWebApi.Pagination;

namespace AssessmentsWebApi.Controllers
{
    public class UsersController : BaseController
    {
        //private ICompetenceManagerUnitOfWork unit = new UnitOfWork();
        public UsersController(IUnitOfWork unit)
            : base(unit) { }

        // Return an IEnumerable<User> array
        // that contain all user rows in the User database table
        // GET: api/{controller}
        [HttpGet]
        public IEnumerable<UserDTO> GetAllUsers()
        {
            IQueryable<User> query;

            query = UnitOfWork.UserRepository.Get();

            var result = query.ToList()
                              .Select(s => DTOFactory.Create(s));

            return result.ToList();
        }

        [HttpGet]
        public HttpResponseMessage GetUsers(int page, int itemsPerPage)
        {

            var query = UnitOfWork.UserRepository.Get().ToList().Select(s => DTOFactory.Create(s));

            if (query != null)
            {
                List<UserDTO> Users = query.ToList();
                Paging<UserDTO> p = new Paging<UserDTO>(Users, page, itemsPerPage);
                return Request.CreateResponse(HttpStatusCode.OK, p.getContent());
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }
        // GET: api/{controller}/{action}/{id}
        // Return User serialized object
        // which Id == {id}
        [HttpGet]
        public HttpResponseMessage GetUserByID(int id)
        {
            var user = UnitOfWork.UserRepository.GetByID(id);
            if (user != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(user));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "User not found in database.");
            }
        }

        [HttpGet]
        [Route("api/users/GetCurrentUser/")]
        public HttpResponseMessage GetCurrentUser()
        {
            string login = System.Web.HttpContext.Current.Request.LogonUserIdentity.Name.ToString();
            var indicator = (UnitOfWork.UserRepository.Get(x => x.Login == login)
                              .FirstOrDefault());

            var _context = GlobalHost.ConnectionManager.GetHubContext<AssessmentHub>();
            _context.Clients.All.currentUser(indicator.Name);

            return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(indicator));
        }

        [HttpPost]
        public HttpResponseMessage AddUser([FromBody]UserDTO userDTO)
        {
            var entity = DTOFactory.Parse(userDTO);

            if (entity == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Could not parse an User");
            }

            UnitOfWork.UserRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));

        }
        [HttpPut]
        public HttpResponseMessage ModifyUsers([FromBody] UserDTO user)
        {
            var originalUser = DTOFactory.Parse(user);
            UnitOfWork.UserRepository.Update(originalUser);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

    }
}





