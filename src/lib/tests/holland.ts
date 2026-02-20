import { TestConfig } from "./types";

const likertOptions = [
  { text: "非常不感兴趣", value: 1 },
  { text: "不太感兴趣", value: 2 },
  { text: "一般", value: 3 },
  { text: "比较感兴趣", value: 4 },
  { text: "非常感兴趣", value: 5 },
];

const questions = [
  // R - 实际型 (5题)
  { id: 1, text: "自己动手组装家具或修理电器。", dimension: "R" },
  { id: 2, text: "在户外种花种菜或做园艺。", dimension: "R" },
  { id: 3, text: "操作机器设备或使用工具制作东西。", dimension: "R" },
  { id: 4, text: "做体力型的运动，如登山、游泳、健身。", dimension: "R" },
  { id: 5, text: "修理自行车、汽车或其他机械设备。", dimension: "R" },

  // I - 研究型 (5题)
  { id: 6, text: "阅读科学类书籍或文章。", dimension: "I" },
  { id: 7, text: "进行实验或数据分析来验证一个想法。", dimension: "I" },
  { id: 8, text: "研究一个复杂的问题直到找到答案。", dimension: "I" },
  { id: 9, text: "了解最新的科技发展和发明。", dimension: "I" },
  { id: 10, text: "用逻辑和证据来分析社会现象。", dimension: "I" },

  // A - 艺术型 (5题)
  { id: 11, text: "画画、写作、摄影或其他艺术创作。", dimension: "A" },
  { id: 12, text: "欣赏音乐、戏剧或美术展览。", dimension: "A" },
  { id: 13, text: "设计海报、PPT或视频剪辑。", dimension: "A" },
  { id: 14, text: "写诗、写小说或创作剧本。", dimension: "A" },
  { id: 15, text: "装饰房间或设计自己的穿搭风格。", dimension: "A" },

  // S - 社会型 (5题)
  { id: 16, text: "参加志愿者活动帮助有需要的人。", dimension: "S" },
  { id: 17, text: "倾听朋友的烦恼并给出建议。", dimension: "S" },
  { id: 18, text: "组织团队活动或社交聚会。", dimension: "S" },
  { id: 19, text: "教别人学习新知识或新技能。", dimension: "S" },
  { id: 20, text: "参与社区服务或公益项目。", dimension: "S" },

  // E - 企业型 (5题)
  { id: 21, text: "说服别人接受你的想法或方案。", dimension: "E" },
  { id: 22, text: "领导一个团队完成项目目标。", dimension: "E" },
  { id: 23, text: "参加辩论赛或做公开演讲。", dimension: "E" },
  { id: 24, text: "策划和推动一个新的商业计划。", dimension: "E" },
  { id: 25, text: "在团队中担任决策和管理角色。", dimension: "E" },

  // C - 常规型 (5题)
  { id: 26, text: "整理和归类文件、数据或物品。", dimension: "C" },
  { id: 27, text: "按照流程和规则完成工作任务。", dimension: "C" },
  { id: 28, text: "记录和管理财务账目。", dimension: "C" },
  { id: 29, text: "使用Excel等工具制作表格和报表。", dimension: "C" },
  { id: 30, text: "检查和核对数据的准确性。", dimension: "C" },
].map((q) => ({ ...q, type: "likert" as const, options: likertOptions }));

function calculateHolland(answers: Record<number, number | string>): string {
  const scores: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  questions.forEach((q) => {
    const val = Number(answers[q.id]);
    if (val && q.dimension) scores[q.dimension] += val;
  });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 3).map(([k]) => k).join("");
}

