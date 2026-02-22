/**
 * COMPREHENSIVE Keyword Research & Competitor Analysis Script
 * Integrity Global Trade & Commodities Corp
 * 
 * Executes the full SEO_KEYWORD_GAMEPLAN.md strategy:
 *   Phase 1: SERP-based competitor discovery
 *   Phase 2: Competitor keyword extraction (all 25 domains)
 *   Phase 3: Keyword expansion via suggestions
 *   Phase 4: Search volume + scoring for all keywords
 *   Phase 5: Clustering and page mapping
 *   Phase 6: Master ranking plan generation
 * 
 * Usage: npx tsx scripts/keyword-research.ts
 * Requires DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD in .env.local
 */

import { DataForSEOClient } from "./dataforseo-client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// ============================================================
// SEED KEYWORDS — 34 keywords across 4 tiers
// ============================================================
const SEED_KEYWORDS = [
  // Tier 1: Core Business
  "precious metals trading company",
  "gold trading company",
  "silver trading company",
  "commodity trading firm",
  "physical commodities trading",
  "global commodities trading",
  "metals trading company",
  "precious metals supplier",
  "gold supplier wholesale",
  "non-ferrous metals supplier",
  // Tier 2: Service-Specific
  "precious metals refining services",
  "gold refining services",
  "metals supply chain management",
  "commodity risk management",
  "precious metals procurement",
  "metals for semiconductor manufacturing",
  "gold plating chip wafers",
  "critical minerals supplier",
  "platinum palladium trading",
  "copper trading company",
  // Tier 3: Compliance & Trust
  "KYC compliance metals trading",
  "ethical metals sourcing",
  "LBMA accredited trading",
  "conflict-free minerals supplier",
  "responsible precious metals procurement",
  "UN certified mine sourcing",
  "AML compliance commodities",
  "chain of custody precious metals",
  // Tier 4: Industry Application
  "precious metals for electronics",
  "gold for semiconductor industry",
  "silver for solar panels",
  "copper for electric vehicles",
  "metals for renewable energy",
  "catalytic converter metals supplier",
];

