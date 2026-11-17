---
title: Liigu mudelipuu abil
summary: Sirvi IFC-mudelit projekti, asukoha, hoone, korruse ja ruumi järgi, elemendid liigi kaupa grupeerituna; märgi ruudud, et näidata ja peita; klõpsa reale valimiseks, topeltklõps suumib.
keywords: mudelipuu, puu, struktuur, ruumiline struktuur, sirvija, ülevaade, navigaator, korrus, tasand, põrand, ruum, rühm, klass, peida, näita, vali, suumi
from: 69de4ab7
---

## Mida sa teed

Vaata, kuidas mudel on kokku pandud, ja jõua iga elemendini ilma 3D-s otsimata: hoone, selle korrused, iga korruse ruumid ja nendes olevad elemendid, liigi kaupa grupeeritud (seinad, uksed, plaadid …).

## Sammud

1. Ava IFC-mudel. {{ui:Mudelipuu}} avaneb vasakul kuni korrusteni.
2. Klõpsa rea kõrval olevat noolt, et see avada või sulgeda. Korrus hoiab kõigepealt oma ruume, seejärel elemente liigi kaupa koos arvuga. Osadest koosnev element, nagu trepp, hoiab oma osi.
3. Eemalda rea kasti linnuke, et peita kõik selle sisu; märgi see uuesti, et näidata. Kriipsuga kast tähendab, et ainult osa selle sisust on näidatud.
4. Klõpsa rea nimel, et valida see, mida ta tähistab: üks element või kõik rühma, korruse või ruumi elemendid. {{key:Mod}}+klõps lisab valikule või võtab sealt välja.
5. Klõpsa korruse, ruumi või hoone kõrval olevat {{ui:i}} nuppu, et näha selle omadusi.
6. Topeltklõps reale suumib selle juurde.

## Mida peaksid nägema

- Kui valid elemendi 3D-vaates, avaneb puu selle juurde ja märgib seda.
- Peidetud elemendid on läbi kriipsutatud. Puu kastid ja {{ui:Näita}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) töötavad koos: vt [Peida, isoleeri ja vaata läbi elemente](topic:hide-and-isolate).
- Elemendid, mida mudel ei paiguta ühessegi korrusesse, on lõpus rühmas **Ruumilises struktuuris puudub**.
- Pikk rühm näitab korraga 200 rida; selle all klõpsa **Näita rohkem**, et ülejäänud näha.

## Klahvid

Kui rea nimi on fookuses: {{key:Up}} ja {{key:Down}} liiguvad, {{key:Right}} avab, {{key:Left}} sulgeb või läheb üles, {{key:Space}} märgib kasti, {{key:Enter}} valib.

## Levinud vead

- **Korruse kast on märgitud, aga midagi ei näidata.** Puu all olev {{ui:Korrused}} loend lülitab terved korrused ise välja: märgi ka seal.
- **Rida ei vali midagi.** Mõned read, nagu tühi ruum, ei oma joonistatavaid elemente; olekuriba ütleb seda.

## Järgmine

- [Kustuta, lõika, kopeeri ja kleebi hoone elemente](topic:edit-elements)
- [Korruste, ruumide ja servade näitamine ja peitmine](topic:storeys-and-spaces)
