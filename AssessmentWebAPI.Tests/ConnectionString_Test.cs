using System;
using System.Configuration;

using NUnit.Framework;
using AssessmentsWebApi;
using System.Configuration;

namespace AssessmentsWebApi.Tests
{
    [TestFixture]
    public class ConnectionString_Test
    {
        [TestCase]
        public void ConnectionString_Tests()
        {
            Assert.IsNotNull(ConfigurationManager.ConnectionStrings["AssessmentModelContext"]);
        }
    }
}
