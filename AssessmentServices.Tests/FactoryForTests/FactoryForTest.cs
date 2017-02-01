using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentServices.ModelsDTO;
using AssessmentModel;

namespace AssessmentServices.Tests.FactoryForTests
{
    // This class is not for testing
    // This class is dedicated to create a dto model 
    // for unit tests
    public static class FactoryForTest
    {
        // Get AssessmentDTO for testing
        public static Assessment GetAssessment(int id = 0
                                                    ,int assessmentTypeId = 0
                                                    ,int? projectId = 0
                                                    ,int? unitId = 0
                                                    ,int? projectMngrId = 0
                                                    ,int? coordinatorId = 0
                                                    ,int? recommendations = 0
                                                    ,int? improvements = 0
                                                    ,decimal? coordinatorTime = 0m
                                                    ,decimal? expertTime = 0m
                                                    ,decimal? serviceQualityScore = 0
                                                    ,int scopeProjectConstraintId = 1
                                                    ,int timeProjectConstraintId = 1
                                                    ,int qualityProjectConstraintId = 1
                                                    ,int costProjectConstraintId = 1
                                                    ,ICollection<User> experts = null)
        {
            return new Assessment
            {
                Id = id,
                Name = "Test name",
                Description = "Test Description",
                AssessmentTypeId = assessmentTypeId,
                URL = "Test url",
                Version = "Test Version",
                Comment = "Test Comment",
                StartDate = DateTime.MinValue,
                FinishDate = DateTime.MaxValue,
                Project = "Test Project",
                ProjectId = projectId,
                Unit = "Test Unit",
                UnitId = unitId,
                ProjectManagerId = projectMngrId,
                CoordinatorId = coordinatorId,
                RecommendationsNum = recommendations,
                Improvements = improvements,
                CoordinatorTime = coordinatorTime,
                ExpertTime = expertTime,
                ServiceQualityScore = serviceQualityScore,
                ScopeProjectConstraintId = scopeProjectConstraintId,
                TimeProjectConstraintId = timeProjectConstraintId,
                QualityProjectConstraintId = qualityProjectConstraintId,
                CostProjectConstraintId = costProjectConstraintId,
                Experts = experts
            };
        }

        public static Area GetArea(int id = 0,
                                         int assessmentId = 0)
        {
            return new Area
            {
                Id = id,
                AssesmentId = assessmentId,
                Name = "Test Name",
                Description = "Test Description"
            };
        }

        public static AssessmentType GetAssessmentType(int id = 0)
        {
            return new AssessmentType
            {
                Id = id,
                Name = "Test name",
                Description = "Test Description",
                URL = "Test URL"
            };
        }

        public static AreaSample GetAreaSample(int id = 0,
                                                     int assessmentTypeId = 0)
        {
            return new AreaSample
            {
                Id = id,
                Name = "Test name",
                Description = "Test Description",
                AssesmentTypeId = assessmentTypeId
            };
        }

        public static Indicator GetIndicator(int id = 0,
                                                   int criteriaId = 0,
                                                   int? scoreId = 0)
        {
            return new Indicator
            {
                Id = id,
                Name = "Test name",
                Comment = "Test comment",
                CriteriaId = criteriaId,
                ScoreId = scoreId
            };
        }

        public static IndicatorSample GetIndicatorSample(int id = 0,
                                                               int criteriaSampleId = 0,
                                                               int order = 0)
        {
            return new IndicatorSample
            {
                Id = id,
                Name = "Test name",
                CriteriaSampleId = 0,
                Order = order
            };
        }

        public static ConstraintImpact GetConstraintImpact(int id =0,
                                                                 int weight = 100)
        {
            return new ConstraintImpact
            {
                Id = id,
                Name = "Test name",
                Weight = weight
            };
        }

        public static ProjectConstraint GetProjectConstraint(int id = 0,
                                                                   int weight = 0)
        {
            return new ProjectConstraint
            {
                Id = id,
                Weight = weight,
                Name ="Test name"
            };
        }

        public static IndicatorScore GetIndicatorScore(int id = 0,
                                                             int weight = 0)
        {
            return new IndicatorScore{
                Id = id,
                Weight = weight,
                Name = "Test name"
            };
        }

        public static Criterion GetCriterion(int id = 0,
                                                   int areaId = 0,
                                                   int scopeConstraintImpactId = 1,
                                                   int timeConstraintImpactId = 1,
                                                   int qualityConstraintImpactId = 1,
                                                   int costConstraintImpactId = 1,
                                                   int? criteriaScoreId = 0)
        {
            return new Criterion
            {
                Id = id,
                Name = "Test name",
                AreaId = areaId,
                ScopeConstraintImpactId = scopeConstraintImpactId,
                TimeConstraintImpactId = timeConstraintImpactId,
                QualityConstraintImpactId = qualityConstraintImpactId,
                CostConstraintImpactId = costConstraintImpactId,
                CriteriaScoreId = criteriaScoreId
            };
        }

        public static CriteriaSample GetCriteriaSample(int id = 0,
                                                             int areaId = 0,
                                                             int scopeConstraintImpactId = 1,
                                                             int timeConstraintImpactId = 1,
                                                             int qualityConstraintImpactId = 1,
                                                             int costConstraintImpactId = 1)
        {
            return new CriteriaSample
            {
                Id = id,
                Name = "Test name",
                AreaId = areaId,
                CostConstraintImpactId = costConstraintImpactId,
                ScopeConstraintImpactId = scopeConstraintImpactId,
                TimeConstraintImpactId = timeConstraintImpactId,
                QualityConstraintImpactId = qualityConstraintImpactId
            };
        }

        public static CriteriaScore GetCritriaScore(int id = 0,
                                                          int weight = 0)
        {
            return new CriteriaScore
            {
                Id = id,
                Name = "Test name",
                Weight = weight
            };
        }

        public static User GetUser(int id = 0,
                                   int? sse_id = 0,
                                   bool isCoordinator = false,
                                   bool isCompetenceManager = false,
                                   string login = null)
        {
            return new User
            {
                Id = id,
                SSE_Id = sse_id,
                IsCompetenceManager = isCompetenceManager,
                IsCoordinator = isCoordinator,
                Name = "Test name",
                Login = login
            };
        }
    }
}
