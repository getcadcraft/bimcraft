---
title: Pošiljanje modela v program za upodobitev
summary: Shranite, kar prikazuje 3D pogled, kot model glTF (.glb) z materiali, teksturami in svetilkami, za upodobitvene in vizualizacijske programe, ki berejo glTF.
keywords: glb, gltf, gl transmission format, izvoz, upodabljanje, upodobitev, vizualizacija, v realnem času, archviz, materiali, teksture, svetilke, luči, sredstvo, sredstvo po meri
from: e62d57dc
---

{{ui:Za upodobitev}} na orodni vrstici shrani, kar prikazuje 3D pogled, kot eno datoteko **.glb** (glTF 2.0, odprt format skupine Khronos Group). Upodobitveni programi, ki berejo glTF, jo odprejo z materiali in svetilkami modela; Twinmotion med datotekami geometrije, ki jih uvaža, navaja glTF in GLB ter ohrani njune luči (dokumentacija Epic, „Importing geometry in Twinmotion“): uporabite {{ui:Za upodobitev}} in tam uvozite .glb. Nič se ne naloži: datoteka je ustvarjena na tem računalniku.

## Shranjevanje

1. Odprite model IFC in nastavite 3D pogled: skrijte etaže, elemente ali povezane modele, ki jih ne želite, in [pobarvajte materiale](topic:paint-materials), ki jih želite videti.
2. Kliknite {{ui:Za upodobitev}} (ali vnesite `GLB`).
3. Datoteka se prenese kot „<model name>.glb“. Vrstica stanja pove, koliko trikotnikov, materialov in svetilk vsebuje.

## Kaj datoteka vsebuje

- **Geometrija** vsakega elementa, ki ga prikazuje 3D pogled, v metrih, z Y navzgor (lastne osi glTF). En predmet na etažo in material, imenovan „Level 1 — Brick, red“, da lahko v upodobitvenem programu izberete material in ga zamenjate s svojim.
- **Materiali:** vsaka barva z videzom, ki ste ga izbrali za njo v [Upodobitev](topic:render) (mat, saten, sijoč, kovina, steklo …), in vsak pobarvan material iz knjižnice z barvo, hrapavostjo in **teksturo** (njena slika je v datoteki, prilagojena njeni pravi velikosti: opeka je velika kot opeka). Steklo je prosojno.
- **Svetilke:** vsaka svetilka, ki je vklopljena v Upodobitev › Svetilke, kot točkovna ali reflektorska luč z svetlostjo (lumni pretvorjeni v kandele), barvo in kotom žarka.
- **Kje je lokacija:** zemljepisna širina in dolžina lokacije sta zapisani v datoteki za sklic. Upodobitveni programi imajo svoje sonce: kraj vnesite vanje.

## Kaj izpusti

- Prerezni rez (vključeni so celotni elementi) in elementi, prikazani prosojno (ti so izpuščeni).
- Predmeti po posameznih elementih (namesto njih en predmet na etažo in material), lastnosti IFC, mape izboklin (bump), shranjeni pogledi in posneti sprehodi.
- Robovi in ozadje.

## Enscape in drugi vtičniški upodobitveni programi

Enscape deluje znotraj drugega programa za načrtovanje in nima datoteke, ki bi odprla cel projekt. Dva načina:

- Odprite **IFC** modela (Datoteka › Shrani) v programu, v katerem deluje Enscape; večina jih bere IFC. Barve se prenesejo; materiali knjižnice pridejo kot njihove barve.
- Vnesite **majhen del** (pohištvo, armaturo) kot sredstvo po meri: najprej ga izolirajte, nato kliknite {{ui:Za Enscape (.gltf)}}. Knjižnica sredstev po meri v Enscapeu našteva datoteke .gltf, .obj in .fbx, ne .glb, zato ta gumb shrani isto sceno kot samostojno **.gltf** datoteko (binarni podatki in slike so v datoteki; ničesar drugega ni treba kopirati skupaj z njo). Enscape priporoča majhna sredstva (pod približno 20,000 trikotnikov).

:::note
V CadCraft Studiu lahko isto datoteko glTF (in datoteko USD) shranite tudi iz {{ui:Upodobitev}} › Pogon › **Datoteka glTF** / **Datoteka USD** ali jo odprete neposredno v programu na tem računalniku: glejte [Odpiranje scene v drugem programu](topic:render-open-in). Vtičnik ali živa povezava za Enscape ali Twinmotion še ni izdelan. Formata FBX in Datasmith nimata objavljene specifikacije, zato ju BimCraft ne zapisuje; glTF je odprta pot.
:::
