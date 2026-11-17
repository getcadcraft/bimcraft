---
title: Prostori in ločilniki prostorov
summary: Izberite prostor, da ga poimenujete in oštevilčite ter preberete njegovo površino, obseg in prostornino. Narišite ločilnik prostorov tam, kjer se dva prostora stikata brez stene vmes.
keywords: prostor, prostori, ločilnik prostorov, ločilna črta, prostor, IfcSpace, ime, številka, površina, obseg, prostornina, odprt tloris, razdelitev prostora, kuhinja in dnevna soba, ni zaprt
from: d4c1d66b
---

## Kaj boste naredili

Poimenujte prostore, ki jih ustvarjajo stene, in razdelite odprt prostor na dva brez stene.

## Kje so orodja

- Postavitve s trakom: {{ui:Arhitektura}} › **Prostor in površina** › {{ui:Prostor}} in {{ui:Ločilnik prostorov}}.
- Klasična postavitev: vrstica za risanje › meni {{ui:Prostori}}.
- Kateri koli slog menija: ukazi se imenujejo Room in Room Separator; ukazna paleta ju najde.

## Koraki

1. Narišite stene. Vsaka zaprta zanka sten je že prostor: BimCraft ga ustvari, oštevilči in mu dodeli površino, ko rišete.
2. Izberite {{ui:Prostor}}. Premaknite se nad tloris: prostor pod kazalcem se osvetli s svojo površino, obsegom in prostornino.
3. Za hitro poimenovanje prostorov najprej v vrstici vpišite {{ui:Ime}} in {{ui:Številka}}, nato kliknite v prostor. Številka se za naslednji prostor samodejno poveča za ena (101, 102; A-09, A-10).
4. Ali pa preprosto kliknite prostor: izbran je, v Lastnostih pa so njegovo ime, številka, površina, obseg, prostornina in oznaka.
5. Če želite razdeliti odprt prostor, izberite {{ui:Ločilnik prostorov}} in kliknite dve točki: od stene do stene ali od stene do drugega ločilnika. Za verigo nadaljujte s klikanjem; Enter, Esc ali dvojni klik ga konča.

## Kaj ločilnik naredi

- Omejuje prostore kot stena brez debeline. Površini obeh prostorov se natančno seštejeta v prvotni prostor.
- Prostor, ki hrani sredino starega prostora, obdrži ime in številko. Drugi je nov.
- Ločilnik, ki se ustavi na odprtem in se na enem koncu ničesar ne dotika, ničesar ne razdeli. Podaljšajte ga, pa bo.
- Del ločilnika, ki leži znotraj stene, se prezre, zato se lahko pripnete na središčnice sten.
- Izberite ločilnik in pritisnite Delete, da ga odstranite: dva prostora spet postaneta eden. Razveljavitev ga vrne.

## Če na mestu klika ni prostora

Vrstica stanja to pove: stene tam ne sklenejo. Zaprite vrzel ali narišite ločilnik čez njo. Nič se ne zavrne; zaprtega prostora pač še ni.

## V datoteki IFC

Prostor je IfcSpace s svojo številko (Name), imenom (LongName) in Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Prostornina je površina krat višina do nivoja nad njim.

Ločilnik prostorov je IfcVirtualElement, entiteta, ki jo IFC uporablja za mejo, ki ni zgrajena. Ima črto in brez telesa, zato drugi program ne bere stene in zanj ničesar ne šteje.

## Še ni izdelano

- Ukrivljeni ločilniki.
- Prostor, ki sledi nagnjenemu stropu: prostornina je vedno površina krat višina nivoja.
- Relacije mejnih ploskev prostora (IfcRelSpaceBoundary) se ne zapisujejo, niti za stene niti za ločilnike.

Glejte tudi [Oznake prostorov in površin](topic:room-and-area-tags), [Površine in meje površin](topic:areas-and-area-boundaries).
