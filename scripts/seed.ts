import { PrismaClient } from "@prisma/client";
import { PLANS } from "../lib/stripe/plans";

const prisma = new PrismaClient();

// Sample analysis outputs
const sampleAnalyses = [
  {
    input: {
      idea: "A subscription box service for eco-friendly pet products",
      targetMarket: "Pet owners aged 25-45 interested in sustainability",
      budgetUsd: 50000,
      timelineMonths: 12,
    },
    output: {
      summary: "Eco-friendly pet subscription boxes target a growing market of environmentally conscious pet owners. The subscription model provides recurring revenue, but faces challenges in customer acquisition and supply chain sustainability.",
      marketSizeUsd: 4500000000,
      risks: [
        "High customer acquisition costs in competitive subscription market",
        "Supply chain complexity for sustainable product sourcing",
        "Retention challenges typical of subscription models",
        "Price sensitivity among target demographic",
      ],
      steps: [
        {
          title: "Market Research & Validation",
          description: "Conduct surveys with target customers to validate demand and pricing sensitivity. Analyze competitor offerings and identify unique value proposition.",
          durationWeeks: 4,
        },
        {
          title: "Supplier Partnerships",
          description: "Establish relationships with sustainable product manufacturers. Negotiate bulk pricing and ensure consistent product quality and availability.",
          durationWeeks: 6,
        },
        {
          title: "E-commerce Platform Development",
          description: "Build subscription management system with payment processing, customer portal, and inventory tracking. Integrate shipping and fulfillment partners.",
          durationWeeks: 8,
        },
        {
          title: "Marketing Launch",
          description: "Launch social media campaigns targeting eco-conscious pet owners. Partner with pet influencers and run targeted Facebook/Instagram ads.",
          durationWeeks: 4,
        },
      ],
      profitModel: {
        cacUsd: 45,
        ltvUsd: 280,
        grossMarginPct: 55,
        breakEvenMonths: 18,
        monthlyProjection: [
          { month: 1, revenueUsd: 5000, costUsd: 8000 },
          { month: 2, revenueUsd: 12000, costUsd: 15000 },
          { month: 3, revenueUsd: 20000, costUsd: 22000 },
          { month: 4, revenueUsd: 28000, costUsd: 28000 },
          { month: 5, revenueUsd: 35000, costUsd: 33000 },
          { month: 6, revenueUsd: 42000, costUsd: 38000 },
          { month: 7, revenueUsd: 48000, costUsd: 42000 },
          { month: 8, revenueUsd: 55000, costUsd: 46000 },
          { month: 9, revenueUsd: 60000, costUsd: 50000 },
          { month: 10, revenueUsd: 65000, costUsd: 53000 },
          { month: 11, revenueUsd: 70000, costUsd: 56000 },
          { month: 12, revenueUsd: 75000, costUsd: 58000 },
        ],
      },
      confidencePct: 72,
    },
  },
  {
    input: {
      idea: "AI-powered meal planning app with grocery delivery integration",
      targetMarket: "Busy professionals and families seeking healthy meal solutions",
      budgetUsd: 75000,
      timelineMonths: 9,
    },
    output: {
      summary: "AI meal planning apps address a real need for time-strapped consumers, but face intense competition from established players. Success depends on unique AI capabilities and seamless grocery integration.",
      marketSizeUsd: 12000000000,
      risks: [
        "Highly competitive market with established incumbents",
        "High customer acquisition costs",
        "Dependency on grocery delivery partnerships",
        "User retention challenges",
      ],
      steps: [
        {
          title: "AI Model Development",
          description: "Train machine learning models for personalized meal recommendations based on dietary preferences, budget, and nutritional goals.",
          durationWeeks: 12,
        },
        {
          title: "Grocery API Integration",
          description: "Partner with major grocery delivery services (Instacart, Amazon Fresh) to enable one-click ordering from meal plans.",
          durationWeeks: 6,
        },
        {
          title: "Mobile App Development",
          description: "Build iOS and Android apps with intuitive UI for browsing recipes, generating meal plans, and managing grocery lists.",
          durationWeeks: 10,
        },
        {
          title: "Beta Launch",
          description: "Launch beta with 500 users to gather feedback and refine AI recommendations. Iterate based on user behavior data.",
          durationWeeks: 8,
        },
      ],
      profitModel: {
        cacUsd: 35,
        ltvUsd: 180,
        grossMarginPct: 70,
        breakEvenMonths: 14,
        monthlyProjection: [
          { month: 1, revenueUsd: 8000, costUsd: 12000 },
          { month: 2, revenueUsd: 18000, costUsd: 20000 },
          { month: 3, revenueUsd: 30000, costUsd: 28000 },
          { month: 4, revenueUsd: 45000, costUsd: 40000 },
          { month: 5, revenueUsd: 60000, costUsd: 52000 },
          { month: 6, revenueUsd: 75000, costUsd: 64000 },
          { month: 7, revenueUsd: 90000, costUsd: 76000 },
          { month: 8, revenueUsd: 105000, costUsd: 88000 },
          { month: 9, revenueUsd: 120000, costUsd: 100000 },
        ],
      },
      confidencePct: 68,
    },
  },
  {
    input: {
      idea: "Local fitness studio booking platform for independent trainers",
      targetMarket: "Independent fitness trainers and their clients in urban areas",
      budgetUsd: 30000,
      timelineMonths: 6,
    },
    output: {
      summary: "Fitness studio booking platforms serve a fragmented market of independent trainers. Lower barriers to entry but requires local market penetration and trainer acquisition.",
      marketSizeUsd: 2800000000,
      risks: [
        "Chicken-and-egg problem: need both trainers and clients",
        "Local market saturation",
        "Low switching costs for trainers",
        "Seasonal demand fluctuations",
      ],
      steps: [
        {
          title: "Platform MVP Development",
          description: "Build core booking system with calendar management, payment processing, and client communication tools.",
          durationWeeks: 8,
        },
        {
          title: "Trainer Onboarding",
          description: "Recruit 20-30 local trainers through partnerships with gyms and fitness communities. Offer free trial period.",
          durationWeeks: 6,
        },
        {
          title: "Client Acquisition",
          description: "Launch marketing campaigns targeting fitness enthusiasts. Offer first-class discounts and referral incentives.",
          durationWeeks: 4,
        },
        {
          title: "Market Expansion",
          description: "Expand to 3-5 additional cities based on initial market success. Replicate onboarding process.",
          durationWeeks: 8,
        },
      ],
      profitModel: {
        cacUsd: 25,
        ltvUsd: 150,
        grossMarginPct: 15,
        breakEvenMonths: 12,
        monthlyProjection: [
          { month: 1, revenueUsd: 3000, costUsd: 5000 },
          { month: 2, revenueUsd: 7000, costUsd: 8000 },
          { month: 3, revenueUsd: 12000, costUsd: 12000 },
          { month: 4, revenueUsd: 18000, costUsd: 16000 },
          { month: 5, revenueUsd: 25000, costUsd: 20000 },
          { month: 6, revenueUsd: 32000, costUsd: 24000 },
        ],
      },
      confidencePct: 65,
    },
  },
];

