---
title: Arenduse tase (LOD) ja verstapostide kontrollid
summary: Määra elementidele arenduse tase, vaata, kust see pärineb, kontrolli mudelit verstaposti nõutava LOD-taseme järgi ning paranda puuduvad sildid ja nimetuta ruumid. Iga kontroll annab soovitusi; midagi ei blokeerita.
keywords: lod, arenduse tase, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, verstapost, verstapostide tabel, mudeli kontrollid, puuduvad sildid, nimetuta ruumid, varajane üldine, ifc-klass, klassifikatsioon
from: 2091c79b
---

## Mida sa teed

Märgi, kui kaugele on iga element arendatud, ja kontrolli seejärel kogu mudelit selle järgi, mida projekti verstapost nõuab.

## Sammud

1. Vali element (või mitu) ja ava {{ui:Omadused}}. Leia {{ui:Arenduse tase}}.
2. Vali nimekirjast tase. Iga tase on nimetatud selle järgi, mida ta tähendab, ja iga tase hõlmab ka kõiki sellest madalamaid. Üks tagasivõtmise samm katab kogu valiku.
3. Loe, kust tase pärineb: sellest elemendist, selle tüübist või välitöödel kinnitatud märgist.
4. Mudeli kontrollimiseks ava vasakul {{ui:Mudeli kontrollid}}, seejärel {{ui:LOD-verstapostid}}. Vali verstapost ja tabel (algtabel või oma CSV- või JSON-fail, mis laaditakse {{ui:Koormus}}-nupuga).
5. Klõpsa {{ui:Kontrolli mudelit}}. Kokkuvõtted ja iga tabelirea rida näitavad, mis on jõudnud oma tasemeni ja mis mitte; leiud ilmuvad ka probleemide loendisse.
6. Jaotises {{ui:Puuduvad sildid ja nimetuta ruumid}} klõpsa {{ui:Leia need}}, muuda soovi korral ettepanekuid ja klõpsa {{ui:Rakenda}}.

## Mida peaksid nägema

- Valitud tase elemendil koos selle IFC-klassi ja klassifikatsioonikoodidega.
- Verstapostile vastavad kokkuvõtted ja read. Tabel ei muuda kunagi taseme tähendust: skaala on fikseeritud, tabel ütleb ainult, millist taset verstapost nõuab.
- „Varajases etapis üldiseks jäämine“: soovitus hoida elemendid varajases verstapostis üldised. See on ainult soovitus.

## Hea teada

- Miski siin sind ei blokeeri. Mudel, mis jääb alla verstapostile nõutava taseme, on loendis, kuid seda ei lükata tagasi.
- Taseme kolme osa (geomeetria, teave, dokumentatsioon) saab igaüks eraldi määrata; märgis näitab, kas nõue on täidetud, allpool või määramata.
