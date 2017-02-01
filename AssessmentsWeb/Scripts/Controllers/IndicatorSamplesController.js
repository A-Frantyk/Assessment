var IndicatorSamplesController = function ($scope, $stateParams, IndicatorSamplesService, CriteriaSamplesService, ngDialog, AssessmentTypesService, AreasService) {
    $scope.Indicators = [];
    $scope.currentId = $stateParams.Id;
  
    CriteriaSamplesService.getCriteriaById($stateParams.Id).then(function (response) {
        $scope.Criteria = response;
        AreasService.getAreaById($scope.Criteria.AreaId).then(function (response) {
            $scope.Area = response;
            AssessmentTypesService.getTypeById($scope.Area.AssesmentTypeId).then(function (response) {
                $scope.ass = response;
            })
        });
    });
    IndicatorSamplesService.getIndicatorByCriteriaId($stateParams.Id).then(function (response) {
        $scope.Indicators = response;
    });
    $scope.startForm2 = function () {
        ngDialog.open({
            templateUrl: '/Home/AddIndicatorSamples',
            scope: $scope
            
        })
        
    };
    $scope.startForm = function (indicator) {
        $scope.IndicatorToDelete = indicator;
        ngDialog.open({
            templateUrl: '/Home/DeleteConfirm',
            scope: $scope
        });
    };
    $scope.Delete = function () {
        for (var i = 0; i < $scope.Indicators.length; i++) {
            if($scope.Indicators[i].Order>$scope.IndicatorToDelete.Order)
            {
                $scope.Indicators[i].Order--;
                IndicatorSamplesService.putIndicator($scope.Indicators[i]);
            }
        }
        IndicatorSamplesService.delete($scope.IndicatorToDelete.Id).then(function () {
            IndicatorSamplesService.getIndicatorByCriteriaId($stateParams.Id).then(function (response) {
                $scope.Indicators = response;
            });
            
        });
    }
    $scope.Update = function (indicator) {
        IndicatorSamplesService.putIndicator(indicator);
    }
    $scope.Down = function (indicator) {
        if (indicator.Order != $scope.Indicators.length) {
            var indicator2;
            var firstRow = document.getElementById("tb").rows[indicator.Order - 1];
            var secondRow = document.getElementById("tb").rows[indicator.Order];
            for (var i = 0; i < $scope.Indicators.length; i++) {
                if ($scope.Indicators[i].Order == indicator.Order+1)
                    indicator2 = $scope.Indicators[i];
            }
            indicator.Order++;
            indicator2.Order--;
            IndicatorSamplesService.putIndicator(indicator);
            IndicatorSamplesService.putIndicator(indicator2);
            firstRow.parentNode.insertBefore(secondRow, firstRow);
        }
    }
    $scope.Up = function (indicator) {
        if (indicator.Order != 1) {
            var indicator2;
            var firstRow = document.getElementById("tb").rows[indicator.Order - 1];
            var secondRow = document.getElementById("tb").rows[indicator.Order - 2];
            for (var i = 0; i < $scope.Indicators.length; i++) {
                if ($scope.Indicators[i].Order == indicator.Order - 1)
                    indicator2 = $scope.Indicators[i];
            }
            indicator.Order--;
            indicator2.Order++;
            IndicatorSamplesService.putIndicator(indicator);
            IndicatorSamplesService.putIndicator(indicator2);
            firstRow.parentNode.insertBefore(firstRow, secondRow);
        }
    }
    $scope.Indicator = {
        Name: null,
        CriteriaSampleId: null,
        Order: null

    };

    // Posting JSON
    $scope.postJson = function () {
        $scope.Indicator.CriteriaSampleId = $scope.Criteria.Id;
        $scope.Indicator.Order = $scope.Indicators.length + 1;
        IndicatorSamplesService.postIndicatorSample($scope.Indicator).then(function () {
            IndicatorSamplesService.getIndicatorByCriteriaId($scope.currentId).then(function (response) {
                $scope.Indicators = response;
            })
        });
        $scope.Indicator = {
            Name: null,
            CriteriaSampleId: null,
            Order: null

        };
    }


};

IndicatorSamplesController.$inject = ['$scope', '$stateParams', 'IndicatorSamplesService', 'CriteriaSamplesService', 'ngDialog', 'AssessmentTypesService', 'AreasService'];
app.controller('IndicatorSamplesController', IndicatorSamplesController);