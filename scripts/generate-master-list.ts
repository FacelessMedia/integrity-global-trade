/**
 * Generate Master Keyword List & Ranking Plan
 * Reads research-output/ data, scores/clusters keywords, generates actionable plan.
 *
 * Usage: npx tsx scripts/generate-master-list.ts
 */

import * as fs from "fs";
import * as path from "path";

const outputDir = path.resolve(__dirname, "../research-output");
const read = (f: string) => JSON.parse(fs.readFileSync(path.join(outputDir, f), "utf-8"));

// ── Load data ─────────────────────────────────────────────
const competitorKeywords: Array<{
  keyword: string;
  total_volume: number;
  max_cpc: number;
  competitor_count: number;
  competitors: Array<{ domain: string; position: number }>;
}> = read("02-competitor-keywords-deduped.json");

const searchVolume: Array<{
  keyword: string;
  search_volume: number;
  cpc: number;
  competition: string;
  competition_index: number;
  high_top_of_page_bid: number;
}> = read("04-search-volume-all.json");

const serpCompetitors: Array<[string, number]> = read("01-serp-discovered-competitors.json");

// Build volume lookup
const volumeMap = new Map<string, (typeof searchVolume)[0]>();
for (const sv of searchVolume) {
  if (sv?.keyword) volumeMap.set(sv.keyword.toLowerCase(), sv);
}

// ── Keyword clusters (semantic grouping) ──────────────────
const CLUSTERS: Record<string, { target_url: string; match_terms: string[] }> = {
  "Precious Metals Trading": {
    target_url: "/services/precious-metals-trading",
    match_terms: ["precious metals trad", "precious metal trad", "precious metals compan", "precious metals dealer", "precious metals broker", "pm trading"],
  },
  "Gold Trading & Supply": {
    target_url: "/commodities/gold",
    match_terms: ["gold trad", "gold supplier", "gold price", "gold bar", "gold bullion", "buy gold", "sell gold", "gold dealer", "gold coin", "gold spot", "gold market", "gold invest", "gold ounce", "xau"],
  },
  "Silver Trading & Supply": {
    target_url: "/commodities/silver",
    match_terms: ["silver trad", "silver price", "silver bar", "silver bullion", "buy silver", "sell silver", "silver dealer", "silver coin", "silver spot", "silver market", "silver invest", "silver ounce", "xag"],
  },
  "Platinum & Palladium (PGM)": {
    target_url: "/commodities/platinum-palladium",
    match_terms: ["platinum", "palladium", "pgm", "rhodium", "iridium", "ruthenium"],
  },
  "Copper Trading": {
    target_url: "/commodities/copper",
    match_terms: ["copper trad", "copper price", "copper supplier", "copper cathode", "copper market", "copper futures"],
  },
  "Non-Ferrous Metals": {
    target_url: "/services/non-ferrous-metals",
    match_terms: ["non-ferrous", "non ferrous", "base metal", "alumin", "zinc", "nickel", "tin ", "lead metal"],
  },
  "Critical Minerals & Rare Earths": {
    target_url: "/services/critical-minerals",
    match_terms: ["critical mineral", "rare earth", "lithium", "cobalt", "manganese", "tungsten", "tantalum"],
  },
  "Semiconductor Metals": {
    target_url: "/services/semiconductor-metals",
    match_terms: ["semiconductor", "chip wafer", "wafer plat", "die bond", "wire bond", "microelectron", "gold plating chip", "gold plating semiconductor"],
  },
  "Metals Refining & Processing": {
    target_url: "/services/refining-processing",
    match_terms: ["refin", "smelt", "assay", "miller process", "good delivery", "fineness", "purity"],
  },
  "Supply Chain & Logistics": {
    target_url: "/services/supply-chain",
    match_terms: ["supply chain", "logistics", "chain of custody", "mine to market", "traceab", "sourcing"],
  },
  "Risk Management & Hedging": {
    target_url: "/services/risk-management",
    match_terms: ["hedg", "risk manage", "futures", "forward contract", "commodity risk", "price risk"],
  },
  "Compliance & Ethics": {
    target_url: "/compliance",
    match_terms: ["kyc", "aml", "compliance", "sanction", "lbma", "oecd", "conflict-free", "conflict free", "responsible sourc", "ethical sourc", "due diligence"],
  },
  "Commodities Trading (General)": {
    target_url: "/",
    match_terms: ["commodit", "commodity trad", "commodity market", "commodity firm", "commodity compan", "physical commodit"],
  },
  "Industry: Electronics & Tech": {
    target_url: "/insights",
    match_terms: ["electron", "circuit", "pcb", "connector", "solder"],
  },
  "Industry: Automotive & Catalytic": {
    target_url: "/insights",
    match_terms: ["catalytic", "automotive", "exhaust", "catalyst"],
  },
  "Industry: Renewable Energy": {
    target_url: "/insights",
    match_terms: ["solar", "renewable", "energy transition", "electric vehicle", " ev "],
  },
  "Market Data & Prices": {
    target_url: "/insights",
    match_terms: ["price today", "spot price", "price chart", "price per", "price forecast", "market data", "live price"],
  },
};

