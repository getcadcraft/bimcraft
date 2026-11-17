---
title: Egy teljes projektmappa megnyitása
summary: Mutasson a BimCraftnak egy projektmappát, hogy egyszerre lássa az összes modellt, a biztonsági másolataikat és hivatkozásaikat, és hagyja, hogy a Kezdje itt doboz javasoljon egy fájlt, amellyel érdemes dolgozni.
keywords: mappa, könyvtár, projektmappa, hálózati meghajtó, kiszolgáló, kezdje itt, melyik fájl, biztonsági másolatok, hivatkozások, külső hivatkozások, legutóbbi mappák, mappa húzása
from: 16fbdce2
---

## Mit fog tenni

Nyisson meg egy teljes projektmappát, például azt, amelyet egy munkához kapott, és hagyja, hogy a BimCraft rendezze el: milyen modellek vannak benne, melyek a másolatok, mi mire hivatkozik, mely fájlok sérültek, és melyik fájlt valószínűleg meg akarja nyitni.

Csak az egyes modellkártyákhoz szükséges néhány kilobájt olvasódik be, így hálózati meghajtón vagy szinkronizált felhős mappa is rendben van.

## Lépések

:::chromium
1. Kattintson a bal oldalon a {{ui:Mappa megnyitása}} gombra (vagy az üres képernyő közepén).
2. A megnyíló ablakban válassza ki a projektmappát, és kattintson a **Kiválasztás** gombra (vagy a **Feltöltés** vagy a **Megnyitás** gombra, a rendszertől függően).
3. Amikor a böngésző megkérdezi: „Engedélyezi a webhelynek a fájlok megtekintését?”, kattintson a **Fájlok megtekintése** gombra. Ez csak azt teszi lehetővé, hogy a lap olvassa a mappát; semmi sem töltődik fel.
4. Várjon, amíg az állapotsor számol: „Mappa listázása: … fájl”, majd „Revit-fájlok ellenőrzése: … közül …”.
:::

:::firefox
1. Kattintson a bal oldalon a {{ui:Mappa megnyitása}} gombra (vagy az üres képernyő közepén).
2. A megnyíló ablakban válassza ki a projektmappát, és erősítse meg. A Firefox megkérheti, hogy igazolja: az oldal olvashatja-e a mappa fájljait. Azok továbbra is a számítógépen maradnak.
3. Várjon, amíg az állapotsor ezt írja: „Mappa olvasása: … fájl”, majd „Revit-fájlok ellenőrzése: … közül …”.
:::

:::safari
1. Kattintson a bal oldalon a {{ui:Mappa megnyitása}} gombra (vagy az üres képernyő közepén).
2. A megnyíló ablakban válassza ki a projektmappát, és kattintson a **Feltöltés** gombra. A szó ellenére semmi sem hagyja el a Macet: a fájlok csak a lapnak adódnak át.
3. Várjon, amíg az állapotsor ezt írja: „Mappa olvasása: … fájl”, majd „Revit-fájlok ellenőrzése: … közül …”.
:::

A mappát a {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}} ablakából is **áthúzhatja** az oldalra. Az áthúzott mappa minden böngészőben engedélykérés nélkül nyílik meg.

## Mit kell látnia

A mappajelentés a középső részt tölti ki:

- A mappa neve, a modellek, CAD-rajzok, IFC-modellek és fájlok száma, valamint az összes méret.
- Piros vagy sárga megjegyzések, ha bármely fájl hiányos, vagy ha a mappából hiányzik bármely hivatkozott fájl.
- A {{ui:Kezdje itt}} doboz: a BimCraft által javasolt fájl, az okokkal együtt.
- **Modellek**: modellenként egy sor, a biztonsági másolataik csoportosítva alatta.
- **Kapcsolt és hivatkozott fájlok**, **IFC-modellek**, **CAD-rajzok** és **Félretéve**, ha a mappában van ilyen.

A bal oldali {{ui:Mappa}} panel összegzi a mappát; a **Problémák** a „Nincs” értéket mutatja, ha minden másolat rendben van.

