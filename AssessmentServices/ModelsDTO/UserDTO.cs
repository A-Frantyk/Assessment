using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AssessmentServices.ModelsDTO
{
    public class UserDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Login { get; set; }

        public bool IsCoordinator { get; set; }

        public bool IsCompetenceManager { get; set; }

        public int? SSE_Id { get; set; }
    }
}