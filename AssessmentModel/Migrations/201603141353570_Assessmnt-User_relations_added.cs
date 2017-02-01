namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AssessmntUser_relations_added : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Assessments", "ProjectManagerId");
            CreateIndex("dbo.Assessments", "TechLeadId");
            CreateIndex("dbo.Assessments", "CoordinatorId");
            AddForeignKey("dbo.Assessments", "CoordinatorId", "dbo.Users", "Id");
            AddForeignKey("dbo.Assessments", "ProjectManagerId", "dbo.Users", "Id");
            AddForeignKey("dbo.Assessments", "TechLeadId", "dbo.Users", "Id");
            DropColumn("dbo.Assessments", "ProjectManager");
            DropColumn("dbo.Assessments", "TechLead");
            DropColumn("dbo.Assessments", "Coordinator");
            DropColumn("dbo.Assessments", "Experts");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Assessments", "Experts", c => c.String(maxLength: 128));
            AddColumn("dbo.Assessments", "Coordinator", c => c.String(maxLength: 32));
            AddColumn("dbo.Assessments", "TechLead", c => c.String(maxLength: 32));
            AddColumn("dbo.Assessments", "ProjectManager", c => c.String(maxLength: 32));
            DropForeignKey("dbo.Assessments", "TechLeadId", "dbo.Users");
            DropForeignKey("dbo.Assessments", "ProjectManagerId", "dbo.Users");
            DropForeignKey("dbo.Assessments", "CoordinatorId", "dbo.Users");
            DropIndex("dbo.Assessments", new[] { "CoordinatorId" });
            DropIndex("dbo.Assessments", new[] { "TechLeadId" });
            DropIndex("dbo.Assessments", new[] { "ProjectManagerId" });
        }
    }
}
