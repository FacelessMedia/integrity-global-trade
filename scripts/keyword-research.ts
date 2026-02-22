/**
 * Keyword Research Script for Integrity Global Trade & Commodities Corp
 * 
 * Usage: npx tsx scripts/keyword-research.ts
 * 
 * Requires DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD in .env.local
 */

import { DataForSEOClient } from "./dataforseo-client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const SEED_KEYWORDS = [
  // Primary keywords
  "precious metals trading company",
  "global commodities trading",
  "non-ferrous metals supplier",
  "gold trading company",
  "metals refining services",
  "commodity trading firm",
  "precious metals for semiconductors",
  "ethical metals sourcing",
  "physical commodities trading",
  "critical minerals supply chain",

  // Secondary keywords
  "gold refining services",
  "silver trading company",
  "platinum palladium trading",
  "copper supplier",
  "metals supply chain management",
  "KYC compliance metals trading",
  "LBMA accredited trading",
  "conflict-free minerals",
  "precious metals procurement",
  "metals for electronics manufacturing",
];

const COMPETITOR_DOMAINS = [
  "gerald.com",
  "globalcommoditiesholdings.com",
  "stonex.com",
  "ipm.world",
  "ectp.com",
  "comtradingcorp.com",
  "ksandt.com",
  "intercomtraders.com",
  "trafigura.com",
  "glencore.com",
];

