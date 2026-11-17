---
title: Čuvajte podatke o resursima i zapis održavanja u modelu
summary: Koristite predati IFC model za rad zgrade: proizvođač, model, serijski broj, garancija i vijek trajanja za opremu i instalacije, te zapis urađenog održavanja, sve upisano u IFC.
keywords: predaja, potvrda o završetku, upotrebna dozvola, izvedeno stanje, paket za predaju, resursi, registar resursa, upravljanje objektom, fm, rad, održavanje, servis, garancija, serijski broj, barkod, proizvođač, model, vijek trajanja, cobie, digitalni blizanac, zakasnio, rok, radni nalog
from: b84ac492
---

Kartica {{ui:Resursi}} u desnom panelu pretvara otvoreni IFC model u zapis opreme zgrade. Sve se upisuje u sam IFC, u IFC-ove vlastite skupove svojstava i zadatke, pa ga čita i sljedeći program koji otvori datoteku. Ništa se ne šalje i nije potreban server: spasite IFC da ga sačuvate.

## Šta je navedeno

- Oprema i instalacije: namještaj, sanitarni uređaji, rasvjetna tijela, aparati, završeci zraka, ventili, pumpe, ventilatori, kotlovi, rezervoari, utičnice, razvodne table, dizala i drugi slični elementi, te stavke biblioteke sa podacima o opremi.
- Svaki drugi element koji **pratite**: odaberite ga u modelu (vrata, zid, pumpu nacrtanu kao običan objekat) i kliknite {{ui:Prati odabrano}}.
- Sve što već ima podatke o resursu ili zadatak održavanja, upisan ovdje ili drugim programom.

Ono što kasni dolazi prvo, zatim ono što dospijeva u roku od 30 dana. Filtrirajte po nazivu, oznaci, proizvođaču, modelu ili serijskom broju, po nivou, ili označite {{ui:Samo oni koji kasne ili dospijevaju u roku od 30 dana}}.

## Podaci o resursu

Kliknite resurs na listi (ili ga odaberite u modelu) da otvorite njegove podatke: proizvođač, model, referencu modela, serijski broj, barkod, dan ugradnje, broj garancije i njen početak i kraj, te vijek trajanja u godinama. {{ui:Spasi podatke}} ih upisuje u jednom koraku ({{key:Mod+Z}} poništava). Ostavite polje prazno da uklonite tu vrijednost.

## Dokumenti

Ispod podataka, {{ui:Dokumenti}} navodi priručnike, garancije, fotografije, potvrde i crteže povezane s resursom. Izaberite vrstu, dajte naziv (ili ga ostavite prazno: koristi se naziv datoteke) i upišite gdje se nalazi:

- **web adresa** (`https://…`): dobija vezu Otvori, koja se otvara u novoj kartici;
- ili **naziv datoteke ili putanja** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, mrežni dijeljeni resurs): držite datoteke pored IFC-a, u istoj mapi ili u podmapi, da nazivi i dalje rade kada predajete mapu. BimCraft prikazuje naziv; datoteku otvorite iz mape.

Same datoteke se nikada ne šalju niti kopiraju u IFC: upisuje se samo veza. Web adresa sa lozinkom u sebi i svaka veza koja nije web adresa ni datoteka (kao `javascript:`) se odbijaju. {{ui:Ukloni}} uklanja dokument sa resursa (jedan korak; {{key:Mod+Z}} poništava).

Dokumenti koje je drugi program vezao za element također su navedeni. Dokumenti na **tipu** elementa prikazuju se na svakom elementu tog tipa i to kažu; mijenjajte ih tamo gdje je tip napravljen.

U IFC-u je svaki dokument IFC referenca dokumenta vezana za element, sa svojom vrstom zadržanom na toj vezi, u IFC4 i IFC2X3 podjednako.

## Zapis održavanja

Ispod dokumenata, {{ui:Zabilježi urađeni posao}}: dan kada je urađeno, posao, ko ga je uradio, kada je sljedeći put na redu i napomene. Svaki unos je jedan korak; {{ui:Uredi}} i {{ui:Obriši}} ga kasnije mijenjaju. Datum sljedećeg roka najnovijeg unosa odlučuje da li je resurs zakašnjeo ili uskoro na redu.

