using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AssessmentModel;
using System.Web;
using System.Web.Util;
using AssessmentsWebApi.Providers;

namespace AssessmentsWebApi.Authentitication
{
    // [RoutePrefix("api/Authentitication")]
    public class AuthentiticationController : ApiController
    {
        private AssessmentModelContext db = new AssessmentModelContext();

        //*   private IAdministratorUnitOfWork unit = new UnitOfWork();


        [ResponseType(typeof(User))]

        public IHttpActionResult GetUser()
        {
            //  System.Security.Principal.WindowsPrincipal p = System.Threading.Thread.CurrentPrincipal as System.Security.Principal.WindowsPrincipal;

            //string id = p.Identity.Name;

            //string id = HttpContext.Current.User.Identity.Name.ToString();
            string id = System.Web.HttpContext.Current.Request.LogonUserIdentity.Name.ToString();
            var indicator = (from u in db.User where u.Login == id select u).FirstOrDefault();

            if (indicator == null)
            {
                var user = new User();
                user.Login = id;
                user.Name = id;
                PostUser(user);
            }
            return Ok(indicator);
        }


        //public ICollection<Assessment> GetAssessmentsByUserid(int id)
        //{
        //    var i = (from u in db.User where u.Id == id select u).FirstOrDefault();
        //    return i.Assessments;
        //}

        // PUT api/Authentitication/5
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.InternalServerError);
        }

        // POST api/Authentitication
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.User.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.User.Count(e => e.Id == id) > 0;
        }
    }
}