var UsersService = function ($q, HttpFactory, API_URLS) {

    this.getAllUsers = function () {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.Users, deferred);
        return deferred.promise;
    };
    this.getUsers = function (p, i) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetUsers + '?page=' + p + '&itemsPerPage=' + i, deferred);
        return deferred.promise;
    };
    this.putUser = function (user) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutUser,user, deferred);
        return deferred.promise;
    }
};

UsersService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('UsersService', UsersService);