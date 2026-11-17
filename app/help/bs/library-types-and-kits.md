---
title: Simboli, tipovi i resursi, šabloni projekta i brzi kompleti
summary: Biblioteka ima tri vrste stavki (simboli, tipovi, resursi). Dodajte tip u svoj projekat, počnite od zajedničkog šablona projekta, dodajte brzi komplet i podijelite svoje vlastite kroz stranicu za otpremanje biblioteke.
keywords: biblioteka, simboli, tipovi, resursi, tip, tip zida, tip poda, tip krova, tip plafona, šablon projekta, šablon, brzi komplet, komplet, dijeli, otpremi, verzija, dnevnik promjena, LOD, klasifikacija, licenca, bilješke iz prakse
from: e13b0e67
---

## Šta ćete uraditi

Pronađite šta vam treba u biblioteci po tome šta je, dodajte tip u projekat koji crtate, počnite novi projekat iz šablona koji je neko podijelio, i podijelite svoje šablone, tipove i komplete.

## Tri vrste stavki biblioteke

- **Simboli** su konvencije crtanja: samo 2D, nacrtani u veličini anotacije, grupisani po disciplini.
- **Tipovi** kažu od čega se element sastoji: njegovi slojevi sa stvarnom debljinom, njegov nivo razvoja (LOD) i njegova klasifikaciona šifra. Tip se dodaje u projekat, ne crta se.
- **Resursi** su fizički objekti kao vrata, prozori, namještaj, instalacije i oprema, sa pogledom u osnovi i 3D tijelom stvarne veličine.

Na kartici {{ui:Biblioteka}} izaberite {{ui:Biblioteka}} i koristite **Vrsta stavke** da prikažete Sve, Simbole, Tipove ili Resurse.

## Dodavanje tipa u projekat

1. Izaberite **Tipovi** pod Vrsta stavke i otvorite jedan.
2. Provjerite njegovu građu, LOD i klasifikaciju ispod slike, zatim izaberite {{ui:Dodaj u ovaj projekat}}.
3. Dodaje se kao tip zida, poda, krova ili plafona kojim možete crtati. Ako tip sa tim imenom već postoji, novi se dodaje kao kopija, a vaš ostaje kakav je bio. Jedno Poništi ga uklanja.

## Šabloni projekta i brzi kompleti

Izaberite {{ui:Kompleti}} da vidite šta su ljudi podijelili.

- **Šablon projekta** je IFC datoteka sa nivoima, mrežama, tipovima i postavkama. {{ui:Spasi u moje šablone}} ga stavlja u Novu zgradu pod Počni od.
- **Brzi komplet** je spisak stavki biblioteke. {{ui:Prikaži stavke kompleta}} ih prikazuje kao kartice koje možete postaviti.
- Svaki komplet ima verziju i dnevnik promjena, najnovija prva. Verzija koja počinje sa 0 je za diskusiju; 1.0.0 je samo za ono što je vlasnik linije usvojio.

## Dijelite svoje

- **Šablon projekta:** {{ui:Spasi kao šablon}}, označite {{ui:Napravi i datoteku za dijeljenje u Biblioteci}}, dodajte šta sadrži i verziju. Dobijate `.json` datoteku.
- **Brzi komplet:** u {{ui:Kompleti}} izaberite {{ui:Napravi brzi komplet iz ovog projekta}}. Prikazuje stavke biblioteke koje projekat koristi.
- **Tip:** u {{ui:Paketi tipova}} označite jedan tip i izaberite {{ui:Spasi kao stavku Biblioteke…}}.

Otpremite datoteku na stranicu za otpremanje biblioteke. Ona prolazi isti pregled kao svaka stavka, a licencu birate tamo: svaka stavka navodi svoju licencu. Od stavki se traži njihov LOD, IFC klasa i klasifikaciona šifra (šifra, a ne samo naziv).

## Bilješke iz prakse

Na stranici svake stavke biblioteke članovi koji su prijavljeni mogu dodati bilješku: korištena na stvarnom projektu, isprobana na uzorku projekta, ili pronađen problem. Recite u nekoliko riječi koje je vrste projekat i izostavite imena klijenata. Bilješka je javna i nije ocjena: ne mijenja stavku.

## Korisno znati

- Ništa se ne šalje iz aplikacije. Datoteke se prave na vašem računaru i otpremate ih sami.
- Komplet napravljen od šablona nosi IFC tekst tačno kakav je sačuvan. Provjerite ga za bilo šta privatno prije otpremanja.
- CadCraft prikazuje Simbole i Resurse na svojoj kartici Biblioteka; Tipovi i šabloni su za BimCraft projekte.
