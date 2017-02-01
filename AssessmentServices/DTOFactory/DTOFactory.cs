using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentServices.ModelsDTO;
using AssessmentModel;
using System.Net.Http;

using AssessmentServices.UnitOfWork;

namespace AssessmentServices.Factory
{
    public class DTOFactory
    {
        private const int defaultConstraintId = 1;

        private ICompetenceManagerUnitOfWork unit;

        private System.Web.Http.Routing.UrlHelper _UrlHelper;

        public DTOFactory(ICompetenceManagerUnitOfWork _unit)
        {
            // _UrlHelper = new System.Web.Http.Routing.UrlHelper(request);
            unit = _unit;
        }

        #region Create methods

        public AreaDTO Create(Area area)
        {
            return new AreaDTO()
            {
                Id = area.Id,
                Name = area.Name,
                Description = area.Description,
                AssesmentId = area.AssesmentId
            };
        }

        public AssessmentDTO Create(Assessment assessment)
        {
            return new AssessmentDTO()
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
                Comment = assessment.Comment,
                AssessmentTypeId = assessment.AssessmentTypeId,

                // it is an example of URL
                // _Url = _UrlHelper.Link("Assessments", new { id = assessment.Id })
            };
        }

        public AreaSampleDTO Create(AreaSample areaSample)
        {
            return new AreaSampleDTO()
            {
                Id = areaSample.Id,
                Name = areaSample.Name,
                Description = areaSample.Description,
                AssessmentTypeId = areaSample.AssesmentTypeId
            };
        }

        public AssessmentTypeDTO Create(AssessmentType assessmentType)
        {
            return new AssessmentTypeDTO()
            {
                Id = assessmentType.Id,
                Name = assessmentType.Name,
                Description = assessmentType.Description,
                URL = assessmentType.URL
            };
        }

        public ConstraintImpactDTO Create(ConstraintImpact constraintImpact)
        {
            return new ConstraintImpactDTO()
            {
                Id = constraintImpact.Id,
                Name = constraintImpact.Name,
                Weight = constraintImpact.Weight
            };
        }

        public CriteriaSampleDTO Create(CriteriaSample criteriaSample)
        {
            return new CriteriaSampleDTO()
            {
                Id = criteriaSample.Id,
                Name = criteriaSample.Name,
                AreaId = criteriaSample.AreaId,
                ScopeConstraintImpactId = criteriaSample.ScopeConstraintImpactId,
                TimeConstraintImpactId = criteriaSample.TimeConstraintImpactId,
                QualityConstraintImpactId = criteriaSample.QualityConstraintImpactId,
                CostConstraintImpactId = criteriaSample.CostConstraintImpactId
            };
        }

        public CriteriaScoreDTO Create(CriteriaScore criteriaScore)
        {
            return new CriteriaScoreDTO()
            {
                Id = criteriaScore.Id,
                Name = criteriaScore.Name,
                Weight = criteriaScore.Weight
            };
        }

        public CriterionDTO Create(Criterion criterion)
        {
            return new CriterionDTO()
            {
                Id = criterion.Id,
                Name = criterion.Name,
                AreaId = criterion.AreaId,
                ScopeConstraintImpactId = criterion.ScopeConstraintImpactId,
                TimeConstraintImpactId = criterion.TimeConstraintImpactId,
                QualityConstraintImpactId = criterion.QualityConstraintImpactId,
                CostConstraintImpactId = criterion.CostConstraintImpactId
            };
        }

        public IndicatorDTO Create(Indicator indicator)
        {
            return new IndicatorDTO()
            {
                Id = indicator.Id,
                Name = indicator.Name,
                CriteriaId = indicator.CriteriaId,
                ScoreId = indicator.ScoreId,
                Comment = indicator.Comment
            };
        }

        public IndicatorSampleDTO Create(IndicatorSample indicatorSample)
        {
            return new IndicatorSampleDTO()
            {
                Id = indicatorSample.Id,
                Name = indicatorSample.Name,
                CriteriaSampleId = indicatorSample.CriteriaSampleId,
                Order = indicatorSample.Order
            };
        }

