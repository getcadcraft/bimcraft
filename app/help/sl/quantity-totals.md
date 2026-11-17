---
title: Seštejte količine, izpišite elemente in razpredelite prostore
summary: Preštejte elemente in seštejte njihove dolžine, površine, prostornine ali katero koli številsko lastnost, združeno po poljubni lastnosti; izpišite eno vrstico na element ali razpredelite prostore z njihovimi površinami in prostorninami. Vsaka možnost se prenese kot CSV.
keywords: količina, količine, predizmere, seštevki, vsota, razpredelnica, popis del, boq, qto, csv, združi po, štetje, dolžina, površina, prostornina, prostori, sobe, razpredelnica sob, razpredelnica površin, seznam elementov
from: e2e7210c
---

## Kaj boste naredili

Pridobite seštevke iz modela: dolžine sten po etažah, števila vrat po tipu, prostornino plošč po materialu, strošek vsake cone.

## Koraki

1. Odprite model IFC.
2. V levem podoknu odprite {{ui:Seštevki količin}}.
3. V {{ui:Štej}} izberite {{ui:Vsak element}} ali samo izbrane.
4. Pod {{ui:Združi po}} izberite lastnost, na primer {{ui:Razred}}. Kliknite {{ui:Dodaj skupino}}, da razdelite še naprej, do treh, na primer po {{ui:Etaža}}.
5. Pod {{ui:Seštej}} označite števila, ki jih želite sešteti. Nabori količin modela so na začetku označeni.
6. Kliknite {{ui:Prenesi CSV}}, da odprete tabelo v preglednici.

## Kaj naj vidite

- Vrstica za vsako skupino s številom elementov in vsakim seštevkom ter vrstica skupnega seštevka.
- Elementi brez vrednosti so šteti, vendar ne dodajo ničesar. Takrat CSV ob seštevku doda stolpec "izpuščeno", da vidite, koliko jih je.
- Števila so v enotah datoteke, kot jih ta shranjuje, pogosto milimetri za dolžine.

## Ena vrstica na element ali prostori

Spremenite {{ui:Pokaži}}:

- **Ena vrstica na element**: vsak element v svoji vrstici, z lastnostmi pod {{ui:Stolpci}} in števili pod {{ui:Seštej}}. CSV se začne z GlobalId vsakega elementa. Kliknite prvo vrednost v vrstici, da izberete ta element.
- **Prostori**: vsaka soba s številko, imenom, etažo, površino in prostornino ter njuni seštevki. Površine in prostornine prihajajo iz količin prostora, kot jih datoteka navaja. Kadar jih datoteka nima, se izmerita iz oblike prostora v m² in m³ ter prikažeta ležeče; CSV pove, kaj je kaj.

## Naprej

- [Najdite elemente po razredu, imenu ali lastnosti](topic:find)
- [Obarvajte elemente po lastnosti](topic:color-by-property)

## Infrastruktura (IFC 4.3)

Na seznamu pogledov izberite **Infrastruktura (IFC 4.3)**, da vidite ceste, železnice, mostove in morska dela, seštete po razredu in tipu, z dolžino, površino in prostornino, ki jih datoteka sama navaja. Količina, ki je datoteka ne navaja, ostane prazna in se nikoli ne izračuna. **Pošlji količine infrastrukture v TakeoffCraft** shrani datoteko `.quantities.json`, ki jo TakeoffCraft odpre kot tipizirane količine.
