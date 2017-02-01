var ConstraintImpactService = function ($q, HttpFactory, API_URLS) {

    this.getAllImpacts = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.ConImp, deferred);
        return deferred.promise;
    };
    this.putUser = function (user) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutUser, user, deferred);
        return deferred.promise;
    }
};

ConstraintImpactService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('ConstraintImpactService', ConstraintImpactService);