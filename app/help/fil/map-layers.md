---
title: Isang mapa sa lupa sa ilalim ng model
summary: Ilatag ang street map o aerial na larawan sa lupa sa ilalim ng georeferenced IFC model, mula sa map tiles, map service o larawang may world file.
keywords: map, map layers, basemap, aerial, satellite, site, ground, tiles, xyz, wms, wmts, map service, world file, georeference, ifcmapconversion, projected crs, epsg, site context
from: 84e2e9df
---

## Ano ang gagawin mo

Tingnan ang model sa lugar nito: ang street map o aerial na larawan ng site sa lupa sa ilalim nito.

## Mga hakbang

1. Magbukas ng IFC model na may dalang lugar nito sa mapa (isang map conversion, IfcMapConversion, na may projected coordinate system). Isinusulat ito ng mga exporter kapag nakatakda ang mga coordinate ng project (survey point, shared coordinates).
2. Piliin ang {{ui:Ipakita}} › {{ui:Map layers…}}. Sinasabi ng dialog ang sistema ng model, halimbawa EPSG:28356. Ang model na walang map conversion ay hindi maaaring magkaroon ng map layer: sinasabi iyon ng dialog.
3. I-on ang {{ui:Map layers mula sa internet}}. Hanggang doon, walang hinihinging anuman sa kahit anong server; kapag naka-on, ang mga server na idinagdag mo ay makakakita ng lugar sa paligid ng model at ng internet address mo, hindi kailanman ng model mo.
4. Sa {{ui:Magdagdag ng layer}}, pumili ng tiles (address na may `{z}`, `{x}` at `{y}`), WMS, WMTS o ArcGIS service ({{ui:Kunin ang layers}}, saka pumili ng isa), o larawan kasama ang world file nito.
5. Isara ang dialog. Nakalatag ang mapa sa lupa, bahagyang sa ibaba ng pinakamababang punto ng model, sa ibabaw ng footprint ng model at ganoon din kalayo sa paligid nito.

:::note
Nasa screen lamang ang mapa; hindi ito sine-save sa IFC file. Nananatili sa browser na ito ang listahan ng mga layer. Gumamit lamang ng map service na pinapayagan ng mga tuntunin nito.
:::
