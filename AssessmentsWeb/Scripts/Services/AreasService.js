var AreasService = function ($q, HttpFactory, API_URLS) {
    this.getWeakAreasById = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.WeakAreas + id, deferred);
        return deferred.promise;
    };

    this.getStrongAreasById = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.StrongAreas + id, deferred);
        return deferred.promise;
    };

    this.getTopWeakAreas = function (id, startDate, finishDate, page, itemsPerPage) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.TopWeakAreas + '?typeId=' + id + '&start=' + startDate + '&end=' + finishDate + '&page=' + page + '&itemsPerPage=' + itemsPerPage, deferred);
        return deferred.promise;
    };
    this.getAreaByTypeId = function (id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.AreaByAssessTypeId + id, deferred);
        return deferred.promise;
    }
    this.putArea = function (area) {
        var deferred = $q.defer();
        HttpFactory.putAsync(API_URLS.PutArea,area,deferred);
        return deferred.promise;
    }
    this.postArea = function (area) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.PostArea, area, deferred);
        return deferred.promise;
    }
    this.getAreaById = function (Id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAreaSampleById+Id, deferred);
        return deferred.promise;
    }
    this.getActionItemsById = function (Id) {
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetActionItemsById + Id, deferred);
        return deferred.promise;
    }
    this.PostActionItems = function (actionItems) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.postActionItems, actionItems, deferred);
        return deferred.promise;
    }
    this.deleteArea = function (id) {
        var deferred = $q.defer();
        HttpFactory.deleteAsync(API_URLS.deleteArea + id, id, deferred);
        return deferred.promise;
    };
};


AreasService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('AreasService', AreasService);