// Rewrites the version string inside each app plate from the repo's latest
// release tag, so the number is part of the SVG and still never drifts.
// Run by .github/workflows/refresh-versions.yml. No dependencies.
import { readFile, writeFile, readdir } from 'node:fs/promises';

const OWNER = 'barongartner';
const DIR = 'graphics';
const headers = {
  'accept': 'application/vnd.github+json',
  'user-agent': 'barongartner-readme',
  ...(process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
};

// Whole-tag match only: a prefixed tag like "windows-v1.0.0" is a platform
// build, not the app version, and must not win. Publish order is not version
// order either, so compare numerically and take the highest.
const SEMVER = /^v?(\d+)\.(\d+)\.(\d+)$/;

const rank = ([, a, b, c]) => Number(a) * 1e6 + Number(b) * 1e3 + Number(c);

async function latestTag(repo) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${repo}/releases?per_page=100`, { headers });
  if (!res.ok) return null;
  let best = null;
  for (const rel of await res.json()) {
    if (rel.draft) continue;
    const m = String(rel.tag_name).match(SEMVER);
    if (!m) continue;
    if (!best || rank(m) > rank(best)) best = m;
  }
  return best ? 'v' + best.slice(1, 4).join('.') : null;
}

const files = (await readdir(DIR)).filter(f => f.startsWith('app-') && f.endsWith('.svg'));
const cache = new Map();
let changed = 0;

for (const file of files) {
  const path = `${DIR}/${file}`;
  const svg = await readFile(path, 'utf8');
  const m = svg.match(/data-repo="([^"]+)"[^>]*>([^<]*)</);
  if (!m) continue;                       // plates with no release, e.g. The Pit
  const [, repo, current] = m;
  if (!cache.has(repo)) cache.set(repo, await latestTag(repo));
  const tag = cache.get(repo);
  if (!tag || tag === current) continue;
  await writeFile(path, svg.replace(m[0], m[0].replace(`>${current}<`, `>${tag}<`)));
  console.log(`${file}: ${current} -> ${tag}`);
  changed++;
}

console.log(changed ? `${changed} plate(s) updated` : 'all plates current');
