---
title: Čuvajte podatke o resursima i zapis održavanja u modelu
summary: Koristite predati IFC model za vođenje zgrade: proizvođača, model, serijski broj, garanciju i vek trajanja opreme i armature, plus zapis obavljenog održavanja, sve upisano u IFC.
keywords: primopredaja, potvrda o završetku, upotrebna dozvola, izvedeno stanje, paket primopredaje, resursi, registar resursa, upravljanje objektom, fm, rad, održavanje, servis, garancija, serijski broj, barkod, proizvođač, model, vek trajanja, cobie, digitalni blizanac, rok prošao, rok, radni nalog
from: b84ac492
---

Kartica {{ui:Resursi}} u desnom panelu pretvara otvoreni IFC model u zapis opreme zgrade. Sve se upisuje u sam IFC, u sopstvene skupove svojstava i zadatke IFC-a, pa ga i sledeći program koji otvori datoteku čita. Ništa se ne otprema i nije potreban server: sačuvajte IFC da biste ga zadržali.

## Šta je navedeno

- Oprema i armatura: nameštaj, sanitarna armatura, svetiljke, aparati, vazdušni priključci, ventili, pumpe, ventilatori, kotlovi, rezervoari, utičnice, razvodne table, dizala i drugi slični elementi, kao i stavke biblioteke sa podacima o opremi.
- Svaki drugi element koji **pratite**: izaberite ga u modelu (vrata, zid, pumpu nacrtanu kao običan objekat) i kliknite {{ui:Prati izabrano}}.
- Sve što već ima podatke o resursu ili zadatak održavanja, upisano ovde ili drugim programom.

Ono što je prekoračilo rok dolazi prvo, zatim ono što treba u narednih 30 dana. Filtrirajte po nazivu, oznaci, proizvođaču, modelu ili serijskom broju, po nivou, ili označite {{ui:Samo ona koja kasne ili imaju rok u narednih 30 dana}}.

## Podaci o resursu

Kliknite resurs na spisku (ili ga izaberite u modelu) da otvorite njegove podatke: proizvođač, model, referenca modela, serijski broj, barkod, dan ugradnje, broj garancije i njen početak i kraj, te vek trajanja u godinama. {{ui:Sačuvaj podatke}} ih upisuje u jednom koraku ({{key:Mod+Z}} to opoziva). Ostavite polje prazno da uklonite tu vrednost.

## Dokumenti

Ispod podataka, {{ui:Dokumenti}} navodi priručnike, garancije, fotografije, sertifikate i crteže vezane za resurs. Izaberite vrstu, dajte naziv (ili ga ostavite prazan: koristi se naziv datoteke) i upišite gde se nalazi:

- **internet adresu** (`https://…`): dobija vezu Otvori, koja se otvara u novoj kartici;
- ili **naziv datoteke ili putanju** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, mrežna deljena fascikla): čuvajte datoteke pored IFC-a, u istoj fascikli ili u podfascikli, da nazivi i dalje rade kada predate fasciklu. BimCraft prikazuje naziv; otvorite datoteku iz fascikle.

Datoteke se nikad ne otpremaju niti kopiraju u IFC: upisuje se samo veza. Internet adresa sa lozinkom u sebi i svaka veza koja nije internet adresa ili datoteka (kao `javascript:`) se odbija. {{ui:Ukloni}} skida dokument sa resursa (jedan korak; {{key:Mod+Z}} to opoziva).

Dokumenti koje je drugi program stavio na element takođe su navedeni. Dokumenti na **tipu** elementa prikazuju se na svakom elementu tog tipa i to se kaže; menjajte ih tamo gde je tip napravljen.

U IFC-u je svaki dokument IFC referenca na dokument vezana za element, sa njenom vrstom sačuvanom uz tu vezu, u IFC4 i IFC2X3 podjednako.

## Zapis održavanja

Ispod dokumenata, {{ui:Zabeleži obavljeni posao}}: dan kada je obavljen, posao, ko ga je uradio, kada je sledeći rok i beleške. Svaki unos je jedan korak; {{ui:Uređivanje}} i {{ui:Izbriši}} ga kasnije menjaju. Datum sledećeg roka najnovijeg unosa određuje da li je resurs prošao rok ili uskoro dospeva.

