---
title: Primerjajte skeniranje z modelom in 4D-razporedom
summary: Ocenite vsak element modela glede na odprt oblak točk (izdelan, delno, manjka, ni dosežen), oglejte si odstotek izdelave, pobarvajte model glede nanjo in ob naloženem 4D-razporedu izpišite, kaj zaostaja ali prehiteva na 4D-dnevu.
keywords: skeniranje, oblak točk, napredek, odstotek dokončanja, izdelano, manjka, zaostanek za razporedom, pred razporedom, 4D, napredek na gradbišču, odstopanje, dejansko stanje, lasersko skeniranje, dron, primerjava
from: 6fdc9003
---

Odprite model IFC, odprite oblak točk poleg njega (glejte [Oblaki točk](topic:point-clouds)) in ga postavite na model. Razdelek {{ui:Primerjaj skeniranje z modelom}} se pojavi v desnem podoknu, ko je oblak odprt.

## Kaj naredi

Pritisnite {{ui:Primerjaj}}. Vsak element modela je ocenjen po svoji površini, ker to vidi skener. Šest ploskev njegove škatle je razrezanih na celice velikosti približno 20 cm; celica se šteje, če točka skeniranja leži znotraj vaše {{ui:Toleranca}} (na začetku 50 mm) od ploskve. Šteje se najboljša velika ploskev, tako da stena, skenirana z ene strani, ni kaznovana za drugo stran.

- **Izdelano**: vsaj 40 % površine je vidne.
- **Delno**: od 10 % do 40 %.
- **Manjka**: manj od tega, vendar skener doseže element (točke v 1.5 m od njega).
- **Ni dosežen**: skener tja nikoli ni prišel, zato o njem ni nič povedano.

Za izdelane in delno izdelane elemente prikaže tudi povprečni odmik točk skeniranja od površine modela ter pove, ali je element na mestu (znotraj tolerance), blizu (znotraj trikratne tolerance) ali izven (dlje). Vidi le odmike do petkratne tolerance: element, zgrajen dlje od svojega mesta, se prebere kot manjkajoč.

Povzetek poda odstotek izdelave med elementi, ki jih skener doseže, po številu in po prostornini. Delno izdelani elementi se štejejo ločeno in se ne prištevajo izdelanim.

## Glede na 4D-razpored

Ob naloženem 4D-razporedu (glejte [4D razpored](topic:4d-schedule)) rezultat upošteva tudi dan, ki ste ga nastavili na 4D-drsniku: elementi, ki so do tega dne na vrsti, a jih skener ne kaže kot izdelane, so **za razporedom**; elementi, ki še niso na vrsti, a so izdelani, so **pred razporedom**. Elementi za razporedom so navedeni v {{ui:Težave}}, tabelo pa lahko filtrirate nanje. Brez razporeda ni nič povedano o zaostankih ali prehitevanju.

## Tabela in model

Kliknite vrstico, da izberete element. {{ui:Pobarvaj model}} pobarva elemente zeleno (izdelano), jantarno (delno), rdeče (manjka) ali sivo (ni dosežen); {{ui:Lastne barve}} jih vrne nazaj. {{ui:Shrani CSV}} zapiše tabelo. {{ui:Označi ustrezne elemente kot preverjene na terenu}} označi vsak element, ki je viden kot izdelan in znotraj tolerance, kot preverjen na terenu (LOD 500, metoda skeniranje), v enem koraku, ki ga lahko razveljavite. Glejte [Označevanje elementov kot preverjenih ali preverjenih na terenu](topic:verification).

:::warning
Ta primerjava primerja škatlo vsakega elementa s točkami skeniranja znotraj tolerance. To **ni geodetski posnetek, predizmera ali podlaga za plačilo**. Element, skrit za skeniranim (stena za oblogo, plošča pod talno oblogo), deli svojo površino in se lahko prebere kot izdelan; ukrivljen ali nagnjen element ima škatlo večjo od svojega telesa in se lahko prebere kot delno ali manjkajoč. Preden ukrepate, si oglejte seznam. Komentarji o dovoljenjih in zapiski o napredku niso del tega: ostanejo v stolpcih, v katerih jih hranite.
:::

Pomočnik lahko izvede isto primerjavo z orodjem {{ui:Primerjaj skeniranje z modelom}}; v modelu ne spremeni ničesar.
