# MindProbe (心探)

A React + Vite psychological test/quiz application migrated from Lovable.

## Project Structure

- `src/` - Main source code
  - `pages/` - Route pages (Index, Tests, TestPlay, TestResult, NotFound)
  - `components/` - UI components including BottomNav, TestCard, ShareCard, and shadcn/ui
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and test data
    - `tests-data.ts` - Test metadata (title, emoji, gradient, category) for card rendering
    - `tests/` - Individual test configurations with questions and result logic
      - `types.ts` - Shared interfaces (TestConfig, TestQuestion, TestResultDetail)
      - `index.ts` - Registry of all tests (allTests record)
      - Individual test files: mbti.ts, bigfive.ts, disc.ts, enneagram.ts, holland.ts, adhd.ts, eq.ts, lovelang.ts, iq.ts, attachment.ts, mbti64.ts, hsp.ts, pleaser.ts, mentalburn.ts, boundary.ts, talent2026.ts
- `public/` - Static assets

## Adding a New Test

1. Create `src/lib/tests/yourtest.ts` following the TestConfig interface
2. Add the export and register in `src/lib/tests/index.ts`
3. Add metadata entry in `src/lib/tests-data.ts`

## Current Tests (16 total)

- MBTI 16人格 (personality)
- 大五人格 Big Five (personality)
- DISC性格 (personality)
- 成人依恋模型 (relationship)
- 九型人格 (personality)
- 霍兰德职业兴趣 (ability)
- 五种爱情语言 (relationship)
- 智商IQ测试 (ability)
- 成人ADHD筛查 (mental_health)
- 情商EQ测试 (ability)
- MBTI 64型人格 (personality) - 16型升级版，新增果断/纠结+温暖/高冷维度
- 高敏感人格HSP (mental_health)
- 讨好型人格 (personality)
- 精神内耗 (mental_health)
- 边界感测试 (ability)
- 2026天赋测试 (personality) - 3道视觉选择题

## Tech Stack

- React 18 with TypeScript
- Vite (dev server on port 5000)
- Tailwind CSS + shadcn/ui components
- React Router v6
- TanStack Query
- Framer Motion
- Recharts

## Development

Run the app with the "Start application" workflow, which executes `npm run dev` on port 5000.

## Notes

- Migrated from Lovable — `lovable-tagger` dev dependency removed
- Vite configured with `allowedHosts: true` and `host: "0.0.0.0"` for Replit compatibility
- Avoid using Chinese curly quotes `""` inside TypeScript strings — use `「」` instead