## Kako se čuva u IFC-u

- Proizvođač i model u `Pset_ManufacturerTypeInformation`, serijski broj, barkod i dan ugradnje u `Pset_ManufacturerOccurrence`, garancija u `Pset_Warranty`, vek trajanja u `Pset_ServiceLife`, na samom elementu. Kada tip elementa već nosi proizvođača ili model, on se prikazuje dok ne upišete sopstveni.
- Svaki unos održavanja je IFC **zadatak** vrste održavanja, vezan za element, sa svojim datumima (u IFC4 i kao sopstvena vremena zadatka) i skupom `CadCraft_Maintenance` sa danom, osobom koja ga je uradila i danom sledećeg roka.
- Vrednosti koje deli drugi element se prvo kopiraju: promena jednog resursa nikad ne menja njegove susede.
- U starijim IFC2X3 datotekama datumi se upisuju kao tekst (GGGG-MM-DD); ta verzija traži poseban zapis datuma, koji BimCraft tu ne upisuje.

## Očitavanja senzora

Otvorite {{ui:Vrednosti senzora}} i {{ui:Otvori očitavanja (CSV)…}} da unesete očitavanja izvezena iz sistema za upravljanje zgradom, logera podataka ili tabele:

- **Prva kolona je vreme**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ili Unix sekunde. Vreme bez zone čita se u vremenskoj zoni vašeg računara. Datumi sa danom na prvom mestu, kao `23/10/2026`, ne čitaju se (dvosmisleni su); izvezite ISO datume.
- **Svaka druga kolona je jedan senzor**, sa zaglavljem koje je **oznaka**, **naziv** ili **GlobalId** njegovog resursa. Zaglavlje koje ne odgovara nijednom resursu, ili odgovara više njih, navodi se i izostavlja. Zarezi, tačka-zarezi ili tabulatori razdvajaju kolone; uz tačka-zareze ili tabulatore čita se i decimalni zarez (`21,5`).
- Vremena ili vrednosti koje se ne mogu pročitati (reč, jedinica upisana u ćeliju) se broje i izostavljaju, nikad se ne pogađaju.

Poslednje očitavanje prikazuje se u koloni {{ui:Očitavanje}} spiska i u bloku {{ui:Senzor}} resursa, sa **grafikonom** svih očitavanja (na telefonu grafikoni čekaju dok ne dodirnete {{ui:Prikaži grafikon}}). Postavite **donju i gornju granicu** i jedinicu na resursu, pa kliknite {{ui:Sačuvaj granice}}: očitavanje van njih označava resurs. Označite {{ui:Prikaži na modelu}} da svaki resurs obojite prema očitavanju: plavo ispod donje granice, zeleno unutar granica i crveno iznad gornje granice, a za resurse bez granica jedna plava skala od najnižeg do najvišeg očitavanja. Očitavanje je prikazano kao natpis (do 60 natpisa, označeni prvi).

**Očitavanja ostaju u ovoj kartici pregledača**: nisu sačuvana u IFC-u i nigde se ne šalju; sledeći put ponovo otvorite CSV. **Granice se čuvaju u IFC-u** (skup `CadCraft_Sensor` na elementu: Low, High, Unit), pa sledeća osoba koja otvori datoteku vidi iste oznake.

## Živa očitavanja

{{ui:Živi tok}} čita vrednosti čim nastanu, **direktno iz ovog pregledača do vašeg sopstvenog sistema**. Ništa ne prolazi kroz naš server i ništa se ne čuva osim u ovoj kartici pregledača. Ništa se ne povezuje kada se datoteka otvori: samo to radi {{ui:Poveži}}.

