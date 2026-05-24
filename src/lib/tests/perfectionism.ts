import { TestConfig } from "./types";

const questions = [
  { id: 1, text: "提交工作前你会反复检查：", type: "single" as const, options: [{ text: "看一遍就交", value: 1 }, { text: "检查2-3遍", value: 2 }, { text: "检查5遍以上", value: 3 }, { text: "永远觉得不够好", value: 4 }] },
  { id: 2, text: "做不到100%的事情你会：", type: "single" as const, options: [{ text: "完成就好", value: 1 }, { text: "尽量优化", value: 2 }, { text: "焦虑不安", value: 3 }, { text: "宁可不做", value: 4 }] },
  { id: 3, text: "别人犯小错你会：", type: "single" as const, options: [{ text: "无所谓", value: 1 }, { text: "提醒一下", value: 2 }, { text: "心里不爽", value: 3 }, { text: "无法忍受", value: 4 }] },
  { id: 4, text: "自己犯小错你会：", type: "single" as const, options: [{ text: "下次注意", value: 1 }, { text: "复盘原因", value: 2 }, { text: "反复自责", value: 3 }, { text: "怀疑整个自我", value: 4 }] },
  { id: 5, text: "对「差不多就行」这句话的感受：", type: "single" as const, options: [{ text: "完全认同", value: 1 }, { text: "看情况", value: 2 }, { text: "听了不舒服", value: 3 }, { text: "无法接受", value: 4 }] },
  { id: 6, text: "拍照修图你会修多久：", type: "single" as const, options: [{ text: "不修", value: 1 }, { text: "5分钟内", value: 2 }, { text: "半小时起", value: 3 }, { text: "修到怀疑人生", value: 4 }] },
  { id: 7, text: "你对自己的高标准：", type: "single" as const, options: [{ text: "合理", value: 1 }, { text: "偶尔严苛", value: 2 }, { text: "常常苛刻", value: 3 }, { text: "从未满意", value: 4 }] },
  { id: 8, text: "面对失败你会：", type: "single" as const, options: [{ text: "总结经验", value: 1 }, { text: "短暂沮丧", value: 2 }, { text: "长期纠结", value: 3 }, { text: "全盘否定自己", value: 4 }] },
  { id: 9, text: "做计划时你会：", type: "single" as const, options: [{ text: "粗略规划", value: 1 }, { text: "细化重点", value: 2 }, { text: "精确到小时", value: 3 }, { text: "做计划比执行还久", value: 4 }] },
  { id: 10, text: "听到批评你会：", type: "single" as const, options: [{ text: "客观接收", value: 1 }, { text: "略不舒服但反思", value: 2 }, { text: "情绪低落很久", value: 3 }, { text: "崩溃想逃", value: 4 }] },
  { id: 11, text: "对生活整洁度的要求：", type: "single" as const, options: [{ text: "随意", value: 1 }, { text: "基本整洁", value: 2 }, { text: "必须有秩序", value: 3 }, { text: "一根头发掉地都崩溃", value: 4 }] },
  { id: 12, text: "你会因为细节不完美而推翻整个方案：", type: "single" as const, options: [{ text: "从不", value: 1 }, { text: "偶尔", value: 2 }, { text: "经常", value: 3 }, { text: "总是这样", value: 4 }] },
  { id: 13, text: "对成果不满意你会：", type: "single" as const, options: [{ text: "下次改进", value: 1 }, { text: "想办法补救", value: 2 }, { text: "推倒重来", value: 3 }, { text: "陷入无限重做", value: 4 }] },
  { id: 14, text: "你觉得「足够好」这个标准：", type: "single" as const, options: [{ text: "很现实", value: 1 }, { text: "看情况用", value: 2 }, { text: "是种妥协", value: 3 }, { text: "是失败的代名词", value: 4 }] },
  { id: 15, text: "你害怕被人发现你的缺点：", type: "single" as const, options: [{ text: "不害怕", value: 1 }, { text: "偶尔在意", value: 2 }, { text: "经常担心", value: 3 }, { text: "时刻紧绷", value: 4 }] },
  { id: 16, text: "尝试新事物时你会：", type: "single" as const, options: [{ text: "享受过程", value: 1 }, { text: "希望表现好", value: 2 }, { text: "害怕做不好", value: 3 }, { text: "因怕出丑而放弃", value: 4 }] },
  { id: 17, text: "你常因为「还没准备好」而推迟行动：", type: "single" as const, options: [{ text: "几乎不", value: 1 }, { text: "偶尔", value: 2 }, { text: "经常", value: 3 }, { text: "一直如此", value: 4 }] },
];

