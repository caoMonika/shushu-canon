---
name: 明清针灸秘法丛书7-采艾编翼-skill
description: |
  用户询问《明清针灸秘法丛书7 采艾编翼》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 明清针灸秘法丛书7 采艾编翼。
source_book: 《明清针灸秘法丛书7 采艾编翼》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《明清针灸秘法丛书7 采艾编翼》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 作在注疏古典医著、丰富临床实践经验等方面均超过了以
2. 传和价值的发挥；甚至一部分古籍为孤本，难以得见，掩
3. 《针灸秘法全书》，因其流传甚少，难以在世面所见，且其
4. 本次整理所用底本以贺老藏书为主，同时，中国中医
5. 新描绘、细致临摹，图中文字改为现行规范简化字，以方
6. 评指正，以备进一步修订补正。

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「一、底本为繁体字刻本、抄本者，本次出版时均依」相关的查阅/断法/方证问题 | references/capabilities/一-底本为繁体字刻本-抄本者-本次出版时均依.md | overview / cheatsheet |
| 与「【注】头后项颈分七行，其中行属督脉，惟两旁第二行属足太」相关的查阅/断法/方证问题 | references/capabilities/注-头后项颈分七行-其中行属督脉-惟两旁第二行属足太.md | overview / cheatsheet |
| 与「[肝]」相关的查阅/断法/方证问题 | references/capabilities/肝.md | overview / cheatsheet |
| 与「【注】涩主滞涩。肿疡初起脉涩者，乃气血为毒滞之征。若」相关的查阅/断法/方证问题 | references/capabilities/注-涩主滞涩-肿疡初起脉涩者-乃气血为毒滞之征-若.md | overview / cheatsheet |
| 与「【药】」相关的查阅/断法/方证问题 | references/capabilities/药.md | overview / cheatsheet |
| 与「【药】偶感表汗，姜半两，陈皮半个，葱头五个，豆豉十粒」相关的查阅/断法/方证问题 | references/capabilities/药-偶感表汗-姜半两-陈皮半个-葱头五个-豆豉十粒.md | overview / cheatsheet |
| 与「【治】腹中、肺俞、下脘、气海、足三里、列缺，灸后服陈」相关的查阅/断法/方证问题 | references/capabilities/治-腹中-肺俞-下脘-气海-足三里-列缺-灸后服陈.md | overview / cheatsheet |
| 与「【药】血淋如尿出，乱发烧灰，少许，每服一钱，用米泄温」相关的查阅/断法/方证问题 | references/capabilities/药-血淋如尿出-乱发烧灰-少许-每服一钱-用米泄温.md | overview / cheatsheet |
| 与「【总】上星鼻直上入发际一寸。风池额后骨陷中。」相关的查阅/断法/方证问题 | references/capabilities/总-上星鼻直上入发际一寸-风池额后骨陷中.md | overview / cheatsheet |
| 与「【治】」相关的查阅/断法/方证问题 | references/capabilities/治.md | overview / cheatsheet |
| 与「[诸部]」相关的查阅/断法/方证问题 | references/capabilities/诸部.md | overview / cheatsheet |
| 与「一、治丹毒，加蓝靛根和捣敷之。」相关的查阅/断法/方证问题 | references/capabilities/一-治丹毒-加蓝靛根和捣敷之.md | overview / cheatsheet |

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
