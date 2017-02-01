using System;
using System.Text;
using System.Collections.Generic;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using AssessmentServices.UnitOfWork;
using AssessmentServices.UnityDI;
using AssessmentServices.Tests.FactoryForTests;
using AssessmentModel;
using Moq;
using NUnit.Framework;
using AssessmentServices.CustomDTO;

namespace AssessmentServices.Tests.DTOFactoryTests
{
    /// <summary>
    /// Summary description for CreateMethodsTest
    /// </summary>
    [TestFixture]
    public class CreateMethodsTest
    {
        Mock<ICompetenceManagerUnitOfWork> mock = null;
        DTOFactory factory = null;
        private ICompetenceManagerUnitOfWork _unit;

        [SetUp]
        public void SetUp()
        {
            mock = new Mock<ICompetenceManagerUnitOfWork>();
            factory = new DTOFactory(mock.Object);
            _unit = new AssessmentServices.UnitOfWork.UnitOfWork();
        }

        #region Create DTOModels

        [Test]
        public void CreateAssessmentDTOWhichIsHasToBeNotNull_Test()
        {
            // Arrange 
            IList<User> experts = new List<User>();
            for (int i = 0; i < 5; i++)
            {
                experts.Add(FactoryForTest.GetUser(id: i + 1, isCompetenceManager: true, isCoordinator: true));
            }

            var assessment = FactoryForTest.GetAssessment(experts: experts);

            // Act 
            AssessmentDTO assessmentDTO = factory.Create(assessment);

            // Assert 
            Assert.IsNotNull(assessmentDTO);
        }

        [Test]
        public void CreateAreaSampleDTOWhichHasToBeNotNull_Test()
        {
            // Arrange
            var areaSample = FactoryForTest.GetAreaSample();

            // Act
            var areaSampleDTO = factory.Create(areaSample);

            // Assert
            Assert.IsNotNull(areaSampleDTO);
        }

        [Test]
        public void CreateAssessmentTypeDTOWhichHasToBeNotNull_Test()
        {
            // Arrange
            var assessmentType = FactoryForTest.GetAssessmentType();

            // Act
            var assessmentTypeDTO = factory.Create(assessmentType);

            // Assert
            Assert.IsNotNull(assessmentTypeDTO);
        }

        [Test]
        public void CreateAssessmentTypeWithCorrectIdProperty()
        {
            // Arrange
            var assessmentType = FactoryForTest.GetAssessmentType(id: 1);

            // Act
            var assessmentTypeDTO = factory.Create(assessmentType);

            // Assert
            Assert.AreNotEqual(0, assessmentTypeDTO.Id);
        }

        [Test]
        public void CreateIndicatorDTOWichHasToBeNotNull_Test()
        {
            // Arrange
            var indicator = FactoryForTest.GetIndicator();

            // Act
            var indicatorDTO = factory.Create(indicator);

            // Assert
            Assert.IsNotNull(indicatorDTO);
        }

        [Test]
        public void CreateIndocatorDTOWithEqualIdProperty()
        {
            // Arrange
            var indicator = FactoryForTest.GetIndicator(id: 1);

            // Act
            var indicatorDTO = factory.Create(indicator);

            // Assert
            Assert.AreEqual(indicator.Id, indicatorDTO.Id);
        }

        [Test]
        public void CreateCriteriaDTOWhichHasToBeNotNull_Test()
        {
            // Arrange
            var criterion = FactoryForTest.GetCriterion();

            // Act
            var criterionDTO = factory.Create(criterion);

            // Assert
            Assert.IsNotNull(criterionDTO);
        }

        [Test]
        public void CreateCriteriaDTOWithCoorectIdProperty_Test()
        {
            // Arrange
            var criterion = FactoryForTest.GetCriterion(id: 1);

            // Act
            var criterionDTO = factory.Create(criterion);

            // Assert
            Assert.AreEqual(criterion.Id, criterionDTO.Id);
        }

        [Test]
        public void CreateAreaDTOWhichHasToBeNotNull_Test()
        {
            // Arrange
            var area = FactoryForTest.GetArea();

            // Act
            var areaDTO = factory.Create(area);

            // Assert
            Assert.IsNotNull(areaDTO);
        }

        [Test]
        public void CreateAreaDTOWithCorrectIdProperty_Test()
        {
            // Arrange
            var area = FactoryForTest.GetArea(id: 1);

            // Act
            var areaDTO = factory.Create(area);

            // Assert
            Assert.AreEqual(area.Id, areaDTO.Id);
        }

        [Test]
        public void CreateConstraintImpactDTOWhichHasToBeNotNull_Test()
        {
            // Arrange
            var constraintImpact = FactoryForTest.GetConstraintImpact();

            // Act
            var constraintImpactDTO = factory.Create(constraintImpact);

            // Assert
            Assert.IsNotNull(constraintImpactDTO);
        }

        [Test]
        public void CreateConstraintImpactDTOWithCorrectIdProperty_Test()
        {
            // Arrange
            var constraintImpact = FactoryForTest.GetConstraintImpact(id: 1);

            // Act
            var constraintImpactDTO = factory.Create(constraintImpact);

            // Assert
            Assert.AreEqual(constraintImpact.Id, constraintImpactDTO.Id);
        }

        [Test]
        public void ConstrImpactWeightPropShouldBeGreaterThatZero_Test()
        {
            // Arrange
            var constraintImpact = FactoryForTest.GetConstraintImpact(id: 1, weight: 100);

            // Act
            var constraintImpactDTO = factory.Create(constraintImpact);

            // Assert
            Assert.True(constraintImpactDTO.Weight > 0);
        }

        #endregion

        #region Create Custom DTO

        [Test]
        public void CreateFullIndicator_TestToBeNotNull()
        {
            // Arrange
            var indicator = _unit.IndicatorRepository.GetByID(1); // FactoryForTest.GetIndicator(10, 1, 2);

            // Act
            var fullIndicator = factory.CreateFullIndicator(indicator);

            // Assert
            Assert.IsNotNull(fullIndicator);
        }

        [Test]
        public void CreateFullIndicator_TestCorrectInstanceOfType()
        {
            // Arrange
            var indicator = _unit.IndicatorRepository.GetByID(1);  // FactoryForTest.GetIndicator(10, 1, 2);

            // Act
            var fullIndicator = factory.CreateFullIndicator(indicator);

            // Assert
            Assert.IsInstanceOf(typeof(FullIndicator), fullIndicator);
        }

        [Test]
        public void CreateFullIndicator_TestCorrectIdProperty()
        {
            // Arrange
            var indicator = _unit.IndicatorRepository.GetByID(1); 

            // Act
            var fullIndicator = factory.CreateFullIndicator(indicator);

            // Assert
            Assert.AreEqual(indicator.Id, fullIndicator.IndicatorId);
        }

        [Test]
        public void CreateFullIndicator_TestToBeNull()
        {
            // Arrange
            var indicator = _unit.IndicatorRepository.GetByID(-1); // FactoryForTest.GetIndicator(10, 1, 2);

            // Act
            var fullIndicator = factory.CreateFullIndicator(indicator);

            // Assert
            Assert.IsNull(fullIndicator);
        }

        #endregion
    }
}
