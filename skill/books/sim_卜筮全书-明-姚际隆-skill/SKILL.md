---
name: sim_卜筮全书-明-姚际隆-skill
description: |
  用户要用《卜筮全书-明-姚际隆》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 卜筮全书-明-姚际隆。
source_book: 《卜筮全书-明-姚际隆》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《卜筮全书-明-姚际隆》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 是书虽有旧本，然杂乱无序。今木坊敦（1）请百愚姚先生删繁补缺，迴（2）异他书，上可以阐（3）先圣之玄机，次可以探诸家之秘旨。读者幸毋（4）忽焉（5）。
2. 说明：该叙为草书写成。因本人才疏学浅，其中多字无法辩识。有的字根据文义篡入，但有些则不敢乱用，只好用[  ]缺出。还望有识之士指点，增补入内，以成完壁。
3. 十四、用爻不上卦或落空亡诀
4. 吾（1）人戴天履地，气血精神莫不禀（2）承天命。圣人作易以泄（3）造化之妙。故人于日用事物，进退行藏，行天地之正，合天地之宜，一念才萌（4），神明斯应。今人以非
5. 凡有所占，当必诚必敬，齐心盥沐（6），焚（7）香祈祷（8），则能感格神明，洞垂玄（9）鉴。苟（10）或不然，难望响应。
6. 卜以决疑。既卜之后，若可若否，悉凭卦象。毋率己意，欲其吉而必使之吉，虑其凶而必使之凶，再复再占，以渎（11）先圣。不惟怠（12）忽神明，抑且反无张主。易曰：初筮

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「十九、参约爻、之卦、互卦例」相关的查阅/断法/方证问题 | references/capabilities/十九-参约爻-之卦-互卦例.md | overview / cheatsheet |
| 与「二十、不全爻象各卦歌：」相关的查阅/断法/方证问题 | references/capabilities/二十-不全爻象各卦歌.md | overview / cheatsheet |
| 与「【本　　卦】」相关的查阅/断法/方证问题 | references/capabilities/本-卦.md | overview / cheatsheet |
| 与「一、无鬼无气：」相关的查阅/断法/方证问题 | references/capabilities/一-无鬼无气.md | overview / cheatsheet |
| 与「二十六、月建直符：（正月寅爻动是也。主管一月之事。）」相关的查阅/断法/方证问题 | references/capabilities/二十六-月建直符-正月寅爻动是也-主管一月之事.md | overview / cheatsheet |
| 与「十二、儒业科举章：五首：」相关的查阅/断法/方证问题 | references/capabilities/十二-儒业科举章-五首.md | overview / cheatsheet |
| 与「二十四、词讼章：六首」相关的查阅/断法/方证问题 | references/capabilities/二十四-词讼章-六首.md | overview / cheatsheet |
| 与「十、行人章：」相关的查阅/断法/方证问题 | references/capabilities/十-行人章.md | overview / cheatsheet |
| 与「四、征战：」相关的查阅/断法/方证问题 | references/capabilities/四-征战.md | overview / cheatsheet |
| 与「十四、蚕桑：」相关的查阅/断法/方证问题 | references/capabilities/十四-蚕桑.md | overview / cheatsheet |
| 与「二十五、逃亡：」相关的查阅/断法/方证问题 | references/capabilities/二十五-逃亡.md | overview / cheatsheet |
| 与「七、家宅秘诀：」相关的查阅/断法/方证问题 | references/capabilities/七-家宅秘诀.md | overview / cheatsheet |

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
