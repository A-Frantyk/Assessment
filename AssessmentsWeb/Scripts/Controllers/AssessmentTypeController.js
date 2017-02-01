var AssessmentTypeController = function ($scope, AssessmentTypesService, ngDialog) {

    $scope.types = [];
    AssessmentTypesService.getAllTypes().then(function (response) {
        $scope.types = response;
    });
    $scope.startForm = function () {
        ngDialog.open({
            templateUrl: '/Home/AddAssessmentType',
            scope: $scope

        })

    };


    $scope.Update = function (type) {
        AssessmentTypesService.putType(type);
    }
    $scope.assessmentType = {
        Name: null,
        Description: null,
        URL: null
    };
    $scope.postJson = function () {
        AssessmentTypesService.postType($scope.assessmentType).then(function () {
            AssessmentTypesService.getAllTypes().then(function (response) {
                $scope.types = response;
            });
        })
        $scope.assessmentType = {
            Name: null,
            Description: null,
            URL: null
        };
    }

}

AssessmentTypeController.$inject = ['$scope', 'AssessmentTypesService', 'ngDialog'];
app.controller('AssessmentTypeController', AssessmentTypeController);