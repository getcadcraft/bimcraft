---
title: Čuvajte podatke o resursima i zapis održavanja u modelu
summary: Koristite predani IFC model za upravljanje zgradom: proizvođač, model, serijski broj, jamstvo i vijek trajanja opreme i instalacija te zapis obavljenog održavanja, sve upisano u IFC.
keywords: predaja, certifikat o dovršenju, uporabna dozvola, izvedbeni, izvedbeni model, paket predaje, resursi, registar resursa, upravljanje imovinom, facility management, fm, pogon, održavanje, servis, jamstvo, serijski broj, barkod, proizvođač, model, vijek trajanja, predaja, cobie, digitalni blizanac, zakašnjelo, dospijeva, radni nalog
from: b84ac492
---

Kartica {{ui:Assets}} u desnoj ploči pretvara otvoreni IFC model u zapis opreme zgrade. Sve se upisuje u sam IFC, u IFC-ove vlastite skupove svojstava i zadatke, pa ga i sljedeći program koji otvori datoteku čita. Ništa se ne šalje na poslužitelj i nije potreban nikakav server: spremite IFC da ga zadržite.

## Što je navedeno

- Oprema i instalacije: namještaj, sanitarni uređaji, rasvjetna tijela, aparati, zračni priključci, ventili, pumpe, ventilatori, kotlovi, spremnici, utičnice, razvodne ploče, dizala i drugi takvi elementi te stavke knjižnice s podacima o opremi.
- Bilo koji drugi element koji **pratite**: odaberite ga u modelu (vrata, zid, pumpu nacrtanu kao običan objekt) i kliknite {{ui:Track picked}}.
- Sve što već ima podatke o resursu ili zadatak održavanja, upisano ovdje ili drugim programom.

Prvo dolazi ono što kasni, zatim ono što dospijeva u roku od 30 dana. Filtrirajte po nazivu, oznaci, proizvođaču, modelu ili serijskom broju, po etaži, ili označite {{ui:Only overdue or due within 30 days}}.

## Podaci o resursu

Kliknite resurs na popisu (ili ga odaberite u modelu) da otvorite njegove podatke: proizvođač, model, referencu modela, serijski broj, barkod, dan ugradnje, broj jamstva i njegov početak i kraj te vijek trajanja u godinama. {{ui:Save the data}} upisuje ih u jednom koraku ({{key:Mod+Z}} to poništava). Ostavite polje prazno da uklonite vrijednost.

## Dokumenti

Ispod podataka, {{ui:Documents}} navodi priručnike, jamstva, fotografije, certifikate i crteže povezane s resursom. Odaberite vrstu, dajte joj naslov (ili ga ostavite prazno: koristi se naziv datoteke) i upišite gdje se nalazi:

- **web adresa** (`https://…`): dobiva poveznicu Open link koja se otvara u novoj kartici;
- ili **naziv datoteke ili putanja** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, mrežni dijeljeni resurs): držite datoteke uz IFC, u istoj mapi ili nižoj, da nazivi rade kad predajete mapu. BimCraft prikazuje naziv; datoteku otvorite iz mape.

Same datoteke se nikad ne učitavaju niti kopiraju u IFC: upisuje se samo poveznica. Web adresa s lozinkom u sebi i svaka poveznica koja nije web adresa ni datoteka (poput `javascript:`) se odbija. {{ui:Remove}} skida dokument s resursa (jedan korak; {{key:Mod+Z}} poništava).

Dokumenti koje je drugi program stavio na element također su navedeni. Dokumenti na **tipu** elementa prikazuju se na svakom elementu tog tipa i to se kaže; mijenjajte ih tamo gdje je tip napravljen.

U IFC-u je svaki dokument IFC referenca dokumenta vezana uz element, s njegovom vrstom zapisanom na toj vezi, u IFC4 i IFC2X3 jednako.

## Zapis održavanja

