var UIRouterController = function ($rootScope, $scope, $state, CurrAssessmentService) {
    $scope.currentId = 0;
    $scope.message = 'Waiting for assessments...';
    $scope.loadingFailed = null;
    $scope.include = 'listingPage';

    $scope.getCurrentId = function () {
        return CurrAssessmentService.getCurrentId()
    }

    $rootScope.$on('Assessments was loaded', function () {
        $scope.currentId = $scope.getCurrentId();
    });

    $rootScope.$on('Default was Changed', function (error) {
        if (error == null) {
            $scope.loadingFailed = "There is no assessments for you!";
        }
        else {
            $scope.loadingFailed = "Loading failed because" + error;
        }
    });

    $rootScope.$on('Close Add Assessment', function () {
        $scope.include = 'listingPage';
    });

    $rootScope.$on('Start Add Assessment', function () {
        $scope.include = 'addAssessment';
    });

    $scope.init = function () {
        $scope.currentId = $scope.getCurrentId();
        $state.go('Form', { "Id": $scope.currentId });
    };

    $scope.init();
}

UIRouterController.$inject = ['$rootScope', '$scope', '$state', 'CurrAssessmentService'];
app.controller('UIRouterController', UIRouterController);
