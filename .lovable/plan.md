

# 修复 404：实现测试引擎和结果页

## 问题
点击任何测试卡片会跳转到 `/test/mbti`、`/test/enneagram` 等路径，但 App.tsx 中没有定义这些路由，所以显示 404。

## 解决方案
创建测试进行页和结果页，并注册路由。

---

## 实现步骤

### 1. 创建测试进行页 `src/pages/TestPlay.tsx`
- 从 URL 参数获取测试 ID（如 `enneagram`）
- 从 `allTests` 中加载对应题库
- 显示进度条（当前题号 / 总题数）
- 根据题目类型渲染答题界面：
  - `single` 类型：A/B 选项按钮
  - `likert` 类型：1-5 分量表按钮
- 上一题 / 下一题导航
- 答完所有题后调用 `calculateResult` 计算结果，跳转结果页

### 2. 创建结果页 `src/pages/TestResult.tsx`
- 从 URL 参数获取测试 ID 和结果类型
- 显示结果：大标题 + emoji + 彩色徽章
- 分段展示：描述、优势、劣势、职业建议、爱情建议、名人同款
- 免责声明
- 「重新测试」和「返回首页」按钮

### 3. 更新路由 `src/App.tsx`
添加两条新路由：
- `/test/:testId` 指向 TestPlay
- `/result/:testId/:resultKey` 指向 TestResult

---

## 技术细节

- 答题状态用 `useState` 管理 `Record<number, number | string>`
- 进度条使用 shadcn Progress 组件
- 结果页使用 `framer-motion` 入场动画
- 测试不存在时显示友好提示并引导回首页

