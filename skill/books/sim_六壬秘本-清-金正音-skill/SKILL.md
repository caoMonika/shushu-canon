---
name: sim_六壬秘本-清-金正音-skill
description: |
  用户要用《六壬秘本-清-金正音》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 六壬秘本-清-金正音。
source_book: 《六壬秘本-清-金正音》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《六壬秘本-清-金正音》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 占天晴否 /占天雨否 /占水涨退否 /占人宅 /宅中有无鬼神 /占修造岁内所忌 /推月龙 /
2. 见贵求望 /人情虚实 /占迁官 /定文武 /占赴举 /占求婚成否 /择妇以立方 /占女邪正 /占女美丑 妇人入门吉凶 /占何时来 /占产育 /占怀孕生时 /产妇
3. 占六畜病 /求失畜 占商贾 /宜往何方求财觅利 /卖物售否 /词讼占 /囚系出狱否罪轻重 /
4. 占病生死 /病形状 /医药 /看何鬼为殃 /辨瘥期 /占盗贼 /疑何人行盗 /占同居人窃否 /
5. 戌加寅在甲日主坟墓损坏。金氏勾画，在甲以下八字注“墙损”二字。戌作白虎克日辰主恶积。戌加四季加日辰上主墙壁。戌加元武、天空为贪丐人。戌加日辰上主旧物。
6. 巳酉丑日亥为用主失物。雀临亥为监引。亥加壬癸子上主不明。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |
| 与「第4段」相关的查阅/断法/方证问题 | references/capabilities/第4段.md | overview / cheatsheet |
| 与「第5段」相关的查阅/断法/方证问题 | references/capabilities/第5段.md | overview / cheatsheet |
| 与「第6段」相关的查阅/断法/方证问题 | references/capabilities/第6段.md | overview / cheatsheet |
| 与「第7段」相关的查阅/断法/方证问题 | references/capabilities/第7段.md | overview / cheatsheet |
| 与「第8段」相关的查阅/断法/方证问题 | references/capabilities/第8段.md | overview / cheatsheet |
| 与「第9段」相关的查阅/断法/方证问题 | references/capabilities/第9段.md | overview / cheatsheet |
| 与「第10段」相关的查阅/断法/方证问题 | references/capabilities/第10段.md | overview / cheatsheet |
| 与「第11段」相关的查阅/断法/方证问题 | references/capabilities/第11段.md | overview / cheatsheet |
| 与「第12段」相关的查阅/断法/方证问题 | references/capabilities/第12段.md | overview / cheatsheet |

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
