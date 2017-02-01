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

namespace AssessmentsWebApi.Tests.ControllersTests
{
    [TestFixture]
    public class AreaSampleController_Test
    {
        private Mock<ICompetenceManagerUnitOfWork> _unitMock;

        private ICompetenceManagerUnitOfWork unit;

        private AreaSampleController _controller;


        [SetUp]
        public void Setup()
        {
            unit = new UnitOfWork();

            _unitMock = new Mock<ICompetenceManagerUnitOfWork>();
            
            _controller = new AreaSampleController(unit);
        }

        [Test]
        public void GetAllAreaSampleWhichHasToBeNotNull_Test()
        {
            // Arrange
            
            // Act
            var actualAreaSamples = _controller.GetAllAreaSample(); 

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualAreaSamples);
        }


        [Test]
        public void GetAllAreaSamplesWithCorrectInstanceOfType_Test()
        {
            // Arrange

            // Act
            var actualAreaSamples = _controller.GetAllAreaSample();

            // Assert
            CollectionAssert.AllItemsAreInstancesOfType(actualAreaSamples, typeof(AreaSampleDTO));
        }
        
        [Test]
        public void GetAreaSampleByAssessmentTypeIdNotNull_Test()
        {
            // Arrange
            int assessmentTypeId = 1;

            // Act
            var actualAreaSamples = _controller.GetAreaSamplesByAssessmentTypeId(assessmentTypeId);

            // Assert
            CollectionAssert.AllItemsAreNotNull(actualAreaSamples);
        }

        [Test]
        public void TryModifyAreaSample_Test()
        {
            // Arrange
            _controller.Request = new HttpRequestMessage();
            _controller.Configuration = new System.Web.Http.HttpConfiguration();
            AreaSampleDTO areaSampleDTO = new AreaSampleDTO()
            {
                Id = 1,
                Name = "tst",
                Description = "descr",
                AssesmentTypeId = 1
            };

            // Act 
            HttpResponseMessage response = _controller.ModifyAreaSample(areaSampleDTO);

            // Assert
            AreaSampleDTO areaSample;
            Assert.IsTrue(response.TryGetContentValue<AreaSampleDTO>(out areaSample));
        }

        /********* Non test method  ********/
        private IQueryable<AreaSample> ActuallAreaSample()
        {
            return new AreaSample[]{
                new AreaSample{
                    Id = 1,
                    Name = "name",
                    Description = "descr",
                    AssesmentTypeId = 1
                },
                new AreaSample{
                    Id = 2,
                    Name = "name2",
                    Description = "descr2",
                    AssesmentTypeId = 2
                }
            }.AsQueryable();
        }
    }
}
