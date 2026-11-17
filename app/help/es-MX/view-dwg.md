---
title: Ver un dibujo DWG o DXF
summary: Abra un DWG o DXF, muévase por el espacio modelo y las hojas, lea coordenadas y vea lo que todavía no está dibujado.
keywords: bloques dinámicos, estados de visibilidad, dwg, dxf, cad, dibujo, 2d, ver, visor, encuadre, zoom, espacio modelo, espacio papel, presentación, coordenadas, abrir dwg
from: 4db3122a
---

## Qué hará

Abra un dibujo CAD, véalo en 3D o 2D, muévase por él, cambie entre el espacio modelo y sus hojas, y lea coordenadas. BimCraft muestra dibujos DWG y DXF; no los edita ni los guarda. Para cambiar uno, haga clic en {{ui:Editar en CadCraft}} y el dibujo se abre en la aplicación de dibujo de CadCraft, en una pestaña nueva.

## Pasos

1. Haga clic en {{ui:Elegir un archivo}}, o arrastre el dibujo a la página.
2. Elija un archivo `.dwg` o `.dxf`.
3. Espere mientras la línea de estado dice "Leyendo el dibujo…". Los dibujos grandes tardan unos segundos. Luego indica cuánto tardó la lectura, "dibujando…" mientras se dibuja la primera imagen, y cuánto tardó eso.
4. El dibujo se abre en 3D, la forma más rápida de mostrar un dibujo grande (vea [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d)). Haga clic en {{ui:Modelo}} para la vista plana 2D. Para abrir siempre los dibujos en 2D, ponga {{ui:Configuración}} › {{ui:BimCraft}} › **Los dibujos se abren en** en {{ui:Modelo (2D)}}. Un dibujo sin nada en el espacio modelo, o un navegador que no puede mostrar 3D, se abre en 2D.
5. Mire las pestañas sobre el dibujo: primero {{ui:Modelo}}, luego una pestaña por hoja, en el orden propio del dibujo.
6. Haga clic en una pestaña de hoja para ver esa hoja: el papel, con el modelo mostrado a través de sus ventanas gráficas.
7. Haga clic en {{ui:Modelo}} para regresar al espacio modelo.
8. Mueva el puntero sobre el dibujo y lea las coordenadas X y Y en la esquina.

## Qué debe ver

- El dibujo, ajustado a la ventana. Los colores siguen al dibujo; las líneas blancas (color 7) se dibujan en el color de tinta del tema, y los colores pálidos se oscurecen en el tema claro para que sigan siendo legibles.
- El panel {{ui:Dibujo}} a la izquierda: archivo, tamaño, formato (por ejemplo "AutoCAD 2018 (AC1032)"), unidades, conteo de entidades y capas, número de hojas, y los dibujos vinculados y equipos cuando los hay.
- La lista {{ui:Capas}} a la izquierda.
- A la derecha: cómo moverse, dibujos e imágenes vinculados, y **Aún no dibujado**.

## Moverse

:::mouse
| Para | Haga esto |
|---|---|
| Desplazar la vista | Arrastre con cualquier botón del ratón |
| Zoom | Gire la rueda del ratón; el punto bajo el puntero se queda fijo |
| Encuadrar | Haga doble clic, presione {{key:F}}, o haga clic en {{ui:Encuadrar}} |
:::

:::mac mouse
En un trackpad, desplazar con dos dedos **hace zoom**, no desplaza la vista. Pellizcar también hace zoom. Para desplazar la vista, haga clic y arrastre.
:::

:::touch
Arrastre con un dedo para desplazar la vista. El zoom por pellizco todavía no está disponible para dibujos: toque {{ui:Encuadrar}} para ver la hoja completa, y use un ratón o trackpad para acercar.
:::

## Bloques dinámicos

Un bloque dinámico se dibuja como lo muestra el dibujo: cada bloque colocado en el estado de visibilidad con que se guardó el dibujo ("Plan" o "Front", "Single bowl" o "Double bowl"). En **Bloques dinámicos**, a la derecha, aparece cada uno colocado en el espacio modelo: cuántos hay colocados, los estados que muestran y todos los estados que tiene el bloque. En {{ui:3D}}, haga clic en un bloque colocado para ver **Bloque dinámico**, **Estado mostrado** y **Otros estados** en Propiedades. BimCraft no cambia estados.

## Aún no dibujado

Algunos tipos de objetos no se dibujan en esta versión. Se cuentan bajo **Aún no dibujado**, a la derecha: estas partes del dibujo se omiten por ahora, no se suponen, para que sepa que falta algo. Se dibujan líneas, polilíneas, arcos, círculos, elipses, splines, sombreados y rellenos sólidos, texto y texto de líneas múltiples, bloques con atributos, cotas, directrices y directrices múltiples, tablas, imágenes y ventanas gráficas. Las caras 3D, las mallas poliédricas y las mallas de polígonos se dibujan como sus aristas vistas desde arriba; cambie a {{ui:3D}} para verlas como superficies.

Un DXF binario no se abre: BimCraft lo indica. Guárdelo de nuevo como DXF ASCII, o como DWG, desde el programa que lo creó.

## Errores comunes

- **El dibujo se ve vacío.** Algunas capas pueden estar apagadas o inutilizadas en el propio dibujo; empiezan desmarcadas en {{ui:Capas}}. Haga clic en {{ui:Todas activadas}}. Si la línea de estado dice "*name* es un dibujo vacío: no contiene líneas, texto ni bloques.", no hay nada en él.
- **Una hoja muestra un marco vacío.** La hoja puede depender de dibujos vinculados. Vea [Encontrar dibujos e imágenes vinculados](topic:dwg-linked-files).
- **El texto se ve un poco distinto.** BimCraft dibuja el texto con una fuente sans-serif angosta, no con las fuentes propias del dibujo, así que el texto puede verse un poco más ancho o más angosto que en el programa que lo creó.
- **"*name* no se pudo leer. Puede estar dañado, o guardado en un formato que el lector todavía no maneja."** El corchete al final indica el código de formato del archivo. Guárdelo desde el programa que lo creó como DWG de versión anterior o como DXF, y vuelva a intentarlo.
- **Quiere medir, dibujar o editar.** BimCraft solo muestra dibujos. Haga clic en {{ui:Editar en CadCraft}} para abrir el mismo archivo en la aplicación de dibujo de CadCraft, que lo edita y guarda una copia como DWG o DXF. Su archivo original no cambia, y los dibujos vinculados se quedan en BimCraft. El botón solo aparece donde CadCraft está disponible para usted.

## Siguiente

- [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d)
- [Trabajar con capas y hojas](topic:dwg-layers-sheets)
- [Revisar un dibujo en vista de impresión](topic:print-view)
