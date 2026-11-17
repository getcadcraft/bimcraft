---
title: Projektifailist BimCraftini IFC kaudu
summary: IFC-ekspordi sätted, mis avanevad BimCraftis kõige paremini (versioon, omadusehulgad, baaskogused, ruumid, seotud mudelid, koordinaadid), kuidas tulemust avada ning mida eksport säilitab.
keywords: eksport, IFC eksport, rvt IFC-ks, teisenda, 3D, geomeetria, ifc2x3, ifc4, koordineerimisvaade, vaatevaade, projekti edastusvaade, omadusehulgad, baaskogused, ruumid, IfcSpace, seotud failid, jagatud koordinaadid, mõõdistuspunkt, sätted
from: 3efd5fc9
---

## Mida sa teed

Muuda projektifail IFC-failiks, mida saad BimCraftis ümber pöörata, vaadata, kontrollida ja redigeerida. BimCraft ei loe veel `.rvt` faili sisemist 3D-mudelit, seega eksport toimub programmis, mis faili tegi (Revit); BimCraft avab tulemuse.

## Sammud

1. Ava projekt programmis, mis selle tegi. BimCraft'i kaart nimetab versiooni, milles see salvestati.
2. Ava 3D-vaade, mis näitab, mida soovid eksportida.
3. Vali **Fail > Ekspordi > IFC**.
4. Ekspordi dialoogis vali seadistus (või **Modify setup…**) allpool loetletud sätetega.
5. Vali kaust ja failinimi ning ekspordi.
6. BimCraftis klikki {{ui:Vali fail}} ja vali uus `.ifc` fail. Eraldi failidena eksporditud seotud mudelid avanevad samasse stseeni nupuga {{ui:Lisa mudel}}.

## Sätted, mis siin kõige paremini avanevad

| Eksporteri säte | Vali | Miks |
|---|---|---|
| IFC version | **IFC4 Reference View** vaatamiseks, kontrollimiseks ja koguste arvestuseks; **IFC2X3 Coordination View 2.0**, kui teised vajavad IFC2X3 | Mõlemad avanevad täielikult. **IFC4 Design Transfer View** avaneb samuti, täpsemate kujunditega, kuid fail on suurem ja aeglasem. |
| File type | **IFC** (tavaline) | BimCraft ei ava `.ifczip` ega `.ifcxml` faile. |
| Phase / visible elements | Faas, mida mõtled, ja **Export only elements visible in view**, kui seadistad selleks 3D-vaate | Jätab välja selle, mille peitsid tahtlikult. |
| Property sets | **Export Revit property sets** ja **Export IFC common property sets** | Need saavad omadusehulkadeks, mida BimCraft näitab jaotises {{ui:Omadused}} ja mida kasutavad {{ui:Otsi}}, {{ui:Värv}} ja {{ui:Mudeli kontrollid}}. |
| Base quantities | **Export base quantities** | {{ui:Koguste kokkuvõtted}} ja loendid kasutavad neid (pikkused, pindalad, mahud) oletamise asemel. |
| Rooms and areas | **Export rooms in 3D views** (või valik Rooms / Spaces) | Ruumid tulevad ruumidena: vaatamiseks klikki {{ui:Ruumid}}. |
| Linked files | **Export linked files as separate IFCs** | Iga link muutub omaks failiks; ava need koos nupuga {{ui:Lisa mudel}} ja need joonduvad. |
| Coordinate base | **Shared coordinates** (või mõõdistuspunkt) | Fail kannab siis oma kohta kaardil (IfcMapConversion), nii et Mõõda › Asukoht, maapinnal olevad kaardikihid ja kaardikoordinaatidega paigutatud punktipilved töötavad. Projekti baaspunkt hoiab mudeli lähedal alguspunktile, kuid ilma kaardikohata. |
| Split walls and columns by level | Sees, kui arvestad koguseid korruse kaupa | Iga korruse osa on oma element. |

## Mida peaksid nägema

Mudel 3D-s, korrused võetud projekti tasanditest ja projektiinfo paneelis {{ui:Fail}}. **Eksporditud programmist** nimetab eksportija.

## Mida eksport säilitab ja mida mitte

- **Säilib**: geomeetria, korrused, elementide liigid, nimed, tüübid, enamik parameetreid (omadusehulkadena), baaskogused, kui on küsitud, ruumid ruumidena ning kaardikoht jagatud koordinaatidega.
- **Ei säili**: vaated, lehed, annotatsioonid, perekonnad redigeeritavate perekondadena, töökomplektid ja disainivariandid. IFC-fail on mudeli elementide hetkepilt, mitte projekt. Lehtede jaoks ekspordi DWG ja ava see 2D-vaates.

## Levinud vead

- **BimCraftis puuduvad parameetrid.** Lülita sisse ülal olevad omadusehulga valikud ja ekspordi uuesti.
- **Ruumid puuduvad.** Lülita sisse ruumide valik ja klikki seejärel {{ui:Ruumid}}.
- **Salvestamine `.ifczip`-ina.** Vali tavaline IFC või paki `.ifczip` lahti.
- **Kaardikoht puudub.** Ekspordi jagatud koordinaatidega; kontrolli, et projekti mõõdistuspunkt oleks määratud.
- **Muudatuste tagasijõudmise ootamine.** BimCraftis salvestatud muudatused lähevad uude IFC-faili, mitte projektifaili.
