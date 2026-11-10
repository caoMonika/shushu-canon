---
name: 中医眼科全书-眼科临证精华-skill
description: |
  用户询问《中医眼科全书  眼科临证精华》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医眼科全书  眼科临证精华。
source_book: 《中医眼科全书  眼科临证精华》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医眼科全书  眼科临证精华》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 张子述望眼辨证要诀.·.
2. 任何疾病均可运用现代的检查以弥补中医周有的四诊之不是。在眼科方面，如肉眼及
3. 眼底病等，肉眼无法见到.更需要应用角膜显微镜或眼底镜进行检食，并以此作为辨证施
4. 治的参考或依据.本文介绍陆老数十年米采用以1方法治疗某些眼病的经验。
5. 角膜表层：根据中医眼科文献，野有老嫩之分。在角膜显微镜下，以萤光素卷色的为嫩
6. .须辨证论治：老不着色，可以外用药治疗，嫩又分点状、片状、树枝状等。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「(7)」相关的查阅/断法/方证问题 | references/capabilities/7.md | overview / cheatsheet |
| 与「(6)...」相关的查阅/断法/方证问题 | references/capabilities/6.md | overview / cheatsheet |
| 与「四、消积导滞法适用于食伤脾肾，或营养不良，精微失运，内生积滞。证见黑白两睛」相关的查阅/断法/方证问题 | references/capabilities/四-消积导滞法适用于食伤脾肾-或营养不良-精微失运-内生积滞-证见黑白两睛.md | overview / cheatsheet |
| 与「一、上下取」相关的查阅/断法/方证问题 | references/capabilities/一-上下取.md | overview / cheatsheet |
| 与「四、清热泻火治疗黄液上冲」相关的查阅/断法/方证问题 | references/capabilities/四-清热泻火治疗黄液上冲.md | overview / cheatsheet |
| 与「四、黑清鹅障」相关的查阅/断法/方证问题 | references/capabilities/四-黑清鹅障.md | overview / cheatsheet |
| 与「一、临床资料」相关的查阅/断法/方证问题 | references/capabilities/一-临床资料.md | overview / cheatsheet |
| 与「一、经之血，急当祛散」相关的查阅/断法/方证问题 | references/capabilities/一-经之血-急当祛散.md | overview / cheatsheet |
| 与「一、辨证与辨病应当统一」相关的查阅/断法/方证问题 | references/capabilities/一-辨证与辨病应当统一.md | overview / cheatsheet |
| 与「第七章眼科血证」相关的查阅/断法/方证问题 | references/capabilities/第七章眼科血证.md | overview / cheatsheet |
| 与「一、辨证论治」相关的查阅/断法/方证问题 | references/capabilities/一-辨证论治.md | overview / cheatsheet |
| 与「一、主要经验」相关的查阅/断法/方证问题 | references/capabilities/一-主要经验.md | overview / cheatsheet |

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
