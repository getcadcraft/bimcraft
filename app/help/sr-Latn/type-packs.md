---
title: Paketi tipova: deli tipove zidova kao otvorene datoteke
summary: Sačuvaj tipove zidova sa njihovim slojevima, materijalima, oznakama i klasifikacionim kodovima, i porodicama, kao jednu otvorenu datoteku (običan JSON ili IFC), pa ih dodaj u drugi projekat. Tipovi zidova iz IFC datoteke drugog programa mogu se takođe pročitati.
keywords: paket tipova, tipovi, tip zida, deljenje, izvoz, uvoz, biblioteka, otvoren format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materijali, slojevi, šablon, kancelarijski standard, porodice
from: e4c91331
---

## Šta ćeš uraditi

Prenesi tipove zidova iz jednog projekta u drugi, ili ih predaj nekome ko radi u drugom programu. Paket tipova sadrži svaki tip zida sa njegovim slojevima, debljinama, materijalima, jezgrom, šupljinama, prioritetom slojeva, nivoom razrade, podacima za predmer i klasifikacionim kodovima, i sve porodice koje dodaš. To je otvorena datoteka: običan JSON tekst koji svako može da pročita, ili IFC datoteka. Ništa u njoj nije vezano za firmu, zemlju ili nalog.

## Čuvanje tipova iz projekta

1. Otvori **Podaci** u traci modela i izaberi {{ui:Paketi tipova}}.
2. Pod {{ui:Sačuvaj vrste iz ovog projekta}} označi tipove zidova koje ubacuješ. Projektovi sopstveni tipovi su označeni; početni tip se može dodati i ulazi kao kopija. Označi porodice ako hoćeš da ih uključiš.
3. Upiši {{ui:Naziv paketa}}.
4. {{ui:Sačuvaj kao paket (.json)}} preuzima datoteku `.cctypes.json`. {{ui:Sačuvaj kao IFC (.ifc)}} preuzima IFC datoteku koja sadrži samo tipove: svaki tip zida kao IfcWallType sa svojim skupom slojeva materijala, materijalima i klasifikacijom, za bilo koji BIM program.

## Dodavanje tipova u projekat

1. U istom prozoru izaberi {{ui:Otvori paket ili IFC datoteku…}} i izaberi `.json` paket ili `.ifc` datoteku.
2. Prozor prikazuje šta datoteka sadrži: svaki tip zida sa debljinom, brojem slojeva i kodovima, materijale i porodice.
3. Izaberi šta se dešava sa {{ui:Vrsta koju ovaj projekat već ima}}: **Zadrži projektovu**, **Dodaj iz paketa kao kopiju** (dobija novi naziv koji se završava sa „(2)“) ili **Zameni je (samo kad je nijedan zid ne koristi)**.
4. {{ui:Dodaj u projekat}}. Prozor prikazuje šta je dodato, kopirano, zamenjeno ili zadržano. To je jedan korak za opoziv.

Novi tipovi su odmah na spisku tipova alata Zid.

## Tipovi podova, krovova i plafona

Spisak tipova za čuvanje sadrži i tipove podova, krovova i plafona projekta i njihove početne tipove (označene sa Pod, Krov, Plafon). Paket može da nosi sve četiri vrste; svaki tip navodi svoju IFC klasu (IfcWallType, IfcSlabType, IfcCoveringType). Tip poda, krova ili plafona koji elementi koriste ne zamenjuje se iz paketa: menjaj ga u uređivaču tipova.

## Jedan tip kao stavka biblioteke

Označi tačno jedan tip i izaberi **Sačuvaj kao stavku biblioteke…**. Time se čuva datoteka `.cctype.json`: stavka biblioteke vrste Tipovi koja sadrži taj jedan tip (njegove slojeve, materijale, nivo razrade i klasifikacione kodove). Otpremi je u Biblioteku da je podeliš. **Otvori paket ili IFC datoteku** čita i takvu stavku i dodaje njen tip u projekat kao paket.

## Dobro je znati

- IFC datoteka iz drugog programa može se otvoriti i ovde. Svaki njen tip zida koji ima slojeve materijala se čita: naziv, materijali i debljine slojeva i eventualna šupljina su same datoteke. Koji sloj je jezgro i šta svaki sloj radi (završna obrada, konstrukcija, izolacija) pogađa se, tip je označen sa **(pogođeno)**, a treba ga proveriti u uređivaču tipa zida. Tip zida bez slojeva se izostavlja i navodi se.
- Materijal koji projekat već ima ostaje kakav jeste. Novi materijal čiji je naziv zauzet dobija „(paket)“ posle naziva.
- Tip koji koriste zidovi nikad se ne zamenjuje iz paketa. Menjaj ga u uređivaču tipa zida, koji pravilno pomera njegove zidove.
- Kod postavljen na jednom zidu ne putuje: pripada tom zidu. Kod postavljen na tipu putuje.
- Datoteka sa poljem koje format nema, sloj čiji materijal nedostaje, ili bilo šta što nije običan tekst se odbija, a poruka kaže gde i zašto.
- Nije napravljeno: tipovi podova, krovova i plafona (u ovoj verziji nemaju tipove: svaki ima svoju debljinu), tipovi vrata i prozora osim porodica, kao i šrafure ili boje iz datoteke drugog programa.
