using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    public interface IFullAccessGenericRepository<TEntity> : IGetEditAddGenericRepository<TEntity> where TEntity: class
    {
        void Delete(TEntity entityToDelete);
    }
}
