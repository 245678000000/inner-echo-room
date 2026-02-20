import { TestConfig } from "./types";

const likertOptions = [
  { text: "从不", value: 0 },
  { text: "很少", value: 1 },
  { text: "有时", value: 2 },
  { text: "经常", value: 3 },
  { text: "非常频繁", value: 4 },
];

const questions = [
  // Part A (6题) - 高灵敏度筛查
  { id: 1, text: "当你需要完成一项乏味或困难的任务时，你多常感到难以集中注意力？", dimension: "inattention" },
  { id: 2, text: "你多常在做完需要仔细思考的事情后发现粗心犯错？", dimension: "inattention" },
  { id: 3, text: "当别人直接跟你说话时，你多常走神？", dimension: "inattention" },
  { id: 4, text: "你多常感到坐立不安或手脚动来动去？", dimension: "hyperactivity" },
  { id: 5, text: "在需要安静坐着的场合（如开会），你多常感到内心焦躁不安？", dimension: "hyperactivity" },
  { id: 6, text: "你多常在闲暇时间仍感到过度活跃、停不下来？", dimension: "hyperactivity" },

  // Part B (12题) - 补充评估
  { id: 7, text: "你多常在工作或学习中忽视细节？", dimension: "inattention" },
  { id: 8, text: "你多常难以把一件事情做到有条不紊、井然有序？", dimension: "inattention" },
  { id: 9, text: "你多常忘记约会或需要做的事情？", dimension: "inattention" },
  { id: 10, text: "当一项任务需要动很多脑筋时，你多常逃避或拖延？", dimension: "inattention" },
  { id: 11, text: "你多常因为外界的动静或活动而分心？", dimension: "inattention" },
  { id: 12, text: "你多常在和别人聊天时离开座位走动？", dimension: "hyperactivity" },
  { id: 13, text: "你多常感到不安、好像非得活动一下不可？", dimension: "hyperactivity" },
  { id: 14, text: "你多常在独处放松的时候也很难安静下来？", dimension: "hyperactivity" },
  { id: 15, text: "你多常在社交场合说太多话？", dimension: "impulsivity" },
  { id: 16, text: "你多常在别人还没说完话时就抢着接话？", dimension: "impulsivity" },
  { id: 17, text: "你多常在排队或需要等待时感到很难忍耐？", dimension: "impulsivity" },
  { id: 18, text: "你多常打断别人正在做的事或说的话？", dimension: "impulsivity" },
].map((q) => ({ ...q, type: "likert" as const, options: likertOptions }));

function calculateAdhd(answers: Record<number, number | string>): string {
  // Part A 筛查 (题1-6)
  let partAFlags = 0;
  const partAThresholds: Record<number, number> = { 1: 2, 2: 2, 3: 2, 4: 3, 5: 3, 6: 3 };
  for (let i = 1; i <= 6; i++) {
    const val = Number(answers[i]) || 0;
    if (val >= partAThresholds[i]) partAFlags++;
  }

  let totalScore = 0;
  questions.forEach((q) => { totalScore += Number(answers[q.id]) || 0; });

  if (partAFlags >= 4 || totalScore >= 46) return "high";
  if (partAFlags >= 2 || totalScore >= 28) return "moderate";
  return "low";
}

export const adhdTest: TestConfig = {
  id: "adhd",
  name: "成人ADHD筛查测试",
  description: "基于ASRS v1.1量表，18道题初步筛查成人注意力缺陷/多动特征",
  duration: "约3分钟",
  questionCount: 18,
  questions,
  scoringRules: "Part A(1-6题)为核心筛查，4项以上达标则高度疑似；Part B(7-18)补充评估；总分0-72分。",
  disclaimer: "⚠️ 重要提醒：本测试仅为初步筛查工具，不能替代专业医学诊断。ADHD的确诊需要精神科医生进行全面评估。如结果显示较高风险，强烈建议您前往正规医院精神科就诊。",
  calculateResult: calculateAdhd,
  resultMapping: {
    low: { title: "低风险", subtitle: "ADHD特征不明显", emoji: "😌", badgeColor: "bg-green-500", description: "根据你的回答，你目前的注意力和活动水平在正常范围内。你的ADHD相关特征不明显，日常生活和工作学习应该没有受到注意力问题的明显影响。", strengths: ["注意力管理能力良好", "能够完成需要专注的任务", "冲动控制能力正常", "日常功能运作良好"], weaknesses: ["偶尔的注意力分散是正常的", "压力大时可能出现暂时的注意力下降"], careerAdvice: "你的注意力管理能力不是瓶颈，选择职业时更多关注兴趣和能力即可。", loveAdvice: "良好的注意力意味着你能更好地倾听和陪伴伴侣。继续保持！", famousPeople: [] },
    moderate: { title: "中等风险", subtitle: "部分ADHD特征", emoji: "🤔", badgeColor: "bg-yellow-500", description: "你的回答显示存在一些ADHD相关特征，但尚不能确定是否构成临床问题。这些特征可能在压力大或任务枯燥时更明显。建议你关注这些表现，必要时可以咨询专业人士。", strengths: ["你可能拥有跳跃性思维带来的创造力", "精力充沛可能是优势", "多任务处理能力可能较强", "对新鲜事物保持好奇"], weaknesses: ["注意力可能不够持久", "可能存在拖延倾向", "在需要高度专注的任务上可能吃力", "可能有轻微的冲动决策倾向"], careerAdvice: "选择能利用你多动力和创造力的工作。避免过于重复和单调的岗位。可以尝试使用番茄工作法等工具来管理注意力。", loveAdvice: "和伴侣沟通你的注意力特点，制定适合双方的相处模式。", famousPeople: [] },
    high: { title: "高风险", subtitle: "ADHD特征明显", emoji: "⚡", badgeColor: "bg-red-500", description: "你的回答显示存在较为明显的ADHD相关特征。请注意，这并不意味着你一定患有ADHD，但强烈建议你前往正规医院精神科进行专业评估和诊断。ADHD是可以通过药物和行为干预有效管理的。", strengths: ["ADHD人群往往具有超强创造力", "对感兴趣的事物有「超级专注」能力", "精力旺盛、思维活跃", "善于在压力下爆发"], weaknesses: ["注意力持续集中困难", "时间管理和任务规划可能是挑战", "冲动控制需要更多努力", "可能影响人际关系和学业/工作表现"], careerAdvice: "ADHD不是缺陷，是不同的大脑运作方式。选择充满变化和创意的职业（如创业、设计、自媒体），避免高度重复的工作。务必寻求专业医疗帮助。", loveAdvice: "了解ADHD对亲密关系的影响，和伴侣一起学习如何更好地相处。专业治疗会大大改善关系质量。", famousPeople: ["迈克尔·菲尔普斯", "威尔·史密斯", "Justin Timberlake", "理查德·布兰森"] },
  },
};