## A Kezdje itt doboz használata

A doboz egy fájlt nevez meg, és megindokolja, például:

- „A mappa legújabb mentett munkája (2025. március 3.).”
- „A *Consultant.rvt* más modellekbe van kapcsolva, így háttérfájl, nem az a fájl, amelyet szerkeszteni kell.”
- „A *Tower.rvt* kézenfekvő választásnak látszik, de sérült; utolsó ép másolata ekkori: …”
- „Ez központi modell: a Revitben nyissa meg a „Create New Local” paranccsal, és a helyi másolaton dolgozzon.”

1. Olvassa el az indokokat.
2. Kattintson a {{ui:Kártyájának megnyitása}} gombra, hogy elolvassa annak a fájlnak a kártyáját, vagy a {{ui:Megjelenítés a listában}} gombra, hogy megtalálja a sorát a **Modellek** között.
3. Mielőtt támaszkodna rá, ellenőrizze azzal, aki legutóbb dolgozott a projekten. A doboz ezt is kimondja: ez csak nevek, dátumok és hivatkozások alapján készült legjobb becslés.

## Fájlok megnyitása a jelentésből

1. Kattintson egy modell nevére a kártyája megnyitásához. A kártya minden hivatkozást ellenőriz a mappával szemben.
2. A visszatéréshez kattintson a {{ui:Vissza}} gombra vagy a mappa nevére a kártya tetején (vagy a bal oldali {{ui:Vissza a mappához}} gombra).
3. Kattintson bármely IFC-fájlra az **IFC-modellek** alatt, hogy 3D-ben nyissa meg.
4. Kattintson bármely DWG- vagy DXF-fájlra a **CAD-rajzok** alatt, hogy 2D-ben nyissa meg. A hozzá tartozó hivatkozott rajzokat és képeket a BimCraft automatikusan megtalálja a mappában.

## Mappa újbóli megnyitása később

:::chromium
A {{ui:Mappa megnyitása}} gombbal vagy húzással megnyitott mappák a bal oldalon a {{ui:Legutóbbi mappák}} alatt jelennek meg. Kattintson a {{ui:Újranyitás}} gombra és a mappa nevére, hogy újra megnyissa anélkül, hogy kiválasztaná. A böngésző újraindítása után a Chrome vagy az Edge még egyszer megkérdezi; a kérdés megszüntetéséhez válassza az „Engedélyezés minden látogatáskor” lehetőséget. A lista csak ebben a böngészőben tárolódik, sehová nem küldi el. A × gombra kattintva felejtse el a mappát.
:::

:::firefox safari
Ez a böngésző nem jegyzi meg a mappákat a látogatások között. Válassza ki újra a mappát a {{ui:Mappa megnyitása}} gombbal, vagy húzza be.
:::

## Gyakori hibák

- **Túl nagy mappa kiválasztása.** 20 000 fájl felett: „Ez a mappa 20 000-nél több fájlt tartalmaz. Válasszon kisebb mappát, például egy projektet.” Válassza a projektmappát, ne az egész meghajtót.
- **Több projekt szülőmappájának kiválasztása.** A {{ui:Kezdje itt}} doboz ekkor projektek között választ. Válasszon ki egy projektet.
- **Úgy tűnik, hogy a BimCraft figyelmen kívül hagyja a Revit saját mappáit.** A `*_backup`, `*_log` és `Revit_temp` mappák karbantartási mappák, és a **Félretéve** alatt szerepelnek, nem olvassa be őket a rendszer.
- **Modell 3D-ben való megnyitását várja a kártyájáról.** A projektfájl csak kártya. Nyissa meg az IFC-exportját.
- **Telefonok és táblagépek.** Sok mobil böngésző egyáltalán nem tud mappát választani. Használjon számítógépet.

Lásd: [Mappa ellenőrzése sérült másolatokra, hiányzó hivatkozásokra és maradványokra](topic:check-folder-health) és [Mappajelentés: szerepkörök, állapotok és hivatkozások](topic:folder-roles).
