var AttachmentService = function($q, HttpFactory, API_URLS)
{
    this.getAttachmentsByAssessmemtId = function(id){
        var deferred = $q.defer();
        HttpFactory.getAsync(API_URLS.GetAttachmentsByAssessmentId + id, deferred);
        return deferred.promise;
    };

    this.postAttachment = function (attachment) {
        var deferred = $q.defer();
        HttpFactory.postAsync(API_URLS.postAttachment, attachment, deferred);
        return deferred.promise;
    };

    this.deleteFile = function(id){
        var deferred = $q.defer();
        HttpFactory.deleteAsync(API_URLS.deleteAttachmentFile + id, id, deferred);
        return deferred.promise;
    };
};

AttachmentService.$inject = ['$q', 'HttpFactory', 'API_URLS'];
app.service('AttachmentService', AttachmentService);