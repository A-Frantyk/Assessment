using System;

using NUnit.Framework;
using Moq;

using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;

namespace AssessmentWebAPI.Tests.APIControllerTests
{
    class ConstraintImpactsTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private ConstraintImpactController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new ConstraintImpactController(_unit);
        }
        [Test]
        public void GetAllImpactsWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualImpacts = _controller.GetAllImpact();

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualImpacts);
        }
        [Test]
        public void GetAllImpactsWithCorrectInstanceOfType_Testst()
        {
            // Arrange

            // Act
            var actualImpacts = _controller.GetAllImpact();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualImpacts, typeof(ConstraintImpactDTO));
        }
    }
}
