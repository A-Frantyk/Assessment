var CurrAssessmentService = function ($rootScope) {
    this.currentId = 0;

    // Setter & getter
    this.getCurrentId = function () {
        return this.currentId;
    };

    this.setCurrentId = function (id) {
        this.currentId = id;
    };

    // Events
    this.AssessmentsWasLoaded = function (withId) {
        $rootScope.$broadcast('Assessments was loaded', withId);
        this.setCurrentId(withId);
    };

    this.AssessmentsLoadingFailed = function (error) {
        $rootScope.$broadcast('Assessments loading failed', error)
    }

    this.DefaultWasChanged = function (toId) {
        $rootScope.$broadcast('Default was Changed', toId);
    };
}

CurrAssessmentService.$inject = ['$rootScope'];
app.service('CurrAssessmentService', CurrAssessmentService);

