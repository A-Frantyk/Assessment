using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Security;
using System.Web.Mvc;
using AssessmentsWebApi.Providers;
using AssessmentsWeb.AuthorizationFilter;
using AssessmentServices.UnitOfWork;
using System.Data.Entity.Core;

namespace AssessmentsWeb.Controllers
{
   
    public class HomeController : Controller
    {
        private ICompetenceManagerUnitOfWork unit;
      
        public HomeController(ICompetenceManagerUnitOfWork _unit)
        {
            unit = _unit;
        }

        public ActionResult Index()
        {
            //Autoadding new User to database if User attends web application at first time
            try
            {
                CustomRoleProvider.UserValidation(unit);
                ViewBag.currentUser = CustomRoleProvider.currentUser;
                return View();
            }
            catch (ProviderIncompatibleException ex) 
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound,"No database connection!");
            }
        }

        [AssessmentAuthorizeAttribute(Roles = "CompetenceManager")]
        public ActionResult AddAssessment()
        {
            return PartialView();
        }

        public ActionResult AddAssessmentType()
        {
            return PartialView();
        }

        public ActionResult DeleteConfirm()
        {
            return PartialView();
        }

        public ActionResult AssessmentsList()
        {
            return PartialView();
        }

        public ActionResult Areas()
        {
            return PartialView();
        }
        public ActionResult AssessmentsDetails(int? Id)
        {
            return PartialView(Id);
        }

        public ActionResult StrongAreas()
        {
            return PartialView();
        }

        public ActionResult WeakAreas()
        {
            return PartialView();
        }

        public ActionResult AddRecommendation()
        {
            return PartialView();
        }

        public ActionResult ActionItems()
        {
            return PartialView();
        }

        public ActionResult AddActionItem()
        {
            return PartialView();
        }


        public ActionResult Attachments()
        {
            return PartialView();
        }
        
        public ActionResult Users()
        {
            return PartialView();
        }
        public ActionResult AddArea()
        {
            return PartialView();
        }
        [AssessmentAuthorizeAttribute(Roles = "CompetenceManager")]
        public ActionResult Administration()
        {

            CustomRoleProvider.UserValidation(unit);
            ViewBag.currentUser = CustomRoleProvider.currentUser;
            return View();
        }
        public ActionResult UIRouter()
        {
            return PartialView();
        }

        public ActionResult AssessmentForm(int? Id)
        {
                  
            ViewBag.Id = Id;
            return PartialView();
        }

        public ActionResult FillAssessment()
        {
            return PartialView();
        }

        public ActionResult AssessmentTypes()
        {
            return PartialView();
        }
        public ActionResult CriteriaSamples()
        {
            return PartialView();
        }
        public ActionResult AddCriteriaSamples()
        {
            return PartialView();
        }
        public ActionResult IndicatorSamples()
        {
            return PartialView();
        }
        public ActionResult AddIndicatorSamples()
        {
            return PartialView();
        }
        //
        //          Analytics
        //
        public ActionResult Analytics()
        {
            return PartialView();
        }
        public ActionResult Reports()
        {
            return PartialView();
        }
        public ActionResult TopWeakAreas()
        {
            return PartialView();
        }
        //
        //          Analytics
        //
        public ActionResult Error()
        {
            return PartialView();
        }


        public ActionResult Recommendations()
        {
            return PartialView();
        }
    }
}