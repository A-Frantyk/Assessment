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
    public class CriteriaSampleControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private CriteriaSampleController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new CriteriaSampleController(_unit);
        }


        [Test]
        public void GetAllCriteriaSamplesWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualCriteriaSamples = _controller.GetCriteriaSamples();

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualCriteriaSamples);
        }

        [Test]
        public void GetAllCriteriaSampleWithCorrectInstanceOfType_Test()
        {
            // Arrange

            // Act
            var actualCriteriaSamples = _controller.GetCriteriaSamples();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualCriteriaSamples, typeof(CriteriaSampleDTO));
        }
        [Test]
        public void GetCriteriaSampleByAreaIdNotNull_Test()
        {
            // Arrange
            int AreaId = 1;

            // Act
            var actualCriteriaSamples = _controller.GetCriteriaSampleByAreaId(AreaId);

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualCriteriaSamples);
        }
        [Test]
        public void TryModifyCriteriaSample_Test()
        {
            // Arrange
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new System.Web.Http.HttpConfiguration();
            CriteriaSampleDTO criteriaSampleDTO = new CriteriaSampleDTO()
            {
                Id = 4,
                Name = "Criterion 2 of Environment",
                AreaId = 2,
                ScopeConstraintImpactId = 2,
                TimeConstraintImpactId = 1,
                QualityConstraintImpactId = 1,
                CostConstraintImpactId = 1
            };

            // Act 
            HttpResponseMessage response = _controller.ModifyCriteriaSample(criteriaSampleDTO);

            // Assert
            CriteriaSampleDTO criteriaSample;
            Assert.IsTrue(response.TryGetContentValue<CriteriaSampleDTO>(out criteriaSample));
        }
    }
}
