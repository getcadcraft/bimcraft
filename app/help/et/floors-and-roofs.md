---
title: Ruumid, põrandad, laed ja katused
summary: Ruumid tekivad seinte sulgemisel; ruumile või kogu hoonele saab anda põranda ja lae ning seintele puusa- või viilkatuse. Need kõik järgivad seinte nihutamist.
keywords: ruum, ruumid, ruumala, pindala, ümbermõõt, põrand, plaat, aluspõrand, lagi, katus, puusakatus, viilkatus, kalle, ülekanne, räästas, harjajoon, oru, 6/12
from: 1fb1813c
---

## Mida teete

Viimistle hoone kest. Ruumid tekivad seintest endast; põrandad, laed ja katus valmivad ühe klõpsuga. Kuna need tuletatakse seintest, järgivad need seinte nihutamist.

## Ruumid

Iga joonistatud seintega suletud ruum on ruum. See ilmub kohe, kui viimane sein selle sulgeb, koos numbriga (101, 102 … esimesel korrusel, 201 … järgmisel) ja nimega (**Room 1**, **Room 2** …). Selle pindala kuvatakse plaanil keskel.

- Kui {{ui:Vali}} on sisse lülitatud, klõpsa ruumi sees, et seda valida. Aknas **Omadused** saad muuta selle **nime** (näiteks `Köök`) ja **numbrit**; pindala ja ümbermõõt on kuvatud.
- Kui kustutad kahe ruumi vahelise seina, muutuvad need üheks ruumiks; kui joonistad ruumi üle seina, jaguneb see kaheks. Ruum säilitab oma nime ja numbri, kui seda ümbritsevad seinad liiguvad.
- Ruumi ei saa eraldi kustutada: see on ruum, mille seinad moodustavad.

Pindalad mõõdetakse seinapindade sees. Ruumid salvestatakse IFC-ruumidena koos põrandapindala, ümbermõõdu, kõrguse ja ruumalaga, et loendid neid kasutaksid (vt [Koguste liitmine, elementide loetelu ja ruumide loend](topic:quantity-totals)).

## Põrandad

1. Klõpsa {{ui:Põrand}}.
2. Vali **See ruum** või **Kogu hoone**, **liik** (puitpõrand või betoonplaat) ja paksus.
3. Osuta ruumi sisse (või kuhu tahes hoone sisse). Ala, mida põrand kataks, on esile tõstetud koos pindalaga.
4. Klõpsa. Põranda ülaosa on korruse põrand; see läheb alla oma paksuse võrra. Kogu hoone põrand ulatub seinte välispindadeni.

## Laed

1. Klõpsa {{ui:Lagi}}.
2. Vali **See ruum** või **Kogu hoone** ja selle **kõrgus** põranda kohal.
3. Osuta seest ja klõpsa.
4. Et näha seda alt, koos selle ruudustiku ja valgustitega, lülita plaan lae plaanvaatele: vt [Vaated, vaate ulatused ja oma lehed](topic:views-and-sheets).

## Katus

1. Korrusel, mille seinad kannavad katust, klõpsa {{ui:Katus}}.
2. Sisesta **kalle** tõusuna 12 kohta (`6/12`) või kraadides (`30`), ja **ülekanne**.
3. Vali **otsad**: **Puusakatus** (kõik küljed on kaldu), **Viilud lühikestel külgedel** või **Viilud pikkadel külgedel** (neljatahulise hoone puhul) või **Pultkatus**.
4. Osuta hoone sisse: räästajoon ja harjajoon kuvatakse plaanil. Klõpsa.

Katus asetseb seinte peal, nendest kõrgemal korrusel, ja selle alumine pind ühtub seinte välispinnaga. Viilude otsad täidetakse viilseinaga, mis on sama paks kui all olev sein. L-, T- või U-kujulise hoone katusel on puusakatus, mille tiivad kohtuvad orgudes.

## Muuda neid

Vali põrand, lagi või katus (3D-vaates, mudelipuus või katus klõpsates selle kontuuri sees ülemisel korrusel) ja muuda seda aknas **Omadused**: põranda liiki, paksust ja ülaosa kõrgust korruse kohal; lae kõrgust, paksust ja **muster** (ruudustik, mida lae plaan sellele joonistab: puudub, 600 × 600, 600 × 1200, 2' × 2' või 2' × 4'); katuse kallet, ülekannet, otsi ja paksust. Iga muudatus on üks tagasivõtmise samm.

## Põranda, lae või katuse tüüp kihtidega

Põrandale, laele ja katusele saab anda **tüübi**, nagu seinale: nimega kihtide koostis, kus igal kihil on oma materjal ja tegelik paksus.

- **Paigutamisel.** Tööriistadel Põrand, Lagi, Katus ja Joonista põrand on oma reas loend **Tüüp**. **Ilma tüübita** paigutab elemendi nagu varem, oma paksusega. Tüüp paigutab elemendi nii paksuna, kui on tüübi kihid kokku.
- **Hiljem.** Vali põrand, lagi või katus ja vali aknas Omadused **Tüüp**. Element jääb samaks elemendiks: selle asukoht, ruum ja andmed säilivad ning midagi ei joonistata uuesti. Muutuvad ainult tüüp, paksus ja materjal. Nii muutub visandi staadiumis element täpsustatuks: asenda üldine tüüp päris tüübiga.
- **Muuda tüüpi…** avab tüübi redaktori: kihid **ülevalt** alla, südamik, iga kihi funktsioon ja tüübi LOD-silt. Salvestamine muudab ühe sammuga kõiki selle tüübi elemente ning üks tagasivõtmine võtab muudatuse tagasi. Stardi tüübi muutmisel salvestatakse selle koopia sinu oma tüübina.
- Kui elemendil on tüüp, ei saa selle **paksust** sisestada käsitsi: see on tüübi oma. Muutmiseks vali teine tüüp või **Ilma tüübita**.

Stardi tüübid on iga liigi kohta üks **üldine** tüüp (üks kiht üldist materjali, märgistatud LOD 200) ja kaks kihilist (märgistatud LOD 300): palkidest tala-põrand ja betoonpõrand kuivvalukihiga; puitkatus ja betoonist lametikatus; kipsplaatlagi ja rippuv plaatlagi. Need on algväärtused, mitte katsetatud konstruktsioonid: enne nende kasutamist kontrolli kihte.

Loend **Kihid: pindala ja ruumala** näitab iga kasutuses oleva tüübi iga kihti; vt [Loendid, mõõtmed ja PDF](topic:plan-schedules-and-pdf). Põranda-, katuse- ja laetüübid liiguvad projektide vahel tüübipaketi või teekide elemendina; vt [Tüübipaketid](topic:type-packs).

## Hea teada

- Seinte liigutamine, lisamine või kustutamine teeb nende kohal olevad ruumid, põrandad, laed ja katuse uuesti.
- Katus sobib igasuguse kontuuriga. Kui tahad igale seinale oma kalle, viilu- või pultotsa, tõstetud ploki, katusealust ja pealisplaati või joonistada ühe katuseplaani, vt [Katused: kalle igale seinale, viilud, pultkatused ja katuseplaanid](topic:roofs).
- {{key:Delete}} kustutab valitud põranda, lae või katuse.
