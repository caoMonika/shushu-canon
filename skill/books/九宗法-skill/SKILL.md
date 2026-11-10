---
name: 九宗法-skill
description: |
  用户要用《九宗法》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 九宗法。
source_book: 《九宗法》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 11
---

# 《九宗法》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 自刑：辰刑辰、午刑午、酉刑酉、亥刑亥。自逞自作以致刑傷。
2. 沖：為移動之象、凡事返覆無常不得安寧。
3. 害：干擾破壞之象、為和氣乖違宜守舊動即有失。
4. 十二天將飛佈以貴人為首、先找出貴人落宮、視落宮之
5. 二：一課上神子加在丁亥之間、看地盤
6. 二：一課上神卯加在甲申之間、看地盤

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、賊剋法：取課先從下賊呼 如無下賊上剋初」相关的查阅/断法/方证问题 | references/capabilities/一-賊剋法-取課先從下賊呼-如無下賊上剋初.md | overview / cheatsheet |
| 与「一、三課為下賊上。第一課上一字寅為陽、第三課上一字酉為陰、辛巳日辛為陰、陰比陰取」相关的查阅/断法/方证问题 | references/capabilities/一-三課為下賊上-第一課上一字寅為陽-第三課上一字酉為陰-辛巳日辛為陰-陰比陰取.md | overview / cheatsheet |
| 与「三、四課為上剋下。有下賊上者先論、第一課上一字未為陰、第二課上一字子為陽、甲午日」相关的查阅/断法/方证问题 | references/capabilities/三-四課為上剋下-有下賊上者先論-第一課上一字未為陰-第二課上一字子為陽-甲午日.md | overview / cheatsheet |
| 与「三、涉害法：涉害行來本家止 路逢多剋初傳取 孟深仲淺季當休 復等柔辰剛日擬」相关的查阅/断法/方证问题 | references/capabilities/三-涉害法-涉害行來本家止-路逢多剋初傳取-孟深仲淺季當休-復等柔辰剛日擬.md | overview / cheatsheet |
| 与「三、四課均為下賊上。丑亥與日干丁俱為陰、無法取用神、乃以丑在地盤卯、亥在地盤丑順」相关的查阅/断法/方证问题 | references/capabilities/三-四課均為下賊上-丑亥與日干丁俱為陰-無法取用神-乃以丑在地盤卯-亥在地盤丑順.md | overview / cheatsheet |
| 与「四、遙剋法：四課無剋取遙剋 日與神兮遞互招 先取神遙剋其日 如無方取日來遙」相关的查阅/断法/方证问题 | references/capabilities/四-遙剋法-四課無剋取遙剋-日與神兮遞互招-先取神遙剋其日-如無方取日來遙.md | overview / cheatsheet |
| 与「五、昂星法：」相关的查阅/断法/方证问题 | references/capabilities/五-昂星法.md | overview / cheatsheet |
| 与「六、別責法：」相关的查阅/断法/方证问题 | references/capabilities/六-別責法.md | overview / cheatsheet |
| 与「七、八專法：」相关的查阅/断法/方证问题 | references/capabilities/七-八專法.md | overview / cheatsheet |
| 与「八、伏吟法：」相关的查阅/断法/方证问题 | references/capabilities/八-伏吟法.md | overview / cheatsheet |
| 与「九、返吟法：返吟有剋亦為用 無剋別有井欄名 丑日用亥未用巳 辰中日末容易尋」相关的查阅/断法/方证问题 | references/capabilities/九-返吟法-返吟有剋亦為用-無剋別有井欄名-丑日用亥未用巳-辰中日末容易尋.md | overview / cheatsheet |

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
