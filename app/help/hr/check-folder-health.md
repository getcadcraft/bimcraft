---
title: Provjera mape za oštećene kopije, nedostajuće poveznice i ostatke
summary: Pomoću izvješća o mapi pronađite prekinute datoteke modela, odaberite najnoviju cjelovitu sigurnosnu kopiju, vidite koje poveznice nedostaju i uočite datoteke zaključavanja i privremene datoteke.
keywords: provjera stanja, oštećeno, neispravno, nepotpuno, skraćeno, sigurnosna kopija, nedostajuće poveznice, xref nedostaje, revizija, ostaci, datoteke zaključavanja, dwl, bak, predaja
from: 3025a539
---

## Što ćete napraviti

Provjerite projektnu mapu prije predaje ili prije početka rada na njoj: je li svaki model cjelovit, koja je posljednja ispravna sigurnosna kopija i jesu li sve povezane datoteke na mjestu?

## Koraci: oštećene kopije

1. Otvorite projektnu mapu. Vidi [Otvaranje cijele projektne mape](topic:open-project-folder).
2. Pročitajte napomene ispod naziva mape. Napomena „2 datoteke su nepotpune ili nečitljive. Pogledajte modele ispod.“ znači da treba nešto pregledati.
3. U **Modelima** pogledajte stupac **Status**. **Cjelovito** je u redu. Žuto „1 nepotpuno“ znači da je jedna kopija neispravna, ali je druga ispravna. Crveno **Nepotpuno** znači da nije pronađena nijedna ispravna kopija.
4. Otvorite **Sve … kopije** ispod modela s problemom. Popis sadrži glavnu datoteku i svaku numeriranu sigurnosnu kopiju, od najnovije, sa veličinom, datumom i statusom.
5. Pročitajte napomenu iznad popisa, npr. „Tower.rvt je nepotpun (183.2 MB, treba biti najmanje 214.0 MB). Kartica prikazuje najnoviju cjelovitu kopiju, Tower.0012.rvt (3. ožujka 2025.).“
6. Kliknite kopiju koju želite otvoriti. Mogu se kliknuti samo cjelovite kopije.

## Što provjera stanja radi

Svaka kopija svakog modela dobiva brzu provjeru zaglavlja, po 512 bajtova, pa se i mapa s velikim modelima provjeri u nekoliko sekundi. Datoteka čiji vlastiti indeks pokazuje iza kraja bila je prekinuta dok se kopirala, učitavala ili sinkronizirala. Datoteka na oblačnom pogonu koja je još „samo online“ izgleda isto.

Kartica za svaki model čita se iz glavne datoteke kad je ispravna, a iz najnovije ispravne sigurnosne kopije kad nije.

## Koraci: nedostajuće poveznice

1. Potražite napomenu „*n* povezanih datoteka nisu u ovoj mapi.“ ispod naziva mape.
2. Pomaknite se do **Povezane i referencirane datoteke**. Nedostajuće poveznice navedene su prve.
3. Pročitajte stupac **Gdje** za svaku poveznicu:
   - **U ovoj mapi**: pronađena na putanji koju je model spremio.
   - **Pronađen istoimeni**: datoteka istog naziva nalazi se drugdje u mapi. Provjerite je li prava.
   - **Datoteka iz knjižnice**: tablica ključnih napomena ili šifri sklopova. Dolaze s programom na svakom računalu, pa se u mapi ne očekuju.
   - **Nije u ovoj mapi**: nije pronađena nigdje u mapi.
4. Pročitajte **Koristi** da vidite koji modeli povezuju svaku datoteku.

BimCraft traži svaku poveznicu prvo po relativnoj putanji, zatim po kraju spremljene putanje (tako se `\\server\jobs\Tower\Cad\X-Refs\site.dwg` pronalazi kao `X-Refs/site.dwg` kad odaberete mapu `Cad`), a zatim po nazivu datoteke bilo gdje u mapi.

## Koraci: ostaci

1. Pomaknite se do **Izdvojeno** na kraju izvješća.
2. Pročitajte tri retka koja se mogu pojaviti:
   - Pomoćne mape (`*_backup`, `*_log`, `Revit_temp`): nisu pročitane.
   - Ostaci zaključavanja, zapisnika i sigurnosnih kopija: datoteke poput `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ostavljaju ih programi koji su se srušili ili bili otvoreni kad je mapa kopirana. Obično ih je sigurno obrisati kad ih nitko nema otvorene.
   - Ostale datoteke: sve ostalo što BimCraft ne čita.

## Česte pogreške

- **Brisanje oštećene glavne datoteke prije spremanja ispravne sigurnosne kopije.** Prvo kopirajte najnoviju cjelovitu sigurnosnu kopiju, pa tek onda riješite oštećenu datoteku.
- **Slijepo vjerovanje u „Pronađen istoimeni“.** Dva različita crteža mogu imati isti naziv. Ako ste u dvojbi, otvorite oba.
- **Smatranje da je nedostajuća datoteka iz knjižnice problem.** Tablice ključnih napomena i šifri sklopova nalaze se uz program na svakom računalu.
- **Broj datoteka razlikuje se među preglednicima.** U Firefoxu i Safariju {{ui:Otvori mapu}} predaje svaku datoteku, uključujući one u pomoćnim mapama, pa broj (i ograničenje od 20.000 datoteka) uključuje i njih. Povlačenje mape u prozor preskače ih, kao što rade Chrome i Edge. Inače je izvješće isto.
