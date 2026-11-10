---
name: 腹证奇览-稻叶克-skill
description: |
  用户询问《腹证奇览 - 稻叶克》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 腹证奇览 - 稻叶克。
source_book: 《腹证奇览 - 稻叶克》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《腹证奇览 - 稻叶克》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 存瑕疵，今番精校细绎，复付枣梨，以飨同好。
2. 腹诊大法，本原《内》《难》、仲景之学，奈因唐宋以降国俗乖戾，笃尊《孝
3. 所裨益，凡为医者不可不知，不可不学，不可不精，不可不巧。
4. 《腹证奇览》究属东施，然其将仲景腹诊之法分类相附，参以图示，庶可供借
5. 鉴参详，虽终是他山之石，难见真谛，姑作础石而为高阁，权当基梯以登云顶，诚
6. 爰成数语，以作新版开篇，权为再版序。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「十、文中所言“初编”为原《腹证奇览》，“二编”为原《腹证奇览翼》。」相关的查阅/断法/方证问题 | references/capabilities/十-文中所言-初编-为原-腹证奇览-二编-为原-腹证奇览翼.md | overview / cheatsheet |
| 与「一、小建中汤证图解（附二方及虚劳、劳咳辨）」相关的查阅/断法/方证问题 | references/capabilities/一-小建中汤证图解-附二方及虚劳-劳咳辨.md | overview / cheatsheet |
| 与「二、桂枝汤证头项强痛图解（附三方及项背强急异同辨）」相关的查阅/断法/方证问题 | references/capabilities/二-桂枝汤证头项强痛图解-附三方及项背强急异同辨.md | overview / cheatsheet |
| 与「十一、桂姜枣草黄辛附汤证图解（附一方）」相关的查阅/断法/方证问题 | references/capabilities/十一-桂姜枣草黄辛附汤证图解-附一方.md | overview / cheatsheet |
| 与「三、葛根汤剧证图解」相关的查阅/断法/方证问题 | references/capabilities/三-葛根汤剧证图解.md | overview / cheatsheet |
| 与「二、栀子豉汤证图解（附七方）」相关的查阅/断法/方证问题 | references/capabilities/二-栀子豉汤证图解-附七方.md | overview / cheatsheet |
| 与「三、厚朴三物汤证图解」相关的查阅/断法/方证问题 | references/capabilities/三-厚朴三物汤证图解.md | overview / cheatsheet |
| 与「十四、疮毒家阴茎腐落证图解」相关的查阅/断法/方证问题 | references/capabilities/十四-疮毒家阴茎腐落证图解.md | overview / cheatsheet |
| 与「三、大黄甘遂汤证图解」相关的查阅/断法/方证问题 | references/capabilities/三-大黄甘遂汤证图解.md | overview / cheatsheet |
| 与「七、桂枝人参汤证图解（附心下痞硬诸证辨及人参说）」相关的查阅/断法/方证问题 | references/capabilities/七-桂枝人参汤证图解-附心下痞硬诸证辨及人参说.md | overview / cheatsheet |
| 与「五、茯苓杏仁甘草汤证图解」相关的查阅/断法/方证问题 | references/capabilities/五-茯苓杏仁甘草汤证图解.md | overview / cheatsheet |
| 与「四、芎归胶艾汤及猪苓汤证图解」相关的查阅/断法/方证问题 | references/capabilities/四-芎归胶艾汤及猪苓汤证图解.md | overview / cheatsheet |

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
