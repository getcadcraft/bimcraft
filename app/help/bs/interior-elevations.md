---
title: Unutrašnji izgledi
summary: Napravite jedan list koji prikazuje četiri zida prostorije iznutra, sa kotama i oznakama, i spasite ga kao PDF.
keywords: unutrašnji izgled, prostorija, zid, ormarić, kuhinja, izgled, list, PDF, kota, oznaka, prostor, A-501
from: 1e3a70a8
---

## Šta ćete uraditi

Odaberite prostoriju i dobijte jedan list koji prikazuje njena četiri zida onako kako biste ih vidjeli stojeći unutra. Namijenjen je kuhinjama, kupatilima i svakoj prostoriji u kojoj treba vidjeti ormariće, vrata i prozore na svakom zidu.

## Napravite list

1. Odaberite prostoriju. U osnovi sa uključenim {{ui:Crtanje}} kliknite unutar prostorije. U 3D pogledu ili u stablu modela odaberite prostor (IfcSpace).
2. U **Svojstva** kliknite {{ui:Unutrašnji izgledi…}}.
3. Otvara se dijalog sa listom.
4. Kliknite {{ui:Preuzmi PDF}} da biste ga spasili. Datoteka se zove "<file> — Interior elevations — <room>.pdf" i to je vektorski PDF.
5. Kliknite {{ui:Zatvori}} kada završite.

## Šta list prikazuje

List ima četiri pogleda, dva po dva, u jednoj razmjeri: najveća standardna razmjera koja stane. To su **Sjeverni zid**, **Istočni zid**, **Južni zid** i **Zapadni zid**. Blok sa podacima nosi broj lista A-501, naslov "Unutrašnji izgledi — " sa brojem i nazivom prostorije, projekat i datum.

Svaki pogled je presječen kroz sredinu prostorije i gleda na zid s te strane. Bočni zidovi i sve što je u njima presječeno, kao prozor, prikazuju se kao siva presječena površina (poché) oko pogleda. Pogled staje odmah iza lica zida, pa ništa iza zida se ne vidi.

Svaki pogled nosi:

- širinu prostorije ispod njega, od unutrašnjeg lica do unutrašnjeg lica;
- visinu prostorije pored njega, od poda do nivoa iznad;
- kvadratnu oznaku na svakim vratima i šestougaonu oznaku na svakom prozoru u tom zidu, sa njihovom oznakom (D1, W1 itd.);
- kružnu oznaku sa brojem stavke na svakoj stavci iz biblioteke postavljenoj ispred tog zida: ormarići, instalacije i oprema.

:::note
Pogledi se naprave iz modela svaki put kada otvorite dijalog, pa se uvijek poklapaju sa njim. Pomjerite ormarić, pa ponovo otvorite dijalog.
:::

## Na vašim listovima

Svaki zid svake prostorije je također pogled koji možete staviti na list koji napravite: u pregledaču projekta kliknite {{ui:Novi list}}, zatim pod **Unutrašnji izgledi** dodajte "101 Kuhinja — Sjeverni zid" i ostale. Dolazi sa istim dimenzijama i oznakama.

## Još nije izrađeno

Unutrašnji izgledi u generisanom skupu crteža (dolaze iz **Svojstva** prostorije ili vaših vlastitih listova), prostorije koje nisu pretežno pravougaone (pogled izgleda kvadratno sa svake strane kutije prostorije), izrada nacrta, napomene ili vaše kote na njima, i izbor zidova koji se prikazuju. Vidi [Šta još nije izrađeno](topic:not-built-yet).
