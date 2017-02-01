using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssessmentModel;
using AssessmentServices.ModelsDTO;
using AssessmentServices.UnitOfWork;
using AssessmentsWebApi.Controllers.BaseControllers;
using System.Web;
using System.IO;
using System.Web.Configuration;

namespace AssessmentsWebApi.Controllers
{
    public class AttachmentController : BaseController
    {
        private string uniqueFileToUploadName = string.Empty;

        public AttachmentController(ICompetenceManagerUnitOfWork unit)
            : base(unit) { }

       
        public IEnumerable<AttachmentDTO> GetAllAttachments()
        {
            IQueryable<Attachment> query;

            query = UnitOfWork.AttachmentRepository.Get();

            var result = query.ToList()
                              .Select(s => DTOFactory.Create(s));

            return result.ToList();
        }

        [HttpGet]
        [Route("api/attachment/GetAttachmentByAssessmentId/{id}")]
        public HttpResponseMessage GetAttachmentByAssessmentId(int id)
        {
            
            var indicator = UnitOfWork.AttachmentRepository.Get(p => p.AssessmentId == id);
            if (indicator != null) 
            { 
            var result = indicator.ToList().Select(s => DTOFactory.Create(s));
            return Request.CreateResponse(HttpStatusCode.OK, result);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent, "Attachment does not exist!");
            }
        }

        [HttpGet]
        public HttpResponseMessage GetAttachmentByID(int id)
        {
            
            var attachment = UnitOfWork.AttachmentRepository.GetByID(id);
            if (attachment != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DTOFactory.Create(attachment));
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "User not found in database.");
            }
        }

        [HttpPost]
        [Route("api/attachment/AddAttachment/")]
        public HttpResponseMessage AddAttachment([FromBody]AttachmentDTO attachmentDTO)
        {
            Attachment entity = DTOFactory.Parse(attachmentDTO);

            if (entity == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Could not parse an User");
            }

            entity.UniqueName =  WebConfigurationManager.AppSettings["serverFileDirectory"] + entity.Name;

            UnitOfWork.AttachmentRepository.Insert(entity);
            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }

        [HttpPut]
        public HttpResponseMessage ModifyAttachment([FromBody] AttachmentDTO attachment)
        {
            var originalAttachment = DTOFactory.Parse(attachment);
            UnitOfWork.AttachmentRepository.Update(originalAttachment);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpGet]
        [Route("api/attachment/downloadFile/{fileName}")]
        public HttpResponseMessage DownloadFile(string fileName)
        {
            var localFilePath = HttpContext.Current.Server.MapPath(WebConfigurationManager.AppSettings["serverFileDirectory"] + fileName);
            HttpResponseMessage result = null;
            if (!File.Exists(localFilePath))
            {
                return Request.CreateResponse(HttpStatusCode.Gone);
            }
            else
            {
                // Serve the file to the client

                result = Request.CreateResponse(HttpStatusCode.OK);
                result.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
                result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                result.Content.Headers.ContentDisposition.FileName = fileName;
            }

            return result;
        }

        [HttpPost]
        [Route("api/attachment/uploadFile/")]
        public HttpResponseMessage UploadFile()
        {
            // get storage folder path.
            string serverFileDirectory = HttpContext.Current.Server.MapPath(WebConfigurationManager.AppSettings["serverFileDirectory"]);

            // receive files from http
            HttpFileCollection files = HttpContext.Current.Request.Files;


            for (int i = 0; i < files.Count; i++)
            {
                System.Web.HttpPostedFile file = files[i];

                if (file.ContentLength > 0)
                {
                    if (!File.Exists(serverFileDirectory + Path.GetFileName(file.FileName)))
                        file.SaveAs(serverFileDirectory + Path.GetFileName(file.FileName));
                }
            }

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [HttpDelete]
        [Route("api/attachment/deleteFile/{id}")]
        public HttpResponseMessage DeleteFile(int id)
        {
            Attachment attachment = UnitOfWork.AttachmentRepository.Get(a => a.Id == id).FirstOrDefault();
            this.DeleteFile(attachment.Name);
            UnitOfWork.AttachmentRepository.Delete(attachment);
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        #region NonActionMethods

        public void DeleteFile(string fileName)
        {
            string serverFileDirectory = WebConfigurationManager.AppSettings["serverFileDirectory"];
            string fullPath = (HttpContext.Current.Server.MapPath(serverFileDirectory + fileName));
            if (File.Exists(fullPath))
            {
                File.Delete(fullPath);
            }
        }
        #endregion

    }


}