// Sample document chunks for RAG demo
const sampleDocumentChunks = [
  {
    sourceUrl: "https://www.barkbox.com",
    sourceTitle: "BarkBox - Monthly Dog Subscription",
    category: "competitor",
    content: "BarkBox is a monthly subscription service that delivers curated toys, treats, and chews for dogs. Founded in 2011, BarkBox has grown to serve over 1 million subscribers. The company focuses on high-quality, engaging products that surprise and delight dogs each month. BarkBox offers multiple subscription tiers ranging from $23-35 per month, with options for different dog sizes and preferences. The company has expanded into retail partnerships and offers themed boxes for holidays and special occasions.",
    chunkIndex: 0,
    metadata: {
      relevanceScore: 0.95,
      reason: "Leading pet subscription box competitor",
      snippet: "Monthly subscription service for dogs",
    },
  },
  {
    sourceUrl: "https://www.grandviewresearch.com/industry-analysis/pet-care-market",
    sourceTitle: "Pet Care Market Size Report",
    category: "market_report",
    content: "The global pet care market was valued at $232.1 billion in 2022 and is expected to grow at a CAGR of 6.1% from 2023 to 2030. The subscription box segment has seen particularly strong growth, driven by convenience and personalization. Eco-friendly and sustainable pet products represent a growing trend, with consumers increasingly willing to pay premium prices for environmentally conscious options. The North American market accounts for approximately 40% of global pet care spending.",
    chunkIndex: 0,
    metadata: {
      relevanceScore: 0.88,
      reason: "Comprehensive market analysis and growth projections",
      snippet: "Global pet care market valued at $232.1 billion",
    },
  },
  {
    sourceUrl: "https://www.petfoodindustry.com/articles/12345-sustainable-pet-products",
    sourceTitle: "Sustainable Pet Products Trend",
    category: "industry_news",
    content: "Sustainability has become a key differentiator in the pet products market. A recent survey found that 68% of pet owners are willing to pay more for eco-friendly products. Key trends include biodegradable packaging, organic ingredients, and products made from recycled materials. Brands that emphasize sustainability see 23% higher customer retention rates compared to traditional competitors.",
    chunkIndex: 0,
    metadata: {
      relevanceScore: 0.82,
      reason: "Relevant trend data on sustainable pet products",
      snippet: "68% of pet owners willing to pay more for eco-friendly",
    },
  },
];

