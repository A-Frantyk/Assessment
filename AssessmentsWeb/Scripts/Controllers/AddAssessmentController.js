var AddAssessmentController = function ($scope, $rootScope, $http, $q, $state, ngDialog, API_URLS, HttpFactory, AssessmentService, UsersService, AssessmentTypesService) {
    
    $scope.postingResult = "Waiting for data...";
    $scope.assessmentTypeObj = [];

    $scope.usersObj = [];

    $scope.assessment = {
        assessmentTypeId: null,
        name: "",
        projectManagerId: null,
        coordinatorId: null
    };

    // Starting form with specific template
    $scope.startForm = function () {
        $rootScope.$broadcast('Start Add Assessment', function () { });
    };

    $scope.init = function () {
        // Getting all assessment types
        AssessmentTypesService.getAllTypes().then(function (response) {
            $scope.assessmentTypeObj = response;
        });

        UsersService.getAllUsers().then(function (response) {
            $scope.usersObj = response;
        });
    };
   
    $scope.submit = function () {
        AssessmentService.postAssessment($scope.assessment).then(function (response) {
            $state.go("Form", { Id: response.Id });
            $scope.closeForm();
        }, function (error) {
            $scope.postingResult = 'Error:' + error.Message;
        });
    };

    // Posting JSON
    $scope.closeForm = function () {
        $rootScope.$broadcast('Close Add Assessment', function () { });
    };

    $scope.init();
};

AddAssessmentController.$inject = ['$scope', '$rootScope', '$http', '$q', '$state', 'ngDialog', 'API_URLS', 'HttpFactory', 'AssessmentService', 'UsersService', 'AssessmentTypesService'];
app.controller('AddAssessmentController', AddAssessmentController);