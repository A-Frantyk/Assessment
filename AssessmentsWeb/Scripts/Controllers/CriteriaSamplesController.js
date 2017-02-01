var CriteriaSamplesController = function ($scope, $stateParams, CriteriaSamplesService, ConstraintImpactService, AreasService, AssessmentTypesService, ngDialog, $timeout) {
    $scope.Criteria = [];
    $scope.currentId = $stateParams.Id;

    
    CriteriaSamplesService.getCriteriaByAreaId($scope.currentId).then(function (response) {
        $scope.Criteria = response;
       
    });
    AreasService.getAreaById($scope.currentId).then(function (response) {
        $scope.Area = response;
        AssessmentTypesService.getTypeById($scope.Area.AssesmentTypeId).then(function (response) {
            $scope.ass = response;
        })
    });
    ConstraintImpactService.getAllImpacts().then(function (response) {
        $scope.Impacts = response;
    });
    $scope.Update = function (criteria) {
        CriteriaSamplesService.putCriteria(criteria);
    }
    $scope.startForm2 = function () {       
        ngDialog.open({
            templateUrl: '/Home/AddCriteriaSamples',
            scope: $scope
            
        });
    };
    $scope.startForm = function (crit) {
        $scope.CriteriaToDelete = crit;
        ngDialog.open({
            templateUrl: '/Home/DeleteConfirm',
            scope: $scope

        });
    }
    $scope.Delete = function () {
        for (var i = 0; i < $scope.Criteria.length; i++) {
            if ($scope.Criteria[i].Order > $scope.CriteriaToDelete.Order) {
                $scope.Criteria[i].Order--;
                CriteriaSamplesService.putCriteria($scope.Criteria[i]);
            }
   
        }
        CriteriaSamplesService.deleteCriteria($scope.CriteriaToDelete.Id).then(function () {
            CriteriaSamplesService.getCriteriaByAreaId($stateParams.Id).then(function (response) {
                $scope.Criteria = response;
            });

        });
    }
    $scope.Down = function (criteria) {
        if (criteria.Order != $scope.Criteria.length) {
            var criteria2;
            var firstRow = document.getElementById("tb").rows[criteria.Order - 1];
            var secondRow = document.getElementById("tb").rows[criteria.Order];
            for (var i = 0; i < $scope.Criteria.length; i++) {
                if ($scope.Criteria[i].Order == criteria.Order + 1)
                    criteria2 = $scope.Criteria[i];
            }
            criteria.Order++;
            criteria2.Order--;
            CriteriaSamplesService.putCriteria(criteria);
            CriteriaSamplesService.putCriteria(criteria2);
            firstRow.parentNode.insertBefore(secondRow, firstRow);
        }
    }
    $scope.Up = function (criteria) {
        if (criteria.Order != 1) {
            var criteria2;
            var firstRow = document.getElementById("tb").rows[criteria.Order - 1];
            var secondRow = document.getElementById("tb").rows[criteria.Order - 2];
            for (var i = 0; i < $scope.Criteria.length; i++) {
                if ($scope.Criteria[i].Order == criteria.Order - 1)
                   criteria2 = $scope.Criteria[i];
            }
            criteria.Order--;
            criteria2.Order++;
            CriteriaSamplesService.putCriteria(criteria);
            CriteriaSamplesService.putCriteria(criteria2);
            firstRow.parentNode.insertBefore(firstRow, secondRow);
        }
    }
    $scope.Crit = {
        Name: null,
        ScopeConstraintImpactId: 1,
        TimeConstraintImpactId: 1,
        QualityConstraintImpactId: 1,
        CostConstraintImpactId: 1,
        AreaId: null,
        Order: null
    };
    
    // Posting JSON
    $scope.postJson = function () {
        $scope.Crit.AreaId = $scope.Area.Id;
        $scope.Crit.Order = $scope.Criteria.length + 1;
        CriteriaSamplesService.postCriteriaSample($scope.Crit).then( function() {
            CriteriaSamplesService.getCriteriaByAreaId($scope.currentId).then(function (response) {
                $scope.Criteria = response;
            });
        })
        $scope.Crit = {
            Name: null,
            ScopeConstraintImpactId: 1,
            TimeConstraintImpactId: 1,
            QualityConstraintImpactId: 1,
            CostConstraintImpactId: 1,
            AreaId: null,
            Order: null
        };
    }
   
};

CriteriaSamplesController.$inject = ['$scope', '$stateParams', 'CriteriaSamplesService', 'ConstraintImpactService', 'AreasService', 'AssessmentTypesService', 'ngDialog', '$timeout'];
app.controller('CriteriaSamplesController', CriteriaSamplesController);