var AssessmentTypesService = function ($q, HttpFactory, API_URLS) {

    this.getAllTypes = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.AssessmentTypes, deferred);
        return deferred.promise;
    };
    this.putType = function (type) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutType, type, deferred);
        return deferred.promise;
    }
    this.postType = function (type) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.PostType, type, deferred);
        return deferred.promise;
    }
    this.getTypeById = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.AssessmentTypes+id,deferred);
        return deferred.promise;
    }
};

AssessmentTypesService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('AssessmentTypesService', AssessmentTypesService);