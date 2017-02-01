using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    // User can only get Assessments
    public interface IUserUnitOfWork : IDisposable
    {
        IGetOnlyGenericRepository<Assessment> AssessmentRepository { get; }
    }
}
