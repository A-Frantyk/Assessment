// Ignore old syntax
'use strict'

// Delegate for Assessments application
var app = angular.module('Assessments', ['ui.router', 'ngDialog', 'ngResource', 'ui.select2']);

// Configuration
app.config(function ($stateProvider, $urlRouterProvider) {

    // Redirection in case of unknown URL
    $urlRouterProvider.otherwise('Home');

    $stateProvider
        .state('Home', {
            url: '/Home',
            templateUrl: '/Home/UIRouter',
            controller: UIRouterController
        })
        .state('Users', {
            url: '/Home/Users',
            templateUrl: '/Home/Users',
            controller: UsersController
        })
            .state('Types', {
                url: '/Home/AssessmentTypes',
                templateUrl: '/Home/AssessmentTypes',
                controller: AssessmentTypeController
            })
        .state('Form', {
            url: '/Home/AssessmentForm/:Id',
            templateUrl: '/Home/AssessmentForm/',
            controller: AssessmentFormInfoController
        })
        .state('Attachments', {
            url: '/Home/Attachments/:Id',
            templateUrl: '/Home/Attachments/',
            controller: AttachmentsController
        })
        .state('Weak Areas', {
            url: '/Home/WeakAreas/:Id',
            templateUrl: '/Home/WeakAreas/',
            controller: WeakAreasController
        })
        .state('Areas', {
            url: '/Home/Areas/:Id',
            templateUrl: '/Home/Areas/',
            controller: AreasController
        })
        .state('CriteriaSamples', {
            url: '/Home/CriteriaSamples/:Id',
            templateUrl: '/Home/CriteriaSamples/',
            controller: CriteriaSamplesController
        })
        .state('IndicatorSamples', {
            url: '/Home/IndicatorSamples/:Id',
            templateUrl: '/Home/IndicatorSamples/',
            controller: IndicatorSamplesController
        })
        .state('Strong Areas', {
            url: '/Home/StrongAreas/:Id',
            templateUrl: '/Home/StrongAreas/',
            controller: StrongAreasController
        })
        .state('Recommendations', {
            url: '/Home/Recommendations/:Id',
            templateUrl: '/Home/Recommendations/',
            controller: RecommendationsController
        })
        .state('Action Items', {
            url: '/Home/ActionItems/:Id',
            templateUrl: '/Home/ActionItems/',
            controller: ActionItemsController
        })

        //////////////////////////////////////////////////////
        //          Analytics
        .state('Analytics', {
            url: '/Home/Analytics',
            templateUrl: '/Home/Analytics',
            controller: AnalyticsController
        })
        .state('Reports', {
            url: '/Home/Reports',
            templateUrl: '/Home/Reports',
            controller: ReportsController
        })
        .state('Top Weak Areas', {
            url: '/Home/TopWeakAreas',
            templateUrl: '/Home/TopWeakAreas',
            controller: TopWeakAreasController
        })
        .state('FillAssessment', {
            url: '/Home/FillAssessment/:Id',
            templateUrl: '/Home/FillAssessment/',
            controller: FillAssessmentController
        })

        // Error state
        .state('Error', {
            url: '/Home/Error',
            templateUrl: 'Home/Error',
            params: {
                errorCode: null,
                errorText: null,
                errorMessage: null
            },
            controller: ErrorController
        });
    

});

app.value('ServerURL', 'http://localhost:65030/');

