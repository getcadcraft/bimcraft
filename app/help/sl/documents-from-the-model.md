---
title: Dokumenti iz modela
summary: Enkrat napišite specifikacijo ali opis kot predlogo s polji za količine, lastnosti in oznake ter ga izpolnite iz odprtega modela IFC kot PDF ali dokument Word.
keywords: dokument, dokumenti, specifikacija, spec, opis, predloga, markdown, poročilo, word, docx, pdf, količine, razpredelnica, stroka, razpredelnica vrat, zaključne obdelave, documentcad
from: 2b0c9156
---

## Kaj boste naredili

Predloga je besedilo v Markdownu s polji v dvojnih zavitih oklepajih. BimCraft napolni polja iz odprtega modela (števila, količine po tipu, lastnosti, vaše [oznake](topic:tags-and-schedules)) in shrani rezultat kot PDF, dokument Word (.docx) ali Markdown.

## Koraki

1. Odprite model IFC.
2. V levem podoknu pod {{ui:Količine}} odprite {{ui:Dokumenti iz modela}}.
3. Izberite predlogo: {{ui:Vrata in okovje}} ali {{ui:Zidovi, obloge in obdelave}}, ali {{ui:Naloži predlogo (.md) …}} za svojo.
4. Če predloga bere oznake, ki jih model še ne določa, kliknite {{ui:Dodaj oznake te predloge}}, nato označite elemente pod {{ui:Oznake}}.
5. Besedilo spremenite, kakor želite, in kliknite {{ui:Pokaži dokument}}.
6. Kliknite {{ui:PDF}} (najprej izberite A4 ali Letter) ali {{ui:Word (.docx)}}.

## Kaj boste videli

- Izpolnjen dokument pod gumbi, s svojimi tabelami.
- Seznam opozoril, kadar polja ni mogoče prebrati (oznaka, ki ni določena, lastnost, ki je model nima, blok, ki ni nikoli zaprt); tako polje se natisne kot `[?…]`.
- Strani PDF z naslovom dokumenta in „Stran 1 od 3“ na dnu vsake strani; dolge tabele se nadaljujejo z vrstico glave.

## Polja

| Polje | Daje |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | ime projekta in opis, ime datoteke, danes |
| `{{count IfcDoor}}` | koliko je vrat |
| `{{sum IfcWall NetSideArea}}` | skupno, z enoto |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` in oklepaji) nad členi v oglatih oklepajih: `[sum …]`, `[count …]`, in v zanki `each` `[qty Width]`. `round n` nastavi decimalke, `unit` doda enoto. Česar ne more prebrati ali deljenje z nič, natisne `[?…]` in opozori |
| `{{qty IfcWall NetSideArea by Type}}` | tabela: ena vrstica za vsak tip s številom in skupno, ter vrstica skupnega seštevka |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabela, ena vrstica na element |
| `{{tag Finish}}` | v zanki vrednost elementa; drugje vsaka uporabljena vrednost (Hrast, Barva) |
| `{{tags}}` | definicije oznak kot tabela |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | besedilo enkrat za vsak element; del za `{{else}}`, kadar jih ni |
| `{{#group IfcWall by Type}} … {{/group}}` | besedilo enkrat za vsak tip, z `{{value}}`, `{{count}}`, `{{sum Length}}` in navadnim `{{#each}}` znotraj |

Znotraj `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (lastni element, z enoto).

Razred je lahko več (`IfcDoor|IfcWindow`) ali vsi elementi (`*`). Katerega koli zožite z `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Preizkusi so `=`, `!=`, `~` (vsebuje), `>`, `<`, `>=`, `<=`, `has` in `hasnot`; več jih povežite z `and`; vrednost s presledki zapišite v „narekovaje“. `sort Name` uredi zanko.

## Razpredelnice in specifikacija v dokumentu

`{{schedule doors}}` natisne razpredelnico modela kot tabelo v vaši pisarniški postavitvi: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers` ali ime postavitve, ki ste jo shranili v Razpredelnicah. `{{specification}}` natisne specifikacijo projekta. Predlogi **Razpredelnice delavniških risb** in **Specifikacija** ju uporabljata. V predogledu kliknite vrednost take razpredelnice, da izberete elemente, iz katerih izhaja. Glejte [Postavitev, shranjevanje in izvoz razpredelnice](topic:schedule-layouts) in [Napišite specifikacijo iz modela](topic:specification).

## Dobro je vedeti

- Polje navede vgrajeno (Name, Type, Storey, Class, Material, Mark), oznako (`tag:Fire rating` ali njeno ime), lastnost (`Pset_WallCommon.FireRating`) ali samo ime lastnosti (`NetSideArea`, `Width`): golo ime prebere lasten niz vsakega elementa, najprej nize količin, zato je `Width` pri vratih širina vrat, ne debelina stene. Znotraj `where` golo ime prebere niz, ki ga ima večina izbranih elementov.
- Količine so to, kar pravijo nizi količin v datoteki (BimCraft jih zapiše za tisto, kar riše); enote prihajajo iz nastavitev enot datoteke.
- Besede polj (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) ostanejo v angleščini v vseh jezikih. Primeri predlog so v angleščini.
- Besedilo iz modela nikoli ne postane oblikovanje: ime z `*` ali `|` se natisne tako, kot je.
- Predlogo, ki ste jo spremenili, shranite z {{ui:Shrani v tem brskalniku}} (ima jo samo ta brskalnik) ali {{ui:Prenesi predlogo}}.
- Besedilo PDF uporablja standardne pisave PDF: znak zunaj zahodnoevropskega besedila se natisne kot „?“, vrstica stanja pa pove, koliko jih je.
- Predloge po strokah so v {{ui:Knjižnica}} (vrsta Predloga dokumenta). V Dokumentih iz modela izberite Iz knjižnice …, izberite eno; njeno besedilo in oznake, ki jih bere, se prenesejo, nato jo uredite po želji. Objava lastne predloge v knjižnico je isti prenos kot pri vsakem drugem elementu. Še ni izdelano: izračuni onkraj števil in vsot.