async function main() {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password || login === "your_dataforseo_login_here") {
    console.error("❌ DataForSEO credentials not configured.");
    console.error("   Please update DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD in .env.local");
    console.log("\n📋 Generating research template with placeholder data...\n");
    generatePlaceholderReport();
    return;
  }

  const client = new DataForSEOClient({ login, password });
  const outputDir = path.resolve(__dirname, "../research-output");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("🔍 Starting Keyword Research for Integrity Global Trade & Commodities Corp\n");

  // Step 1: Get search volume for seed keywords
  console.log("📊 Step 1: Fetching search volume for seed keywords...");
  try {
    const searchVolumeData = await client.getKeywordSearchVolume(SEED_KEYWORDS);
    fs.writeFileSync(
      path.join(outputDir, "keyword-search-volume.json"),
      JSON.stringify(searchVolumeData, null, 2)
    );
    console.log(`   ✅ Got data for ${searchVolumeData.length} keywords`);
  } catch (error) {
    console.error("   ❌ Error fetching search volume:", error);
  }

  // Step 2: Get keyword suggestions for top seed keywords
  console.log("\n📊 Step 2: Fetching keyword suggestions...");
  const allSuggestions: Record<string, unknown[]> = {};
  for (const keyword of SEED_KEYWORDS.slice(0, 5)) {
    try {
      console.log(`   Fetching suggestions for: "${keyword}"`);
      const suggestions = await client.getKeywordSuggestions(keyword);
      allSuggestions[keyword] = suggestions;
      console.log(`   ✅ Got ${suggestions.length} suggestions`);
      // Rate limit courtesy
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`   ❌ Error for "${keyword}":`, error);
    }
  }
  fs.writeFileSync(
    path.join(outputDir, "keyword-suggestions.json"),
    JSON.stringify(allSuggestions, null, 2)
  );

  // Step 3: Get SERP results for top keywords to identify competitors
  console.log("\n📊 Step 3: Fetching SERP results for competitor identification...");
  const serpResults: Record<string, unknown[]> = {};
  for (const keyword of SEED_KEYWORDS.slice(0, 10)) {
    try {
      console.log(`   Fetching SERP for: "${keyword}"`);
      const results = await client.getSerpResults(keyword);
      serpResults[keyword] = results;
      console.log(`   ✅ Got ${results.length} SERP results`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`   ❌ Error for "${keyword}":`, error);
    }
  }
  fs.writeFileSync(
    path.join(outputDir, "serp-results.json"),
    JSON.stringify(serpResults, null, 2)
  );

  // Step 4: Analyze competitor domains
  console.log("\n📊 Step 4: Analyzing competitor domains...");
  const competitorAnalysis: Record<string, unknown> = {};
  for (const domain of COMPETITOR_DOMAINS) {
    try {
      console.log(`   Analyzing: ${domain}`);
      const keywords = await client.getCompetitorKeywords(domain, 2840, "en", 50);
      competitorAnalysis[domain] = {
        top_keywords: keywords,
        keyword_count: keywords.length,
      };
      console.log(`   ✅ Got ${keywords.length} ranked keywords for ${domain}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`   ❌ Error for ${domain}:`, error);
    }
  }
  fs.writeFileSync(
    path.join(outputDir, "competitor-analysis.json"),
    JSON.stringify(competitorAnalysis, null, 2)
  );

  // Step 5: Find competitor domains for our keywords
  console.log("\n📊 Step 5: Finding competitor domains for our keywords...");
  try {
    const competitors = await client.getCompetitorsForKeywords(SEED_KEYWORDS.slice(0, 10));
    fs.writeFileSync(
      path.join(outputDir, "competitor-domains.json"),
      JSON.stringify(competitors, null, 2)
    );
    console.log(`   ✅ Found ${competitors.length} competitor domains`);
  } catch (error) {
    console.error("   ❌ Error finding competitors:", error);
  }

  console.log("\n✅ Research complete! Results saved to /research-output/");
  console.log("   - keyword-search-volume.json");
  console.log("   - keyword-suggestions.json");
  console.log("   - serp-results.json");
  console.log("   - competitor-analysis.json");
  console.log("   - competitor-domains.json");
}

function generatePlaceholderReport() {
  const outputDir = path.resolve(__dirname, "../research-output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const report = {
    generated: new Date().toISOString(),
    status: "PLACEHOLDER - Add DataForSEO credentials to .env.local and re-run",
    seed_keywords: SEED_KEYWORDS,
    competitor_domains: COMPETITOR_DOMAINS,
    estimated_keyword_clusters: {
      "precious_metals_trading": {
        primary: "precious metals trading company",
        estimated_monthly_volume: "1,000 - 10,000",
        difficulty: "Medium-High",
        related_keywords: [
          "gold trading company",
          "silver trading firm",
          "platinum palladium trading",
          "precious metals dealer",
          "precious metals broker",
        ],
      },
      "commodities_trading": {
        primary: "global commodities trading",
        estimated_monthly_volume: "5,000 - 50,000",
        difficulty: "High",
        related_keywords: [
          "commodity trading firm",
          "physical commodities trading",
          "international commodity trading",
          "commodity trading house",
        ],
      },
      "non_ferrous_metals": {
        primary: "non-ferrous metals supplier",
        estimated_monthly_volume: "500 - 5,000",
        difficulty: "Medium",
        related_keywords: [
          "copper trading company",
          "aluminium supplier",
          "non-ferrous metals trading",
          "base metals supplier",
        ],
      },
      "metals_refining": {
        primary: "precious metals refining",
        estimated_monthly_volume: "1,000 - 10,000",
        difficulty: "Medium",
        related_keywords: [
          "gold refining services",
          "silver refining",
          "metals processing services",
          "precious metals smelting",
        ],
      },
      "semiconductor_metals": {
        primary: "precious metals for semiconductors",
        estimated_monthly_volume: "100 - 1,000",
        difficulty: "Low-Medium",
        related_keywords: [
          "gold plating semiconductors",
          "metals for chip manufacturing",
          "precious metals electronics",
          "chip wafer coating metals",
        ],
      },
      "ethical_sourcing": {
        primary: "ethical metals sourcing",
        estimated_monthly_volume: "100 - 1,000",
        difficulty: "Low",
        related_keywords: [
          "responsible mineral sourcing",
          "conflict-free minerals",
          "certified mine sourcing",
          "sustainable metals trading",
        ],
      },
      "compliance": {
        primary: "KYC compliance metals trading",
        estimated_monthly_volume: "100 - 500",
        difficulty: "Low",
        related_keywords: [
          "AML compliance precious metals",
          "metals trading regulations",
          "LBMA compliance",
          "responsible precious metals procurement",
        ],
      },
      "supply_chain": {
        primary: "metals supply chain management",
        estimated_monthly_volume: "500 - 5,000",
        difficulty: "Medium",
        related_keywords: [
          "mining to refinery supply chain",
          "critical minerals supply chain",
          "metals logistics",
          "commodity supply chain solutions",
        ],
      },
    },
    page_keyword_mapping: {
      "/": ["precious metals trading company", "global commodities trading", "commodity trading firm"],
      "/about": ["integrity global trade", "timothy mercer commodities", "commodity trading company about"],
      "/services/precious-metals-trading": ["precious metals trading", "gold trading company", "silver trading"],
      "/services/non-ferrous-metals": ["non-ferrous metals supplier", "copper trading", "base metals trading"],
      "/services/metals-refining": ["precious metals refining", "gold refining services", "metals processing"],
      "/services/semiconductor-metals": ["precious metals for semiconductors", "chip wafer gold coating"],
      "/services/supply-chain": ["metals supply chain management", "commodity logistics"],
      "/services/risk-management": ["commodity risk management", "metals hedging services"],
      "/commodities/gold": ["gold trading", "gold supplier", "physical gold trading"],
      "/commodities/silver": ["silver trading", "silver supplier", "physical silver trading"],
      "/commodities/platinum-palladium": ["platinum trading", "palladium trading", "PGM trading"],
      "/commodities/copper": ["copper trading", "copper supplier", "physical copper trading"],
      "/compliance": ["KYC compliance metals", "ethical metals sourcing", "responsible procurement"],
      "/industries/semiconductors": ["metals for semiconductor manufacturing", "precious metals electronics"],
      "/insights": ["commodities market analysis", "metals trading news", "precious metals market report"],
    },
  };

  fs.writeFileSync(
    path.join(outputDir, "research-report.json"),
    JSON.stringify(report, null, 2)
  );
  console.log("📄 Placeholder report saved to research-output/research-report.json");
  console.log("   Add your DataForSEO credentials to .env.local and re-run for live data.");
}

main().catch(console.error);
