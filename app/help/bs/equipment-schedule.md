---
title: Napravite specifikaciju opreme i izvezite CSV
summary: Pretvorite oznake stavki na crtežu ugostiteljske opreme u specifikaciju opreme, filtrirajte je, idite na svaku stavku na njenom listu i preuzmite je kao CSV.
keywords: oprema, specifikacija, ugostiteljstvo, kuhinja, oznake stavki, kcl, atributi, bom, lista materijala, csv, tabela, izvoz, izvlačenje podataka
from: e3faa1c8
---

## Šta ćete uraditi

Pročitajte spisak opreme iz kuhinjskog ili ugostiteljskog crteža, provjerite ga, pronađite svaku stavku na planu i preuzmite je kao datoteku tabele.

Ovo radi na crtežima čije oznake opreme nose podatke kao atribute bloka, kao kod kuhinjskih biblioteka dizajna poput KCL: svaka oznaka sadrži broj stavke (`KCL-ITEM`), količinu, kategoriju, proizvođača, model, električne i vodovodne podatke, te napomene. Ostali crteži nemaju karticu {{ui:Equipment}}.

## Koraci

1. Otvorite crtež, po mogućnosti iz njegove fascikle projekta da se učitaju i povezani crteži.
2. Kliknite karticu {{ui:Equipment}} iznad crteža. Njena oznaka pokazuje koliko je stavki na listovima, na primjer "Oprema (88)".
3. Pročitajte specifikaciju: **Stavka**, **Kol.**, **Oprema**, **Proizvođač**, **Model**, **Električno**, **Vodovod** i **Gdje**.
4. Odaberite šta da se navede u meniju iznad tabele: **Svaki list**, jedan list, **Nije ni na jednom listu** ili **Sve označeno u crtežu**. Svaki izbor pokazuje svoj broj.
5. Upišite u polje filtera ("Filter: kategorija, proizvođač, model…") da suzite spisak, na primjer `frižider` ili `208`.
6. Kliknite naziv lista stavke u koloni **Gdje**.
7. Pogledajte crtež: BimCraft prelazi na taj list, uvećava stavku i crta prsten oko nje. Statusna linija kaže "Stavka *n*, *kategorija* je označena prstenom na *listu*."
8. Kliknite {{ui:Equipment}} da se vratite na specifikaciju.
9. Kliknite {{ui:Download CSV}}.

## Šta treba da vidite

- Datoteku pod nazivom "*naziv crteža* equipment.csv" (sa nazivom lista u zagradama kada navedete jedan list) u vašoj fascikli za preuzimanja. Otvara se u Excelu, Numbersu, LibreOffice-u ili Google Sheets.
- Statusnu liniju: "Preuzeto *naziv datoteke* (*n* stavki)."

CSV ima ove kolone: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (koliko oznaka). Preuzima tačno redove koje tabela prikazuje, nakon menija i filtera.

## Kako se specifikacija pravi

- Čita se iz **samih oznaka**, a ne iz tabele specifikacije nacrtane na listu. Napomena iznad tabele kaže koliko je oznaka pročitano.
- Jedan red je jedan broj stavke sa jednim skupom podataka. Njena količina je **zbir** njenih oznaka, kako to štampana specifikacija broji: police označene "5" na jednom mjestu i "3" na drugom su 8, prikazano kao "5 + 3".
- **Gdje** navodi listove koji prikazuju svaku stavku, izračunato iz onoga što prikazuju prikazni prozori svakog lista, a to je ono što se štampa. "Samo model" znači da nijedan list to ne prikazuje.
- **Broj korišten dvaput** označava jedan broj stavke na dvije različite opreme. Red ima žuti znak.
- Oznake koje nijedan list ne prikazuje odvojene su pod **Nije ni na jednom listu**. Često su ostaci ranijih planova ili drugih poslova, i nikada se ne miješaju u **Svaki list**.
- **Električno** pokazuje ampere, kW, HP, volte, fazu, priključak i utikač kako su označeni. **Vodovod** pokazuje veličine priključaka: CW hladna voda, HW topla voda, DD direktni odvod, ID indirektni odvod, i gas. Ostala polja oznake se još ne prikazuju.

## Česte greške

- **Nema kartice {{ui:Equipment}}.** Crtež nema oznake `KCL-ITEM`, ili je njegova oprema nacrtana bez podataka. Nema šta da se pročita.
- **Brojevi se razlikuju od štampane specifikacije.** Štampana specifikacija može navoditi rezervne brojeve ili kraće nazive od oznaka. Za ono što je postavljeno vjerujte oznakama; razlike provjerite sa projektantom.
- **Otvaranje CSV-a prikazuje čudne znakove.** Datoteka je UTF-8. Otvorite je naredbom za uvoz u vašem programu za tabele i izaberite UTF-8 ako program to traži.
- **Ćelija počinje apostrofom.** Vrijednosti koje počinju sa `=`, `+`, `-` ili `@` dobijaju vodeći `'` da ih tabele ne bi pokretale kao formule.
- {{key:F}} i {{key:P}} ne rade ništa. Rade na crtežu, a ne na specifikaciji. Prvo kliknite karticu lista.
