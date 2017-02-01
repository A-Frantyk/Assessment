var AssessmentService = function ($q, HttpFactory, API_URLS) {

    this.getAllAssessmentsBrief = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetBriefAssessments, deferred);
        return deferred.promise;
    };
    this.getAllAssessmentsBriefWithFilter = function (text) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetBriefAssessmentsWithFilter + text, deferred);
        return deferred.promise;
    };
    
    this.getAllAssessmentsFull = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.Assessments, deferred);
        return deferred.promise;
    }

    this.getAssessmentById = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAssessmentsByID + id, deferred);
        return deferred.promise;
    }

    this.getAssessmentsFormInfoById = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAssessmentFormInfo + id, deferred);
        return deferred.promise;
    }

    this.postAssessment = function (item) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.Assessments, item, deferred);
        return deferred.promise;
    }
};

AssessmentService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('AssessmentService', AssessmentService);