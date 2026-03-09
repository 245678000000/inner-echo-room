import { TestConfig } from "./types";

const pleaserQuestions = [
  { id: 1, text: "别人请你帮忙时，即使你很忙，你也很难说「不」", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 2, text: "你会为了维持和谐而压抑自己的真实想法", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 3, text: "你很在意别人对你的评价", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 4, text: "你习惯性地道歉，即使不是你的错", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 5, text: "你总是优先考虑别人的感受，然后才想到自己", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 6, text: "如果有人对你不满意，你会非常焦虑", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 7, text: "你害怕表达自己的需求，担心给别人添麻烦", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 8, text: "你经常假装开心来取悦别人", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 9, text: "你的自我价值感很大程度依赖于别人的认可", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 10, text: "吵架或冲突会让你感到极度不安", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 11, text: "你会根据不同的人切换不同的「人设」", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 12, text: "你很难直接拒绝别人的邀约", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 13, text: "别人的负面情绪你会不自觉地接收", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 14, text: "你总觉得如果不帮忙，对方就会不喜欢你", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 15, text: "你经常在帮完别人后感到身心俱疲", type: "likert" as const, dimension: "burnout", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 16, text: "你害怕被孤立或被排斥", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 17, text: "你很少主动告诉别人你真正想要什么", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 18, text: "你宁可自己吃亏也不愿让关系变尴尬", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 19, text: "你很擅长察言观色，知道别人想要什么", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 20, text: "你有时觉得自己像在「演戏」而不是做自己", type: "likert" as const, dimension: "suppress", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 21, text: "你经常把「没关系」「都可以」挂嘴边", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 22, text: "你觉得自己的价值来自于对别人有用", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 23, text: "你帮了别人后，如果没得到感谢会有点失落", type: "likert" as const, dimension: "burnout", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 24, text: "你会为别人改变自己的计划和偏好", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 25, text: "你觉得说「不」之后会有强烈的愧疚感", type: "likert" as const, dimension: "boundary", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 26, text: "你害怕让别人失望", type: "likert" as const, dimension: "validation", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 27, text: "你有时候会因为太累而突然情绪崩溃", type: "likert" as const, dimension: "burnout", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 28, text: "你默默承受了很多，但从不说出来", type: "likert" as const, dimension: "burnout", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
];

function calculatePleaser(answers: Record<number, number | string>): string {
  let total = 0;
  let count = 0;
  pleaserQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans !== undefined) {
      total += Number(ans);
      count++;
    }
  });
  const avg = count > 0 ? total / count : 0;
  if (avg >= 4.2) return "severe";
  if (avg >= 3.5) return "high";
  if (avg >= 2.5) return "moderate";
  if (avg >= 1.8) return "mild";
  return "healthy";
}

