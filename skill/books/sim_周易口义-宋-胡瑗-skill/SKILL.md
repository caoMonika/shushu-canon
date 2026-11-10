---
name: sim_周易口义-宋-胡瑗-skill
description: |
  用户要用《周易口义-宋-胡瑗》体例/口诀/断法/排盘，或本书未单列意图时调用本路由。 不适用于：不作迷信恐吓；不替代法律/医疗/投资决策。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 断法, 口诀, 体例, 周易口义-宋-胡瑗。
source_book: 《周易口义-宋-胡瑗》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, shushu]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《周易口义-宋-胡瑗》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不作迷信恐吓；不替代法律/医疗/投资决策。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 象曰风行天上小畜君子以懿文德
2. 义曰风者震动之气能生物亦能成物其行于地上则可以助天地生成之力也今以二体言之则巽在乾上则是风行于天之上其功不及于物是小畜之象也君子当此之时知其未可以进用则怀畜仁义
3. 义曰乾体在上今居于下必务上进也此初九以刚健之质居乾之初势必务进而又应在六四六四又以柔弱居巽始是必不能为之制畜但听其进而不拒顺其性而不违此所以得复自故道而刚志得行
4. 九五有孚挛如富以其邻象曰有孚挛如不独富也
5. 义曰挛攀连也如语辞也邻谓九二也此九五居小畜之时位虽刚明体本巽顺又以由中之信攀挛于物故九二所以得牵复而上进也故曰有孚挛如富以其邻者言九二以阳质上应于九五九五又以由
6. 彖曰履柔履刚也说而应乎乾是以履虎尾不咥人亨刚中正履帝位而不疚光明也

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「第1段」相关的查阅/断法/方证问题 | references/capabilities/第1段.md | overview / cheatsheet |
| 与「第2段」相关的查阅/断法/方证问题 | references/capabilities/第2段.md | overview / cheatsheet |
| 与「第3段」相关的查阅/断法/方证问题 | references/capabilities/第3段.md | overview / cheatsheet |

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
