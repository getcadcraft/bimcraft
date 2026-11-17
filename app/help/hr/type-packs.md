---
title: Skupovi tipova: dijelite tipove zidova kao otvorene datoteke
summary: Spremite tipove zidova s njihovim slojevima, materijalima, oznakama i kodovima klasifikacije te obiteljima kao jednu otvorenu datoteku (običan JSON ili IFC) i dodajte ih u drugi projekt. Tipovi zidova iz IFC datoteke drugog programa također se mogu čitati.
keywords: skup tipova, tipovi, tip zida, dijeljenje, izvoz, uvoz, knjižnica, otvoreni format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materijali, slojevi, predložak, standard ureda, obitelji
from: e4c91331
---

## Što ćete napraviti

Prenesite tipove zidova iz jednog projekta u drugi ili ih predajte nekome tko radi u drugom programu. Skup tipova drži svaki tip zida s njegovim slojevima, debljinama, materijalima, jezgrom, šupljinama, prioritetom slojeva, razinom razrade, podacima za izmjere i kodovima klasifikacije te sve obitelji koje dodate. To je otvorena datoteka: običan JSON tekst koji svatko može pročitati, ili IFC datoteka. Ništa u njoj nije vezano uz tvrtku, državu ili korisnički račun.

## Spremanje tipova iz projekta

1. Otvorite **Podaci** na traci modela i odaberite {{ui:Skupovi tipova}}.
2. Pod {{ui:Spremi tipove iz ovog projekta}} označite tipove zidova koje želite uključiti. Vlastiti tipovi projekta su označeni; početni tip može se dodati i ide kao kopija. Označite obitelji ako ih želite uključiti.
3. Upišite {{ui:Naziv paketa}}.
4. {{ui:Spremi kao paket (.json)}} preuzima datoteku `.cctypes.json`. {{ui:Spremi kao IFC (.ifc)}} preuzima IFC datoteku koja sadrži samo tipove: svaki tip zida kao IfcWallType s njegovim skupom slojeva materijala, materijalima i klasifikacijom, za bilo koji BIM program.

## Dodavanje tipova u projekt

1. U istom dijalogu odaberite {{ui:Otvori paket ili IFC datoteku…}} i odaberite `.json` paket ili `.ifc` datoteku.
2. Dijalog navodi što datoteka sadrži: svaki tip zida s debljinom, brojem slojeva i kodovima, materijalima i obiteljima.
3. Odaberite što se događa s {{ui:Tip koji ovaj projekt već ima}}: **Zadrži projektov**, **Dodaj kopiju iz paketa** (dobiva novi naziv koji završava s "(2)") ili **Zamijeni ga (samo kad ga nijedan zid ne koristi)**.
4. {{ui:Dodaj u projekt}}. Dijalog navodi što je dodano, kopirano, zamijenjeno ili zadržano. To je jedan korak poništavanja.

Novi tipovi odmah su u popisu tipova alata Zid.

## Tipovi podova, krovova i stropova

Popis tipova za spremanje također sadrži tipove podova, krovova i stropova projekta te njihove početne tipove (označene kao Pod, Krov, Strop). Paket može nositi sve četiri vrste; svaki tip navodi svoju IFC klasu (IfcWallType, IfcSlabType, IfcCoveringType). Tip poda, krova ili stropa koji koriste elementi ne zamjenjuje se iz paketa: promijenite ga u uređivaču tipova.

## Jedan tip kao stavka knjižnice

Označite točno jedan tip i odaberite **Spremi kao stavku knjižnice…**. Sprema se datoteka `.cctype.json`: stavka knjižnice vrste Tipovi koja sadrži taj jedan tip (njegove slojeve, materijale, LOD i kodove klasifikacije). Učitajte je u knjižnicu da biste je podijelili. **Otvori paket ili IFC datoteku** čita i takvu stavku te dodaje njezin tip u projekt kao paket.

## Dobro je znati

- IFC datoteka iz drugog programa može se otvoriti i ovdje. Čita se svaki njezin tip zida koji ima slojeve materijala: naziv, materijali slojeva i debljine te eventualna šupljina pripadaju datoteci. Koji su slojevi jezgra i što svaki sloj radi (završna obrada, konstrukcija, izolacija) se pogađa, tip je označen **(pogođeno)**, a treba ga provjeriti u uređivaču tipa zida. Tip zida bez slojeva izostavlja se i imenuje.
- Materijal koji projekt već ima ostaje kakav je. Novi materijal čiji je naziv zauzet dobiva "(paket)" iza naziva.
- Tip koji zidovi koriste nikad se ne zamjenjuje iz paketa. Promijenite ga u uređivaču tipa zida, koji pravilno pomiče njegove zidove.
- Kod postavljen na jednom zidu ne putuje: pripada tom zidu. Kod postavljen na tipu putuje.
- Datoteka s poljem koje format nema, sloj čiji materijal nedostaje ili bilo što što nije običan tekst se odbija, a poruka kaže gdje i zašto.
- Još nije izrađeno: tipovi podova, krovova i stropova (u ovoj verziji nemaju tipove: svaki ima vlastitu debljinu), tipovi vrata i prozora osim obitelji, te šrafure ili boje iz datoteke drugog programa.
