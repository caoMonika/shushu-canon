---
name: 八字预测-李后启-skill
description: |
  用户要用《八字预测李后启》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 八字预测李后启。
source_book: 《八字预测李后启》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《八字预测李后启》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 八字预测就是以五行为依据通过分析命局特点的生克制化与刑冲克害及各种组合，随着时间和空间的转移而变化之关系，
2. 藏中国的术数学书籍可以说浩如烟海，其中《八字预测》当属最具有代表性一部经典著作。
3. 八字预测就是以五行为依据.通过分析命局特点的生克制化,刑冲克害及各种组合，随着时间、空间的转移而变化之关系，来揭示人的生命历程的科学
4. 第二十九精神气篇指出，看命的贫富贵贱，全在于精神气三个字上。发财，要财有精神气，当官、须官得精神气…
5. 第三十一杀年财月，无不倒霉篇中指出了所有命中都有一个共同性的灾祸规律:不管什么命局的主人；凡逢杀牛财月，或者杀运财年，没有不倒霉的。
6. 第三十三子时换日柱篇，从命学的原理原则精神上以及实例中论述了子时换日往的正确性与早子时换日柱的错误所在，从而否定了早夜子时的分别。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第一部分，六篇论文，接着《之秀命理》而写的。」相关的查阅/断法/方证问题 | references/capabilities/第一部分-六篇论文-接着-之秀命理-而写的.md | overview / cheatsheet |
| 与「第三部分精批八字例」相关的查阅/断法/方证问题 | references/capabilities/第三部分精批八字例.md | overview / cheatsheet |
| 与「第二十九篇精、神、气」相关的查阅/断法/方证问题 | references/capabilities/第二十九篇精-神-气.md | overview / cheatsheet |
| 与「第三十篇 清、浊、纯、杂」相关的查阅/断法/方证问题 | references/capabilities/第三十篇-清-浊-纯-杂.md | overview / cheatsheet |
| 与「第三十二篇 祸福命中有标志」相关的查阅/断法/方证问题 | references/capabilities/第三十二篇-祸福命中有标志.md | overview / cheatsheet |
| 与「第三十三篇 子时换日柱」相关的查阅/断法/方证问题 | references/capabilities/第三十三篇-子时换日柱.md | overview / cheatsheet |
| 与「第三部分 精批八字例」相关的查阅/断法/方证问题 | references/capabilities/第三部分-精批八字例.md | overview / cheatsheet |
| 与「一、断死亡」相关的查阅/断法/方证问题 | references/capabilities/一-断死亡.md | overview / cheatsheet |
| 与「七、测升学」相关的查阅/断法/方证问题 | references/capabilities/七-测升学.md | overview / cheatsheet |
| 与「四、命局和掩耳亥子丑三会北、流月干癸水，又有时干庚金生。水旺。」相关的查阅/断法/方证问题 | references/capabilities/四-命局和掩耳亥子丑三会北-流月干癸水-又有时干庚金生-水旺.md | overview / cheatsheet |
| 与「一、气势、格局」相关的查阅/断法/方证问题 | references/capabilities/一-气势-格局.md | overview / cheatsheet |
| 与「八、大运简析:」相关的查阅/断法/方证问题 | references/capabilities/八-大运简析.md | overview / cheatsheet |

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
