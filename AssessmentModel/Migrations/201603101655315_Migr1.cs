namespace AssessmentModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migr1 : DbMigration
    {
        public override void Up()
        {
            //CreateTable(
            //    "dbo.Areas",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 256),
            //            AssesmentId = c.Int(nullable: false),
            //            Description = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.Assessments", t => t.AssesmentId, cascadeDelete: true)
            //    .Index(t => t.AssesmentId);
            
            //CreateTable(
            //    "dbo.Assessments",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            AssessmentTypeId = c.Int(nullable: false),
            //            Name = c.String(nullable: false, maxLength: 256),
            //            Description = c.String(),
            //            URL = c.String(maxLength: 1024),
            //            Version = c.String(maxLength: 10, fixedLength: true),
            //            StartDate = c.DateTime(),
            //            FinishDate = c.DateTime(),
            //            Project = c.String(maxLength: 128),
            //            ProjectId = c.Int(),
            //            Unit = c.String(maxLength: 32),
            //            UnitId = c.Int(),
            //            ProjectManager = c.String(maxLength: 32),
            //            ProjectManagerId = c.Int(),
            //            TechLead = c.String(maxLength: 32),
            //            TechLeadId = c.Int(),
            //            Coordinator = c.String(maxLength: 32),
            //            CoordinatorId = c.Int(),
            //            Experts = c.String(maxLength: 128),
            //            ScopeProjectConstraintId = c.Int(nullable: false),
            //            TimeProjectConstraintId = c.Int(nullable: false),
            //            QualityProjectConstraintId = c.Int(nullable: false),
            //            CostProjectConstraintId = c.Int(nullable: false),
            //            Comment = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.AssessmentTypes", t => t.AssessmentTypeId)
            //    .ForeignKey("dbo.ProjectConstraints", t => t.CostProjectConstraintId)
            //    .ForeignKey("dbo.ProjectConstraints", t => t.QualityProjectConstraintId)
            //    .ForeignKey("dbo.ProjectConstraints", t => t.ScopeProjectConstraintId)
            //    .ForeignKey("dbo.ProjectConstraints", t => t.TimeProjectConstraintId)
            //    .Index(t => t.AssessmentTypeId)
            //    .Index(t => t.ScopeProjectConstraintId)
            //    .Index(t => t.TimeProjectConstraintId)
            //    .Index(t => t.QualityProjectConstraintId)
            //    .Index(t => t.CostProjectConstraintId);
            
            //CreateTable(
            //    "dbo.AssessmentTypes",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 256),
            //            Description = c.String(),
            //            URL = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.AreaSamples",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 256),
            //            AssesmentTypeId = c.Int(nullable: false),
            //            Description = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.AssessmentTypes", t => t.AssesmentTypeId)
            //    .Index(t => t.AssesmentTypeId);
            
            //CreateTable(
            //    "dbo.CriteriaSamples",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 256),
            //            AreaId = c.Int(nullable: false),
            //            ScopeConstraintImpactId = c.Int(nullable: false),
            //            TimeConstraintImpactId = c.Int(nullable: false),
            //            QualityConstraintImpactId = c.Int(nullable: false),
            //            CostConstraintImpactId = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.CostConstraintImpactId)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.QualityConstraintImpactId)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.ScopeConstraintImpactId)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.TimeConstraintImpactId)
            //    .ForeignKey("dbo.AreaSamples", t => t.AreaId)
            //    .Index(t => t.AreaId)
            //    .Index(t => t.ScopeConstraintImpactId)
            //    .Index(t => t.TimeConstraintImpactId)
            //    .Index(t => t.QualityConstraintImpactId)
            //    .Index(t => t.CostConstraintImpactId);
            
            //CreateTable(
            //    "dbo.ConstraintImpact",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 16),
            //            Weight = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.Criteria",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 256),
            //            AreaId = c.Int(nullable: false),
            //            ScopeConstraintImpactId = c.Int(nullable: false),
            //            TimeConstraintImpactId = c.Int(nullable: false),
            //            QualityConstraintImpactId = c.Int(nullable: false),
            //            CostConstraintImpactId = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.Areas", t => t.AreaId, cascadeDelete: true)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.CostConstraintImpactId)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.QualityConstraintImpactId)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.ScopeConstraintImpactId)
            //    .ForeignKey("dbo.ConstraintImpact", t => t.TimeConstraintImpactId)
            //    .Index(t => t.AreaId)
            //    .Index(t => t.ScopeConstraintImpactId)
            //    .Index(t => t.TimeConstraintImpactId)
            //    .Index(t => t.QualityConstraintImpactId)
            //    .Index(t => t.CostConstraintImpactId);
            
            //CreateTable(
            //    "dbo.Indicators",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false),
            //            CriteriaId = c.Int(nullable: false),
            //            ScoreId = c.Int(),
            //            Comment = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.IndicatorScores", t => t.ScoreId)
            //    .ForeignKey("dbo.Criteria", t => t.CriteriaId, cascadeDelete: true)
            //    .Index(t => t.CriteriaId)
            //    .Index(t => t.ScoreId);
            
            //CreateTable(
            //    "dbo.IndicatorScores",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 32),
            //            Weight = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.IndicatorSamples",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false),
            //            CriteriaSampleId = c.Int(nullable: false),
            //            Order = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("dbo.CriteriaSamples", t => t.CriteriaSampleId)
            //    .Index(t => t.CriteriaSampleId);
            
            //CreateTable(
            //    "dbo.ProjectConstraints",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 16),
            //            Weight = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Login = c.String(nullable: false, maxLength: 16),
                        IsCoordinator = c.Boolean(nullable: false),
                        IsCompetenceManager = c.Boolean(nullable: false),
                        SSE_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.CriteriaScores",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(nullable: false, maxLength: 32),
            //            Weight = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.sysdiagrams",
            //    c => new
            //        {
            //            diagram_id = c.Int(nullable: false, identity: true),
            //            name = c.String(nullable: false, maxLength: 128),
            //            principal_id = c.Int(nullable: false),
            //            version = c.Int(),
            //            definition = c.Binary(),
            //        })
            //    .PrimaryKey(t => t.diagram_id);
            
            CreateTable(
                "dbo.AssessmentUsers",
                c => new
                    {
                        Assessment_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Assessment_Id, t.User_Id })
                .ForeignKey("dbo.Assessments", t => t.Assessment_Id, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.Assessment_Id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AssessmentUsers", "User_Id", "dbo.Users");
            DropForeignKey("dbo.AssessmentUsers", "Assessment_Id", "dbo.Assessments");
            DropForeignKey("dbo.Assessments", "TimeProjectConstraintId", "dbo.ProjectConstraints");
            DropForeignKey("dbo.Assessments", "ScopeProjectConstraintId", "dbo.ProjectConstraints");
            DropForeignKey("dbo.Assessments", "QualityProjectConstraintId", "dbo.ProjectConstraints");
            DropForeignKey("dbo.Assessments", "CostProjectConstraintId", "dbo.ProjectConstraints");
            DropForeignKey("dbo.Assessments", "AssessmentTypeId", "dbo.AssessmentTypes");
            DropForeignKey("dbo.AreaSamples", "AssesmentTypeId", "dbo.AssessmentTypes");
            DropForeignKey("dbo.CriteriaSamples", "AreaId", "dbo.AreaSamples");
            DropForeignKey("dbo.IndicatorSamples", "CriteriaSampleId", "dbo.CriteriaSamples");
            DropForeignKey("dbo.CriteriaSamples", "TimeConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.CriteriaSamples", "ScopeConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.CriteriaSamples", "QualityConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.CriteriaSamples", "CostConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.Criteria", "TimeConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.Criteria", "ScopeConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.Criteria", "QualityConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.Criteria", "CostConstraintImpactId", "dbo.ConstraintImpact");
            DropForeignKey("dbo.Indicators", "CriteriaId", "dbo.Criteria");
            DropForeignKey("dbo.Indicators", "ScoreId", "dbo.IndicatorScores");
            DropForeignKey("dbo.Criteria", "AreaId", "dbo.Areas");
            DropForeignKey("dbo.Areas", "AssesmentId", "dbo.Assessments");
            DropIndex("dbo.AssessmentUsers", new[] { "User_Id" });
            DropIndex("dbo.AssessmentUsers", new[] { "Assessment_Id" });
            DropIndex("dbo.IndicatorSamples", new[] { "CriteriaSampleId" });
            DropIndex("dbo.Indicators", new[] { "ScoreId" });
            DropIndex("dbo.Indicators", new[] { "CriteriaId" });
            DropIndex("dbo.Criteria", new[] { "CostConstraintImpactId" });
            DropIndex("dbo.Criteria", new[] { "QualityConstraintImpactId" });
            DropIndex("dbo.Criteria", new[] { "TimeConstraintImpactId" });
            DropIndex("dbo.Criteria", new[] { "ScopeConstraintImpactId" });
            DropIndex("dbo.Criteria", new[] { "AreaId" });
            DropIndex("dbo.CriteriaSamples", new[] { "CostConstraintImpactId" });
            DropIndex("dbo.CriteriaSamples", new[] { "QualityConstraintImpactId" });
            DropIndex("dbo.CriteriaSamples", new[] { "TimeConstraintImpactId" });
            DropIndex("dbo.CriteriaSamples", new[] { "ScopeConstraintImpactId" });
            DropIndex("dbo.CriteriaSamples", new[] { "AreaId" });
            DropIndex("dbo.AreaSamples", new[] { "AssesmentTypeId" });
            DropIndex("dbo.Assessments", new[] { "CostProjectConstraintId" });
            DropIndex("dbo.Assessments", new[] { "QualityProjectConstraintId" });
            DropIndex("dbo.Assessments", new[] { "TimeProjectConstraintId" });
            DropIndex("dbo.Assessments", new[] { "ScopeProjectConstraintId" });
            DropIndex("dbo.Assessments", new[] { "AssessmentTypeId" });
            DropIndex("dbo.Areas", new[] { "AssesmentId" });
            DropTable("dbo.AssessmentUsers");
            DropTable("dbo.sysdiagrams");
            DropTable("dbo.CriteriaScores");
            DropTable("dbo.Users");
            DropTable("dbo.ProjectConstraints");
            DropTable("dbo.IndicatorSamples");
            DropTable("dbo.IndicatorScores");
            DropTable("dbo.Indicators");
            DropTable("dbo.Criteria");
            DropTable("dbo.ConstraintImpact");
            DropTable("dbo.CriteriaSamples");
            DropTable("dbo.AreaSamples");
            DropTable("dbo.AssessmentTypes");
            DropTable("dbo.Assessments");
            DropTable("dbo.Areas");
        }
    }
}
