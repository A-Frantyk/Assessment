using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentsWebApi.ExportModels
{
    public class AreaExportModel
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public List<CriteriaExportModel> Criterias { get; set; }
    }
}