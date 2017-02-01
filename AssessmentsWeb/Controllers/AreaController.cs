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
    public class AreaController : Controller
    {
        private AssessmentModelContext db = new AssessmentModelContext();
        //private IAreaRepository areaRepository;
        private ICompetenceManagerUnitOfWork unitOfWork = new UnitOfWork();

        //public AreaController()
        //{
        //    this.areaRepository = new AreaRepository(new AssessmentsModelContext());
        //}

        //public AreaController(IAreaRepository areaRepository)
        //{
        //    this.areaRepository = areaRepository;
        //}

        // GET: /Area/
        public ActionResult Index()
        {
            //var areas = db.Areas.Include(a => a.Assessment);
            //return View(areas.ToList());

            //return View(areaRepository.GetAreas());

            return View(unitOfWork.AreaRepository.Get());
        }

        // GET: /Area/Details/5
        public ActionResult Details(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            //Area area = db.Areas.Find(id);
            //Area area = areaRepository.GetAreaByID(id);

            Area area = unitOfWork.AreaRepository.GetByID(id);
            if (area == null)
            {
                return HttpNotFound();
            }
            return View(area);
        }

        // GET: /Area/Create
        public ActionResult Create()
        {
            ViewBag.AssesmentId = new SelectList(db.Assessments, "Id", "Name");
            return View();
        }

        // POST: /Area/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create([Bind(Include="Id,Name,AssesmentId,Description")] Area area)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Areas.Add(area);
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }

        //    ViewBag.AssesmentId = new SelectList(db.Assessments, "Id", "Name", area.AssesmentId);
        //    return View(area);
        //}

        // GET: /Area/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Area area = db.Areas.Find(id);
        //    if (area == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    ViewBag.AssesmentId = new SelectList(db.Assessments, "Id", "Name", area.AssesmentId);
        //    return View(area);
        //}

        // POST: /Area/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include="Id,Name,AssesmentId,Description")] Area area)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(area).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    ViewBag.AssesmentId = new SelectList(db.Assessments, "Id", "Name", area.AssesmentId);
        //    return View(area);
        //}

        // GET: /Area/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Area area = db.Areas.Find(id);
        //    if (area == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(area);
        //}

        // POST: /Area/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    Area area = db.Areas.Find(id);
        //    db.Areas.Remove(area);
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
