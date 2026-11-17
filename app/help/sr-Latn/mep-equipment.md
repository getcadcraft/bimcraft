---
title: MEP oprema sa priključcima
summary: Postavite generičke ventilacione jedinice, ventilatore, pumpe, kotlove, grejače vode, krajnje jedinice, difuzore, rešetke i rezervoare, dimenzionisane vrednostima koje unesete, svaki sa vezama za cevi i kanale na koje se druge trase spajaju.
keywords: mep, oprema, ventilaciona jedinica, ahu, ventilator, ventilator u liniji, pumpa, kotao, grejač vode, krajnja jedinica, vav, difuzor, rešetka, registar, rezervoar, priključak, priključci, veza, grlo, veličina grla, hvac, vodovod, mehanički, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Šta ćete uraditi

Postavite opremu na krajeve cevi i kanala. Svaki komad je generički oblik dimenzionisan vrednostima koje unesete, sa vezama kao **priključcima**: mesto gde se cev ili kanal spaja na njega, koji sistem, kojim smerom ide protok i kolika je veličina. Cevi i kanali nacrtani sa priključka preuzimaju njegovu veličinu i sistem i ostaju za njega vezani: videti [Povežite cevi i kanale sa opremom](topic:mep-connections).

:::note
Ovo je pomoć za crtanje i koordinaciju, a dimenzioniše je inženjer. Oprema nije proizvod proizvođača: nema kapaciteta, težina ni veličina priključaka proizvođača. Uvezite model proizvođača iz vašeg MEP programa kao IFC kad ga zatrebate.
:::

## Postavljanje komada

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Verzija}} i izaberite {{ui:Oprema}}.
2. U traci izaberite vrstu i unesite njene dimenzije. Svaka vrsta traži svoje:

| Vrsta | Unosite | Njeni priključci |
|---|---|---|
| Ventilaciona jedinica | dužina, širina, visina; otvori za napajanje i povrat; veličina cevi grejača i sistem; veličina kondenzata | izlaz kanala za napajanje, ulaz kanala za povrat, ulaz i izlaz grejača, odvod kondenzata |
| Ventilator u liniji | prečnik, dužina, sistem | ulaz i izlaz kanala |
| Pumpa | veličina cevi, sistem | ulaz i izlaz |
| Kotao | dužina, širina, visina, veličina cevi, veličina gasa, prečnik dimnjaka | izlaz grejnog napajanja i ulaz povrata, ulaz gasa, izlaz dimnjaka |
| Grejač vode | prečnik, visina, veličina cevi, gas ili struja | ulaz hladne vode, izlaz tople vode (i ulaz gasa i dimnjak kad gori na gas) |
| Krajnja jedinica | dužina, širina, visina, okrugli ulaz, širina i visina izlaza | ulaz i izlaz vazduha za napajanje |
| Difuzor | lice, grlo, sistem | njegovo grlo (ulaz vazduha) |
| Rešetka | širina i visina lica, širina i visina grla, sistem | njeno grlo (izlaz vazduha ka kanalu za povrat ili izduvavanje) |
| Rezervoar | prečnik, visina, veličina cevi, sistem | ulaz na vrhu, izlaz pri dnu |
| Radijator | dužina, visina, dubina, veličina cevi, sistem | protok ulazi na vrhu jednog kraja, povrat izlazi na dnu drugog |
| Konvektor / panelni grejač | dužina, visina, dubina, veličina cevi, sistem | protok ulazi na jednom kraju, povrat izlazi na drugom |
| Proizvođačeva porodica | porodica (videti [Specifikacije cevi, ventili, prigušnice i porodice proizvođača](topic:pipe-specs)) | priključci koje je njena porodica dobila |

3. Postavite **Na**, visinu njegove osnove iznad nivoa. Visina difuzora ili rešetke je njihovo lice: unesite visinu plafona.
4. Ukucajte **Oznaku** ako želite jednu (`AHU-1`); sledeći komad iste vrste dobija sledeći broj.
5. Pomerajte pokazivač preko plana: otisak i njegovi priključci prate ga. Pritisnite {{key:R}} da ga okrenete za 90°. Kliknite gde treba da ide.

Veličine cevi su veličine čeličnih cevi (ASME B36.10M). Cev nacrtana iz pumpe od drugog materijala preuzima istu nominalnu veličinu u svom materijalu.

## Promena ili uklanjanje

Izaberite je u planu ili 3D prikazu. Svojstva prikazuju svaku veličinu koju ste uneli, njenu oznaku, X, Y, visinu i okretanje, i svaki priključak: njegovu veličinu, sistem, kojim smerom ide protok i da li je nešto povezano. Svaka izmena je jedan korak {{ui:Opozovi}}; trase vezane za njene priključke idu s njom. {{key:Delete}} je uklanja; trase koje su bile vezane za nju ostaju, a provera veza ih izlistava.

## U IFC datoteci

Svaka vrsta se čuva kao svoja IFC klasa: IfcUnitaryEquipment (ventilaciona jedinica), IfcFan, IfcPump, IfcBoiler (kotao; grejač vode je IfcBoiler tipa water sa vrstom objekta "Water heater"), IfcAirTerminalBox (krajnja jedinica), IfcAirTerminal (difuzor, rešetka) i IfcTank, sa tipom zajedničkim za svaki komad iste vrste i veličina. IFC2X3 datoteke dobijaju IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal i IfcFlowStorageDevice sa odgovarajućim tipovima. Svaki priključak je IfcDistributionPort, postavljen tamo gde je veza, okrenut napolje, sa svojim smerom protoka i sistemom; drugi programi čitaju koja trasa je vezana za koji priključak. Komad se pridružuje sistemu svakog svog priključka i nosi skupove stavki biblioteke koje ima svaka postavljena stavka biblioteke.
