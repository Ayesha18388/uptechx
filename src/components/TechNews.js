import React, { useEffect, useState } from "react";
import "./TechNews.css";

const staticNewsArticles = [
  {
    id: "static1",
    title: "Google Introduces Gemini Widgets to iOS Devices",
    description:
      "Google has launched lockscreen widgets for its Gemini app on iOS and iPadOS, aiming to provide quick access to AI assistant features and challenge Siri's dominance.",
    source: "The Verge",
    publishedDate: "March 4, 2025",
    link: "https://www.theverge.com/news/623117/google-gemini-ios-widgets-now-available",
  },
  {
    id: "static2",
    title: "Deutsche Telekom Develops AI-Powered 'Magenta AI' Phone",
    description:
      "At MWC 2025, Deutsche Telekom announced an AI Phone featuring 'Magenta AI' with Perplexity Assistant, Google Cloud AI, and other tools, aiming to enhance voice-controlled tasks.",
    source: "The Verge",
    publishedDate: "March 4, 2025",
    link: "https://www.theverge.com/news/623164/t-mobile-ai-phone-perplexity-assistant-mwc-2025",
  },
  {
    id: "static3",

    title: "Google Introduces Gemini Widgets to iOS Devices",
    description:
      "Google has launched lockscreen widgets for its Gemini app on iOS and iPadOS, aiming to provide quick access to AI assistant features and challenge Siri's dominance.",
    source: "The Verge",
    publishedDate: "March 4, 2025",
    link: "https://www.theverge.com/news/623117/google-gemini-ios-widgets-now-available?utm_source=chatgpt.com",
  },
  {
    id: "static4",
    title: "Deutsche Telekom Develops AI-Powered 'Magenta AI' Phone",
    description:
      "At MWC 2025, Deutsche Telekom announced an AI Phone featuring 'Magenta AI' with Perplexity Assistant, Google Cloud AI, and other tools, aiming to enhance voice-controlled tasks.",
    source: "The Verge",
    publishedDate: "March 4, 2025",
    link: "https://www.theverge.com/news/623164/t-mobile-ai-phone-perplexity-assistant-mwc-2025?utm_source=chatgpt.com",
  },
  {
    id: "static5",
    title: "SwitchBot Launches Adjustable Smart Roller Shades",
    description:
      "SwitchBot introduced smart roller shades that can be adjusted post-purchase to fit various window sizes, featuring Bluetooth connectivity and compatibility with Matter.",
    source: "The Verge",
    publishedDate: "March 4, 2025",
    link: "https://www.theverge.com/news/623000/switchbot-smart-roller-shades-adjustable-price-release-date-specs?utm_source=chatgpt.com",
  },
  {
    id: "static6",
    title: "Firefly Aerospace Achieves First Private Moon Landing",
    description:
      "Firefly Aerospace's Blue Ghost lunar module successfully landed on the Moon, marking the first private company's achievement of this milestone and supporting NASA's Artemis program.",
    source: "Wired",
    publishedDate: "March 4, 2025",
    link: "https://www.wired.com/story/a-private-space-mission-has-successfully-landed-on-the-moon-for-the-first-time-blue-ghost-firefly-aerospace?utm_source=chatgpt.com",
  },
  {
    id: "static7",
    title: "India's ISRO Plans Gaganyaan Human Spaceflight Mission",
    description:
      "The Indian Space Research Organisation (ISRO) is progressing with its Gaganyaan mission, aiming to send Indian astronauts to space, with preparations underway for the first crewed test flight.",
    source: "ISRO",
    publishedDate: "March 4, 2025",
    link: "#",
  },
  {
    id: "static8",
    title: "Technology News - Gadgets - The Indian Express",
    description:
      "The Indian Express reports on Google's push for AGI development and Mozilla Firefox's new PPA feature, developed in collaboration with partners.",
    source: "The Indian Express",
    publishedDate: "March 3, 2025",
    link: "https://indianexpress.com/section/technology/",
  },
  {
    id: "static9",
    title: "TechNewsWorld - Technology News and Information",
    description:
      "TechNewsWorld discusses topics such as AI diffusion policies, data center energy efficiency, and debates on redefining open source to accommodate AI developments.",
    source: "TechNewsWorld",
    publishedDate: "March 3, 2025",
    link: "https://www.technewsworld.com/",
  },
  {
    id: "static10",
  title: "Reliance Jio Launches 5G Services in Major Indian Cities",
  description:
    "Reliance Jio has expanded its 5G network to several major cities in India, offering faster internet speeds and improved connectivity to urban populations.",
  source: "Reliance Jio",
  publishedDate: "March 4, 2025",
  link: "#",
},
{
    id: "static11",
    title: "Apple's iPhone 16e: A Budget-Friendly Option with Premium Features",
    description:
      "Apple is set to release the iPhone 16e, offering premium features at a more accessible price point, aiming to attract a broader customer base.",
    source: "TechNewsWorld",
    publishedDate: "March 3, 2025",
    link: "https://www.technewsworld.com/article/apple-iphone-16e-budget-friendly-premium-features-2025-03-03/",
  },
  {
    id: "static12",
    title: "AI Agents Revolutionize Personal Tasks in 2025",
    description:
      "In 2025, AI agents have evolved beyond content creation, now handling tasks like travel bookings and online shopping, significantly impacting daily routines.",
    source: "The Wall Street Journal",
    publishedDate: "March 3, 2025",
    link: "https://www.wsj.com/articles/ai-agents-revolutionize-personal-tasks-in-2025-2025-03-03/",
  },
  {
    id: "static13",
    title: "Google's Legal Challenges: Potential Breakup Looms",
    description:
      "Google faces legal hurdles as it is deemed an illegal monopoly, with potential consequences including the breakup of its vast empire.",
    source: "The Guardian",
    publishedDate: "March 3, 2025",
    link: "https://www.theguardian.com/global/2024/dec/27/google-illegal-monopoly-breakup-2025-03-03/",
  },
  {
    id: "static14",
    title: "AI Breakthroughs and Setbacks: A 2024 Review",
    description:
      "A look back at 2024 reveals significant AI advancements that improved lives, alongside challenges such as the underwhelming performance of Apple's Vision Pro headset.",
    source: "Vox",
    publishedDate: "March 3, 2025",
    link: "https://www.vox.com/technology/2024/12/31/2024-ai-breakthroughs-setbacks-review-2025-03-03/",
  },
  {
    id: "static15",
    title: "Amazon's Cloud Business to Invest $8.2 Billion in Indian State in Coming Years",
    description:
      "Amazon Web Services plans to invest approximately $8.2 billion in Maharashtra, India, over the next few years, aiming to enhance local cloud data storage and create employment opportunities.",
    source: "Reuters",
    publishedDate: "March 3, 2025",
    link: "https://www.reuters.com/technology/amazons-cloud-business-invest-82-billion-indian-state-coming-years-2025-03-03/",
  },
  {
    id: "static16",
    title: "Teleperformance Rolls Out AI Software That 'Neutralizes' Indian Accents",
    description:
      "Teleperformance introduces AI-powered technology to modify the accents of Indian customer service agents, aiming to enhance clarity in customer interactions.",
    source: "New York Post",
    publishedDate: "February 27, 2025",
    link: "https://nypost.com/2025/02/27/business/teleperformance-rolls-out-ai-software-that-neutralizes-indian-accents/",
  },
  {
    id: "static17",
    title: "TikTok Seeks a Deal and China Brings a Chip 'Shock'",
    description:
      "TikTok explores potential deals amid global tech tensions, while China's advancements in chip production raise concerns about market stability.",
    source: "Financial Times",
    publishedDate: "February 27, 2025",
    link: "https://www.ft.com/content/a93a861e-4eb6-4919-bb6a-19263a128558",
  },
  {
    id: "static18",
    title: "AI Erases Call Centre Staff's Indian Accents",
    description:"Teleperformance utilizes AI to modify the accents of Indian call center staff in real-time, aiming to improve customer satisfaction and reduce call handling time.",
    source: "The Times",
    publishedDate: "March 3, 2025",
    link: "https://www.thetimes.co.uk/article/ai-erases-call-centre-staffs-indian-accents-gg78rp0kv",
  },
  {
    id: "static19",
    title: "Tech News | Today's Latest Technology News | Reuters",
    description:
      "Reuters provides comprehensive coverage of global technology news, including updates on TSMC's investments and developments in the cryptocurrency sector.",
    source: "Reuters",
    publishedDate: "March 3, 2025",
    link: "https://www.reuters.com/technology/",
  },
  { 
    id: "static20",
    title: "Technology News - Times of India",
    description:
      "The Times of India provides the latest tech news, including updates on mobile phones, laptops, and reviews, covering trends in technology and software updates.",
    source: "Times of India",
    publishedDate: "March 3, 2025",
    link: "https://timesofindia.indiatimes.com/technology",
  },
  {
    id: "static21",
    title: "Biden Administration's AI Diffusion Policy Faces Criticism",
    description:
      "The Biden Administration's policy on regulating AI technology sharing has faced criticism, with debates over its impact on global technological progress.",
    source: "TechNewsWorld",
    publishedDate: "March 3, 2025",
    link: "https://www.technewsworld.com/article/biden-administration-ai-diffusion-policy-criticism-2025-03-03/",
  },
  {
    id: "static22",
    title: "WIRED - The Latest in Technology, Science, Culture and Business",
    description:
      "WIRED covers recent developments, including security news about the Trump administration's stance on Russia as a cyber threat and Elon Musk's Starlink maintaining online presence in modern slavery compounds.",
    source: "WIRED",
    publishedDate: "March 3, 2025",
    link: "https://www.wired.com/",
  },
  {
    id: "static23",
    title: "Technology News - Times of India",
    description:
      "The Times of India provides the latest tech news, including updates on mobile phones, laptops, and reviews, covering trends in technology and software updates.",
    source: "Times of India",
    publishedDate: "March 3, 2025",
    link: "https://timesofindia.indiatimes.com/technology",
  },
  {
    id: "static24",
    title: "TechNewsWorld - Technology News and Information",
    description:
      "TechNewsWorld discusses topics such as AI diffusion policies, data center energy efficiency, and debates on redefining open source to accommodate AI developments.",
    source: "TechNewsWorld",
    publishedDate: "March 3, 2025",
    link: "https://www.technewsworld.com/",
  },
  {
    id: "static25",
    title: "GeekWire – Breaking News in Technology & Business",
    description:
      "GeekWire reports on Microsoft's appeal to the Trump administration to ease chip export restrictions, highlighting concerns over China's potential AI advancements.",
    source: "GeekWire",
    publishedDate: "March 3, 2025",
    link: "https://www.geekwire.com/",
  },
  
];

const TechNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  // Fetch news articles and trends from the backend
  const fetchNewsAndTrends = async () => {
    try {
      const newsRes = await fetch("http://localhost:5000/newsArticles");
      const trendsRes = await fetch("http://localhost:5000/trends");

      if (newsRes.ok && trendsRes.ok) {
        const newsData = await newsRes.json();
        const trendsData = await trendsRes.json();

        const combinedData = [
          ...staticNewsArticles,
          ...newsData,
          ...trendsData.map((trend) => ({
            id: trend.id,
            title: trend.title,
            description: trend.description,
            source: trend.source,
            publishedDate: "N/A",
            link: trend.link,
          })),
        ];

        setNewsArticles(combinedData);
      } else {
        console.error("Failed to fetch news or trends:", newsRes.statusText, trendsRes.statusText);
      }
    } catch (error) {
      console.error("Error fetching news or trends:", error);
      setNewsArticles(staticNewsArticles);
    }
  };

  useEffect(() => {
    fetchNewsAndTrends();
  }, []); // Fetch data when the component mounts

  return (
    <div className="container">
      <h1 className="title">Tech News & Trends</h1>
      <div className="news-list">
        {newsArticles.map((article) => (
          <div key={article.id} className="news-article">
            <h2 className="news-title">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className="news-description">{article.description}</p>
            <p className="news-meta">
              <strong>Source:</strong> {article.source} |{" "}
              <strong>Published on:</strong> {article.publishedDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechNews;