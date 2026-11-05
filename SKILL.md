---
name: shushu-canon
description: |
  术数/易学/命理/风水/六壬/六爻/奇门/太乙等典籍总库（约 500+ 部蒸馏稿）。
  当用户问六壬起课断课、六爻、子平命理、风水峦头理气、奇门遁甲、太乙、周易、符咒丹道、中医相关古籍口径，
  或说「按某本书怎么说」「查典籍」「术数总库」「shushu」时使用。
  统一走本路由，再按需打开 books/ 下子书；不要同时挂载零散单书入口。
---

# 术数典籍总库（shushu-canon）

本仓库根目录即完整包：入口 + `books/` 子书。

## 硬规则

1. **先索引后正文**：读同目录 `INDEX-slim.json`（或 `CATALOG.md`）定位 slug，再读相对路径 `books/<slug>/SKILL.md`。
2. **一次 1–3 本**：按书名/流派命中。
3. **精品优先**：六壬优先 `liuren-jichu-skill`、`liuren-beihai-*`、`liuren-zhinan-skill` 等；六爻优先 `liuyao-*`；点名某书再开对应 slug（可含 `sim_*`）。
4. **边界**：不作恐吓迷信；不替代法律/医疗/投资决策；自动蒸馏稿须声明宜核对原书。
5. **引用**：单次原文 ≤150 字。

## 工作流

```
用户问题 → 提取书名/流派/术语
  → INDEX-slim.json 匹配 title/slug/domain
  → Read books/.../SKILL.md（1–3）
  → 作答并标明出处
```

检索示例（在仓库根目录）：

```bash
node -e "const i=require('./INDEX-slim.json'); const q='六壬'; console.log(i.items.filter(x=>(x.title+x.slug).includes(q)).slice(0,10))"
```

重建索引：`node scripts/build_index.cjs`
