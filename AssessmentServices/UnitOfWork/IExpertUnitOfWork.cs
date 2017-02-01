using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    // Expert can edit Assessments.
    // He needs to be able to get Criteria Scores, Indicator Scores, 
    // ConstraintImpacts and Project Constraints.
    public interface IExpertUnitOfWork : IDisposable
    {
        IFullAccessGenericRepository<ActionItems> ActionItemsRepository { get; }

        IGetEditGenericRepository<Assessment> AssessmentRepository { get; }

        IGetOnlyGenericRepository<CriteriaScore> CriteriaScoreRepository { get; }

        IGetOnlyGenericRepository<IndicatorScore> IndicatorScoreRepository { get; }

        IGetOnlyGenericRepository<ConstraintImpact> ConstraintsImpactRepository { get; }

        IGetOnlyGenericRepository<ProjectConstraint> ProjectConstraintRepository { get;  }

        IFullAccessGenericRepository<Recommendation> RecommendationRepository { get; }

        void Save();
    }
}
