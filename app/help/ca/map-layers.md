---
title: Un mapa sobre el terreny sota el model
summary: Col·loca un mapa de carrers o una imatge aèria sobre el terreny sota un model IFC georeferenciat, a partir de rajoles de mapa, serveis de mapes o una imatge amb un fitxer de món.
keywords: mapa, capes de mapa, mapa base, aeri, satèl·lit, emplaçament, terreny, rajoles, xyz, wms, wmts, servei de mapes, fitxer de món, georeferència, ifcmapconversion, CRS projectat, epsg, context de l'emplaçament
from: 84e2e9df
---

## Què faràs

Veure el model al seu lloc: el mapa de carrers o la imatge aèria de l'emplaçament sobre el terreny sota ell.

## Passos

1. Obre un model IFC que porti el seu lloc al mapa (una conversió de mapa, IfcMapConversion, amb un sistema de coordenades projectat). Els exportadors ho escriuen quan s'estableixen les coordenades del projecte (punt topogràfic, coordenades compartides).
2. Tria {{ui:Mostra}} › {{ui:Capes de mapa…}}. El diàleg indica el sistema del model, per exemple EPSG:28356. Un model sense conversió de mapa no pot tenir capes de mapa: el diàleg ho indica.
3. Activa {{ui:Capes de mapa des d'internet}}. Fins llavors no es demana res a cap servidor; quan està activat, els servidors que afegeixes veuen l'àrea al voltant del model i la teva adreça d'internet, mai el model.
4. A {{ui:Afegeix una capa}}, tria rajoles (una adreça amb `{z}`, `{x}` i `{y}`), un servei WMS, WMTS o ArcGIS ({{ui:Obté les capes}}, i després tria'n una), o una imatge amb el seu fitxer de món.
5. Tanca el diàleg. El mapa es col·loca al terreny just sota el punt més baix del model, sobre la petjada del model i altre tant al seu voltant.

:::note
El mapa només es veu a la pantalla; no es desa al fitxer IFC. La llista de capes es guarda en aquest navegador. Usa només serveis de mapes les condicions dels quals permetin aquest ús.
:::
