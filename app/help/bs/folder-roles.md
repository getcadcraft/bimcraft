---
title: Izvještaj o folderu: uloge, statusi i veze
summary: Svaka oznaka u izvještaju o folderu, šta znači i kako se bira prijedlog Počni ovdje.
keywords: izvještaj o folderu, uloge, status, potpun, nepotpun, nečitljiv, povezan, pozadina, početna datoteka, centralni, porodica, samo sigurnosne kopije, počni ovdje, status veze, sigurnosna kopija
from: b35bdd10
---

## Status kopije

Svaka kopija modela, glavna datoteka i numerisane sigurnosne kopije dobijaju provjeru zaglavlja.

| Oznaka | Značenje |
|---|---|
| **Potpun** | Zaglavlje datoteke i njen indeks stanu unutar datoteke |
| **Nepotpun** | Datoteka je kraća nego što njen vlastiti indeks kaže: prekinuta je tokom kopiranja, otpremanja ili sinhronizacije, ili je to oblačna datoteka koja je još „samo online“ |
| **Nečitljiv** | Datoteka nije ispravna složena datoteka ili se nije mogla pročitati |

U koloni **Status** model pokazuje **Potpun**, žuto „*n* nepotpunih“ kad je bar jedna kopija loša a druga ispravna, ili crveno **Nepotpun** kad nijedna kopija nije ispravna.

## Sigurnosne kopije

Datoteke nazvane `Name.0001.rvt`, `Name.0002.rvt` i tako dalje su numerisane sigurnosne kopije `Name.rvt`. Grupisane su ispod svog modela, najnovije prve, u **Sve … kopije**. Kartica se čita iz glavne datoteke kad je potpuna, inače iz najnovije potpune sigurnosne kopije („najnovija potpuna“).

## Uloge

Prikazuju se kurzivom ispod naziva modela.

| Uloga | Značenje |
|---|---|
| Povezan iz *drugog modela*: pozadina | Drugi model u folderu povezuje ovaj, pa je najvjerovatnije tuđa pozadina, kao model konsultanta |
| Početna ili neimenovana datoteka | Naziv poput Blank, Template, Default, Untitled ili Project1: polazna tačka ili datoteka koja nikad nije pravilno imenovana |
| Centralni model | Centralni model za zajednički rad. Rad se odvija u lokalnoj kopiji, ne ovdje |
| Porodica (dio) | Datoteka `.rfa` ili `.rft`: komponenta, a ne projekat |
| Samo sigurnosne kopije | Glavna datoteka je nestala i ostale su samo numerisane sigurnosne kopije |

## Kako se bira Počni ovdje

BimCraft primjenjuje zaključivanje koje bi primijenio iskusan korisnik:

1. Kandidati su čitljive projektne datoteke (`.rvt`, `.rte`) koje nisu povezane iz drugog modela i nisu početne.
2. Centralni modeli i modeli samo sa sigurnosnim kopijama dolaze u obzir samo kad nema boljeg.
3. Od kandidata pobjeđuje onaj koji je posljednji put sačuvan.

Okvir navodi razloge i upozorava kad je datoteka koja izgleda kao očigledan izbor oštećena, kad su drugi modeli pozadina i kad je izbor centralni model. To je najbolja pretpostavka; provjerite s onim ko je zadnji radio na projektu.

## Status veze

| Oznaka | Značenje |
|---|---|
| **U ovom folderu** | Pronađeno na sačuvanoj relativnoj putanji ili na kraju sačuvane pune putanje unutar foldera |
| **Pronađen istog naziva** | Nije na svojoj putanji, ali datoteka istog naziva je u folderu. Provjerite je li prava |
| **Datoteka biblioteke** | Tabela ključnih napomena ili šifara sklopova. One dolaze uz program na svakom računaru |
| **Nije u ovom folderu** | Nije pronađeno nigdje u folderu |

Kolona **Pronađene veze** u **Modelima** pokazuje koliko je veza modela pronađeno, od onih koje se očekuju u folderu (datoteke biblioteke se ne broje).

## Izdvojeno

| Red | Značenje |
|---|---|
| Revit folderi za održavanje (ne čitaju se) | Folderi `*_backup`, `*_log` i `Revit_temp`, plus skriveni folderi i `__MACOSX` |
| Ostaci zaključavanja, dnevnika i sigurnosnih kopija | Datoteke `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` i `.slog` |
| Ostale datoteke | Sve ostalo (prvih 40 je imenovano) |
