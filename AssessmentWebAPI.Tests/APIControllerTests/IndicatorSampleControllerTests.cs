using System;

using Moq;
using AssessmentModel;
using NUnit.Framework;
using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using System.Linq;
using System.Net.Http;

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class IndicatorSampleControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private IndicatorSampleController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new IndicatorSampleController(_unit);
        }


        [Test]
        public void GetAllIndicatorSamplesWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualIndicatorSamples = _controller.GetAllIndicatorSamples();

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualIndicatorSamples);
        }

        [Test]
        public void GetAllIndicatorSamplesWithCorrectInstanceOfType()
        {
            // Arrange

            // Act
            var actualIndicatorSamples = _controller.GetAllIndicatorSamples();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualIndicatorSamples, typeof(IndicatorSampleDTO));
        }
        [Test]
        public void GetIndicatorSampleByAreaIdNotNull_Test()
        {
            // Arrange
            int CriteriaId = 1;

            // Act
            var actualIndicatorSamples = _controller.GetIndicatorSampleByCriteriaSampleId(CriteriaId);

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualIndicatorSamples);
        }
        [Test]
        public void TryModifyIndicatorSample_Test()
        {
            // Arrange
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new System.Web.Http.HttpConfiguration();
            IndicatorSampleDTO indicatorSampleDTO = new IndicatorSampleDTO()
            {
                Id = 1136,
                Name = "dnvk",
                CriteriaSampleId = 41
            };

            // Act 
            HttpResponseMessage response = _controller.ModifyIndicatorSample(indicatorSampleDTO);

            // Assert
            IndicatorSampleDTO indicatorSample;
            Assert.IsTrue(response.TryGetContentValue<IndicatorSampleDTO>(out indicatorSample));
        }
    }
}
