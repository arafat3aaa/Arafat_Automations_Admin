// ================================================================
//  AUTOMATIONS DATA FILE
//  Edit this file to add, remove, or update automation showcase cards.
//  Each entry will automatically appear on the website.
// ================================================================

const AUTOMATIONS = [
  {
    id: 1,
    icon: "📧",
    tag: "make",
    tagLabel: "Make.com",
    title: "Lead Capture to CRM Pipeline",
    summary: "Automatically captures leads from website forms and sends them to CRM with tagging, email notifications, and Slack alerts.",
    category: "CRM & Email",
    details: "When a visitor fills out any form on the website, this automation captures the data, enriches it with additional info, creates a CRM contact, assigns it to the right sales rep, and sends an instant Slack notification — all in under 3 seconds.",
    features: [
      "Multi-source form capture (Typeform, Gravity Forms, Webflow)",
      "Automatic lead scoring and tagging",
      "CRM contact creation (HubSpot / Pipedrive)",
      "Slack + Email notifications for the team",
      "Duplicate detection and merging"
    ],
    tools: ["Make.com", "HubSpot", "Slack", "Gmail"],
  },
  {
    id: 2,
    icon: "🤖",
    tag: "ai",
    tagLabel: "AI",
    title: "AI Content Repurposing System",
    summary: "Transforms long-form blog posts into Twitter threads, LinkedIn posts, and email newsletters automatically using GPT-4.",
    category: "Content & AI",
    details: "Feed this automation a blog URL and it will read the article, rewrite it in 3 different formats (Twitter thread, LinkedIn post, email newsletter), schedule them across platforms, and log results to a Google Sheet — completely hands-free.",
    features: [
      "Automatic blog article extraction",
      "GPT-4 powered content rewriting",
      "Multi-platform scheduling (Buffer / Hootsuite)",
      "Google Sheets content calendar logging",
      "Brand voice customization via prompt engineering"
    ],
    tools: ["Make.com", "OpenAI GPT-4", "Buffer", "Google Sheets"],
  },
  {
    id: 3,
    icon: "🛒",
    tag: "zapier",
    tagLabel: "Zapier",
    title: "eCommerce Order Fulfillment Bot",
    summary: "Automatically processes new orders, updates inventory, sends branded customer receipts, and notifies the warehouse team.",
    category: "eCommerce",
    details: "As soon as an order is placed on Shopify, this automation kicks in: it updates inventory in real-time, sends a beautiful branded receipt email, notifies the fulfillment center via SMS, and logs the order to an Airtable dashboard.",
    features: [
      "Real-time Shopify order triggers",
      "Inventory management and low-stock alerts",
      "Custom branded email receipts",
      "SMS/Telegram warehouse notifications",
      "Airtable order dashboard logging"
    ],
    tools: ["Zapier", "Shopify", "Klaviyo", "Airtable", "Twilio"],
  },
  {
    id: 4,
    icon: "📊",
    tag: "n8n",
    tagLabel: "n8n",
    title: "Automated Weekly Business Report",
    summary: "Pulls data from multiple platforms every Monday morning and delivers a formatted PDF business report to stakeholders.",
    category: "Reporting",
    details: "Every Monday at 8am, this n8n workflow fetches KPIs from Google Analytics, Stripe, HubSpot, and social media. It formats everything into a clean PDF report and emails it to the executive team — saving 4+ hours of manual work per week.",
    features: [
      "Multi-source data aggregation",
      "Automatic PDF report generation",
      "Data visualization with charts",
      "Scheduled Monday morning delivery",
      "Custom KPI dashboards per department"
    ],
    tools: ["n8n", "Google Analytics", "Stripe", "HubSpot", "Markdown PDF"],
  },
  {
    id: 5,
    icon: "🔍",
    tag: "python",
    tagLabel: "Python",
    title: "Web Scraper + AI Analyzer",
    summary: "Scrapes competitor prices and product data daily, runs AI analysis, and sends a summary report to your inbox every morning.",
    category: "Data & AI",
    details: "A Python script runs on a schedule, scrapes competitor websites for pricing data, feeds the results to Claude AI for market analysis, and delivers a concise competitive intelligence report to your email every morning before you start your day.",
    features: [
      "Multi-site web scraping with rotating proxies",
      "Anti-detection mechanisms (stealth headers)",
      "AI-powered market analysis with Claude",
      "Price change alerting (Telegram + Email)",
      "Historical data tracking in SQLite"
    ],
    tools: ["Python", "BeautifulSoup", "Claude API", "SQLite", "Gmail SMTP"],
  },
  {
    id: 6,
    icon: "💬",
    tag: "ai",
    tagLabel: "AI",
    title: "AI Customer Support Bot",
    summary: "A smart chatbot that handles 80% of customer inquiries automatically using your knowledge base — escalating only complex cases.",
    category: "Customer Support",
    details: "Built on your existing FAQ docs and help articles, this AI bot answers customer questions instantly via website chat, WhatsApp, or Telegram. It handles returns, order status, product questions, and more — only escalating genuinely complex issues to your human team.",
    features: [
      "Custom knowledge base training on your docs",
      "Multi-channel deployment (Web, WhatsApp, Telegram)",
      "Human escalation with full conversation history",
      "Sentiment detection for frustrated customers",
      "Automatic ticket creation in Freshdesk / Zendesk"
    ],
    tools: ["Make.com", "OpenAI", "WhatsApp Business API", "Freshdesk"],
  },
];
