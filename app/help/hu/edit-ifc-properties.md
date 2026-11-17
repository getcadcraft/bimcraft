---
title: IFC-tulajdonságok módosítása és szerkesztett másolat mentése
summary: Egy elem nevének, címkéjének, leírásának vagy tulajdonságértékének módosítása, visszavonás, és egy új IFC-fájl letöltése úgy, hogy az eredeti változatlan marad.
keywords: szerkesztés, módosítás, tulajdonságok, paraméterek, címke, név, átnevezés, jelölés, mentés másként, letöltés, visszavonás, másolás, ifc, írás
from: f8035d62
---

## Mit fog csinálni

Javítson adatokat egy IFC-modellben: nevezzen át egy elemet, javítsa a címkéjét, módosítson egy tulajdonságértéket. Majd mentsen egy új IFC-fájlt a változtatásokkal. A megnyitott fájlhoz soha nem nyúlnak.

## Mit módosíthat

| Mező | Szerkeszthető |
|---|---|
| Név, Objektumtípus, Címke, Leírás | Igen |
| Egyedi tulajdonságértékek (szöveg, számok, Igen/Nem) | Igen |
| Típustulajdonságok (a „(típus)” jelöléssel ellátott készletek) | Igen, és a módosítás az adott típus minden elemére vonatkozik |
| Típus, GlobalId, Sor | Nem |
| Mennyiségek (hosszak, területek, térfogatok, darabszámok) | Nem |
| Listák, felsorolások és más többrészes értékek | Nem |
| Geometria, pozíció, elemek hozzáadása vagy törlése | Nem |

## Lépések

1. Nyisson meg egy IFC-modellt, és kattintson a módosítani kívánt elemre.
2. A {{ui:Tulajdonságok}} panelen kattintson arra az értékre, amelyet módosítani szeretne. Szövegmezővé alakul. Az üres érték *üres* felirattal jelenik meg.
3. Írja be az új értéket.
4. Nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshova a megtartáshoz. Az {{key:Esc}} billentyű megszakítja.
5. Nézze meg az értéket: most félkövér, mellette kék sávval, ami a szerkesztett értéket jelöli.
6. Nézze meg a bal oldali {{ui:Módosítások}} részt: a változtatás *elem*: *mező*, régi érték › új érték alakban szerepel.
7. Ismételje meg más értékekre vagy más elemekre.
8. Kattintson a {{ui:Mentés IFC-ként}} gombra (megmutatja, hány módosítás vár, például „Mentés IFC-ként (3)”), vagy nyomja meg a {{key:Mod+S}} billentyűt.
9. Keresse meg a „*eredeti név* (szerkesztett).ifc” fájlt a letöltések mappájában.

## Amit látnia kell

Az állapotsor ezt írja: „A *név* (szerkesztett).ifc mentve, *n* módosítással (… bájt). Az eredeti fájl nem változott.” A {{ui:Módosítások}} lista kiürül a következő körre.

## Értéktípusok

- **Szöveg**: amit beír, az változatlanul megmarad. A Név, az Objektumtípus, a Címke vagy a Leírás törlése eltávolítja az értéket.
- **Számok**: egyszerű számot írjon be, például `2.4` vagy `1200`, a fájl saját mértékegységeiben. Mértékegység-jelölés nélkül. Minden más esetben „Adjon meg számot.” üzenet jelenik meg.
- **Egész számok** (darabszámok, egész értékek): „Adjon meg egész számot.” üzenet, ha tizedes törtet ír be.
- **Igen/Nem**: az érték Igen és Nem menüvé válik.

Minden érték megtartja az IFC-típusát, így a szám szám marad, és más programok helyesen olvassák.

## Visszavonás

1. Kattintson a {{ui:Módosítások}} részen a {{ui:Visszavonás}} gombra, vagy nyomja meg a {{key:Mod+Z}} billentyűt, ha éppen nem ír be egy mezőbe.
2. Több visszavonáshoz ismételje. Minden visszavonás eltávolítja a legutóbbi módosítást.

Mentés után nem vonhat vissza: a lista újra kezdődik. A mentett fájl mindent megtart.

## Miért változtat meg egy szerkesztés csak egy elemet

Az exportáló programok helyet takarítanak azzal, hogy adatokat osztanak meg. Egy tulajdonságkészletet húsz ajtó oszthat meg, és egy érték („Tűzállósági osztály: 60 perc”) kilencven készletben szerepelhet. Ha a BimCraft egyszerűen megváltoztatná a megosztott értéket, minden elem, amely osztozik rajta, megváltozna.

Ezért a BimCraft írás előtt másol:

- Ha a szerkesztett tulajdonságkészletet más elemekkel megosztják, az Ön eleme saját példányt kap a készletből, és csak ez a példány változik.
- Ha az érték más készletekkel közös, az Ön készlete saját példányt kap az értékből.

A szomszédok megtartják régi adataikat. Ezt *másolás íráskor* (copy-on-write) néven ismerik. Néhány kis bejegyzést ad a fájlhoz, amelyet minden IFC-program rendesen olvas.

**A típustulajdonságok szándékosan kivételt képeznek.** A „(típus)” jelöléssel ellátott készlet az elem típusához tartozik, és az IFC-ben minden azonos típusú elem onnan olvassa. Ennek módosítása a típust változtatja meg, így a típus minden eleme az új értéket mutatja. A {{ui:Módosítások}} lista az ilyen szerkesztéseket „(típus)” jelöléssel mutatja. Lásd: [Típustulajdonság módosítása a típus minden elemére](topic:type-vs-instance).

## Figyelmeztetések a munka elvesztése előtt

- Ha mentetlen módosításai vannak, és másik fájlt nyit meg, a program ezt kérdezi: „*n* nem mentett módosítás van itt: *fájl*. Eldobja őket?” A munka folytatásához kattintson a {{ui:Mégse}} gombra, majd mentsen.
- A fül bezárása vagy újratöltése nem mentett módosításokkal a böngészőt arra készteti, hogy kérdezze meg, valóban el akar-e menni.

## Gyakori hibák

- **Mértékegységek beírása.** A `2400 mm` nem fogadható el. Írja be úgy, hogy `2400`.
- **Típustulajdonság módosítása, amikor egy elemre gondolt.** Gépelés előtt nézze meg a „(típus)” megjegyzést. Ha azt szeretné, hogy egy elem más legyen, módosítson egy példánytulajdonságot, a Címkéjét vagy a Nevét.
- **Az eredeti fájl változását várni.** A mentés mindig új fájlt tölt le. Ha ezt szeretné, cserélje le az eredetit saját kezűleg, és tartson másolatot.
- **A mentés billentyűt nyomni módosítások nélkül.** A BimCraft csak akkor ment, ha van mit; egyébként megnyílhat a böngésző saját „Oldal mentése” párbeszédablaka. Zárja be.
- **Kétszer menteni, és két kis fájlt várni.** Minden mentés tartalmazza az összes szerkesztést, amióta megnyitotta a modellt.
- **A szerkesztéseknek vissza kell kerülniük egy projektfájlba.** A BimCraft csak IFC-t ír. Vigye vissza a szerkesztett IFC-t a szerzői programba, ahogy bármely IFC-t importál.
