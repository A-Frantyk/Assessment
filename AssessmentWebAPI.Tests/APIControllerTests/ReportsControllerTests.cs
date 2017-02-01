using System;
using Moq;
using AssessmentModel;
using NUnit.Framework;
using AssessmentServices;
using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using AssessmentServices.CustomDTO;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Collections.Generic;
using System.Net;

namespace AssessmentWebAPI.Tests.APIControllerTests
{
    [TestFixture]
    public class ReportsControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private ReportsController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();

            _controller = new ReportsController(_unit);
        }

        [Test]
        public void GetQuaterlyReport_CheckResponceBodyWhenDatesAreCorrect()
        {
            // Arrange
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = 0; // All Assessment Type

            // Act
            var responce = _controller.GetQuaterlyReport(testStartDate, testEndDate, assessmentType);

            // Assert
            IEnumerable<QuaterlyReport> result;
            Assert.IsTrue(responce.TryGetContentValue<IEnumerable<QuaterlyReport>>(out result));
        }

        [Test]
        public void GetQuaterlyReport_CheckHttpStatusCodeWhenDatesAreCorrect()
        {
            // Arrange
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = 0; // All Assessment Type

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            var actualResponce = _controller.GetQuaterlyReport(testStartDate, testEndDate, assessmentType);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetQuaterlyReport_CheckHttpStatusCodeWhenDatesAreNotCorrect()
        {
            // Arrange
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime();
            DateTime testEndDate = new DateTime();
            int assessmentType = 0; // All Assessment Type

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            var actualResponce = _controller.GetQuaterlyReport(testStartDate, testEndDate, assessmentType);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetQuaterlyReport_CheckHttpStatusCodeWhenAssessmentTypeIsCorrect()
        {
            // Arrange
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = 1;

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            var actualResponce = _controller.GetQuaterlyReport(testStartDate, testEndDate, assessmentType);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetQuaterlyReport_CheckHttpStatusCodeWhenAssessmentTypeIsNotCorrect()
        {
            // Arrange
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = -1;

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            var actualResponce = _controller.GetQuaterlyReport(testStartDate, testEndDate, assessmentType);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }
        
        [Test]
        public void GetTopWeakAreas_CheckHttpStatusCodeWhenDatesAreCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = 1; // All Assessment Type
            int page = 0;
            int itemsPerPage = 10;

            var actualResponce = _controller.
                GetTopWeakAreas(assessmentType, testStartDate, testEndDate, page, itemsPerPage);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetTopWeakAreas_CheckHttpStatusCodeWhenDatesAreNotCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime();
            DateTime testEndDate = new DateTime();
            int assessmentType = 1; // All Assessment Type
            int page = 0;
            int itemsPerPage = 10;

            var actualResponce = _controller.
                GetTopWeakAreas(assessmentType, testStartDate, testEndDate, page, itemsPerPage);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetTopWeakAreas_CheckHttpStatusCodeWhenAssessmentTypeIsCorrect()
        {
            // Arrange

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = 2; 
            int page = 0;
            int itemsPerPage = 10;
            var actualResponce = _controller.
                GetTopWeakAreas(assessmentType, testStartDate, testEndDate, page, itemsPerPage);
            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetTopWeakAreas_CheckHttpStatusCodeWhenAssessmentTypeIsNotCorrect()
        {
            // Arrange

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            _controller = new ReportsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            DateTime testStartDate = new DateTime(2016, 3, 1);
            DateTime testEndDate = new DateTime(2016, 5, 18);
            int assessmentType = 0; 
            int page = 0;
            int itemsPerPage = 10;

            var actualResponce = _controller.
                GetTopWeakAreas(assessmentType, testStartDate, testEndDate, page, itemsPerPage);
            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }
    }
}
