var AttachmentsController = function ($scope, $stateParams, AttachmentService, AssessmentService, API_URLS, $injector, ngDialog, Styler) {

    // Indicates if add attachment panel is visible.
    $scope.addPanelActive = false;

    // Will be true when file is uploading.
    $scope.onFileUpload = false;

    //Indicates what will de displayed in the drop area.
    $scope.dragAreaState = 'default';

    $scope.idOfAttachmentToDelete = null;

    $scope.assessmentName;
    $scope.currentId = $stateParams.Id;
    $scope.attachments = [];
    $scope.file = {};
    $scope.maxSize = 31457280;
    $scope.comment = '';

    AssessmentService.getAssessmentById($stateParams.Id).then(function (response) {
        $scope.assessmentName = response.Name;
    });

    AttachmentService.getAttachmentsByAssessmemtId($stateParams.Id).then(function (response) {
        $scope.attachments = response;
    });

    // Change add attachment panel's visibility.
    $scope.triggerAddPanel = function () {
        $scope.addPanelActive = !($scope.addPanelActive);
    };

    // Refresh existing array of attachments.
    $scope.reloadAttachments = function () {
        $scope.attachments = {};
        AttachmentService.getAttachmentsByAssessmemtId($scope.currentId).then(function (response) {
            $scope.attachments = response;
        });
    };

    // Set the drop area state.
    $scope.setDropAreaState = function (value) {
        $scope.dragAreaState = value;
    };

    // Clear file and comment data. 
    $scope.clearAddForm = function () {
        if ($scope.file) {
            $scope.file = {};
            $scope.setDropAreaState('default');
        }

        if ($scope.comment) {
            $scope.comment = '';
        }
    };

    $scope.downloadFile = function (fileName) {

        window.open(API_URLS.downloadAttachmentFile + fileName);
    };

    // Delete attachment by id;
    $scope.Delete = function () {
        AttachmentService.deleteFile($scope.idOfAttachmentToDelete).then(function () {
            $scope.reloadAttachments();
        });
    };

    // Open delete confirm window
    $scope.openDeleteConfirmWindow = function (id) {
        $scope.idOfAttachmentToDelete = id;

        ngDialog.open({
            templateUrl: '/Home/DeleteConfirm',
            scope: $scope
        });
    }

    $scope.validateFile = function (size) {
        if (size == 0) {
            $scope.setDropAreaState('cannot-upload');
            return false;
        }

        if (size > $scope.maxSize) {
            $scope.setDropAreaState('file-too-big');
            return false;
        }

        return true;
    };


    //=============File upload management============

    // Sets file if browse button is used.
    $scope.setFile = function (element) {
        $scope.$apply(function () {
            if (element.files[0]) {
                if ($scope.validateFile(element.files[0].size)) {
                    $scope.file = element.files[0];
                    $scope.setDropAreaState('loaded');
                }
            }
            else {
                $scope.setDropAreaState('default');
            }
        });
    };


    // init event handlers
    function dragOver(evt) {
        $scope.$apply(function () {
            evt.preventDefault();
            evt.stopPropagation();
        });
    };

    function dragEnterLeave(evt) {
        $scope.$apply(function () {
            evt.preventDefault();
            evt.stopPropagation();
        });
    };

    function onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        $scope.$apply(function () {
            if ($scope.file) {
                $scope.file = {};
            }
            if (evt.dataTransfer.types.indexOf('Files') >= 0) {
                var loaded = evt.dataTransfer.files
                if (loaded.length > 0) {
                    if ($scope.validateFile(loaded[0].size)) {
                        $scope.file = loaded[0];
                        $scope.setDropAreaState('loaded');
                    }
                }
            }
            else {
                $scope.setDropAreaState('default');
            }
        });
    };

    function transferComplete(evt) {
        $scope.$apply(function () {
            var json = {
                name: $scope.file.name,
                assessmentId: $scope.currentId,
                size: $scope.file.size,
                comment: $scope.comment
            };

            $scope.clearAddForm();
            AttachmentService.postAttachment(json).then(function () {
                $scope.reloadAttachments();
                $scope.onFileUpload = false;
                ngDialog.open({
                    template: "<div><h3>Upload Complete!</h3></div>",
                    plain: true
                });
            });
        });
    }

    function transferFailed(evt) {
        $scope.$apply(function () {
            $scope.onFileUpload = false;
            ngDialog.open({
                templateUrl: "<div><h3>Upload Failed!</h3></div>",
                plain: true
            });
        });
    }

    // add drag-n-drop event listeners to the drop area
    var dropArea = document.getElementById('dropZone');

    dropArea.addEventListener("dragenter", dragEnterLeave, false);
    dropArea.addEventListener("dragleave", dragEnterLeave, false);
    dropArea.addEventListener("dragover", dragOver, false);
    dropArea.addEventListener("drop", onDrop, false);

    // implement upload file
    $scope.addAttachment = function () {
        var data = new FormData();
        data.append('uploadedFile', $scope.file, $scope.file.name);

        var objXhr = new XMLHttpRequest();
        objXhr.addEventListener("load", transferComplete, false);
        objXhr.addEventListener("error", transferFailed, false);


        objXhr.open("POST", API_URLS.uploadAttachmentFile);
        $scope.onFileUpload = true;
        objXhr.send(data);
    };

    Styler.setAssessment(4);
};

AttachmentsController.$inject = ['$scope', '$stateParams', 'AttachmentService', 'AssessmentService', 'API_URLS', '$injector', 'ngDialog', 'Styler'];
app.controller('AttachmentsController', AttachmentsController);