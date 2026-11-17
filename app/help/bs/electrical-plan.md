---
title: Električni plan
summary: Postavite utičnice, prekidače, svjetla, senzore, razvodne kutije i razvodne ormariće na plan istim simbolima kao CadCraft-ov dodatak Electrical, povežite prekidače sa svjetlima koja uključuju, i navedite uređaje i strujna kola u specifikacijama.
keywords: električni, električni plan, utičnica, priključnica, dupleks, prekidač, trosmjerni, prigušivač, svjetlo, stropno svjetlo, ugradbeno svjetlo, downlight, senzor pokreta, razvodna kutija, razvodni ormarić, razvodna tabla, strujno kolo, opterećenje, vati, amperi, krak prekidača, specifikacija uređaja, specifikacija razvodnog ormarića
from: f7de1947
---

## Šta ćete uraditi

Nacrtajte električni plan kuće u modelu: utičnice, prekidače i razvodne ormariće na zidovima, svjetla i senzore na plafonu. Svaki uređaj je stvarni električni element u IFC datoteci, sa svojom oznakom, strujnim kolom i opterećenjem, a prekidači pamte svjetla koja uključuju.

## Postavljanje uređaja

1. Na nivou otvorite {{ui:Build}} i odaberite {{ui:Electrical}}.
2. Odaberite uređaj: utičnice (struja, podaci, telefon, audio-video), prekidače i senzore (termostat i tajmer također), svjetla, detektore i alarme, razvodnu kutiju, razvodni ormarić ili podrazvodni ormarić.
3. Upišite **Strujno kolo** ako ga znate (bilo koji naziv: 1, 2, A-3). Ostavite **Visina montaže** praznu da bi se koristila uobičajena visina tog uređaja.
4. Kliknite na plan. Utičnice, prekidači i razvodni ormarići idu na površinu najbližeg zida, okrenuti prema prostoriji; svjetla, senzori i razvodne kutije idu na plafon tamo gdje kliknete.

Uređaji se označavaju pri postavljanju: **R** za utičnice, **S** za prekidače, **L** za svjetla, **M** za senzore pokreta, **J** za razvodne kutije, **P** za razvodne ormariće. Uređaji na zidu pomjeraju se zajedno sa zidom kada pomjerite zid.

Radije birate po slici? Otvorite **Paletu simbola** iz {{ui:Build}} da pronađete uređaj po nazivu, označite zvjezdicom one koje koristite i postavite ga jednim klikom: pogledajte [Paleta simbola](topic:symbol-palette).

## Povezivanje prekidača sa svjetlima

1. Odaberite prekidač (ili senzor pokreta) i kliknite **Poveži svjetla** u **Svojstvima**.
2. Kliknite svako svjetlo koje uključuje. Kliknite povezano svjetlo ponovo da ga odspojite.
3. Pritisnite {{key:Enter}} ili kliknite **Gotovo**.

Plan crta isprekidanu krivu od prekidača do svakog njegovog svjetla. U **Svojstvima** svjetla vidi se koji prekidači ga uključuju.

## Prostorija u kojoj uređaj stoji

Svaki uređaj zna prostoriju u kojoj stoji. Uređaj na zidu je u prostoriji prema kojoj je okrenut; uređaj na plafonu je u prostoriji iznad koje se nalazi. Svojstva prikazuju **Prostoriju**, a specifikacija **Električni uređaji** ima kolonu **Prostorija** (broj i naziv, na primjer 101 Kuhinja).

Ažurira se stalno: preimenujte ili prenumerišite prostoriju, pomjerite uređaj ili pomjerite zid, i prostorija se prati u istom koraku. Uređaj na vanjskoj strani zgrade, ili u prostoru koji nije prostorija, kaže da nije u prostoriji.

Prostorija se također upisuje u datoteku, u skup svojstava uređaja `CadCraft_Location` (Room, RoomNumber, RoomName), pa je Pronađi, Boji po svojstvu i specifikacija oznaka mogu koristiti, kao i drugi program. Simboli na planu i elementi povezani sa simbolom dobijaju isti skup; pogledajte [Paleta simbola](topic:symbol-palette).

## Neka asistent postavi uređaje

Kada je asistent povezan (Postavke › Asistenti, sa dozvoljenim izmjenama), uređaje možete tražiti riječima: "stavi dvostruku utičnicu svakih 2 m uz zidove dnevne sobe, 300 mm iznad poda, na strujnom kolu 3", ili "dodaj stropno svjetlo sa prekidačem kod vrata". Asistent koristi pet alata: `devices_add`, `device_change`, `lights_set`, `devices_delete` i `devices_list`. Oni prave iste uređaje koje pravi alat Electrical, na istim zidovima i sa istim oznakama, strujnim kolima, opterećenjima i visinama, a svaki poziv je jedan korak poništavanja.

Uređaj nikada ne dobije vrstu koju alat Electrical nema: nepoznata vrsta se odbija i asistent dobije spisak. Utičnica ili prekidač mora biti unutar 600 mm od lica zida, kao i klik; inače se poziv odbija i ništa se ne postavlja. Podrazumijevane visine su u milimetrima: 300 za utičnice, 1100 za prekidače; uređaj na plafonu visi sa plafona.

## Promjena i pregled

Odaberite uređaj da promijenite njegovu oznaku, strujno kolo, opterećenje (vati) i visinu montaže. Odaberite više njih da ih sve stavite na jedno strujno kolo odjednom. Pritisnite {{key:Delete}} da uklonite jedan; obrisano svjetlo se skida sa svojih prekidača.

U {{ui:Schedules}} odaberite **Električni uređaji** za svaki uređaj sa njegovim nivoom, strujnim kolom, opterećenjem, visinom i svjetlima koja svaki prekidač uključuje, ili **Strujna kola** za uređaje svakog strujnog kola, ukupno opterećenje i struju. Oba su i na listu specifikacija skupa crteža: pogledajte [Izgledi, presjeci i listovi](topic:sheets).

:::note
Visine montaže i opterećenja su podrazumijevane vrijednosti za planiranje (utičnica 16" gore i 200 W, prekidač na 48", stropno svjetlo 60 W), a ne projekat: električar ili inženjer dimenzioniše strujna kola i provjerava propise.
:::

:::tip
Simboli su oni koje dodatak Electrical za CadCraft crta na planovima instalacija, pa plan iz bilo koje od ove dvije aplikacije izgleda isto.
:::
