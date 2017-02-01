using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.ModelsDTO
{
    public class ActionItemsDTO
    {
        public int Id { get; set; }

        public string ResponsiblePerson { get; set; }

        public int? ResponsiblePersonId { get; set; }

        public int CriteriaId { get; set; }

        public string ActionItem { get; set; }

        public DateTime DueDate { get; set; }

        public int Order { get; set; }
    }
}
