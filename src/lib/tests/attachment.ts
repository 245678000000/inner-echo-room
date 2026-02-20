import { TestConfig } from "./types";

const likertOptions = [
  { text: "非常不同意", value: 1 },
  { text: "不同意", value: 2 },
  { text: "有点不同意", value: 3 },
  { text: "中立", value: 4 },
  { text: "有点同意", value: 5 },
  { text: "同意", value: 6 },
  { text: "非常同意", value: 7 },
];

const questions = [
  // 焦虑维度 (18题) - anxiety
  { id: 1, text: "我常常担心伴侣不是真的喜欢我。", dimension: "anxiety" },
  { id: 2, text: "我害怕一旦对方真正了解我，就不会喜欢真实的我。", dimension: "anxiety" },
  { id: 3, text: "我经常担心伴侣会离开我。", dimension: "anxiety" },
  { id: 4, text: "我很担心自己在亲密关系中投入太多而对方不在乎。", dimension: "anxiety" },
  { id: 5, text: "我需要伴侣反复确认ta是爱我的。", dimension: "anxiety" },
  { id: 6, text: "如果伴侣没有及时回消息，我会感到不安。", dimension: "anxiety" },
  { id: 7, text: "当伴侣不在身边时，我担心ta可能对别人感兴趣。", dimension: "anxiety" },
  { id: 8, text: "我总担心自己不够好，配不上伴侣。", dimension: "anxiety" },
  { id: 9, text: "吵架后我会非常焦虑，急于和好。", dimension: "anxiety" },
  { id: 10, text: "我常常会过度解读伴侣的一个表情或一句话。", dimension: "anxiety" },
  { id: 11, text: "我在关系中经常感到患得患失。", dimension: "anxiety" },
  { id: 12, text: "如果伴侣对我冷淡一点，我就会怀疑ta是不是不爱我了。", dimension: "anxiety" },
  { id: 13, text: "我发现自己在一段关系里很难真正放松。", dimension: "anxiety" },
  { id: 14, text: "我会频繁查看伴侣的社交动态，想知道ta在做什么。", dimension: "anxiety" },
  { id: 15, text: "我害怕被抛弃，这种恐惧有时很强烈。", dimension: "anxiety" },
  { id: 16, text: "恋爱中我常常感到不安全。", dimension: "anxiety" },
  { id: 17, text: "我需要很多亲密互动才能觉得关系是稳定的。", dimension: "anxiety" },
  { id: 18, text: "如果感觉伴侣在疏远我，我会变得非常紧张。", dimension: "anxiety" },

  // 回避维度 (18题) - avoidance
  { id: 19, text: "我不太喜欢向伴侣展示内心深处的感受。", dimension: "avoidance" },
  { id: 20, text: "和别人太亲近会让我不舒服。", dimension: "avoidance" },
  { id: 21, text: "我倾向于不依赖任何人。", dimension: "avoidance" },
  { id: 22, text: "我不太愿意和伴侣分享我的想法和感受。", dimension: "avoidance" },
  { id: 23, text: "当伴侣想要更亲密时，我会想退缩。", dimension: "avoidance" },
  { id: 24, text: "我觉得完全信任一个人是很难的。", dimension: "avoidance" },
  { id: 25, text: "在感情中我更喜欢保持一定距离。", dimension: "avoidance" },
  { id: 26, text: "我觉得独立比依赖别人更重要。", dimension: "avoidance" },
  { id: 27, text: "伴侣太黏人会让我想逃。", dimension: "avoidance" },
  { id: 28, text: "我很少对伴侣说「我爱你」或表达深层感受。", dimension: "avoidance" },
  { id: 29, text: "我觉得亲密关系会限制我的自由。", dimension: "avoidance" },
  { id: 30, text: "当关系变得太认真时，我会感到压力。", dimension: "avoidance" },
  { id: 31, text: "我不太需要别人的情感支持。", dimension: "avoidance" },
  { id: 32, text: "我更喜欢自己解决问题而不是求助伴侣。", dimension: "avoidance" },
  { id: 33, text: "和伴侣肢体亲密有时让我不自在。", dimension: "avoidance" },
  { id: 34, text: "我觉得不应该对一段感情抱太大期望。", dimension: "avoidance" },
  { id: 35, text: "在关系中我经常需要独处的空间。", dimension: "avoidance" },
  { id: 36, text: "我觉得承诺是一件很有压力的事。", dimension: "avoidance" },
].map((q) => ({
  ...q,
  type: "likert" as const,
  options: likertOptions,
}));

function calculateAttachment(answers: Record<number, number | string>): string {
  let anxietySum = 0;
  let avoidanceSum = 0;
  let anxietyCount = 0;
  let avoidanceCount = 0;

  questions.forEach((q) => {
    const val = Number(answers[q.id]);
    if (!val) return;
    if (q.dimension === "anxiety") { anxietySum += val; anxietyCount++; }
    if (q.dimension === "avoidance") { avoidanceSum += val; avoidanceCount++; }
  });

  const anxietyAvg = anxietyCount > 0 ? anxietySum / anxietyCount : 4;
  const avoidanceAvg = avoidanceCount > 0 ? avoidanceSum / avoidanceCount : 4;

  const highAnxiety = anxietyAvg > 4;
  const highAvoidance = avoidanceAvg > 4;

  if (!highAnxiety && !highAvoidance) return "secure";
  if (highAnxiety && !highAvoidance) return "anxious";
  if (!highAnxiety && highAvoidance) return "avoidant";
  return "fearful";
}