export const pleaserTest: TestConfig = {
  id: "pleaser",
  name: "讨好型人格测试",
  description: "总把别人需求放第一？发现讨好模式，学会说不",
  duration: "约6分钟",
  questionCount: 28,
  questions: pleaserQuestions,
  scoringRules: "28道题，5点量表计分。平均分4.2+重度讨好倾向、3.5+明显讨好、2.5+轻度讨好、1.8+偶尔讨好、<1.8健康边界。",
  disclaimer: "本测试仅供自我觉察参考，不代表心理诊断。如果讨好行为严重影响生活，建议寻求专业心理咨询。",
  calculateResult: calculatePleaser,
  resultMapping: {
    severe: {
      title: "重度讨好型",
      subtitle: "讨好指数：极高",
      emoji: "😰",
      badgeColor: "bg-red-600",
      description: "你的讨好倾向非常严重。你几乎把所有人的需求都放在自己前面，你活成了别人期待的样子，却忘记了自己想要什么。你的善良是真的，但你的疲惫也是真的。是时候学会爱自己了。",
      strengths: ["极强的共情能力", "善于维护关系和谐", "观察力和洞察力出众", "被大多数人喜欢"],
      weaknesses: ["严重忽视自己的需求", "容易被人利用", "内心积压大量负面情绪", "自我价值感极度依赖外部认可"],
      careerAdvice: "你需要学会在职场设立边界。你的善解人意是优势，但不要让别人把你当「万能胶」。学会说「我需要时间考虑」。",
      loveAdvice: "在感情中你倾向于无条件付出，这会让你越来越累。你值得被同等对待——学会对伴侣说出你的真实需求。",
      famousPeople: ["很多你身边默默付出的好人", "每个曾经「太懂事」的孩子"],
    },
    high: {
      title: "明显讨好型",
      subtitle: "讨好指数：偏高",
      emoji: "🥺",
      badgeColor: "bg-orange-500",
      description: "你有比较明显的讨好倾向。你很在意别人的评价，经常压抑自己的真实想法来维持关系。你的好意是真心的，但你需要意识到：被所有人喜欢不是你的责任。",
      strengths: ["善于察言观色", "人际关系通常不错", "有耐心和包容力", "能让大多数人感到舒适"],
      weaknesses: ["不太会拒绝别人", "经常压抑自己的情绪", "有时感到不被真正理解", "容易在人际关系中过度付出"],
      careerAdvice: "练习在工作中表达不同意见。你的想法很重要——不要总是附和别人。一个敢于说真话的你更有价值。",
      loveAdvice: "恋爱中的你容易失去自我。记住：健康的关系是双方都能做自己，而不是一方不断迁就。",
      famousPeople: ["林黛玉", "许多「懂事」的长姐/长兄"],
    },
    moderate: {
      title: "轻度讨好型",
      subtitle: "讨好指数：中等",
      emoji: "😊",
      badgeColor: "bg-amber-500",
      description: "你有轻度的讨好倾向——在大多数情况下你能做自己，但在某些关系或场景中会不自觉地迎合他人。这是比较正常的社交模式，但仍有提升空间。",
      strengths: ["在自我和他人之间有一定平衡", "社交灵活度较好", "大多数时候能表达真实想法", "有一定的边界意识"],
      weaknesses: ["在特定关系中可能过于迎合", "有时为了避免冲突而妥协", "偶尔压抑自己的需求", "面对权威人物时容易讨好"],
      careerAdvice: "你的平衡感是优势。继续保持自我表达的习惯，在需要时勇敢说出不同意见。",
      loveAdvice: "你在感情中基本能做自己，继续保持。注意在亲密关系中不要渐渐失去自我主张。",
      famousPeople: ["大多数人都有一点讨好倾向", "适度的讨好是社交智慧"],
    },
    mild: {
      title: "偶尔讨好型",
      subtitle: "讨好指数：偏低",
      emoji: "😎",
      badgeColor: "bg-blue-500",
      description: "你很少有讨好行为。你比较清楚自己的边界，能够在尊重他人的同时坚持自己的立场。你偶尔会为了人际和谐做一些让步，但整体上你是一个有主见的人。",
      strengths: ["有清晰的自我认知", "边界感较好", "不太受他人评价影响", "能够适当表达不满"],
      weaknesses: ["偶尔在重要关系中放低姿态", "有时可能显得不够变通", "面对亲近的人时边界可能松动", "有时需要平衡坚持和灵活"],
      careerAdvice: "你的独立性是你的职业优势。保持这份自信，同时注意在团队中保持必要的灵活性。",
      loveAdvice: "你在感情中比较独立，这很好。记得也给伴侣适当的认可和肯定。",
      famousPeople: ["大多数有健康边界的成年人"],
    },
    healthy: {
      title: "健康边界型",
      subtitle: "讨好指数：极低",
      emoji: "💪",
      badgeColor: "bg-green-600",
      description: "恭喜你！你几乎没有讨好倾向。你有非常清晰的自我认知和边界意识，不会为了取悦别人而委屈自己。你活得真实、坦荡，这种品质非常珍贵。",
      strengths: ["极强的自我认知", "边界清晰而健康", "不受外部评价左右", "真实且有主见"],
      weaknesses: ["有时可能显得过于直接", "可能被认为不够「通人情」", "需要注意在坚持自我时的沟通方式", "偶尔可能忽视他人的情感需求"],
      careerAdvice: "你的独立性和真实感是领导力的基础。注意在坚持原则的同时，用温和的方式沟通。",
      loveAdvice: "你的伴侣能感受到你的真实，这很珍贵。在保持自我的同时，也给对方足够的温暖和理解。",
      famousPeople: ["那些活得通透的智者", "敢于说真话的勇者"],
    },
  },
};
