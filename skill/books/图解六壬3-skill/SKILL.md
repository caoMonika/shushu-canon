---
name: 图解六壬3-skill
description: |
  用户要用《图解六壬3》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 图解六壬3。
source_book: 《图解六壬3》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《图解六壬3》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 地支，以及源于易经的阴阳五行
2. 以此为基础，发展出许多璀璨的
3. 个信息的交汇，占课者便是以此
4. 为后妃，主官廷阴私、妇女、胎产以及赏赐、恩泽等。
5. 以及争斗之事，又主财帛之类的喜事。
6. 现象，都可以按十二支神所属，

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「【白话详解图解本】」相关的查阅/断法/方证问题 | references/capabilities/白话详解图解本.md | overview / cheatsheet |
| 与「第三部」相关的查阅/断法/方证问题 | references/capabilities/第三部.md | overview / cheatsheet |
| 与「第三部」相关的查阅/断法/方证问题 | references/capabilities/第三部-2.md | overview / cheatsheet |
| 与「【白话提要】」相关的查阅/断法/方证问题 | references/capabilities/白话提要.md | overview / cheatsheet |
| 与「第三部」相关的查阅/断法/方证问题 | references/capabilities/第三部-3.md | overview / cheatsheet |
| 与「第三部·毕法赋」相关的查阅/断法/方证问题 | references/capabilities/第三部-毕法赋.md | overview / cheatsheet |
| 与「图解六壬大全第三部·毕法赋」相关的查阅/断法/方证问题 | references/capabilities/图解六壬大全第三部-毕法赋.md | overview / cheatsheet |
| 与「第三部」相关的查阅/断法/方证问题 | references/capabilities/第三部-4.md | overview / cheatsheet |
| 与「【原文】」相关的查阅/断法/方证问题 | references/capabilities/原文.md | overview / cheatsheet |
| 与「【原文】」相关的查阅/断法/方证问题 | references/capabilities/原文-2.md | overview / cheatsheet |
| 与「【原文】」相关的查阅/断法/方证问题 | references/capabilities/原文-3.md | overview / cheatsheet |
| 与「第三部·毕法赋」相关的查阅/断法/方证问题 | references/capabilities/第三部-毕法赋-2.md | overview / cheatsheet |

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
