---
title: Seinad ja uksed telefoni- või laserskannist
summary: Muuda ruumi skann ettepanekuteks seintest, ustest ja ruumidest, mille võtad vastu ükshaaval.
keywords: skann, telefoniskann, lidar, punktipilv, seinad skannist, uksed skannist, ruumiskann, ply, e57, las, obj, soovita
from: a4ef0f10
---

## Mida see teeb

Kui skann on avatud (punktipilv, nagu PLY, E57 või LAS, või võrk, nagu OBJ), lõikab BimCraft skanni plaanikõrgusel, pöörab selle hoonega risti ja otsib pikki, kitsaid punktijooni: need on seinad. Uksesuurune vahe kahe jooneseina vahel samal joonel muutub üheks seinaks, millel on uks. Seinad, mis sulgevad ruumi, moodustavad ruumi.

Midagi ei joonistata enne, kui vastu võtad. Seinad ja uksed tulevad ettepanekute nimekirjana (need on ettepanekurežiimi muudatused): hoia alles õiged, lükka ülejäänud tagasi, ja kõik, mis alles jääb, joonistatakse ühe Võta tagasi sammuga. Ruumid ilmuvad ise.

## Mida see kontrollib

Seinad, mis ei sulgu, seinajooksud, mis on lühemad kui sein on paks, ning ukse suurusega vahe ilma seinata ümbritsetuna on teatatud probleemidena koos asukohaga, et saaksid skannil seal vaadata.

## Kontrollimata, kuni kontrollitud

Skannist vastu võetud seinad, uksed ja ruumid on märgitud kontrollimatena: katkendlik kast ja „?“ plaanil, kuni märgid need kontrollituks. Vt [Elementide märkimine kontrollituks või kohapeal kontrollituks](topic:verification).

## Mida see ei suuda

- See leiab seinad, mis kulgevad kahes risti asetsevas suunas. Diagonaalset või kaarjat seina ei leita.
- Korrus korraga. Aknaid ei leita (aken on lõikes vahe ainult siis, kui lõige on akna aluse kõrgusel).
- Seda on proovitud genereeritud ruumiskannidel ja võrkudel, mitte veel päris telefoniskannidel. Kui hästi see päris skanni puhul toimib (triiv pika kõnnaku jooksul, seinte ääres mööbel, klaas, avatud uksed), ei ole teada, ja järgmine samm on seda päris skannidel häälestada. Kontrolli iga ettepanekut skanniga enne, kui selle vastu võtad.
