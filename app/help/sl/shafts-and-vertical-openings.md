---
title: Šahti in odprtine skozi etaže
summary: Šaht je en obris, ki preseka vsa tla, strop in streho med dvema nivojema. Navpična odprtina preseka eno od njih. Odprtina v zidu preseka zid.
keywords: šaht, dvižni šaht, šaht dvigala, odprtina za stopnišče, vertikala, navpična odprtina, odprtina v tleh, odprtina v stropu, odprtina v strehi, odprtina za svetlobnik, luknja v tleh, odprtina v zidu, IfcOpeningElement, odbitek, neto površina
from: 8e9e1641
---

## Kaj boste naredili

Izrežite dvižni šaht skozi stavbo z eno skico, izrežite luknjo v eni etaži in preberite, koliko je bilo odvzeto iz površin.

## Kje so orodja

- Postavitve traku: {{ui:Arhitektura}} › **Odprtina** › {{ui:Šaht}}, {{ui:Navpična odprtina}} in {{ui:Odprtina v zidu}}.
- Klasična postavitev: vrstica Risanje › meni {{ui:Prostori}} (Šaht, Navpična odprtina) in › meni {{ui:Zidovi}} (Odprtina v zidu).

## Šaht

1. Odprite tloris etaže, na kateri se šaht začne. Izberite {{ui:Šaht}}.
2. V vrstici izberite {{ui:Spodnji nivo}} in {{ui:Zgornji nivo}}, ter zamike, če se začne ali konča nad njima ali pod njima.
3. Kliknite oglišča obrisa. Prvo oglišče kliknite znova, dvokliknite ali pritisnite Enter, da končate.
4. Vsaka tla, strop in streha med obema višinama se prerežejo. Vrstica stanja pove, koliko jih je.

Šaht je ena stvar. Izberite njegov obris na kateri koli etaži, ki jo prehaja: v **Lastnosti** so njegovo ime, nivoji in zamiki, kaj prereže in odvzeta površina. Spremenite ga in vsaka odprtina mu sledi. Izbrišete ga in odprtin ni več. Vsako dejanje je en korak razveljavitve.

Še naprej reže: tla, ustvarjena pozneje med njegovima nivojema, se prerežejo brez zahteve, tla, ki jih izbrišete, pa se izpustijo.

Tla, na katerih stoji šaht, se ne prerežejo (njihov vrh je osnova). Osnovi dodajte negativen zamik, da jo prerežete tudi. Vrhu dodajte pozitiven zamik, da gre skozi streho.

## Navpična odprtina

1. Izberite {{ui:Navpična odprtina}}. V vrstici izberite, kaj se reže: tla, strop ali streha.
2. Kliknite oglišča obrisa in končajte, kot zgoraj.
3. Tla, strop ali streha te etaže pod obrisom se prerežejo. Pripadajo temu enemu elementu: če izbrišete tla, gre odprtina z njimi.

## Odprtina v zidu

{{ui:Odprtina v zidu}} je orodje [Oblikovanje zidu](topic:wall-shape): kliknite zid na tlorisu ali dve oglišči na njegovi ploskvi v 3D.

## Količine

Po pravilu merjenja za tla je neto površina elementa njegova bruto površina, zmanjšana za to, kar je iz njega odrezano. Šaht ali navpična odprtina je odbitek na vsakih tleh in stropu, ki ju reže; razpredelnici Tla in obdelave ter količine IFC kažeta enake številke. Na strehi je odbitek površina strešne ploskve: površina tlorisa, deljena s kosinusom naklona.

Obris, ki sega čez rob, odbije samo del, ki leži na elementu.

## Če ničesar ni prerezano

Šaht, ki nima ničesar na poti, se vseeno naredi in to pove: prerezal bo, kar bo pozneje zgrajeno tam. Navpična odprtina potrebuje nekaj pod seboj; če ničesar ni, vrstica stanja to pove in ničesar ni narejeno.

## V IFC

Vsak rez je IfcOpeningElement z IfcRelVoidsElement do elementa, ki ga reže, zato vsak program IFC prikaže luknjo. Streha se reže ploskev za ploskvijo. Sam šaht je IfcGroup svojih odprtin.

## Še ni izdelano

- Ukrivljeni obrisi.
- Zidovi šahta: narišite jih z orodjem Zid.
- Urejanje obrisa z vlečenjem njegovih oglišč (spremenite ga v Lastnosti ali izbrišite in znova skicirajte).
- Lastnosti narisanih tal kažejo samo njihovo površino minus lastne odprtine; razpredelnice in količine IFC vključujejo tudi šahte.

Glejte tudi [Prostori in ločila prostorov](topic:rooms-and-separators).
