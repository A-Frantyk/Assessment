using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentsWebApi.ExportModels
{
    public class CriteriaExportModel
    {
        public string CriteriaName { get; set; }
        public string AreaName { get; set; }

        public List<IndicatorExportModel> Indicators { get; set; }
    }
}