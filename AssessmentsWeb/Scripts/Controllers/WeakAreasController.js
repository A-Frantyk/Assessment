var WeakAreasController = function ($scope, $stateParams, AreasService, AssessmentService, RecommendationsService, Styler) {
    
    $scope.Areas = [];
    $scope.currentId = $stateParams.Id;

    AreasService.getWeakAreasById($scope.currentId).then(function (response) {
        $scope.Areas = response;
    });

    $scope.Assessment = 'Weak Areas of ';
    AssessmentService.getAssessmentById($scope.currentId).then(function (response) {
        $scope.Assessment += response.Name;
    });

    Styler.setAssessment(1);

};

WeakAreasController.$inject = ['$scope', '$stateParams', 'AreasService', 'AssessmentService', 'RecommendationsService', 'Styler'];
app.controller('WeakAreasController', WeakAreasController);