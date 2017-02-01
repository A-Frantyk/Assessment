using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using Newtonsoft.Json.Serialization;
using Microsoft.Practices.Unity;
using AssessmentServices.UnityDI;
using System.Web.Http.Cors;
using System.Web.Http;

namespace AssessmentsWebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Create UnityContainer and configure Dependency Resolver
            var unityContainer = new UnityContainer();
            config.DependencyResolver = new UnityResolver(unityContainer);

            // CORS
            //config.EnableCors(new EnableCorsAttribute("http://localhost:54440", "Origin,X-Requested-With,Content-Type,Accept", "GET,POST,PUT,PATCH,DELETE,SEARCH"));

            //Register all dependencies
            ContainerBootstrapper.RegisterTypes(unityContainer);

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApiAction",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional });

            config.Routes.MapHttpRoute(
                name: "DefaultApiActionTwoParam",
                routeTemplate: "api/{controller}/{action}/{sd}/{fd}",
                defaults: new { controller = "reports", action = "GetQuaterlyReport", sd = RouteParameter.Optional, fd = RouteParameter.Optional });

            // Routing

            // Enable routing for AreaSampleController using GetAreaSampleById method
            //config.Routes.MapHttpRoute(
            //    name: "AreaSampleById",
            //    routeTemplate: "api/{controller}/{action}/{id}",
            //    defaults: new { controller = "AreaSample", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "QuarterlyReport",
            //    routeTemplate: "api/{controller}/{action}/{id}/{date}",
            //    defaults: new { id = RouteParameter.Optional, date = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "AreaSample",
            //    routeTemplate: "api/areaSample/{id}",
            //    defaults: new { controller = "AreaSample", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "Assessments",
            //    routeTemplate: "api/assessments/{id}",
            //    defaults: new { controller = "assessments", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "CriteriaSample",
            //    routeTemplate: "api/criteriaSample/{id}",
            //    defaults: new { controller = "criteriaSample", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "IndicatorSample",
            //    routeTemplate: "api/indicatorSample/{id}",
            //    defaults: new { controller = "indicatorSample", action = "GET", id = RouteParameter.Optional});

            //config.Routes.MapHttpRoute(
            //    name: "IndicatorScore",
            //    routeTemplate: "api/indicatorScore/{id}",
            //    defaults: new { controller = "indicatorScore", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "assessmentType",
            //    routeTemplate: "api/assessmentType/{id}",
            //    defaults: new { controller = "assessmentType", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "users",
            //    routeTemplate: "api/users/{id}",
            //    defaults: new { controller = "Users", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "Criteria",
            //    routeTemplate: "api/criteria/{id}",
            //    defaults: new { controller = "Criteria", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "Area",
            //    routeTemplate: "api/area/{id}",
            //    defaults: new { controller = "Area", action = "GET", id = RouteParameter.Optional });

            //config.Routes.MapHttpRoute(
            //    name: "Indicators",
            //    routeTemplate: "api/indicators/{id}",
                //defaults: new { controller = "Indicators", action = "GET", id = RouteParameter.Optional });

            // Enable JSON format returns
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();                    
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();  // send json keys into camelCase style
        }
    }
}
