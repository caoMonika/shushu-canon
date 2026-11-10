# GitHub 术数 Skill 整合来源

扫描日期：2026-11-10。本包**不以 GitHub 替代本地典籍**；吸收其「路由 / 流程 / 算法优先」方法，正文仍以 `books/` 精修稿为准。

## 已吸收（方法层）

| 仓库 | 亮点 | 本包落地 |
|------|------|----------|
| [AsuraYY/zhonghua-shushu](https://github.com/AsuraYY/zhonghua-shushu) | 全门类总览、场景决策树、脚本优先、伦理边界 | `DOMAIN_ROUTER.md` 决策树 + 边界条款 |
| [yangzeze1292/chinese-metaphysics-skill](https://github.com/yangzeze1292/chinese-metaphysics-skill) | 十大体系 Router、交叉验证、学习分级 | 体系路由表并入 `SKILL.md` |
| [serfereanyang-create/my_toolkit](https://github.com/serfereanyang-create/my_toolkit) `ziwei-master` | 紫微/八字/梅花/六壬问事工作流、iztro 等工具提示 | 紫微/问事流程写入路由 |
| [xuemian168/bazi-skill](https://github.com/xuemian168/bazi-skill) | **代码算盘、AI 只解读**；多流派编排 | 硬规则：排盘不靠模型背表 |
| [tianmingwangluo/xiaoliuren-skill](https://github.com/tianmingwangluo/xiaoliuren-skill) (MIT) | 小六壬三宫算法与解卦框架 | `methods/xiaoliuren.md` + 指向本地《小六壬》上下册 |
| [LeoYeAI/agent-master-skills](https://github.com/LeoYeAI/agent-master-skills) `xiaoliuren` | 同系小六壬整理 | 与上交叉对照 |

## 其它可见但暂不整包并入

| 仓库 | 原因 |
|------|------|
| `EnlightenedOwlxiao/bazi-skill-codex` / `Foreverwonder/bazi-*` | 与 bazi-skill 重叠，偏宿主项目 |
| `BIG-CR/ShenSuan` / `Leohuangcn/xuanjizi` | 体量大或定位泛，按需再采 |
| `hhszzzz/taibu` | 太卜专题，可后挂 |

## 整合原则

1. **本地典籍优先**：紫微/六壬/梅花等断法细节 → `DOMAIN_INDEX.json` → `books/<slug>/`
2. **GitHub 补流程**：问什么体系、先算后解、边界声明
3. **不整仓搬运**：避免重复与版权/体量膨胀；需要完整上游 skill 请直接 clone 原仓库
