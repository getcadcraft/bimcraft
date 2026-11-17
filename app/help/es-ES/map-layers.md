---
title: Un mapa sobre el terreno bajo el modelo
summary: Coloque un mapa de calles o una imagen aérea sobre el terreno bajo un modelo IFC georreferenciado, a partir de teselas de mapa, servicios de mapas o una imagen con archivo de mundo.
keywords: mapa, capas de mapa, mapa base, aérea, satélite, emplazamiento, terreno, teselas, xyz, wms, wmts, servicio de mapas, archivo de mundo, georreferencia, ifcmapconversion, crs proyectado, epsg, contexto del emplazamiento
from: 84e2e9df
---

## Qué va a hacer

Ver el modelo en su lugar: el mapa de calles o la imagen aérea del emplazamiento, sobre el terreno bajo él.

## Pasos

1. Abra un modelo IFC que lleve su lugar en el mapa (una conversión de mapa, IfcMapConversion, con un sistema de coordenadas proyectado). Los exportadores la escriben cuando se fijan las coordenadas del proyecto (punto topográfico, coordenadas compartidas).
2. Elija {{ui:Mostrar}} › {{ui:Capas de mapa…}}. El diálogo indica el sistema del modelo, por ejemplo EPSG:28356. Un modelo sin conversión de mapa no puede tener capas de mapa: el diálogo lo indica.
3. Active {{ui:Capas de mapa de internet}}. Hasta entonces no se pide nada a ningún servidor; cuando está activado, los servidores que añada ven la zona alrededor del modelo y su dirección de internet, nunca su modelo.
4. En {{ui:Agregar una capa}} elija teselas (una dirección con `{z}`, `{x}` e `{y}`), un servicio WMS, WMTS o ArcGIS ({{ui:Obtener capas}}, y luego elija una), o una imagen con su archivo de mundo (world file).
5. Cierre el diálogo. El mapa queda sobre el terreno, justo bajo el punto más bajo del modelo, cubriendo la huella del modelo y otro tanto a su alrededor.

:::note
El mapa solo se ve en pantalla; no se guarda en el archivo IFC. La lista de capas se guarda en este navegador. Use solo servicios de mapas cuyas condiciones lo permitan.
:::
