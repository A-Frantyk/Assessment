var ExcelService = function ($http) {

    this.assessment = [];
    this.indicators = [];
    this.criteria = [];
    this.area = [];

    this.createExportableJson = function (id) {
        FillAssessmentService.GetAssessmentsByID(id).then(function (response) {
            this.assessment = response;
        });

        FillAssessmentService.GetAllCriteriaOfAssessment(id).then(function (response) {
            this.criteria = response;
        });


    };

    this.export = function (json, url) {
        $http({
            url: url,
            method: "POST",
            data: json,
            headers: {
                'Content-type': 'application/json'
            },
            responseType: 'arraybuffer'
        }).success(function (data, status, headers, config) {
            var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            var objectUrl = URL.createObjectURL(blob);
            window.open(objectUrl);
        }).error(function (data, status, headers, config) {
            alert("Upload Failed");
        });
    };
}

ExcelService.$inject = ['$http'];
app.service('ExcelService', ExcelService);

