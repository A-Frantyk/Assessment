using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.UnitOfWork
{
    public interface IUnitOfWork : ICompetenceManagerUnitOfWork, IUserUnitOfWork, IExpertUnitOfWork, ICoordinatorUnitOfWork
    {
        IUnitOfWork GetUnitInstance { get; }
    }
}
