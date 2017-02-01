var AddRecommendationController = function ($state, $scope, ngDialog, RecommendationsService) {
    $scope.Criteria;
    $scope.AssessmentId;
    $scope.CriterionId;
    $scope.Text;
    $scope.Benefit;

    // Starting form with specific template
    $scope.startForm = function (criterionId, assessmentId) {
        $scope.AssessmentId = assessmentId;
        $scope.CriterionId = criterionId;

        RecommendationsService.getAllCriteriaByAssessmentId($scope.AssessmentId).then(function (response) {
            $scope.Criteria = response;
        });
        ngDialog.open({
            templateUrl: '/Home/AddRecommendation',
            scope: $scope
        });
    };

    // Posting JSON

    //$scope.submit = function () {
    //$scope.save = function () {
    //    RecommendationsService.postRecommendation({
    //        Text: $scope.Text,
    //        Benefits: $scope.Benefits,
    //        CriterionId: $scope.CriterionId,
    //        Order: 0
    //    });
    //    ngDialog.close();
    //    $state.go('Recommendations', { "Id": $scope.currentId }); 
    //};
    //};

    $scope.submit = function () {
        RecommendationsService.postRecommendation({
            Text: $scope.Text,
            Benefits: $scope.Benefits,
            CriterionId: $scope.CriterionId,
            Order: 0
        });
        ngDialog.close();
        $state.go('Recommendations', { "Id": $scope.currentId });
    };
};

AddRecommendationController.$inject = ['$state', '$scope', 'ngDialog', 'RecommendationsService'];
app.controller('AddRecommendationController', AddRecommendationController);
