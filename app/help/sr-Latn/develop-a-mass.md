---
title: Razvijte masu zgrade iz studije lokacije
summary: Uzmite masu zgrade proučenu u prikazu lokacije u CivilCraft-u i razvijte je u nivoe, zidove i podove, uz zadržano mesto lokacije na mapi.
keywords: masa, masa zgrade, masiranje, studija lokacije, razvoj, CivilCraft, predaja, nivoi, zidovi, podovi, otisak, georeferenca, IFC
from: 557b94d1
---

Prikaz lokacije u CivilCraft-u može da crta mase zgrada na parceli i da ih proverava u odnosu na teren, unete granice i sunce. **Razvij u BimCraft-u** tamo otvara BimCraft u novoj kartici sa masama; **Mase kao IFC** ih čuva kao datoteku koju otvarate ovde na uobičajen način. Na oba načina svaka masa stiže kao lokacija, zgrada sa jednim nivoom po spratu i jednim blokom (sama masa) koji nosi svoje brojke.

## Razvijte masu

1. Izaberite masu u 3D prikazu. Svojstva pokazuju njenu namenu, spratove i visinu sprata, otisak, bruto površinu poda, kako sedi na nagibu i njenu parcelu.
2. Kliknite **Razvij ovu masu**.

U jednom koraku opozivanja svaki nivo te zgrade dobija zidove oko otiska (otisak je spoljna strana zidova; svaki zid ide do sprata iznad, a najviši je visok jedan sprat) i pod ispod cele zgrade. Blok se zamenjuje, a zgrada čuva brojke studije u skupu svojstava `CadCraft_SiteMass`, označena kao razvijena. Krova nema: krov zavisi od projekta.

## Mesto lokacije

Datoteka iz CivilCraft-a zapisuje se u sopstvenoj jedinici dužine projekta i, kada je CivilCraft-ov projekat imao koordinatni sistem, nosi ga kao preračunavanje mape projekta. Razvoj mase to ne menja, pa zgrada ostaje tamo gde je mapa kaže da je.
