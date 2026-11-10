---
name: 20世纪上海地区擅用附子六大家-skill
description: |
  用户询问《20世纪上海地区擅用附子六大家》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 20世纪上海地区擅用附子六大家。
source_book: 《20世纪上海地区擅用附子六大家》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 1
---

# 《20世纪上海地区擅用附子六大家》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 日,间断用药,以图治本缓功取效。半年后患者来
2. 按:方药之曰:“妇人不得自专,每多忿怒。”怒则
3. 疗,经前门老师主张以“攻”为主,故初诊治以活血理
4. 之功。二诊时注重调理以补肾固本、养血调肝为要,
5. 肾同调,补而不峻,温而不燥,虚可以补,实可以泻,
6. 提要: 20 世纪上海地区存在着一个以擅用附子为学术特点, 具有学术继承关系的医学流派。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「[15 ]陈耀堂,陈泽霖,陈梅芳1 附子在临床上之运用1 中医杂」相关的查阅/断法/方证问题 | references/capabilities/15-陈耀堂-陈泽霖-陈梅芳1-附子在临床上之运用1-中医杂.md | overview / cheatsheet |

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
