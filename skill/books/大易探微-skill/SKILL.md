---
name: 大易探微-skill
description: |
  用户要用《大易探微》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 大易探微。
source_book: 《大易探微》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《大易探微》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 正聖言’九易春秋’始入佳境。夫然後知所易者’本一以探索陰陽動燮之规
2. 者為數，而人之所者在明’此學易者不可不知也。
3. 在參伍錯線。是即敷之排列組合’固所以為易之演燮成文’極敷定象之由也°而
4. 實通，總歸天地惡运之盈虚消長’一以始，此易之蕴羲也。
5. 敷以為言’道無不在’象無不包’理無不具，數無不行°道，象，理，數之融會
6. 始作八卦’制數度’紀天行°運數追踪’以明陰陽之變’立象意’以類萬物之

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「二.七大七」相关的查阅/断法/方证问题 | references/capabilities/二-七大七.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1.md | overview / cheatsheet |
| 与「（11）」相关的查阅/断法/方证问题 | references/capabilities/11.md | overview / cheatsheet |
| 与「（1)」相关的查阅/断法/方证问题 | references/capabilities/1-2.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-3.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-4.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-5.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-6.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-7.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-8.md | overview / cheatsheet |
| 与「（1）」相关的查阅/断法/方证问题 | references/capabilities/1-9.md | overview / cheatsheet |
| 与「（4）」相关的查阅/断法/方证问题 | references/capabilities/4.md | overview / cheatsheet |

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
