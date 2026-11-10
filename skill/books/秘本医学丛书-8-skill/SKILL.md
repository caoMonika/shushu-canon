---
name: 秘本医学丛书-8-skill
description: |
  用户询问《秘本医学丛书 8》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 秘本医学丛书 8。
source_book: 《秘本医学丛书 8》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《秘本医学丛书 8》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 女科之有專書自陳良甫大全良方而後當以
2. 张山雷君逐條加以笺語深人洞見
3. 少切要發阴以之臨症能收效本書
4. 覺陳陳相因腐氣滿者以夏集古人空泛
5. 秸吾於女科觀止矣爱哑刊行以同志
6. 寶鲶彰彰始覺軒爽豁目早習醫治婦女病即是書人手臨證以來

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「不意孫氏高明千金方以婦人居首而求嗣又為婦科之開宗明义第一章」相关的查阅/断法/方证问题 | references/capabilities/不意孫氏高明千金方以婦人居首而求嗣又為婦科之開宗明义第一章.md | overview / cheatsheet |
| 与「（笺疏）此節出服經第九卷考服經一書單行住本不易得金山氏守」相关的查阅/断法/方证问题 | references/capabilities/笺疏-此節出服經第九卷考服經一書單行住本不易得金山氏守.md | overview / cheatsheet |
| 与「第二卷」相关的查阅/断法/方证问题 | references/capabilities/第二卷.md | overview / cheatsheet |
| 与「第三卷」相关的查阅/断法/方证问题 | references/capabilities/第三卷.md | overview / cheatsheet |
| 与「第二章明喉腑宗」相关的查阅/断法/方证问题 | references/capabilities/第二章明喉腑宗.md | overview / cheatsheet |
| 与「第二三章三陰二阳王在少陰少陽」相关的查阅/断法/方证问题 | references/capabilities/第二三章三陰二阳王在少陰少陽.md | overview / cheatsheet |
| 与「第六章喉虚實宜辨」相关的查阅/断法/方证问题 | references/capabilities/第六章喉虚實宜辨.md | overview / cheatsheet |
| 与「第七章决断生死看法」相关的查阅/断法/方证问题 | references/capabilities/第七章决断生死看法.md | overview / cheatsheet |
| 与「第九章醫士臨症偏急生藥庫」相关的查阅/断法/方证问题 | references/capabilities/第九章醫士臨症偏急生藥庫.md | overview / cheatsheet |
| 与「第十章藥品選眞製法知」相关的查阅/断法/方证问题 | references/capabilities/第十章藥品選眞製法知.md | overview / cheatsheet |
| 与「第十二章喉症六淫方款」相关的查阅/断法/方证问题 | references/capabilities/第十二章喉症六淫方款.md | overview / cheatsheet |
| 与「以四神丹一枚當頭安上經宿即根出矣（方在第十二卷中錄载」相关的查阅/断法/方证问题 | references/capabilities/以四神丹一枚當頭安上經宿即根出矣-方在第十二卷中錄载.md | overview / cheatsheet |

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
