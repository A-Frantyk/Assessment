using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentServices.ModelsDTO
{
   public  class AttachmentDTO
    {
       public AttachmentDTO()
       {
            
       }

       public int Id { get; set; }
       public string Name { get; set; }
       public string UniqueName { get; set; }       
       public string Comment { get; set; }
       public double Size { get; set; }
       public int AssessmentId { get; set; }

    }
}
