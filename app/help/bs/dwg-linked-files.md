---
title: Nađite povezane crteže i slike
summary: Prikažite povezane crteže (xref-ove) i slike naslovnog bloka crteža, otvaranjem njegove mape ili dodavanjem datoteka ručno.
keywords: xref, vanjska referenca, povezani crtež, prilaganje, preklapanje, slika, fotografija, logotip, naslovni blok, nedostajući xref, etransmit, upravljač referencama
from: 5593d4b1
---

## Šta ćete raditi

Učinite crtež potpunim: prikažite crteže na koje se povezuje (vanjske reference, ili xref-ove) i slike koje koristi, poput logotipa u naslovnom bloku.

## Lakši način: otvorite mapu

1. Kliknite {{ui:Otvori folder}} i izaberite mapu u kojoj su crtež i njegove veze, na primjer cijelu mapu `Cad` projekta.
2. U izvještaju o mapi pomjerite se do **CAD crteži**.
3. Kliknite crtež.
4. Pogledajte panel {{ui:Svojstva}} desno, pod **Povezani crteži** i **Slike**.

BimCraft traži svaki povezani crtež po njegovom nazivu („*naziv*.dwg”), prvo u istoj mapi kao crtež, zatim bilo gdje u mapi koju ste otvorili. Slike se traže na isti način, a i po sličnom nazivu: eTransmit ili Revit izvoz često dodaje naziv projekta ispred, pa se `logo.png` nađe kao `Tower-logo-5425051.png`.

## Drugi način: dodajte datoteke ručno

1. Otvorite crtež sam.
2. Desno, pod **Povezani crteži**, kliknite {{ui:Dodaj povezane crteže…}}. Pod **Slike** dugme je {{ui:Dodaj slike…}}. Oba otvaraju isti izbornik.
3. Izaberite povezane `.dwg` datoteke i datoteke slika. Možete izabrati više njih odjednom.
4. Sačekajte dok BimCraft ponovo ne otvori crtež s njima.

## Šta treba da vidite

Svaki povezani crtež i slika navedeni su s oznakom:

| Oznaka | Znači |
|---|---|
| **Prikazano** | Pronađeno i iscrtano. Putanja ispod nje kaže odakle je došlo, ili „dodali ste vi”. |
| **Prikazano, sličan naziv** | Slika pronađena po sličnom nazivu. Provjerite je li prava. |
| **Nije nađeno** | Nije u mapi ili datotekama koje ste dodali. Nedostajuća slika prikazuje se kao prazan okvir. |
| **TIFF se ne može prikazati u pregledniku** | Slika je TIFF datoteka, a pregledači je ne crtaju. Spasite je kao PNG sa istim nazivom i dodajte je. |
| **Ne može se pročitati** | Datoteka je nađena, ali se nije mogla otvoriti kao slika. |

Panel {{ui:Crtež}} lijevo prikazuje „*n* od *m* učitano” za povezane crteže. Slojevi povezanih crteža pojavljuju se u {{ui:Slojevi}} kao „*naziv veze*|*sloj*”.

## Česte greške

- **Otvaranje samo crteža.** „Ovaj crtež prikazuje samo svoj sadržaj dok se njegovi povezani crteži ne dodaju. Otvaranje cijele mape projekta ih automatski pronalazi.”
- **Otvaranje premale mape.** Ako su veze u susjednoj mapi, otvorite roditeljsku mapu.
- **Preimenovane veze.** BimCraft povezuje crteže po nazivu. Veza preimenovana na disku ne nalazi se; dodajte je ručno.
- **Veze veza.** BimCraft učitava crteže na koje otvoreni crtež ima vezu. Crteži povezani unutar njih se ne traže, pa obično ne prikazuju u ovoj verziji.
