---
name: 当代中医必效奇方秘术清晰版-skill
description: |
  用户询问《当代中医必效奇方秘术清晰版》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 当代中医必效奇方秘术清晰版。
source_book: 《当代中医必效奇方秘术清晰版》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《当代中医必效奇方秘术清晰版》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 方，以其显著的疗效，为解除人民病痛发挥了很大的作用。
2. 本书以病为纲，分内、外、妇儿、五宫、皮肤、骨
3. 事项等。每方下均列有医师姓名和地址，以便在临床运用
4. 本书各方药简便宜用，效果独特，弥足珍贵。其文字精
5. 冰黄酐青黛粉治外耳道炎（辽宁孟凡珍等）·-356
6. 例，治愈率达95%以上。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「七、川栋子；上尿道结石，加王不留行；下尿道结石，加大」相关的查阅/断法/方证问题 | references/capabilities/七-川栋子-上尿道结石-加王不留行-下尿道结石-加大.md | overview / cheatsheet |
| 与「6）、川军神安散治囊狂」相关的查阅/断法/方证问题 | references/capabilities/6-川军神安散治囊狂.md | overview / cheatsheet |
| 与「三七、野艾等。」相关的查阅/断法/方证问题 | references/capabilities/三七-野艾等.md | overview / cheatsheet |

**非能力类查询**：
- 书名/整书概览 → references/overview.md
- 术语 → references/glossary.md
- 一句话规则速查 → references/cheatsheet.md
- 完整索引 → references/capability-index.md

## 加载规则

- 每次任务先读本文件，再按路由表加载 **1** 张能力卡；明确跨章时最多 2 张。
- 概览/书名类问题不加载能力卡，用「核心原则」与 overview 回答。
- 重要结论回 OCR/原书核对；禁止臆补生僻字与剂量。

## 边界与判停

- 医疗急症 / 违法用途 / 人身安全 → 停止套用，建议专业求助或拒绝。
- 纯事实查询（书名/作者）→ overview 回答后即停。
