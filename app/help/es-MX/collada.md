---
title: Exportar el modelo como Collada o para Google Earth
summary: Genere los modelos IFC abiertos como un archivo Collada (.dae) para Blender y otros programas 3D, o como un paquete de Google Earth (.kmz) colocado donde está el modelo en el mapa.
keywords: collada, dae, kmz, kml, google earth, blender, exportar, geolocalización, georreferencia, latitud, longitud, ubicación, programas 3D
from: 81cfec09
---

{{ui:Collada}} en la barra de herramientas (o {{ui:Exportar Collada (.dae, .kmz)…}} en el menú Archivo de los estilos de menú y de cinta) escribe lo que está abierto como Collada 1.4.1: cada modelo que se muestra, y los federados donde los colocó.

## Exportar

1. Elija {{ui:Collada}}.
2. Elija el formato:
   - {{ui:Archivo Collada (.dae), para Blender y otros programas 3D}}.
   - {{ui:Paquete de Google Earth (.kmz): el modelo colocado donde está en el mapa}}. Solo se ofrece cuando el modelo tiene una ubicación.
3. Elija las opciones y luego {{ui:Exportar}}. El archivo se descarga, y la barra de estado indica cuántos elementos se incluyeron.

| Opción | Qué hace |
|---|---|
| {{ui:Escribir la ubicación en el archivo}} | Agrega la latitud, longitud, altura y rumbo del origen del archivo al .dae |
| {{ui:Altura}} | {{ui:Sobre el terreno: el nivel 0 del modelo queda sobre el terreno}}, o {{ui:La altura propia del modelo sobre el nivel del mar}} |
| {{ui:Incluir habitaciones y espacios}} | Los espacios también se incluyen (por defecto se omiten) |
| {{ui:Incluir elementos ocultos}} | También se escriben los elementos que ocultó (por defecto solo se escribe lo que se ve) |

## Qué contiene el archivo

| En el modelo | En el archivo Collada |
|---|---|
| Edificio, niveles | Nodos anidados, niveles en orden de elevación; los elementos sin nivel quedan bajo "Sin colocar" |
| Cada elemento | Un nodo con su propia malla, con el nombre del modelo (su nombre, o si no, su clase y etiqueta) |
| Clase, GlobalId, tipo predefinido | En los datos extra del nodo (perfil IFC), con el nombre exacto (perfil ModelCraft) |
| Colores | Materiales, con transparencia |
| Unidades y ejes | Metros, Z hacia arriba. El nivel 0 del modelo que está al frente queda a altura 0 |

El modelo se mantiene cerca del origen en el terreno, de modo que los programas que trabajan con precisión simple lo muestran sin vibración. ModelCraft escribe sus archivos Collada con el mismo escritor, y abre estos archivos con los nombres de sus elementos.

## De dónde sale la ubicación

El modelo que está al frente da la ubicación, del mismo modo que {{ui:Medir}} calcula la latitud y longitud de un punto:

- Una conversión de mapa (IFC4 IfcMapConversion, o los conjuntos de propiedades de IFC2X3) mediante el sistema de coordenadas del modelo. Un sistema que usted eligió para el modelo prevalece sobre el que indica el archivo.
- Si no, la latitud y longitud del sitio (aproximadas: suficientes para todo un sitio).

El rumbo se mide, no se supone: toma en cuenta la rotación del mapa, el norte verdadero y la convergencia del mapa. Para dar una ubicación a un modelo, use {{ui:Origen en el mapa…}} en Medir.

## En otros programas

- **Google Earth** lee el .kmz: el modelo aparece en la ubicación, orientado al norte. Un .dae simple no tiene un lugar desde el que Google Earth lea una ubicación; use el .kmz.
- **Blender** (4.x y anteriores): File, Import, Collada (.dae). Cada elemento entra como su propio objeto con su material. La ubicación se guarda en los datos extra del archivo, que Blender no lee. Blender 5.0 eliminó su importador Collada integrado; en ese caso, use {{ui:USD}} o la exportación glTF en su lugar, o abra el .dae en Blender 4.5 y guarde un .blend.

Nuestras pruebas comprueban cada archivo contra el esquema Collada 1.4.1 y lo leen de nuevo con un lector Collada independiente. No se han abierto en Blender ni en Google Earth.
