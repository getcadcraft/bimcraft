---
title: Karta na terenu ispod modela
summary: Postavite uličnu kartu ili snimak iz vazduha na teren ispod georeferenciranog IFC modela, iz pločica karte, servisa karte ili slike sa svetskom datotekom.
keywords: karta, slojevi karte, osnovna karta, iz vazduha, satelit, lokacija, teren, pločice, xyz, wms, wmts, servis karte, svetska datoteka, georeferenca, ifcmapconversion, projektovani koordinatni sistem, epsg, kontekst lokacije
from: 84e2e9df
---

## Šta ćete uraditi

Vidite model na njegovom mestu: ulična karta lokacije ili snimak iz vazduha na terenu ispod njega.

## Koraci

1. Otvorite IFC model koji nosi svoje mesto na karti (konverziju karte, IfcMapConversion, sa projektovanim koordinatnim sistemom). Izvoznici je upisuju kada su koordinate projekta (geodetska tačka, zajedničke koordinate) postavljene.
2. Izaberite {{ui:Prikaži}} › {{ui:Slojevi karte…}}. Dijalog kaže sistem modela, na primer EPSG:28356. Model bez konverzije karte ne može imati slojeve karte, a dijalog to kaže.
3. Uključite {{ui:Slojevi karte sa interneta}}. Dok to nije uključeno, nijedan server se ništa ne pita. Kada je uključeno, serveri koje dodate vide oblast oko modela i vašu internet adresu, nikad model.
4. U {{ui:Dodaj sloj}} izaberite pločice (adresu sa `{z}`, `{x}` i `{y}`), WMS, WMTS ili ArcGIS servis ({{ui:Učitaj slojeve}}, pa izaberite jedan), ili sliku sa njenom svetskom datotekom.
5. Zatvorite dijalog. Karta leži na terenu tik ispod najniže tačke modela, preko tlocrta modela i još toliko oko njega.

:::note
Karta je samo na ekranu; ne čuva se u IFC datoteci. Spisak slojeva se čuva u ovom pregledaču. Koristite samo servise karata čiji uslovi to dozvoljavaju.
:::
