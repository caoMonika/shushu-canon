---
name: 斗數婚姻看法大全-skill
description: |
  用户要用《斗數婚姻看法大全》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 斗數婚姻看法大全。
source_book: 《斗數婚姻看法大全》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《斗數婚姻看法大全》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 命宮有不利婚姻的星曜，如殺破廉貪武巨煞忌等，或命宮陷地加煞且三方
2. 若命偶宮均吉，多屬美滿婚姻，但若夫妻宮的三方逢煞忌，易因外來的干
3. 事業宮有化忌星則主配偶多疑多管而發生分歧；又有逢限年的夫妻宮凶煞
4. 男命坐太陰，女命坐太陽，異性緣強，多外遇；陷地夫妻不得力，生活無
5. 若主星為南斗星則主後半生的婚姻要破。(夫妻宮宜單個正星廟旺坐守，
6. 貪狼化忌，為情所困。貪狼化祿，配偶亦易有外遇。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「【夫妻宮不足以解釋男人的婚姻】」相关的查阅/断法/方证问题 | references/capabilities/夫妻宮不足以解釋男人的婚姻.md | overview / cheatsheet |
| 与「【子女宮關係男人婚姻】」相关的查阅/断法/方证问题 | references/capabilities/子女宮關係男人婚姻.md | overview / cheatsheet |
| 与「【為何會情意已盡？】」相关的查阅/断法/方证问题 | references/capabilities/為何會情意已盡.md | overview / cheatsheet |
| 与「三、 太陽：丙火，化氣為權貴。為人坦率直言，好面子，脾氣難免急躁，」相关的查阅/断法/方证问题 | references/capabilities/三-太陽-丙火-化氣為權貴-為人坦率直言-好面子-脾氣難免急躁.md | overview / cheatsheet |
| 与「八、 太陰：癸水，化氣為富，聰明清秀，心性溫和，博學多能，喜整潔，」相关的查阅/断法/方证问题 | references/capabilities/八-太陰-癸水-化氣為富-聰明清秀-心性溫和-博學多能-喜整潔.md | overview / cheatsheet |
| 与「十四、 破軍：癸水，被視為耗星，亦為孤剋星，性急好勝，任性，私慾」相关的查阅/断法/方证问题 | references/capabilities/十四-破軍-癸水-被視為耗星-亦為孤剋星-性急好勝-任性-私慾.md | overview / cheatsheet |
| 与「五、 天魁：丙火，貴人星，注重精神生活，才情甚高，有逢凶化吉的特」相关的查阅/断法/方证问题 | references/capabilities/五-天魁-丙火-貴人星-注重精神生活-才情甚高-有逢凶化吉的特.md | overview / cheatsheet |
| 与「（3） 形貌清秀，但不艳丽。配偶在他自己的生活圈里是很活跃的人。子」相关的查阅/断法/方证问题 | references/capabilities/3-形貌清秀-但不艳丽-配偶在他自己的生活圈里是很活跃的人-子.md | overview / cheatsheet |
| 与「（2） 女命丈夫事业有发展；感情不很好；会禄存、昌曲、魁钺可因妻致」相关的查阅/断法/方证问题 | references/capabilities/2-女命丈夫事业有发展-感情不很好-会禄存-昌曲-魁钺可因妻致.md | overview / cheatsheet |
| 与「（3） 禄存加空劫（婚姻生活较孤寂些）」相关的查阅/断法/方证问题 | references/capabilities/3-禄存加空劫-婚姻生活较孤寂些.md | overview / cheatsheet |
| 与「（10）﹒情鎖桃花：」相关的查阅/断法/方证问题 | references/capabilities/10-情鎖桃花.md | overview / cheatsheet |
| 与「（26）﹒機警桃花：」相关的查阅/断法/方证问题 | references/capabilities/26-機警桃花.md | overview / cheatsheet |

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
