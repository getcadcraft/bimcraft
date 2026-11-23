---
title: Traer tus propios objetos y archivos de familia a la Biblioteca
summary: Leé archivos de familia (.rfa) y archivos IFC, DWG, DXF, glTF u OBJ en la pestaña Biblioteca, colocalos como cualquier elemento de biblioteca, y guardalos en Mis objetos, una lista privada que solo vos podés ver.
keywords: rfa, familia, familias, biblioteca de familias, objetos propios, mis objetos, objetos privados, biblioteca privada, importar objetos, contenido de fabricante, objetos BIM, objeto ifc, gltf, obj, bloque dwg, guardar, cambiar, migrar
from: 886261f8
---

## Qué vas a hacer

Traé a BimCraft objetos que ya tenés: una biblioteca de familias de Revit, una descarga IFC o DWG de un fabricante, una malla de otro modelador. Leés el archivo en la pestaña {{ui:Biblioteca}}, colocás el objeto en tu modelo como un elemento IFC adecuado, y, si lo querés más adelante, lo guardás en {{ui:Mis objetos}}.

## Pasos

1. Abrí un modelo IFC, o empezá un edificio nuevo.
2. Hacé clic en la pestaña {{ui:Biblioteca}} junto a {{ui:Propiedades}}.
3. Hacé clic en {{ui:Archivos…}}, luego en {{ui:Elegir un archivo…}}. Elegí un archivo o varios a la vez: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` o `.csv`. O hacé clic en {{ui:Elegir una carpeta…}} para leer una carpeta completa y las carpetas que tiene dentro (hasta 200 archivos de una vez).
4. Hacé clic en una tarjeta para ver lo que se leyó: la vista previa del plano, el nombre, el fabricante y el modelo, los tamaños y las notas.
5. Hacé clic en {{ui:Colocar en plano}} o {{ui:Colocar en modelo}} para colocarlo.
6. Para usarlo otra vez en otros proyectos, hacé clic en {{ui:Guardar en mis objetos}}. Con varios archivos leídos, {{ui:Guardar todo en mis objetos}} los guarda de una vez.
7. Más adelante, hacé clic en {{ui:Mis objetos}} en la pestaña Biblioteca para encontrarlos. Se colocan, reemplazan y actualizan como cualquier elemento de biblioteca.

Los archivos se leen en esta pestaña. Nada se sube hasta que elijas {{ui:Guardar en mis objetos}}.

## Qué se lee de cada tipo de archivo

| Archivo | Lo que obtenés |
|---|---|
| IFC | Cada tipo de elemento como objeto con su forma 3D real, clase IFC y conjuntos de propiedades |
| glTF, GLB, OBJ | Un objeto con su forma 3D real como malla. Configurá antes las unidades y hacia dónde está arriba. |
| DWG, DXF | Cada bloque como objeto con su dibujo en planta y atributos |
| Archivo de familia (`.rfa`) | El nombre, la categoría, el fabricante, el modelo, los parámetros y los tipos de la familia. **No su forma 3D:** una caja con el Ancho, Profundidad y Altura de la familia la reemplaza. |
| CSV | Un objeto por fila: nombre, tamaños y datos, dibujado como caja |

## Archivos de familia y su forma 3D

La forma 3D dentro de un archivo `.rfa` está guardada en un formato no documentado, así que BimCraft lee los datos de la familia y no adivina su geometría. La tarjeta lo dice: "Geometría no leída de esta familia; una caja la reemplaza".

Para traer una familia con su forma real, exportala desde el programa que la hizo (Revit):

1. Abrí la familia, o un proyecto con la familia colocada.
2. Elegí **Archivo > Exportar > IFC**. Ver [las configuraciones de exportación que mejor funcionan aquí](topic:rvt-to-ifc).
3. En BimCraft, leé el archivo `.ifc` con {{ui:Archivos…}}. Cada tipo de familia llega como su propio objeto, con su forma y conjuntos de propiedades.

Muchos fabricantes ofrecen una descarga IFC o DWG junto al archivo de familia. Esas se leen directamente.

## Tipos de familia

Una familia con varios tipos llega como un solo elemento con una opción {{ui:Variante}}, una variante por tipo. Cada variante tiene los valores que cambian entre los tipos, y su propia caja cuando el tipo tiene Ancho y Profundidad. Una familia con un solo tipo es un elemento simple lleno con los valores de ese tipo.

Algunas familias guardan sus tipos en un catálogo de tipos: un archivo `.txt` con el mismo nombre junto al archivo de familia. Elegí los dos juntos, o elegí la carpeta, y las filas del catálogo se vuelven variantes.

## Datos de una familia sobre una forma real

Si una carpeta tiene un archivo de familia y un archivo IFC, glTF u OBJ con el mismo nombre (`Silla.rfa` y `Silla.ifc`), elegí los dos juntos o elegí la carpeta. BimCraft hace un solo elemento: el archivo de familia da el nombre, el fabricante, el modelo, los parámetros y los tipos, y el otro archivo da la forma 3D real. Las notas indican de qué archivo vino la forma. Una sola forma se usa para todos los tipos.

Cuando un archivo de familia tiene una imagen guardada, los detalles del elemento muestran esa imagen debajo del dibujo en planta. La imagen solo se muestra ahí; no se guarda con el elemento.

## Mis objetos

{{ui:Mis objetos}} es tu lista privada dentro de la Biblioteca. Solo vos podés ver lo que contiene: no está en la biblioteca pública, no aparece en la búsqueda y no se muestra a tu equipo. Sigue a tu cuenta, así que los mismos objetos están en otra computadora una vez que ingresás a la biblioteca.

- Necesitás haber ingresado a la biblioteca para guardar un objeto. Ver [ingresar a la biblioteca](topic:library-credits).
- Guardar un objeto envía ese objeto solo a tu cuenta. Hasta entonces queda en tu computadora.
- {{ui:Quitar de mis objetos}} saca un objeto de la lista. Las copias ya colocadas en dibujos se quedan.
- Para compartir un objeto con todos, subilo a la biblioteca pública en su lugar, bajo una licencia que elijas.

:::note
Mis objetos se está probando y es posible que todavía no esté habilitado para tu cuenta. Si falta el origen, o dice "Mis objetos todavía no está habilitado para esta cuenta", igual podés leer y colocar tus propios archivos con {{ui:Archivos…}}; quedan guardados dentro de tu modelo.
:::

## Errores comunes

- **Esperar la forma real de la familia desde un `.rfa`.** Solo se leen sus datos. Exportá IFC para obtener la forma.
- **Dos elementos donde esperabas uno.** Una familia y su archivo de forma se unen solo cuando sus nombres coinciden exactamente, sin contar la terminación, y están en la misma carpeta.
- **Una malla llega mil veces más grande o acostada.** Configurá {{ui:Unidades del archivo}} y {{ui:Eje hacia arriba de una malla}} en {{ui:Archivos…}} antes de elegir el archivo.
- **"Sin datos de familia" en un archivo.** Es un proyecto (`.rvt` guardado con otra terminación) o una plantilla de familia, no una familia. Ver [Leer un archivo de proyecto o familia](topic:read-rvt-file).
- **Guardar contenido que no podés almacenar.** Algunas bibliotecas pagas no permiten copias fuera de su propio servicio. Revisá las condiciones del contenido que no hiciste vos.
