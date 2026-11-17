---
title: Provjeri folder zbog oštećenih kopija, nedostajućih veza i ostataka
summary: Koristi izvještaj o folderu da pronađeš skraćene kopije modela, izabereš najnoviju potpunu rezervnu kopiju, vidiš koje veze nedostaju i primijetiš datoteke zaključavanja i privremene datoteke.
keywords: provjera zdravlja, oštećeno, neispravno, nepotpuno, skraćeno, rezervna kopija, nedostajuće veze, xref nedostaje, revizija, ostaci, datoteke zaključavanja, dwl, bak, primopredaja
from: 3025a539
---

## Šta ćete uraditi

Provjerite projektni folder prije nego ga predate ili počnete raditi u njemu: je li svaki model potpun, koja rezervna kopija je zadnja ispravna i jesu li sve povezane datoteke tu.

## Koraci: oštećene kopije

1. Otvori projektni folder. Vidi [Otvori cijeli projektni folder](topic:open-project-folder).
2. Pročitaj napomene ispod naziva foldera. "2 datoteke su nepotpune ili nečitljive. Pogledajte modele ispod." znači da treba nešto pogledati.
3. U **Modeli** pogledaj kolonu **Status**. **Potpuno** je u redu. Žuto "1 nepotpuna" znači da je jedna kopija neispravna, ali je druga ispravna. Crveno **Nepotpuno** znači da nije pronađena nijedna ispravna kopija.
4. Otvori **Sve … kopije** ispod modela s problemom. Prikazuje glavnu datoteku i svaku numerisanu rezervnu kopiju, najnoviju prvo, s veličinom, datumom i statusom.
5. Pročitaj napomenu iznad liste, na primjer "Tower.rvt is incomplete (183.2 MB, should be at least 214.0 MB). The card shows the newest complete copy, Tower.0012.rvt (3. mart 2025.)."
6. Klikni kopiju koju želiš otvoriti. Mogu se kliknuti samo potpune kopije.

## Šta provjera zdravlja radi

Svaka kopija svakog modela dobija brzu provjeru zaglavlja, po 512 bajtova, pa se čak i folder s velikim modelima provjeri za nekoliko sekundi. Datoteka čiji vlastiti indeks pokazuje iza kraja bila je prekinuta tokom kopiranja, otpremanja ili sinhronizacije. Datoteka na oblak-disku koja je još "samo online" izgleda isto.

Kartica za svaki model čita se iz glavne datoteke kad je ispravna, a iz najnovije ispravne rezervne kopije kad nije.

## Koraci: nedostajuće veze

1. Potraži napomenu "*n* povezanih datoteka nije u ovom folderu." ispod naziva foldera.
2. Pomjeri se do **Povezane i referencirane datoteke**. Nedostajuće veze su prve na listi.
3. Pročitaj kolonu **Gdje** za svaku vezu:
   - **U ovom folderu**: pronađena na putanji koju je model sačuvao.
   - **Pronađen isti naziv**: datoteka s istim nazivom je negdje drugo u folderu. Provjeri je li to prava.
   - **Datoteka biblioteke**: tabela ključnih nota ili šifara sklopova. Dolazi s programom na svakom računaru, pa se ne očekuje u folderu.
   - **Nije u ovom folderu**: nije pronađena nigdje u folderu.
4. Pročitaj **Koristi** da vidiš koji modeli povezuju svaku datoteku.

BimCraft traži svaku vezu prvo po njenoj relativnoj putanji, zatim po kraju sačuvane putanje (pa se `\\server\jobs\Tower\Cad\X-Refs\site.dwg` nađe kao `X-Refs/site.dwg` kad odabereš folder `Cad`), a onda po nazivu datoteke bilo gdje u folderu.

## Koraci: ostaci

1. Pomjeri se do **Odložene stavke** na kraju izvještaja.
2. Pročitaj tri reda koji se mogu pojaviti:
   - Pomoćni folderi (`*_backup`, `*_log`, `Revit_temp`): ne čitaju se.
   - Ostaci zaključavanja, zapisnika i rezervnih kopija: datoteke poput `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ostavljaju ih programi koji su pali ili su bili otvoreni kad je folder kopiran. Obično je bezbjedno obrisati ih kad niko nema datoteke otvorene.
   - Ostale datoteke: sve drugo što BimCraft ne čita.

## Česte greške

- **Brisanje oštećene glavne datoteke prije nego sačuvaš dobru rezervnu kopiju.** Prvo kopiraj najnoviju potpunu rezervnu kopiju, pa se tek onda bavi oštećenom datotekom.
- **Slijepo vjerovanje u "Pronađen isti naziv".** Dva različita crteža mogu imati isti naziv. U nedoumici otvori oba.
- **Smatranje nedostajuće biblioteke problemom.** Tabele ključnih nota i šifara sklopova žive uz program na svakom računaru.
- **Broj datoteka se razlikuje između preglednika.** U Firefoxu i Safariju {{ui:Open a folder}} predaje svaku datoteku, uključujući one u pomoćnim folderima, pa broj (i ograničenje od 20.000 datoteka) uključuje i njih. Prevlačenje foldera ih preskače, kao što rade Chrome i Edge. Izvještaj je inače isti.
