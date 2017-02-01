using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentServices.ModelsDTO
{
    public class AssessmentDTO
    {
        public AssessmentDTO()
        {
            Experts = new List<UserDTO>();
            Recommendations = new List<RecommendationDTO>();
        }

        public int Id { get; set; }
        public string Name { get; set; }       
        public string URL { get; set; }       
        public string Version { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? FinishDate { get; set; }
        public string Project { get; set; }
        public int? ProjectId { get; set; }
        public string Unit { get; set; }
        public int? UnitId { get; set; }       
        public int? ProjectManagerId { get; set; }
        public string ProjectManager { get; set; }
        public string TechLead { get; set; }
        public int? TechLeadId { get; set; }
        public string Coordinator { get; set; }
        public int? CoordinatorId { get; set; }
        public string QCLead { get; set; }
        public int? QCLeadId { get; set; }
        public string BusinessAnalyst { get; set; }
        public int? BusinessAnalystId { get; set; }
        public string MainExpert { get; set; }
        public int? MainExpertId { get; set; }
        public string Comment { get; set; }
        public string QCComment { get; set; }
        public int AssessmentTypeId { get; set; }
        public string AssessmentType { get; set; }
        public int? RecommendationsNum { get; set; }
        public int? Improvements { get; set; }
        public decimal? CoordinatorTime { get; set; }
        public decimal? ExpertTime { get; set; }
        public decimal? ServiceQualityScore { get; set; }

        public int ScopeProjectConstraintId { get; set; }
        public int TimeProjectConstraintId { get; set; }
        public int QualityProjectConstraintId { get; set; }

        public int CostProjectConstraintId { get; set; }

        public List<UserDTO> Experts { get; set; }

        public List<RecommendationDTO> Recommendations { get; set; }

        public string _Url { get; set; }
    }
}