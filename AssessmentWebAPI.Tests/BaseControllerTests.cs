using System;
using System.Text;
using System.Collections.Generic;

using NUnit.Framework;
using Moq;
using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentsWebApi.Controllers;
using AssessmentsWebApi.Controllers.BaseControllers;


namespace AssessmentsWebApi.Tests
{
    /// <summary>
    /// Summary description for BaseControllerTests
    /// </summary>
    [TestFixture]
    public class BaseControllerTests
    {
        Mock<ICompetenceManagerUnitOfWork> _unit;

        //ICompetenceManagerUnitOfWork unit;

        [SetUp]
        public void Setup()
        {
            _unit = new Mock<ICompetenceManagerUnitOfWork>();

            //unit = new UnitOfWork();
        }


        [Test]
        public void ConstructorShoultSetupPropWhichHasToBeNotNull_Test()
        {
            // Arrange

            // Act
            var baseController = new BaseController(_unit.Object);
            var unitOfWork = baseController.UnitOfWork as ICompetenceManagerUnitOfWork;

            // Assert
            Assert.IsInstanceOf<ICompetenceManagerUnitOfWork>(unitOfWork);
        }

        [Test]
        public void ConstructorShoultSetupPropWithCorrectInstanceOfType_Test()
        {
            // Arrange

            // Act
            var baseController = new BaseController(_unit.Object);
            var unitOfWork = baseController.UnitOfWork as ICompetenceManagerUnitOfWork;

            // Assert
            Assert.IsInstanceOf<ICompetenceManagerUnitOfWork>(unitOfWork);
        }
    }
}
