---
title: Mapa na zemi pod modelom
summary: Položte uličnú mapu alebo leteckú snímku na zem pod georeferencovaným modelom IFC z mapových dlaždíc, mapových služieb alebo obrázka so svetovým súborom.
keywords: mapa, mapové hladiny, podkladová mapa, letecká, satelit, lokalita, zem, dlaždice, xyz, wms, wmts, mapová služba, svetový súbor, georeferencia, ifcmapconversion, projektovaný CRS, epsg, kontext lokality
from: 84e2e9df
---

## Čo urobíte

Pozrite si model na jeho mieste: uličnú mapu lokality alebo leteckú snímku na zemi pod ním.

## Kroky

1. Otvorte model IFC, ktorý nesie svoje miesto na mape (prevod na mapu, IfcMapConversion, s projektovaným súradnicovým systémom). Exportéri ho zapíšu, keď sú nastavené súradnice projektu (bod zamerania, spoločné súradnice).
2. Vyberte {{ui:Zobraziť}} › {{ui:Mapové hladiny…}}. Dialóg uvádza systém modelu, napríklad EPSG:28356. Model bez prevodu na mapu nemôže mať mapové hladiny: dialóg to oznámi.
3. Zapnite {{ui:Mapové hladiny z internetu}}. Dovtedy sa nič nepýta od žiadneho servera. Keď je zapnuté, servery, ktoré pridáte, uvidia oblasť okolo modelu a vašu internetovú adresu, nikdy nie váš model.
4. V {{ui:Pridať hladinu}} vyberte dlaždice (adresa s `{z}`, `{x}` a `{y}`), službu WMS, WMTS alebo ArcGIS ({{ui:Získať hladiny}}, potom vyberte jednu), alebo obrázok so svojím svetovým súborom.
5. Zatvorte dialóg. Mapa leží na zemi tesne pod najnižším bodom modelu, cez pôdorysnú plochu modelu a ešte toľko okolo neho.

:::note
Mapa je len na obrazovke; nie je uložená v súbore IFC. Zoznam hladín sa uchováva v tomto prehliadači. Používajte len mapové služby, ktorých podmienky to dovoľujú.
:::
