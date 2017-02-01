using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentModel
{
    public class Recommendation
    {
        [Key]
        public int Id { get; set; }

        public string Benefits { get; set; }

        public string Text { get; set; }

        [DefaultValue(0)]
        public int Order { get; set; }

        public int CriterionId { get; set; }

        public Criterion Criterion { get; set; }   
    }
}
