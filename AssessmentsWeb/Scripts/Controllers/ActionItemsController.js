var ActionItemsController = function ($scope, $stateParams, AreasService, AssessmentService, Styler) {
    
    $scope.Areas = [];
    $scope.currentId = $stateParams.Id;

    AreasService.getActionItemsById($scope.currentId).then(function (response) {
        $scope.Areas = response;
    });

    $scope.Assessment = 'Action Items of ';
    AssessmentService.getAssessmentById($scope.currentId).then(function (response) {
        $scope.Assessment += response.Name;
    });

    Styler.setAssessment(6);
};

ActionItemsController.$inject = ['$scope', '$stateParams', 'AreasService', 'AssessmentService', 'Styler'];
app.controller('ActionItemsController', ActionItemsController);