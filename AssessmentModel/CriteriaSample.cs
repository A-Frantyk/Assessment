namespace AssessmentModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class CriteriaSample
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CriteriaSample()
        {
            IndicatorSamples = new HashSet<IndicatorSample>();
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

        public virtual AreaSample AreaSample { get; set; }

        public virtual ConstraintImpact ConstraintImpact { get; set; }

        public virtual ConstraintImpact ConstraintImpact1 { get; set; }

        public virtual ConstraintImpact ConstraintImpact2 { get; set; }

        public virtual ConstraintImpact ConstraintImpact3 { get; set; }

        [DefaultValue(0)]
        public int Order { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<IndicatorSample> IndicatorSamples { get; set; }
    }
}
