import { TestConfig } from "./types";

const mentalBurnQuestions = [
  { id: 1, text: "睡前你的大脑还在不停地回放白天发生的事", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 2, text: "你经常在脑子里跟人「对话」（想着该怎么说、怎么回应）", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 3, text: "做了一个决定后，你会反复想「这样做对不对」", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 4, text: "你经常感到疲惫，但其实什么也没做", type: "likert" as const, dimension: "exhaustion", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 5, text: "你容易因为别人的一句话就反复琢磨半天", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 6, text: "你总是担心还没发生的事情", type: "likert" as const, dimension: "anxiety", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 7, text: "你觉得自己一直在「消耗电量」但没有「充电」", type: "likert" as const, dimension: "exhaustion", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 8, text: "你经常觉得「什么都不想做」但又「觉得自己应该做点什么」", type: "likert" as const, dimension: "conflict", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 9, text: "你会因为「浪费了时间」而自责", type: "likert" as const, dimension: "conflict", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 10, text: "你的脑子里总是有很多想法在打架", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 11, text: "你经常幻想最坏的结果", type: "likert" as const, dimension: "anxiety", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 12, text: "你在休息的时候也没有真正放松过", type: "likert" as const, dimension: "exhaustion", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 13, text: "你经常觉得「大家都过得比我好」", type: "likert" as const, dimension: "conflict", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 14, text: "你做一件事前会在脑子里排练很多遍", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 15, text: "你总觉得自己不够好、不够努力", type: "likert" as const, dimension: "conflict", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 16, text: "即使事情已经解决了，你还是会反复回想", type: "likert" as const, dimension: "rumination", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 17, text: "你对自己的要求很高，达不到就很痛苦", type: "likert" as const, dimension: "conflict", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 18, text: "你有时会突然感到一阵莫名的焦虑或恐惧", type: "likert" as const, dimension: "anxiety", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 19, text: "你觉得自己的情绪像过山车一样不稳定", type: "likert" as const, dimension: "exhaustion", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
  { id: 20, text: "你经常觉得很累但又睡不好", type: "likert" as const, dimension: "exhaustion", options: [{ text: "从来没有", value: 1 }, { text: "偶尔", value: 2 }, { text: "有时", value: 3 }, { text: "经常", value: 4 }, { text: "每天都是", value: 5 }] },
];

function calculateMentalBurn(answers: Record<number, number | string>): string {
  let total = 0;
  let count = 0;
  mentalBurnQuestions.forEach((q) => {
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
  return "peaceful";
}

export const mentalBurnTest: TestConfig = {
  id: "mentalburn",
  name: "精神内耗测试",
  description: "大脑24小时在线？测测内耗程度，学着放过自己",
  duration: "约4分钟",
  questionCount: 20,
  questions: mentalBurnQuestions,
  scoringRules: "20道题，5点量表计分。平均分4.2+严重内耗、3.5+中度内耗、2.5+轻度内耗、1.8+基本正常、<1.8内心平静。",
  disclaimer: "本测试仅供自我觉察参考，不代表心理诊断。如果精神内耗严重影响日常生活，请及时寻求专业帮助。",
  calculateResult: calculateMentalBurn,
  resultMapping: {
    severe: {
      title: "严重内耗中",
      subtitle: "内耗指数：极高",
      emoji: "🔥",
      badgeColor: "bg-red-600",
      description: "你的大脑几乎24小时都在高速运转。你不是不够努力，而是太用力了。反复的自我审判、对未来的焦虑、对过去的纠结——这些念头像一团乱麻，让你筋疲力尽却什么都做不了。你需要停下来，给大脑放个假。",
      strengths: ["说明你是一个有深度思考能力的人", "你对自己有高标准", "你的共情能力很强", "你的内省能力远超常人"],
      weaknesses: ["严重的精力消耗", "决策困难和拖延", "睡眠质量很差", "情绪波动大，容易崩溃"],
      careerAdvice: "你现在最需要的不是更努力，而是学会「放下」。试试冥想、运动或写日记来释放思绪。如果持续影响工作，建议寻求专业心理咨询。",
      loveAdvice: "你可能在感情中过度思考，把简单的事情复杂化。试着信任你的伴侣，不是所有沉默都代表不满。",
      famousPeople: ["太宰治", "梵高", "伍尔夫", "许多创作型天才"],
    },
    high: {
      title: "中度内耗",
      subtitle: "内耗指数：偏高",
      emoji: "😮‍💨",
      badgeColor: "bg-orange-500",
      description: "你的内耗程度比较高。你经常陷入反复思考的循环，睡前大脑停不下来，容易被小事消耗精力。虽然你还能正常运转，但你比大多数人都累。",
      strengths: ["有较强的自我觉察能力", "做事考虑周到", "共情能力好", "有深度思考的习惯"],
      weaknesses: ["容易陷入思维反刍", "有拖延倾向", "休息时也不够放松", "容易焦虑和自我怀疑"],
      careerAdvice: "学会给自己设定「思考截止时间」——想5分钟如果没答案就先放下。行动起来比反复想要有效得多。",
      loveAdvice: "不要在脑子里替对方做判断。有疑问就直接问，比你在心里演一百遍剧情要好。",
      famousPeople: ["很多敏感又才华横溢的人", "许多完美主义者"],
    },
    moderate: {
      title: "轻度内耗",
      subtitle: "内耗指数：中等",
      emoji: "🤔",
      badgeColor: "bg-amber-500",
      description: "你有一些内耗的迹象，但整体还在可控范围内。偶尔会陷入反复思考，但大多数时候你能调节自己。在压力大的时候，内耗可能会加重。",
      strengths: ["基本能调控自己的思维", "有一定的自我觉察", "压力不大时状态良好", "有成长和改善的空间"],
      weaknesses: ["压力大时容易陷入负面循环", "有时候想太多", "偶尔因为内耗影响效率", "需要学习更好的思维管理方法"],
      careerAdvice: "你的状态总体还不错，可以通过运动、冥想等方式提前预防内耗加重。多关注当下，少焦虑未来。",
      loveAdvice: "你在感情中基本能保持理性，但压力大的时候可能会过度解读对方的行为。深呼吸，别急着下结论。",
      famousPeople: ["大多数现代打工人", "在忙碌中寻找平衡的人"],
    },
    mild: {
      title: "基本正常",
      subtitle: "内耗指数：偏低",
      emoji: "😌",
      badgeColor: "bg-blue-500",
      description: "你的精神内耗程度很低。你大多数时候能活在当下，不会被过多的杂念困扰。你有比较好的情绪调节能力和思维管理能力。",
      strengths: ["思维清晰，不易被杂念干扰", "行动力强，不过度思考", "睡眠质量好", "情绪稳定"],
      weaknesses: ["偶尔在重大决策前会多想", "有时可能不够深思熟虑", "可能不太理解内耗严重的人", "需要保持当前的好状态"],
      careerAdvice: "保持你现有的好状态！你的行动力和清晰思维是很大的优势。",
      loveAdvice: "如果你的伴侣内耗比较严重，给ta多一些耐心和理解。ta需要的不是解决方案，而是你的陪伴。",
      famousPeople: ["行动力强的企业家们", "活在当下的智者"],
    },
    peaceful: {
      title: "内心平静型",
      subtitle: "内耗指数：极低",
      emoji: "🧘",
      badgeColor: "bg-green-600",
      description: "你几乎没有精神内耗！你的大脑能够很好地切换工作和休息模式，想完了就放下，做完了就不想了。你活在当下的能力让人羡慕。",
      strengths: ["极强的活在当下能力", "大脑能快速切换模式", "情绪稳定且平和", "行动力强，不纠结"],
      weaknesses: ["可能被认为「大条」或「不够敏感」", "有时可能忽视需要深入思考的问题", "可能不太理解别人的焦虑", "需要注意平衡果断和深思"],
      careerAdvice: "你的心态是你最大的竞争力。保持这份内心的平静，同时在需要深度思考时给自己足够的时间。",
      loveAdvice: "你的平静是伴侣的定心丸。在对方焦虑时，你的存在本身就是最好的安慰。",
      famousPeople: ["修禅的智者", "心态极好的运动员", "真正活通透的人"],
    },
  },
};
