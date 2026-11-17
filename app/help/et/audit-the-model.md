---
title: Auditeeri mudel: ruumid, sildid, LOD, kokkupõrked ja liidesed
summary: Käivita valmis kontrollid märgistamata ruumide, puuduvate siltide, elementide kohta, mis on alla projektietapi nõutava arendustaseme (LOD), erialade vaheliste kokkupõrgete ja LOD 350 liideste kohta. Ainult soovitus: midagi ei blokeerita.
keywords: audit, kontroll, märgistamata ruum, puuduv silt, märgis, lod, arendustase, verstapost, etapp, kokkupõrge, eriala, koordineerimine, liides, lod 350, ava, ülepakk, päis, läbiviik, hülss, toru, kanal, probleemid, kontrollaruanne, soovituslik
from: cc83a14d
---

## Mida teed

Vaata kogu mudel ühe korraga üle enne selle väljaandmist. Audit käivitab valmis reeglikomplektid ja paneb leiud loendisse {{ui:Probleemid}} soovitusena. Midagi ei blokeerita: parandad leiu või aktsepteerid selle põhjendusega, nagu iga teise probleemi puhul.

## Sammud

1. Ava vasakpaneelil {{ui:Mudeli kontrollid}} › {{ui:Audit}} või {{ui:Tööriistad}} › {{ui:Auditeeri mudel…}} (kirjutatuna: `AUDIT`).
2. Vali {{ui:Projekti etapp}}. See on sama etapp nagu joonise üksikasjades.
3. Märgi käivitatavad reeglikomplektid.
4. Klõpsa {{ui:Käivita audit}}.
5. Loe iga reeglikomplekti rida ja seejärel ava {{ui:Ava probleemide loend}}. Klõps leiul valib tema elemendi.
6. {{ui:Kontrolliaruanne}} laadib aruande alla: iga leid, kes mida aktsepteeris ja miks, ning käivitatud reeglikomplektid.

## Reeglikomplektid

- **Märgistamata ruumid**: ruum ilma nimeta või ruum, mida ikka nimetatakse sellena, nagu programm selle nimetas („Room 3“).
- **Puuduvad sildid**: uks või aken ilma märgita, ruum ilma numbrita, elektriseade ilma tähiseta.
- **Elemendid alla etapi LOD**: iga sein, põrand, lagi, katus, uks ja aken, mille LOD on madalam kui etapp nõuab. Element loeb oma tüübi LOD-märki; väljal kinnitatud element on LOD 500. Elemendid ilma sildita loetakse ühte märkusesse kokku, sest neid ei saa kontrollida.
- **Erialade vahelised kokkupõrked**: kahe eriala (arhitektuur, konstruktsioon, mehaanika, santehnika, elekter, IFC klassi järgi) elemendid, mis põrkuvad. Seinadele toetuv katus ei lähe arvesse.
- **LOD 350 liidesed**: iga uks ja aken asub oma seina avas, ava mahub seina sisse, kaks ava ei kattu, ava, mis on lubatust laiem, on ülepaku või päisega (element selle kohal või märkus ukse või akna juures), ja toru, kanal või kaabliredel, mis läbib seina või plaadi, on seal avaga. Leide loetakse erialapaari kohta.
- **Tuvastatud elemendid, mida keegi pole kontrollinud**: seinad, uksed, aknad ja ruumid, mis on loetud PDF-ist, skaneeringust või joonisest ning mis on veel kinnitamata. Vt [Märgi elemendid kontrollituks või välitöös kinnitatuks](topic:verification).

## Etapi nõutav LOD

Ava {{ui:Iga etapi nõutav LOD}}, et näha või muuta tabelit.

:::note
Tabel ja ülepaku laius on CadCrafti algväärtused. Need ei tulene standardist: projekt määrab LOD etappide kaupa oma BIM-i teostusplaanis. Sea need enda omadeks. Büroo saab määrata tabeli kõigile jaotises Sätted › Default Policies › Audit; muudatus jaotises Audit jääb sellesse arvutisse.
:::

## Hea teada

- Ülepakku saab märkida modelleerimise asemel: vali uks või aken ja täida omadustes jaotise {{ui:Kinnitamine}} all {{ui:Ülepaku või päise märkus}}.
- Toru, mis läbib tegelikku ava, ei lõika pinda ega ole teatatud. Toru, mis on mudelis otse seinast läbi viidud, on teatatud.
- Kokkupõrke kontroll peatub mõne sekundi pärast väga suurel mudelil ja ütleb seda. Kahe valitud komplekti täielikuks kontrolliks kasuta [Leia elementide kokkupõrked](topic:clash-check).
- Käivita audit pärast mudeli muutmist uuesti. Aktsepteeritud leiud jäävad aktsepteerituks, kui nende numbrid ei muutu.
- See loeb mudelit. See ei asenda vastutavate inimeste koordineerimisülevaatust.

## Edasi

- [Kontrolli mudelit levinud probleemide suhtes](topic:model-checks)
- [Leia elementide kokkupõrked](topic:clash-check)
- [Märgi elemendid kontrollituks või välitöös kinnitatuks](topic:verification)
