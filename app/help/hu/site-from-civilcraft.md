---
title: Szomszédos épületek és a telek a CivilCraftból
summary: Vegye át javaslatként a CivilCraft „Cím a telekhez” funkciója által egy cím körül talált épületeket és telket, és adja hozzá a bejelöltieket.
keywords: telek, cím, telekhatár, szomszédok, környezet, civilcraft, ccsite, épületek, telekkörvonal, javaslat
from: 3be9407b
---

## Mit csinál

A CivilCraftban a Felület › További › Cím a telekhez funkció nyílt adatokból megkeresi a cím körüli épületeket, telket, övezetet, árvízi zónát és talajt. A „Küldés a BimCraftnak javaslatként” gomb (vagy a „A telek mentése fájlként”, majd a `.ccsite.json` fájl megnyitása itt) hozza át őket a BimCraftba. Semmi nem kerül hozzáadásra, amíg nem mondja ki.

## Használat

1. Indítson el vagy nyisson meg egy modellt. A címpont az aktuális szint origójában van.
2. Egy doboz felsorolja a szomszédos épületeket és a telket jelölőnégyzettel. Törölje a jelölést azoknál, amelyekre nincs szüksége.
3. Azok az épületek, amelyeknek a forrás nem adta meg a magasságát, a doboz tetején megadott magasságot kapják. Az az épület, amelynek csak a szintszáma ismert, szintenként 3 m-t számít; a doboz ezt jelzi.
4. Kattintson az „A bejelöltek hozzáadása” gombra. Az épületek a lábnyomuk köré falakká válnak, a felsorolt magasságukkal, egyetlen visszavonási lépésben. A telek a telekkörvonal lesz, külön, második visszavonási lépésben.

Az övezet, az árvízi zóna és a talaj csak tájékoztatásul szerepel; nem rajzolódnak ki.

## Tudnivalók

- A körvonalak annyira pontosak, amennyire a nyílt adatok: az OpenStreetMap és a megyei telekrétegek helyenként sokat eltérnek. Ellenőrizze, ami fontos, felmérés alapján.
- A pozíciók a címponttól mért méterek keletre és északra, egy síkbeli közelítésben, néhány kilométeren belül néhány méter pontossággal.
- Az adatok hordozzák forrásaik licencét (az OpenStreetMap ODbL); a doboz mutatja a forrásmegjelölés sorát.