        public IndicatorScoreDTO Create(IndicatorScore indicatorScore)
        {
            return new IndicatorScoreDTO()
            {
                Id = indicatorScore.Id,
                Name = indicatorScore.Name,
                Weight = indicatorScore.Weight
            };
        }

        public ProjectConstraintDTO Create(ProjectConstraint projectConstraint)
        {
            return new ProjectConstraintDTO()
            {
                Id = projectConstraint.Id,
                Name = projectConstraint.Name,
                Weight = projectConstraint.Weight
            };
        }

        public UserDTO Create(User user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                Name = user.Name,
                Login = user.Login,
                IsCoordinator = user.IsCoordinator,
                IsCompetenceManager = user.IsCompetenceManager,
                SSE_Id = user.SSE_Id
            };
        }

        #endregion

        #region Parse methods

        public Area Parse(AreaDTO areaDTO)
        {
            if(areaDTO.Id != 0)
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
            if(areaSampleDTO.Id != 0)
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
            if (assessmentDTO.Id != 0)
            {
                return ParseForEdit(assessmentDTO);
            }
            else
            {
                return ParseForAdd(assessmentDTO);
            }            
        }

        public AssessmentType Parse(AssessmentTypeDTO assessmentTypeDTO)
        {
            if (assessmentTypeDTO.Id != 0)
            {
                return ParseForEdit(assessmentTypeDTO);
            }
            else
            {
                return ParseForAdd(assessmentTypeDTO);
            }
        }

        public ConstraintImpact Parse(ConstraintImpactDTO constrImpactDTO)
        {
            if (constrImpactDTO.Id != 0)
            {
                return ParseForEdit(constrImpactDTO);
            }
            else
            {
                return ParseForAdd(constrImpactDTO);
            }
        }

        public CriteriaSample Parse(CriteriaSampleDTO crSampleDTO)
        {
            if (crSampleDTO.Id != 0)
            {
                return ParseForEdit(crSampleDTO);
            }
            else
            {
                return ParseForAdd(crSampleDTO);
            }
        }

        public CriteriaScore Parse(CriteriaScoreDTO crScoreDTO)
        {
            if (crScoreDTO.Id != 0)
            {
                return ParseForEdit(crScoreDTO);
            }
            else
            {
                return ParseForAdd(crScoreDTO);
            }
        }

        public Criterion Parse(CriterionDTO crDTO)
        {
            Criterion criterion = new Criterion()
            {
                AreaId = crDTO.AreaId,
                CostConstraintImpactId = crDTO.CostConstraintImpactId,
                Id = crDTO.Id,
                Name = crDTO.Name         
            };

            if(criterion.Id == 0)
            {
                criterion.QualityConstraintImpactId = crDTO.QualityConstraintImpactId;
                criterion.ScopeConstraintImpactId = crDTO.ScopeConstraintImpactId;
                criterion.TimeConstraintImpactId = crDTO.TimeConstraintImpactId;
            }
            else
            {
                criterion.QualityConstraintImpactId = defaultConstraintId;
                criterion.ScopeConstraintImpactId = defaultConstraintId;
                criterion.TimeConstraintImpactId = defaultConstraintId;
            }

            return criterion;
        }

        public Indicator Parse(IndicatorDTO indicatorDTO)
        {
            if (indicatorDTO.Id != 0)
            {
                return ParseForEdit(indicatorDTO);
            }
            else
            {
                return ParseForAdd(indicatorDTO);
            }
        }

        public IndicatorSample Parse(IndicatorSampleDTO indSampleDTO)
        {
            if (indSampleDTO.Id != 0)
            {
                return ParseForEdit(indSampleDTO);
            }
            else
            {
                return ParseForAdd(indSampleDTO);
            }
        }

        public IndicatorScore Parse(IndicatorScoreDTO indScoreDTO)
        {
            if (indScoreDTO.Id != 0)
            {
                return ParseForEdit(indScoreDTO);
            }
            else
            {
                return ParseForAdd(indScoreDTO);
            }
        }

        public ProjectConstraint Parse(ProjectConstraintDTO prConstrDTO)
        {
            if (prConstrDTO.Id != 0)
            {
                return ParseForEdit(prConstrDTO);
            }
            else
            {
                return ParseForAdd(prConstrDTO);
            }
        }

        public User Parse(UserDTO user)
        {
            var _user = new User()
            {
                Id = user.Id,
                Name = user.Name,
                SSE_Id = user.SSE_Id,
                Login=user.Login,
                IsCompetenceManager=user.IsCompetenceManager,
                IsCoordinator=user.IsCoordinator
            };

            return _user;
        }

        #endregion

        #region Parse for Edit-Add Methods

        private ProjectConstraint ParseForEdit(ProjectConstraintDTO projectConstraintDTO)
        {
            if (projectConstraintDTO != null)
            {
                var projectConstraint = unit.ProjectConstrintRepository.Get(p => p.Id == projectConstraintDTO.Id).FirstOrDefault();

                if (projectConstraint.Id != projectConstraintDTO.Id)
                {
                    projectConstraint.Id = projectConstraintDTO.Id;
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
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} EDIT operation temporary NOT SUPPORTED for ProjectConstraint table...", Environment.NewLine));
            }
        }

        private ProjectConstraint ParseForAdd(ProjectConstraintDTO projectConstraintDTO)
        {
            if (projectConstraintDTO != null)
            {
                var projectConstraint = new ProjectConstraint()
                {
                    Name = projectConstraintDTO.Name,
                    Id = projectConstraintDTO.Id,
                    Weight = projectConstraintDTO.Weight
                };

                return projectConstraint;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} ADD operation temporary NOT SUPPORTED for ProjectConstraint table...", Environment.NewLine));
            }
        }

        private IndicatorScore ParseForEdit(IndicatorScoreDTO indicatorScoreDTO)
        {
            if (indicatorScoreDTO != null)
            {
                var indicatorScore = unit.IndicatorScoreRepository.Get(p => p.Id == indicatorScoreDTO.Id).FirstOrDefault();

                if (indicatorScore.Name != indicatorScoreDTO.Name)
                {
                    indicatorScore.Name = indicatorScoreDTO.Name;
                }
                if (indicatorScore.Weight != indicatorScoreDTO.Weight)
                {
                    indicatorScore.Weight = indicatorScoreDTO.Weight;
                }
                if (indicatorScore.Id != indicatorScoreDTO.Id)
                {
                    indicatorScore.Id = indicatorScoreDTO.Id;
                }

                return indicatorScore;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} EDIT operation temporary NOT SUPPORTED for IndicatorScore table...", Environment.NewLine));
            }
        }

        private IndicatorScore ParseForAdd(IndicatorScoreDTO indicatorScoreDTO)
        {
            if (indicatorScoreDTO != null)
            {
                var indicatorScore = new IndicatorScore()
                {
                    Id = indicatorScoreDTO.Id,
                    Name = indicatorScoreDTO.Name,
                    Weight = indicatorScoreDTO.Weight
                };

                return indicatorScore;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} ADD operation temporary NOT SUPPORTED for IndicatorScore table...", Environment.NewLine));
            }
        }

        private IndicatorSample ParseForEdit(IndicatorSampleDTO indicatorSampleDTO)
        {
            if (indicatorSampleDTO != null)
            {
                var indicatorSample = unit.IndicatorSampleRepository.Get(p => p.Id == indicatorSampleDTO.Id).FirstOrDefault();

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
                if (indicatorSample.Id != indicatorSampleDTO.Id)
                {
                    indicatorSample.Id = indicatorSampleDTO.Id;
                }

                return indicatorSample;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} EDIT operation temporary NOT SUPPORTED for IndicatorSample table...", Environment.NewLine));
            }
        }

        private IndicatorSample ParseForAdd(IndicatorSampleDTO indicatorSampleDTO)
        {
            if (indicatorSampleDTO != null)
            {
                var indicatorSample = new IndicatorSample()
                {
                    Id = indicatorSampleDTO.Id,
                    Name = indicatorSampleDTO.Name,
                    Order = indicatorSampleDTO.Order,
                    CriteriaSampleId = indicatorSampleDTO.CriteriaSampleId
                };

                return indicatorSample;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} ADD operation temporary NOT SUPPORTED for IndicatorSample table...", Environment.NewLine));
            }
        }

        private Indicator ParseForEdit(IndicatorDTO indicatorDTO)
        {
            if (indicatorDTO != null)
            {
                var indicator = unit.IndicatorRepository.Get(p => p.Id == indicatorDTO.Id).FirstOrDefault();
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
                if (indicator.Id != indicatorDTO.Id)
                {
                    indicator.Id = indicatorDTO.Id;
                }

                return indicator;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} EDIT oparation temporary NOT SUPPORTED for Indicator table...", Environment.NewLine));
            }
        }

        private Indicator ParseForAdd(IndicatorDTO indicatorDTO)
        {
            if (indicatorDTO != null)
            {
                var indicator = new Indicator()
                {
                    Name = indicatorDTO.Name,
                    Id = indicatorDTO.Id,
                    Comment = indicatorDTO.Comment,
                    ScoreId = indicatorDTO.ScoreId,
                    CriteriaId = indicatorDTO.CriteriaId
                };

                return indicator;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY {0} ADD operation temporaty NOT SUPPORTED for Indicator table", Environment.NewLine));
            }
        }

        private Criterion ParseForEdit(CriterionDTO criterionDTO)
        {
            if (criterionDTO != null)
            {
                var criterion = unit.CriterionRepository.Get(p => p.Id == criterionDTO.Id).FirstOrDefault();

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
                if (criterion.Id != criterionDTO.Id)
                {
                    criterion.Id = criterionDTO.Id;
                }
                if (criterion.QualityConstraintImpactId != criterionDTO.QualityConstraintImpactId)
                {
                    criterion.QualityConstraintImpactId = criterionDTO.QualityConstraintImpactId;
                }
                if (criterion.TimeConstraintImpactId != criterionDTO.TimeConstraintImpactId)
                {
                    criterion.TimeConstraintImpactId = criterionDTO.TimeConstraintImpactId;
                }
                if(criterion.ScopeConstraintImpactId != criterionDTO.ScopeConstraintImpactId)
                {
                    criterion.ScopeConstraintImpactId = criterionDTO.ScopeConstraintImpactId;
                }

                return criterion;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} EDIT operation temporary NOT SUPPORTED for Criteria table!!!", Environment.NewLine));
            }
        }

        private Criterion ParseForAdd(CriterionDTO criterionDTO)
        {
            if (criterionDTO != null)
            {
                var criterion = new Criterion()
                {
                    Name = criterionDTO.Name,
                    Id = criterionDTO.Id,
                    AreaId = criterionDTO.AreaId,
                    CostConstraintImpactId = criterionDTO.CostConstraintImpactId,
                    QualityConstraintImpactId = criterionDTO.QualityConstraintImpactId,
                    TimeConstraintImpactId = criterionDTO.TimeConstraintImpactId,
                    ScopeConstraintImpactId = criterionDTO.ScopeConstraintImpactId
                };

                return criterion;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} ADD operation temporary unavailable for Criteria table!!!", Environment.NewLine));
            }
        }

        private CriteriaScore ParseForEdit(CriteriaScoreDTO criteriaScoreDTO)
        {
            var criteriaScore = unit.CriteriaScoreRepository.Get(p => p.Id == criteriaScoreDTO.Id).FirstOrDefault();

            if (criteriaScoreDTO != null)
            {
                if (criteriaScore.Name != criteriaScoreDTO.Name)
                {
                    criteriaScore.Name = criteriaScoreDTO.Name;
                }
                if (criteriaScore.Weight != criteriaScoreDTO.Weight)
                {
                    criteriaScore.Weight = criteriaScoreDTO.Weight;
                }
                if (criteriaScore.Id != criteriaScoreDTO.Id)
                {
                    criteriaScore.Id = criteriaScoreDTO.Id;
                }

                return criteriaScore;
            }
            else
            {
                throw new NotSupportedException("BAD GATEWAY!!! \n EDIT operation temporary NOT SUPPORTED for CriteriaScore table!!!");
            }
        }

        private CriteriaScore ParseForAdd(CriteriaScoreDTO criteriaScoreDTO)
        {
            if (criteriaScoreDTO != null)
            {
                var criteriaScore = new CriteriaScore()
                {
                    Name = criteriaScoreDTO.Name,
                    Id = criteriaScoreDTO.Id,
                    Weight = criteriaScoreDTO.Weight
                };

                return criteriaScore;
            }
            else
            {
                throw new NotSupportedException(String.Format("BAD GATEWAY!!! {0} ADD operation temporary NOT SUPPORTED for CriteriaScore table", Environment.NewLine));
            }
        }

        private CriteriaSample ParseForEdit(CriteriaSampleDTO criteriaSampleDTO)
        {
            var criteriaSample = unit.CriteriaSampleRepository.Get(p => p.Id == criteriaSampleDTO.Id).FirstOrDefault();

            if(criteriaSample != null)
            {
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
                    criteriaSample.ScopeConstraintImpactId = criteriaSampleDTO.CostConstraintImpactId;
                }
                if (criteriaSample.TimeConstraintImpactId != criteriaSampleDTO.TimeConstraintImpactId)
                {
                    criteriaSample.TimeConstraintImpactId = criteriaSampleDTO.TimeConstraintImpactId;
                }

                return criteriaSample;
            }
            else
            {
                throw new NotSupportedException("BAD GATEWAY!!! \n EDIT operation temporary NOT SUPPORTED!!!");
            }
        }

        private CriteriaSample ParseForAdd(CriteriaSampleDTO criteriaSampleDTO)
        {
            if (criteriaSampleDTO != null)
            {
                var criteriaSample = new CriteriaSample()
                {
                    Name = criteriaSampleDTO.Name,
                    AreaId = criteriaSampleDTO.AreaId,
                    CostConstraintImpactId = criteriaSampleDTO.CostConstraintImpactId
                };

                if (criteriaSampleDTO.Id != 0)
                {
                    criteriaSample.QualityConstraintImpactId = defaultConstraintId;
                    criteriaSample.ScopeConstraintImpactId = defaultConstraintId;
                    criteriaSample.TimeConstraintImpactId = defaultConstraintId;
                }
                else
                {
                    criteriaSample.QualityConstraintImpactId = defaultConstraintId;
                    criteriaSample.TimeConstraintImpactId = defaultConstraintId;
                    criteriaSample.ScopeConstraintImpactId = defaultConstraintId;
                }

                return criteriaSample;
            }
            else
            {
                throw new NotSupportedException("BAD GATEWAY!!! \n ADD operation temporary NOT SUPPORTED!!!");
            }
        }

        private ConstraintImpact ParseForEdit(ConstraintImpactDTO constraintDTO)
        {
            var constraintImpact = unit.ConstraintImpactRepository.Get(p => p.Id == constraintDTO.Id).FirstOrDefault();

            if (constraintImpact != null)
            {
                if (constraintImpact.Name != constraintDTO.Name)
                {
                    constraintImpact.Name = constraintDTO.Name;
                }
                if (constraintImpact.Weight != constraintDTO.Id)
                {
                    constraintImpact.Weight = constraintDTO.Weight;
                }

                return constraintImpact;
            }
            else
            {
                throw new NullReferenceException("BAD GATEWAY!!! \n Cannot find ConstraintImpact object in Database!!!");
            }
        }

        private ConstraintImpact ParseForAdd(ConstraintImpactDTO constraintDTO)
        {
            if (constraintDTO != null)
            {
                var constraintImpact = new ConstraintImpact()
                {
                    Id = constraintDTO.Id,
                    Name = constraintDTO.Name,
                    Weight = constraintDTO.Weight
                };

                return constraintImpact;
            }
            else
            {
                throw new NullReferenceException("BAD GATEWAY!!! \n Cannot insert ConstraintImpact object into Database!!!");
            }
        }

        private AssessmentType ParseForEdit(AssessmentTypeDTO assessmentTypeDTO)
        {
            var asmntType = unit.AssessmentTypeRepository.Get(p => p.Id == assessmentTypeDTO.Id).FirstOrDefault();

            if (asmntType != null)
            {
                if (asmntType.Description != assessmentTypeDTO.Description)
                {
                    asmntType.Description = assessmentTypeDTO.Description;
                }
                if (asmntType.Name != assessmentTypeDTO.Name)
                {
                    asmntType.Name = assessmentTypeDTO.Name;
                }
                if (asmntType.URL != assessmentTypeDTO.URL)
                {
                    asmntType.URL = assessmentTypeDTO.URL;
                }

                return asmntType;
            }
            else
            {
                throw new NullReferenceException("AssessmentType object NOT FOUND in Database");
            }
        }

        private AssessmentType ParseForAdd(AssessmentTypeDTO assessmentTypeDTO)
        {
            if (assessmentTypeDTO != null)
            {
                AssessmentType asmntType = new AssessmentType()
                {
                    Name = assessmentTypeDTO.Name,
                    Description = assessmentTypeDTO.Description,
                    URL = assessmentTypeDTO.URL,
                    Id = assessmentTypeDTO.Id
                };

                return asmntType;
            }
            else
            {
                throw new NotSupportedException("BAD GATEWAY!!! \n Additing new AssessmentType NOT SUPPORTED right now!");
            }
        }

        /******************************************************************************************************************/

        private Area ParseForEdit(AreaDTO areaDTO)
        {
            Area area = unit.AreaRepository.Get(p => p.Id == areaDTO.Id).FirstOrDefault();

            if(area != null)
            {
                if(area.Name != areaDTO.Name)
                {
                    area.Name = areaDTO.Name;
                }

                if(area.Description != areaDTO.Description)
                {
                    area.Description = areaDTO.Description;
                }

                if(area.AssesmentId != areaDTO.AssesmentId)
                {
                    area.AssesmentId = areaDTO.AssesmentId;
                }

                return area;
            }

            return null;
        }

        private Area ParseForAdd(AreaDTO areaDTO)
        {
            Area area = new Area()
            {
                Id = areaDTO.Id,
                Name = areaDTO.Name,
                Description = areaDTO.Description,
                AssesmentId = areaDTO.AssesmentId,
            };

            return area;
        }

        private AreaSample ParseForEdit(AreaSampleDTO areaSampleDTO)
        {
            AreaSample areaSample = unit.AreaSamlpeRepository.Get(p => p.Id == areaSampleDTO.Id).FirstOrDefault();

            if(areaSample != null)
            {
                if (areaSample.Name != areaSampleDTO.Name)
                {
                    areaSample.Name = areaSampleDTO.Name;
                }

                if(areaSample.Description != areaSampleDTO.Description)
                {
                    areaSample.Description = areaSampleDTO.Description;
                }

                if(areaSample.AssesmentTypeId != areaSampleDTO.AssessmentTypeId)
                {
                    areaSample.AssesmentTypeId = areaSampleDTO.AssessmentTypeId;
                }

                return areaSample;
            }

            return null;
        }

        private AreaSample ParseForAdd(AreaSampleDTO areaSampleDTO)
        {
            var areaSample = new AreaSample()
            {
                Id = areaSampleDTO.Id,
                Name = areaSampleDTO.Name,
                Description = areaSampleDTO.Description,
                AssesmentTypeId = areaSampleDTO.AssessmentTypeId
            };

            return areaSample;
        }

        private Assessment ParseForEdit(AssessmentDTO assessmentDTO)
        {
            Assessment assessment = unit.AssessmentRepository.Get(p => p.Id == assessmentDTO.Id).FirstOrDefault();

            if (assessment != null)
            {
                if (assessment.Comment != assessmentDTO.Comment)
                {
                    assessment.Comment = assessmentDTO.Comment;
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

                if (assessment.Recommendations != assessmentDTO.Recommendations)
                {
                    assessment.Recommendations = assessmentDTO.Recommendations;
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


                if (assessment.ProjectManager.Name != assessmentDTO.ProjectManager)
                {
                    assessment.ProjectManager = LoadUserData(assessmentDTO.ProjectManager);
                }

                if (assessment.Coordinator.Name != assessmentDTO.Coordinator)
                {
                    assessment.Coordinator = LoadUserData(assessmentDTO.Coordinator);
                }

                if (assessment.TechLead.Name != assessmentDTO.TechLead)
                {
                    assessment.TechLead = LoadUserData(assessmentDTO.TechLead);
                }

                if (assessment.AssessmentTypeId != assessmentDTO.AssessmentTypeId)
                {
                    assessment.AssessmentTypeId = assessmentDTO.AssessmentTypeId;
                    assessment.Areas = new HashSet<Area>();
                    LoadSampleDataToAssessment(assessment);
                }

                return assessment;
            }
            else
            {
                return null;
            }
        }

        private Assessment ParseForAdd(AssessmentDTO assessmentDTO)
        {
            Assessment assessment = new Assessment()
            {
                AssessmentTypeId = assessmentDTO.AssessmentTypeId,
                Comment = assessmentDTO.Comment,
                Description = assessmentDTO.Description,
                FinishDate = assessmentDTO.FinishDate,
                Id = assessmentDTO.Id,
                Name = assessmentDTO.Name,
                Project = assessmentDTO.Project,
                ProjectId = assessmentDTO.ProjectId,
                StartDate = assessmentDTO.StartDate,
                Unit = assessmentDTO.Unit,
                UnitId = assessmentDTO.UnitId,
                URL = assessmentDTO.URL,
                Version = assessmentDTO.Version,
                Recommendations = assessmentDTO.Recommendations,
                Improvements = assessmentDTO.Improvements,
                CoordinatorTime = assessmentDTO.CoordinatorTime,
                ExpertTime = assessmentDTO.ExpertTime,
                ServiceQualityScore = assessmentDTO.ServiceQualityScore,
            };

            assessment.ScopeProjectConstraintId = defaultConstraintId;
            assessment.TimeProjectConstraintId = defaultConstraintId;
            assessment.QualityProjectConstraintId = defaultConstraintId;
            assessment.CostProjectConstraintId = defaultConstraintId;

            assessment.Coordinator = LoadUserData(assessmentDTO.Coordinator);
            assessment.TechLead = LoadUserData(assessmentDTO.TechLead);
            assessment.ProjectManager = LoadUserData(assessmentDTO.ProjectManager);
            LoadSampleDataToAssessment(assessment);

            return assessment;
        }



        #endregion

        #region Help methods

        private User LoadUserData(string nameFromDTO)
        {
            if (nameFromDTO != null)
            {
                return unit.UserRepository.Get(p => p.Name == nameFromDTO).FirstOrDefault();
            }
            else
            {
                return null;
            }
        }

        // TODO: initialization for Experts?

        // Load data from samples
        private void LoadSampleDataToAssessment(Assessment assessment)
        {
            AssessmentType assessmentType = (unit.AssessmentTypeRepository.Get(a => a.Id == assessment.AssessmentTypeId)).FirstOrDefault<AssessmentType>();
            if (assessmentType != null)
            {
                foreach (AreaSample areaSample in assessmentType.AreaSamples)
                {
                    Area newArea = new Area()
                    {
                        Name = areaSample.Name,
                        Description = areaSample.Description
                    };

                    foreach (CriteriaSample criteriaSample in areaSample.CriteriaSamples)
                    {
                        Criterion newCriterion = new Criterion()
                        {
                            CostConstraintImpactId = criteriaSample.CostConstraintImpactId,
                            QualityConstraintImpactId = criteriaSample.QualityConstraintImpactId,
                            ScopeConstraintImpactId = criteriaSample.ScopeConstraintImpactId,
                            TimeConstraintImpactId = criteriaSample.TimeConstraintImpactId,
                            Name = criteriaSample.Name
                        };

                        foreach (IndicatorSample indicatorSample in criteriaSample.IndicatorSamples)
                        {
                            Indicator newIndicator = new Indicator()
                            {
                                Name = indicatorSample.Name
                            };

                            newCriterion.Indicators.Add(newIndicator);
                        }

                        newArea.Criteria.Add(newCriterion);
                    }

                    assessment.Areas.Add(newArea);
                }
            }
        }
    }

        #endregion
}
