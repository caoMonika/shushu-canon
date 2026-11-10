---
name: 中医眼科全书-眼科现代研究-skill
description: |
  用户询问《中医眼科全书  眼科现代研究》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医眼科全书  眼科现代研究。
source_book: 《中医眼科全书  眼科现代研究》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医眼科全书  眼科现代研究》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 阴阳学说是我国古代补素的唯物论和自发的辩证法思想，它用于医学领域，借以说明
2. 科方面，同样以阴阳学说作为理论指导和临床诊断与治疗的依据。近代研究，主要是从文
3. （一）解剖阴阳学说认为人体是由阴阳构成，机体内的各种组织器宜也是由既对立
4. 1.从眼的大体解剖方面看，《灵枢·邪气脏畴病形》指出：“十二经脉、三百六十五络，
5. 2.从眼内经络分布看，眼内经络分布较广，以十二经脉为例，手阳明大肠、手少阴三
6. 直接联系，但它们是通过大肠、胃、膀胱与三焦经的表里关系而与眼建立联系的.所以《素

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第一章理论研究」相关的查阅/断法/方证问题 | references/capabilities/第一章理论研究.md | overview / cheatsheet |
| 与「第二章辨证与治法研究」相关的查阅/断法/方证问题 | references/capabilities/第二章辨证与治法研究.md | overview / cheatsheet |
| 与「（1）头一带（眼区）位于眼周围，其范围，内至眶缘，下至颊部眶下孔，外人发际约5分」相关的查阅/断法/方证问题 | references/capabilities/1-头一带-眼区-位于眼周围-其范围-内至眶缘-下至颊部眶下孔-外人发际约5分.md | overview / cheatsheet |
| 与「二、病因病机探讨」相关的查阅/断法/方证问题 | references/capabilities/二-病因病机探讨.md | overview / cheatsheet |
| 与「[22]方颂告等板监根、银黄液治疗流行性山血性结膜费疗效观察.中西医结合眼科，」相关的查阅/断法/方证问题 | references/capabilities/22-方颂告等板监根-银黄液治疗流行性山血性结膜费疗效观察-中西医结合眼科.md | overview / cheatsheet |
| 与「（3)舞臀汤：出光活、川弯、陈皮、半夏、茯苓、麻黄，白芷、黄芩、薬本、板蓝根、荒」相关的查阅/断法/方证问题 | references/capabilities/3-舞臀汤-出光活-川弯-陈皮-半夏-茯苓-麻黄-白芷-黄芩-薬本-板蓝根-荒.md | overview / cheatsheet |
| 与「一、临床症状」相关的查阅/断法/方证问题 | references/capabilities/一-临床症状.md | overview / cheatsheet |
| 与「(2）牌胃气虚型：」相关的查阅/断法/方证问题 | references/capabilities/2-牌胃气虚型.md | overview / cheatsheet |
| 与「(2）获苓合剂：由茯苓15克、当归9克、半夏12克浓缩成10毫升，一次口服.店氏」相关的查阅/断法/方证问题 | references/capabilities/2-获苓合剂-由茯苓15克-当归9克-半夏12克浓缩成10毫升-一次口服-店氏.md | overview / cheatsheet |
| 与「(6）及时进行心理治疗、消除病人的紧张恐惧心理和剧烈的情志变化。」相关的查阅/断法/方证问题 | references/capabilities/6-及时进行心理治疗-消除病人的紧张恐惧心理和剧烈的情志变化.md | overview / cheatsheet |
| 与「(1)脾虚型：」相关的查阅/断法/方证问题 | references/capabilities/1-脾虚型.md | overview / cheatsheet |
| 与「(1）加味五苓散：由茯苓、猪苓、泽泻、白术、桂枝、丹参、蒲公英、川芎、夏枯草，黄」相关的查阅/断法/方证问题 | references/capabilities/1-加味五苓散-由茯苓-猪苓-泽泻-白术-桂枝-丹参-蒲公英-川芎-夏枯草-黄.md | overview / cheatsheet |

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
