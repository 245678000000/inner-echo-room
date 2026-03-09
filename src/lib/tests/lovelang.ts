import { TestConfig } from "./types";

const lovelangQuestions = [
  { id: 1, text: "你更希望伴侣怎样表达爱？", type: "single" as const, dimension: "lang", options: [{ text: "经常对你说「我爱你」「你真棒」", value: "words" }, { text: "下班后一起散步，周末一起做饭", value: "time" }] },
  { id: 2, text: "情人节你最想收到什么？", type: "single" as const, dimension: "lang", options: [{ text: "精心挑选的礼物", value: "gifts" }, { text: "一个温暖的拥抱和亲吻", value: "touch" }] },
  { id: 3, text: "你觉得以下哪种行为更让你感动？", type: "single" as const, dimension: "lang", options: [{ text: "伴侣主动帮你做家务", value: "service" }, { text: "伴侣写了一封情书给你", value: "words" }] },
  { id: 4, text: "和伴侣在一起时，你更享受：", type: "single" as const, dimension: "lang", options: [{ text: "两个人安静地待在一起", value: "time" }, { text: "收到意料之外的小礼物", value: "gifts" }] },
  { id: 5, text: "吵架后，怎样做最能让你原谅对方？", type: "single" as const, dimension: "lang", options: [{ text: "给你一个紧紧的拥抱", value: "touch" }, { text: "主动帮你把事情处理好", value: "service" }] },
  { id: 6, text: "你最珍惜的恋爱回忆是：", type: "single" as const, dimension: "lang", options: [{ text: "对方在众人面前夸奖你", value: "words" }, { text: "两个人一起去旅行的时光", value: "time" }] },
  { id: 7, text: "以下哪种情况让你更有安全感？", type: "single" as const, dimension: "lang", options: [{ text: "伴侣经常送你用心的礼物", value: "gifts" }, { text: "伴侣喜欢牵手和拥抱", value: "touch" }] },
  { id: 8, text: "你觉得好伴侣最重要的品质是：", type: "single" as const, dimension: "lang", options: [{ text: "勤快体贴，愿意为你做事", value: "service" }, { text: "善于表达，经常鼓励你", value: "words" }] },
  { id: 9, text: "你更享受和伴侣一起做什么？", type: "single" as const, dimension: "lang", options: [{ text: "一起做一个手工项目", value: "time" }, { text: "在沙发上依偎看电影", value: "touch" }] },
  { id: 10, text: "什么事会让你觉得伴侣不在乎你？", type: "single" as const, dimension: "lang", options: [{ text: "忘记你们的纪念日，没有礼物", value: "gifts" }, { text: "你忙碌时对方也不来帮忙", value: "service" }] },
  { id: 11, text: "你更期待伴侣：", type: "single" as const, dimension: "lang", options: [{ text: "在你难过时说温暖的话安慰你", value: "words" }, { text: "在你难过时静静陪在你身边", value: "time" }] },
  { id: 12, text: "以下哪种让你更开心？", type: "single" as const, dimension: "lang", options: [{ text: "收到伴侣从国外带回的纪念品", value: "gifts" }, { text: "伴侣从背后抱住你", value: "touch" }] },
  { id: 13, text: "你更感激伴侣做的哪件事？", type: "single" as const, dimension: "lang", options: [{ text: "主动修好了你坏掉的东西", value: "service" }, { text: "在朋友面前赞美你", value: "words" }] },
  { id: 14, text: "异地恋时最让你想念的是：", type: "single" as const, dimension: "lang", options: [{ text: "一起度过的每个平凡日常", value: "time" }, { text: "对方的拥抱和亲吻", value: "touch" }] },
  { id: 15, text: "你更喜欢的求婚方式：", type: "single" as const, dimension: "lang", options: [{ text: "精心准备的惊喜礼物和戒指", value: "gifts" }, { text: "对方帮你实现了一个梦想", value: "service" }] },
  { id: 16, text: "和伴侣在家的理想夜晚：", type: "single" as const, dimension: "lang", options: [{ text: "一起聊天，分享彼此的一天", value: "words" }, { text: "窝在沙发上，对方帮你按摩", value: "touch" }] },
  { id: 17, text: "你觉得爱情的本质更接近：", type: "single" as const, dimension: "lang", options: [{ text: "两个人花时间一起成长", value: "time" }, { text: "用行动支持对方的生活", value: "service" }] },
  { id: 18, text: "什么样的惊喜最打动你？", type: "single" as const, dimension: "lang", options: [{ text: "发现伴侣默默记住了你随口说想要的东西", value: "gifts" }, { text: "收到一条很长很走心的表白消息", value: "words" }] },
  { id: 19, text: "你更需要伴侣在什么时候陪你？", type: "single" as const, dimension: "lang", options: [{ text: "你取得成就想庆祝的时候", value: "time" }, { text: "你疲惫需要拥抱的时候", value: "touch" }] },
  { id: 20, text: "以下哪种日常最暖心？", type: "single" as const, dimension: "lang", options: [{ text: "伴侣帮你准备好第二天的衣服", value: "service" }, { text: "伴侣给你买了你最爱吃的零食", value: "gifts" }] },
  { id: 21, text: "如果伴侣出差一周，你最期待的是：", type: "single" as const, dimension: "lang", options: [{ text: "每天一通视频电话说说话", value: "words" }, { text: "回来后两个人待在一起哪也不去", value: "time" }] },
  { id: 22, text: "以下哪种生日过法最幸福？", type: "single" as const, dimension: "lang", options: [{ text: "收到用心准备的生日礼物", value: "gifts" }, { text: "伴侣牵着你的手走过一天", value: "touch" }] },
  { id: 23, text: "什么事会让你觉得被爱？", type: "single" as const, dimension: "lang", options: [{ text: "你生病时伴侣请假照顾你", value: "service" }, { text: "伴侣当众说'你是我最重要的人'", value: "words" }] },
  { id: 24, text: "你更珍惜伴侣的：", type: "single" as const, dimension: "lang", options: [{ text: "陪伴的时间", value: "time" }, { text: "用心挑选的礼物", value: "gifts" }] },
  { id: 25, text: "最能加深你们感情的是：", type: "single" as const, dimension: "lang", options: [{ text: "一个深情的吻", value: "touch" }, { text: "伴侣帮你解决了一个大麻烦", value: "service" }] },
  { id: 26, text: "你会因为什么对伴侣心生感激？", type: "single" as const, dimension: "lang", options: [{ text: "在你低落时说出鼓励的话", value: "words" }, { text: "牺牲自己的时间来陪你做你喜欢的事", value: "time" }] },
  { id: 27, text: "婚姻/长期关系中你最看重：", type: "single" as const, dimension: "lang", options: [{ text: "仪式感和纪念日礼物", value: "gifts" }, { text: "肢体亲密和体贴", value: "touch" }] },
  { id: 28, text: "你觉得最浪漫的事是：", type: "single" as const, dimension: "lang", options: [{ text: "伴侣悄悄做好了你一直想做的事", value: "service" }, { text: "伴侣给你写一首诗或一封信", value: "words" }] },
  { id: 29, text: "什么让你觉得与伴侣的连接最深？", type: "single" as const, dimension: "lang", options: [{ text: "一起经历重要的人生时刻", value: "time" }, { text: "手牵手走过每条街", value: "touch" }] },
  { id: 30, text: "你最希望伴侣明白的一点是：", type: "single" as const, dimension: "lang", options: [{ text: "行动比语言更重要", value: "service" }, { text: "用心挑选的礼物代表你在乎我", value: "gifts" }] },
];

