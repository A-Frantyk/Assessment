namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LastChanges : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Assessments", "QCLeadId", c => c.Int());
            AddColumn("dbo.Assessments", "BusinessAnalystId", c => c.Int());
            AddColumn("dbo.Assessments", "QCComment", c => c.String());
            AddColumn("dbo.AssessmentTypes", "IsActive", c => c.Boolean(nullable: false));
            CreateIndex("dbo.Assessments", "QCLeadId");
            CreateIndex("dbo.Assessments", "BusinessAnalystId");
            AddForeignKey("dbo.Assessments", "BusinessAnalystId", "dbo.Users", "Id");
            AddForeignKey("dbo.Assessments", "QCLeadId", "dbo.Users", "Id");
            RenameColumn("dbo.Attachments", "FilePath", "QnigueName");
        }
        
        public override void Down()
        {          
            DropForeignKey("dbo.Assessments", "QCLeadId", "dbo.Users");
            DropForeignKey("dbo.Assessments", "BusinessAnalystId", "dbo.Users");
            DropIndex("dbo.Assessments", new[] { "BusinessAnalystId" });
            DropIndex("dbo.Assessments", new[] { "QCLeadId" });
            DropColumn("dbo.AssessmentTypes", "IsActive");
            DropColumn("dbo.Assessments", "QCComment");
            DropColumn("dbo.Assessments", "BusinessAnalystId");
            DropColumn("dbo.Assessments", "QCLeadId");
            RenameColumn("dbo.Attachments", "QnigueName", "FilePath");
        }
    }
}
