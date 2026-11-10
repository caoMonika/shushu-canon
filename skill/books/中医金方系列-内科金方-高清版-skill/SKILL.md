---
name: 中医金方系列-内科金方-高清版-skill
description: |
  用户询问《中医金方系列—内科金方（高清版）》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医金方系列—内科金方（高清版）。
source_book: 《中医金方系列—内科金方（高清版）》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医金方系列—内科金方（高清版）》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 中医治疗疾病，以其独特的理论进行辨证论治、遣
2. 金方系列》丛书，以帮助中医临床医师适应这种变化，
3. 丰富的临床经验，又搜集整理了建国以来见诸于各中医
4. 组，并可反复发病。一年四季均可发生，以冬春及气候多变时较
5. 喷嚏，鼻塞流涕，咽痛咽干，音哑咳嗽，一般以局部症状较为突
6. 胃肠型流感以恶心、腹痛、腹泻、呕吐等胃肠道症状为主要

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「（91)」相关的查阅/断法/方证问题 | references/capabilities/91.md | overview / cheatsheet |
| 与「[药物组成】黄芪 30 克，黄精 30 克，当归15 克，茯苓15」相关的查阅/断法/方证问题 | references/capabilities/药物组成-黄芪-30-克-黄精-30-克-当归15-克-茯苓15.md | overview / cheatsheet |
| 与「(5）右上腹剧痛，类似胆绞痛，疼痛减轻后，大量呕血与便」相关的查阅/断法/方证问题 | references/capabilities/5-右上腹剧痛-类似胆绞痛-疼痛减轻后-大量呕血与便.md | overview / cheatsheet |
| 与「【适应证】肝硬化腹水，湿热中阻，腹胀膨隆，两胁胀满，」相关的查阅/断法/方证问题 | references/capabilities/适应证-肝硬化腹水-湿热中阻-腹胀膨隆-两胁胀满.md | overview / cheatsheet |
| 与「【用法】上药先用冷水浸泡半小时，再煎煮2次，药液混合，」相关的查阅/断法/方证问题 | references/capabilities/用法-上药先用冷水浸泡半小时-再煎煮2次-药液混合.md | overview / cheatsheet |
| 与「四、心肌硬化」相关的查阅/断法/方证问题 | references/capabilities/四-心肌硬化.md | overview / cheatsheet |
| 与「【药物组成】党参10克，白术10克，茯苓10克，陈皮10」相关的查阅/断法/方证问题 | references/capabilities/药物组成-党参10克-白术10克-茯苓10克-陈皮10.md | overview / cheatsheet |
| 与「【药物组成】银花15克，连翘15克，生地炭15克，丹皮」相关的查阅/断法/方证问题 | references/capabilities/药物组成-银花15克-连翘15克-生地炭15克-丹皮.md | overview / cheatsheet |
| 与「【药物组成】桃仁10克，红花10克，川芎10克，当归10」相关的查阅/断法/方证问题 | references/capabilities/药物组成-桃仁10克-红花10克-川芎10克-当归10.md | overview / cheatsheet |
| 与「【药物组成】川芎30～40克，当归10克，蜈蚣（研末冲服）」相关的查阅/断法/方证问题 | references/capabilities/药物组成-川芎30-40克-当归10克-蜈蚣-研末冲服.md | overview / cheatsheet |
| 与「【药物组成】柴胡12克，当归12克，白芍12克，香附10」相关的查阅/断法/方证问题 | references/capabilities/药物组成-柴胡12克-当归12克-白芍12克-香附10.md | overview / cheatsheet |
| 与「【药物组成】生半夏30克，生南星30克，花椒30克，细辛」相关的查阅/断法/方证问题 | references/capabilities/药物组成-生半夏30克-生南星30克-花椒30克-细辛.md | overview / cheatsheet |

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
