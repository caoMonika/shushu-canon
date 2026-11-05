#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const BOOKS = path.join(ROOT, 'books');
const dirs = fs.readdirSync(BOOKS, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
function parseFront(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const o = {}; let key = null, buf = [];
  for (const line of m[1].split(/\r?\n/)) {
    const km = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (km) { if (key) o[key] = buf.join('\n').trim(); key = km[1]; buf = [km[2]]; }
    else if (key) buf.push(line);
  }
  if (key) o[key] = buf.join('\n').trim();
  return o;
}
function domainOf(s) {
  if (s.includes('sim_')) return 'sim-ocr';
  if (/liuren|六壬|金口/.test(s)) return 'liuren';
  if (/liuyao|六爻|增删|卜筮|梅花/.test(s)) return 'liuyao';
  if (/dili|风水|峦头|青囊|葬书|玄空|催官/.test(s)) return 'dili';
  if (/qimen|奇门|遁甲/.test(s)) return 'qimen';
  if (/taiyi|太乙/.test(s)) return 'taiyi';
  if (/ziping|mingli|三命|子平|命理|渊海/.test(s)) return 'mingli';
  if (/周易|易传|易经|皇极|太玄/.test(s)) return 'yi';
  if (/符|咒|丹|拳|医|本草|伤寒/.test(s)) return 'dao-yi-quan';
  return 'other-shushu';
}
const items = [];
for (const name of dirs) {
  const p = path.join(BOOKS, name, 'SKILL.md');
  if (!fs.existsSync(p)) continue;
  const md = fs.readFileSync(p, 'utf8');
  const fm = parseFront(md);
  const title = String(fm.source_book || fm.name || name).replace(/^["']|["']$/g, '').slice(0, 120);
  const desc = String(fm.description || '').replace(/\s+/g, ' ').trim().slice(0, 400);
  const domain = name.startsWith('sim_') ? 'sim-ocr' : domainOf(name + ' ' + title + ' ' + desc);
  items.push({ slug: name, domain, title, name: String(fm.name || name), description: desc, tags: String(fm.tags || ''), path: 'books/' + name + '/SKILL.md' });
}
items.sort((a,b)=>a.domain.localeCompare(b.domain)||a.slug.localeCompare(b.slug));
const byDomain = {};
for (const it of items) (byDomain[it.domain] ||= []).push(it.slug);
const full = { generated_at: new Date().toISOString(), total: items.length, by_domain: Object.fromEntries(Object.entries(byDomain).map(([k,v])=>[k,v.length])), path_style: 'relative-to-skill-root', items };
fs.writeFileSync(path.join(ROOT, 'INDEX.json'), JSON.stringify(full, null, 2));
fs.writeFileSync(path.join(ROOT, 'INDEX-slim.json'), JSON.stringify({ generated_at: full.generated_at, total: full.total, by_domain: full.by_domain, path_style: full.path_style, items: items.map(i=>({slug:i.slug,domain:i.domain,title:i.title,path:i.path})) }, null, 2));
console.log('rebuilt', full.total);
