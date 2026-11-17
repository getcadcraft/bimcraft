---
title: Ver un dibujo DWG o DXF en 3D
summary: Cambie el espacio modelo de un dibujo a 3D para ver elevaciones, espesores, caras 3D, mallas y bloques, orbitar alrededor, hacer clic en un objeto para ver sus propiedades y ver lo que aún no está dibujado.
keywords: 3d, dwg, dxf, dibujo, espacio modelo, orbitar, sección, corte, recorte, elegir, seleccionar, propiedades, atributos, identificador, elevación, espesor, extrusión, 3dface, polyface, malla, polilínea 3d, bloques, vistas, perspectiva, paralela, extensión, acis, sólidos
from: a0c6cd17
---

## Qué hará

Vea el espacio modelo de un dibujo en 3D. Las líneas y polilíneas están a sus alturas reales, los objetos con espesor se levantan como muros, y las caras 3D, mallas y bloques 3D se muestran como superficies que puede orbitar. Las hojas siguen siendo 2D.

## Pasos

1. Abra un DWG o DXF. Vea [Ver un dibujo DWG o DXF](topic:view-dwg). Se abre en 3D salvo que {{ui:Configuración}} › {{ui:BimCraft}} › **Los dibujos se abren en** indique {{ui:Modelo (2D)}}.
2. Desde 2D, haga clic en {{ui:3D}} en la barra sobre el dibujo, o pulse {{key:3}}.
3. Espere un momento la primera vez: la línea de estado indica "Construyendo el dibujo en 3D…", y luego cuántas líneas y caras muestra.
4. Oriente, desplace y haga zoom (vea la tabla de abajo).
5. Haga clic en una vista de la segunda barra: {{ui:Iso}}, {{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Izquierda}} o {{ui:Derecha}}.
6. Haga clic en {{ui:Perspectiva}} para cambiar entre una vista en perspectiva y una vista paralela.
7. Haga clic en {{ui:Extensión}} o pulse {{key:F}} para volver a ver el dibujo completo.
8. Haga clic en {{ui:3D}} de nuevo, pulse {{key:3}}, o haga clic en {{ui:Modelo}} o en una pestaña de hoja para volver a 2D.

## Qué debe ver

- El espacio modelo en 3D, con Z hacia arriba, en los colores propios del dibujo. Las caras son un tono más claras que sus aristas.
- Las capas que desactive en {{ui:Capas}} también desaparecen de la vista 3D.
- A la derecha: el número de líneas y caras, el tamaño del dibujo en X, Y y Z, **Solo en la vista 2D** y **No dibujado todavía**.

## Cortarlo con un plano de sección

Haga clic en {{ui:Sección}} en la barra 3D, o pulse {{key:X}}. La barra situada debajo funciona como con los modelos IFC (vea [Cortar un modelo IFC con un plano de sección](topic:section-plane)): corte desde {{ui:Superior}}, {{ui:Frontal}} o {{ui:Lateral}}, arrastre o escriba el desplazamiento —en las unidades propias del dibujo, aquí— y use {{ui:Invertir}} para conservar el otro lado. Lo que el plano corta no se puede elegir. Al volver a 2D, el corte desaparece.

## Ver las propiedades de un objeto

Haga clic en un objeto de la vista 3D. Se muestra con el color de selección y {{ui:Propiedades}} muestra lo que dice el archivo sobre él: su tipo, capa, color, tipo de línea e identificador, y luego sus propios datos, como el inicio, el final y la longitud de una línea, el centro y el radio de un círculo, las esquinas de una cara 3D, o el bloque, el punto de inserción, la escala, el giro y los valores de atributo de una referencia de bloque.

- Una referencia de bloque se elige como conjunto, y también los bloques anidados en ella.
- Un clic a unos píxeles de una línea elige la línea.
- Mantenga pulsada {{key:Mod}} y haga clic para elegir más objetos, o para quitar uno; {{ui:Propiedades}} los cuenta entonces por tipo.
- {{key:Esc}}, o un clic en un espacio vacío, anula la selección.
- Los objetos de capas desactivadas no se pueden elegir.

## Desplazarse

:::mouse
| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con el botón central o con el izquierdo |
| Desplazar | Arrastre con el botón derecho, o mantenga pulsada {{key:Shift}} y arrastre |
| Zoom | Gire la rueda; hace zoom hacia lo que hay bajo el puntero |
| Ver todo | {{ui:Extensión}} o {{key:F}} |
| Mirar desde un lado | Haga clic en una cara, arista o esquina del cubo de vista en la esquina inferior derecha |
:::

El cubo de vista puede sustituirse por un icono de ejes, o ocultarse, en {{ui:Configuración}}. Vea [Configuración de BimCraft](topic:settings).

:::mac mouse
En un trackpad, deslice con dos dedos para orbitar, mantenga pulsada {{key:Shift}} y deslice para desplazar, y pellizque para hacer zoom.
:::

:::touch
Arrastre con un dedo para orbitar. Pellizque con dos dedos para hacer zoom, y júntelos para desplazar.
:::

## Qué se dibuja en 3D

| En el dibujo | En 3D |
|---|---|
| Líneas, polilíneas 3D | A sus alturas reales |
| Polilíneas, círculos, arcos, elipses | En su propio plano, a su elevación, inclinados cuando el dibujo los inclina |
| Espesor en líneas, polilíneas, círculos y arcos | Muros de esa altura; los círculos quedan cerrados arriba y abajo |
| Caras 3D, mallas polyface, mallas de polígonos | Superficies sombreadas con sus aristas visibles |
| Bloques | Colocados, girados y escalados en 3D, también los bloques anidados |
| Tramas | Sus contornos |
| Líneas 2D simples | Planas, donde se dibujaron |

## Solo en la vista 2D

Texto, texto multilínea y los atributos visibles de los bloques se dibujan en 3D, en su propio plano y a su altura, y un clic sobre ellos los elige. Las polilíneas anchas muestran su ancho como una banda plana. Las multidirectrices, las imágenes y los patrones de trama se cuentan en **Solo en la vista 2D**: véalos en la pestaña {{ui:Modelo}} o en las hojas.

## No dibujado todavía

Los sólidos y superficies almacenados como cuerpos ACIS (sólidos 3D, cuerpos, regiones y superficies) y las mallas de subdivisión se enumeran en **No dibujado todavía** con su cantidad. Se omiten; no se suponen.

## Errores habituales

- **Todo se ve plano.** El dibujo es 2D: sus líneas no tienen altura. Haga clic en {{ui:Frontal}} para comprobarlo; un dibujo plano se ve como una línea.
- **Un modelo sólido no muestra nada.** Los sólidos creados con un modelador de sólidos son cuerpos ACIS, enumerados en **No dibujado todavía**. Exporte el modelo como IFC o como caras 3D desde el programa que lo creó.
- **El dibujo es un pequeño grupo en el centro.** Algo lejano en el espacio modelo, como una copia antigua de una planta, hace grande la extensión. Acerque con la rueda donde quiera mirar.

## Siguiente

- [Trabajar con capas y hojas](topic:dwg-layers-sheets)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