function classifyCluster(keyword: string): string {
  const kw = keyword.toLowerCase();
  for (const [cluster, config] of Object.entries(CLUSTERS)) {
    for (const term of config.match_terms) {
      if (kw.includes(term.toLowerCase())) return cluster;
    }
  }
  return "Other";
}

function classifyIntent(keyword: string, cpc: number): string {
  const kw = keyword.toLowerCase();
  if (/\b(buy|purchase|order|wholesale|supplier|for sale|dealer|shop)\b/.test(kw)) return "Transactional";
  if (/\b(best|top|compare|review|vs|alternative)\b/.test(kw)) return "Commercial Investigation";
  if (/\b(price|cost|rate|value|worth|how much)\b/.test(kw)) return "Commercial Investigation";
  if (/\b(what is|how to|guide|tutorial|explain|definition|meaning|wiki)\b/.test(kw)) return "Informational";
  if (cpc > 3) return "Commercial Investigation";
  if (cpc > 1) return "Transactional";
  return "Informational";
}

function scoreKeyword(
  volume: number,
  cpc: number,
  competitionIndex: number,
  competitorCount: number,
  cluster: string
): number {
  // Volume score (0-20)
  let volumeScore = 0;
  if (volume >= 10000) volumeScore = 20;
  else if (volume >= 1000) volumeScore = 15;
  else if (volume >= 100) volumeScore = 10;
  else if (volume >= 10) volumeScore = 5;
  else volumeScore = 2;

  // Business relevance (0-25) — higher for our core clusters
  const highRelevance = ["Precious Metals Trading", "Gold Trading & Supply", "Silver Trading & Supply",
    "Non-Ferrous Metals", "Semiconductor Metals", "Metals Refining & Processing", "Compliance & Ethics"];
  const medRelevance = ["Platinum & Palladium (PGM)", "Copper Trading", "Critical Minerals & Rare Earths",
    "Supply Chain & Logistics", "Risk Management & Hedging", "Commodities Trading (General)"];
  let relevanceScore = 5;
  if (highRelevance.includes(cluster)) relevanceScore = 25;
  else if (medRelevance.includes(cluster)) relevanceScore = 18;
  else if (cluster !== "Other") relevanceScore = 10;

  // Commercial intent (0-20)
  let intentScore = 5;
  if (cpc > 5) intentScore = 20;
  else if (cpc > 2) intentScore = 15;
  else if (cpc > 0.5) intentScore = 10;

  // Difficulty (0-15) — lower competition = higher score
  let difficultyScore = 8;
  if (competitionIndex <= 20) difficultyScore = 15;
  else if (competitionIndex <= 40) difficultyScore = 12;
  else if (competitionIndex <= 60) difficultyScore = 8;
  else if (competitionIndex <= 80) difficultyScore = 5;
  else difficultyScore = 2;

  // Competitor density (0-10) — fewer strong competitors = more opportunity
  let densityScore = 5;
  if (competitorCount <= 2) densityScore = 10;
  else if (competitorCount <= 4) densityScore = 7;
  else if (competitorCount <= 6) densityScore = 5;
  else densityScore = 3;

  // CPC value (0-10)
  let cpcScore = 2;
  if (cpc > 10) cpcScore = 10;
  else if (cpc > 5) cpcScore = 8;
  else if (cpc > 2) cpcScore = 6;
  else if (cpc > 0.5) cpcScore = 4;

  return volumeScore + relevanceScore + intentScore + difficultyScore + densityScore + cpcScore;
}

