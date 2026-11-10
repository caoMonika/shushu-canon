---
name: 陆氏论医集-卷一_陆渊雷-skill
description: |
  用户询问《陆氏论医集 卷一_陆渊雷》方证/治法/医案/条文，或本书未单列意图时调用本路由。 不适用于：不构成医疗建议；急症须就医。 优先按路由表加载 references/capabilities/ 下单卡。 Triggers: 方证, 治法, 医案, 陆氏论医集 卷一_陆渊雷。
source_book: 《陆氏论医集 卷一_陆渊雷》
source_chapter: compact-pack 路由入口
tags: [cangjie-ria, compact-pack, ria-plus-6d, auto-ocr-pack, llm-refined, tcm]
related_skills: []
distill_profile: compact-pack-llm-v1
metadata:
  generated_by: distill_pack.py
  variant: router
  capability_count: 3
---

# 《陆氏论医集 卷一_陆渊雷》 — 来源路由入口（compact pack）

## 触发与不触发

**适用**：与本书能力域相关的咨询与文献任务（见路由表）。  
**不适用**：
- 不构成医疗建议；急症须就医。
- 路由表与 capability-index 均无法命中的意图（明确说超出范围，不硬套）

## 核心原则（常驻速览）

1. 生理補證病理補诊断治寮學内科婦科小兒科凡所以授遥弟子者皆將次
2. 故而以科學乃所谓整理中醫亦所谓溝通中西存其可存而不存其不可存捍
3. 采用我鐵劑以濟其鐵劑既行则中醫之名亡而實乃不亡然一鐵一必
4. 彼科學家精竭以求醫學然其治療之效不若我一鐵之人一劑之投彼必
5. 故中醫之名羲面貌不能必存中醫之治療方藥必不减亡何则醫以療病志
6. 日睦氏醫集目次具如左列其未及羅以及今之著作当饼作續期之巽

## 能力路由（先读本表，按意图加载 1 张能力卡）

| 用户意图 | 先读 | 补读/备注 |
|---|---|---|
| 与「拙著一肝病傅脾之研究一即金匮今稞第一卷人禀五常條之解稞錄登醫」相关的查阅/断法/方证问题 | references/capabilities/拙著一肝病傅脾之研究一即金匮今稞第一卷人禀五常條之解稞錄登醫.md | overview / cheatsheet |
| 与「第一集出版可以聲明學問隨時間而增長下次再版必要改訂如此既無傷忠」相关的查阅/断法/方证问题 | references/capabilities/第一集出版可以聲明學問隨時間而增長下次再版必要改訂如此既無傷忠.md | overview / cheatsheet |
| 与「版辨法每種先出第一集餘睦續出版侯出版齊了又共來印成一册或數册」相关的查阅/断法/方证问题 | references/capabilities/版辨法每種先出第一集餘睦續出版侯出版齊了又共來印成一册或數册.md | overview / cheatsheet |

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
