import { TestConfig } from "./types";

const bigfiveQuestions = [
  { id: 1, text: "我喜欢与很多人一起参加社交活动", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 2, text: "我总是话很多，喜欢主动跟人聊天", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 3, text: "在人群中我总是充满活力", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 4, text: "我喜欢成为聚光灯下的焦点", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 5, text: "我在派对上总能和陌生人聊得来", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 6, text: "我更喜欢安静独处而非热闹聚会", type: "likert" as const, dimension: "E", reverse: true, options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 7, text: "我经常主动发起对话", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 8, text: "我喜欢认识新朋友", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 9, text: "热闹的环境让我精力充沛", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 10, text: "我不介意成为大家关注的中心", type: "likert" as const, dimension: "E", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },

  { id: 11, text: "我对他人的感受非常敏感", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 12, text: "我喜欢帮助有需要的人", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 13, text: "我很容易信任别人", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 14, text: "我认为大多数人本质上是善良的", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 15, text: "我尽量避免与人争吵", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 16, text: "别人犯错时我很容易原谅", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 17, text: "我在意他人的幸福和感受", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 18, text: "我对别人的请求通常会答应", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 19, text: "有时我觉得自己太心软了", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 20, text: "团队合作时我愿意配合他人的想法", type: "likert" as const, dimension: "A", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },

  { id: 21, text: "我做事总是有条不紊、按计划来", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 22, text: "我对细节非常注意", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 23, text: "我总是按时完成任务", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 24, text: "我的桌面和房间总是保持整洁", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 25, text: "我有很强的自律性", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 26, text: "做决定前我会仔细权衡利弊", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 27, text: "我很少忘记重要的事情", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 28, text: "我会为长远目标制定详细计划", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 29, text: "完成任务后我会反复检查", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 30, text: "我认为努力工作是成功的关键", type: "likert" as const, dimension: "C", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },

  { id: 31, text: "我经常感到焦虑或紧张", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 32, text: "我容易因为小事而心情波动", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 33, text: "面对压力时我很难保持冷静", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 34, text: "我经常担心未来可能发生的事", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 35, text: "别人的批评会让我难过很久", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 36, text: "我有时会莫名地感到悲伤", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 37, text: "我容易因为想太多而失眠", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 38, text: "我经常后悔自己的决定", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 39, text: "遇到挫折时我很难快速恢复", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 40, text: "我对自己的表现常常不满意", type: "likert" as const, dimension: "N", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },

  { id: 41, text: "我喜欢尝试新事物和新体验", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 42, text: "我经常有很多创意和想象", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 43, text: "我对艺术和美有很强的感受力", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 44, text: "我对不同文化和观念持开放态度", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 45, text: "我喜欢探讨哲学和深层问题", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 46, text: "我更喜欢创新而不是墨守成规", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 47, text: "我对大自然和科学充满好奇", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 48, text: "我常常沉浸在自己的想象世界中", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 49, text: "我觉得传统做法不一定是最好的", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
  { id: 50, text: "我喜欢阅读各种不同领域的书籍", type: "likert" as const, dimension: "O", options: [{ text: "非常不同意", value: 1 }, { text: "不同意", value: 2 }, { text: "中立", value: 3 }, { text: "同意", value: 4 }, { text: "非常同意", value: 5 }] },
];

function calculateBigFive(answers: Record<number, number | string>): string {
  const dims: Record<string, number[]> = { O: [], C: [], E: [], A: [], N: [] };

  bigfiveQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans !== undefined && q.dimension) {
      let score = Number(ans);
      if (q.reverse) score = 6 - score;
      dims[q.dimension].push(score);
    }
  });

  const avg = (arr: number[]) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 3;

  const scores: Record<string, number> = {
    O: avg(dims.O),
    C: avg(dims.C),
    E: avg(dims.E),
    A: avg(dims.A),
    N: avg(dims.N),
  };

  const highest = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = highest[0][0];
  const topScore = highest[0][1];

  if (topScore >= 4) return `${top}_high`;
  if (topScore >= 2.5) return `${top}_mid`;
  return `${top}_low`;
}

