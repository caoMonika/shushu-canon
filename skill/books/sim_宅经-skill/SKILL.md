---
name: sim_宅经-skill
description: |
  用户要用《宅经-》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 宅经-。
source_book: 《宅经-》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《宅经-》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 若一阴阳往来，即合天道，自然吉昌之象也。设要重往，即须逐道住四十五日、七十五日，往之无咎，仍宜生气福德之方始吉。更犯五鬼，绝命刑祸者，尤不利。诀云：行不得度，不
2. 《搜神记》云：精灵鬼魁，皆化为人。或有人自相感变为妖怪，亦如异性之木，接续而生，根苗虽殊，异味相杂，形碍之物。尚随变通，阴肉虚无，岂为党定？是知宅非宅气，由移来
3. 又云：宅以形势这身体，以泉水为血脉，以土地为皮肉，以草木为毛发，以舍屋为衣服，以门户为冠带，若得如斯，是事伊雅，乃为上吉。
4. 又云：凡欲修造动治，须避四王神，亦名帝车帝略帝舍。假如春三月，东方为青帝，木王，寅为车，外为略，辰为舍，即是正月二月三月不得东。《户经》曰：犯帝车杀父。犯帝略杀
5. 凡修筑垣墙，建造宅宇，土气所冲之方，人家即有灾殃，宜依法禳之。正月土气冲丁未方，二月坤，三月壬亥，四月辛戌，五月乾，六月寅甲，七月癸丑，八月艮，九月丙巳，十月辰

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |

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
