---
name: 中医金方系列-外科金方-高清版-skill
description: |
  用户询问《中医金方系列—外科金方（高清版）》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 中医金方系列—外科金方（高清版）。
source_book: 《中医金方系列—外科金方（高清版）》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《中医金方系列—外科金方（高清版）》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 中医治疗疾病，以其独特的理论进行辨证论治、遣
2. 金方系列》丛书，以帮助中医临床医师适应这种变化，
3. 丰富的临床经验，又搜集整理了建国以来见诸于各中医
4. 最初局部出现红、肿、痛的小结节，以后逐渐肿大，呈锥形
5. 匀即可使用（切忌在原膏冷却前加人大黄粉）。表皮未破者用此
6. 膏包敷即可，如已破溃应先用生理盐水清洗疮面，并以75%酒

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「（57)」相关的查阅/断法/方证问题 | references/capabilities/57.md | overview / cheatsheet |
| 与「【适应证】慢性骨髓炎。」相关的查阅/断法/方证问题 | references/capabilities/适应证-慢性骨髓炎.md | overview / cheatsheet |
| 与「【药物组成】乳香30 克，没药30克，全蝎30克，红花30」相关的查阅/断法/方证问题 | references/capabilities/药物组成-乳香30-克-没药30克-全蝎30克-红花30.md | overview / cheatsheet |
| 与「二、慢性胆囊炎」相关的查阅/断法/方证问题 | references/capabilities/二-慢性胆囊炎.md | overview / cheatsheet |
| 与「【药物组成】党参9克，白术9克，泽泻9克，谷芽9克，」相关的查阅/断法/方证问题 | references/capabilities/药物组成-党参9克-白术9克-泽泻9克-谷芽9克.md | overview / cheatsheet |
| 与「【用法】水煎，每日1剂，分3次服。」相关的查阅/断法/方证问题 | references/capabilities/用法-水煎-每日1剂-分3次服.md | overview / cheatsheet |
| 与「【用法】水煎服，每日1剂。」相关的查阅/断法/方证问题 | references/capabilities/用法-水煎服-每日1剂.md | overview / cheatsheet |
| 与「【药物组成】乳香6克，没药6克，参三七6克，桃仁6克，」相关的查阅/断法/方证问题 | references/capabilities/药物组成-乳香6克-没药6克-参三七6克-桃仁6克.md | overview / cheatsheet |
| 与「【用法】药浸酒内20分，加水250毫升，煎至沸腾后倒人盆」相关的查阅/断法/方证问题 | references/capabilities/用法-药浸酒内20分-加水250毫升-煎至沸腾后倒人盆.md | overview / cheatsheet |
| 与「【药物组成】桃仁12克，红花12克，熟地 30克，山药30」相关的查阅/断法/方证问题 | references/capabilities/药物组成-桃仁12克-红花12克-熟地-30克-山药30.md | overview / cheatsheet |
| 与「【药物组成】黄芪 40 克，鹿角霜 20 克，白术 20 克，当归」相关的查阅/断法/方证问题 | references/capabilities/药物组成-黄芪-40-克-鹿角霜-20-克-白术-20-克-当归.md | overview / cheatsheet |
| 与「【用法】方①红参或高丽参另炖对人，后3味加水600毫升，」相关的查阅/断法/方证问题 | references/capabilities/用法-方①红参或高丽参另炖对人-后3味加水600毫升.md | overview / cheatsheet |

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
