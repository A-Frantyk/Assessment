var AddCriteriaSamplesController = function ($scope, ngDialog, CriteriaSamplesService, ConstraintImpactService) {

  
    $scope.Crit = {
        Name: null,
        ScopeConstraintImpactId: 1,
        TimeConstraintImpactId: 1,
        QualityConstraintImpactId: 1,
        CostConstraintImpactId: 1,
        AreaId: null,
        Order: null
    };
    ConstraintImpactService.getAllImpacts().then(function (response) {
        $scope.Impacts = response;
    });
    // Posting JSON
    $scope.postJson = function () {
        $scope.Crit.AreaId = $scope.Area.Id;
        $scope.Crit.Order = $scope.Criteria.length + 1;
        CriteriaSamplesService.postCriteriaSample($scope.Crit);
        CriteriaSamplesService.getCriteriaByAreaId($scope.currentId).then(function (response) {
            $scope.Criteria = response;
        });
    }
};

AddCriteriaSamplesController.$inject = ['$scope', 'ngDialog', 'CriteriaSamplesService', 'ConstraintImpactService'];
app.controller('AddCriteriaSamplesController', AddCriteriaSamplesController);
