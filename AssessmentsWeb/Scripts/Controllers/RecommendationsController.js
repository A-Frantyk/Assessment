var RecommendationsController = function ($scope, $stateParams, RecommendationsService, AssessmentService, Styler, SortByKeyFactory) {

    $scope.Recommendations = [];
    $scope.currentId = $stateParams.Id;

    $scope.Assessment = 'Recommendations of ';
    AssessmentService.getAssessmentById($scope.currentId).then(function (response) {
        $scope.Assessment += response.Name;
    });
    $scope.init = function () {
        RecommendationsService.GetAllRecommendations($scope.currentId).then(function (response) {
            $scope.Recommendations = SortByKeyFactory.simpleSorting(response, 'Id');
        });
    };
    $scope.Update = function (recommendation) {
        RecommendationsService.putRecommendation(recommendation);
    };
    
    Styler.setAssessment(5);
    $scope.init();
};

RecommendationsController.$inject = ['$scope', '$stateParams', 'RecommendationsService', 'AssessmentService', 'Styler', 'SortByKeyFactory'];
app.controller('RecommendationsController', RecommendationsController);

