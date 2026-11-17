---
title: Exportar el modelo como Collada o para Google Earth
summary: Guarde los modelos IFC abiertos como un archivo Collada (.dae) para Blender y otros programas 3D, o como un paquete de Google Earth (.kmz) colocado donde está el modelo en el mapa.
keywords: collada, dae, kmz, kml, google earth, blender, exportar, geolocalización, georreferenciación, latitud, longitud, ubicación, programas 3D
from: 81cfec09
---

{{ui:Collada}} en la barra de herramientas (o {{ui:Export Collada (.dae, .kmz)…}} en el menú Archivo de los estilos de menú y de cinta) guarda lo que está abierto como Collada 1.4.1: cada modelo que se muestra, y los federados donde los colocó.

## Exportar

1. Elija {{ui:Collada}}.
2. Seleccione el formato:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Solo se ofrece cuando el modelo tiene una ubicación.
3. Elija las opciones y, después, {{ui:Export}}. El archivo se descarga y la barra de estado indica cuántos elementos se han incluido.

| Opción | Qué hace |
|---|---|
| {{ui:Write the location into the file}} | Añade la latitud, la longitud, la altura y la orientación del origen del archivo al .dae |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, o {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Los espacios también se incluyen (por defecto se dejan fuera) |
| {{ui:Include hidden elements}} | Los elementos que ocultó también se escriben (por defecto solo se escribe lo que ve) |

## Qué contiene el archivo

| En el modelo | En el archivo Collada |
|---|---|
| Edificio, niveles | Nodos anidados, niveles en orden de cota; los elementos sin nivel, bajo "Sin ubicar" |
| Cada elemento | Un nodo con su propia malla, con el nombre del modelo (su nombre o, si no tiene, su clase y etiqueta) |
| Clase, GlobalId, tipo predefinido | En los datos extra del nodo (perfil IFC), con el nombre exacto (perfil ModelCraft) |
| Colores | Materiales, con transparencia |
| Unidades y ejes | Metros, Z hacia arriba. La planta 0 del modelo que está delante queda a altura 0 |

El modelo se mantiene cerca del origen sobre el terreno, de modo que los programas que trabajan con precisión simple lo muestran sin saltos. ModelCraft escribe sus archivos Collada con el mismo escritor y abre estos archivos con los nombres de sus elementos.

## De dónde sale la ubicación

El modelo que está delante aporta la ubicación, del mismo modo que {{ui:Measure}} calcula la latitud y la longitud de un punto:

- Una conversión de mapa (IFC4 IfcMapConversion, o los conjuntos de propiedades IFC2X3) a través del sistema de coordenadas del modelo. Un sistema que usted eligió para el modelo prevalece sobre el que indica el archivo.
- En otro caso, la latitud y la longitud del emplazamiento (aproximadas: válidas en todo el emplazamiento).

La orientación se mide, no se supone: tiene en cuenta la rotación del mapa, el norte verdadero y la convergencia del mapa. Para dar una ubicación a un modelo, utilice {{ui:Map origin…}} en {{ui:Measure}}.

## En otros programas

- **Google Earth** lee el .kmz: el modelo aparece en su ubicación, orientado al norte. Un .dae simple no tiene un lugar del que Google Earth lea una ubicación; utilice el .kmz.
- **Blender** (4.x y anteriores): Archivo, Importar, Collada (.dae). Cada elemento entra como un objeto propio con su material. La ubicación se conserva en los datos extra del archivo, que Blender no lee. Blender 5.0 eliminó su importador Collada integrado; en ese caso, utilice {{ui:USD}} o la exportación glTF, o abra el .dae en Blender 4.5 y guárdelo como .blend.

Nuestras pruebas comprueban cada archivo con el esquema Collada 1.4.1 y lo leen de nuevo con un lector Collada independiente. No se han abierto en Blender ni en Google Earth.
