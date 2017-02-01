using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace AssessmentModel
{
    public partial class ActionItems
    {
        [Key]
        public int Id { get; set; }

        [Required, ForeignKey("ResponsiblePerson")]
        public int ResponsiblePersonId { get; set; }
        
        public virtual User ResponsiblePerson { get; set; }

        [Required, ForeignKey("Criterion")]
        public int CriteriaId { get; set; }

        public virtual Criterion Criterion { get; set; }

        [Required]
        public string ActionItem { get; set; }

        [Required]
        public DateTime DueDate { get; set; }

        [Required, DefaultValue(0)]
        public int Order { get; set; }

    }
}