Ispod dokumenata, {{ui:Record work done}}: dan kad je posao obavljen, rad, tko ga je obavio, kad je sljedeći put na redu i napomene. Svaki unos je jedan korak; {{ui:Edit}} i {{ui:Delete}} ga kasnije mijenjaju. Datum sljedećeg roka najnovijeg unosa odlučuje je li resurs zakasnio ili uskoro dospijeva.

## Kako se čuva u IFC-u

- Proizvođač i model u `Pset_ManufacturerTypeInformation`, serijski broj, barkod i dan ugradnje u `Pset_ManufacturerOccurrence`, jamstvo u `Pset_Warranty`, vijek trajanja u `Pset_ServiceLife`, na samom elementu. Kad tip elementa već nosi proizvođača ili model, prikazuje se dok ne upišete svoj.
- Svaki unos održavanja je IFC **zadatak** vrste održavanja, vezan uz element, s datumima (u IFC4 i kao vlastita vremena zadatka) i skupom `CadCraft_Maintenance` s danom, tko je obavio i sljedećim rokom.
- Vrijednosti koje dijeli drugi element najprije se kopiraju: promjena jednog resursa nikad ne mijenja njegove susjede.
- U starijim IFC2X3 datotekama datumi se zapisuju kao tekst (YYYY-MM-DD); ta verzija traži zasebni zapis datuma, koji BimCraft ne zapisuje.

## Očitanja senzora

Otvorite {{ui:Sensor values}} i {{ui:Open readings (CSV)…}} da uvezete očitanja izvezena iz sustava za upravljanje zgradom, zapisnika podataka ili proračunske tablice:

- **Prvi stupac je vrijeme**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ili Unix sekunde. Vrijeme bez zone čita se u vremenskoj zoni vašeg računala. Datumi s danom na prvom mjestu, poput `23/10/2026`, se ne čitaju (dvosmisleni su); izvezite ISO datume.
- **Svaki drugi stupac je jedan senzor**, s naslovom koji je **oznaka**, **naziv** ili **GlobalId** njegova resursa. Zaglavlje koje ne odgovara nijednom resursu, ili odgovara ih više, navodi se i izostavlja. Stupci su odvojeni zarezima, točka-zarezima ili tabulatorima; uz točka-zareze ili tabulatore čita se i decimalni zarez (`21,5`).
- Vremena ili vrijednosti koje se ne mogu pročitati (riječ, jedinica upisana u ćeliju) broje se i izostavljaju, nikad se ne pogađaju.

Zadnje očitanje prikazuje se u stupcu {{ui:Reading}} na popisu i u bloku {{ui:Sensor}} resursa, s **grafikonom** svakog očitanja (na telefonu grafikoni čekaju dok ne dodirnete {{ui:Show the chart}}). Postavite **donju i gornju granicu** i jedinicu na resursu pa {{ui:Save the limits}}: očitanje izvan njih označava resurs. Označite {{ui:Show on the model}} da obojite svaki resurs prema očitanju: plavo ispod donje granice, zeleno unutar granica i, za resurse bez granica, jedna plava ljestvica od najnižeg do najvišeg očitanja, s očitanjem kao oznakom (do 60 oznaka, prvo označeni).

**Očitanja ostaju u ovoj kartici preglednika**: nisu spremljena u IFC niti se šalju bilo kamo; sljedeći put ponovno otvorite CSV. **Granice se spremaju u IFC** (skup `CadCraft_Sensor` na elementu: Low, High, Unit), pa sljedeća osoba koja otvori datoteku vidi iste oznake.

## Očitanja uživo

{{ui:Live feed}} čita vrijednosti čim nastanu, **izravno iz ovog preglednika u vaš vlastiti sustav**. Ništa ne prolazi kroz naš poslužitelj i ništa se ne pohranjuje osim u ovoj kartici preglednika. Ništa se ne povezuje kad se datoteka otvori: povezuje samo {{ui:Connect}}.

