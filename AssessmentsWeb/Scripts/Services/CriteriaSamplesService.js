var CriteriaSamplesService = function ($q, HttpFactory, API_URLS) {

    this.getCriteriaByAreaId = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetCriteriaSampleByAreaId + id, deferred);
        return deferred.promise;
    }
    this.putCriteria = function (criteria) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.putCriteriaSample, criteria, deferred);
        return deferred.promise;
    }
    this.postCriteriaSample = function (criteria) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.postCriteriaSample, criteria, deferred);
        return deferred.promise;
    }
    this.getCriteriaById = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetCriteriaSampleById + id, deferred);
        return deferred.promise;
    }
    this.deleteCriteria = function (id) {
        var deferred = $q.defer();
        HttpFactory.deleteAsync(API_URLS.deleteCriteriaSample + id, id, deferred);
        return deferred.promise;
    };
};

CriteriaSamplesService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('CriteriaSamplesService', CriteriaSamplesService);