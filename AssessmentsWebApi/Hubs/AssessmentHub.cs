using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading.Tasks;

namespace AssessmentsWebApi.Hubs
{
    [HubName("AssessmentHub")]
    public class AssessmentHub : Hub
    {

    }
}