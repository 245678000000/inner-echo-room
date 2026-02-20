import { TestConfig } from "./types";

const likertOptions = [
  { text: "完全不同意", value: 1 },
  { text: "不太同意", value: 2 },
  { text: "一般", value: 3 },
  { text: "比较同意", value: 4 },
  { text: "非常同意", value: 5 },
];

const questions = [
  // 自我认知 (6题)
  { id: 1, text: "我能清楚地识别自己当下的情绪状态。", dimension: "self_awareness" },
  { id: 2, text: "我知道自己的情绪从何而来，为什么会有这样的感受。", dimension: "self_awareness" },
  { id: 3, text: "我了解自己的优势和不足。", dimension: "self_awareness" },
  { id: 4, text: "我知道自己的情绪会如何影响我的行为和决策。", dimension: "self_awareness" },
  { id: 5, text: "我对自己的价值观和人生目标有清晰的认知。", dimension: "self_awareness" },
  { id: 6, text: "别人对我的评价和我的自我认知比较一致。", dimension: "self_awareness" },

  // 自我管理 (7题)
  { id: 7, text: "我能在压力下保持冷静，不会轻易失控。", dimension: "self_management" },
  { id: 8, text: "即使遇到挫折，我也能很快调整心态重新出发。", dimension: "self_management" },
  { id: 9, text: "我很少冲动做出让自己后悔的决定。", dimension: "self_management" },
  { id: 10, text: "我能克制住消极情绪，不让它们影响我的生活。", dimension: "self_management" },
  { id: 11, text: "我善于用积极的方式来应对焦虑或沮丧。", dimension: "self_management" },
  { id: 12, text: "在需要等待的时候，我能保持耐心。", dimension: "self_management" },
  { id: 13, text: "我能适应不断变化的环境和要求。", dimension: "self_management" },

  // 社交认知 (7题)
  { id: 14, text: "我能通过别人的表情和肢体语言感知ta的情绪。", dimension: "social_awareness" },
  { id: 15, text: "我能站在别人的角度理解ta的感受和想法。", dimension: "social_awareness" },
  { id: 16, text: "我对团队或群体的情绪氛围很敏感。", dimension: "social_awareness" },
  { id: 17, text: "我能察觉到别人没有说出口的需要或担忧。", dimension: "social_awareness" },
  { id: 18, text: "和不同背景的人交流，我都能感到自在。", dimension: "social_awareness" },
  { id: 19, text: "我善于倾听，能让对方感觉被理解。", dimension: "social_awareness" },
  { id: 20, text: "我能理解别人为什么会有某种反应，即使我不同意。", dimension: "social_awareness" },

  // 关系管理 (7题)
  { id: 21, text: "我能清楚地表达自己的感受，同时不伤害他人。", dimension: "relationship_management" },
  { id: 22, text: "在冲突中，我能保持冷静并找到双赢的解决方案。", dimension: "relationship_management" },
  { id: 23, text: "我善于鼓励和激励身边的人。", dimension: "relationship_management" },
  { id: 24, text: "我能给出建设性的反馈，而不是攻击性的批评。", dimension: "relationship_management" },
  { id: 25, text: "我能与不同性格的人保持良好的关系。", dimension: "relationship_management" },
  { id: 26, text: "我善于协调团队中的分歧和矛盾。", dimension: "relationship_management" },
  { id: 27, text: "在社交场合，我能让人感到放松和愉快。", dimension: "relationship_management" },

  // 自我激励 (6题)
  { id: 28, text: "我对实现自己的目标有强烈的内在驱动力。", dimension: "self_motivation" },
  { id: 29, text: "面对困难，我会坚持而不是轻易放弃。", dimension: "self_motivation" },
  { id: 30, text: "我能从失败中学到东西，把挫折变成成长的机会。", dimension: "self_motivation" },
  { id: 31, text: "我对生活保持乐观，相信事情最终会好起来。", dimension: "self_motivation" },
  { id: 32, text: "即使没有外部奖励，我也能保持工作的热情。", dimension: "self_motivation" },
  { id: 33, text: "我愿意走出舒适区去挑战更难的事情。", dimension: "self_motivation" },
].map((q) => ({ ...q, type: "likert" as const, options: likertOptions }));

function calculateEq(answers: Record<number, number | string>): string {
  let totalScore = 0;
  questions.forEach((q) => { totalScore += Number(answers[q.id]) || 0; });

  if (totalScore >= 140) return "excellent";
  if (totalScore >= 120) return "high";
  if (totalScore >= 95) return "average";
  if (totalScore >= 70) return "below_average";
  return "low";
}

