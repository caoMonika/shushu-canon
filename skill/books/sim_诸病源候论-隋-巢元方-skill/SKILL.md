---
name: sim_诸病源候论-隋-巢元方-skill
description: |
  用户询问《诸病源候论-隋-巢元方》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 诸病源候论-隋-巢元方。
source_book: 《诸病源候论-隋-巢元方》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《诸病源候论-隋-巢元方》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 翰林医官副使赵拱等参校既终，缮录以献，爰俾近着，为之题辞。顾惟空疏，莫探秘赜。徒以述善诱之深意，用劝方来；杨勤恤之至仁，式昭大庇云尔。谨序。
2. === 风病诸候上（凡二十九论） ===
3. 中风者，风气中于人也。风是四时之气，分布八方，主长养万物。从其乡来者，人中少死病；不从其乡来者，人中多死病。其为病者，藏于皮肤之间，内不得通，外不得泄。其入经脉
4. 心中风，但得偃卧，不得倾侧，汗出，若唇赤汗流者可治，急灸心俞百壮；若唇或青或黑，或白或黄，此是心坏为水。面目亭亭，时悚动者，皆不可复治，五六日而死。
5. 肝中风，但踞坐，不得低头，若绕两目连额上，色微有青，唇青面黄者可治，急灸肝俞百壮；若大青黑，面一黄一白者，是肝已伤，不可复治，数日而死。
6. 脾中风，踞而腹满，身通黄，吐咸汁出者可治，急灸脾俞百壮；若手足青者，不可复治肾中风，踞而腰痛，视胁左右，未有黄色如饼粢大者可治，急灸肾俞百壮；若齿黄赤，鬓发直，

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |
| 与「第4段」相关的查阅/断法/方证问题 | references/capabilities/第4段.md | overview / cheatsheet |
| 与「第5段」相关的查阅/断法/方证问题 | references/capabilities/第5段.md | overview / cheatsheet |
| 与「第6段」相关的查阅/断法/方证问题 | references/capabilities/第6段.md | overview / cheatsheet |
| 与「第7段」相关的查阅/断法/方证问题 | references/capabilities/第7段.md | overview / cheatsheet |
| 与「第8段」相关的查阅/断法/方证问题 | references/capabilities/第8段.md | overview / cheatsheet |
| 与「第9段」相关的查阅/断法/方证问题 | references/capabilities/第9段.md | overview / cheatsheet |
| 与「第10段」相关的查阅/断法/方证问题 | references/capabilities/第10段.md | overview / cheatsheet |
| 与「第11段」相关的查阅/断法/方证问题 | references/capabilities/第11段.md | overview / cheatsheet |
| 与「第12段」相关的查阅/断法/方证问题 | references/capabilities/第12段.md | overview / cheatsheet |

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
