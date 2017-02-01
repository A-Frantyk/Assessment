namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ExpertAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Assessments", "MainExpertId", c => c.Int());          
            CreateIndex("dbo.Assessments", "MainExpertId");
            AddForeignKey("dbo.Assessments", "MainExpertId", "dbo.Users", "Id");
            RenameColumn("dbo.Attachments", "QnigueName", "UniqueName");
        }
        
        public override void Down()
        {            
            DropForeignKey("dbo.Assessments", "MainExpertId", "dbo.Users");
            DropIndex("dbo.Assessments", new[] { "MainExpertId" });           
            DropColumn("dbo.Assessments", "MainExpertId");
            RenameColumn("dbo.Attachments", "UniqueName", "QnigueName");
        }
    }
}
