namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Recommendations_Added2 : DbMigration
    {
        public override void Up()
        {
            RenameColumn("dbo.Assessments", "Recommendations", "RecommendationsNum");
            CreateTable(
                "dbo.Recommendations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Benefits = c.String(),
                        Text = c.String(),
                        CriterionId = c.Int(nullable: false),
                        AssessmentId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Criteria", t => t.CriterionId, cascadeDelete: true)
                .ForeignKey("dbo.Assessments", t => t.AssessmentId)
                .Index(t => t.CriterionId)
                .Index(t => t.AssessmentId);
            
        }
        
        public override void Down()
        {
            AddColumn("dbo.Assessments", "Recommendations", c => c.Int());
            DropForeignKey("dbo.Recommendations", "AssessmentId", "dbo.Assessments");
            DropForeignKey("dbo.Recommendations", "CriterionId", "dbo.Criteria");
            DropIndex("dbo.Recommendations", new[] { "AssessmentId" });
            DropIndex("dbo.Recommendations", new[] { "CriterionId" });
            AlterColumn("dbo.Users", "Login", c => c.String(nullable: false, maxLength: 16));
            DropColumn("dbo.Assessments", "RecommendationsNum");
            DropTable("dbo.Recommendations");
        }
    }
}
