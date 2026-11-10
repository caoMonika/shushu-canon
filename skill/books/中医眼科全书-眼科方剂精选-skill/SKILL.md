---
name: 中医眼科全书-眼科方剂精选-skill
description: |
  用户询问《中医眼科全书  眼科方剂精选》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医眼科全书  眼科方剂精选。
source_book: 《中医眼科全书  眼科方剂精选》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医眼科全书  眼科方剂精选》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 是学习中医眼科必不可少的内容，是中医眼科医生必须学习和掌握的。
2. 眼科方剂，数以干计。但按给药途径，可分为内服与外治两火类，以内服为主，配合外
3. 治，这是中医眼科的传统治法。所以穿趣内服方剂的组方规律，是继承前人经验、发扬传统
4. 以·首方剂为基础，随证加减，标本兼顾，以适应各种错综复杂的病情，是古人选药组
5. 医的经验所在。《丹溪心法》指出：眼病所医.不外虚实二者而已。”外障多实，以祛邪为
6. 主，内障多虚，以扶止为主。外摩眼病，风热多见，以去风热为上，合理组合药物，再随证加

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、外障通用剂..」相关的查阅/断法/方证问题 | references/capabilities/一-外障通用剂.md | overview / cheatsheet |
| 与「(81)」相关的查阅/断法/方证问题 | references/capabilities/81.md | overview / cheatsheet |
| 与「【方解】本方用熟地、梅杞为君，以滋肝肾之阴；用肉芡蓉、川巴戟、川续断、山莫肉、」相关的查阅/断法/方证问题 | references/capabilities/方解-本方用熟地-梅杞为君-以滋肝肾之阴-用肉芡蓉-川巴戟-川续断-山莫肉.md | overview / cheatsheet |
| 与「【方解】暨晴多属肝热过甚，」：蒸日内胆精：胆精不其蒸，故风轮里层突出风轮外」相关的查阅/断法/方证问题 | references/capabilities/方解-暨晴多属肝热过甚-蒸日内胆精-胆精不其蒸-故风轮里层突出风轮外.md | overview / cheatsheet |
| 与「【方解】风寒湿邪，外束肌表，胰理闭塞，里热不得外泄，上攻目窍，放见双月红肿赤」相关的查阅/断法/方证问题 | references/capabilities/方解-风寒湿邪-外束肌表-胰理闭塞-里热不得外泄-上攻目窍-放见双月红肿赤.md | overview / cheatsheet |
| 与「【按语】绿风内障即现代医学所说的急性充血性青光限或亚急性允血性青光眼、病」相关的查阅/断法/方证问题 | references/capabilities/按语-绿风内障即现代医学所说的急性充血性青光限或亚急性允血性青光眼-病.md | overview / cheatsheet |
| 与「【按语】本方轻清什酸，熄风养阴，散不件燥，滋不赋滞。产生失血发热或因高热耗」相关的查阅/断法/方证问题 | references/capabilities/按语-本方轻清什酸-熄风养阴-散不件燥-滋不赋滞-产生失血发热或因高热耗.md | overview / cheatsheet |
| 与「第九章理血剂」相关的查阅/断法/方证问题 | references/capabilities/第九章理血剂.md | overview / cheatsheet |
| 与「第十二章补益剂」相关的查阅/断法/方证问题 | references/capabilities/第十二章补益剂.md | overview / cheatsheet |
| 与「【功用】益气养血，滋阴清热。」相关的查阅/断法/方证问题 | references/capabilities/功用-益气养血-滋阴清热.md | overview / cheatsheet |
| 与「【按语】本方主要应用于能近法远症，所谓能近快远即近视清明，远视不清，此种情」相关的查阅/断法/方证问题 | references/capabilities/按语-本方主要应用于能近法远症-所谓能近快远即近视清明-远视不清-此种情.md | overview / cheatsheet |
| 与「【按语】熊胆眼药水适用于肝热目赤，风热或疫病之邪所致眼目疾病.近代药理研」相关的查阅/断法/方证问题 | references/capabilities/按语-熊胆眼药水适用于肝热目赤-风热或疫病之邪所致眼目疾病-近代药理研.md | overview / cheatsheet |

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
