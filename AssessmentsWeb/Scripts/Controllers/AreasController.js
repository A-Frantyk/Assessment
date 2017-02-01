var AreasController = function ($scope, $stateParams, AreasService, AssessmentTypesService, ngDialog, $timeout) {
    $scope.Areas = [];
    $scope.currentId = $stateParams.Id;

    AreasService.getAreaByTypeId($stateParams.Id).then(function (response) {
        $scope.Areas = response;
    });
    AssessmentTypesService.getTypeById($stateParams.Id).then(function (response) {
        $scope.ass = response;
    });
    $scope.Update = function (area) {
        AreasService.putArea(area);
    }
    $scope.startFormAdd = function () {

        ngDialog.open({
            templateUrl: '/Home/AddArea',
            scope: $scope

        });
    };
    $scope.startForm = function (Id) {
        $scope.AreaToDelete = Id;
        ngDialog.open({
            templateUrl: '/Home/DeleteConfirm',
            scope: $scope
        });
    };
    $scope.Delete = function () {
        for (var i = 0; i < $scope.Areas.length; i++) {
            if ($scope.Areas[i].Order > $scope.AreaToDelete.Order) {
                $scope.Areas[i].Order--;
                AreasService.putArea($scope.Areas[i]);
            }
        }
        AreasService.deleteArea($scope.AreaToDelete.Id).then(function () {
            AreasService.getAreaByTypeId($stateParams.Id).then(function (response) {
                $scope.Areas = response;
            });

        });
    }
    $scope.Down = function (area) {
        if (area.Order != $scope.Areas.length) {
            var area2;
            var firstRow = document.getElementById("tb").rows[area.Order - 1];
            var secondRow = document.getElementById("tb").rows[area.Order];
            for (var i = 0; i < $scope.Areas.length; i++) {
                if ($scope.Areas[i].Order == area.Order + 1)
                    area2 = $scope.Areas[i];
            }
            area.Order++;
            area2.Order--;
            AreasService.putArea(area);
            AreasService.putArea(area2);
            firstRow.parentNode.insertBefore(secondRow, firstRow);
        }
    }
    $scope.Up = function (area) {
        if (area.Order != 1) {
            var area2;
            var firstRow = document.getElementById("tb").rows[area.Order - 1];
            var secondRow = document.getElementById("tb").rows[area.Order - 2];
            for (var i = 0; i < $scope.Areas.length; i++) {
                if ($scope.Areas[i].Order == area.Order - 1)
                    area2 = $scope.Areas[i];
            }
            area.Order--;
            area2.Order++;
            AreasService.putArea(area);
            AreasService.putArea(area2);
            firstRow.parentNode.insertBefore(firstRow, secondRow);
        }
    }
    $scope.Area = {
        Name: null,
        Description: null,
        AssesmentTypeId: null,
        Order: null
    };


    // Posting JSON
    $scope.postJson = function () {
        $scope.Area.AssesmentTypeId = $scope.ass.Id;
        $scope.Area.Order = $scope.Areas.length + 1;
        AreasService.postArea($scope.Area).then(function () {
            AreasService.getAreaByTypeId($stateParams.Id).then(function (response) {
                $scope.Areas = response;
            });
        })
        $scope.Area = {
            Name: null,
            Description: null,
            AssesmentTypeId: null,
            Order: null
        };
    }
}


AreasController.$inject = ['$scope', '$stateParams', 'AreasService', 'AssessmentTypesService', 'ngDialog','$timeout'];
app.controller('AreasController', AreasController);