---
title: Paketi tipova: dijelite tipove zidova kao otvorene datoteke
summary: Sačuvajte tipove zidova sa njihovim slojevima, materijalima, oznakama i kodovima klasifikacije, te porodicama, kao jednu otvorenu datoteku (običan JSON ili IFC), i dodajte ih drugom projektu. Tipovi zidova iz IFC datoteke drugog programa takođe se mogu pročitati.
keywords: paket tipova, tipovi, tip zida, dijeljenje, izvoz, uvoz, biblioteka, otvoreni format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materijali, slojevi, šablon, standard ureda, porodice
from: e4c91331
---

## Šta ćete uraditi

Prenesite tipove zidova iz jednog projekta u drugi, ili ih predajte nekome ko radi u drugom programu. Paket tipova sadrži svaki tip zida sa njegovim slojevima, debljinama, materijalima, jezgrom, šupljinama, prioritetom slojeva, nivoom razvoja, podacima za predmjer i kodovima klasifikacije, te sve porodice koje dodate. To je otvorena datoteka: običan JSON tekst koji svako može pročitati, ili IFC datoteka. Ništa u njoj nije vezano za firmu, zemlju ili nalog.

## Sačuvajte tipove iz projekta

1. Otvorite **Podaci** na traci modela i odaberite {{ui:Type packs}}.
2. Pod {{ui:Save types from this project}}, označite tipove zidova koje želite. Tipovi projekta su već označeni; početni tip se može dodati i ulazi kao kopija. Označite porodice ako ih želite.
3. Upišite {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} preuzima datoteku `.cctypes.json`. {{ui:Save as IFC (.ifc)}} preuzima IFC datoteku koja sadrži samo tipove: svaki tip zida kao IfcWallType sa svojim skupom slojeva materijala, materijalima i klasifikacijom, za bilo koji BIM program.

## Dodajte tipove projektu

1. U istom dijalogu odaberite {{ui:Open a pack or an IFC file…}} i izaberite `.json` paket ili `.ifc` datoteku.
2. Dijalog prikazuje šta datoteka sadrži: svaki tip zida sa debljinom, brojem slojeva i kodovima, materijale i porodice.
3. Odaberite šta se događa sa {{ui:A type this project already has}}: **Keep the project's** (Zadrži projektov), **Add the pack's as a copy** (Dodaj paketov kao kopiju; dobija novi naziv koji se završava sa "(2)"), ili **Replace it (only when no wall uses it)** (Zamijeni ga, samo kada nijedan zid ne koristi).
4. {{ui:Add to the project}}. Dijalog prikazuje šta je dodato, kopirano, zamijenjeno ili zadržano. To je jedan korak poništavanja.

Novi tipovi su odmah u listi tipova alata Zid.

## Tipovi podova, krovova i plafona

Lista tipova za čuvanje takođe sadrži tipove podova, krovova i plafona projekta i njihove početne tipove (označene kao Floor, Roof, Ceiling). Paket može nositi sve četiri vrste; svaki tip navodi svoju IFC klasu (IfcWallType, IfcSlabType, IfcCoveringType). Tip poda, krova ili plafona koji koriste elementi ne zamjenjuje se iz paketa: promijenite ga u uređivaču tipova.

## Jedan tip kao stavka biblioteke

Označite tačno jedan tip i odaberite **Save as a Library item…** (Sačuvaj kao stavku biblioteke…). Sačuvaće se datoteka `.cctype.json`: stavka biblioteke vrste Tipovi koja sadrži taj jedan tip (njegove slojeve, materijale, nivo razvoja i kodove klasifikacije). Otpremite je u biblioteku da je podijelite. **Open a pack or an IFC file** (Otvori paket ili IFC datoteku) čita i takvu stavku i dodaje njen tip projektu kao paket.

## Dobro je znati

- IFC datoteka iz drugog programa može se otvoriti i ovdje. Svaki njen tip zida koji ima slojeve materijala se čita: naziv, materijali i debljine slojeva i svaka šupljina su vlastiti podaci datoteke. Koji su slojevi jezgro i šta svaki sloj radi (završna obrada, konstrukcija, izolacija) se pretpostavlja, tip je označen **(pretpostavljeno)**, i trebalo bi da ga provjerite u uređivaču tipa zida. Tip zida bez slojeva se izostavlja i navodi se.
- Materijal koji projekat već ima zadržava se kakav jeste. Novi materijal čiji je naziv zauzet dobija "(pack)" iza naziva.
- Tip koji zidovi koriste nikada se ne zamjenjuje iz paketa. Promijenite ga u uređivaču tipa zida, koji pravilno pomjera njegove zidove.
- Kod postavljen na jednom zidu ne putuje: pripada tom zidu. Kod postavljen na tipu putuje.
- Datoteka sa poljem koje format nema, slojem čiji materijal nedostaje, ili bilo čime što nije običan tekst se odbija, a poruka kaže gdje i zašto.
- Nije izgrađeno: tipovi podova, krovova i plafona (u ovoj verziji nemaju tipove: svaki ima svoju debljinu), tipovi vrata i prozora osim porodica, te šrafure ili boje iz datoteke drugog programa.
