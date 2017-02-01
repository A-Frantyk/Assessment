using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;
using NLog;

namespace AssessmentsWebApi.Filters
{
    class GlobalExeptionFilterAttribute : ExceptionFilterAttribute
    {
        private Type _exceptionType;
        private  HttpStatusCode _statusCode;
        private  string _message = string.Empty;

        public GlobalExeptionFilterAttribute(Type exceptionType, HttpStatusCode statusCode)
        {
            _exceptionType = exceptionType;
            _statusCode = statusCode;
        }

        public GlobalExeptionFilterAttribute(Type exceptionType, HttpStatusCode statusCode, string message) : this(exceptionType, statusCode)
        {
            _message = message;
        }

        public override void OnException(HttpActionExecutedContext context)
        {
            if(context.Exception.GetType() == _exceptionType)
            {
                Logger logger = LogManager.GetCurrentClassLogger();
                logger.Error(context.Exception, _message);

                context.Response = new HttpResponseMessage
                {
                    StatusCode = _statusCode,
                    Content = new StringContent(_message)
                };
            }
        }
    }
}