function calc(answers: Record<number, number | string>): string {
  let total = 0, count = 0;
  questions.forEach((q) => {
    const a = answers[q.id];
    if (a !== undefined) { total += Number(a); count++; }
  });
  const avg = count > 0 ? total / count : 0;
  if (avg >= 3.3) return "toxic";
  if (avg >= 2.6) return "high";
  if (avg >= 1.9) return "healthy";
  return "relaxed";
}

export const perfectionismTest: TestConfig = {
  id: "perfectionism",
  name: "完美主义测试",
  description: "细节控还是松弛感？测测你的完美主义等级",
  duration: "约4分钟",
  questionCount: questions.length,
  questions,
  scoringRules: "17题1-4分，按平均分划分4个等级。",
  disclaimer: "本测试仅供自我觉察参考，不构成临床诊断。",
  calculateResult: calc,
  resultMapping: {
    relaxed: {
      title: "松弛感大师型", subtitle: "完美主义：⭐", emoji: "🍃", badgeColor: "bg-emerald-500",
      description: "你天生具备「差不多就好」的智慧，知道生活不是表演，能完成、能享受、能继续往前走，就已经很棒。你的松弛感是当代稀缺品。",
      strengths: ["不内耗", "行动力强", "心理弹性好", "幸福感高"],
      weaknesses: ["可能对细节不够敏感", "有些场合需要更严谨", "可能错失精进机会", "需要在关键时刻聚焦"],
      careerAdvice: "在创意类、试错类、需要快速迭代的工作中你如鱼得水。",
      loveAdvice: "你的松弛感是关系中的疗愈剂，能让伴侣放下表演型的疲惫。",
      famousPeople: ["佛系生活博主们", "懂得享受当下的人"],
    },
    healthy: {
      title: "健康追求型", subtitle: "完美主义：⭐⭐", emoji: "🌟", badgeColor: "bg-sky-500",
      description: "你对自己有要求，但能在「精益求精」和「适可而止」之间找到平衡。这是最理想的完美主义状态——驱动你成长，但不消耗你。",
      strengths: ["有上进心", "执行有质量", "懂得权衡", "心理稳定"],
      weaknesses: ["压力大时可能滑向苛刻", "需要警惕「卷」自己", "偶尔难以授权他人", "学会按权重分配精力"],
      careerAdvice: "你是项目里的「靠谱担当」，注意把控好节奏，避免完美主义反噬。",
      loveAdvice: "和伴侣沟通时多说「足够好」，少说「应该」，让彼此都呼吸顺畅。",
      famousPeople: ["大多数有成就的专业人士", "成熟的高表现者"],
    },
    high: {
      title: "高度完美主义型", subtitle: "完美主义：⭐⭐⭐", emoji: "🎯", badgeColor: "bg-orange-500",
      description: "你的标准很高，对自己尤其苛刻。常常因为细节而内耗、推迟、自责。「完美」成了你的双刃剑——推着你优秀，也压得你疲惫。",
      strengths: ["产出质量高", "对细节敏锐", "对自我要求强", "成就感驱动"],
      weaknesses: ["持续焦虑", "拖延（因怕做不好）", "难以享受成果", "容易倦怠"],
      careerAdvice: "尝试「足够好优先」原则：先交付80分版本，再迭代。完成比完美更重要。",
      loveAdvice: "降低对伴侣和关系的「完美期待」，亲密关系里有缺口才有亲近。",
      famousPeople: ["乔布斯", "很多A型人格的精英"],
    },
    toxic: {
      title: "毒性完美主义型", subtitle: "完美主义：⭐⭐⭐⭐", emoji: "⚠️", badgeColor: "bg-red-600",
      description: "你的完美主义已经变成自我攻击的武器。你常常因为「不够好」而瘫痪、放弃、失眠、自我厌恶。这种模式与焦虑、抑郁、强迫倾向高度相关，建议寻求心理咨询。",
      strengths: ["极强的自我觉察", "深度思考力", "对世界有美的追求", "有改变的勇气"],
      weaknesses: ["严重自我消耗", "执行力被瘫痪", "情绪长期紧绷", "可能伴随强迫/焦虑"],
      careerAdvice: "用「最小可行」代替「最完美」，把任务拆成可以「丑陋完成」的小步。",
      loveAdvice: "让自己被看见缺点是最深的亲密。允许不完美，也允许被爱。",
      famousPeople: ["很多创作者背后的隐痛", "你值得被温柔以待"],
    },
  },
};
