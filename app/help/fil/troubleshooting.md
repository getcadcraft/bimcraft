---
title: Pag-troubleshoot
summary: Mga mensaheng ipinapakita ng BimCraft, ano ang sanhi ng mga ito at ano ang gagawin, para sa pagbubukas ng mga file, folder, 3D model, drawing at pag-edit.
keywords: problema, error, hindi gumagana, hindi mabuksan, nabigo, hindi kumpleto, sira, mabagal, crash, blangko, nawawala, mensahe, tulong
from: 1e5a79fc
---

Lumalabas ang mga mensahe sa status line sa ibaba ng stage, sa pula kapag may nabigo. Hanapin ang mensahe sa ibaba.

## Pagbubukas ng mga file

**"*name* is not an IFC, RVT, RFA, DWG or DXF file."**
Hindi nakilala ng BimCraft ang file. Suriin ang extension at kung hindi walang laman ang file. Hindi nabubuksan ang mga PDF, larawan at office file.

**".ifczip ay hindi pa suportado. I-save o i-export ang model bilang simpleng .ifc file."** (pati para sa `.ifcxml`)
I-unzip ang `.ifczip` (ordinaryong zip ito na may laman na `.ifc`) o mag-export ng simpleng IFC.

**"… ay project file na hindi pa nababasa ng BimCraft."**
Isang `.pln`, `.pla`, `.tpl` o `.bpn` file. Mag-export ng IFC o DWG mula rito at buksan iyon: tingnan ang [Magbukas ng .pln at .pla project file](topic:pln-project-files).

**"Hindi mabasa ang IFC file na ito."**
Sira ang IFC file o hindi talaga IFC. Buksan ito sa text editor: nagsisimula ang tunay na IFC file sa `ISO-10303-21;`. I-export ulit ito.

**"Hindi kumpleto ang file na ito: … MB ito, ngunit ang sarili nitong index ay tumuturo sa datos na nasa loob nito, na hindi bababa sa … MB. …"**
Naputol ang project o family file habang kinokopya, ina-upload o sini-sync. Pareho ang itsura ng file sa cloud drive na "online only". Nagbubukas pa rin ang file kapag mag-isa lang itong binuksan, na may mensaheng ito sa itaas ng card at "Ipinapakita ang nabawi; kopyahin ulit ang orihinal para sa buong model.": tanging mga bahaging kumpleto ang bawat byte sa file ang ipinapakita ng card, at nakalista ang iba sa ilalim ng **Wala sa file**. I-set ang file na available offline sa iyong cloud drive, o kopyahin ulit ang orihinal, saka buksan ulit. Sa folder, ang pinakabagong kumpletong backup ang ipinapakita ng BimCraft.

**"… Nasa nawawalang bahagi rin ang sarili nitong listahan ng nilalaman ng file, kaya walang mabubuksan sa loob nito."**
Naputol nang napakaaga ang file kaya wala man lang ang listahan ng nilalaman nito. Walang mababawi mula sa kopyang ito. Kopyahin ulit ang orihinal at buksan ito.

**"Walang BasicFileInfo stream ang compound file na ito, kaya hindi ito Revit file."**
Compound file ito ng ibang uri (gumagamit ng parehong container ang mga lumang office document). Suriin kung tama ang napili mong file.

**"Ginagawa pa rin ang huli…"**
Abala pa rin ang BimCraft sa nakaraang file o folder. Hintayin matapos ang status line, saka subukan ulit.

**Naka-grey out ng file chooser ang file ko.**
Ang chooser ay nag-aalok lamang ng `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` at `.dxf`. I-drag na lang ang ibang file sa page, at sasabihin ng BimCraft kung kaya nitong basahin ang mga iyon.

## Pagbubukas ng mga folder

**"Higit sa 20,000 ang file sa folder na ito. Pumili ng mas maliit na folder, gaya ng iisang project."**
Napili mo ang folder na masyadong mataas ang antas, gaya ng buong drive. Pumili ng isang project folder.

