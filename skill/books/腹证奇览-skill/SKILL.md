---
name: 腹证奇览-skill
description: |
  用户询问《腹证奇览》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 腹证奇览。
source_book: 《腹证奇览》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《腹证奇览》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. (以下按姓氏笔划排列）
2. 审病，·辨证论治之首要，临床疗病所必需者也。第以我国封建制
3. 限于脉诊一法，千余年来，腹诊几趋湮灭，颇以为事。日本自
4. 唐宋以降，不断派遭留学生来中国学习，尤以鉴真法师东渡，两
5. 之，其入室弟子和久田寅氏，又撰写了《腹证奇览翼》，以羽翼其
6. 客观上给人以腹证辨证论治之规矩，因而为日本汉方医学家奉为

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「三、四子，笃嗜腹诊之籍，浸寻蕨谋，哀集稽考，发隐勾玄，」相关的查阅/断法/方证问题 | references/capabilities/三-四子-笃嗜腹诊之籍-浸寻蕨谋-哀集稽考-发隐勾玄.md | overview / cheatsheet |
| 与「二、桂枝汤证头项强痛图解」相关的查阅/断法/方证问题 | references/capabilities/二-桂枝汤证头项强痛图解.md | overview / cheatsheet |
| 与「十一、桂姜枣草黄辛附汤证图解(附一方)」相关的查阅/断法/方证问题 | references/capabilities/十一-桂姜枣草黄辛附汤证图解-附一方.md | overview / cheatsheet |
| 与「一、柴胡汤诸方辨证」相关的查阅/断法/方证问题 | references/capabilities/一-柴胡汤诸方辨证.md | overview / cheatsheet |
| 与「二、栀子豉汤证图解（附七方）」相关的查阅/断法/方证问题 | references/capabilities/二-栀子豉汤证图解-附七方.md | overview / cheatsheet |
| 与「二、调胃承气汤证图解」相关的查阅/断法/方证问题 | references/capabilities/二-调胃承气汤证图解.md | overview / cheatsheet |
| 与「十一、 大黄硝石汤证图解」相关的查阅/断法/方证问题 | references/capabilities/十一-大黄硝石汤证图解.md | overview / cheatsheet |
| 与「二、竹叶石膏汤证图解（附一方)」相关的查阅/断法/方证问题 | references/capabilities/二-竹叶石膏汤证图解-附一方.md | overview / cheatsheet |
| 与「四、人参汤证图解」相关的查阅/断法/方证问题 | references/capabilities/四-人参汤证图解.md | overview / cheatsheet |
| 与「一、苓桂术甘汤证图解 (附二方)」相关的查阅/断法/方证问题 | references/capabilities/一-苓桂术甘汤证图解-附二方.md | overview / cheatsheet |
| 与「一、小品奔豚汤证图解」相关的查阅/断法/方证问题 | references/capabilities/一-小品奔豚汤证图解.md | overview / cheatsheet |
| 与「七、调气饮证图解 (附一方)」相关的查阅/断法/方证问题 | references/capabilities/七-调气饮证图解-附一方.md | overview / cheatsheet |

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
