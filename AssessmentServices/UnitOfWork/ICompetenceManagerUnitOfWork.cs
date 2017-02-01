using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    // Competence Manager has full access to all of the Entities
    public interface ICompetenceManagerUnitOfWork : IDisposable
    {
        IFullAccessGenericRepository<ActionItems> ActionItemsRepository { get; }

        IFullAccessGenericRepository<Area> AreaRepository { get; }

        IFullAccessGenericRepository<Assessment> AssessmentRepository { get; }

        IFullAccessGenericRepository<AssessmentType> AssessmentTypeRepository { get; }

        IFullAccessGenericRepository<ConstraintImpact> ConstraintImpactRepository { get; }

        IFullAccessGenericRepository<CriteriaScore> CriteriaScoreRepository { get; }

        IFullAccessGenericRepository<Criterion> CriterionRepository { get; }

        IFullAccessGenericRepository<Indicator> IndicatorRepository { get; }

        IFullAccessGenericRepository<IndicatorScore> IndicatorScoreRepository { get; }

        IFullAccessGenericRepository<ProjectConstraint> ProjectConstrintRepository { get; }

        IFullAccessGenericRepository<Recommendation> RecommendationRepository { get; }

        //administrative repositories
        IFullAccessGenericRepository<AreaSample> AreaSamlpeRepository { get; }

        IFullAccessGenericRepository<CriteriaSample> CriteriaSampleRepository { get; }

        IFullAccessGenericRepository<IndicatorSample> IndicatorSampleRepository { get; }

        IFullAccessGenericRepository<User> UserRepository { get; }

        IFullAccessGenericRepository<Attachment> AttachmentRepository { get; }

        void Save();
    }
}
