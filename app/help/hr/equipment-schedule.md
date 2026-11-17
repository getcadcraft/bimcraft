---
title: Izrada specifikacije opreme i izvoz u CSV
summary: Pretvorite oznake stavki u crtežu kuhinje ili ugostiteljske opreme u specifikaciju opreme, filtrirajte je, prijeđite na svaku stavku na njezinom listu i preuzmite je kao CSV.
keywords: oprema, specifikacija, ugostiteljstvo, kuhinja, oznake stavki, kcl, atributi, bom, sastavnica, csv, proračunska tablica, izvoz, izdvajanje podataka
from: e3faa1c8
---

## Što ćete učiniti

Pročitajte popis opreme iz kuhinjskog ili ugostiteljskog crteža, provjerite ga, pronađite svaku stavku na tlocrtu i preuzmite ga kao datoteku proračunske tablice.

Ovo radi na crtežima čije oznake opreme nose svoje podatke kao atribute bloka, kao što to rade kuhinjske knjižnice poput KCL: svaka oznaka sadrži broj stavke (`KCL-ITEM`), količinu, kategoriju, proizvođača, model, električne i vodovodne podatke te napomene. Ostali crteži nemaju karticu {{ui:Oprema}}.

## Koraci

1. Otvorite crtež, po mogućnosti iz njegove mape projekta, da se učitaju i njegovi povezani crteži.
2. Kliknite karticu {{ui:Oprema}} iznad crteža. Njezina oznaka pokazuje koliko je stavki na listovima, na primjer „Oprema (88)“.
3. Pročitajte specifikaciju: **Stavka**, **Kol.**, **Oprema**, **Proizvođač**, **Model**, **Elektrika**, **Vodovod** i **Gdje**.
4. Odaberite što popisati u izborniku iznad tablice: **Svaki list**, jedan list, **Ni na jednom listu** ili **Sve označeno u crtežu**. Svaki izbor prikazuje svoj broj.
5. Upišite u polje filtra („Filter: kategorija, proizvođač, model…“) da suzite popis, na primjer `hladnjak` ili `208`.
6. Kliknite naziv lista stavke u stupcu **Gdje**.
7. Pogledajte crtež: BimCraft prelazi na taj list, približava stavku i oko nje crta prsten. Statusna linija kaže „Stavka *n*, *category* je označena prstenom na *sheet*.“
8. Kliknite {{ui:Oprema}} za povratak na specifikaciju.
9. Kliknite {{ui:Preuzmi CSV}}.

## Što biste trebali vidjeti

- Datoteka pod nazivom „*drawing name* equipment.csv“ (s nazivom lista u zagradi kad ste popisali jedan list) u mapi za preuzimanja. Otvara se u Excelu, Numbersu, LibreOfficeu ili Google Sheetsu.
- Statusna linija: „Preuzeto: *file name* (*n* stavki).“

CSV ima ove stupce: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (koliko oznaka). Preuzima točno retke koje tablica prikazuje, nakon izbornika i filtra.

## Kako je specifikacija izrađena

- Čita se iz **samih oznaka**, a ne iz tablice specifikacije nacrtane na listu. Napomena iznad tablice kaže koliko je oznaka pročitano.
- Jedan redak je jedan broj stavke s jednim skupom podataka. Njegova količina je **zbroj** njegovih oznaka, kao što tiskana specifikacija broji: police označene „5“ na jednom mjestu i „3“ na drugom daju 8, prikazano kao „5 + 3“.
- **Gdje** navodi listove koji prikazuju svaku stavku, izračunato iz onoga što prikazuju viewporti svakog lista, a to je ono što se ispisuje. „Samo model“ znači da je nijedan list ne prikazuje.
- **Broj korišten dvaput** označava jedan broj stavke na dva različita komada opreme. Redak ima žuti znak.
- Oznake koje nijedan list ne prikazuje odvojene su pod **Ni na jednom listu**. Često su ostaci starijih planova ili drugih poslova i nikad se ne miješaju u **Svaki list**.
- **Elektrika** prikazuje ampere, kW, HP, volte, fazu, priključak i utikač kako su označeni. **Vodovod** prikazuje veličine priključaka: CW hladna voda, HW topla voda, DD izravna odvodnja, ID neizravna odvodnja i plin. Ostala polja oznaka još nisu prikazana.

## Česte pogreške

- **Nema kartice {{ui:Oprema}}.** Crtež nema oznake `KCL-ITEM` ili je oprema nacrtana bez podataka. Nema što pročitati.
- **Brojevi se razlikuju od tiskane specifikacije.** Tiskana specifikacija može navoditi rezervne brojeve ili kraća imena od oznaka. Za ono što je postavljeno vjerujte oznakama; razlike provjerite s projektantom.
- **Otvorena CSV datoteka prikazuje čudne znakove.** Datoteka je u UTF-8. Otvorite je naredbom za uvoz u proračunskoj tablici i odaberite UTF-8 ako to program zatraži.
- **Ćelija počinje apostrofom.** Vrijednosti koje počinju s `=`, `+`, `-` ili `@` dobivaju vodeći `'` da ih proračunske tablice ne izvrše kao formule.
- **{{key:F}} i {{key:P}} ne rade ništa.** Rade na crtežu, a ne na specifikaciji. Prvo kliknite karticu lista.
