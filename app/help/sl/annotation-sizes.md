---
title: Risanje v naravni velikosti, opombe po merilu
summary: Stavba je vedno narisana v naravni velikosti. Besedilo, kote, oznake, imena prostorov, mrežni krogci in simboli so določeni na papirju, v milimetrih, kot so natisnjeni, in ohranijo to velikost, ko se merilo risbe spremeni z 1:100 na 1:50.
keywords: merilo opomb, opombe, velikost besedila, višina besedila, višina na papirju, velikost besedila kote, velikost oznake, velikost imena prostora, mrežni krogec, velikost simbola, merilo risbe, 1:50, 1:100, pisarniški standard, pisava, risanje v 1:1, naravna velikost, besedilo na listu
from: 94118788
---

## Kaj boste naredili

Enkrat za stavbo nastavite, kako visoke so črke na vaših risbah na papirju. Modela nikoli ne merite in besedila nikoli ne spreminjate glede na merilo: BimCraft izračuna velikost iz višine na papirju in merila risbe.

## Kako deluje

- Model je v naravni velikosti. 10 m dolg zid je dolg 10 000 mm pri vsakem merilu.
- Opomba ima **višino na papirju**: višino velike črke na natisnjenem listu v milimetrih.
- Pri merilu 1:100 je besedilo višine 2.5 mm v modelu visoko 250 mm; pri 1:50 je visoko 125 mm. Na papirju je 2.5 mm v obeh primerih.
- Tlorisni simboli (električni, vodovodni) so narisani v milimetrih na papirju in sledijo istemu pravilu.

## Koraki

1. Odprite projektni brskalnik. Pod {{ui:Sheets}} kliknite {{ui:Annotation sizes…}}.
2. Vnesite višino v milimetrih za vrste, ki jih želite nastaviti: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} in {{ui:Schedule text}}. Prazno polje ohrani lastno velikost BimCraft, prikazano sivo.
3. Kliknite {{ui:Save}}. Gre za en korak, ki ga lahko razveljavite.

Vsak list, komplet risb, PDF tlorisa ter pogledi in prerezi od takrat uporabljajo te velikosti. Razmik med kotno črto in njenim besedilom, velikost mrežnega krogca in višina vrstice razpredelnice rastejo skupaj z besedilom.

## Tloris z lastnim merilom

Tlorisu dajte merilo v njegovem razponu pogleda ({{ui:Scale}}; glejte [Pogledi in listi](topic:views-and-sheets)). Nato:

- na zaslonu so imena prostorov, oznake, besedilo kot in mrežni krogci narisani v svoji natisnjeni velikosti glede na model, tako da je videno enako, kot bo prikazano na listu;
- simboli tlorisa in njihove oznake so velikosti za to merilo. Če merilo spremenite z 1:100 na 1:50, so v modelu pol manjši, na papirju pa enaki.

Tloris brez lastnega merila ohrani svoje stalno besedilo na zaslonu, njegovi simboli pa so velikosti za 1:50 (1/4" = 1'-0" v čevljih in palcih), kot prej.

## Velikosti vaše pisarne

Z vklopljenim dodatkom Default Policies nastavite višine svoje pisarne v Nastavitve › Splošno › Default Policies › {{ui:Annotation sizes on paper}}. Nova stavba jih prevzame, ko kliknete Ustvari. V stavbi, ki ste jo že začeli, ima pogovorno okno {{ui:Use my office's sizes}}. Glejte [Default Policies](topic:default-policies).

## Velikosti predpisnega paketa

Dodatek Building regulations (konvencije risanja) lahko poda višine besedila, ki jih zahteva njegovo mesto. Označite paket v Nastavitve › Building regulations, nato v pogovornem oknu kliknite {{ui:Use a regulation pack's sizes}}: polja se napolnijo, vi jih preverite in shranite. Velikost, ki jo paket poda v točkah, je velikost pisave in se pretvori v višino velikih črk, zato jo preverite. Nič se ne nastavi, dokler ne shranite.

## Kaj naj vidite

- Enaka višina besedila v milimetrih na listu pri 1:100 in na listu pri 1:50, medtem ko je tloris pri 1:50 dvakrat večji.
- Velikosti potujejo s stavbo: shranjene so v njeni IFC datoteki.

## Dobro je vedeti

- Lastne velikosti BimCraft so tiste, ki jih njegovi listi vedno uporabljajo (približno 1.5 mm velike črke za besedilo kot). Niso risarski standard: nastavite velikosti svoje pisarne.
- Višina mora biti od 0.5 do 50 mm.
- Napisi v glavi risbe in legende oznak niso del tega: ohranijo svoje velikosti.
