---
name: 中医眼科全书-眼科学说源流-skill
description: |
  用户询问《中医眼科全书  眼科学说源流》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医眼科全书  眼科学说源流。
source_book: 《中医眼科全书  眼科学说源流》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医眼科全书  眼科学说源流》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. -病，义根据眼部症状不同.分别以“暂”、"蒙”、"嗖”等词略加区别。如《书经》有：“警奏
2. 最早的字典，也是最早解释眼目生理病理文字的工具书，全书共收载以“月”为形符的字
3. 草人日中也"，告、目病生也”、其次，还收载与视觉有关以“见”为彤符的字48个.所
4. 谓：“见：视也，从儿从目，凡见之属皆从见”，其后刘熙所撰《释名》，收人有关眼病的字词
5. 烙疗法、所谓："日中有疵，不害于视、不可灼也”，
6. 以及脏脐辨证等许多基本理论、都是在《内经》的基础上发展起来的。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「(3)」相关的查阅/断法/方证问题 | references/capabilities/3.md | overview / cheatsheet |
| 与「(61)」相关的查阅/断法/方证问题 | references/capabilities/61.md | overview / cheatsheet |
| 与「第一章中医眼科学术发展史」相关的查阅/断法/方证问题 | references/capabilities/第一章中医眼科学术发展史.md | overview / cheatsheet |
| 与「二、《银海精微》」相关的查阅/断法/方证问题 | references/capabilities/二-银海精微.md | overview / cheatsheet |
| 与「十三、《眼科锦囊》」相关的查阅/断法/方证问题 | references/capabilities/十三-眼科锦囊.md | overview / cheatsheet |
| 与「七十.症的具体内容，足以审的歌”为主体，然后分析各症的病因、病机和症候，列举各证」相关的查阅/断法/方证问题 | references/capabilities/七十-症的具体内容-足以审的歌-为主体-然后分析各症的病因-病机和症候-列举各证.md | overview / cheatsheet |
| 与「第九章气血学说」相关的查阅/断法/方证问题 | references/capabilities/第九章气血学说.md | overview / cheatsheet |
| 与「二、六经学说的形成，伤赛六经的提纲」相关的查阅/断法/方证问题 | references/capabilities/二-六经学说的形成-伤赛六经的提纲.md | overview / cheatsheet |
| 与「三、眼科六经学说的内容」相关的查阅/断法/方证问题 | references/capabilities/三-眼科六经学说的内容.md | overview / cheatsheet |
| 与「二、眼科辨证研究的深入」相关的查阅/断法/方证问题 | references/capabilities/二-眼科辨证研究的深入.md | overview / cheatsheet |
| 与「(3）“人皮应天，人肉应地，人脉应人，人筋应时，人声应音，人阴阳合气应律，人齿面」相关的查阅/断法/方证问题 | references/capabilities/3-人皮应天-人肉应地-人脉应人-人筋应时-人声应音-人阴阳合气应律-人齿面.md | overview / cheatsheet |
| 与「（33）“殿阴不迁正，即风暄不时，花卉婪萃，民病淋漫.目系转，转筋，喜怒，小便」相关的查阅/断法/方证问题 | references/capabilities/33-殿阴不迁正-即风暄不时-花卉婪萃-民病淋漫-目系转-转筋-喜怒-小便.md | overview / cheatsheet |

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
