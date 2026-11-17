---
title: Mi kopik el ötven év alatt
summary: A modell ablakait, ajtóit, felületeit és tetőjét, azok élettartamát, az egyes cserék évét, valamint az évenkénti költséget és annak jelenértékét, ha egységárat ad meg.
keywords: életciklus, életciklus, élettartam, csere, karbantartás, költség, jelenérték, diszkont, infláció, 50 év, ablakok, festés, tető, felületek, teljes élettartam
from: 1b849545
---

A bal oldali panel {{ui:Életciklus-nézet}} szakasza felsorolja azokat a modellbeli elemeket, amelyek elhasználódnak, és megmutatja, mikor kell őket cserélni a vizsgálati időszak (kezdetben 50 év) alatt. A modellben semmi sem változik.

## Az adatok olvasása

Minden rész megmutatja a mennyiségét (a modellből mérve: ablakfelület, kültéri és beltéri ajtók, külső falfelület, belső festés, padló- és mennyezeti felület, a tető alapterülete, lépcsők), egy **élettartamot évben** és egy **egységárat**. Egy rész az élettartamánál cserélődik, majd a kétszeresénél és így tovább, amíg ez a vizsgálat vége előtt van, így egy 30 éves ablak 50 éves vizsgálatban egyszer, a 30. évben cserélődik. Az élettartamok tipikus tervezési értékek: igazítsa őket a saját termékeihez és klímájához. Nincs feltételezett költség; írjon be egyet, hogy lássa az évenkénti pénzösszeget, az összesen és annak jelenértékét. Ha szeretné, adjon meg diszkontrátát és inflációs rátát is.

{{ui:Az ütemterv mentése (CSV)}} az alkatrészeket és az éveket írja ki. A csővezetékek, csatornák, vezetékezés és berendezések is fel vannak sorolva (lásd lent).

## Csővezetékek, csatornák, vezetékezés és berendezések

- **Csővezetékek és csatornák** a rajzolt szakaszok hossza méterben. A **berendezések** (szivattyúk, ventilátorok, szelepek, végpontok, szerelvények, kimenetek, kapcsolók, táblák és az Eszközök lapon nyilvántartott egyéb dolgok) darabszám szerint, fajtánként tervezési élettartammal szerepelnek. Ha egy elem saját *élettartama* az Eszközök lapon be van állítva, külön sorként jelenik meg azzal az élettartammal, és ha van telepítési dátuma, a koráról indul: a 16 éves, 10 éves élettartamú szivattyú most esedékes, majd tízévente.
- A **vezetékezés** **becslés**: a táblától az egyes áramkörök eszközei mentén mért alaprajzi távolság, a legközelebbitől kezdve, szorozva 1,25-tel az útvonal-vezetésért. A modell nem rajzol kábelt, ezért ellenőrizze a saját mennyiségkimutatásával.
- Az élettartamok tervezési értékek, amelyeket át kell nézni, nem forrásadatok.

## Széndioxid-kibocsátás cserénként

Jelölje be az {{ui:Az egyes cserék beépített szénkibocsátásának figyelembe vétele}} opciót. Egy új ablak, ajtó, lépcső, tető, csővezeték vagy berendezés a modell saját, ilyen típusú elemeinek szénkibocsátásával számít (a Szén lap tényezői, egységenként). Az a rész, amelynek nincs elemhez vagy tényezőhöz rendelt értéke, mint a festés, a felületek és a vezetékezés, kötőjelet mutat, és fel van sorolva. A régi rész élettartam-végét és a cseréjének munkáját nem számítjuk bele.
