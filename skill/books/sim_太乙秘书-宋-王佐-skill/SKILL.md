---
name: sim_太乙秘书-宋-王佐-skill
description: |
  用户要用《太乙秘书-宋-王佐》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 太乙秘书-宋-王佐。
source_book: 《太乙秘书-宋-王佐》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 7
---

# 《太乙秘书-宋-王佐》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 此局客算长和、门具、将发，利为客，见阵利先动，出军宜东北，战利西南，利直阵，举青旗，云气从北来，客胜，闻贼备西南，奇兵西南，伏兵利戌亥时。
2. 太乙在一宫，天目大簇（主算六不和，主大将六宫内迫，主参将八宫外迫，始击将阴主击，客算一不和，客大将一宫囚，主挟，客参将三宫，客利，计神丑。此客主大小将挟客大将，
3. 此局客算长、门具、将发，利为客，见阵利先动，出军宜正东，战利正西，利锐阵，举赤旗，云气从东来，客胜，闻贼备西北，奇兵西北，伏兵利戌亥时。
4. 主目辰迫，不和，算短，大将囚，不利为主，宜固守，闻贼备正东。）
5. 太乙在三宫，天目地主（主算八不和，主大将八宫，内迫，主参将四宫，外迫，始击将大神。客算二十五，八门杜，客大将参将不出中宫，计神申。此局主人大小将迫，客杜塞无门，
6. 太乙在三宫，天目和德，囚（主算三不和，主大将三宫，囚，主参将九宫发，始击将大簇。客算十五，八门杜，客大将参将不出中宫，计神午。此局主目、主大将囚，客杜塞无门，主

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
