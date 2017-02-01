namespace AssessmentModel
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class AssessmentModelContext : DbContext
    {
        public AssessmentModelContext()
            : base("name=AssessmentModelContext")
        {
            Database.SetInitializer<AssessmentModelContext>(null);
        }

        public virtual DbSet<ActionItems> ActionItems { get; set; }
        public virtual DbSet<Area> Areas { get; set; }
        public virtual DbSet<AreaSample> AreaSamples { get; set; }
        public virtual DbSet<Assessment> Assessments { get; set; }
        public virtual DbSet<AssessmentType> AssessmentTypes { get; set; }
        public virtual DbSet<ConstraintImpact> ConstraintImpacts { get; set; }
        public virtual DbSet<Criterion> Criteria { get; set; }
        public virtual DbSet<CriteriaSample> CriteriaSamples { get; set; }
        public virtual DbSet<CriteriaScore> CriteriaScores { get; set; }
        public virtual DbSet<Indicator> Indicators { get; set; }
        public virtual DbSet<IndicatorSample> IndicatorSamples { get; set; }
        public virtual DbSet<IndicatorScore> IndicatorScores { get; set; }
        public virtual DbSet<ProjectConstraint> ProjectConstraints { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<User> User { get; set; } // Addedd
        public virtual DbSet<Recommendation> Recommendations { get; set; } // Added
        public virtual DbSet<Attachment> Attachments { get; set; } // Added

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AreaSample>()
                .HasMany(e => e.CriteriaSamples)
                .WithRequired(e => e.AreaSample)
                .HasForeignKey(e => e.AreaId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Assessment>()
                .Property(e => e.Version)
                .IsFixedLength();

            modelBuilder.Entity<Assessment>()
                .HasMany(e => e.Areas)
                .WithRequired(e => e.Assessment)
                .HasForeignKey(e => e.AssesmentId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Assessment>()       //Added
               .HasMany<User>(p => p.Experts)
               .WithMany(p => p.Assessments_Expert);

            modelBuilder.Entity<Assessment>()       //Added
                .HasOptional<User>(e => e.Coordinator)
                .WithMany(e => e.Assessments_Coordinator)
                .HasForeignKey(e => e.CoordinatorId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Assessment>()       //Added
                .HasOptional<User>(e => e.ProjectManager)
                .WithMany(e => e.Assessments_ProjectManager)
                .HasForeignKey(e => e.ProjectManagerId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Assessment>()       //Added
                .HasOptional<User>(e => e.TechLead)
                .WithMany(e => e.Assessments_TechLead)
                .HasForeignKey(e => e.TechLeadId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Assessment>()       //Added
                .HasOptional<User>(e => e.QCLead)
                .WithMany(e => e.Assessments_QCLead)
                .HasForeignKey(e => e.QCLeadId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Assessment>()       //Added
                .HasOptional<User>(e => e.BusinessAnalyst)
                .WithMany(e => e.Assessments_BusinessAnalyst)
                .HasForeignKey(e => e.BusinessAnalystId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Assessment>()       //Added
                .HasOptional<User>(e => e.MainExpert)
                .WithMany(e => e.Assessments_MainExpert)
                .HasForeignKey(e => e.MainExpertId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Assessment>()      //Added
                .HasMany<Attachment>(e => e.Attachments)
                .WithRequired(e => e.Assessment)
                .HasForeignKey(e => e.AssessmentId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<AssessmentType>()
                .HasMany(e => e.AreaSamples)
                .WithRequired(e => e.AssessmentType)
                .HasForeignKey(e => e.AssesmentTypeId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<AssessmentType>()
                .HasMany(e => e.Assessments)
                .WithRequired(e => e.AssessmentType)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.Criteria)
                .WithRequired(e => e.ConstraintImpact)
                .HasForeignKey(e => e.CostConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.Criteria1)
                .WithRequired(e => e.ConstraintImpact1)
                .HasForeignKey(e => e.QualityConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.Criteria2)
                .WithRequired(e => e.ConstraintImpact2)
                .HasForeignKey(e => e.ScopeConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.Criteria3)
                .WithRequired(e => e.ConstraintImpact3)
                .HasForeignKey(e => e.TimeConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.CriteriaSamples)
                .WithRequired(e => e.ConstraintImpact)
                .HasForeignKey(e => e.CostConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.CriteriaSamples1)
                .WithRequired(e => e.ConstraintImpact1)
                .HasForeignKey(e => e.QualityConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.CriteriaSamples2)
                .WithRequired(e => e.ConstraintImpact2)
                .HasForeignKey(e => e.ScopeConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ConstraintImpact>()
                .HasMany(e => e.CriteriaSamples3)
                .WithRequired(e => e.ConstraintImpact3)
                .HasForeignKey(e => e.TimeConstraintImpactId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Criterion>()
                .HasMany(e => e.Indicators)
                .WithRequired(e => e.Criterion)
                .HasForeignKey(e => e.CriteriaId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Criterion>()                        // Added
                .HasOptional<CriteriaScore>(e => e.CriteriaScore)
                .WithMany(e => e.Criteria)
                .HasForeignKey(e => e.CriteriaScoreId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Criterion>()                        // Added
                .HasMany<Recommendation>(e => e.Recommendations)
                .WithRequired(e => e.Criterion)
                .HasForeignKey(e => e.CriterionId)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<CriteriaSample>()
                .HasMany(e => e.IndicatorSamples)
                .WithRequired(e => e.CriteriaSample)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<IndicatorScore>()
                .HasMany(e => e.Indicators)
                .WithOptional(e => e.IndicatorScore)
                .HasForeignKey(e => e.ScoreId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ProjectConstraint>()
                .HasMany(e => e.Assessments)
                .WithRequired(e => e.ProjectConstraint)
                .HasForeignKey(e => e.CostProjectConstraintId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ProjectConstraint>()
                .HasMany(e => e.Assessments1)
                .WithRequired(e => e.ProjectConstraint1)
                .HasForeignKey(e => e.QualityProjectConstraintId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ProjectConstraint>()
                .HasMany(e => e.Assessments2)
                .WithRequired(e => e.ProjectConstraint2)
                .HasForeignKey(e => e.ScopeProjectConstraintId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ProjectConstraint>()
                .HasMany(e => e.Assessments3)
                .WithRequired(e => e.ProjectConstraint3)
                .HasForeignKey(e => e.TimeProjectConstraintId)
                .WillCascadeOnDelete(false);

           
        }
    }
}
