---
name: shushu-canon
description: |
  术数/易学/命理/风水/六壬/六爻/奇门/太乙等典籍总库（已整合约 500+ 部蒸馏 skill）。
  当用户问六壬起课断课、六爻、子平命理、风水峦头理气、奇门遁甲、太乙、周易、符咒丹道、中医相关古籍口径，
  或说「按某本书怎么说」「查典籍」「术数总库」「shushu」时使用此 skill。
  不要用零散的单书 auto-ocr skill；统一走本路由，再按需 Read 子书。
---

# 术数典籍总库（shushu-canon）

本目录为**可分发完整包**：入口 skill + `books/` 子书。安装后只需注册本 skill，子书作为资料随包提供。

## 硬规则

1. **先读索引，再读子书**：打开同目录 `INDEX-slim.json`（或 `CATALOG.md`）定位 slug，再 `Read` 相对路径 `books/<slug>/SKILL.md`。
2. **一次打开 1–3 本**：按书名/流派命中；不要把数百本全文塞进上下文。
3. **精品优先于 OCR 粗蒸馏**：
   - 六壬体系 → 优先 `liuren-jichu-skill`、`liuren-beihai-*`、`liuren-zhinan-skill` 等非 `sim_` 条目
   - 六爻体系 → 优先 `liuyao-*` 非 sim
   - 点名某书 → 再打开对应 slug（可含 `sim_*`）
4. **边界**：不作恐吓迷信；不替代法律/医疗/投资决策；OCR 书声明「自动蒸馏，宜核对原书」。
5. **引用**：单次原文引用 ≤150 字。

## 路径约定

- 本 skill 根目录 = 含有 `SKILL.md` 与 `books/` 的目录。
- 索引里 `path` 均为相对路径，例如 `books/liuren-jichu-skill/SKILL.md`。
- 用 Read 工具时拼：`<本 skill 根目录>/<path>`。

## 标准工作流

```
用户问题
  → 提取书名 / 流派 / 术语
  → 在 INDEX-slim.json 的 items[] 按 title/slug/domain 匹配
  → Read 命中的 1–3 个 books/.../SKILL.md
  → 按子 skill 步骤作答；多书冲突时标明出处
```

快速检索（在 skill 根目录）：

```bash
node -e "const i=require('./INDEX-slim.json'); const q='六壬'; console.log(i.items.filter(x=>(x.title+x.slug).includes(q)).slice(0,10))"
```

重建索引：

```bash
node scripts/build_index.cjs
```

## 文件

| 文件 | 作用 |
|------|------|
| `INDEX-slim.json` | 日常检索 |
| `INDEX.json` | 含 description |
| `CATALOG.md` | 人读目录 |
| `books/<slug>/SKILL.md` | 子书正文 |
| `scripts/build_index.cjs` | 重建索引 |
