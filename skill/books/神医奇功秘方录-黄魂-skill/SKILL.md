---
name: 神医奇功秘方录-黄魂-skill
description: |
  用户询问《神医奇功秘方录（黄魂）》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 神医奇功秘方录（黄魂）。
source_book: 《神医奇功秘方录（黄魂）》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《神医奇功秘方录（黄魂）》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 谨以作者最深挚的情意，献给立志为人类传播福音的同
2. 库，应当努力发掘，加以提高。”“中国应当对于人类有较大
3. 看到，一大批中医志士在为振兴祖国的医学事业而呕心沥血，
4. 希望之光。可以预言，从二十世纪九十年代走向二十一世纪，
5. 招，则希望人们以科学武装自己的头脑，铲除封建迷信的残
6. 形象性、趣味性的故事，以增强可读性，寓教于乐。从本书

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「(10)」相关的查阅/断法/方证问题 | references/capabilities/10.md | overview / cheatsheet |
| 与「五、中国民间的抗癌群方」相关的查阅/断法/方证问题 | references/capabilities/五-中国民间的抗癌群方.md | overview / cheatsheet |
| 与「二、狂犬病的发生」相关的查阅/断法/方证问题 | references/capabilities/二-狂犬病的发生.md | overview / cheatsheet |
| 与「五、死灰复燃的淋病与对策」相关的查阅/断法/方证问题 | references/capabilities/五-死灰复燃的淋病与对策.md | overview / cheatsheet |
| 与「一、咳一声嗽便拔掉虫牙」相关的查阅/断法/方证问题 | references/capabilities/一-咳一声嗽便拔掉虫牙.md | overview / cheatsheet |
| 与「一、鼠疫与战争胜败」相关的查阅/断法/方证问题 | references/capabilities/一-鼠疫与战争胜败.md | overview / cheatsheet |
| 与「二、白求恩与败血症」相关的查阅/断法/方证问题 | references/capabilities/二-白求恩与败血症.md | overview / cheatsheet |
| 与「四、轻功的种类」相关的查阅/断法/方证问题 | references/capabilities/四-轻功的种类.md | overview / cheatsheet |
| 与「（36）踝骨穴」相关的查阅/断法/方证问题 | references/capabilities/36-踝骨穴.md | overview / cheatsheet |
| 与「（7）胃病。」相关的查阅/断法/方证问题 | references/capabilities/7-胃病.md | overview / cheatsheet |
| 与「七、半夜出现鬼敲门」相关的查阅/断法/方证问题 | references/capabilities/七-半夜出现鬼敲门.md | overview / cheatsheet |
| 与「十八、收人性命的怪魔」相关的查阅/断法/方证问题 | references/capabilities/十八-收人性命的怪魔.md | overview / cheatsheet |

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
