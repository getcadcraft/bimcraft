---
title: Solarna PV polja, senčenje in donos
summary: Namestite solarna polja na strehe ali na tla, jih zasenčite iz modela, ocenite letno energijo, določite dolžine verig in ustvarite podatke enočrtnega diagrama. Vsi vnosi so prikazani, začetni modul in izgube pa sta splošna.
keywords: solar, pv, fotovoltaika, polje, modul, streha, senčenje, donos, kwh, kwp, dimenzioniranje verig, pretvornik, enočrtni, enočrtna shema, nagib, azimut, razmak vrst
from: adf4aaf3
---

## Kaj boste naredili

Odprite podokno **Solar PV**. Izberite streho (njen nagib in obrnjenost sta prebrana iz modela) ali postavite polje na tleh z nagibom in obrnjenostjo; moduli se namestijo znotraj z odmiki in preštejejo, kar da moč DC v kWp. Postavitev polja zapiše v model kot solarne naprave, v enem koraku razveljavitve.

## Senčenje, donos in verige

- **Senčenje** pošlje žarek od vsakega modula proti soncu za tipične dneve vsakega meseca glede na lastno geometrijo modela, zato se štejejo sosednje stavbe, atike in vrste pred njim. Zmanjša se samo neposredna sončna svetloba, delno zasenčeno polje pa izgubi moč sorazmerno.
- **Donos** da kWh po mesecih in letu, kWh na kWp in razmerje učinkovitosti. Sončno obsevanje pride iz vaših mesečnih vsot na vodoravni ploskvi, če jih vnesete. Brez njih podokno uporabi zgornjo mejo za jasno nebo in to pove. **Pridobite podnebje iz NASA POWER** z gumbom na zavihku Donos: pošlje samo zemljepisno širino in dolžino lokacije, enkrat, in odgovor ohrani na tem računalniku (preverjeno iz brskalnika 2026-10-30). PVGIS ne dovoli spletni strani, da prebere njegov odgovor, zato zavihek ponudi povezavo, ki v novem zavihku odpre mesečne podatke PVGIS za lokacijo; prilepite, kar prikaže, v polje, in dvanajst mesecev se izpolni.
- **Verige** preverijo število modulov na verigo glede na napetostno okno pretvornika na najhladnejši in najtoplejši dan, vzporedne verige pa glede na njegov tok.
- **Enočrtni** ustvari podatke diagrama (polje, združevalnik, odklopnik, pretvornik, razdelilnik, omrežje) z dimenzijami vodnikov in varovalk iz faktorjev, ki jih vnesete. So podatki in SVG; dodatek Elektrika v CadCraft jih lahko postavi kot simbole.

Modul, pretvornik, izgube in faktorji vodnikov, ki so priloženi BimCraft, so splošni primeri, označeni v vsakem rezultatu. Vnesite podatke proizvajalca in vrednosti predpisov, za katere načrtujete, načrt pa naj pregleda oseba, ki zanj odgovarja.
