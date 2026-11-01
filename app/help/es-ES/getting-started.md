---
title: Primeros pasos con BimCraft
summary: Qué hace BimCraft hoy, cómo abrir su primer modelo, verlo en 3D, cambiar un valor y guardar una copia.
keywords: inicio, primer uso, abrir, ifc, rvt, dwg, inicio rápido, introducción, visor, bim
from: fc2dea19
---

BimCraft es la aplicación de modelos de edificios de la familia CadCraft. En esta versión **abre, lee e inspecciona** archivos de edificios, y **edita los datos de los modelos IFC**. Todavía no dibuja ni modela elementos nuevos. Piense en ella como un visor y comprobador de modelos que además permite corregir nombres, etiquetas y valores de propiedades de un archivo IFC.

Qué abre:

| Archivo | Qué obtiene |
|---|---|
| IFC (`.ifc`) | El modelo completo en 3D: órbita, niveles, propiedades de los elementos y edición de nombres y valores de propiedades |
| Archivos de proyecto y de familia (`.rvt`, `.rfa`, `.rte`, `.rft`) | Una ficha del archivo: la versión en la que se guardó, la información del proyecto, la imagen de vista previa y los archivos vinculados. Sin 3D. |
| DWG y DXF | El dibujo en 2D: espacio modelo y todas las hojas, capas, dibujos vinculados, vista de impresión y una tabla de equipos para los dibujos de restauración con etiquetas |
| Una carpeta de proyecto | Un informe de todos los modelos de la carpeta: copias de seguridad, vínculos, copias dañadas y una sugerencia de con qué archivo empezar |

Todo ocurre en su navegador, en su ordenador. **No se sube nada.** Consulte [Archivos que BimCraft abre y guarda](topic:files) para los detalles.

## Abrir BimCraft

1. Abra BimCraft en un navegador actual. Chrome, Edge, Firefox y Safari funcionan; [Navegadores, dispositivos y memoria](topic:platforms) enumera las diferencias.
2. Espere a que aparezca la pantalla vacía que dice "Abra un modelo de edificio."

:::note
BimCraft se ejecuta en el navegador y, en el escritorio, dentro de CadCraft Studio, con las demás aplicaciones. Todavía no se puede guardar en la nube: usted abre archivos desde su ordenador y guarda copias en él.
:::

## Abrir su primer modelo

La forma más rápida de ver lo que hace BimCraft es un archivo IFC.

1. Pulse {{ui:Elegir un archivo}} en el centro de la pantalla.
2. Elija un archivo `.ifc` en {{pick:mac=el Finder|windows=el Explorador de archivos|linux=su gestor de archivos}} y confirme.
3. Espere mientras la línea de estado de la parte inferior de la pantalla dice "Iniciando el motor IFC…" y después "Generando geometría".

Debería ver el modelo en 3D en el centro, un panel {{ui:Archivo}} y una lista {{ui:Niveles}} a la izquierda, y un panel {{ui:Propiedades}} vacío a la derecha. La línea de estado termina con "Se abrió" y el número de elementos.

:::tip
También puede arrastrar un archivo desde {{pick:mac=el Finder|windows=el Explorador de archivos|linux=su gestor de archivos}} directamente a la página. La pantalla muestra "Suelte para abrir" mientras arrastra.
:::

:::offline
El motor IFC se carga desde el sitio la primera vez que abre un modelo IFC, salvo que BimCraft se haya guardado para usarlo sin conexión. Los dibujos DWG y DXF, los archivos de proyecto y las carpetas no necesitan nada más: sus lectores forman parte de la aplicación. Si el botón de la barra de la aplicación dice {{ui:Listo sin conexión}}, todo se abre sin conexión. Si no, los modelos IFC no se abrirán hasta que se vuelva a conectar, salvo que ya se haya abierto uno en esta pestaña. Consulte [En línea y sin conexión](topic:online-offline).
:::

:::online
¿Va a ir a un sitio sin conexión? Pulse {{ui:Guardar para uso sin conexión}} en la barra de la aplicación y espere a {{ui:Listo sin conexión}}. La copia guardada (unos 11 MB) incluye el motor IFC. Consulte [Trabajar sin conexión](common:offline).
:::

## Mirar alrededor

:::mouse
1. Arrastre con el botón izquierdo del ratón para orbitar alrededor del modelo.
2. Gire la rueda para acercar o alejar.
3. Arrastre con el botón derecho del ratón para desplazar la vista. En un trackpad de Mac, mantenga pulsada {{key:Shift}} y arrastre.
4. Pulse {{key:F}} o pulse {{ui:Encuadrar}} para volver a ver todo el modelo.
:::

:::touch
1. Arrastre con un dedo para orbitar.
2. Junte o separe dos dedos para acercar o alejar, y muévalos juntos para desplazar la vista.
3. Toque {{ui:Encuadrar}} para volver a ver todo el modelo.
:::

## Hacer algo real: corregir una etiqueta

1. Pulse un muro, una puerta o cualquier elemento del modelo. Se vuelve azul y sus propiedades aparecen a la derecha.
2. En el panel {{ui:Propiedades}}, pulse el valor junto a **Etiqueta**.
3. Escriba la etiqueta nueva y pulse {{key:Enter}}.
4. Mire la sección {{ui:Cambios}} que se ha abierto a la izquierda: su cambio aparece con el valor anterior y el nuevo.

## Guardar una copia

1. Pulse {{ui:Guardar como IFC}} en la sección {{ui:Cambios}}, o pulse {{key:Mod+S}}.
2. Busque el archivo nuevo en su carpeta de descargas. Tiene el nombre del original con " (editado)" añadido, por ejemplo `Clínica (editado).ifc`.

Su archivo original nunca se modifica. [Cambiar propiedades IFC y guardar una copia editada](topic:edit-ifc-properties) explica la edición con detalle.

## Adónde ir a continuación

- [La pantalla de BimCraft](topic:workspace): cada panel por su nombre.
- [Si viene de otros programas BIM y de dibujo](topic:coming-from): qué resulta distinto si está acostumbrado a Revit.
- [Abrir una carpeta de proyecto completa](topic:open-project-folder): apunte BimCraft a una carpeta de proyecto y deje que ordene los archivos.
- [Ver un dibujo DWG o DXF](topic:view-dwg): hojas, capas y vista de impresión.
