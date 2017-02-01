using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using AssessmentModel;
using AssessmentServices.UnitOfWork;

namespace AssessmentsWeb.Controllers
{
    public class AssessmentController : Controller
    {
        //private AssessmentsModelContext db = new AssessmentsModelContext();
        //private IAssessmentRepository assessmentRepository;
        private ICompetenceManagerUnitOfWork unitOfWork = new UnitOfWork();

        // GET: /Assessment/
        //public AssessmentController()
        //{
        //    this.assessmentRepository = new AssessmentRepository(new AssessmentsModelContext());
        //}

        //public AssessmentController(IAssessmentRepository assessmentRepository)
        //{
        //    this.assessmentRepository = assessmentRepository;
        //}

        public ActionResult Index()
        {
            //var assessments = db.Assessments.Include(a => a.AssessmentType).Include(a => a.ProjectConstraint).Include(a => a.ProjectConstraint1).Include(a => a.ProjectConstraint2).Include(a => a.ProjectConstraint3);
            //return View(assessments.ToList());

            //return View(assessmentRepository.GetAssessments());

            return View(unitOfWork.AssessmentRepository.Get());
        }

        // GET: /Assessment/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Assessment assessment = db.Assessments.Find(id);
            Assessment assessment = unitOfWork.AssessmentRepository.GetByID(id);

            if (assessment == null)
            {
                return HttpNotFound();
            }
            return View(assessment);
        }

        // GET: /Assessment/Create
        //public ActionResult Create()
        //{
        //    ViewBag.AssessmentTypeId = new SelectList(db.AssessmentTypes, "Id", "Name");
        //    ViewBag.CostProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name");
        //    ViewBag.QualityProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name");
        //    ViewBag.ScopeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name");
        //    ViewBag.TimeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name");
        //    return View();
        //}

        //// POST: /Assessment/Create
        //// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        //// more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create([Bind(Include="Id,AssessmentTypeId,Name,Description,URL,Version,StartDate,FinishDate,Project,ProjectId,Unit,UnitId,ProjectManager,ProjectManagerId,TechLead,TechLeadId,Coordinator,CoordinatorId,Experts,ScopeProjectConstraintId,TimeProjectConstraintId,QualityProjectConstraintId,CostProjectConstraintId,Comment")] Assessment assessment)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Assessments.Add(assessment);
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }

        //    ViewBag.AssessmentTypeId = new SelectList(db.AssessmentTypes, "Id", "Name", assessment.AssessmentTypeId);
        //    ViewBag.CostProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.CostProjectConstraintId);
        //    ViewBag.QualityProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.QualityProjectConstraintId);
        //    ViewBag.ScopeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.ScopeProjectConstraintId);
        //    ViewBag.TimeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.TimeProjectConstraintId);
        //    return View(assessment);
        //}

        //// GET: /Assessment/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Assessment assessment = db.Assessments.Find(id);
        //    if (assessment == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    ViewBag.AssessmentTypeId = new SelectList(db.AssessmentTypes, "Id", "Name", assessment.AssessmentTypeId);
        //    ViewBag.CostProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.CostProjectConstraintId);
        //    ViewBag.QualityProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.QualityProjectConstraintId);
        //    ViewBag.ScopeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.ScopeProjectConstraintId);
        //    ViewBag.TimeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.TimeProjectConstraintId);
        //    return View(assessment);
        //}

        //// POST: /Assessment/Edit/5
        //// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        //// more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include="Id,AssessmentTypeId,Name,Description,URL,Version,StartDate,FinishDate,Project,ProjectId,Unit,UnitId,ProjectManager,ProjectManagerId,TechLead,TechLeadId,Coordinator,CoordinatorId,Experts,ScopeProjectConstraintId,TimeProjectConstraintId,QualityProjectConstraintId,CostProjectConstraintId,Comment")] Assessment assessment)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(assessment).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    ViewBag.AssessmentTypeId = new SelectList(db.AssessmentTypes, "Id", "Name", assessment.AssessmentTypeId);
        //    ViewBag.CostProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.CostProjectConstraintId);
        //    ViewBag.QualityProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.QualityProjectConstraintId);
        //    ViewBag.ScopeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.ScopeProjectConstraintId);
        //    ViewBag.TimeProjectConstraintId = new SelectList(db.ProjectConstraints, "Id", "Name", assessment.TimeProjectConstraintId);
        //    return View(assessment);
        //}

        //// GET: /Assessment/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Assessment assessment = db.Assessments.Find(id);
        //    if (assessment == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(assessment);
        //}

        //// POST: /Assessment/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    Assessment assessment = db.Assessments.Find(id);
        //    db.Assessments.Remove(assessment);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
