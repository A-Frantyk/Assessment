using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.CustomDTO
{
    public class QuaterlyReport
    {
        /// <summary>
        /// Name of Unit
        /// </summary>
        public string UnitName { get; set; }

        /// <summary>
        /// Total Number of Assessments For Given Unit
        /// </summary>
        public int Assessments { get; set; }

        /// <summary>
        /// Average Indicator Score of Assessments For Given Unit
        /// </summary>
        public decimal Average { get; set; }

        /// <summary>
        /// Total Number of Assessments' Recommendations For Given Unit
        /// </summary>
        public int Recommendations { get; set; }

        /// <summary>
        /// Total Number of Improvements of Assessments For Given Unit
        /// </summary>
        public int Improvements { get; set; }

        /// <summary>
        /// Total Time Spent By Coordinator of Assessment
        /// </summary>
        public decimal CoordinatorTime { get; set; }

        /// <summary>
        /// Total Time Spent By Experts of Assessment
        /// </summary>
        public decimal ExpertTime { get; set; }

        /// <summary>
        /// Total ServiceQuality Score of Assessments For Given Unit
        /// </summary>
        public decimal ServiceQualityScore { get; set; }
    };
}
