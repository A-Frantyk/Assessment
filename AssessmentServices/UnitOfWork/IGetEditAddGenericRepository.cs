using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    public interface IGetEditAddGenericRepository<TEntity> : IGetEditGenericRepository<TEntity> where TEntity : class
    {
        void Insert(TEntity entity);
    }
}
