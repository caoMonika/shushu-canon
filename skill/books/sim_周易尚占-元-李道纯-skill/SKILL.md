---
name: sim_周易尚占-元-李道纯-skill
description: |
  用户要用《周易尚占-元-李道纯》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 周易尚占-元-李道纯。
source_book: 《周易尚占-元-李道纯》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《周易尚占-元-李道纯》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 图局部第一（凡十章）
2. 旁通部第二（凡十章）
3. 发端部第三（凡十二章）
4. 决断部第四（凡六章）
5. 三材部第五（凡五章）
6. 人事部第六（凡四章）

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「[[元]大德丁未年版]」相关的查阅/断法/方证问题 | references/capabilities/元-大德丁未年版.md | overview / cheatsheet |
| 与「一、六位例」相关的查阅/断法/方证问题 | references/capabilities/一-六位例.md | overview / cheatsheet |
| 与「六、八卦（八节）休旺例」相关的查阅/断法/方证问题 | references/capabilities/六-八卦-八节-休旺例.md | overview / cheatsheet |
| 与「二、六神断例」相关的查阅/断法/方证问题 | references/capabilities/二-六神断例.md | overview / cheatsheet |
| 与「三、住居宅地章」相关的查阅/断法/方证问题 | references/capabilities/三-住居宅地章.md | overview / cheatsheet |
| 与「四、胎孕章」相关的查阅/断法/方证问题 | references/capabilities/四-胎孕章.md | overview / cheatsheet |
| 与「三、蚕桑章」相关的查阅/断法/方证问题 | references/capabilities/三-蚕桑章.md | overview / cheatsheet |
| 与「五、公讼章」相关的查阅/断法/方证问题 | references/capabilities/五-公讼章.md | overview / cheatsheet |
| 与「二、八卦断例章」相关的查阅/断法/方证问题 | references/capabilities/二-八卦断例章.md | overview / cheatsheet |
| 与「二、八卦断例章」相关的查阅/断法/方证问题 | references/capabilities/二-八卦断例章-2.md | overview / cheatsheet |
| 与「二、八卦断例章」相关的查阅/断法/方证问题 | references/capabilities/二-八卦断例章-3.md | overview / cheatsheet |
| 与「二、八卦断例章」相关的查阅/断法/方证问题 | references/capabilities/二-八卦断例章-4.md | overview / cheatsheet |

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
