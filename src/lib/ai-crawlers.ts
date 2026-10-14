/**
 * Known AI / LLM-related user agents for robots.txt policies.
 * Easy to extend or delete — driven by siteConfig.aiCrawlerPolicy.
 */

/** Bots primarily used for model training / data collection. */
export const AI_TRAINING_BOTS = [
  "GPTBot",
  "Google-Extended",
  "CCBot",
  "anthropic-ai",
  "ClaudeBot",
  "Bytespider",
  "Applebot-Extended",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "meta-externalagent",
] as const;

/** Broader AI assistant / answer-engine crawlers (includes training bots). */
export const AI_ALL_BOTS = [
  ...AI_TRAINING_BOTS,
  "ChatGPT-User",
  "PerplexityBot",
  "FacebookBot",
  "Omgilibot",
] as const;
