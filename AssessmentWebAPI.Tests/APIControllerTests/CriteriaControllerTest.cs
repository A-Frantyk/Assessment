using System;

using NUnit.Framework;
using Moq;
using AssessmentServices.CustomDTO;
using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.ModelsDTO;

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class CriteriaControllerTest
    {
        private ICompetenceManagerUnitOfWork _unit;
        private CriteriaController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new CriteriaController(_unit);
        }


        [Test]
        public void GetAllCriteriaWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualCriteria = _controller.GetCriteria();

            //Assert
            CollectionAssert.AllItemsAreNotNull(actualCriteria);
        }

        [Test]
        public void GetAllCriteriaWithCorrectInstanceOfType_Test()
        {

            // Arrange

            // Act
            var actualCriteria = _controller.GetCriteria();

            //Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualCriteria, typeof(CriterionDTO));
        }

        [Test]
        public void GetAllCriteriaOfAssessmentWhichHasToBeNotNull_Test()
        {
            //// Arrange
            //int assessmentId = 3;

            //// Act
            //var actualCriteriaOfAssessment = _controller.GetAllCriteriaOfAssessment(assessmentId);

            ////Assert
            //CollectionAssert.AllItemsAreNotNull(actualCriteriaOfAssessment);
        }

        [Test]
        public void GetAllCriteriaOfAssessmentWithCorrectInstanceOfType_Test()
        {

            // Arrange
            int assessmentId = 3;

            // Act
            var actualCriteriaOfAssessment = _controller.GetAllCriteriaOfAssessment(assessmentId);

            //Assert
            //CollectionAssert.AllItemsAreInstancesOfType(actualCriteriaOfAssessment, typeof(CriteriaWithScoreLeft));
        }
    }
}
