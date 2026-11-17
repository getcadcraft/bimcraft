---
title: Grupe modela
summary: Izaberite elemente i napravite jednu imenovanu grupu, ponovo postavite grupu na drugo mesto i promenite jednu kopiju, pa se promene sve.
keywords: grupa, grupa modela, grupisanje, razgrupisanje, primerak, kopija, ponavljanje, tipična jedinica, polje, stan, uređivanje grupe, IfcGroup
from: 121c5027
---

## Šta ćete uraditi

Grupišite tipično polje, postavite ga nekoliko puta i promenite svaku kopiju menjajući jednu.

## Gde je alat

- Rasporedi sa trakom: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Klasični raspored: traka {{ui:Draw}} › meni {{ui:Rooms}} › Grupa modela.

## Koraci

1. Sa alatom Izaberi izaberite elemente: kliknite jedan, pa Ctrl+klik ili Shift+klik ostale.
2. Izaberite {{ui:Model Group}}. Odmah postaju grupa. Upišite {{ui:Group name}} u red pre toga da je imenujete, ili ga upišite posle da promenite ime.
3. Pritisnite {{ui:Place another}} i kliknite gde kopija treba da stoji: njen donji levi ugao ide u tačku klika.
4. Promenite bilo koju kopiju: pomerite kraj zida, promenite veličinu vrata, izbrišite stub. Svaka druga kopija grupe menja se u istom koraku, a jednim opozivanjem (Opozovi) sve se vraća.
5. Dok je Grupa modela u ruci, klik na element bira celu njegovu grupu.

## Ostale mogućnosti

- {{ui:Add the picked}}: dodaje još elemenata grupi koju ste poslednju izabrali.
- {{ui:Ungroup}}: ova kopija postaje obični elementi. Ostale kopije ostaju grupa.
- Celu kopiju pomerite alatom {{ui:Move}}: to je ista grupa na novom mestu; ostale se ne pomeraju.
- Izbrišite elemente jedne kopije i ta kopija nestaje.

## Šta može biti u grupi

Zidovi sa vratima i prozorima, stubovi i nacrtane podne ploče mogu se ponovo postaviti i ostati isti. Grupa može sadržati i druge elemente, ali tada ne može da se ponovo postavi; red kaže zašto.

Kopije se pomeraju, ne okreću se i ne ogledaju.

## U IFC-u

Grupa je IfcGroup sa IfcRelAssignsToGroup prema svojim članovima, koji ostaju obični zidovi, stubovi i podovi. Svaka kopija jedne grupe nosi isti identifikator definicije.

## Još nije napravljeno

- Okretanje ili ogledanje kopije.
- Stepenice, krovovi, podovi prostorija i stavke biblioteke u grupi koja se ponovo postavlja.
- Profil zida, nagib i otvori u zidu ne prenose se na kopije.
- Grupe unutar grupa.

Pogledajte i [Pomeranje, poravnanje i raspoređivanje](topic:move-align-distribute).
