---
title: Razvij građevinsku masu iz studije lokacije
summary: Uzmi građevinsku masu proučenu u CivilCraftovom prikazu lokacije i razvij je u nivoe, zidove i podove, uz sačuvano mjesto lokacije na mapi.
keywords: masa, građevinska masa, masiranje, studija lokacije, razvoj, CivilCraft, predaja, nivoi, zidovi, podovi, tlocrt, georeferenciranje, IFC
from: 557b94d1
---

CivilCraftov prikaz lokacije može crtati građevinske mase na parceli i provjeriti ih prema terenu, granicama koje upišete i suncu. **Razvij u BimCraftu** tamo otvara BimCraft u novom tabu s masama; **Mase kao IFC** ih spašava kao fajl koji otvarate ovdje na uobičajen način. Na oba načina svaka masa stiže kao lokacija, zgrada s jednim nivoom po spratu i jedan blok (sama masa) koji nosi svoje brojke.

## Razvij masu

1. Odaberi masu u 3D prikazu. **Svojstva** prikazuju njenu namjenu, spratove i visinu sprata, tlocrt, bruto površinu poda, kako sjedi na padini i njenu parcelu.
2. Klikni **Razvij ovu masu**.

U jednom koraku poništenja, svaki nivo te zgrade dobija zidove oko tlocrta (tlocrt je vanjska strana zidova; svaki zid ide do nivoa iznad, a najviši je visok jedan sprat) i pod ispod cijele zgrade. Blok se zamjenjuje, a zgrada čuva brojke studije u skupu svojstava `CadCraft_SiteMass`, označenim kao razvijeno. Krova nema: krov zavisi od projekta.

## Mjesto lokacije

Fajl iz CivilCraft-a je zapisan u dužinskoj jedinici projekta i, kad je CivilCraft-ov projekat imao koordinatni sistem, nosi ga kao kartografsku konverziju projekta. Razvijanje mase to ne mijenja, pa zgrada ostaje tamo gdje ga mapa kaže.
