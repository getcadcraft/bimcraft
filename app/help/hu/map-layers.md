---
title: Térkép a modell alatt a talajon
summary: Utcatérkép vagy légifelvétel elhelyezése a georeferált IFC-modell alatti talajon, térképcsempékből, térképszolgáltatásokból vagy világfájllal ellátott képből.
keywords: térkép, térképrétegek, alaptérkép, légi, műhold, telephely, talaj, csempék, xyz, wms, wmts, térképszolgáltatás, világfájl, georeferencia, ifcmapconversion, vetített CRS, epsg, telephelyi környezet
from: 84e2e9df
---

## Mit fog csinálni

Lássa a modellt a helyén: a telephely utcatérképe vagy légifelvétele a modell alatt, a talajon.

## Lépések

1. Nyisson meg egy IFC-modellt, amely rendelkezik a helyével a térképen (térképi átalakítás, IfcMapConversion, vetített koordinátarendszerrel). Az exportálók ezt akkor írják, amikor a projekt koordinátái (felmérési pont, közös koordináták) be vannak állítva.
2. Válassza a {{ui:Megjelenítés}} › {{ui:Térképrétegek…}} lehetőséget. A párbeszédpanel megjeleníti a modell rendszerét, például EPSG:28356. Térképi átalakítás nélküli modellhez nem lehet térképréteg: a párbeszédpanel ezt jelzi.
3. Kapcsolja be a {{ui:Térképrétegek az internetről}} opciót. Addig semmit nem kérnek egyetlen szervertől sem; bekapcsolva a hozzáadott szerverek a modell körüli területet és az Ön internetcímét látják, a modelljét soha.
4. A {{ui:Réteg hozzáadása}} részben válasszon csempéket (cím `{z}`, `{x}` és `{y}` jelölőkkel), WMS-, WMTS- vagy ArcGIS-szolgáltatást ({{ui:Rétegek lekérése}}, majd válasszon egyet), vagy világfájllal ellátott képet.
5. Zárja be a párbeszédpanelt. A térkép a modell legalacsonyabb pontja alatt, közvetlenül a talajon fekszik, a modell alaprajzát lefedi, és azon kívül ugyanannyival tovább terjed.

:::note
A térkép csak a képernyőn látszik; nincs mentve az IFC-fájlba. A rétegek listája ebben a böngészőben marad meg. Csak olyan térképszolgáltatást használjon, amelynek a feltételei megengedik.
:::
