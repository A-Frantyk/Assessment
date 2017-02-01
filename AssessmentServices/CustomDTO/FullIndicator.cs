using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.CustomDTO
{
    public class FullIndicator
    {
        public int IndicatorId {get; set; }
        public string IndicatorName {get; set; }
        public string IndicatorScore {get; set; }
        public string IndicatorComment {get; set; }
        public int IndicatorScoreId {get; set; }
        public int IndicatorScoreWeight { get; set; }
    }
}