- **MQTT preko WebSocket-a**: adresa WebSocket slušaoca vašeg brokera (`wss://broker.example.com:8884/mqtt`) i jedna ili više tema sa `{tag}` na mestu gde ide oznaka resursa, na primer `site/{tag}/temperature` (BimCraft se pretplaćuje na `site/+/temperature` i čita oznaku iz teme svake poruke). Teme bez `{tag}` same imenuju senzor. Poruka je ili običan broj (`21.5`) ili JSON, kao `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (postavite {{ui:Polje vrednosti u JSON-u}} ako se vaše zove drugačije).
- **Pitaj adresu (HTTP)**: internet adresa koju odgovara vaš sistem za upravljanje zgradom ili vaša mala skripta, pitana na svakih nekoliko sekundi (najmanje 5). Može odgovoriti JSON-om ključeva po oznaci (`{"AHU-1": 21.5}`), JSON listom (`[{"tag": "AHU-1", "value": 21.5}]`) ili CSV-om očitavanja kao gore. Ako ne odgovori, BimCraft čeka dvostruko duže pre sledećeg pitanja, do pet minuta.

Svako očitavanje ide resursu čiju oznaku, naziv ili GlobalId nosi, tačno kao kolona CSV-a; nazivi koji ne odgovaraju nijednom resursu se navode. Očitavanja se pridružuju {{ui:Vrednosti senzora}}: spisak, grafikoni, granice i boje na modelu rade isto.

**Vaša lozinka ili token** unosi se za jednu vezu: predaje se vezi, a polje se prazni; nikad se ne čuva u ovom pregledaču ni u IFC-u. Token se šalje kao standardno zaglavlje `Authorization: Bearer`, i ne šalju se kolačići.

{{ui:Zadrži ova podešavanja u IFC-u}} upisuje adresu, teme, polje vrednosti i koliko često se pita u model (skup `CadCraft_Feed` na projektu; nema polja za lozinku), pa sledeća osoba koja otvori datoteku unosi samo svoju prijavu i klikne {{ui:Poveži}}. Ne stavljajte lozinku ili ključ u samu adresu: adresa sa korisničkim imenom i lozinkom u sebi se odbija.

:::note
**Šta vaš broker ili adresa treba.** Stranica u pregledaču može da razgovara samo sa serverom koji to dozvoljava:
- Stranica je bezbedna (https), pa se pregledač povezuje samo na `wss://` i `https://` adrese, osim na vašem računaru (`localhost`), gde `ws://` i `http://` rade za probu.
- HTTP adresa mora dozvoljavati zahteve sa ove stranice (CORS: zaglavlje `Access-Control-Allow-Origin`, i `Authorization` među dozvoljenim zaglavljima ako koristite token).
- Većina brokera (Mosquitto, EMQX, HiveMQ i drugi) nudi WebSocket slušaoca; često je isključen dok se ne uključi. BimCraft govori MQTT 3.1.1.
:::

Nema **upozorenja** kada je BimCraft zatvoren: granice označavaju resurs dok je model otvoren i povezan sa tokom. Praćenje zgrade non-stop zahteva server, koji BimCraft ne vodi.

## COBie tabela

**COBie** je tabela za predaju koju mnogi vlasnici i timovi za održavanje traže (objavljuje je National BIM Standard u SAD; BS 1192-4 u Ujedinjenom Kraljevstvu). Otvorite {{ui:COBie tabela}} u kartici:

- {{ui:Sačuvaj kao COBie (.xlsx)}} piše COBie 2.4 listove (Contact, Facility, Floor, Space, Type, Component, System, Job, Document i Attribute) iz modela i podataka o resursima: zgradu, njene nivoe i prostorije (površine iz količina modela), svaki resurs kao komponentu sa serijskim brojem, danom ugradnje, početkom garancije, oznakom i barkodom, njegov tip sa proizvođačem, modelom, vekom trajanja i dužinom garancije, sisteme kojima pripada, zapis održavanja kao poslove i vezane dokumente. Svaka komponenta nosi IFC GlobalId elementa. Upišite svoju adresu za kolonu „created by“ u COBie-ju, ili je ostavite prazno (tada piše n/a). Vrednosti koje model nema pišu **n/a**; kolone kategorije nose IFC klasu, a ne OmniClass šifru.
- {{ui:Pročitaj COBie tabelu…}} čita jednu nazad, iz BimCraft-a ili drugog programa, i **prvo navodi svaku promenu**: koji resurs, koja vrednost, sa čega na šta, i nove dokumente. {{ui:Primeni}} ih sve upisuje u jednom koraku ({{key:Mod+Z}} to opoziva). Redovi se uparuju po GlobalId, pa po nazivu komponente. Redovi koji ne odgovaraju ničemu u modelu navode se, ne dodaju se.

