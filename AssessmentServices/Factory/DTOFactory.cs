using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentServices.ModelsDTO;
using AssessmentServices.CustomDTO;
using AssessmentModel;
using System.Net.Http;
using AssessmentServices.UnitOfWork;

namespace AssessmentServices.Factory
{
    public class DTOFactory
    {
        private const int defaultConstraintId = 1;

        private readonly ICompetenceManagerUnitOfWork unit;

        public DTOFactory(ICompetenceManagerUnitOfWork _unit)
        {
            unit = _unit;
        }

        public ICompetenceManagerUnitOfWork Unit
        {
            get
            {
                return unit;
            }
        }

        #region Create methods

        public ActionItemsDTO Create(ActionItems actionItems)
        {
            if (actionItems == null)
            {
                ThrowIfParameterIsNull(typeof(ActionItems));
            }

            ActionItemsDTO actionItemsDTO = new ActionItemsDTO
            {
                Id = actionItems.Id,
                ResponsiblePersonId = actionItems.ResponsiblePersonId,
                CriteriaId = actionItems.CriteriaId,
                ActionItem = actionItems.ActionItem,
                DueDate = actionItems.DueDate,
                Order = actionItems.Order
            };

            actionItemsDTO.ResponsiblePerson = LoadUserData(actionItems.ResponsiblePersonId).Name;
            

            return actionItemsDTO;
        }

        public AreaDTO Create(Area area)
        {
            if (area == null)
            {
                ThrowIfParameterIsNull(typeof(Area));
            }
            return new AreaDTO
            {
                Id = area.Id,
                Name = area.Name,
                Description = area.Description,
                AssesmentId = area.AssesmentId,
                Order = area.Order
            };
        }

        public AssessmentDTO Create(Assessment assessment)
        {
            if (assessment == null)
            {
                ThrowIfParameterIsNull(typeof(Assessment));
            }
            AssessmentDTO assessmentDTO = new AssessmentDTO
                {
                    Id = assessment.Id,
                    Name = assessment.Name,
                    URL = assessment.URL,
                    Version = assessment.Version,
                    Description = assessment.Description,
                    StartDate = assessment.StartDate,
                    FinishDate = assessment.FinishDate,
                    Project = assessment.Project,
                    ProjectId = assessment.ProjectId,
                    Unit = assessment.Unit,
                    UnitId = assessment.UnitId,
                    ProjectManagerId = assessment.ProjectManagerId,
                    TechLeadId = assessment.TechLeadId,
                    CoordinatorId = assessment.CoordinatorId,
                    QCLeadId = assessment.QCLeadId,
                    BusinessAnalystId = assessment.BusinessAnalystId,
                    MainExpertId = assessment.MainExpertId,
                    Comment = assessment.Comment,
                    QCComment = assessment.QCComment,
                    AssessmentTypeId = assessment.AssessmentTypeId,
                    CoordinatorTime = assessment.CoordinatorTime,
                    ExpertTime = assessment.ExpertTime,
                    Improvements = assessment.Improvements,
                    ServiceQualityScore = assessment.ServiceQualityScore,
                    RecommendationsNum = assessment.RecommendationsNum,
                    CostProjectConstraintId = assessment.CostProjectConstraintId,
                    QualityProjectConstraintId = assessment.QualityProjectConstraintId,
                    ScopeProjectConstraintId = assessment.ScopeProjectConstraintId,
                    TimeProjectConstraintId = assessment.TimeProjectConstraintId
                };

            if (assessment.CoordinatorId != null)
            {
                assessmentDTO.Coordinator = LoadUserData(assessment.CoordinatorId ?? 0).Name;
            }

            if (assessment.TechLeadId != null)
            {
                assessmentDTO.TechLead = LoadUserData(assessment.TechLeadId ?? 0).Name;
            }

            if (assessment.ProjectManagerId != null)
            {
                assessmentDTO.ProjectManager = LoadUserData(assessment.ProjectManagerId ?? 0).Name;
            }
            if(assessment.QCLeadId != null)
            {
                assessmentDTO.QCLead = LoadUserData(assessment.QCLeadId ?? 0).Name;
            }
            if(assessment.BusinessAnalystId != null)
            {
                assessmentDTO.BusinessAnalyst = LoadUserData(assessment.BusinessAnalystId ?? 0).Name;
            }
            if (assessment.MainExpertId != null)
            {
                assessmentDTO.MainExpert = LoadUserData(assessment.MainExpertId ?? 0).Name;
            }
            if (assessment.AssessmentTypeId != 0)
            {
                assessmentDTO.AssessmentType = LoadAssessmentType(assessment.AssessmentTypeId).Name;
            }

            // Load Experts to DTO
            foreach (User expert in assessment.Experts)
            {
                assessmentDTO.Experts.Add(Create(expert));
            }

            return assessmentDTO;
        }

        public AttachmentDTO Create(Attachment attachment)
        {
            if (attachment == null)
            {
                ThrowIfParameterIsNull(typeof(Attachment));
            }
            AttachmentDTO attachmentDTO = new AttachmentDTO
            {
                Id = attachment.Id,
                Name = attachment.Name,
                UniqueName = attachment.UniqueName,
                Comment = attachment.Comment,
                Size = attachment.Size,
                AssessmentId = attachment.AssessmentId
            };
            return attachmentDTO;
        }


        public AreaSampleDTO Create(AreaSample areaSample)
        {
            if (areaSample == null)
            {
                ThrowIfParameterIsNull(typeof(AreaSample));
            }
            return new AreaSampleDTO
            {
                Id = areaSample.Id,
                Name = areaSample.Name,
                Description = areaSample.Description,
                AssesmentTypeId = areaSample.AssesmentTypeId,
                Order = areaSample.Order
            };
        }

        public AssessmentTypeDTO Create(AssessmentType assessmentType)
        {
            if (assessmentType == null)
            {
                ThrowIfParameterIsNull(typeof(AssessmentType));
            }
            return new AssessmentTypeDTO
            {
                Id = assessmentType.Id,
                Name = assessmentType.Name,
                Description = assessmentType.Description,
                URL = assessmentType.URL,
                IsActive = assessmentType.IsActive
            };
        }

        public ConstraintImpactDTO Create(ConstraintImpact constraintImpact)
        {
            if (constraintImpact == null)
            {
                ThrowIfParameterIsNull(typeof(ConstraintImpact));
            }

            return new ConstraintImpactDTO
            {
                Id = constraintImpact.Id,
                Name = constraintImpact.Name,
                Weight = constraintImpact.Weight
            };
        }

