---
title: Abrir un paquete de proyecto
summary: Un paquete de proyecto es un único zip con un modelo, sus vistas, sus hojas y sus grupos de propiedades. Ábralo, muestre una vista con su planta y sus capas, abra una hoja y vea las propiedades en los grupos propios del proyecto.
keywords: paquete, paquete de proyecto, ccbundle, zip, vistas, mapa de vistas, hojas, libro de hojas, combinación de capas, grupos de propiedades, estándares, pln, plantilla
from: b5b86e8f
---

## Lo que va a hacer

Abra un **paquete de proyecto** (`.ccbundle.zip`) y trabaje con el proyecto tal como se organizó: sus vistas, sus hojas y sus grupos de propiedades, sobre el modelo.

Un paquete contiene:

- el modelo como IFC,
- las hojas como PDF y DWG,
- una lista de lo que IFC no recoge: las vistas (cada una con su planta, su combinación de capas y su escala), las hojas y los dibujos colocados en ellas, las definiciones de propiedades en sus grupos, las clasificaciones y los estándares, como capas, juegos de plumas, tipos de línea, rellenos, superficies y compuestos.

Los paquetes los genera un script de código abierto que se ejecuta dentro de Archicad y pide a Archicad estas listas. BimCraft nunca lee directamente archivos `.pln` ni `.tpl`; vea [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

## Crear un paquete

El script es una versión preliminar: aún no se ha probado en todas las versiones de Archicad. Obténgalo en [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Necesita Archicad 24 o posterior y Python 3.8 o posterior; no hay que instalar nada más.

1. Guarde `archicad_bundle.py` en una carpeta, por ejemplo `C:\cc-bundle`.
2. En Archicad, abra el proyecto y cree un conjunto de publicación llamado exactamente **CadCraft bundle**: la vista 3D como IFC, cada hoja como PDF y cada hoja de nuevo como DWG, publicados en archivos de disco en una sola carpeta plana.
3. Con el proyecto abierto, ejecute una vez `python archicad_bundle.py --probe --out .`. Solo lee y escribe `probe.json`.
4. Ejecute `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (use el traductor IFC que haya elegido). Archicad publica el conjunto y el script escribe `<project>.ccbundle.zip`.

Si la publicación mediante el script falla, publique el conjunto a mano y ejecute `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. El README del repositorio recoge todas las opciones. Si algo no llega, abra allí una incidencia y adjunte `probe.json`.

## Abrir un paquete

1. Haga clic en {{ui:Elegir un archivo}}, o arrastre el `.ccbundle.zip` sobre BimCraft. En una carpeta que haya abierto con {{ui:Abrir una carpeta}}, los paquetes aparecen en **Paquetes de proyecto**; haga clic en uno por su nombre.
2. El modelo se abre como cualquier IFC, y la sección **Paquete de proyecto** aparece a la izquierda, debajo de los datos del archivo.

No se sube nada: el paquete se lee en su equipo, un archivo cada vez, así que un modelo grande no se copia dos veces.

## Mostrar una vista

En **Vistas**, las vistas se agrupan por las carpetas que tenían en el proyecto. Haga clic en el nombre de una vista:

- **Una planta** muestra solo su planta, vista desde arriba.
- **Su combinación de capas** oculta los elementos de las capas que esa combinación oculta. La línea de estado indica cuántos elementos ha ocultado.
- **Su escala** aparece junto al nombre y en la línea de estado.
- **Una vista 3D** muestra todas las plantas.

Para volver a mostrarlo todo, use {{ui:Mostrar todo}} en {{ui:Mostrar}} y marque todas las plantas.

:::note
BimCraft localiza las capas mediante las asignaciones de capas del archivo IFC. Si el IFC se exportó sin ellas, una combinación de capas no oculta nada, y la línea de estado indica 0 elementos ocultos.
:::

## Abrir una hoja

En **Hojas**, cada hoja muestra su número, su nombre, su tamaño de papel y las vistas colocadas en ella.

- **PDF** guarda el PDF de la hoja desde el paquete.
- **DWG** abre el dibujo de la hoja en la vista 2D. Haga clic en cualquier vista para volver al modelo.
- **Abrir en …** envía el archivo de la hoja a la aplicación que lo trabaja, en una pestaña nueva: el PDF a MarkupCraft, el DWG a CadCraft. Solo aparece cuando esa aplicación está abierta junto a BimCraft. El archivo se lee del paquete al cargar la pestaña, y no se sube nada.

Una hoja sin ninguno de los dos dice **No hay ningún archivo en el paquete**.

## Ver propiedades en los grupos del proyecto

Seleccione un elemento. **Grupos de propiedades** muestra sus propiedades bajo los grupos que definió el proyecto, asociadas mediante el conjunto de propiedades y el nombre que da la definición para IFC, o si no, por su nombre. Las demás siguen en {{ui:Propiedades}} como de costumbre. **Definiciones de propiedades** enumera cada definición con su grupo, tipo y nombre IFC.

## Estándares y notas

- **Estándares** cuenta las capas, combinaciones de capas, juegos de plumas, tipos de línea, rellenos, superficies, compuestos y materiales del paquete.
- **Notas** enumera lo que el script no pudo obtener de esa versión de Archicad, cualquier campo que BimCraft no pudo leer y cualquier archivo que el paquete nombra pero no contiene.

## Solución de problemas

- **"… es un zip pero no un paquete de proyecto."** El zip no tiene `manifest.json`. Descomprímalo y abra el `.ifc` que contiene.
- **"… es un paquete de proyecto más nuevo del que puede leer este BimCraft."** Actualice BimCraft.
- **"… no contiene el modelo que nombra su manifiesto."** El zip se cortó o se editó. Vuelva a crear el paquete.
- **Una vista muestra todas las plantas.** Su planta no está en el IFC del modelo (la línea de estado lo indica). Compruebe que la exportación IFC incluyó esa planta.

Vea también [Trabajar entre dos programas BIM](topic:two-bim-programs) y [Lo que BimCraft lee de cada formato](topic:file-formats).
