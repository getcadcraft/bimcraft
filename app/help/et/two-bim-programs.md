---
title: Töötamine kahe BIM-programmi vahel
summary: Saada mudel ühest BIM-programmist teise IFC kaudu, BimCraft keskel; hoia selle GlobalId-d, omadusekomplekte ja klassifikatsioone, seadista mõlemad programmid samade omaduste jaoks ning vaata, mis tagasi tuli.
keywords: ifc, ümmargune teekond, koostalitlusvõime, globalid, guid, omadusekomplektid, psetid, klassifikatsioonid, jagatud parameetrid, omaduste vastendamine, tõlkija, bcf, koordineerimine, vahetus
from: 9f224176
---

## Mida sa teed

Viid mudeli ühe BIM-programmi ja teise vahel, näiteks Revitist Archicadi ja tagasi, IFC kaudu, BimCraftiga keskel, et seda kontrollida, lisada ja teatada, mis säilis. Ühegi programmi oma failivormingut ei loeta: kõik liigub IFC-na.

## Mida BimCraft säilitab

Kui muudad mudelit BimCraftis ja klõpsad {{ui:Save as IFC}}, kirjutatakse iga rida, mida sa ei muutnud, tagasi täpselt samana. Seega:

- **GlobalId-d** jäävad samaks ja teine programm saab iga elemendi sobitada selle järgi, mille ta saatis.
- **Omadusekomplektid** ja nende väärtused jäävad alles, välja arvatud väärtused, mida muutsid.
- **Klassifikatsioonid** jäävad oma elementide külge.

## Seadista mõlemad programmid samade omaduste jaoks

1. Ava mudel BimCraftis (ja projektipakk, kui sul see on: selle omaduste rühmad lisatakse).
2. Vasakpoolses paneelis ava {{ui:Between two BIM programs}}.
3. Jaotises **Omaduste vastendamine** laadi alla, mida iga programm vajab:
   - {{ui:Shared parameters}}: jagatud parameetrite fail. Revitis laadi see käsuga Halda › Jagatud parameetrid ja lisa parameetrid kategooriatele, mis neid vajavad.
   - {{ui:IFC export property sets}}: kasutaja määratud omadusekomplekti fail. Revitis IFC-ekspordi seadetes vali see kasutaja määratud omadusekomplektide alt, et eksporditud IFC kannaks sama komplekti ja omaduste nimesid.
   - {{ui:Mapping table (CSV)}}: iga omadus koos oma IFC-komplekti ja nimega, selle tüübi ning vastavate nimedega kummaski programmis. Archicadi vastendusfailid ei ole avaldatud vorming, seega seadista selle IFC-tõlkija ja omaduste haldur sellest tabelist käsitsi.
   - {{ui:Mapping file}}: kogu vastendus ühe failina, et hoida koos projektiga.

Standardseid komplekte (Pset_ ja Qto_) ei lisata jagatud parameetrite faili: mõlemad programmid kirjutavad need oma andmetest.

## Saada mudel ja too see tagasi

1. Ekspordi IFC esimesest programmist, säilitades GlobalId-d (Revit: sisse lülitatud „Store the IFC GUID in an element parameter after export“).
2. Ava see BimCraftis, kontrolli seda ({{ui:Model checks}}, {{ui:Clash check}}), lisa probleeme ({{ui:Issues}}, BCF), muuda vajadusel väärtusi ja {{ui:Save as IFC}}.
3. Ava salvestatud IFC teises programmis, tööta selle kallal ja ekspordi sealt IFC, säilitades GlobalId-d (Archicadi tõlkija: „Global Unique Identifiers: Keep existing“).
4. Tagasi BimCraftis ava mudel, mis läks välja, ja lisa see, mis tuli tagasi ({{ui:Add a model}} jaotises Mudelid).
5. Jaotises {{ui:Between two BIM programs}} vali **Läks välja** ja **Tuli tagasi** ning klõpsa {{ui:Make the report}}.

## Aruande lugemine

- **Elemendid**: mitu tuli tagasi sama GlobalId-ga, mitu puudub ja mitu on uut. Elemendid uue GlobalId-ga näidatakse ühe puuduva ja ühe uuena: teine programm ei säilitanud seda.
- **IFC-klass muutus**: elemendid, mis tulid tagasi teist liiki elemendina.
- **Omaduste väärtused säilinud**: väärtuste osa, mis tuli tagasi muutumatuna. Allolev loend näitab omadusi, millel on kõige rohkem muudetud või puuduvaid väärtusi.
- **Klassifikatsioonid**: säilinud, muudetud (sama süsteem, teine kood) või puuduvad.

{{ui:Download the report (CSV)}} annab iga omaduse koos arvudega. Selleks, et näha, millised elemendid liikusid või muutsid kuju, kasuta samal kahel mudelil {{ui:Compare versions}}.

:::note
BimCraft ei käivita kumbagi programmi. Milline seade viib väärtuse läbi, sõltub iga programmi IFC-seadetest: aruanne näitab, mis tegelikult tagasi tuli, seega proovi seadet, ekspordi uuesti ja võrdle.
:::

## Probleemid liiguvad BCF-ina

Probleemid, mille tõstad BimCraftis, ekspordituvad BCF-ina ({{ui:Issues}}), mida mõlemad programmid saavad lugeda oma BCF-tööriistadega, nii et küsimus elemendi kohta jõuab teise programmi töötava inimeseni koos oma vaatepunktiga.

Vt ka [Projektipaketi avamine](topic:open-project-bundle), [Projektifailist BimCraftini IFC kaudu](topic:rvt-to-ifc) ja [Mudeli kahe versiooni võrdlemine](topic:compare-versions).
