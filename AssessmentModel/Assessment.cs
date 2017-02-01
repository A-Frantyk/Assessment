namespace AssessmentModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Assessment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Assessment()
        {
            Areas = new HashSet<Area>();
            Experts = new HashSet<User>();
            Attachments = new HashSet<Attachment>();
        }

        public int Id { get; set; }

        public int AssessmentTypeId { get; set; }

        [Required]
        [StringLength(256)]
        public string Name { get; set; }

        public string Description { get; set; }

        [StringLength(1024)]
        public string URL { get; set; }

        [StringLength(10)]
        public string Version { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? FinishDate { get; set; }

        [StringLength(128)]
        public string Project { get; set; }

        public int? ProjectId { get; set; }

        [StringLength(32)]
        public string Unit { get; set; }

        public int? UnitId { get; set; }

        public User ProjectManager { get; set; }

        public int? ProjectManagerId { get; set; }

        public User TechLead { get; set; }

        public int? TechLeadId { get; set; }

        public User Coordinator { get; set; }

        public int? CoordinatorId { get; set; }

        public User QCLead { get; set; }

        public int? QCLeadId { get; set; }

        public User BusinessAnalyst { get; set; }

        public int? BusinessAnalystId { get; set; }

        public User MainExpert { get; set; }

        public int? MainExpertId { get; set; }

        public int ScopeProjectConstraintId { get; set; }

        public int TimeProjectConstraintId { get; set; }

        public int QualityProjectConstraintId { get; set; }

        public int CostProjectConstraintId { get; set; }

        public string Comment { get; set; }

        public string QCComment { get; set; }

        public int? RecommendationsNum { get; set; }

        public int? Improvements { get; set; }

        public decimal? CoordinatorTime { get; set; }

        public decimal? ExpertTime { get; set; }

        public decimal? ServiceQualityScore { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Area> Areas { get; set; }

        public virtual AssessmentType AssessmentType { get; set; }

        public virtual ProjectConstraint ProjectConstraint { get; set; }

        public virtual ProjectConstraint ProjectConstraint1 { get; set; }

        public virtual ProjectConstraint ProjectConstraint2 { get; set; }

        public virtual ProjectConstraint ProjectConstraint3 { get; set; }

        public virtual ICollection<User> Experts { get; set; }

        public virtual ICollection<Attachment> Attachments { get; set; }
    }
}
