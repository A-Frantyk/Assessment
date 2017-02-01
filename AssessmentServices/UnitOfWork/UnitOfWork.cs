using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork, IUserUnitOfWork, IExpertUnitOfWork, ICoordinatorUnitOfWork, ICompetenceManagerUnitOfWork
    {

        #region There are a stub for Multithreading

        private static volatile IUnitOfWork unit;                           // declaration an instance of UnitOfWork

        private static readonly object lockObject = new Object();           // declaration an object for locking 


        // IUnitOfWork implementation
        public static IUnitOfWork GetUnitInstance                           // There are a realization of Singleton pattern for UnityOfWork class
        {
            get
            {
                if (unit == null)
                {
                    lock (lockObject)
                    {
                        if (unit == null)
                        {
                            unit = new UnitOfWork();
                        }
                    }
                }

                return unit;
            }
        }

        #endregion

        #region declaration of fields
        private AssessmentModelContext context = new AssessmentModelContext();

        //not administrative repositories
        private GenericRepository<ActionItems> actionItemsRepository;
        private GenericRepository<Area> areaRepository;
        private GenericRepository<Assessment> assessmentRepository;
        private GenericRepository<AssessmentType> assesmentTypeRepository;
        private GenericRepository<ConstraintImpact> constraintImpactRepository;
        private GenericRepository<CriteriaScore> criteriaScoreRepository;
        private GenericRepository<Criterion> criterionRepository;
        private GenericRepository<Indicator> indicatorRepository;
        private GenericRepository<IndicatorScore> indicatorScoreRepository;
        private GenericRepository<ProjectConstraint> projectConstrintRepository;
        private GenericRepository<Recommendation> recommendationRepository;
        private GenericRepository<Attachment> attachmentRepository;

        //administrative repositories
        private GenericRepository<AreaSample> areaSampleRepository;
        private GenericRepository<CriteriaSample> criteriaSampleRepository;
        private GenericRepository<IndicatorSample> indicatorSampleRepository;
        private GenericRepository<User> userRepository;
        #endregion

        #region Private properties

        //Implemented to avoid code repeats during the realisation of interfaces
        private GenericRepository<ActionItems> ActionItemsRepository
        {
            get
            {
                if (this.actionItemsRepository == null)
                {
                    this.actionItemsRepository = new GenericRepository<ActionItems>(context);
                }

                return actionItemsRepository;
            }
        }
        private GenericRepository<Area> AreaRepository
        {
            get
            {
                if (this.areaRepository == null)
                {
                    this.areaRepository = new GenericRepository<Area>(context);
                }

                return areaRepository;
            }
        }
        private GenericRepository<Assessment> AssessmentRepository
        {
            get
            {
                if (this.assessmentRepository == null)
                {
                    this.assessmentRepository = new GenericRepository<Assessment>(context);
                }

                return assessmentRepository;
            }
        }

        private GenericRepository<Attachment> AttachmentRepository
        {
            get
            {
                if (this.attachmentRepository == null)
                {
                    this.attachmentRepository = new GenericRepository<Attachment>(context);
                }

                return attachmentRepository;
            }
        }

        private GenericRepository<AssessmentType> AssesmentTypeRepository
        {
            get
            {
                if (this.assesmentTypeRepository == null)
                {
                    this.assesmentTypeRepository = new GenericRepository<AssessmentType>(context);
                }

                return assesmentTypeRepository;
            }
        }
        private GenericRepository<ConstraintImpact> ConstraintImpactRepository
        {
            get
            {
                if (this.constraintImpactRepository == null)
                {
                    this.constraintImpactRepository = new GenericRepository<ConstraintImpact>(context);
                }

                return constraintImpactRepository;
            }
        }
        private GenericRepository<CriteriaScore> CriteriaScoreRepository
        {
            get
            {
                if (this.criteriaScoreRepository == null)
                {
                    this.criteriaScoreRepository = new GenericRepository<CriteriaScore>(context);
                }

                return criteriaScoreRepository;
            }
        }
        private GenericRepository<Criterion> CriterionRepository
        {
            get
            {
                if (this.criterionRepository == null)
                {
                    this.criterionRepository = new GenericRepository<Criterion>(context);
                }

                return criterionRepository;
            }
        }
        private GenericRepository<Indicator> IndicatorRepository
        {
            get
            {
                if (this.indicatorRepository == null)
                {
                    this.indicatorRepository = new GenericRepository<Indicator>(context);
                }

                return indicatorRepository;
            }
        }
        private GenericRepository<IndicatorScore> IndicatorScoreRepository
        {
            get
            {
                if (this.indicatorScoreRepository == null)
                {
                    this.indicatorScoreRepository = new GenericRepository<IndicatorScore>(context);
                }

                return indicatorScoreRepository;
            }
        }
        private GenericRepository<ProjectConstraint> ProjectConstrintRepository
        {
            get
            {
                if (this.projectConstrintRepository == null)
                {
                    this.projectConstrintRepository = new GenericRepository<ProjectConstraint>(context);
                }

                return projectConstrintRepository;
            }
        }

        private GenericRepository<AreaSample> AreaSampleRepository
        {
            get
            {
                if (this.areaSampleRepository == null)
                {
                    this.areaSampleRepository = new GenericRepository<AreaSample>(context);
                }

                return areaSampleRepository;
            }
        }
        private GenericRepository<CriteriaSample> CriteriaSampleRepository
        {
            get
            {
                if (this.criteriaSampleRepository == null)
                {
                    this.criteriaSampleRepository = new GenericRepository<CriteriaSample>(context);
                }

                return criteriaSampleRepository;
            }
        }
        private GenericRepository<IndicatorSample> IndicatorSampleRepository
        {
            get
            {
                if (this.indicatorSampleRepository == null)
                {
                    this.indicatorSampleRepository = new GenericRepository<IndicatorSample>(context);
                }

                return indicatorSampleRepository;
            }
        }
        private GenericRepository<User> UserRepository
        {
            get
            {
                if (this.userRepository == null)
                {
                    this.userRepository = new GenericRepository<User>(context);
                }

                return userRepository;
            }
        }

        private GenericRepository<Recommendation> RecommendationRepository
        {
            get
            {
                if (this.recommendationRepository == null)
                {
                    this.recommendationRepository = new GenericRepository<Recommendation>(context);
                }

                return recommendationRepository;
            }
        }

        #endregion

        #region Dispose pattern

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        void IDisposable.Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        #endregion

        private void SaveContext()
        {
            context.SaveChanges();
        }

        #region IUserUnitOfWork explicit realization

        IGetOnlyGenericRepository<Assessment> IUserUnitOfWork.AssessmentRepository
        {
            get { return this.AssessmentRepository; }
        }

        #endregion

        #region IExpertUnitOfWork explicit realization

        IFullAccessGenericRepository<ActionItems> IExpertUnitOfWork.ActionItemsRepository
        {
            get { return this.ActionItemsRepository; }
        }

        IGetEditGenericRepository<Assessment> IExpertUnitOfWork.AssessmentRepository
        {
            get { return this.AssessmentRepository; }
        }

        IGetOnlyGenericRepository<CriteriaScore> IExpertUnitOfWork.CriteriaScoreRepository
        {
            get { return this.CriteriaScoreRepository; }
        }

        IGetOnlyGenericRepository<IndicatorScore> IExpertUnitOfWork.IndicatorScoreRepository
        {
            get { return this.IndicatorScoreRepository; }
        }

        IGetOnlyGenericRepository<ConstraintImpact> IExpertUnitOfWork.ConstraintsImpactRepository
        {
            get { return this.ConstraintImpactRepository; }
        }

        IGetOnlyGenericRepository<ProjectConstraint> IExpertUnitOfWork.ProjectConstraintRepository
        {
            get { return this.ProjectConstrintRepository; }
        }

        IFullAccessGenericRepository<Recommendation> IExpertUnitOfWork.RecommendationRepository
        {
            get { return this.RecommendationRepository; }
        }

        void IExpertUnitOfWork.Save()
        {
            this.SaveContext();
        }

        #endregion

        #region ICoordinatorUnitOfWork explicit realization

        IFullAccessGenericRepository<ActionItems> ICoordinatorUnitOfWork.ActionItemsRepository
        {
            get { return this.ActionItemsRepository; }
        }

        IGetEditAddGenericRepository<Assessment> ICoordinatorUnitOfWork.AssessmentRepository
        {
            get { return this.AssessmentRepository; }
        }

        IGetOnlyGenericRepository<AssessmentType> ICoordinatorUnitOfWork.AssessmentTypeRepository
        {
            get { return this.AssesmentTypeRepository; }
        }

        IGetOnlyGenericRepository<User> ICoordinatorUnitOfWork.UserRepository
        {
            get { return UserRepository; }
        }

        IFullAccessGenericRepository<Recommendation> ICoordinatorUnitOfWork.RecommendationRepository
        {
            get { return this.RecommendationRepository; }
        }

        void ICoordinatorUnitOfWork.Save()
        {
            this.SaveContext();
        }

        #endregion

        #region ICompetenceUnitOfWork explicit realization

        IFullAccessGenericRepository<ActionItems> ICompetenceManagerUnitOfWork.ActionItemsRepository
        {
            get { return this.ActionItemsRepository; }
        }

        IFullAccessGenericRepository<Area> ICompetenceManagerUnitOfWork.AreaRepository
        {
            get { return this.AreaRepository; }
        }

        IFullAccessGenericRepository<Assessment> ICompetenceManagerUnitOfWork.AssessmentRepository
        {
            get { return this.AssessmentRepository; }
        }

        IFullAccessGenericRepository<Attachment> ICompetenceManagerUnitOfWork.AttachmentRepository
        {
            get { return this.AttachmentRepository; }
        }

        IFullAccessGenericRepository<AssessmentType> ICompetenceManagerUnitOfWork.AssessmentTypeRepository
        {
            get { return this.AssesmentTypeRepository; }
        }

        IFullAccessGenericRepository<ConstraintImpact> ICompetenceManagerUnitOfWork.ConstraintImpactRepository
        {
            get { return this.ConstraintImpactRepository; }
        }

        IFullAccessGenericRepository<CriteriaScore> ICompetenceManagerUnitOfWork.CriteriaScoreRepository
        {
            get { return this.CriteriaScoreRepository; }
        }

        IFullAccessGenericRepository<Criterion> ICompetenceManagerUnitOfWork.CriterionRepository
        {
            get { return this.CriterionRepository; }
        }

        IFullAccessGenericRepository<Indicator> ICompetenceManagerUnitOfWork.IndicatorRepository
        {
            get { return this.IndicatorRepository; }
        }

        IFullAccessGenericRepository<IndicatorScore> ICompetenceManagerUnitOfWork.IndicatorScoreRepository
        {
            get { return this.IndicatorScoreRepository; }
        }

        IFullAccessGenericRepository<ProjectConstraint> ICompetenceManagerUnitOfWork.ProjectConstrintRepository
        {
            get { return this.ProjectConstrintRepository; }
        }

        IFullAccessGenericRepository<AreaSample> ICompetenceManagerUnitOfWork.AreaSamlpeRepository
        {
            get { return this.AreaSampleRepository; }
        }

        IFullAccessGenericRepository<CriteriaSample> ICompetenceManagerUnitOfWork.CriteriaSampleRepository
        {
            get { return this.CriteriaSampleRepository; }
        }

        IFullAccessGenericRepository<IndicatorSample> ICompetenceManagerUnitOfWork.IndicatorSampleRepository
        {
            get { return this.IndicatorSampleRepository; }
        }

        IFullAccessGenericRepository<User> ICompetenceManagerUnitOfWork.UserRepository
        {
            get { return this.UserRepository; }
        }

        IFullAccessGenericRepository<Recommendation> ICompetenceManagerUnitOfWork.RecommendationRepository
        {
            get { return this.RecommendationRepository; }
        }

        void ICompetenceManagerUnitOfWork.Save()
        {
            this.SaveContext();
        }

        #endregion


        // IUnitOfWork implementation
        IUnitOfWork IUnitOfWork.GetUnitInstance
        {
            get { return GetUnitInstance; }
        }
    }
}
