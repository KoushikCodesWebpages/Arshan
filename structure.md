koushik@koushik-ASUS-TUF-Gaming-A15-FA506QM-FA506QM:~/Projects/Internship/arshan-nextjs$ tree
.
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── aboutus1.svg
│   ├── file.svg
│   ├── finance1.svg
│   ├── finance2.svg
│   ├── finance3.svg
│   ├── finance4.svg
│   ├── financeworkflow1.svg
│   ├── financeworkflow2.svg
│   ├── financeworkflow3.svg
│   ├── globe.svg
│   ├── home1.svg
│   ├── home2.svg
│   ├── home3.svg
│   ├── hr1.svg
│   ├── hrarchitecture1.svg
│   ├── hrstructure1.svg
│   ├── marketing2.svg
│   ├── next.svg
│   ├── Professional workspace representing high-end social media management and brand consistency(2).svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── actions
│   ├── app
│   │   ├── about-us
│   │   │   └── page.tsx
│   │   ├── contact-us-working
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── finance
│   │   │   ├── page.tsx
│   │   │   └── process
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── hr
│   │   │   ├── architecture
│   │   │   │   └── page.tsx
│   │   │   ├── onboarding
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── marketing
│   │   │   ├── onboarding
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── workflow
│   │   │       └── page.tsx
│   │   ├── page.tsx
│   │   └── terms
│   │       └── page.tsx
│   ├── components
│   │   ├── about-us
│   │   │   ├── About-Integrity.tsx
│   │   │   ├── ExecutiveCouncil.tsx
│   │   │   ├── LegacyCTA.tsx
│   │   │   ├── MissionStatement.tsx
│   │   │   └── Philosophy.tsx
│   │   ├── animations
│   │   │   └── FadeIn.tsx
│   │   ├── contact-us
│   │   │   ├── ContactStrategySection.tsx
│   │   │   └── LeadershipConnect.tsx
│   │   ├── finance
│   │   │   ├── process
│   │   │   │   ├── FinalFiscalCTA.tsx
│   │   │   │   ├── FinanceProcessSteps.tsx
│   │   │   │   ├── FiscalClarity.tsx
│   │   │   │   └── TransparencyBanner.tsx
│   │   │   └── services
│   │   │       ├── FinalCTA.tsx
│   │   │       ├── FinanceIntro.tsx
│   │   │       ├── FunctionalDisciplines.tsx
│   │   │       ├── NoticeBanner.tsx
│   │   │       └── ProtocolStabilty.tsx
│   │   ├── forms
│   │   ├── home
│   │   │   ├── CoreServicePillar.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ExpertiseFAQ.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MarketImpact.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   ├── hr
│   │   │   ├── architecture
│   │   │   │   ├── ArchitectCTA.tsx
│   │   │   │   ├── GermanOperationalExellence.tsx
│   │   │   │   ├── GlobalHero.tsx
│   │   │   │   ├── IndiaStrategicCluster.tsx
│   │   │   │   └── WhyArshanHR.tsx
│   │   │   ├── onboarding
│   │   │   │   ├── CompanyInfoForm.tsx
│   │   │   │   ├── FormSection.tsx
│   │   │   │   ├── GoalSelector.tsx
│   │   │   │   ├── HROnboardingHeader.tsx
│   │   │   │   ├── HRPlanSelectionModal.tsx
│   │   │   │   ├── HRPlanSummary.tsx
│   │   │   │   ├── InputField.tsx
│   │   │   │   ├── OnboardingFooter.tsx
│   │   │   │   ├── PrimaryContactForm.tsx
│   │   │   │   └── ServiceRequirementsForm.tsx
│   │   │   ├── services
│   │   │   │   ├── HrContactCTA.tsx
│   │   │   │   ├── HrHero.tsx
│   │   │   │   ├── IndiaTalentNexus.tsx
│   │   │   │   ├── ManagementEcosystem.tsx
│   │   │   │   └── PayRollSystem.tsx
│   │   │   └── structure
│   │   │       ├── ClusterDetails.tsx
│   │   │       ├── GermanOperations.tsx
│   │   │       ├── GermanyCTA.tsx
│   │   │       ├── GermanyValueBlocks.tsx
│   │   │       ├── PricingGrid.tsx
│   │   │       ├── StrategicNotes.tsx
│   │   │       └── StructuralHero.tsx
│   │   ├── layout
│   │   │   ├── BackButton.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── marketing
│   │   │   ├── onboarding
│   │   │   │   ├── BrandIdentityForm.tsx
│   │   │   │   ├── FormSection.tsx
│   │   │   │   ├── GoalSelector.tsx
│   │   │   │   ├── InputField.tsx
│   │   │   │   ├── OnboardingFooter.tsx
│   │   │   │   ├── OnboardingHeader.tsx
│   │   │   │   ├── PlanSelectionModal.tsx
│   │   │   │   ├── PlanSummary.tsx
│   │   │   │   ├── PrimaryContactForm.tsx
│   │   │   │   ├── SocialConnectivity.tsx
│   │   │   │   └── VoiceGoalsForm.tsx
│   │   │   ├── services
│   │   │   │   ├── ManagementEngine.tsx
│   │   │   │   ├── MarketingCoreExpertise.tsx
│   │   │   │   ├── MarketingFinalCTA.tsx
│   │   │   │   ├── MarketingIntro.tsx
│   │   │   │   └── PricingSection.tsx
│   │   │   └── workflow
│   │   │       ├── ContentArchitecture.tsx
│   │   │       ├── CreativityGeneration.tsx
│   │   │       ├── OptimizationGrid.tsx
│   │   │       ├── StrageticOnBoarding.tsx
│   │   │       ├── WorkflowCTA.tsx
│   │   │       └── WorkflowHero.tsx
│   │   ├── terms
│   │   │   ├── LegalHeaders.tsx
│   │   │   ├── LegalInquiriesCTA.tsx
│   │   │   ├── LegalLayout.tsx
│   │   │   ├── LegalSidebar.tsx
│   │   │   ├── PrivacyContent.tsx
│   │   │   └── TermsContent.tsx
│   │   ├── ui
│   │   └── utils
│   │       ├── AnimationProvider.tsx
│   │       └── ScrollReset.tsx
│   ├── hooks
│   ├── lib
│   │   └── theme.ts
│   ├── services
│   └── types
├── structure.md
├── tailwind.config.ts
└── tsconfig.json

42 directories, 132 files