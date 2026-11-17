---
title: Georreferenciar con cualquier proyección
summary: Indique a BimCraft en qué sistema de mapa están las coordenadas de un modelo, desde la lista completa de EPSG, cualquier zona UTM o una proyección que usted defina, y úselo para Ubicación, las capas de mapa y las nubes de puntos.
keywords: proyección, sistema de coordenadas, crs, epsg, utm, zona utm, proyección personalizada, proj4, cadena proj, prj, wkt, georreferenciar, georreferenciación, conversión de mapa, ifcprojectedcrs, mis proyecciones, latitud, longitud, este, norte, lambert, gauss-kruger, state plane, cuadrícula nacional
from: 6894c1f2
---

Algunos planos se dibujan en un sistema de mapa que no está en una lista corta: una zona UTM, una cuadrícula nacional, o una proyección que alguien anotó como definición de texto. {{ui:Medir}} › {{ui:Sistema de coordenadas…}} le permite indicar cuál usa el modelo.

## Elija el sistema de un modelo

1. Abra el modelo, elija {{ui:Medir}} y luego {{ui:Sistema de coordenadas…}}.
2. Escriba en el cuadro de búsqueda. Cualquiera de estas opciones funciona:
   - un número EPSG: `32633` o `EPSG:2277`;
   - una zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - palabras del nombre: `lambert 93`, `mga zone 56`, `texas central`;
   - una definición de proyección: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalmente con un nombre al frente (`Mi cuadrícula = +proj=…`);
   - el texto de un archivo `.prj`, o use {{ui:Cargar un archivo .prj…}}.
3. Elija un resultado y luego {{ui:Usar este sistema}}.

La elección se guarda en el modelo (un conjunto de propiedades llamado `CadCraft_CRS` en el proyecto), así se reabre con el modelo. Guarde el modelo para conservarla. {{ui:Quitarlo del modelo}} vuelve a lo que indica el archivo.

Si su definición da las mismas coordenadas que un sistema EPSG de la lista, BimCraft lo indica y usa ese código; cuando varios sistemas de la lista comparten las mismas matemáticas, también nombra a los demás.

## Mis proyecciones

Una definición que pegue o un `.prj` que cargue puede guardarse con {{ui:Guardar en Mis proyecciones}}. La lista está en este dispositivo (este navegador) y se ofrece la próxima vez que abra el selector.

## Qué lo usa

- {{ui:Medir}} › {{ui:Ubicación}} convierte un punto señalado en latitud y longitud mediante el sistema del modelo. Antes se detenía con una nota cuando el archivo nombraba su sistema de mapa sin un código EPSG; con una elección guardada da la respuesta.
- Las capas de mapa bajo el modelo usan el mismo sistema. Una nube de puntos o un archivo de terreno en otro sistema se ofrece en el del modelo (vea abajo).
- {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Ubicación}} › {{ui:Elegir otro sistema…}} define lo que {{ui:Ubicación}} también informa: latitud y longitud en cualquier sistema geográfico de la lista, o el este y el norte en cualquier sistema proyectado, además del propio del modelo.

## Un modelo que todavía no está en el mapa

Si el archivo no tiene conversión de mapa, al elegir un sistema se abre {{ui:Colocar este modelo en el mapa}}. También puede abrirlo desde {{ui:Medir}} › {{ui:Origen en el mapa…}}.

1. Dé el origen del modelo como este y norte en el sistema, o escriba una latitud y longitud y elija {{ui:Convertir a este y norte}}.
2. Indique la rotación hacia el norte de la cuadrícula (en grados, en sentido antihorario; 0 significa que el eje Y del modelo apunta al norte de la cuadrícula) y la altura del origen.
3. La escala empieza con la diferencia de unidades entre el modelo y el mapa (0.001 para un modelo en milímetros sobre una cuadrícula en metros). Cámbiela solo para un factor combinado de terreno a cuadrícula.
4. Elija {{ui:Colocar en el mapa}}. Un solo paso de deshacer escribe un IfcProjectedCRS y un IfcMapConversion (IFC4). El modelo en sí no se mueve.

Un archivo IFC2X3 no tiene ninguna de las dos entidades. BimCraft escribe los mismos números de la forma que permite ese estándar: los conjuntos de propiedades de buildingSMART `ePSet_MapConversion` y `ePSet_ProjectedCRS` en el proyecto, la latitud y longitud del sitio, y el norte verdadero. El cuadro lo indica. Guarde el modelo para conservarlo.

## Un modelo que ya está en el mapa

Cuando el archivo ya se ubica en el mapa y usted elige otro sistema, BimCraft pregunta:

- {{ui:Solo cambiar lo que informa Ubicación}} conserva la georreferencia propia del archivo y usa su elección para {{ui:Ubicación}}, las capas de mapa y las nubes de puntos (los números del modelo se leen entonces como si estuvieran en el nuevo sistema).
- {{ui:Mover el modelo a este sistema}} reescribe la georreferencia: el origen pasa por la proyección (este, norte, altura, rotación y escala) y el IfcProjectedCRS (nombre, datum, proyección, zona, unidad) se reescribe, de modo que el IFC guardado indique el nuevo sistema. El lugar en la Tierra no cambia: el origen conserva su latitud y longitud. Los elementos dentro del modelo nunca cambian; solo la georreferencia.

El cuadro muestra el origen anterior y el nuevo antes de elegir. Ir y volver devuelve el origen a menos de un milímetro.

## Nubes de puntos y terreno en otro sistema

Una nube o un archivo de levantamiento lleva su propio sistema (LAS, LAZ, E57, GeoTIFF) o ninguno. Cuando difiere del del modelo, BimCraft ofrece {{ui:Reproyectar al sistema del modelo}}. Los puntos se mueven por lotes (en segundo plano cuando son muchos, para que la página siga utilizable), el archivo en su computadora no se toca, y la línea de estado indica qué se hizo. Vuelva a abrir el archivo para regresar a su sistema propio. Para una nube ya abierta, {{ui:Reproyectar al modelo…}} en la barra de la nube hace lo mismo.

Si el archivo no indica ningún sistema, BimCraft pregunta {{ui:¿En qué sistema está este archivo?}}: elíjalo con {{ui:Elegir el sistema…}} y la respuesta se recuerda para ese archivo en este dispositivo. {{ui:Conservar el sistema propio del archivo}} deja los puntos como están.

## Cuando algo es aproximado

Los problemas se listan en el cuadro y en el panel Problemas, nunca en silencio:

- Un lugar fuera del área para la que se hizo el sistema: los números funcionan, pero la distorsión aumenta.
- Los cambios de datum que requieren un archivo de malla (NADCON, NTv2 y similares) no están disponibles. Los sistemas en otro datum se mueven con el desplazamiento sin malla que indica el registro EPSG, y el resultado es aproximado a la precisión indicada, que el mensaje da en metros.
- Un punto que no se puede proyectar se deja fuera y se cuenta; un archivo por encima del límite de tamaño se rechaza, indicando el límite.

:::tip
Las coordenadas de mapa necesitan una conversión de mapa. Un archivo sin ella se coloca en el mapa con {{ui:Origen en el mapa…}}.
:::

:::note
Moverse entre datums sin archivo de malla es exacto a unos pocos metros; el resultado de Ubicación indica cuánto cuando el catálogo lo conoce.
:::
