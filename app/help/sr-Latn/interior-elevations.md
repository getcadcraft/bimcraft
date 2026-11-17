---
title: Unutrašnji izgledi
summary: Napravite jedan list koji prikazuje četiri zida prostorije iznutra, sa kotama i oznakama, i sačuvajte ga kao PDF.
keywords: unutrašnji izgled, prostorija, zid, ormarić, kuhinja, izgled, list, PDF, kota, oznaka, prostor, A-501
from: 1e3a70a8
---

## Šta ćete uraditi

Izaberite prostoriju i dobijte jedan list koji prikazuje njena četiri zida onako kako ih vidite kada stojite unutra. Namenjen je kuhinjama, kupatilima i svakoj prostoriji u kojoj treba da vidite ormariće, vrata i prozore na svakom zidu.

## Napravite list

1. Izaberite prostoriju. U osnovi, uz uključeno {{ui:Crtanje}}, kliknite unutar prostorije. U 3D prikazu ili stablu modela izaberite prostor (IfcSpace).
2. U **Svojstva** kliknite {{ui:Unutrašnji izgledi…}}.
3. Otvara se dijalog sa listom.
4. Kliknite {{ui:Preuzmi PDF}} da sačuvate list. Datoteka se zove "<file> — Interior elevations — <room>.pdf" i to je vektorski PDF.
5. Kada završite, kliknite {{ui:Zatvori}}.

## Šta list prikazuje

Na listu su četiri prikaza, dva puta dva, u jednoj razmeri: najveća standardna razmera koja staje. To su **Severni zid**, **Istočni zid**, **Južni zid** i **Zapadni zid**. Blok sa naslovom nosi broj lista A-501, naslov „Unutrašnji izgledi — “ sa brojem i nazivom prostorije, projekat i datum.

Svaki prikaz je presečen kroz sredinu prostorije i gleda u zid sa te strane. Bočni zidovi i sve što je u njima presečeno, kao prozor, prikazuju se kao siva šrafura preseka oko prikaza. Prikaz staje tik iza lica zida, pa iza zida ništa ne vidi.

Svaki prikaz ima:

- širinu prostorije ispod njega, od unutrašnjeg lica do unutrašnjeg lica;
- visinu prostorije pored njega, od poda do nivoa iznad;
- kvadratnu oznaku na svakim vratima i šestougaonu oznaku na svakom prozoru u tom zidu, sa oznakom (D1, W1 i tako dalje);
- kružnu oznaku sa brojem stavke na svakoj stavci biblioteke postavljenoj ispred tog zida: ormarići, instalacije i oprema.

:::note
Prikazi se prave iz modela svaki put kada otvorite dijalog, pa se uvek slažu sa njim. Pomerite ormarić, pa ponovo otvorite dijalog.
:::

## Na sopstvenim listovima

Svaki zid svake prostorije je takođe prikaz koji možete staviti na list koji sami pravite: u pregledaču projekta kliknite {{ui:Novi list}}, pa pod **Unutrašnji izgledi** dodajte „101 Kuhinja — Severni zid“ i ostale. Dobija iste kote i oznake.

## Još nije napravljeno

Unutrašnji izgledi u generisanom skupu crteža (dolaze iz **Svojstva** prostorije ili sa vaših listova), prostorije koje nisu pretežno pravougaone (prikaz izgleda kvadratno uz svaku stranu kutije prostorije), crtanje, beleške ili sopstvene kote na njima i izbor zidova koji se prikazuju. Pogledajte [Šta još nije napravljeno](topic:not-built-yet).
