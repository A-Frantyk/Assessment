var FillAssessmentService = function ($q, HttpFactory, API_URLS) {

    this.GetAssessmentsByID = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAssessmentsByID + id, deferred);
        return deferred.promise;
    }

    this.GetAllCriteria = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.Criteria, deferred);
        return deferred.promise;
    };

    this.GetAllCriteriaOfAssessment = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAllCriteriaOfAssessment + id, deferred);
        return deferred.promise;
    };

    this.GetIndicatorScores = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.IndicatorScores, deferred);
        return deferred.promise;
    };

    this.GetAllAreaOfAssessment = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAllAreaOfAssessment + id, deferred);
        return deferred.promise;
    }

    this.GetIndicatorsByCriteriaId = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetIndicatorsByCriteriaId + id, deferred);
        return deferred.promise;
    }

    this.GetFullIndicatorsByCriteriaId = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetFullIndicatorsByCriteriaId + id, deferred);
        return deferred.promise;
    }

    this.putIndicatorScore = function (id, indicatorscore) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutIndicatorScore + id, indicatorscore, deferred);
        return deferred.promise;
    };

    this.putIndicatorComment = function (id, indicator) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutIndicatorComment + id, indicator, deferred);
        return deferred.promise;
    };

};

FillAssessmentService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('FillAssessmentService', FillAssessmentService);