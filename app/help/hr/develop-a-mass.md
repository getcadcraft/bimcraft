---
title: Razvijte masu zgrade iz studije lokacije
summary: Uzmite masu zgrade proučenu u prikazu lokacije CivilCraft-a i razvijte je u razine, zidove i podove, uz zadržano mjesto lokacije na karti.
keywords: masa, masa zgrade, oblikovanje mase, studija lokacije, razvoj, CivilCraft, predaja, razine, zidovi, podovi, tlocrtna površina, georeferenciranje, IFC
from: 557b94d1
---

Prikaz lokacije u CivilCraft-u može nacrtati mase zgrada na parceli i ispitati ih prema tlu, ograničenjima koja upišete i suncu. **Razvij u BimCraft-u** tamo otvara BimCraft u novoj kartici s masama; **Mase kao IFC** ih sprema kao datoteku koju ovdje otvarate uobičajenim putem. Na oba načina svaka masa stiže kao lokacija, zgrada s jednom razinom po katu i jednim blokom (sama masa) koji nosi svoje brojeve.

## Razvijte masu

1. Odaberite masu u 3D prikazu. Svojstva prikazuju njezinu namjenu, katove i visinu kata, tlocrtnu površinu, bruto površinu poda, kako sjedi na padini i njezinu parcelu.
2. Kliknite **Razvij ovu masu**.

U jednom koraku poništenja svaka razina te zgrade dobiva zidove oko tlocrtne površine (tlocrtna površina je vanjska ploha zidova; svaki zid ide do razine iznad, a najviši je visok jedan kat) i pod pod cijelom zgradom. Blok se zamjenjuje, a zgrada čuva brojeve studije u skupu svojstava `CadCraft_SiteMass`, označenom kao razvijen. Krova nema: krov ovisi o projektu.

## Mjesto lokacije

Datoteka iz CivilCraft-a zapisuje se u duljinskoj jedinici projekta i, kada je CivilCraft-ov projekt imao koordinatni sustav, nosi ga kao pretvorbu karte projekta. Razvijanje mase to ostavlja netaknuto, pa zgrada ostaje tamo gdje je karta kaže da je.
