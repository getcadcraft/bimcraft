---
title: Zemljevid na tleh pod modelom
summary: Položite cestni zemljevid ali zračni posnetek na tla pod georeferenciran model IFC iz ploščic zemljevida, kartnih storitev ali slike s svetovno datoteko.
keywords: zemljevid, sloji zemljevida, podlaga, zračni posnetek, satelit, lokacija, tla, ploščice, xyz, wms, wmts, kartna storitev, svetovna datoteka, georeferenca, ifcmapconversion, projicirani CRS, epsg, kontekst lokacije
from: 84e2e9df
---

## Kaj boste naredili

Oglejte si model na njegovem mestu: cestni zemljevid ali zračni posnetek lokacije na tleh pod njim.

## Koraki

1. Odprite model IFC, ki nosi svoje mesto na zemljevidu (pretvorbo v karto, IfcMapConversion, s projiciranim koordinatnim sistemom). Izvozniki ga zapišejo, ko so koordinate projekta (geodetska točka, skupne koordinate) nastavljene.
2. Izberite {{ui:Pokaži}} › {{ui:Sloji zemljevida …}}. Pogovorno okno pove sistem modela, na primer EPSG:28356. Model brez pretvorbe v karto ne more imeti slojev zemljevida: pogovorno okno to pove.
3. Vklopite {{ui:Sloji zemljevida z interneta}}. Do takrat se noben strežnik ne sprašuje; ko je vklopljeno, strežniki, ki jih dodate, vidijo območje okoli modela in vaš internetni naslov, nikoli pa vašega modela.
4. V {{ui:Dodaj sloj}} izberite ploščice (naslov s `{z}`, `{x}` in `{y}`), storitev WMS, WMTS ali ArcGIS ({{ui:Pridobi sloje}}, nato izberite enega) ali sliko s svetovno datoteko.
5. Zaprite pogovorno okno. Zemljevid leži na tleh tik pod najnižjo točko modela, čez tlorisni obris modela in še toliko okoli njega.

:::note
Zemljevid je samo na zaslonu; ni shranjen v datoteki IFC. Seznam slojev se hrani v tem brskalniku. Uporabljajte samo kartne storitve, katerih pogoji to dovoljujejo.
:::
