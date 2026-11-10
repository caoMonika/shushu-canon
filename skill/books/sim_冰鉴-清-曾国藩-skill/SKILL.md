---
name: sim_冰鉴-清-曾国藩-skill
description: |
  用户要用《冰鉴-清-曾国藩》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 冰鉴-清-曾国藩。
source_book: 《冰鉴-清-曾国藩》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《冰鉴-清-曾国藩》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 邪正看眼鼻，真假看嘴唇；功名看气概，富贵看精神；
2. 主意看指爪，风波看脚筋；若要看条理，全在语言中。
3. 文人论神，有清浊之辨。清浊易辨，邪正难辨。欲辨邪正，先观动静；静若含珠，动若木发；静若无人，动若赴的，此为澄清到底。静若萤光，动若流水，尖巧而喜淫；静若半睡，动
4. 骨有九起：天庭骨隆起，枕骨强起，顶骨平起，佐串骨角起，太阳骨线起，眉骨伏犀起，鼻骨芽起，颧骨若不得而起，项骨平伏起。在头，以天庭骨、枕骨、太阳骨为主；在面，以眉
5. 骨有色，面以青为贵，"少年公卿半青面"是也。紫次之，白斯下矣。骨有质，头以联者为贵。碎次之。总之，头上无恶骨，面佳不如头佳。然大而缺天庭，终是贱品；圆而无串骨，
6. 容以七尺为期，貌合两仪而论。胸腹手足，实接五行；耳目口鼻，全通四气。相顾相称，则福生；如背如凑，则林林总总，不足论也。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |

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
