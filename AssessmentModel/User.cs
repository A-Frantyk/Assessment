using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentModel
{
    public class User
    {
        public User()
        {
            ActionItems = new HashSet<ActionItems>();
            Assessments_Expert = new HashSet<Assessment>();
            Assessments_Coordinator = new HashSet<Assessment>();
            Assessments_TechLead = new HashSet<Assessment>();
            Assessments_ProjectManager = new HashSet<Assessment>();
            Assessments_QCLead = new HashSet<Assessment>();
            Assessments_BusinessAnalyst = new HashSet<Assessment>();
            Assessments_MainExpert = new HashSet<Assessment>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [MaxLength(128)]
        public string Login { get; set; }
        
        [Required]
        public bool IsCoordinator { get; set; }

        [Required]
        public bool IsCompetenceManager { get; set; }

        public int? SSE_Id { get; set; }

        public virtual ICollection<ActionItems> ActionItems { get; set; }
        public virtual ICollection<Assessment> Assessments_Expert { get; set; }
        public virtual ICollection<Assessment> Assessments_TechLead { get; set; }
        public virtual ICollection<Assessment> Assessments_ProjectManager { get; set; }
        public virtual ICollection<Assessment> Assessments_Coordinator { get; set; }
        public virtual ICollection<Assessment> Assessments_QCLead { get; set; }
        public virtual ICollection<Assessment> Assessments_BusinessAnalyst { get; set; }
        public virtual ICollection<Assessment> Assessments_MainExpert { get; set; }
    }
}
