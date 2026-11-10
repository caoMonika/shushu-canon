---
name: 岣嵝神书-skill
description: |
  用户要用《岣嵝神书》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 岣嵝神书。
source_book: 《岣嵝神书》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《岣嵝神书》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 大周冰界 細入微塵 何灾不滅何福不增 一切惡人盡皆收捉付与魁罡 之下不得動作急急如律令石
2. 主人家宅大吉祥 用黃紙硃書宅屋上有異禽當主人家興旺大富 用黃紙硃書人家先富後貧主富謝大石一塊以硃書 運通二地二尺深排 用菓祭之永鎮大吉男女犯鉄掃筆
3. 法用六丑日夜净時向北斗下安香炉一個供鮮巢五樣净水三鍾新筆一枝硃硯俱全面朝北斗丁罡立定先叩齒三十六通取北斗氣七口四之以硃書黃紙上紙長三寸寬三寸左手招北斗訣念咒四十
4. 此聞家宅六神出來相通有如報我不得羈停吾奉三茅真君律令勅攝
5. 百不絕若以絹袋盛之置衣令中貝人皆來 物 買 于酒瓮中令其泛在面上不可沙一買 家殘木一塊至甲戍日刊作人形衣以王采安
6. 各以瓮盛之各以本方位安净室中以物盖之候至次年本日視之上有浮霜急以物掠之如此一年拘多火不拘收大丹盒子固濟用火暇令通紅候冷取出其状如玉入鼎內水火齊即煉十日戊仙丹如金

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
