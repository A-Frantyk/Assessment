var AssessmentFormController = function ($scope, $stateParams, AssessmentFactory, API_URLS, HttpFactory) {
    $scope.assessmentFormData = [];
    $scope.currentId = $stateParams.Id;

    // Getting assessment object by id with HttpFactory
    HttpFactory.getAsync(API_URLS.GetAssessmentsByID + $scope.currentId).then(function (response) {
        $scope.assessmentFormData = response;
    });

    $scope.setCurrentId = function (Id) {
        AssessmentFactory.setCurrentId(Id);
    }
};

AssessmentFormController.$inject = ['$scope', '$stateParams', 'AssessmentFactory', 'API_URLS', 'HttpFactory'];
app.controller('AssessmentFormController', AssessmentFormController);