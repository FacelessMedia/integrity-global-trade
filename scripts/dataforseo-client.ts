/**
 * DataForSEO API Client
 * Used for keyword research and competitor analysis
 * Docs: https://docs.dataforseo.com/v3/
 */

import * as https from "https";

interface DataForSEOConfig {
  login: string;
  password: string;
}

interface KeywordData {
  keyword: string;
  search_volume: number;
  cpc: number;
  competition: number;
  competition_level: string;
  monthly_searches: Array<{ month: number; year: number; search_volume: number }>;
}

interface CompetitorData {
  domain: string;
  organic_keywords: number;
  organic_traffic: number;
  organic_cost: number;
}

interface SerpResult {
  keyword: string;
  position: number;
  domain: string;
  url: string;
  title: string;
  description: string;
}

export class DataForSEOClient {
  private auth: string;
  private baseUrl = "https://api.dataforseo.com/v3";

  constructor(config: DataForSEOConfig) {
    this.auth = Buffer.from(`${config.login}:${config.password}`).toString("base64");
  }

  private async request(endpoint: string, method: string, body?: unknown): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const url = new URL(`${this.baseUrl}${endpoint}`);
      const options = {
        hostname: url.hostname,
        path: url.pathname,
        method,
        headers: {
          Authorization: `Basic ${this.auth}`,
          "Content-Type": "application/json",
        },
      };

      const req = https.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`Failed to parse response: ${data}`));
          }
        });
      });

      req.on("error", reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  }

  /**
   * Get keyword search volume data from Google Ads
   */
  async getKeywordSearchVolume(keywords: string[], locationCode = 2840, languageCode = "en"): Promise<KeywordData[]> {
    const payload = [
      {
        keywords,
        location_code: locationCode, // 2840 = United States
        language_code: languageCode,
      },
    ];

    const response = (await this.request(
      "/keywords_data/google_ads/search_volume/live",
      "POST",
      payload
    )) as { tasks?: Array<{ result?: KeywordData[] }> };

    return response?.tasks?.[0]?.result || [];
  }

  /**
   * Get keyword suggestions/ideas from Google Ads
   */
  async getKeywordSuggestions(
    keyword: string,
    locationCode = 2840,
    languageCode = "en"
  ): Promise<KeywordData[]> {
    const payload = [
      {
        keyword,
        location_code: locationCode,
        language_code: languageCode,
        include_seed_keyword: true,
        limit: 50,
      },
    ];

    const response = (await this.request(
      "/keywords_data/google_ads/keywords_for_keywords/live",
      "POST",
      payload
    )) as { tasks?: Array<{ result?: KeywordData[] }> };

    return response?.tasks?.[0]?.result || [];
  }

  /**
   * Get SERP results for a keyword to identify competitors
   */
  async getSerpResults(keyword: string, locationCode = 2840, languageCode = "en"): Promise<SerpResult[]> {
    const payload = [
      {
        keyword,
        location_code: locationCode,
        language_code: languageCode,
        device: "desktop",
        os: "windows",
        depth: 10,
      },
    ];

    const response = (await this.request(
      "/serp/google/organic/live/regular",
      "POST",
      payload
    )) as { tasks?: Array<{ result?: Array<{ items?: SerpResult[] }> }> };

    return response?.tasks?.[0]?.result?.[0]?.items || [];
  }

  /**
   * Get competitor domain metrics
   */
  async getDomainMetrics(domain: string, locationCode = 2840, languageCode = "en"): Promise<CompetitorData | null> {
    const payload = [
      {
        target: domain,
        location_code: locationCode,
        language_code: languageCode,
      },
    ];

    const response = (await this.request(
      "/dataforseo_labs/google/domain_metrics_by_categories/live",
      "POST",
      payload
    )) as { tasks?: Array<{ result?: CompetitorData[] }> };

    return response?.tasks?.[0]?.result?.[0] || null;
  }

  /**
   * Get keywords that a competitor domain ranks for
   */
  async getCompetitorKeywords(
    domain: string,
    locationCode = 2840,
    languageCode = "en",
    limit = 100
  ): Promise<unknown[]> {
    const payload = [
      {
        target: domain,
        location_code: locationCode,
        language_code: languageCode,
        limit,
        order_by: ["keyword_data.keyword_info.search_volume,desc"],
      },
    ];

    const response = (await this.request(
      "/dataforseo_labs/google/ranked_keywords/live",
      "POST",
      payload
    )) as { tasks?: Array<{ result?: Array<{ items?: unknown[] }> }> };

    return response?.tasks?.[0]?.result?.[0]?.items || [];
  }

  /**
   * Get competitor intersection — find domains that rank for similar keywords
   */
  async getCompetitorsForKeywords(
    keywords: string[],
    locationCode = 2840,
    languageCode = "en"
  ): Promise<unknown[]> {
    const payload = [
      {
        keywords,
        location_code: locationCode,
        language_code: languageCode,
        limit: 20,
      },
    ];

    const response = (await this.request(
      "/dataforseo_labs/google/competitors_domain/live",
      "POST",
      payload
    )) as { tasks?: Array<{ result?: Array<{ items?: unknown[] }> }> };

    return response?.tasks?.[0]?.result?.[0]?.items || [];
  }
}
