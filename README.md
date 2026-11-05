# shushu-canon · 术数典籍总库

把约 **539** 部六壬 / 六爻 / 命理 / 风水 / 奇门 / 易学等相关蒸馏 skill **收成一个可安装入口**，并附带全部子书正文。

## 仓库结构

```
shushu-canon-pack/
├── README.md
├── .gitignore
└── skill/                 ← 安装这一个目录即可
    ├── SKILL.md           ← Cursor skill 入口
    ├── INDEX-slim.json
    ├── INDEX.json
    ├── CATALOG.md
    ├── scripts/build_index.cjs
    └── books/<slug>/SKILL.md
```

## 安装（别人只做这一步）

**不要**把 `books/` 下几百个目录分别装成 skill。

### 方式 A · 目录联接（推荐）

```powershell
# 克隆后：
git clone <本仓库 URL> shushu-canon-pack
cd shushu-canon-pack

# 联到 Cursor skills（Windows）
cmd /c mklink /J "%USERPROFILE%\.cursor\skills\shushu-canon" "%CD%\skill"

# 若使用 agents/skills：
cmd /c mklink /J "%USERPROFILE%\.agents\skills\shushu-canon" "%CD%\skill"
```

macOS / Linux：

```bash
ln -s "$(pwd)/skill" ~/.cursor/skills/shushu-canon
```

### 方式 B · 复制

把整个 `skill/` 文件夹复制为 `~/.cursor/skills/shushu-canon/`。

重启 Cursor 或新开 Agent 对话后，提到六壬/六爻/术数等应触发 `shushu-canon`。

## 体积

约 **3 MB**（多为 Markdown）。

## 使用说明

Agent 会读 `INDEX-slim.json` 找书，再打开 `books/.../SKILL.md`。详见 `skill/SKILL.md`。

## 声明

- 内容多为古籍 OCR / 公开文本的 **RIA 蒸馏稿**，便于检索与操作化，**不能替代原书核对**。
- 不作恐吓迷信；不替代法律、医疗、投资决策。
- 上传/分享前请自行确认你对材料的使用与分发权限是否合规。

## 维护

在 `skill/` 下增删 `books/` 后执行：

```bash
node skill/scripts/build_index.cjs
```
