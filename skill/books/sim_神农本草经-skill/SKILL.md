---
name: sim_神农本草经-skill
description: |
  用户询问《神农本草经》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 神农本草经。
source_book: 《神农本草经》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, tcm]
related_skills: []
distill_profile: compact-pack-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 0
---

# 《神农本草经》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 上藥一百二十種為君，主養命以應天，無毒，多服久服不傷人，欲輕身益氣不老延年者，本《上經》。
2. 中藥一百二十種為臣，主養性以應人，無毒，有毒，斟酌其宜，欲遏病補虛羸者，本《中經》。
3. 下藥一百二十五種為佐使，主治病以應地，多毒，不可久服，欲除寒熱邪氣、破積聚、愈疾者，本《下經》。
4. 藥有君臣佐使，以相宣攝合和者，宜用一君二臣五佐，又可一君三臣九佐使也。
5. 藥有陰陽配合，子母兄弟，根莖花實草石骨肉。有單行者，有相須者，有使者，有相畏者，有相惡者，有相反者，有相殺者。凡此七情和合視之，當用相須相使良者，勿用相惡相反者
6. 藥性有宜丸者，宜散者，宜水煮者，宜酒浸者，宜膏煎者，亦有一物兼宜者，亦有不可入湯酒者，並隨藥性，不得違越。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|


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
