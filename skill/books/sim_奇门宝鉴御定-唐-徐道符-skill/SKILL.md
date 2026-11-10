---
name: sim_奇门宝鉴御定-唐-徐道符-skill
description: |
  用户要用《奇门宝鉴御定-唐-徐道符》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 奇门宝鉴御定-唐-徐道符。
source_book: 《奇门宝鉴御定-唐-徐道符》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《奇门宝鉴御定-唐-徐道符》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 奇门之说，论者谓始于黄帝，删于吕望、张良。汉以前、往往散见于他书，至于隋志艺文专书，始有一十三家。唐益倍之，则其学之来，亦不在近矣。
2. 张良注云：六癸为天藏，可以伏藏。由是言之。即奇门之权舆也。
3. 宋之仁宗。以洗马杨维德，簒六壬则曰：神应经。奇门则曰：符应经。今亦不能见其全。得毋好古之士。尚有什袭而藏者乎。
4. 明之宸濠称乱。王守仁收揽异术。乃有李成吾者，进以奇门真传。今之所谓李氏奇门者也。
5. 仇鸾门下士有林士徵者。以奇门占兵屡有有奇验。锦衣陆炳序其书而传之。人呼为林氏奇门。
6. 陶仲文以李林二氏之书。忝以他书而谬紊之，曰：陶真人遁甲神书。盖胜国之以奇门着见者三家而巳矣。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「【释六仪遁六甲】」相关的查阅/断法/方证问题 | references/capabilities/释六仪遁六甲.md | overview / cheatsheet |
| 与「【释勃格飞伏】」相关的查阅/断法/方证问题 | references/capabilities/释勃格飞伏.md | overview / cheatsheet |
| 与「【释战关背向】」相关的查阅/断法/方证问题 | references/capabilities/释战关背向.md | overview / cheatsheet |

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
