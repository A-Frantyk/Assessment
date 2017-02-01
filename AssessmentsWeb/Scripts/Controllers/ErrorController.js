var ErrorController = function ($scope, $stateParams, $injector) {
    $scope.errorCode = $stateParams.errorCode;
    $scope.errorText = $stateParams.errorText;
    $scope.errorMessage = $stateParams.errorMessage;

    $scope.init = function(){
        if($scope.errorCode == null || $scope.errorText == null)
        {
            $injector.get('$state').go('Home');
        }
    };
    
    $scope.init();
};

ErrorController.$inhect = ['$scope', '$stateParams', '$injector'];
app.controller('ErrorController', ErrorController);