## Kako se čuva u IFC-u

- Proizvođač i model u `Pset_ManufacturerTypeInformation`, serijski broj, barkod i dan ugradnje u `Pset_ManufacturerOccurrence`, garancija u `Pset_Warranty`, vijek trajanja u `Pset_ServiceLife`, na samom elementu. Kada tip elementa već ima proizvođača ili model, prikazuje se dok ne upišete svoj.
- Svaki unos održavanja je IFC **zadatak** vrste održavanja, vezan za element, sa svojim datumima (u IFC4 i kao vlastita vremena zadatka) i skupom `CadCraft_Maintenance` sa danom, osobom koja je uradila i danom sljedećeg roka.
- Vrijednosti koje dijeli drugi element se prvo kopiraju: promjena jednog resursa nikada ne mijenja njegove susjede.
- U starijim IFC2X3 datotekama datumi se upisuju kao tekst (YYYY-MM-DD); ta verzija traži zaseban zapis datuma, koji BimCraft ne upisuje.

## Očitavanja senzora

Otvorite {{ui:Vrijednosti senzora}} i {{ui:Otvori očitavanja (CSV)…}} da uvezete očitavanja izvezena iz sistema za upravljanje zgradom, logera podataka ili tabelarnog programa:

- **Prva kolona je vrijeme**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ili Unix sekunde. Vrijeme bez zone čita se u vremenskoj zoni vašeg računara. Datumi sa danom na prvom mjestu, kao `23/10/2026`, se ne čitaju (dvosmisleni su); izvezite ISO datume.
- **Svaka druga kolona je jedan senzor**, sa naslovom koji je **oznaka**, **naziv** ili **GlobalId** njegovog resursa. Naslov koji ne odgovara nijednom resursu, ili odgovara većem broju njih, se navodi i izostavlja. Zarezi, tačka-zarezi ili tabulatori razdvajaju kolone; uz tačka-zarez ili tabulatore čita se i decimalni zarez (`21,5`).
- Vremena ili vrijednosti koje se ne mogu očitati (riječ, jedinica upisana u ćeliju) se broje i izostavljaju, nikada se ne pogađaju.

Posljednje očitavanje prikazuje se u koloni {{ui:Očitavanje}} liste i u bloku {{ui:Senzor}} resursa, sa **grafikonom** svakog očitavanja (na telefonu grafikoni čekaju dok ne dodirnete {{ui:Prikaži grafikon}}). Postavite **donju i gornju granicu** i jedinicu na resursu i kliknite {{ui:Spasi granice}}: očitavanje izvan njih označava resurs. Označite {{ui:Prikaži na modelu}} da obojite svaki resurs prema očitavanju: plavo ispod donje granice, zeleno unutar granica, crveno iznad gornje granice, a za resurse bez granica jedna plava skala od najnižeg do najvišeg očitavanja, sa očitavanjem kao oznakom (do 60 oznaka, prvo označeni).

**Očitavanja ostaju u ovoj kartici pregledača**: nisu spašena u IFC-u i nigdje se ne šalju; sljedeći put ponovo otvorite CSV. **Granice se spašavaju u IFC-u** (skup `CadCraft_Sensor` na elementu: Low, High, Unit), pa sljedeća osoba koja otvori datoteku vidi iste oznake.

## Podaci uživo

{{ui:Podaci uživo}} čita vrijednosti kako nastaju, **direktno iz ovog pregledača do vašeg sistema**. Ništa ne prolazi kroz naš server i ništa se ne čuva osim u kartici pregledača. Ništa se ne povezuje kada se datoteka otvori: povezuje samo {{ui:Poveži}}.

