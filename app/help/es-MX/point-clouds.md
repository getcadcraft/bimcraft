---
title: Mostrar una nube de puntos junto al modelo
summary: Abra un escaneo láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) en la vista 3D, por sí solo o con un modelo IFC, colórelo, corte una franja delgada a través de él, mida hasta sus puntos y envíelo a la aplicación de dibujo para trazar las líneas tal como se construyó.
keywords: nube de puntos, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tal como se construyó, levantamiento, registro, corte, corte en planta, referencia a objetos, medir, trazar, escaneo a BIM
from: d0a3e740
---

## Qué hará

Vea un escaneo láser de un edificio junto a su modelo: compruebe que lo construido coincide con el diseño, mida entre puntos escaneados y corte una franja delgada para leer muros, puertas y columnas.

## Pasos

1. Abra la nube con {{ui:Abierta}} un archivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz`, o suéltelo en la página (consulte el tema sobre formatos de nube de puntos para saber qué aporta cada uno y qué exportar del software propio de un escáner). Con un modelo abierto, la nube se une al modelo en la vista 3D; abrir una nube nunca cierra el modelo ni sus cambios sin guardar. Sin modelo, la nube se abre por sí sola.
2. La barra de la nube aparece debajo de la barra de herramientas. Indica cuántos puntos se muestran y cuántos tiene el archivo.
3. Elija {{ui:Color por}}: los colores propios del archivo (cuando el escáner los guardó), {{ui:Alto}}, {{ui:Intensidad}}, {{ui:Clase}} (clases LiDAR como suelo, vegetación y edificio) o {{ui:Un solo color}}. {{ui:Tamaño}} hace los puntos más grandes o más pequeños.
4. Haga clic en {{ui:Planta}} bajo {{ui:Corte}} para conservar solo una franja delgada de 1.2 m por encima del punto más bajo, vista desde arriba: muros, vanos de puerta y columnas se leen como una planta. {{ui:Frontal}} y {{ui:Lateral}} cortan franjas verticales para alzados y secciones. Mueva la franja con {{ui:En}} y cambie {{ui:Espesor}} (metros). {{ui:Desactivado}} vuelve a mostrar toda la nube.
5. Haga clic en {{ui:Medir}} en la barra de herramientas. El puntero se ajusta a los puntos de la nube (la etiqueta dice "nube de puntos"), así que puede medir de muro a muro en el corte, o desde un elemento del modelo hasta el escaneo. Una esquina o arista del modelo que esté al alcance sigue teniendo prioridad.
6. Con {{ui:Medir}} › {{ui:Ubicación}}, un punto de la nube da su latitud y longitud según el sistema de coordenadas propio de la nube, cuando el archivo lo indica.
7. {{ui:Ocultar}} oculta la nube por un momento; {{ui:Quitar}} la elimina. {{ui:Mostrar}} › {{ui:Nube de puntos}} oculta o muestra la barra.

## Dónde va la nube

{{ui:Colocar}} en la barra indica cómo se alinea la nube con el modelo:

- **Coordenadas del modelo**: los números de la nube son los del propio modelo (un escaneo registrado con las coordenadas del diseño).
- **Coordenadas de mapa**: el modelo tiene una conversión de mapa (IfcMapConversion) y la nube está en el mismo sistema proyectado: la nube se coloca a través de ella. Si los dos nombran sistemas distintos, la línea de estado lo indica.
- **Centrada en el modelo**: cuando ninguna de las dos la ubica cerca del modelo, su centro se coloca en el centro del modelo y su punto más bajo en el piso del modelo. Elija otra opción para cambiarlo.

Cuando el archivo no indica sus unidades, BimCraft lee metros y ofrece {{ui:Unidades}} en la barra.

## Trazar las líneas tal como se construyó

Haga clic en {{ui:Trazar en CadCraft}} para enviar la nube a la aplicación de dibujo en una pestaña nueva. Se abre ahí bajo el dibujo, donde un corte en planta y la referencia a objetos le permiten dibujar los muros sobre el escaneo. Consulte el tema de CadCraft sobre nubes de puntos.

## Cuántos puntos

Un escaneo puede tener cientos de millones de puntos. BimCraft lee cada punto una vez y conserva una parte uniforme para dibujar: {{ui:Mostrar}} en la barra define cuántos (1, 2, 5 o 10 millones). Más puntos necesitan más memoria y una tarjeta gráfica más rápida. Los conteos por clase LiDAR se hacen sobre todos los puntos del archivo.

:::note
Los archivos se leen en este equipo; no se sube nada. Se leen LAS 1.0–1.4 y LAZ (archivos LAZ de hasta 1 GB, mantenidos en memoria mientras se leen); archivos E57 de hasta 6 millones de puntos y 512 MB por ahora (para escaneos más grandes, exporte LAS o LAZ); PLY, PCD y PTX completos; las nubes de texto son `x y z`, con las columnas de color (`r g b`) e intensidad cuando están presentes.
:::

## Varios escaneos

Los escaneos tomados desde posiciones distintas pueden registrarse en un solo marco, refinarse con ICP y exportarse como un solo LAS o E57: consulte [Registrar varios escaneos en uno](topic:register-scans).
