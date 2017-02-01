var AddIndicatorSamplesController = function ($scope, ngDialog, IndicatorSamplesService) {

    $scope.Indicator = {
        Name: null,
        CriteriaSampleId: null,
        Order: null

    };
    
    // Posting JSON
    $scope.postJson = function () {
        $scope.Indicator.CriteriaSampleId = $scope.Criteria.Id;
        $scope.Indicator.Order = $scope.Indicators.length + 1;
        IndicatorSamplesService.postIndicatorSample($scope.Indicator);
        IndicatorSamplesService.getIndicatorByCriteriaId($scope.currentId).then(function (response) {
            $scope.Indicators = response;
        });
    }
};

AddIndicatorSamplesController.$inject = ['$scope', 'ngDialog', 'IndicatorSamplesService'];
app.controller('AddIndicatorSamplesController', AddIndicatorSamplesController);
