---
name: 病源辞典_吴克潜-skill
description: |
  用户询问《病源辞典_吴克潜》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 病源辞典_吴克潜。
source_book: 《病源辞典_吴克潜》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《病源辞典_吴克潜》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 之著霉源溯流以供研习此其一中醫病名或乎古或取乎今或追其因
2. 以然者歷史長则經驗富少所見则多所怪也吾人日抱改進之而不能使先
3. 痧疫密治攝眷散載各家專集而一般所為非腹不可之盲炎尤群於
4. 序以究疾病之委是治病之道固莫先於追本溯源故数干年前在醫藥发之
5. 大過不及之化七情六欲之變以疾病之源復远五職六腑之三部九候之
6. 被陰陽之動静盛衰之變遥四時之消長以合乎人類之攝疾病之避更關

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「四、」相关的查阅/断法/方证问题 | references/capabilities/四.md | overview / cheatsheet |
| 与「【心經疗】」相关的查阅/断法/方证问题 | references/capabilities/心經疗.md | overview / cheatsheet |
| 与「【死人面】」相关的查阅/断法/方证问题 | references/capabilities/死人面.md | overview / cheatsheet |
| 与「【男乳睡】」相关的查阅/断法/方证问题 | references/capabilities/男乳睡.md | overview / cheatsheet |
| 与「【近视】」相关的查阅/断法/方证问题 | references/capabilities/近视.md | overview / cheatsheet |
| 与「【病後生】」相关的查阅/断法/方证问题 | references/capabilities/病後生.md | overview / cheatsheet |
| 与「【紫黛疗】」相关的查阅/断法/方证问题 | references/capabilities/紫黛疗.md | overview / cheatsheet |
| 与「【痘疥腰痛】」相关的查阅/断法/方证问题 | references/capabilities/痘疥腰痛.md | overview / cheatsheet |
| 与「【傷寒耳翼]」相关的查阅/断法/方证问题 | references/capabilities/傷寒耳翼.md | overview / cheatsheet |
| 与「【經前吐血】」相关的查阅/断法/方证问题 | references/capabilities/經前吐血.md | overview / cheatsheet |
| 与「【熱霍乱】」相关的查阅/断法/方证问题 | references/capabilities/熱霍乱.md | overview / cheatsheet |
| 与「【臂痹】」相关的查阅/断法/方证问题 | references/capabilities/臂痹.md | overview / cheatsheet |

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
