---
name: 皇汉医学-skill
description: |
  用户询问《皇汉医学》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 皇汉医学。
source_book: 《皇汉医学》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 12
---

# 《皇汉医学》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 也既以稍明此不忽終默藕欲振而起之故不揣陋撰是以矣天下其眼之出
2. 沥活用之腾於今日之新法多炙無如世之人競以殿美渐相矜炫中醫之傳不如此余所為日夜悼者
3. 年長女以疫痢恨之無中沮离涉月時精神发至乱偶读光師和田落十郎所落之翳界鐵樵始發
4. 余少以親命學臀於金潔臀学門學校明治三十四年卒業旋供職院崩衡自設诊所徙事诊至明治四十三
5. 賀莲加以是正幸甚幸裁
6. 妙用不徒重機械是休之民生之根本也因不陋這仍其舊题漢醫學以念同日文

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「[總]···」相关的查阅/断法/方证问题 | references/capabilities/總.md | overview / cheatsheet |
| 与「[微]」相关的查阅/断法/方证问题 | references/capabilities/微.md | overview / cheatsheet |
| 与「[氣味]芹辛無巍」相关的查阅/断法/方证问题 | references/capabilities/氣味-芹辛無巍.md | overview / cheatsheet |
| 与「[氣味]廿平無竭」相关的查阅/断法/方证问题 | references/capabilities/氣味-廿平無竭.md | overview / cheatsheet |
| 与「[氯味]（上略）元素日性流味蒿（下略)」相关的查阅/断法/方证问题 | references/capabilities/氯味-上略-元素日性流味蒿-下略.md | overview / cheatsheet |
| 与「[馥明]成無己白半夏之辛以散逆氣結氣除發膏行水氟而潤臀嫩」相关的查阅/断法/方证问题 | references/capabilities/馥明-成無己白半夏之辛以散逆氣結氣除發膏行水氟而潤臀嫩.md | overview / cheatsheet |
| 与「（解在第一卷）且無往來寒熟只由頭部微出汗者爽純热粘鳌属由水熱二毒（前條云结胸热寅」相关的查阅/断法/方证问题 | references/capabilities/解在第一卷-且無往來寒熟只由頭部微出汗者爽純热粘鳌属由水熱二毒-前條云结胸热寅.md | overview / cheatsheet |
| 与「[氣味]≠温無藏」相关的查阅/断法/方证问题 | references/capabilities/氣味-温無藏.md | overview / cheatsheet |
| 与「[法治]通利風淋饰蒡氣咳背膊阁散留秸胸隔痰湍逐水消服满大赐風安得止風痛（费）」相关的查阅/断法/方证问题 | references/capabilities/法治-通利風淋饰蒡氣咳背膊阁散留秸胸隔痰湍逐水消服满大赐風安得止風痛-费.md | overview / cheatsheet |
| 与「「注』在第二卷小柴胡條」相关的查阅/断法/方证问题 | references/capabilities/注-在第二卷小柴胡條.md | overview / cheatsheet |
| 与「[氣味]甘平無蠢」相关的查阅/断法/方证问题 | references/capabilities/氣味-甘平無蠢.md | overview / cheatsheet |
| 与「[發明]日張仲景治雜病大黄腐蝠丸方中用心取其去鸯下满也」相关的查阅/断法/方证问题 | references/capabilities/發明-日張仲景治雜病大黄腐蝠丸方中用心取其去鸯下满也.md | overview / cheatsheet |

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
