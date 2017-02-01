using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.ModelsDTO
{
    public class RecommendationDTO
    {
        public int Id { get; set; }

        public string Benefits { get; set; }

        public string Text { get; set; }

        public int CriterionId { get; set; }

        public string CriterionName { get; set; }

        public int AssessmentId { get; set; }

        public int Order { get; set; }
    }
}
