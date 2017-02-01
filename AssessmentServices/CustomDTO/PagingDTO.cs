using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.CustomDTO
{
    public class PagingDTO<T> where T : class
    {
        public List<T> Items = new List<T>();

        public int ItemsCount { get; set; }

        public int Page { get; set; }

        public int TotalPages { get; set; }

    }
}
