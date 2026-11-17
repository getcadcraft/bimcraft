---
title: Karta na terenu ispod modela
summary: Postavite uličnu kartu ili zračnu sliku na teren ispod georeferenciranog IFC modela, iz pločica karte, servisa karte ili slike s world datotekom.
keywords: karta, slojevi karte, podloga, zračni snimak, satelit, lokacija, teren, pločice, xyz, wms, wmts, servis karte, world datoteka, georeferenciranje, ifcmapconversion, projektovani CRS, epsg, kontekst lokacije
from: 84e2e9df
---

## Šta ćete uraditi

Vidite model na njegovom mjestu: uličnu kartu lokacije ili zračnu sliku na terenu ispod njega.

## Koraci

1. Otvorite IFC model koji nosi svoje mjesto na karti (pretvorba karte, IfcMapConversion, s projektovanim koordinatnim sistemom). Programi za izvoz to upisuju kad su koordinate projekta (tačka premjera, zajedničke koordinate) postavljene.
2. Izaberite {{ui:Prikaži}} › {{ui:Slojevi karte…}}. Dijalog navodi sistem modela, na primjer EPSG:28356. Model bez pretvorbe karte ne može imati slojeve karte: dijalog to kaže.
3. Uključite {{ui:Slojevi karte sa interneta}}. Dotle se ništa ne traži ni od jednog servera. Kad je uključeno, servisi koje dodate vide područje oko modela i vašu internet adresu, nikad vaš model.
4. U {{ui:Dodaj sloj}} izaberite pločice (adresa sa `{z}`, `{x}` i `{y}`), WMS, WMTS ili ArcGIS servis ({{ui:Učitaj slojeve}}, pa izaberite jedan), ili sliku s njenom world datotekom.
5. Zatvorite dijalog. Karta leži na terenu tik ispod najniže tačke modela, preko tlocrta modela i još toliko oko njega.

:::note
Karta je samo na ekranu; ne čuva se u IFC datoteci. Lista slojeva čuva se u ovom pretraživaču. Koristite samo servise karte čiji uslovi to dopuštaju.
:::