// ── Process all keywords ──────────────────────────────────
interface MasterKeyword {
  keyword: string;
  search_volume: number;
  cpc: number;
  competition: string;
  competition_index: number;
  competitor_count: number;
  cluster: string;
  target_url: string;
  intent: string;
  score: number;
  difficulty_tier: string;
  wave: string;
  top_competitors: string;
}

console.log("═══════════════════════════════════════════════════════════");
console.log("  GENERATING MASTER KEYWORD LIST & RANKING PLAN");
console.log("═══════════════════════════════════════════════════════════\n");

const masterList: MasterKeyword[] = [];
const seen = new Set<string>();

// Process competitor keywords
for (const ck of competitorKeywords) {
  const kwLower = ck.keyword.toLowerCase();
  if (seen.has(kwLower)) continue;
  seen.add(kwLower);

  const vol = volumeMap.get(kwLower);
  const volume = vol?.search_volume || ck.total_volume || 0;
  const cpc = vol?.cpc || ck.max_cpc || 0;
  const compIndex = vol?.competition_index || 50;
  const competition = vol?.competition || "MEDIUM";
  const cluster = classifyCluster(ck.keyword);
  const targetUrl = CLUSTERS[cluster]?.target_url || "/insights";
  const intent = classifyIntent(ck.keyword, cpc);
  const score = scoreKeyword(volume, cpc, compIndex, ck.competitor_count, cluster);

  let difficultyTier = "Medium";
  if (compIndex <= 30) difficultyTier = "Easy";
  else if (compIndex <= 60) difficultyTier = "Medium";
  else if (compIndex <= 80) difficultyTier = "Hard";
  else difficultyTier = "Very Hard";

  let wave = "Wave 2";
  if (difficultyTier === "Easy" && score >= 40) wave = "Wave 1";
  else if (difficultyTier === "Easy") wave = "Wave 1";
  else if (difficultyTier === "Medium") wave = "Wave 2";
  else if (difficultyTier === "Hard") wave = "Wave 3";
  else wave = "Wave 4";

  const topComps = ck.competitors
    .sort((a, b) => a.position - b.position)
    .slice(0, 3)
    .map((c) => `${c.domain}(#${c.position})`)
    .join(", ");

  masterList.push({
    keyword: ck.keyword,
    search_volume: volume,
    cpc: Math.round(cpc * 100) / 100,
    competition,
    competition_index: compIndex,
    competitor_count: ck.competitor_count,
    cluster,
    target_url: targetUrl,
    intent,
    score,
    difficulty_tier: difficultyTier,
    wave,
    top_competitors: topComps,
  });
}

// Sort by score descending
masterList.sort((a, b) => b.score - a.score);

// ── Write master JSON ─────────────────────────────────────
fs.writeFileSync(
  path.join(outputDir, "MASTER-KEYWORD-LIST.json"),
  JSON.stringify(masterList, null, 2)
);

// ── Write CSV ─────────────────────────────────────────────
const csvHeader = "Keyword,Volume,CPC,Competition,Comp Index,# Competitors,Cluster,Target URL,Intent,Score,Difficulty,Wave,Top Competitors";
const csvRows = masterList.map((k) =>
  `"${k.keyword}",${k.search_volume},${k.cpc},"${k.competition}",${k.competition_index},${k.competitor_count},"${k.cluster}","${k.target_url}","${k.intent}",${k.score},"${k.difficulty_tier}","${k.wave}","${k.top_competitors}"`
);
fs.writeFileSync(
  path.join(outputDir, "MASTER-KEYWORD-LIST.csv"),
  [csvHeader, ...csvRows].join("\n")
);

// ── Cluster summary ───────────────────────────────────────
const clusterSummary: Record<string, {
  count: number;
  total_volume: number;
  avg_score: number;
  top_keywords: Array<{ keyword: string; volume: number; score: number }>;
  target_url: string;
  wave_distribution: Record<string, number>;
}> = {};

