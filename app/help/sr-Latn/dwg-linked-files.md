---
title: Nađite povezane crteže i slike
summary: Prikažite povezane crteže (xref) i slike naslovnog bloka crteža, tako što ćete otvoriti njegovu fasciklu ili dodati fajlove ručno.
keywords: xref, spoljna referenca, povezani crtež, prikačivanje, preklapanje, slika, fotografija, logo, naslovni blok, nedostajući xref, etransmit, upravljanje referencama
from: 5593d4b1
---

## Šta ćete uraditi

Učinite crtež potpunim: prikažite crteže na koje se povezuje (spoljne reference, ili xref) i slike koje koristi, na primer logo u naslovnom bloku.

## Lak način: otvorite fasciklu

1. Kliknite {{ui:Otvori fasciklu}} i izaberite fasciklu koja sadrži crtež i njegove veze, na primer celu fasciklu `Cad` projekta.
2. U izveštaju fascikle skrolujte do **CAD crteži**.
3. Kliknite crtež.
4. Pogledajte panel {{ui:Svojstva}} desno, pod **Povezani crteži** i **Slike**.

BimCraft traži svaki povezani crtež po njegovom imenu („*ime*.dwg“), prvo u istoj fascikli kao crtež, pa bilo gde u fascikli koju ste otvorili. Slike se traže na isti način, a i po sličnom imenu: eTransmit ili Revit izvoz često dodaje ime projekta ispred, pa se `logo.png` nalazi kao `Tower-logo-5425051.png`.

## Drugi način: dodajte fajlove ručno

1. Otvorite crtež sam.
2. Desno, pod **Povezani crteži**, kliknite {{ui:Dodaj povezane crteže…}}. Pod **Slike** dugme je {{ui:Dodaj slike…}}; oba otvaraju isti izbornik.
3. Izaberite povezane `.dwg` fajlove i fajlove slika. Možete izabrati nekoliko odjednom.
4. Sačekajte dok BimCraft ponovo ne otvori crtež sa njima.

## Šta treba da vidite

Svaki povezani crtež i slika navedeni su sa oznakom:

| Oznaka | Znači |
|---|---|
| **Prikazano** | Pronađeno i nacrtano. Putanja ispod nje kaže odakle dolazi, ili „dodali ste vi“. |
| **Prikazano, slično ime** | Slika pronađena po sličnom imenu. Proverite da li je prava. |
| **Nije pronađeno** | Nije u fascikli ili fajlovima koje ste dodali. Nedostajuća slika prikazuje se kao prazan okvir. |
| **TIFF se ne može prikazati u pregledaču** | Slika je TIFF fajl, koji pregledači ne crtaju. Sačuvajte je kao PNG sa istim imenom i dodajte je. |
| **Nije moguće pročitati** | Fajl je pronađen, ali se nije mogao otvoriti kao slika. |

Panel {{ui:Crtež}} levo pokazuje „*n* od *m* učitano“ za povezane crteže. Slojevi povezanih crteža pojavljuju se u {{ui:Slojevi}} kao „*ime veze*|*sloj*“.

## Česte greške

- **Otvaranje samo crteža.** „Ovaj crtež prikazuje samo svoj sadržaj dok se ne dodaju njegovi povezani crteži. Otvaranje cele fascikle projekta ih automatski pronalazi.“
- **Otvaranje premale fascikle.** Ako su veze u susednoj fascikli, otvorite roditeljsku fasciklu.
- **Preimenovane veze.** BimCraft povezuje crteže po imenu. Veza preimenovana na disku se ne pronalazi; dodajte je ručno.
- **Veze veza.** BimCraft učitava crteže na koje se otvoreni crtež povezuje. Crteži povezani unutar njih se ne traže, pa obično ne prikazuju u ovoj verziji.
