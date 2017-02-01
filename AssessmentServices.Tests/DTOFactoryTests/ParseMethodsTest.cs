using System;
using System.Text;
using System.Collections.Generic;

using AssessmentModel;
using AssessmentServices.ModelsDTO;
using AssessmentServices.Factory;
using AssessmentServices.UnitOfWork;
using Moq;
using NUnit.Framework;

namespace AssessmentServices.Tests.DTOFactoryTests
{
    /// <summary>
    /// Summary description for ParseMethodsTest
    /// </summary>
    [TestFixture]
    public class ParseMethodsTest
    {
        private Mock<ICompetenceManagerUnitOfWork> mock = null; // We temporary don't mock any objects, because for some reasons the are NullReferenceException 
                                                                // are thrown when we try to get mock.Object property

        private ICompetenceManagerUnitOfWork _unit;             // Insted of mock, we use explicet realization of ICompetenceManagerUnitOfWork object

        private DTOFactory factory = null;

        [SetUp]
        public void SetUp()
        {
            _unit = new UnitOfWork.UnitOfWork();

            mock = new Mock<ICompetenceManagerUnitOfWork>();
            factory = new DTOFactory(_unit);
        }

        [Test]
        public void ParseAssessmentWhichHasToBeNotNull_Test()
        {
            // Arrange
            AssessmentDTO assessmentDTO = new AssessmentDTO()
            {
                Id = 0,
                Name = "Test name",
                Description = "Test Description",
                URL = "Test URL",
                AssessmentTypeId = 1,
                ScopeProjectConstraintId = 1,
                TimeProjectConstraintId = 1,
                QualityProjectConstraintId = 1,
                UnitId = 1,
                ExpertTime = 10m,
                Comment = "Test Comment",
                FinishDate = DateTime.MaxValue,
                StartDate = DateTime.MinValue,
                Project = "Test Project",
                Unit = "Test unit",
                Version = "Test version",
                Improvements = 3,
                CoordinatorTime = 10m,
                CostProjectConstraintId = 1
            };

            // Act 
            Assessment assessment = factory.Parse(assessmentDTO);

            // Assert
            Assert.IsNotNull(assessment);
        }

        [Test]
        public void ParseAssessmentWithCorrectIdProperty_Test()
        {
            // Arrange
            AssessmentDTO assessmentDTO = new AssessmentDTO()
            {
                Id = 3,
                Name = "Test name",
                Description = "Test Description",
                URL = "Test URL",
                AssessmentTypeId = 1,
                ScopeProjectConstraintId = 1,
                TimeProjectConstraintId = 1,
                QualityProjectConstraintId = 1,
                UnitId = 1,
                ExpertTime = 10m,
                Comment = "Test Comment",
                FinishDate = DateTime.MaxValue,
                StartDate = DateTime.MinValue,
                Project = "Test Project",
                Unit = "Test unit",
                Version = "Test version",
                Improvements = 3,
                CoordinatorTime = 10m,
                CostProjectConstraintId = 1
            };

            // Act 
            Assessment assessment = factory.Parse(assessmentDTO);

            // Assert
            Assert.True(assessment.Id > 0);
        }

        [Test]

        [ExpectedException(typeof(NullReferenceException))]
        public void ParseAssessmentParameterNull_Test()
        {
            // Arrange
            AssessmentDTO assessmentDTO = null;

            // Act

            Assessment assessment = factory.Parse(assessmentDTO);

            // Assert
        }

        [Test]
        public void ParseAreaSample_Test()
        {
            // Arrange
            AreaSampleDTO areaSampleDTO = new AreaSampleDTO()
            {
                Id = 0,
                Name = "Test Name",
                Description = "Descr",
                AssesmentTypeId = 1
            };

            // Act
            var areaSample = factory.Parse(areaSampleDTO);

            // Assert
            Assert.IsNotNull(areaSample);
        }
        
        ///////////////////////////

        //[Test]
        //public void ParseAssessmentEditWithExperts_Test()
        //{
        //    // Arrange
        //    AssessmentDTO assessmentDTO = new AssessmentDTO()
        //    {
        //        Id = 3,
        //        AssessmentTypeId = 1,
        //        Experts = new List<UserDTO>()
        //    };

