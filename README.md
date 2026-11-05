# 术数典籍总库（shushu-canon）

将六壬、六爻、命理、风水、奇门、太乙、易学及相关丹道/符法/医籍等约 **539** 部蒸馏稿，收成**一个入口**，并附带全部子书正文。

适合给各类支持「目录型 skill / 提示词包」的 AI Agent 使用：把本仓库克隆到本地，挂到 Agent 的 skills 目录即可。

## 目录

```
shushu-canon/
├── README.md
├── SKILL.md              # 入口（路由 + 用法）
├── INDEX-slim.json       # 检索索引
├── INDEX.json
├── CATALOG.md
├── scripts/build_index.cjs
└── books/<书目>/SKILL.md # 子书正文（539）
```

体积约 **3 MB**。

## 安装

1. 克隆本仓库到任意目录。  
2. 将**本仓库根目录**（含 `SKILL.md` 的这一层）联接或复制到你所用 Agent 的 skills 目录，目录名建议仍为 `shushu-canon`。  
3. 新开对话后，用「六壬 / 六爻 / 术数总库」等说法触发。

> 只需挂这一个入口；`books/` 是资料，不要拆成几百个独立 skill 去注册。

Windows 联接示例（把路径换成你的克隆位置）：

```bat
mklink /J "%USERPROFILE%\.agents\skills\shushu-canon" "F:\path\to\shushu-canon"
```

macOS / Linux：

```bash
ln -s /path/to/shushu-canon ~/.agents/skills/shushu-canon
```

若你的工具使用其它 skills 路径，按该工具文档挂载同一目录即可。

## 使用方式（给 Agent）

1. 读 `INDEX-slim.json`，按书名 / 域名匹配。  
2. 再读 `books/<slug>/SKILL.md`（一次 1～3 本）。  
3. 精品体系稿优先于 `sim_*` 自动蒸馏稿；引用原文 ≤150 字；不作恐吓迷信，不替代法律/医疗/投资决策。

## 声明

- 多为古籍 OCR / 公开文本的操作化蒸馏，**宜核对原书**。  
- 上传与再分发前请自行确认材料使用权限是否合规。

## 维护

增删 `books/` 后：

```bash
node scripts/build_index.cjs
```
