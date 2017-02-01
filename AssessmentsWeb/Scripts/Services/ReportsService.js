var ReportsService = function ($q, HttpFactory, API_URLS) {

    this.getQuaterlyReport = function (startDate, finishDate, assessmentType) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.QuaterlyReport + '?start=' + startDate + '&end=' + finishDate + '&type=' + assessmentType, deferred);
        return deferred.promise;
    };
};


ReportsService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('ReportsService', ReportsService);