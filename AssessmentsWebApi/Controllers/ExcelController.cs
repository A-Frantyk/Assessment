using AssessmentsWebApi.ExportModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using OfficeOpenXml;
using System.Net.Http.Headers;
using OfficeOpenXml.Style;
using AssessmentServices.Factory;
using AssessmentsWebApi.Controllers.BaseControllers;
using AssessmentServices.UnitOfWork;
using AssessmentModel;

namespace AssessmentsWebApi.Controllers
{
    public class ExcelController : BaseController
    {
        public ExcelController(ICompetenceManagerUnitOfWork unit) 
            : base(unit) { }

        [HttpGet]
        public HttpResponseMessage GetAssessmentInExcel(int id)
        {
            HttpResponseMessage Response = new HttpResponseMessage(HttpStatusCode.OK);
            ExcelPackage excel = new ExcelPackage();
            MemoryStream memoryStream = new MemoryStream();

            var assessmentSheet = excel.Workbook.Worksheets.Add("Assessment");
            var workSheet = excel.Workbook.Worksheets.Add("Assessment Scores");
            
            var assessment = UnitOfWork.AssessmentRepository.GetByID(id);
            var export = CreateExportModel(assessment);

            Type t = typeof(AssessmentExportModel);
            var titles = t.GetProperties();
            int k = 1;
            foreach (var unit in titles)
            {
                assessmentSheet.Cells[k++, 1].Value = unit.Name;
            }
            assessmentSheet.Cells[1, 2].Value = assessment.Name;
            assessmentSheet.Cells[2, 2].Value = assessment.URL;
            assessmentSheet.Cells[3, 2].Value = assessment.Version;
            assessmentSheet.Cells[4, 2].Value = assessment.Description;
            assessmentSheet.Cells[5, 2].Value = assessment.StartDate;
            assessmentSheet.Cells[6, 2].Value = assessment.FinishDate;
            assessmentSheet.Cells[7, 2].Value = assessment.Project;
            assessmentSheet.Cells[8, 2].Value = assessment.Unit;
            assessmentSheet.Cells[9, 2].Value = assessment.ProjectManager;
            assessmentSheet.Cells[10, 2].Value = assessment.TechLead;
            assessmentSheet.Cells[11, 2].Value = assessment.Coordinator;
            assessmentSheet.Cells[12, 2].Value = assessment.Comment;
            assessmentSheet.Cells[13, 2].Value = assessment.RecommendationsNum;
            assessmentSheet.Cells[13, 2].Value = assessment.Improvements;
            assessmentSheet.Cells[14, 2].Value = assessment.CoordinatorTime;
            assessmentSheet.Cells[15, 2].Value = assessment.ExpertTime;
            assessmentSheet.Cells[16, 2].Value = assessment.ServiceQualityScore;

            assessmentSheet.Cells[assessmentSheet.Dimension.Address].AutoFitColumns();
            assessmentSheet.Cells[assessmentSheet.Dimension.Address].Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;

            assessmentSheet.Cells[5, 2].Style.Numberformat.Format = "dd-mm-yyyy";
            assessmentSheet.Cells[6, 2].Style.Numberformat.Format = "dd-mm-yyyy";

            if (assessment != null)
            {
                workSheet.Cells[1, 1].Value = "Area";
                workSheet.Cells[1, 2].Value = "Criteria";
                workSheet.Cells[1, 3].Value = "Criteria Description";
                workSheet.Cells[1, 4].Value = "Score";
                workSheet.Cells[1, 5].Value = "Weight";
                workSheet.Cells[1, 6].Value = "Comment";

                for (int i = 0; i < export.Indicators.Count; i++)
                {
                    workSheet.Cells[i + 2, 1].Value = export.Indicators[i].Area;
                    workSheet.Cells[i + 2, 2].Value = export.Indicators[i].Criteria;
                    workSheet.Cells[i + 2, 3].Value = export.Indicators[i].IndicatorName;
                    workSheet.Cells[i + 2, 4].Value = export.Indicators[i].IndicatorScore;
                    workSheet.Cells[i + 2, 5].Value = export.Indicators[i].IndicatorScoreWeight;
                    workSheet.Cells[i + 2, 6].Value = export.Indicators[i].IndicatorComment;
                }

                workSheet.Cells[workSheet.Dimension.Address].AutoFitColumns();
                assessmentSheet.Cells[workSheet.Dimension.Address].AutoFitColumns();
                assessmentSheet.Cells[workSheet.Dimension.Address].Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            excel.SaveAs(memoryStream);
            Response.Content = new ByteArrayContent(memoryStream.GetBuffer());
            Response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = "Assessment.xlsx"
            };
            Response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

            return Response;
        }

        [HttpPost]
        [Route("api/excel/postquaterly/")]
        public HttpResponseMessage PostQuaterly(List<QuaterlyReportExportModel> quaterlyReport)
        {
            HttpResponseMessage Response = new HttpResponseMessage();
            ExcelPackage excel = new ExcelPackage();
            MemoryStream memoryStream = new MemoryStream();

            var workSheet = excel.Workbook.Worksheets.Add("Quaterly report");
            workSheet.Cells[1, 1].LoadFromCollection(quaterlyReport, true);

            excel.SaveAs(memoryStream);
            Response.Content = new ByteArrayContent(memoryStream.GetBuffer());
            Response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            Response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

            return Response;
        }

        private ExportModel CreateExportModel(Assessment _assessment)
        {
            ExportModel exModel = new ExportModel 
            {
                Assessment = new List<AssessmentExportModel>(),
                Area = new List<AreaExportModel>(),
                Criteria = new List<CriteriaExportModel>(),
                Indicators = new List<IndicatorExportModel>()
            };

            foreach (Area area in _assessment.Areas)
            {
                AreaExportModel newArea = new AreaExportModel
                {
                    Name = area.Name,
                    Description = area.Description,
                };

                foreach (Criterion criterion in area.Criteria)
                {
                    CriteriaExportModel newCriterion = new CriteriaExportModel
                    {
                        CriteriaName = criterion.Name,
                        AreaName = criterion.Area.Name
                    };

                    newArea.Criterias = new List<CriteriaExportModel>();
                    newCriterion.Indicators = new List<IndicatorExportModel>();

                    foreach (Indicator indicator in criterion.Indicators)
                    {
                        IndicatorExportModel newIndicator = new IndicatorExportModel
                        {
                            IndicatorName = indicator.Name,
                            IndicatorScore = indicator.IndicatorScore.Name,
                            IndicatorScoreWeight = indicator.IndicatorScore.Weight,
                            IndicatorComment = indicator.Comment,
                            Criteria = indicator.Criterion.Name,
                            Area = indicator.Criterion.Area.Name
                        };
                        exModel.Indicators.Add(newIndicator);
                        newCriterion.Indicators.Add(newIndicator);
                    }
                    newArea.Criterias.Add(newCriterion);
                    exModel.Criteria.Add(newCriterion);
                }
                exModel.Area.Add(newArea);
            }

            AssessmentExportModel asm = new AssessmentExportModel();

            exModel.Assessment.Add(asm);

            return exModel;
        }

    }
}