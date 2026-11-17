---
title: "Klimatski scenariji: poplave, toplota i požar 2050. i 2080."
summary: Ponovo pokreni proračun poplava, godinu energije i brzu procjenu požara s budućom klimom (scenariji SSP2-4.5 i SSP5-8.5, godine 2050 i 2080) iz paketa klimatskih podataka, prikazano uz sadašnje.
keywords: klima, klimatske promjene, budućnost, 2050, 2080, ssp, cmip6, scenarij, porast nivoa mora, poplava, toplota, vremenska datoteka, epw, morfing, energyplus, požar, šumski požar, vremenski uslovi za požar
from: 224ecd08
---

Klimatske brojke dolaze iz **paketa podataka**, a ne iz same aplikacije. Uključi dodatak {{ui:Climate futures}} u Postavke › Dodaci, ili učitaj vlastitu datoteku paketa u bloku {{ui:Climate future}}.

:::warning
Paket koji dolazi uz dodatak je **uzorak**: tri mjesta (Denver, Majami, Johanesburg), jedan klimatski model, pet godina u svakom periodu od 20 godina. Tu je da isprobaš alate, **a ne za projektovanje**. Panel to kaže podebljano dok je u upotrebi. Potpun paket (mnogo modela, sve godine, više mjesta) pravi se pomoću `tools/climate/build-pack.mjs` iz NASA-inih NEX-GDDP-CMIP6 podataka.
:::

## Odaberi budućnost

U lijevom panelu, u {{ui:Hazard playback}}, odaberi **Scenarij** (SSP2-4.5, srednji put, ili SSP5-8.5, visoke emisije) i **Godinu** (2050 znači 2041–2060, 2080 znači 2071–2090; obje u odnosu na 1995–2014). **Mjesto** je mjesto iz paketa najbliže lokaciji modela (geografska širina i dužina IfcSite-a), ili ono koje ti odabereš. Daleko od svih mjesta koriste se globalne prosječne promjene paketa, i panel to kaže.

## Poplava, sadašnja uz buduću

Kad je odabran scenarij, postavi **Vrstu poplave**: obalna (dodaje porast nivoa mora), rijeka ili jaka kiša (dublja za promjenu kiše na najkišovitiji dan), ili oboje. Pritisni Pokreni: poplava se odvija kao i prije, a tabela prikazuje sadašnju i buduću poplavu jednu pored druge (nivo vode, prostorije koje se pokvase, najdublja voda). Pretpostavke su navedene ispod nje:

- nivo obale raste za cijeli porast nivoa mora; olujni plimni talas i talasi se ne mijenjaju;
- protok rijeke raste jedan-na-jedan s kišom na najkišovitiji dan, a dubina prati protok na stepen 0.6 (Manningova jednačina za široki kanal);
- dva dijela se jednostavno sabiraju.

## Toplota: buduća vremenska datoteka

Izaberi vrstu {{ui:Heat: future weather file}}, odaberi sadašnju `.epw` vremensku datoteku i pritisni {{ui:Make the future weather file}}. Datoteka se **morfira** mjesec po mjesec objavljenom metodom pomaka i rastezanja (Belcher, Hacker i Powell 2005): srednja vrijednost mjeseca se zagrijava za promjenu paketa, vruća popodneva za promjenu dnevnog maksimuma, a hladne noći za promjenu dnevnog minimuma; relativna vlažnost se mijenja za promjenu paketa, a tačka rosišta se ponovo računa. Pritisak i vjetar ostaju kakvi jesu. Tabela upoređuje srednju i najvišu temperaturu, projektne temperature za hlađenje (0.4 %) i grijanje (99.6 %), sate na 30 °C i 35 °C i stepen-dane.

{{ui:Save the future weather file}} je snima; {{ui:Use it in the energy check}} je predaje EnergyPlus provjeri (kartica Energija). Buduća datoteka je ista tipična godina, samo toplija: ne dodaje nove toplotne talase.

## Godina energije, sadašnja uz buduću

U EnergyPlus provjeri na kartici Energija (zaseban dodatak, s tvojim motorom), odaberi sadašnju vremensku datoteku, zatim scenarij i godinu u njenom bloku {{ui:Climate future}}, i pritisni {{ui:Simulate a year: present and future}}: godina se pokreće na sadašnjoj datoteci i na njenoj morfiranoj budućoj verziji, a grijanje i hlađenje svake prostorije navode se jedno pored drugog.

## Izloženost požaru (samo pregled)

Izaberi vrstu {{ui:Wildfire exposure (screening only)}}: najbliža vegetacija, uzbrdica od nje do zgrade i udaljenost do nje. Rezultat je pojas od vrlo niskog do ekstremnog, sadašnji i budući.

:::warning
**Samo pregled.** Ovo je naša relativna skala da se vidi treba li lokacija pravu procjenu rizika od požara, a ne ocjena po propisu niti nivo napada šumskog požara. Množi težinu za vegetaciju, faktor nagiba (vatra otprilike udvostruči brzinu za svakih 10 stepeni uzbrdo, računajući do 20 stepeni), faktor udaljenosti (10 m podijeljeno s udaljenošću, najviše 1) i promjenu paketa u indeksu vremenskih uslova za požar.
:::

## Odakle dolaze brojke

- **Temperatura, vlažnost, sunce, kiša, vremenski uslovi za požar:** NASA NEX-GDDP-CMIP6, dnevni umanjeni izlazi CMIP6 modela. Izlaz svakog modela je pod CC BY 4.0. Promjena indeksa vremenskih uslova za požar je Canadian Fire Weather Index izračunat dan po dan iz vremena modela (s dnevnom vlažnošću umjesto podnevne).
- **Porast nivoa mora:** globalni prosjek IPCC AR6 (ne lokalni; podizanje ili tonjenje zemlje nije u njemu), osim ako paket ne sadrži lokalne podatke.
- Paket navodi svoj izvor, licencu i datum; panel ih prikazuje.
