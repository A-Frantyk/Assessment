using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    // Coordinator can add and edit Assessments. 
    // He needs to be able to get Assessment Types and Users
    public interface ICoordinatorUnitOfWork : IDisposable
    {
        IFullAccessGenericRepository<ActionItems> ActionItemsRepository { get; }

        IGetEditAddGenericRepository<Assessment> AssessmentRepository { get; }

        IGetOnlyGenericRepository<AssessmentType> AssessmentTypeRepository { get; }

        IGetOnlyGenericRepository<User> UserRepository { get; }

        IFullAccessGenericRepository<Recommendation> RecommendationRepository { get; }

        void Save();
    }
}
