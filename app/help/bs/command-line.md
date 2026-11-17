---
title: Komandna linija u statusnoj traci
summary: U rasporedu sa komandnom linijom kucaj bilo gdje, a slova se upisuju u liniju na dnu. Linija prikazuje šta odgovara, čuva historiju i nikad ne prekriva crtež.
keywords: komandna linija, kucaj bilo gdje, kucana komanda, statusna traka, statusna linija, historija, strelice, enter, space, WALL, DOOR, raspored Duncan, raspored Rhino, prečica, tipke, pronalazač komandi
from: d583b52d
---

## Šta ćete uraditi

Pokrenite alate kucanjem njihovih naziva, bez prethodnog klika u polje.

## Koraci

1. Odaberite raspored koji ima komandnu liniju: otvorite {{ui:Postavke}}, odaberite {{ui:Globalno}}, zatim {{ui:Raspored}}, i izaberite **Duncan** (ili **Rhino**). Linija se nalazi u statusnoj traci na dnu prozora.
2. Sa pokazivačem bilo gdje i bez upotrebe nekog polja, ukucajte `wall`. Slova se pojavljuju u komandnoj liniji, a iznad nje lista prikazuje komande koje odgovaraju.
3. Pritisnite {{key:Enter}}. Alat Zid se pokreće.
4. Kliknite u komandnu liniju (ili ponovo pritisnite tipku). Kad je linija prazna, lista prikazuje komande koje ste ranije kucali. {{key:Up}} i {{key:Down}} prolaze kroz njih; {{key:Enter}} pokreće onu koja je prikazana.

## Šta možete ukucati

- Naziv komande iz stila menija koji se koristi, gdje stil ima takve nazive (`WALL`, `WA`, `DOOR` u stilu Crtanje).
- Skraćenicu komande, kao riječ: `W` pa {{key:Enter}} ili {{key:Space}} je Zid, `D` je Vrata.
- Naziv komande, sa ili bez razmaka: `split wall`, `wallrectangle`.
- Početak riječi ili naziva, kad samo jedna komanda tako počinje.
- Sve drugo otvara pronalazač komandi sa onim što ste ukucali.

## Dobro je znati

- {{key:Esc}} prazni liniju i vraća tipke crtežu.
- U ovim rasporedima jedno slovo više ne pokreće alat samo po sebi: čeka u liniji na {{key:Enter}} ili {{key:Space}}. Tipke sa {{key:Ctrl}}, funkcijske tipke, {{key:Delete}} i {{key:Esc}} rade kao i ranije. U drugim rasporedima ništa se ne mijenja.
- Dok radi alat za crtanje, cifre ostaju alatu (ukucana dužina).
- Kucanje u polje, dijalog ili Postavke ostaje tamo.
- Historija se čuva na ovom računaru, 50 komandi za svaku aplikaciju.