        public CriteriaSampleDTO Create(CriteriaSample criteriaSample)
        {
            if (criteriaSample == null)
            {
                ThrowIfParameterIsNull(typeof(CriteriaSample));
            }

            return new CriteriaSampleDTO
            {
                Id = criteriaSample.Id,
                Name = criteriaSample.Name,
                AreaId = criteriaSample.AreaId,
                ScopeConstraintImpactId = criteriaSample.ScopeConstraintImpactId,
                TimeConstraintImpactId = criteriaSample.TimeConstraintImpactId,
                QualityConstraintImpactId = criteriaSample.QualityConstraintImpactId,
                CostConstraintImpactId = criteriaSample.CostConstraintImpactId,
                Order = criteriaSample.Order
            };
        }

        public CriteriaScoreDTO Create(CriteriaScore criteriaScore)
        {
            if (criteriaScore == null)
            {
                ThrowIfParameterIsNull(typeof(CriteriaScore));
            }

            return new CriteriaScoreDTO
            {
                Id = criteriaScore.Id,
                Name = criteriaScore.Name,
                Weight = criteriaScore.Weight
            };
        }

        public CriterionDTO Create(Criterion criterion)
        {
            if (criterion == null)
            {
                ThrowIfParameterIsNull(typeof(Criterion));
            }

            CriterionDTO criterionDTO = new CriterionDTO
            {
                Id = criterion.Id,
                Name = criterion.Name,
                AreaId = criterion.AreaId,
                ScopeConstraintImpactId = criterion.ScopeConstraintImpactId,
                TimeConstraintImpactId = criterion.TimeConstraintImpactId,
                QualityConstraintImpactId = criterion.QualityConstraintImpactId,
                CostConstraintImpactId = criterion.CostConstraintImpactId,
                Order = criterion.Order
            };

            // Load Recommendations to DTO
            foreach (Recommendation recommendation in criterion.Recommendations)
            {
                criterionDTO.Recommendations.Add(Create(recommendation));
            }

            return criterionDTO;
        }

        public IndicatorDTO Create(Indicator indicator)
        {
            if (indicator == null)
            {
                ThrowIfParameterIsNull(typeof(Indicator));
            }
            return new IndicatorDTO
            {
                Id = indicator.Id,
                Name = indicator.Name,
                CriteriaId = indicator.CriteriaId,
                ScoreId = indicator.ScoreId,
                Comment = indicator.Comment,
                Order = indicator.Order
            };
        }

        public IndicatorSampleDTO Create(IndicatorSample indicatorSample)
        {
            if (indicatorSample == null)
            {
                ThrowIfParameterIsNull(typeof(IndicatorSample));
            }

            return new IndicatorSampleDTO
            {
                Id = indicatorSample.Id,
                Name = indicatorSample.Name,
                CriteriaSampleId = indicatorSample.CriteriaSampleId,
                Order = indicatorSample.Order
            };
        }

        public IndicatorScoreDTO Create(IndicatorScore indicatorScore)
        {
            if (indicatorScore == null)
            {
                ThrowIfParameterIsNull(typeof(IndicatorScore));
            }
            return new IndicatorScoreDTO
            {
                Id = indicatorScore.Id,
                Name = indicatorScore.Name,
                Weight = indicatorScore.Weight
            };
        }

        public ProjectConstraintDTO Create(ProjectConstraint projectConstraint)
        {
            if (projectConstraint == null)
            {
                ThrowIfParameterIsNull(typeof(ProjectConstraint));
            }
            return new ProjectConstraintDTO
            {
                Id = projectConstraint.Id,
                Name = projectConstraint.Name,
                Weight = projectConstraint.Weight
            };
        }

        public UserDTO Create(User user)
        {
            if (user == null)
            {
                ThrowIfParameterIsNull(typeof(User));
            }
            return new UserDTO
            {
                Id = user.Id,
                Name = user.Name,
                Login = user.Login,
                IsCoordinator = user.IsCoordinator,
                IsCompetenceManager = user.IsCompetenceManager,
                SSE_Id = user.SSE_Id
            };
        }

        public RecommendationDTO Create(Recommendation recommendation)
        {
            if (recommendation == null)
            {
                ThrowIfParameterIsNull(typeof(Recommendation));
            }

            return new RecommendationDTO
            {
                Id = recommendation.Id,
                Text = recommendation.Text,
                Benefits = recommendation.Benefits,
                CriterionId = recommendation.CriterionId,
                Order = recommendation.Order
            };
        }

        #endregion

        #region Parse methods

        public ActionItems Parse(ActionItemsDTO actionItemsDTO)
        {
            if (actionItemsDTO == null)
            {
                ThrowIfParameterIsNull(typeof(ActionItemsDTO));
            }

            if (actionItemsDTO.Id != 0)
            {
                return ParseForEdit(actionItemsDTO);
            }
            else
            {
                return ParseForAdd(actionItemsDTO);
            }
        }

        public Area Parse(AreaDTO areaDTO)
        {
            if (areaDTO == null)
            {
                ThrowIfParameterIsNull(typeof(AreaDTO));
            }

            if (areaDTO.Id != 0)
            {
                return ParseForEdit(areaDTO);
            }
            else
            {
                return ParseForAdd(areaDTO);
            }
        }

        public AreaSample Parse(AreaSampleDTO areaSampleDTO)
        {

            if (areaSampleDTO == null)
            {
                ThrowIfParameterIsNull(typeof(AreaSampleDTO));
            }

            if (areaSampleDTO.Id != 0)
            {
                return ParseForEdit(areaSampleDTO);
            }
            else
            {
                return ParseForAdd(areaSampleDTO);
            }
        }

        public Assessment Parse(AssessmentDTO assessmentDTO)
        {
            if (assessmentDTO == null)
            {
                ThrowIfParameterIsNull(typeof(AssessmentDTO));
            }

            if (assessmentDTO.Id != 0)
            {
                return ParseForEdit(assessmentDTO);
            }
            else
            {
                return ParseForAdd(assessmentDTO);
            }
        }


        public Attachment Parse(AttachmentDTO attachmentDTO)
        {
            if (attachmentDTO == null)
            {
                ThrowIfParameterIsNull(typeof(AttachmentDTO));
            }
            if (attachmentDTO.Id != 0)
            {
                return ParseForEdit(attachmentDTO);
            }
            else
            {
                return ParseForAdd(attachmentDTO);
            }

        }

        public AssessmentType Parse(AssessmentTypeDTO assessmentTypeDTO)
        {
            if (assessmentTypeDTO == null)
            {
                ThrowIfParameterIsNull(typeof(AssessmentTypeDTO));
            }

            if (assessmentTypeDTO.Id != 0)
            {
                return ParseForEdit(assessmentTypeDTO);
            }
            else
            {
                return ParseForAdd(assessmentTypeDTO);
            }
        }

        public ConstraintImpact Parse(ConstraintImpactDTO constraintImpactDTO)
        {
            if (constraintImpactDTO == null)
            {
                ThrowIfParameterIsNull(typeof(ConstraintImpactDTO));
            }

            if (constraintImpactDTO.Id != 0)
            {
                return ParseForEdit(constraintImpactDTO);
            }
            else
            {
                return ParseForAdd(constraintImpactDTO);
            }
        }

