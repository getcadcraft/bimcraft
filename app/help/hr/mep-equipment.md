---
title: Oprema za instalacije s priključcima
summary: Postavite generičke klimatizacijske jedinice, ventilatore, pumpe, kotlove, grijače vode, završne jedinice, difuzore, rešetke i spremnike, dimenzionirane vrijednostima koje upišete, svaki s priključcima cijevi i kanala na koje se spajaju ostale dionice.
keywords: mep, oprema, klimatizacijska jedinica, ahu, ventilator, inline ventilator, pumpa, kotao, grijač vode, završna jedinica, vav, difuzor, rešetka, registar, spremnik, priključak, priključci, veza, grlo, dimenzija grla, hvac, vodovod, strojarstvo, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Što ćete učiniti

Stavite opremu na krajeve cijevi i kanala. Svaki komad je generički oblik dimenzioniran vrijednostima koje upišete, s vezama kao **priključcima**: gdje se cijev ili kanal spaja na njega, koji sustav, kojim smjerom ide protok i koja veličina. Cijevi i kanali nacrtani iz priključka preuzimaju njegovu veličinu i sustav te ostaju vezani uz njega: vidi [Spajanje cijevi i kanala na opremu](topic:mep-connections).

:::note
Ovo je pomoćno sredstvo za crtanje i koordinaciju, a dimenzionira ga inženjer. Oprema nije proizvod nekog proizvođača: nema kapaciteta, težina ni veličina priključaka proizvođača. Donesite model proizvođača iz svog programa za instalacije kao IFC kad vam zatreba.
:::

## Postavljanje komada

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Izgradnja}} i odaberite {{ui:Oprema}}.
2. U traci odaberite vrstu i upišite dimenzije. Svaka vrsta traži svoje:

| Vrsta | Upisujete | Njezini priključci |
|---|---|---|
| Klimatizacijska jedinica | duljina, širina, visina; otvori za dovod i povrat; veličina cijevi zavojnice i sustav; veličina kondenzata | izlaz dovodnog kanala, ulaz povratnog kanala, ulaz i izlaz zavojnice, odvod kondenzata |
| Inline ventilator | promjer, duljina, sustav | ulaz i izlaz kanala |
| Pumpa | veličina cijevi, sustav | ulaz i izlaz |
| Kotao | duljina, širina, visina, veličina cijevi, veličina plina, promjer dimnjaka | polazni izlaz i povratni ulaz grijanja, ulaz plina, izlaz dimnjaka |
| Grijač vode | promjer, visina, veličina cijevi, plin ili struja | ulaz hladne vode, izlaz tople vode (i ulaz plina te dimnjak kad gori plinom) |
| Završna jedinica | duljina, širina, visina, okrugli ulaz, širina i visina izlaza | ulaz i izlaz dovodnog zraka |
| Difuzor | lice, grlo, sustav | njegovo grlo (ulaz zraka) |
| Rešetka | širina i visina lica, širina i visina grla, sustav | njezino grlo (izlaz zraka prema povratnom ili odsisnom kanalu) |
| Spremnik | promjer, visina, veličina cijevi, sustav | ulaz na vrhu, izlaz pri dnu |
| Radijator | duljina, visina, dubina, veličina cijevi, sustav | polazni ulaz na vrhu jednog kraja, povrat izlazi na dnu drugog |
| Konvektor / panelni grijač | duljina, visina, dubina, veličina cijevi, sustav | polazak na jednom kraju, povrat na drugom |
| Obitelj proizvođača | obitelj (vidi [Specifikacije cijevi, ventili, zaklopke i obitelji proizvođača](topic:pipe-specs)) | priključke koje je njezina obitelj dobila |

3. Postavite **Kotu**, visinu baze iznad etaže. Visina difuzora ili rešetke je njihovo lice: upišite visinu stropa.
4. Upišite **Oznaku** ako želite (`AHU-1`); sljedeći komad iste vrste dobiva sljedeći broj.
5. Pomaknite pokazivač nad tlocrt: obris i njegovi priključci slijede ga. Pritisnite {{key:R}} za okret od 90°. Kliknite gdje ide.

Veličine cijevi su čelične nazivne veličine (ASME B36.10M). Cijev nacrtana iz pumpe u drugom materijalu preuzima istu nazivnu veličinu u vlastitom materijalu.

## Promjena ili uklanjanje

Odaberite ga u tlocrtu ili 3D prikazu. Svojstva prikazuju svaku dimenziju koju ste upisali, njegovu oznaku, X, Y, visinu i okret te svaki priključak: njegovu veličinu, sustav, kojim smjerom ide protok i je li nešto spojeno. Svaka promjena je jedan korak {{ui:Poništi}}; dionice vezane uz njegove priključke idu s njim. {{key:Delete}} ga uklanja; dionice koje su bile vezane uz njega ostaju, a {{ui:Provjera veza}} ih popisuje.

## U IFC datoteci

Svaka vrsta sprema se kao svoja IFC klasa: IfcUnitaryEquipment (klimatizacijska jedinica), IfcFan, IfcPump, IfcBoiler (kotao; grijač vode je IfcBoiler vrste `water` s vrstom objekta "Water heater"), IfcAirTerminalBox (završna jedinica), IfcAirTerminal (difuzor, rešetka) i IfcTank, s tipom koji dijele svi komadi iste vrste i veličina. Datoteke IFC2X3 dobivaju IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal i IfcFlowStorageDevice s odgovarajućim tipovima. Svaki priključak je IfcDistributionPort postavljen gdje je veza, okrenut van, sa svojim smjerom protoka i sustavom; drugi programi čitaju koja dionica se spaja na koji priključak. Komad se pridružuje sustavu svakog od svojih priključaka i nosi skupove stavki knjižnice koje ima svaka postavljena stavka knjižnice.
