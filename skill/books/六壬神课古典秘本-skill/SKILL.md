---
name: 六壬神课古典秘本-skill
description: |
  用户要用《六壬神课古典秘本》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 六壬神课古典秘本。
source_book: 《六壬神课古典秘本》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《六壬神课古典秘本》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 用之於自修外，宜用於善政以治人民。若非暨人须秘而不可漏。若不能修之即埋入名山
2. 基，將其日之干支組成四課三傅，以獲神示之秘占。
3. 古人云『君子预知害，以防為先」，吾人必须遵守此教，防未然，細計劃
4. 吉凶正之術始於易學，具有各各様之術教。爲吉凶，六壬神課乃以太陽
5. 六壬神課乃設象避之神也。六壬神課之吉凶，若課格相同，亦因所看之事有别，
6. 象。象乃天地人三才之三傳，可造式太陽少陽、太陰少陰四課，以解馥之人事相。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「八、十二.·」相关的查阅/断法/方证问题 | references/capabilities/八-十二.md | overview / cheatsheet |
| 与「一、天干合」相关的查阅/断法/方证问题 | references/capabilities/一-天干合.md | overview / cheatsheet |
| 与「第二章」相关的查阅/断法/方证问题 | references/capabilities/第二章.md | overview / cheatsheet |
| 与「第二章」相关的查阅/断法/方证问题 | references/capabilities/第二章-2.md | overview / cheatsheet |
| 与「第三章」相关的查阅/断法/方证问题 | references/capabilities/第三章.md | overview / cheatsheet |
| 与「【吉凶正断活用原则】」相关的查阅/断法/方证问题 | references/capabilities/吉凶正断活用原则.md | overview / cheatsheet |
| 与「二、腾蛇之解」相关的查阅/断法/方证问题 | references/capabilities/二-腾蛇之解.md | overview / cheatsheet |
| 与「第四章」相关的查阅/断法/方证问题 | references/capabilities/第四章.md | overview / cheatsheet |
| 与「第五章」相关的查阅/断法/方证问题 | references/capabilities/第五章.md | overview / cheatsheet |
| 与「一、元首課」相关的查阅/断法/方证问题 | references/capabilities/一-元首課.md | overview / cheatsheet |
| 与「八、昂星課」相关的查阅/断法/方证问题 | references/capabilities/八-昂星課.md | overview / cheatsheet |
| 与「二、内外之事」相关的查阅/断法/方证问题 | references/capabilities/二-内外之事.md | overview / cheatsheet |

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
