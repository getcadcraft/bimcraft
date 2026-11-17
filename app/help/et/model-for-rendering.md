---
title: Saada mudel renderdusprogrammi
summary: Salvesta, mida 3D-vaade näitab, glTF-mudelina (.glb) koos materjalide, tekstuuride ja valgustitega renderdus- ja visualiseerimisprogrammidele, mis loevad glTF-i.
keywords: glb, gltf, gl transmission format, eksport, renderdamine, renderda, visualiseerimine, reaalajas, archviz, materjalid, tekstuurid, valgustid, lambid, ressurss, kohandatud ressurss
from: e62d57dc
---

{{ui:For rendering}} tööriistaribal salvestab, mida 3D-vaade näitab, ühe **.glb**-faili (glTF 2.0, avatud vorming, mille on loonud Khronos Group). Renderdusprogrammid, mis loevad glTF-i, avavad selle koos mudeli materjalide ja valgustitega; Twinmotion loetleb glTF-i ja GLB-d geomeetriafailide hulgas, mida ta impordib, ning säilitab nende valgustid (Epicu dokumentatsioon, „Importing geometry in Twinmotion“): kasuta {{ui:For rendering}} ja impordi sinna .glb-fail. Midagi ei laadita üles: fail tehakse sinu arvutis.

## Salvesta

1. Ava IFC-mudel ja seadista 3D-vaade: peida korrused, elemendid või seotud mudelid, mida ei soovi, ja [värvi materjalid](topic:paint-materials), mida soovid näha.
2. Kliki {{ui:For rendering}} (või kirjuta `GLB`).
3. Fail laaditakse alla nimega „<mudeli nimi>.glb“. Olekuriba ütleb, mitu kolmnurka, materjali ja valgustit fail sisaldab.

## Mida fail kannab

- **Geomeetria** kõigist elementidest, mida 3D-vaade näitab, meetrites, Y üles (glTF-i enda teljed). Üks objekt iga korruse ja materjali kohta, nimega „Level 1 — Brick, red“, nii et saad renderdusprogrammis valida materjali ja vahetada selle oma vastu.
- **Materjalid:** iga värv koos välimusega, mille valisid jaotises [Renderda](topic:render) (matt, satiin, läikiv, metall, klaas…), ning iga värvitud raamatukogu materjal oma värvi, karedusega ja **tekstuuriga** (pilt on failis, skaleeritud tegelikku suurusesse: tellis on tellise suurune). Klaas on läbipaistev.
- **Valgustid:** iga valgusti, mis on sisse lülitatud jaotises Renderda › Valgustid, punkt- või prožektorvalgustina oma heleduse (luumenid pööratud kandelaks), värvi ja kiirteurga.
- **Kus asukoht on:** asukoha laiuskraad ja pikkuskraad on failis viiteks kirjas. Renderdusprogrammidel on oma päike: sisesta seal koht.

## Mida see välja jätab

- Lõikelõige (terved elemendid lähevad sisse) ja läbipaistvaks näidatud elemendid (need jäetakse välja).
- Elementide kaupa eraldi objektid (selle asemel üks objekt korruse ja materjali kohta), IFC-omadused, reljeefikaardid, salvestatud vaated ja salvestatud kõnnid.
- Servad ja taust.

## Enscape ja muud pistikprogrammi renderdajad

Enscape töötab teises projekteerimisprogrammis ja tal ei ole faili, mida avada terve projektina. Kaks võimalust:

- Ava mudeli **IFC** (Fail › Salvesta) programmis, kus Enscape töötab; enamik neist loeb IFC-d. Värvid tulevad kaasa; raamatukogu materjalid tulevad oma värvidena.
- Too **väike osa** (mööbel, armatuur) sisse kohandatud ressursina: isoleeri see esmalt ja kliki {{ui:Enscape'ile (.gltf)}}. Enscape'i kohandatud ressursside teek loetleb .gltf-, .obj- ja .fbx-faile, mitte .glb-d, seega salvestab see nupp sama stseeni ühe iseseisva **.gltf**-failina (binaarandmed ja pildid on faili sees; pole midagi muud kaasa kopeerida). Enscape soovitab väikeseid ressursse (alla umbes 20 000 kolmnurga).

:::note
Programmis CadCraft Studio saab sama glTF-faili (ja USD-faili) salvestada ka menüüst {{ui:Renderda}} › Mootor › **glTF-fail** / **USD-fail**, või avada otse programmis selles arvutis: vt [Ava stseen teises programmis](topic:render-open-in). Enscape'i või Twinmotion'i pistikprogrammi ega reaalajas linki ei ole loodud. FBX- ja Datasmith-vormingutel ei ole avaldatud spetsifikatsiooni, seega BimCraft neid ei kirjuta; glTF on avatud tee.
:::
