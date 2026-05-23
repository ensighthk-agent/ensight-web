const copy = {
  en: {
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.contact": "Contact",
    "hero.eyebrow": "AI-native applications from Hong Kong",
    "hero.title": "Building intelligent software for companies operating across markets.",
    "hero.text":
      "Ensight HK designs and develops AI-native applications, agentic workflows, and modern digital systems while helping companies navigate technical trade, compliance, and market-entry questions between Mainland China and global markets.",
    "hero.cta": "Start a conversation",
    "hero.secondary": "View services",
    "hero.metricA": "R&D",
    "hero.metricAText": "AI-native products",
    "hero.metricB": "HK",
    "hero.metricBText": "Cross-border gateway",
    "services.eyebrow": "What we do",
    "services.title": "AI product engineering with cross-border context",
    "services.tech.title": "Technology R&D and Consulting",
    "services.tech.text":
      "We build AI-native applications, agent-assisted workflows, and robust system architectures, pairing software development with technical feasibility analysis for enterprise transformation.",
    "services.cross.title": "Cross-Border Business Solutions",
    "services.cross.text":
      "Using Hong Kong's advantages as a free trade port, we advise Mainland and overseas companies on technology trade, cross-border data compliance, and market-entry strategy.",
    "approach.eyebrow": "How we work",
    "approach.title": "From AI opportunity to usable product.",
    "approach.itemA.title": "Evaluate",
    "approach.itemA.text":
      "Identify where AI can create durable leverage, then clarify data, model, workflow, compliance, and commercial assumptions before committing resources.",
    "approach.itemB.title": "Design",
    "approach.itemB.text":
      "Shape AI application architecture, delivery roadmap, and partner strategy around the realities of cross-border operations.",
    "approach.itemC.title": "Deliver",
    "approach.itemC.text":
      "Develop, integrate, and iterate intelligent applications with pragmatic engineering discipline and market-aware execution support.",
    "contact.eyebrow": "Contact",
    "contact.title": "Bring us the problem you are trying to unlock.",
    "contact.company": "ENSIGHT (Hong Kong) Technology Limited",
    "contact.address": "Unit 1507C, 15/F, Eastcore, 398 Kwun Tong Road, Kwun Tong, Kowloon, Hong Kong",
    "footer.text": "AI-native applications · Cross-border solutions",
  },
  zh: {
    "nav.services": "服务",
    "nav.approach": "方法",
    "nav.contact": "联系",
    "hero.eyebrow": "立足香港的 AI 原生应用",
    "hero.title": "为跨市场运营的企业构建智能软件。",
    "hero.text":
      "Ensight HK 设计并开发 AI 原生应用、智能体工作流与现代数字化系统，同时协助企业处理内地与海外市场之间的技术贸易、合规与市场准入问题。",
    "hero.cta": "开始沟通",
    "hero.secondary": "查看服务",
    "hero.metricA": "研发",
    "hero.metricAText": "AI 原生产品",
    "hero.metricB": "香港",
    "hero.metricBText": "跨境业务枢纽",
    "services.eyebrow": "我们的服务",
    "services.title": "具备跨境视角的 AI 产品工程",
    "services.tech.title": "科技研发与咨询",
    "services.tech.text":
      "构建 AI 原生应用、智能体辅助工作流与稳健系统架构，并结合软件开发与技术可行性分析，助力企业智能化转型。",
    "services.cross.title": "跨境商务解决方案",
    "services.cross.text":
      "利用香港自由贸易港优势，为内地与海外企业提供技术贸易、跨境数据合规咨询及市场准入策略。",
    "approach.eyebrow": "工作方式",
    "approach.title": "从 AI 机会到可用产品。",
    "approach.itemA.title": "评估",
    "approach.itemA.text": "识别 AI 可持续创造价值的场景，并在投入资源前厘清数据、模型、流程、合规与商业假设。",
    "approach.itemB.title": "设计",
    "approach.itemB.text": "围绕跨境运营现实，制定 AI 应用架构、交付路线与合作策略。",
    "approach.itemC.title": "交付",
    "approach.itemC.text": "以务实工程方法与市场视角，开发、集成并迭代智能应用。",
    "contact.eyebrow": "联系我们",
    "contact.title": "把你想突破的问题带给我们。",
    "contact.company": "恩視（香港）科技有限公司",
    "contact.address": "香港九龙观塘观塘道398号Eastcore 15楼1507C室",
    "footer.text": "AI 原生应用 · 跨境解决方案",
  },
};

const toggle = document.querySelector("#languageToggle");
const translatable = document.querySelectorAll("[data-i18n]");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = copy[language][key];
  });
  toggle.textContent = language === "en" ? "中文" : "English";
}

toggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "zh" : "en");
});

setLanguage(currentLanguage);
