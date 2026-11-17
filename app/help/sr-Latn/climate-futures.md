---
title: "Klimatske budućnosti: poplava, vrućina i šumski požar za 2050 i 2080"
summary: Ponovo pokreni poplavu, godinu energije i orijentacioni pregled šumskog požara sa budućom klimom (scenariji SSP2-4.5 i SSP5-8.5, godine 2050 i 2080) iz paketa klimatskih podataka, prikazano uz sadašnjost.
keywords: klima, klimatske promene, budućnost, 2050, 2080, ssp, cmip6, scenario, nivo mora, poplava, vrućina, vremenska datoteka, epw, morfovanje, energyplus, šumski požar, požar, vremenski uslovi za požar
from: 224ecd08
---

Klimatske brojke dolaze iz **paketa podataka**, a ne iz same aplikacije. Uključi dodatak {{ui:Klimatske budućnosti}} u Podešavanja › Dodaci ili učitaj sopstvenu datoteku paketa u bloku {{ui:Klimatska budućnost}}.

:::warning
Paket koji dolazi uz dodatak je **uzorak**: tri mesta (Denver, Majami, Johanesburg), jedan klimatski model i pet godina u svakom periodu od 20 godina. Tu je da se alati isprobaju, **nije za projektovanje**. Panel to kaže podebljano dok je u upotrebi. Potpun paket (mnogo modela, sve godine, više mesta) pravi se pomoću `tools/climate/build-pack.mjs` iz NASA-inih NEX-GDDP-CMIP6 podataka.
:::

## Izaberi budućnost

U levom panelu, u {{ui:Prikaz opasnosti}}, izaberi **Scenario** (SSP2-4.5, sredina puta, ili SSP5-8.5, visoke emisije) i **Godinu** (2050 znači 2041–2060, 2080 znači 2071–2090; obe u odnosu na 1995–2014). **Mesto** je mesto iz paketa najbliže lokaciji modela (geografska širina i dužina IfcSite-a), ili ono koje izabereš. Ako je daleko od svih mesta, koriste se globalne prosečne promene iz paketa i panel to kaže.

## Poplava: sadašnja uz buduću

Kad je scenario izabran, postavi **Vrstu poplave**: obalna (dodaje porast nivoa mora), rečna ili jaka kiša (dublja za promenu kiše na najkišniji dan), ili obe. Pritisni Pokreni: poplava se prikazuje kao i ranije, a tabela prikazuje sadašnju i buduću poplavu jednu pored druge (nivo vode, prostorije koje se pokvase, najdublja voda). Pretpostavke su navedene ispod:

- obalni nivo raste za ceo porast nivoa mora; talas i oseka se ne menjaju;
- protok reke raste jedan na jedan sa kišom najkišnijeg dana, a dubina prati protok na stepen 0,6 (Manningova jednačina za široko korito);
- dva dela se jednostavno sabiraju.

## Vrućina: buduća vremenska datoteka

Izaberi vrstu {{ui:Vrućina: buduća vremenska datoteka}}, izaberi `.epw` vremensku datoteku za sadašnjost i pritisni {{ui:Napravi buduću vremensku datoteku}}. Datoteka se **morfuje** mesec po mesec objavljenim postupkom pomeranja i razvlačenja (Belcher, Hacker i Powell 2005): srednja vrednost meseca se zagreva za promenu iz paketa, vrući popodnevi za promenu dnevnog maksimuma, a hladne noći za promenu dnevnog minimuma; relativna vlažnost se pomera za promenu iz paketa i tačka rose se ponovo računa. Pritisak i vetar ostaju kakvi su bili. Tabela poredi srednje i najviše temperature, projektne temperature za hlađenje (0,4 %) i grejanje (99,6 %), sate na 30 °C i 35 °C i stepen-dane.

{{ui:Sačuvaj buduću vremensku datoteku}} je čuva; {{ui:Koristi je u proveri energije}} je predaje EnergyPlus proveri (kartica Energija). Buduća datoteka je ista tipična godina, samo toplija: ne dodaje nove talase vrućine.

## Energetska godina: sadašnja uz buduću

U EnergyPlus proveri na kartici Energija (poseban dodatak, sa sopstvenim motorom), izaberi sadašnju vremensku datoteku, pa scenario i godinu u njenom bloku {{ui:Klimatska budućnost}}, i pritisni {{ui:Simuliraj godinu: sadašnjost i budućnost}}: godina se izvodi na sadašnjoj datoteci i na njenoj morfovanoj budućoj verziji, a grejanje i hlađenje svake prostorije navode se jedno pored drugog.

## Izloženost šumskom požaru (samo orijentaciono)

Izaberi vrstu {{ui:Izloženost šumskom požaru (samo orijentaciono)}}: najbliže rastinje, uspon terena od njega do zgrade i rastojanje do njega. Rezultat je pojas od vrlo niskog do ekstremnog, sadašnji i budući.

:::warning
**Samo orijentaciono.** Ovo je naša sopstvena relativna skala da se vidi da li lokacija treba pravu procenu šumskog požara, a ne ocena po propisu ni nivo napada požara u žbunju. Množi težinu za rastinje, faktor nagiba (vatra otprilike udvostruči brzinu za svakih 10 stepeni uzbrdo, računato do 20 stepeni), faktor rastojanja (10 m podeljeno rastojanjem, najviše 1) i promenu indeksa vremenskih uslova za požar iz paketa.
:::

## Odakle dolaze brojevi

- **Temperatura, vlažnost, sunce, kiša, vremenski uslovi za požar:** NASA NEX-GDDP-CMIP6, dnevni smanjeni izlaz CMIP6 modela. Izlaz svakog modela je pod licencom CC BY 4.0. Promena indeksa vremenskih uslova za požar je kanadski indeks vremenskih uslova za požar izračunat dan po dan iz vremena modela (sa dnevnom vlažnošću umesto podnevne).
- **Porast nivoa mora:** globalna srednja vrednost IPCC AR6 (ne lokalna; podizanje ili tonjenje zemlje nije u njoj), osim ako paket nosi lokalne brojke.
- Paket navodi svoj izvor, licencu i datum; panel ih prikazuje.
