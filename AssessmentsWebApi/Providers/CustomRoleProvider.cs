using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentsWebApi.Controllers;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Util;
using AssessmentServices.ModelsDTO;
using AssessmentServices.Factory;

namespace AssessmentsWebApi.Providers
{
    public static class CustomRoleProvider
    {
        private static string login;
        public static string currentUser;
        //private static HttpRequestMessage request = new HttpRequestMessage();
       
        private enum Roles 
        {
            CompetenceManager,
            Coordinator,
            Unknown
        };
        [HttpGet]
        public static string UserValidation(ICompetenceManagerUnitOfWork unit)
        {
            login = System.Web.HttpContext.Current.Request.LogonUserIdentity.Name.ToString();
            if (String.IsNullOrEmpty(login)) 
            {
                login = Roles.Unknown.ToString();
            }
            var indicator = (unit.UserRepository.Get(x => x.Login == login)
                           .FirstOrDefault());
           
            if (indicator == null)
            {
                var user = new UserDTO();
                user.Login = login;
                user.Name = login;
                user.IsCompetenceManager = false;
                user.IsCoordinator = false;
                 
                DTOFactory dto = new DTOFactory(unit); // Added as DTOFactory is changed
                User converter  = dto.Parse(user);

                unit.UserRepository.Insert(converter);
                currentUser = login;
                return login;
            }
            currentUser = indicator.Name;
            return login;
        }

        public static string GetUserId(ICompetenceManagerUnitOfWork unit) {

            login = System.Web.HttpContext.Current.Request.LogonUserIdentity.Name.ToString();
            var indicator = (unit.UserRepository.Get(x => x.Login == login)
                               .FirstOrDefault());

            return indicator.Id.ToString();
        }

        public static string GetRolesForUser(ICompetenceManagerUnitOfWork unit)
        {
            using (ICompetenceManagerUnitOfWork db = new UnitOfWork())
            {
                string clogin = UserValidation(unit);
                string role = null;
                var user = (from u in db.UserRepository.Get(u => u.Login == clogin)
                            select u).FirstOrDefault();

                if (user.IsCompetenceManager == true)
                {
                    role = Roles.CompetenceManager.ToString();
                }
                else if (user.IsCoordinator == true)
                {
                    role = Roles.Coordinator.ToString();
                }

                return role;

            }
        }

    }
}