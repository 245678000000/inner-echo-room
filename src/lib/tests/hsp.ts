import { TestConfig } from "./types";

const hspQuestions = [
  { id: 1, text: "嘈杂的环境（商场、KTV）会让你很快感到疲惫", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 2, text: "强烈的灯光或刺眼的阳光会让你不舒服", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 3, text: "衣服的标签或粗糙的面料会让你感觉很难受", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 4, text: "你对气味特别敏感，别人闻不到的你能闻到", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 5, text: "突然的巨响会让你吓一大跳", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 6, text: "别人的情绪（开心或难过）你很容易感同身受", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 7, text: "看电影或电视剧时你很容易哭", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 8, text: "别人不经意的一句话你会反复回想", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 9, text: "你经常被大自然的美景深深打动", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 10, text: "看到别人受苦（哪怕是陌生人），你会感到心痛", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 11, text: "你需要很多独处时间来恢复精力", type: "likert" as const, dimension: "social", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 12, text: "人多的社交场合让你感到消耗", type: "likert" as const, dimension: "social", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 13, text: "你很容易察觉到别人的微表情和语气变化", type: "likert" as const, dimension: "social", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 14, text: "被人催促或观察时你的表现会变差", type: "likert" as const, dimension: "social", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 15, text: "你倾向于避免暴力或恐怖的影视内容", type: "likert" as const, dimension: "social", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 16, text: "忙碌一天后你必须有安静的时间才能入睡", type: "likert" as const, dimension: "overload", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 17, text: "同时处理多件事会让你焦虑不安", type: "likert" as const, dimension: "overload", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 18, text: "你对咖啡因、酒精等刺激物特别敏感", type: "likert" as const, dimension: "overload", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 19, text: "生活中微小的变化（如家具移动）你会立刻注意到", type: "likert" as const, dimension: "overload", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 20, text: "饥饿会严重影响你的情绪和注意力", type: "likert" as const, dimension: "overload", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 21, text: "你对艺术作品（音乐、绘画等）有很深的感受", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 22, text: "你会花很多时间思考生活的意义", type: "likert" as const, dimension: "emotional", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 23, text: "嘈杂的咀嚼声或敲击声会让你心烦", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 24, text: "你经常被人说「想太多了」", type: "likert" as const, dimension: "overload", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
  { id: 25, text: "待在杂乱无序的环境里会让你感到不安", type: "likert" as const, dimension: "sensory", options: [{ text: "完全不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "总是如此", value: 5 }] },
];

function calculateHsp(answers: Record<number, number | string>): string {
  let total = 0;
  let count = 0;
  hspQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans !== undefined) {
      total += Number(ans);
      count++;
    }
  });
  const avg = count > 0 ? total / count : 0;
  if (avg >= 4.2) return "ultra_high";
  if (avg >= 3.5) return "high";
  if (avg >= 2.5) return "moderate";
  if (avg >= 1.8) return "low";
  return "very_low";
}

export const hspTest: TestConfig = {
  id: "hsp",
  name: "高敏感人格测试 (HSP)",
  description: "你是不是容易被环境「电到」？测测敏感度，学会保护自己",
  duration: "约5分钟",
  questionCount: 25,
  questions: hspQuestions,
  scoringRules: "25道题，5点量表计分。计算平均分：4.2+极度敏感、3.5+高度敏感、2.5+中度敏感、1.8+轻度敏感、<1.8不太敏感。",
  disclaimer: "本测试参考Elaine Aron高敏感人格量表简化而成，仅供自我了解参考，不代表专业心理诊断。",
  calculateResult: calculateHsp,
  resultMapping: {
    ultra_high: {
      title: "超级敏感体质",
      subtitle: "HSP指数：极高",
      emoji: "🦋",
      badgeColor: "bg-violet-600",
      description: "你是真正的高敏感人格。你像一台精密的雷达，能捕捉到环境中最细微的变化。声音、光线、气味、他人的情绪——一切都能被你敏锐地感知。这是一种天赋，也是一种挑战。",
      strengths: ["超强的同理心和直觉力", "对美和艺术有极深的感受力", "洞察力远超常人", "创造力和想象力丰富"],
      weaknesses: ["非常容易感到疲惫和过载", "对批评和冲突极度敏感", "容易情绪过载导致崩溃", "需要大量独处时间恢复"],
      careerAdvice: "你适合安静、有创意、能自主安排节奏的工作环境。推荐：艺术创作、心理咨询、写作、花艺、独立设计等。避免高压、嘈杂、快节奏的环境。",
      loveAdvice: "找一个理解你需要安静空间的伴侣。记得告诉对方你的敏感不是矫情，而是你感知世界的方式。",
      famousPeople: ["梵高", "爱因斯坦", "J.K.罗琳", "阿黛尔"],
    },
    high: {
      title: "高敏感型",
      subtitle: "HSP指数：偏高",
      emoji: "🌸",
      badgeColor: "bg-pink-500",
      description: "你有明显的高敏感特质。你对环境刺激比大多数人更敏感，情感也更加丰富细腻。你就像一朵精致的花——美丽而需要适当的呵护。",
      strengths: ["有很强的共情能力", "能注意到别人忽略的细节", "审美能力出众", "直觉准确度高"],
      weaknesses: ["社交后容易感到疲惫", "容易被负面情绪影响", "面对冲突时感到不安", "有时过度思考"],
      careerAdvice: "你适合需要细腻洞察力的工作。推荐：设计师、教师、顾问、编辑、心理工作者等。适当设置边界，保护自己的能量。",
      loveAdvice: "你在感情中非常体贴，但也要注意不要过度消耗自己。找一个情绪稳定的伴侣会让你更安心。",
      famousPeople: ["林黛玉", "周杰伦", "Emma Watson", "村上春树"],
    },
    moderate: {
      title: "中等敏感型",
      subtitle: "HSP指数：适中",
      emoji: "🌿",
      badgeColor: "bg-teal-500",
      description: "你的敏感度处于中等水平，既能感知环境的细微变化，又不会轻易被过度刺激。你在敏感和钝感之间找到了不错的平衡。",
      strengths: ["适应力强", "情绪弹性好", "既能感受也能放下", "社交和独处都能享受"],
      weaknesses: ["特定压力下可能变得敏感", "有时忽视自己的情绪信号", "偶尔共情不够深入", "压力积累时可能突然爆发"],
      careerAdvice: "你的平衡性让你适合大多数工作环境。你能在需要时展现敏感，也能在需要时保持冷静。",
      loveAdvice: "你在感情中比较灵活，能适应不同类型的伴侣。保持开放的沟通是你关系中的关键。",
      famousPeople: ["大多数成功人士都在这个范围", "平衡就是你的超能力"],
    },
    low: {
      title: "钝感力型",
      subtitle: "HSP指数：偏低",
      emoji: "🏔️",
      badgeColor: "bg-blue-600",
      description: "你有很好的钝感力——不容易被外界刺激影响。你像一座稳定的山，风吹雨打都不太能撼动你。这在现代社会是一种非常实用的能力。",
      strengths: ["抗压能力强", "不容易受外界干扰", "情绪稳定", "适应各种环境"],
      weaknesses: ["可能忽视微妙的情绪信号", "有时不够理解敏感的人", "可能错过一些细腻的体验", "对他人的痛苦反应较慢"],
      careerAdvice: "你适合高压、快节奏的工作环境。推荐：管理岗位、危机处理、医疗急救、竞技运动等。",
      loveAdvice: "如果你的伴侣比较敏感，试着多关注ta的情绪变化。你的稳定对ta来说就是最好的安全感。",
      famousPeople: ["特朗普", "马斯克", "董明珠", "专业运动员们"],
    },
    very_low: {
      title: "超级钝感力",
      subtitle: "HSP指数：极低",
      emoji: "🗿",
      badgeColor: "bg-gray-600",
      description: "你几乎不受外界刺激影响，拥有超强的钝感力。你的神经像钢铁一样坚固，很少因为环境变化而感到不适。在这个充满焦虑的时代，这是一种稀有的能力。",
      strengths: ["极度抗压", "不受外界影响", "执行力超强", "永远情绪稳定"],
      weaknesses: ["可能显得缺乏同理心", "不太理解别人为什么那么敏感", "可能忽视身体和情绪的预警信号", "在需要细腻的场合可能反应不够"],
      careerAdvice: "你是天生的高压岗位候选人。推荐：外科医生、消防员、军人、交易员、极限运动员等。",
      loveAdvice: "在感情中多留意对方的情绪变化，即使你觉得「没什么大不了」，对方可能正在经历一场风暴。",
      famousPeople: ["贝爷（Bear Grylls）", "硬汉型明星", "极限运动员们"],
    },
  },
};
