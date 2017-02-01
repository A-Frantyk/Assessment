namespace AssessmentModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class CriteriaScore
    {
        public CriteriaScore()
        {
            Criteria = new HashSet<Criterion>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(32)]
        public string Name { get; set; }

        public int Weight { get; set; }

        public virtual ICollection<Criterion> Criteria { get; set; }
    }
}
