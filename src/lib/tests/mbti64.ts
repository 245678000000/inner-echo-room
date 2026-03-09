import { TestConfig } from "./types";

const mbti64Questions = [
  { id: 1, text: "周末你更想怎么度过？", type: "single" as const, dimension: "EI", options: [{ text: "约朋友聚餐、逛街或参加活动", value: "E" }, { text: "在家看剧、看书或打游戏", value: "I" }] },
  { id: 2, text: "参加一个大型聚会后，你通常感觉：", type: "single" as const, dimension: "EI", options: [{ text: "精力充沛，意犹未尽", value: "E" }, { text: "需要独处充电，有点累", value: "I" }] },
  { id: 3, text: "在团队讨论中，你更倾向于：", type: "single" as const, dimension: "EI", options: [{ text: "积极发言，享受头脑风暴", value: "E" }, { text: "先倾听思考，再有选择地表达", value: "I" }] },
  { id: 4, text: "认识新朋友时，你通常：", type: "single" as const, dimension: "EI", options: [{ text: "很快就能聊得火热", value: "E" }, { text: "需要慢慢熟悉才打开话匣", value: "I" }] },
  { id: 5, text: "你更喜欢的工作环境是：", type: "single" as const, dimension: "EI", options: [{ text: "开放式工位，随时可以和同事交流", value: "E" }, { text: "安静的独立空间，减少打扰", value: "I" }] },
  { id: 6, text: "遇到烦心事时，你更倾向于：", type: "single" as const, dimension: "EI", options: [{ text: "找朋友倾诉，聊完就舒服了", value: "E" }, { text: "自己消化，写日记或独处想清楚", value: "I" }] },
  { id: 7, text: "你在微信群里一般：", type: "single" as const, dimension: "EI", options: [{ text: "经常主动发起话题、分享动态", value: "E" }, { text: "潜水为主，偶尔冒泡", value: "I" }] },

  { id: 8, text: "描述一道菜时，你更关注：", type: "single" as const, dimension: "SN", options: [{ text: "用了什么食材、什么口感、几成熟", value: "S" }, { text: "整体氛围、灵感来源、像什么风格", value: "N" }] },
  { id: 9, text: "做旅行计划时，你倾向于：", type: "single" as const, dimension: "SN", options: [{ text: "查攻略、订行程、精确到每个景点", value: "S" }, { text: "定个大方向就出发，随心探索", value: "N" }] },
  { id: 10, text: "你对以下哪种课更感兴趣？", type: "single" as const, dimension: "SN", options: [{ text: "实操技能课（如烹饪、摄影技巧）", value: "S" }, { text: "思维拓展课（如哲学、未来趋势）", value: "N" }] },
  { id: 11, text: "工作中你更擅长：", type: "single" as const, dimension: "SN", options: [{ text: "处理具体事务，注重细节和流程", value: "S" }, { text: "提出创新想法，看到全局和可能性", value: "N" }] },
  { id: 12, text: "读一段文字时，你更自然地：", type: "single" as const, dimension: "SN", options: [{ text: "逐字理解，关注具体信息", value: "S" }, { text: "快速抓重点，联想到其他事物", value: "N" }] },
  { id: 13, text: "你在淘宝买东西时更看重：", type: "single" as const, dimension: "SN", options: [{ text: "参数、评价、性价比对比", value: "S" }, { text: "颜值、品牌调性、是否符合自己风格", value: "N" }] },
  { id: 14, text: "你看一部电影后更喜欢讨论：", type: "single" as const, dimension: "SN", options: [{ text: "剧情细节、演员表演、特效好不好", value: "S" }, { text: "深层主题、象征意义、导演想表达什么", value: "N" }] },

  { id: 15, text: "朋友跟你吐槽领导不公平，你第一反应：", type: "single" as const, dimension: "TF", options: [{ text: "帮ta分析情况，看看客观上怎么解决", value: "T" }, { text: "先安慰ta的情绪，站在ta这边", value: "F" }] },
  { id: 16, text: "团队做决定时，你更看重：", type: "single" as const, dimension: "TF", options: [{ text: "逻辑和数据，什么方案效率最高", value: "T" }, { text: "大家的感受，有没有人会不开心", value: "F" }] },
  { id: 17, text: "看到网上的争论，你更倾向于：", type: "single" as const, dimension: "TF", options: [{ text: "理性分析谁的论据更站得住脚", value: "T" }, { text: "关注当事人的感受和立场", value: "F" }] },
  { id: 18, text: "给朋友提建议时，你会：", type: "single" as const, dimension: "TF", options: [{ text: "直说问题在哪，怎么改进", value: "T" }, { text: "先肯定再委婉提出，照顾对方感受", value: "F" }] },
  { id: 19, text: "你更认同哪种说法？", type: "single" as const, dimension: "TF", options: [{ text: "真相比面子重要，对事不对人", value: "T" }, { text: "和谐比正确重要，做人比做事重要", value: "F" }] },
  { id: 20, text: "做一个重要选择（如换工作）时：", type: "single" as const, dimension: "TF", options: [{ text: "列出利弊表格，理性分析", value: "T" }, { text: "跟随内心感觉，看哪个让自己更兴奋", value: "F" }] },

  { id: 21, text: "你的手机备忘录/日历：", type: "single" as const, dimension: "JP", options: [{ text: "排得井井有条，经常查看", value: "J" }, { text: "偶尔记一下，更多靠脑子记", value: "P" }] },
  { id: 22, text: "deadline前你通常：", type: "single" as const, dimension: "JP", options: [{ text: "提前完成，留出检查时间", value: "J" }, { text: "deadline就是第一生产力，最后冲刺", value: "P" }] },
  { id: 23, text: "你的房间/桌面一般是：", type: "single" as const, dimension: "JP", options: [{ text: "整洁有序，东西各就各位", value: "J" }, { text: "有点乱但我知道东西在哪", value: "P" }] },
  { id: 24, text: "和朋友约饭，你希望：", type: "single" as const, dimension: "JP", options: [{ text: "提前定好时间地点和餐厅", value: "J" }, { text: "到时候看心情，临时决定", value: "P" }] },
  { id: 25, text: "你更享受一件事的哪个阶段？", type: "single" as const, dimension: "JP", options: [{ text: "完成的成就感，打勾的快乐", value: "J" }, { text: "开始和过程中的探索感", value: "P" }] },
  { id: 26, text: "你购物时更像：", type: "single" as const, dimension: "JP", options: [{ text: "有清单，买完就走", value: "J" }, { text: "边逛边看，容易被新东西吸引", value: "P" }] },

  { id: 27, text: "面对人生重大选择时，你更倾向于：", type: "single" as const, dimension: "DA", options: [{ text: "快速做出决定，选了就不回头", value: "D" }, { text: "反复考虑各种可能性，迟迟难以下决心", value: "A" }] },
  { id: 28, text: "点餐时你通常：", type: "single" as const, dimension: "DA", options: [{ text: "看一眼菜单就知道要什么", value: "D" }, { text: "翻来覆去看好久，最后可能还问服务员推荐", value: "A" }] },
  { id: 29, text: "有两个都不错的offer，你会：", type: "single" as const, dimension: "DA", options: [{ text: "设一个deadline给自己，到时间就选", value: "D" }, { text: "一直权衡到最后，甚至选了还在想另一个", value: "A" }] },
  { id: 30, text: "朋友约你周末出去玩但没说去哪：", type: "single" as const, dimension: "DA", options: [{ text: "秒回「好！几点出发？」", value: "D" }, { text: "先问清楚去哪、几个人、做什么再决定", value: "A" }] },
  { id: 31, text: "买东西时遇到两个都喜欢的：", type: "single" as const, dimension: "DA", options: [{ text: "果断选一个，错过就错过", value: "D" }, { text: "纠结很久，或者干脆两个都买/都不买", value: "A" }] },
  { id: 32, text: "别人问你「你想吃什么」你通常：", type: "single" as const, dimension: "DA", options: [{ text: "马上说出一个选择", value: "D" }, { text: "「随便」「都行」「你决定吧」", value: "A" }] },
  { id: 33, text: "做了一个决定后：", type: "single" as const, dimension: "DA", options: [{ text: "很少后悔，向前看", value: "D" }, { text: "经常回想当初选另一个会不会更好", value: "A" }] },

  { id: 34, text: "和不太熟的人相处时：", type: "single" as const, dimension: "WC", options: [{ text: "会主动关心对方、制造话题，让气氛温暖", value: "W" }, { text: "保持礼貌距离，不会太主动热情", value: "C" }] },
  { id: 35, text: "朋友心情不好找你：", type: "single" as const, dimension: "WC", options: [{ text: "会给一个拥抱、陪着、说很多安慰的话", value: "W" }, { text: "安静陪着就好，不会说太多煽情的话", value: "C" }] },
  { id: 36, text: "你发微信的风格：", type: "single" as const, dimension: "WC", options: [{ text: "常用语气词和表情包，语气很亲切", value: "W" }, { text: "比较简洁直接，不太用表情包", value: "C" }] },
  { id: 37, text: "别人第一次见你的感觉通常是：", type: "single" as const, dimension: "WC", options: [{ text: "好亲切/好好说话/很容易亲近", value: "W" }, { text: "有点酷/有距离感/不太好接近", value: "C" }] },
  { id: 38, text: "对待刚认识的人：", type: "single" as const, dimension: "WC", options: [{ text: "会记住对方的名字和细节，下次见面主动提起", value: "W" }, { text: "保持基本礼貌但不会太上心", value: "C" }] },
  { id: 39, text: "在社交场合你更倾向于：", type: "single" as const, dimension: "WC", options: [{ text: "主动关心每个人的状态", value: "W" }, { text: "做好自己的事，被需要时才回应", value: "C" }] },
  { id: 40, text: "你表达喜欢一个人的方式更接近：", type: "single" as const, dimension: "WC", options: [{ text: "直接说出来，经常表达关心和喜爱", value: "W" }, { text: "默默关注，用行动而非语言表达", value: "C" }] },
];

