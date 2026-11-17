---
title: Lisandmoodulid, mida su fail kasutab
summary: BimCraft märgib IFC-faili, milliste lisandmoodulite poolt sinna kirjutati, ja pakub faili avamisel lisada need, mis puuduvad.
keywords: lisandmoodul, addon, see fail kasutab, puuduv lisandmoodul, trusscraft, teek, kirje, cadcraft_addons
from: 9d9500d8
---

## Mis see teeb

Kui lisandmoodul kirjutab mudelisse (nt sarikad, torustiku), salvestab BimCraft lisandmooduli ja selle versiooni IFC-projekti külge omaduste hulka nimega CadCraft_AddOns. Kirje kirjutatakse samasse tagasivõtmise sammu, mis lisandmooduli enda muudatus, nii et muudatuse tagasivõtmine võtab koos sellega ka kirje. Teised programmid omaduste hulka ignoreerivad; lisandmooduli joonistatud asi jääb failisse igal juhul.

## Sammud

1. Ava IFC-fail, mille tegemisel aitas lisandmoodul.
2. Kui mõni lisandmoodul, mida fail kasutas, ei ole sisse lülitatud, näitab mudeli kohal märkus, millised need on, koos nupuga, millega need lisada oma teegi kontolt.
3. Lisa need või sulge märkus. Mudel avaneb mõlemal juhul.

## Levinumad vead

- **Märkust ei ilmu.** Sa ei ole selles vahekaardis oma kontoga sisse logitud või failis pole kirjet (see tehti enne kirjeid või teise programmiga).
- **Muudatuste loend ütleb „undefined“.** Parandatud: sildid näitavad nüüd lisandmooduli nime.

## Edasi

- [Paiguta varustus ja mööbel teegist](topic:place-from-library)