async function main() {
  console.log("🌱 Starting database seed...\n");

  // Create prompt version
  console.log("Creating prompt version...");
  let promptVersion = await prisma.promptVersion.findFirst({
    where: { name: "v1-default" },
  });
  
  if (!promptVersion) {
    promptVersion = await prisma.promptVersion.create({
      data: {
        name: "v1-default",
        systemPrompt: `You are an expert startup consultant. Produce realistic, conservative estimates. You MUST return valid JSON matching this exact structure:

{
  "summary": "A 2-3 sentence summary of the business idea and its viability",
  "marketSizeUsd": 1000000,
  "risks": ["Risk 1", "Risk 2", "Risk 3"],
  "steps": [
    {
      "title": "Step title",
      "description": "Step description",
      "durationWeeks": 4
    }
  ],
  "profitModel": {
    "cacUsd": 50,
    "ltvUsd": 500,
    "grossMarginPct": 60,
    "breakEvenMonths": 12,
    "monthlyProjection": [
      {"month": 1, "revenueUsd": 1000, "costUsd": 2000},
      {"month": 2, "revenueUsd": 2000, "costUsd": 1800}
    ]
  },
  "confidencePct": 75
}

Return ONLY valid JSON, no markdown, no code fences, no explanations.`,
        outputSchemaVersion: 1,
      },
    });
  } else {
    // Update existing prompt if it's incomplete (from old seed data)
    const fullPrompt = `You are an expert startup consultant. Produce realistic, conservative estimates. You MUST return valid JSON matching this exact structure:

{
  "summary": "A 2-3 sentence summary of the business idea and its viability",
  "marketSizeUsd": 1000000,
  "risks": ["Risk 1", "Risk 2", "Risk 3"],
  "steps": [
    {
      "title": "Step title",
      "description": "Step description",
      "durationWeeks": 4
    }
  ],
  "profitModel": {
    "cacUsd": 50,
    "ltvUsd": 500,
    "grossMarginPct": 60,
    "breakEvenMonths": 12,
    "monthlyProjection": [
      {"month": 1, "revenueUsd": 1000, "costUsd": 2000},
      {"month": 2, "revenueUsd": 2000, "costUsd": 1800}
    ]
  },
  "confidencePct": 75
}

Return ONLY valid JSON, no markdown, no code fences, no explanations.`;
    
    if (promptVersion.systemPrompt.length < 200) {
      // Likely truncated, update it
      promptVersion = await prisma.promptVersion.update({
        where: { id: promptVersion.id },
        data: { systemPrompt: fullPrompt },
      });
    }
  }
  console.log("✓ Prompt version created\n");

  // Create users with different subscription tiers
  console.log("Creating users...");
  const freeUser = await prisma.user.upsert({
    where: { email: "demo-free@example.com" },
    update: {},
    create: {
      email: "demo-free@example.com",
      cognitoSub: "demo-free-sub",
    },
  });

  const starterUser = await prisma.user.upsert({
    where: { email: "demo-starter@example.com" },
    update: {},
    create: {
      email: "demo-starter@example.com",
      cognitoSub: "demo-starter-sub",
    },
  });

  const proUser = await prisma.user.upsert({
    where: { email: "demo-pro@example.com" },
    update: {},
    create: {
      email: "demo-pro@example.com",
      cognitoSub: "demo-pro-sub",
    },
  });
  console.log("✓ Users created\n");

  // Create subscriptions
  console.log("Creating subscriptions...");
  const currentPeriod = new Date();
  currentPeriod.setMonth(currentPeriod.getMonth() + 1);

  await prisma.subscription.upsert({
    where: { userId: starterUser.id },
    update: {},
    create: {
      userId: starterUser.id,
      stripeCustomerId: `cus_demo_starter_${starterUser.id}`,
      stripeSubscriptionId: `sub_demo_starter_${starterUser.id}`,
      stripePriceId: PLANS.starter.stripePriceId || "price_demo_starter",
      status: "active",
      currentPeriodEnd: currentPeriod,
      cancelAtPeriodEnd: false,
    },
  });

  await prisma.subscription.upsert({
    where: { userId: proUser.id },
    update: {},
    create: {
      userId: proUser.id,
      stripeCustomerId: `cus_demo_pro_${proUser.id}`,
      stripeSubscriptionId: `sub_demo_pro_${proUser.id}`,
      stripePriceId: PLANS.pro.stripePriceId || "price_demo_pro",
      status: "active",
      currentPeriodEnd: currentPeriod,
      cancelAtPeriodEnd: false,
    },
  });
  console.log("✓ Subscriptions created\n");

  // Create usage meters
  console.log("Creating usage meters...");
  const period = new Date().toISOString().slice(0, 7); // YYYY-MM

  await prisma.usageMeter.upsert({
    where: { userId_period: { userId: freeUser.id, period } },
    update: {},
    create: {
      userId: freeUser.id,
      period,
      included: PLANS.free.includedAnalyses,
      consumed: 2, // Used 2 of 3
    },
  });

  await prisma.usageMeter.upsert({
    where: { userId_period: { userId: starterUser.id, period } },
    update: {},
    create: {
      userId: starterUser.id,
      period,
      included: PLANS.starter.includedAnalyses,
      consumed: 8, // Used 8 of 25
    },
  });

  await prisma.usageMeter.upsert({
    where: { userId_period: { userId: proUser.id, period } },
    update: {},
    create: {
      userId: proUser.id,
      period,
      included: PLANS.pro.includedAnalyses,
      consumed: 15, // Used 15 of 100
    },
  });
  console.log("✓ Usage meters created\n");

  // Create projects and analyses
  console.log("Creating projects and analyses...");
  for (let i = 0; i < sampleAnalyses.length; i++) {
    const analysisData = sampleAnalyses[i];
    const user = i === 0 ? freeUser : i === 1 ? starterUser : proUser;

    const project = await prisma.project.create({
      data: {
        userId: user.id,
        title: analysisData.input.idea.slice(0, 60),
        description: analysisData.input.targetMarket,
      },
    });

    await prisma.analysis.create({
      data: {
        projectId: project.id,
        input: analysisData.input as any,
        output: analysisData.output as any,
        model: "gpt-4o",
        promptVersionId: promptVersion.id,
        tokenUsage: 2000 + Math.floor(Math.random() * 500),
        costUsd: 0.015 + Math.random() * 0.01,
        status: "success",
      },
    });

    // Add RAG data to pro user's project (first one)
    if (i === 2) {
      console.log("  Adding RAG data to pro user project...");
      
      // Create completed discovery job
      const discoveryJob = await prisma.discoveryJob.create({
        data: {
          projectId: project.id,
          status: "completed",
          urlCount: sampleDocumentChunks.length,
          chunksCount: sampleDocumentChunks.length,
          completedAt: new Date(),
        },
      });

      // Create document chunks (without embeddings for seed data)
      // Embeddings require raw SQL with pgvector format, so we skip them for demo data
      for (const chunk of sampleDocumentChunks) {
        await prisma.documentChunk.create({
          data: {
            projectId: project.id,
            sourceUrl: chunk.sourceUrl,
            chunkIndex: chunk.chunkIndex,
            content: chunk.content,
            // embedding omitted - would require raw SQL with pgvector format
            metadata: chunk.metadata as any,
          },
        });
      }
      console.log("  ✓ RAG data added");
    }
  }
  console.log("✓ Projects and analyses created\n");

  console.log("✅ Seed completed successfully!\n");
  console.log("Demo users:");
  console.log("  Free: demo-free@example.com");
  console.log("  Starter: demo-starter@example.com");
  console.log("  Pro: demo-pro@example.com");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

