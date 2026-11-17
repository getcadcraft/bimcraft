---
title: Abrir un modelo IFC y mirar alrededor en 3D
summary: Abra un archivo IFC, oriente, desplace y acerque, y use Encuadrar, Superior, Frontal y Lateral para orientarse.
keywords: ifc, 3d, órbita, desplazar, zoom, encuadrar, vista superior, vista frontal, vista lateral, navegar, cubo de vista, cámara
from: 68b460dd
---

## Qué va a hacer

Abra un modelo IFC, muévase por él en 3D y vaya a las vistas estándar. Unos cinco minutos.

Necesita un archivo `.ifc`. La mayoría de programas BIM lo exportan; en Revit es **Archivo > Exportar > IFC**. Véase [Llevar un archivo de proyecto a 3D mediante IFC](topic:rvt-to-ifc).

## Pasos

1. Haga clic en {{ui:Elegir un archivo}} (o en la zona de colocación arriba a la izquierda).
2. Elija su archivo `.ifc` y confírmelo.
3. Espere a que termine la línea de estado. Muestra "Iniciando el motor IFC…" la primera vez, después "Leyendo el modelo…" y "Construyendo geometría: … de … elementos".
4. Mire el modelo: se abre en una vista de tres cuartos, encuadrado en la pantalla.
5. Haga clic en {{ui:Superior}} en la barra de herramientas sobre el modelo para mirar directamente hacia abajo.
6. Haga clic en {{ui:Frontal}} para mirar el frente, y luego en {{ui:Lateral}} para mirar desde el lado.
7. Haga clic en {{ui:Encuadrar}}, o pulse {{key:F}}, para volver a la vista de tres cuartos de todo el modelo.

## Lo que debe ver

- El modelo en el centro, con aristas oscuras finas para un aspecto de dibujo.
- El panel {{ui:Archivo}} a la izquierda: el nombre y el tamaño del archivo, el esquema IFC (por ejemplo IFC2X3 o IFC4), el nombre del proyecto, la fase, el programa desde el que se exportó, el autor, la fecha de exportación y los recuentos de elementos y triángulos.
- Las listas {{ui:Niveles}} y {{ui:Elementos}} debajo.
- La línea de estado: "Abierto *nombre del archivo*: *n* elementos en *s* s".

## Desplazarse

:::mouse
| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con el botón izquierdo |
| Desplazar | Arrastre con el botón derecho, o mantenga {{key:Shift}} (o {{key:Mod}}) y arrastre con el botón izquierdo |
| Acercar o alejar | Gire la rueda, o arrastre con el botón central |
| Ver todo | Pulse {{key:F}} o haga clic en {{ui:Encuadrar}} |
:::

:::mac mouse
En un panel táctil: arrastre con un dedo pulsado para orbitar; mantenga {{key:Shift}} o {{key:Mod}} y arrastre para desplazarse; desplace con dos dedos o pellizque para acercar. Un clic con dos dedos es un clic derecho, y puede arrastrar con él para desplazar, pero {{key:Shift}} y arrastrar es más fácil.
:::

:::touch
| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con un dedo |
| Acercar o alejar | Pellizque con dos dedos |
| Desplazar | Mueva dos dedos juntos |
| Ver todo | Toque {{ui:Encuadrar}} |
:::

La órbita siempre gira alrededor de un punto en el centro del modelo. Desplazar mueve ese punto, así que tras un desplazamiento largo la órbita puede parecer descentrada: haga clic en {{ui:Encuadrar}} para restablecerla.

## Sombreado, aristas o alámbrico

Tres pequeños botones justo encima del cubo de vista eligen cómo se dibuja el modelo: {{ui:Sombreado}}, {{ui:Sombreado con aristas}} (el predeterminado) y {{ui:Alámbrico}}. También son comandos (Vista en los menús y en la lista de Personalizar), así que pueden tener teclas propias. {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}} están en la fila {{ui:Vista}} de la barra de herramientas.

## Errores frecuentes

- **Esperar vistas con nombre.** BimCraft tiene cuatro vistas fijas ({{ui:Encuadrar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}), el cubo de vista en la esquina inferior derecha y la órbita libre. No guarda vistas.
- **Buscar plantas 2D y secciones.** En esta versión no hay plantas 2D ni cajas de sección. Corte el modelo con un único plano de {{ui:Sección}} ([Cortar un modelo IFC con un plano de sección](topic:section-plane)), o oculte plantas: [Mostrar y ocultar plantas, espacios y aristas](topic:storeys-and-spaces).
- **Abrir un archivo de proyecto y esperar 3D.** Un archivo de proyecto se abre como una ficha. Exporte IFC primero.
- **Abrir un `.ifczip`.** Descomprímalo, o exporte un `.ifc` simple.
- **Un modelo muy grande hace lenta o bloquea la pestaña.** Véase [Navegadores, dispositivos y memoria](topic:platforms).

## Siguiente

[Seleccionar un elemento y leer sus propiedades](topic:inspect-element).
