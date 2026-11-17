---
title: Igasuguse kujuga põrandad, avad ja pandused
summary: Joonista põrand või plaat selle kontuuri järgi (rõdu, konsool, maandumine), lõika sellesse avasid ja joonista pandused koos maandumistega.
keywords: põrand, plaat, kontuur, rõdu, konsool, maandumine, terrass, põranda ava, auk, šaht, tühimik, pandus, kalle, ligipääsetav pandus, rattatoolipandus, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Mida teete

Tee põrandad, mis ei järgi ruume, näiteks rõdu seinte taga, ja joonista pandused korruste vahele.

## Joonista põrand selle kontuuri järgi

1. Lülita sisse {{ui:Joonista}}, vali korrus ja seejärel {{ui:Versioon}} › {{ui:Põrand piirjoonega}}.
2. Tööriistade all olevas reas vali liik (betoonplaat või puitpõrand), kasutus (põrand või maandumine), paksus ja kui kõrgel on selle ülaosa korruse suhtes (0 = sama kõrgusel kui korruse põrand; negatiivne väärtus paneb selle madalamale).
3. Klõpsa nurkadel. Tööriist haakub seinte, ruudustiku joonte ja nende ristumiskohtadega; hoia {{key:Shift}} all, et serv jääks ristsuunas. Iga serva pikkus ja pindala kuvatakse töö käigus. {{key:Backspace}} võtab viimase nurga tagasi.
4. Lõpetamiseks klõpsa esimesel nurgal uuesti, tee topeltklõps või vajuta {{key:Enter}}.

## Lõika ava

Klõpsa põrandat (3D-vaates või plaanil selle kontuuril), seejärel klõpsa aknas {{ui:Omadused}} nuppu {{ui:Lisa ava}} ja klõpsa avaus nurkadel põranda sees, lõpetades nagu eespool. Põranda aknas {{ui:Omadused}} on loetletud selle avad, igaühe juures {{ui:Kustuta}}, ning selle pindala ilma avadeta.

## Joonista pandus

1. Vali {{ui:Versioon}} › {{ui:Pandus}}. Määra selle laius ning kas see läheb **ülemisele korrusele** või **üles mõne tõusu võrra**, mille sisestad.
2. Vali, kuidas see seatakse: **kalde järgi** (algselt 1:12; pandus on nii pikk, kui tõus nõuab) või **pikkuse järgi** (teine klõps määrab pikkuse ja kalle järgneb).
3. Klõpsa pandusel jalgealal (selle alumise serva keskel) ja seejärel suunda üles. Eelvaade näitab selle pikkust, lõike ja kallet.

Üle 30 tolli (760 mm) tõus jagatakse lõikudeks, mille vahel on 5 jala (1525 mm) maandumine. Need on tavalised planeerimisväärtused, mitte sinu norm: kontrolli ehitamise paigas kehtivaid nõudeid. Pandus, mis on järsem kui 1:12, on märgitud selle aknas {{ui:Omadused}}.

## Mida peaksid nägema

- Iga põrand, ava ja pandus on üks samm: {{key:Mod+Z}} võtab selle tagasi.
- Plaanil on joonistatud põranda kontuur (ava on risti läbi joonistatud) ning pandus koos kontuuri, lõikude, maandumiste ja noolega, mis näitab üles koos kaldega.
- Joonistatud põranda omadused (liik, kasutus, paksus, ülaosa, pindala, avad) ja pandusel (laius, ülaosa, tõus, kalle või pikkus); {{key:Delete}} eemaldab kumbagi.
- Pandus ülemise korruse suunas järgib seda korrust, kui selle kõrgus muutub.
- IFC-failis: joonistatud põrand on plaat (IfcSlab, põrand või maandumine) koos väljalõigatud avadega (IfcOpeningElement); pandus on IfcRamp, mis koosneb kaldus lõikudest (IfcRampFlight) ja maandumisplaatidest, ning selle kalle ja laius on salvestatud.

:::note
Nii joonistatud põrandad jäävad sinna, kuhu need joonistasid. Tööriistaga {{ui:Põrand}} tehtud põrandad järgivad seinte nihutamisel ruume: vt [Ruumid, põrandad, laed ja katused](topic:floors-and-roofs).
:::