        //    assessmentDTO.Experts.Add(new UserDTO() { Id = 3, Login = "Login1", Name = "Name1", IsCompetenceManager = false, IsCoordinator = true });
        //    assessmentDTO.Experts.Add(new UserDTO() { Id = 4, Login = "Login2", Name = "Name2", IsCompetenceManager = true, IsCoordinator = true });
        //    assessmentDTO.Experts.Add(new UserDTO() { Id = 5, Login = "Login3", Name = "Name3", IsCompetenceManager = false, IsCoordinator = false });

        //    // Act
        //    Assessment assessmment = factory.Parse(assessmentDTO);
        //    List<UserDTO> actual = new List<UserDTO>();
        //    foreach(User expert in assessmment.Experts)
        //    {
        //        actual.Add(factory.Create(expert));
        //    }

        //    // Assert
        //    CollectionAssert.AreEqual(assessmentDTO.Experts, actual);
        //}

        [Test]
        public void ParseIndicatorScoreIdZero_Test()
        {
            // Arrange
            IndicatorScoreDTO indicatorScoreDTO = new IndicatorScoreDTO()
            {
                Id = 0,
                Name = "New name",
                Weight = 50
            };

            // Act
            IndicatorScore indicatorScore = factory.Parse(indicatorScoreDTO);

            // Assert
            Assert.True(indicatorScore != null
                    && indicatorScore.Id == indicatorScoreDTO.Id
                    && indicatorScore.Name == indicatorScoreDTO.Name
                    && indicatorScore.Weight == indicatorScoreDTO.Weight);
        }

