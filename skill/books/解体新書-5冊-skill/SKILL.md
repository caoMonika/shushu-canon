---
name: 解体新書-5冊-skill
description: |
  用户询问《解体新書 5冊》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 解体新書 5冊。
source_book: 《解体新書 5冊》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《解体新書 5冊》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 也待以為浪不中道而者
2. 留之際對勝以為常歸子
3. 看過者腹固為不の馬余
4. 心力智巧而臻斯由此以
5. 自五侯下弘丞原凡有生氯者
6. 篇奇管心圖其屈曲心状以会

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「上體者頭也見于第六篇其之者」相关的查阅/断法/方证问题 | references/capabilities/上體者頭也見于第六篇其之者.md | overview / cheatsheet |
| 与「者見于第十九篇之上下谷二指」相关的查阅/断法/方证问题 | references/capabilities/者見于第十九篇之上下谷二指.md | overview / cheatsheet |
| 与「人所以，養，小兒，者也見于第十三篇」相关的查阅/断法/方证问题 | references/capabilities/人所以-養-小兒-者也見于第十三篇.md | overview / cheatsheet |
| 与「舌骨见干第十二篇」相关的查阅/断法/方证问题 | references/capabilities/舌骨见干第十二篇.md | overview / cheatsheet |
| 与「矣。一日二三四加見于第五篇」相关的查阅/断法/方证问题 | references/capabilities/矣-一日二三四加見于第五篇.md | overview / cheatsheet |
| 与「之孔也。見于第五篇」相关的查阅/断法/方证问题 | references/capabilities/之孔也-見于第五篇.md | overview / cheatsheet |
| 与「第五一篇」相关的查阅/断法/方证问题 | references/capabilities/第五一篇.md | overview / cheatsheet |
| 与「第十六七篇」相关的查阅/断法/方证问题 | references/capabilities/第十六七篇.md | overview / cheatsheet |
| 与「其别者。見于第二十七篇」相关的查阅/断法/方证问题 | references/capabilities/其别者-見于第二十七篇.md | overview / cheatsheet |
| 与「肠見于第二十篇」相关的查阅/断法/方证问题 | references/capabilities/肠見于第二十篇.md | overview / cheatsheet |
| 与「也見干第十六篇」相关的查阅/断法/方证问题 | references/capabilities/也見干第十六篇.md | overview / cheatsheet |
| 与「筋有三部如其状第三篇八符」相关的查阅/断法/方证问题 | references/capabilities/筋有三部如其状第三篇八符.md | overview / cheatsheet |

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
