---
name: 中医眼科全书-眼科治法指南-skill
description: |
  用户询问《中医眼科全书  眼科治法指南》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医眼科全书  眼科治法指南。
source_book: 《中医眼科全书  眼科治法指南》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医眼科全书  眼科治法指南》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 视。凡风热、风寒、风湿、风等所致的各种眼病，证见红肿，疼痛，流泪，湿烂，瘙，痉李，
2. 以.上各药临床运川的般规律是：华凉解：农药用于治疗风热眼病，具体讲，即甲组为
3. 治疗风热眼病的通用药；乙组为喉科要药.风热眼病兼有喉痛者不可少；丙组为退要药，
4. 是风热目的首选药；丁组为引经升散要药，凡病在少阴、附明，风热头痛，肌表郁热，以及
5. 风湿病的通用药；乙组为祛风止痛要药，眼病兼有头痛身痛者不可少，如风湿所致的前
6. 以上各方临床运川的规律足：辛凉解表药方用于治疗风热眼病，其中越蜱加浮萍汤

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「(16)」相关的查阅/断法/方证问题 | references/capabilities/16.md | overview / cheatsheet |
| 与「(98)」相关的查阅/断法/方证问题 | references/capabilities/98.md | overview / cheatsheet |
| 与「二、组方技巧」相关的查阅/断法/方证问题 | references/capabilities/二-组方技巧.md | overview / cheatsheet |
| 与「一、文献选评」相关的查阅/断法/方证问题 | references/capabilities/一-文献选评.md | overview / cheatsheet |
| 与「第六章活血法」相关的查阅/断法/方证问题 | references/capabilities/第六章活血法.md | overview / cheatsheet |
| 与「二、组方技巧」相关的查阅/断法/方证问题 | references/capabilities/二-组方技巧-2.md | overview / cheatsheet |
| 与「一、文献选评」相关的查阅/断法/方证问题 | references/capabilities/一-文献选评-2.md | overview / cheatsheet |
| 与「二、组方技巧」相关的查阅/断法/方证问题 | references/capabilities/二-组方技巧-3.md | overview / cheatsheet |
| 与「(2)兼补心剂」相关的查阅/断法/方证问题 | references/capabilities/2-兼补心剂.md | overview / cheatsheet |
| 与「（1)炉甘石制法：用制炉甘石为药母外用治疗眼病，具有历史悠久，应用广泛，价廉」相关的查阅/断法/方证问题 | references/capabilities/1-炉甘石制法-用制炉甘石为药母外用治疗眼病-具有历史悠久-应用广泛-价廉.md | overview / cheatsheet |
| 与「一、外障眼病」相关的查阅/断法/方证问题 | references/capabilities/一-外障眼病.md | overview / cheatsheet |
| 与「(1）翼状餐肉割络术：手术眼先常规消毒，再行局麻，用开脸器开脸，固定眼球，术者」相关的查阅/断法/方证问题 | references/capabilities/1-翼状餐肉割络术-手术眼先常规消毒-再行局麻-用开脸器开脸-固定眼球-术者.md | overview / cheatsheet |

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
