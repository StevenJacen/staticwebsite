# 康康“话题娱乐”能力卡 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在康康产品页能力网格的第 5 项新增“话题娱乐”卡片，使其在四列桌面布局中位于第二行第一个。

**Architecture:** 继续使用 `ProductsPage.tsx` 中的数据驱动渲染，不新增组件或样式。通过现有内容检查脚本锁定三段新文案，并以桌面和移动端浏览器检查确认顺序及响应式表现。

**Tech Stack:** React 19、TypeScript、Lucide React、Vite、现有 Node 内容检查脚本

## Global Constraints

- 新卡片必须是 `kangkangFeatures` 的第 5 项。
- 分类必须为 `话题娱乐`。
- 标题必须为 `有兴趣，有话聊，对生活保持好奇。`。
- 描述必须为 `让父母的生活方式多样化，查查天气、听听新闻、音乐和科普养生知识，让日常更有内容，也更有回应。`。
- 复用现有卡片样式和响应式断点，不添加依赖或新 CSS。

---

### Task 1: 新增话题娱乐能力卡

**Files:**
- Modify: `scripts/check-homepage-content.mjs:50-67`
- Modify: `components/ProductsPage.tsx:3-17`
- Modify: `components/ProductsPage.tsx:103-145`

**Interfaces:**
- Consumes: `kangkangFeatures` 数据数组与现有 `.hm-capability-grid` 四列布局。
- Produces: 第 5 项能力对象 `{ icon: Radio, label: string, title: string, desc: string }`，由现有 `map` 渲染。

- [x] **Step 1: 写入会失败的内容检查**

在 `scripts/check-homepage-content.mjs` 的 `required.products` 数组中加入：

```js
'话题娱乐',
'有兴趣，有话聊，对生活保持好奇。',
'让父母的生活方式多样化，查查天气、听听新闻、音乐和科普养生知识，让日常更有内容，也更有回应。',
```

- [x] **Step 2: 运行检查并确认因新文案缺失而失败**

Run: `node scripts/check-homepage-content.mjs`

Expected: FAIL，输出 `Missing required conversion content`，并列出“话题娱乐”等缺失文案。

- [x] **Step 3: 实现最小产品数据改动**

在 Lucide import 中加入 `Radio`，并在“生活提醒”对象之后、“亲情消息”对象之前插入：

```tsx
{
  icon: Radio,
  label: '话题娱乐',
  title: '有兴趣，有话聊，对生活保持好奇。',
  desc: '让父母的生活方式多样化，查查天气、听听新闻、音乐和科普养生知识，让日常更有内容，也更有回应。',
},
```

- [x] **Step 4: 运行自动化验证并确认通过**

Run: `node scripts/check-homepage-content.mjs`

Expected: PASS，输出 `Conversion content check passed.`

Run: `.\\node_modules\\.bin\\tsc.cmd --noEmit`

Expected: PASS，无 TypeScript 错误。

Run: `npm.cmd run build`

Expected: PASS，Vite 生产构建完成。

- [x] **Step 5: 浏览器验收**

打开 `http://127.0.0.1:5173/products/kangkang`：

- 桌面端确认能力区每行 4 张卡，“话题娱乐”位于第二行第一个。
- 移动端确认卡片按单列显示，文字无截断、遮挡或横向溢出。
- 控制台无新增错误，页面图片无加载失败。

- [x] **Step 6: 提交实现**

```bash
git add scripts/check-homepage-content.mjs components/ProductsPage.tsx docs/superpowers/plans/2026-07-14-kangkang-topic-entertainment.md
git commit -m "feat: add topic entertainment capability"
```
