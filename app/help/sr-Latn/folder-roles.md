---
title: Izveštaj o fascikli: uloge, statusi i veze
summary: Svaka oznaka u izveštaju o fascikli, šta znači i kako se bira predlog Počni ovde.
keywords: izveštaj o fascikli, uloge, status, potpun, nepotpun, nečitljiv, povezan, pozadina, polazni, centralni, porodica, samo rezervne kopije, počni ovde, status veze
from: b35bdd10
---

## Status kopija

Svaka kopija modela, glavne datoteke i numerisane rezervne kopije dobija proveru zaglavlja.

| Oznaka | Značenje |
|---|---|
| **Potpun** | Zaglavlje datoteke i njen indeks stanu unutar datoteke |
| **Nepotpun** | Datoteka je kraća od sopstvenog indeksa: presečena je pri kopiranju, otpremanju ili sinhronizaciji, ili je oblačna datoteka koja je još „samo na mreži” |
| **Nečitljiv** | Datoteka nije ispravna složena datoteka ili se nije mogla pročitati |

U koloni **Status** model prikazuje **Potpun**, žuto „*n* nepotpunih” kada je bar jedna kopija loša, ali druga ispravna, ili crveno **Nepotpun** kada nijedna kopija nije ispravna.

## Rezervne kopije

Datoteke nazvane `Name.0001.rvt`, `Name.0002.rvt` i tako dalje su numerisane rezervne kopije `Name.rvt`. Grupisane su pod svojim modelom, najnovija prva, u **Sve … kopije**. Kartica se čita iz glavne datoteke kada je potpuna, inače iz najnovije potpune rezervne kopije („najnovija potpuna”).

## Uloge

Prikazane kurzivom ispod naziva modela.

| Uloga | Značenje |
|---|---|
| Povezan u *drugom modelu*: pozadina | Drugi model u fascikli povezuje ovaj, pa je najverovatnije tuđa pozadina, poput modela konsultanta |
| Polazna ili neimenovana datoteka | Naziv poput Blank, Template, Default, Untitled ili Project1: polazna tačka, ili datoteka nikad pravilno nazvana |
| Centralni model | Podeljeni centralni model u radu. Rad se odvija u lokalnoj kopiji, a ne ovde |
| Porodica (deo) | Datoteka `.rfa` ili `.rft`: komponenta, a ne projekat |
| Samo rezervne kopije | Glavna datoteka je nestala, a ostale su samo numerisane rezervne kopije |

## Kako se bira Počni ovde

BimCraft primenjuje zaključivanje koje bi primenio iskusan korisnik:

1. Kandidati su čitljive projektne datoteke (`.rvt`, `.rte`) koje nisu povezane drugim modelom i nisu polazne.
2. Centralni modeli i modeli samo sa rezervnim kopijama računaju se samo kada ništa bolje ne postoji.
3. Među kandidatima pobeđuje ona koja je poslednja sačuvana.

Polje navodi svoje razloge i upozorava kada datoteka koja izgleda kao očigledan izbor je oštećena, kada su drugi modeli pozadina i kada je izbor centralni model. To je najbolja procena; proverite sa onim ko je poslednji radio na projektu.

## Status veze

| Oznaka | Značenje |
|---|---|
| **U ovoj fascikli** | Nađeno na sačuvanoj relativnoj putanji ili na kraju sačuvane pune putanje unutar fascikle |
| **Pronađen isti naziv** | Nije na svojoj putanji, ali datoteka istog naziva je u fascikli. Proverite da li je prava |
| **Datoteka biblioteke** | Tabela ključnih napomena ili kodova sklopa. Dolaze sa programom na svakom računaru |
| **Nije u ovoj fascikli** | Nije nađeno nigde u fascikli |

Kolona **Nađene veze** u **Modelima** pokazuje koliko je veza modela nađeno, od onih očekivanih u fascikli (datoteke biblioteke se ne broje).

## Odloženo

| Red | Značenje |
|---|---|
| Revit fascikle za održavanje (ne čitaju se) | `*_backup`, `*_log` i `Revit_temp` fascikle, plus skrivene fascikle i `__MACOSX` |
| Ostaci zaključavanja, dnevnika i rezervnih kopija | Datoteke `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` i `.slog` |
| Ostale datoteke | Sve ostalo (prvih 40 su navedene po nazivu) |
