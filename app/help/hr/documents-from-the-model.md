---
title: Dokumenti iz modela
summary: Napišite specifikaciju ili opis jednom kao predložak, s poljima za količine, svojstva i oznake, i popunite ga iz otvorenog IFC-a kao PDF ili Word dokument.
keywords: dokument, dokumenti, specifikacija, spec, opis, predložak, markdown, izvještaj, word, docx, pdf, količine, tablica, tablica vrata, završni radovi, struka, documentcad
from: 2b0c9156
---

## Što ćete napraviti

Predložak je tekst u Markdownu s poljima u dvostrukim vitičastim zagradama. BimCraft popunjava polja iz otvorenog modela (brojevi, količine po tipu, svojstva, vaše [oznake](topic:tags-and-schedules)) i sprema rezultat kao PDF, Word dokument (.docx) ili Markdown.

## Koraci

1. Otvorite IFC model.
2. U lijevom panelu, pod {{ui:Količine}}, otvorite {{ui:Dokumenti iz modela}}.
3. Odaberite predložak: {{ui:Vrata i okovi}} ili {{ui:Zidovi, obloge i završni slojevi}}, ili {{ui:Učitaj predložak (.md)…}} za vlastiti.
4. Ako predložak čita oznake koje model još ne definira, kliknite {{ui:Dodaj oznake ovog predloška}}, zatim označite elemente pod {{ui:Oznake}}.
5. Promijenite tekst kako želite i kliknite {{ui:Prikaži dokument}}.
6. Kliknite {{ui:PDF}} (prvo odaberite A4 ili Letter) ili {{ui:Word (.docx)}}.

## Što biste trebali vidjeti

- Popunjeni dokument ispod gumba, s njegovim tablicama.
- Popis upozorenja kad se polje ne može pročitati (oznaka koja nije definirana, svojstvo koje model nema, blok koji se nikad ne zatvara); takvo polje ispisuje se kao `[?…]`.
- Stranice PDF-a s naslovom dokumenta i „Stranica 1 od 3” na dnu svake stranice; duge tablice prenose se sa svojim zaglavljem.

## Polja

| Polje | Daje |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | naziv projekta i njegov opis, naziv datoteke, danas |
| `{{count IfcDoor}}` | koliko vrata |
| `{{sum IfcWall NetSideArea}}` | ukupno, s jedinicom |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` i zagrade) nad pojmovima u uglatim zagradama: `[sum …]`, `[count …]`, a unutar each-a `[qty Width]`. `round n` postavlja decimale, `unit` dodaje jedinicu. Ono što ne može pročitati ili dijeljenje s nulom ispisuje `[?…]` i upozorava |
| `{{qty IfcWall NetSideArea by Type}}` | tablica: jedan red po tipu s brojem i ukupnim iznosom te redak s ukupnim zbrojem |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tablica, jedan red po elementu |
| `{{tag Finish}}` | u petlji vrijednost elementa; inače svaka korištena vrijednost (Oak, Paint) |
| `{{tags}}` | definicije oznaka kao tablica |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | tekst jednom po elementu; dio poslije `{{else}}` kad ih nema |
| `{{#group IfcWall by Type}} … {{/group}}` | tekst jednom po tipu, s `{{value}}`, `{{count}}`, `{{sum Length}}` i običnim `{{#each}}` unutra |

Unutar `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC oznaka), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (vlastita vrijednost elementa, s jedinicom).

Klasa može biti više njih (`IfcDoor|IfcWindow`) ili svaki element (`*`). Svaku možete suziti s `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Provjere su `=`, `!=`, `~` (sadrži), `>`, `<`, `>=`, `<=`, `has` i `hasnot`; spojite više s `and`; vrijednost s razmacima stavite u „navodnike“. `sort Name` poređa petlju.

## Tablice i specifikacija u dokumentu

`{{schedule doors}}` ispisuje tablicu modela kao tablicu, u vašem rasporedu ureda: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ili naziv postavke koju ste spremili u Specifikacijama. `{{specification}}` ispisuje specifikaciju projekta. Predlošci **Tablice radnih crteža** i **Specifikacija** koriste ih. U pregledu kliknite brojku takve tablice da odaberete elemente iz kojih dolazi. Vidi [Složite, spremite i izvezite specifikaciju](topic:schedule-layouts) i [Napišite specifikaciju iz modela](topic:specification).

## Dobro je znati

- Polje imenuje ugrađeni pojam (Name, Type, Storey, Class, Material, Mark), oznaku (`tag:Fire rating`, ili njezin naziv), svojstvo (`Pset_WallCommon.FireRating`) ili samo naziv svojstva (`NetSideArea`, `Width`): goli naziv čita vlastiti skup svakog elementa, prvo skupove količina, pa je `Width` na vratima širina vrata, a ne debljina zida. Unutar `where` goli naziv čita skup koji većina odabranih elemenata ima.
- Količine su ono što kažu skupovi količina datoteke (BimCraft ih piše za ono što crta); jedinice dolaze iz postavki jedinica datoteke.
- Riječi polja (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) ostaju na engleskom u svakom jeziku. Primjerni predlošci su na engleskom.
- Tekst iz modela nikad ne postaje oblikovanje: naziv sa `*` ili `|` u njemu ispisuje se kakav jest.
- Predložak koji ste promijenili zadržite s {{ui:Čuvaj u ovom pregledniku}} (samo ovaj preglednik ga ima) ili {{ui:Preuzmi predložak}}.
- Tekst PDF-a koristi standardne PDF fontove: znak izvan zapadnoeuropskog teksta ispisuje se kao „?“, a statusna linija kaže koliko ih je.
- Predlošci po struci žive u Knjižnici (vrsta Predložak dokumenta). U Dokumentima iz modela odaberite Iz knjižnice…, izaberite jedan, i njegov tekst i oznake koje čita dolaze unutra; uredite ga kako želite. Objava vlastitog predloška u Knjižnicu jednaka je učitavanju bilo koje druge stavke. Još nije izrađeno: izračuni osim brojeva i zbrojeva.
