---
name: 测字拆字-skill
description: |
  用户要用《测字拆字》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 测字拆字。
source_book: 《测字拆字》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 10
---

# 《测字拆字》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 測字，又名相字，掌可以相，面可以相，命也可相，爲何字不能相？
2. 文字有它的獨特存在意義，是人們溝通的一度無聲橋樑，遠在秦漢時期便有測字這個玩意了，只不過那時多數運用在占夢之中，將人的夢境反映在文字之上，以求集中推測事物的內容
3. 他說出了一個重要的訊息，就一個心字，人以對話來反映內心的感受，發出聲音來給別人聽取，以書寫來作心靈上的畫像，可以令人們肉眼看得見。
4. 還記得在年輕的時候，看過一套影片，到現在還記憶猶新，內容說到清朝康熙皇帝駕崩，本來要傳位給十四太子的，但其臨終前留下傳位遺詔給人改寫，只在其中一個字上加了小小的
5. 最近我對文字產生了極大的興趣，我看了不少有關於文字的書，其中最具影響力的，莫過於趙文竹先生的作品〔會說話的漢字〕一書了。此書充滿了禪機意趣，發人心省之餘，又起著
6. - 你的伴侶如何看你 .107

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、裝頭測字」相关的查阅/断法/方证问题 | references/capabilities/一-裝頭測字.md | overview / cheatsheet |
| 与「【合】答【屈】窟【魚】鯊、鼇【至】窒、台【見】」相关的查阅/断法/方证问题 | references/capabilities/合-答-屈-窟-魚-鯊-鼇-至-窒-台-見.md | overview / cheatsheet |
| 与「四、包籠測法」相关的查阅/断法/方证问题 | references/capabilities/四-包籠測法.md | overview / cheatsheet |
| 与「【行】術、衙、衍【辛】章【共】莫、黃【衣】鵞、」相关的查阅/断法/方证问题 | references/capabilities/行-術-衙-衍-辛-章-共-莫-黃-衣-鵞.md | overview / cheatsheet |
| 与「七、減筆測法」相关的查阅/断法/方证问题 | references/capabilities/七-減筆測法.md | overview / cheatsheet |
| 与「八、對關測法」相关的查阅/断法/方证问题 | references/capabilities/八-對關測法.md | overview / cheatsheet |
| 与「九、摘字测法」相关的查阅/断法/方证问题 | references/capabilities/九-摘字测法.md | overview / cheatsheet |
| 与「十、觀梅測法」相关的查阅/断法/方证问题 | references/capabilities/十-觀梅測法.md | overview / cheatsheet |
| 与「【曰、日】兩口相近貼，甜密、親近之象。」相关的查阅/断法/方证问题 | references/capabilities/曰-日-兩口相近貼-甜密-親近之象.md | overview / cheatsheet |
| 与「五、指事测法」相关的查阅/断法/方证问题 | references/capabilities/五-指事测法.md | overview / cheatsheet |

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