Tabela se tretira kao nepouzdana: formule se nikad ne čitaju ni ne izvršavaju (čita se samo vrednost poslednje sačuvana u ćeliji), vrednost koja bi učinila da garancija završi pre nego što počne i veza na dokument koja nije internet adresa ili naziv datoteke se izostavljaju i broje, a vrlo velike radne knjige se odbijaju. Poslovi COBie-ja su planirani radovi tipa, pa se upisuju, ali se ne čitaju nazad. U tabeli koju BimCraft piše, tekst koji tabela može da shvati kao formulu (počinje sa `=`, `+`, `-` ili `@`) označen je kao tekst.

Radna knjiga se u našim testovima proverava prema nezavisnom čitaču tabela; nije prošla kroz COBie validator. Ako ga tim koji prima koristi, javite nam šta kaže.

## Primopredajna dokumentacija

Papiri koji idu vlasniku uz završenu zgradu pripadaju projektu, ne jednom resursu. Na kartici {{ui:Resursi}} otvorite {{ui:Primopredajna dokumentacija}}:

1. {{ui:Dodaj dokument}}, izaberite vrstu (potvrda o završetku, upotrebna dozvola, garancija, priručnik, izvedeni crteži, drugo), i upišite naziv, datum izdavanja, ko ga je izdao i broj reference.
2. Recite gde je: internet adresa, naziv datoteke sačuvan pored IFC-a, ili {{ui:Priloži datoteku}}.
3. {{ui:Dodaj na spisak}}. {{ui:Uređivanje}} i {{ui:Ukloni}} menjaju spisak; svaki je jedan korak koji možete opozvati.

{{ui:Napravi paket primopredaje}} preuzima jednu zip datoteku: naslovnu stranu sa svakim dokumentom, isti spisak kao tabela, COBie radnu knjigu (dokumenti su na njenom listu Document, kao redovi o objektu Facility), model i svaku priloženu datoteku. Potvrda o završetku ili upotrebna dozvola koja još nije na spisku imenuje se na naslovnoj strani; paket se ipak pravi.

Model u paketu je **izvedeni model**: navodi koji su elementi izmereni na terenu. Uz njega, u fascikli `as-built`: izjava, spisak svakog elementa sa njegovim stanjem provere, skup crteža kakav je sada kao jedan PDF (izvedeni crteži) i dnevnik izmena crteža kada model ima izdate skupove. Videti [Označite elemente kao provereni ili verifikovane na terenu](topic:verification).

- U IFC datoteci je svaki dokument IfcDocumentInformation vezan za projekat (IfcRelAssociatesDocument), sa naslovom, referencom, datumom, izdavaocem i mestom, pa ga drugi programi navode.
- Priložena datoteka se beleži po nazivu, veličini i SHA-256. Da biste datoteku čuvali uz projekat, koristite {{ui:Sačuvaj projekat kao paket}} (.ccbundle čuva model i priložene datoteke; otvaranjem se vraćaju, svaka proverena prema svom zapisu). Obično čuvanje pita šta želite.
- Običan .ifc čuva zapis, ne datoteku: posle otvaranja koristite {{ui:Ponovo priložite datoteku}}. Ista datoteka se prepoznaje; druga zamenjuje zapis.

## CSV

{{ui:CSV}} čuva svaki resurs sa njegovim podacima, svaki unos održavanja i svaki dokument, po jedan red, za tabelu ili drugi program za održavanje.

:::note
Nije napravljeno: hostovana usluga koja čuva očitavanja i šalje upozorenja dok je BimCraft zatvoren, i čitanje poslova COBie-ja nazad. Videti [Još nije napravljeno](topic:not-built-yet).
:::
