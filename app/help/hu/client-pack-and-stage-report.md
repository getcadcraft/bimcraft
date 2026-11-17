---
title: Ügyfélcsomagok, szakaszjelentések és változatok összehasonlítása
summary: Készítsen ügyfélcsomagot vagy szakaszjelentést a modellből: a tömegformálási változatok területre és költségre összehasonlítva, szintterületek, a rajzok a revízióikkal és a kiadási előzmények. Minden adat megtartja a mögötte álló elemeket.
keywords: ügyfélcsomag, bemutató, szakaszjelentés, jelentés, változatok összehasonlítása, változatok, területek és költség, költség változatonként, díj nélkül, tömegformálás, szintterületek, rajzjegyzék, kiadási előzmények, adatok, kapcsolt adatok
from: f6679bf5
---

## Mit fog csinálni

Készítsen ügyfélcsomagot vagy szakaszjelentést a modell jelenlegi állapotából, és hasonlítsa össze a megtartott tömegformálási változatokat területre és költségre, egymás mellett.

## Lépések

1. A bal oldali panelen nyissa meg az **Ügyfélcsomag és szakaszjelentés** részt.
2. Az Ügyfélcsomag vagy a Szakaszjelentés mellett válassza a **Megnyitás a Dokumentumokban** lehetőséget. A dokumentum a modellből a Dokumentumok között jelenik meg, ahol módosíthatja a szövegét.
3. Az előnézetben kattintson egy adatra, hogy kijelölje a mögötte álló elemeket.
4. Válassza a **Csomag készítése** lehetőséget. Egy zip-fájl mentődik: a dokumentum PDF-ben, a 3D-nézet képe, valamint a `figures.csv`, amely minden adatot felsorol a hozzá tartozó elemek GlobalId-jával.

## A mezők

Ezeket bármely dokumentumban használhatja.

| Mező | Mit ír ki |
|---|---|
| `{{stage}}` | A projekt szakasza a rajz adataiból. |
| `{{options}}` | A megtartott tömegformálási változatok egymás mellett: szintek, magasság, alaprajzi lábnyom, bruttó szintterület, határoló felület és költség. |
| `{{areas}}` | Szintenkénti területek a helyiségekből. |
| `{{sheets}}` | A rajzlapok, az általuk viselt revízióval és az utolsó kiadás idejével. |
| `{{issues}}` | A kiadási előzmények és a rajzváltozási napló. |
| `{{changes}}` | Az utolsó kiadás óta történt változások, lapról lapra. |

## Hogyan költségezik a változatokat

A költség kizárólag a projekt árlistájából (Energia/Költség, 5D költség) származik. Semmit nem becsülünk Ön helyett.

- Egy ársor csak akkor árazza a változatot, ha az osztályai között szerepel az IfcBuildingElementProxy.
- A szintterületet az a ársor árazza, amelynek szavai megnevezik a változat használatát, például irodaként. Ennek hiányában a gross floor area vagy a building mass szavakat tartalmazó sor használatos. Az m²-es sor a bruttó szintterületet, az m³-es sor a térfogatot használja.
- A határoló felületet (kerület szorozva magassággal) az envelope vagy a facade szót tartalmazó ársor árazza.
- Ha egy változathoz nincs megfelelő ársor, **Nincs díj** jelenik meg. A teljes összeg csak akkor látszik, ha minden kért résznek van díja.

## Tudnivalók

- Tartsa meg a változatokat a helyiségprogram tömegformálási listájában a **Megtartás változatként** gombbal. Lásd: Tömegformálási változatok.
- A PDF nem tud elemeket kijelölni. A BimCraft-on kívül a `figures.csv` hordozza minden adat kapcsolatát az elemeivel.

## Még nincs elkészítve

- A rajzlapok és a rajzolt nézetek nincsenek beillesztve a dokumentumba. A csomag csak a 3D-nézet képét tartalmazza.
