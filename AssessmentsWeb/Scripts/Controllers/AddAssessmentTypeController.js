var AddAssessmentTypeController = function ($scope, ngDialog, AssessmentTypesService) {


    $scope.assessmentType = {
        Name: null,
        Description: null,
        URL: null
    };
   
   
    
    // Posting JSON
    $scope.postJson = function () {
        AssessmentTypesService.postType($scope.assessmentType);
       
    }
};

AddAssessmentTypeController.$inject = ['$scope', 'ngDialog', 'AssessmentTypesService'];
app.controller('AddAssessmentTypeController', AddAssessmentTypeController);
