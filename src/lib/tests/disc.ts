import { TestConfig } from "./types";

const discQuestions = [
  { id: 1, text: "面对挑战时，我更倾向于：", type: "single" as const, dimension: "style", options: [{ text: "直接面对，果断解决", value: "D" }, { text: "积极沟通，调动大家一起", value: "I" }, { text: "冷静观察，稳妥推进", value: "S" }, { text: "分析数据，找到最优方案", value: "C" }] },
  { id: 2, text: "在团队中，别人通常觉得我是：", type: "single" as const, dimension: "style", options: [{ text: "雷厉风行的决策者", value: "D" }, { text: "活跃有趣的气氛组", value: "I" }, { text: "稳定可靠的后盾", value: "S" }, { text: "严谨细致的质检员", value: "C" }] },
  { id: 3, text: "开会讨论时，我一般会：", type: "single" as const, dimension: "style", options: [{ text: "快速切入重点，推进决议", value: "D" }, { text: "积极发言，分享新想法", value: "I" }, { text: "认真倾听，适时表达", value: "S" }, { text: "关注细节和逻辑漏洞", value: "C" }] },
  { id: 4, text: "遇到分歧时，我倾向于：", type: "single" as const, dimension: "style", options: [{ text: "坚持自己的观点", value: "D" }, { text: "用幽默化解矛盾", value: "I" }, { text: "寻求共识和妥协", value: "S" }, { text: "用事实和数据说服对方", value: "C" }] },
  { id: 5, text: "我最害怕的工作场景是：", type: "single" as const, dimension: "style", options: [{ text: "失去控制权，被别人指挥", value: "D" }, { text: "被孤立，没人理我", value: "I" }, { text: "突然的大变动，打乱节奏", value: "S" }, { text: "出错被批评，质量不达标", value: "C" }] },
  { id: 6, text: "如果朋友形容我，会用哪个词？", type: "single" as const, dimension: "style", options: [{ text: "强势/果断", value: "D" }, { text: "热情/有趣", value: "I" }, { text: "温和/踏实", value: "S" }, { text: "细心/严谨", value: "C" }] },
  { id: 7, text: "我处理邮件/消息的方式是：", type: "single" as const, dimension: "style", options: [{ text: "快速回复，言简意赅", value: "D" }, { text: "热情回应，加表情包", value: "I" }, { text: "认真阅读，仔细回复", value: "S" }, { text: "检查清楚再回，确保准确", value: "C" }] },
  { id: 8, text: "新项目启动时，我最先关注：", type: "single" as const, dimension: "style", options: [{ text: "最终目标和结果", value: "D" }, { text: "团队的热情和参与度", value: "I" }, { text: "流程和时间安排", value: "S" }, { text: "风险和潜在问题", value: "C" }] },
  { id: 9, text: "我的办公桌/书桌通常是：", type: "single" as const, dimension: "style", options: [{ text: "只放必需品，高效简洁", value: "D" }, { text: "有照片和装饰，充满个性", value: "I" }, { text: "整洁有序，温馨舒适", value: "S" }, { text: "文件分类明确，一丝不苟", value: "C" }] },
  { id: 10, text: "压力大时，我会：", type: "single" as const, dimension: "style", options: [{ text: "更加拼命工作，用行动消化", value: "D" }, { text: "找朋友倾诉，聊天减压", value: "I" }, { text: "默默承受，不想给人添麻烦", value: "S" }, { text: "列清单分析，逐个击破", value: "C" }] },
  { id: 11, text: "我做决定时最看重：", type: "single" as const, dimension: "style", options: [{ text: "速度和效率", value: "D" }, { text: "大家的感受和认同", value: "I" }, { text: "稳定性和安全性", value: "S" }, { text: "准确性和完整性", value: "C" }] },
  { id: 12, text: "如果我是一种动物，我觉得自己是：", type: "single" as const, dimension: "style", options: [{ text: "雄鹰——高瞻远瞩，掌控全局", value: "D" }, { text: "孔雀——多彩绚丽，引人注目", value: "I" }, { text: "考拉——温和安静，与世无争", value: "S" }, { text: "猫头鹰——冷静睿智，观察入微", value: "C" }] },
  { id: 13, text: "我理想的周末是：", type: "single" as const, dimension: "style", options: [{ text: "完成目标任务，提升自我", value: "D" }, { text: "参加聚会或社交活动", value: "I" }, { text: "在家休息，享受平静", value: "S" }, { text: "读书学习或研究某个课题", value: "C" }] },
  { id: 14, text: "对待规则和制度，我的态度是：", type: "single" as const, dimension: "style", options: [{ text: "如果阻碍效率，就该改变它", value: "D" }, { text: "太多规矩太无聊，灵活点好", value: "I" }, { text: "规则给人安全感，我会遵守", value: "S" }, { text: "规则存在是有道理的，应该严格执行", value: "C" }] },
  { id: 15, text: "我最不擅长的是：", type: "single" as const, dimension: "style", options: [{ text: "耐心等待", value: "D" }, { text: "独自工作", value: "I" }, { text: "处理突发变化", value: "S" }, { text: "做快速决定", value: "C" }] },
  { id: 16, text: "我发微信朋友圈的风格是：", type: "single" as const, dimension: "style", options: [{ text: "很少发，发了也是成就和目标", value: "D" }, { text: "经常分享生活、聚会和搞笑内容", value: "I" }, { text: "偶尔发，内容温馨低调", value: "S" }, { text: "精心编辑、注重质量和美观", value: "C" }] },
  { id: 17, text: "学习新技能时，我更喜欢：", type: "single" as const, dimension: "style", options: [{ text: "直接上手做，边做边学", value: "D" }, { text: "和别人一起学，互相讨论", value: "I" }, { text: "按步骤来，一步步掌握", value: "S" }, { text: "先看说明书，了解原理再动手", value: "C" }] },
  { id: 18, text: "我对时间管理的态度是：", type: "single" as const, dimension: "style", options: [{ text: "时间就是金钱，分秒必争", value: "D" }, { text: "差不多就行，太精确太累了", value: "I" }, { text: "按部就班，不赶不慢", value: "S" }, { text: "精确安排，严格执行", value: "C" }] },
  { id: 19, text: "如果有人不同意我的想法，我会：", type: "single" as const, dimension: "style", options: [{ text: "直接据理力争", value: "D" }, { text: "换个角度重新说服", value: "I" }, { text: "考虑对方的观点，寻求折中", value: "S" }, { text: "用更多证据和数据来支持", value: "C" }] },
  { id: 20, text: "我最大的职场优势是：", type: "single" as const, dimension: "style", options: [{ text: "敢做敢当，领导力强", value: "D" }, { text: "人缘好，沟通能力强", value: "I" }, { text: "稳定可靠，执行力强", value: "S" }, { text: "专业精准，分析力强", value: "C" }] },
  { id: 21, text: "我选择餐厅吃饭时：", type: "single" as const, dimension: "style", options: [{ text: "快速决定，不浪费时间", value: "D" }, { text: "推荐热门打卡店", value: "I" }, { text: "去熟悉的老地方", value: "S" }, { text: "看评分和评价再决定", value: "C" }] },
  { id: 22, text: "在感情中，我最需要的是：", type: "single" as const, dimension: "style", options: [{ text: "尊重和掌控感", value: "D" }, { text: "关注和赞美", value: "I" }, { text: "安全感和稳定", value: "S" }, { text: "信任和忠诚", value: "C" }] },
  { id: 23, text: "遇到不公平的事情，我会：", type: "single" as const, dimension: "style", options: [{ text: "直接站出来抗争", value: "D" }, { text: "号召大家一起解决", value: "I" }, { text: "先忍一忍，观察形势", value: "S" }, { text: "收集证据，按规则投诉", value: "C" }] },
  { id: 24, text: "我的座右铭最接近：", type: "single" as const, dimension: "style", options: [{ text: "要么不做，做就做到最好", value: "D" }, { text: "人生苦短，及时行乐", value: "I" }, { text: "稳中求进，厚积薄发", value: "S" }, { text: "细节决定成败", value: "C" }] },
];

