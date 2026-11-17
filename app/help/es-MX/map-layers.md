---
title: Un mapa en el terreno bajo el modelo
summary: Coloque un mapa de calles o una imagen aérea en el terreno bajo un modelo IFC georreferenciado, desde teselas de mapa, servicios de mapas o una imagen con un archivo de mundo.
keywords: mapa, capas de mapa, mapa base, aérea, satélite, sitio, terreno, teselas, xyz, wms, wmts, servicio de mapas, archivo de mundo, georreferencia, ifcmapconversion, crs proyectado, epsg, contexto del sitio
from: 84e2e9df
---

## Qué hará

Vea el modelo en su lugar: el mapa de calles o la imagen aérea del sitio en el terreno bajo él.

## Pasos

1. Abra un modelo IFC que contenga su lugar en el mapa (una conversión a mapa, IfcMapConversion, con un sistema de coordenadas proyectado). Los exportadores lo escriben cuando se definen las coordenadas del proyecto (punto de levantamiento, coordenadas compartidas).
2. Elija {{ui:Mostrar}} › {{ui:Capas de mapa…}}. El diálogo indica el sistema del modelo, por ejemplo EPSG:28356. Un modelo sin conversión a mapa no puede tener capas de mapa: el diálogo lo indica.
3. Active {{ui:Capas de mapa de internet}}. Hasta entonces no se le pide nada a ningún servidor; cuando está activada, los servidores que agregue ven el área alrededor del modelo y su dirección de internet, nunca su modelo.
4. En {{ui:Agregar una capa}} elija teselas (una dirección con `{z}`, `{x}` y `{y}`), un servicio WMS, WMTS o ArcGIS ({{ui:Obtener capas}}, y luego elija uno), o una imagen con su archivo de mundo.
5. Cierre el diálogo. El mapa queda en el terreno justo bajo el punto más bajo del modelo, sobre la huella del modelo y un tanto más alrededor.

:::note
El mapa solo está en pantalla; no se guarda en el archivo IFC. La lista de capas se conserva en este navegador. Use solo servicios de mapas cuyas condiciones lo permitan.
:::