- **MQTT preko WebSocket-a**: adresa WebSocket slušaoca vašeg brokera (`wss://broker.example.com:8884/mqtt`), i jedna ili više tema sa `{tag}` na mjestu gdje ide oznaka resursa, na primjer `site/{tag}/temperature` (BimCraft se pretplaćuje na `site/+/temperature` i čita oznaku iz teme svake poruke). Teme bez `{tag}` same imenuju senzor. Poruka je ili običan broj (`21.5`) ili JSON, kao `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (postavite {{ui:Polje vrijednosti u JSON-u}} ako se vaše zove drugačije).
- **Pitaj adresu (HTTP)**: web adresa koju odgovara vaš sistem za upravljanje zgradom ili vaša mala skripta, pitana svakih nekoliko sekundi (najmanje 5). Može odgovoriti JSON-om ključan oznakom (`{"AHU-1": 21.5}`), JSON listom (`[{"tag": "AHU-1", "value": 21.5}]`) ili CSV-om očitavanja kao gore. Ako ne odgovori, BimCraft čeka dvostruko duže prije sljedećeg pitanja, do pet minuta.

Svako očitavanje ide resursu čiju oznaku, naziv ili GlobalId imenuje, tačno kao što bi išla kolona CSV-a; nazivi koji ne odgovaraju nijednom resursu se navode. Očitavanja se pridružuju {{ui:Vrijednosti senzora}}: lista, grafikoni, granice i boje na modelu rade isto.

**Vaša lozinka ili token** se unosi za jednu vezu: predaje se vezi i polje se isprazni; nikada se ne čuva u ovom pregledaču ni u IFC-u. Token ide kao standardno zaglavlje `Authorization: Bearer`, i ne šalju se kolačići.

{{ui:Zadrži ove postavke u IFC modelu}} upisuje adresu, teme, polje vrijednosti i koliko često se pita u model (skup `CadCraft_Feed` na projektu; nema polja za lozinku), pa sljedeća osoba koja otvori datoteku unosi samo svoju prijavu i klikne {{ui:Poveži}}. Ne stavljajte lozinku ili ključ u samu adresu: adresa sa korisničkim imenom i lozinkom u sebi se odbija.

:::note
**Šta vaš broker ili adresa treba.** Stranica u pregledaču može razgovarati samo sa serverom koji to dozvoljava:
- Stranica je sigurna (https), pa se pregledač povezuje samo na `wss://` i `https://` adrese, osim na vašem računaru (`localhost`), gdje `ws://` i `http://` rade za testiranje.
- HTTP adresa mora dozvoliti zahtjeve sa ove stranice (CORS: zaglavlje `Access-Control-Allow-Origin`, i `Authorization` među dozvoljenim zaglavljima ako koristite token).
- Većina brokera (Mosquitto, EMQX, HiveMQ i drugi) nudi WebSocket slušaoca; često je isključen dok se ne uključi. BimCraft govori MQTT 3.1.1.
:::

Nema **upozorenja** kada je BimCraft zatvoren: granice označavaju resurs samo dok je model otvoren i feed povezan. Praćenje zgrade cijeli dan i noć zahtijeva server, koji BimCraft ne pokreće.

## Tabela COBie

**COBie** je tabela za predaju koju mnogi vlasnici i timovi za održavanje traže (objavljuje je National BIM Standard u SAD-u; BS 1192-4 u Velikoj Britaniji). Otvorite {{ui:COBie tabela}} u kartici:

- {{ui:Spasi kao COBie (.xlsx)}} piše COBie 2.4 listove (Contact, Facility, Floor, Space, Type, Component, System, Job, Document i Attribute) iz modela i podataka o resursima: zgradu, njene nivoe i prostorije (površine iz količina modela), svaki resurs kao komponentu sa njenim serijskim brojem, danom ugradnje, početkom garancije, oznakom i barkodom, njegov tip sa proizvođačem, modelom, vijekom trajanja i dužinom garancije, sisteme kojima pripada, zapis održavanja kao poslove i povezane dokumente. Svaka komponenta nosi IFC GlobalId elementa. Upišite svoju e-poštu za kolonu „created by” u COBie-ju ili je ostavite prazno (tada piše n/a). Vrijednosti koje model nema pišu **n/a**; kolone kategorija nose IFC klasu, a ne OmniClass kod.
- {{ui:Učitaj COBie tabelu…}} čita je nazad, iz BimCraft-a ili drugog programa, i **prvo navodi svaku promjenu**: koji resurs, koja vrijednost, sa čega na šta, i nove dokumente. {{ui:Primijeni}} ih sve upisuje u jednom koraku ({{key:Mod+Z}} poništava). Redovi se uparuju po GlobalId, pa po nazivu komponente. Redovi koji se ne poklapaju ni sa čim u modelu se navode, ali se ne dodaju.

