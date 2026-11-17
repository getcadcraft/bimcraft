---
title: Abrir un paquete de proyecto
summary: Un paquete de proyecto es un zip con un modelo, sus vistas, sus presentaciones y sus grupos de propiedades. Ábralo, muestre una vista con su nivel y sus capas, abra una presentación y vea propiedades en los grupos propios del proyecto.
keywords: paquete, paquete de proyecto, ccbundle, zip, vistas, mapa de vistas, presentaciones, libro de presentaciones, combinación de capas, grupos de propiedades, estándares, pln, plantilla
from: b5b86e8f
---

## Qué hará

Abra un **paquete de proyecto** (`.ccbundle.zip`) y trabaje con el proyecto tal como fue organizado: sus vistas, sus presentaciones y sus grupos de propiedades, sobre el modelo.

Un paquete contiene:

- el modelo como IFC,
- las presentaciones como PDF y DWG,
- una lista de lo que IFC no incluye: las vistas (cada una con su nivel, su combinación de capas y su escala), las presentaciones y los dibujos colocados en ellas, las definiciones de propiedades en sus grupos, las clasificaciones y los estándares, como capas, juegos de plumas, tipos de línea, sombreados, superficies y compuestos.

Los paquetes los escribe un script de código abierto que se ejecuta dentro de Archicad y le pide a Archicad mismo estas listas. BimCraft nunca lee archivos `.pln` ni `.tpl` directamente; vea [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

## Crear un paquete

El script es una vista previa: todavía no se ha probado en todas las versiones de Archicad. Obténgalo en [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Necesita Archicad 24 o posterior y Python 3.8 o posterior; no hay nada más que instalar.

1. Guarde `archicad_bundle.py` en una carpeta, por ejemplo `C:\cc-bundle`.
2. En Archicad, abra el proyecto y cree un juego de publicación llamado exactamente **CadCraft bundle**: la vista 3D como IFC, cada presentación como PDF y cada presentación de nuevo como DWG, publicados a archivos en disco en una sola carpeta plana.
3. Con el proyecto abierto, ejecute `python archicad_bundle.py --probe --out .` una vez. Solo lee, y escribe `probe.json`.
4. Ejecute `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (use el traductor IFC que eligió). Archicad publica el juego y el script escribe `<project>.ccbundle.zip`.

Si la publicación mediante el script falla, publique el juego a mano y ejecute `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. El README del repositorio tiene todas las opciones. Si algo no llega, abra una incidencia allí y adjunte `probe.json`.

## Abrir un paquete

1. Haga clic en {{ui:Elegir un archivo}}, o arrastre el `.ccbundle.zip` sobre BimCraft. En una carpeta que abrió con {{ui:Abrir una carpeta}}, los paquetes aparecen en **Paquetes de proyecto**; haga clic en uno por su nombre.
2. El modelo se abre como cualquier IFC, y aparece la sección **Paquete de proyecto** a la izquierda, debajo de los datos del archivo.

Nada se sube: el paquete se lee en su computadora, un archivo a la vez, así que un modelo grande no se copia dos veces.

## Mostrar una vista

En **Vistas**, las vistas se agrupan por las carpetas que tenían en el proyecto. Haga clic en el nombre de una vista:

- **Una planta** muestra solo su nivel, visto desde arriba.
- **Su combinación de capas** oculta los elementos de las capas que esa combinación oculta. La línea de estado indica cuántos elementos ocultó.
- **Su escala** aparece junto al nombre y en la línea de estado.
- **Una vista 3D** muestra todos los niveles.

Para volver a mostrar todo, use {{ui:Mostrar todo}} en {{ui:Mostrar}} y marque todos los niveles.

:::note
BimCraft encuentra las capas mediante las asignaciones de capas del archivo IFC. Si el IFC se exportó sin ellas, una combinación de capas no oculta nada, y la línea de estado indica 0 elementos ocultos.
:::

## Abrir una presentación

En **Presentaciones**, cada una muestra su número, su nombre, su tamaño de papel y las vistas colocadas en ella.

- **PDF** guarda el PDF de la presentación desde el paquete.
- **DWG** abre el dibujo de la presentación en la vista 2D. Haga clic en cualquier vista para volver al modelo.
- **Abrir en …** envía el archivo de la presentación a la aplicación que trabaja con él, en una pestaña nueva: el PDF a MarkupCraft, el DWG a CadCraft. Solo aparece donde esa aplicación está abierta junto a BimCraft. El archivo se lee del paquete mientras carga la pestaña, y no se sube nada.

Una presentación sin ninguno de los dos dice **No hay archivo en el paquete**.

## Ver propiedades en los grupos del proyecto

Elija un elemento. **Grupos de propiedades** muestra sus propiedades bajo los grupos que definió el proyecto, asociadas mediante el conjunto de propiedades y el nombre que la definición da para IFC, o bien por su nombre. El resto permanece en {{ui:Propiedades}} como de costumbre. **Definiciones de propiedades** enumera cada definición con su grupo, tipo y nombre IFC.

## Estándares y notas

- **Estándares** cuenta las capas, combinaciones de capas, juegos de plumas, tipos de línea, sombreados, superficies, compuestos y materiales del paquete.
- **Notas** enumera lo que el script no pudo obtener de esa versión de Archicad, cualquier campo que BimCraft no pudo leer y cualquier archivo que el paquete nombra pero no contiene.

## Solución de problemas

- **"… es un zip pero no un paquete de proyecto."** El zip no tiene `manifest.json`. Descomprímalo y abra el `.ifc` que contiene.
- **"… es un paquete de proyecto más nuevo que el que lee este BimCraft."** Actualice BimCraft.
- **"… no contiene el modelo que nombra su manifiesto."** El zip quedó incompleto o se editó. Vuelva a crear el paquete.
- **Una vista muestra todos los niveles.** Su nivel no está en el IFC del modelo (la línea de estado lo indica). Revise que la exportación IFC incluyera ese nivel.

Vea también [Trabajar entre dos programas BIM](topic:two-bim-programs) y [Lo que BimCraft lee de cada formato](topic:file-formats).
