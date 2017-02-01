using System;

using NUnit.Framework;
using Moq;

using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class IndicatorScoreControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private IndicatorScoreController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new IndicatorScoreController(_unit);
        }

        [Test]
        public void GetAllIndicatorScoresWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualIndicatorScores = _controller.GetIndicatorScores();

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualIndicatorScores);
        }

        [Test]
        public void GetAllIndicatorScoresWithCorrectInstanceOfType()
        {
            // Arrange

            // Act
            var actualIndicatorScores = _controller.GetIndicatorScores();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualIndicatorScores, typeof(IndicatorScoreDTO));
        }
    }
}