function calculateLoveLang(answers: Record<number, number | string>): string {
  const counts: Record<string, number> = { words: 0, time: 0, gifts: 0, touch: 0, service: 0 };

  lovelangQuestions.forEach((q) => {
    const ans = answers[q.id];
    if (ans && typeof ans === "string" && counts[ans] !== undefined) {
      counts[ans]++;
    }
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

export const lovelangTest: TestConfig = {
  id: "lovelang",
  name: "五种爱情语言测试",
  description: "你的爱情表达方式是什么？帮助情侣深度沟通",
  duration: "约6分钟",
  questionCount: 30,
  questions: lovelangQuestions,
  scoringRules: "统计五种爱情语言（肯定的言词、精心的时刻、接收礼物、身体接触、服务的行动）各自的选择次数，最多的为主要爱情语言。",
  disclaimer: "本测试基于Gary Chapman的五种爱情语言理论简化而成，仅供情侣沟通参考，不代表专业心理评估结果。",
  calculateResult: calculateLoveLang,
  resultMapping: {
    words: {
      title: "肯定的言词",
      subtitle: "Words of Affirmation",
      emoji: "💬",
      badgeColor: "bg-rose-500",
      description: "你的爱情语言是「肯定的言词」。对你来说，听到伴侣说「我爱你」「你真棒」「有你真好」比任何礼物都重要。语言是你感受爱的主要通道，一句真心的赞美能让你开心一整天。",
      strengths: ["善于用语言表达爱意", "能敏锐感知言语中的情感", "擅长鼓励和肯定他人", "沟通能力出色"],
      weaknesses: ["对批评和负面评价特别敏感", "可能过度解读对方的话", "不善于接收非语言类的爱意", "有时期待太多口头确认"],
      careerAdvice: "你的语言天赋适合从事教育、写作、咨询、销售、公关等需要沟通表达的工作。",
      loveAdvice: "告诉伴侣你需要听到鼓励和爱的话语。同时也要学会理解伴侣用其他方式表达的爱。",
      famousPeople: ["泰勒·斯威夫特", "奥普拉", "莎士比亚", "席慕蓉"],
    },
    time: {
      title: "精心的时刻",
      subtitle: "Quality Time",
      emoji: "⏰",
      badgeColor: "bg-blue-600",
      description: "你的爱情语言是「精心的时刻」。对你来说，爱就是全身心的陪伴。不是同处一室各玩手机，而是两个人真正在一起——聊天、散步、做饭，每一个共同经历的瞬间都是爱的证明。",
      strengths: ["珍惜和伴侣在一起的时光", "善于创造美好回忆", "注重关系的深度连接", "全神贯注的陪伴让人感到被重视"],
      weaknesses: ["伴侣忙碌时容易感到被忽视", "可能对「不够专注」的陪伴不满", "不理解伴侣的独处需求", "分离焦虑较高"],
      careerAdvice: "你重视人与人的连接，适合心理咨询、团队管理、社区运营、活动策划等工作。",
      loveAdvice: "和伴侣约定固定的专属时间，把手机放一边。也要理解对方有时需要个人空间。",
      famousPeople: ["黄磊", "孙俪", "公主日记中的安妮", "威廉王子"],
    },
    gifts: {
      title: "接收礼物",
      subtitle: "Receiving Gifts",
      emoji: "🎁",
      badgeColor: "bg-purple-600",
      description: "你的爱情语言是「接收礼物」。你看重的不是礼物的价格，而是背后的心意和仪式感。一份用心挑选的礼物代表着「你在我心里」「我了解你」。它是爱的有形载体。",
      strengths: ["重视仪式感和纪念日", "善于通过礼物表达心意", "注重生活品质和美感", "记得重要的日子和细节"],
      weaknesses: ["可能被误解为物质主义", "伴侣忘记纪念日会非常失落", "有时过于看重外在表达", "可能给伴侣造成经济压力"],
      careerAdvice: "你对美和品质的敏感度适合从事设计、买手、策展、市场营销、品牌管理等工作。",
      loveAdvice: "告诉伴侣你看重的是心意而非价格。同时学会欣赏伴侣其他形式的爱意表达。",
      famousPeople: ["维多利亚·贝克汉姆", "三毛", "林志玲", "范冰冰"],
    },
    touch: {
      title: "身体接触",
      subtitle: "Physical Touch",
      emoji: "🤗",
      badgeColor: "bg-amber-600",
      description: "你的爱情语言是「身体接触」。牵手、拥抱、亲吻、依偎——这些肢体的亲密是你感受爱的最直接方式。一个温暖的拥抱胜过千言万语，身体的靠近让你觉得安心和被爱。",
      strengths: ["能通过肢体传递温暖", "擅长非语言沟通", "直觉敏锐，感知力强", "容易让人感到亲切和放松"],
      weaknesses: ["分开时容易感到不安", "对肢体冷淡特别敏感", "有时边界感需要调整", "异地恋对你来说格外困难"],
      careerAdvice: "你的敏感和温暖适合从事护理、按摩治疗、幼教、宠物护理、运动教练等工作。",
      loveAdvice: "让伴侣知道肢体接触对你的重要性。同时也要尊重对方的身体边界和舒适度。",
      famousPeople: ["贝克汉姆", "贾斯汀·比伯", "黄晓明", "杨幂"],
    },
    service: {
      title: "服务的行动",
      subtitle: "Acts of Service",
      emoji: "🛠️",
      badgeColor: "bg-emerald-600",
      description: "你的爱情语言是「服务的行动」。对你来说，行动胜于一切。伴侣帮你做饭、修理东西、在你忙碌时分担家务——这些看似平凡的行动就是最深沉的爱的表达。",
      strengths: ["用行动表达爱", "善于照顾他人", "务实可靠", "关注伴侣的实际需求"],
      weaknesses: ["当对方不主动做事时感到不被爱", "可能过度付出", "不善于用语言表达感受", "有时对伴侣的「懒」缺乏耐心"],
      careerAdvice: "你的行动力和服务意识适合从事医疗、社工、厨师、工程师、产品经理等注重实际成果的工作。",
      loveAdvice: "告诉伴侣具体哪些行动让你感到被爱。记住，不是每个人都能自然感知到这种爱的语言。",
      famousPeople: ["戴安娜王妃", "Mother Teresa", "黄渤", "佟丽娅"],
    },
  },
};
