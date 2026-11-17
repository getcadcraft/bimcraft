---
title: Dokumenti iz modela
summary: Napišite specifikaciju ili opis jednom kao šablon, sa poljima za količine, svojstva i oznake, i popunite ga iz otvorenog IFC-a kao PDF ili Word dokument.
keywords: dokument, dokumenti, specifikacija, spec, opis, šablon, markdown, izveštaj, word, docx, pdf, količine, specifikacija vrata, struka, završne obrade, documentcad
from: 2b0c9156
---

## Šta ćete uraditi

Šablon je tekst u Markdown-u sa poljima u dvostrukim vitičastim zagradama. BimCraft popunjava polja iz otvorenog modela (brojevi, količine po tipu, svojstva, vaše [oznake](topic:tags-and-schedules)) i čuva rezultat kao PDF, Word dokument (.docx) ili Markdown.

## Koraci

1. Otvorite IFC model.
2. U levom panelu, pod {{ui:Količine}}, otvorite {{ui:Dokumenti iz modela}}.
3. Izaberite šablon: {{ui:Vrata i okovi}} ili {{ui:Zidovi, obloge i završne obrade}}, ili {{ui:Učitaj šablon (.md)…}} za svoj.
4. Ako šablon čita oznake koje model još ne definiše, kliknite {{ui:Dodaj oznake ovog šablona}}, pa označite elemente pod {{ui:Oznake}}.
5. Promenite tekst kako želite i kliknite {{ui:Prikaži dokument}}.
6. Kliknite {{ui:PDF}} (prvo izaberite A4 ili Letter) ili {{ui:Word (.docx)}}.

## Šta treba da vidite

- Popunjen dokument ispod dugmadi, sa svojim tabelama.
- Spisak upozorenja kada polje ne može da se pročita (oznaka koja nije definisana, svojstvo koje model nema, blok koji se nikad ne zatvara); takvo polje se ispisuje kao `[?…]`.
- Stranice PDF-a sa naslovom dokumenta i „Strana 1 od 3” u dnu svake stranice; duge tabele prenose zaglavlje na sledeću stranicu.

## Polja

| Polje | Daje |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | naziv projekta i njegov opis, ime datoteke, danas |
| `{{count IfcDoor}}` | koliko ima vrata |
| `{{sum IfcWall NetSideArea}}` | zbir, sa svojom jedinicom |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` i zagrade) nad članovima u uglastim zagradama: `[sum …]`, `[count …]`, a unutar each `[qty Width]`. `round n` postavlja decimale, `unit` dodaje jedinicu. Nešto što ne može da pročita ili deljenje nulom ispisuje `[?…]` i upozorava |
| `{{qty IfcWall NetSideArea by Type}}` | tabela: jedan red po tipu sa njegovim brojem i zbirom, i red ukupno |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabela, jedan red po elementu |
| `{{tag Finish}}` | u petlji, vrednost elementa; inače svaka upotrebljena vrednost (Hrast, Boja) |
| `{{tags}}` | definicije oznaka kao tabela |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | tekst jednom po elementu; deo posle `{{else}}` kada ih nema |
| `{{#group IfcWall by Type}} … {{/group}}` | tekst jednom po tipu, sa `{{value}}`, `{{count}}`, `{{sum Length}}` i običnim `{{#each}}` unutra |

Unutar `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC oznaka), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (sopstvena vrednost elementa, sa svojom jedinicom).

Klasa može biti više (`IfcDoor|IfcWindow`) ili svaki element (`*`). Suzite bilo koju sa `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testovi su `=`, `!=`, `~` (sadrži), `>`, `<`, `>=`, `<=`, `has` i `hasnot`; spojite više sa `and`; vrednost sa razmacima stavite pod navodnicima. `sort Name` sortira petlju.

## Specifikacije i specifikacija u dokumentu

`{{schedule doors}}` ispisuje specifikaciju modela kao tabelu, u vašem rasporedu kancelarije: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ili ime postavke koju ste sačuvali u Specifikacijama. `{{specification}}` ispisuje specifikaciju projekta. Šabloni **Specifikacije radnih crteža** i **Specifikacija** ih koriste. U pregledu kliknite na brojku takve specifikacije da izaberete elemente iz kojih potiče. Pogledajte [Rasporedite, sačuvajte i izvezite specifikaciju](topic:schedule-layouts) i [Napišite specifikaciju iz modela](topic:specification).

## Dobro je znati

- Polje imenuje ugrađeno (Name, Type, Storey, Class, Material, Mark), oznaku (`tag:Fire rating`, ili njeno ime), svojstvo (`Pset_WallCommon.FireRating`) ili samo ime svojstva (`NetSideArea`, `Width`). Goli naziv čita skup svakog elementa, a skupovi količina prvo, pa je `Width` na vratima širina vrata, a ne debljina zida. Unutar `where`, goli naziv čita skup koji većina izabranih elemenata ima.
- Količine su ono što kažu skupovi količina u datoteci (BimCraft ih upisuje za ono što crta); jedinice dolaze iz podešavanja jedinica datoteke.
- Reči polja (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) ostaju na engleskom u svakom jeziku. Primeri šablona su na engleskom.
- Tekst iz modela nikada ne postaje formatiranje: ime sa `*` ili `|` u sebi ispisuje se kako jeste.
- Šablon koji ste promenili sačuvajte sa {{ui:Sačuvaj u ovom pregledaču}} (samo ovaj pregledač ga ima) ili sa {{ui:Preuzmi šablon}}.
- Tekst PDF-a koristi standardne PDF fontove: znak van zapadnoevropskog teksta ispisuje se kao „?”, a statusna linija kaže koliko ih je.
- Šabloni po struci žive u Biblioteci (vrsta Šablon dokumenta). U Dokumentima iz modela izaberite Iz biblioteke…, izaberite jedan, i njegov tekst i oznake koje čita dolaze unutra; uredite po želji. Objavljivanje vašeg šablona u Biblioteku je isto otpremanje kao i svaka druga stavka. Još nije napravljeno: proračuni osim brojeva i zbirova.
