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
    public class RecommendationsControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private RecommendationsController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new RecommendationsController(_unit);
        }

        [Test]
        public void GetAllCriteriaByAssessmentId_CheckHttpStatusCodeWhenAssessmentIdIsCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            _controller = new RecommendationsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 1124;
            var actualResponce = _controller.GetAllCriteriaByAssessmentId(assessmentId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetAllCriteriaByAssessmentId_CheckHttpStatusCodeWhenAssessmentIdIsNotCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            _controller = new RecommendationsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 0;
            var actualResponce = _controller.GetAllCriteriaByAssessmentId(assessmentId);

            // Assert
            Assert.AreNotEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetAllRecommendations_CheckHttpStatusCodeWhenAssessmentIdIsCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            _controller = new RecommendationsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 1124;
            var actualResponce = _controller.GetAllRecommendations(assessmentId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void GetAllRecommendations_CheckHttpStatusCodeWhenAssessmentIdIsNotCorrect()
        {
            // Arrange
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            // Act
            _controller = new RecommendationsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int assessmentId = 0;
            var actualResponce = _controller.GetAllRecommendations(assessmentId);

            // Assert
            Assert.AreNotEqual(actualResponce.StatusCode, response.StatusCode);
        }
    }
}
