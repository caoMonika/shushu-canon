---
name: 教你学梅花预测-skill
description: |
  用户要用《教你学梅花预测》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 教你学梅花预测。
source_book: 《教你学梅花预测》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《教你学梅花预测》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 这八个卦象符号可以这样记忆：
2. 预测时，需要经常用到这八个卦象，所以请大家一定要记准每个卦象所对应
3. 上面这八个卦象两两相互上下组合在一起，又可以形成６４种组合，组合成
4. 中间断的线称为“阴爻”，不间断的线称为“阳爻”。所以每个“爻”都有阴阳
5. 由于这个卦是由乾、坤这两个基本卦组成的，所以乾、坤称为这个卦的上下
6. 之所以称为“梅花易数”，据说是因为这种方法的创始人邵康节，观梅花而

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一．八卦与六十四卦」相关的查阅/断法/方证问题 | references/capabilities/一-八卦与六十四卦.md | overview / cheatsheet |
| 与「二．梅花预测」相关的查阅/断法/方证问题 | references/capabilities/二-梅花预测.md | overview / cheatsheet |
| 与「三．体卦与用卦」相关的查阅/断法/方证问题 | references/capabilities/三-体卦与用卦.md | overview / cheatsheet |
| 与「一．八卦基本含义」相关的查阅/断法/方证问题 | references/capabilities/一-八卦基本含义.md | overview / cheatsheet |
| 与「四．五行生克关系代表的六亲、事物」相关的查阅/断法/方证问题 | references/capabilities/四-五行生克关系代表的六亲-事物.md | overview / cheatsheet |
| 与「二．五行力量的增减」相关的查阅/断法/方证问题 | references/capabilities/二-五行力量的增减.md | overview / cheatsheet |
| 与「二．八卦类象预测实例」相关的查阅/断法/方证问题 | references/capabilities/二-八卦类象预测实例.md | overview / cheatsheet |
| 与「（1）天干：」相关的查阅/断法/方证问题 | references/capabilities/1-天干.md | overview / cheatsheet |
| 与「【若干天之后，测主】：可能真要推迟了，演唱的礼堂现在堆满了建筑设计图纸、档案，堆」相关的查阅/断法/方证问题 | references/capabilities/若干天之后-测主-可能真要推迟了-演唱的礼堂现在堆满了建筑设计图纸-档案-堆.md | overview / cheatsheet |
| 与「二．八卦代表的其他数目」相关的查阅/断法/方证问题 | references/capabilities/二-八卦代表的其他数目.md | overview / cheatsheet |
| 与「一．生克预测法则」相关的查阅/断法/方证问题 | references/capabilities/一-生克预测法则.md | overview / cheatsheet |
| 与「一．占断十八类」相关的查阅/断法/方证问题 | references/capabilities/一-占断十八类.md | overview / cheatsheet |

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
