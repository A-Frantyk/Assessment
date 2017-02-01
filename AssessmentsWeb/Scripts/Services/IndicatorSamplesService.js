var IndicatorSamplesService = function ($q, HttpFactory, API_URLS) {

    this.getIndicatorByCriteriaId = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetIndicatorSampleByCriteriaId + id, deferred);
        return deferred.promise;
    }
    this.putIndicator = function (criteria) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.putIndicatorSample, criteria, deferred);
        return deferred.promise;
    }
    this.postIndicatorSample = function (criteria) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.postIndicatorSample, criteria, deferred);
        return deferred.promise;
    }
    this.delete = function (id) {
        var deferred = $q.defer();
        HttpFactory.deleteAsync(API_URLS.deleteIndicatorSample + id, id, deferred);
        return deferred.promise;
    };
};

IndicatorSamplesService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('IndicatorSamplesService', IndicatorSamplesService);