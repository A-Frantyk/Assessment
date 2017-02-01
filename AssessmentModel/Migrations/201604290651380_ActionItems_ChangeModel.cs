namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ActionItems_ChangeModel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ActionItems", "ResponsiblePersonId", "dbo.Users");
            DropPrimaryKey("dbo.ActionItems");
            AddColumn("dbo.ActionItems", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.ActionItems", "Id");
            AddForeignKey("dbo.ActionItems", "ResponsiblePersonId", "dbo.Users", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ActionItems", "ResponsiblePersonId", "dbo.Users");
            DropPrimaryKey("dbo.ActionItems");
            DropColumn("dbo.ActionItems", "Id");
            AddPrimaryKey("dbo.ActionItems", "ResponsiblePersonId");
            AddForeignKey("dbo.ActionItems", "ResponsiblePersonId", "dbo.Users", "Id");
        }
    }
}
