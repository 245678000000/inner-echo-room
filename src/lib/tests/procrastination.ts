import { TestConfig } from "./types";

const questions = [
  { id: 1, text: "面对deadline，你通常：", type: "single" as const, options: [{ text: "提前几天搞定", value: 1 }, { text: "中段开始做", value: 2 }, { text: "最后一晚通宵", value: 3 }, { text: "经常逾期", value: 4 }] },
  { id: 2, text: "需要开始一项重要任务时，你会：", type: "single" as const, options: [{ text: "立刻动手", value: 1 }, { text: "先整理一下桌面/列清单", value: 2 }, { text: "刷一会儿手机再说", value: 3 }, { text: "找各种理由推迟", value: 4 }] },
  { id: 3, text: "明明知道该睡觉了，却还在刷视频/玩手机：", type: "single" as const, options: [{ text: "几乎不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "经常", value: 3 }, { text: "每天如此", value: 4 }] },
  { id: 4, text: "面对不喜欢但必须做的事情：", type: "single" as const, options: [{ text: "硬着头皮先完成", value: 1 }, { text: "拆解后逐步完成", value: 2 }, { text: "拖到不能再拖", value: 3 }, { text: "宁愿承担后果也不想做", value: 4 }] },
  { id: 5, text: "你设定的计划，完成率大概是：", type: "single" as const, options: [{ text: "90%以上", value: 1 }, { text: "60-80%", value: 2 }, { text: "30-50%", value: 3 }, { text: "不到30%", value: 4 }] },
  { id: 6, text: "当任务很复杂时，你会：", type: "single" as const, options: [{ text: "拆解成小步骤", value: 1 }, { text: "先查资料思考", value: 2 }, { text: "感到焦虑然后逃避", value: 3 }, { text: "彻底放弃", value: 4 }] },
  { id: 7, text: "回消息/邮件的速度：", type: "single" as const, options: [{ text: "看到就回", value: 1 }, { text: "一两天内回", value: 2 }, { text: "一周左右", value: 3 }, { text: "经常忘记回", value: 4 }] },
  { id: 8, text: "拖延之后你会：", type: "single" as const, options: [{ text: "下次提前完成", value: 1 }, { text: "自责一下下次注意", value: 2 }, { text: "持续自我攻击", value: 3 }, { text: "习以为常无感", value: 4 }] },
  { id: 9, text: "面对喜欢但难度高的事情，你会：", type: "single" as const, options: [{ text: "兴奋地开始", value: 1 }, { text: "做准备工作", value: 2 }, { text: "想做但迟迟不开始", value: 3 }, { text: "只停留在幻想阶段", value: 4 }] },
  { id: 10, text: "工作/学习时你能专注多久：", type: "single" as const, options: [{ text: "1小时以上", value: 1 }, { text: "30分钟左右", value: 2 }, { text: "10-20分钟", value: 3 }, { text: "5分钟就想划水", value: 4 }] },
  { id: 11, text: "答应别人的事情：", type: "single" as const, options: [{ text: "总是按时完成", value: 1 }, { text: "大部分按时", value: 2 }, { text: "经常迟交", value: 3 }, { text: "经常忘记或失约", value: 4 }] },
  { id: 12, text: "想到要做的事就感到压力：", type: "single" as const, options: [{ text: "几乎不会", value: 1 }, { text: "偶尔", value: 2 }, { text: "经常", value: 3 }, { text: "每天都这样", value: 4 }] },
  { id: 13, text: "你的待办清单上有多少积压任务：", type: "single" as const, options: [{ text: "基本清空", value: 1 }, { text: "3-5件", value: 2 }, { text: "10件以上", value: 3 }, { text: "数都数不清", value: 4 }] },
  { id: 14, text: "决定做一件事到实际开始，通常间隔：", type: "single" as const, options: [{ text: "几分钟内", value: 1 }, { text: "几小时", value: 2 }, { text: "几天", value: 3 }, { text: "几周甚至更久", value: 4 }] },
  { id: 15, text: "你对「拖延」这件事的感受：", type: "single" as const, options: [{ text: "我从不拖延", value: 1 }, { text: "偶尔拖延但可控", value: 2 }, { text: "严重影响生活了", value: 3 }, { text: "已经躺平接受", value: 4 }] },
  { id: 16, text: "做事前你会先：", type: "single" as const, options: [{ text: "直接开始", value: 1 }, { text: "简单规划", value: 2 }, { text: "无限准备就是不开始", value: 3 }, { text: "把房间整个收拾一遍", value: 4 }] },
  { id: 17, text: "面对失败的可能，你会：", type: "single" as const, options: [{ text: "试了再说", value: 1 }, { text: "评估后行动", value: 2 }, { text: "因害怕失败而不开始", value: 3 }, { text: "完全放弃尝试", value: 4 }] },
  { id: 18, text: "看着别人完成任务，你会：", type: "single" as const, options: [{ text: "为他们开心", value: 1 }, { text: "受到激励行动", value: 2 }, { text: "焦虑但还是不动", value: 3 }, { text: "陷入自我否定", value: 4 }] },
];

function calc(answers: Record<number, number | string>): string {
  let total = 0, count = 0;
  questions.forEach((q) => {
    const a = answers[q.id];
    if (a !== undefined) { total += Number(a); count++; }
  });
  const avg = count > 0 ? total / count : 0;
  if (avg >= 3.3) return "severe";
  if (avg >= 2.6) return "heavy";
  if (avg >= 1.9) return "moderate";
  return "light";
}

export const procrastinationTest: TestConfig = {
  id: "procrastination",
  name: "拖延症测试",
  description: "你是隐形拖延患者吗？测测你的拖延等级",
  duration: "约4分钟",
  questionCount: questions.length,
  questions,
  scoringRules: "18题1-4分，按平均分划分4个等级。",
  disclaimer: "本测试仅供自我觉察参考，不构成临床诊断。",
  calculateResult: calc,
  resultMapping: {
    light: {
      title: "效率达人型", subtitle: "拖延指数：⭐", emoji: "🚀", badgeColor: "bg-emerald-500",
      description: "你几乎不拖延，是别人眼中的「执行力天花板」。你享受把事情按计划推进的掌控感，deadline 对你来说只是参考线。",
      strengths: ["执行力超强", "自律性高", "时间管理出色", "可靠度满分"],
      weaknesses: ["可能过度紧绷", "容易给自己上太多发条", "对慢节奏的人缺乏耐心", "需要给自己留休息空间"],
      careerAdvice: "你的执行力是核心竞争力。注意防止过劳，把效率红利转化为深度思考时间。",
      loveAdvice: "在关系中给伴侣多一点节奏弹性，不是所有人都像你一样自带「待办闹钟」。",
      famousPeople: ["稻盛和夫", "高效执行的产品经理们"],
    },
    moderate: {
      title: "正常拖延型", subtitle: "拖延指数：⭐⭐", emoji: "😌", badgeColor: "bg-sky-500",
      description: "你会拖延，但拖得有分寸。重要的事还是能搞定，只是过程可能伴随一些「先刷会手机」。整体状态健康。",
      strengths: ["弹性好", "压力下能爆发", "懂得劳逸结合", "不会过度焦虑"],
      weaknesses: ["偶尔小事堆积", "睡前刷手机停不下来", "存在「明日复明日」", "可以更主动规划"],
      careerAdvice: "学习「2分钟法则」——能2分钟做完的事立刻做，剩下的进入计划表。",
      loveAdvice: "记得别把回消息拖太久，亲密关系需要的是即时的小回应。",
      famousPeople: ["大多数都市青年", "正常的你和我"],
    },
    heavy: {
      title: "深度拖延型", subtitle: "拖延指数：⭐⭐⭐", emoji: "🦥", badgeColor: "bg-orange-500",
      description: "拖延已经开始影响你的生活质量了。你常常在 deadline 边缘救火，事后又陷入自责循环。这背后往往不是懒，而是焦虑和完美主义。",
      strengths: ["压力下创造力惊人", "高敏感善反思", "对质量有要求", "有觉察意识"],
      weaknesses: ["持续的自我消耗", "睡眠质量下降", "影响人际承诺", "陷入「拖延-焦虑」循环"],
      careerAdvice: "尝试番茄工作法、任务拆解到「5分钟可启动」颗粒度。改善「开始」比追求「完美完成」更重要。",
      loveAdvice: "对伴侣坦诚你的卡点，让对方理解你的节奏，避免被误解为「不在乎」。",
      famousPeople: ["很多创意工作者", "正在自救的你"],
    },
    severe: {
      title: "重度拖延型", subtitle: "拖延指数：⭐⭐⭐⭐", emoji: "🌋", badgeColor: "bg-red-600",
      description: "你的拖延已经形成模式化逃避，伴随明显的焦虑、自责甚至抑郁倾向。这可能与执行功能、情绪调节有关，建议寻求专业帮助。",
      strengths: ["敏感细腻", "想得很深", "对自己有高要求", "有改变的意愿"],
      weaknesses: ["生活/工作受影响", "自我评价持续走低", "情绪长期紧绷", "可能伴随睡眠问题"],
      careerAdvice: "降低任务起点，把目标缩小到「不会失败」的程度，比如「打开文档」「写一行字」即算完成。",
      loveAdvice: "允许自己求助。告诉信任的人你正在经历什么，外部支持比硬抗更有效。",
      famousPeople: ["很多正在求助心理咨询的人", "你值得被温柔对待"],
    },
  },
};
