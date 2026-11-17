---
title: Un mapa no terreo debaixo do modelo
summary: Coloque un mapa de rúas ou unha imaxe aérea no terreo debaixo dun modelo IFC xeorreferenciado, desde teselas de mapa, servizos de mapas ou unha imaxe cun ficheiro de mundo.
keywords: mapa, capas de mapa, mapa base, aérea, satélite, emprazamento, terreo, teselas, xyz, wms, wmts, servizo de mapas, ficheiro de mundo, xeorreferencia, ifcmapconversion, CRS proxectado, epsg, contexto do emprazamento
from: 84e2e9df
---

## O que vai facer

Ver o modelo no seu lugar: o mapa de rúas ou a imaxe aérea do emprazamento no terreo debaixo del.

## Pasos

1. Abra un modelo IFC que leve o seu lugar no mapa (unha conversión de mapa, IfcMapConversion, cun sistema de coordenadas proxectado). Os exportadores escríbena cando se definen as coordenadas do proxecto (punto de levantamento, coordenadas compartidas).
2. Escolla {{ui:Show}} › {{ui:Map layers…}}. O diálogo indica o sistema do modelo, por exemplo EPSG:28356. Un modelo sen conversión de mapa non pode ter capas de mapa: o diálogo díso.
3. Active {{ui:Map layers from the internet}}. Ata entón non se lle pide nada a ningún servidor; cando está activado, os servidores que engada ven a zona ao redor do modelo e o seu enderezo de internet, nunca o modelo.
4. En {{ui:Add a layer}} escolla teselas (un enderezo con `{z}`, `{x}` e `{y}`), un servizo WMS, WMTS ou ArcGIS ({{ui:Get layers}}, e logo escolla unha), ou unha imaxe co seu ficheiro de mundo.
5. Peche o diálogo. O mapa queda no terreo xusto por debaixo do punto máis baixo do modelo, sobre a pegada do modelo e outro tanto ao seu redor.

:::note
O mapa só está na pantalla; non se garda no ficheiro IFC. A lista de capas consérvase neste navegador. Use só servizos de mapas cuxas condicións o permitan.
:::
