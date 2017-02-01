using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentServices.ModelsDTO
{
    public class CriteriaSampleDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int AreaId { get; set; }

        public int ScopeConstraintImpactId { get; set; }

        public int TimeConstraintImpactId { get; set; }

        public int QualityConstraintImpactId { get; set; }

        public int CostConstraintImpactId { get; set; }

        public int Order { get; set; }
    }
}