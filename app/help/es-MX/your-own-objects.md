---
title: Traiga sus propios objetos y archivos de familia a la Biblioteca
summary: Lea archivos de familia (.rfa) y archivos IFC, DWG, DXF, glTF u OBJ en la pestaña Biblioteca, colóquelos como cualquier elemento de la biblioteca y guárdelos en Mis objetos, una lista privada que solo usted puede ver.
keywords: rfa, familia, familias, biblioteca de familias, objetos propios, mis objetos, objetos privados, biblioteca privada, importar objetos, contenido del fabricante, objetos bim, objeto ifc, gltf, obj, bloque dwg, guardar, cambiar, migrar
from: 886261f8
---

## Lo que hará

Traiga a BimCraft los objetos que ya tiene: una biblioteca de familias de Revit, una descarga IFC o DWG de un fabricante, o una malla de otro modelador. Lee el archivo en la pestaña {{ui:Library}}, coloca el objeto en su modelo como un elemento IFC adecuado y, si lo quiere más adelante, lo guarda en {{ui:My objects}}.

## Pasos

1. Abra un modelo IFC, o empiece un edificio nuevo.
2. Haga clic en la pestaña {{ui:Library}}, junto a {{ui:Properties}}.
3. Haga clic en {{ui:Files…}} y luego en {{ui:Choose a file…}}. Elija un archivo o varios a la vez: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` o `.csv`. O haga clic en {{ui:Choose a folder…}} para leer una carpeta completa y las carpetas que contiene (hasta 200 archivos de una vez).
4. Haga clic en una tarjeta para ver lo que se leyó: la vista previa en planta, el nombre, el fabricante y el modelo, los tamaños y las notas.
5. Haga clic en {{ui:Place in plan}} o en {{ui:Place in model}} para colocarlo.
6. Para usarlo de nuevo en otros proyectos, haga clic en {{ui:Keep in my objects}}. Con varios archivos leídos, {{ui:Guardar todo en mis objetos}} los guarda de una vez.
7. Después, haga clic en {{ui:My objects}} en la pestaña Biblioteca para encontrarlos. Se colocan, se reemplazan y se actualizan como cualquier elemento de la biblioteca.

Los archivos se leen en esta pestaña. Nada se sube hasta que elija {{ui:Keep in my objects}}.

## Lo que se lee de cada tipo de archivo

| Archivo | Lo que obtiene |
|---|---|
| IFC | Cada tipo de elemento como objeto con su forma 3D real, clase IFC y conjuntos de propiedades |
| glTF, GLB, OBJ | Un objeto con su forma 3D real como malla. Antes, defina las unidades y el eje vertical. |
| DWG, DXF | Cada bloque como objeto con su dibujo en planta y sus atributos |
| Archivo de familia (`.rfa`) | El nombre de la familia, la categoría, el fabricante, el modelo, los parámetros y sus tipos. **No su forma 3D:** en su lugar se usa una caja con el Ancho, Profundidad y Altura de la familia. |
| CSV | Un objeto por fila: nombre, tamaños y datos, dibujado como caja |

## Archivos de familia y su forma 3D

La forma 3D dentro de un archivo `.rfa` se guarda en un formato no documentado, así que BimCraft lee los datos de la familia y no adivina su geometría. La tarjeta lo indica: "Geometría no leída de esta familia; se usa una caja en su lugar."

Para traer una familia con su forma real, expórtela desde el programa que la hizo (Revit):

1. Abra la familia, o un proyecto con la familia colocada.
2. Elija **File > Export > IFC**. Vea [la configuración de exportación que mejor funciona aquí](topic:rvt-to-ifc).
3. En BimCraft, lea el archivo `.ifc` con {{ui:Files…}}. Cada tipo de familia llega como su propio objeto, con su forma y sus conjuntos de propiedades.

Muchos fabricantes ofrecen una descarga IFC o DWG junto al archivo de familia. Esos se leen directamente.

## Tipos de familia

Una familia con varios tipos llega como un solo elemento con una opción {{ui:Variant}}, una variante por tipo. Cada variante tiene los valores que difieren entre los tipos, y su propia caja cuando el tipo tiene Ancho y Profundidad. Una familia con un solo tipo es un elemento sencillo, llenado con los valores de ese tipo.

Algunas familias guardan sus tipos en un catálogo de tipos: un archivo `.txt` con el mismo nombre junto al archivo de familia. Elija ambos a la vez, o elija la carpeta, y las filas del catálogo se convierten en variantes.

## Datos de una familia sobre una forma real

Si una carpeta contiene un archivo de familia y un archivo IFC, glTF u OBJ con el mismo nombre (`Silla.rfa` y `Silla.ifc`), elija ambos a la vez o elija la carpeta. BimCraft crea un solo elemento: el archivo de familia aporta el nombre, el fabricante, el modelo, los parámetros y los tipos, y el otro archivo aporta la forma 3D real. Las notas indican de qué archivo vino la forma. Una sola forma se usa para todos los tipos.

Cuando un archivo de familia tiene una imagen guardada, los detalles del elemento muestran esa imagen debajo del dibujo en planta. La imagen se muestra solo ahí; no se guarda con el elemento.

## Mis objetos

{{ui:My objects}} es su lista privada dentro de la Biblioteca. Solo usted puede ver lo que contiene: no está en la biblioteca pública, no aparece en la búsqueda y no se muestra a su equipo. Sigue a su cuenta, así que los mismos objetos están en otra computadora una vez que inicia sesión en la biblioteca.

- Necesita iniciar sesión en la biblioteca para guardar un objeto. Vea [iniciar sesión en la biblioteca](topic:library-credits).
- Guardar un objeto envía ese objeto a su cuenta. Hasta entonces, permanece en su computadora.
- {{ui:Remove from my objects}} saca un objeto de la lista. Las copias ya colocadas en los dibujos se quedan.
- Para compartir un objeto con todos, súbalo a la biblioteca pública en su lugar, bajo una licencia que usted elija.

:::note
Mis objetos está en prueba y puede que todavía no esté abierto para su cuenta. Si falta el origen, o aparece el texto "Mis objetos todavía no está abierto para esta cuenta", igual puede leer y colocar sus propios archivos con {{ui:Files…}}; quedan guardados dentro de su modelo.
:::

## Errores comunes

- **Esperar la forma real de la familia desde un `.rfa`.** Solo se leen sus datos. Exporte IFC para obtener la forma.
- **Dos elementos donde esperaba uno.** Una familia y su archivo de forma solo se unen cuando sus nombres coinciden exactamente, sin contar la terminación, y están en la misma carpeta.
- **Una malla llega mil veces más grande o acostada.** Defina {{ui:Units of the file}} y {{ui:Up axis of a mesh}} en {{ui:Files…}} antes de elegir el archivo.
- **"Sin datos de familia" en un archivo.** Es un proyecto (`.rvt` guardado con otra terminación) o una plantilla de familia, no una familia. Vea [Leer un archivo de proyecto o de familia](topic:read-rvt-file).
- **Guardar contenido que no puede almacenar.** Algunas bibliotecas de pago no permiten copias fuera de su propio servicio. Revise las condiciones del contenido que usted no hizo.
