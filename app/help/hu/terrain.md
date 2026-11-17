---
title: A telek, az épület tereplépcsője és a burkolat
summary: Vigye be a terepet a modellbe felmérési pontokból, szintvonalakból, LAS / LAZ szkennelésből, GeoTIFF-ből, LandXML felületből (CivilCraft-ból) vagy néhány szintmagasság-pontból; vágja bele a ház épülettereplépcsőjét a lejtőkkel és a bevágás / feltöltés értékekkel; helyezze rá a behajtókat, járdákat és teraszokat; adja át a CivilCraft-nak LandXML-ként.
keywords: terep, talaj, telek, topográfia, felmérés, pontok, PNEZD, szintvonalak, LAS, LAZ, LiDAR, GeoTIFF, DEM, magasság, szintmagasság-pont, terepszint, tereprendezés, tereplépcső, épülettereplépcső, bevágás, feltöltés, földmunka, lejtés, lejtő, behajtó, járda, terasz, burkolat, LandXML, CivilCraft
from: 208298d6
---

## Mit fog csinálni

Helyezze el a házat a telkén. A terep a modell részévé válik: 3D-ben látszik, metszetekben és homlokzatokon át van vágva, az alaprajzon szintvonalakkal. A ház alatt épülettereplépcső készül a terepbe, a behajtók és a járdák ehhez igazodnak, az alapok pedig vele együtt lépcsőznek.

## A terep behozatala

1. Nyissa meg a {{ui:Build}} menüt, majd válassza ezt: {{ui:Terep}}.
2. Vagy:
   - **Felmérési fájl megnyitása…**: felmérési pontok (PNEZD, PENZD vagy egyszerű keleti koordináta, északi koordináta, magasság; vesszővel, tabulátorral vagy szóközzel elválasztva), szintvonalak DXF vagy DWG fájlban (polivonalak a magasságukon, 3D polivonalak), LAS vagy LAZ szkennelés (a talajpontok megmaradnak, nagyjából négyzetméterenként egy pontra ritkítva), GeoTIFF vagy ASCII magassági rács, vagy egy **LandXML** felület, például amit a CivilCraft exportál (a saját pontjai és háromszögei megmaradnak; ha a fájlban több felület van, a BimCraft megkérdezi, melyik a terep; mértékegységei a fájlból jönnek). Előbb válassza ki a fájl mértékegységét (a LandXML a sajátját mondja meg).
   - Vagy adjon meg egy **Szintmagasság-pont** értéket (a szint padlójától mérve, így a `-1'` egy láb a padló alatt), kattintson a pontokra az alaprajzon, változtassa meg a magasságot, és kattintson további pontokra, majd kattintson a **Terep készítése** gombra. Az induláshoz három pont elég.

A modelltől távoli felmérési koordinátákat (állami vetület, UTM) a házra helyezi át a BimCraft, a magasságokat pedig úgy állítja be, hogy a ház alatti terep körülbelül 8" mélyen legyen az első emelet alatt. A **Tulajdonságok** panelen a **Terep emelése** bármekkora értékkel korrigálja ezt.

## Az épület tereplépcsője

1. Válassza ezt: {{ui:Épület tereplépcsője}}.
2. Állítsa be a ház körüli **Margó** értékét, azt, hogy a **tereplépcső mennyivel van a padló alatt** (8" egy lemezpadló alatt, többet egy mászótér alatt), és a **Lejtők** értékét a meglévő terepig (`2:1` = két láb kifelé minden egy láb emelkedésért vagy süllyedésért).
3. Kattintson a ház belsejében.

A terep a ház alatt és a margóig kisimul, majd felfelé lejt a domboldalba (bevágás), és lefelé a mélyebb oldal felé (feltöltés), amíg el nem éri a meglévő terepet. A terep és a tereplépcső **Tulajdonságok** panelje adja meg a bevágás és a feltöltés térfogatát. Ha a falakat áthelyezi, a tereplépcső követi őket.

## Behajtók, járdák és teraszok

Válassza ezt: {{ui:Burkolat}}, majd jelölje ki a **Járda**, a **Behajtó** vagy a **Terasz** elemet, és kattintson a sarkokra. A befejezéshez kattintson újra az első sarokra, kattintson duplán, vagy nyomja meg az {{key:Enter}} billentyűt. A burkolat a kész terepszinthez igazodik. Fajtáját vagy vastagságát a **Tulajdonságok** panelen módosítsa.

## Az alapok a terepszinthez igazodnak

Ha a terep a modellben van, az alapfalak és a mászótér alapozása követi azt: minden fal mentén az alap az utcai terep alatt a saját mélységében marad, és ahol a terep lejt, egész 8"-os lépcsőkben lép lejjebb (lásd: [Alapozás a falak alatt](topic:foundations)).

## Átadás a CivilCraft-nak

A **LandXML a CivilCraft-hoz** (a Terep sorában vagy a terep **Tulajdonságok** panelén) a meglévő terepet és a kész terepszintet LandXML fájlként tölti le. Nyissa meg a CivilCraft-ban a valódi tereprendezéshez, vízelvezetéshez és földmunkához.

## Jó tudni

- A terephez IFC4 modell kell, mint minden új épülethez.
- A szintvonalak a terepszint alaprajzán jelennek meg a terep **Tulajdonságok** panelén beállított közös távolsággal; minden ötödik vastagabb.
- A terep IFC terepelemként mentődik (zárt, háromszögelt felület, így a metszetek elvágják); a tereplépcső és a burkolat ezzel együtt mentődik. A terep törlésével újrakezdheti; a tereplépcső és a burkolat vele együtt törlődik.
