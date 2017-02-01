using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

using AssessmentsWebApi.Filters;
using System.Data.Entity.Core;

using System.Net;

using System.Data.Entity.Infrastructure;

namespace AssessmentsWebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // Enable json serializing fields that may contains 'null' value &
            // fields with default value
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings = new Newtonsoft.Json.JsonSerializerSettings()
            {
                DefaultValueHandling = Newtonsoft.Json.DefaultValueHandling.Include,
                NullValueHandling = Newtonsoft.Json.NullValueHandling.Include
            };

            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            GlobalConfiguration.Configuration.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);

            // Exception filters registration. Unhandled exceptions of all registered types below
            // will be handled during filtering. 
            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(ProviderIncompatibleException), 
                statusCode: HttpStatusCode.NotFound, 
                message: "No connection with database. Please, try again later."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(EntityException),
                statusCode: HttpStatusCode.NotFound,
                message: "No connection with database. Please, try again later."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(DbUpdateConcurrencyException), 
                statusCode: HttpStatusCode.InternalServerError, 
                message: "Error occured while updating data."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(EntityCommandExecutionException),
                statusCode: HttpStatusCode.NotFound,
                message: "No connection with database. Please, try again later."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(UpdateException),
                statusCode: HttpStatusCode.InternalServerError,
                message: "Error occured while updating data."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(HttpRequestValidationException),
                statusCode: HttpStatusCode.BadRequest,
                message: "Last request validation failed."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(HttpResponseException),
                statusCode: HttpStatusCode.BadRequest,
                message: "Something wrong with the last request."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(HttpException),
                statusCode: HttpStatusCode.BadRequest,
                message: "Http request failed."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(InvalidOperationException),
                statusCode: HttpStatusCode.BadRequest,
                message: "Operation Invalid."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(KeyNotFoundException),
                statusCode: HttpStatusCode.NotFound,
                message: "Requested entity missing in the database."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(NullReferenceException),
                statusCode: HttpStatusCode.NoContent,
                message: "No data in request."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(NotImplementedException),
                statusCode: HttpStatusCode.InternalServerError,
                message: "Support for this operation is not implemented."));

            GlobalConfiguration.Configuration.Filters.Add(new GlobalExeptionFilterAttribute(
                exceptionType: typeof(Exception),
                statusCode: HttpStatusCode.InternalServerError));

        }
    }
}
