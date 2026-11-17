---
title: Üleujutuse, tuule või maavärina esitamine hoones
summary: Vesi tõuseb läbi ruumide, tuulerõhk mõjub igale korrusele või maavärin raputab korruseid. Esitus käib plaanil või vaatel ajaliuguri abil. Lihtsad mudelid, kus on loetletud eeldused; need ei ole koodikontroll ega konstruktsioonilahendus.
keywords: oht, üleujutus, tuul, maavärin, seismiline, triiv, kõikumine, baaslõikejõud, veetase, kliima, stsenaarium, merepinna tõus, esitus, korrus, periood
from: ff0d34d1
---

Jaotis {{ui:Ohu esitus}} vasakpoolsel paneelil esitab avatud IFC-mudelil ohu. Mudelis midagi ei muudeta.

:::warning
Need on **lihtsad mudelid, et näha, mida oht selle paigutusega teeb**, mitte üleujutusuuring, tuulenormi kontroll ega konstruktsioonilahendus. Iga tulemus loetleb oma eeldused.
:::

## Üleujutus

Määrake kõrgeim veetase kõige madalamast põrandast kõrgemal ning minutid, mille jooksul vesi tõuseb, püsib ja langeb. Vesi siseneb ruumi läbi ava, mille alumise serva ta on ületanud, ning ruumid, mis on vee alla jäävate avade kaudu ühendatud märgade ruumidega, seisavad samal tasemel (kvasistaatiliselt). Tabel näitab, millal iga ruum esmakordselt märjaks saab ja kui sügavalt; plaan esitab selle. Sisestage suurim veekogus, mida ruum võib võtta, ja selle ületavad ruumid on hoiatused. **Kliimastsenaariumid:** laadige oma stsenaariumifail (JSON või CSV, kus on aasta, merepinna tõus ja üleujutustegur) ja valige aasta. Või lülitage sisse lisandmoodul Kliimastsenaariumid ning valige stsenaarium ja aasta: üleujutus jookseb kaks korda, olevik kõrvuti tulevikuga (vt „Kliimastsenaariumid: 2050. ja 2080. aasta üleujutus, kuumus ja metsatulekahju“). Liigid Metsatulekahju kokkupuude ja Kuumus: tuleviku ilmafail asuvad samas loendis.

## Tuul

Rõhk järgib ½ρV², kiirus tõuseb kõrgusega; jõud korrusel on see rõhk korrutatud puhanguteguri, kahe rõhutegurite, laiuse ja korruse kõrgusega. Saate lõikejõu, kummutava momendi ja kõikumise.

## Maavärin

Nihkehoone: mass igal korrusel (põrandaplaan × kilogrammi ruutmeetri kohta, mille määrate), sama jäikus igas korruses, sobitatuna esimese perioodiga, mille annate (kui jätate tühjaks, on see kümnendik sekundit korruse kohta, ja programm ütleb seda), vaigistus ning määratud maapinnaliikumine (impulss või filtreeritud müra) valitud tippkiirendusega. Tulemus on iga korruse triiv, korruste kiirendused ja baaslõikejõud; vaade esitab kõikumise, joonistatuna suuremana kui see tegelikult on. Sisestage lubatud triivisuhe ja korrused, mis seda ületavad, on hoiatused. See on elastne: midagi ei paindu ega pragune.

## Korruste jäikus analüüsiraamistikust

Maavärina või tuulekõikumise korral valige jäikuse allikaks perioodi sisestamise asemel **Analüüsiraamistik**. Iga korrust lükatakse külgsuunas järjest, raamistik (talad, postid, diagonaalsidemed, plaadid) lahendatakse ning korruste jäikus koos kõigi osade toimimisega juhib käitust. Kaal on elementide oma ning põrandakoormus ruutmeetri kohta, mille määrate iga korruse plaani kastis. Näidatakse tegelikku esimest perioodi. See on elastne: midagi ei paindu ega pöörata; pöördumist ei modelleerita. Tuule korral on korrusejõud endiselt eeldatud (ülalpool kirjeldatud astmeline profiil, teie puhangutegur ja fikseeritud rõhutegurid, mitte tuulenorm); kõikumine tuleb raamistikust, lahendades raamistiku täieliku jäikusmaatriksi nende jõudude vastu. Mudel vajab IFC-d, millel on raamistik, mida vahekaart Analüüs suudab lugeda.

## Ühikud

Veesügavused, korruste kaupa kõikumine ja triiv, kaugused ja pindalad kuvatakse valitud {{ui:Ühikud}} ühikutes. Jõud (kN), ajad ja kiirendused säilitavad oma ühikud ning väärtus, mille sisestate kastis, mis on märgitud meetrites, jääb meetritesse. Sama kehtib evakueerimise, päevavalguse, küte- ja jahutuse ning sisustuse tulemuste kohta: pikkused, pindalad ja mahud järgivad teie valikut; rõhku, voolu, temperatuuri, energiat ja võimsust ei teisendata kunagi.
