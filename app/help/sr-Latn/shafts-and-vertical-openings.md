---
title: Okna i otvori kroz podove
summary: Okno je jedan obris koji seče svaki pod, plafon i krov između dva nivoa. Vertikalni otvor seče jedan od njih. Otvor u zidu seče zid.
keywords: okno, lift, okno lifta, stepenišni otvor, stepenik, vertikalni otvor, otvor u podu, otvor u plafonu, otvor u krovu, krovni otvor, rupa u podu, otvor u zidu, IfcOpeningElement, odbitak, neto površina
from: 8e9e1641
---

## Šta ćeš raditi

Iseci okno lifta kroz zgradu jednom skicom, iseci rupu u jednom spratu, i pročitaj šta je oduzeto od površina.

## Gde su alati

- Rasporedi sa trakom: {{ui:Arhitektura}} › **Otvor** › {{ui:Okno}}, {{ui:Vertikalni otvor}} i {{ui:Otvor u zidu}}.
- Klasični raspored: traka za crtanje › meni {{ui:Prostorije}} (Okno, Vertikalni otvor) i › meni {{ui:Zidovi}} (Otvor u zidu).

## Okno

1. Otvori osnovu sprata na kome okno počinje. Izaberi {{ui:Okno}}.
2. U redu izaberi {{ui:Osnovni nivo}} i {{ui:Gornji nivo}}, i pomake ako počinje ili se završava iznad ili ispod njih.
3. Klikni uglove obrisa. Klikni prvi ugao ponovo, dvaput klikni ili pritisni Enter da završiš.
4. Svaki pod, plafon i krov između dve visine se seče. Statusna linija kaže koliko ih je.

Okno je jedna stvar. Izaberi njegov obris na bilo kom nivou kroz koji prolazi: Svojstva imaju ime, nivoe i pomake, šta seče i površinu koja je oduzeta. Promeni ga i svaki otvor ga prati. Obriši ga i nestaju svi otvori. Svaka radnja je jedan korak u opozivanju.

Nastavlja da seče: sprat napravljen kasnije između njegovih nivoa seče se bez traženja, a sprat koji obrišeš se pušta.

Pod na kome okno stoji nije isečen (njegov vrh je osnova). Daj osnovi negativan pomak da bi se i ona isekla. Daj vrhu pozitivan pomak da prođe kroz krov.

## Vertikalni otvor

1. Izaberi {{ui:Vertikalni otvor}}. U redu izaberi šta seče: pod, plafon ili krov.
2. Klikni uglove obrisa i završi kao gore.
3. Pod, plafon ili krov ovog nivoa ispod obrisa se seče. Pripada tom jednom elementu: obriši pod i otvor ide s njim.

## Otvor u zidu

{{ui:Otvor u zidu}} je alat iz [Oblikovanje zida](topic:wall-shape): klikni zid na osnovi, ili dva ugla na njegovoj strani u 3D.

## Količine

Po pravilu za merenje podova, neto površina elementa je njegova bruto površina umanjena za ono što je isečeno iz njega. Okno ili vertikalni otvor je odbitak na svakom podu i plafonu koji seče; tabele Podovi i završne obrade i IFC količine pokazuju iste brojeve. Na krovu odbitak je površina krovne ravni: površina u osnovi podeljena kosinusom nagiba.

Obris koji visi preko ivice oduzima samo deo koji leži na elementu.

## Ako ništa nije isečeno

Okno bez ičega na putu ipak se pravi i to kaže: seći će ono što se kasnije sagradi tamo. Vertikalni otvor treba nešto ispod sebe; bez toga statusna linija to kaže i ništa se ne pravi.

## U IFC-u

Svaki rez je IfcOpeningElement sa IfcRelVoidsElement ka elementu koji seče, pa svaki IFC program prikazuje rupu. Krov se seče ravan po ravan. Samo okno je IfcGroup svojih otvora.

## Još nije napravljeno

- Krivi obrisi.
- Zidovi okna: nacrtaj ih alatom Zid.
- Uređivanje obrisa prevlačenjem njegovih uglova (promeni ga u Svojstvima, ili obriši i skiciraj ponovo).
- Svojstva samog nacrtanog poda pokazuju njegovu površinu umanjenu samo za sopstvene otvore; specifikacije i IFC količine uključuju i one od okna.

Pogledaj i [Prostorije i razdvajači prostorija](topic:rooms-and-separators).
