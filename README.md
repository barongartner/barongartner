<!-- ===========================================================
     barongartner/barongartner: GitHub profile README
     Concept: "Specimen". A foundry specimen sheet set in the
     system stack, which is the only type a GitHub README can
     render. Every plate is an SVG in /graphics, in a light and
     a dark cut, drawn on transparent ground; <picture> serves
     the cut that matches the reader's system setting.

     TAGLINE: it is the 16px mono <text> inside the dashed frame in
     graphics/masthead-light.svg and graphics/masthead-dark.svg.
     Edit both cuts.

     VERSIONS: each app plate's version lives in its own
     <text data-repo="Photon">. .github/workflows/refresh-versions.yml
     runs tools/refresh-versions.mjs daily, reads the latest
     release tag from the GitHub API and rewrites it in place.
     Remove data-repo to opt a plate out (The Pit has none).
     Lab plates (FreeCast, Blend) keep data-repo with the text
     UNRELEASED, so the first release tag replaces it on its own.
     Private plates (Recast, Teleport, PhotoPlaces) close out Lab:
     no link, no data-repo, PRIVATE in the version slot.

     Full system notes are in SPEC.md.
     =========================================================== -->
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/masthead-dark.svg">
    <img alt="Baron Gartner. GitHub @barongartner. I have no idea what's going on." src="graphics/masthead-light.svg" width="100%">
  </picture>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/building-dark.svg">
    <img alt="Currently building: Laneway, AI trip routing for the journeys maps cannot solve. Verified multi-modal plans, including the shuttles and connectors no map has indexed. A SwiftUI iPhone app." src="graphics/building-light.svg" width="100%">
  </picture>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/section-software-dark.svg">
    <img alt="Section 01 of 05: Software." src="graphics/section-software-light.svg" width="100%">
  </picture>

<a href="https://github.com/barongartner/Photon">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-photon-dark.svg">
    <img alt="01. Photon: fast local photo sorting for Windows and macOS, version 1.2.0. Fly through tens of thousands of photos in minutes and file them. Signed build available." src="graphics/app-photon-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/TrackForge">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-trackforge-dark.svg">
    <img alt="02. TrackForge: turns YouTube links into properly tagged MP3s, cover art through musical key, and repairs the metadata on a library you already own. Windows and macOS, version 1.1.0. Signed build available." src="graphics/app-trackforge-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/Verbatim">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-verbatim-dark.svg">
    <img alt="03. Verbatim: offline audio transcription for Windows and macOS that tells the speakers apart. Version 2.4.0. Signed build available." src="graphics/app-verbatim-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/FreeFlow">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-freeflow-dark.svg">
    <img alt="04. FreeFlow: local voice dictation for Windows. Speak anywhere you can type. Version 2.0.0. Signed build available." src="graphics/app-freeflow-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/FreeVoice">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-freevoice-dark.svg">
    <img alt="05. FreeVoice Studio: text to speech with voice cloning, running fully on device on Windows, version 1.0.0. Chatterbox and F5-TTS for quality, Kokoro for quick drafts. Signed build available." src="graphics/app-freevoice-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/Split">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-split-dark.svg">
    <img alt="06. Split: per-app multi-headphone audio routing for macOS and Windows, version 1.1.2. Send any app to any output device, each route with its own volume and delay. Signed build available." src="graphics/app-split-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/ReType">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-retype-dark.svg">
    <img alt="07. ReType: a typing simulator for Windows that types the way a person does, pauses and typos and corrections included. Version 6.0.0. Signed build available." src="graphics/app-retype-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/Shelf">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-shelf-dark.svg">
    <img alt="08. Shelf: a file shelf shared by every device on your Wi-Fi. Drop a file on one computer and drag it out on another, and save a batch of photos straight to your iPhone camera roll. macOS and Windows, iPhone in the browser, version 1.2.1. Signed build available." src="graphics/app-shelf-light.svg" width="100%">
  </picture>
</a>

<a href="https://barongartner.github.io">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/downloads-dark.svg">
    <img alt="Downloads at barongartner.github.io." src="graphics/downloads-light.svg" width="100%">
  </picture>
</a>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/section-ai-dark.svg">
    <img alt="Section 02 of 05: Lab." src="graphics/section-ai-light.svg" width="100%">
  </picture>

<a href="https://github.com/barongartner/FreeCast">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-freecast-dark.svg">
    <img alt="09. FreeCast: a screen recorder for devlogs on Windows. Your phone is the face cam over Wi-Fi, and a hotkey drops edit markers into the MP4 and a Resolve EDL. Public source, no release yet." src="graphics/app-freecast-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/Blend">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-blend-dark.svg">
    <img alt="10. Blend: a personal AutoMix for the Mac. Pick songs from Apple Music, set where each starts and ends, and render one beat-matched mix for the background of a video. Public source, no release yet." src="graphics/app-blend-light.svg" width="100%">
  </picture>
</a>

<a href="https://github.com/barongartner/The-Pit">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-thepit-dark.svg">
    <img alt="11. The Pit: a testbed where Claude agents paper-trade against each other. Public source, no release yet, currently tinkering." src="graphics/app-thepit-light.svg" width="100%">
  </picture>
