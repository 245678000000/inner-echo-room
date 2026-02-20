import { TestConfig } from "./types";

const likertOptions = [
  { text: "完全不符合", value: 1 },
  { text: "不太符合", value: 2 },
  { text: "一般", value: 3 },
  { text: "比较符合", value: 4 },
  { text: "非常符合", value: 5 },
];

const questions = [
  // 1型 完美主义者 (4题)
  { id: 1, text: "我对自己要求很高，做事总想做到最好。", dimension: "1" },
  { id: 2, text: "看到别人做事不规范或不认真，我会感到不舒服。", dimension: "1" },
  { id: 3, text: "我有很强的是非观，对「对错」很敏感。", dimension: "1" },
  { id: 4, text: "我经常会自我反省，觉得自己还不够好。", dimension: "1" },

  // 2型 助人者 (4题)
  { id: 5, text: "帮助别人让我感到快乐和有价值。", dimension: "2" },
  { id: 6, text: "我能很快感受到别人的需要，并主动提供帮助。", dimension: "2" },
  { id: 7, text: "我希望被别人需要，这让我有存在感。", dimension: "2" },
  { id: 8, text: "我有时会因为太关注别人而忽略了自己的需求。", dimension: "2" },

  // 3型 成就者 (4题)
  { id: 9, text: "我很在意自己在别人眼中的形象和成就。", dimension: "3" },
  { id: 10, text: "我喜欢设定目标并且努力达成。", dimension: "3" },
  { id: 11, text: "失败对我来说是很难接受的事情。", dimension: "3" },
  { id: 12, text: "我会根据不同场合调整自己的表现方式。", dimension: "3" },

  // 4型 个人主义者 (4题)
  { id: 13, text: "我觉得自己和大多数人不太一样，有些与众不同。", dimension: "4" },
  { id: 14, text: "我的情绪起伏比较大，有时候会莫名地忧伤。", dimension: "4" },
  { id: 15, text: "我追求独特和有深度的体验，讨厌平庸。", dimension: "4" },
  { id: 16, text: "我有时会羡慕别人拥有的东西，觉得自己缺少了什么。", dimension: "4" },

  // 5型 观察者 (4题)
  { id: 17, text: "我喜欢观察和研究事物，知识让我有安全感。", dimension: "5" },
  { id: 18, text: "我需要大量的独处时间来思考和充电。", dimension: "5" },
  { id: 19, text: "我不太喜欢社交场合，觉得很消耗能量。", dimension: "5" },
  { id: 20, text: "我倾向于先观察再行动，不喜欢贸然做决定。", dimension: "5" },

  // 6型 忠诚者 (4题)
  { id: 21, text: "我在做决定前会反复权衡各种风险和可能性。", dimension: "6" },
  { id: 22, text: "我重视安全感和稳定性，不喜欢太多不确定性。", dimension: "6" },
  { id: 23, text: "我对权威有复杂的态度——既想依赖又想挑战。", dimension: "6" },
  { id: 24, text: "我常常会想到「最坏的情况」，然后提前做准备。", dimension: "6" },

  // 7型 热情者 (4题)
  { id: 25, text: "我喜欢尝试新事物，害怕无聊和被限制。", dimension: "7" },
  { id: 26, text: "我是一个乐观的人，总能看到事情好的一面。", dimension: "7" },
  { id: 27, text: "我很难专注于一件事太久，总想做下一件有趣的事。", dimension: "7" },
  { id: 28, text: "面对痛苦的事情，我倾向于转移注意力而不是直面它。", dimension: "7" },

  // 8型 挑战者 (4题)
  { id: 29, text: "我不喜欢被别人控制，要自己掌控局面。", dimension: "8" },
  { id: 30, text: "面对不公平的事，我会直接站出来说话。", dimension: "8" },
  { id: 31, text: "我做事果断，不喜欢犹豫不决。", dimension: "8" },
  { id: 32, text: "别人觉得我比较强势，但我只是不想示弱。", dimension: "8" },

  // 9型 和平者 (4题)
  { id: 33, text: "我不喜欢冲突，遇到争吵会想办法调和。", dimension: "9" },
  { id: 34, text: "我有时会忽视自己的需求来维持和平。", dimension: "9" },
  { id: 35, text: "我比较随和，朋友说我脾气好。", dimension: "9" },
  { id: 36, text: "我有时候会拖延，因为不确定自己到底想要什么。", dimension: "9" },
].map((q) => ({ ...q, type: "likert" as const, options: likertOptions }));