// ============================================================
// TOP 25 COMPETITOR DOMAINS — verified via web research
// ============================================================
const COMPETITOR_DOMAINS = [
  // Direct competitors: Physical metals trading
  "gerald.com",
  "stonex.com",
  "trafigura.com",
  "glencore.com",
  "ipm.world",
  "integritytradegroup.com",
  "intercomtraders.com",
  "ectp.com",
  "ksandt.com",
  "comtradingcorp.com",
  // Precious metals specialists
  "kitco.com",
  "jmbullion.com",
  "apmex.com",
  "dillongage.com",
  "elemetal.com",
  // Metals for industry / semiconductor
  "heraeus-precious-metals.com",
  "technic.com",
  "metalor.com",
  "mkspamp.com",
  "asahirefining.com",
  // Commodities platforms
  "globalcommoditiesholdings.com",
  // Mining/refining with trading arms
  "ipmr.com",
  "scginternational.com",
  "blacklaketrading.com",
  "mtbmetals.com",
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

  const save = (filename: string, data: unknown) => {
    fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(data, null, 2));
  };
  const delay = (ms = 800) => new Promise((r) => setTimeout(r, ms));

  console.log("═══════════════════════════════════════════════════════════");
  console.log("  INTEGRITY GLOBAL TRADE — FULL SEO RESEARCH PIPELINE");
  console.log("═══════════════════════════════════════════════════════════\n");

  // ── PHASE 1: SERP competitor discovery ──────────────────────
  console.log("▶ PHASE 1: SERP-based competitor discovery (34 seed keywords)...\n");
  const serpResults: Record<string, unknown[]> = {};
  const serpDomainCount: Record<string, number> = {};
  for (const keyword of SEED_KEYWORDS) {
    try {
      process.stdout.write(`   SERP: "${keyword}"...`);
      const results = await client.getSerpResults(keyword);
      serpResults[keyword] = results;
      // Count domain frequency
      for (const r of results as Array<{ domain?: string }>) {
        if (r.domain) {
          const d = r.domain.replace(/^www\./, "");
          serpDomainCount[d] = (serpDomainCount[d] || 0) + 1;
        }
      }
      console.log(` ✅ ${results.length} results`);
      await delay();
    } catch (error) {
      console.log(` ❌ Error`);
    }
  }
  save("01-serp-results.json", serpResults);
  // Sort domains by frequency (most keyword overlap = strongest competitor)
  const discoveredCompetitors = Object.entries(serpDomainCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 50);
  save("01-serp-discovered-competitors.json", discoveredCompetitors);
  console.log(`\n   📊 Discovered ${discoveredCompetitors.length} competitor domains from SERPs`);
  console.log(`   Top 10: ${discoveredCompetitors.slice(0, 10).map(([d, c]) => `${d}(${c})`).join(", ")}\n`);

  // ── PHASE 2: Competitor keyword extraction ──────────────────
  // Merge our predefined list + SERP-discovered top domains
  const allCompetitorDomains = [...new Set([
    ...COMPETITOR_DOMAINS,
    ...discoveredCompetitors.filter(([, c]) => c >= 3).map(([d]) => d),
  ])];
  console.log(`▶ PHASE 2: Extracting keywords from ${allCompetitorDomains.length} competitor domains...\n`);

  const allCompetitorKeywords: Array<{
    domain: string;
    keyword: string;
    position: number;
    search_volume: number;
    cpc: number;
    url: string;
  }> = [];

  for (const domain of allCompetitorDomains) {
    try {
      process.stdout.write(`   Ranked keywords: ${domain}...`);
      const items = (await client.getCompetitorKeywords(domain, 2840, "en", 500)) as Array<{
        keyword_data?: {
          keyword?: string;
          keyword_info?: { search_volume?: number; cpc?: number };
        };
        ranked_serp_element?: { serp_item?: { rank_absolute?: number; url?: string } };
      }>;
      for (const item of items) {
        const kw = item.keyword_data?.keyword;
        const vol = item.keyword_data?.keyword_info?.search_volume || 0;
        const cpc = item.keyword_data?.keyword_info?.cpc || 0;
        const pos = item.ranked_serp_element?.serp_item?.rank_absolute || 999;
        const url = item.ranked_serp_element?.serp_item?.url || "";
        if (kw) {
          allCompetitorKeywords.push({ domain, keyword: kw, position: pos, search_volume: vol, cpc, url });
        }
      }
      console.log(` ✅ ${items.length} keywords`);
      await delay();
    } catch (error) {
      console.log(` ❌ Error`);
    }
  }
  save("02-competitor-keywords-raw.json", allCompetitorKeywords);
  console.log(`\n   📊 Total raw keyword entries: ${allCompetitorKeywords.length}`);

  // Deduplicate and count frequency
  const keywordMap: Record<string, {
    keyword: string;
    total_volume: number;
    max_cpc: number;
    competitor_count: number;
    competitors: Array<{ domain: string; position: number }>;
  }> = {};
  for (const entry of allCompetitorKeywords) {
    const key = entry.keyword.toLowerCase();
    if (!keywordMap[key]) {
      keywordMap[key] = { keyword: entry.keyword, total_volume: entry.search_volume, max_cpc: entry.cpc, competitor_count: 0, competitors: [] };
    }
    keywordMap[key].competitor_count += 1;
    keywordMap[key].competitors.push({ domain: entry.domain, position: entry.position });
    if (entry.cpc > keywordMap[key].max_cpc) keywordMap[key].max_cpc = entry.cpc;
    if (entry.search_volume > keywordMap[key].total_volume) keywordMap[key].total_volume = entry.search_volume;
  }
  const deduplicatedKeywords = Object.values(keywordMap)
    .sort((a, b) => b.competitor_count - a.competitor_count || b.total_volume - a.total_volume);
  save("02-competitor-keywords-deduped.json", deduplicatedKeywords);
  console.log(`   📊 Unique keywords after dedup: ${deduplicatedKeywords.length}\n`);

  // ── PHASE 3: Keyword expansion ──────────────────────────────
  console.log(`▶ PHASE 3: Expanding keywords via suggestions (top 15 seeds)...\n`);
  const expansionKeywords = SEED_KEYWORDS.slice(0, 15);
  const allSuggestions: Record<string, unknown[]> = {};
  for (const keyword of expansionKeywords) {
    try {
      process.stdout.write(`   Suggestions: "${keyword}"...`);
      const suggestions = await client.getKeywordSuggestions(keyword);
      allSuggestions[keyword] = suggestions;
      console.log(` ✅ ${suggestions.length} ideas`);
      await delay();
    } catch (error) {
      console.log(` ❌ Error`);
    }
  }
  save("03-keyword-suggestions.json", allSuggestions);

  // ── PHASE 4: Search volume for all unique keywords ──────────
  // Collect all unique keywords from phases 2 + 3
  const allUniqueKeywords = new Set<string>(SEED_KEYWORDS.map(k => k.toLowerCase()));
  for (const kw of deduplicatedKeywords) allUniqueKeywords.add(kw.keyword.toLowerCase());
  for (const suggestions of Object.values(allSuggestions)) {
    for (const s of suggestions as Array<{ keyword?: string }>) {
      if (s.keyword) allUniqueKeywords.add(s.keyword.toLowerCase());
    }
  }
  const uniqueKeywordList = [...allUniqueKeywords];
  console.log(`\n▶ PHASE 4: Fetching search volume for ${uniqueKeywordList.length} unique keywords...\n`);

  const volumeData: unknown[] = [];
  // Process in batches of 700 (API limit is 1000 per request)
  for (let i = 0; i < uniqueKeywordList.length; i += 700) {
    const batch = uniqueKeywordList.slice(i, i + 700);
    try {
      process.stdout.write(`   Batch ${Math.floor(i / 700) + 1}/${Math.ceil(uniqueKeywordList.length / 700)} (${batch.length} keywords)...`);
      const data = await client.getKeywordSearchVolume(batch);
      volumeData.push(...data);
      console.log(` ✅`);
      await delay(1500);
    } catch (error) {
      console.log(` ❌ Error`);
    }
  }
  save("04-search-volume-all.json", volumeData);
  console.log(`   📊 Got volume data for ${volumeData.length} keywords\n`);

  // ── PHASE 5: Find additional competitor domains via API ─────
  console.log(`▶ PHASE 5: Discovering competitor domains via DataForSEO Labs...\n`);
  try {
    const competitors = await client.getCompetitorsForKeywords(SEED_KEYWORDS.slice(0, 20));
    save("05-api-competitor-domains.json", competitors);
    console.log(`   ✅ Found ${competitors.length} competitor domains from API\n`);
  } catch (error) {
    console.log(`   ❌ Error finding competitor domains\n`);
  }

  // ── SUMMARY ─────────────────────────────────────────────────
  console.log("═══════════════════════════════════════════════════════════");
  console.log("  ✅ RESEARCH PIPELINE COMPLETE");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`  Files saved to: ${outputDir}/`);
  console.log(`  01-serp-results.json                   — SERP data for all seed keywords`);
  console.log(`  01-serp-discovered-competitors.json     — Competitor domains from SERPs`);
  console.log(`  02-competitor-keywords-raw.json         — All keywords from ${allCompetitorDomains.length} competitors`);
  console.log(`  02-competitor-keywords-deduped.json     — ${deduplicatedKeywords.length} unique keywords, scored`);
  console.log(`  03-keyword-suggestions.json             — Expanded keyword suggestions`);
  console.log(`  04-search-volume-all.json               — Volume data for ${volumeData.length} keywords`);
  console.log(`  05-api-competitor-domains.json           — API-discovered competitors`);
  console.log(`\n  Next: Run 'npx tsx scripts/generate-master-list.ts' to score & cluster`);
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
