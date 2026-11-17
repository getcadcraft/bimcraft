---
title: Építőelemek mozgatása, másolása, igazítása és elosztása
summary: Falak, födémek, oszlopok és elhelyezett elemek mozgatása alappont és második pont vagy begépelt távolság szerint, másolás közben, valamint egyenletes igazítás vagy elosztás az alaprajzon vagy 3D-s kijelölésből.
keywords: mozgatás, másolás, igazítás, elosztás, térköz, eltolás, alappont, elmozdulás, falak, oszlopok, födémek, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Amit el fog végezni

Mozgasson egy falat, egy oszlopot, egy födémet vagy egy elhelyezett könyvtári elemet új helyre, készítsen róla másolatokat, vagy rendezzen sorba többet anélkül, hogy újra rajzolná őket.

## Nevek és billentyűk

A parancsok neve {{ui:Mozgatás}}, {{ui:Igazítás}} és {{ui:Elosztás}}, és a parancssorba beírhatja a `MOVE`, `ALIGN` és `DISTRIBUTE` szavakat, ahogy a CadCraft rajzolóalkalmazásban. Egy különbség van: a BimCraftban az {{key:M}} a Mérés, ezért a mozgatásnak saját billentyűje van: {{key:Shift+M}}. Az eszközök a {{ui:Build}} menüben vannak.

## Mozgatás

1. Válassza ki, mit mozgasson, az alaprajzon vagy a 3D nézetben. A falak, födémek, oszlopok és elhelyezett könyvtári elemek egy kijelölésben is mehetnek.
2. Nyomja meg a {{key:Shift+M}} billentyűt, vagy válassza a {{ui:Mozgatás}} lehetőséget.
3. Kattintson egy alappontot, majd egy második pontot. Vagy az alappont után gépeljen be egy távolságot, és nyomja meg az {{key:Enter}} billentyűt: az elem az alappontból a mutató irányába megy. Megadhatja `dx,dy` (vagy `@dx,dy`) vagy `hossz<szög` alakban is.
4. Nyomja meg a {{key:C}} billentyűt a {{ui:Másolás}} bekapcsolásához: ekkor minden mozgatás másolatot készít, és a következőre is készen áll. Az {{key:Esc}} billentyű leállítja.
A két pont a 3D nézetben is kattintható: a Mozgatás bekapcsolt állapotában a mutató a szint padlómagasságával találkozik, így a kattintás az alaprajz egy pontja lesz. Tartsa lenyomva a {{key:Shift}} billentyűt a kattintáskor, ha más elemet szeretne kijelölni. Használhat alaprajzi, felülnézeti, elölnézeti vagy oldalnézeti nézetet tetszés szerint: a pontok mindig azon a szinten maradnak.

A fal magával viszi az ajtóit és ablakait. A megrajzolt födém magával viszi a nyílásait. A helyiségek, valamint a falakat követő födémek és mennyezetek frissülnek. A mozgatott falhoz csatlakozó falak a helyükön maradnak.

Minden mozgatás egy módosítás: egy {{key:Mod+Z}} visszavonja, és eljut mindenkihez egy Live TeamWork munkamenetben. Egy elhelyezett könyvtári elem nem másolható így; használja a {{ui:Szerkesztés}} › {{ui:Másolás}} és {{ui:Beillesztés}} lehetőséget.

## Igazítás

Jelöljön ki két vagy több elemet, válassza az {{ui:Igazítás}} lehetőséget, majd egy oldalt (bal, közép, jobb, felső, középső vagy alsó), és azt, amihez igazít: a kijelölt halmazhoz, az első kijelölthöz, az utolsó kijelölthöz vagy egy kattintott ponthoz. Az {{ui:Igazítás}} gombot a sávban nyomja meg.

## Elosztás

Jelöljön ki három vagy több elemet, válassza az {{ui:Elosztás}} lehetőséget, majd egy irányt (vízszintesen vagy függőlegesen) és a távolságot: egyenlő hézagok közöttük vagy egyenlő középpontok. A két szélső elem a helyén marad.

Az igazítás vagy elosztás által mozgatott falak megtartják csatlakozásaikat, a mozgatásnál megszokott módon: a mozgatott falhoz csatlakozó fal a saját vonalán csúszva tartja a végét, a hozzá ütköző válaszfalak vele együtt mozognak, és két csatlakozó, mindkettő mozgatott fal a sarkát ott tartja, ahol az új vonalaik találkoznak. A helyiségek zártak maradnak. Ez egy lépés a **Módosítások** között.
