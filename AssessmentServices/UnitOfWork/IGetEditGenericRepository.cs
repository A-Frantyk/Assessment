using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AssessmentModel;

namespace AssessmentServices.UnitOfWork
{
    public interface IGetEditGenericRepository<TEntity> : IGetOnlyGenericRepository<TEntity> where TEntity: class
    {
        void Update(TEntity entityToUpdate);
    }
}
