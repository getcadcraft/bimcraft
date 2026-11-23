---
title: Traiga sus propios objetos y archivos de familia a la Biblioteca
summary: Lea archivos de familia (.rfa) e IFC, DWG, DXF, glTF u OBJ en la pestaña Biblioteca, colóquelos como cualquier elemento de la biblioteca y guárdelos en Mis objetos, una lista privada que solo usted puede ver.
keywords: rfa, familia, familias, biblioteca de familias, mis objetos propios, mis objetos, objetos privados, biblioteca privada, importar objetos, contenido de fabricante, objetos BIM, objeto ifc, gltf, obj, bloque dwg, guardar, cambiar, migrar
from: 886261f8
---

## Qué hará

Traiga a BimCraft los objetos que ya tiene: una biblioteca de familias de Revit, una descarga IFC o DWG de un fabricante, una malla de otro modelador. Lea el archivo en la pestaña {{ui:Biblioteca}}, coloque el objeto en su modelo como un elemento IFC correcto y, si quiere volver a usarlo más adelante, guárdelo en {{ui:Mis objetos}}.

## Pasos

1. Abra un modelo IFC o empiece un edificio nuevo.
2. Haga clic en la pestaña {{ui:Biblioteca}}, junto a {{ui:Propiedades}}.
3. Haga clic en {{ui:Archivos…}} y luego en {{ui:Elegir un archivo…}}. Elija un archivo o varios a la vez: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` o `.csv`. O haga clic en {{ui:Elija una carpeta…}} para leer una carpeta completa y las carpetas que contiene (hasta 200 archivos de una vez).
4. Haga clic en una tarjeta para ver lo que se leyó: la vista previa del plano, el nombre, el fabricante y el modelo, los tamaños y las notas.
5. Haga clic en {{ui:Colocar en el plano}} o en {{ui:Colocar en el modelo}} para colocarlo.
6. Para usarlo de nuevo en otros proyectos, haga clic en {{ui:Guardar en mis objetos}}. Si leyó varios archivos, {{ui:Guardar todo en mis objetos}} los guarda de una vez.
7. Más tarde, haga clic en {{ui:Mis objetos}} en la pestaña Biblioteca para encontrarlos. Se colocan, intercambian y actualizan como cualquier elemento de la biblioteca.

Los archivos se leen en esta pestaña. No se sube nada hasta que elija {{ui:Guardar en mis objetos}}.

## Qué se lee de cada tipo de archivo

| Archivo | Qué obtiene |
|---|---|
| IFC | Cada tipo de elemento como objeto, con su forma 3D real, clase IFC y conjuntos de propiedades |
| glTF, GLB, OBJ | Un objeto con su forma 3D real como malla. Defina antes las unidades y hacia dónde está arriba. |
| DWG, DXF | Cada bloque como objeto, con su dibujo en planta y sus atributos |
| Archivo de familia (`.rfa`) | El nombre de la familia, su categoría, fabricante, modelo, parámetros y sus tipos. **No su forma 3D:** en su lugar aparece una caja con el Ancho, la Profundidad y la Altura de la familia. |
| CSV | Un objeto por fila: nombre, tamaños y datos, dibujado como una caja |

## Archivos de familia y su forma 3D

La forma 3D dentro de un archivo `.rfa` se guarda en un formato no documentado, así que BimCraft lee los datos de la familia y no adivina su geometría. La tarjeta lo indica: «Geometría no leída de esta familia; se usa una caja en su lugar».

Para traer una familia con su forma real, expórtela desde el programa que la creó (Revit):

1. Abra la familia, o un proyecto con la familia colocada en él.
2. Elija **Archivo > Exportar > IFC**. Consulte [la configuración de exportación que mejor funciona aquí](topic:rvt-to-ifc).
3. En BimCraft, lea el archivo `.ifc` con {{ui:Archivos…}}. Cada tipo de familia llega como su propio objeto, con su forma y sus conjuntos de propiedades.

Muchos fabricantes ofrecen una descarga IFC o DWG junto al archivo de familia. Esas se leen directamente.

## Tipos de familia

Una familia con varios tipos llega como un solo elemento con una opción {{ui:Variante}}, una variante por tipo. Cada variante tiene los valores que difieren entre los tipos, y su propia caja cuando el tipo tiene un Ancho y una Profundidad. Una familia con un solo tipo es un elemento sencillo, rellenado con los valores de ese tipo.

Algunas familias guardan sus tipos en un catálogo de tipos: un archivo `.txt` con el mismo nombre junto al archivo de familia. Elija ambos a la vez, o elija la carpeta, y las filas del catálogo se convierten en variantes.

## Datos de una familia sobre una forma real

Si una carpeta contiene un archivo de familia y un archivo IFC, glTF u OBJ con el mismo nombre (`Chair.rfa` y `Chair.ifc`), elija ambos a la vez o elija la carpeta. BimCraft crea un solo elemento: el archivo de familia aporta el nombre, el fabricante, el modelo, los parámetros y los tipos, y el otro archivo aporta la forma 3D real. Las notas indican de qué archivo procede la forma. Se usa una misma forma para todos los tipos.

Cuando un archivo de familia tiene una imagen guardada, los detalles del elemento muestran esa imagen bajo el dibujo en planta. La imagen se muestra solo allí; no se guarda con el elemento.

## Mis objetos

{{ui:Mis objetos}} es su propia lista privada en la Biblioteca. Solo usted puede ver lo que contiene: no está en la biblioteca pública, no aparece en la búsqueda y no se muestra a vuestro equipo. Sigue a su cuenta, así que los mismos objetos están en otro equipo una vez que inicie sesión en la biblioteca.

- Necesita haber iniciado sesión en la biblioteca para guardar un objeto. Consulte [iniciar sesión en la biblioteca](topic:library-credits).
- Guardar un objeto envía ese objeto a su cuenta. Hasta entonces permanece en su equipo.
- {{ui:Quitar de mis objetos}} saca un objeto de la lista. Las copias ya colocadas en los dibujos permanecen.
- Para compartir un objeto con todo el mundo, súbalo a la biblioteca pública, con una licencia que usted elija.

:::note
Mis objetos está en pruebas y puede que todavía no esté abierto para su cuenta. Si falta el origen, o aparece el mensaje «Mis objetos aún no está abierto para esta cuenta», puede seguir leyendo y colocando sus propios archivos con {{ui:Archivos…}}; quedan guardados dentro de su modelo.
:::

## Errores frecuentes

- **Esperar la forma real de la familia desde un `.rfa`.** Solo se leen sus datos. Exporte IFC para obtener la forma.
- **Dos elementos donde esperaba uno.** Una familia y su archivo de forma solo se unen cuando sus nombres coinciden exactamente, salvo la extensión, y están en la misma carpeta.
- **Una malla que llega mil veces más grande o tumbada.** Defina {{ui:Unidades del archivo}} y {{ui:Eje vertical de una malla}} en {{ui:Archivos…}} antes de elegir el archivo.
- **«Sin datos de familia» en un archivo.** Es un proyecto (`.rvt` guardado con otra extensión) o una plantilla de familia, no una familia. Consulte [Leer un archivo de proyecto o de familia](topic:read-rvt-file).
- **Guardar contenido que no puede almacenar.** Algunas bibliotecas de pago no permiten copias fuera de su propio servicio. Revise las condiciones del contenido que no ha creado usted.
