---
title: Mga browser, device at memory
summary: Ano ang pagkakaiba sa BimCraft sa pagitan ng Chrome, Edge, Firefox at Safari, sa Mac, Windows at Linux, gamit ang mouse, trackpad o touch, at gaano kalaking file ang kaya nitong buksan.
keywords: browser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, phone, touch, trackpad, memory, malalaking file, large files, webgl, performance
from: fd8acba1
---

Tumatakbo ang BimCraft sa kasalukuyang bersyon ng Chrome, Edge, Firefox at Safari, sa Mac, Windows at Linux. Kailangan ng 3D view ang WebGL, na mayroon ang bawat kasalukuyang browser. Tingnan ang [Browsers and computers](common:browsers) para sa kailangan ng mga app sa pangkalahatan.

## Pagbubukas ng folder

| Browser | Ginagawa ng {{ui:Magbukas ng folder}} | Pag-drag ng folder papasok | {{ui:Kamakailang folder}} |
|---|---|---|---|
| Chrome, Edge | Ang folder picker ng browser, pagkatapos "Let site view files?": i-click ang **View files** | Nagbubukas nang walang prompt | Oo, para sa mga folder na napili o na-drag |
| Firefox | Ang folder chooser ng system | Nagbubukas nang walang prompt | Hindi |
| Safari | Ang folder chooser ng system, may button na **Upload** (walang ina-upload) | Nagbubukas nang walang prompt | Hindi |

Sa likod ng eksena: gumagamit ang Chrome at Edge ng File System Access picker at naaalala ang folder. Ang Firefox at Safari ay gumagamit ng mas lumang folder chooser, na ibinibigay nang sabay-sabay ang bawat file sa folder at hindi naaalala. Ang na-drag na folder ay binabasa nang isa-isang entry sa bawat browser.

:::chromium
Ina-off ng Brave at ilang iba pang Chromium browser ang folder picker. Ginagamit ng BimCraft ang folder chooser ng system sa halip, at maaaring magtanong ang browser ng "Upload *n* files to this site?". Walang ina-upload; napupunta lang ang mga file sa tab. Iniiwasan ng pag-drag ng folder ang tanong na ito.
:::

## Mac, Windows at Linux

- Ang mga shortcut na nakasulat na {{key:Mod+S}} at {{key:Mod+Z}} ay Command sa Mac at Ctrl sa Windows at Linux.
- Ang {{key:Ctrl+Shift+F}} (screen modes) ay Control sa bawat platform, kasama ang Mac.
- Sarili ng system mo ang mga file dialog at ang downloads folder.

## Mouse, trackpad at touch

| Input | 3D view | 2D drawing |
|---|---|---|
| Mouse | Left-drag para mag-orbit, right-drag para mag-pan, wheel para mag-zoom, click para pumili | Anumang drag ay nag-pan, wheel ay nag-zoom, double-click ay nag-fit |
| Trackpad | Click-drag para mag-orbit; {{key:Shift}} o {{key:Mod}} at drag para mag-pan; two-finger scroll o pinch para mag-zoom | Click-drag para mag-pan; two-finger scroll o pinch para mag-zoom |
| Touch | Isang daliri ay nag-orbit, dalawang daliri ay pinch at pan, tap para pumili | Isang daliri ay nag-pan; wala pang pinch zoom; tap ang {{ui:Fit}} |

Sa Mac trackpad, ang right-click ay two-finger click (o Control-click). Tingnan ang [Keys, mice and trackpads](common:keys).

Puwedeng magbukas at tumingin ng iisang file ang mga tablet at telepono, pero maliit ang screen, maraming mobile browser ang hindi makapamili ng folder, at maaaring hindi kasya sa memory nila ang malalaking model. Pinakamainam ang computer.

## Malalaking file at memory

Nasa memory ng browser tab ang lahat ng binabasa ng BimCraft. Gaano karami ang kayang gamitin ng isang tab ay nakadepende sa browser at sa computer mo, higit kaysa sa BimCraft.

| File | Gaano karami ang nababasa | Ano ang aasahan |
|---|---|---|
| IFC | Ang buong file, kasama ang 3D geometry na binuo mula rito | Nakadepende sa computer at browser kung gaano kalaki; maaaring sobra para sa laptop ang model na ilang daang megabyte. Kapag lumampas sa 1.5 milyong triangle, naka-off ang mga edge |
| Project at family file | Mga 40 KB hanggang 100 KB, anuman ang size | Kahit ang napakalalaking central model ay nagbubukas agad, kahit mula sa network drive |
| DWG at DXF | Ang buong file | Ipinapakita ng napakalalaking drawing ang "This drawing is very large; only part of it is shown." |
| Folder | Ang listahan ng file, plus ilang kilobyte kada model | Hanggang 20,000 file |

Kapag naubusan ng memory ang isang tab, ipinapakita ng browser ang sarili nitong error page (halimbawa ang "Aw, Snap!" sa Chrome). Isara ang ibang tab, i-reload ang BimCraft at subukan ulit, o gumamit ng computer na may mas maraming memory.

## Kaugnay

- [Online and offline](topic:online-offline)
- [Troubleshooting](topic:troubleshooting)