function calculateMbti64(answers: Record<number, number | string>): string {
  const dims: Record<string, Record<string, number>> = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
    DA: { D: 0, A: 0 },
    WC: { W: 0, C: 0 },
  };

  mbti64Questions.forEach((q) => {
    const ans = answers[q.id];
    if (ans && q.dimension && dims[q.dimension]) {
      dims[q.dimension][ans as string] = (dims[q.dimension][ans as string] || 0) + 1;
    }
  });

  const e = dims.EI.E >= dims.EI.I ? "E" : "I";
  const s = dims.SN.S >= dims.SN.N ? "S" : "N";
  const t = dims.TF.T >= dims.TF.F ? "T" : "F";
  const j = dims.JP.J >= dims.JP.P ? "J" : "P";
  const d = dims.DA.D >= dims.DA.A ? "D" : "A";
  const w = dims.WC.W >= dims.WC.C ? "W" : "C";

  return `${e}${s}${t}${j}_${d}${w}`;
}

const resultTypes: Record<string, { title: string; subtitle: string; emoji: string; badgeColor: string; description: string; strengths: string[]; weaknesses: string[]; careerAdvice: string; loveAdvice: string; famousPeople: string[] }> = {};

const baseTypes: Record<string, { title: string; emoji: string; badgeColor: string }> = {
  INTJ: { title: "建筑师", emoji: "🏛️", badgeColor: "bg-purple-600" },
  INTP: { title: "逻辑学家", emoji: "🔬", badgeColor: "bg-blue-600" },
  ENTJ: { title: "指挥官", emoji: "👑", badgeColor: "bg-red-600" },
  ENTP: { title: "辩论家", emoji: "⚡", badgeColor: "bg-orange-500" },
  INFJ: { title: "提倡者", emoji: "🌌", badgeColor: "bg-teal-600" },
  INFP: { title: "调停者", emoji: "🦋", badgeColor: "bg-indigo-500" },
  ENFJ: { title: "主人公", emoji: "🌟", badgeColor: "bg-emerald-600" },
  ENFP: { title: "竞选者", emoji: "🎉", badgeColor: "bg-yellow-500" },
  ISTJ: { title: "物流师", emoji: "📋", badgeColor: "bg-slate-600" },
  ISFJ: { title: "守卫者", emoji: "🛡️", badgeColor: "bg-sky-600" },
  ESTJ: { title: "总经理", emoji: "💼", badgeColor: "bg-amber-700" },
  ESFJ: { title: "执政官", emoji: "💝", badgeColor: "bg-pink-500" },
  ISTP: { title: "鉴赏家", emoji: "🔧", badgeColor: "bg-zinc-600" },
  ISFP: { title: "探险家", emoji: "🎨", badgeColor: "bg-rose-500" },
  ESTP: { title: "企业家", emoji: "🎯", badgeColor: "bg-red-500" },
  ESFP: { title: "表演者", emoji: "🎤", badgeColor: "bg-fuchsia-500" },
};

