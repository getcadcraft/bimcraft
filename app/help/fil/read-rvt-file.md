---
title: Basahin ang project o family file
summary: Buksan ang .rvt, .rfa, .rte o .rft na file at basahin ang release, worksharing, project information, family parameters, links at preview picture nito, nang walang program na gumawa nito.
keywords: rvt, rfa, rte, rft, project file, family, release, bersyon, aling bersyon, build, worksharing, central, project information, preview, thumbnail, links
from: df3600e1
---

## Ano ang gagawin mo

Alamin kung ano ang laman ng project o family file nang hindi ito binubuksan sa Revit: aling release ang nag-save nito, kung may worksharing ito, ang project information, at kung ano ang naka-link dito. Kapaki-pakinabang kapag may file na galing sa iba at kailangan mong malaman kung aling release ang bubuksan dito.

## Mga hakbang

1. I-click ang {{ui:Pumili ng file}}.
2. Pumili ng `.rvt`, `.rfa`, `.rte` o `.rft` na file.
3. Maghintay sandali. Sinasabi ng status line na "Binabasa ang file…" at pagkatapos ay "Nabuksan ang *pangalan ng file*".
4. Tingnan ang itaas ng card: ang preview picture na naka-save sa file, ang uri ng file at ang release na pinag-savehan nito, at ang pangalan ng project.
5. Mag-scroll pababa para basahin ang mga seksyon ng card.

## Ano ang dapat mong makita

Ang card sa gitna, na may mga seksyong ito kapag hawak ng file ang mga ito:

| Seksyon | Ano ang sinasabi nito |
|---|---|
| File | Pangalan ng file, laki, uri (project, project template, family o family template), ang release at build kung saan ito na-save, worksharing, ang path ng central model, saan huling na-save, sino ang nag-save, locale at document GUID |
| Project information | Ang sariling field ng project, gaya ng pangalan, numero, client, address at status. Hindi kasama ang mga field na nasa default pa ng bagong project. |
| Family, Family: … | Para sa family: ang pangalan nito, category, release, huling update, at mga parameter nito, grupo-grupo |
| Linked and referenced files | Bawat naka-link na model, CAD link, image at keynote table na itinuturo ng file, kasama ang naka-save nitong path |

Sa kaliwa, inuulit ng {{ui:File}} panel ang mga pangunahing detalye at nagdaragdag ng **Read**: gaano karami ng file ang talagang nabasa ng BimCraft, kadalasang mga 40 KB ng file na maraming megabyte ang laki. Sa kanan, sinasabi ng {{ui:Properties}} panel na kailangan ng 3D model ang element properties.

## Bakit walang 3D

Ang 3D model at ang mga elemento sa loob ng project file ay nakaimbak sa format na walang dokumentasyon. Binabasa lang ng BimCraft ang mga bahagi ng file na dokumentado o malinaw na nababasa: ang impormasyon ng file, project information, family data, listahan ng link at preview picture. Hindi ito humuhula tungkol sa iba. Para makita ang model sa 3D at basahin ang element properties, i-export ang IFC mula sa program na gumawa ng file. Tingnan ang [Ilagay ang project file sa 3D sa pamamagitan ng IFC](topic:rvt-to-ifc).

## Mga karaniwang pagkakamali

- **Inaasahang 3D.** Tingnan sa itaas.
- **Naka-save na path lang ang ipinapakita ng mga link.** Hindi matingnan ng file na binuksan nang mag-isa kung umiiral ang mga link nito. Buksan na lang ang folder kung nasaan ito, at mamarkahan ng BimCraft ang bawat link bilang nahanap o hindi: [Buksan ang buong project folder](topic:open-project-folder).
- **"Hindi kumpleto ang file na ito…"** Naputol ang file habang kinokopya, ina-upload o sini-sync. Ganoon din ang nangyayari sa file ng cloud drive na "online only" pa rin. Binubuksan pa rin ito ng BimCraft at ipinapakita lang ang nabawi: isang amber na abiso sa itaas ng card, isang seksyong **Nabawi mula sa file na ito** na naglilista ng mga bahaging kumpleto ang bawat byte sa file, at **Wala sa file** para sa iba. Walang pinupunan para sa nawawalang bahagi, kaya maaaring mawala ang release, preview picture o project information kapag naka-imbak ang mga ito pagkatapos ng puputol. Kung pati listahan ng laman ng file ay naputol, walang mabubuksan. Kopyahin ulit ang orihinal at buksan ito para sa buong file.
- **"Walang preview picture sa file na ito".** May ilang file na sinasave nang walang ganoon. Normal iyon.
- **Pagbubukas ng backup nang hindi sinasadya.** Ang mga file na may pangalang gaya ng `Tower.0004.rvt` ay mga numerong backup. Kapag binuksan ang folder, pinagpapangkat sila kasama ng kanilang model.
