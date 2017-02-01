namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Cascade_Delete : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AreaSamples", "AssesmentTypeId", "dbo.AssessmentTypes");
            DropForeignKey("dbo.CriteriaSamples", "AreaId", "dbo.AreaSamples");
            DropForeignKey("dbo.IndicatorSamples", "CriteriaSampleId", "dbo.CriteriaSamples");
            AddForeignKey("dbo.AreaSamples", "AssesmentTypeId", "dbo.AssessmentTypes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.CriteriaSamples", "AreaId", "dbo.AreaSamples", "Id", cascadeDelete: true);
            AddForeignKey("dbo.IndicatorSamples", "CriteriaSampleId", "dbo.CriteriaSamples", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.IndicatorSamples", "CriteriaSampleId", "dbo.CriteriaSamples");
            DropForeignKey("dbo.CriteriaSamples", "AreaId", "dbo.AreaSamples");
            DropForeignKey("dbo.AreaSamples", "AssesmentTypeId", "dbo.AssessmentTypes");
            AddForeignKey("dbo.IndicatorSamples", "CriteriaSampleId", "dbo.CriteriaSamples", "Id");
            AddForeignKey("dbo.CriteriaSamples", "AreaId", "dbo.AreaSamples", "Id");
            AddForeignKey("dbo.AreaSamples", "AssesmentTypeId", "dbo.AssessmentTypes", "Id");
        }
    }
}
