using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentsWebApi.ExportModels
{
    public class AssessmentExportModel
    {
        public string Name { get; set; }
        public string URL { get; set; }
        public string Version { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? FinishDate { get; set; }
        public string Project { get; set; }
        public string Unit { get; set; }
        public string ProjectManager { get; set; }
        public string TechLead { get; set; }
        public string Coordinator { get; set; }
        public string Comment { get; set; }
        public int? RecommendationsNum { get; set; }
        public int? Improvements { get; set; }
        public decimal? CoordinatorTime { get; set; }
        public decimal? ExpertTime { get; set; }
        public decimal? ServiceQualityScore { get; set; }

        public List<AreaExportModel> Areas { get; set; }
    }
}