var HttpFactory = function ($http, $q) {
    return {
        getAsync: function(url, deferred) {
            $http.get(url)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
        },
        postAsync: function(url, item, deferred) {
            $http.post(url, item)
                .success(function (response) {
                    deferred.resolve(response);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
        },
        deleteAsync: function (url, item, deferred) {
            $http.delete(url)
               .success(function (response) {
                   deferred.resolve(response);
               })
               .error(function (error) {
                   deferred.reject(error);
               });
        },
        putAsync: function (url, item, deferred) {
            $http.put(url, item)
               .success(function (response) {
                   deferred.resolve(response);
               })
               .error(function (error) {
                   alert(error);
                   deferred.reject(error);
               });
        }
    };
};

HttpFactory.$inject = ['$http', '$q'];
app.factory('HttpFactory', HttpFactory);