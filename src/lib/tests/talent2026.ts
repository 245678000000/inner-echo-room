import { TestConfig } from "./types";

const talent2026Questions = [
  {
    id: 1,
    text: "第一眼看这张图，你最先注意到什么？",
    type: "single" as const,
    dimension: "vision1",
    image: "/images/talent_q1.png",
    options: [
      { text: "一张人脸的轮廓", value: "face" },
      { text: "一只奔跑的猎豹", value: "cheetah" },
      { text: "一只展翅的乌鸦", value: "crow" },
    ],
  },
  {
    id: 2,
    text: "再看这张图，你第一眼看到的是什么？",
    type: "single" as const,
    dimension: "vision2",
    image: "/images/talent_q2.png",
    options: [
      { text: "一棵大树", value: "tree" },
      { text: "两个人的侧脸", value: "faces" },
      { text: "一条蜿蜒的河流", value: "river" },
    ],
  },
  {
    id: 3,
    text: "最后一张图，你最先看到什么？",
    type: "single" as const,
    dimension: "vision3",
    image: "/images/talent_q3.png",
    options: [
      { text: "一颗星星/光芒", value: "star" },
      { text: "一双手", value: "hands" },
      { text: "一把钥匙", value: "key" },
    ],
  },
];

function calculateTalent2026(answers: Record<number, number | string>): string {
  const ans1 = answers[1] as string;
  const ans2 = answers[2] as string;
  const ans3 = answers[3] as string;

  const scores: Record<string, number> = {
    creative: 0,
    leadership: 0,
    intuition: 0,
    empathy: 0,
    strategic: 0,
    healing: 0,
  };

  if (ans1 === "face") { scores.empathy += 2; scores.intuition += 1; }
  if (ans1 === "cheetah") { scores.leadership += 2; scores.strategic += 1; }
  if (ans1 === "crow") { scores.intuition += 2; scores.creative += 1; }

  if (ans2 === "tree") { scores.healing += 2; scores.empathy += 1; }
  if (ans2 === "faces") { scores.empathy += 1; scores.leadership += 1; scores.intuition += 1; }
  if (ans2 === "river") { scores.creative += 2; scores.strategic += 1; }

  if (ans3 === "star") { scores.creative += 1; scores.leadership += 2; }
  if (ans3 === "hands") { scores.healing += 2; scores.empathy += 1; }
  if (ans3 === "key") { scores.strategic += 2; scores.intuition += 1; }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

export const talent2026Test: TestConfig = {
  id: "talent2026",
  name: "2026最强天赋测试",
  description: "看图第一眼看到脸/猎豹/乌鸦？决定你2026最闪耀天赋",
  duration: "30秒",
  questionCount: 3,
  questions: talent2026Questions,
  scoringRules: "3道视觉选择题，根据第一直觉选择的组合，匹配6种天赋类型：创造力、领导力、直觉力、共情力、战略力、治愈力。",
  disclaimer: "本测试纯属娱乐性质，基于视觉心理学的趣味测试，不代表科学评估。相信你的每一种天赋都很闪耀！",
  calculateResult: calculateTalent2026,
  resultMapping: {
    creative: {
      title: "创造力天赋",
      subtitle: "2026你最闪耀的天赋",
      emoji: "🎨",
      badgeColor: "bg-violet-600",
      description: "你的第一直觉揭示了你超凡的创造力天赋！你天生能看到别人看不到的东西，你的大脑像一台永不停歇的创意机器。2026年，你的创造力将是你最大的武器。无论是艺术、设计、文案还是商业创新，你都能创造出令人惊叹的作品。",
      strengths: ["想象力丰富，脑洞大开", "能把抽象概念变成现实", "审美能力出众", "善于打破常规"],
      weaknesses: ["有时想法太多难以落地", "可能不够务实", "容易三分钟热度", "需要学会聚焦"],
      careerAdvice: "2026年大胆追求创意类事业！无论是自媒体、设计、艺术创作还是创新创业，都是你大放异彩的领域。",
      loveAdvice: "你的浪漫和创意会让感情充满惊喜。2026年，用你的创造力为爱情注入新鲜感。",
      famousPeople: ["毕加索", "乔布斯", "宫崎骏", "Lady Gaga"],
    },
    leadership: {
      title: "领导力天赋",
      subtitle: "2026你最闪耀的天赋",
      emoji: "👑",
      badgeColor: "bg-amber-600",
      description: "你的直觉揭示了你天生的领导力！你能一眼看到全局，知道该往哪个方向走。2026年，你的领导力将带领你和你身边的人走向新高度。你不只是追随趋势的人，你就是趋势本身。",
      strengths: ["天生的号召力", "决策果断有魄力", "能激励和带动他人", "战略眼光出众"],
      weaknesses: ["有时过于强势", "可能忽视细节", "需要学会倾听", "有时太急于求成"],
      careerAdvice: "2026年是你展现领导力的一年！无论是创业、管理还是带团队，你都能发挥出色。",
      loveAdvice: "在感情中放下「指挥」模式，学会和伴侣平等对话。你的魄力很吸引人，但爱需要柔软。",
      famousPeople: ["马斯克", "奥普拉", "拿破仑", "董明珠"],
    },
    intuition: {
      title: "直觉力天赋",
      subtitle: "2026你最闪耀的天赋",
      emoji: "🔮",
      badgeColor: "bg-indigo-600",
      description: "你拥有超强的直觉力！你能感知到空气中看不见的信号，你的第六感准确率高得吓人。2026年，相信你的直觉——它会引导你做出最正确的选择。你的直觉是你最宝贵的内在罗盘。",
      strengths: ["第六感极强", "能预判趋势和走向", "对人的判断很准", "危机感知能力出众"],
      weaknesses: ["有时过于依赖感觉", "可能缺少理性验证", "容易想太多", "直觉有时也会出错"],
      careerAdvice: "2026年用你的直觉力在投资、创业或人际决策中抢占先机。你总能在别人还在分析时就已经看到答案。",
      loveAdvice: "你的直觉能帮你找到对的人。2026年，相信你的心，但也给对方证明自己的机会。",
      famousPeople: ["爱因斯坦", "乔布斯", "巫师型人格", "许多成功的投资人"],
    },
    empathy: {
      title: "共情力天赋",
      subtitle: "2026你最闪耀的天赋",
      emoji: "💝",
      badgeColor: "bg-rose-500",
      description: "你天生拥有超凡的共情力！你能感受到别人的喜怒哀乐，甚至在对方开口之前就知道ta在想什么。2026年，你的共情力将成为你最强大的连接工具——无论是在工作还是生活中。",
      strengths: ["超强的同理心", "能读懂他人的情绪", "善于建立深度连接", "天生的倾听者和治愈者"],
      weaknesses: ["容易被他人情绪影响", "有时承受太多不属于自己的负担", "需要学会保护自己的能量", "容易过度付出"],
      careerAdvice: "2026年你在需要「理解人」的领域将大放异彩：心理咨询、教育、用户研究、社区运营等。",
      loveAdvice: "你是天生的好伴侣，但记得也照顾好自己的情绪。2026年，学会在给予爱的同时接受爱。",
      famousPeople: ["戴安娜王妃", "甘地", "特蕾莎修女", "许多心理咨询师"],
    },
    strategic: {
      title: "战略力天赋",
      subtitle: "2026你最闪耀的天赋",
      emoji: "♟️",
      badgeColor: "bg-emerald-700",
      description: "你拥有出色的战略思维！你像一个棋手一样，总能提前好几步看到结局。2026年，你的战略力将帮你在复杂局面中找到最优解。你不打无准备之仗，你的每一步都经过深思熟虑。",
      strengths: ["全局观极强", "善于规划和布局", "能在复杂中找到最优解", "冷静理性"],
      weaknesses: ["有时过于谨慎", "可能错过需要快速行动的机会", "容易想太多而不行动", "有时给人冷漠的感觉"],
      careerAdvice: "2026年发挥你的战略优势！适合做管理咨询、产品策略、投资分析、企业规划等需要全局视角的工作。",
      loveAdvice: "感情不能全靠「算计」，有时候需要跟着心走。2026年，试着在爱情中多一些感性。",
      famousPeople: ["诸葛亮", "巴菲特", "孙子", "比尔·盖茨"],
    },
    healing: {
      title: "治愈力天赋",
      subtitle: "2026你最闪耀的天赋",
      emoji: "🌸",
      badgeColor: "bg-pink-500",
      description: "你天生拥有治愈他人的能力！你的存在本身就像一缕温暖的阳光，能让身边的人感到安心和平静。2026年，这个世界需要你的温暖。你的治愈力是这个焦虑时代最稀缺的天赋。",
      strengths: ["天生让人感到安心", "能化解冲突和负面情绪", "温暖而有力量", "善于支持和鼓励他人"],
      weaknesses: ["可能忽视自己的需求", "容易过度付出", "需要学会自我关怀", "有时承担太多情感重量"],
      careerAdvice: "2026年你在助人型职业中会发光：心理咨询、医疗、教育、社工、瑜伽导师等。你的存在就是最好的疗愈。",
      loveAdvice: "你是伴侣最好的港湾。2026年，记得也让自己被爱和被照顾。你也值得被治愈。",
      famousPeople: ["特蕾莎修女", "南丁格尔", "很多默默温暖世界的人"],
    },
  },
};
