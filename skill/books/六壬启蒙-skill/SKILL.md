---
name: 六壬启蒙-skill
description: |
  用户要用《六壬启蒙》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 六壬启蒙。
source_book: 《六壬启蒙》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《六壬启蒙》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 房，蜀汉有诸葛孔明，唐宋以下有袁、李、邵、刘诸先贤。其占验皆散见于传
2. 者目乱神迷，莫衷所是。迨至江湖术士，察言迎合，欺罔弄玄，藉以敛财，于
3. 余素好奇，常涉猎于壬学，但以信面存疑，涉而不陷之宗旨，探其奥秘，
4. 微中。余不卖卜占，凡占者以占后之结果告我，以证其验否。揆计所占验者什
5. 之八九，而不验者什之一二，以留稿复查，非课之不告，其中泥古不化者有之
6. 现在犹有六种，名之曰：《守拙斋六壬辑要六种》。《启蒙》原以十章为止，

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第十一章占断」相关的查阅/断法/方证问题 | references/capabilities/第十一章占断.md | overview / cheatsheet |
| 与「第一章」相关的查阅/断法/方证问题 | references/capabilities/第一章.md | overview / cheatsheet |
| 与「第二章天干地支之生克关系」相关的查阅/断法/方证问题 | references/capabilities/第二章天干地支之生克关系.md | overview / cheatsheet |
| 与「第三章天干地支之强弱」相关的查阅/断法/方证问题 | references/capabilities/第三章天干地支之强弱.md | overview / cheatsheet |
| 与「第四章」相关的查阅/断法/方证问题 | references/capabilities/第四章.md | overview / cheatsheet |
| 与「第五章」相关的查阅/断法/方证问题 | references/capabilities/第五章.md | overview / cheatsheet |
| 与「第六章」相关的查阅/断法/方证问题 | references/capabilities/第六章.md | overview / cheatsheet |
| 与「第七章」相关的查阅/断法/方证问题 | references/capabilities/第七章.md | overview / cheatsheet |
| 与「一、天乙贵人。乃己丑土神。主行令于人间，握尊权，莅天人。随在无犯」相关的查阅/断法/方证问题 | references/capabilities/一-天乙贵人-乃己丑土神-主行令于人间-握尊权-莅天人-随在无犯.md | overview / cheatsheet |
| 与「第九章」相关的查阅/断法/方证问题 | references/capabilities/第九章.md | overview / cheatsheet |
| 与「五、十一月在卯。六、十二月在巳。互有异同。待校。）」相关的查阅/断法/方证问题 | references/capabilities/五-十一月在卯-六-十二月在巳-互有异同-待校.md | overview / cheatsheet |
| 与「第十章」相关的查阅/断法/方证问题 | references/capabilities/第十章.md | overview / cheatsheet |

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
