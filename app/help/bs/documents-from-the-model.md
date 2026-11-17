---
title: Dokumenti iz modela
summary: Napiši specifikaciju ili opis jednom kao šablon, s poljima za količine, svojstva i oznake, i popuni ga iz otvorenog IFC-a kao PDF ili Word dokument.
keywords: dokument, dokumenti, specifikacija, spec, opis, šablon, markdown, izvještaj, word, docx, pdf, količine, raspored, vrsta radova, raspored vrata, završne obrade, documentcad
from: 2b0c9156
---

## Šta ćete uraditi

Šablon je tekst u Markdownu s poljima u dvostrukim vitičastim zagradama. BimCraft popunjava polja iz otvorenog modela (brojevi, količine po tipu, svojstva, vaše [oznake](topic:tags-and-schedules)) i sprema rezultat kao PDF, Word dokument (.docx) ili Markdown.

## Koraci

1. Otvori IFC model.
2. U lijevom panelu, pod {{ui:Količine}}, otvori {{ui:Dokumenti iz modela}}.
3. Odaberi šablon: {{ui:Vrata i okovi}} ili {{ui:Zidovi, obloge i završne obrade}}, ili {{ui:Učitaj šablon (.md)…}} za svoj.
4. Ako šablon čita oznake koje model još ne definiše, klikni {{ui:Dodaj oznake ovog šablona}}, pa označi elemente pod {{ui:Oznake}}.
5. Promijeni tekst kako želiš i klikni {{ui:Prikaži dokument}}.
6. Klikni {{ui:PDF}} (prvo odaberi A4 ili Letter) ili {{ui:Word (.docx)}}.

## Šta treba da vidite

- Popunjen dokument ispod dugmadi, s tabelama.
- Spisak upozorenja kad se polje ne može pročitati (oznaka koja nije definisana, svojstvo koje model nema, blok koji nikad nije zatvoren); takvo polje se štampa kao `[?…]`.
- PDF stranice s naslovom dokumenta i „Stranica 1 od 3” na dnu svake stranice; duge tabele se nastavljaju sa svojim zaglavljem.

## Polja

| Polje | Daje |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | naziv projekta i njegov opis, naziv fajla, danas |
| `{{count IfcDoor}}` | koliko ima vrata |
| `{{sum IfcWall NetSideArea}}` | ukupno, s njegovom jedinicom |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` i zagrade) nad članovima u uglastim zagradama: `[sum …]`, `[count …]`, a unutar each-a `[qty Width]`. `round n` postavlja decimale, `unit` dodaje jedinicu. Ono što ne može pročitati ili dijeljenje s nulom ispisuje `[?…]` i upozorava |
| `{{qty IfcWall NetSideArea by Type}}` | tabela: jedan red po tipu s brojem i ukupnim, i red ukupno |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabela, jedan red po elementu |
| `{{tag Finish}}` | u petlji, vrijednost elementa; inače svaka upotrijebljena vrijednost (hrast, boja) |
| `{{tags}}` | definicije oznaka kao tabela |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | tekst jednom po elementu; dio poslije `{{else}}` kad nema nijednog |
| `{{#group IfcWall by Type}} … {{/group}}` | tekst jednom po tipu, s `{{value}}`, `{{count}}`, `{{sum Length}}` i običnim `{{#each}}` unutra |

Unutar `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC oznaka), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (vlastita vrijednost elementa, s jedinicom).

Klasa može biti više njih (`IfcDoor|IfcWindow`) ili svaki element (`*`). Suzi bilo koju s `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testovi su `=`, `!=`, `~` (sadrži), `>`, `<`, `>=`, `<=`, `has` i `hasnot`; spoji više s `and`; vrijednost s razmacima stavi u "navodnike". `sort Name` sortira petlju.

## Rasporedi i specifikacija u dokumentu

`{{schedule doors}}` ispisuje raspored modela kao tabelu, u vašem rasporedu kancelarije: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ili naziv postavke koju ste sačuvali u Specifikacijama. `{{specification}}` ispisuje specifikaciju projekta. Šabloni **Radni crteži (rasporedi)** i **Specifikacija** ih koriste. U pregledu kliknite na brojku takvog rasporeda da odaberete elemente iz kojih je nastala. Pogledajte [Raspored, čuvanje i izvoz specifikacije](topic:schedule-layouts) i [Pisanje specifikacije iz modela](topic:specification).

## Dobro je znati

- Polje imenuje ugrađeni (Name, Type, Storey, Class, Material, Mark), oznaku (`tag:Fire rating`, ili njen naziv), svojstvo (`Pset_WallCommon.FireRating`) ili samo naziv svojstva (`NetSideArea`, `Width`): goli naziv čita vlastiti skup svakog elementa, a prvo skupove količina, pa je `Width` na vratima širina vrata, a ne debljina zida. Unutar `where`, goli naziv čita skup koji većina odabranih elemenata ima.
- Količine su ono što kažu skupovi količina fajla (BimCraft ih piše za ono što crta); jedinice dolaze iz postavki jedinica fajla.
- Riječi polja (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) ostaju na engleskom u svakom jeziku. Primjeri šablona su na engleskom.
- Tekst iz modela nikad ne postaje oblikovanje: naziv sa `*` ili `|` u njemu ispisuje se kakav jeste.
- Šablon koji ste promijenili sačuvajte s {{ui:Čuvaj u ovom pregledaču}} (samo ovaj pregledač ga ima) ili {{ui:Preuzmi šablon}}.
- PDF tekst koristi standardne PDF fontove: znak van zapadnoevropskog teksta ispisuje se kao „?”, a statusna linija kaže koliko ih je.
- Šabloni po vrsti radova su u Biblioteci (vrsta Šablon dokumenta). U Dokumentima iz modela izaberi Iz biblioteke…, odaberi jedan, i njegov tekst i oznake koje čita se učitavaju; uredi ga kako želiš. Objavljivanje vlastitog šablona u Biblioteku je isti upload kao i svaka druga stavka. Još nije izgrađeno: proračuni osim brojeva i zbirova.
