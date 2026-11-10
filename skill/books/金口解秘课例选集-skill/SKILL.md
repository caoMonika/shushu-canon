---
name: 金口解秘课例选集-skill
description: |
  用户要用《金口解秘课例选集》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 金口解秘课例选集。
source_book: 《金口解秘课例选集》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《金口解秘课例选集》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 金口诀教材之一：《金口解秘》课例选集   第 1 页 共 83 页
2. 中华古代最高层次预测学金口诀系列教材
3. 金口诀教材之一：《金口解秘》课例选集   第 2 页 共 83 页
4. 金口诀教材之一：《金口解秘》课例选集   第 3 页 共 83 页
5. 金口诀教材之一：《金口解秘》课例选集   第 4 页 共 83 页
6. 金口诀教材之一：《金口解秘》课例选集   第 5 页 共 83 页

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「三、干支相配..................................」相关的查阅/断法/方证问题 | references/capabilities/三-干支相配.md | overview / cheatsheet |
| 与「一、占人的流年运气............................ 84」相关的查阅/断法/方证问题 | references/capabilities/一-占人的流年运气-84.md | overview / cheatsheet |
| 与「四、占子女................................. 1」相关的查阅/断法/方证问题 | references/capabilities/四-占子女-1.md | overview / cheatsheet |
| 与「一、占住宅...................................」相关的查阅/断法/方证问题 | references/capabilities/一-占住宅.md | overview / cheatsheet |
| 与「四、死灾三例：」相关的查阅/断法/方证问题 | references/capabilities/四-死灾三例.md | overview / cheatsheet |
| 与「(1)  一个木葫芦，胜过五千元。」相关的查阅/断法/方证问题 | references/capabilities/1-一个木葫芦-胜过五千元.md | overview / cheatsheet |
| 与「(3) 一块红布遮窗，收入翻了三番。」相关的查阅/断法/方证问题 | references/capabilities/3-一块红布遮窗-收入翻了三番.md | overview / cheatsheet |
| 与「(4) 信仰不真诚，头上留“记号”。」相关的查阅/断法/方证问题 | references/capabilities/4-信仰不真诚-头上留-记号.md | overview / cheatsheet |
| 与「(5) 穿上黄衣服，三日就见金。」相关的查阅/断法/方证问题 | references/capabilities/5-穿上黄衣服-三日就见金.md | overview / cheatsheet |
| 与「(1) 神在课内得生，生年提拔；神在课内遭冲，冲年不顺。」相关的查阅/断法/方证问题 | references/capabilities/1-神在课内得生-生年提拔-神在课内遭冲-冲年不顺.md | overview / cheatsheet |
| 与「（3）空亡分局课 失职志难伸」相关的查阅/断法/方证问题 | references/capabilities/3-空亡分局课-失职志难伸.md | overview / cheatsheet |
| 与「（4） 领导关系搞不好，经常穿小鞋」相关的查阅/断法/方证问题 | references/capabilities/4-领导关系搞不好-经常穿小鞋.md | overview / cheatsheet |

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