        public CriteriaSample Parse(CriteriaSampleDTO criteriaSampleDTO)
        {
            if (criteriaSampleDTO == null)
            {
                ThrowIfParameterIsNull(typeof(CriteriaSampleDTO));
            }

            if (criteriaSampleDTO.Id != 0)
            {
                return ParseForEdit(criteriaSampleDTO);
            }
            else
            {
                return ParseForAdd(criteriaSampleDTO);
            }
        }

        public CriteriaScore Parse(CriteriaScoreDTO criteriaScoreDTO)
        {
            if (criteriaScoreDTO == null)
            {
                ThrowIfParameterIsNull(typeof(CriteriaScoreDTO));
            }

            if (criteriaScoreDTO.Id != 0)
            {
                return ParseForEdit(criteriaScoreDTO);
            }
            else
            {
                return ParseForAdd(criteriaScoreDTO);
            }
        }

        public Criterion Parse(CriterionDTO criterionDTO)
        {
            if (criterionDTO == null)
            {
                ThrowIfParameterIsNull(typeof(CriterionDTO));
            }

            if (criterionDTO.Id != 0)
            {
                return ParseForEdit(criterionDTO);
            }
            else
            {
                return ParseForAdd(criterionDTO);
            }
        }

        public Indicator Parse(IndicatorDTO indicatorDTO)
        {
            if (indicatorDTO == null)
            {
                ThrowIfParameterIsNull(typeof(IndicatorDTO));
            }

            if (indicatorDTO.Id != 0)
            {
                return ParseForEdit(indicatorDTO);
            }
            else
            {
                return ParseForAdd(indicatorDTO);
            }
        }

        public IndicatorSample Parse(IndicatorSampleDTO indicatorSampleDTO)
        {
            if (indicatorSampleDTO == null)
            {
                ThrowIfParameterIsNull(typeof(IndicatorSampleDTO));
            }

            if (indicatorSampleDTO.Id != 0)
            {
                return ParseForEdit(indicatorSampleDTO);
            }
            else
            {
                return ParseForAdd(indicatorSampleDTO);
            }
        }

        public IndicatorScore Parse(IndicatorScoreDTO indicatorScoreDTO)
        {
            if (indicatorScoreDTO == null)
            {
                ThrowIfParameterIsNull(typeof(IndicatorScoreDTO));
            }

            if (indicatorScoreDTO.Id != 0)
            {
                return ParseForEdit(indicatorScoreDTO);
            }
            else
            {
                return ParseForAdd(indicatorScoreDTO);
            }
        }

        public ProjectConstraint Parse(ProjectConstraintDTO projectConstraintDTO)
        {
            if (projectConstraintDTO == null)
            {
                ThrowIfParameterIsNull(typeof(ProjectConstraintDTO));
            }

            if (projectConstraintDTO.Id != 0)
            {
                return ParseForEdit(projectConstraintDTO);
            }
            else
            {
                return ParseForAdd(projectConstraintDTO);
            }
        }

        public User Parse(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                ThrowIfParameterIsNull(typeof(UserDTO));
            }

            if (userDTO.Id != 0)
            {
                return ParseForEdit(userDTO);
            }
            else
            {
                return ParseForAdd(userDTO);
            }
        }

        public Recommendation Parse(RecommendationDTO recommendationDTO)
        {
            if (recommendationDTO == null)
            {
                ThrowIfParameterIsNull(typeof(RecommendationDTO));
            }

            if (recommendationDTO.Id != 0)
            {
                return ParseForEdit(recommendationDTO);
            }
            else
            {
                return ParseForAdd(recommendationDTO);
            }
        }

        #endregion

        /*************************** EDIT/ADD private Parse methods ***********************************/

        #region Parse for Edit-Add Methods

        private ProjectConstraint ParseForEdit(ProjectConstraintDTO projectConstraintDTO)
        {
            ProjectConstraint projectConstraint = unit.ProjectConstrintRepository.Get(p => p.Id == projectConstraintDTO.Id).FirstOrDefault();

            if (projectConstraint == null)
            {
                ThrowIfNotFoundInDb(typeof(ProjectConstraint));
            }

            if (projectConstraint.Name != projectConstraintDTO.Name)
            {
                projectConstraint.Name = projectConstraintDTO.Name;
            }

            if (projectConstraint.Weight != projectConstraintDTO.Weight)
            {
                projectConstraint.Weight = projectConstraintDTO.Weight;
            }

            return projectConstraint;
        }

        private ProjectConstraint ParseForAdd(ProjectConstraintDTO projectConstraintDTO)
        {
            ProjectConstraint projectConstraint = new ProjectConstraint
            {
                Name = projectConstraintDTO.Name,
                Id = projectConstraintDTO.Id,
                Weight = projectConstraintDTO.Weight
            };

            return projectConstraint;
        }

        private IndicatorScore ParseForEdit(IndicatorScoreDTO indicatorScoreDTO)
        {
            IndicatorScore indicatorScore = unit.IndicatorScoreRepository.Get(p => p.Id == indicatorScoreDTO.Id).FirstOrDefault();


            if (indicatorScore == null)
            {
                ThrowIfNotFoundInDb(typeof(IndicatorScore));
            }

            if (indicatorScore.Name != indicatorScoreDTO.Name)
            {
                indicatorScore.Name = indicatorScoreDTO.Name;
            }

            if (indicatorScore.Weight != indicatorScoreDTO.Weight)
            {
                indicatorScore.Weight = indicatorScoreDTO.Weight;
            }

            return indicatorScore;
        }

        private IndicatorScore ParseForAdd(IndicatorScoreDTO indicatorScoreDTO)
        {

            IndicatorScore indicatorScore = new IndicatorScore
            {
                Id = indicatorScoreDTO.Id,
                Name = indicatorScoreDTO.Name,
                Weight = indicatorScoreDTO.Weight
            };

            return indicatorScore;

        }

        private IndicatorSample ParseForEdit(IndicatorSampleDTO indicatorSampleDTO)
        {
            IndicatorSample indicatorSample = unit.IndicatorSampleRepository.Get(p => p.Id == indicatorSampleDTO.Id).FirstOrDefault();


            if (indicatorSample == null)
            {
                ThrowIfNotFoundInDb(typeof(IndicatorSample));
            }

            if (indicatorSample.Name != indicatorSampleDTO.Name)
            {
                indicatorSample.Name = indicatorSampleDTO.Name;
            }

            if (indicatorSample.Order != indicatorSampleDTO.Order)
            {
                indicatorSample.Order = indicatorSampleDTO.Order;
            }

            if (indicatorSample.CriteriaSampleId != indicatorSampleDTO.CriteriaSampleId)
            {
                indicatorSample.CriteriaSampleId = indicatorSampleDTO.CriteriaSampleId;
            }

            return indicatorSample;
        }

