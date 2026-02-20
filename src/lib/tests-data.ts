export interface TestMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  questionCount: number;
  duration: string;
  category: "personality" | "relationship" | "ability" | "mental_health";
  categoryLabel: string;
  gradient: string;
}

export const testList: TestMeta[] = [
  {
    id: "mbti",
    title: "MBTI 16人格",
    subtitle: "发现你的人格密码",
    description: "探索你是思考者还是感受者，是社交达人还是独处爱好者？28道题揭秘你的16型人格。",
    emoji: "🧠",
    questionCount: 28,
    duration: "5分钟",
    category: "personality",
    categoryLabel: "人格",
    gradient: "bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400",
  },
  {
    id: "attachment",
    title: "成人依恋模型",
    subtitle: "你的爱情模式是什么？",
    description: "基于ECR-R量表，了解你在亲密关系中的焦虑与回避倾向，发现你的依恋类型。",
    emoji: "💝",
    questionCount: 36,
    duration: "8分钟",
    category: "relationship",
    categoryLabel: "关系",
    gradient: "bg-gradient-to-br from-pink-500 via-rose-400 to-orange-400",
  },
  {
    id: "enneagram",
    title: "九型人格",
    subtitle: "找到你的内在动力",
    description: "九种人格原型，哪一种最像你？了解你的核心驱动力、恐惧和成长方向。",
    emoji: "✨",
    questionCount: 36,
    duration: "7分钟",
    category: "personality",
    categoryLabel: "人格",
    gradient: "bg-gradient-to-br from-amber-400 via-yellow-500 to-lime-400",
  },
  {
    id: "holland",
    title: "霍兰德职业兴趣",
    subtitle: "找到你的职业方向",
    description: "RIASEC六维度测评，发现最适合你的职业类型和发展方向。",
    emoji: "💼",
    questionCount: 30,
    duration: "5分钟",
    category: "ability",
    categoryLabel: "能力",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    id: "adhd",
    title: "成人ADHD筛查",
    subtitle: "注意力自测",
    description: "基于ASRS v1.1量表，18道题初步筛查成人注意力缺陷/多动特征。",
    emoji: "⚡",
    questionCount: 18,
    duration: "3分钟",
    category: "mental_health",
    categoryLabel: "心理健康",
    gradient: "bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400",
  },
  {
    id: "eq",
    title: "情商EQ测试",
    subtitle: "你的情商有多高？",
    description: "33道题全面评估你的情商水平，涵盖自我认知、社交认知等5大维度。",
    emoji: "💡",
    questionCount: 33,
    duration: "6分钟",
    category: "ability",
    categoryLabel: "能力",
    gradient: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500",
  },
];

export const categories = [
  { key: "all", label: "全部" },
  { key: "personality", label: "🧠 人格" },
  { key: "relationship", label: "💕 关系" },
  { key: "ability", label: "⚡ 能力" },
  { key: "mental_health", label: "🩺 心理健康" },
];
