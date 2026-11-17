---
title: Skaidytųjų sistemų, VRF ir fankoilų blokai
summary: Įdėkite sieninius, kasetinius ir kanalinius vidaus blokus, vienos skaidytosios sistemos ir VRF išorinius blokus, refnet jungtis bei 2 ar 4 vamzdžių fankoilus, kiekvieną su šaldymo agento, vandens, kondensato ir oro kanalų jungtimis, ir nubrėžkite tarp jų vamzdžių rinkinius, išdimensionuotus pagal lentelę, kurią galite keisti.
keywords: skaidytoji, mini skaidytoji, mini split, multi split, vrf, vrv, kintamo šaldymo agento srautas, šilumos siurblys, vidaus blokas, išorinis blokas, kondensavimo blokas, sieninis, aukštas sieninis, kasetinis, kanalinis, paslėptas, fankoilas, fcu, 2 vamzdžiai, 4 vamzdžiai, refnet, šakojimo jungtis, Y jungtis, vamzdžių rinkinys, lineset, šaldymo agentas, skysčio linija, dujų linija, siurbimo linija, acr, varis, kondensatas, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Ką darysite

Įdėkite skaidytosios ar kelių vidaus blokų sistemos ir VRF sistemos blokus bei fankoilus į modelį, tada sujunkite juos vamzdžių rinkiniais: skysčio ir dujų linija iš ACR vario, pritvirtinta prie blokų jungčių. Blokai veikia kaip ir kiekviena kita įranga su jungtimis, [MEP įranga su jungtimis](topic:mep-equipment): ta pati juosta, Savybės, jungtys ir [jungtys](topic:mep-connections).

:::note
Tai braižymo ir koordinavimo priemonė. Blokai yra bendros formos, o jų dydžius nustato jūsų įvesti dydžiai, ne gamintojo gaminys. Jų vamzdžių dydžiai paimti iš lentelės su **tipinėmis pavyzdinėmis reikšmėmis**, skirtomis R410A ir R32 įrangai, o ne iš kurio nors gamintojo: tikrus dydžius nustato gamintojo montavimo vadovas, o ilgi vamzdynai ar dideli aukščių skirtumai juos pakeičia. Pakeiskite lentelę arba įveskite dydžius, kad jie atitiktų jūsų naudojamus blokus.
:::

## Įdėti bloką

1. Įjunkite {{ui:Braižymas}}, atidarykite {{ui:Versija}} ir pasirinkite {{ui:Įranga}}.
2. Pasirinkite tipą ir nustatykite jo reikšmes:

| Tipas | Nustatote | Jo jungtys |
|---|---|---|
| Skaidytasis vidaus blokas, sieninis | galingumas, skysčio ir dujų linija, ilgis, gylis, aukštis, kondensato dydis | šaldymo agento skystis ir dujos, kondensato nutekėjimas (dešiniajame gale, prie sienos) |
| Skaidytasis vidaus blokas, kasetinis | galingumas, skysčio ir dujų linija, plokštė, korpusas, aukštis, kondensato dydis | šaldymo agento skystis ir dujos, kondensato nutekėjimas (vienoje pusėje, prie viršaus) |
| Skaidytasis vidaus blokas, kanalinis | galingumas, skysčio ir dujų linija, ilgis, plotis, aukštis, tiekimo ir grąžinimo angos, kondensato dydis | tiekimo kanalas išeina, grąžinimo kanalas įeina, šaldymo agento skystis ir dujos, kondensato nutekėjimas |
| Skaidytasis išorinis blokas | galingumas, skysčio ir dujų linija, plotis, gylis, aukštis | šaldymo agento skystis ir dujos (dešinėje pusėje) |
| VRF išorinis blokas | galingumas, skysčio ir dujų linija, plotis, gylis, aukštis | šaldymo agento skystis ir dujos (priekyje, žemai) |
| Refnet jungtis | skysčio ar dujų linija, apkrova kiekvienai šakai, vamzdis kiekviename gale | įėjimas, šaka A, šaka B |
| Fankoilo blokas | 2 ar 4 vamzdžiai, ilgis, plotis, aukštis, tiekimo ir grąžinimo angos, ritės vamzdis ir sistema, šildymo vamzdis, kondensato dydis | tiekimo kanalas išeina, grąžinimo kanalas įeina, ritė įeina ir išeina, šildymas įeina ir išeina (4 vamzdžiai), kondensato nutekėjimas |

