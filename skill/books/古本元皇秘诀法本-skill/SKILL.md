---
name: 古本元皇秘诀法本-skill
description: |
  用户要用《古本元皇秘诀法本》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 古本元皇秘诀法本。
source_book: 《古本元皇秘诀法本》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《古本元皇秘诀法本》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 元皇秘訣凡去瘟家口傳心授玅秘
2. 去時莫探花師曰凡去病家凡大小行移切勿看女子美貌婦人恐淺元氣恂鬼識破惹入也身切謹慎託之回身勿顧家師曰回至途中不妨從飛北斗一座八旬公公堂上生師曰或在病家
3. 及回雷壇將本身所着衣帽掛在棣柱上切宜記之也星壇下是吾家師曰凡在人家不可倒飛北斗變坛存星斗照於屋也
4. 去到人家勿貪要師曰凡在患家行持切勿與女人同房卧如要貪戀涵慈有泄正道即鬼來纏慎之宜用緊夾玉塟也切記
5. 目到中途勿咨嗟師曰行至路上及到家中预先曉諭徒弟寺担拾行李不可妄言亂語兒戲舞笑呼名換字如道之切勿應切記
6. 此登一盖存萬犬金光軍身炅人存作天雷兵徙吾駕方帶人肩拾行李向前不要轉眼顧後切託師曰到病家一存前祝師言凡存立應去時根抱子師曰當坛啟師去人家并和神送駕出門時以大手指盖

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