        [Test]
        public void ParseIndicatorScoreIdNotZero_Test()
        {
            // Arrange
            IndicatorScoreDTO indicatorScoreDTO = new IndicatorScoreDTO()
            {
                Id = 2,
                Name = "TestName",
                Weight = 10
            };

            // Act
            IndicatorScore indicatorScore = factory.Parse(indicatorScoreDTO);

            // Assert
            Assert.True(indicatorScore != null 
                    && indicatorScore.Id == indicatorScoreDTO.Id 
                    && indicatorScore.Name == indicatorScoreDTO.Name
                    && indicatorScore.Weight == indicatorScoreDTO.Weight);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseIndicatorScoreParameterNull_Test()
        {
            // Arrange
            IndicatorScoreDTO indicatorScoreDTO = null;

            // Act
            IndicatorScore indicatorScore = factory.Parse(indicatorScoreDTO);
        }

        [Test]
        public void ParseAreaIdZero_Test()
        {
            // Arrange
            AreaDTO areaDTO = new AreaDTO()
            {
                Id = 0,
                Name = "Test Area",
                Description = "About"
            };

            // Act
            Area area = factory.Parse(areaDTO);

            // Assert
            Assert.True(area != null
                && area.Id == areaDTO.Id
                && area.Name == areaDTO.Name
                && area.Description == areaDTO.Description);

        }

        [Test]
        public void ParseAreaIdNotZero_Test()
        {
            // Arrange
            AreaDTO areaDTO = new AreaDTO()
            {
                Id = 3,
                Name = "Test Area",
                Description = "About"
            };

            // Act
            Area area = factory.Parse(areaDTO);

            // Assert
            Assert.True(area != null
                && area.Id == areaDTO.Id
                && area.Name == areaDTO.Name
                && area.Description == areaDTO.Description);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseAreaParameterNull_Test()
        {
            // Arrange
            AreaDTO areaDTO = null;

            // Act
            Area area = factory.Parse(areaDTO);
        }

        [Test]
        public void ParseAreaSampleIdZero_Test()
        {
            // Arrange
            AreaSampleDTO areaSampleDTO = new AreaSampleDTO()
            {
                Id = 0,
                Name = "Name",
                Description = "About"
            };

            // Act
            AreaSample areaSample = factory.Parse(areaSampleDTO);

            // Assert
            Assert.True(areaSample != null
                    && areaSample.Id == areaSampleDTO.Id
                    && areaSample.Name == areaSampleDTO.Name
                    && areaSample.Description == areaSampleDTO.Description);
        }

        [Test]
        public void ParseAreaSampleIdNotZero_Test()
        {
            // Arrange
            AreaSampleDTO areaSampleDTO = new AreaSampleDTO()
            {
                Id = 3,
                Name = "Name",
                Description = "About"
            };

            // Act
            AreaSample areaSample = factory.Parse(areaSampleDTO);

            // Assert
            Assert.True(areaSample != null
                    && areaSample.Id == areaSampleDTO.Id
                    && areaSample.Name == areaSampleDTO.Name
                    && areaSample.Description == areaSampleDTO.Description);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseAreaSampleParameterNull_Test()
        {
            // Arrange
            AreaSampleDTO areaSampleDTO = null;

            // Act
            AreaSample areaSample = factory.Parse(areaSampleDTO);
        }

        [Test]
        public void ParseAssessmentTypeIdZero_Test()
        {
            // Arrange
            AssessmentTypeDTO assessmentTypeDTO = new AssessmentTypeDTO()
            {
                Id = 0,
                Name = "Some Name",
                Description = "About",
                URL = "Some URL"
            };

            // Act
            AssessmentType assessmentType = factory.Parse(assessmentTypeDTO);

            // Assert
            Assert.True(assessmentType != null
                    && assessmentType.Id == assessmentTypeDTO.Id
                    && assessmentType.Name == assessmentTypeDTO.Name
                    && assessmentType.Description == assessmentTypeDTO.Description
                    && assessmentType.URL == assessmentTypeDTO.URL);
        }

        [Test]
        public void ParseAssessmentTypeIdNotZero_Test()
        {
            // Arrange
            AssessmentTypeDTO assessmentTypeDTO = new AssessmentTypeDTO()
            {
                Id = 2,
                Name = "Some Name",
                Description = "About",
                URL = "Some URL"
            };

            // Act
            AssessmentType assessmentType = factory.Parse(assessmentTypeDTO);

            // Assert
            Assert.True(assessmentType != null
                    && assessmentType.Id == assessmentTypeDTO.Id
                    && assessmentType.Name == assessmentTypeDTO.Name
                    && assessmentType.Description == assessmentTypeDTO.Description
                    && assessmentType.URL == assessmentTypeDTO.URL);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseAssesmentTypeParameterNull_Test()
        {
            // Arrange
            AssessmentTypeDTO assessmentTypeDTO = null;

            // Act
            AssessmentType assessmentType = factory.Parse(assessmentTypeDTO);
        }

        [Test]
        public void ParseConstraintImpactIdZero_Test()
        {
            // Arrange
            ConstraintImpactDTO constraintImpactDTO = new ConstraintImpactDTO()
            {
                Id = 0,
                Name = "Name",
                Weight = 30
            };

            // Act
            ConstraintImpact constraintImpact = factory.Parse(constraintImpactDTO);

            // Assert
            Assert.True(constraintImpact != null
                    && constraintImpact.Id == constraintImpactDTO.Id
                    && constraintImpact.Name == constraintImpactDTO.Name
                    && constraintImpact.Weight == constraintImpactDTO.Weight);
        }

        [Test]
        public void ParseConstraintImpactIdNotZero_Test()
        {
            // Arrange
            ConstraintImpactDTO constraintImpactDTO = new ConstraintImpactDTO()
            {
                Id = 1,
                Name = "Name",
                Weight = 30
            };

            // Act
            ConstraintImpact constraintImpact = factory.Parse(constraintImpactDTO);

            // Assert
            Assert.True(constraintImpact != null
                    && constraintImpact.Id == constraintImpactDTO.Id
                    && constraintImpact.Name == constraintImpactDTO.Name
                    && constraintImpact.Weight == constraintImpactDTO.Weight);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseConstraintImpactParameterNull_Test()
        {
            // Arrange
            ConstraintImpactDTO constraintImpactDTO = null;

            // Act
            ConstraintImpact constraintImpact = factory.Parse(constraintImpactDTO);
        }

        [Test]
        public void ParseCriteriaSampleIdZero_Test()
        {
            // Arrrange
            CriteriaSampleDTO criteriaSampleDTO = new CriteriaSampleDTO()
            {
                Id = 0,
                Name = "Name"
            };

            // Act
            CriteriaSample criteriaSample = factory.Parse(criteriaSampleDTO);

            // Assert
            Assert.True(criteriaSample != null
                    && criteriaSample.Id == criteriaSampleDTO.Id
                    && criteriaSample.Name == criteriaSampleDTO.Name
                    && criteriaSample.QualityConstraintImpactId == 1
                    && criteriaSample.ScopeConstraintImpactId == 1
                    && criteriaSample.CostConstraintImpactId == 1
                    && criteriaSample.TimeConstraintImpactId == 1);
        }

        [Test]
        public void ParseCriteriaSampleIdNotZero_Test()
        {
            // Arrrange
            CriteriaSampleDTO criteriaSampleDTO = new CriteriaSampleDTO()
            {
                Id = 2,
                Name = "Name",
                CostConstraintImpactId = 1,
                TimeConstraintImpactId = 1,
                QualityConstraintImpactId = 1,
                ScopeConstraintImpactId = 1
            };

            // Act
            CriteriaSample criteriaSample = factory.Parse(criteriaSampleDTO);

            // Assert
            Assert.True(criteriaSample != null
                    && criteriaSample.Id == criteriaSampleDTO.Id
                    && criteriaSample.Name == criteriaSampleDTO.Name
                    && criteriaSample.QualityConstraintImpactId == criteriaSampleDTO.QualityConstraintImpactId
                    && criteriaSample.ScopeConstraintImpactId == criteriaSampleDTO.ScopeConstraintImpactId
                    && criteriaSample.CostConstraintImpactId == criteriaSampleDTO.CostConstraintImpactId
                    && criteriaSample.TimeConstraintImpactId == criteriaSampleDTO.TimeConstraintImpactId);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseCriteriaSampleParameterNull_Test()
        {
            // Arrange
            CriteriaSampleDTO criteriaSampleDTO = null;

            // Act
            CriteriaSample criteriaSample = factory.Parse(criteriaSampleDTO);
        }

        [Test]
        public void ParseCriteriaScoreIdZero_Test()
        {
            // Arrange
            CriteriaScoreDTO criteriaScoreDTO = new CriteriaScoreDTO() 
            {
                Id = 0,
                Name = "Name",
                Weight = 50
            };

            // Act
            CriteriaScore criteriaScore = factory.Parse(criteriaScoreDTO);

            // Assert
            Assert.True(criteriaScore != null
                    && criteriaScore.Id == criteriaScoreDTO.Id
                    && criteriaScore.Name == criteriaScoreDTO.Name
                    && criteriaScore.Weight == criteriaScoreDTO.Weight);
        }

        [Test]
        public void ParseCriteriaScoreIdNotZero_Test()
        {
            // Arrange
            CriteriaScoreDTO criteriaScoreDTO = new CriteriaScoreDTO()
            {
                Id = 2,
                Name = "Name",
                Weight = 50
            };

            // Act
            CriteriaScore criteriaScore = factory.Parse(criteriaScoreDTO);

            // Assert
            Assert.True(criteriaScore != null
                    && criteriaScore.Id == criteriaScoreDTO.Id
                    && criteriaScore.Name == criteriaScoreDTO.Name
                    && criteriaScore.Weight == criteriaScoreDTO.Weight);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseCriteriaScoreParameterNull_Test()
        {
            // Arrange
            CriteriaScoreDTO criteriaScoreDTO = null;

            // Act
            CriteriaScore criteriaScore = factory.Parse(criteriaScoreDTO);
        }

        [Test]
        public void ParseCriterionIdZero_Test()
        {
            // Arrange
            CriterionDTO criterionDTO = new CriterionDTO()
            {
                Id = 0,
                Name = "Name"
            };

            // Act
            Criterion criterion = factory.Parse(criterionDTO);

            // Assert
            Assert.True(criterion != null
                    && criterion.Id == criterionDTO.Id
                    && criterion.Name == criterionDTO.Name
                    && criterion.CostConstraintImpactId == 1
                    && criterion.QualityConstraintImpactId == 1
                    && criterion.ScopeConstraintImpactId == 1
                    && criterion.TimeConstraintImpactId == 1);
        }

        [Test]
        public void ParseCriterionIdNotZero_Test()
        {
            // Arrange
            CriterionDTO criterionDTO = new CriterionDTO()
            {
                Id = 21,
                Name = "Name",
                CostConstraintImpactId = 2,
                QualityConstraintImpactId = 2,
                ScopeConstraintImpactId = 2,
                TimeConstraintImpactId = 2,
                AreaId = 1
            };

            // Act
            Criterion criterion = factory.Parse(criterionDTO);

            // Assert
            Assert.True(criterion != null
                    && criterion.Id == criterionDTO.Id
                    && criterion.Name == criterionDTO.Name
                    && criterion.CostConstraintImpactId == criterionDTO.CostConstraintImpactId
                    && criterion.QualityConstraintImpactId == criterionDTO.QualityConstraintImpactId
                    && criterion.ScopeConstraintImpactId == criterionDTO.ScopeConstraintImpactId
                    && criterion.TimeConstraintImpactId == criterionDTO.TimeConstraintImpactId
                    && criterion.AreaId == criterionDTO.AreaId);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseCriterionParameterNull_Test()
        {
            // Arrange
            CriterionDTO criterionDTO = null;

            // Act
            Criterion criterion = factory.Parse(criterionDTO);
        }

        [Test]
        public void ParseIndicatorIdZero_Test()
        {
            // Arrange
            IndicatorDTO indicatorDTO = new IndicatorDTO
            {
                Id = 0,
                Comment = "Comment",
                Name = "Name",
            };

            // Act
            Indicator indicator = factory.Parse(indicatorDTO);

            // Assert
            Assert.True(indicator != null
                    && indicator.Id == indicatorDTO.Id
                    && indicator.Comment == indicatorDTO.Comment
                    && indicator.Name == indicatorDTO.Name);
        }

        [Test]
        public void ParseIndicatorIdNotZero_Test()
        {
            // Arrange
            IndicatorDTO indicatorDTO = new IndicatorDTO
            {
                Id = 2,
                Comment = "Comment",
                Name = "Name",
            };

            // Act
            Indicator indicator = factory.Parse(indicatorDTO);

            // Assert
            Assert.True(indicator != null
                    && indicator.Id == indicatorDTO.Id
                    && indicator.Comment == indicatorDTO.Comment
                    && indicator.Name == indicatorDTO.Name);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseIndicatorParameterNull_Test()
        {
            // Arrange
            IndicatorDTO indicatorDTO = null;

            // Act
            Indicator indicator = factory.Parse(indicatorDTO);
        }

        public void ParseIndicatorSampleIdZero_Test()
        {
            // Arrange
            IndicatorSampleDTO indicatorSampleDTO = new IndicatorSampleDTO
            {
                Id = 0,
                Name = "Name",
                Order = 1
            };

            // Act
            IndicatorSample indicatorSample = factory.Parse(indicatorSampleDTO);

            // Assert
            Assert.True(indicatorSample != null
                    && indicatorSample.Id == indicatorSampleDTO.Id
                    && indicatorSample.Name == indicatorSampleDTO.Name
                    && indicatorSample.Order == indicatorSampleDTO.Order);
        }

        public void ParseIndicatorSampleIdNotZero_Test()
        {
            // Arrange
            IndicatorSampleDTO indicatorSampleDTO = new IndicatorSampleDTO
            {
                Id = 2,
                Name = "Name",
                Order = 1
            };

            // Act
            IndicatorSample indicatorSample = factory.Parse(indicatorSampleDTO);

            // Assert
            Assert.True(indicatorSample != null
                    && indicatorSample.Id == indicatorSampleDTO.Id
                    && indicatorSample.Name == indicatorSampleDTO.Name
                    && indicatorSample.Order == indicatorSampleDTO.Order);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseIndicatorSampleParameterNull_Test()
        {
            // Arrange
            IndicatorSampleDTO indicatorSampleDTO = null;

            // Act
            IndicatorSample indicatorSample = factory.Parse(indicatorSampleDTO);
        }

        [Test]
        public void ParseProjectConstraintIdZero_Test()
        {
            // Arrange
            ProjectConstraintDTO projectConstraintDTO = new ProjectConstraintDTO 
            {
                Id = 0,
                Name = "Name",
                Weight = 30
            };

            // Act
            ProjectConstraint projectConstraint = factory.Parse(projectConstraintDTO);

            // Assert
            Assert.True(projectConstraint != null
                    && projectConstraint.Id == projectConstraintDTO.Id
                    && projectConstraint.Name == projectConstraintDTO.Name
                    && projectConstraintDTO.Weight == projectConstraintDTO.Weight);
        }

        [Test]
        public void ParseProjectConstraintIdNotZero_Test()
        {
            // Arrange
            ProjectConstraintDTO projectConstraintDTO = new ProjectConstraintDTO
            {
                Id = 2,
                Name = "Name",
                Weight = 30
            };

            // Act
            ProjectConstraint projectConstraint = factory.Parse(projectConstraintDTO);

            // Assert
            Assert.True(projectConstraint != null
                    && projectConstraint.Id == projectConstraintDTO.Id
                    && projectConstraint.Name == projectConstraintDTO.Name
                    && projectConstraintDTO.Weight == projectConstraintDTO.Weight);
        }

        [Test]
        [ExpectedException(typeof(NullReferenceException))]
        public void ParseProjectConstraintParameterNull_Test()
        {
            // Arrange
            ProjectConstraintDTO projectConstraintDTO = null;

            // Act
            ProjectConstraint projectConstraint = factory.Parse(projectConstraintDTO);
        }
    }
}