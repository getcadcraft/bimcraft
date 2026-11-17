---
title: Električni tlocrt
summary: Postavite utičnice, sklopke, svjetiljke, senzore, razvodne kutije i razdjelnike na tlocrt istim simbolima kao u dodatku Elektrika programa CadCraft, povežite sklopke sa svjetiljkama koje uključuju te navedite uređaje i strujne krugove u specifikacijama.
keywords: električni, električni tlocrt, utičnica, priključnica, dvostruka utičnica, sklopka, sklopka s dva mjesta, regulator svjetline, svjetiljka, stropna svjetiljka, ugradbena svjetiljka, downlight, senzor pokreta, razvodna kutija, razdjelnik, razvodna ploča, strujni krug, opterećenje, vati, ampera, krak sklopke, specifikacija uređaja, specifikacija razdjelnika
from: f7de1947
---

## Što ćete učiniti

Nacrtajte električni tlocrt kuće u modelu: utičnice, sklopke i razdjelnike na zidovima, svjetiljke i senzore na stropu. Svaki uređaj je pravi električni element u IFC datoteci, s oznakom, strujnim krugom i opterećenjem, a sklopke pamte svjetiljke koje uključuju.

## Postavljanje uređaja

1. Na razini otvorite {{ui:Izgradnja}} i odaberite {{ui:Elektrika}}.
2. Odaberite uređaj: utičnice (struja, podaci, telefon, audio-video), sklopke i senzore (također termostat i tajmer), svjetiljke, detektore i alarme, razvodnu kutiju, razdjelnik ili podrazdjelnik.
3. Upišite **Strujni krug** ako ga znate (bilo koji naziv: 1, 2, A-3). Ostavite **Visina ugradnje** praznom da biste dobili uobičajenu visinu za taj uređaj.
4. Kliknite na tlocrt. Utičnice, sklopke i razdjelnici postavljaju se na lice najbližeg zida, okrenuti prema prostoriji; svjetiljke, senzori i razvodne kutije postavljaju se na strop, tamo gdje kliknete.

Uređaji dobivaju oznaku čim ih postavite: **R** za utičnice, **S** za sklopke, **L** za svjetiljke, **M** za senzore pokreta, **J** za razvodne kutije, **P** za razdjelnike. Uređaji na zidu pomiču se s njim kad pomaknete zid.

Radije biste birali slikom? Otvorite **Paletu simbola** iz {{ui:Izgradnja}}, pronađite uređaj po nazivu, označite zvjezdicom one koje koristite i postavite ga jednim klikom: vidi [Paleta simbola](topic:symbol-palette).

## Povezivanje sklopki sa svjetiljkama

1. Odaberite sklopku (ili senzor pokreta) i kliknite **Poveži svjetiljke** u **Svojstvima**.
2. Kliknite na svaku svjetiljku koju ona uključuje. Ponovnim klikom na povezanu svjetiljku prekidate vezu.
3. Pritisnite {{key:Enter}} ili kliknite **Gotovo**.

Tlocrt crta isprekidanu krivulju od sklopke do svake njezine svjetiljke. U **Svojstvima** svjetiljke vidi se koje je sklopke uključuju.

## Prostorija u kojoj uređaj stoji

Svaki uređaj zna prostoriju u kojoj stoji. Uređaj na zidu nalazi se u prostoriji prema kojoj je okrenut; uređaj na stropu nalazi se u prostoriji iznad koje je. U **Svojstvima** piše **Prostorija**, a specifikacija **Električni uređaji** ima stupac **Prostorija** (broj i naziv, na primjer 101 Kuhinja).

Ažurira se sam: preimenujete ili preoznačite prostoriju, pomaknete uređaj ili zid, a prostorija se prati u istom koraku. Uređaj na vanjskoj strani zgrade ili u prostoru koji nije prostorija javlja da nije u prostoriji.

Prostorija se upisuje i u datoteku, u skup svojstava uređaja `CadCraft_Location` (Room, RoomNumber, RoomName), pa je mogu koristiti Pronađi, Boja prema svojstvu i specifikacija oznaka, kao i drugi programi. Simboli u tlocrtu i elementi povezani sa simbolom dobivaju isti skup; vidi [Paleta simbola](topic:symbol-palette).

## Neka pomoćnik postavi uređaje

Kad je pomoćnik povezan (Postavke › Pomoćnici, s dopuštenim izmjenama), možete tražiti uređaje riječima: „stavi dvostruku utičnicu svakih 2 m uz zidove dnevnog boravka, 300 mm iznad poda, na strujni krug 3“ ili „dodaj stropnu svjetiljku s njezinom sklopkom uz vrata“. Pomoćnik koristi pet alata: `devices_add`, `device_change`, `lights_set`, `devices_delete` i `devices_list`. Oni stvaraju iste uređaje kao alat Elektrika, na istim zidovima i s istim oznakama, strujnim krugovima, opterećenjima i visinama, a svaki poziv je jedan korak poništavanja.

Uređaj nikad ne dobije vrstu koju alat Elektrika nema: nepoznata vrsta se odbija i pomoćniku se dostavlja popis. Utičnica ili sklopka mora biti unutar 600 mm od lica zida, kao i klikom; inače se poziv odbija i ništa se ne postavlja. Zadane visine su u milimetrima: 300 za utičnice, 1100 za sklopke; uređaj na stropu visi sa stropa.

## Mijenjanje i popis uređaja

Odaberite uređaj da promijenite njegovu oznaku, strujni krug, opterećenje (u vatima) i visinu ugradnje. Odaberite nekoliko da ih sve odjednom stavite na jedan strujni krug. Pritisnite {{key:Delete}} za uklanjanje jednog; obrisana svjetiljka skida se sa svojih sklopki.

U {{ui:Specifikacije}} odaberite **Električni uređaji** za svaki uređaj s njegovom razinom, strujnim krugom, opterećenjem, visinom i svjetiljkama koje svaka sklopka uključuje, ili **Strujni krugovi** za uređaje svakog kruga, ukupno opterećenje i struju. Obje su i na listu specifikacija skupa crteža: vidi [Pogledi, presjeci i listovi](topic:sheets).

:::note
Visine ugradnje i opterećenja su zadane vrijednosti za planiranje (utičnica 16" visoko i 200 W, sklopka na 48", stropna svjetiljka 60 W), a ne projekt: električar ili inženjer dimenzionira strujne krugove i provjerava propise.
:::

:::tip
Simboli su oni koje dodatak Elektrika programa CadCraft crta na instalacijskim planovima, pa tlocrt iz bilo koje od ovih aplikacija izgleda jednako.
:::
