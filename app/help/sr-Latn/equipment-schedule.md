---
title: Napravite specifikaciju opreme i izvezite CSV
summary: Pretvorite oznake stavki na crtežu ugostiteljske opreme u specifikaciju opreme, filtrirajte je, idite na svaku stavku na njenom listu i preuzmite je kao CSV.
keywords: oprema, specifikacija, ugostiteljstvo, kuhinja, oznake stavki, kcl, atributi, bom, spisak materijala, csv, tabela, izvoz, izdvajanje podataka
from: e3faa1c8
---

## Šta ćete uraditi

Pročitajte spisak opreme sa kuhinjskog ili ugostiteljskog crteža, proverite ga, pronađite svaku stavku na planu i preuzmite ga kao datoteku tabele.

Ovo radi na crtežima čije oznake opreme nose podatke kao atribute bloka, kao što to rade biblioteke za projektovanje kuhinja, poput KCL: svaka oznaka sadrži broj stavke (`KCL-ITEM`), količinu, kategoriju, proizvođača, model, električne i vodovodne podatke i napomene. Drugi crteži nemaju karticu {{ui:Oprema}}.

## Koraci

1. Otvorite crtež, po mogućstvu iz njegove fascikle projekta, da se učitaju i njegovi povezani crteži.
2. Kliknite karticu {{ui:Oprema}} iznad crteža. Njen natpis pokazuje koliko stavki ima na listovima, na primer „Oprema (88)”.
3. Pročitajte specifikaciju: **Stavka**, **Kol.**, **Oprema**, **Proizvođač**, **Model**, **Električno**, **Vodovod** i **Gde**.
4. Izaberite šta ćete navesti u meniju iznad tabele: **Svaki list**, jedan list, **Nije ni na jednom listu** ili **Sve označeno na crtežu**. Svaki izbor pokazuje svoj broj.
5. Ukucajte u polje filtera („Filter: kategorija, proizvođač, model…”) da suzite spisak, na primer `frižider` ili `208`.
6. Kliknite naziv lista stavke u koloni **Gde**.
7. Pogledajte crtež: BimCraft prelazi na taj list, uvećava stavku i crta prsten oko nje. Statusna linija piše: „Stavka *n*, *kategorija* je obeležena na *listu*.”
8. Kliknite {{ui:Oprema}} da se vratite na specifikaciju.
9. Kliknite {{ui:Preuzmi CSV}}.

## Šta treba da vidite

- Datoteka pod nazivom „*naziv crteža* equipment.csv” (sa nazivom lista u zagradi kada ste naveli jedan list) u fascikli za preuzimanja. Otvara se u Excel-u, Numbers-u, LibreOffice-u ili Google Sheets-u.
- Statusna linija: „Preuzeto *naziv datoteke* (*n* stavki).”

CSV ima ove kolone: Stavka, Kol., Kategorija, Proizvođač, Model, Električno, Vodovod, Napomena, Električna napomena, Napomena o vodovodu, Listovi, Postavljeno (koliko oznaka). Preuzima tačno one redove koje tabela prikazuje, posle menija i filtera.

## Kako se specifikacija pravi

- Čita se iz **samih oznaka**, a ne iz tabele specifikacije nacrtane na listu. Napomena iznad tabele kaže koliko je oznaka pročitano.
- Jedan red je jedan broj stavke sa jednim skupom podataka. Njegova količina je **zbir** njegovih oznaka, kako to specifikacija u štampi broji: police označene „5” na jednom mestu i „3” na drugom daju 8, prikazano kao „5 + 3”.
- **Gde** navodi listove koji prikazuju svaku stavku, određene iz onoga što prikazuju pogledi svakog lista, a to je ono što se štampa. „Samo model” znači da je nijedan list ne prikazuje.
- **Broj korišćen dvaput** obeležava jedan broj stavke na dve različite opreme. Red ima žuto obeležje.
- Oznake koje nijedan list ne prikazuje izdvajaju se pod **Nije ni na jednom listu**. Često su ostaci ranijih planova ili drugih poslova, i nikada se ne mešaju u **Svaki list**.
- **Električno** prikazuje ampere, kW, HP, volte, fazu, priključak i utikač kako su označeni. **Vodovod** prikazuje veličine priključaka: CW hladna voda, HW topla voda, DD direktan odvod, ID indirektan odvod i gas. Druga polja oznaka se još ne prikazuju.

## Česte greške

- **Nema kartice {{ui:Oprema}}.** Crtež nema oznake `KCL-ITEM`, ili je oprema nacrtana bez podataka. Nema šta da se pročita.
- **Brojevi se razlikuju od štampane specifikacije.** Štampana specifikacija može navoditi rezervne brojeve ili kraće nazive od oznaka. Verujte oznakama za ono što je postavljeno; razlike proverite sa projektantom.
- **Pri otvaranju CSV-a vide se čudni znaci.** Datoteka je UTF-8. Otvorite je komandom za uvoz u tabelarnom programu i izaberite UTF-8 ako program to pita.
- **Ćelija počinje apostrofom.** Vrednosti koje počinju sa `=`, `+`, `-` ili `@` dobijaju vodeći `'` da ih tabelarni programi ne bi izvršili kao formule.
- **{{key:F}} i {{key:P}} ne rade ništa.** Rade na crtežu, a ne na specifikaciji. Prvo kliknite karticu lista.