export const hollandTest: TestConfig = {
  id: "holland",
  name: "霍兰德职业兴趣测试",
  description: "30道题发现你的职业兴趣密码，找到最适合你的职业方向",
  duration: "约5分钟",
  questionCount: 30,
  questions,
  scoringRules: "RIASEC六维度各5题，取总分排名前3的字母组合为结果代码。",
  disclaimer: "本测试基于霍兰德职业兴趣理论，结果仅供参考，不代表唯一的职业选择。职业规划还需结合个人能力、价值观和市场需求综合考虑。",
  calculateResult: calculateHolland,
  resultMapping: {
    RIA: { title: "实用创新型", subtitle: "R-I-A", emoji: "🔧", badgeColor: "bg-stone-600", description: "你喜欢动手实践和深入研究，同时有艺术审美。你是那种既能修好机器又能画出设计图的人。", strengths: ["动手能力强", "研究精神", "有审美眼光", "独立务实"], weaknesses: ["社交意愿较低", "可能忽视人际关系", "不太喜欢管理工作"], careerAdvice: "工业设计师、建筑师、游戏开发者、产品设计师", loveAdvice: "找一个欣赏你专注力的伴侣，也要记得抬起头来看看ta的眼睛。", famousPeople: ["乔纳森·艾维", "扎哈·哈迪德"] },
    RIS: { title: "务实助人型", subtitle: "R-I-S", emoji: "🩺", badgeColor: "bg-teal-600", description: "你将实践能力与关怀他人完美结合。", strengths: ["动手解决问题", "有科学精神", "乐于助人", "踏实可靠"], weaknesses: ["不太喜欢竞争环境", "不擅长推销自己"], careerAdvice: "医生、护士、物理治疗师、环境工程师", loveAdvice: "你的可靠是最大魅力，大方展示你温暖的一面。", famousPeople: ["白求恩", "南丁格尔"] },
    RIE: { title: "技术领导型", subtitle: "R-I-E", emoji: "🚀", badgeColor: "bg-blue-700", description: "你将技术实力和领导力结合，善于用创新引领变革。", strengths: ["技术过硬", "有领导力", "善于创新", "行动力强"], weaknesses: ["可能忽视团队情感", "有时过于自信"], careerAdvice: "CTO、工程总监、创业者、技术合伙人", loveAdvice: "工作之外的世界也很精彩，别忘了陪伴爱的人。", famousPeople: ["马斯克", "张一鸣"] },
    IAR: { title: "学术创意型", subtitle: "I-A-R", emoji: "🧪", badgeColor: "bg-violet-600", description: "你将研究精神与艺术创造力结合，追求知识与美的统一。", strengths: ["深度思考", "创造力强", "好奇心旺盛", "审美独到"], weaknesses: ["可能过于理想化", "社交意愿不高"], careerAdvice: "大学教授、科学插画师、UX研究员、纪录片导演", loveAdvice: "你的内心世界很丰富，找个愿意一起探索的灵魂伴侣。", famousPeople: ["达芬奇", "李安"] },
    IAS: { title: "人文研究型", subtitle: "I-A-S", emoji: "📚", badgeColor: "bg-indigo-500", description: "你将学术研究与人文关怀结合。", strengths: ["洞察力强", "善于表达", "有同理心", "知识渊博"], weaknesses: ["可能不太务实", "不擅长商业思维"], careerAdvice: "心理学家、社会学研究者、作家、文化策展人", loveAdvice: "你需要精神层面的深度连接，别委屈自己。", famousPeople: ["弗洛伊德", "三毛"] },
    ASE: { title: "创意社交型", subtitle: "A-S-E", emoji: "🎨", badgeColor: "bg-fuchsia-500", description: "你将艺术才华与社交影响力结合，善于通过创意感染和影响他人。", strengths: ["创意丰富", "社交能力强", "有影响力", "善于表达"], weaknesses: ["可能不够细致", "有时过于感性"], careerAdvice: "品牌设计师、创意总监、自媒体博主、艺术教育者", loveAdvice: "你的创意和热情是最大的魅力，找个欣赏你才华的人。", famousPeople: ["安迪·沃霍尔", "李佳琦"] },
    SEC: { title: "管理服务型", subtitle: "S-E-C", emoji: "🏢", badgeColor: "bg-sky-600", description: "你擅长服务他人的同时有效地组织和管理。", strengths: ["组织能力强", "善于沟通", "责任心强", "做事有条理"], weaknesses: ["可能过于保守", "不太喜欢冒险"], careerAdvice: "人力资源经理、行政总监、学校管理者、医院管理者", loveAdvice: "你在生活中也像管理者一样可靠，对的人会很珍惜这一点。", famousPeople: ["彭蕾", "俞敏洪"] },
    ECS: { title: "商业运营型", subtitle: "E-C-S", emoji: "💼", badgeColor: "bg-amber-600", description: "你将商业头脑与精细执行力和服务意识结合。", strengths: ["商业敏锐", "执行力强", "善于人际交往", "做事细致"], weaknesses: ["可能过于看重效率", "有时忽略创意"], careerAdvice: "运营总监、管理咨询师、银行经理、连锁店管理者", loveAdvice: "生活不是KPI，在爱里放松一些，享受过程。", famousPeople: ["刘强东", "张勇"] },
    SAE: { title: "社会创意型", subtitle: "S-A-E", emoji: "🌈", badgeColor: "bg-rose-500", description: "你热心助人同时富有创造力和领导力。", strengths: ["共情力强", "有创意", "有影响力", "乐于助人"], weaknesses: ["可能精力分散", "有时过于理想化"], careerAdvice: "公益策划人、教育创新者、社会企业家、心理剧导师", loveAdvice: "你的热情和真诚是最好的礼物，别怕展示真实的自己。", famousPeople: ["奥普拉", "陶行知"] },
    CEI: { title: "数据精英型", subtitle: "C-E-I", emoji: "📊", badgeColor: "bg-gray-600", description: "你将精确执行、管理能力和研究精神结合。", strengths: ["数据敏感", "管理有方", "逻辑严谨", "做事精确"], weaknesses: ["可能过于严格", "缺少灵活性"], careerAdvice: "财务总监、数据科学家、量化分析师、审计合伙人", loveAdvice: "感情不需要精确计算，有时候模糊一点更浪漫。", famousPeople: ["巴菲特", "任正非"] },
    AIS: { title: "人文创意型", subtitle: "A-I-S", emoji: "✍️", badgeColor: "bg-purple-500", description: "你将艺术天赋、研究精神和人文关怀融为一体。", strengths: ["深度创作能力", "洞察力强", "善于共情", "审美独特"], weaknesses: ["可能远离现实", "不擅长商业化"], careerAdvice: "作家、心理咨询师、纪录片创作者、文化研究者", loveAdvice: "你需要灵魂层面的交流，耐心等待那个懂你的人。", famousPeople: ["村上春树", "杨绛"] },
    SIA: { title: "教育艺术型", subtitle: "S-I-A", emoji: "🎓", badgeColor: "bg-emerald-500", description: "你关心他人成长，有学术深度和创意表达能力。", strengths: ["善于教育启发", "知识丰富", "有创造力", "耐心细致"], weaknesses: ["可能不够果断", "不擅长竞争"], careerAdvice: "教师、教育产品设计师、儿童心理专家、博物馆策展人", loveAdvice: "你的温柔和智慧是最好的礼物，别低估自己的魅力。", famousPeople: ["蒙特梭利", "陈鹤琴"] },
    ESA: { title: "领导创意型", subtitle: "E-S-A", emoji: "🎬", badgeColor: "bg-red-500", description: "你有领导力、社交能力和艺术审美的完美结合。", strengths: ["领导力强", "善于激励他人", "有创意视野", "社交能力出色"], weaknesses: ["可能过于强势", "有时忽视细节"], careerAdvice: "制片人、广告公司CEO、品牌创始人、综艺导演", loveAdvice: "在爱里不需要当导演，学会做观众也是一种艺术。", famousPeople: ["迪士尼", "许知远"] },
    CIR: { title: "精密技术型", subtitle: "C-I-R", emoji: "⚙️", badgeColor: "bg-zinc-600", description: "你将精确、研究和实操完美结合。", strengths: ["极度精确可靠", "技术实力过硬", "有研究精神", "做事有条理"], weaknesses: ["社交意愿低", "可能过于保守", "不善于表达"], careerAdvice: "质量工程师、实验室技术员、精密仪器操作员、药剂师", loveAdvice: "对的人不需要你完美，只需要你真实。试着分享你内心的世界。", famousPeople: ["屠呦呦", "钟南山"] },
    ECA: { title: "商业创意型", subtitle: "E-C-A", emoji: "💎", badgeColor: "bg-pink-600", description: "你将商业敏锐度、执行力和创意审美融为一体。", strengths: ["商业头脑", "执行力强", "有审美品位", "善于沟通"], weaknesses: ["可能过于追求完美", "有时过于功利"], careerAdvice: "品牌经理、奢侈品买手、创意营销总监、时尚创业者", loveAdvice: "生活中最好的东西无法用钱衡量，用心感受。", famousPeople: ["LVMH创始人", "章小蕙"] },
    RIC: { title: "技术精确型", subtitle: "R-I-C", emoji: "🔬", badgeColor: "bg-slate-700", description: "你将实操、研究和精确性完美结合。", strengths: ["技术扎实", "研究能力强", "做事精确", "独立可靠"], weaknesses: ["社交不足", "可能缺乏灵活性"], careerAdvice: "实验室研究员、软件工程师、测试工程师、数据库管理员", loveAdvice: "感情世界需要你打开心扉，逻辑解决不了所有问题。", famousPeople: ["林纳斯·托瓦兹", "中本聪"] },
    RSE: { title: "实践社交型", subtitle: "R-S-E", emoji: "🤝", badgeColor: "bg-orange-600", description: "你动手能力强同时善于与人合作和领导。", strengths: ["务实能干", "社交力强", "有领导力", "行动迅速"], weaknesses: ["可能不够细致", "有时过于急躁"], careerAdvice: "项目经理、工程监理、消防队长、体育教练", loveAdvice: "你的靠谱和行动力是最好的情话，继续保持。", famousPeople: ["贝尔·格里尔斯", "黄晓明"] },
    ICR: { title: "研究精确型", subtitle: "I-C-R", emoji: "🧮", badgeColor: "bg-blue-800", description: "你将深度研究、精确执行和实操能力结合。", strengths: ["分析能力极强", "做事精确", "有耐心", "独立思考"], weaknesses: ["社交意愿低", "可能过于保守"], careerAdvice: "统计学家、精算师、科研工程师、生物信息学家", loveAdvice: "爱情不需要公式，有时候跟着感觉走更好。", famousPeople: ["高斯", "陈景润"] },
    AIE: { title: "创新引领型", subtitle: "A-I-E", emoji: "💡", badgeColor: "bg-yellow-600", description: "你将创意、研究和领导力完美融合。", strengths: ["创新力极强", "有远见", "善于影响他人", "思维独特"], weaknesses: ["可能不够务实", "有时过于理想化"], careerAdvice: "创新实验室负责人、风投合伙人、TED演讲者、科技创业者", loveAdvice: "你的热情和远见很迷人，找个能跟上你脚步的伴侣。", famousPeople: ["乔布斯", "达芬奇"] },
  },
};
