---
title: Megtestesült karbon és költségek az ütemtervben
summary: Adja össze a modell megtestesült karbonját egy nyílt, szerkeszthető tényezőtáblából, és ossza el az árakat a 4D ütemtervben költség- és pénzáramlási görbévé. Mindkettő az Ön által megadott vagy importált értékekből indul.
keywords: megtestesült karbon, karbon, co2, kgco2e, kibocsátás, tényezőtábla, epd, 5d, költség, pénzáramlás, s-görbe, ütemtervi költség, árak, mennyiségkimutatás árai
from: 83e82840
---

## Megtestesült karbon

Nyissa meg a **Karbon** panelt. Minden elem mennyiségét (térfogat, felület vagy hossz) megszorozzuk a tényezőtábla egy tényezőjével, életciklus-modulonként: a termékszakasz kötelező, a szállítás és a hulladék opcionális. Az összegek anyag, osztály és szint szerint jelennek meg, valamint a padló m²-enkénti értékben.

**A tényezőtábla az Öné.** A BimCraftban található sorok általános kezdő értékek, megfelelő nagyságrendben. Nem adatbázisból származnak, ellenőrizetlenként vannak jelölve, és a saját forrásával kell őket lecserélni (EPD, nemzeti adatbázis vagy a cége adatai). Sorokat a panelen szerkeszthet, vagy a táblát CSV vagy JSON formátumban importálhatja és exportálhatja. Az Ön által hozzáadott sorok felülírják az azonos azonosítójú kezdő sort. A tábla a modellbe mentődik.

Azok az elemek, amelyekhez nincs megfelelő sor, vagy nincs mennyiségük, nem nullaként számolódnak, hanem a Problémák között szerepelnek.

## Költségek a 4D ütemtervben

Nyissa meg a **Költség** panelt a 4D ütemterv mellett. Adjon meg árakat (gépelje be őket, importáljon CSV vagy JSON fájlt, vagy vegye át a TakeoffCraft tételeit), rendeljen minden árat modellanyagokhoz kulcsszavakkal, és a panel minden feladat elemeit árazza. Egy feladat költségét a kezdő- és befejezőnap közötti időszakra osztja el (egyenletesen, vagy elöl, illetve hátul terhelten), a panel pedig napra, hétre vagy hónapra bontva rajzolja meg a halmozott pénzáramlási görbét, szakaszonként és csomagonként a költséggel, valamint azzal, hogy egy adott napon mit terveztek és mit építettek meg. Kimenet: CSV. Árak megadásáig semmi sincs árazva: az alkalmazás nem szállít árakat.

## Pénznem

Az ártábla megadhatja, milyen pénznemben vannak az árai (három betű, például USD vagy EUR). Az 5D panelen van erre mező; a fájl az árakkal együtt tárolja, és a JSON-exportok is tartalmazzák. Az ezt megelőzően készült, vagy üresen hagyott táblának nincs pénzneme: költségei USD-ben jelennek meg, ez az alkalmazás alapértelmezése, és a panel és a futó összesítések ezt jelzik. Pénznemek között semmi sem váltódik át.
