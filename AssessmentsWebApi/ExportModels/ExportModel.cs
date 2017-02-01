using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentsWebApi.ExportModels
{
    public class ExportModel
    {
        public List<AssessmentExportModel> Assessment { get; set; }
        public List<IndicatorExportModel> Indicators { get; set; }
        public List<CriteriaExportModel> Criteria { get; set; }
        public List<AreaExportModel> Area { get; set; }
    }
}