- **MQTT preko WebSocketa**: adresa WebSocket slušatelja vašeg posrednika (`wss://broker.example.com:8884/mqtt`) i jedna ili više tema s `{tag}` na mjestu oznake resursa, na primjer `site/{tag}/temperature` (BimCraft se pretplaćuje na `site/+/temperature` i čita oznaku iz teme svake poruke). Teme bez `{tag}` same imenuju senzor. Poruka je ili običan broj (`21.5`) ili JSON poput `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (postavite {{ui:Value field in JSON}} ako se vaše polje zove drugačije).
- **Pitaj adresu (HTTP)**: web adresa koju odgovara vaš sustav za upravljanje zgradom ili vaša mala skripta, pitana svakih nekoliko sekundi (najmanje 5). Može odgovoriti JSON-om ključanim po oznaci (`{"AHU-1": 21.5}`), JSON popisom (`[{"tag": "AHU-1", "value": 21.5}]`) ili CSV-om očitanja kao gore. Ako ne odgovori, BimCraft čeka dvostruko duže prije sljedećeg pitanja, do pet minuta.

Svako očitanje ide na resurs čiju oznaku, naziv ili GlobalId navodi, točno kao stupac CSV-a; nazivi koji ne odgovaraju nijednom resursu navode se. Očitanja se pridružuju {{ui:Sensor values}}: popis, grafikoni, granice i boje u modelu rade jednako.

**Vaša lozinka ili token** upisuje se za jednu vezu: predaje se vezi i polje se isprazni; nikad se ne sprema u ovom pregledniku niti u IFC. Token se šalje kao standardno zaglavlje `Authorization: Bearer`, a kolačići se ne šalju.

{{ui:Keep these settings in the IFC}} upisuje adresu, teme, polje vrijednosti i učestalost pitanja u model (skup `CadCraft_Feed` na projektu; za lozinku nema polja), pa sljedeća osoba koja otvori datoteku upisuje samo svoju prijavu i klikne {{ui:Connect}}. Nemojte stavljati lozinku ili ključ u samu adresu: adresa s korisničkim imenom i lozinkom se odbija.

:::note
**Što vaš posrednik ili adresa trebaju.** Stranica u pregledniku može razgovarati samo sa serverom koji to dopušta:
- Stranica je sigurna (https), pa se preglednik povezuje samo na `wss://` i `https://` adrese — osim na vašem računalu (`localhost`), gdje `ws://` i `http://` rade za testiranje.
- HTTP adresa mora dopuštati zahtjeve s ove stranice (CORS: zaglavlje `Access-Control-Allow-Origin`, i `Authorization` među dopuštenim zaglavljima ako koristite token).
- Većina posrednika (Mosquitto, EMQX, HiveMQ i drugi) nudi WebSocket slušatelja; često je isključen dok ga ne uključite. BimCraft govori MQTT 3.1.1.
:::

Nema **upozorenja** kad je BimCraft zatvoren: granice označavaju resurs dok je model otvoren s povezanim izvorom. Praćenje zgrade non-stop treba server, a BimCraft ne pokreće nijedan.

## COBie proračunska tablica

**COBie** je tablica za predaju koju mnogi vlasnici i timovi za održavanje traže (objavljuje National BIM Standard u SAD-u; BS 1192-4 u Velikoj Britaniji). Otvorite {{ui:COBie spreadsheet}} u kartici:

- {{ui:Save as COBie (.xlsx)}} zapisuje COBie 2.4 listove — Contact, Facility, Floor, Space, Type, Component, System, Job, Document i Attribute — iz modela i podataka o resursima: zgradu, njezine etaže i prostorije (površine iz količina modela), svaki resurs kao komponentu sa serijskim brojem, danom ugradnje, početkom jamstva, oznakom i barkodom, njegov tip s proizvođačem, modelom, vijekom trajanja i duljinom jamstva, sustave kojima pripada, zapis održavanja kao poslove i povezane dokumente. Svaka komponenta nosi IFC GlobalId elementa. Upišite svoju e-poštu za stupac „created by“ u COBie-u ili ga ostavite prazno (tada piše n/a). Vrijednosti koje model nema pišu **n/a**; stupci kategorija nose IFC klasu, a ne OmniClass šifru.
- {{ui:Read a COBie spreadsheet…}} čita je natrag, iz BimCraft ili drugog programa, i **najprije navodi svaku promjenu**: koji resurs, koju vrijednost, s čega na što, i nove dokumente. {{ui:Apply}} zapisuje sve u jednom koraku ({{key:Mod+Z}} poništava). Retci se povezuju po GlobalId, a zatim po nazivu komponente. Retci koji ne odgovaraju ničemu u modelu navode se, ne dodaju se.

