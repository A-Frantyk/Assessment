using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AssessmentsWeb
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "AssessmentForm",
                url: "{controller}/AssessmentForm/{id}",
                defaults: new { controller = "Home" }
            );

            //routes.MapRoute(
            //    name: "DefaultApp",
            //    url: "{controller}/{action}",
            //    defaults: new { contrller = "Home", action = "Area" });
        }
    }
}
