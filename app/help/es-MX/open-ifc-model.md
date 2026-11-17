---
title: Abra un modelo IFC y recorra el modelo en 3D
summary: Abra un archivo IFC, oriente, desplace y acerque, y use Encuadrar, Superior, Frontal y Lateral para ubicarse.
keywords: ifc, 3d, órbita, encuadre, zoom, encuadrar, vista superior, vista frontal, vista lateral, navegar, cubo de vistas, cámara
from: 68b460dd
---

## Qué hará

Abra un modelo IFC, muévase en 3D y vaya a las vistas estándar. Unos cinco minutos.

Necesita un archivo `.ifc`. La mayoría de los programas BIM lo exportan; en Revit es **File > Export > IFC**. Vea [Lleve un archivo de proyecto a 3D mediante IFC](topic:rvt-to-ifc).

## Pasos

1. Haga clic en {{ui:Elegir un archivo}} (o en el área de arrastre arriba a la izquierda).
2. Elija su archivo `.ifc` y confírmelo.
3. Espere a que la barra de estado termine. Muestra "Iniciando el motor IFC…" la primera vez, luego "Leyendo el modelo…" y "Construyendo geometría: … de … elementos".
4. Mire el modelo: se abre en una vista de tres cuartos, encuadrado en la pantalla.
5. Haga clic en {{ui:Superior}} en la barra de herramientas sobre el modelo para mirar directamente hacia abajo.
6. Haga clic en {{ui:Frontal}} para ver el frente, y luego en {{ui:Lateral}} para ver desde el costado.
7. Haga clic en {{ui:Encuadrar}}, o presione {{key:F}}, para volver a la vista de tres cuartos del modelo completo.

## Qué debe ver

- El modelo en el centro, con aristas oscuras delgadas para un aspecto de dibujo.
- El panel {{ui:Archivo}} a la izquierda: el nombre del archivo, su tamaño, el esquema IFC (por ejemplo IFC2X3 o IFC4), el nombre del proyecto, la fase, el programa desde el que se exportó, el autor, la fecha de exportación, y los conteos de elementos y triángulos.
- Las listas {{ui:Niveles}} y {{ui:Elementos}} debajo.
- La barra de estado: "Abierto *nombre del archivo*: *n* elementos en *s* s".

## Cómo moverse

:::mouse
| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con el botón izquierdo |
| Encuadre | Arrastre con el botón derecho, o mantenga {{key:Shift}} (o {{key:Mod}}) y arrastre con el botón izquierdo |
| Zoom | Gire la rueda, o arrastre con el botón central |
| Ver todo | Presione {{key:F}} o haga clic en {{ui:Encuadrar}} |
:::

:::mac mouse
En trackpad: arrastre con un dedo presionado para orbitar; mantenga {{key:Shift}} o {{key:Mod}} y arrastre para encuadrar; desplace con dos dedos o pellizque para hacer zoom. Un clic con dos dedos es un clic derecho, y puede arrastrar con él para encuadrar, pero {{key:Shift}} y arrastrar es más fácil.
:::

:::touch
| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con un dedo |
| Zoom | Pellizque con dos dedos |
| Encuadre | Mueva dos dedos juntos |
| Ver todo | Toque {{ui:Encuadrar}} |
:::

La órbita siempre gira alrededor de un punto en el centro del modelo. El encuadre mueve ese punto, así que después de un encuadre largo la órbita puede sentirse descentrada: haga clic en {{ui:Encuadrar}} para restablecerla.

## Sombreado, aristas o alámbrico

Tres pequeños botones justo arriba del cubo de vistas determinan cómo se dibuja el modelo: {{ui:Sombreado}}, {{ui:Sombreado con aristas}} (el predeterminado) y {{ui:Alámbrico}}. También son comandos (Vista en los menús y en la lista Personalizar), así que pueden tener teclas propias. {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}} están en la fila {{ui:Vista}} de la barra de herramientas.

## Errores comunes

- **Esperar vistas con nombre.** BimCraft tiene cuatro vistas fijas ({{ui:Encuadrar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}), el cubo de vistas en la esquina inferior derecha y órbita libre. No guarda vistas.
- **Buscar plantas y secciones.** En esta versión no hay plantas 2D ni cajas de sección. Corte el modelo con un solo plano de {{ui:Sección}} ([Cortar un modelo IFC con un plano de sección](topic:section-plane)), o apague los niveles: [Mostrar y ocultar niveles, espacios y aristas](topic:storeys-and-spaces).
- **Abrir un archivo de proyecto y esperar 3D.** Un archivo de proyecto se abre como una tarjeta de archivo. Exporte IFC primero.
- **Abrir un `.ifczip`.** Descomprímalo, o exporte un `.ifc` simple.
- **Un modelo muy grande hace lenta la pestaña o la cierra.** Vea [Navegadores, dispositivos y memoria](topic:platforms).

## Siguiente

[Elija un elemento y lea sus propiedades](topic:inspect-element).
