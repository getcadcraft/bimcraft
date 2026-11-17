---
title: Grupe modela
summary: Odabrane elemente spojite u jednu imenovanu grupu, grupu ponovno postavite na drugo mjesto i promijenite jednu kopiju da se promijene sve.
keywords: grupa, grupa modela, grupiranje, razgrupiranje, instanca, kopija, ponavljanje, tipična jedinica, traveja, stan, uredi grupu, IfcGroup
from: 121c5027
---

## Što ćete učiniti

Grupirajte tipičnu traveju, postavite je nekoliko puta i promijenite svaku kopiju mijenjanjem jedne.

## Gdje je alat

- Izgled s vrpcom: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Klasični izgled: traka Crtanje › izbornik {{ui:Rooms}} › Grupa modela.

## Koraci

1. Alatom Odaberi kliknite elemente: kliknite jedan, a ostale dodajte s Ctrl+klik ili Shift+klik.
2. Odaberite {{ui:Model Group}}. Odmah postaju grupa. Upišite {{ui:Group name}} u redak prije toga da biste je imenovali, ili upišite naziv poslije da je preimenujete.
3. Pritisnite {{ui:Place another}} i kliknite mjesto na kojem kopija treba stajati: njezin donji lijevi kut ide u točku klika.
4. Promijenite bilo koju kopiju: pomaknite kraj zida, promijenite veličinu vrata, izbrišite stup. Svaka druga kopija grupe mijenja se u istom koraku, a jedan Poništi vraća sve.
5. Dok je {{ui:Model Group}} aktivan, klik na element odabire cijelu njegovu grupu.

## Ostale mogućnosti

- {{ui:Add the picked}}: dodajte više elemenata grupi koju ste zadnju odabrali.
- {{ui:Ungroup}}: ova kopija postaje obični elementi. Ostale kopije ostaju grupa.
- Pomaknite cijelu kopiju alatom {{ui:Move}}: to je ista grupa na novom mjestu; ostale se ne pomiču.
- Izbrišite elemente jedne kopije i ta kopija nestaje.

## Što može biti u grupi

Zidovi s vratima i prozorima, stupovi i nacrtani podovi mogu se ponovno postaviti i držati jednakima. Grupa može sadržavati i druge elemente, ali tada se ne može ponovno postaviti; redak kaže zašto.

Kopije se pomiču, ne okreću niti zrcale.

## U IFC-u

Grupa je IfcGroup s IfcRelAssignsToGroup prema svojim članovima, koji ostaju obični zidovi, stupovi i podovi. Svaka kopija jedne grupe nosi isti ID definicije.

## Još nije izrađeno

- Okretanje ili zrcaljenje kopije.
- Stubišta, krovovi, podovi prostorija i stavke knjižnice u grupi koja se ponovno postavlja.
- Profil zida, nagib i otvori u zidu ne prenose se na kopije.
- Grupe unutar grupa.

Vidi također [Pomicanje, poravnavanje i raspoređivanje](topic:move-align-distribute).
