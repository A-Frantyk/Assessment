var AddAreaController = function ($scope, ngDialog, AreasService, $timeout) {


    $scope.Area = {
        Name: null,
        Description: null,
        AssesmentTypeId: null,
        Order: null
    };


    // Posting JSON
    $scope.postJson = function () {
        $scope.Area.AssesmentTypeId = $scope.ass.Id;
        $scope.Area.Order = $scope.Areas.length+1;
        AreasService.postArea($scope.Area);
        $timeout(AreasService.getAreaByTypeId($scope.currentId).then(function (response) {
            $scope.Areas = response;
        }),1000);
    };
}

AddAreaController.$inject = ['$scope', 'ngDialog', 'AreasService', '$timeout'];
app.controller('AddAreaController', AddAreaController);
