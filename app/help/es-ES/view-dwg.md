---
title: Ver un dibujo DWG o DXF
summary: Abrir un DWG o DXF, moverse por el espacio modelo y las hojas, leer coordenadas y ver lo que todavía no está dibujado.
keywords: bloques dinámicos, estados de visibilidad, dwg, dxf, cad, dibujo, 2d, ver, visor, desplazar, zoom, espacio modelo, espacio papel, presentación, coordenadas, abrir dwg
from: 4db3122a
---

## Qué hará

Abra un dibujo CAD, véalo en 3D o 2D, muévase por él, cambie entre el espacio modelo y sus hojas, y lea coordenadas. BimCraft muestra dibujos DWG y DXF; no los edita ni los guarda. Para cambiarlo, haga clic en {{ui:Edit in CadCraft}} y el dibujo se abre en la aplicación de delineación de CadCraft, en una pestaña nueva.

## Pasos

1. Haga clic en {{ui:Choose a file}}, o suelte el dibujo sobre la página.
2. Elija un archivo `.dwg` o `.dxf`.
3. Espere mientras la línea de estado dice "Leyendo el dibujo…". Los dibujos grandes tardan unos segundos. Después indica cuánto tardó la lectura, "renderizando…" mientras se dibuja la primera imagen, y cuánto tardó eso.
4. El dibujo se abre en 3D, la forma más rápida de mostrar un dibujo grande (véase [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d)). Haga clic en {{ui:Model}} para la vista 2D plana. Para abrir siempre los dibujos en 2D, ponga {{ui:Settings}} › BimCraft › **Los dibujos se abren en** en {{ui:Model (2D)}}. Un dibujo sin nada en el espacio modelo, o un navegador que no puede mostrar 3D, se abre en 2D.
5. Mire las pestañas sobre el dibujo: primero {{ui:Model}}, y luego una pestaña por hoja, en el orden propio del dibujo.
6. Haga clic en una pestaña de hoja para ver esa hoja: el papel, con el modelo mostrado a través de sus ventanas gráficas.
7. Haga clic en {{ui:Model}} para volver al espacio modelo.
8. Mueva el puntero sobre el dibujo y lea las coordenadas X e Y en la esquina.

## Qué debe ver

- El dibujo, ajustado a la ventana. Los colores siguen al dibujo; las líneas blancas (color 7) se dibujan con la tinta del tema, y los colores pálidos se oscurecen en el tema claro para que sigan siendo legibles.
- El panel {{ui:Drawing}} a la izquierda: archivo, tamaño, formato (por ejemplo "AutoCAD 2018 (AC1032)"), unidades, recuento de entidades y de capas, número de hojas, y los dibujos y equipos vinculados cuando los hay.
- La lista {{ui:Layers}} a la izquierda.
- A la derecha: cómo desplazarse, dibujos e imágenes vinculados, y **Aún no dibujado**.

## Desplazarse

:::mouse
| Para | Haga esto |
|---|---|
| Desplazar | Arrastre con cualquier botón del ratón |
| Zoom | Gire la rueda; el punto bajo el puntero se mantiene fijo |
| Encuadrar | Haga doble clic, pulse {{key:F}}, o haga clic en {{ui:Fit}} |
:::

:::mac mouse
En un trackpad, desplazar con dos dedos **hace zoom**, no desplaza. Pellizcar también hace zoom. Para desplazar, haga clic y arrastre.
:::

:::touch
Arrastre con un dedo para desplazar. El zoom por pellizco todavía no está implementado para los dibujos: toque {{ui:Fit}} para ver la hoja entera, y use un ratón o un trackpad para acercar.
:::

## Bloques dinámicos

Un bloque dinámico se dibuja como lo muestra el dibujo: cada bloque colocado en el estado de visibilidad con el que se guardó el dibujo ("Plan" o "Front", "Single bowl" o "Double bowl"). A la derecha, **Bloques dinámicos** enumera cada uno colocado en el espacio modelo: cuántos hay colocados, los estados que muestran y cada estado que tiene el bloque. En {{ui:3D}}, haga clic en un bloque colocado para ver **Bloque dinámico**, **Estado mostrado** y **Otros estados** en Propiedades. BimCraft no cambia de estado.

## Aún no dibujado

Algunos tipos de objetos no se dibujan en esta versión. Se cuentan bajo **Aún no dibujado** a la derecha ("Estas partes del dibujo se omiten por ahora, no se adivinan."), para que sepa que falta algo. Se dibujan: líneas, polilíneas, arcos, círculos, elipses, splines, tramas y rellenos sólidos, texto y texto multilínea, bloques con atributos, acotaciones, directrices y multidirectrices, tablas, imágenes y ventanas gráficas. Las caras 3D, las mallas de caras poligonales y las mallas de polígonos se dibujan como sus aristas vistas desde arriba; cambie a {{ui:3D}} para verlas como superficies.

Un DXF binario no se abre: BimCraft lo indica. Guárdelo de nuevo como DXF ASCII, o como DWG, desde el programa que lo creó.

## Errores frecuentes

- **El dibujo parece vacío.** Algunas capas pueden estar desactivadas o inmovilizadas en el propio dibujo; empiezan sin marcar en {{ui:Layers}}. Haga clic en {{ui:All on}}. Si el estado dice "*nombre* es un dibujo vacío: no contiene líneas, texto ni bloques.", no hay nada en él.
- **Una hoja muestra un marco vacío.** La hoja puede depender de dibujos vinculados. Véase [Buscar dibujos e imágenes vinculados](topic:dwg-linked-files).
- **El texto se ve un poco distinto.** BimCraft dibuja el texto con una fuente sans serif estrecha, no con las fuentes propias del dibujo, así que el texto puede ser algo más ancho o más estrecho que en el programa que lo creó.
- **"*nombre* no se pudo leer. Puede estar dañado, o guardado en un formato que el lector todavía no maneja."** El corchete al final indica el código de formato del archivo. Guárdelo desde el programa que lo creó como DWG anterior o como DXF, e inténtelo de nuevo.
- **Necesita medir, dibujar o editar.** BimCraft solo muestra dibujos. Haga clic en {{ui:Edit in CadCraft}} para abrir el mismo archivo en la aplicación de delineación de CadCraft, que lo edita y guarda una copia como DWG o DXF. Su archivo original no cambia, y los dibujos vinculados se quedan en BimCraft. El botón aparece solo donde CadCraft está disponible para usted.

## Siguiente

- [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d)
- [Trabajar con capas y hojas](topic:dwg-layers-sheets)
- [Revisar un dibujo en vista de impresión](topic:print-view)
