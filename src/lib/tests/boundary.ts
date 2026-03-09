import { TestConfig } from "./types";

const boundaryQuestions = [
  { id: 1, text: "有人在公共场合大声打电话影响到你，你会：", type: "single" as const, dimension: "social", options: [{ text: "直接提醒对方小声一点", value: 3 }, { text: "默默忍受，觉得说了也没用", value: 1 }, { text: "换个位置远离", value: 2 }] },
  { id: 2, text: "朋友总是在深夜给你打电话倒苦水，你会：", type: "single" as const, dimension: "emotional", options: [{ text: "告诉对方你需要休息，明天再聊", value: 3 }, { text: "不管多晚都接听陪着聊", value: 1 }, { text: "有时接有时不接，看心情", value: 2 }] },
  { id: 3, text: "同事总是把自己的工作推给你，你会：", type: "single" as const, dimension: "work", options: [{ text: "明确拒绝，这不是我的职责", value: 3 }, { text: "默默接受，觉得拒绝不好意思", value: 1 }, { text: "偶尔帮忙但会提出来", value: 2 }] },
  { id: 4, text: "亲戚在饭桌上追问你工资/恋爱/生娃，你会：", type: "single" as const, dimension: "personal", options: [{ text: "微笑说「这是我的隐私」然后转移话题", value: 3 }, { text: "不好意思拒绝，一一回答", value: 1 }, { text: "含糊带过，但心里不舒服", value: 2 }] },
  { id: 5, text: "伴侣/好友翻看你的手机，你的反应是：", type: "single" as const, dimension: "personal", options: [{ text: "明确表示不可以，这是隐私", value: 3 }, { text: "觉得没什么，让ta看吧", value: 1 }, { text: "有点不舒服但不好说", value: 2 }] },
  { id: 6, text: "有人对你发表了不中听的评价，你会：", type: "single" as const, dimension: "emotional", options: [{ text: "考虑是否有道理，没道理就不在意", value: 3 }, { text: "反复想很久，怀疑自己是不是真的不好", value: 1 }, { text: "表面没事但内心受影响", value: 2 }] },
  { id: 7, text: "别人想借你刚买的新东西，你不太想借：", type: "single" as const, dimension: "material", options: [{ text: "直接说不方便借", value: 3 }, { text: "虽然不想但还是借了", value: 1 }, { text: "找个借口推脱", value: 2 }] },
  { id: 8, text: "朋友聚会你不想去，你会：", type: "single" as const, dimension: "social", options: [{ text: "坦诚说今天想自己待着", value: 3 }, { text: "虽然不想去但不好拒绝，还是去了", value: 1 }, { text: "编个理由不去", value: 2 }] },
  { id: 9, text: "有人持续向你借钱，你已经不太想借了：", type: "single" as const, dimension: "material", options: [{ text: "直接告知不方便了", value: 3 }, { text: "还是借了，不好意思拒绝", value: 1 }, { text: "借少一点或找借口拖延", value: 2 }] },
  { id: 10, text: "你的上司在非工作时间频繁发工作消息：", type: "single" as const, dimension: "work", options: [{ text: "设定工作时间外不回复的原则", value: 3 }, { text: "不管什么时候都秒回", value: 1 }, { text: "看情况回复，但心里不爽", value: 2 }] },
  { id: 11, text: "别人不断打断你说话，你会：", type: "single" as const, dimension: "social", options: [{ text: "友好但坚定地说「让我说完」", value: 3 }, { text: "停下来让对方说，自己的话咽回去", value: 1 }, { text: "有点不舒服但一般不会说", value: 2 }] },
  { id: 12, text: "你正在忙，有人突然来找你帮忙：", type: "single" as const, dimension: "work", options: [{ text: "告诉对方你现在忙，约个时间再帮", value: 3 }, { text: "立刻放下自己的事去帮忙", value: 1 }, { text: "勉强帮了，但很赶", value: 2 }] },
  { id: 13, text: "有人对你的穿着/发型做出负面评论：", type: "single" as const, dimension: "personal", options: [{ text: "谢谢你的意见，但我喜欢就好", value: 3 }, { text: "开始怀疑自己的审美", value: 1 }, { text: "表面无所谓，但回家换了", value: 2 }] },
  { id: 14, text: "朋友总是找你吐槽负能量，你已经快撑不住了：", type: "single" as const, dimension: "emotional", options: [{ text: "坦诚说你也需要休息，建议ta找专业人士", value: 3 }, { text: "继续当情绪垃圾桶，不好意思推脱", value: 1 }, { text: "偶尔暗示一下但不敢明说", value: 2 }] },
  { id: 15, text: "别人不经你同意就帮你做了决定：", type: "single" as const, dimension: "personal", options: [{ text: "表示这是你的事，你需要自己决定", value: 3 }, { text: "接受了，虽然心里不太高兴", value: 1 }, { text: "事后表达一下不满", value: 2 }] },
  { id: 16, text: "有人在微信上追问你不想回答的问题：", type: "single" as const, dimension: "personal", options: [{ text: "直接说不方便讨论这个", value: 3 }, { text: "勉强回答了", value: 1 }, { text: "已读不回或转移话题", value: 2 }] },
  { id: 17, text: "朋友约你做一件你不感兴趣的事：", type: "single" as const, dimension: "social", options: [{ text: "真诚说不感兴趣，但祝ta玩得开心", value: 3 }, { text: "硬着头皮去了", value: 1 }, { text: "找理由推掉", value: 2 }] },
  { id: 18, text: "你在排队时有人插队：", type: "single" as const, dimension: "social", options: [{ text: "礼貌指出这里在排队", value: 3 }, { text: "算了不想惹事", value: 1 }, { text: "心里骂了一万遍但没说", value: 2 }] },
  { id: 19, text: "有人总是调侃你、拿你开玩笑：", type: "single" as const, dimension: "emotional", options: [{ text: "认真说这个玩笑让你不舒服", value: 3 }, { text: "笑着配合，但心里很不爽", value: 1 }, { text: "有时忍有时发火", value: 2 }] },
  { id: 20, text: "你借出去的东西被弄坏了：", type: "single" as const, dimension: "material", options: [{ text: "要求对方赔偿或修好", value: 3 }, { text: "说没关系，心里难受", value: 1 }, { text: "暗示一下但不好意思直说", value: 2 }] },
  { id: 21, text: "父母对你的生活做出过多干涉：", type: "single" as const, dimension: "personal", options: [{ text: "温和但坚定地表达你已经长大了", value: 3 }, { text: "不敢反抗，照着做了", value: 1 }, { text: "嘴上答应心里没当回事", value: 2 }] },
  { id: 22, text: "有人在你面前说你朋友的坏话：", type: "single" as const, dimension: "emotional", options: [{ text: "表示你不想参与这种讨论", value: 3 }, { text: "跟着附和了几句", value: 1 }, { text: "沉默不语", value: 2 }] },
];

