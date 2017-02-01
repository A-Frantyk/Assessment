using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentServices.ModelsDTO
{
    public class IndicatorSampleDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CriteriaSampleId { get; set; }

        public int Order { get; set; }
    }
}