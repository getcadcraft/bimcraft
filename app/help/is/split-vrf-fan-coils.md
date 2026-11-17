---
title: Klofnar einingar, VRF og viftuspólur
summary: Settu inn innieiningar (veggeiningar, kassettur og stokkaeiningar), klofnar útieiningar og VRF-útieiningar, refnet-samskeyti og 2-pípu eða 4-pípu viftuspólur, hverja með kælimiðils-, vatns-, þéttivatns- og stokkatengingum, og teiknaðu lagnasettin á milli þeirra, stærð eftir töflu sem þú getur breytt.
keywords: split, mini split, minisplit, multi split, vrf, vrv, breytilegt kælimiðilsflæði, varmadæla, innieining, útieining, þéttieining, veggfest, hátt á vegg, kassetta, stokkatengd, falin, viftuspóla, fcu, 2-pípa, 4-pípa, refnet, greinarsamskeyti, Y-samskeyti, lagnasett, lagnasett, kælimiðill, vökvalögn, gaslögn, sogalögn, acr, kopar, þéttivatn, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Það sem þú gerir

Settu einingar klofins kerfis, fjölklofins kerfis eða VRF-kerfis og viftuspólurnar í líkanið og tengdu þær síðan með lagnasettum: vökvalögn og gaslögn úr ACR-kopar, festar við tengi eininganna. Einingarnar virka eins og allir aðrir hlutir í [MEP-búnaði með tengipunktum](topic:mep-equipment): sama stika, Eiginleikar, tengipunktar og [tengingar](topic:mep-connections).

:::note
Þetta er hjálpartæki við teikningu og samhæfingu. Einingarnar eru almenn form og stærð þeirra ræðst af gildunum sem þú slærð inn, ekki af vörum framleiðanda. Pípustærðirnar koma úr töflu yfir **dæmigerð dæmigildi** fyrir búnað með R410A og R32, ekki frá neinum framleiðanda: uppsetningarhandbók framleiðandans ákveður raunverulegar stærðir, og langar lagnir eða mikill hæðarmunur breyta þeim. Breyttu töflunni, eða skráðu stærðirnar, til að passa við einingarnar sem þú notar.
:::

## Setja inn einingu

1. Kveiktu á {{ui:Teikna}}, opnaðu {{ui:Smíð}} og veldu {{ui:Búnaður}}.
2. Veldu tegundina og stilltu gildin:

| Tegund | Þú stillir | Tengipunktar |
|---|---|---|
| Klofin innieining, á vegg | afköst, vökva- og gaslögn, lengd, dýpt, hæð, stærð þéttivatns | kælimiðill vökvi og gas, þéttivatnsaffall (á hægri enda, nálægt veggnum) |
| Klofin innieining, kassetta | afköst, vökva- og gaslögn, plata, hús, hæð, stærð þéttivatns | kælimiðill vökvi og gas, þéttivatnsaffall (öðrum megin, nálægt efri brún) |
| Klofin innieining, stokkatengd | afköst, vökva- og gaslögn, lengd, breidd, hæð, blástursop og útsogsop, stærð þéttivatns | blástursstokkur út, útsogsstokkur inn, kælimiðill vökvi og gas, þéttivatnsaffall |
| Klofin útieining | afköst, vökva- og gaslögn, breidd, dýpt, hæð | kælimiðill vökvi og gas (á hægri hlið) |
| VRF-útieining | afköst, vökva- og gaslögn, breidd, dýpt, hæð | kælimiðill vökvi og gas (framan, neðarlega) |
| Refnet-samskeyti | vökva- eða gaslögn, álagið á hverja grein, rörið á hvorum enda | inntak, grein A, grein B |
| Viftuspólueining | 2-pípa eða 4-pípa, lengd, breidd, hæð, blástursop og útsogsop, rör og kerfi spólu, hitunarrör, stærð þéttivatns | blástursstokkur út, útsogsstokkur inn, spóla inn og út, hitun inn og út (4-pípa), þéttivatnsaffall |

3. Stilltu **Við**: hæð botns einingarinnar yfir kótanum. Botn veggeiningar er undirhliðin (oft 2100 mm); botn kassettu er framhlið hennar í loftinu; hæð refnet-samskeytis er hæð miðlínu pípunnar.
4. Smelltu þar sem hún á að fara ({{key:R}} snýr henni um 90°).

