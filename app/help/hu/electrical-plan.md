---
title: Az elektromos alaprajz
summary: Helyezzen el dugaljakat, kapcsolókat, lámpákat, érzékelőket, elosztódobozokat és elosztókat az alaprajzon a CadCraft Elektromos bővítményének azonos szimbólumaival, kapcsolja össze a kapcsolókat a általuk bekapcsolt lámpákkal, és sorolja fel az eszközöket és áramköröket a kimutatásokban.
keywords: elektromos, elektromos alaprajz, dugalj, konnektor, duplex, kapcsoló, váltókapcsoló, fényerőszabályzó, lámpa, mennyezeti lámpa, süllyesztett lámpa, spot lámpa, mozgásérzékelő, elosztódoboz, elosztó, elosztótábla, áramkör, terhelés, watt, amper, kapcsolóvezeték, eszközkimutatás, elosztókimutatás
from: f7de1947
---

## Mit fog csinálni

Rajzolja meg a ház elektromos alaprajzát a modellben: dugaljakat, kapcsolókat és elosztókat a falakra, lámpákat és érzékelőket a mennyezetre. Minden eszköz valós elektromos elem az IFC-fájlban, a címkéjével, áramkörével és terhelésével, a kapcsolók pedig emlékeznek arra, mely lámpákat kapcsolják.

## Eszközök elhelyezése

1. Egy szinten nyissa meg a {{ui:Build}} lapot, és válassza az {{ui:Electrical}} elemet.
2. Válassza ki az eszközt: dugaljak (áram, adat, telefon, hang-kép), kapcsolók és érzékelők (termosztát és időzítő is), lámpák, detektorok és riasztók, elosztódoboz, elosztó vagy alelosztó.
3. Írja be az **Áramkör** mezőt, ha ismeri (bármilyen név: 1, 2, A-3). Hagyja üresen a **Szerelési magasság** mezőt, ha az adott eszköz szokásos magasságát szeretné.
4. Kattintson az alaprajzra. A dugaljak, kapcsolók és elosztók a legközelebbi fal síkjára kerülnek, a helyiség felé nézve; a lámpák, érzékelők és elosztódobozok oda kerülnek a mennyezetre, ahová kattintott.

Az eszközök elhelyezéskor kapnak címkét: **R** a dugaljakra, **S** a kapcsolókra, **L** a lámpákra, **M** a mozgásérzékelőkre, **J** az elosztódobozokra, **P** az elosztókra. A falon lévő eszközök a fallal együtt mozognak, ha a falat áthelyezi.

Inkább képek alapján keres? A {{ui:Build}} lapról nyissa meg a **Szimbólumpalettát**, ahol névvel találhatja meg az eszközt, megjelölheti a gyakran használtakat csillaggal, és egyetlen kattintással elhelyezheti: lásd [A szimbólumpaletta](topic:symbol-palette).

## Kapcsolók összekötése a lámpákkal

1. Válasszon ki egy kapcsolót (vagy egy mozgásérzékelőt), és kattintson a **Fények összekapcsolása** gombra a **Tulajdonságok** panelen.
2. Kattintson minden olyan lámpára, amelyet kapcsol. Az összekapcsolt lámpára újra kattintva szüntesse meg a kapcsolatot.
3. Nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a **Kész** gombra.

Az alaprajz szaggatott görbével köti össze a kapcsolót a hozzá tartozó lámpákkal. Egy lámpa **Tulajdonságok** panelje mutatja, mely kapcsolók kapcsolják.

## A helyiség, amelyben az eszköz áll

Minden eszköz tudja, melyik helyiségben áll. A falon lévő eszköz abban a helyiségben van, amelyre néz; a mennyezeti eszköz abban, amelynek a mennyezetén van. A **Tulajdonságok** panelen a **Helyiség** látszik, az **Elektromos eszközök** kimutatásban pedig van egy **Helyiség** oszlop (szám és név, például 101 Konyha).

Ez naprakész marad: ha átnevezi vagy átszámozza a helyiséget, áthelyezi az eszközt vagy a falat, a helyiség ugyanabban a lépésben követi a változást. Az épület külső felületén lévő eszköz, vagy olyan térben, amely nem helyiség, azt jelzi, hogy nincs helyiségben.

A helyiség az IFC-fájlba is bekerül, az eszköz `CadCraft_Location` tulajdonságkészletébe (Room, RoomNumber, RoomName), így a keresés, a tulajdonság szerinti színezés és a címkekimutatás, valamint más program is használhatja. Az alaprajzi szimbólumok és a szimbólumhoz kapcsolt elemek ugyanezt a készletet kapják; lásd: [Szimbólumpaletta](topic:symbol-palette).

## Hagyja, hogy az asszisztense elhelyezze őket

Ha csatlakoztatott asszisztens van (Beállítások › Asszisztensek, módosítások engedélyezésével), szavakkal is kérhet eszközöket, például: „helyezzen el dupla dugaljat 2 m-enként a nappali falai mentén, 300 mm magasan, a 3. áramkörön”, vagy „adjon hozzá mennyezeti lámpát a kapcsolójával az ajtó mellé”.

Az asszisztens öt eszközt használ: `devices_add`, `device_change`, `lights_set`, `devices_delete` és `devices_list`. Ugyanazokat az eszközöket hozzák létre, mint az {{ui:Electrical}} eszköz, ugyanazokon a falakon, azonos címkékkel, áramkörökkel, terhelésekkel és magassággal, és minden hívás egyetlen visszavonási lépés.

Az eszköz soha nem kaphat olyan típust, amely az {{ui:Electrical}} eszköznek nincs: az ismeretlen típust az asszisztens visszautasítja, és megkapja a listát. A dugaljnak vagy kapcsolónak a falfelülettől legfeljebb 600 mm-re kell állnia, mint kattintásnál, különben a hívás visszautasításra kerül, és semmi sem kerül elhelyezésre. Az alapértelmezett magasságok milliméterben: 300 a dugaljaknál, 1100 a kapcsolóknál; a mennyezeti eszköz a mennyezetről lóg.

## Módosítás és listázás

Válasszon ki egy eszközt a címkéjének, áramkörének, terhelésének (watt) és szerelési magasságának módosításához. Több eszköz kijelölésével egyszerre mindet egy áramkörre helyezheti. Egy eszköz eltávolításához nyomja meg a {{key:Delete}} billentyűt; a törölt lámpa lekerül a kapcsolóiról.

A {{ui:Schedules}} lapon válassza az **Elektromos eszközök** kimutatást, amely minden eszközt mutat a szintjével, áramkörével, terhelésével, magasságával és azokkal a lámpákkal, amelyeket az adott kapcsoló kapcsol; vagy az **Áramkörök** kimutatást, amely minden áramkör eszközeit, összes terhelését és áramerősségét mutatja. Mindkettő megtalálható a rajzcsomag kimutatásrajzlapján is; lásd: [Homlokzatok, metszetek és rajzlapok](topic:sheets).

:::note
A szerelési magasságok és terhelések tervezési alapértékek (16" magas dugalj és 200 W, 48" magasan lévő kapcsoló, 60 W-os mennyezeti lámpa), nem tervek: a villanyszerelő vagy a mérnök méretezi az áramköröket, és ellenőrzi a szabványnak való megfelelést.
:::

:::tip
A szimbólumok megegyeznek azokkal, amelyeket a CadCraft Elektromos bővítménye rajzol a szerelési tervekre, így bármelyik alkalmazás terve azonosan olvasható.
:::
