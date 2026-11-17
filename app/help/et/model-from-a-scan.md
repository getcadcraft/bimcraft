---
title: Mudel skaneeringust
summary: Lühike juhend laserskaneeringust seinteni: ava punktipilv uue hoone kõrval, joonda see korrusega ja jälgi selle seinad plaanil.
keywords: skaneering, laserskaneering, punktipilv, tegelik ehitis, olemasolev hoone, mõõdistus, jälgimine, skaneeringust BIM-ini, mudel skaneeringust, lõige, joondamine, risti, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Mida sa teed

Joonista olemasolev hoone selle laserskaneeringu järgi: seinad seal, kus skaneering neid näitab, õigel korrusel, üksteise suhtes risti.

## Sammud

1. **Hoone, kuhu joonistada.** {{ui:Fail}} › {{ui:Uus hoone}}, mitme korrusega, nii mitu kui hoonel on (korruseid saab hiljem lisada, vt [Krunt, sellel asuv hoone ja selle korrused](topic:site-building-and-levels)). {{ui:Joonista}} lülitub sisse.
2. **Skaneering.** {{ui:Näita}} › {{ui:Punktipilv}} ja vali fail (LAS, LAZ, E57, PLY, PCD, PTX või XYZ: vt [Punktipilve näitamine mudeli kõrval](topic:point-clouds)). Pilv ilmub 3D-vaatesse ja plaanil näidatakse selle **lõiget**: skaneeritud punktid 1200 mm (4 feet) korrusest kõrgemal, punktidena. See on kõrgus, kus seinad, uksed ja aknad on kõige paremini loetavad.
3. **Joonda korrusega.** Ava mudeliriba menüü {{ui:Skaneering}} ja klõpsa {{ui:Joonda selle põrand sellele tasandile}}: pilv liigub üles või alla, kuni skaneeritud põrand jääb näidatud tasandile. Kontrolli, et lõige lõikab nüüd seinu.
4. **Risti hoonega.** {{ui:Skaneering}} › {{ui:Pööra see hoonega risti}} pöörab pilve nii, et lõikes olevad seinad jooksevad mööda plaani telgi ning seinad, mille joonistad {{key:Shift}} all hoides, joonduvad skaneeringuga. Pööramine toimub leitud seinte keskkohas, nii et lõikesse jäänud puud või naabri sein ei pööra skaneeringut kõrvale. Joonda enne põrand: siis lõikab lõige seinu.
5. **Jälgi seinad.** Vali {{ui:Sein}} ja klõpsa mööda punkte: tööriist püüdub skaneeritud punktidele (püügimärk on väike romb) ja ka sinu joonistatud seintele. Sein joonistatakse oma keskjoonele, seega klõpsa mööda kahe punktirea keskjoont, mille sein jätab. Seina paksuse saad sisestada, valides enne seinatüübi. Seejärel lisa uksed ja aknad seal, kus lõige näitab avasid.
6. **Järgmine korrus.** Vali plaani korruste loendist järgmine korrus: lõige järgib korruse lõikekõrgust. Joonda põrand selle korrusega uuesti ainult siis, kui skaneeringu põrandad ei asu sinu korruste kohal.

## Mida peaksid nägema

- Lõige muutub, kui vahetad korrust, ja paksem lõige ({{ui:Skaneering}} › {{ui:Lõike paksus}}) näitab rohkem punkte seal, kus skaneering on hõre.
- {{ui:Skaneering}} › {{ui:Võta joondus tagasi}} paneb pilve tagasi kohta, kus see avamisel oli. Joondamine liigutab pilve ainult vaates: seda ei salvestata IFC-faili ja sinu joonistatud seinad jäävad paigale. Joondus läheb pilvega kaasa, kui muudad {{ui:Paiguta}} või {{ui:Ühikud}} või avad mõne teise mudeli.
- {{ui:Skaneering}} › {{ui:Näita lõiget plaanil}} peidab või näitab punkte.

:::tip
Suured skaneeringud: plaan joonistab kuni 60 000 lõike punkti ja 3D-vaade mõne miljoni punkti kogu pilvest, mõlemad ühtlaselt üle skaneeringu valitud, nii et suur fail jääb kiireks. Jälgimiseks joonistusrakenduses kasuta pilveriba nuppu {{ui:Jälgi rakenduses CadCraft}}.
:::
