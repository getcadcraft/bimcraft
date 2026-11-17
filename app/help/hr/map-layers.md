---
title: Karta na terenu ispod modela
summary: Položite kartu ulica ili zračnu snimku na teren ispod georeferenciranog IFC modela, iz kartografskih pločica, kartografskih servisa ili slike sa svojom world datotekom.
keywords: karta, slojevi karte, podloga, zračna snimka, satelit, lokacija, teren, pločice, xyz, wms, wmts, kartografski servis, world file, georeferenciranje, ifcmapconversion, projekcijski CRS, epsg, kontekst lokacije
from: 84e2e9df
---

## Što ćete raditi

Vidite model na njegovu mjestu: kartu ulica ili zračnu snimku lokacije na terenu ispod njega.

## Koraci

1. Otvorite IFC model koji nosi svoje mjesto na karti (pretvorbu karte, IfcMapConversion, s projiciranim koordinatnim sustavom). Izvoznici je zapisuju kad su koordinate projekta (točka premjera, zajedničke koordinate) postavljene.
2. Odaberite {{ui:Prikaži}} › {{ui:Slojevi karte…}}. Dijaloški okvir navodi sustav modela, na primjer EPSG:28356. Model bez pretvorbe karte ne može imati slojeve karte: dijaloški okvir to kaže.
3. Uključite {{ui:Slojevi karte s interneta}}. Dok to nije uključeno, nijedan poslužitelj ništa ne traži; kad je uključeno, poslužitelji koje dodate vide područje oko modela i vašu internetsku adresu, nikad vaš model.
4. U {{ui:Dodaj sloj}} odaberite pločice (adresu s `{z}`, `{x}` i `{y}`), WMS, WMTS ili ArcGIS servis ({{ui:Dohvati slojeve}}, zatim odaberite jedan) ili sliku sa svojom world datotekom.
5. Zatvorite dijaloški okvir. Karta leži na terenu odmah ispod najniže točke modela, preko tlocrtne površine modela i jednako toliko oko nje.

:::note
Karta je samo na zaslonu; ne sprema se u IFC datoteku. Popis slojeva čuva se u ovom pregledniku. Koristite samo kartografske servise čiji uvjeti to dopuštaju.
:::