**Afköst** er nafnkæliafköst einingarinnar í kW, með Btu/h við hliðina. Ef **Vökvalögn** og **Gaslögn** eru áfram stillt á Úr töflunni taka tengi einingarinnar stærðir úr töflunni fyrir þessi afköst; veldu rörstærð til að nota þína eigin einingu. Inntak refnet-samskeytis er stillt fyrir báðar greinarnar saman, og hver grein fyrir sitt álag.

Kælimiðilstengin virka í báðar áttir (varmadæla getur keyrt í hvora áttina sem er). Þéttivatnsaffallið er rörstærð eins og hvert annað affall.

## Teikna lagnasett

1. Veldu tvo hluti ({{key:Shift}}+smellur á þann síðari): útieiningu og innieiningu (eitt klofið kerfi), eða útieiningu og refnet-samskeyti, refnet-samskeyti og innieiningu, eða tvö refnet-samskeyti (VRF).
2. Opnaðu {{ui:Smíð}} og veldu {{ui:Lagnasett}}.

BimCraft teiknar vökva- og gaslagnirnar á milli frjálsu tengjanna þeirra, út úr hverju tengi og upp í sameiginlega hæð, úr ACR-kopar (glóðaður spólukoparr upp að 1-5/8 in, dreginn rör fyrir ofan það), sem eitt skref af {{ui:Afturkalla}}. Refnet-samskeyti tekur aðeins sína eigin lögn: inn í inntakið frá útieiningarhliðinni og út úr grein í átt að innieiningunum. Hver lögn tekur stærð síðari enda síns (innieiningarinnar, eða inntaks refnet-samskeytisins). Þar sem tengi hins endans er af annarri stærð sýnir {{ui:Athuga tengingar}} það: þar á minnkari að vera. Tvær innieiningar þurfa refnet-samskeyti á milli sín.

Færðu lagnirnar síðan eins og hverja aðra pípulögn; endar þeirra haldast á tengjunum. Lagnir á milli hæða eru teiknaðar með {{ui:Pípa}}: pípa sem byrjar á kælimiðilstengi tekur kerfi þess, ACR-kopar og stærð.

## Breyta töflu lagnasetta

Opnaðu {{ui:Smíð}} og veldu {{ui:Stærðir lagnasetta}}. Hver röð segir: upp að þessum afköstum (kW), þetta vökvarör og þetta gasrör.

| Upp að | Vökvi | Gas |
|---|---|---|
| 2,8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5,6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22,4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Þetta eru upphafsgildin, dæmigerð gildi. Breyttu röð, bættu við eða fjarlægðu raðir og veldu {{ui:Vista}}: taflan er geymd í líkaninu, svo allir sem vinna með skrána nota hana, og {{ui:Afturkalla}} tekur hana til baka. {{ui:Nota dæmigerð gildi}} setur upphafstöfluna aftur. Hlutir sem eru þegar settir inn halda tengjum sínum þar til þú breytir þeim.

## Í IFC-skránni

Innieiningar og útieiningar klofinna og VRF-kerfa eru IfcUnitaryEquipment af gerðinni SPLITSYSTEM og hlutategundin segir hvaða („Split indoor unit, wall-mounted“, „Split indoor unit, ceiling cassette“, „Split indoor unit, ducted“, „Split outdoor unit“, „VRF outdoor unit“). Viftuspóla er IfcUnitaryEquipment af gerðinni AIRHANDLER með hlutategundinni „Fan coil unit“: IFC4 hefur enga viftuspólugerð, og vifta, spóla og sía fyrir eitt herbergi er það sem AIRHANDLER lýsir. Refnet-samskeyti er IfcPipeFitting af gerðinni JUNCTION („Refnet joint“). IFC2X3-skrár fá IfcEnergyConversionDevice og IfcFlowFitting með samsvarandi gerðum.

Kælimiðilstengi og lagnir eru í REFRIGERATION-kerfum (eitt fyrir vökvalagnirnar, eitt fyrir gaslagnirnar), þéttivatn í DRAINAGE-kerfi. ACR-lagnir eru nefndar eftir ytra þvermáli. Taflan yfir lagnasett er eignasettið CadCraft_HvacLineSets á verkefninu.

Sjá einnig [MEP-búnaður með tengipunktum](topic:mep-equipment), [Tengja pípur og loftstokka við búnað](topic:mep-connections) og [Pípur og loftstokkar](topic:pipes-and-ducts).
