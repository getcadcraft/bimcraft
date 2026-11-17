---
title: Uksed ja aknad
summary: Pane uksed ja aknad joonistatud seintesse. Osuta seinale, vaata avanemist ja kaugusi nurkadeni, klõpsa; seinaava lõikab end ise välja.
keywords: uks, uksed, aken, aknad, ava, avanemine, sarnikud, käepoolsus, pööra, liuguks, varjuks uks, kahe tiivaga uks, avanev aken, liuguaken, fikseeritud aken, akna alumine serv, päis, kokkupandav uks, garderoobiuks, prantsuse uksed, laudauks, külgaknad, sissepääsu uks, markiisaken, panoraamaken, ülemine aken
from: 4d8ac009
---

## Mida teed

Pane uksed ja aknad seintesse, mille joonistasid ([Joonista seinad](topic:draw-walls)). Osuta seinale ja uks või aken näitab, kuhu see läheb, mis suunas see avaneb ja kui kaugel on iga nurgast. Klõpsa, ja ava lõigatakse seinast plaanil ja 3D-s ise välja.

## Paiguta uks

1. Kui {{ui:Joonista}} on sisse lülitatud, klõpsa {{ui:Uks}} (või vajuta {{key:D}}).
2. Vali tüüp: **Ühe tiivaga uks**, **Kahe tiivaga uks**, **Liuguks**, **Varjuks uks**, **Garaažiuks**, **Kokkupandav garderoobiuks**, **Prantsuse uksed**, **Lauduks (seinal)** või **Sissepääsuuks külgaknaga**. Selle tavaline suurus täidab **L** ja **K**; vali teine kõrvalolevast suuruste nimekirjast või sisesta teised, näiteks `2'-8"` või `800`. Nimekiri pakub ka selle mudeli ukseperekondi (vt [Perekonnad ja nende suurused](topic:families)).
3. Osuta seinale. Ukse sümbol liigub koos kursoriga mööda seina ja plaanil näidatakse kaugust iga selle näo otsast.
4. Uks avaneb selle seina poolele, millel on kursor. Vajuta {{key:H}} (või klõpsa {{ui:Pööra}}), et sarnikud paigutada teisele otsale.
5. Klõpsa. Uks on paigutatud ja tööriist jääb järgmise jaoks sisse lülitatuks. Osuta seina keskele, ja uks tsentreerub ise.

Et paigutada täpsele kaugusele, osuta seinale nurga lähedal, millest mõõdad, sisesta kaugus (näiteks `2'` või `600`) ja vajuta {{key:Enter}}. Kaugus käib seina näo lähima otsa ja ukse serva vahel.

## Paiguta aken

1. Klõpsa {{ui:Aken}} (või vajuta {{key:N}}).
2. Vali tüüp: **Fikseeritud aken**, **Ühe tiivaga tõstetav aken**, **Kahe tiivaga tõstetav aken**, **Avanev aken**, **Liugaken**, **Markiisaken**, **Panoraamaken** või **Ülemine aken** ning selle **L**, **K** ja **Alumine serv** (akna alumise serva kõrgus põrandast).
3. Osuta seinale ja klõpsa, või sisesta kaugus ja vajuta {{key:Enter}}, nagu ustega. Aken asub seina välispinnal.

## Liiguta, pööra, kustuta

- Kui {{ui:Vali}} on sisse lülitatud, lohista ust või akent mööda seina. Lohista teisele seinale, et seda sinna liigutada.
- {{key:Delete}} kustutab valitud uksed ja aknad; sein sulgub.
- Seina liigutamine või kustutamine liigutab või kustutab selles olevad asjad. Kui seina algus liigub oma joone suunas, jäävad selle uksed ja aknad oma kohale.
- {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} võtavad iga paigutuse, liigutuse ja kustutuse edasi-tagasi.

## Mida ei lubata

- **See ei mahu sellesse seina.** Uks või aken on seinast laiem või ulatuks selle otsast välja. Proovi lühemat laiust või pikemat seina.
- **See on seinast kõrgem.** Alumine serv pluss kõrgus on üle seina ülemise serva.

## Mis salvestatakse

Iga uks või aken on IFC-uks või -aken oma suuruse, töörežiimi (näiteks ühe tiivaga vasakule avanev), oma suuruse tüübiga (üks tüüp iga oma perekonna suuruse kohta), `Pset_DoorCommon` või `Pset_WindowCommon` ja põhikogustega, täites IFC-ava oma seinas. Seina netopinna külgpind ja maht jätavad ava välja. Teised ehitusprogrammid avavad selle uksena seinas.

## Hea teada

- Plaanil näidatakse uksi avatuna 90° nurga all koos avanemisega, liuguksi kahe paneelina, varjuksi seina sisse libisemas, garaažiuksi katkendjoonena üle pea ning aknaid nende raami ja klaasijoontega.
- Laius on raami üldlaius; ukse tiib on laius miinus kaks külgliistu.
- Joonistatud uste ja akende kopeerimist pole veel ehitatud: paiguta teine.

## Keldri päästeaken ja kaev

Vali **Keldri päästeaken kaevuga** akna tüüpide nimekirjast. See algab 36 × 48 tollise avaneva aknana, mille alumine serv on 36 tolli korrusest kõrgemal. Kaev on seina välisküljel, vähemalt 48 tolli vaba laiusega, 36 tolli väljaulatuvusega ja põhjaga 6 tolli alumisest servast allpool. See ilmub plaanil katkendjoonena ja 3D-s kolme ülevalt avatud küljena. Kaev on akna IFC-kehas, nii et akna salvestamine, liigutamine, suuruse muutmine või kustutamine viib selle kaasa. Suuruse muutmisel jääb iga külgliistu kõrvale vähemalt 6 tolli.

Need on modelleerimise vaikeseaded, mitte päästetingimuste sertifikaat. Kontrolli eraldi tootja tegelikku vaba ava, kohalikke nõudeid, maapinda, drenaaži ja kõiki nõutavaid redeleid. Kaevu sügavus ja kõrgus on eelseadistatud mõõtmed; need ei järgi maastikku.
