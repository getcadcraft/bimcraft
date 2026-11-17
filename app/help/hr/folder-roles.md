---
title: Izvješće o mapi: uloge, statusi i poveznice
summary: Svaka oznaka u izvješću o mapi, što znači i kako se bira prijedlog Počni ovdje.
keywords: izvješće o mapi, uloge, status, potpuno, nepotpuno, nečitljivo, povezano, pozadina, početna datoteka, središnji model, obitelj, samo sigurnosne kopije, počni ovdje, status poveznice
from: b35bdd10
---

## Status kopije

Svaka kopija modela, glavna datoteka i numerirane sigurnosne kopije dobivaju provjeru zaglavlja.

| Oznaka | Značenje |
|---|---|
| **Potpuna** | Zaglavlje i indeks datoteke stanu unutar datoteke |
| **Nepotpuna** | Datoteka je kraća od vlastitog indeksa: odrezana je dok se kopirala, učitavala ili sinkronizirala, ili je to datoteka u oblaku koja je i dalje „samo online“ |
| **Nečitljiva** | Datoteka nije valjana složena datoteka ili se nije mogla pročitati |

U stupcu **Status** model prikazuje **Potpun**, žutom oznakom „*n* nepotpunih” kada je barem jedna kopija neispravna, ali druga ispravna, ili crvenom oznakom **Nepotpun** kada nijedna kopija nije ispravna.

## Sigurnosne kopije

Datoteke nazvane `Name.0001.rvt`, `Name.0002.rvt` i tako dalje numerirane su sigurnosne kopije `Name.rvt`. Grupirane su pod svojim modelom, najnovija prva, pod **Sve … kopije**. Kartica se čita iz glavne datoteke kada je potpuna, inače iz najnovije potpune sigurnosne kopije („najnovija potpuna”).

## Uloge

Prikazuju se kurzivom ispod naziva modela.

| Uloga | Značenje |
|---|---|
| Povezan u *drugom modelu*: pozadina | Drugi model u mapi povezuje ovaj, pa je najvjerojatnije tuđa pozadina, poput modela konzultanta |
| Početna ili neimenovana datoteka | Naziv poput Blank, Template, Default, Untitled ili Project1: polazna točka ili datoteka koja nikad nije ispravno imenovana |
| Središnji model | Središnji model u zajedničkom radu. Rad se odvija u lokalnoj kopiji, ne ovdje |
| Obitelj (dio) | Datoteka `.rfa` ili `.rft`: komponenta, a ne projekt |
| Samo sigurnosne kopije | Glavna datoteka je nestala, a ostale su samo numerirane sigurnosne kopije |

## Kako se bira Počni ovdje

BimCraft primjenjuje razmišljanje iskusnog korisnika:

1. Kandidati su čitljive projektne datoteke (`.rvt`, `.rte`) koje nisu povezane drugim modelom i nisu početne.
2. Središnji modeli i modeli samo sa sigurnosnim kopijama računaju se samo kada nema boljeg.
3. Među kandidatima pobjeđuje onaj spremljen najnovije.

Okvir navodi svoje razloge i upozorava kada je datoteka koja izgleda kao očit izbor oštećena, kada su drugi modeli pozadina i kada je odabrani model središnji. To je najbolja procjena; provjerite s onim tko je zadnji radio na projektu.

## Status poveznice

| Oznaka | Značenje |
|---|---|
| **U ovoj mapi** | Pronađeno na spremljenoj relativnoj putanji ili na kraju spremljene pune putanje unutar mape |
| **Pronađen isti naziv** | Nije na svojoj putanji, ali datoteka istog naziva nalazi se u mapi. Provjerite je li prava |
| **Datoteka knjižnice** | Tablica ključnih napomena ili šifara sklopova. One dolaze s programom na svakom računalu |
| **Nije u ovoj mapi** | Nije pronađeno nigdje u mapi |

Stupac **Pronađene poveznice** u **Modeli** pokazuje koliko je poveznica modela pronađeno, od onih koje se očekuju u mapi (datoteke knjižnice se ne broje).

## Izdvojeno

| Redak | Značenje |
|---|---|
| Mape za održavanje Revita (ne čitaju se) | Mape `*_backup`, `*_log` i `Revit_temp`, plus skrivene mape i `__MACOSX` |
| Ostaci zaključavanja, dnevnika i sigurnosnih kopija | Datoteke `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` i `.slog` |
| Ostale datoteke | Sve ostalo (prvih 40 je imenovano) |
