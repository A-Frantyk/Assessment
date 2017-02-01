using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.CustomDTO
{
    public class StrongWeakAreasDTO
    {
        public string Area { get; set; }

        public string Criterion { get; set; }
        
        public string Score { get; set; }

        public int ScoreCount { get; set; }

        public string Description { get; set; }

        public List<CriteriaAndScoresDTO> CriteriaAndScores { get; set; }

        public StrongWeakAreasDTO()
        {
            CriteriaAndScores = new List<CriteriaAndScoresDTO>();
        }
    }
}