3. Nustatykite **At**: bloko pagrindo aukštį virš lygio. Sieninio bloko pagrindas yra jo apatinė dalis (dažnai 2100 mm); kasetinio – jo paviršius lubose; refnet jungties – jos vamzdžio centrinės linijos aukštis.
4. Spustelėkite vietą, kur jis turi būti ({{key:R}} pasuka 90°).

**Galingumas** yra nominalus aušinimo galingumas kW, šalia nurodomas Btu/h. Kai **Skysčio linija** ir **Dujų linija** paliekamos **Iš lentelės**, bloko jungtys paima lentelės dydžius tam galingumui; pasirinkite vamzdžio dydį, jei norite naudoti savo bloko. Refnet jungties įėjimas išdimensionuotas abiem šakoms kartu, o kiekviena šaka – pagal savo apkrovą.

Šaldymo agento jungtys veikia abiem kryptimis (šilumos siurblys veikia bet kuria kryptimi). Kondensato nutekėjimas yra vamzdžio dydis, kaip ir bet kuris kitas nutekėjimas.

## Nubrėžti vamzdžių rinkinį

1. Pasirinkite du elementus ({{key:Shift}}+spustelėjimas antrajam): išorinį bloką ir vidaus bloką (viena skaidytoji sistema), arba išorinį bloką ir refnet jungtį, refnet jungtį ir vidaus bloką, arba dvi refnet jungtis (VRF).
2. Atidarykite {{ui:Versija}} ir pasirinkite {{ui:Vamzdžių rinkinys}}.

BimCraft nubrėžia skysčio ir dujų linijas tarp jų laisvų jungčių: iš kiekvienos jungties ir aukštyn iki bendro aukščio, iš ACR vario (atkaitinta ritė iki 1-5/8 in, virš to – ištrauktas vamzdis), kaip vieną {{ui:Anuliuoti}} žingsnį. Refnet jungtis priima tik savo liniją: į įėjimą iš išorinės pusės ir iš šakos link vidaus blokų. Kiekviena linija paima savo žemesniojo galo (vidaus bloko ar refnet įėjimo) dydį; kai kito galo jungtis yra kito dydžio, {{ui:Patikrinti jungtis}} tai parodo: būtent ten reikia reduktoriaus. Du vidaus blokai reikalauja refnet jungties tarp jų.

Linijas vėliau perkelkite kaip bet kurį vamzdyną; jų galai lieka ant jungčių. Linijos tarp aukštų braižomos su {{ui:Vamzdis}}: vamzdis, pradėtas šaldymo agento jungtyje, paima jos sistemą, ACR varį ir dydį.

## Keisti vamzdžių rinkinio lentelę

Atidarykite {{ui:Versija}} ir pasirinkite {{ui:Vamzdžių rinkinio dydžiai}}. Kiekvienoje eilutėje nurodoma: iki šio galingumo (kW), šis skysčio vamzdis ir šis dujų vamzdis.

| Iki | Skystis | Dujos |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Tai pradinės, tipinės reikšmės. Pakeiskite eilutę, pridėkite ar pašalinkite eilutes ir pasirinkite {{ui:Įrašyti}}: lentelė saugoma modelyje, todėl ją naudoja visi, dirbantys su failu, o {{ui:Anuliuoti}} ją grąžina atgal. {{ui:Naudoti tipines vertes}} atkuria pradinę lentelę. Jau įdėti elementai išlaiko savo jungtis, kol jų nepakeisite.

## IFC faile

Skaidytųjų ir VRF sistemų vidaus ir išoriniai blokai yra IfcUnitaryEquipment tipo SPLITSYSTEM, o objekto tipas nurodo, kuris: ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fankoilas yra IfcUnitaryEquipment tipo AIRHANDLER su objekto tipu "Fan coil unit": IFC4 neturi fankoilo tipo, o ventiliatorius, ritė ir filtras vienam kambariui atitinka AIRHANDLER aprašymą. Refnet jungtis yra IfcPipeFitting tipo JUNCTION ("Refnet joint"). IFC2X3 failai gauna IfcEnergyConversionDevice ir IfcFlowFitting su atitinkamais tipais.

Šaldymo agento jungtys ir linijos yra REFRIGERATION sistemose (viena skysčio linijoms, viena dujų linijoms), o kondensatas – DRAINAGE sistemoje. ACR linijos pavadinamos pagal išorinį skersmenį. Vamzdžių rinkinio lentelė yra savybių rinkinys CadCraft_HvacLineSets projekte.

Taip pat žr. [MEP įranga su jungtimis](topic:mep-equipment), [Vamzdžių ir kanalų prijungimas prie įrangos](topic:mep-connections) ir [Vamzdžiai ir kanalai](topic:pipes-and-ducts).
