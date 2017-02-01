using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.CustomDTO
{
    public class ReccomendationWithCriterionNameDTO
    {

        public string Name { get; set; }

        public string Text { get; set; }

        public string Benefits { get; set; }

        public int Order { get; set; }

        public ReccomendationWithCriterionNameDTO(string Name, string Text, string Benefits, int Order)
        {
            this.Name = Name;
            this.Text = Text;
            this.Benefits = Benefits;
            this.Order = Order;
        }

    }
}
