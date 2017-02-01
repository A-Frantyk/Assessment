using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AssessmentModel
{
    public class Attachment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public string UniqueName { get; set; }

        [StringLength(500)]
        public string Comment { get; set; }

        public double Size { get; set; }

        public int AssessmentId { get; set; }

        public Assessment Assessment { get; set; }
    }
}
