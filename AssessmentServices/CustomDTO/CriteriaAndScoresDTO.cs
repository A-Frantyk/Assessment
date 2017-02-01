using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.CustomDTO
{
    public class CriteriaAndScoresDTO
    {
        public int CriterionId { get; set; }

        public string Criterion { get; set; }

        public string Score { get; set; }

        public int RecommendationCount { get; set; }

        public CriteriaAndScoresDTO(int CriterionId, string Criterion, string Score, int RecommendationCount)
        {
            this.CriterionId = CriterionId;
            this.Criterion = Criterion;
            this.Score = Score;
            this.RecommendationCount = RecommendationCount;
        }
        public CriteriaAndScoresDTO(int CriterionId, string Criterion, string Score)
        {
            this.CriterionId = CriterionId;
            this.Criterion = Criterion;
            this.Score = Score;
        }
    }
}