        private IndicatorSample ParseForAdd(IndicatorSampleDTO indicatorSampleDTO)
        {
            IndicatorSample indicatorSample = new IndicatorSample
            {
                Id = indicatorSampleDTO.Id,
                Name = indicatorSampleDTO.Name,
                Order = indicatorSampleDTO.Order,
                CriteriaSampleId = indicatorSampleDTO.CriteriaSampleId,
            };

            return indicatorSample;
        }

        private Indicator ParseForEdit(IndicatorDTO indicatorDTO)
        {
            Indicator indicator = unit.IndicatorRepository.Get(p => p.Id == indicatorDTO.Id).FirstOrDefault();


            if (indicator == null)
            {
                ThrowIfNotFoundInDb(typeof(IndicatorDTO));
            }

            if (indicator.Comment != indicatorDTO.Comment)
            {
                indicator.Comment = indicatorDTO.Comment;
            }

            if (indicator.CriteriaId != indicatorDTO.CriteriaId)
            {
                indicator.CriteriaId = indicatorDTO.CriteriaId;
            }

            if (indicator.Name != indicatorDTO.Name)
            {
                indicator.Name = indicatorDTO.Name;
            }

            if (indicator.ScoreId != indicatorDTO.ScoreId && indicatorDTO.ScoreId != null)
            {
                indicator.ScoreId = indicatorDTO.ScoreId;
            }

            if (indicator.Order != indicatorDTO.Order)
            {
                indicator.Order = indicatorDTO.Order;
            }

            return indicator;
        }

        private Indicator ParseForAdd(IndicatorDTO indicatorDTO)
        {
            Indicator indicator = new Indicator
            {
                Name = indicatorDTO.Name,
                Id = indicatorDTO.Id,
                Comment = indicatorDTO.Comment,
                ScoreId = indicatorDTO.ScoreId,
                CriteriaId = indicatorDTO.CriteriaId,
                Order = indicatorDTO.Order
            };

            return indicator;
        }

        private Criterion ParseForEdit(CriterionDTO criterionDTO)
        {
            Criterion criterion = unit.CriterionRepository.Get(p => p.Id == criterionDTO.Id).FirstOrDefault();

            if (criterion == null)
            {
                ThrowIfNotFoundInDb(typeof(Criterion));
            }


            if (criterion.AreaId != criterionDTO.AreaId)
            {
                criterion.AreaId = criterionDTO.AreaId;
            }

            if (criterion.CostConstraintImpactId != criterionDTO.CostConstraintImpactId)
            {
                criterion.CostConstraintImpactId = criterionDTO.CostConstraintImpactId;
            }

            if (criterion.CriteriaScoreId != criterionDTO.CriteriaScoreId)
            {
                criterion.CriteriaScoreId = criterionDTO.CriteriaScoreId;
            }

            if (criterion.Name != criterionDTO.Name)
            {
                criterion.Name = criterionDTO.Name;
            }

            if (criterion.QualityConstraintImpactId != criterionDTO.QualityConstraintImpactId)
            {
                criterion.QualityConstraintImpactId = criterionDTO.QualityConstraintImpactId;
            }

            if (criterion.TimeConstraintImpactId != criterionDTO.TimeConstraintImpactId)
            {
                criterion.TimeConstraintImpactId = criterionDTO.TimeConstraintImpactId;
            }

            if (criterion.ScopeConstraintImpactId != criterionDTO.ScopeConstraintImpactId)
            {
                criterion.ScopeConstraintImpactId = criterionDTO.ScopeConstraintImpactId;
            }

            if (criterion.Order != criterionDTO.Order)
            {
                criterion.Order = criterionDTO.Order;
            }

            return criterion;
        }

        private Criterion ParseForAdd(CriterionDTO criterionDTO)
        {
            Criterion criterion = new Criterion
            {
                Name = criterionDTO.Name,
                Id = criterionDTO.Id,
                AreaId = criterionDTO.AreaId,
                Order = criterionDTO.Order,
                CostConstraintImpactId = criterionDTO.CostConstraintImpactId,
                QualityConstraintImpactId = criterionDTO.QualityConstraintImpactId,
                TimeConstraintImpactId = criterionDTO.TimeConstraintImpactId,
                ScopeConstraintImpactId = criterionDTO.ScopeConstraintImpactId
            };

            // delete after front end implementation of criterions edit!!!
            criterion.CostConstraintImpactId = defaultConstraintId;
            criterion.QualityConstraintImpactId = defaultConstraintId;
            criterion.TimeConstraintImpactId = defaultConstraintId;
            criterion.ScopeConstraintImpactId = defaultConstraintId;

            return criterion;
        }

        private CriteriaScore ParseForEdit(CriteriaScoreDTO criteriaScoreDTO)
        {
            CriteriaScore criteriaScore = unit.CriteriaScoreRepository.Get(p => p.Id == criteriaScoreDTO.Id).FirstOrDefault();

            if (criteriaScore == null)
            {
                ThrowIfNotFoundInDb(typeof(CriteriaScore));
            }
            if (criteriaScore.Name != criteriaScoreDTO.Name)
            {
                criteriaScore.Name = criteriaScoreDTO.Name;
            }
            if (criteriaScore.Weight != criteriaScoreDTO.Weight)
            {
                criteriaScore.Weight = criteriaScoreDTO.Weight;
            }

            return criteriaScore;
        }

        private CriteriaScore ParseForAdd(CriteriaScoreDTO criteriaScoreDTO)
        {
            CriteriaScore criteriaScore = new CriteriaScore
            {
                Name = criteriaScoreDTO.Name,
                Id = criteriaScoreDTO.Id,
                Weight = criteriaScoreDTO.Weight
            };

            return criteriaScore;
        }

        private CriteriaSample ParseForEdit(CriteriaSampleDTO criteriaSampleDTO)
        {
            var criteriaSample = unit.CriteriaSampleRepository.Get(p => p.Id == criteriaSampleDTO.Id).FirstOrDefault();

            if (criteriaSample == null)
            {
                ThrowIfNotFoundInDb(typeof(CriteriaSample));
            }

            if (criteriaSample.AreaId != criteriaSampleDTO.AreaId)
            {
                criteriaSample.AreaId = criteriaSampleDTO.AreaId;
            }

            if (criteriaSample.Name != criteriaSampleDTO.Name)
            {
                criteriaSample.Name = criteriaSampleDTO.Name;
            }

            if (criteriaSample.CostConstraintImpactId != criteriaSampleDTO.CostConstraintImpactId)
            {
                criteriaSample.CostConstraintImpactId = criteriaSampleDTO.CostConstraintImpactId;
            }

            if (criteriaSample.QualityConstraintImpactId != criteriaSampleDTO.QualityConstraintImpactId)
            {
                criteriaSample.QualityConstraintImpactId = criteriaSampleDTO.QualityConstraintImpactId;
            }

            if (criteriaSample.ScopeConstraintImpactId != criteriaSampleDTO.ScopeConstraintImpactId)
            {
                criteriaSample.ScopeConstraintImpactId = criteriaSampleDTO.ScopeConstraintImpactId;
            }

            if (criteriaSample.TimeConstraintImpactId != criteriaSampleDTO.TimeConstraintImpactId)
            {
                criteriaSample.TimeConstraintImpactId = criteriaSampleDTO.TimeConstraintImpactId;
            }

            if (criteriaSample.Order != criteriaSampleDTO.Order)
            {
                criteriaSample.Order = criteriaSampleDTO.Order;
            }

            return criteriaSample;
        }

