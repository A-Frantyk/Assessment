using System;
using Moq;
using AssessmentModel;
using NUnit.Framework;
using AssessmentsWebApi.Controllers;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class AttachmentControllerTests
    {

        private ICompetenceManagerUnitOfWork _unit;
        private AttachmentController _controller;
        private Mock<ICompetenceManagerUnitOfWork> _unitMock;

        [SetUp]
        public void Setup()
        {
            _unit = new UnitOfWork();
            _controller = new AttachmentController(_unit);
            _unitMock = new Mock<ICompetenceManagerUnitOfWork>();
        }

        [Test]
         public void GetAllAttachmentsWhichHasToBeNotNull_Test()
        {
            var actualAttachments = _controller.GetAllAttachments();
            CollectionAssert.AllItemsAreNotNull(actualAttachments);
        }

        [Test]
        public void GetAllAttachmentssWithCorrectInstanceOfType_Test()
        {
            // Arrange
            
            // Act
            var actualAttachments = _controller.GetAllAttachments();
            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualAttachments, typeof(AttachmentDTO));
        }    

        [Test]
        public void GetAttachmentByAssessmentIdWichHasToBeNotNull_Test()
        {
            int assessmentId = 3;
            var actualAttachments = _controller.GetAttachmentByAssessmentId(assessmentId);

            CollectionAssert.AllItemsAreNotNull(actualAttachments);
        }

        [Test]
        public void GetAttachmentByAssessmentIdWichHasWrightType_Test()
        {
            int assessmentId = 3;
            var actualAttachments = _controller.GetAttachmentByAssessmentId(assessmentId);

            CollectionAssert.AllItemsAreInstancesOfType(actualAttachments, typeof(AttachmentDTO));
        }

        [Test]
        public void TryModifyAttachment_Test()
        {
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new System.Web.Http.HttpConfiguration();

            AttachmentDTO attachmentDTO = new AttachmentDTO
            {
                Id = 69,
                AssessmentId = 1109,
                Name = "Lerman J., Miller R. - Programming Entity Framework. Code First - 2011.pdf",
                UniqueName = "~/Files/Lerman J., Miller R. - Programming Entity Framework. Code First - 2011.pdf",               
                Comment = "Interesting book.",
                Size = 6622819
            };

            HttpResponseMessage response = _controller.ModifyAttachment(attachmentDTO);

        }

        [Test]
        public void GetAttachmentById_Test()
        {
            var controller = new AttachmentController(_unit);
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();
            var response = controller.GetAttachmentByID(69);

            AttachmentDTO attachment;
            Assert.IsNotNull(response);
            Assert.IsTrue(response.TryGetContentValue<AttachmentDTO>(out attachment));
        }

    }
}
