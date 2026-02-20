export interface TestMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  questionCount: number;
  duration: string;
  category: "personality" | "relationship" | "ability";
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
];

export const categories = [
  { key: "all", label: "全部" },
  { key: "personality", label: "🧠 人格" },
  { key: "relationship", label: "💕 关系" },
  { key: "ability", label: "⚡ 能力" },
];
