using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.UnityDI;
using Microsoft.Practices.Unity;

namespace AssessmentServices.UnityDI
{
    public class ContainerBootstrapper
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<ICompetenceManagerUnitOfWork, UnitOfWork.UnitOfWork>(new HierarchicalLifetimeManager());
            container.RegisterType<IUnitOfWork, UnitOfWork.UnitOfWork>(new HierarchicalLifetimeManager());
            container.RegisterType<IExpertUnitOfWork, UnitOfWork.UnitOfWork>(new HierarchicalLifetimeManager());
            container.RegisterType<ICoordinatorUnitOfWork, UnitOfWork.UnitOfWork>(new HierarchicalLifetimeManager());

        }
    }
}
