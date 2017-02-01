namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Attachments_Added : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Attachments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        FilePath = c.String(nullable: false),
                        Comment = c.String(maxLength: 500),
                        Size = c.Double(nullable: false),
                        AssessmentId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Assessments", t => t.AssessmentId, cascadeDelete: true)
                .Index(t => t.AssessmentId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Attachments", "AssessmentId", "dbo.Assessments");
            DropIndex("dbo.Attachments", new[] { "AssessmentId" });
            DropTable("dbo.Attachments");
        }
    }
}
