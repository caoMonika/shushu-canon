---
name: 新安医籍考-skill
description: |
  用户询问《新安医籍考》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 新安医籍考。
source_book: 《新安医籍考》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《新安医籍考》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 惜乎道头後高喝生假其多心迷的诀诀牛理未百福源
2. （280年）。唐宋以降，新安实辖歙县、祁门、绩溪、休宁、黔县、婺源
3. 籍多不胜数，其中又以明、清占很大比例，这就自然地形成了“新安
4. 选清末民初约有850余种。以地区医学著作而言，这是全国任何一
5. 个行政区域所难以比拟的。王老对新安医籍，着重阐介名著的学术
6. 特色及其贡献，或针对学术内涵予以精要述评，而编写的思路则力

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「求条晰博辨，考镜源流。故此书的编成，堪称是我国第一部地区性」相关的查阅/断法/方证问题 | references/capabilities/求条晰博辨-考镜源流-故此书的编成-堪称是我国第一部地区性.md | overview / cheatsheet |
| 与「二、伤」相关的查阅/断法/方证问题 | references/capabilities/二-伤.md | overview / cheatsheet |
| 与「九、方」相关的查阅/断法/方证问题 | references/capabilities/九-方.md | overview / cheatsheet |
| 与「十五、附」相关的查阅/断法/方证问题 | references/capabilities/十五-附.md | overview / cheatsheet |
| 与「差后等病，分第六卷；痉湿喝及辨脉法，分第七卷；汗吐下可不可，」相关的查阅/断法/方证问题 | references/capabilities/差后等病-分第六卷-痉湿喝及辨脉法-分第七卷-汗吐下可不可.md | overview / cheatsheet |
| 与「五、针：灸」相关的查阅/断法/方证问题 | references/capabilities/五-针-灸.md | overview / cheatsheet |
| 与「九、方论(4)」相关的查阅/断法/方证问题 | references/capabilities/九-方论-4.md | overview / cheatsheet |
| 与「一、凡治一病，只注明立某方用药似亦可矣，一切闲语尽皆削」相关的查阅/断法/方证问题 | references/capabilities/一-凡治一病-只注明立某方用药似亦可矣-一切闲语尽皆削.md | overview / cheatsheet |
| 与「（8）博集稀痘方论二卷（明）郭子章撰」相关的查阅/断法/方证问题 | references/capabilities/8-博集稀痘方论二卷-明-郭子章撰.md | overview / cheatsheet |
| 与「（15）正骨心法要旨四卷」相关的查阅/断法/方证问题 | references/capabilities/15-正骨心法要旨四卷.md | overview / cheatsheet |
| 与「(7)橡村治验」相关的查阅/断法/方证问题 | references/capabilities/7-橡村治验.md | overview / cheatsheet |
| 与「十四、考证医籍」相关的查阅/断法/方证问题 | references/capabilities/十四-考证医籍.md | overview / cheatsheet |

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
