using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.Entity;
using System.Linq.Expressions;


using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentServices.Factory;
using NUnit.Framework;
using Moq;

namespace AssessmentServices.Tests.UnitOfWorkTests
{
    [TestFixture]
    public class GenericRepositoryTests<TEntity> where TEntity : class
    {
        ////private Mock<AssessmentModelContext> _contextMock;
        ////private GenericRepository<TEntity> _repository;

        //[SetUp]
        //public void Setup()
        //{
        //    //_contextMock = new Mock<AssessmentModelContext>();
        //    //_repository = new GenericRepository<TEntity>(_contextMock.Object);
        //}

        //[TestCase]
        //public void GetMethod_Test()
        //{
        //    // Arrange
        //    Mock<Expression<Func<TEntity, bool>>> filter = new Mock<Expression<Func<TEntity, bool>>>();
        //    Mock<Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>> orderBy = new Mock<Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>>();
        //    string includeProperties = "";

        //    // Act 
        //    var entity = _repository.Get(filter.Object, orderBy.Object, includeProperties);

        //    // Assert
        //    CollectionAssert.AllItemsAreNotNull(entity);
        //}
    }
}
