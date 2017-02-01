using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentServices.ModelsDTO
{
    public class IndicatorDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CriteriaId { get; set; }

        public int? ScoreId { get; set; }

        public string Comment { get; set; }

        public int Order { get; set; }
    }
}