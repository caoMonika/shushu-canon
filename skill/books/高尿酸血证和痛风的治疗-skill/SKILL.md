---
name: 高尿酸血证和痛风的治疗-skill
description: |
  用户询问《高尿酸血证和痛风的治疗》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 高尿酸血证和痛风的治疗。
source_book: 《高尿酸血证和痛风的治疗》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 6
---

# 《高尿酸血证和痛风的治疗》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. ! ! 痛风患者不仅会出现关节炎以及包括痛风结节、
2. 患者约有"#$ 不同程度合并上述生活习惯病。所以，
3. 已经转变到,# 岁段；推测与年轻人过度饮食倾向以及
4. 如果急性关节炎频发，则出现以尿
5. 出尿酸盐结晶诱发关节炎。因此，如果以前就患有高
6. 断标准可以确诊。另外，尚有诊断中的注意问题（表

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、痛风的诊断」相关的查阅/断法/方证问题 | references/capabilities/一-痛风的诊断.md | overview / cheatsheet |
| 与「二、高尿酸血症的诊断」相关的查阅/断法/方证问题 | references/capabilities/二-高尿酸血症的诊断.md | overview / cheatsheet |
| 与「三、痛风的药物治疗」相关的查阅/断法/方证问题 | references/capabilities/三-痛风的药物治疗.md | overview / cheatsheet |
| 与「三、痛风、高尿酸血症的治疗」相关的查阅/断法/方证问题 | references/capabilities/三-痛风-高尿酸血症的治疗.md | overview / cheatsheet |
| 与「4)*+ )- 应当视做开始治疗的下限。」相关的查阅/断法/方证问题 | references/capabilities/4-应当视做开始治疗的下限.md | overview / cheatsheet |
| 与「四、生活指导」相关的查阅/断法/方证问题 | references/capabilities/四-生活指导.md | overview / cheatsheet |

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
