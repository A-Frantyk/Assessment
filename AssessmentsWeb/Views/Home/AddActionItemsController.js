var AddActionItemController = function ($scope, $stateParams, ngDialog, FillAssessmentService, AreasService, UsersService, $state) {

    $scope.usersObj = [];
    $scope.criteriasObj = [];

    $scope.currentId = $stateParams.Id;

    $scope.actionItems = {
        CriteriaId: null,
        ActionItem: null,
        DueDate: null,
        ResponsiblePersonId: null,
    }

    var dialog = ngDialog;
    $scope.startForm = function () {
        dialog.open({
            templateUrl: '/Home/AddActionItem'
        });
    };

    $scope.init = function () {
        UsersService.getAllUsers().then(function (response) {
            $scope.usersObj = response;
        });

        FillAssessmentService.GetAllCriteriaOfAssessment($scope.currentId).then(function (response) {
            $scope.criteriasObj = response;
        });
    };

    $scope.submit = function () {
        AreasService.PostActionItems($scope.actionItems).then(function (response) {
            dialog.close();
            $state.go('Action Items', { Id: $scope.currentId });
        })

    };


    $scope.init();
};

AddActionItemController.$inject = ['$scope', '$stateParams', 'ngDialog', 'FillAssessmentService', 'AreasService', 'UsersService', '$state'];
app.controller('AddActionItemController', AddActionItemController);