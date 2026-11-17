---
title: Naredbeni redak u statusnoj traci
summary: U rasporedu s naredbenim retkom upisujte bilo gdje i slova se pojavljuju u retku pri dnu. Prikazuje što odgovara, čuva povijest i nikad ne prekriva crtež.
keywords: naredbeni redak, upisujte bilo gdje, upisana naredba, statusna traka, povijest, strelice, enter, space, WALL, DOOR, raspored Duncan, raspored Rhino, prečac, tipke, pretraživač naredbi
from: d583b52d
---

## Što ćete učiniti

Pokrenite alate upisivanjem njihovih naziva, bez prethodnog klika u okvir.

## Koraci

1. Odaberite raspored koji ima naredbeni redak: otvorite {{ui:Postavke}}, odaberite {{ui:Globalne}}, zatim {{ui:Raspored}}, i odaberite **Duncan** (ili **Rhino**). Redak je u statusnoj traci pri dnu prozora.
2. Kad je pokazivač bilo gdje i nijedan okvir nije u upotrebi, upišite `wall`. Slova se pojavljuju u naredbenom retku, a popis iznad njega prikazuje naredbe koje odgovaraju.
3. Pritisnite {{key:Enter}}. Pokreće se alat Zid.
4. Kliknite u naredbeni redak (ili ponovno pritisnite tipku). Kad je redak prazan, popis prikazuje naredbe koje ste ranije upisali. {{key:Up}} i {{key:Down}} kreću se kroz njih; {{key:Enter}} pokreće onu prikazanu.

## Što možete upisati

- Naziv naredbe stila izbornika u uporabi, gdje stil ima nazive (`WALL`, `WA`, `DOOR` u stilu Drafting).
- Ključ naredbe kao riječ: `W` zatim {{key:Enter}} ili {{key:Space}} je Zid, `D` je Vrata.
- Naziv naredbe, s razmacima ili bez njih: `split wall`, `wallrectangle`.
- Početak riječi ili naziva, kad samo jedna naredba tako počinje.
- Sve drugo otvara pretraživač naredbi s onim što ste upisali.

## Dobro je znati

- {{key:Esc}} prazni redak i vraća tipke crtežu.
- U ovim rasporedima jedno slovo više ne pokreće alat samo od sebe: čeka u retku na {{key:Enter}} ili {{key:Space}}. Tipke s {{key:Ctrl}}, funkcijske tipke, {{key:Delete}} i {{key:Esc}} rade kao i prije. U ostalim rasporedima ništa se ne mijenja.
- Dok radi alat za crtanje, brojke ostaju alatu (upisana duljina).
- Upisivanje u okvir, dijaloški okvir ili Postavke ostaje tamo.
- Povijest se čuva na ovom računalu, 50 naredbi za svaku aplikaciju.
