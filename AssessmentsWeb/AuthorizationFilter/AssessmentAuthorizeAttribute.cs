using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AssessmentsWebApi.Providers;
using AssessmentServices.UnitOfWork;

namespace AssessmentsWeb.AuthorizationFilter
{
    public class AssessmentAuthorizeAttribute: AuthorizeAttribute
    {
        private ICompetenceManagerUnitOfWork unit;
 
        private string[] allowedRoles = new string[] { };

        public AssessmentAuthorizeAttribute()
        {
            unit = DependencyResolver.Current.GetService<ICompetenceManagerUnitOfWork>();
        }

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (!String.IsNullOrEmpty(base.Roles))
            {
                allowedRoles = base.Roles.Split(new char[] { ',' });
                for (int i = 0; i < allowedRoles.Length; i++)
                {
                    allowedRoles[i] = allowedRoles[i].Trim();
                }
            }

            return Role(httpContext);
        }
        private bool Role(HttpContextBase httpContext)
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