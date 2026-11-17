---
title: Pronalaženje povezanih crteža i slika
summary: Prikažite povezane crteže (vanjske reference ili xrefove) i slike zaglavlja crteža otvaranjem njegove mape ili ručnim dodavanjem datoteka.
keywords: xref, vanjska referenca, povezani crtež, prilog, preklapanje, slika, fotografija, logotip, zaglavlje crteža, nedostajući xref, etransmit, upravitelj referenci
from: 5593d4b1
---

## Što ćete raditi

Dovršite crtež: prikažite crteže na koje se povezuje (vanjske reference ili xrefove) i slike koje koristi, poput logotipa u zaglavlju crteža.

## Jednostavan način: otvorite mapu

1. Kliknite {{ui:Otvori mapu}} i odaberite mapu koja sadrži crtež i njegove veze, na primjer cijelu mapu `Cad` projekta.
2. U izvješću o mapi pomaknite se do **CAD crteži**.
3. Kliknite crtež.
4. Pogledajte ploču {{ui:Svojstva}} desno, pod **Povezani crteži** i **Slike**.

BimCraft traži svaki povezani crtež po njegovom nazivu („*naziv*.dwg“), najprije u istoj mapi kao i crtež, zatim bilo gdje u mapi koju ste otvorili. Slike se traže na isti način, a također i po sličnom nazivu: eTransmit ili Revit izvoz često ispred dodaje naziv projekta, pa se `logo.png` nalazi kao `Tower-logo-5425051.png`.

## Drugi način: ručno dodajte datoteke

1. Otvorite crtež samostalno.
2. Desno, pod **Povezani crteži**, kliknite {{ui:Dodaj povezane crteže…}}. Pod **Slike** gumb se zove {{ui:Dodaj slike…}}; oba otvaraju isti birač.
3. Odaberite povezane `.dwg` datoteke i datoteke slika. Možete odabrati nekoliko odjednom.
4. Pričekajte dok BimCraft ponovno ne otvori crtež s njima.

## Što biste trebali vidjeti

Svaki povezani crtež i slika navedeni su s oznakom:

| Oznaka | Znači |
|---|---|
| **Prikazano** | Pronađeno i nacrtano. Putanja ispod pokazuje odakle dolazi ili „dodali ste“. |
| **Prikazano, slično ime** | Slika pronađena po sličnom nazivu. Provjerite je li prava. |
| **Nije pronađeno** | Nije u mapi ni u datotekama koje ste dodali. Nedostajuća slika prikazuje se kao prazan okvir. |
| **TIFF se ne može prikazati u pregledniku** | Slika je TIFF datoteka, koje preglednici ne crtaju. Spremite je kao PNG s istim nazivom i dodajte je. |
| **Nije moguće pročitati** | Datoteka je pronađena, ali se nije mogla otvoriti kao slika. |

Ploča {{ui:Crtež}} lijevo prikazuje „*n* od *m* učitano“ za povezane crteže. Slojevi povezanih crteža pojavljuju se u {{ui:Slojevi}} kao „*naziv veze*|*sloj*“.

## Česte pogreške

- **Otvaranje samo crteža.** „Ovaj crtež prikazuje samo vlastiti sadržaj dok se ne dodaju njegovi povezani crteži. Otvaranje cijele mape projekta automatski ih pronalazi.“
- **Otvaranje premale mape.** Ako se veze nalaze u susjednoj mapi, otvorite nadređenu mapu.
- **Preimenovane veze.** BimCraft povezuje crteže po nazivu. Veza preimenovana na disku ne pronalazi se; dodajte je ručno.
- **Veze veza.** BimCraft učitava crteže na koje otvoreni crtež ima vezu. Crteži povezani unutar njih se ne traže, pa obično ne prikazuju u ovoj verziji.
