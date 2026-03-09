import { TestConfig } from "./types";

const iqQuestions = [
  { id: 1, text: "如果 2, 4, 8, 16, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "24", value: 0 }, { text: "30", value: 0 }, { text: "32", value: 1 }, { text: "36", value: 0 }] },
  { id: 2, text: "「苹果」对于「水果」，相当于「椅子」对于：", type: "single" as const, dimension: "analogy", options: [{ text: "桌子", value: 0 }, { text: "家具", value: 1 }, { text: "木头", value: 0 }, { text: "坐", value: 0 }] },
  { id: 3, text: "1, 1, 2, 3, 5, 8, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "11", value: 0 }, { text: "12", value: 0 }, { text: "13", value: 1 }, { text: "14", value: 0 }] },
  { id: 4, text: "如果所有的鱼都会游泳，而金鱼是鱼，那么：", type: "single" as const, dimension: "logic", options: [{ text: "金鱼不一定会游泳", value: 0 }, { text: "金鱼一定会游泳", value: 1 }, { text: "有些金鱼会游泳", value: 0 }, { text: "无法确定", value: 0 }] },
  { id: 5, text: "3, 6, 11, 18, 27, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "36", value: 0 }, { text: "38", value: 1 }, { text: "35", value: 0 }, { text: "40", value: 0 }] },
  { id: 6, text: "以下哪个词语与其他三个不同类？", type: "single" as const, dimension: "classify", options: [{ text: "钢琴", value: 0 }, { text: "小提琴", value: 0 }, { text: "鼓", value: 0 }, { text: "画笔", value: 1 }] },
  { id: 7, text: "一个农夫有17只羊，除了9只都死了，还剩几只？", type: "single" as const, dimension: "logic", options: [{ text: "8只", value: 0 }, { text: "9只", value: 1 }, { text: "17只", value: 0 }, { text: "0只", value: 0 }] },
  { id: 8, text: "64, 32, 16, 8, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "2", value: 0 }, { text: "4", value: 1 }, { text: "6", value: 0 }, { text: "0", value: 0 }] },
  { id: 9, text: "「医生」对于「医院」，相当于「教师」对于：", type: "single" as const, dimension: "analogy", options: [{ text: "学生", value: 0 }, { text: "教室", value: 0 }, { text: "学校", value: 1 }, { text: "课本", value: 0 }] },
  { id: 10, text: "如果 A > B，B > C，那么以下哪个一定正确？", type: "single" as const, dimension: "logic", options: [{ text: "C > A", value: 0 }, { text: "A = C", value: 0 }, { text: "A > C", value: 1 }, { text: "B = A", value: 0 }] },
  { id: 11, text: "2, 6, 12, 20, 30, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "40", value: 0 }, { text: "42", value: 1 }, { text: "36", value: 0 }, { text: "44", value: 0 }] },
  { id: 12, text: "以下哪个图形与其他三个不同？", type: "single" as const, dimension: "classify", options: [{ text: "正方形", value: 0 }, { text: "长方形", value: 0 }, { text: "三角形", value: 1 }, { text: "梯形", value: 0 }] },
  { id: 13, text: "小明比小红大3岁，小红比小华大2岁。如果小华10岁，小明几岁？", type: "single" as const, dimension: "logic", options: [{ text: "13岁", value: 0 }, { text: "14岁", value: 0 }, { text: "15岁", value: 1 }, { text: "16岁", value: 0 }] },
  { id: 14, text: "1, 4, 9, 16, 25, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "30", value: 0 }, { text: "36", value: 1 }, { text: "35", value: 0 }, { text: "49", value: 0 }] },
  { id: 15, text: "「热」对于「冷」，相当于「高」对于：", type: "single" as const, dimension: "analogy", options: [{ text: "大", value: 0 }, { text: "低", value: 1 }, { text: "长", value: 0 }, { text: "远", value: 0 }] },
  { id: 16, text: "一根绳子对折再对折后剪一刀，会变成几段？", type: "single" as const, dimension: "spatial", options: [{ text: "3段", value: 0 }, { text: "4段", value: 0 }, { text: "5段", value: 1 }, { text: "8段", value: 0 }] },
  { id: 17, text: "100, 81, 64, 49, 36, ?，问号处应该是什么数字？", type: "single" as const, dimension: "pattern", options: [{ text: "16", value: 0 }, { text: "20", value: 0 }, { text: "24", value: 0 }, { text: "25", value: 1 }] },
  { id: 18, text: "如果「CLOUD」用密码写成「DMPVE」，那么「RAIN」会写成：", type: "single" as const, dimension: "logic", options: [{ text: "SBJO", value: 1 }, { text: "QZGM", value: 0 }, { text: "SBJM", value: 0 }, { text: "QZHM", value: 0 }] },
  { id: 19, text: "时钟指向3:15时，时针和分针之间的夹角是多少度？", type: "single" as const, dimension: "spatial", options: [{ text: "0度", value: 0 }, { text: "7.5度", value: 1 }, { text: "15度", value: 0 }, { text: "90度", value: 0 }] },
  { id: 20, text: "一个正方体有几条棱？", type: "single" as const, dimension: "spatial", options: [{ text: "8条", value: 0 }, { text: "10条", value: 0 }, { text: "12条", value: 1 }, { text: "6条", value: 0 }] },
];

function calculateIq(answers: Record<number, number | string>): string {
  let correct = 0;
  iqQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans === 1) correct++;
  });

  const ratio = correct / iqQuestions.length;
  if (ratio >= 0.9) return "genius";
  if (ratio >= 0.75) return "superior";
  if (ratio >= 0.6) return "above_avg";
  if (ratio >= 0.4) return "average";
  if (ratio >= 0.25) return "below_avg";
  return "developing";
}

export const iqTest: TestConfig = {
  id: "iq",
  name: "智商IQ测试",
  description: "快速测测你的智力水平（简易版瑞文矩阵）",
  duration: "约10分钟",
  questionCount: 20,
  questions: iqQuestions,
  scoringRules: "每道题1分，根据正确率划分智力等级：90%+天才、75%+优秀、60%+中上、40%+正常、25%+待发展、其他发展中。",
  disclaimer: "本测试为简易娱乐版智力测试，不等同于专业IQ测试（如韦氏智力量表）。真实IQ需由专业人士进行标准化测评。",
  calculateResult: calculateIq,
  resultMapping: {
    genius: {
      title: "天才级别",
      subtitle: "IQ 130+",
      emoji: "🧠",
      badgeColor: "bg-violet-700",
      description: "恭喜你！你展现出了极高的逻辑推理和问题解决能力。你的思维敏捷、洞察力强，能快速看穿复杂问题的本质。你在数字规律、逻辑推理和空间想象方面都表现出色。",
      strengths: ["超强的逻辑推理能力", "敏锐的模式识别能力", "出色的问题解决能力", "快速的信息处理速度"],
      weaknesses: ["可能过于追求智力上的完美", "有时忽视情商的重要性", "可能对简单事物缺乏耐心", "容易陷入过度分析"],
      careerAdvice: "你的智力优势适合科学研究、数学、编程、人工智能、金融分析等高度用脑的领域。",
      loveAdvice: "高智商是你的优势，但记得在感情中也要用心感受，而不只是用脑分析。",
      famousPeople: ["爱因斯坦", "霍金", "冯·诺伊曼", "陶哲轩"],
    },
    superior: {
      title: "优秀水平",
      subtitle: "IQ 115-130",
      emoji: "⭐",
      badgeColor: "bg-blue-600",
      description: "你的逻辑思维能力明显高于平均水平。你善于发现规律、分析问题，在数字推理和逻辑判断方面表现突出。你有很强的学习能力和适应能力。",
      strengths: ["优秀的逻辑分析能力", "善于发现规律和模式", "学习能力强", "思维清晰有条理"],
      weaknesses: ["有时过于依赖逻辑而忽视直觉", "可能对自己要求过高", "面对模糊问题时可能不适", "偶尔缺乏创造性思维"],
      careerAdvice: "适合工程师、医生、律师、数据分析师、管理顾问等需要较强分析能力的职业。",
      loveAdvice: "你的聪明是加分项，但真正吸引人的是你愿意用心倾听和理解对方。",
      famousPeople: ["比尔·盖茨", "扎克伯格", "任正非", "屠呦呦"],
    },
    above_avg: {
      title: "中上水平",
      subtitle: "IQ 105-115",
      emoji: "🌟",
      badgeColor: "bg-teal-600",
      description: "你的智力水平高于大多数人。你有不错的逻辑思维和分析能力，能够处理较复杂的问题。在日常工作和学习中，你的思维敏捷度和理解力都表现良好。",
      strengths: ["思维较为敏捷", "有较好的问题解决能力", "能理解复杂概念", "学习效率较高"],
      weaknesses: ["面对高难度问题时可能吃力", "有时缺乏深度思考", "注意力持续时间可提升", "需要更多练习来提升"],
      careerAdvice: "你适合大多数知识型工作，发挥你的学习能力不断成长，潜力很大。",
      loveAdvice: "你善于理解他人，这是很好的感情基础。保持好奇心，和伴侣一起成长。",
      famousPeople: ["马云", "雷军", "刘强东", "俞敏洪"],
    },
    average: {
      title: "正常水平",
      subtitle: "IQ 90-105",
      emoji: "💪",
      badgeColor: "bg-green-600",
      description: "你的智力水平处于正常范围，这代表了大多数人的水平。你有基本的逻辑推理能力，能处理日常问题。记住，智商只是成功的一个因素，努力和情商同样重要。",
      strengths: ["踏实稳健", "能处理日常问题", "有发展潜力", "不急不躁"],
      weaknesses: ["复杂逻辑问题需要更多时间", "数字敏感度有提升空间", "抽象思维可以加强", "需要更多练习"],
      careerAdvice: "智商不是唯一的成功因素。选择你热爱的领域，用努力和坚持来弥补，你一样可以出色。",
      loveAdvice: "感情中的智慧比智商更重要。你的真诚和用心是最好的爱情筹码。",
      famousPeople: ["大多数成功企业家", "许多优秀运动员", "众多杰出艺术家", "无数辛勤工作者"],
    },
    below_avg: {
      title: "待提升",
      subtitle: "IQ 85-90",
      emoji: "🌱",
      badgeColor: "bg-amber-500",
      description: "你在本次测试中的表现低于平均水平，但这并不代表你的真实能力。智商测试只衡量特定类型的智力，你可能在其他方面（如社交、艺术、运动）有出色的才能。",
      strengths: ["可能有出色的社交智力", "可能有艺术或运动天赋", "有很大的提升空间", "实践能力可能很强"],
      weaknesses: ["逻辑推理需要加强", "数字规律敏感度较低", "抽象思维需要练习", "可能需要更多时间处理复杂问题"],
      careerAdvice: "每个人都有自己独特的天赋。找到你真正擅长和热爱的领域，你一样能发光发亮。",
      loveAdvice: "用你的真心和善良去经营感情，这比任何高智商都重要。",
      famousPeople: ["爱迪生（小时候被认为愚笨）", "丘吉尔（学校表现平平）", "阿甘（虚构但鼓舞人心）", "许多白手起家的企业家"],
    },
    developing: {
      title: "发展中",
      subtitle: "继续加油",
      emoji: "🚀",
      badgeColor: "bg-orange-500",
      description: "这次测试结果不太理想，但请不要气馁！可能是时间紧张或题型不熟悉。智力是可以通过训练提高的，多做逻辑练习和数学题能有效提升。记住，成功靠的不只是智商。",
      strengths: ["有很大的进步空间", "可能在其他领域有特长", "态度和努力比智商更重要", "坚持学习就能进步"],
      weaknesses: ["逻辑思维需要系统训练", "解题速度需要提升", "可能对这类题型不够熟悉", "需要更多练习积累"],
      careerAdvice: "找到你的兴趣所在，用热情和坚持去追求。很多领域不需要高智商，需要的是热爱和努力。",
      loveAdvice: "真诚、善良、努力——这些品质远比智商重要。做最好的自己就够了。",
      famousPeople: ["无数通过努力改变命运的人", "靠热爱和坚持成功的艺术家", "白手起家的创业者", "每一个不放弃的追梦人"],
    },
  },
};
