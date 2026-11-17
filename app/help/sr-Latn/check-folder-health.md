---
title: Proveri fasciklu zbog oštećenih kopija, nedostajućih veza i ostataka
summary: Koristi izveštaj o fascikli da nađeš presečene datoteke modela, izabereš najnoviju ispravnu rezervnu kopiju, vidiš koje veze nedostaju i uočiš datoteke za zaključavanje i privremene datoteke.
keywords: provera stanja, oštećeno, pokvareno, nepotpuno, skraćeno, rezervna kopija, nedostajuće veze, xref nedostaje, revizija, ostaci, datoteke za zaključavanje, dwl, bak, predaja
from: 3025a539
---

## Šta ćeš uraditi

Proveri projektnu fasciklu pre nego što je predaš ili počneš da radiš na njoj: je li svaki model potpun, koja je poslednja ispravna rezervna kopija i jesu li sve povezane datoteke tu?

## Koraci: oštećene kopije

1. Otvori projektnu fasciklu. Vidi [Otvaranje cele projektne fascikle](topic:open-project-folder).
2. Pročitaj napomene ispod naziva fascikle. „2 datoteke su nepotpune ili se ne mogu pročitati. Vidi modele ispod.“ znači da ima šta da se pogleda.
3. U **Modeli** pogledaj kolonu **Status**. **Potpuno** je u redu. Žuto „1 nepotpuno“ znači da je jedna kopija loša, ali je druga ispravna. Crveno **Nepotpuno** znači da nije nađena nijedna ispravna kopija.
4. Otvori **Sve … kopije** ispod modela sa problemom. Lista prikazuje glavnu datoteku i svaku numerisanu rezervnu kopiju, od najnovije, sa veličinom, datumom i statusom.
5. Pročitaj napomenu iznad liste, na primer: „Tower.rvt je nepotpuna (183.2 MB, treba da bude najmanje 214.0 MB). Kartica prikazuje najnoviju potpunu kopiju, Tower.0012.rvt (3. mar 2025).“
6. Klikni kopiju koju želiš da otvoriš. Mogu se kliknuti samo potpune kopije.

## Šta radi provera stanja

Svaka kopija svakog modela dobija brzu proveru svog zaglavlja, po 512 bajtova, pa se čak i fascikla sa velikim modelima proveri za nekoliko sekundi. Datoteka čiji sopstveni indeks pokazuje iza svog kraja presečena je dok je kopirana, otpremana ili sinhronizovana. Datoteka na oblačnom disku koja je još „samo na mreži“ izgleda isto.

Kartica za svaki model čita se iz glavne datoteke kad je ispravna, a iz najnovije ispravne rezervne kopije kad nije.

## Koraci: nedostajuće veze

1. Potraži napomenu „*n* povezanih datoteka nije u ovoj fascikli.“ ispod naziva fascikle.
2. Skroluj do **Povezane i referencirane datoteke**. Nedostajuće veze navedene su prve.
3. Pročitaj kolonu **Gde** za svaku vezu:
   - **U ovoj fascikli**: nađeno na putanji koju je model sačuvao.
   - **Nađen je isti naziv**: datoteka istog imena nalazi se negde drugde u fascikli. Proveri da li je prava.
   - **Datoteka biblioteke**: tabela keynote oznaka ili šifara sklopova. One dolaze uz program na svakom računaru, pa se u fascikli i ne očekuju.
   - **Nije u ovoj fascikli**: nije nađeno nigde u fascikli.
4. Pročitaj **Koristi je** da vidiš koji modeli povezuju svaku datoteku.

BimCraft traži svaku vezu prvo po njenoj relativnoj putanji, zatim po kraju njene sačuvane putanje (pa se `\\server\jobs\Tower\Cad\X-Refs\site.dwg` nalazi kao `X-Refs/site.dwg` kad izabereš fasciklu `Cad`), zatim po nazivu datoteke bilo gde u fascikli.

## Koraci: ostaci

1. Skroluj do **Izdvojeno** na kraju izveštaja.
2. Pročitaj tri reda koja se mogu pojaviti:
   - Fascikle za održavanje (`*_backup`, `*_log`, `Revit_temp`): nisu pročitane.
   - Ostaci za zaključavanje, dnevnik i rezervne kopije: datoteke kao što su `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ostavljaju ih programi koji su se srušili ili su bili otvoreni kad je fascikla kopirana. Obično je bezbedno obrisati ih kad niko ne drži datoteke otvorene.
   - Ostale datoteke: sve drugo što BimCraft ne čita.

## Česte greške

- **Brisanje oštećene glavne datoteke pre čuvanja ispravne rezervne kopije.** Prvo kopiraj najnoviju potpunu rezervnu kopiju, pa se tek onda bavi oštećenom datotekom.
- **Slepo verovanje u „Nađen je isti naziv“.** Dva različita crteža mogu imati isti naziv. Ako nisi siguran, otvori oba.
- **Mišljenje da je nedostajuća datoteka biblioteke problem.** Tabele keynote oznaka i sklopova žive uz program na svakom računaru.
- **Broj datoteka se razlikuje između pregledača.** U Firefoxu i Safariju, {{ui:Otvori fasciklu}} prosleđuje svaku datoteku, uključujući one u fasciklama za održavanje, pa se u broj (i u ograničenje od 20.000 datoteka) ubrajaju i one. Prevlačenje fascikle unutra preskače ih, kao što rade Chrome i Edge. Izveštaj je inače isti.
