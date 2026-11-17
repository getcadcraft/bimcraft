---
title: Tüübipaketid: seinatüüpide jagamine avatud failidena
summary: Salvesta seinatüübid oma kihtide, materjalide, siltide ja klassifikatsioonikoodidega ning perekonnad ühe avatud failina (lihtne JSON või IFC) ja lisa need teise projekti. Ka teise programmi IFC-failide seinatüübid saab lugeda.
keywords: tüübipakett, tüübid, seinatüüp, jagamine, eksport, import, teek, avatud vorming, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materjalid, kihid, mall, kontori standard, perekonnad
from: e4c91331
---

## Mida sa teed

Viid oma seinatüübid ühest projektist teise või annad need kellelegi, kes töötab teises programmis. Tüübipakett hoiab iga seinatüüpi koos selle kihtide, paksuste, materjalide, südamiku, õõnsuste, kihtide prioriteedi, arendustaseme, mahuandmete ja klassifikatsioonikoodidega ning kõigi lisatud perekondadega. See on avatud fail: lihtne JSON-tekst, mida kõik saavad lugeda, või IFC-fail. Miski selles ei ole seotud ühegi firma, riigi ega kontoga.

## Tüüpide salvestamine projektist

1. Ava mudeliribal **Andmed** ja vali {{ui:Type packs}}.
2. Jaotises {{ui:Save types from this project}} märgi seinatüübid, mis lisada. Projekti enda tüübid on märgitud; algustüübi võib lisada ja see lisatakse koopiana. Märgi perekonnad, kui soovid need kaasa.
3. Sisesta {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} laadib alla faili `.cctypes.json`. {{ui:Save as IFC (.ifc)}} laadib alla IFC-faili, mis sisaldab ainult tüüpe: iga seinatüüp IfcWallType-na koos oma materjalikihtide komplekti, materjalide ja klassifikatsiooniga, mis tahes BIM-programmi jaoks.

## Tüüpide lisamine projekti

1. Samas dialoogis vali {{ui:Open a pack or an IFC file…}} ja vali `.json`-pakk või `.ifc`-fail.
2. Dialoog loetleb, mida fail sisaldab: iga seinatüübi paksuse, kihtide arvu ja koodid, materjalid ja perekonnad.
3. Vali, mis juhtub {{ui:A type this project already has}} korral: **Säilita projekti oma**, **Lisa paketi tüüp koopiana** (see saab uue nime, mis lõpeb „(2)“), või **Asenda (ainult siis, kui ükski sein seda ei kasuta)**.
4. {{ui:Add to the project}}. Dialoog loetleb, mis lisati, kopeeriti, asendati või jäeti alles. See on üks tagasivõtmise samm.

Uued tüübid on kohe seina tööriista tüüpide loendis.

## Põranda-, katuse- ja laetüübid

Salvestatavate tüüpide loend sisaldab ka projekti põranda-, katuse- ja laetüüpe ning nende algustüüpe (märgitud Floor, Roof, Ceiling). Pakk võib kanda kõiki nelja liiki; iga tüüp nimetab oma IFC-klassi (IfcWallType, IfcSlabType, IfcCoveringType). Põranda-, katuse- või laetüüpi, mida elemendid kasutavad, ei asendata paketist: muuda seda tüübiredaktoris.

## Üks tüüp teegi elemendina

Märgi täpselt üks tüüp ja vali **Save as a Library item…**. See salvestab faili `.cctype.json`: teegi elemendi, mis on tüüpide liigist ja hoiab seda ühte tüüpi (selle kihid, materjalid, LOD ja klassifikatsioonikoodid). Laadi see teeki üles, et seda jagada. **Open a pack or an IFC file** loeb ka sellist elementi ja lisab selle tüübi projekti nagu paketi.

## Hea teada

- IFC-faili teisest programmist saab siin samuti avada. Iga selle seinatüüp, millel on materjalikihid, loetakse: nimi, kihtide materjalid ja paksused ning mis tahes õõnsus on faili enda omad. Millised kihid on südamik ja mis iga kiht teeb (viimistlus, konstruktsioon, soojustus), on oletatud, tüüp on märgitud **(oletatud)** ja seda tuleks kontrollida seinatüübi redaktoris. Seinatüüp ilma kihtideta jäetakse välja ja nimetatakse.
- Materjal, mis projektil juba on, säilib sellisena. Uus materjal, mille nimi on võetud, saab nime lõppu „(pakk)“.
- Tüüpi, mida seinad kasutavad, ei asendata kunagi paketist. Muuda seda seinatüübi redaktoris, mis liigutab selle seinu korrektselt.
- Ühel seinal määratud kood ei liigu kaasa: see kuulub sellele seinale. Tüübil määratud kood liigub.
- Fail, millel on väli, mida formaat ei tunne, kihil, mille materjal puudub, või miski, mis ei ole lihtne tekst, lükatakse tagasi ja teade ütleb, kus ja miks.
- Ei ole veel ehitatud: põranda-, katuse- ja laetüübid (selles versioonis neil tüüpe pole: igaühel on oma paksus), ukse- ja akna tüübid peale perekondade ning viirutused või värvid teise programmi failist.