// App's constants
// Available by "API_URLS.NameOfConstant"
app.constant('API_URLS', {
    Assessments: 'http://localhost:65030/api/assessments/getAssessments/',
    EditAssessment: 'http://localhost:65030/api/assessments/EditAssessment/',
    GetAssessmentsByID: 'http://localhost:65030/api/assessments/getAssessmentById/',
    GetCurrentUser: 'http://localhost:65030/api/users/getcurrentuser',
    WeakAreas: 'http://localhost:65030/api/assessments/GetWeakAreas/',
    StrongAreas: 'http://localhost:65030/api/assessments/GetStrongAreas/',
    AssessmentTypes: 'http://localhost:65030/api/assessmentType/',
    Users: 'http://localhost:65030/api/users',
    GetUsers: 'http://localhost:65030/api/users/getUsers',
    GetUserById: 'http://localhost:65030/api/users/getuserbyid/',
    QuaterlyReport: 'http://localhost:65030/api/reports/GetQuaterlyReport/',
    TopWeakAreas: 'http://localhost:65030/api/Reports/GetTopWeakAreas/',
    PutUser: 'http://localhost:65030/api/Users/ModifyUsers',
    PutType: 'http://localhost:65030/api/assessmentType/ModifyTypes',
    PostType: 'http://localhost:65030/api/assessmentType',
    AreaByAssessTypeId: 'http://localhost:65030/api/AreaSample/GetAreaSamplesByAssessmentTypeId/',
    GetAssessmentFormInfo: 'http://localhost:65030/api/assessments/GetAssessmentFormInfo/',
    PutArea: 'http://localhost:65030/api/AreaSample/ModifyAreaSample',
    PostArea: 'http://localhost:65030/api/AreaSample/AddAreaSample',
    GetBriefAssessments: 'http://localhost:65030/api/assessments/getBriefAssessmentsInfo/',
    GetBriefAssessmentsWithFilter: 'http://localhost:65030/api/assessments/getBriefAssessmentsInfoWithFilter/',
    GetAllAreaOfAssessment: 'http://localhost:65030/api/area/GetAllAreaOfAssessment/',
    GetAllCriteriaOfAssessment: 'http://localhost:65030/api/criteria/GetAllCriteriaOfAssessment/',
    GetAllRecommendations: 'http://localhost:65030/api/Recommendations/GetAllRecommendations/',
    GetAllCriteriaByAssessmentId: 'http://localhost:65030/api/Recommendations/GetAllCriteriaByAssessmentId/',
    PostRecommendation: 'http://localhost:65030/api/Recommendations/SaveReccomendation/',
    PutRecommendation: 'http://localhost:65030/api/Recommendations/EditReccomendation/',
    Criteria: 'http://localhost:65030/api/criteria',
    Indicators: 'http://localhost:65030/api/indicators',
    GetIndicatorsByCriteriaId: 'http://localhost:65030/api/indicators/GetIndicatorsOfCriterion/',
    IndicatorScores: 'http://localhost:65030/api/IndicatorScore',
    PutIndicatorScore: 'http://localhost:65030/api/Indicators/PutIndicatorScoreIntoIndicator/',
    PutIndicatorComment: 'http://localhost:65030/api/Indicators/PutAddNewCommentToIndicator/',
    GetCriteriaSampleByAreaId: 'http://localhost:65030/api/CriteriaSample/GetCriteriaSampleByAreaId/',
    ConImp: 'http://localhost:65030/api/ConstraintImpact',
    putCriteriaSample: 'http://localhost:65030/api/CriteriaSample/ModifyCriteriaSample',
    postCriteriaSample: 'http://localhost:65030/api/CriteriaSample/AddCriteriaSample',
    GetAreaSampleById: 'http://localhost:65030/api/AreaSample/GetAreaSampleByID/',
    GetIndicatorSampleByCriteriaId: 'http://localhost:65030/api/IndicatorSample/GetIndicatorSampleByCriteriaSampleId/',
    putIndicatorSample: 'http://localhost:65030/api/IndicatorSample/ModifyIndicatorSample',
    postIndicatorSample: 'http://localhost:65030/api/IndicatorSample/AddIndicatorSample',
    GetCriteriaSampleById: 'http://localhost:65030/api/CriteriaSample/GetCriteriaSampleByID/',
    GetFullIndicatorsByCriteriaId: 'http://localhost:65030/api/indicators/GetFullIndicatorsOfCriterion/',
    GetAssessmentTypeById: 'http://localhost:65030/api/AssessmentType/GetAssessmentTypeById/',
    GetAttachmentsByAssessmentId: 'http://localhost:65030/api/attachment/GetAttachmentByAssessmentId/',
    postAttachment: 'http://localhost:65030/api/attachment/AddAttachment/',
    putAttachment: 'http://localhost:65030/api/attachment/ModifyAttachment/',
    uploadAttachmentFile: 'http://localhost:65030/api/attachment/uploadFile/',
    downloadAttachmentFile: 'http://localhost:65030/api/attachment/downloadFile/',
    deleteAttachmentFile: 'http://localhost:65030/api/attachment/deleteFile/',
    GetActionItemsById: 'http://localhost:65030/api/actionItems/getActionItemsByAssessmentId/',
    postActionItems: 'http://localhost:65030/api/actionItems/postActionItems',
    deleteIndicatorSample: 'http://localhost:65030/api/IndicatorSamples/deleteIndicatorSample/',
    deleteCriteriaSample: 'http://localhost:65030/api/CriteriaSamples/deleteCriteriaSample/',
    deleteArea: 'http://localhost:65030/api/AreaSample/deleteAreaSample/'
});