        private CriteriaSample ParseForAdd(CriteriaSampleDTO criteriaSampleDTO)
        {
            CriteriaSample criteriaSample = new CriteriaSample
            {
                Name = criteriaSampleDTO.Name,
                AreaId = criteriaSampleDTO.AreaId,
                Order = criteriaSampleDTO.Order
            };


            criteriaSample.QualityConstraintImpactId = defaultConstraintId;
            criteriaSample.ScopeConstraintImpactId = defaultConstraintId;
            criteriaSample.TimeConstraintImpactId = defaultConstraintId;
            criteriaSample.CostConstraintImpactId = defaultConstraintId;

            return criteriaSample;
        }

        private ConstraintImpact ParseForEdit(ConstraintImpactDTO constraintDTO)
        {
            ConstraintImpact constraintImpact = unit.ConstraintImpactRepository.Get(p => p.Id == constraintDTO.Id).FirstOrDefault();

            if (constraintImpact == null)
            {
                ThrowIfNotFoundInDb(typeof(ConstraintImpact));
            }

            if (constraintImpact.Name != constraintDTO.Name)
            {
                constraintImpact.Name = constraintDTO.Name;
            }

            if (constraintImpact.Weight != constraintDTO.Weight)
            {
                constraintImpact.Weight = constraintDTO.Weight;
            }

            return constraintImpact;
        }

        private ConstraintImpact ParseForAdd(ConstraintImpactDTO constraintDTO)
        {
            ConstraintImpact constraintImpact = new ConstraintImpact
            {
                Id = constraintDTO.Id,
                Name = constraintDTO.Name,
                Weight = constraintDTO.Weight
            };

            return constraintImpact;
        }

        private AssessmentType ParseForEdit(AssessmentTypeDTO assessmentTypeDTO)
        {
            AssessmentType assessmentType = unit.AssessmentTypeRepository.Get(p => p.Id == assessmentTypeDTO.Id).FirstOrDefault();

            if (assessmentType == null)
            {
                ThrowIfNotFoundInDb(typeof(AssessmentType));
            }

            if (assessmentType.Description != assessmentTypeDTO.Description)
            {
                assessmentType.Description = assessmentTypeDTO.Description;
            }

            if (assessmentType.Name != assessmentTypeDTO.Name)
            {
                assessmentType.Name = assessmentTypeDTO.Name;
            }

            if (assessmentType.URL != assessmentTypeDTO.URL)
            {
                assessmentType.URL = assessmentTypeDTO.URL;
            }
            if (assessmentType.IsActive != assessmentTypeDTO.IsActive)
            {
                assessmentType.URL = assessmentTypeDTO.URL;
            }

            return assessmentType;
        }

        private AssessmentType ParseForAdd(AssessmentTypeDTO assessmentTypeDTO)
        {
            AssessmentType assessmentType = new AssessmentType
            {
                Name = assessmentTypeDTO.Name,
                Description = assessmentTypeDTO.Description,
                URL = assessmentTypeDTO.URL,
                Id = assessmentTypeDTO.Id
            };

            return assessmentType;
        }

        private Area ParseForEdit(AreaDTO areaDTO)
        {
            Area area = unit.AreaRepository.Get(p => p.Id == areaDTO.Id).FirstOrDefault();

            if (area == null)
            {
                ThrowIfNotFoundInDb(typeof(Area));
            }

            if (area.Name != areaDTO.Name)
            {
                area.Name = areaDTO.Name;
            }

            if (area.Description != areaDTO.Description)
            {
                area.Description = areaDTO.Description;
            }

            if (area.AssesmentId != areaDTO.AssesmentId)
            {
                area.AssesmentId = areaDTO.AssesmentId;
            }

            if (area.Order != areaDTO.Order)
            {
                area.Order = areaDTO.Order;
            }

            return area;
        }

        private Area ParseForAdd(AreaDTO areaDTO)
        {

            Area area = new Area
            {
                Id = areaDTO.Id,
                Name = areaDTO.Name,
                Description = areaDTO.Description,
                AssesmentId = areaDTO.AssesmentId,
                Order = areaDTO.Order
            };

            return area;
        }

        private AreaSample ParseForEdit(AreaSampleDTO areaSampleDTO)
        {
            AreaSample areaSample = unit.AreaSamlpeRepository.Get(p => p.Id == areaSampleDTO.Id).FirstOrDefault();

            if (areaSample == null)
            {
                ThrowIfNotFoundInDb(typeof(AreaSample));
            }

            if (areaSample.Name != areaSampleDTO.Name)
            {
                areaSample.Name = areaSampleDTO.Name;
            }

            if (areaSample.Description != areaSampleDTO.Description)
            {
                areaSample.Description = areaSampleDTO.Description;
            }

            if (areaSample.AssesmentTypeId != areaSampleDTO.AssesmentTypeId)
            {
                areaSample.AssesmentTypeId = areaSampleDTO.AssesmentTypeId;
            }

            if (areaSample.Order != areaSampleDTO.Order)
            {
                areaSample.Order = areaSampleDTO.Order;
            }

            return areaSample;
        }

        private AreaSample ParseForAdd(AreaSampleDTO areaSampleDTO)
        {
            AreaSample areaSample = new AreaSample
            {
                Id = areaSampleDTO.Id,
                Name = areaSampleDTO.Name,
                Description = areaSampleDTO.Description,
                AssesmentTypeId = areaSampleDTO.AssesmentTypeId,
                Order = areaSampleDTO.Order
            };


            return areaSample;
        }

