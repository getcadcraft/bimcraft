---
title: Seadmeloendi koostamine ja CSV-eksport
summary: Muutke toitlustusjoonise seadmemärgised seadmeloendiks, filtreerige seda, minge iga seadme juurde selle lehel ning laadige see CSV-failina alla.
keywords: seadmed, loend, toitlustus, köök, eseme märgised, kcl, atribuudid, bom, materjalide nimekiri, csv, arvutustabel, eksport, andmete väljavõtmine
from: e3faa1c8
---

## Mida te teete

Loete seadmete nimekirja köögi- või toitlustusjoonisest, kontrollite seda, leiate iga seadme plaanilt ja laadite selle alla arvutustabelina.

See töötab joonistel, kus seadmemärgised kannavad oma andmeid plokiatribuutidena, nagu teevad köögiprojekteerimise teegid, näiteks KCL: iga märgis hoiab eseme numbrit (`KCL-ITEM`), kogust, kategooriat, tootjat, mudelit, elektri- ja torustiku andmeid ning märkusi. Teistel joonistel pole vahekaarti {{ui:Equipment}}.

## Sammud

1. Avage joonis, eelistatavalt selle projektikaustast, et ka seotud joonised laaditaks.
2. Klõpsake joonise kohal vahekaarti {{ui:Equipment}}. Selle silt näitab, mitu eset on lehtedel, näiteks „Seadmed (88)“.
3. Lugege loendit: **Item**, **Qty**, **Equipment**, **Manufacturer**, **Model**, **Electrical**, **Plumbing** ja **Where**.
4. Valige tabeli kohal menüüst, mida loetleda: **Every sheet**, üks leht, **Not on any sheet** või **Everything tagged in the drawing**. Iga valik näitab oma arvu.
5. Kirjutage filtrikasti („Filter: category, maker, model…“), et loendit kitsendada, näiteks `refrigerator` või `208`.
6. Klõpsake veerus **Where** eseme lehe nimel.
7. Vaadake joonist: BimCraft läheb sellele lehele, suumib eseme peale ja joonistab selle ümber ringi. Olekurida ütleb „Item *n*, *category* is ringed on *sheet*.“ (Üksus *n*, *kategooria* on ringitud lehel *leht*.)
8. Klõpsake {{ui:Equipment}}, et naasta loendi juurde.
9. Klõpsake {{ui:Download CSV}}.

## Mida peaksite nägema

- Allalaadimiskaustas fail nimega „*joonise nimi* equipment.csv“ (lehe nimi sulgudes, kui loetlesite ühe lehe). See avaneb programmis Excel, Numbers, LibreOffice või Google Sheets.
- Olekurida: „Laaditi alla *faili nimi* (*n* eset).“

CSV-s on need veerud: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (mitu märgist). Laaditakse täpselt need read, mida tabel näitab, pärast menüüd ja filtrit.

## Kuidas loend koostatakse

- See loetakse **märgistest endist**, mitte lehel joonistatud loendi tabelist. Tabeli kohal olev märkus ütleb, mitu märgist loeti.
- Üks rida on üks eseme number koos ühe andmekogumiga. Selle kogus on tema märgiste **summa**, nagu trükitud loend seda arvestab: riiulid, mis on ühes kohas märgistatud „5“ ja teises „3“, on 8, näidatud kujul „5 + 3“.
- **Where** loetleb lehed, mis iga eset näitavad. Need arvutatakse sellest, mida iga lehe vaatepordid näitavad, ja see on see, mis prinditakse. „Model only“ tähendab, et ükski leht seda ei näita.
- **Number used twice** märgib ühte eseme numbrit kahel erineval seadmel. Rida on tähistatud kollase märgiga.
- Märgised, mida ükski leht ei näita, hoitakse eraldi jaotises **Not on any sheet**. Need on sageli varasematest plaanidest või teistest töödest jäänud ning neid ei segata kunagi jaotisesse **Every sheet**.
- **Electrical** näitab amprid, kW, HP, voldid, faas, ühendus ja pistik nii, nagu need on märgistatud. **Plumbing** näitab ühenduste suurusi: CW külm vesi, HW soe vesi, DD otsekanalisatsioon, ID kaudne kanalisatsioon ja gaas. Teisi märgiste välju veel ei näidata.

## Levinud vead

- **Pole vahekaarti {{ui:Equipment}}.** Joonisel pole `KCL-ITEM` märgiseid või tema seadmed on joonistatud ilma andmeteta. Lugeda pole midagi.
- **Arvud erinevad trükitud loendist.** Trükitud loendis võib olla varunumbreid või lühemaid nimesid kui märgistel. Märgiste järgi on see, mis on paigaldatud; erinevusi kontrollige projekteerijaga.
- **CSV avamisel on kummalised märgid.** Fail on UTF-8. Avage see oma arvutustabeli importimise käsuga ja valige UTF-8, kui programm seda küsib.
- **Lahter algab ülakomaga.** Väärtused, mis algavad märkidega `=`, `+`, `-` või `@`, saavad ees juhtiva `'`, et arvutustabelid neid valemitena ei käivitaks.
- **{{key:F}} ja {{key:P}} ei tee midagi.** Need töötavad joonisel, mitte loendis. Klõpsake enne lehevahekaarti.
