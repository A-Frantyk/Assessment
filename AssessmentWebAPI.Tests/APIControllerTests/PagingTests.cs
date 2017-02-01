using System;
using Moq;
using AssessmentModel;
using NUnit.Framework;
using AssessmentServices;
using AssessmentsWebApi.Controllers;
using AssessmentsWebApi.Pagination;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using AssessmentServices.ModelsDTO;
using AssessmentServices.CustomDTO;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Collections;
using System.Collections.Generic;
using System.Net;

namespace AssessmentWebAPI.Tests.APIControllerTests
{
    [TestFixture]
    public class PagingTests
    {

        private Paging<TestData> _paging;

        [Test]
        public void Paging_CheckConstuctorWhenPageIsNegative()
        {
            // Arrange
            int _Page = 0;

            // Act
            List<TestData> testList = new List<TestData>();
            _paging = new Paging<TestData>(testList, -1, 10);

            // Assert
            Assert.AreEqual(_Page, _paging.Page);
        }

        [Test]
        public void Paging_CheckConstuctorWhenPageIsBigger()
        {
            // Arrange
            int _Page = 0;

            // Act
            List<TestData> testList = new List<TestData>();
            testList.Add(new TestData());
            testList.Add(new TestData());
            testList.Add(new TestData());
            _paging = new Paging<TestData>(testList, 10, 2);

            // Assert
            Assert.AreEqual(_Page, _paging.Page);
        }

        [Test]
        public void Paging_CheckConstuctorWhenPageIsCorrect()
        {
            // Arrange
            int _Page = 0;

            // Act
            List<TestData> testList = new List<TestData>();
            _paging = new Paging<TestData>(testList, 0, 10);

            // Assert
            Assert.AreEqual(_Page, _paging.Page);
        }

        [Test]
        public void Paging_CheckConstuctorWhenItemsPerPageIsNegative()
        {
            // Arrange
            int _itemPerPage = 3;

            // Act
            List<TestData> testList = new List<TestData>();
            testList.Add(new TestData());
            testList.Add(new TestData());
            testList.Add(new TestData());
            _paging = new Paging<TestData>(testList, 0, -1);

            // Assert
            Assert.AreEqual(_itemPerPage, _paging.ItemsPerPage);
        }
        [Test]
        public void Paging_CheckConstuctorWhenItemsPerPageIsBigger()
        {
            // Arrange
            int _itemPerPage = 3;

            // Act
            List<TestData> testList = new List<TestData>();
            testList.Add(new TestData());
            testList.Add(new TestData());
            testList.Add(new TestData());
            _paging = new Paging<TestData>(testList, 0, 4);

            // Assert
            Assert.AreEqual(_itemPerPage, _paging.ItemsPerPage);
        }
        [Test]
        public void Paging_CheckConstuctorWhenItemsPerPageIsCorrect()
        {
            // Arrange
            int _itemPerPage = 10;

            // Act
            List<TestData> testList = new List<TestData>();
            for (byte i = 0; i < 25; i++ )
                testList.Add(new TestData());
            _paging = new Paging<TestData>(testList, 0, 10);

            // Assert
            Assert.AreEqual(_itemPerPage, _paging.ItemsPerPage);
        }

    }
    class TestData
    {
    }
}
