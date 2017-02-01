using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Microsoft.Practices.Unity;
using AssessmentServices.UnityDI;

namespace AssessmentsWeb
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            //Create UnityContainer and configure Dependency Resolver
            var unityContainer = new UnityContainer();
            DependencyResolver.SetResolver(new MvcUnityResolver(unityContainer));

            //Register all dependencies
            ContainerBootstrapper.RegisterTypes(unityContainer);

        }
    }
}
