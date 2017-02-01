var HttpInterceptor = function ( $q, $injector, $rootScope) {

    function goToErrorState(errorCodeParam, errorTextParam, errorMessageParam) {
        $injector.get('$state').go('Error', { errorCode: errorCodeParam, errorText: errorTextParam, errorMessage: errorMessageParam });
    };

    return {
        requestError: function(error)
        {
            goToErrorState(error.status, error.statusText, 'Something wrong with last request.');
            return $q.reject(error);
        },
        responseError: function (error) {
            goToErrorState(error.status, error.statusText, error.data);
            return $q.reject(error);
        }
    };
};

HttpInterceptor.$inject = ['$q', '$injector', '$rootScope'];
app.factory('HttpInterceptor', HttpInterceptor);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
});
