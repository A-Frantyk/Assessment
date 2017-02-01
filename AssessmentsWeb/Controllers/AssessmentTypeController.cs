using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AssessmentModel;
using AssessmentServices.UnitOfWork;

namespace AssessmentsWeb.Controllers
{
    public class AssessmentTypeController : Controller
    {
        //private IAssessmentTypeRepository assessmentTypeRepository;
        private ICompetenceManagerUnitOfWork unitOfWork = new UnitOfWork();

        //public AssessmentTypeController()
        //{
        //    this.assessmentTypeRepository = new AssessmentTypeRepository(new AssessmentsModelContext());
        //}

        //public AssessmentTypeController(IAssessmentTypeRepository assessmentTypeRepository)
        //{
        //    this.assessmentTypeRepository = assessmentTypeRepository;
        //}

        //
        // GET: /AssessmentType/
        public ActionResult Index()
        {
            //var rows = from s in assessmentTypeRepository.GetAssessmentTypes()
            //           select s;
            //return View(rows);

            //return View(assessmentTypeRepository.GetAssessmentTypes());

            return View(unitOfWork.AssessmentTypeRepository.Get());

        }

        //
        // GET: /AssessmentType/Details/5
        public ActionResult Details(int id)
        {
            return View(unitOfWork.AssessmentTypeRepository.GetByID(id));
        }

        //
        // GET: /AssessmentType/Create
        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /AssessmentType/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /AssessmentType/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /AssessmentType/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /AssessmentType/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /AssessmentType/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
