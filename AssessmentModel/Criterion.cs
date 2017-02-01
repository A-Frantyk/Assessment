namespace AssessmentModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Criterion
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Criterion()
        {
            Indicators = new HashSet<Indicator>();
            Recommendations = new HashSet<Recommendation>();
            ActionItems = new HashSet<ActionItems>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(256)]
        public string Name { get; set; }

        public int AreaId { get; set; }

        public int ScopeConstraintImpactId { get; set; }

        public int TimeConstraintImpactId { get; set; }

        public int QualityConstraintImpactId { get; set; }

        public int CostConstraintImpactId { get; set; }

        public int? CriteriaScoreId { get; set;}

        public virtual Area Area { get; set; }

        public virtual ConstraintImpact ConstraintImpact { get; set; }

        public virtual ConstraintImpact ConstraintImpact1 { get; set; }

        public virtual ConstraintImpact ConstraintImpact2 { get; set; }

        public virtual ConstraintImpact ConstraintImpact3 { get; set; }

        public virtual CriteriaScore CriteriaScore { get; set; }

        [DefaultValue(0)]
        public int Order { get; set; }

        public virtual ICollection<ActionItems> ActionItems { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Indicator> Indicators { get; set; }

        public virtual ICollection<Recommendation> Recommendations { get; set; }
    }
}
