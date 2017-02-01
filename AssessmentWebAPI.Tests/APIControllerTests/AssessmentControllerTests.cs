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
using System.Collections;
using System.Collections.Generic;
using System.Net;


namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class AssessmentControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private AssessmentsController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new AssessmentsController(_unit);
        }

        [Test]
        public void GetStrongAreas_CheckHttpStatusCodeWhenAssessmentIdIsCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            _controller = new AssessmentsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 3;
            var actualResponce = _controller.GetStrongAreas(assessmentId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }


        [Test]
        public void GetStrongAreas_CheckHttpStatusCodeWhenAssessmentIdIsNotCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            _controller = new AssessmentsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 0;
            var actualResponce = _controller.GetStrongAreas(assessmentId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetWeakAreas_CheckHttpStatusCodeWhenAssessmentIdIsCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            _controller = new AssessmentsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 3;
            var actualResponce = _controller.GetWeakAreas(assessmentId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetWeakAreas_CheckHttpStatusCodeWhenAssessmentIdIsNotCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            _controller = new AssessmentsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 0;
            var actualResponce = _controller.GetWeakAreas(assessmentId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

    }
}
