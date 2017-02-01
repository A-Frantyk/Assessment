var TopWeakAreasController = function ($scope, AreasService, AssessmentTypesService, PagingFactory, Styler) {
    
    $scope.finishDate = new Date();
    $scope.startDate = new Date();
    $scope.startDate.setFullYear($scope.startDate.getFullYear() - 1);
    $scope.getStartDate = function () {
        return $scope.startDate.getFullYear() + '-' + ($scope.startDate.getMonth() + 1) + '-' + $scope.startDate.getDate();
    }
    $scope.getFinishDate = function () {
        return $scope.finishDate.getFullYear() + '-' + ($scope.finishDate.getMonth() + 1) + '-' + $scope.finishDate.getDate();
    }

    $scope.Data = [];
    $scope.Type = [];

    AssessmentTypesService.getAllTypes().then(function (response) {
        $scope.Type = response;
    });


    // Paging -----------------------------------------------
    PagingFactory.setParams(10, 5);
    $scope.arrayOfPages = [];
    $scope.currentPage = function () {
        return PagingFactory.getCurrentPage();
    }
    $scope.itemsPerPage = function () {
        return PagingFactory.getItemsPerPage();
    }

    //-------------------------------------------------------    

    $scope.showPage = function (page) {
        AreasService.getTopWeakAreas($scope.selectedType, $scope.getStartDate(), $scope.getFinishDate(), page, $scope.itemsPerPage())
            .then(function (response) {
                $scope.Data = response.Items;
                // Paging -----------------------------------------------
                $scope.arrayOfPages = PagingFactory.getArrayOfPages(page, response.ItemsCount);
                //----------------
            });
    }

    $scope.changed = function () {
        $scope.showPage(0);
    }

    $scope.changedDate = function () {
        if ($scope.startDate > $scope.finishDate) {
            document.getElementById("Message").innerHTML = 'Start date cannot be greater than finish date!';
            document.getElementById("Message").style.color = 'red';
            Data = [];
        }
        else {
            document.getElementById("Message").innerHTML = '';
            $scope.changed();
        }
    }

    Styler.setAnalytics(1);
}

TopWeakAreasController.$inject = ['$scope', 'AreasService', 'AssessmentTypesService', 'PagingFactory', 'Styler'];
app.controller('TopWeakAreasController', TopWeakAreasController);