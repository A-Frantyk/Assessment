var UsersController = function ($scope, PaginationFactory, UsersService, Styler) {

    $scope.Users = [];
    $scope.AllUsers = [];
    $scope.search = "";
    UsersService.getAllUsers().then(function (response) {
        $scope.AllUsers = response;
        PaginationFactory.setItems($scope.AllUsers, 15);
        $scope.Users = PaginationFactory.getPageItems();
        $scope.ArrayOfPages = PaginationFactory.getArrayOfPages();
    });
    $scope.Update = function (user) {
        UsersService.putUser(user);
    }
    $scope.showPage = function (page) {
        if (page == 'prev') {
            $scope.Users = PaginationFactory.getPrevPage();
        }
        else {
            if (page == 'next') {
                $scope.Users = PaginationFactory.getNextPage();
            }
            else {
                $scope.Users = PaginationFactory.getPageItems(page);
            }
        }
    }
    $scope.currentPage = function () {
        return PaginationFactory.getCurrentPage();
    }

    Styler.setAdministration(0);

}
UsersController.$inject = ['$scope', 'PaginationFactory', 'UsersService', 'Styler'];
app.controller('UsersController', UsersController);