const resultBase = {
  O_high: { title: "探索先锋", subtitle: "开放性极高", emoji: "🌈", badgeColor: "bg-violet-600", description: "你拥有超凡的想象力和好奇心，热爱探索未知领域。你对艺术、文化和新思想有着天然的亲和力，总是走在时代前沿。你的创造力是你最大的财富。", strengths: ["创造力非凡", "思维开放包容", "好奇心旺盛", "审美能力出众"], weaknesses: ["可能不切实际", "注意力容易分散", "对日常事务缺乏耐心", "有时过于理想化"], careerAdvice: "适合创意类工作如设计师、作家、艺术家、研究员、创新顾问等。", loveAdvice: "你需要一个能和你一起探索世界、接受新奇想法的伴侣。", famousPeople: ["达芬奇", "乔布斯", "宫崎骏", "爱因斯坦"] },
  O_mid: { title: "平衡探索者", subtitle: "开放性适中", emoji: "🧭", badgeColor: "bg-indigo-500", description: "你在创新与务实之间保持了良好的平衡。你对新事物持开放态度，但也珍惜传统的价值。这种平衡让你既能适应变化，又不会太冒进。", strengths: ["灵活适应", "理性与感性并重", "脚踏实地", "善于权衡"], weaknesses: ["有时会犹豫不决", "可能错过大胆创新的机会", "偶尔缺乏冒险精神", "容易在新旧之间摇摆"], careerAdvice: "适合产品经理、教师、顾问、市场营销等需要创新与落地结合的岗位。", loveAdvice: "你能和大多数类型的人相处融洽，关键是找到价值观一致的伴侣。", famousPeople: ["比尔·盖茨", "马化腾", "村上春树", "奥巴马"] },
  O_low: { title: "务实守护者", subtitle: "开放性较低", emoji: "🏔️", badgeColor: "bg-slate-600", description: "你是一个脚踏实地、注重实际的人。你更喜欢经过验证的方法和稳定的环境，这让你在执行和落实方面表现出色。", strengths: ["执行力强", "注重实际", "稳定可靠", "善于维护秩序"], weaknesses: ["可能抗拒变化", "创新思维有限", "对新事物持保守态度", "有时过于固执"], careerAdvice: "适合会计、工程师、行政管理、质量控制等需要严谨和稳定的岗位。", loveAdvice: "你需要一个同样重视稳定和承诺的伴侣，安全感对你很重要。", famousPeople: ["巴菲特", "默克尔", "华盛顿", "任正非"] },

  C_high: { title: "自律达人", subtitle: "尽责性极高", emoji: "📊", badgeColor: "bg-blue-700", description: "你是纪律和效率的代名词。你总是有条不紊地安排生活和工作，目标清晰、执行力超强。你的可靠性让你成为团队中最被信赖的人。", strengths: ["极度自律", "组织能力强", "目标导向", "细致入微"], weaknesses: ["可能过于完美主义", "不够灵活", "压力过大时容易焦虑", "有时忽视休息和娱乐"], careerAdvice: "适合项目经理、审计师、医生、科学家等需要高度自律的岗位。", loveAdvice: "学会偶尔放松标准，接受生活中的不完美，你的伴侣也需要喘息空间。", famousPeople: ["Tim Cook", "董明珠", "钟南山", "村上春树"] },
  C_mid: { title: "灵活执行者", subtitle: "尽责性适中", emoji: "⚖️", badgeColor: "bg-teal-500", description: "你在严谨和灵活之间找到了舒适的平衡点。你能完成任务但不会给自己太大压力，既有条理又不至于太刻板。", strengths: ["适应力强", "工作生活平衡", "能完成重要任务", "不过度施压"], weaknesses: ["偶尔拖延", "注意力可能分散", "有时不够细致", "需要外部动力"], careerAdvice: "适合营销、教育、创业、自由职业等需要灵活性的领域。", loveAdvice: "你的随和让你容易相处，但也要记得为重要的事情坚持原则。", famousPeople: ["马斯克", "雷军", "周杰伦", "罗永浩"] },
  C_low: { title: "自由灵魂", subtitle: "尽责性较低", emoji: "🦅", badgeColor: "bg-orange-500", description: "你是一个崇尚自由、不喜欢被规则束缚的人。你做事更倾向于跟随灵感和兴趣，而非严格的计划。你的随性让你充满魅力。", strengths: ["创造力强", "适应变化快", "不受条框束缚", "轻松自在"], weaknesses: ["容易拖延", "缺乏计划性", "可能错过重要截止日期", "做事不够系统"], careerAdvice: "适合艺术家、自由撰稿人、创意总监、旅行博主等不受约束的工作。", loveAdvice: "找一个能包容你随性风格的伴侣，但也要学会在重要的事情上负责任。", famousPeople: ["Jack Kerouac", "高更", "嵇康", "papi酱"] },

  E_high: { title: "社交明星", subtitle: "外向性极高", emoji: "🎉", badgeColor: "bg-yellow-500", description: "你是天生的社交达人，走到哪里都是焦点。你热爱与人互动，精力充沛，能轻松调动气氛。你的热情有着巨大的感染力。", strengths: ["社交能力出众", "精力充沛", "感染力强", "善于建立人脉"], weaknesses: ["可能过于依赖外部刺激", "独处时感到不安", "有时说话太多", "注意力容易被社交分散"], careerAdvice: "适合销售、公关、主持人、团队管理等需要人际互动的岗位。", loveAdvice: "你需要一个能和你一起社交、同样充满活力的伴侣，但也要尊重对方的独处空间。", famousPeople: ["奥普拉", "何炅", "威尔·史密斯", "马云"] },
  E_mid: { title: "社交弹性者", subtitle: "外向性适中", emoji: "🌤️", badgeColor: "bg-cyan-500", description: "你在社交和独处之间切换自如。你既能在聚会上享受热闹，也能在安静时刻找到平静。这种灵活性让你在各种场合都游刃有余。", strengths: ["社交灵活", "能适应各种环境", "既能独立也能合作", "情绪稳定"], weaknesses: ["有时立场不够鲜明", "可能在社交上缺乏主动", "对深度关系和广泛社交都不够投入", "偶尔感到矛盾"], careerAdvice: "适合大多数岗位，尤其是需要团队协作与独立工作兼顾的职位。", loveAdvice: "你的灵活性是优势，但要找到一个能理解你社交节奏的伴侣。", famousPeople: ["比尔·盖茨", "扎克伯格", "杨紫琼", "李安"] },
  E_low: { title: "深度思考者", subtitle: "外向性较低", emoji: "📚", badgeColor: "bg-gray-600", description: "你是一个内敛而深沉的人，更喜欢一对一的深度交流而非大型社交场合。你在独处中找到力量，思考深入，内心丰富。", strengths: ["善于深度思考", "独立性强", "专注力出色", "擅长一对一交流"], weaknesses: ["社交场合可能不自在", "容易被误解为冷淡", "人际网络较窄", "可能错过社交机会"], careerAdvice: "适合研究员、作家、程序员、分析师等可以独立工作的岗位。", loveAdvice: "找一个能理解你需要独处空间的伴侣，深度关系对你更重要。", famousPeople: ["爱因斯坦", "J.K.罗琳", "村上春树", "比尔·盖茨"] },

  A_high: { title: "温暖天使", subtitle: "宜人性极高", emoji: "🤗", badgeColor: "bg-pink-500", description: "你是人群中最温暖的存在，善良、体贴、乐于助人。你天生善于理解他人的感受，是朋友们最信赖的倾听者和支持者。", strengths: ["极强的共情能力", "善良可信赖", "善于调解冲突", "合作精神出色"], weaknesses: ["容易被人利用", "可能太过讨好他人", "不善于拒绝", "忽视自己的需求"], careerAdvice: "适合心理咨询师、社工、护士、HR等帮助和服务他人的岗位。", loveAdvice: "你的温暖是你的魅力，但要学会设立边界，不要一味迎合对方。", famousPeople: ["特蕾莎修女", "戴安娜王妃", "刘德华", "甘地"] },
  A_mid: { title: "理性温和派", subtitle: "宜人性适中", emoji: "🤝", badgeColor: "bg-emerald-500", description: "你在友善与坚定之间保持了健康的平衡。你待人真诚但也有自己的底线，既能合作也能在必要时坚持立场。", strengths: ["人际关系健康", "有原则也有温度", "善于沟通", "独立且合群"], weaknesses: ["有时显得矛盾", "在坚持和妥协之间纠结", "可能不够果断", "偶尔忽视他人感受"], careerAdvice: "适合管理岗位、教育、法律、商业谈判等需要平衡人际关系的工作。", loveAdvice: "你的平衡感让你成为很好的伴侣，关键是坦诚沟通你的需求。", famousPeople: ["乔布斯", "马斯克", "俞敏洪", "杨澜"] },
  A_low: { title: "独立战士", subtitle: "宜人性较低", emoji: "🗡️", badgeColor: "bg-red-600", description: "你是一个独立、直率、有主见的人。你不会轻易妥协，有着清晰的判断力和果断的决策力。你更关注效率和结果。", strengths: ["决策果断", "不怕冲突", "独立思考", "目标导向"], weaknesses: ["可能显得冷漠或强势", "不善于妥协", "人际关系可能紧张", "缺乏耐心"], careerAdvice: "适合创业者、律师、竞技运动员、高管等需要魄力的岗位。", loveAdvice: "学会倾听和柔软，爱情不是一场需要赢的比赛。", famousPeople: ["拿破仑", "撒切尔夫人", "任正非", "董明珠"] },

  N_high: { title: "敏感艺术家", subtitle: "神经质性较高", emoji: "🎭", badgeColor: "bg-purple-600", description: "你有着丰富而细腻的情感世界。你对环境和他人的变化非常敏感，这让你有着超凡的同理心和艺术感受力，但也容易被情绪左右。", strengths: ["情感丰富", "同理心强", "艺术感受力出众", "敏锐的直觉"], weaknesses: ["容易焦虑", "情绪波动大", "抗压能力较弱", "容易内耗"], careerAdvice: "适合艺术创作、心理咨询、写作、音乐等可以发挥情感优势的工作。", loveAdvice: "找一个情绪稳定、能给你安全感的伴侣。学会自我调节，不要把所有情绪都投射到关系中。", famousPeople: ["梵高", "肖邦", "林黛玉", "太宰治"] },
  N_mid: { title: "情绪平衡者", subtitle: "神经质性适中", emoji: "🌊", badgeColor: "bg-sky-500", description: "你的情绪就像大海，偶有波澜但总体平静。你既能感受深层情感，也能在压力下保持冷静。这种平衡让你在各种情境下都表现得当。", strengths: ["情绪管理良好", "有适度的敏感性", "抗压能力尚可", "能理解他人情绪"], weaknesses: ["特定情境下可能失控", "有时过于压抑情绪", "需要时间恢复", "偶尔内心矛盾"], careerAdvice: "你的情绪稳定性让你适合大多数工作环境，发挥你的共情能力是加分项。", loveAdvice: "保持开放的沟通，不要因为怕冲突而压抑自己的真实感受。", famousPeople: ["村上春树", "周杰伦", "刘亦菲", "李安"] },
  N_low: { title: "淡定王者", subtitle: "神经质性较低", emoji: "🧘", badgeColor: "bg-green-600", description: "你是情绪管理的高手，几乎不会被外界轻易影响。你在压力下依然冷静自若，是团队中最稳定的存在。你的淡定让人安心。", strengths: ["情绪稳定", "抗压能力极强", "冷静理性", "不易受外界干扰"], weaknesses: ["可能显得冷漠", "有时忽视他人的情绪需求", "不善于表达感受", "可能过于理性"], careerAdvice: "适合危机管理、外科医生、飞行员、交易员等高压岗位。", loveAdvice: "你的稳定是伴侣的定心丸，但也要学会表达你的情感，让对方感受到你的在乎。", famousPeople: ["诸葛亮", "默克尔", "沃伦·巴菲特", "钟南山"] },
};

export const bigfiveTest: TestConfig = {
  id: "bigfive",
  name: "大五人格测试",
  description: "探索你的五大性格维度（OCEAN），最科学的自我认知工具",
  duration: "约8分钟",
  questionCount: 50,
  questions: bigfiveQuestions,
  scoringRules: "OCEAN五维度（开放性、尽责性、外向性、宜人性、神经质），每维度10题，5点量表计分，取最高维度分为主导特质。",
  disclaimer: "本测试为简化版大五人格测试，仅供自我探索参考，不代表专业心理评估结果。",
  calculateResult: calculateBigFive,
  resultMapping: resultBase,
};
