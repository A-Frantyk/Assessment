namespace AssessmentModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class IndicatorSample
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int CriteriaSampleId { get; set; }

        [DefaultValue(0)]
        public int Order { get; set; }

        public virtual CriteriaSample CriteriaSample { get; set; }
    }
}
