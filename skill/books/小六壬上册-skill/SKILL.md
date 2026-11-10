---
name: 小六壬上册-skill
description: |
  用户要用《小六壬上册》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 小六壬上册。
source_book: 《小六壬上册》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《小六壬上册》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 薇、六交、梅花、四柱、大六壬、金口诀等，这些预测术的起课方法繁琐，断课复杂，星煞
2. 众多，要详细分析，面面俱到，使一般人难以精通。
3. 统完善，占课详细，以五星为天，六宫为地，六亲为人，以六亲为主结合六宫、六神、五星
4. 综合判断事物的吉凶祸福，来龙去脉，前因后果。它可以直接抓住要点，研究事物的产生发
5. 江氏小六壬起课方法简捷，快速，断事明确，一目了然，可以一课多断，预测范围广，
6. 可以直接抓住主要矛盾，研究事物的产生发展和结局，进行快速分析判断。预测时随手掐指

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、五行相生含义」相关的查阅/断法/方证问题 | references/capabilities/一-五行相生含义.md | overview / cheatsheet |
| 与「（2）兄弟临六宫所主：」相关的查阅/断法/方证问题 | references/capabilities/2-兄弟临六宫所主.md | overview / cheatsheet |
| 与「（6）玄武临六亲所主：」相关的查阅/断法/方证问题 | references/capabilities/6-玄武临六亲所主.md | overview / cheatsheet |
| 与「四、五星的起法」相关的查阅/断法/方证问题 | references/capabilities/四-五星的起法.md | overview / cheatsheet |
| 与「七、小六壬占十岁以前小运排盘法」相关的查阅/断法/方证问题 | references/capabilities/七-小六壬占十岁以前小运排盘法.md | overview / cheatsheet |
| 与「四、小六壬抽签起课排盘法」相关的查阅/断法/方证问题 | references/capabilities/四-小六壬抽签起课排盘法.md | overview / cheatsheet |
| 与「三、六亲六宫五星六神在课内的主次作用」相关的查阅/断法/方证问题 | references/capabilities/三-六亲六宫五星六神在课内的主次作用.md | overview / cheatsheet |
| 与「十、寻人断法」相关的查阅/断法/方证问题 | references/capabilities/十-寻人断法.md | overview / cheatsheet |
| 与「（1）择吉日」相关的查阅/断法/方证问题 | references/capabilities/1-择吉日.md | overview / cheatsheet |
| 与「四、占贵人例」相关的查阅/断法/方证问题 | references/capabilities/四-占贵人例.md | overview / cheatsheet |
| 与「九、占讨债例」相关的查阅/断法/方证问题 | references/capabilities/九-占讨债例.md | overview / cheatsheet |
| 与「十四、占小人例」相关的查阅/断法/方证问题 | references/capabilities/十四-占小人例.md | overview / cheatsheet |

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
