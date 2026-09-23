# 青庸科技官网 · qingyon.com

青庸科技（杭州）有限公司官网，Next.js 16 + Tailwind CSS + Framer Motion。

## 开发

```bash
npx next dev
```

## 修改内容

所有文案与数据（产品、服务、案例、数据指标、联系方式、备案号）集中在
[`src/content/site.ts`](src/content/site.ts)，修改内容无需改动组件。

## 结构

- `src/components/hero.tsx` — 首屏与智能体运行控制台动画（`agent-console.tsx`）
- `src/components/products.tsx` — 产品：Revornix / WeSmile / Mosael（插画在 `product-visuals.tsx`）
- `src/components/services.tsx` — FDE 前线部署工程 / 企业 AI 陪跑
- `src/components/cases.tsx` — 智能体交付案例
- `src/components/process.tsx` — 合作流程与关于（OPC）
- `src/components/contact.tsx` — 联系与页脚

设计令牌（颜色）定义在 `src/app/globals.css` 的 `:root`，以 RGB 通道形式供 Tailwind 透明度修饰符使用。
