---
title: Ustvarite razpredelnico opreme in izvozite CSV
summary: Oznake elementov v risbi gostinske opreme spremenite v razpredelnico opreme, jo filtrirajte, skočite na vsak element na njegovem listu in jo prenesite kot CSV.
keywords: oprema, razpredelnica, gostinstvo, kuhinja, oznake elementov, kcl, atributi, kosovnica, bom, csv, preglednica, izvoz, izvleček podatkov
from: e3faa1c8
---

## Kaj boste naredili

Preberite seznam opreme iz risbe kuhinje ali gostinstva, ga preverite, poiščite vsak element na tlorisu in ga prenesite kot datoteko preglednice.

To deluje pri risbah, katerih oznake opreme nosijo podatke kot atribute blokov, kot to počnejo kuhinjske knjižnice, na primer KCL: vsaka oznaka vsebuje številko elementa (`KCL-ITEM`), količino, kategorijo, proizvajalca, model, električne in vodovodne podatke ter opombe. Druge risbe nimajo zavihka {{ui:Oprema}}.

## Koraki

1. Odprite risbo, po možnosti iz njene mape projekta, da se naložijo tudi povezane risbe.
2. Kliknite zavihek {{ui:Oprema}} nad risbo. Njegova oznaka pove, koliko elementov je na listih, na primer „Oprema (88)“.
3. Preberite razpredelnico: **Postavka**, **Kol.**, **Oprema**, **Proizvajalec**, **Model**, **Električno**, **Vodovod**, **Kje**.
4. Izberite, kaj naj bo na seznamu, v meniju nad tabelo: **Vsi listi**, en list, **Ni na nobenem listu** ali **Vse, kar je označeno v risbi**. Vsaka izbira prikaže svoje število.
5. Vpišite v polje filtra („Filter: kategorija, proizvajalec, model …“), da zožite seznam, na primer `hladilnik` ali `208`.
6. Kliknite ime lista elementa v stolpcu **Kje**.
7. Poglejte risbo: BimCraft preklopi na ta list, približa element in okoli njega nariše obroč. Statusna vrstica pove: „Element *n*, *kategorija* je obkrožen na listu *list*.“
8. Kliknite {{ui:Oprema}}, da se vrnete na razpredelnico.
9. Kliknite {{ui:Prenesi CSV}}.

## Kaj naj vidite

- Datoteko z imenom „*ime risbe* equipment.csv“ (z imenom lista v oklepaju, če ste izpisali en list) v mapi za prenose. Odpre se v programih Excel, Numbers, LibreOffice ali Google Sheets.
- Statusna vrstica: „Preneseno: *ime datoteke* (elementi: *n*).“

CSV ima te stolpce: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (koliko oznak). Prenese se natanko vrstice, ki jih prikazuje tabela, po meniju in filtru.

## Kako je razpredelnica sestavljena

- Prebrana je iz **samih oznak**, ne iz razpredelnice, narisane na listu. Opomba nad tabelo pove, koliko oznak je bilo prebranih.
- Ena vrstica je ena številka postavke z enim nizom podatkov. Njena količina je **vsota** njenih oznak, kot jo šteje natisnjena razpredelnica: polica, označena „5“ na enem mestu in „3“ na drugem, je 8, prikazano kot „5 + 3“.
- **Kje** našteje liste, ki prikazujejo vsak element, določene iz pogledov vsakega lista, kar se natisne. „Samo model“ pomeni, da element ni prikazan na nobenem listu.
- **Številka uporabljena dvakrat** označi eno številko postavke na dveh različnih kosih opreme. Vrstica ima oranžno oznako.
- Oznake, ki jih noben list ne prikazuje, so ločene pod **Ni na nobenem listu**. Pogosto so ostanki prejšnjih načrtov ali drugih del in se nikoli ne mešajo z **Vsi listi**.
- **Električno** prikazuje amperi, kW, HP, volti, faza, priključek in vtič, kot so označeni. **Vodovod** prikazuje velikosti priključkov: CW hladna voda, HW topla voda, DD neposredni odtok, ID posredni odtok in plin. Druga polja oznak še niso prikazana.

## Pogoste napake

- **Ni zavihka {{ui:Oprema}}.** Risba nima oznak `KCL-ITEM` ali je oprema narisana brez podatkov. Ni česa prebrati.
- **Števila se razlikujejo od natisnjene razpredelnice.** Natisnjena razpredelnica lahko navaja rezervne številke ali krajša imena kot oznake. Za to, kar je postavljeno, zaupajte oznakam; razlike preverite z oblikovalcem.
- **Odprt CSV kaže čudne znake.** Datoteka je v UTF-8. Odprite jo z ukazom za uvoz v preglednici in izberite UTF-8, če program to zahteva.
- **Celica se začne z apostrofom.** Vrednosti, ki se začnejo z `=`, `+`, `-` ali `@`, dobijo vodilni `'`, da jih preglednice ne izvedejo kot formule.
- **{{key:F}} in {{key:P}} ne naredita ničesar.** Delujeta na risbi, ne na razpredelnici. Najprej kliknite zavihek lista.
