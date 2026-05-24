import { TestConfig } from "./types";

const questions = [
  { id: 1, text: "在陌生人面前说话，你会：", type: "single" as const, options: [{ text: "自然交流", value: 1 }, { text: "略有紧张", value: 2 }, { text: "明显心跳加速", value: 3 }, { text: "大脑空白说不出话", value: 4 }] },
  { id: 2, text: "需要在多人面前发言时：", type: "single" as const, options: [{ text: "享受表达", value: 1 }, { text: "可以应付", value: 2 }, { text: "尽量回避", value: 3 }, { text: "宁愿请假也不上台", value: 4 }] },
  { id: 4, text: "餐厅吃饭被服务员注视：", type: "single" as const, options: [{ text: "完全无感", value: 1 }, { text: "略不自在", value: 2 }, { text: "拿筷子都抖", value: 3 }, { text: "宁愿打包回家", value: 4 }] },
  { id: 5, text: "电话/视频通话：", type: "single" as const, options: [{ text: "喜欢这种沟通", value: 1 }, { text: "工作必要时可以", value: 2 }, { text: "总想用文字代替", value: 3 }, { text: "看到来电就紧张", value: 4 }] },
  { id: 6, text: "在公共场合被人注视：", type: "single" as const, options: [{ text: "无所谓", value: 1 }, { text: "稍微有点意识", value: 2 }, { text: "立刻调整姿态/紧张", value: 3 }, { text: "想立刻离开现场", value: 4 }] },
  { id: 7, text: "对方主动和你讨论时：", type: "single" as const, options: [{ text: "积极回应", value: 1 }, { text: "礼貌交流", value: 2 }, { text: "怕说错话很谨慎", value: 3 }, { text: "脑子一片空白", value: 4 }] },
  { id: 8, text: "你担心别人在心里评价你：", type: "single" as const, options: [{ text: "几乎不会", value: 1 }, { text: "偶尔会", value: 2 }, { text: "经常", value: 3 }, { text: "时时刻刻", value: 4 }] },
  { id: 9, text: "聚会结束后你会：", type: "single" as const, options: [{ text: "意犹未尽", value: 1 }, { text: "略有疲惫", value: 2 }, { text: "需要独处充电", value: 3 }, { text: "反复回想自己刚才哪句话说错了", value: 4 }] },
  { id: 10, text: "新加入一个群体时你会：", type: "single" as const, options: [{ text: "主动认识大家", value: 1 }, { text: "等别人来", value: 2 }, { text: "默默观察很久", value: 3 }, { text: "尽量不出现", value: 4 }] },
  { id: 11, text: "电梯里只有你和陌生人：", type: "single" as const, options: [{ text: "可以聊聊天气", value: 1 }, { text: "礼貌微笑", value: 2 }, { text: "假装看手机", value: 3 }, { text: "宁愿等下一趟", value: 4 }] },
  { id: 12, text: "拍照时被要求看镜头：", type: "single" as const, options: [{ text: "笑得很自然", value: 1 }, { text: "可以配合", value: 2 }, { text: "表情僵硬", value: 3 }, { text: "宁可不出镜", value: 4 }] },
  { id: 13, text: "去陌生地方前你会：", type: "single" as const, options: [{ text: "直接出发", value: 1 }, { text: "查一下路线", value: 2 }, { text: "反复演练应对场景", value: 3 }, { text: "想取消行程", value: 4 }] },
  { id: 14, text: "需要拒绝别人时：", type: "single" as const, options: [{ text: "直接说不", value: 1 }, { text: "委婉拒绝", value: 2 }, { text: "纠结很久", value: 3 }, { text: "宁愿勉强答应", value: 4 }] },
  { id: 15, text: "你害怕别人发现你紧张：", type: "single" as const, options: [{ text: "不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "经常掩饰", value: 3 }, { text: "非常害怕被看穿", value: 4 }] },
  { id: 16, text: "向陌生人问路：", type: "single" as const, options: [{ text: "毫无障碍", value: 1 }, { text: "可以问", value: 2 }, { text: "先看导航再问", value: 3 }, { text: "宁愿自己绕路", value: 4 }] },
  { id: 17, text: "团队会议中你通常：", type: "single" as const, options: [{ text: "积极发言", value: 1 }, { text: "适当表达", value: 2 }, { text: "默默听", value: 3 }, { text: "祈祷不要被点名", value: 4 }] },
  { id: 18, text: "社交后你的精力：", type: "single" as const, options: [{ text: "更兴奋", value: 1 }, { text: "略消耗", value: 2 }, { text: "明显疲惫", value: 3 }, { text: "需要躺平一整天", value: 4 }] },
  { id: 19, text: "面对权威人物（老板/老师）：", type: "single" as const, options: [{ text: "正常沟通", value: 1 }, { text: "略紧张但能表达", value: 2 }, { text: "心跳加快声音变小", value: 3 }, { text: "尽量避免接触", value: 4 }] },
  { id: 20, text: "你对社交的整体感受：", type: "single" as const, options: [{ text: "享受", value: 1 }, { text: "中性", value: 2 }, { text: "压力大", value: 3 }, { text: "恐惧", value: 4 }] },
];

function calc(answers: Record<number, number | string>): string {
  let total = 0, count = 0;
  questions.forEach((q) => {
    const a = answers[q.id];
    if (a !== undefined) { total += Number(a); count++; }
  });
  const avg = count > 0 ? total / count : 0;
  if (avg >= 3.3) return "severe";
  if (avg >= 2.6) return "moderate";
  if (avg >= 1.9) return "mild";
  return "none";
}

export const socialAnxietyTest: TestConfig = {
  id: "socialanxiety",
  name: "社交焦虑测试",
  description: "你是社恐还是社牛？测测你的社交焦虑指数",
  duration: "约4分钟",
  questionCount: questions.length,
  questions,
  scoringRules: "19题1-4分，按平均分划分4个等级。",
  disclaimer: "本测试改编自社交焦虑量表概念，仅供自我觉察，不构成临床诊断。",
  calculateResult: calc,
  resultMapping: {
    none: {
      title: "社交牛人型", subtitle: "焦虑指数：⭐", emoji: "🎤", badgeColor: "bg-amber-500",
      description: "你天生是个社交场上的发光体，自来熟、不怵生、能让陌生人秒变朋友。社交于你而言是能量来源，而不是消耗。",
      strengths: ["人际网广", "破冰能力强", "适应陌生环境快", "气氛掌控者"],
      weaknesses: ["可能忽略他人感受", "容易话多失言", "不擅长独处反思", "需要学会倾听"],
      careerAdvice: "你的天赋在销售、公关、主持、创业等高互动职业中能放大。",
      loveAdvice: "在亲密关系中，留点空间给对方表达，不要总是你在说。",
      famousPeople: ["李佳琦", "蔡康永", "高情商主持人们"],
    },
    mild: {
      title: "微社恐型", subtitle: "焦虑指数：⭐⭐", emoji: "🙂", badgeColor: "bg-sky-500",
      description: "你大体可以正常社交，只是偶尔需要充电。陌生场合会略紧张，但能调整过来。这种状态属于健康的内向偏中性。",
      strengths: ["有边界感", "尊重他人空间", "沟通有思考", "深度交流能力强"],
      weaknesses: ["人多场合较累", "需要独处恢复", "可能错失主动机会", "新环境适应稍慢"],
      careerAdvice: "选择1对1或小团队协作的工作环境会让你更舒适和高效。",
      loveAdvice: "你能给伴侣高质量的陪伴，不要因为「不擅交际」而否定自己。",
      famousPeople: ["很多创作者和工程师", "舒适的内向者"],
    },
    moderate: {
      title: "中度社恐型", subtitle: "焦虑指数：⭐⭐⭐", emoji: "😰", badgeColor: "bg-orange-500",
      description: "社交对你来说是一项有成本的活动。你会回避不必要的场合，事后还会反复回想自己的表现。这种内在评判系统让你很累。",
      strengths: ["敏锐的观察力", "深度共情能力", "认真对待每段关系", "文字表达可能很好"],
      weaknesses: ["错失机会", "陷入「社交后反刍」", "自我评价偏低", "容易孤立"],
      careerAdvice: "练习「微暴露」：从小型、安全的社交场景开始练习，逐步扩展舒适圈。",
      loveAdvice: "找到一个能理解你节奏的人，亲密关系不需要你「外向化」。",
      famousPeople: ["很多艺术家、作家", "深度型灵魂"],
    },
    severe: {
      title: "重度社恐型", subtitle: "焦虑指数：⭐⭐⭐⭐", emoji: "🫥", badgeColor: "bg-red-600",
      description: "社交焦虑已经影响你的日常生活——回避电话、聚会、甚至取快递。你长期处于「被审视」的恐惧中。建议寻求专业心理支持。",
      strengths: ["敏感细腻", "深度思考者", "对自我有觉察", "有改变的意愿"],
      weaknesses: ["生活受限", "可能孤独感强", "易陷入低落情绪", "回避带来连锁影响"],
      careerAdvice: "考虑远程、写作、研究类工作，同时配合心理咨询逐步改善。",
      loveAdvice: "你值得被理解，不需要先「变好」才能被爱。允许自己求助。",
      famousPeople: ["很多正在好转的人", "你并不孤单"],
    },
  },
};
