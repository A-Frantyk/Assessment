using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AssessmentModel;
using AssessmentServices.UnitOfWork;
using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentServices.ModelsDTO;
using System.Collections;
using System.Net.Http;
using System.Net;

namespace AssessmentsWebApi.Controllers
{
    public class ActionItemsController : BaseController
    {
        public ActionItemsController(ICompetenceManagerUnitOfWork unit)
            : base(unit)
        {

        }

        [HttpGet]
        [Route("api/actionItems")]
        public IEnumerable<ActionItemsDTO> GetActionItems()
        {

            IQueryable<ActionItems> query;

            query = UnitOfWork.ActionItemsRepository.Get();

            return query.ToList().Select((ActionItems a) => DTOFactory.Create(a));
        }


        // GET: api/actionItems/getActionItemsByCriteriaId/{id}
        [HttpGet]
        public IEnumerable<ActionItemsDTO> GetActionItemsByCriteriaId(int id)
        {
            IQueryable<ActionItems> query;

            query = UnitOfWork.ActionItemsRepository.Get(a => a.CriteriaId == id);

            return query.ToList().Select((ActionItems a) => DTOFactory.Create(a));
        }

        // GET: api/actionItems/getActionItemsByAssessmentId/{id}
        [HttpGet]
        public IEnumerable GetActionItemsByAssessmentId(int id)
        {
            ArrayList actionItems = new ArrayList();

            IEnumerable<Area> areas = from a in UnitOfWork.AreaRepository.Get(x => x.AssesmentId == id)
                                      select a;

            foreach (var a in areas)
            {
                foreach (var c in a.Criteria)
                {
                    foreach (var ai in c.ActionItems)
                    {
                        actionItems.Add(new { area = a.Name, criterion = c.Name, actionItem = ai.ActionItem, responsiblePerson = ai.ResponsiblePerson.Name, dueDate = ai.DueDate.ToString("dd/MM/yyyy"), order = ai.Order });
                    }
                }
            }

            return actionItems;
        }

        // Post: api/actionItems/postActionItems
        [HttpPost]
        public HttpResponseMessage PostActionItems([FromBody] ActionItemsDTO actionItems)
        {
            var entity = DTOFactory.Parse(actionItems);

            if (entity == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Could not parse new ActionItems");
            }

            UnitOfWork.ActionItemsRepository.Insert(entity);

            return Request.CreateResponse(HttpStatusCode.Created, DTOFactory.Create(entity));
        }

    }
}
