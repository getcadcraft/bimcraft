---
title: Omaduste paneeli väljad
summary: Mida tähendab iga väli paneelides Omadused, Fail, Joonis ja Kaust ning millised neist saab muuta.
keywords: omadused, väljad, atribuudid, globalid, guid, kopeeri, kopeeri väärtus, kopeeri kõik, csv, lõikelaud, seerianumber, silt, objekti tüüp, rida, express id, omadusjaotis, pset, kogused, skeem, failipaneel
from: fe55b435
---

## IFC-element

Paneeli {{ui:Omadused}} ülaosas on elemendi liik ilma eesliiteta „Ifc“ (näiteks „Door“, „WallStandardCase“, „FurnishingElement“) ja selle nimi või „Nimetu“.

| Väli | Tähendus | Muudetav |
|---|---|---|
| Name | Elemendi nimi, sageli eksportija pere- ja tüübinimi | Jah |
| Type | Elemendi tüübi nimi, kui sellel on tüüp | Ei |
| Object type | Vabateksti tüübikirjeldus, mida mõni eksportija täidab | Jah |
| Tag | Elemendi silt või märk; paljud eksportijad kirjutavad siia elemendi ID | Jah |
| Description | Vaba tekst | Jah |
| GlobalId | Elemendi püsiv 22-tähemärgiline IFC-identifikaator, sama iga sama elemendi eksportimisel | Ei |
| Line | Elemendi reanumber (`#1234`) selles IFC-failis. See muutub eksportide vahel | Ei |

Allpool on **omadusjaotised** nime järgi sorteeritult:

- Iga jaotis avaneb ja sulgub, kui klõpsad selle nimel. Esimesed kolm on avatud.
- Jaotis, mis on märgitud „(type)“, kuulub elemendi tüübile: „Tüübi omadus: muutus siin kehtib kõigile selle tüübi elementidele.“
- Koguste jaotised (pikkused, pindalad, mahud, arvud, kaalud) on ainult lugemiseks.
- Loendid ja loendatavad väärtused kuvatakse ainult lugemiseks.
- Jah/ei-väärtused kuvatakse **Yes** või **No**.
- Arvud ümardatakse kuvamiseks neljale kohale. Pikkused (pikkusomadus või koguse pikkus) kuvatakse tööriistaribal valitud {{ui:Ühikud}}-ga ja ühiku märk on kõrval. Uue väärtuse saad sisestada selles ühikus või teise ühikumärgiga (2.4 m, 8'-0"): BimCraft kirjutab faili enda numbri tagasi. Muud arvud kuvatakse nii, nagu fail need hoiab.
- Tühi väärtus kuvatakse *tühjana*. Muudetud väärtus on paksus kirjas ja selle kõrval on sinine riba.

## Väärtuse kopeerimine

Igal väärtusel paneelis {{ui:Omadused}} on selle kõrval väike kopeerimisnupp: klõpsa seda, et panna väärtus lõikelauale täpselt nii, nagu see kuvatakse, näiteks GlobalId, seerianumber või mis tahes omadusjaotise väärtus. Kopeerimine ei alusta kunagi muutmist.

Ülaosas kopeerib {{ui:Kopeeri kõik}} kõik elemendi väärtused tekstina, jaotis jaotise järel, ja {{ui:Kopeeri CSV-na}} kopeerib need ridadena: rühm, omadus ja väärtus, mida saab kleepida tabelarvutusse. Tühjad väärtused säilitatakse, et igal väljal oleks rida. See töötab samamoodi teise avatud mudeli elemendi puhul; kui on avatud rohkem kui üks mudel, algab CSV veeruga Mudel, mis nimetab faili.

## Failipaneel (IFC)

| Väli | Tähendus |
|---|---|
| Fail, Suurus | Avatud fail |
| Skeem | IFC-versioon, näiteks IFC2X3 või IFC4 |
| Projekt | Projekti nimi ja pikk nimi |
| Faas | Projekti faas, kui eksportija selle kirjutas |
| Eksporditud programmiga | Eksportiv programm faili päisest |
| Autor | Autor faili päisest |
| Eksporditud | Kuupäev ja kellaaeg faili päisest |
| Elemendid | Mitu kujuga elementi joonistati |
| Kolmnurgad | Mitu kolmnurka nende kujud moodustavad; mudeli raskuse mõõt |

## Failipaneel (projekti- ja perefailid)

| Väli | Tähendus |
|---|---|
| Liik | Projekt, Projekti mall, Pere või Pere mall |
| Salvestatud | Versioon, mis faili viimati salvestas |
| Koostenumber | Selle versiooni täpne koostenumber |
| Loetud | Kui palju failist BimCraft luges selle suurusest |

## Joonispaneel (DWG ja DXF)

| Väli | Tähendus |
|---|---|
| Vorming | Versioon, millena joonis salvestati, koos vormingukoodiga, näiteks AC1032 |
| Ühikud | Joonise sisestusühikud, kui need on seatud |
| Objektid | Mitu objekti loeti |
| Kihid | Mitu kihti |
| Lehed | Mitu lehte (paigutust) või Puudub |
| Lingitud joonised | Mitu tema lingitud joonist leiti ja laaditi |
| Seadmed | Mitu märgistatud seadet on lehtedel |

## Kaustapaneel

| Väli | Tähendus |
|---|---|
| Kaust, Failid, Suurus | Avatud kaust, selles olevate failide arv ja nende kogusuurus |
| Mudelid | Projekti- ja perefailid, igaüks varukoopiad ühe korra arvestatud |
| CAD-joonised, IFC-mudelid | Mitu igat |
| Probleemid | Mitu mudeli koopiat on poolik või loetamatu, või Puudub |