**"Hindi binigyan ng browser ng access ang *name*. Piliin ulit ito gamit ang Buksan ang folder."**
Na-click mo ang {{ui:Reopen}} sa kamakailang folder, at tinanggihan o nag-expire na ang permiso ng browser. Piliin ulit ang folder, o i-drag ito.

**Sinasabi ng browser na "ia-upload" nito ang mga file.**
Ito ang sariling pananalita ng browser sa pag-abot ng mga file sa isang page. Hindi ipinapadala ng BimCraft ang mga ito kahit saan. I-drag ang folder para maiwasan ang tanong.

**Walang nangyayari sa phone o tablet.**
Maraming mobile browser ang hindi makapamili ng folder. Magbukas ng iisang file, o gumamit ng computer.

## Unang paglo-load ng IFC engine

**Nananatili ang status line sa "Sinisimulan ang IFC engine…", o nagpapakita ng error gaya ng "Failed to fetch".**
Hindi ma-download ang IFC engine. Maaaring offline ka, o may humahadlang na firewall o content blocker.

:::offline
Offline ka. Kung hindi sinasabi ng button sa app bar ang {{ui:Offline ready}}, hindi kailanman na-save ang IFC engine sa browser na ito. Kumonekta ulit, buksan ulit ang file, saka i-click ang {{ui:Save for offline}} para gumana ito offline sa susunod. Tingnan ang [Online at offline](topic:online-offline).
:::

:::online
I-reload ang page at subukan ulit. Sa work network, hilingin sa IT team na payagan ang `.wasm` file ng site.
:::

## Pag-save para sa offline na paggamit

**Sinasabi ng button ang {{ui:Could not save}}.**
Hindi na-download ang ilang file, kadalasan dahil naputol ang koneksyon. Suriin ang koneksyon at i-click ulit ang button. Nananatili ang nakaraang offline copy hanggang makumpleto ang bago.

**Sinasabi ng button ang {{ui:Offline not available}}.**
Hindi makapag-iingat ng offline copy ang window na ito, halimbawa private window o managed na work computer. Tingnan ang [Pagtatrabaho offline](common:offline).

**Matagal na nananatili ang button sa "Sine-save ang *n* sa *m*".**
Mga 11 MB ang kopya ng BimCraft, karamihan ay IFC engine. Panatilihing bukas ang tab hanggang sabihing {{ui:Offline ready}}.

**Nagbukas ang BimCraft offline pero mukhang luma na.**
Galing sa naunang pagbisita ang naka-save mong kopya. Kapag online ka, i-click ang {{ui:Offline ready}} at piliin ang {{ui:Save again (get the newest version)}}.

## 3D view

**Wala sa inaasahan kong lugar ang model, o napakaliit nito.**
Pindutin ang {{key:F}} o i-click ang {{ui:Fit}}. Lagi nitong isinasama sa frame ang lahat ng nasa model, kasama ang mga storey na inalisan mo ng tsek at mga ligaw na element na malayo sa gusali, kaya maaaring mukhang maliit ang gusali. Mag-zoom in mula roon.

**Walang napipili kapag nag-click.**
Panatilihing nakatigil ang mouse habang nag-click: nag-o-orbit ang maliit na drag. Hindi mapipili ang mga element sa storey na inalisan ng tsek. Kapag naka-on ang {{ui:Spaces}}, unang napipili ang mga see-through space bago ang nasa loob ng mga ito.

**Naka-grey out ang button na {{ui:Edges}}: "Edges are off for very large models".**
Mahigit 1.5 milyong triangle ang model. Naka-off ang edges para makatipid ng memorya.

**Nagiging mabagal ang tab, nagiging puti, o nagpapakita ng crash page ng browser.**
Masyadong malaki ang model para sa memoryang ibinibigay ng browser sa tab. Isara ang ibang tab at i-reload. Mag-export ng mas maliit na IFC: isang gusali, isang disiplina o mas kaunting storey. Tingnan ang [Mga browser, device at memorya](topic:platforms).

