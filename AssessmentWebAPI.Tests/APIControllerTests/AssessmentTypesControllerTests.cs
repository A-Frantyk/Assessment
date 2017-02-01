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
    public class AssessmentTypesControllerTests
    {
        private ICompetenceManagerUnitOfWork _unit;
        private AssessmentTypeController _controller;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new AssessmentTypeController(_unit);
        }


        [Test]
        public void GetAllAssessmentTypesWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var actualAssessmentTypes = _controller.GetAssessmentTypes();

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualAssessmentTypes);
        }

        [Test]
        public void GetAssessmentTypeWithCorrectInstanceOfType_Test()
        {

            // Arrange

            // Act
            var actualAssessmentTypes = _controller.GetAssessmentTypes();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualAssessmentTypes, typeof(AssessmentTypeDTO));
        }
       
    }
}
