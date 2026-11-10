# 体系路由（整合 GitHub 方法 + 本地书库）

先定体系，再打开 `DOMAIN_INDEX.json` 里的 priority slug，最后 `Read books/<slug>/SKILL.md`（及其 `references/capabilities/`）。

## 决策树

```
用户问题
  │
  ├─ 一生格局 / 性格大运     → 八字(bazi) 优先；紫微(ziwei) 并参
  ├─ 具体一事吉凶应期         → 六爻(liuyao) 或 大六壬(liuren)；小事可用梅花(meihua)/小六壬
  ├─ 秒级是否/快慢            → 小六壬(xiaoliuren)（见 methods/xiaoliuren.md）
  ├─ 象数灵感起卦             → 梅花(meihua)
  ├─ 择时/方位策略            → 奇门(qimen)；大势年景可看太乙(taiyi)
  ├─ 宅运环境                 → 风水(fengshui)
  ├─ 字象直断                 → 测字(cezi)
  └─ 点名某书                 → INDEX-slim 按书名命中
```

## 场景速查

| 场景 | 首选 domain | 本地优先书（见 DOMAIN_INDEX） |
|------|-------------|------------------------------|
| 紫微命盘解读 | ziwei | `果老星宗` / `飞星紫微斗数` / `黄进长-紫微斗数太微命判` |
| 大六壬课传 | liuren | 非 sim 的六壬入门/探原/心法类（index priority） |
| 小六壬快断 | xiaoliuren | `小六壬上册` `小六壬下册` + `methods/xiaoliuren.md` |
| 梅花体用 | meihua | `梅花易数-李峰` / `万物类象` / `教你学梅花预测` |
| 奇门格局 | qimen | `000易正奇门遁甲格局` 等 |
| 六爻应期 | liuyao | `中国六爻同盟入门教材` 等 liuyao-* |
| 八字格局 | bazi | `八字真途` / `渊海子平` 等 |

## 硬流程（来自 GitHub 共识）

1. **先算后解**：干支/课式/星曜落宫尽量用排盘工具或脚本；模型不背表硬编。
2. **一事一法**：用户已指定体系则不改道；未指定则按上表，复杂题可 2 体系交叉并标明分歧。
3. **打开 1–3 本**：从 `DOMAIN_INDEX.json` 的 `priority` 取；点名书再扩。
4. **边界**：文化参考；不恐吓改运；不替代医疗/法律/投资。
