---
title: Georreferenciar con cualquier proyección
summary: Indique a BimCraft en qué sistema cartográfico están las coordenadas de un modelo, a partir de la lista EPSG completa, de cualquier zona UTM o de una proyección que defina usted mismo, y úselo para Ubicación, las capas de mapa y las nubes de puntos.
keywords: proyección, sistema de coordenadas, crs, epsg, utm, zona utm, proyección personalizada, proj4, cadena proj, prj, wkt, georreferenciar, georreferenciación, conversión cartográfica, ifcprojectedcrs, mis proyecciones, latitud, longitud, este, norte, lambert, gauss-kruger, state plane, cuadrícula nacional
from: 6894c1f2
---

Algunos planos están dibujados en un sistema cartográfico que no figura en una lista corta: una zona UTM, una cuadrícula nacional o una proyección que alguien escribió como definición de texto. {{ui:Medir}} › {{ui:Sistema de coordenadas…}} le permite indicar cuál usa el modelo.

## Elegir el sistema de un modelo

1. Abra el modelo, elija {{ui:Medir}} y después {{ui:Sistema de coordenadas…}}.
2. Escriba en el cuadro de búsqueda. Funciona cualquiera de estas opciones:
   - un número EPSG: `32633` o `EPSG:2277`;
   - una zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - palabras del nombre: `lambert 93`, `mga zone 56`, `texas central`;
   - una definición de proyección: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalmente con un nombre delante (`Mi cuadrícula = +proj=…`);
   - el texto de un archivo `.prj`, o use {{ui:Cargar un archivo .prj…}}.
3. Elija un resultado y después {{ui:Usar este sistema}}.

La elección se guarda en el modelo (un conjunto de propiedades llamado `CadCraft_CRS` en el proyecto), así que se reabre con el modelo. Guarde el modelo para conservarla. {{ui:Quitar del modelo}} vuelve a lo que indica el archivo.

Si su definición da las mismas coordenadas que un sistema EPSG de la lista, BimCraft lo indica y usa ese código; cuando varios sistemas de la lista comparten las mismas matemáticas, también nombra los demás.

## Mis proyecciones

Una definición que pegue o un `.prj` que cargue puede guardarse con {{ui:Guardar en Mis proyecciones}}. La lista está en este equipo (este navegador) y se ofrece la próxima vez que abra el selector.

## Qué lo usa

- {{ui:Medir}} › {{ui:Ubicación}} convierte un punto seleccionado en latitud y longitud mediante el sistema del modelo. Antes se detenía con una nota cuando el archivo nombraba su sistema de mapa sin código EPSG; con una elección guardada da el resultado.
- Las capas de mapa bajo el modelo usan el mismo sistema. Una nube de puntos o un archivo de terreno en otro sistema recibe la oferta del sistema del modelo (véase más abajo).
- {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Ubicación}} › {{ui:Elegir otro sistema…}} fija lo que {{ui:Ubicación}} informa además: latitud y longitud en cualquier sistema geográfico de la lista, o el Este y el Norte en cualquier sistema proyectado, además del propio del modelo.

## Un modelo que todavía no está en el mapa

Si el archivo no tiene conversión cartográfica, al elegir un sistema se abre {{ui:Ubique este modelo en el mapa}}. También puede abrirlo desde {{ui:Medir}} › {{ui:Origen en el mapa…}}.

1. Indique el origen del modelo como Este y Norte en el sistema, o escriba una latitud y longitud y elija {{ui:Convertir a coordenadas Este y Norte}}.
2. Indique la rotación hacia el norte de cuadrícula (en grados, en sentido antihorario; 0 significa que el eje Y del modelo apunta al norte de cuadrícula) y la altura del origen.
3. La escala empieza en la diferencia de unidades entre el modelo y el mapa (0.001 para un modelo en milímetros sobre una cuadrícula en metros). Cámbiela solo para un factor combinado de terreno a cuadrícula.
4. Elija {{ui:Ubicar en el mapa}}. Un paso de deshacer escribe un IfcProjectedCRS y un IfcMapConversion (IFC4). El modelo en sí no se mueve.

Un archivo IFC2X3 no tiene ninguna de estas entidades. BimCraft escribe los mismos números de la forma que permite ese estándar: los conjuntos de propiedades de buildingSMART `ePSet_MapConversion` y `ePSet_ProjectedCRS` en el proyecto, la latitud y longitud del emplazamiento y el norte verdadero. El cuadro lo indica. Guarde el modelo para conservarlo.

## Un modelo que ya está en el mapa

Cuando el archivo ya se sitúa en el mapa y usted elige otro sistema, BimCraft pregunta:

- {{ui:Cambiar solo lo que informa Ubicación}} mantiene la georreferenciación propia del archivo y usa su elección para {{ui:Ubicación}}, las capas de mapa y las nubes de puntos (los números del modelo se leen entonces como si estuvieran en el nuevo sistema).
- {{ui:Mover el modelo a este sistema}} reescribe la georreferenciación: el origen pasa por la proyección (Este, Norte, altura, rotación y escala) y el IfcProjectedCRS (nombre, datum, proyección, zona, unidad) se reescribe, de modo que el IFC guardado indica el nuevo sistema. El lugar en la Tierra sigue siendo el mismo: el origen conserva su latitud y longitud. Los elementos dentro del modelo nunca cambian; solo cambia la georreferenciación.

El cuadro muestra el origen antiguo y el nuevo antes de elegir. Moverlo allí y de vuelta devuelve el origen a menos de un milímetro.

## Nubes de puntos y terreno en otro sistema

Una nube o un archivo de levantamiento lleva su propio sistema (LAS, LAZ, E57, GeoTIFF) o ninguno. Cuando difiere del del modelo, BimCraft ofrece {{ui:Reproyectar al sistema del modelo}}. Los puntos se mueven por lotes (en segundo plano cuando son muchos, para que la página siga utilizable), el archivo de su equipo no se toca, y la línea de estado indica lo que se hizo. Vuelva a abrir el archivo para regresar a su sistema propio. Para una nube ya abierta, {{ui:Reproyectar al modelo…}} en la barra de la nube hace lo mismo.

Si el archivo no nombra ningún sistema, BimCraft pregunta {{ui:¿En qué sistema está este archivo?}}: elíjalo con {{ui:Elija el sistema…}} y la respuesta se recuerda para ese archivo en este equipo. {{ui:Mantener el sistema propio del archivo}} deja los puntos tal como están.

## Cuando algo es aproximado

Los problemas se listan en el cuadro y en el panel Problemas, nunca en silencio:

- Un lugar fuera de la zona para la que está hecho el sistema: los números funcionan, pero la distorsión aumenta.
- Los cambios de datum que necesitan un archivo de rejilla (NADCON, NTv2 y similares) no están disponibles. Los sistemas en un datum distinto se desplazan con el cambio sin rejilla que indica el registro EPSG, y el resultado es aproximado a la precisión indicada, que el mensaje da en metros.
- Un punto que no puede proyectarse se deja fuera y se cuenta; un archivo que supera el límite de tamaño se rechaza indicando el límite.

:::tip
Las coordenadas de mapa necesitan una conversión cartográfica. Un archivo sin ella se sitúa en el mapa con {{ui:Origen en el mapa…}}.
:::

:::note
El paso entre datums sin archivo de rejilla es preciso a unos pocos metros; el resultado de Ubicación indica cuánto cuando el catálogo lo conoce.
:::