for (const kw of masterList) {
  if (!clusterSummary[kw.cluster]) {
    clusterSummary[kw.cluster] = {
      count: 0, total_volume: 0, avg_score: 0,
      top_keywords: [], target_url: kw.target_url,
      wave_distribution: { "Wave 1": 0, "Wave 2": 0, "Wave 3": 0, "Wave 4": 0 },
    };
  }
  const cs = clusterSummary[kw.cluster];
  cs.count++;
  cs.total_volume += kw.search_volume;
  cs.avg_score += kw.score;
  cs.wave_distribution[kw.wave] = (cs.wave_distribution[kw.wave] || 0) + 1;
  if (cs.top_keywords.length < 10) {
    cs.top_keywords.push({ keyword: kw.keyword, volume: kw.search_volume, score: kw.score });
  }
}
for (const cs of Object.values(clusterSummary)) {
  cs.avg_score = Math.round(cs.avg_score / cs.count);
}

fs.writeFileSync(
  path.join(outputDir, "CLUSTER-SUMMARY.json"),
  JSON.stringify(clusterSummary, null, 2)
);

// ── Wave breakdown ────────────────────────────────────────
const waves: Record<string, MasterKeyword[]> = { "Wave 1": [], "Wave 2": [], "Wave 3": [], "Wave 4": [] };
for (const kw of masterList) {
  waves[kw.wave]?.push(kw);
}

// ── Generate Markdown report ──────────────────────────────
const topByCluster = Object.entries(clusterSummary)
  .filter(([name]) => name !== "Other" && name !== "Market Data & Prices")
  .sort(([, a], [, b]) => b.avg_score - a.avg_score);

let md = `# MASTER SEO KEYWORD LIST & RANKING ATTACK PLAN
## Integrity Global Trade & Commodities Corp
### Generated: ${new Date().toISOString().split("T")[0]}

---

## Research Summary

| Metric | Value |
|--------|-------|
| **Total Unique Keywords** | ${masterList.length.toLocaleString()} |
| **Keywords with Volume Data** | ${masterList.filter(k => k.search_volume > 0).length.toLocaleString()} |
| **Competitor Domains Analyzed** | 34 |
| **Seed Keywords Used** | 34 |
| **Keyword Clusters** | ${Object.keys(clusterSummary).length} |

---

## SERP-Discovered Competitors (by keyword overlap)

| Rank | Domain | Keywords Overlapping |
|------|--------|---------------------|
${serpCompetitors.slice(0, 20).map(([d, c], i) => `| ${i + 1} | ${d} | ${c} |`).join("\n")}

---

## Cluster Breakdown (Sorted by Priority Score)

`;

for (const [name, cs] of topByCluster) {
  md += `### ${name}
- **Target URL:** \`${cs.target_url}\`
- **Keywords in cluster:** ${cs.count}
- **Total search volume:** ${cs.total_volume.toLocaleString()}/mo
- **Avg priority score:** ${cs.avg_score}/100
- **Wave distribution:** W1: ${cs.wave_distribution["Wave 1"]}, W2: ${cs.wave_distribution["Wave 2"]}, W3: ${cs.wave_distribution["Wave 3"]}, W4: ${cs.wave_distribution["Wave 4"]}

| Keyword | Volume | Score |
|---------|--------|-------|
${cs.top_keywords.map(k => `| ${k.keyword} | ${k.volume.toLocaleString()} | ${k.score} |`).join("\n")}

`;
}

md += `---

## WAVE 1: Quick Wins (Month 1-2)
**${waves["Wave 1"].length} keywords** — Low difficulty, optimize existing pages

### Top 20 Wave 1 Targets:
| Keyword | Volume | CPC | Cluster | Target URL | Score |
|---------|--------|-----|---------|------------|-------|
${waves["Wave 1"].slice(0, 20).map(k => `| ${k.keyword} | ${k.search_volume.toLocaleString()} | $${k.cpc} | ${k.cluster} | \`${k.target_url}\` | ${k.score} |`).join("\n")}

### Wave 1 Actions:
1. Optimize title tags, H1s, meta descriptions on all existing pages with primary keywords
2. Expand thin pages to 1,500+ words with keyword-rich content
3. Add FAQ schema markup to service and commodity pages
4. Submit all pages to Google Search Console
5. Build internal links between related cluster pages