Tabela se tretira kao nepouzdana: formule se nikada ne čitaju niti izvršavaju (samo posljednja spašena vrijednost u ćeliji); vrijednost koja bi učinila da garancija završi prije nego počne i veza do dokumenta koja nije web adresa ni naziv datoteke se izostavljaju i broje, a vrlo velike radne knjige se odbijaju. Poslovi u COBie-ju su planirani radovi tipa, pa se upisuju, ali se ne čitaju nazad. U tabeli koju BimCraft piše, tekst koji tabelarni program može shvatiti kao formulu (počinje sa `=`, `+`, `-` ili `@`) označen je kao tekst.

Radna knjiga je provjerena u našim testovima prema nezavisnom čitaču tabela; nije prošla kroz COBie validator. Ako je tim za prijem pokrene, javite nam šta kaže.

## Dokumenti za predaju

Papiri koji idu vlasniku uz završenu zgradu pripadaju projektu, ne jednom resursu. Na kartici {{ui:Resursi}} otvorite {{ui:Dokumenti za predaju}}:

1. {{ui:Dodaj dokument}}, izaberite vrstu (potvrda o završetku, upotrebna dozvola, garancija, priručnik, izvedeni crteži, ostalo), i upišite njegov naziv, datum izdavanja, ko ga je izdao i broj reference.
2. Recite gdje je: web adresa, naziv datoteke držan pored IFC-a, ili {{ui:Priloži datoteku}}.
3. {{ui:Dodaj na listu}}. {{ui:Uredi}} i {{ui:Ukloni}} mijenjaju listu; svaka je jedan korak koji možete poništiti.

{{ui:Napravi paket za predaju}} preuzima jednu zip arhivu: naslovnu stranu sa svakim dokumentom, istu listu kao tabela, COBie radnu knjigu (dokumenti su na njenom listu Document, kao redovi o Facility), model i svaku priloženu datoteku. Potvrda o završetku ili upotrebna dozvola koja još nije na listi navodi se na naslovnoj strani; paket se ipak pravi.

Model u paketu je **model izvedenog stanja**: kaže koji su elementi izmjereni na terenu. Uz njega, u mapi `as-built`: izjava, lista svakog elementa sa njegovim stanjem provjere, skup crteža kakav je sada kao jedan PDF (izvedeni crteži), i dnevnik promjena crteža kada model ima izdate skupove. Vidi [Označite elemente kao provjerene ili provjerene na terenu](topic:verification).

- U IFC datoteci je svaki dokument IfcDocumentInformation vezan za projekat (IfcRelAssociatesDocument), sa naslovom, referencom, datumom, izdavačem i mjestom, pa ga drugi programi navode.
- Priložena datoteka se bilježi po nazivu, veličini i SHA-256. Da datoteku sačuvate uz projekat, koristite {{ui:Spasi projekat kao paket}} (.ccbundle sadrži model i priložene datoteke; otvaranje ih vraća, svaku provjerenu prema zapisu). Obično spašavanje pita šta želite.
- Običan .ifc čuva zapis, a ne datoteku: nakon otvaranja koristite {{ui:Priloži datoteku ponovo}}. Ista datoteka se prepoznaje; druga zamjenjuje zapis.

## CSV

{{ui:CSV}} čuva svaki resurs sa njegovim podacima, svaki unos održavanja i svaki dokument, po jedan red, za tabelarni program ili drugi program za održavanje.

:::note
Nije urađeno: hostovana usluga koja čuva očitavanja i šalje upozorenja dok je BimCraft zatvoren, te čitanje COBie poslova nazad. Vidi [Još nije urađeno](topic:not-built-yet).
:::
