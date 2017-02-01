var ReportsController = function ($scope, ReportsService, ExcelService, ServerURL, Styler, AssessmentTypesService) {

    $scope.finishdate = new Date();
    $scope.startdate = new Date();
    $scope.startdate.setFullYear($scope.startdate.getFullYear() - 1);
    $scope.QReport = [];
    $scope.Type = [];
    $scope.selectedType = 0;

    AssessmentTypesService.getAllTypes().then(function (response) {
        $scope.Type = response;
    });

    $scope.getStartDate = function () {
        return $scope.startdate.getFullYear() + '-' + ($scope.startdate.getMonth() + 1) + '-' + $scope.startdate.getDate();
    }

    $scope.getFinishDate = function () {
        return $scope.finishdate.getFullYear() + '-' + ($scope.finishdate.getMonth() + 1) + '-' + $scope.finishdate.getDate();
    }

    $scope.filterChange = function () {
        if ($scope.startdate > $scope.finishdate) {
            document.getElementById("Message").innerHTML = 'Start date cannot be greater than finish date!';
            document.getElementById("Message").style.color = 'red';
            $scope.QReport = [];
        }
        else if ($scope.finishdate == null || $scope.startdate == null) {
            alert('Please, set correct date!');
            $scope.QReport = [];
        }
        else {
            document.getElementById("Message").innerHTML = '';
            ReportsService.getQuaterlyReport($scope.getStartDate(), $scope.getFinishDate(), $scope.selectedType).then(function (response) {
                $scope.QReport = response;
            });
        }
    }

    $scope.changed = function () {
        ReportsService.getQuaterlyReport($scope.getStartDate(), $scope.getFinishDate(), $scope.selectedType).then(function (response) {
            $scope.QReport = response;
        });
    }
    $scope.exportData = function () {
        ExcelService.export($scope.QReport, ServerURL + 'api/excel/postquaterly/');
    };

    ReportsService.getQuaterlyReport($scope.getStartDate(), $scope.getFinishDate(), 0).then(function (response) {
        $scope.QReport = response;
    });

    Styler.setAnalytics(0);
}

ReportsController.$inject = ['$scope', 'ReportsService', 'ExcelService', 'ServerURL', 'Styler', 'AssessmentTypesService'];
app.controller('ReportsController', ReportsController);