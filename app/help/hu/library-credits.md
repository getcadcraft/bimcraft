---
title: Könyvtári forrásmegjelölések listázása és bejelentkezés a könyvtárba
summary: Nézze meg a modellben használt összes könyvtári elemet a licencével és forrásmegjelölésével, másolja ki a forrásmegjelöléseket, vagy töltse le őket a kimutatással együtt, és jelentkezzen be, hogy lássa csapata elemeit.
keywords: forrásmegjelölések, forrásmegjelölés, licenc, cc by, cc0, szerzői jog, csapatkönyvtár, bejelentkezés, csatlakozás, token, berendezéskimutatás, csv
from: 81971658
---

## Mit fog csinálni

Adja meg a forrásmegjelölést ott, ahol a licenc kéri, és érje el csapata saját könyvtári elemeit.

## Könyvtári forrásmegjelölések

1. Nyissa meg a modellt.
2. Kattintson az eszköztárban a {{ui:Forrásmegjelölések}} gombra.
3. Olvassa el a listát: minden felhasznált elem, annak verziója, licence, forrásmegjelölése és az elemszámok, amelyekként elhelyezte.
4. Kattintson a {{ui:Forrásmegjelölések másolása}} gombra a forrásmegjelölési sorok másolásához, vagy a {{ui:CSV a kimutatással}} gombra egy táblázathoz, amely minden elhelyezést a forrásmegjelölésével együtt tartalmaz.

A licenc és a forrásmegjelölés akkor is megjelenik a {{ui:Tulajdonságok}} részben, amikor kiválaszt egy elhelyezett elemet, és az IFC-ben (`CadCraft_LibraryItem`) mentődnek, így a fájllal együtt utaznak.

## A modell berendezéskimutatása

Kattintson az eszköztárban a {{ui:Berendezések}} gombra. A kimutatás az elhelyezett könyvtári elemekből készül: elemszám, mennyiség, név, gyártó, modell, villamos és vízvezetéki adatok, szintenként csoportosítva. Ugyanazt a CSV-t tölti le, mint egy rajz kimutatása.

## Bejelentkezés a könyvtárba

1. A {{ui:Könyvtár}} fülön válassza a **Könyvtár** lehetőséget.
2. Kattintson a {{ui:Bejelentkezés a könyvtárba}} gombra. Egy kis ablak nyílik meg ezen a webhelyen.
3. Ha kéri, jelentkezzen be, majd kattintson a **Csatlakozás** gombra. Az ablak könyvtári kulcsot ad át a BimCraftnak, és ezután bezárhatja.

## Mit kell látnia

- „Bejelentkezve a könyvtárba” a Könyvtár-lista tetején. Csapata elemei a nyilvánosak mellett jelennek meg.
- Az elhelyezett elemek felhasználtként rögzítődnek, így a könyvtár jelezheti, ha változnak.

## Jó tudni

- A kulcs csak ebben a fülön marad meg, és a fül bezárásával véget ér. A {{ui:Bejelentkezés elfelejtése}} gomb hamarabb eldobja.
- A fiókja biztonsági oldala a kulcsot "BimCraft library (browser)" néven listázza; ott visszavonhatja.
- A modelljéről semmi nem kerül elküldésre: csak az, hogy mely könyvtári elemeket helyezte el.
