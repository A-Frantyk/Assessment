
/// <reference path="references.js" />

// Testing main module
describe('Assessments', function () {

    // Mocking application module for every test in this block
    beforeEach(function () {
        module('Assessments');
    });

    // Testing ListingPageController
    describe('ListingPageController', function () {
        var $scope, controller, CurrAssessmentService, ListingPageController;

        // Mocking ListingPageController
        beforeEach(inject(function (_$rootScope_, $controller, $injector) {
            $scope = {};
            ListingPageController = $controller('ListingPageController', { $scope: $scope });
            CurrAssessmentService = $injector.get('CurrAssessmentService');
        }));

        it('should set Id', function () {
            $scope.setCurrentProjectID(4);

            expect($scope.currentProjectID).toBe(4);
        });

        it('should get Id via service', function () {
            $scope.setCurrentProjectID(4);
            var currentId = CurrAssessmentService.getCurrentId();

            expect(currentId).toEqual(4);
        });

        it('should change Id via service', function () {
            CurrAssessmentService.setCurrentId(4);
            var currentId = CurrAssessmentService.getCurrentId();

            expect(currentId).toEqual(4);
        })

        it('should initialize assessments object', function () {
            $scope.init();

            expect($scope.assessments).toBeDefined();
        });

        it('should export data', function () {
            expect($scope.export).not.toThrow();
        });

        it('should open window in export process', inject(function ($window) {
            spyOn($window, 'open').and.callFake(function () {
                return true;
            });
            $scope.export();
            
            expect($window.open).toBeTruthy();
        }));
    });

    describe('HttpFactory', function () {
        var deferred, $q, $rootScope, $httpBackend;

        beforeEach(inject(function (_$q_, _$rootScope_, $injector) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            deferred = _$q_.defer();
            passPromise = null;
            $httpBackend = $injector.get('$httpBackend');
            HttpFactory = $injector.get('HttpFactory');

            //spyOn(HttpFactory, 'getAsync').and.returnValue(deferred.promise);
            spyOn(HttpFactory, 'getAsync').and.callFake(function () {
                var deferred = $q.defer();
                if (passPromise) {
                    deferred.resolve(true);
                }
                else {
                    deferred.reject("something went wrong");
                }
                return deferred.promise;
            });
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('Testing $q directly', function () {
            it('should resolve promise', function () {
                var response;

                deferred.promise.then(function (data) {
                    response = data;
                });

                deferred.resolve('Returned OK!');
                $rootScope.$apply();

                expect(response).toBe('Returned OK!');
            });

            it('should reject promise', function () {
                var response;

                deferred.promise.then(function (data) {
                    response = data;
                });

                deferred.promise.catch(function (data) {
                    response = 'Error: ' + data;
                });

                deferred.reject('500 Status');
                $rootScope.$apply();

                expect(response).toBe('Error: 500 Status');
            });
        });

        describe('Testing $http directly', function () {
            it('should response with 200 status', inject(function ($http) {
                $http.get('http://rds.training.local/#/Home/AssessmentForm/1124');
                $httpBackend.expect('GET', 'http://rds.training.local/#/Home/AssessmentForm/1124').respond(200);
                
                expect($httpBackend.flush).not.toThrow();
            }));
        });

        describe('Testing getAsync', function () {
            var url = 'http://rds.training.local/#/Home/AssessmentForm/1124';

            it('should get real url path', function () {
                expect(url).toContain('http');
            });

            it('should resolve promise', function () {
                var response;
                passResponse = true;

                HttpFactory.getAsync(url, deferred);
                deferred.promise.then(function (data) {
                    response = data;
                });
                deferred.resolve('Returned OK!');
                $rootScope.$apply();

                expect(response).toBe('Returned OK!');
            });

            it('should reject promise', function () {
                var response;

                HttpFactory.getAsync('no-url', deferred)
                    .then(function () {
                        deferred.resolve();
                    }, function () {
                        deferred.promise.catch(function (data) {
                            response = 'Error: ' + data;
                        });
                        deferred.reject('wrong url');
                    });
                $rootScope.$apply();

                expect(response).toBe('Error: wrong url');
            });
        });

        describe('Testing postAsync', function () {
            it('should return status 201', function () {
                var obj = [{
                    id: 1,
                    name: 'Assessment',
                    assessmentTypeId: 1
                }];

                HttpFactory.postAsync('http://localhost:65030/api/assessments', obj, deferred);
                $httpBackend.expect('POST', 'http://localhost:65030/api/assessments').respond(201);

                expect($httpBackend.flush).not.toThrow();
            });
        });
    });

    describe('UIRouterController', function () {
        var UIRouterController;

        beforeEach(inject(function (_$rootScope_, $controller, $injector) {
            $scope = {};
            $rootScope = _$rootScope_;
            UIRouterController = $controller('UIRouterController', { $scope: $scope });
            CurrAssessmentService = $injector.get('CurrAssessmentService');

            spyOn(CurrAssessmentService, 'AssessmentsWasLoaded').and.returnValue(4);
        }));
        
        it('Should catch event', function () {
            var id;

            $rootScope.$broadcast('Assessments was loaded', 4);

            expect($scope.getCurrentId()).toBe(4);
        });
    });
});