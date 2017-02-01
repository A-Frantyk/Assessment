namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CriterionCriteriaScore_Addded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Criteria", "CriteriaScoreId", c => c.Int());
            CreateIndex("dbo.Criteria", "CriteriaScoreId");
            AddForeignKey("dbo.Criteria", "CriteriaScoreId", "dbo.CriteriaScores", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Criteria", "CriteriaScoreId", "dbo.CriteriaScores");
            DropIndex("dbo.Criteria", new[] { "CriteriaScoreId" });
            DropColumn("dbo.Criteria", "CriteriaScoreId");
        }
    }
}
