---
name: 輔行訣臟腑用藥法要-五臟病證文幷方-skill
description: |
  用户询问《輔行訣臟腑用藥法要 〔五臟病證文幷方〕》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 輔行訣臟腑用藥法要 〔五臟病證文幷方〕。
source_book: 《輔行訣臟腑用藥法要 〔五臟病證文幷方〕》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 4
---

# 《輔行訣臟腑用藥法要 〔五臟病證文幷方〕》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 隱居曰：凡學道輩，欲求永年，先須祛疾。或有夙痼，或患時恙，一
2. 學之要領也。諸凡雜病，服藥汗吐下後，邪氣雖平，精氣被奪，致令
3. 五臟虛疲，當卽據證服補湯數劑以補之。不然，時日久曠，或變爲損
4. 間以引脇下，補三里以溫中，取耳間靑脈以去其瘈。
5. 陶云：肝德在散。故經云：以辛補之，酸瀉之。肝苦急，急食甘以緩
6. 上三味，以淸漿三升，煮取一升，頓服之。不瘥，卽重作服之。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |
| 与「第4段」相关的查阅/断法/方证问题 | references/capabilities/第4段.md | overview / cheatsheet |

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
