using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AssessmentServices.UnitOfWork;

namespace AssessmentsWebApi.Providers
{
    public class WebApiFilter : AuthorizeAttribute
    {
        private string[] allowedRoles = new string[] { };
       

        protected override bool IsAuthorized(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            if (!String.IsNullOrEmpty(base.Roles))
            {
                allowedRoles = base.Roles.Split(new char[] { ',' });
                for (int i = 0; i < allowedRoles.Length; i++)
                {
                    allowedRoles[i] = allowedRoles[i].Trim();
                }
            }

            return Role();

        }
        private bool Role()
        {
            using (ICompetenceManagerUnitOfWork unit = new UnitOfWork())
            {
                if (allowedRoles.Length > 0)
                {

                    for (int i = 0; i < allowedRoles.Length; i++)
                    {
                        if (CustomRoleProvider.GetRolesForUser(unit) == allowedRoles[i])
                            return true;
                    }

                }
                return false;
            }
        }

    }
}