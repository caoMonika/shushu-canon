---
name: 伤寒论诠解-刘渡洲-skill
description: |
  用户询问《伤寒论诠解（刘渡洲）》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 伤寒论诠解（刘渡洲）。
source_book: 《伤寒论诠解（刘渡洲）》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《伤寒论诠解（刘渡洲）》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 寒论》为蓝本，除对《辨脉法》、《平脉法》、《辨不可发汗病脉证并治法》等
2. 内容作了删节外，其主要部分均予保留，并按原文排列顺序，逐条加以解释。为
3. 使理法方药各项内容的解释分析相互联贯，以适合教与学的需要。本书在编写体
4. 例上简化了层次，只设“解析”一项，将内容提要、词解、病机分析、以及病案
5. 明问题。本书在编写时尽量做到内容详尽，文字通俗易懂，以便达到既可供初学
6. 一、本书原文部分，谨遵金人成无已《注解伤寒论》（以人民卫生出版社

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、本书原文部分，谨遵金人成无已《注解伤寒论》（以人民卫生出版社」相关的查阅/断法/方证问题 | references/capabilities/一-本书原文部分-谨遵金人成无已-注解伤寒论-以人民卫生出版社.md | overview / cheatsheet |
| 与「【解析】本条论述太阳中风，经输不利的证治。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述太阳中风-经输不利的证治.md | overview / cheatsheet |
| 与「【解析】本条论述太阳伤寒，迁延日久，服麻黄汤后可能发生鼻而解的情况，并指出」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述太阳伤寒-迁延日久-服麻黄汤后可能发生鼻而解的情况-并指出.md | overview / cheatsheet |
| 与「【解析】本条论述太阳病过汗伤阳而致阳虚水泛的证治。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述太阳病过汗伤阳而致阳虚水泛的证治.md | overview / cheatsheet |
| 与「【解析】本条论述伤寒误用火规而导致惊狂的证治。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述伤寒误用火规而导致惊狂的证治.md | overview / cheatsheet |
| 与「【解析】本条论述太少并病类似结胸的证治。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述太少并病类似结胸的证治.md | overview / cheatsheet |
| 与「【解析】本条论述上热下寒，腹痛欲呕吐的证治。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述上热下寒-腹痛欲呕吐的证治.md | overview / cheatsheet |
| 与「【解析】本条论述燥屎已成未成、可下不可下的辨证，以及大小承气汤的使用方法。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述燥屎已成未成-可下不可下的辨证-以及大小承气汤的使用方法.md | overview / cheatsheet |
| 与「【解析】本条以脉论述阳气独盛于内，阴液不足，而致大便硬的病机。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条以脉论述阳气独盛于内-阴液不足-而致大便硬的病机.md | overview / cheatsheet |
| 与「【小结】」相关的查阅/断法/方证问题 | references/capabilities/小结.md | overview / cheatsheet |
| 与「【解析】本条论述少阴阴虚有热、水热互结的证治。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述少阴阴虚有热-水热互结的证治.md | overview / cheatsheet |
| 与「【解析】本条论述厥阴热利的脉证。」相关的查阅/断法/方证问题 | references/capabilities/解析-本条论述厥阴热利的脉证.md | overview / cheatsheet |

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
