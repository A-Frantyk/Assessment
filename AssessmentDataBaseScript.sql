USE [Lv-175-AssessmentDB]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ActionItems]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionItems](
	[ResponsiblePersonId] [int] NOT NULL,
	[CriteriaId] [int] NOT NULL,
	[ActionItem] [nvarchar](max) NOT NULL,
	[DueDate] [datetime] NOT NULL,
	[Order] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_dbo.ActionItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Areas]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Areas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[AssesmentId] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Order] [int] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_Areas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AreaSamples]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AreaSamples](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[AssesmentTypeId] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Order] [int] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_AreaSamples] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Assessments]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Assessments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AssessmentTypeId] [int] NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[URL] [nvarchar](1024) NULL,
	[Version] [nchar](10) NULL,
	[StartDate] [datetime] NULL,
	[FinishDate] [datetime] NULL,
	[Project] [nvarchar](128) NULL,
	[ProjectId] [int] NULL,
	[Unit] [nvarchar](32) NULL,
	[UnitId] [int] NULL,
	[ProjectManagerId] [int] NULL,
	[TechLeadId] [int] NULL,
	[CoordinatorId] [int] NULL,
	[ScopeProjectConstraintId] [int] NOT NULL,
	[TimeProjectConstraintId] [int] NOT NULL,
	[QualityProjectConstraintId] [int] NOT NULL,
	[CostProjectConstraintId] [int] NOT NULL,
	[Comment] [nvarchar](max) NULL,
	[RecommendationsNum] [int] NULL,
	[Improvements] [int] NULL,
	[CoordinatorTime] [decimal](4, 1) NULL,
	[ExpertTime] [decimal](4, 1) NULL,
	[ServiceQualityScore] [decimal](5, 2) NULL,
	[QCLeadId] [int] NULL,
	[BusinessAnalystId] [int] NULL,
	[QCComment] [nvarchar](max) NULL,
	[MainExpertId] [int] NULL,
 CONSTRAINT [PK_Assessments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AssessmentTypes]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssessmentTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[URL] [nvarchar](max) NULL,
	[IsActive] [bit] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_AssessmentTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AssessmentUsers]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssessmentUsers](
	[Assessment_Id] [int] NOT NULL,
	[User_Id] [int] NOT NULL,
 CONSTRAINT [PK_dbo.AssessmentUsers] PRIMARY KEY CLUSTERED 
(
	[Assessment_Id] ASC,
	[User_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Attachments]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attachments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[UniqueName] [nvarchar](max) NOT NULL,
	[Comment] [nvarchar](500) NULL,
	[Size] [float] NOT NULL,
	[AssessmentId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.Attachments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ConstraintImpact]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConstraintImpact](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](16) NOT NULL,
	[Weight] [int] NOT NULL,
 CONSTRAINT [PK_ConstraintImpact] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Criteria]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Criteria](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[AreaId] [int] NOT NULL,
	[ScopeConstraintImpactId] [int] NOT NULL,
	[TimeConstraintImpactId] [int] NOT NULL,
	[QualityConstraintImpactId] [int] NOT NULL,
	[CostConstraintImpactId] [int] NOT NULL,
	[CriteriaScoreId] [int] NULL,
	[Order] [int] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_Criterias] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CriteriaSamples]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CriteriaSamples](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
	[AreaId] [int] NOT NULL,
	[ScopeConstraintImpactId] [int] NOT NULL,
	[TimeConstraintImpactId] [int] NOT NULL,
	[QualityConstraintImpactId] [int] NOT NULL,
	[CostConstraintImpactId] [int] NOT NULL,
	[Order] [int] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_CriteriaSamples] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CriteriaScores]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CriteriaScores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](32) NOT NULL,
	[Weight] [int] NOT NULL,
 CONSTRAINT [PK_CriteriaScores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Indicators]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Indicators](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CriteriaId] [int] NOT NULL,
	[ScoreId] [int] NULL,
	[Comment] [nvarchar](max) NULL,
	[Order] [int] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_Indicators] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[IndicatorSamples]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndicatorSamples](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CriteriaSampleId] [int] NOT NULL,
	[Order] [int] NOT NULL CONSTRAINT [DF_IndicatorSamples_Order]  DEFAULT (@@timeticks),
 CONSTRAINT [PK_IndicatorSamples] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[IndicatorScores]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IndicatorScores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](32) NOT NULL,
	[Weight] [int] NOT NULL,
 CONSTRAINT [PK_IndicatorScores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProjectConstraints]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectConstraints](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](16) NOT NULL,
	[Weight] [int] NOT NULL,
 CONSTRAINT [PK_ProjectConstraints] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Recommendations]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recommendations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Benefits] [nvarchar](max) NULL,
	[Text] [nvarchar](max) NULL,
	[CriterionId] [int] NOT NULL,
	[Order] [int] NOT NULL DEFAULT ((0)),
 CONSTRAINT [PK_dbo.Recommendations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 20.05.2016 01:21:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[Login] [nvarchar](128) NOT NULL,
	[IsCoordinator] [bit] NOT NULL,
	[IsCompetenceManager] [bit] NOT NULL,
	[SSE_Id] [int] NULL,
 CONSTRAINT [PK_dbo.Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[ActionItems]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ActionItems_dbo.Criteria_CriteriaId] FOREIGN KEY([CriteriaId])
REFERENCES [dbo].[Criteria] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ActionItems] CHECK CONSTRAINT [FK_dbo.ActionItems_dbo.Criteria_CriteriaId]
GO
ALTER TABLE [dbo].[ActionItems]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ActionItems_dbo.Users_ResponsiblePersonId] FOREIGN KEY([ResponsiblePersonId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ActionItems] CHECK CONSTRAINT [FK_dbo.ActionItems_dbo.Users_ResponsiblePersonId]
GO
ALTER TABLE [dbo].[Areas]  WITH NOCHECK ADD  CONSTRAINT [FK_Areas_Assessments] FOREIGN KEY([AssesmentId])
REFERENCES [dbo].[Assessments] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Areas] CHECK CONSTRAINT [FK_Areas_Assessments]
GO
ALTER TABLE [dbo].[AreaSamples]  WITH CHECK ADD  CONSTRAINT [FK_AreaSamples_AssessmentTypes] FOREIGN KEY([AssesmentTypeId])
REFERENCES [dbo].[AssessmentTypes] ([Id])
GO
ALTER TABLE [dbo].[AreaSamples] CHECK CONSTRAINT [FK_AreaSamples_AssessmentTypes]
GO
ALTER TABLE [dbo].[AreaSamples]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AreaSamples_dbo.AssessmentTypes_AssesmentTypeId] FOREIGN KEY([AssesmentTypeId])
REFERENCES [dbo].[AssessmentTypes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AreaSamples] CHECK CONSTRAINT [FK_dbo.AreaSamples_dbo.AssessmentTypes_AssesmentTypeId]
GO
ALTER TABLE [dbo].[Assessments]  WITH NOCHECK ADD  CONSTRAINT [FK_Assessments_AssessmentTypes] FOREIGN KEY([AssessmentTypeId])
REFERENCES [dbo].[AssessmentTypes] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_Assessments_AssessmentTypes]
GO
ALTER TABLE [dbo].[Assessments]  WITH NOCHECK ADD  CONSTRAINT [FK_Assessments_ProjectConstraints_Cost] FOREIGN KEY([CostProjectConstraintId])
REFERENCES [dbo].[ProjectConstraints] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_Assessments_ProjectConstraints_Cost]
GO
ALTER TABLE [dbo].[Assessments]  WITH NOCHECK ADD  CONSTRAINT [FK_Assessments_ProjectConstraints_Quality] FOREIGN KEY([QualityProjectConstraintId])
REFERENCES [dbo].[ProjectConstraints] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_Assessments_ProjectConstraints_Quality]
GO
ALTER TABLE [dbo].[Assessments]  WITH NOCHECK ADD  CONSTRAINT [FK_Assessments_ProjectConstraints_Scope] FOREIGN KEY([ScopeProjectConstraintId])
REFERENCES [dbo].[ProjectConstraints] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_Assessments_ProjectConstraints_Scope]
GO
ALTER TABLE [dbo].[Assessments]  WITH NOCHECK ADD  CONSTRAINT [FK_Assessments_ProjectConstraints_Time] FOREIGN KEY([TimeProjectConstraintId])
REFERENCES [dbo].[ProjectConstraints] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_Assessments_ProjectConstraints_Time]
GO
ALTER TABLE [dbo].[Assessments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Assessments_dbo.Users_BusinessAnalystId] FOREIGN KEY([BusinessAnalystId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_dbo.Assessments_dbo.Users_BusinessAnalystId]
GO
ALTER TABLE [dbo].[Assessments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Assessments_dbo.Users_CoordinatorId] FOREIGN KEY([CoordinatorId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_dbo.Assessments_dbo.Users_CoordinatorId]
GO
ALTER TABLE [dbo].[Assessments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Assessments_dbo.Users_MainExpertId] FOREIGN KEY([MainExpertId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_dbo.Assessments_dbo.Users_MainExpertId]
GO
ALTER TABLE [dbo].[Assessments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Assessments_dbo.Users_ProjectManagerId] FOREIGN KEY([ProjectManagerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_dbo.Assessments_dbo.Users_ProjectManagerId]
GO
ALTER TABLE [dbo].[Assessments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Assessments_dbo.Users_QCLeadId] FOREIGN KEY([QCLeadId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_dbo.Assessments_dbo.Users_QCLeadId]
GO
ALTER TABLE [dbo].[Assessments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Assessments_dbo.Users_TechLeadId] FOREIGN KEY([TechLeadId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Assessments] CHECK CONSTRAINT [FK_dbo.Assessments_dbo.Users_TechLeadId]
GO
ALTER TABLE [dbo].[AssessmentUsers]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AssessmentUsers_dbo.Assessments_Assessment_Id] FOREIGN KEY([Assessment_Id])
REFERENCES [dbo].[Assessments] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AssessmentUsers] CHECK CONSTRAINT [FK_dbo.AssessmentUsers_dbo.Assessments_Assessment_Id]
GO
ALTER TABLE [dbo].[AssessmentUsers]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AssessmentUsers_dbo.Users_User_Id] FOREIGN KEY([User_Id])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AssessmentUsers] CHECK CONSTRAINT [FK_dbo.AssessmentUsers_dbo.Users_User_Id]
GO
ALTER TABLE [dbo].[Attachments]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Attachments_dbo.Assessments_AssessmentId] FOREIGN KEY([AssessmentId])
REFERENCES [dbo].[Assessments] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Attachments] CHECK CONSTRAINT [FK_dbo.Attachments_dbo.Assessments_AssessmentId]
GO
ALTER TABLE [dbo].[Criteria]  WITH NOCHECK ADD  CONSTRAINT [FK_Criteria_ConstraintImpact_Cost] FOREIGN KEY([CostConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[Criteria] CHECK CONSTRAINT [FK_Criteria_ConstraintImpact_Cost]
GO
ALTER TABLE [dbo].[Criteria]  WITH NOCHECK ADD  CONSTRAINT [FK_Criteria_ConstraintImpact_Quality] FOREIGN KEY([QualityConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[Criteria] CHECK CONSTRAINT [FK_Criteria_ConstraintImpact_Quality]
GO
ALTER TABLE [dbo].[Criteria]  WITH NOCHECK ADD  CONSTRAINT [FK_Criteria_ConstraintImpact_Scope] FOREIGN KEY([ScopeConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[Criteria] CHECK CONSTRAINT [FK_Criteria_ConstraintImpact_Scope]
GO
ALTER TABLE [dbo].[Criteria]  WITH NOCHECK ADD  CONSTRAINT [FK_Criteria_ConstraintImpact_Time] FOREIGN KEY([TimeConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[Criteria] CHECK CONSTRAINT [FK_Criteria_ConstraintImpact_Time]
GO
ALTER TABLE [dbo].[Criteria]  WITH NOCHECK ADD  CONSTRAINT [FK_Criterias_Areas] FOREIGN KEY([AreaId])
REFERENCES [dbo].[Areas] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Criteria] CHECK CONSTRAINT [FK_Criterias_Areas]
GO
ALTER TABLE [dbo].[Criteria]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Criteria_dbo.CriteriaScores_CriteriaScoreId] FOREIGN KEY([CriteriaScoreId])
REFERENCES [dbo].[CriteriaScores] ([Id])
GO
ALTER TABLE [dbo].[Criteria] CHECK CONSTRAINT [FK_dbo.Criteria_dbo.CriteriaScores_CriteriaScoreId]
GO
ALTER TABLE [dbo].[CriteriaSamples]  WITH CHECK ADD  CONSTRAINT [FK_CriteriaSamples_AreaSamples] FOREIGN KEY([AreaId])
REFERENCES [dbo].[AreaSamples] ([Id])
GO
ALTER TABLE [dbo].[CriteriaSamples] CHECK CONSTRAINT [FK_CriteriaSamples_AreaSamples]
GO
ALTER TABLE [dbo].[CriteriaSamples]  WITH CHECK ADD  CONSTRAINT [FK_CriteriaSamples_ConstraintImpactCost] FOREIGN KEY([CostConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[CriteriaSamples] CHECK CONSTRAINT [FK_CriteriaSamples_ConstraintImpactCost]
GO
ALTER TABLE [dbo].[CriteriaSamples]  WITH CHECK ADD  CONSTRAINT [FK_CriteriaSamples_ConstraintImpactQuality] FOREIGN KEY([QualityConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[CriteriaSamples] CHECK CONSTRAINT [FK_CriteriaSamples_ConstraintImpactQuality]
GO
ALTER TABLE [dbo].[CriteriaSamples]  WITH CHECK ADD  CONSTRAINT [FK_CriteriaSamples_ConstraintImpactScope] FOREIGN KEY([ScopeConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[CriteriaSamples] CHECK CONSTRAINT [FK_CriteriaSamples_ConstraintImpactScope]
GO
ALTER TABLE [dbo].[CriteriaSamples]  WITH CHECK ADD  CONSTRAINT [FK_CriteriaSamples_ConstraintImpactTime] FOREIGN KEY([TimeConstraintImpactId])
REFERENCES [dbo].[ConstraintImpact] ([Id])
GO
ALTER TABLE [dbo].[CriteriaSamples] CHECK CONSTRAINT [FK_CriteriaSamples_ConstraintImpactTime]
GO
ALTER TABLE [dbo].[CriteriaSamples]  WITH CHECK ADD  CONSTRAINT [FK_dbo.CriteriaSamples_dbo.AreaSamples_AreaId] FOREIGN KEY([AreaId])
REFERENCES [dbo].[AreaSamples] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CriteriaSamples] CHECK CONSTRAINT [FK_dbo.CriteriaSamples_dbo.AreaSamples_AreaId]
GO
ALTER TABLE [dbo].[Indicators]  WITH NOCHECK ADD  CONSTRAINT [FK_Indicators_Criteria] FOREIGN KEY([CriteriaId])
REFERENCES [dbo].[Criteria] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Indicators] CHECK CONSTRAINT [FK_Indicators_Criteria]
GO
ALTER TABLE [dbo].[Indicators]  WITH NOCHECK ADD  CONSTRAINT [FK_Indicators_IndicatorScores] FOREIGN KEY([ScoreId])
REFERENCES [dbo].[IndicatorScores] ([Id])
GO
ALTER TABLE [dbo].[Indicators] CHECK CONSTRAINT [FK_Indicators_IndicatorScores]
GO
ALTER TABLE [dbo].[IndicatorSamples]  WITH CHECK ADD  CONSTRAINT [FK_dbo.IndicatorSamples_dbo.CriteriaSamples_CriteriaSampleId] FOREIGN KEY([CriteriaSampleId])
REFERENCES [dbo].[CriteriaSamples] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[IndicatorSamples] CHECK CONSTRAINT [FK_dbo.IndicatorSamples_dbo.CriteriaSamples_CriteriaSampleId]
GO
ALTER TABLE [dbo].[IndicatorSamples]  WITH CHECK ADD  CONSTRAINT [FK_IndicatorSamples_CriteriaSamples] FOREIGN KEY([CriteriaSampleId])
REFERENCES [dbo].[CriteriaSamples] ([Id])
GO
ALTER TABLE [dbo].[IndicatorSamples] CHECK CONSTRAINT [FK_IndicatorSamples_CriteriaSamples]
GO
ALTER TABLE [dbo].[Recommendations]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Recommendations_dbo.Criteria_CriterionId] FOREIGN KEY([CriterionId])
REFERENCES [dbo].[Criteria] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Recommendations] CHECK CONSTRAINT [FK_dbo.Recommendations_dbo.Criteria_CriterionId]
GO
