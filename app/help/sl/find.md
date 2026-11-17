---
title: Najdi elemente po razredu, imenu ali lastnosti
summary: Poiščite vse elemente, ki ustrezajo enemu ali več pravilom – njihovemu razredu, imenu, tipu, etaži, materialu ali vrednosti katere koli lastnosti –, izberite jih vse in pravila shranite kot imenovani nabor iskanja.
keywords: najdi, iskanje, filter, poizvedba, pravilo, nabor iskanja, nabor izbora, shranjeno iskanje, lastnost, vrednost, razred, material, izberi vse
from: 3d293bc2
---

## Kaj boste naredili

Izberite vse elemente ene vrste ali z eno vrednostjo v enem koraku: vsa vrata, vse zidove na nivoju 2, vse elemente z požarno odpornostjo EI60, vse zidove, ki stanejo več kot določen znesek.

## Koraki

1. Odprite model IFC.
2. V levem podoknu odprite {{ui:Najdi}}.
3. V prvem pravilu izberite lastnost (najprej lastnosti elementa, kot sta {{ui:Razred}} in {{ui:Etaža}}, nato nabore lastnosti modela), način primerjave in vrednost. Polje za vrednost ponuja vrednosti, ki jih ima model.
4. Za zožitev kliknite {{ui:Dodaj pravilo}}. Izberite {{ui:Vsa pravila}}, če morajo ustrezati vsa pravila, ali {{ui:Katero koli pravilo}}, če mora ustrezati eno od njih.
5. Kliknite {{ui:Najdi}} ali pritisnite {{key:Enter}} v polju za vrednost. Ustrezni elementi bodo izbrani.
6. Če želite pravila shraniti, kliknite {{ui:Shrani kot nabor}}, vpišite ime in ga znova kliknite. Pozneje kliknite ime nabora, da z njim poiščete elemente.

## Kaj morate videti

- Ujemajoči se elementi so izbrani v 3D-pogledu in drevesu modela, v {{ui:Lastnosti}} pa je navedeno, koliko jih je po razredu. Pritisnite {{key:I}}, da prikažete samo njih, in {{key:H}}, da jih skrijete.
- Besede se ujemajo, ne glede na velike in male črke. Števila se primerjajo kot števila: „je večje od 1000“ pomeni vrednost, ne besedilo.
- {{ui:ima vrednost}} in {{ui:nima vrednosti}} ne potrebujeta vrednosti; najdeta, kar je izpolnjeno, oziroma kar manjka.
- Shranjeni nabori ostanejo v tem brskalniku za vsak model, ki ga odprete.

## Pogoste napake

- **Nič ni najdeno.** Pravilo potrebuje vrednost, ki se lahko ujema: oglejte si predloge v polju za vrednost.
- **Lastnosti ni na seznamu.** Noben element s takšno obliko v tem modelu je nima.

## Naslednje

- [Obarvajte elemente glede na lastnost](topic:color-by-property)
- [Skrijte, izolirajte in prikažite prosojno](topic:hide-and-isolate)
