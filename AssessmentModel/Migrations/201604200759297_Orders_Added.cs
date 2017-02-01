namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Orders_Added : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Recommendations", "AssessmentId", "dbo.Assessments");
            DropIndex("dbo.Recommendations", new[] { "AssessmentId" });
            AddColumn("dbo.Areas", "Order", c => c.Int(nullable: false));
            AddColumn("dbo.AreaSamples", "Order", c => c.Int(nullable: false));
            AddColumn("dbo.CriteriaSamples", "Order", c => c.Int(nullable: false));
            AddColumn("dbo.Criteria", "Order", c => c.Int(nullable: false));
            AddColumn("dbo.Indicators", "Order", c => c.Int(nullable: false));
            AddColumn("dbo.Recommendations", "Order", c => c.Int(nullable: false));
            DropColumn("dbo.Recommendations", "AssessmentId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Recommendations", "AssessmentId", c => c.Int(nullable: false));
            DropColumn("dbo.Recommendations", "Order");
            DropColumn("dbo.Indicators", "Order");
            DropColumn("dbo.Criteria", "Order");
            DropColumn("dbo.CriteriaSamples", "Order");
            DropColumn("dbo.AreaSamples", "Order");
            DropColumn("dbo.Areas", "Order");
            CreateIndex("dbo.Recommendations", "AssessmentId");
            AddForeignKey("dbo.Recommendations", "AssessmentId", "dbo.Assessments", "Id");
        }
    }
}
