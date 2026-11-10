---
name: 斗首择日-skill
description: |
  用户要用《斗首择日》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 斗首择日。
source_book: 《斗首择日》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《斗首择日》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 以座山斗首五行与四柱天干的化合五行论生克分元辰，武财、廉子三吉，廉
2. 子只取用一位。以下七层只是解安六亲法。(例课吉凶另当别论，因气运十二长
3. 以翻化诀，由天干元辰武财翻化而来。
4. 用四柱天干，以五虎遁遁至座山所属之先天十二支位，看属何干，以此干之

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「1）天层」相关的查阅/断法/方证问题 | references/capabilities/1-天层.md | overview / cheatsheet |
| 与「4）元层」相关的查阅/断法/方证问题 | references/capabilities/4-元层.md | overview / cheatsheet |
| 与「6）命层」相关的查阅/断法/方证问题 | references/capabilities/6-命层.md | overview / cheatsheet |

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