export const attachmentTest: TestConfig = {
  id: "attachment",
  name: "成人依恋模型测试",
  description: "基于ECR-R量表，36道题揭示你在亲密关系中的依恋模式",
  duration: "约8分钟",
  questionCount: 36,
  questions,
  scoringRules: "焦虑维度(1-18题)和回避维度(19-36题)分别取平均分，以4分为界分为高低，交叉得出4种类型。",
  disclaimer: "本测试基于ECR-R量表简化版，仅供自我探索参考，不构成专业心理评估。如有亲密关系困扰，建议咨询专业心理咨询师。",
  calculateResult: calculateAttachment,
  resultMapping: {
    secure: { title: "安全型依恋", subtitle: "低焦虑 · 低回避", emoji: "🤗", badgeColor: "bg-emerald-500", description: "你在亲密关系中感到自在和安全。你相信自己值得被爱，也相信伴侣是可靠的。你能够自然地表达情感、接受亲密，同时保持健康的独立性。你是关系中的「定海神针」。", strengths: ["能建立深度信任", "情绪稳定，安全感强", "善于表达需求和感受", "亲密与独立之间平衡良好"], weaknesses: ["可能不太理解不安全型伴侣的挣扎", "有时过于乐观地看待关系问题", "可能对伴侣的不安全行为缺乏敏感"], careerAdvice: "你的情商和人际能力是职场优势，适合需要团队协作和人际沟通的岗位。", loveAdvice: "继续保持你的安全基地功能。如果伴侣是不安全型的，给予更多耐心和稳定的回应。", famousPeople: ["奥巴马夫妇", "黄磊和孙莉", "贾静雯和修杰楷"] },
    anxious: { title: "焦虑型依恋", subtitle: "高焦虑 · 低回避", emoji: "💓", badgeColor: "bg-rose-500", description: "你非常渴望亲密和连接，但总是担心对方不够爱你。你可能会反复确认关系的稳定性，一点小事就能让你心神不宁。你的爱很浓烈，只是有时会被不安全感「绑架」。", strengths: ["对感情极其用心投入", "善于察觉伴侣的情绪变化", "热情且渴望深度连接", "对关系非常忠诚"], weaknesses: ["容易过度解读伴侣行为", "对「已读不回」极度敏感", "可能会用争吵来测试对方", "情绪波动较大"], careerAdvice: "你的敏锐和同理心是优势，但要注意工作中保持情绪稳定，避免把人际焦虑带入职场。", loveAdvice: "你的不安全感不是伴侣造成的，而是童年经历的回声。练习自我安抚，试着用「我需要...」代替指责式沟通。", famousPeople: ["玛丽莲·梦露", "泰勒·斯威夫特（歌词中体现）", "林黛玉"] },
    avoidant: { title: "回避型依恋", subtitle: "低焦虑 · 高回避", emoji: "🏔️", badgeColor: "bg-blue-500", description: "你重视独立和自主，对过于亲密的关系感到不适。你并非不需要爱，而是习惯了用「不依赖」来保护自己。在你的世界里，一个人也可以很好。", strengths: ["独立性强，不容易在关系中迷失自我", "情绪稳定，很少「作」", "自我成长能力强", "在压力下保持冷静"], weaknesses: ["难以表达和接受深层情感", "伴侣可能觉得你冷漠", "遇到冲突容易逃避或冷处理", "可能用忙碌来回避亲密"], careerAdvice: "你的独立性和抗压力是职场优势，适合需要独立工作和理性决策的岗位。", loveAdvice: "试着在安全的关系中一点一点打开自己。亲密不等于失去自我。你值得被完整地爱。", famousPeople: ["村上春树", "周星驰", "高仓健"] },
    fearful: { title: "恐惧型依恋", subtitle: "高焦虑 · 高回避", emoji: "🌊", badgeColor: "bg-purple-500", description: "你内心深处渴望亲密，但又害怕受伤。你就像一个矛盾体——想靠近又想逃跑，想被爱又怕被伤。这种「推拉」让你在关系中非常辛苦。", strengths: ["内心世界丰富深邃", "对人性有深刻理解", "一旦信任会非常忠诚", "共情能力极强"], weaknesses: ["在关系中容易「推拉」", "难以建立稳定的信任", "情绪波动较大", "可能在关系好的时候主动破坏"], careerAdvice: "你的深度思考和共情力适合创意、心理、文学等领域，但注意维护职场人际关系的稳定性。", loveAdvice: "你需要的不是一个完美伴侣，而是一段足够安全的关系来疗愈过去的创伤。如果可以，建议尝试心理咨询来探索依恋模式的根源。", famousPeople: ["张爱玲", "梵高", "Amy Winehouse"] },
  },
};