function calculateEnneagram(answers: Record<number, number | string>): string {
  const scores: Record<string, number> = {};
  for (let i = 1; i <= 9; i++) scores[String(i)] = 0;

  questions.forEach((q) => {
    const val = Number(answers[q.id]);
    if (val && q.dimension) {
      scores[q.dimension] += val;
    }
  });

  let mainType = "1";
  let maxScore = 0;
  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) { maxScore = score; mainType = type; }
  });
  return mainType;
}

export const enneagramTest: TestConfig = {
  id: "enneagram",
  name: "九型人格测试",
  description: "36道题找到你的人格原型，了解你的核心驱动力和成长方向",
  duration: "约7分钟",
  questionCount: 36,
  questions,
  scoringRules: "9种类型各4题，取各维度总分，最高分为主型。",
  disclaimer: "本测试为九型人格简化版，仅供自我探索参考。人格是复杂多面的，不能被简单标签化。",
  calculateResult: calculateEnneagram,
  resultMapping: {
    "1": { title: "完美主义者", subtitle: "Type 1", emoji: "✅", badgeColor: "bg-slate-600", description: "你是一个有原则、有理想的人。你内心有一把精确的尺子，时刻衡量着「应该怎样」。你追求完美，对自己和世界都有很高的标准。你的正直和责任感令人钦佩。", strengths: ["高度自律和自省", "有强烈的正义感和责任心", "做事认真细致可靠", "有清晰的道德标准"], weaknesses: ["过于自我批判", "对自己和他人要求过高", "难以放松和享受", "容易压抑愤怒变成抱怨"], careerAdvice: "适合质量管理、审计、教师、法律等需要严谨和原则性的岗位。", loveAdvice: "学会接受不完美——包括伴侣的和自己的。爱里没有标准答案。", famousPeople: ["甘地", "孔子", "王阳明", "格蕾塔·通贝里"] },
    "2": { title: "助人者", subtitle: "Type 2", emoji: "💕", badgeColor: "bg-pink-500", description: "你天生温暖、善解人意，总是能感受到别人的需要并伸出援手。你通过关爱他人来感受自己的价值，是朋友圈里的「知心姐姐/哥哥」。", strengths: ["共情能力极强", "慷慨热心", "善于建立人际关系", "让人感到被关爱和重视"], weaknesses: ["过度关注他人忽视自己", "可能用帮助来换取认可", "不善于接受帮助", "被拒绝时容易受伤"], careerAdvice: "适合护理、咨询、教育、社工等帮助他人的岗位。", loveAdvice: "爱自己和爱别人一样重要。你配得上被无条件地爱，而不是「做了什么才被爱」。", famousPeople: ["特蕾莎修女", "戴安娜王妃", "黄晓明（公益）", "邓丽君"] },
    "3": { title: "成就者", subtitle: "Type 3", emoji: "🏆", badgeColor: "bg-amber-500", description: "你是目标驱动的行动派，高效且有魅力。你善于展示最好的自己，对成功有着天然的渴望。你是那个「别人家的孩子」。", strengths: ["目标明确执行力强", "善于自我展示和激励", "适应力强高效务实", "有很强的进取心"], weaknesses: ["过于在意外在评价", "可能为了形象压抑真实感受", "工作狂倾向", "有时难以区分「我是谁」和「我的成就」"], careerAdvice: "适合销售精英、创业者、公关、高管等需要展示和竞争力的岗位。", loveAdvice: "在ta面前卸下光环，展示脆弱的你。真正的亲密不需要「人设」。", famousPeople: ["奥普拉", "贝克汉姆", "雷军", "杨天真"] },
    "4": { title: "个人主义者", subtitle: "Type 4", emoji: "🎭", badgeColor: "bg-indigo-500", description: "你是独特的灵魂，有着丰富而深邃的内心世界。你追求真实和深度，对美有天然的感知力。你是那个「不一样的烟火」。", strengths: ["极富创造力和审美", "情感深邃真实", "勇于做自己", "对人生有深度思考"], weaknesses: ["容易陷入忧郁情绪", "觉得别人不理解自己", "有时过于自我关注", "可能嫉妒别人的「正常」"], careerAdvice: "适合艺术家、设计师、作家、心理咨询师等创意和深度导向的岗位。", loveAdvice: "你渴望被深度理解，但也要学会理解平凡的爱。王子/公主就在你身边，不用等童话。", famousPeople: ["梵高", "王家卫", "张国荣", "Adele"] },
    "5": { title: "观察者", subtitle: "Type 5", emoji: "🔭", badgeColor: "bg-cyan-600", description: "你是安静的思考者，对知识和理解有着无尽的渴望。你通过观察和分析来理解这个世界，你的内心是一座丰富的图书馆。", strengths: ["思维深度过人", "独立且客观", "专注力极强", "知识渊博善于分析"], weaknesses: ["过度退缩到思维世界", "不善于表达情感", "可能过于吝啬精力和时间", "社交意愿低"], careerAdvice: "适合研究员、数据分析师、技术专家、作家等需要深度思考的岗位。", loveAdvice: "爱不只存在于大脑里，也需要身体和情感的参与。试着走出舒适的观察位，投入生活。", famousPeople: ["爱因斯坦", "比尔·盖茨", "鲁迅", "史蒂芬·霍金"] },
    "6": { title: "忠诚者", subtitle: "Type 6", emoji: "🛡️", badgeColor: "bg-blue-600", description: "你是可靠的守护者，有着强烈的责任感和忠诚心。你善于识别风险、未雨绸缪，是团队中最让人安心的存在。", strengths: ["忠诚可靠值得信赖", "善于风险评估和准备", "有强烈的责任感", "能为团队提供安全感"], weaknesses: ["容易焦虑和过度担心", "决策时犹豫不决", "对权威态度矛盾", "有时过于悲观"], careerAdvice: "适合风控、法务、安全管理、行政等需要谨慎和可靠的岗位。", loveAdvice: "学会信任——包括信任自己的判断。安全感最终来自内心，而不是外部确认。", famousPeople: ["诸葛亮", "马克·扎克伯格", "木村拓哉"] },
    "7": { title: "热情者", subtitle: "Type 7", emoji: "🎢", badgeColor: "bg-orange-500", description: "你是快乐的冒险家，对生活充满热情和好奇。你的字典里没有「无聊」二字，总有新鲜的计划和想法。你是派对的灵魂，生活的调味剂。", strengths: ["乐观积极充满活力", "创意丰富善于联想", "适应力强社交能力佳", "善于发现生活的乐趣"], weaknesses: ["难以专注和坚持", "逃避痛苦和负面情绪", "容易承诺过多", "缺乏深度和耐心"], careerAdvice: "适合旅游、创意策划、产品经理、主持人等自由且多变的岗位。", loveAdvice: "真正的快乐不只是新鲜感。学会在一段关系中深入下去，平淡中也有甜蜜。", famousPeople: ["罗宾·威廉姆斯", "Richard Branson", "黄渤", "蔡康永"] },
    "8": { title: "挑战者", subtitle: "Type 8", emoji: "🦁", badgeColor: "bg-red-600", description: "你是天生的强者，自信、果断、保护性强。你不怕冲突，敢于为自己和弱者发声。在你眼里，力量就是正义。", strengths: ["领导力超强", "果断且有保护欲", "直率真诚不做作", "面对困难无所畏惧"], weaknesses: ["可能过于控制", "不善于展示脆弱", "容易激动和冲动", "有时给人压迫感"], careerAdvice: "适合创业者、CEO、律师、军人等需要魄力和领导力的岗位。", loveAdvice: "展示你柔软的一面不是示弱，而是勇敢。真正的强者敢于说「我需要你」。", famousPeople: ["马云", "丘吉尔", "巨石强森", "董明珠"] },
    "9": { title: "和平者", subtitle: "Type 9", emoji: "☮️", badgeColor: "bg-green-500", description: "你是温和的和平使者，善于理解各方立场，不喜欢冲突和争执。你有着包容万物的心胸，是团队中的润滑剂和调和者。", strengths: ["温和包容善于调和", "能理解不同立场", "稳定且让人舒服", "不骄不躁随遇而安"], weaknesses: ["容易压抑自己的需求", "有拖延倾向", "有时过于被动", "可能用「没关系」来回避问题"], careerAdvice: "适合调解、人力资源、客服、咨询等需要协调和包容的岗位。", loveAdvice: "你的需求不是「无所谓」。勇敢说出你想要的，好的关系需要两个完整的人。", famousPeople: ["达赖喇嘛", "林肯", "宫崎骏", "周杰伦"] },
  },
};
