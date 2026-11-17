---
title: Ver un plano DWG o DXF
summary: Abrí un DWG o DXF, moverte por el espacio modelo y las hojas, leer coordenadas y ver qué todavía no está dibujado.
keywords: bloques dinámicos, estados de visibilidad, dwg, dxf, cad, plano, 2d, ver, visor, desplazar, zoom, espacio modelo, espacio papel, diseño, coordenadas, abrir dwg
from: 4db3122a
---

## Lo que vas a hacer

Abrir un plano CAD, verlo en 3D o 2D, moverte por él, cambiar entre el espacio modelo y sus hojas, y leer coordenadas. BimCraft muestra planos DWG y DXF; no los edita ni los guarda. Para cambiar uno, hacé clic en {{ui:Edit in CadCraft}} (Editar en CadCraft) y el plano se abre en la app de dibujo CadCraft, en una pestaña nueva.

## Pasos

1. Hacé clic en {{ui:Choose a file}}, o soltá el plano sobre la página.
2. Elegí un archivo `.dwg` o `.dxf`.
3. Esperá mientras la línea de estado dice "Leyendo el plano…". Los planos grandes tardan unos segundos. Después dice cuánto duró la lectura, "renderizando…" mientras se dibuja la primera imagen, y cuánto duró eso.
4. El plano se abre en 3D, la forma más rápida de mostrar un plano grande (ver [Ver un plano DWG o DXF en 3D](topic:dwg-in-3d)). Hacé clic en {{ui:Model}} para la vista 2D plana. Para abrir siempre los planos en 2D, poné {{ui:Settings}} › {{ui:BimCraft}} › **Los planos se abren en** en {{ui:Model (2D)}}. Un plano sin nada en el espacio modelo, o un navegador que no puede mostrar 3D, se abre en 2D.
5. Mirá las pestañas encima del plano: {{ui:Model}} primero, y después una pestaña por hoja, en el orden propio del plano.
6. Hacé clic en una pestaña de hoja para ver esa hoja: el papel, con el modelo mostrado a través de sus ventanas gráficas.
7. Hacé clic en {{ui:Model}} para volver al espacio modelo.
8. Pasá el puntero sobre el plano y leé las coordenadas X e Y en la esquina.

## Lo que deberías ver

- El plano, ajustado a la ventana. Los colores siguen al plano; las líneas blancas (color 7) se dibujan con la tinta del tema, y los colores pálidos se oscurecen en el tema claro para que se lean.
- El panel {{ui:Drawing}} a la izquierda: archivo, tamaño, formato (por ejemplo "AutoCAD 2018 (AC1032)"), unidades, cantidad de entidades y capas, cantidad de hojas, y planos y equipos vinculados cuando los hay.
- La lista {{ui:Layers}} a la izquierda.
- A la derecha: cómo moverse, planos e imágenes vinculados, y **Todavía no dibujado**.

## Moverse

:::mouse
| Para | Hacer esto |
|---|---|
| Desplazar | Arrastrar con cualquier botón del mouse |
| Zoom | Girar la rueda; el punto bajo el puntero queda fijo |
| Ajustar | Doble clic, presionar {{key:F}}, o hacer clic en {{ui:Fit}} |
:::

:::mac mouse
En un trackpad, desplazar con dos dedos **hace zoom**, no desplaza. Pellizcar también hace zoom. Para desplazar, hacé clic y arrastrá.
:::

:::touch
Arrastrá con un dedo para desplazar. El zoom por pellizco todavía no está hecho para planos: tocá {{ui:Fit}} para ver la hoja entera, y usá mouse o trackpad para acercar.
:::

## Bloques dinámicos

Un bloque dinámico se dibuja como lo muestra el plano: cada bloque colocado en el estado de visibilidad con el que se guardó el plano ("Planta" o "Frente", "Pileta simple" o "Pileta doble"). A la derecha, **Bloques dinámicos** lista cada uno colocado en el espacio modelo: cuántos están colocados, los estados que muestran y cada estado que tiene el bloque. En {{ui:3D}}, hacé clic en un bloque colocado para ver **Bloque dinámico**, **Estado mostrado** y **Otros estados** en Propiedades. BimCraft no cambia estados.

## Todavía no dibujado

Algunos tipos de objetos no se dibujan en esta versión. Se cuentan bajo **Todavía no dibujado** a la derecha ("Estas partes del plano se omiten por ahora, no se adivinan."), para que sepas que falta algo. Se dibujan líneas, polilíneas, arcos, círculos, elipses, splines, sombreados y rellenos sólidos, texto y texto multilínea, bloques con atributos, cotas, guías y multiguías, tablas, imágenes y ventanas gráficas. Las caras 3D, mallas poliface y mallas de polígonos se dibujan como sus aristas vistas desde arriba; cambiá a {{ui:3D}} para verlas como superficies.

Un DXF binario no se abre: BimCraft lo informa. Guardalo otra vez como DXF ASCII, o como DWG, desde el programa que lo creó.

## Errores comunes

- **El plano se ve vacío.** Algunas capas pueden estar apagadas o congeladas en el propio plano; empiezan sin tildar en {{ui:Layers}}. Hacé clic en {{ui:All on}}. Si el estado dice "*nombre* es un plano vacío: no tiene líneas, texto ni bloques.", no hay nada en él.
- **Una hoja muestra un marco vacío.** La hoja puede depender de planos vinculados. Ver [Encontrar planos e imágenes vinculados](topic:dwg-linked-files).
- **El texto se ve un poco distinto.** BimCraft dibuja el texto en una fuente sans-serif angosta, no en las fuentes propias del plano, así que el texto puede ser un poco más ancho o más angosto que en el programa que lo creó.
- **"*nombre* no se pudo leer. Puede estar dañado, o guardado en un formato que el lector todavía no maneja."** El corchete al final indica el código de formato del archivo. Guardalo desde el programa que lo creó como DWG más viejo o como DXF, y probá de nuevo.
- **Esperar medir, dibujar o editar.** BimCraft solo muestra planos. Hacé clic en {{ui:Edit in CadCraft}} para abrir el mismo archivo en la app de dibujo CadCraft, que lo edita y guarda una copia como DWG o DXF. Tu archivo original no cambia, y los planos vinculados quedan en BimCraft. El botón solo aparece donde tenés acceso a CadCraft.

## Seguir leyendo

- [Ver un plano DWG o DXF en 3D](topic:dwg-in-3d)
- [Trabajar con capas y hojas](topic:dwg-layers-sheets)
- [Revisar un plano en vista de impresión](topic:print-view)