---

## WAVE 2: Medium Targets (Month 2-4)
**${waves["Wave 2"].length} keywords** — New landing pages, blog content

### Top 20 Wave 2 Targets:
| Keyword | Volume | CPC | Cluster | Target URL | Score |
|---------|--------|-----|---------|------------|-------|
${waves["Wave 2"].slice(0, 20).map(k => `| ${k.keyword} | ${k.search_volume.toLocaleString()} | $${k.cpc} | ${k.cluster} | \`${k.target_url}\` | ${k.score} |`).join("\n")}

### Wave 2 Actions:
1. Create new landing pages for uncovered keyword clusters
2. Publish 2-3 blog posts per week targeting informational keywords
3. Build topic clusters (pillar page + supporting content)
4. Start backlink building: industry directories, guest posts, PR
5. Launch LinkedIn content strategy driving organic traffic

---

## WAVE 3: Authority Building (Month 4-8)
**${waves["Wave 3"].length} keywords** — Need domain authority

### Top 20 Wave 3 Targets:
| Keyword | Volume | CPC | Cluster | Target URL | Score |
|---------|--------|-----|---------|------------|-------|
${waves["Wave 3"].slice(0, 20).map(k => `| ${k.keyword} | ${k.search_volume.toLocaleString()} | $${k.cpc} | ${k.cluster} | \`${k.target_url}\` | ${k.score} |`).join("\n")}

### Wave 3 Actions:
1. Publish industry reports and whitepapers (linkable assets)
2. Launch commodity market intelligence content (link magnet)
3. Secure features in industry publications
4. Build relationships with industry associations for backlinks
5. Create video content series for YouTube SEO

---

## WAVE 4: Competitive Dominance (Month 8-12)
**${waves["Wave 4"].length} keywords** — Head terms requiring sustained effort

### Top 20 Wave 4 Targets:
| Keyword | Volume | CPC | Cluster | Target URL | Score |
|---------|--------|-----|---------|------------|-------|
${waves["Wave 4"].slice(0, 20).map(k => `| ${k.keyword} | ${k.search_volume.toLocaleString()} | $${k.cpc} | ${k.cluster} | \`${k.target_url}\` | ${k.score} |`).join("\n")}

### Wave 4 Actions:
1. Continuously update and expand top-performing content
2. Build comprehensive resource hubs for each cluster
3. A/B test titles and meta descriptions for CTR optimization
4. Technical SEO deep-dive (Core Web Vitals, structured data)
5. Pursue high-authority backlinks from major industry sites

---

## Files Generated
- \`MASTER-KEYWORD-LIST.json\` — Full scored keyword list (${masterList.length} keywords)
- \`MASTER-KEYWORD-LIST.csv\` — Spreadsheet-ready export
- \`CLUSTER-SUMMARY.json\` — Cluster-level analytics
- \`RANKING-ATTACK-PLAN.md\` — This document

`;

fs.writeFileSync(path.join(outputDir, "RANKING-ATTACK-PLAN.md"), md);

// ── Console summary ───────────────────────────────────────
console.log("═══════════════════════════════════════════════════════════");
console.log("  ✅ MASTER KEYWORD LIST & RANKING PLAN GENERATED");
console.log("═══════════════════════════════════════════════════════════\n");
console.log(`  Total keywords scored: ${masterList.length.toLocaleString()}`);
console.log(`  Clusters identified: ${Object.keys(clusterSummary).length}`);
console.log(`  Wave 1 (Quick Wins): ${waves["Wave 1"].length} keywords`);
console.log(`  Wave 2 (Medium):     ${waves["Wave 2"].length} keywords`);
console.log(`  Wave 3 (Authority):  ${waves["Wave 3"].length} keywords`);
console.log(`  Wave 4 (Dominance):  ${waves["Wave 4"].length} keywords`);
console.log(`\n  Files saved to: ${outputDir}/`);
console.log(`  - MASTER-KEYWORD-LIST.json`);
console.log(`  - MASTER-KEYWORD-LIST.csv`);
console.log(`  - CLUSTER-SUMMARY.json`);
console.log(`  - RANKING-ATTACK-PLAN.md`);