Tablica se tretira kao nepouzdana: formule se nikad ne čitaju niti izvršavaju (samo zadnja spremljena vrijednost u ćeliji), vrijednost koja bi jamstvo završila prije početka i poveznica dokumenta koja nije web adresa ni naziv datoteke se izostavljaju i broje, a vrlo velike radne knjige se odbijaju. Poslovi COBie-a su planirani radovi tipa, pa se zapisuju, ali se ne čitaju natrag. U tablici koju piše BimCraft, tekst koji bi tablica mogla shvatiti kao formulu (počinje s `=`, `+`, `-` ili `@`) označen je kao tekst.

Radna knjiga je provjerena u našim testovima nasuprot neovisnom čitaču tablica; nije prošla kroz COBie validator. Ako ju tim koji prima pokrene kroz validator, javite nam što piše.

## Dokumenti primopredaje

Papiri koji se predaju vlasniku s dovršenom zgradom pripadaju projektu, a ne jednom resursu. Na kartici {{ui:Assets}} otvorite {{ui:Handover documents}}:

1. {{ui:Add a document}}, odaberite vrstu (certifikat o dovršenju, uporabna dozvola, jamstvo, priručnik, izvedbeni crteži, drugo) i upišite naslov, datum izdavanja, tko ga je izdao i referentni broj.
2. Recite gdje je: web adresa, naziv datoteke uz IFC ili {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} i {{ui:Remove}} mijenjaju popis; svaki je jedan korak koji možete poništiti.

{{ui:Build the handover package}} preuzima jednu zip datoteku: naslovnu stranicu s popisom svakog dokumenta, isti popis kao tablicu, COBie radnu knjigu (dokumenti su na njezinu listu Document, kao reci o Facility), model i svaku priloženu datoteku. Certifikat o dovršenju ili uporabna dozvola koja još nije na popisu navodi se na naslovnoj stranici; paket se ipak izrađuje.

Model u paketu je **izvedbeni model**: navodi koji su elementi izmjereni na terenu. Uz njega, u mapi `as-built`: izjava, popis svakog elementa s njegovim stanjem provjere, skup crteža kakav je sada kao jedan PDF (izvedbeni crteži) i dnevnik promjena crteža kad model ima izdane skupove. Pogledajte [Označite elemente kao provjerene ili provjerene na terenu](topic:verification).

- U IFC datoteci svaki dokument je IfcDocumentInformation vezan uz projekt (IfcRelAssociatesDocument), s naslovom, referencom, datumom, izdavateljem i mjestom, da ga drugi programi navode.
- Priložena datoteka zapisuje se po nazivu, veličini i SHA-256. Da datoteku sačuvate uz projekt, upotrijebite {{ui:Save the project as a bundle}} (.ccbundle sadrži model i priložene datoteke; njegovo otvaranje ih vraća, svaku provjerenu prema zapisu). Obično spremanje pita što želite.
- Običan .ifc čuva zapis, a ne datoteku: nakon otvaranja upotrijebite {{ui:Attach the file again}}. Ista datoteka se prepoznaje; druga zamjenjuje zapis.

## CSV

{{ui:CSV}} sprema svaki resurs s njegovim podacima, svaki unos održavanja i svaki dokument, jedan redak po svakom, za proračunsku tablicu ili drugi program za održavanje.

:::note
Nije izrađeno: hostirana usluga koja čuva očitanja i šalje upozorenja dok je BimCraft zatvoren, te čitanje COBie poslova natrag. Pogledajte [Još nije izrađeno](topic:not-built-yet).
:::
