var StrongAreasController = function ($scope, $stateParams, AreasService, AssessmentService, Styler) {
    
    $scope.Areas = [];
    $scope.currentId = $stateParams.Id;

    AreasService.getStrongAreasById($scope.currentId).then(function (response) {
        $scope.Areas = response;
    });
    
    $scope.Assessment = 'Strong Areas of ';
    AssessmentService.getAssessmentById($scope.currentId).then(function (response) {
        $scope.Assessment += response.Name;
    });

    Styler.setAssessment(2);
};

StrongAreasController.$inject = ['$scope', '$stateParams', 'AreasService', 'AssessmentService', 'Styler'];
app.controller('StrongAreasController', StrongAreasController);