        private Assessment ParseForEdit(AssessmentDTO assessmentDTO)
        {
            Assessment assessment = unit.AssessmentRepository.Get(p => p.Id == assessmentDTO.Id).FirstOrDefault();

            if (assessment == null)
            {
                ThrowIfNotFoundInDb(typeof(Assessment));
            }
            if (assessment.Comment != assessmentDTO.Comment)
            {
                assessment.Comment = assessmentDTO.Comment;
            }
            if(assessment.QCComment != assessmentDTO.QCComment)
            {
                assessment.QCComment = assessmentDTO.QCComment;
            }
            if (assessment.Description != assessmentDTO.Description)
            {
                assessment.Description = assessmentDTO.Description;
            }

            if (assessment.FinishDate != assessmentDTO.FinishDate)
            {
                assessment.FinishDate = assessmentDTO.FinishDate;
            }

            if (assessment.Name != assessmentDTO.Name)
            {
                assessment.Name = assessmentDTO.Name;
            }

            if (assessment.Project != assessmentDTO.Project)
            {
                assessment.Project = assessmentDTO.Project;
            }

            if (assessment.ProjectId != assessmentDTO.ProjectId)
            {
                assessment.ProjectId = assessmentDTO.ProjectId;
            }

            if (assessment.StartDate != assessmentDTO.StartDate)
            {
                assessment.StartDate = assessmentDTO.StartDate;
            }

            if (assessment.Unit != assessmentDTO.Unit)
            {
                assessment.Unit = assessmentDTO.Unit;
            }

            if (assessment.UnitId != assessmentDTO.UnitId)
            {
                assessment.UnitId = assessmentDTO.UnitId;
            }

            if (assessment.URL != assessmentDTO.URL)
            {
                assessment.URL = assessmentDTO.URL;
            }

            if (assessment.Version != assessmentDTO.Version)
            {
                assessment.Version = assessmentDTO.Version;
            }

            if (assessment.RecommendationsNum != assessmentDTO.RecommendationsNum)
            {
                assessment.RecommendationsNum = assessmentDTO.RecommendationsNum;
            }

            if (assessment.Improvements != assessmentDTO.Improvements)
            {
                assessment.Improvements = assessmentDTO.Improvements;
            }

            if (assessment.CoordinatorTime != assessmentDTO.CoordinatorTime)
            {
                assessment.CoordinatorTime = assessmentDTO.CoordinatorTime;
            }

            if (assessment.ExpertTime != assessmentDTO.ExpertTime)
            {
                assessment.ExpertTime = assessmentDTO.ExpertTime;
            }

            if (assessment.ServiceQualityScore != assessmentDTO.ServiceQualityScore)
            {
                assessment.ServiceQualityScore = assessmentDTO.ServiceQualityScore;
            }

            if (assessment.ScopeProjectConstraintId != assessmentDTO.ScopeProjectConstraintId)
            {
                assessment.ScopeProjectConstraintId = assessmentDTO.ScopeProjectConstraintId;
            }

            if (assessment.TimeProjectConstraintId != assessmentDTO.TimeProjectConstraintId)
            {
                assessment.TimeProjectConstraintId = assessmentDTO.TimeProjectConstraintId;
            }

            if (assessment.QualityProjectConstraintId != assessmentDTO.QualityProjectConstraintId)
            {
                assessment.QualityProjectConstraintId = assessmentDTO.QualityProjectConstraintId;
            }

            if (assessment.CostProjectConstraintId != assessmentDTO.CostProjectConstraintId)
            {
                assessment.CostProjectConstraintId = assessmentDTO.CostProjectConstraintId;
            }


            if (assessment.ProjectManager == null || assessment.ProjectManager.Name != assessmentDTO.ProjectManager)
            {
                assessment.ProjectManager = LoadUserData(assessmentDTO.ProjectManagerId ?? 0);
            }

            if (assessment.Coordinator == null || assessment.Coordinator.Name != assessmentDTO.Coordinator)
            {
                assessment.Coordinator = LoadUserData(assessmentDTO.CoordinatorId ?? 0);
            }

            if (assessment.TechLead == null || assessment.TechLead.Name != assessmentDTO.TechLead)
            {
                assessment.TechLead = LoadUserData(assessmentDTO.TechLeadId ?? 0);
            }

            if (assessment.QCLead == null || assessment.QCLead.Name != assessmentDTO.QCLead)
            {
                assessment.QCLead = LoadUserData(assessmentDTO.QCLeadId ?? 0);
            }
            if (assessment.BusinessAnalyst == null || assessment.BusinessAnalyst.Name != assessmentDTO.BusinessAnalyst)
            {
                assessment.BusinessAnalyst = LoadUserData(assessmentDTO.BusinessAnalystId ?? 0);
            }
            if (assessment.MainExpert == null || assessment.MainExpert.Name != assessmentDTO.MainExpert)
            {
                assessment.MainExpert = LoadUserData(assessmentDTO.MainExpertId ?? 0);
            }
            // Delete excluded experts
            for (int i = assessment.Experts.Count - 1; i >= 0; i--)
            {
                if (!assessmentDTO.Experts.Contains(Create(assessment.Experts.ElementAt(i))))
                {
                    assessment.Experts.Remove(assessment.Experts.ElementAt(i));
                }
            }

            // Load new Experts
            foreach (UserDTO expert in assessmentDTO.Experts)
            {
                if (!assessment.Experts.Contains(Parse(expert)))
                {
                    assessment.Experts.Add(Parse(expert));
                }
            }

            return assessment;
        }

        private Assessment ParseForAdd(AssessmentDTO assessmentDTO)
        {
            Assessment assessment = new Assessment
            {
                AssessmentTypeId = assessmentDTO.AssessmentTypeId,
                Comment = assessmentDTO.Comment,
                QCComment = assessmentDTO.QCComment,
                Description = assessmentDTO.Description,
                FinishDate = assessmentDTO.FinishDate,
                Id = assessmentDTO.Id,
                Project = assessmentDTO.Project,
                ProjectId = assessmentDTO.ProjectId,
                StartDate = assessmentDTO.StartDate,
                Unit = assessmentDTO.Unit,
                UnitId = assessmentDTO.UnitId,
                URL = assessmentDTO.URL,
                Version = assessmentDTO.Version,
                RecommendationsNum = assessmentDTO.RecommendationsNum,
                Improvements = assessmentDTO.Improvements,
                CoordinatorTime = assessmentDTO.CoordinatorTime,
                ExpertTime = assessmentDTO.ExpertTime,
                ServiceQualityScore = assessmentDTO.ServiceQualityScore,
                Name = assessmentDTO.Name,
            };

            assessment.ScopeProjectConstraintId = defaultConstraintId;
            assessment.TimeProjectConstraintId = defaultConstraintId;
            assessment.QualityProjectConstraintId = defaultConstraintId;
            assessment.CostProjectConstraintId = defaultConstraintId;

            assessment.Coordinator = LoadUserData(assessmentDTO.CoordinatorId ?? 0);
            assessment.TechLead = LoadUserData(assessmentDTO.TechLeadId ?? 0);
            assessment.ProjectManager = LoadUserData(assessmentDTO.ProjectManagerId ?? 0);
            assessment.QCLead = LoadUserData(assessmentDTO.QCLeadId ?? 0);
            assessment.BusinessAnalyst = LoadUserData(assessmentDTO.BusinessAnalystId ?? 0);
            assessment.MainExpert = LoadUserData(assessmentDTO.MainExpertId ?? 0);
            LoadSampleDataToAssessment(assessment);

            return assessment;
        }

