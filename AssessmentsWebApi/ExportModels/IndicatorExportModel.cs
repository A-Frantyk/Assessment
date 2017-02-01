using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentsWebApi.ExportModels
{
    public class IndicatorExportModel
    {
        public string IndicatorName { get; set; }
        public string IndicatorComment { get; set; }
        public string IndicatorScore { get; set; }
        public int IndicatorScoreWeight { get; set; }

        public string Criteria { get; set; }
        public string Area { get; set; }
    }
}