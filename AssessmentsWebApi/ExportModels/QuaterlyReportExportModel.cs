using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentsWebApi.ExportModels
{
    public class QuaterlyReportExportModel
    {
        public int Assessments { get; set; }
        public string UnitName { get; set; }
        public decimal Average { get; set; }
        public int Recommendations { get; set; }
        public int Improvements { get; set; }
        public decimal CoordinatorTime { get; set; }
        public decimal ExpertTime { get; set; }
        public decimal ServiceQualityScore { get; set; }
    }
}