export const eqTest: TestConfig = {
  id: "eq",
  name: "情商EQ测试",
  description: "33道题全面评估你的情商水平，涵盖自我认知、自我管理、社交认知、关系管理和自我激励5大维度",
  duration: "约6分钟",
  questionCount: 33,
  questions,
  scoringRules: "33题每题1-5分，总分33-165分。140+优秀，120-139良好，95-119中等，70-94偏低，<70较低。",
  disclaimer: "本测试基于情商理论模型，结果仅供自我认知参考。情商是可以通过学习和练习不断提升的能力。",
  calculateResult: calculateEq,
  resultMapping: {
    excellent: { title: "情商大师", subtitle: "顶级情商", emoji: "🌟", badgeColor: "bg-amber-500", description: "你的情商处于非常优秀的水平！你不仅能精准地感知和管理自己的情绪，还能敏锐地洞察他人的感受，并在各种社交场合游刃有余。你是天生的人际关系专家。", strengths: ["情绪感知力极强", "自我调节能力出色", "社交技巧高超", "善于激励自己和他人", "冲突处理能力一流"], weaknesses: ["可能过度关注他人感受而忽视自我", "高度敏感有时也意味着更容易受到情感冲击", "可能无意中操控他人情绪"], careerAdvice: "你适合所有需要高情商的岗位：CEO、心理咨询师、外交官、谈判专家、培训师。你的情商是最大的职场武器。", loveAdvice: "你在关系中的沟通能力让人羡慕。注意保持真实，别为了维持和谐而压抑自己的真实感受。", famousPeople: ["奥普拉", "达赖喇嘛", "克林顿", "马云"] },
    high: { title: "情商达人", subtitle: "良好情商", emoji: "😊", badgeColor: "bg-emerald-500", description: "你的情商处于良好水平！你在大多数情况下能很好地管理自己的情绪，理解和回应他人的感受。你在人际交往中通常让人感到舒适和被理解。", strengths: ["能较好地识别和表达情绪", "社交能力强", "具有较强的同理心", "善于自我激励"], weaknesses: ["在极端压力下可能情绪控制力下降", "某些维度可能还有提升空间", "偶尔可能读不准他人意图"], careerAdvice: "大多数需要团队协作和人际沟通的岗位都很适合你。继续提升在压力下的情绪管理能力。", loveAdvice: "你的情商让你成为不错的伴侣。关注自己相对薄弱的维度，持续成长。", famousPeople: ["巴菲特", "黄渤", "何炅"] },
    average: { title: "情商中等", subtitle: "正常水平", emoji: "😐", badgeColor: "bg-blue-500", description: "你的情商处于中等水平，属于大多数人的范围。你在熟悉的环境中能较好地管理情绪和社交，但在复杂或压力大的场景下可能会有些吃力。好消息是，情商完全可以通过练习来提升！", strengths: ["基本的情绪识别能力", "在舒适区内社交自如", "有一定的共情能力", "能应对日常人际挑战"], weaknesses: ["压力下容易情绪化", "可能在某些社交场景不太自在", "对他人情绪的敏感度有待提高", "处理冲突时可能不够圆滑"], careerAdvice: "建议有意识地锻炼情商技能。可以从每天记录情绪日记、练习深呼吸、主动倾听等小事做起。", loveAdvice: "在亲密关系中多练习表达感受和倾听对方。每次冲突都是成长的机会。", famousPeople: [] },
    below_average: { title: "情商偏低", subtitle: "需要提升", emoji: "😔", badgeColor: "bg-orange-500", description: "你的情商评分偏低，这意味着在情绪管理和人际交往方面可能面临一些挑战。但别担心——情商不是天生固定的，它是一种可以学习和提升的能力！很多高情商的人也是后天修炼的。", strengths: ["认识到需要提升本身就是一种自我觉察", "可能在其他方面（如智力、专业技能）有突出表现", "有成长空间意味着有很大的进步潜力"], weaknesses: ["情绪识别和表达困难", "在社交中可能感到不适", "处理冲突时容易冲动或退缩", "可能难以理解他人的感受和需求"], careerAdvice: "建议先从提升自我觉察开始。尝试冥想、情绪日记，或阅读情商相关的书籍（推荐《情商》丹尼尔·戈尔曼）。", loveAdvice: "在关系中多问「你是什么感受」，练习不带评判地倾听。如果反复遇到关系困难，考虑寻求心理咨询。", famousPeople: [] },
    low: { title: "情商待开发", subtitle: "较大提升空间", emoji: "💪", badgeColor: "bg-red-500", description: "你的评分显示情商方面有较大的提升空间。这不是「缺陷」，而是一个成长的邀请。每个人都有不同的天赋分布——你的能量可能更多放在了其他方面。现在开始关注情商，你会看到巨大的改变。", strengths: ["可能有出色的技术或逻辑能力", "认识到问题是改变的第一步", "有很大的成长潜力"], weaknesses: ["日常情绪管理可能有明显困难", "人际关系中可能频繁遇到误解", "自我觉察能力需要加强", "可能用理性逃避情感话题"], careerAdvice: "强烈建议投入时间学习情商技能。可以从《非暴力沟通》这本书开始，参加情商培训课程，或寻求心理咨询帮助。", loveAdvice: "在关系中的困难不是你的错，但是你的责任。寻求专业支持来学习情感技能，这是最值得的投资。", famousPeople: [] },
  },
};
