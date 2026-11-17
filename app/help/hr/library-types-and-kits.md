---
title: Simboli, tipovi i resursi, predlošci projekata i Quick Kit-ovi
summary: Knjižnica ima tri vrste stavki (simbole, tipove i resurse). Dodajte tip u projekt, započnite projekt iz zajedničkog predloška, dodajte Quick Kit i podijelite vlastite predloške putem stranice za učitavanje knjižnice.
keywords: knjižnica, simboli, tipovi, resursi, tip, tip zida, tip poda, tip krova, tip stropa, predložak projekta, predložak, Quick Kit, komplet, dijeljenje, učitavanje, verzija, dnevnik promjena, LOD, klasifikacija, licenca, bilješke iz prakse
from: e13b0e67
---

## Što ćete napraviti

Pronađite što vam treba u knjižnici prema tome što je, dodajte tip u projekt koji crtate, započnite novi projekt iz predloška koji je netko podijelio i podijelite vlastite predloške, tipove i komplete.

## Tri vrste stavki knjižnice

- **Simboli** su konvencije crtanja: samo 2D, nacrtani u veličini anotacije, grupirani po disciplini.
- **Tipovi** govore od čega se element sastoji: njegovi slojevi sa stvarnom debljinom, razina razvoja (LOD) i šifra klasifikacije. Tip se dodaje u projekt, ne crta se.
- **Resursi** su fizički objekti poput vrata, prozora, namještaja, armatura i opreme, s tlocrtnim prikazom i 3D tijelom u stvarnoj veličini.

U kartici {{ui:Knjižnica}} odaberite {{ui:Knjižnica}} i upotrijebite **Vrsta stavke** da prikažete Sve, Simbole, Tipove ili Resurse.

## Dodajte tip u projekt

1. Pod **Vrsta stavke** odaberite **Tipovi** i otvorite jedan.
2. Provjerite njegovu građu, LOD i klasifikaciju ispod slike, zatim kliknite {{ui:Dodaj u ovaj projekt}}.
3. Dodaje se kao tip zida, poda, krova ili stropa kojim možete crtati. Ako tip s tim nazivom već postoji, novi se dodaje kao kopija, a vaš ostaje kakav je bio. Jedno poništavanje ga uklanja.

## Predlošci projekata i Quick Kit-ovi

Odaberite {{ui:Kompleti}} da vidite što su ljudi podijelili.

- **Predložak projekta** je IFC datoteka s etažama, mrežama, tipovima i postavkama. {{ui:Spremi u moje predloške}} stavlja ga u Novu zgradu pod Započni iz.
- **Quick Kit** je popis stavki knjižnice. {{ui:Prikaži stavke kompleta}} ih prikazuje kao kartice koje možete postaviti.
- Svaki komplet ima verziju i dnevnik promjena, najnovija prva. Verzija koja počinje s 0 je za raspravu; 1.0.0 je samo za ono što je vlasnik linije usvojio.

## Podijelite vlastite

- **Predložak projekta:** {{ui:Spremi kao predložak}}, označite {{ui:Napravi i datoteku za dijeljenje u knjižnici}}, dodajte što sadrži i verziju. Dobit ćete datoteku `.json`.
- **Quick Kit:** u {{ui:Kompleti}} odaberite {{ui:Napravi Quick Kit iz ovog projekta}}. Popisuje stavke knjižnice koje projekt koristi.
- **Tip:** u {{ui:Skupovi tipova}} označite jedan tip i odaberite {{ui:Spremi kao stavku knjižnice…}}.

Učitajte datoteku na stranicu za učitavanje knjižnice. Prolazi isti pregled kao i svaka stavka, a licencu birate tamo: svaka stavka navodi svoju licencu. Od stavki se traže LOD, IFC klasa i šifra klasifikacije (šifra, a ne samo naziv).

## Bilješke iz prakse

Na stranici svake stavke knjižnice prijavljeni članovi mogu dodati bilješku: korištena na stvarnom projektu, isprobana na uzorku projekta ili pronađen problem. Navedite vrstu projekta u nekoliko riječi i izostavite nazive klijenata. Bilješka je javna i nije ocjena: ne mijenja stavku.

## Dobro je znati

- S aplikacije se ništa ne šalje. Datoteke se izrađuju na vašem računalu, a učitavate ih sami.
- Komplet izrađen iz predloška nosi IFC tekst točno onako kako je spremljen. Prije učitavanja provjerite ima li privatnog sadržaja.
- CadCraft prikazuje simbole i resurse na kartici Knjižnica; tipovi i predlošci su za projekte programa BimCraft.
