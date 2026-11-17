---
title: Poročilo o mapi: vloge, stanja in povezave
summary: Vsaka oznaka v poročilu o mapi, kaj pomeni, in kako je izbran predlog Začni tukaj.
keywords: poročilo o mapi, vloge, stanje, popolno, nepopolno, nebrano, povezano, ozadje, začetna datoteka, osrednji model, družina, samo varnostne kopije, začni tukaj, stanje povezave
from: b35bdd10
---

## Stanje kopije

Vsaka kopija modela, glavna datoteka in oštevilčene varnostne kopije, dobi preverjanje glave.

| Oznaka | Pomen |
|---|---|
| **Popolno** | Glava in kazalo datoteke sta znotraj datoteke |
| **Nepopolno** | Datoteka je krajša od lastnega kazala: bila je odrezana med kopiranjem, nalaganjem ali sinhronizacijo, ali pa je oblačna datoteka, ki je še vedno „samo na spletu“ |
| **Nebrano** | Datoteka ni veljavna sestavljena datoteka ali je ni mogoče prebrati |

V stolpcu **Stanje** model kaže **Popolno**, rumeno „*n* nepopolnih“, kadar je vsaj ena kopija slaba, druga pa zdrava, ali rdeče **Nepopolno**, kadar ni nobene zdrave kopije.

## Varnostne kopije

Datoteke, imenovane `Name.0001.rvt`, `Name.0002.rvt` in tako naprej, so oštevilčene varnostne kopije `Name.rvt`. Razvrščene so pod svojim modelom, najnovejša najprej, v **Vse … kopije**. Kartica se prebere iz glavne datoteke, kadar je ta popolna, sicer iz najnovejše popolne varnostne kopije („najnovejša popolna“).

## Vloge

Prikazane so v ležečem tisku pod imenom modela.

| Vloga | Pomen |
|---|---|
| Povezan z *drugim modelom*: ozadje | Drug model v mapi povezuje ta model, zato je najverjetneje tuje ozadje, na primer model svetovalca |
| Začetna ali brezimna datoteka | Ime kot Blank, Template, Default, Untitled ali Project1: izhodišče ali datoteka, ki nikoli ni bila ustrezno poimenovana |
| Osrednji model | Deljeni osrednji model. Delo poteka v lokalni kopiji, ne tukaj |
| Družina (del) | Datoteka `.rfa` ali `.rft`: sestavni del, ne projekt |
| Samo varnostne kopije | Glavne datoteke ni več in ostanejo samo oštevilčene varnostne kopije |

## Kako je izbran predlog Začni tukaj

BimCraft uporablja sklepanje, kakršnega bi uporabil izkušen uporabnik:

1. Kandidati so berljive projektne datoteke (`.rvt`, `.rte`), ki jih ne povezuje drug model in niso začetne datoteke.
2. Osrednji modeli in modeli samo z varnostnimi kopijami se upoštevajo le, če ni boljše možnosti.
3. Med kandidati zmaga tista, ki je bila shranjena nazadnje.

Polje navaja svoje razloge in opozori, kadar je datoteka, ki je videti kot očitna izbira, poškodovana, kadar so drugi modeli ozadja in kadar je izbira osrednji model. Gre za najboljši približek; preverite pri tistem, ki je nazadnje delal na projektu.

## Stanje povezave

| Oznaka | Pomen |
|---|---|
| **V tej mapi** | Najdena na shranjeni relativni poti ali na koncu shranjene polne poti znotraj mape |
| **Najdeno ime** | Ni na svoji poti, vendar je v mapi datoteka z istim imenom. Preverite, ali je pravilna |
| **Datoteka knjižnice** | Tabela ključnih opomb ali kod sestava. Te so priložene programu na vsakem računalniku |
| **Ni v tej mapi** | Ni najdena nikjer v mapi |

Stolpec **Najdene povezave** v **Modeli** kaže, koliko povezav modela je bilo najdenih od tistih, ki so v mapi pričakovane (datoteke knjižnic se ne štejejo).

## Odloženo

| Vrstica | Pomen |
|---|---|
| Mape za vzdrževanje Revit (niso prebrane) | Mape `*_backup`, `*_log` in `Revit_temp`, skrite mape in `__MACOSX` |
| Ostanki zaklepanja, dnevnika in varnostnih kopij | Datoteke `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` in `.slog` |
| Druge datoteke | Vse drugo (prvih 40 je poimenovanih) |
