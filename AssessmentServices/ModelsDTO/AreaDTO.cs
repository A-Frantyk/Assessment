using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentServices.ModelsDTO
{
    public class AreaDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int AssesmentId { get; set; }

        public string Description { get; set; }

        public int Order { get; set; }
    }
}