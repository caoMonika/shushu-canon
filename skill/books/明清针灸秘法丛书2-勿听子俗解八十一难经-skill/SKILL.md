---
name: 明清针灸秘法丛书2-勿听子俗解八十一难经-skill
description: |
  用户询问《明清针灸秘法丛书2 勿听子俗解八十一难经》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 明清针灸秘法丛书2 勿听子俗解八十一难经。
source_book: 《明清针灸秘法丛书2 勿听子俗解八十一难经》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《明清针灸秘法丛书2 勿听子俗解八十一难经》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 作在注疏古典医著、丰富临床实践经验等方面均超过了以
2. 传和价值的发挥；甚至一部分古籍为孤本，难以得见，掩
3. 《针灸秘法全书》，因其流传甚少，难以在世面所见，且其
4. 本次整理所用底本以贺老藏书为主，同时，中国中医
5. 新描绘、细致临摹，图中文字改为现行规范简化字，以方
6. 评指正，以备进一步修订补正。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、底本为繁体字刻本、抄本者，本次出版时均依」相关的查阅/断法/方证问题 | references/capabilities/一-底本为繁体字刻本-抄本者-本次出版时均依.md | overview / cheatsheet |
| 与「[二难]」相关的查阅/断法/方证问题 | references/capabilities/二难.md | overview / cheatsheet |
| 与「[九难]」相关的查阅/断法/方证问题 | references/capabilities/九难.md | overview / cheatsheet |
| 与「[十六难]」相关的查阅/断法/方证问题 | references/capabilities/十六难.md | overview / cheatsheet |
| 与「[二十二难]」相关的查阅/断法/方证问题 | references/capabilities/二十二难.md | overview / cheatsheet |
| 与「[三十难]」相关的查阅/断法/方证问题 | references/capabilities/三十难.md | overview / cheatsheet |
| 与「[三十八难]」相关的查阅/断法/方证问题 | references/capabilities/三十八难.md | overview / cheatsheet |
| 与「[四十五难]」相关的查阅/断法/方证问题 | references/capabilities/四十五难.md | overview / cheatsheet |
| 与「[五十二难]」相关的查阅/断法/方证问题 | references/capabilities/五十二难.md | overview / cheatsheet |
| 与「[六十一难]」相关的查阅/断法/方证问题 | references/capabilities/六十一难.md | overview / cheatsheet |
| 与「[六十七难]」相关的查阅/断法/方证问题 | references/capabilities/六十七难.md | overview / cheatsheet |
| 与「[七十七难]」相关的查阅/断法/方证问题 | references/capabilities/七十七难.md | overview / cheatsheet |

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
