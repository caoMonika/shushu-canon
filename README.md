# shushu-canon · 术数典籍总库

把约 **539** 部六壬 / 紫微 / 梅花 / 六爻 / 奇门 / 命理 / 风水 / 太乙等相关材料，收成 **一个可安装的 Cursor / Agent Skill 入口**，并附带全部子书正文（compact-pack + LLM 精修）。

仓库地址：https://github.com/caoMonika/shushu-canon

---

## 这个包解决什么问题

- **不用**把几百本子书分别装成 skill（否则 Agent 技能列表会炸）。
- **只要装一个** `shushu-canon`：先路由到体系（紫微 / 六壬 / 梅花…），再按索引打开 1–3 本子书作答。
- 子书已尽量升到 **RIA++ 六维能力卡**（`compact-pack-llm-v1`）：保留原文要点（R），补方法论 / 场景 / 步骤 / 边界。

---

## 仓库结构

```
shushu-canon-pack/
├── README.md
├── .gitignore
└── skill/                          ← 安装这一个目录即可
    ├── SKILL.md                    ← 入口：何时触发、硬规则、工作流
    ├── DOMAIN_ROUTER.md            ← 体系决策树（问什么用哪门）
    ├── DOMAIN_INDEX.json           ← 各域本地书 slug 优先级
    ├── GITHUB_SOURCES.md           ← 吸收的开源 skill 方法来源
    ├── methods/
    │   └── xiaoliuren.md           ← 小六壬算法摘要
    ├── INDEX-slim.json             ← 全库轻量检索
    ├── INDEX.json                  ← 含 description 的完整索引
    ├── CATALOG.md                  ← 人读目录
    ├── scripts/build_index.cjs     ← 重建 INDEX
    └── books/<slug>/               ← 子书包
        ├── SKILL.md
        ├── BUILD_MANIFEST.json
        └── references/
            ├── overview.md
            ├── glossary.md
            ├── cheatsheet.md
            ├── capability-index.md
            └── capabilities/*.md   ← 六维能力卡
```

---

## 安装（别人只做这一步）

**不要**把 `books/` 下几百个目录分别装成 skill。

### 方式 A · 目录联接（推荐，改动能热更新）

```powershell
git clone https://github.com/caoMonika/shushu-canon.git shushu-canon-pack
cd shushu-canon-pack

# Cursor
cmd /c mklink /J "%USERPROFILE%\.cursor\skills\shushu-canon" "%CD%\skill"

# 若使用 agents/skills
cmd /c mklink /J "%USERPROFILE%\.agents\skills\shushu-canon" "%CD%\skill"
```

macOS / Linux：

```bash
git clone https://github.com/caoMonika/shushu-canon.git shushu-canon-pack
cd shushu-canon-pack
mkdir -p ~/.cursor/skills
ln -s "$(pwd)/skill" ~/.cursor/skills/shushu-canon
```

### 方式 B · 复制

把整个 `skill/` 复制为 `~/.cursor/skills/shushu-canon/`。

安装后：**新开** Agent / 对话。提到六壬、紫微、梅花、术数总库、某书怎么说等，应触发 `shushu-canon`。

---

## Agent 标准工作流

```
用户问题
  → DOMAIN_ROUTER 定体系（或用户已点名某书/某门）
  → DOMAIN_INDEX 取 1–3 个 slug
  → Read books/<slug>/SKILL.md
     （需要细则再读 references/capabilities/）
  → 小六壬可先看 methods/xiaoliuren.md
  → 作答：依据 → 判断 → 条件；多书冲突标明出处
  → 边界声明（文化参考，不替代专业决策）
```

### 域规模（名称匹配统计，会随增删书变化）

| 域 | 约略规模 | 说明 |
|----|----------|------|
| 大六壬 / 金口 | ~85 | 本库主力 |
| 六爻 | ~12 | |
| 奇门 | ~10 | |
| 八字 / 命理 | ~9 | |
| 梅花 | ~4 | |
| 紫微 | ~3 | |
| 太乙 / 小六壬 / 测字 / 风水等 | 各若干 | 见 `DOMAIN_INDEX.json` |

点名某书时，用全库索引：

```bash
cd skill
node -e "const i=require('./INDEX-slim.json'); const q='六壬'; console.log(i.items.filter(x=>(x.title+x.slug).includes(q)).slice(0,10))"
```

---

## 与 GitHub 其它术数 Skill 的关系

网上不少 skill（如总路由、八字编排、小六壬算法、紫微工作流）强在 **流程**，弱在 **典籍厚度**。

本仓库策略：

1. **本地 books 为断法正文**（精修能力卡）
2. **吸收开源方法**：路由、先算后解、伦理边界、小六壬算法摘要  
3. 来源清单见 `skill/GITHUB_SOURCES.md`（不整仓搬运）

原则：**代码 / 排盘工具算数，模型解读；不靠模型背表硬编课式与星曜。**

---

## 子书剖面说明

| 标记 | 含义 |
|------|------|
| `compact-pack` | 多能力卡结构（overview / glossary / capabilities…） |
| `compact-pack-llm-v1` | 在 pack 上经本地 LLM 精修 I/A1/A2/E/B，保留 R 原文要点 |
| `sim_*` slug | 偏模拟/精简条目；非点名时优先用 index 里的非 sim 精品 |

单次引用原文建议 ≤150 字；重要论断宜核对原书或更高质量校本。

---

## 体积与依赖

- 体积大约数 MB～十余 MB 量级（多为 Markdown；随能力卡增减变化）。
- 运行时依赖：Cursor / 兼容 Agent Skills 的宿主；重建索引需要 Node.js。
- 可选：本地排盘工具 / 万年历；本包不强制捆绑排盘二进制。

---

## 维护

在 `skill/books/` 增删子书后：

```bash
node skill/scripts/build_index.cjs
```

更新域路由书单时，按目录名关键词重生成 `DOMAIN_INDEX.json`（或手工改 `priority` 列表）。

忽略文件：`*.pre_llm.bak`（精修前备份，不进库）。

---

## 声明

- 内容多为古籍 OCR / 公开文本的 **操作化蒸馏稿**，便于检索与调用，**不能替代原书与师承核对**。
- 不作恐吓迷信；不替代法律、医疗、投资、婚姻等专业决策。
- 上传 / 分享 / 商用前，请自行确认材料的使用与分发权限是否合规。
- 占测类输出仅供文化学习与民俗参考，**事在人为**。

---

## 快速验证安装

1. 确认存在：`%USERPROFILE%\.cursor\skills\shushu-canon\SKILL.md`
2. 新开 Agent，问：「按术数总库，梅花和六壬问事怎么选？」
3. 应先走路由，再打开少量子书，而不是罗列几百个 skill 名。
