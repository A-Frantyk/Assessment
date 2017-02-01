using System;
using System.Net.Http;
using NUnit.Framework;
using Moq;
using System.Net.Http;
using AssessmentServices.CustomDTO;
using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentModel;
using AssessmentServices.ModelsDTO;
using System.Net;
using System.Web.Http;
using System.Collections.Generic;

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class IndicatorsControllerTest
    {
        private Mock<ICompetenceManagerUnitOfWork> _unitMock;
        private IndicatorsController _controller;

        private ICompetenceManagerUnitOfWork _unit;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();

            _unitMock = new Mock<ICompetenceManagerUnitOfWork>();

        }

        //[Test]
        //public void GetAllIndicatorsWhichHasToBeNotNull_Test()
        //{
        //    // Arrange
        //    _controller = new IndicatorsController(_unit);

        //    // Act
        //    var actual = _controller.GetIndicators();

        //    // Assert

        //    CollectionAssert.AllItemsAreNotNull(actual);
        //}

        //[Test]
        //public void GetAllIndicatorsWithCorrectInstanceOfType()
        //{
        //    // Arrange
        //    _controller = new IndicatorsController(_unit);

        //    // Act
        //    var actual = _controller.GetIndicators();

        //    // Assert
        //    CollectionAssert.AllItemsAreInstancesOfType(actual, typeof(IndicatorDTO));
        //}

        [Test]
        public void FullIndicatorForExistedCriterion_CheckResponceBody()
        {
            // Arrange
            _controller = new IndicatorsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int criterionId = 20; // ExistedCriterion

            // Act
            var responce = _controller.GetFullIndicatorsOfCriterion(criterionId);

            // Assert
            IEnumerable<FullIndicator> indicators;
            Assert.IsTrue(responce.TryGetContentValue<IEnumerable<FullIndicator>>(out indicators));
        }

        [Test]
        public void FullIndicatorForNotExistedCriterion_CheckResponceBody()
        {
            // Arrange
            _controller = new IndicatorsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int criterionId = -20; // NotExistedCriterion

            // Act
            var responce = _controller.GetFullIndicatorsOfCriterion(criterionId);

            // Assert
            IEnumerable<FullIndicator> indicators;
            Assert.IsTrue(responce.TryGetContentValue<IEnumerable<FullIndicator>>(out indicators));
        }

        [Test]
        public void FullIndicatorForExistedCriterion_CheckHttpStatusCodeOK()
        {
            // Arrange
            _controller = new IndicatorsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int criterionId = 20; // ExistedCriterion

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            var actualResponce = _controller.GetFullIndicatorsOfCriterion(criterionId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        [Test]
        public void FullIndicatorForNotExistedCriterion_CheckHttpStatusCodeOK()
        {
            // Arrange
            _controller = new IndicatorsController(_unit);
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new HttpConfiguration();

            int criterionId = -20; // NotExistedCriterion

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;

            // Act
            var actualResponce = _controller.GetFullIndicatorsOfCriterion(criterionId);

            // Assert
            Assert.AreEqual(actualResponce.StatusCode, response.StatusCode);
        }

        private IndicatorDTO[] TestIndicators()
        {
            return new IndicatorDTO[]{
                new IndicatorDTO{

                },
                new IndicatorDTO{

                }
            };
        }
    }
}
