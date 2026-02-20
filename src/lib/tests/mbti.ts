import { TestConfig } from "./types";

const mbtiQuestions = [
  // E/I 维度 (7题)
  { id: 1, text: "周末你更想怎么度过？", type: "single" as const, dimension: "EI", options: [{ text: "约朋友聚餐、逛街或参加活动", value: "E" }, { text: "在家看剧、看书或打游戏", value: "I" }] },
  { id: 2, text: "参加一个大型聚会后，你通常感觉：", type: "single" as const, dimension: "EI", options: [{ text: "精力充沛，意犹未尽", value: "E" }, { text: "需要独处充电，有点累", value: "I" }] },
  { id: 3, text: "在团队讨论中，你更倾向于：", type: "single" as const, dimension: "EI", options: [{ text: "积极发言，享受头脑风暴", value: "E" }, { text: "先倾听思考，再有选择地表达", value: "I" }] },
  { id: 4, text: "你在微信群里一般：", type: "single" as const, dimension: "EI", options: [{ text: "经常主动发起话题、分享动态", value: "E" }, { text: "潜水为主，偶尔冒泡", value: "I" }] },
  { id: 5, text: "认识新朋友时，你通常：", type: "single" as const, dimension: "EI", options: [{ text: "很快就能聊得火热", value: "E" }, { text: "需要慢慢熟悉才打开话匣", value: "I" }] },
  { id: 6, text: "你更喜欢的工作环境是：", type: "single" as const, dimension: "EI", options: [{ text: "开放式工位，随时可以和同事交流", value: "E" }, { text: "安静的独立空间，减少打扰", value: "I" }] },
  { id: 7, text: "遇到烦心事时，你更倾向于：", type: "single" as const, dimension: "EI", options: [{ text: "找朋友倾诉，聊完就舒服了", value: "E" }, { text: "自己消化，写日记或独处想清楚", value: "I" }] },

  // S/N 维度 (7题)
  { id: 8, text: "描述一道菜时，你更关注：", type: "single" as const, dimension: "SN", options: [{ text: "用了什么食材、什么口感、几成熟", value: "S" }, { text: "整体氛围、灵感来源、像什么风格", value: "N" }] },
  { id: 9, text: "你看一部电影后更喜欢讨论：", type: "single" as const, dimension: "SN", options: [{ text: "剧情细节、演员表演、特效好不好", value: "S" }, { text: "深层主题、象征意义、导演想表达什么", value: "N" }] },
  { id: 10, text: "做旅行计划时，你倾向于：", type: "single" as const, dimension: "SN", options: [{ text: "查攻略、订行程、精确到每个景点", value: "S" }, { text: "定个大方向就出发，随心探索", value: "N" }] },
  { id: 11, text: "你对以下哪种课更感兴趣？", type: "single" as const, dimension: "SN", options: [{ text: "实操技能课（如烹饪、摄影技巧）", value: "S" }, { text: "思维拓展课（如哲学、未来趋势）", value: "N" }] },
  { id: 12, text: "工作中你更擅长：", type: "single" as const, dimension: "SN", options: [{ text: "处理具体事务，注重细节和流程", value: "S" }, { text: "提出创新想法，看到全局和可能性", value: "N" }] },
  { id: 13, text: "你在淘宝买东西时更看重：", type: "single" as const, dimension: "SN", options: [{ text: "参数、评价、性价比对比", value: "S" }, { text: "颜值、品牌调性、是否符合自己风格", value: "N" }] },
  { id: 14, text: "读一段文字时，你更自然地：", type: "single" as const, dimension: "SN", options: [{ text: "逐字理解，关注具体信息", value: "S" }, { text: "快速抓重点，联想到其他事物", value: "N" }] },

  // T/F 维度 (7题)
  { id: 15, text: "朋友跟你吐槽领导不公平，你第一反应：", type: "single" as const, dimension: "TF", options: [{ text: "帮ta分析情况，看看客观上怎么解决", value: "T" }, { text: "先安慰ta的情绪，站在ta这边", value: "F" }] },
  { id: 16, text: "团队做决定时，你更看重：", type: "single" as const, dimension: "TF", options: [{ text: "逻辑和数据，什么方案效率最高", value: "T" }, { text: "大家的感受，有没有人会不开心", value: "F" }] },
  { id: 17, text: "你觉得好的领导应该是：", type: "single" as const, dimension: "TF", options: [{ text: "公正客观，赏罚分明", value: "T" }, { text: "善解人意，关心下属感受", value: "F" }] },
  { id: 18, text: "看到网上的争论，你更倾向于：", type: "single" as const, dimension: "TF", options: [{ text: "理性分析谁的论据更站得住脚", value: "T" }, { text: "关注当事人的感受和立场", value: "F" }] },
  { id: 19, text: "给朋友提建议时，你会：", type: "single" as const, dimension: "TF", options: [{ text: "直说问题在哪，怎么改进", value: "T" }, { text: "先肯定再委婉提出，照顾对方感受", value: "F" }] },
  { id: 20, text: "你更认同哪种说法？", type: "single" as const, dimension: "TF", options: [{ text: "真相比面子重要，对事不对人", value: "T" }, { text: "和谐比正确重要，做人比做事重要", value: "F" }] },
  { id: 21, text: "做一个重要选择（如换工作）时：", type: "single" as const, dimension: "TF", options: [{ text: "列出利弊表格，理性分析", value: "T" }, { text: "跟随内心感觉，看哪个让自己更兴奋", value: "F" }] },

  // J/P 维度 (7题)
  { id: 22, text: "你的手机备忘录/日历：", type: "single" as const, dimension: "JP", options: [{ text: "排得井井有条，经常查看", value: "J" }, { text: "偶尔记一下，更多靠脑子记", value: "P" }] },
  { id: 23, text: "deadline前你通常：", type: "single" as const, dimension: "JP", options: [{ text: "提前完成，留出检查时间", value: "J" }, { text: "deadline就是第一生产力，最后冲刺", value: "P" }] },
  { id: 24, text: "你的房间/桌面一般是：", type: "single" as const, dimension: "JP", options: [{ text: "整洁有序，东西各就各位", value: "J" }, { text: "有点乱但我知道东西在哪（创意型混乱）", value: "P" }] },
  { id: 25, text: "和朋友约饭，你希望：", type: "single" as const, dimension: "JP", options: [{ text: "提前定好时间地点和餐厅", value: "J" }, { text: "到时候看心情，临时决定", value: "P" }] },
  { id: 26, text: "你购物时更像：", type: "single" as const, dimension: "JP", options: [{ text: "有清单，买完就走", value: "J" }, { text: "边逛边看，容易被新东西吸引", value: "P" }] },
  { id: 27, text: "你对「计划赶不上变化」这句话：", type: "single" as const, dimension: "JP", options: [{ text: "有点焦虑，所以要做Plan B", value: "J" }, { text: "完全同意，变化才是生活的乐趣", value: "P" }] },
  { id: 28, text: "你更享受一件事的哪个阶段？", type: "single" as const, dimension: "JP", options: [{ text: "完成的成就感，打勾的快乐", value: "J" }, { text: "开始和过程中的探索感", value: "P" }] },
];

