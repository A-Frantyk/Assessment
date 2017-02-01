
/// <reference path="references.js" />

'use strict';

// Testing main module
describe('Recommendations', function () {

    // Mocking application module for every test in this block
    beforeEach(function () {
        module('Assessments');
    });
    
    describe('RecommendationsService', function () {
        var HttpFactory, $q, API_URL;

        beforeEach(inject(function (_HttpFactory_, _$q_, _API_URL_, $injector) {
            $q = _$q_;
            HttpFactory = $injector.get('HttpFactory');
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('Testing getAllCriteriaByAssessmentId', function () {
            it('should resolve promise', function () {
                var response;

                deferred.promise.then(function (data) {
                    response = data;
                });

                deferred.resolve('Returned OK!');
                $rootScope.$apply();

                expect(response).toBe('Returned OK!');
            });
        });
    });
});