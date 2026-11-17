---
title: Mostrar una nube de puntos junto al modelo
summary: Abra un escaneo láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) en la vista 3D por sí solo o con un modelo IFC, colórelo, corte una sección fina a través de él, mida hasta sus puntos y envíelo a la aplicación de dibujo para trazar las líneas tal como se construyó.
keywords: nube de puntos, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tal como construido, levantamiento, registro, sección, corte de planta, ajustar, medir, trazar, escaneo a BIM
from: d0a3e740
---

## Qué va a hacer

Vea un escaneo láser de un edificio junto a su modelo: compruebe que lo construido coincide con el diseño, mida entre puntos escaneados y corte una sección fina para leer muros, puertas y pilares.

## Pasos

1. Abra la nube con {{ui:Open}} para un archivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz`, o arrástrela a la página (vea el tema sobre formatos de nube de puntos para saber qué aporta cada uno y qué exportar desde el software propio de un escáner). Con un modelo abierto, la nube se une al modelo en la vista 3D; abrir una nube nunca cierra el modelo ni sus cambios sin guardar. Sin modelo, la nube se abre por sí sola.
2. Aparece la barra de la nube bajo la barra de herramientas. Indica cuántos puntos se muestran y cuántos tiene el archivo.
3. Elija {{ui:Color by}}: los colores propios del archivo (cuando el escáner los guardó), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (clases LiDAR como suelo, vegetación y edificio) o {{ui:One color}}. {{ui:Size}} hace los puntos más grandes o más pequeños.
4. Pulse {{ui:Plan}} bajo {{ui:Slice}} para conservar solo una banda fina de 1.2 m por encima del punto más bajo, vista desde arriba: los muros, los huecos de puerta y los pilares se leen como una planta. {{ui:Front}} y {{ui:Side}} cortan bandas verticales para alzados y secciones. Mueva la banda con {{ui:At}} y cambie {{ui:Thickness}} (metros). {{ui:Off}} vuelve a mostrar la nube completa.
5. Pulse {{ui:Measure}} en la barra de herramientas. El puntero se ajusta a los puntos de la nube (la etiqueta dice "Nube de puntos"), así que puede medir de muro a muro en la sección, o desde un elemento del modelo hasta el escaneo. Una esquina o arista del modelo al alcance sigue teniendo prioridad.
6. Con {{ui:Measure}} › {{ui:Location}}, un punto de la nube da su latitud y longitud según el sistema de coordenadas propio de la nube, cuando el archivo indica uno.
7. {{ui:Hide}} oculta la nube un momento; {{ui:Remove}} la quita. {{ui:Show}} › {{ui:Point cloud}} oculta o muestra la barra.

## Dónde se coloca la nube

{{ui:Place}} en la barra indica cómo se alinea la nube con el modelo:

- **Coordenadas del modelo**: los números de la nube son los propios del modelo (un escaneo registrado en las coordenadas del diseño).
- **Coordenadas de mapa**: el modelo tiene una conversión de mapa (IfcMapConversion) y la nube está en el mismo sistema proyectado: la nube se coloca a través de ella. Si los dos nombran sistemas distintos, la línea de estado lo indica.
- **Centrada en el modelo**: cuando ninguna de las dos opciones coloca la nube cerca del modelo, su centro va al centro del modelo y su punto más bajo al suelo del modelo. Elija otra opción para cambiarlo.

Cuando el archivo no indica sus unidades, BimCraft lee metros y ofrece {{ui:Units}} en la barra.

## Trazar las líneas tal como construido

Pulse {{ui:Trace in CadCraft}} para enviar la nube a la aplicación de dibujo en una pestaña nueva. Se abre allí bajo el dibujo, donde un corte de planta y el ajuste a objetos le permiten dibujar los muros sobre el escaneo. Vea el tema de CadCraft sobre nubes de puntos.

## Cuántos puntos

Un escaneo puede tener cientos de millones de puntos. BimCraft lee cada punto una vez y conserva una parte equitativa para dibujar: {{ui:Show}} en la barra fija cuántos (1, 2, 5 o 10 millones). Más puntos necesitan más memoria y una tarjeta gráfica más rápida. Los recuentos por clase LiDAR son de todos los puntos del archivo.

:::note
Los archivos se leen en este equipo; no se sube nada. Se leen LAS 1.0–1.4 y LAZ (archivos LAZ de hasta 1 GB, mantenidos en memoria mientras se leen); archivos E57 de hasta 6 millones de puntos y 512 MB por ahora (para escaneos más grandes, exporte LAS o LAZ); PLY, PCD y PTX completos; las nubes de texto son `x y z`, con las columnas de color (`r g b`) e intensidad cuando las hay.
:::

## Varios escaneos

Los escaneos tomados desde posiciones distintas pueden registrarse en un único sistema de referencia, ajustarse con ICP y exportarse como un único LAS o E57: vea [Registrar varios escaneos en uno](topic:register-scans).