**Nananatiling blangko ang 3D view.**
Maaaring naka-off o naharangan ang WebGL. Sa settings ng browser, i-on ang hardware acceleration (o graphics acceleration) at i-restart ang browser.

## Pag-edit ng IFC

**"Gumamit ng numero."** Numero ang halaga. Mag-type ng simpleng numero na walang units, gaya ng `2.4`.

**"Gumamit ng buong numero."** Bilang o integer ang halaga. Alisin ang mga decimal.

**"Mga property na iisa ang halaga lang ang maaaring i-edit."** Read-only ang mga listahan, enumeration at quantity.

**Ang {{key:Mod+S}} ay nagbubukas ng "Save page" window ng browser.**
Walang hindi naka-save na pagbabago, kaya ipinaubaya ng BimCraft ang key sa browser. Isara ang window.

**Walang nangyayari sa {{key:Mod+Z}}.**
Gumagana lamang ito habang may hindi pa naka-save na pagbabago at hindi ka nagta-type sa isang field. Pagkatapos ng save, wala nang maaaring i-undo.

**Nagpapakita pa rin ang listahang {{ui:Changes}} ng mga edit kahit tinanggal ko na ang mga ito at nagbukas ng drawing o folder.**
Kapag sinagot mo ng OK ang tanong na "Itapon ang mga ito?" at saka nagbukas ng bagay na hindi IFC model, nananatili sa memorya ang lumang edit at ise-save pa rin ng {{ui:Save as IFC}} ang mga ito. Para talagang magsimulang muli, buksan ulit ang orihinal na IFC, o i-reload ang page.

**Mas maraming element ang nabago ng edit ko kaysa sa napili ko.**
Binago mo ang property sa set na may markang "(type)". Nalalapat ang type property sa bawat element ng type. I-click ang {{ui:Undo}}. Tingnan ang [Baguhin ang type property para sa bawat element ng isang type](topic:type-vs-instance).

## Mga drawing

**"Hindi mabasa ang *name*. Maaaring sira ito, o naka-save sa format na hindi pa kayang hawakan ng reader (…)."**
I-save ang drawing mula sa program na gumawa nito bilang mas lumang DWG (2018 o mas maaga) o bilang DXF, saka subukan ulit.

**"Walang maipapakitang drawing na ito."** o **"Walang laman ang *name*: walang linya, teksto o block."**
Walang laman ang drawing, o naglalaman lamang ng mga bagay na hindi pa iginuguhit ng BimCraft (tingnan ang **Not drawn yet** sa kanan).

**"Napakalaki ng drawing na ito; bahagi lang nito ang ipinapakita."**
Huminto ang BimCraft sa pagguhit para manatiling tumutugon. I-off ang mga layer na hindi mo kailangan, o buksan ang mga sheet na kailangan mo mula sa mas maliit na drawing.

**May mga bahaging nawawala sa sheet.**
Maaaring nawawala ang mga linked drawing: tingnan sa ilalim ng **Linked drawings** sa kanan. Tingnan ang [Hanapin ang mga linked drawing at larawan](topic:dwg-linked-files). Maaari ring naka-off ang mga layer: i-click ang {{ui:All on}}.

**Lumalabas na walang laman na frame ang larawan.**
Hindi nahanap ang file nito, o TIFF ito ("Hindi maipapakita sa browser ang TIFF"). Magdagdag ng kopyang PNG o JPEG gamit ang {{ui:Add pictures…}}.

**Nagzo-zoom ang scroll sa trackpad ko sa halip na ilipat ang drawing.**
Ganito gumagana ang mga drawing sa BimCraft. I-click at i-drag para mag-pan.

## Hindi pa rin malutas

Basahin ang [Ano ang hindi pa nabubuo](topic:not-built-yet): maaaring wala sa build na ito ang hinahanap mo.
