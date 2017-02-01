using System;

using NUnit.Framework;
using Moq;

using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class AreaControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private AreaController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new AreaController(_unit);
        }


        [Test]
        public void GetAllAreaWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualAreas = _controller.GetAllArea();

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualAreas);
        }

        [Test]
        public void GetAllAreaWithCorrentInstanceOfType_Test()
        {
            // Arrange

            // Act
            var actualAreas = _controller.GetAllArea();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualAreas, typeof(AreaDTO));
        }
    }
}
