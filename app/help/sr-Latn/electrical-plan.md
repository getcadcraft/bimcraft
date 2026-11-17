---
title: Električni plan
summary: Postavite utičnice, prekidače, svetiljke, senzore, razvodne kutije i table na plan istim simbolima kao u dodatku CadCraft Electrical, povežite prekidače sa svetiljkama koje pale i navedite uređaje i strujna kola u specifikacijama.
keywords: električno, električni plan, utičnica, priključnica, dupla, prekidač, sa tri mesta, prigušivač, svetiljka, plafonska svetiljka, ugradna svetiljka, downlight, senzor pokreta, razvodna kutija, tabla, razvodna tabla, strujno kolo, opterećenje, vati, amperi, krak prekidača, specifikacija uređaja, specifikacija table
from: f7de1947
---

## Šta ćete uraditi

Nacrtajte električni plan kuće u modelu: utičnice, prekidače i table na zidovima, svetiljke i senzore na plafonu. Svaki uređaj je pravi električni element u IFC datoteci, sa svojom oznakom, strujnim kolom i opterećenjem, a prekidači pamte svetiljke koje pale.

## Postavljanje uređaja

1. Na nivou otvorite {{ui:Verzija}} i izaberite {{ui:Električno}}.
2. Izaberite uređaj: utičnice (struja, podaci, telefon, audio-video), prekidače i senzore (uključujući termostat i tajmer), svetiljke, detektore i alarme, razvodnu kutiju, tablu ili podtablu.
3. Ukucajte **Strujno kolo** ako ga znate (bilo koji naziv: 1, 2, A-3). Ostavite **Visina ugradnje** praznom da bi se koristila uobičajena visina tog uređaja.
4. Kliknite na plan. Utičnice, prekidači i table idu na lice najbližeg zida, okrenuti ka prostoriji; svetiljke, senzori i razvodne kutije idu na plafon tamo gde kliknete.

Uređajima se oznake dodeljuju pri postavljanju: **R** za utičnice, **S** za prekidače, **L** za svetiljke, **M** za senzore pokreta, **J** za razvodne kutije, **P** za table. Uređaji na zidu se pomeraju zajedno sa zidom kada pomerite zid.

Radije biste birali po slici? Otvorite **Paletu simbola** iz {{ui:Verzija}} da pronađete uređaj po nazivu, označite zvezdicom one koje koristite i postavite ga jednim klikom: pogledajte [Paleta simbola](topic:symbol-palette).

## Povezivanje prekidača sa svetiljkama

1. Izaberite prekidač (ili senzor pokreta) i kliknite **Poveži svetiljke** u **Svojstvima**.
2. Kliknite svaku svetiljku koju on pali. Ponovnim klikom na povezanu svetiljku je odvajate.
3. Pritisnite {{key:Enter}} ili kliknite **Gotovo**.

Plan crta isprekidanu krivu od prekidača do svake njegove svetiljke. U **Svojstvima** svetiljke vidi se koji je prekidači pale.

## Prostorija u kojoj uređaj stoji

Svaki uređaj zna prostoriju u kojoj stoji. Uređaj na zidu je u prostoriji ka kojoj je okrenut; uređaj na plafonu je u prostoriji ispod koje se nalazi. **Svojstva** prikazuju **Prostoriju**, a specifikacija **Električni uređaji** ima kolonu **Prostorija** (broj i naziv, na primer 101 Kuhinja).

Prostorija se održava ažurnom: preimenujete ili preoznačite prostoriju, pomerite uređaj ili pomerite zid, i prostorija se prati u istom koraku. Uređaj na spoljnoj strani zgrade, ili u prostoru koji nije prostorija, javlja da nije u prostoriji.

Prostorija se takođe upisuje u datoteku, u skup svojstava uređaja `CadCraft_Location` (Room, RoomNumber, RoomName), pa je mogu koristiti Pronađi, Boja prema svojstvu i specifikacija oznaka, kao i drugi programi. Simboli u planu i elementi povezani sa simbolom dobijaju isti skup; pogledajte [Paleta simbola](topic:symbol-palette).

## Neka ih postavi vaš asistent

Kada je asistent povezan (**Podešavanja › Asistenti**, sa dozvoljenim izmenama), uređaje možete tražiti rečima: „postavi dvostruku utičnicu na svakih 2 m duž zidova dnevne sobe, 300 mm iznad poda, na strujnom kolu 3” ili „dodaj plafonsku svetiljku sa njenim prekidačem kraj vrata”. Asistent koristi pet alata: `devices_add`, `device_change`, `lights_set`, `devices_delete` i `devices_list`. Oni prave iste uređaje koje pravi alat Electrical, na istim zidovima i sa istim oznakama, strujnim kolima, opterećenjima i visinama, a svaki poziv je jedan korak poništavanja.

Uređaj nikada ne dobija vrstu koju alat Electrical nema: nepoznata vrsta se odbija, a asistent dobija spisak. Utičnica ili prekidač mora biti najviše 600 mm od lica zida, kao pri kliku; inače se poziv odbija i ništa se ne postavlja. Podrazumevane visine su u milimetrima: 300 za utičnice, 1100 za prekidače; uređaj na plafonu visi sa plafona.

## Promena i pregled

Izaberite uređaj da promenite njegovu oznaku, strujno kolo, opterećenje (vati) i visinu ugradnje. Izaberite više njih da ih sve odjednom stavite na isto strujno kolo. Pritisnite {{key:Delete}} da uklonite jedan; obrisana svetiljka se skida sa svojih prekidača.

U {{ui:Specifikacije}} izaberite **Električni uređaji** za svaki uređaj, sa njegovim nivoom, strujnim kolom, opterećenjem, visinom i svetiljkama koje svaki prekidač pali, ili **Strujna kola** za uređaje svakog strujnog kola, ukupno opterećenje i struju. Oba su i na listu specifikacija u setu crteža: pogledajte [Osnove, preseci i listovi](topic:sheets).

:::note
Visine ugradnje i opterećenja su podrazumevane vrednosti za planiranje (utičnica 16" visoko i 200 W, prekidač na 48", plafonska svetiljka 60 W), a ne projekat: električar ili inženjer dimenzioniše strujna kola i proverava propise.
:::

:::tip
Simboli su isti oni koje dodatak CadCraft Electrical crta na planovima instalacija, pa se plan iz bilo koje od te dve aplikacije čita isto.
:::