function calculateBoundary(answers: Record<number, number | string>): string {
  let total = 0;
  let count = 0;
  boundaryQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans !== undefined) {
      total += Number(ans);
      count++;
    }
  });
  const avg = count > 0 ? total / count : 0;
  if (avg >= 2.7) return "iron";
  if (avg >= 2.3) return "healthy";
  if (avg >= 1.8) return "soft";
  if (avg >= 1.4) return "weak";
  return "none";
}

export const boundaryTest: TestConfig = {
  id: "boundary",
  name: "边界感测试",
  description: "你的边界是铁墙还是棉花糖？保护能量，关系更健康",
  duration: "约5分钟",
  questionCount: 22,
  questions: boundaryQuestions,
  scoringRules: "22道题，每题1-3分。平均分2.7+铁壁型、2.3+健康型、1.8+柔软型、1.4+薄弱型、<1.4几乎没有边界。",
  disclaimer: "本测试仅供自我觉察参考。边界感可以通过有意识的练习来提升，不代表固定的性格特征。",
  calculateResult: calculateBoundary,
  resultMapping: {
    iron: {
      title: "铁壁边界型",
      subtitle: "边界感：极强",
      emoji: "🏰",
      badgeColor: "bg-slate-700",
      description: "你的边界像一座铁壁城堡——清晰、坚固、不可侵犯。你非常清楚什么是你的领地，什么是别人的领地，你能坦然地说「不」而不觉得愧疚。你的自我保护能力是top级的。",
      strengths: ["拒绝别人毫无压力", "很少被人利用", "自我保护能力极强", "能量管理做得很好"],
      weaknesses: ["可能被认为太强势或冷漠", "有时会把亲近的人也推远", "可能过度防御导致关系不够亲密", "需要适当放下防备"],
      careerAdvice: "你在职场中很有原则，不容易被PUA。注意在保持边界的同时展现温度，领导力需要刚柔并济。",
      loveAdvice: "你的边界感很好，但在亲密关系中需要适当打开城门。爱需要一些脆弱和信任。",
      famousPeople: ["撒切尔夫人", "黄晓明", "那些「不好惹」的人"],
    },
    healthy: {
      title: "健康边界型",
      subtitle: "边界感：良好",
      emoji: "🌿",
      badgeColor: "bg-green-600",
      description: "你的边界感处于最健康的状态！你能在保护自己和照顾他人之间找到平衡。你能说「不」但不冷漠，能付出但不过度消耗。这种平衡是人际关系的最佳状态。",
      strengths: ["灵活的边界管理", "能保护自己也照顾他人", "关系质量高", "情绪消耗少"],
      weaknesses: ["在特定关系中可能边界松动", "有时需要提醒自己保持底线", "面对强势的人时可能退让", "需要持续维护这种平衡"],
      careerAdvice: "你的边界感是你人际关系的最大优势。保持这种状态，在职场中你能赢得尊重。",
      loveAdvice: "你在感情中既有温度又有底线，这是最理想的状态。继续保持开放沟通的习惯。",
      famousPeople: ["大多数心理健康的成年人", "情商高的人"],
    },
    soft: {
      title: "棉花糖边界型",
      subtitle: "边界感：偏软",
      emoji: "☁️",
      badgeColor: "bg-pink-400",
      description: "你的边界像棉花糖——存在，但容易被挤压变形。你知道自己的底线在哪里，但经常在别人的压力下让步。你的善良让你不忍心拒绝别人，结果常常委屈了自己。",
      strengths: ["人缘好，大家都觉得你好相处", "有同理心", "善于照顾他人的感受", "灵活度高"],
      weaknesses: ["经常被人越界而不好意思说", "容易累积负面情绪", "有时候不知道如何拒绝", "可能被人当「软柿子」"],
      careerAdvice: "练习用温和但坚定的方式说「不」。你不需要做一个冷酷的人，但需要让别人知道你的底线。",
      loveAdvice: "在感情中表达你的真实感受和需求。你值得被平等对待，不要总是委屈自己。",
      famousPeople: ["很多「好好先生/小姐」", "温柔但需要更多力量的人"],
    },
    weak: {
      title: "薄弱边界型",
      subtitle: "边界感：较弱",
      emoji: "🫧",
      badgeColor: "bg-orange-500",
      description: "你的边界感比较薄弱。你很难拒绝别人，经常把别人的需求放在自己前面。你的善良是真的，但你的疲惫也是真的。你需要学会保护自己的能量。",
      strengths: ["极度善良和有爱心", "很少让人感到不舒服", "有很强的包容力", "善于维护表面和谐"],
      weaknesses: ["几乎无法说「不」", "容易被人利用", "内心积压大量不满", "自我价值感较低"],
      careerAdvice: "从小事开始练习拒绝。比如先从不重要的邀约开始说「不」，慢慢建立自信。",
      loveAdvice: "你可能在感情中过度付出。记住：你不需要通过牺牲自己来换取爱。",
      famousPeople: ["每一个「太善良」的人"],
    },
    none: {
      title: "几乎无边界型",
      subtitle: "边界感：极弱",
      emoji: "😢",
      badgeColor: "bg-red-600",
      description: "你的边界几乎不存在。你把别人的需求全部放在自己前面，不敢说不、不敢表达不满、不敢维护自己的权益。你就像一块海绵，不断吸收别人的情绪和需求，直到自己干枯。请一定要开始学习保护自己。",
      strengths: ["无比善良和体贴", "极强的忍耐力", "能让所有人感到舒适", "有巨大的成长空间"],
      weaknesses: ["严重缺乏自我保护", "容易被操控和利用", "长期压抑可能导致身心问题", "自我价值感非常低"],
      careerAdvice: "你现在最需要的是建立最基本的边界。建议阅读关于边界感的书籍或寻求心理咨询师的帮助。",
      loveAdvice: "你在感情中可能处于不对等的位置。真正爱你的人不会要求你无条件付出。学会爱自己是第一步。",
      famousPeople: ["每一个正在觉醒的人", "你即将成为更强大的自己"],
    },
  },
};
