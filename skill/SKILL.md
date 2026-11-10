---
name: shushu-canon
description: |
  术数/易学/命理/风水/六壬/六爻/奇门/太乙/紫微/梅花/小六壬等典籍总库（已整合约 500+ 部 LLM 精修 skill）。
  当用户问六壬起课断课、紫微斗数、梅花易数、小六壬、六爻、子平命理、风水、奇门、太乙、测字、
  「按某本书怎么说」「查典籍」「术数总库」「shushu」、或该用哪种术数时使用此 skill。
  不要用零散的单书 auto-ocr skill；统一走本路由，再按需 Read 子书。
---

# 术数典籍总库（shushu-canon）

本目录为**可分发完整包**：入口 skill + `books/` 子书。安装后只需注册本 skill，子书作为资料随包提供。

已整合 GitHub 上「路由 / 先算后解 / 伦理边界」类方法（见 `GITHUB_SOURCES.md`），**断法正文仍以本地精修 books 为准**。

## 硬规则

1. **先路由，再读索引，再读子书**：
   - 体系选择 → `DOMAIN_ROUTER.md`
   - 域内书单 → `DOMAIN_INDEX.json`
   - 子书 → `books/<slug>/SKILL.md`（及 `references/capabilities/`）
2. **一次打开 1–3 本**：按书名/流派命中；不要把数百本全文塞进上下文。
3. **先算后解**：干支、课式、星曜落宫尽量用排盘工具/脚本；禁止凭记忆编造固定表。
4. **精品优先**：
   - 六壬 → `DOMAIN_INDEX.json` → `liuren.priority`（避开纯 `sim_` 除非点名）
   - 紫微 → `ziwei.priority`
   - 梅花 → `meihua.priority`
   - 小六壬 → `methods/xiaoliuren.md` + `xiaoliuren.priority`
5. **边界**：不作恐吓迷信；不替代法律/医疗/投资决策；OCR/蒸馏声明宜核对原书。
6. **引用**：单次原文引用 ≤150 字。

## 标准工作流

```
用户问题
  → DOMAIN_ROUTER 定体系（或用户已点名）
  → DOMAIN_INDEX 取 1–3 个 slug
  → Read books/<slug>/SKILL.md（需要细则再读 capabilities）
  → 小六壬算法可先看 methods/xiaoliuren.md
  → 作答：依据 → 判断 → 条件；多书冲突标明出处
  → 收尾边界声明
```

快速检索（在 skill 根目录）：

```bash
node -e "const i=require('./INDEX-slim.json'); const q='紫微'; console.log(i.items.filter(x=>(x.title+x.slug).includes(q)).slice(0,10))"
node -e "console.log(require('./DOMAIN_INDEX.json').ziwei)"
```

重建书目索引：

```bash
node scripts/build_index.cjs
```

重建域索引（扫描 books 目录名）：

```bash
# 若环境有 Python，可用 ima 侧脚本或按 DOMAIN_INDEX 生成逻辑重跑
```

## 文件

| 文件 | 作用 |
|------|------|
| `DOMAIN_ROUTER.md` | 体系决策树（整合 GitHub 方法） |
| `DOMAIN_INDEX.json` | 各域本地书 slug 优先级 |
| `GITHUB_SOURCES.md` | 外部 skill 来源说明 |
| `methods/xiaoliuren.md` | 小六壬算法摘要 |
| `INDEX-slim.json` | 全库日常检索 |
| `INDEX.json` | 含 description |
| `CATALOG.md` | 人读目录 |
| `books/<slug>/` | 子书（compact-pack / LLM 精修） |
| `scripts/build_index.cjs` | 重建 INDEX |
