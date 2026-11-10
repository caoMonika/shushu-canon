---
name: 引火归原药物应用考辨-skill
description: |
  用户询问《引火归原药物应用考辨》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 引火归原药物应用考辨。
source_book: 《引火归原药物应用考辨》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《引火归原药物应用考辨》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 以水湿折之。适足以火焰诣天,物穷方止矣;识其性者,
2. 反常之理,以火逐之,则燔灼自消,焰火扑灭。”其“龙火”、
3. “以火逐之”成为“引火归原”的先河。后伤寒学派亦将
4. 代文献及临床实践,应用本法的病理机制〔1〕以“阴不敛
5. 佳体现。俞根初:“阴火宜引,破阴回阳为君,附姜桂是其
6. “凡阴阳之要,阳秘乃固”。治以温补真

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |

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