</a>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-recast-dark.svg">
    <img alt="12. Recast: instant image conversion for Windows. Drop a file and get PNG, JPG, BMP, GIF, TIFF or a proper multi-size ICO, from one 124 KB exe that opens in about 30 ms. Private, not released." src="graphics/app-recast-light.svg" width="100%">
  </picture>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-teleport-dark.svg">
    <img alt="13. Teleport: simulated GPS for my iPhone, run from a map on Windows. Pin a spot, or drive a real route that slows for turns and stops at stop signs and lights. Private, not released." src="graphics/app-teleport-light.svg" width="100%">
  </picture>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/app-photoplaces-dark.svg">
    <img alt="14. PhotoPlaces: a SwiftUI iPhone app for my saved places, and for fixing where a photo says it was taken. Private, not released." src="graphics/app-photoplaces-light.svg" width="100%">
  </picture>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/section-stack-dark.svg">
    <img alt="Section 03 of 05: Stack." src="graphics/section-stack-light.svg" width="100%">
  </picture>

| <picture><source media="(prefers-color-scheme: dark)" srcset="graphics/stack-languages-dark.svg"><img alt="Languages: C#, Python, Swift, TypeScript, JavaScript, HTML5, CSS, PowerShell." src="graphics/stack-languages-light.svg"></picture> |
|:--|
| ![C#](graphics/badges/csharp.svg) ![Python](graphics/badges/python.svg) ![Swift](graphics/badges/swift.svg) ![TypeScript](graphics/badges/typescript.svg) ![JavaScript](graphics/badges/javascript.svg) ![HTML5](graphics/badges/html5.svg) ![CSS](graphics/badges/css.svg) ![PowerShell](graphics/badges/powershell.svg) |

| <picture><source media="(prefers-color-scheme: dark)" srcset="graphics/stack-frameworks-dark.svg"><img alt="Frameworks: .NET, WinForms, SwiftUI, Core Audio, React, Vite, Node.js, FastAPI." src="graphics/stack-frameworks-light.svg"></picture> |
|:--|
| ![.NET](graphics/badges/dotnet.svg) ![WinForms](graphics/badges/winforms.svg) ![SwiftUI](graphics/badges/swiftui.svg) ![Core Audio](graphics/badges/core-audio.svg) ![React](graphics/badges/react.svg) ![Vite](graphics/badges/vite.svg) ![Node.js](graphics/badges/nodejs.svg) ![FastAPI](graphics/badges/fastapi.svg) |

| <picture><source media="(prefers-color-scheme: dark)" srcset="graphics/stack-ai-dark.svg"><img alt="AI and audio: Claude, Whisper, pyannote, ONNX, Hugging Face, Plotly, FFmpeg." src="graphics/stack-ai-light.svg"></picture> |
|:--|
| ![Claude](graphics/badges/claude.svg) ![Whisper](graphics/badges/whisper.svg) ![pyannote](graphics/badges/pyannote.svg) ![ONNX](graphics/badges/onnx.svg) ![Hugging Face](graphics/badges/hugging-face.svg) ![Plotly](graphics/badges/plotly.svg) ![FFmpeg](graphics/badges/ffmpeg.svg) |

| <picture><source media="(prefers-color-scheme: dark)" srcset="graphics/stack-platforms-dark.svg"><img alt="Platforms: Windows, macOS, iOS, Git, GitHub, Cloudflare, Telegram." src="graphics/stack-platforms-light.svg"></picture> |
|:--|
| ![Windows](graphics/badges/windows.svg) ![macOS](graphics/badges/macos.svg) ![iOS](graphics/badges/ios.svg) ![Git](graphics/badges/git.svg) ![GitHub](graphics/badges/github.svg) ![Cloudflare](graphics/badges/cloudflare.svg) ![Telegram](graphics/badges/telegram.svg) |

![followers](graphics/badges/followers.svg) ![stars](graphics/badges/stars.svg) ![last ship](graphics/badges/last-ship.svg)

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/section-elsewhere-dark.svg">
    <img alt="Section 04 of 05: Elsewhere." src="graphics/section-elsewhere-light.svg" width="100%">
  </picture>

<a href="https://instagram.com/barongartner">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/social-instagram-dark.svg">
    <img alt="Instagram, @barongartner, instagram.com/barongartner, 1,387 followers." src="graphics/social-instagram-light.svg" width="100%">
  </picture>
</a>

<a href="https://youtube.com/@barongartner">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/social-youtube-dark.svg">
    <img alt="YouTube, @barongartner, youtube.com/@barongartner, 81 subscribers." src="graphics/social-youtube-light.svg" width="100%">
  </picture>
</a>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/section-contact-dark.svg">
    <img alt="Section 05 of 05: Contact." src="graphics/section-contact-light.svg" width="100%">
  </picture>

<a href="mailto:barongartner@gmail.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/colophon-dark.svg">
    <img alt="Contact. Email barongartner at gmail dot com." src="graphics/colophon-light.svg" width="100%">
  </picture>
</a>
