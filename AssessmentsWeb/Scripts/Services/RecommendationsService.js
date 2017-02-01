var RecommendationsService = function ($q, HttpFactory, API_URLS) {
    
    this.getAllCriteriaByAssessmentId = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAllCriteriaByAssessmentId + id, deferred);
        return deferred.promise;
    }
    
    this.GetAllRecommendations = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAllRecommendations + id, deferred);
        return deferred.promise;
    }

    this.postRecommendation = function (recommendation) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.PostRecommendation, recommendation, deferred);
        return deferred.promise;
    }

    this.putRecommendation = function (recommendation) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutRecommendation, recommendation, deferred);
        return deferred.promise;
    }

};

RecommendationsService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('RecommendationsService', RecommendationsService);