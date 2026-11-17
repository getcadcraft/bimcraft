---
title: "Podnebna prihodnost: poplave, vročina in požar za 2050 in 2080"
summary: Ponovno zaženite poplave, energijsko leto in presejalni pregled požara s prihodnjim podnebjem (scenarija SSP2-4.5 in SSP5-8.5, leti 2050 in 2080) iz paketa podnebnih podatkov, prikazano ob sedanjosti.
keywords: podnebje, podnebne spremembe, prihodnost, 2050, 2080, ssp, cmip6, scenarij, dvig morske gladine, poplava, vročina, vremenska datoteka, epw, morph, energyplus, požar, gozdni požar, vremenski pogoji za požar
from: 224ecd08
---

Podnebne številke prihajajo iz **paketa podatkov**, ne iz aplikacije. Vklopite dodatek {{ui:Climate futures}} v Nastavitvah pod Dodatki ali naložite lastno datoteko paketa v bloku Podnebna prihodnost.

:::warning
Paket, ki pride z dodatkom, je **vzorec**: tri mesta (Denver, Miami, Johannesburg), en podnebni model in pet let v vsakem 20-letnem obdobju. Namenjen je preizkusu orodij, **ne za projektiranje**. Podokno to med uporabo pokaže krepko. Poln paket (mnogo modelov, vsa leta, več mest) se sestavi z `tools/climate/build-pack.mjs` iz podatkov NASA NEX-GDDP-CMIP6.
:::

## Izberite prihodnost

V levem podoknu v {{ui:Hazard playback}} izberite **Scenarij** (SSP2-4.5, srednja pot, ali SSP5-8.5, visoke emisije) in **Leto** (2050 pomeni 2041-2060, 2080 pomeni 2071-2090; obe primerjani z 1995-2014). **Kraj** je mesto v paketu, najbližje lokaciji modela (zemljepisna širina in dolžina IfcSite), ali tisto, ki ga izberete. Daleč od vseh mest se uporabijo globalne povprečne spremembe paketa, podokno pa to pove.

## Poplava: sedanjost ob prihodnosti

Ko izberete scenarij, nastavite **Vrsto poplave**: obalna (doda dvig morske gladine), rečna ali močno deževje (globlje za spremembo dežja na najbolj deževen dan) ali obe. Pritisnite Zaženi: poplava se predvaja kot prej, tabela pa prikaže sedanjo in prihodnjo poplavo drugo ob drugi (raven vode, sobe, ki se namočijo, najgloblja voda). Predpostavke so navedene pod njo:

- obalna raven se dvigne za celoten dvig morske gladine; navali in valovi se ne spremenijo;
- pretok reke se dvigne sorazmerno z dežjem na najbolj deževen dan, globina pa sledi pretoku na potenco 0.6 (Manningova enačba za širok kanal);
- obe sestavini se preprosto seštejeta.

## Vročina: prihodnja vremenska datoteka

Izberite vrsto {{ui:Heat: future weather file}}, izberite sedanjo vremensko datoteko `.epw` in pritisnite {{ui:Make the future weather file}}. Datoteka se mesec za mesecem **preoblikuje** z objavljeno metodo premika in raztega (Belcher, Hacker in Powell 2005): mesečna povprečna temperatura se segreje za spremembo paketa, vroča popoldneva za spremembo dnevnega maksimuma, hladne noči pa za spremembo dnevnega minimuma. Relativna vlažnost se premakne za spremembo paketa, rosišče pa se izračuna znova. Tlak in veter ostaneta, kakršna sta bila. Tabela primerja povprečno in najvišjo temperaturo, projektni temperaturi za hlajenje 0.4 % in ogrevanje 99.6 %, ure pri 30 °C in 35 °C ter stopinjske dneve.

{{ui:Save the future weather file}} jo shrani; {{ui:Use it in the energy check}} jo preda preverjanju z EnergyPlus (zavihek Energija). Prihodnja datoteka je isto tipično leto, le toplejše: ne dodaja novih toplotnih valov.

## Energijsko leto: sedanjost ob prihodnosti

V preverjanju z EnergyPlus na zavihku Energija (lasten dodatek, z vašim motorjem) izberite sedanjo vremensko datoteko, nato scenarij in leto v bloku Podnebna prihodnost ter pritisnite {{ui:Simulate a year: present and future}}: leto teče na sedanji datoteki in na njeni preoblikovani prihodnji, toplota in hlajenje vsake sobe pa sta navedena drug ob drugem.

## Izpostavljenost požaru (samo presejalno)

Izberite vrsto {{ui:Wildfire exposure (screening only)}}: najbližje rastje, vzpon pobočja od njega do stavbe in razdaljo do njega. Rezultat je pas od zelo nizkega do ekstremnega, sedanji in prihodnji.

:::warning
**Samo presejalno.** To je naša relativna lestvica, ki pove, ali lokacija potrebuje pravo oceno požarne ogroženosti. Ni ocena po predpisih in ni bushfire attack level. Pomnoži utež za rastje, faktor naklona (ogenj se približno podvoji na vsakih 10 stopinj vzpona, štetih do 20 stopinj), faktor razdalje (10 m deljeno z razdaljo, največ 1) in spremembo indeksa vremenskih pogojev za požar iz paketa.
:::

## Od kod prihajajo številke

- **Temperatura, vlažnost, sončno obsevanje, padavine, vremenski pogoji za požar:** NASA NEX-GDDP-CMIP6, dnevni nižje skalirani izhodi modelov CMIP6. Izhod vsakega modela je pod CC BY 4.0. Sprememba vremenskih pogojev za požar je kanadski indeks vremenskih pogojev za požar, izračunan dan za dnem iz vremena modela (z dnevno vlažnostjo namesto vlažnosti opoldne).
- **Dvig morske gladine:** globalno povprečje IPCC AR6 (ne lokalno; dvig ali posedanje zemlje vanj nista vključena), razen če paket prinaša lokalne številke.
- Paket navaja svoj vir, licenco in datum; podokno jih prikaže.
