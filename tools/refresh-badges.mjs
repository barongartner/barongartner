// Saves every stack badge and the three GitHub counters as committed SVGs in
// graphics/badges/, so the README never hot-links img.shields.io. GitHub's camo
// proxy kept timing out (504) on shields and the badges rendered as broken
// images. Run by .github/workflows/refresh-versions.yml, which keeps the
// followers / stars / last ship counts current. No dependencies.
import { writeFile, readFile, mkdir } from 'node:fs/promises';

const DIR = 'graphics/badges';
const BADGES = [
  ["csharp", "https://img.shields.io/badge/C%23-41464d?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0iIzUxMkJENCIgZD0iTTEyIDEuNWw5LjEgNS4yNXYxMC41TDEyIDIyLjVsLTkuMS01LjI1VjYuNzV6Ii8%2BPHBhdGggZD0iTTEyLjYgOC42YTMuNiAzLjYgMCAxIDAgMCA2LjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTQuOCA5Ljl2NC42TTE3IDkuOXY0LjZNMTMuNyAxMS40aDQuNE0xMy43IDEzaDQuNCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8%2BPC9zdmc%2B"],
  ["python", "https://img.shields.io/badge/Python-41464d?style=flat-square&logo=python"],
  ["swift", "https://img.shields.io/badge/Swift-41464d?style=flat-square&logo=swift"],
  ["typescript", "https://img.shields.io/badge/TypeScript-41464d?style=flat-square&logo=typescript"],
  ["javascript", "https://img.shields.io/badge/JavaScript-41464d?style=flat-square&logo=javascript"],
  ["html5", "https://img.shields.io/badge/HTML5-41464d?style=flat-square&logo=html5"],
  ["css", "https://img.shields.io/badge/CSS-41464d?style=flat-square&logo=css"],
  ["powershell", "https://img.shields.io/badge/PowerShell-41464d?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0iIzUzOTFGRSIgZD0iTTUuNiAzaDE2YS45LjkgMCAwIDEgLjg3IDEuMTNsLTMuNiAxNi4yQS45LjkgMCAwIDEgMTggMjFIMi40YS45LjkgMCAwIDEtLjg3LTEuMTNMNS4xIDMuN0EuOS45IDAgMCAxIDUuNiAzeiIvPjxwYXRoIGQ9Ik04IDguMmw1LjIgMy44TDggMTUuOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8%2BPHBhdGggZD0iTTEyLjQgMTYuNGg0LjYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg%3D%3D"],
  ["dotnet", "https://img.shields.io/badge/.NET-41464d?style=flat-square&logo=dotnet"],
  ["winforms", "https://img.shields.io/badge/WinForms-41464d?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0iIzAwNzhENCIgZD0iTTMgNS40bDcuNC0xdjdIM3ptOC42LTEuMkwyMSAzdjguNGgtOS40ek0zIDEyLjZoNy40djdMMyAxOC42em04LjYgMEgyMVYyMWwtOS40LTEuM3oiLz48L3N2Zz4%3D"],
  ["swiftui", "https://img.shields.io/badge/SwiftUI-41464d?style=flat-square&logo=swift"],
  ["core-audio", "https://img.shields.io/badge/Core%20Audio-41464d?style=flat-square"],
  ["react", "https://img.shields.io/badge/React-41464d?style=flat-square&logo=react"],
  ["vite", "https://img.shields.io/badge/Vite-41464d?style=flat-square&logo=vite"],
  ["nodejs", "https://img.shields.io/badge/Node.js-41464d?style=flat-square&logo=nodedotjs"],
  ["fastapi", "https://img.shields.io/badge/FastAPI-41464d?style=flat-square&logo=fastapi"],
  ["claude", "https://img.shields.io/badge/Claude-41464d?style=flat-square&logo=anthropic&logoColor=white"],
  ["whisper", "https://img.shields.io/badge/Whisper-41464d?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZD0iTTMgMTB2NE02LjUgN3YxME0xMCA0djE2TTEzLjUgOHY4TTE3IDV2MTRNMjAuNSA5djYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg%3D%3D"],
  ["pyannote", "https://img.shields.io/badge/pyannote-41464d?style=flat-square"],
  ["onnx", "https://img.shields.io/badge/ONNX-41464d?style=flat-square&logo=onnx"],
  ["hugging-face", "https://img.shields.io/badge/Hugging%20Face-41464d?style=flat-square&logo=huggingface"],
  ["plotly", "https://img.shields.io/badge/Plotly-41464d?style=flat-square&logo=plotly"],
  ["ffmpeg", "https://img.shields.io/badge/FFmpeg-41464d?style=flat-square&logo=ffmpeg"],
  ["windows", "https://img.shields.io/badge/Windows-41464d?style=flat-square&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0iIzAwNzhENCIgZD0iTTMgNS40bDcuNC0xdjdIM3ptOC42LTEuMkwyMSAzdjguNGgtOS40ek0zIDEyLjZoNy40djdMMyAxOC42em04LjYgMEgyMVYyMWwtOS40LTEuM3oiLz48L3N2Zz4%3D"],
  ["macos", "https://img.shields.io/badge/macOS-41464d?style=flat-square&logo=apple&logoColor=white"],
  ["ios", "https://img.shields.io/badge/iOS-41464d?style=flat-square&logo=apple&logoColor=white"],
  ["git", "https://img.shields.io/badge/Git-41464d?style=flat-square&logo=git"],
  ["github", "https://img.shields.io/badge/GitHub-41464d?style=flat-square&logo=github&logoColor=white"],
  ["cloudflare", "https://img.shields.io/badge/Cloudflare-41464d?style=flat-square&logo=cloudflare"],
  ["telegram", "https://img.shields.io/badge/Telegram-41464d?style=flat-square&logo=telegram"],
  ["followers", "https://img.shields.io/github/followers/barongartner?style=flat-square&color=41464d&labelColor=41464d&logo=github&logoColor=white&label=followers"],
  ["stars", "https://img.shields.io/github/stars/barongartner?style=flat-square&color=41464d&labelColor=41464d&affiliations=OWNER&label=stars"],
  ["last-ship", "https://img.shields.io/github/release-date/barongartner/Verbatim?style=flat-square&color=41464d&labelColor=41464d&label=last%20ship"],
];

await mkdir(DIR, { recursive: true });
let changed = 0, failed = 0;

for (const [name, url] of BADGES) {
  const path = `${DIR}/${name}.svg`;
  let svg = null;
  for (let attempt = 0; attempt < 3 && !svg; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'barongartner-readme' } });
      const type = res.headers.get('content-type') || '';
      const body = await res.text();
      if (res.ok && type.startsWith('image/svg') && body.includes('<svg')) svg = body;
    } catch {}
  }
  if (!svg) { console.log(`${name}: fetch failed, keeping the old file`); failed++; continue; }
  const old = await readFile(path, 'utf8').catch(() => null);
  if (old === svg) continue;
  await writeFile(path, svg);
  console.log(`${name}: updated`);
  changed++;
}

console.log(`${changed} badge(s) updated, ${failed} failed`);