const subLabels: Record<string, { label: string; desc: string }> = {
  DW: { label: "果断+温暖", desc: "你做事果断、不拖泥带水，同时对身边人充满温暖和关怀。你是那种能快速做决定又不会让人觉得冷漠的人。" },
  DC: { label: "果断+高冷", desc: "你做事雷厉风行，决策速度极快，同时保持着适当的距离感。你像一把锋利的剑——高效、精准、不废话。" },
  AW: { label: "纠结+温暖", desc: "你做决定时会反复思考，但你对人总是充满温度。你的纠结源于你在乎太多人的感受，想要面面俱到。" },
  AC: { label: "纠结+高冷", desc: "你做决定时需要充分思考，同时不太会主动表达情感。你的内心丰富但表面平静，像一座深不见底的湖。" },
};

const base16 = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
const sub4 = ["DW", "DC", "AW", "AC"];

base16.forEach((b) => {
  const bt = baseTypes[b];
  sub4.forEach((s) => {
    const sl = subLabels[s];
    const key = `${b}_${s}`;
    resultTypes[key] = {
      title: `${bt.title} · ${sl.label}型`,
      subtitle: `${b}-${s}`,
      emoji: bt.emoji,
      badgeColor: bt.badgeColor,
      description: `你的基础人格是${b}（${bt.title}），在64型扩展维度上属于${sl.label}型。${sl.desc}`,
      strengths: [
        `具备${bt.title}的核心优势`,
        s.includes("D") ? "决策果断，行动力强" : "思考全面，考虑周到",
        s.includes("W") ? "待人温暖，人缘好" : "独立冷静，不受干扰",
        "自我认知清晰",
      ],
      weaknesses: [
        s.includes("D") ? "有时决定过快，忽略细节" : "容易犹豫不决，错失机会",
        s.includes("W") ? "可能过度在意他人感受" : "可能被认为不好接近",
        "在压力下可能放大自身弱点",
        "需要学会平衡两个新维度",
      ],
      careerAdvice: `作为${bt.title}·${sl.label}型，你适合需要${s.includes("D") ? "快速决策" : "深度思考"}和${s.includes("W") ? "人际互动" : "独立工作"}的岗位。发挥你${b}的核心特质，同时利用${sl.label}的优势。`,
      loveAdvice: s.includes("W")
        ? "你在感情中很会照顾人，记得也要表达自己的需求，别总是迁就对方。"
        : "你在感情中比较内敛，试着多表达你的在乎，对方需要感受到你的温度。",
      famousPeople: [`${bt.title}型名人`, "更多64型人格分析敬请期待"],
    };
  });
});

export const mbti64Test: TestConfig = {
  id: "mbti64",
  name: "MBTI 64型人格测试",
  description: "16型升级版！新增果断/纠结+温暖/高冷维度，更精准揭秘隐藏性格",
  duration: "约8分钟",
  questionCount: 40,
  questions: mbti64Questions,
  scoringRules: "在经典MBTI四维度（E/I、S/N、T/F、J/P）基础上，新增果断/纠结（D/A）和温暖/高冷（W/C）两个维度，组合成64种人格类型。",
  disclaimer: "本测试为娱乐版64型人格测试，在经典MBTI基础上增加了两个自创维度，仅供自我探索参考。",
  calculateResult: calculateMbti64,
  resultMapping: resultTypes,
};
