namespace AssessmentModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Indicator
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int CriteriaId { get; set; }

        public int? ScoreId { get; set; }

        public string Comment { get; set; }
        
        [DefaultValue(0)]
        public int Order { get; set; }

        public virtual Criterion Criterion { get; set; }

        public virtual IndicatorScore IndicatorScore { get; set; }
    }
}