        private Attachment ParseForEdit(AttachmentDTO attachmentDTO)
        {
            Attachment attachment = Unit.AttachmentRepository.Get(p => p.Id == attachmentDTO.Id).FirstOrDefault();
            if (attachment == null)
            {
                ThrowIfNotFoundInDb(typeof(Attachment));
            }
            if (attachment.Name != attachmentDTO.Name)
            {
                attachment.Name = attachmentDTO.Name;
            }
            if (attachment.Size != attachmentDTO.Size)
            {
                attachment.Size = attachmentDTO.Size;
            }
            if (attachment.Comment != attachmentDTO.Comment)
            {
                attachment.Comment = attachmentDTO.Comment;
            }
            if (attachment.UniqueName != attachmentDTO.UniqueName)
            {
                attachment.UniqueName = attachmentDTO.UniqueName;
            }
            if(attachment.AssessmentId != attachmentDTO.AssessmentId)
            {
                attachment.AssessmentId = attachmentDTO.AssessmentId;
            }

            return attachment;
        }

        private Attachment ParseForAdd(AttachmentDTO attachmentDTO)
        {
            Attachment attachment = new Attachment
            {
                Name = attachmentDTO.Name,
                Comment = attachmentDTO.Comment,
                Size = attachmentDTO.Size,
                UniqueName = attachmentDTO.UniqueName,
                AssessmentId = attachmentDTO.AssessmentId
            };
            return attachment;
        }

        private User ParseForEdit(UserDTO userDTO)
        {
            User user = Unit.UserRepository.Get(p => p.Id == userDTO.Id).FirstOrDefault();

            if (user == null)
            {
                ThrowIfNotFoundInDb(typeof(User));
            }

            if (user.Login != userDTO.Login)
            {
                user.Login = userDTO.Login;
            }

            if (user.Name != userDTO.Name)
            {
                user.Name = userDTO.Name;
            }

            if (user.SSE_Id != userDTO.SSE_Id)
            {
                user.SSE_Id = userDTO.SSE_Id;
            }

            if (user.IsCompetenceManager != userDTO.IsCompetenceManager)
            {
                user.IsCompetenceManager = userDTO.IsCompetenceManager;
            }

            if (user.IsCoordinator != userDTO.IsCoordinator)
            {
                user.IsCoordinator = userDTO.IsCoordinator;
            }

            return user;
        }

        private User ParseForAdd(UserDTO userDTO)
        {
            User user = new User
            {
                Id = userDTO.Id,
                Name = userDTO.Name,
                SSE_Id = userDTO.SSE_Id,
                Login = userDTO.Login,
                IsCompetenceManager = userDTO.IsCompetenceManager,
                IsCoordinator = userDTO.IsCoordinator
            };

            return user;
        }

        private Recommendation ParseForEdit(RecommendationDTO recommendationDTO)
        {
            Recommendation recommendation = Unit.RecommendationRepository.Get(p => p.Id == recommendationDTO.Id).FirstOrDefault();

            if (recommendation == null)
            {
                ThrowIfNotFoundInDb(typeof(Recommendation));
            }

            if (recommendation.Text != recommendationDTO.Text)
            {
                recommendation.Text = recommendationDTO.Text;
            }

            if (recommendation.Benefits != recommendationDTO.Benefits)
            {
                recommendation.Benefits = recommendationDTO.Benefits;
            }

            if (recommendation.Order != recommendationDTO.Order)
            {
                recommendation.Order = recommendationDTO.Order;
            }

            return recommendation;
        }

        private Recommendation ParseForAdd(RecommendationDTO recommendationDTO)
        {
            Recommendation recommendation = new Recommendation
            {
                Id = recommendationDTO.Id,
                Text = recommendationDTO.Text,
                Benefits = recommendationDTO.Benefits,
                CriterionId = recommendationDTO.CriterionId,
                Order = recommendationDTO.Order
            };

            return recommendation;
        }

        private ActionItems ParseForEdit(ActionItemsDTO actionItemsDTO)
        {
            ActionItems actionItems = Unit.ActionItemsRepository.Get(p => p.Id == actionItemsDTO.Id).FirstOrDefault();

            if (actionItems == null)
            {
                ThrowIfNotFoundInDb(typeof(ActionItems));
            }

            if (actionItems.ResponsiblePerson == null || actionItems.ResponsiblePerson.Name != actionItemsDTO.ResponsiblePerson)
            {
                actionItems.ResponsiblePerson = LoadUserData(actionItemsDTO.ResponsiblePersonId ?? 0);
            }

            if (actionItems.CriteriaId != actionItemsDTO.CriteriaId)
            {
                actionItems.CriteriaId = actionItemsDTO.CriteriaId;
            }

            if (actionItems.ActionItem != actionItemsDTO.ActionItem)
            {
                actionItems.ActionItem = actionItemsDTO.ActionItem;
            }

            if (actionItems.DueDate != actionItemsDTO.DueDate)
            {
                actionItems.DueDate = actionItemsDTO.DueDate;
            }

            if (actionItems.Order != actionItemsDTO.Order)
            {
                actionItems.Order = actionItemsDTO.Order;
            }

            return actionItems;

        }

        private ActionItems ParseForAdd(ActionItemsDTO actionItemsDTO)
        {
            ActionItems actionItems = new ActionItems
            {
                Id = actionItemsDTO.Id,
                CriteriaId = actionItemsDTO.CriteriaId,
                ActionItem = actionItemsDTO.ActionItem,
                DueDate = actionItemsDTO.DueDate,
                Order = actionItemsDTO.Order
            };
            actionItems.ResponsiblePerson = LoadUserData(actionItemsDTO.ResponsiblePersonId ?? 0);

            return actionItems;
        }

        #endregion

        /*************************** HELP METHODS ******************************************************/
        #region Help methods

        // Throw NullReferenceException when DTO object is null.
        private void ThrowIfParameterIsNull(Type dtoType)
        {
            throw new NullReferenceException(string.Format("Unable to parse {0} object that is null.", dtoType.Name));
        }

        // Throw KeyNotFoundException if entity not found in the database
        private void ThrowIfNotFoundInDb(Type entityType)
        {
            throw new KeyNotFoundException(string.Format("{0} object not found in the database.", entityType.Name));
        }

        // Load existing User from Users table
        private User LoadUserData(int id)
        {
            if (id != 0)
            {
                return unit.UserRepository.Get(p => p.Id == id).FirstOrDefault();
            }
            else
            {
                return null;
            }
        }

        private AssessmentType LoadAssessmentType(int id)
        {
            if (id != 0)
            {
                return unit.AssessmentTypeRepository.Get(p => p.Id == id).FirstOrDefault();
            }
            else
            {
                return null;
            }

        }