function calculateMbti(answers: Record<number, number | string>): string {
  const dims: Record<string, Record<string, number>> = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
  };

  mbtiQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans && q.dimension && dims[q.dimension]) {
      dims[q.dimension][ans as string] = (dims[q.dimension][ans as string] || 0) + 1;
    }
  });

  const e = dims.EI.E >= dims.EI.I ? "E" : "I";
  const s = dims.SN.S >= dims.SN.N ? "S" : "N";
  const t = dims.TF.T >= dims.TF.F ? "T" : "F";
  const j = dims.JP.J >= dims.JP.P ? "J" : "P";
  return `${e}${s}${t}${j}`;
}

export const mbtiTest: TestConfig = {
  id: "mbti",
  name: "MBTI 16型人格测试",
  description: "28道题探索你的人格密码，发现专属于你的MBTI类型",
  duration: "约5分钟",
  questionCount: 28,
  questions: mbtiQuestions,
  scoringRules: "E/I、S/N、T/F、J/P四个维度，每维度7题，选择多的字母为该维度结果，组合成4字母类型。",
  disclaimer: "本测试为简化版MBTI，仅供娱乐和自我探索参考，不代表官方MBTI评估结果。",
  calculateResult: calculateMbti,
  resultMapping: {
    INTJ: { title: "建筑师", subtitle: "INTJ", emoji: "🏛️", badgeColor: "bg-purple-600", description: "独立、战略性思维的远见者。你像一个精密的棋手，总能提前好几步看到结局。你追求深度理解和系统优化，对自己和世界都有极高的标准。", strengths: ["战略思维能力超强", "独立且意志坚定", "学习能力出众", "追求卓越"], weaknesses: ["可能显得过于冷淡", "对不够聪明的人缺乏耐心", "完美主义倾向", "不善表达情感"], careerAdvice: "适合科学家、战略顾问、架构师、投资分析师等需要深度思考的岗位。", loveAdvice: "你需要智力上匹配的伴侣。记得偶尔放下分析模式，用心感受爱。", famousPeople: ["马斯克", "扎克伯格", "诸葛亮", "尼采"] },
    INTP: { title: "逻辑学家", subtitle: "INTP", emoji: "🔬", badgeColor: "bg-blue-600", description: "好奇心旺盛的理论派思考者。你的大脑就像一台永不停歇的分析机器，热衷于拆解复杂问题，探索知识的边界。", strengths: ["逻辑思维极强", "创新能力突出", "知识面广博", "客观公正"], weaknesses: ["容易沉浸在思考中忽略现实", "拖延症候群", "社交意愿较低", "不擅长处理情感问题"], careerAdvice: "适合程序员、数据分析师、哲学研究者、游戏设计师等创新型岗位。", loveAdvice: "找一个能理解你需要独处空间的伴侣，也要学会主动表达你的在乎。", famousPeople: ["爱因斯坦", "比尔·盖茨", "达尔文", "苏格拉底"] },
    ENTJ: { title: "指挥官", subtitle: "ENTJ", emoji: "👑", badgeColor: "bg-red-600", description: "天生的领导者，果断高效。你有着清晰的愿景和强大的执行力，能够带领团队攻克一切难关。你就是效率和结果的代名词。", strengths: ["领导力卓越", "决策果断", "目标导向", "自信有魄力"], weaknesses: ["可能过于强势", "不够有耐心", "容易忽视他人感受", "工作狂倾向"], careerAdvice: "适合CEO、创业者、项目经理、律师等领导型岗位。", loveAdvice: "在亲密关系中放下控制欲，学会倾听和妥协，爱不是一场需要赢的辩论。", famousPeople: ["拿破仑", "乔布斯", "董明珠", "撒切尔夫人"] },
    ENTP: { title: "辩论家", subtitle: "ENTP", emoji: "⚡", badgeColor: "bg-orange-500", description: "聪明、好奇的创新者，热爱智力挑战。你能从不同角度看问题，善于打破常规，嘴皮子功夫一流。脑洞是你最强的武器。", strengths: ["创意无限", "口才出众", "适应力强", "善于发现机会"], weaknesses: ["三分钟热度", "容易跟人抬杠", "不喜欢重复性工作", "有时过于理想化"], careerAdvice: "适合创业者、产品经理、营销策划、脱口秀演员等需要创意和表达的岗位。", loveAdvice: "别把恋爱当辩论赛。学会认真倾听，有时候赢了道理输了感情。", famousPeople: ["本杰明·富兰克林", "马克·吐温", "奥巴马", "薛兆丰"] },
    INFJ: { title: "提倡者", subtitle: "INFJ", emoji: "🌌", badgeColor: "bg-teal-600", description: "安静而神秘的理想主义者，是最稀有的人格类型。你有着深邃的内心世界和强烈的使命感，总能洞察他人内心的真实感受。", strengths: ["洞察力极强", "富有同理心", "理想主义且有行动力", "创造力丰富"], weaknesses: ["容易过度付出", "有时过于理想化", "难以敞开心扉", "容易感到疲惫"], careerAdvice: "适合心理咨询师、作家、教师、社工等能帮助他人的岗位。", loveAdvice: "你渴望灵魂伴侣式的深度连接。记得保护好自己的能量，不要一味付出。", famousPeople: ["甘地", "马丁·路德·金", "陶渊明", "Taylor Swift"] },
    INFP: { title: "调停者", subtitle: "INFP", emoji: "🦋", badgeColor: "bg-indigo-500", description: "诗意的灵魂，温柔的理想主义者。你有一个丰富多彩的内心世界，对美和真善有着天然的感知力。你是人群中安静的光。", strengths: ["创造力丰富", "共情能力超强", "忠于自我价值观", "善于写作表达"], weaknesses: ["过于敏感", "容易自我怀疑", "有逃避现实倾向", "不擅长处理冲突"], careerAdvice: "适合作家、插画师、心理咨询师、UX设计师等创意型和人文关怀型岗位。", loveAdvice: "你需要一个能懂你沉默的人。但也要学会直接表达需求，对方不是你心里的读心术师。", famousPeople: ["莎士比亚", "海子", "安妮宝贝", "Johnny Depp"] },
    ENFJ: { title: "主人公", subtitle: "ENFJ", emoji: "🌟", badgeColor: "bg-emerald-600", description: "天生的鼓舞者和引路人。你有着感染全场的热情和感召力，善于发现每个人的闪光点，是朋友圈里的精神支柱。", strengths: ["超强感染力", "善于鼓励他人", "组织能力强", "热心且可靠"], weaknesses: ["过度关注他人期望", "容易忽视自己需求", "有时太操心", "不擅长拒绝"], careerAdvice: "适合教师、HR、公关、社区运营等与人打交道且能帮助成长的岗位。", loveAdvice: "你是恋爱中的付出型，记得也要被爱。找个愿意主动关心你的伴侣。", famousPeople: ["奥普拉", "孔子", "曼德拉", "何炅"] },
    ENFP: { title: "竞选者", subtitle: "ENFP", emoji: "🎉", badgeColor: "bg-yellow-500", description: "热情如火的自由灵魂。你有着无尽的好奇心和创造力，走到哪里都能点燃快乐的火花。你的人生信条是：人生苦短，必须精彩！", strengths: ["热情有感染力", "创意丰富", "适应力强", "人际关系广泛"], weaknesses: ["注意力容易分散", "有时过于理想化", "纪律性不强", "容易情绪化"], careerAdvice: "适合创意总监、自媒体人、旅行博主、活动策划等自由创意型岗位。", loveAdvice: "你需要一个不限制你自由但能给你安全感的伴侣。热恋期过后也要用心经营哦。", famousPeople: ["罗宾·威廉姆斯", "小罗伯特·唐尼", "鲁迅（是的）", "papi酱"] },
    ISTJ: { title: "物流师", subtitle: "ISTJ", emoji: "📋", badgeColor: "bg-slate-600", description: "可靠、务实的执行者。你是团队中最让人放心的存在，说到做到、有条不紊。规则和责任对你来说不是束缚，而是安全感。", strengths: ["极度可靠", "做事有条理", "责任心强", "注重细节"], weaknesses: ["不太灵活", "有时过于固执", "不善于表达感情", "抗拒变化"], careerAdvice: "适合会计、审计、公务员、项目管理等需要严谨和可靠的岗位。", loveAdvice: "用行动表达爱是你的方式，但偶尔也说出口吧，对方需要听到那三个字。", famousPeople: ["华盛顿", "巴菲特", "安吉拉·默克尔", "王健林"] },
    ISFJ: { title: "守卫者", subtitle: "ISFJ", emoji: "🛡️", badgeColor: "bg-sky-600", description: "温暖可靠的守护者。你默默关心身边的每一个人，记住每个人的喜好和小细节。你是朋友圈里最暖心的存在。", strengths: ["体贴入微", "忠诚可靠", "耐心十足", "记忆力好"], weaknesses: ["不善于拒绝", "过度付出", "抗拒变化", "容易委屈自己"], careerAdvice: "适合护士、教师、行政管理、客服等服务型和细致型岗位。", loveAdvice: "你值得被同样认真对待。别总是委曲求全，学会说出自己的需要。", famousPeople: ["特蕾莎修女", "凯特王妃", "卡耐基", "刘亦菲"] },
    ESTJ: { title: "总经理", subtitle: "ESTJ", emoji: "💼", badgeColor: "bg-amber-700", description: "秩序与效率的代言人。你有着超强的组织能力和执行力，是天生的管理者。在你的世界里，规矩就是力量。", strengths: ["组织能力极强", "执行力一流", "直接坦率", "有领导气质"], weaknesses: ["可能过于强势", "不够灵活变通", "对他人要求过高", "不擅长处理情感"], careerAdvice: "适合管理岗位、军人、法官、企业高管等需要组织和领导的岗位。", loveAdvice: "家不是公司，别用管理思维经营爱情。多一些柔软，少一些评判。", famousPeople: ["朱镕基", "希拉里", "杰克·韦尔奇", "法官judy"] },
    ESFJ: { title: "执政官", subtitle: "ESFJ", emoji: "💝", badgeColor: "bg-pink-500", description: "热情好客的社交达人。你天生善于照顾他人，是每个团队中最受欢迎的人。你的世界围绕着人际关系运转。", strengths: ["热心助人", "社交能力强", "善于营造和谐氛围", "可靠有责任感"], weaknesses: ["过于在意他人评价", "不善于处理批评", "有时过于管闲事", "忽视自己的需求"], careerAdvice: "适合销售、公关、人力资源、活动策划等社交型岗位。", loveAdvice: "你很会照顾人，但也别忘了自己的需求。找个不会把你的付出当理所当然的人。", famousPeople: ["泰勒·斯威夫特", "拜登", "休·杰克曼", "黄渤"] },
    ISTP: { title: "鉴赏家", subtitle: "ISTP", emoji: "🔧", badgeColor: "bg-zinc-600", description: "冷静务实的手艺人。你有一双灵巧的手和一颗好奇的心，喜欢亲手拆解和研究事物的运作原理。", strengths: ["动手能力强", "冷静理性", "适应力出色", "解决问题能力强"], weaknesses: ["情感表达较少", "容易感到无聊", "不太遵守规则", "承诺恐惧"], careerAdvice: "适合工程师、技师、飞行员、运动员等需要实际操作和灵活应变的岗位。", loveAdvice: "你用行动表达爱，但对方可能需要更多言语确认。试着多说你的感受。", famousPeople: ["贝尔·格里尔斯", "李小龙", "克林特·伊斯特伍德", "汤姆·克鲁斯"] },
    ISFP: { title: "探险家", subtitle: "ISFP", emoji: "🎨", badgeColor: "bg-rose-500", description: "安静的艺术家灵魂，用感官和美学理解世界。你有着细腻的感受力和独特的审美，活在当下是你的哲学。", strengths: ["审美能力出众", "温柔善良", "活在当下", "富有创造力"], weaknesses: ["不太主动", "容易逃避冲突", "计划性较弱", "容易被情绪左右"], careerAdvice: "适合设计师、摄影师、美食家、花艺师等审美和感受力导向的岗位。", loveAdvice: "你的爱很温柔但常常藏起来。试着更勇敢地表达，对的人会珍惜你的细腻。", famousPeople: ["鲍勃·迪伦", "迈克尔·杰克逊", "周杰伦", "宫崎骏"] },
    ESTP: { title: "企业家", subtitle: "ESTP", emoji: "🎯", badgeColor: "bg-red-500", description: "行动派中的行动派，活力四射的冒险者。你是那种说走就走的人，喜欢活在当下、拥抱刺激。", strengths: ["行动力超强", "社交能力出色", "务实果断", "随机应变"], weaknesses: ["容易冲动", "不太考虑长远", "注意力分散", "不太有耐心"], careerAdvice: "适合销售精英、创业者、运动员、急诊医生等需要快速反应和行动力的岗位。", loveAdvice: "恋爱不只是冒险和刺激，也需要耐心经营。学会在平淡中发现美。", famousPeople: ["杰克·马云（部分）", "唐纳德·特朗普", "麦当娜", "成龙"] },
    ESFP: { title: "表演者", subtitle: "ESFP", emoji: "🎤", badgeColor: "bg-fuchsia-500", description: "天生的舞台主角，走到哪里都是焦点。你热爱生活、享受当下，你的快乐是有感染力的。人生就是一场大派对！", strengths: ["热情开朗", "表现力强", "善于交际", "享受当下"], weaknesses: ["容易冲动消费", "不太善于长期规划", "注意力分散", "逃避严肃话题"], careerAdvice: "适合演员、主持人、销售、旅游达人等需要表现力和人际交往的岗位。", loveAdvice: "你很容易吸引人，但深度关系需要更多耐心。学会在热恋期之后继续用心。", famousPeople: ["玛丽莲·梦露", "威尔·史密斯", "贾玲", "黄子韬"] },
  },
};
