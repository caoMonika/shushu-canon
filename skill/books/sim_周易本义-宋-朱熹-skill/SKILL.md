---
name: sim_周易本义-宋-朱熹-skill
description: |
  用户要用《周易本义-宋-朱熹》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 周易本义-宋-朱熹。
source_book: 《周易本义-宋-朱熹》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《周易本义-宋-朱熹》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 九五，飞龙在天，利见大人。刚健中正以居尊位，如以圣人之德，居圣人之位。故其象如此，而占法与九二同，特所利见者在上之大人尔。若有其位，则为利见九二在下之大人也。
2. 用九，见群龙无首，吉。用九，言凡筮得阳爻者，皆用九而不用七。盖诸卦百九十二阳爻之通例也。
3. 九四曰「或跃在渊，无咎」，何谓也？子曰：「上下无常，非为邪也；进退无恒，非离群也。君子进德修业，欲及时也，故无咎。」离，去声。内卦以德学言，外卦以时位言。进德修
4. 上九曰「亢龙有悔」，何谓也？子曰：「贵而无位，高而无民，贤人在下位而无辅，是以动而有悔也。」贤人在下位，谓九五以下。无辅，以上九过高志满，不来辅助之也。此第二节
5. 「或跃在渊」，自试也。未遽有为，姑试其可。「飞龙在天」，上治也。治，平声。居上以治下。「亢龙有悔」，穷之灾也。乾元「用九」，天下治也。治，去声。言乾元用九，见与
6. 盖由四者以成大人之德。再言君德，以深明九二之为大人也。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第一卷」相关的查阅/断法/方证问题 | references/capabilities/第一卷.md | overview / cheatsheet |
| 与「第二卷」相关的查阅/断法/方证问题 | references/capabilities/第二卷.md | overview / cheatsheet |
| 与「第一章」相关的查阅/断法/方证问题 | references/capabilities/第一章.md | overview / cheatsheet |
| 与「第八章」相关的查阅/断法/方证问题 | references/capabilities/第八章.md | overview / cheatsheet |
| 与「第九章」相关的查阅/断法/方证问题 | references/capabilities/第九章.md | overview / cheatsheet |
| 与「第十章」相关的查阅/断法/方证问题 | references/capabilities/第十章.md | overview / cheatsheet |
| 与「属，或恐是错简，宜在第八章之末。」相关的查阅/断法/方证问题 | references/capabilities/属-或恐是错简-宜在第八章之末.md | overview / cheatsheet |
| 与「上第一章。此章言卦爻吉凶，造化功业。」相关的查阅/断法/方证问题 | references/capabilities/上第一章-此章言卦爻吉凶-造化功业.md | overview / cheatsheet |
| 与「上第五章。」相关的查阅/断法/方证问题 | references/capabilities/上第五章.md | overview / cheatsheet |
| 与「上第七章。此章三陈九卦，以明处忧患之道。」相关的查阅/断法/方证问题 | references/capabilities/上第七章-此章三陈九卦-以明处忧患之道.md | overview / cheatsheet |
| 与「第四卷」相关的查阅/断法/方证问题 | references/capabilities/第四卷.md | overview / cheatsheet |
| 与「上第十一章。此章广八卦之象，其间多不可晓者，求之于经，亦不尽合也。」相关的查阅/断法/方证问题 | references/capabilities/上第十一章-此章广八卦之象-其间多不可晓者-求之于经-亦不尽合也.md | overview / cheatsheet |

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
