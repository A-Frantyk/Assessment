var Styler = function () {
    
    this.setAssessment = function (id) {

        document.getElementById('ASSESSMENTS').style.color = '#11B8D5';
        document.getElementById('ANALYTICS').style.color = '#white';
        document.getElementById('ADMINISTRATION').style.color = 'white';

        document.getElementById('Form').className = "assessPanel";
        document.getElementById('WeakAreas').className = "assessPanel";
        document.getElementById('StrongAreas').className = "assessPanel";
        document.getElementById('FillAssessment').className = "assessPanel";
        document.getElementById('Attachments').className = "assessPanel";
        document.getElementById('Recommendations').className = "assessPanel";
        document.getElementById('ActionItems').className = "assessPanel";
        
        var string;
        if (id == 0) {
            string = 'Form';
        }
        if (id == 1) {
            string = 'WeakAreas';
        }
        if (id == 2) {
            string = 'StrongAreas';
        }
        if (id == 3) {
            string = 'FillAssessment';
        }
        if (id == 4) {
            string = 'Attachments';
        }
        if (id == 5) {
            string = 'Recommendations';
        }
        if (id == 6) {
            string = 'ActionItems';
        }

        document.getElementById(string).className = "assessPanelChosen";
    }

    this.setAnalytics = function (id) {

        document.getElementById('ASSESSMENTS').style.color = 'white';
        document.getElementById('ANALYTICS').style.color = '#11B8D5';
        document.getElementById('ADMINISTRATION').style.color = 'white';
        document.getElementById('Reports').className = "leftItems";
        document.getElementById('TopWeakAreas').className = "leftItems";

        var string;
        if (id == 0) {
            string = 'Reports';
        }
        if (id == 1) {
            string = 'TopWeakAreas';
        }

        document.getElementById(string).className = "leftItemsChosen";
    }

    this.setAdministration = function (id) {

        document.getElementById('ASSESSMENTS').style.color = '#white';
        document.getElementById('ANALYTICS').style.color = 'white';
        document.getElementById('ADMINISTRATION').style.color = '#11B8D5';
        document.getElementById('Users').className = "leftItems";
        document.getElementById('AssessmentTypes').className = "leftItems";

        var string;
        if (id == 0) {
            string = 'Users';
        }
        if (id == 1) {
            string = 'AssessmentTypes';
        }

        document.getElementById(string).className = "leftItemsChosen";
    }
};

app.service('Styler', Styler);