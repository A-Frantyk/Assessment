
using System;

using NUnit.Framework;
using Moq;

using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;

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
    }
}
