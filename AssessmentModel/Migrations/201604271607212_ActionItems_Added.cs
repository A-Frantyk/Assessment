namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ActionItems_Added : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ActionItems",
                c => new
                    {
                        ResponsiblePersonId = c.Int(nullable: false),
                        CriteriaId = c.Int(nullable: false),
                        ActionItem = c.String(nullable: false),
                        DueDate = c.DateTime(nullable: false),
                        Order = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ResponsiblePersonId)
                .ForeignKey("dbo.Criteria", t => t.CriteriaId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.ResponsiblePersonId)
                .Index(t => t.ResponsiblePersonId)
                .Index(t => t.CriteriaId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ActionItems", "ResponsiblePersonId", "dbo.Users");
            DropForeignKey("dbo.ActionItems", "CriteriaId", "dbo.Criteria");
            DropIndex("dbo.ActionItems", new[] { "CriteriaId" });
            DropIndex("dbo.ActionItems", new[] { "ResponsiblePersonId" });
            DropTable("dbo.ActionItems");
        }
    }
}
