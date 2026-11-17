---
title: Një hartë në tokë nën model
summary: Vendos një hartë rruge ose figurë ajrore në tokë nën një model IFC të georeferuar, nga pllaka hartash, shërbime hartash ose një figurë me skedar bote.
keywords: hartë, shtresa harte, hartë bazë, ajrore, satelitore, vend, tokë, pllaka, xyz, wms, wmts, shërbim hartë, skedar bote, georeferencë, ifcmapconversion, crs i projektuar, epsg, konteksti i vendit
from: 84e2e9df
---

## Çfarë do të bësh

Shiko modelin në vendin e vet: harta rrugore ose figura ajrore e vendit nën të, në tokë.

## Hapat

1. Hap një model IFC që mban vendin e vet në hartë (një konvertim hartës, IfcMapConversion, me një sistem koordinatash të projektuar). Eksportuesit e shkruajnë kur koordinatat e projektit (pika e rilevimit, koordinatat e përbashkëta) janë caktuar.
2. Zgjidh {{ui:Shfaq}} › {{ui:Shtresat e hartës…}}. Dialogu thotë sistemin e modelit, për shembull EPSG:28356. Një model pa konvertim hartës nuk mund të ketë shtresa harte: dialogu e thotë këtë.
3. Ndiz {{ui:Shtresat e hartës nga interneti}}. Deri atëherë asnjë server nuk pyetet për asgjë; kur është i ndezur, serverat që shton shohin zonën rreth modelit dhe adresën tënde të internetit, kurrë modelin tënd.
4. Te {{ui:Shto një shtresë}} zgjidh pllaka (një adresë me `{z}`, `{x}` dhe `{y}`), një shërbim WMS, WMTS ose ArcGIS ({{ui:Merr shtresat}}, pastaj zgjidh një), ose një figurë me skedarin e saj të botës.
5. Mbyll dialogun. Harta shtrihet në tokë, pak nën pikën më të ulët të modelit, mbi gjurmën e modelit dhe aq edhe rreth tij.

:::note
Harta është vetëm në ekran; nuk ruhet në skedarin IFC. Lista e shtresave mbahet në këtë shfletues. Përdor vetëm shërbime hartash të cilave kushtet u lejojnë këtë.
:::