function calculateDisc(answers: Record<number, number | string>): string {
  const counts: Record<string, number> = { D: 0, I: 0, S: 0, C: 0 };

  discQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans && typeof ans === "string" && counts[ans] !== undefined) {
      counts[ans]++;
    }
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

export const discTest: TestConfig = {
  id: "disc",
  name: "DISC性格测试",
  description: "发现你的沟通与行为风格（D/I/S/C），职场人际必备",
  duration: "约5分钟",
  questionCount: 24,
  questions: discQuestions,
  scoringRules: "统计D（支配型）、I（影响型）、S（稳健型）、C（谨慎型）四种选项的数量，最多的为主导风格。",
  disclaimer: "本测试为简化版DISC行为风格测试，仅供自我探索和职场参考，不代表专业DISC认证评估结果。",
  calculateResult: calculateDisc,
  resultMapping: {
    D: {
      title: "支配型 Dominance",
      subtitle: "D型 · 雄鹰",
      emoji: "🦅",
      badgeColor: "bg-red-600",
      description: "你是天生的领导者和行动派。你关注结果，做事雷厉风行，喜欢掌控局面。你有着强大的意志力和竞争心，能在压力下做出果断的决策。你是团队中推动事情往前走的核心力量。",
      strengths: ["决策果断迅速", "目标导向，执行力强", "不怕困难和挑战", "有强大的领导气质"],
      weaknesses: ["可能过于强势和急躁", "不够有耐心", "容易忽视他人感受", "倾向于独断专行"],
      careerAdvice: "适合创业者、高管、项目经理、销售总监等需要魄力和决策力的岗位。给你的建议：多倾听团队的声音，学会授权和信任他人。",
      loveAdvice: "在感情中学会放下控制欲，你的伴侣需要的是伙伴而不是指挥官。偶尔示弱反而能拉近距离。",
      famousPeople: ["拿破仑", "乔布斯", "董明珠", "特朗普"],
    },
    I: {
      title: "影响型 Influence",
      subtitle: "I型 · 孔雀",
      emoji: "🦚",
      badgeColor: "bg-yellow-500",
      description: "你是天生的沟通者和影响者。你乐观、热情、善于表达，走到哪里都能点亮气氛。你重视人际关系，善于激励和感染他人。你的魅力让你总是受到欢迎。",
      strengths: ["极强的表达和沟通能力", "乐观积极有感染力", "人际关系广泛", "创意丰富，点子多"],
      weaknesses: ["可能不够细致", "注意力容易分散", "有时过于话多", "不善于独自完成枯燥任务"],
      careerAdvice: "适合市场营销、公关、培训师、主持人、销售等需要沟通和感染力的岗位。给你的建议：学会深入执行细节，把精力集中在真正重要的事情上。",
      loveAdvice: "你很容易吸引人，但深度关系需要真诚和投入。别只追求表面的热闹，多关注伴侣的内心需求。",
      famousPeople: ["马云", "奥普拉", "何炅", "威尔·史密斯"],
    },
    S: {
      title: "稳健型 Steadiness",
      subtitle: "S型 · 考拉",
      emoji: "🐨",
      badgeColor: "bg-green-600",
      description: "你是团队中最可靠、最稳定的存在。你温和、耐心、善于倾听，是大家最信赖的伙伴。你重视和谐与稳定，能在默默无闻中把事情做到极致。你是团队的定海神针。",
      strengths: ["极度可靠和稳定", "优秀的倾听者", "有耐心，善于执行", "团队合作精神出色"],
      weaknesses: ["可能过于保守", "不善于表达自己的意见", "抵触突然的变化", "有时过于迁就他人"],
      careerAdvice: "适合人力资源、行政管理、客服、护理等需要耐心和稳定性的岗位。给你的建议：学会主动表达自己的想法，不要总是等着别人来问你。",
      loveAdvice: "你是最好的伴侣类型之一，但不要因为害怕冲突而压抑自己。健康的关系需要你说出真实感受。",
      famousPeople: ["甘地", "特蕾莎修女", "刘亦菲", "巴菲特"],
    },
    C: {
      title: "谨慎型 Conscientiousness",
      subtitle: "C型 · 猫头鹰",
      emoji: "🦉",
      badgeColor: "bg-blue-700",
      description: "你是精确和专业的代名词。你善于分析，注重细节，追求完美。你用逻辑和数据说话，是团队中的质量保证。你的严谨让人信服，你的专业让人敬佩。",
      strengths: ["分析能力极强", "注重细节和品质", "逻辑思维出色", "做事严谨可信赖"],
      weaknesses: ["可能过于追求完美", "决策速度较慢", "社交主动性不足", "有时过于挑剔"],
      careerAdvice: "适合数据分析师、审计师、工程师、研究员等需要精确性和分析力的岗位。给你的建议：学会在'足够好'和'完美'之间找到平衡，有时候80分就够了。",
      loveAdvice: "在感情中少一些分析，多一些感受。爱情不是一道需要完美解答的数学题。",
      famousPeople: ["比尔·盖茨", "爱因斯坦", "扎克伯格", "诸葛亮"],
    },
  },
};
