---
title: IFC-modell megnyitása és körülnézés 3D-ben
summary: IFC-fájl megnyitása, körbeforgatás, eltolás és nagyítás, valamint az Illesztés, a Felülnézet, az Elölnézet és az Oldalnézet a tájékozódáshoz.
keywords: ifc, 3d, körbeforgatás, eltolás, nagyítás, illesztés, felülnézet, elölnézet, oldalnézet, navigálás, nézetkocka, kamera
from: 68b460dd
---

## Amit el fog végezni

Nyisson meg egy IFC-modellt, forduljon körülötte 3D-ben, és ugorjon a szabványos nézetekre. Körülbelül öt perc.

Egy `.ifc` fájlra van szüksége. A legtöbb BIM-program exportál ilyet; a Revitben ez a **Fájl > Exportálás > IFC**. Lásd [Projektfájl 3D-be IFC-n keresztül](topic:rvt-to-ifc).

## Lépések

1. Kattintson a {{ui:Fájl kiválasztása}} gombra (vagy a bal felső húzási területre).
2. Válassza ki az `.ifc` fájlt, és erősítse meg.
3. Várja meg, amíg az állapotsor befejeződik. Először ez jelenik meg: „IFC motor indítása…”, majd „Modell beolvasása…” és „Geometria készítése: … / … elem”.
4. Nézze meg a modellt: háromnegyed nézetben nyílik meg, a képernyőhöz igazítva.
5. Kattintson a modell fölötti eszköztáron a {{ui:Felülnézet}} gombra, hogy egyenesen lefelé nézzen.
6. Kattintson a {{ui:Elölnézet}} gombra az elölnézethez, majd az {{ui:Oldalnézet}} gombra az oldalnézethez.
7. Kattintson az {{ui:Illesztés}} gombra, vagy nyomja meg az {{key:F}} billentyűt, hogy visszatérjen az egész modell háromnegyed nézetéhez.

## Amit látnia kell

- A modell középen, vékony sötét élekkel, a rajzszerű hatásért.
- A bal oldali {{ui:Fájl}} panel: a fájl neve, mérete, az IFC-séma (például IFC2X3 vagy IFC4), a projekt neve, fázisa, az a program, amelyből exportálták, a szerző, az exportálás dátuma, valamint az elemek és háromszögek száma.
- Alatta a {{ui:Szintek}} és {{ui:Elemek}} listák.
- Az állapotsor: „Megnyitva: *fájlnév*: *n* elem, *s* s alatt”.

## Mozgás

:::mouse
| Cél | Teendő |
|---|---|
| Körbeforgatás | Húzás a bal gombbal |
| Eltolás | Húzás a jobb gombbal, vagy tartsa lenyomva a {{key:Shift}} billentyűt (vagy a {{key:Mod}} billentyűt), és húzzon a bal gombbal |
| Nagyítás | Görgetés az egérgörgővel, vagy húzás a középső gombbal |
| Mindent lát | Nyomja meg az {{key:F}} billentyűt, vagy kattintson az {{ui:Illesztés}} gombra |
:::

:::mac mouse
Érintőpadon: húzzon egy ujjal a körbeforgatáshoz; tartsa lenyomva a {{key:Shift}} vagy a {{key:Mod}} billentyűt, és húzzon az eltoláshoz; görgessen két ujjal, vagy csippentsen a nagyításhoz. A két ujjal történő kattintás jobb kattintás, és azzal húzva is lehet eltolni, de a {{key:Shift}} billentyűvel történő húzás egyszerűbb.
:::

:::touch
| Cél | Teendő |
|---|---|
| Körbeforgatás | Húzás egy ujjal |
| Nagyítás | Csippentés két ujjal |
| Eltolás | Mozgassa két ujját együtt |
| Mindent lát | Koppintson az {{ui:Illesztés}} gombra |
:::

A körbeforgatás mindig a modell közepén lévő pont körül történik. Az eltolás ezt a pontot mozgatja, ezért hosszabb eltolás után a körbeforgatás furcsának tűnhet: kattintson az {{ui:Illesztés}} gombra a visszaállításhoz.

## Árnyékolt, élek vagy drótváz

A nézetkocka felett három kis gomb választja ki, hogyan rajzolódik a modell: {{ui:Árnyékolt}}, {{ui:Árnyékolt élekkel}} (az alapértelmezett) és {{ui:Drótváz}}. Ezek parancsként is elérhetők (a {{ui:Nézet}} a menükben és a Testreszabás listában), így saját billentyűket is kaphatnak. Az {{ui:Alaprajz}}, a {{ui:Felosztás}} és a {{ui:3D}} a {{ui:Nézet}} sorában található az eszköztáron.

## Gyakori hibák

- **Elnevezett nézetekre várni.** A BimCraftban négy rögzített nézet van ({{ui:Illesztés}}, {{ui:Felülnézet}}, {{ui:Elölnézet}}, {{ui:Oldalnézet}}), a jobb alsó sarokban a nézetkocka és a szabad körbeforgatás. Nézeteket nem ment.
- **Alaprajzok és metszetek keresése.** Ebben a verzióban nincsenek 2D alaprajzok vagy metszetdobozok. Vágja el a modellt egyetlen {{ui:Metszet}} síkkal ([IFC-modell vágása metszősíkkal](topic:section-plane)), vagy kapcsolja ki a szinteket: [Szintek, terek és élek megjelenítése és elrejtése](topic:storeys-and-spaces).
- **Projektfájl megnyitása 3D-s várakozással.** A projektfájl fájlkártyaként nyílik meg. Előbb exportálja IFC-be.
- **Egy `.ifczip` megnyitása.** Csomagolja ki, vagy exportáljon sima `.ifc` fájlt.
- **Egy nagyon nagy modell lassítja vagy összeomlasztja a lapot.** Lásd [Böngészők, eszközök és memória](topic:platforms).

## Tovább

[Elem kijelölése és tulajdonságainak olvasása](topic:inspect-element).
