---
title: Označite elemente kot preverjene ali preverjene na terenu
summary: Element, prebran iz PDF-ja ali skeniranja, je nepreverjen, dokler ga ne preverite. Označite elemente kot preverjene ali kot preverjene na terenu (LOD 500) z navedbo, kdo jih je izmeril, kdaj in kako, ter predajte model kot zgrajen, ki pove, kateri je kateri.
keywords: nepreverjeno, preverjeno, preverjeno na terenu, kot zgrajeno, kot-zgrajeno, lod 500, zaključek, primopredaja, izmerjeno na terenu, meter, laser, skeniranje, geodetski posnetek, obstoječa stavba, sprememba, označi kot preverjeno, preverjanje, faza 7
from: df35d908
---

## Kaj boste naredili

Spremljajte, kaj v modelu je dejansko nekdo pregledal. Element ima eno od treh oznak ali nobene:

- **Nepreverjeno**: program ga je prepoznal iz PDF-ja, skenirane risbe, prerisane risbe ali skeniranja oblaka točk. Nihče ga še ni preveril.
- **Preverjeno**: oseba ga je primerjala z risbo, iz katere izvira.
- **Preverjeno na terenu (LOD 500)**: oseba ga je izmerila na terenu. Kdo, kdaj in kako je shranjeno z njim.
- **Brez oznake**: narisal ga je človek. Model o njem ne trdi ničesar.

## Koraki

1. Izberite en element ali več (stene, vrata, okna, prostori, kateri koli element).
2. V {{ui:Lastnosti}} odprite {{ui:Preverjanje}}.
3. Vpišite, kdo ga je preveril ali izmeril. Datum je danes, dokler ga ne spremenite.
4. Kliknite {{ui:Označi kot preverjeno}}. Za meritev na terenu izberite, kako je bil izmerjen (merilni trak, laserski merilnik razdalje, skeniranje, geodetski posnetek), in kliknite {{ui:Označi kot preverjeno na terenu (LOD 500)}}.
5. {{ui:Označi kot nepreverjeno}} in {{ui:Odstrani oznako}} vrneta nazaj. Vsak klik je en korak, ki ga lahko razveljavite, za celoten izbor.

Hitro označevanje izbora: {{ui:Orodja}} › {{ui:Označi kot preverjeno}} (vneseno: `MARKCHECKED`) označi izbor kot preverjen s strani vas, danes.

## Kaj morate videti

- V tlorisu ima nepreverjen element črtkan okvir in „?“; preverjen na terenu ima kljukico. Odkljukajte {{ui:Prikaži oznake preverjanja v tlorisu}} v razdelku {{ui:Revizija}}, da jih skrijete.
- {{ui:Razpredelnice}} › {{ui:Preverjanje}} našteje vsak označen element z etažo, stanjem, kdo, kdaj, kako in od kod izvira.
- Revizija našteje nepreverjene elemente in šteje element, preverjen na terenu, kot LOD 500. Glejte [Revizija modela](topic:audit-the-model).

## Iz skeniranja

Ko primerjate skeniranje z modelom, {{ui:Označi ujemajoče elemente kot preverjene na terenu}} označi vsak element, ki ga je skeniranje videlo kot zgrajenega v tolerančnem območju, z metodo „skeniranje“ in toleranco v opombi. Glejte [Primerjava skeniranja z modelom](topic:compare-scan-with-model).

:::warning
Ta primerjava ujema okvir vsakega elementa s točkami skeniranja. Ni geodetski posnetek. Uporabite jo za elemente, ki ste jih tudi sami pregledali.
:::

## Model kot zgrajen in paket za primopredajo

{{ui:Sestavi paket za primopredajo}} na zavihku {{ui:Sredstva}} da model kot zgrajen v zip, z:

- izjavo o projektu, koliko elementov je preverjenih na terenu, preverjenih, nepreverjenih in neoznačenih;
- `as-built/verified-elements.csv`: vsak element in prostor s stanjem, kdo, kdaj in kako;
- `as-built/as-built-drawings.pdf`: komplet risb takšen, kot je zdaj;
- dnevnik sprememb risb, če ima model izdane komplete.

Glejte [Sredstva in vzdrževanje](topic:assets-and-maintenance).

## Kako je to shranjeno v IFC

Vsak označen element nosi nabor lastnosti `CadCraft_Verification`: State, By, On, Method, Source, Note in LevelOfDevelopment (`LOD 500`, ko je preverjen na terenu). To so navadne besedilne lastnosti, zato jih drugi programi prikažejo, ter jih lahko uporabljata Iskanje in Barvanje po lastnosti ter razpredelnice oznak. Model kot zgrajen je nabor lastnosti `CadCraft_AsBuilt` na projektu. Element brez tega nabora ni bil izmerjen na terenu.

## Naslednje

- [Stene iz kompleta risb](topic:walls-from-plans)
- [Revizija modela](topic:audit-the-model)
