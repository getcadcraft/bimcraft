---
title: Ruumid ja ruumieraldajad
summary: Vali ruum, et seda nimetada ja nummerdada ning lugeda selle pindala, ümbermõõtu ja mahtu. Joonista ruumieraldaja kohta, kus kaks ruumi kohtuvad ilma seinata nende vahel.
keywords: ruum, ruumid, ruumieraldaja, eraldusjoon, IfcSpace, nimi, number, pindala, ümbermõõt, maht, avatud plaan, ruumi jagamine, köök ja elutuba, piiritlemata
from: d4c1d66b
---

## Mida sa teed

Nimeta seinte moodustatud ruumid ja jaga avatud ruum kaheks ilma seinata.

## Kus tööriistad on

- Lindipaigutused: {{ui:Arhitektuur}} › **Ruum ja pindala** › {{ui:Ruum}} ja {{ui:Ruumi eraldaja}}.
- Klassikaline paigutus: joonistusriba › menüü {{ui:Ruumid}}.
- Mis tahes menüüstiil: käsud on nimega Ruum ja Ruumi eraldaja; käsupalett leiab need üles.

## Sammud

1. Joonista seinad. Iga suletud seinaahel on juba ruum: BimCraft loob selle, nummerdab selle ja annab sellele pindala juba joonistamise ajal.
2. Vali {{ui:Ruum}}. Liiguta plaanil: osuti all olev ruum särab oma pindala, ümbermõõdu ja mahuga.
3. Ruumide kiireks nimetamiseks sisesta esmalt reale {{ui:Nimi}} ja {{ui:Number}}, seejärel klikki ruumis. Number suureneb järgmise ruumi puhul ühe võrra (101, 102; A-09, A-10).
4. Või klikki lihtsalt ruumile: see valitakse ja {{ui:Omadused}} näitab selle nime, numbrit, pindala, ümbermõõtu, mahtu ja silti.
5. Avatud ruumi jagamiseks vali {{ui:Ruumi eraldaja}} ja klikki kahel punktil: seinast seinani või seinast teise eraldajani. Ahela jaoks jätka klikkimist; Enter, Esc või topeltklõps lõpetab selle.

## Mida eraldaja teeb

- See piiritleb ruume nagu paksuseta sein. Kahe ruumi pindalad liituvad täpselt selleks ruumiks, mis need varem olid.
- Ruum, mis hoiab vana ruumi keskosa, säilitab oma nime ja numbri. Teine on uus.
- Eraldaja, mis peatub lahtiselt ja ühes otsas millegagi ei puutu, ei jaga midagi. Pikenda seda, siis jagab.
- Eraldaja osa, mis jääb seina sisse, jäetakse arvestamata, nii et saad haakuda seina keskjoontele.
- Vali eraldaja ja eemalda see klahviga Delete: kaks ruumi muutuvad taas üheks. Võta tagasi paneb selle tagasi.

## Kui klikitud kohas ruumi pole

Olekuriba ütleb seda: seinad seal ei sulgu. Sule vahe või joonista eraldaja selle üle. Midagi ei keelduta; lihtsalt suletud ruumi veel pole.

## IFC-s

Ruum on IfcSpace oma numbri (Name), nime (LongName) ja Qto_SpaceBaseQuantities'iga: NetFloorArea, NetPerimeter, Height, NetVolume. Maht on pindala korrutatud kõrgusega kuni kõrgemal oleva tasandini.

Ruumieraldaja on IfcVirtualElement, olem, mida IFC kasutab piiri jaoks, mis pole ehitatud. Sellel on joon ja kehakuju puudub, nii et teine programm ei loe seal seina ega arvesta selle järgi midagi.

## Veel tegemata

- Kaarjad eraldajad.
- Kaldus lage järgiv ruum: maht on alati pindala korrutatud tasandi kõrgusega.
- Ruumipiiri seosed (IfcRelSpaceBoundary) ei ole kirjutatud, ei seinte ega eraldajate jaoks.

Vaata ka [Ruumi ja pindala sildid](topic:room-and-area-tags), [Alad ja alapiirid](topic:areas-and-area-boundaries).