        // Load data from samples
        private void LoadSampleDataToAssessment(Assessment assessment)
        {
            AssessmentType assessmentType = (unit.AssessmentTypeRepository.Get(a => a.Id == assessment.AssessmentTypeId)).FirstOrDefault<AssessmentType>();
            if (assessmentType != null)
            {
                foreach (AreaSample areaSample in assessmentType.AreaSamples)
                {
                    Area newArea = new Area
                    {
                        Name = areaSample.Name,
                        Description = areaSample.Description,
                        Order = areaSample.Order
                    };

                    foreach (CriteriaSample criteriaSample in areaSample.CriteriaSamples)
                    {
                        Criterion newCriterion = new Criterion
                        {
                            CostConstraintImpactId = criteriaSample.CostConstraintImpactId,
                            QualityConstraintImpactId = criteriaSample.QualityConstraintImpactId,
                            ScopeConstraintImpactId = criteriaSample.ScopeConstraintImpactId,
                            TimeConstraintImpactId = criteriaSample.TimeConstraintImpactId,
                            Name = criteriaSample.Name,
                            Order = criteriaSample.Order
                        };

                        foreach (IndicatorSample indicatorSample in criteriaSample.IndicatorSamples)
                        {
                            Indicator newIndicator = new Indicator
                            {
                                Name = indicatorSample.Name,
                                Order = indicatorSample.Order
                            };

                            newCriterion.Indicators.Add(newIndicator);
                        }

                        newArea.Criteria.Add(newCriterion);
                    }

                    assessment.Areas.Add(newArea);
                }
            }
        }

        #endregion

        #region Create Custom DTO Create Methods

        /// <summary>
        /// Create Indicator With Score
        /// </summary>
        /// <param name="indicator">Indicator Entity</param> 
        public FullIndicator CreateFullIndicator(Indicator indicator)
        {
            if (indicator == null)
            {
                return null;
            }

            var result = new FullIndicator
            {
                IndicatorId = indicator.Id,
                IndicatorName = indicator.Name,
                IndicatorScore = (indicator.ScoreId == null ? String.Empty : indicator.IndicatorScore.Name),
                IndicatorComment = indicator.Comment,
                IndicatorScoreId = (indicator.ScoreId == null ? 0 : indicator.IndicatorScore.Id),
                IndicatorScoreWeight = (indicator.ScoreId == null ? -1 : indicator.IndicatorScore.Weight)
            };

            return result;
        }

        /// <summary>
        /// Create Criteria With ScoreLeft For Given Assessment
        /// </summary>
        /// <param name="assessment">Assessment Entity</param> 
        public IQueryable<CriteriaWithScoreLeft> CreateCriteriaWithScoreLeft(Assessment assessment)
        {
            var query = from criteria in Unit.CriterionRepository.Get()
                        join areas in Unit.AreaRepository.Get() on criteria.AreaId equals areas.Id
                        join indicators in Unit.IndicatorRepository.Get() on criteria.Id equals indicators.CriteriaId into ind
                        where areas.AssesmentId == assessment.Id
                        from i in ind.DefaultIfEmpty()
                        select new 
                        {
                            CriteriaId = criteria.Id,
                            CriteriaName = criteria.Name,
                            AreaId = criteria.AreaId,
                            Score = i.ScoreId ?? 0
                        };

            if (!query.Any())
            {
                ThrowIfParameterIsNull(typeof(CriteriaWithScoreLeft));
            }

            var result = from i in query
                         group i by new
                         {
                             i.CriteriaId,
                             i.CriteriaName,
                             i.AreaId
                         } into g
                         select new CriteriaWithScoreLeft
                         {
                             CriteriaId = g.Key.CriteriaId,
                             CriteriaName = g.Key.CriteriaName,
                             AreaId = g.Key.AreaId,
                             ScoreLeft = g.Count() - g.Count(x => x.Score > 0)
                         };

            return result;
        }

        /// <summary>
        /// Retrieve Quarterly Report's Data For Specified Assessments
        /// </summary>
        public IEnumerable<QuaterlyReport> CreateQuarterlyReport(IQueryable<Assessment> assessments)
        {
            var result = new List<QuaterlyReport>();

            #region source

            var source = from i in Unit.IndicatorRepository.Get()
                         join a in assessments on i.Criterion.Area.AssesmentId equals a.Id
                         join e in Unit.IndicatorScoreRepository.Get() on i.ScoreId equals e.Id
                         select new
                         {
                             UnitName = a.Unit,
                             Score = e.Weight
                         };

            #endregion

            #region Grouping By Units With Average Indicator Score

            var unitAverageIndicatorSource = from i in source
                                             group i by i.UnitName into g
                                             select new
                                             {
                                                 UnitName = g.Key,
                                                 Score = g.Average(x => x.Score)
                                             };

            #endregion

            #region Filling in result 

            foreach (var i in unitAverageIndicatorSource)
            {
                //Getting Assessments of Given Unit
                var unitAssessments = from a in assessments where a.Unit == i.UnitName select a;

                //Calculating Amount of Recommendations For All Assessments of Given Unit
                var recomendations = (from recommendations in Unit.RecommendationRepository.Get()
                                      join criteria in Unit.CriterionRepository.Get() on recommendations.CriterionId equals criteria.Id
                                      join a in unitAssessments on criteria.Area.AssesmentId equals a.Id
                                      select new
                                      {
                                          recommendations.CriterionId,
                                          recommendations.Id
                                      }).Count();

                //Calculating Amount of Improvements For All Assessments of Given Unit
                var improvements = (from actionitems in Unit.ActionItemsRepository.Get()
                                    join criteria in Unit.CriterionRepository.Get() on actionitems.CriteriaId equals criteria.Id
                                    join a in unitAssessments on criteria.Area.AssesmentId equals a.Id
                                    select new
                                    {
                                        actionitems.CriteriaId,
                                        actionitems.Id
                                    }).Count();

                //Getting Totals Asessment's Features For Given Unit
                result.Add(new QuaterlyReport
                {
                    UnitName = i.UnitName,
                    Average = Decimal.Round((decimal)i.Score, 2),
                    Assessments = unitAssessments.Count(),
                    Recommendations = recomendations,     
                    Improvements = improvements,    
                    CoordinatorTime = unitAssessments.Sum(x => x.CoordinatorTime ?? 0),
                    ExpertTime = unitAssessments.Sum(x => x.ExpertTime ?? 0),
                    ServiceQualityScore = Decimal.Round((decimal)unitAssessments.Sum(x => x.ServiceQualityScore ?? 0), 2)
                });
            }

            #endregion

            #region Adding Row For Totals of All Unit

            if (result.Any())
            {
                result.Add(new QuaterlyReport
                {
                    UnitName = "Total",
                    Average = Decimal.Round((decimal)result.Average(x => x.Average), 2),
                    Assessments = result.Sum(x => x.Assessments),
                    Recommendations = result.Sum(x => x.Recommendations),
                    Improvements = result.Sum(x => x.Improvements),
                    CoordinatorTime = result.Sum(x => x.CoordinatorTime),
                    ExpertTime = result.Sum(x => x.ExpertTime),
                    ServiceQualityScore = Decimal.Round((decimal)result.Average(x => x.ServiceQualityScore), 2)
                });
            }

            #endregion

            return result;
        }

        #endregion

    }
}
