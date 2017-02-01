var ListingPageController = ['$scope', '$http', '$q', '$window', '$stateParams', 'HttpFactory', 'API_URLS', 'CurrAssessmentService', 'AssessmentService', 'ServerURL',
    function ($scope, $http, $q, $window, $stateParams, HttpFactory, API_URLS, CurrAssessmentService, AssessmentService, ServerURL) {

    $scope.assessments = [];
    $scope.currentProjectID;
    $scope.currentId = $stateParams.Id;

    $scope.setCurrentProjectID = function (value) {
        if (typeof $scope.currentProjectID !== "undefined")
        {
            var Selected = document.getElementById($scope.currentProjectID);

            if (Selected)
            {
                Selected.className = "assess";
            }
        }
        $scope.currentProjectID = value;
        CurrAssessmentService.setCurrentId(value);
        window.location = '/#/Home/AssessmentForm/' + value;
    };
    $scope.getCurrentProjectID = function () {
        $scope.currentProjectID = CurrAssessmentService.getCurrentId();
    }

    // Initialize data
    $scope.init = function () {
        AssessmentService.getAllAssessmentsBrief()
            .then(function (response) {
                $scope.assessments = response;
                if ($scope.assessments.length > 0) {
                    CurrAssessmentService.AssessmentsWasLoaded($scope.assessments[0].Id);
                }
            }, function (error) {
                CurrAssessmentService.AssessmentsLoadingFailed(error.Message);
            });
    };

    $scope.search = function (text) {
        AssessmentService.getAllAssessmentsBriefWithFilter(text)
            .then(function (response) {
                $scope.assessments = response;
                if ($scope.assessments.length > 0) {
                    CurrAssessmentService.AssessmentsWasLoaded($scope.assessments[0].Id);
                }
            }, function (error) {
                CurrAssessmentService.AssessmentsLoadingFailed(error.Message);
            });
    };


    $scope.searching = function (text) {
        if (text.length > 2) {
            $scope.search(text);
        };
        if (text.length == 0) {
            $scope.init();
        };
    };

    $scope.export = function () {
        $http({
            url: ServerURL + 'api/excel/GetAssessmentInExcel/' + $stateParams.Id,
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
            responseType: 'arraybuffer'
        }).success(function (data, status, headers, config) {
            var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            var objectUrl = URL.createObjectURL(blob);
            $window.open(objectUrl, "_self");
        }).error(function (data, status, headers, config) {
            alert("Upload Failed");
        });
    };

    $scope.closeForm = function () {
        $rootScope.$broadcast('Close Add Assessment', function () { });
    };

    $scope.init();
    }];

app.controller('ListingPageController', ListingPageController);
