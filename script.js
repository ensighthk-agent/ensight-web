const copy = {
  en: {
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.contact": "Contact",
    "hero.eyebrow": "Technology and cross-border strategy from Hong Kong",
    "hero.title": "Practical technology insight for companies building across markets.",
    "hero.text":
      "Ensight HK helps businesses evaluate, design, and deliver digital systems while navigating technical trade, compliance, and market-entry questions between Mainland China and global markets.",
    "hero.cta": "Start a conversation",
    "hero.secondary": "View services",
    "hero.metricA": "R&D",
    "hero.metricAText": "Software and systems",
    "hero.metricB": "HK",
    "hero.metricBText": "Cross-border gateway",
    "services.eyebrow": "What we do",
    "services.title": "Focused consulting for digital growth",
    "services.tech.title": "Technology R&D and Consulting",
    "services.tech.text":
      "We provide advanced software development, system architecture design, and technical feasibility analysis to support enterprise digital transformation.",
    "services.cross.title": "Cross-Border Business Solutions",
    "services.cross.text":
      "Using Hong Kong's advantages as a free trade port, we advise Mainland and overseas companies on technology trade, cross-border data compliance, and market-entry strategy.",
    "approach.eyebrow": "How we work",
    "approach.title": "Clear analysis, buildable plans, measurable execution.",
    "approach.itemA.title": "Evaluate",
    "approach.itemA.text":
      "Clarify technical requirements, regulatory constraints, and commercial assumptions before committing resources.",
    "approach.itemB.title": "Design",
    "approach.itemB.text":
      "Shape architecture, delivery roadmap, and partner strategy around the realities of cross-border operations.",
    "approach.itemC.title": "Deliver",
    "approach.itemC.text":
      "Support implementation with pragmatic engineering guidance and market-aware execution support.",
    "contact.eyebrow": "Contact",
    "contact.title": "Bring us the problem you are trying to unlock.",
    "contact.company": "ENSIGHT (Hong Kong) Technology Limited",
    "contact.address": "Unit 1507C, 15/F, Eastcore, 398 Kwun Tong Road, Kwun Tong, Kowloon, Hong Kong",
    "footer.text": "Technology R&D · Cross-border solutions",
  },
  zh: {
    "nav.services": "服务",
    "nav.approach": "方法",
    "nav.contact": "联系",
    "hero.eyebrow": "立足香港的科技与跨境策略",
    "hero.title": "为跨市场发展的企业提供务实的技术洞察。",
    "hero.text":
      "Ensight HK 协助企业评估、设计并落地数字化系统，同时处理内地与海外市场之间的技术贸易、合规与市场准入问题。",
    "hero.cta": "开始沟通",
    "hero.secondary": "查看服务",
    "hero.metricA": "研发",
    "hero.metricAText": "软件与系统架构",
    "hero.metricB": "香港",
    "hero.metricBText": "跨境业务枢纽",
    "services.eyebrow": "我们的服务",
    "services.title": "面向数字化增长的专业咨询",
    "services.tech.title": "科技研发与咨询",
    "services.tech.text":
      "提供前沿软件开发、系统架构设计及技术可行性分析，助力企业数字化转型。",
    "services.cross.title": "跨境商务解决方案",
    "services.cross.text":
      "利用香港自由贸易港优势，为内地与海外企业提供技术贸易、跨境数据合规咨询及市场准入策略。",
    "approach.eyebrow": "工作方式",
    "approach.title": "清晰分析、可执行方案、可衡量落地。",
    "approach.itemA.title": "评估",
    "approach.itemA.text": "在投入资源前厘清技术需求、监管约束与商业假设。",
    "approach.itemB.title": "设计",
    "approach.itemB.text": "围绕跨境运营现实，制定系统架构、交付路线与合作策略。",
    "approach.itemC.title": "交付",
    "approach.itemC.text": "以务实工程建议与市场视角支持项目执行。",
    "contact.eyebrow": "联系我们",
    "contact.title": "把你想突破的问题带给我们。",
    "contact.company": "恩視（香港）科技有限公司",
    "contact.address": "香港九龙观塘观塘道398号Eastcore 15楼1507C室",
    "footer.text": "科技研发 · 跨境解决方案",
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
