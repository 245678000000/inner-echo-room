

# 主页面视觉优化

基于当前截图分析，主页已有不错的基础，但可以在以下方面进一步提升视觉体验。

---

## 1. Hero 区域升级

**当前问题**：Hero 区背景较平，浮动 emoji 密度低且偏暗。

**优化方案**：
- 添加动态光晕效果：多层 radial-gradient 叠加，模拟柔光扩散
- 增加底部波浪分割线，让 Hero 与卡片区域过渡更自然（用 CSS clip-path 或 SVG wave）
- 浮动 emoji 增大不透明度，增加缩放动画让其更灵动
- 标题增加微妙的文字阴影/光晕效果

## 2. 测试卡片视觉增强

**当前问题**：卡片上半部分渐变区域略单调，信息层次不够丰富。

**优化方案**：
- 卡片 emoji 区增加光晕背景圈（半透明白色圆形）
- 增加 `subtitle` 字段展示（当前 TestMeta 有 subtitle 但 TestCard 未使用）
- 添加分类标签（categoryLabel）小徽章显示在卡片右上角
- 卡片 hover 时增加渐变边框光效（gradient-border）
- 底部信息栏增加小图标（题目数用文件图标、时间用时钟图标）

## 3. 页面节奏与内容丰富

**优化方案**：
- 在「热门测试」标题栏右侧添加「查看全部 >」链接
- 增加数据统计横条：如「已有 XX 人完成测试」（静态展示数字，带计数动画）
- 免责声明区域样式优化：左侧加竖线装饰，整体更精致

## 4. 整体动效润色

- Hero 区 CTA 按钮添加呼吸光效（pulse shadow）
- 卡片入场改用 staggered spring 动画
- 页面滚动时卡片使用 `whileInView` 替代直接 animate，提升性能

---

## 技术实现

### 文件修改清单

| 文件 | 改动 |
|------|------|
| `src/pages/Index.tsx` | Hero 光晕层、波浪分割、统计条、标题栏链接、whileInView 动画 |
| `src/components/TestCard.tsx` | 接入 subtitle/categoryLabel、emoji 光晕、渐变边框 hover、图标标签 |
| `src/index.css` | 新增波浪 clip-path、呼吸光效 keyframe |

### 关键实现细节

- 波浪分割使用 `clip-path: polygon(...)` 或内联 SVG，纯 CSS 实现无额外依赖
- 统计数字使用 framer-motion 的 `useMotionValue` + `useTransform` 实现计数滚动动画
- 卡片 `whileInView` 配合 `viewport={{ once: true }}` 只触发一次
- TestCard 新增 `subtitle` 和 `categoryLabel` props（数据已存在于 testList 中，只需传递）

