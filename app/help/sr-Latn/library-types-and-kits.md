---
title: Simboli, tipovi i sredstva, šabloni projekata i brzi kompleti
summary: Biblioteka ima tri vrste stavki (simboli, tipovi, sredstva). Dodajte tip u svoj projekat, počnite od zajedničkog šablona projekta, dodajte brzi komplet, a svoje delite preko stranice za otpremanje u biblioteku.
keywords: biblioteka, simboli, tipovi, sredstva, tip, tip zida, tip poda, tip krova, tip plafona, šablon projekta, šablon, brzi komplet, komplet, deljenje, otpremanje, verzija, dnevnik promena, LOD, klasifikacija, licenca, beleške iz prakse
from: e13b0e67
---

## Šta ćete uraditi

Nađite ono što vam treba u Biblioteci po tome šta je, dodajte tip u projekat koji crtate, počnite novi projekat iz šablona koji je neko podelio, i delite svoje šablone, tipove i komplete.

## Tri vrste stavki biblioteke

- **Simboli** su konvencije crtanja: samo 2D, nacrtani u veličini za napomene, grupisani po disciplini.
- **Tipovi** kažu od čega je element napravljen: njegovi slojevi sa stvarnom debljinom, nivo razrade (LOD) i klasifikacijski kod. Tip se dodaje u projekat, ne crta se.
- **Sredstva** su fizički objekti, kao vrata, prozori, nameštaj, instalacije i oprema, sa pogledom u osnovi i 3D telom u stvarnoj veličini.

U kartici {{ui:Biblioteka}} izaberite {{ui:Biblioteka}} i koristite **Vrsta stavke** da prikažete Sve, Simbole, Tipove ili Sredstva.

## Dodavanje tipa u projekat

1. Izaberite **Tipovi** pod Vrsta stavke i otvorite jedan.
2. Proverite njegov sastav, LOD i klasifikaciju ispod slike, pa kliknite {{ui:Dodaj u ovaj projekat}}.
3. Dodaje se kao tip zida, poda, krova ili plafona kojim možete crtati. Ako tip sa tim imenom već postoji, novi se dodaje kao kopija, a vaš ostaje kakav je bio. Jedan Opozovi ga uklanja.

## Šabloni projekata i brzi kompleti

Kliknite {{ui:Kompleti}} da vidite šta su ljudi podelili.

- **Šablon projekta** je IFC datoteka sa nivoima, mrežama, tipovima i podešavanjima. {{ui:Sačuvaj u moje šablone}} ga stavlja u Nova zgrada pod Počni od.
- **Brzi komplet** je spisak stavki biblioteke. {{ui:Prikaži stavke kompleta}} ih navodi kao kartice koje možete postaviti.
- Svaki komplet ima verziju i dnevnik promena, najnovija prva. Verzija koja počinje sa 0 je za diskusiju; 1.0.0 je samo za ono što je vlasnik linije usvojio.

## Delite svoje

- **Šablon projekta:** {{ui:Sačuvaj kao šablon}}, štiklirajte {{ui:Napravi i datoteku za deljenje u biblioteci}}, dodajte šta sadrži i verziju. Dobijate `.json` datoteku.
- **Brzi komplet:** u {{ui:Kompleti}} izaberite {{ui:Napravi brzi komplet iz ovog projekta}}. Navodi stavke biblioteke koje projekat koristi.
- **Tip:** u {{ui:Paketi tipova}} štiklirajte jedan tip i izaberite {{ui:Sačuvaj kao stavku biblioteke…}}.

Otpremite datoteku na stranicu biblioteke za otpremanje. Prolazi kroz istu proveru kao svaka stavka, a licencu birate tamo: svaka stavka navodi svoju licencu. Od stavki se traže LOD, IFC klasa i klasifikacijski kod (šifra, a ne samo naziv).

## Beleške iz prakse

Na stranici svake stavke biblioteke prijavljeni članovi mogu dodati belešku: korišćeno na stvarnom projektu, isprobano na probnom projektu, ili nađen problem. Kažite u nekoliko reči kakav je projekat i ne navodite imena klijenata. Beleška je javna i nije ocena: ne menja stavku.

## Dobro je znati

- Ništa se ne šalje iz aplikacije. Datoteke se prave na vašem računaru, a vi ih sami otpremate.
- Komplet napravljen od šablona nosi IFC tekst tačno kakav je sačuvan. Proverite ga da nema ništa privatno pre otpremanja.
- CadCraft prikazuje Simbole i Sredstva u svojoj kartici Biblioteka; tipovi i šabloni su za BimCraft projekte.
