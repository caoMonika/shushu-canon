---
name: 中医眼科全书-眼科证治要诀-skill
description: |
  用户询问《中医眼科全书  眼科证治要诀》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医眼科全书  眼科证治要诀。
source_book: 《中医眼科全书  眼科证治要诀》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医眼科全书  眼科证治要诀》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 睫毛可以阻挡灰砂、尘埃进人眼中，还能减少强光对睛珠的刺激。由此可见，“且胞险有了
2. 胞脸属眼的卫外屏障，易受六涵侵袭，而尤以风湿热三邪为患者最多，故以疏风、清
3. 热、除湿为治疗胞脸疾病之常法。胞脸内应于脾胃，脾胃上饮食的受纳与运化，以滋养全
4. 身，需润空窍.若饮食失宜，损伤脾胃以致湿热内蕴或脾胃虚弱，运化失常，脏腑精血不足，
5. 本病叮发生于任何年龄，季节，单眼或双服发病，见以青少年为多见：素休虚弱，近视、
6. 远视，过度疲劳、不注意眼部卫生者尤易患病、且可反复发作。上胞、下险均可患病，但以上

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「(12)」相关的查阅/断法/方证问题 | references/capabilities/12.md | overview / cheatsheet |
| 与「【临床装现】」相关的查阅/断法/方证问题 | references/capabilities/临床装现.md | overview / cheatsheet |
| 与「【分型论证】」相关的查阅/断法/方证问题 | references/capabilities/分型论证.md | overview / cheatsheet |
| 与「【预后】」相关的查阅/断法/方证问题 | references/capabilities/预后.md | overview / cheatsheet |
| 与「【临床表现】」相关的查阅/断法/方证问题 | references/capabilities/临床表现.md | overview / cheatsheet |
| 与「【释名】」相关的查阅/断法/方证问题 | references/capabilities/释名.md | overview / cheatsheet |
| 与「【分型论治】」相关的查阅/断法/方证问题 | references/capabilities/分型论治.md | overview / cheatsheet |
| 与「【预后】」相关的查阅/断法/方证问题 | references/capabilities/预后-2.md | overview / cheatsheet |
| 与「二、因其它眼疾导致晶珠混浊而无光感或光定位不准，红绿色觉不能辨识，眼压低或」相关的查阅/断法/方证问题 | references/capabilities/二-因其它眼疾导致晶珠混浊而无光感或光定位不准-红绿色觉不能辨识-眼压低或.md | overview / cheatsheet |
| 与「【预后】」相关的查阅/断法/方证问题 | references/capabilities/预后-3.md | overview / cheatsheet |
| 与「【临床表现】」相关的查阅/断法/方证问题 | references/capabilities/临床表现-2.md | overview / cheatsheet |
| 与「一、内治」相关的查阅/断法/方证问题 | references/capabilities/一-内治.md | overview / cheatsheet |

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
