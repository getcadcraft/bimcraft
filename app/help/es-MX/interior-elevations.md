---
title: Alzados interiores
summary: Haga una hoja que muestre los cuatro muros de una habitación desde adentro, con cotas y etiquetas, y guárdela como PDF.
keywords: alzado interior, habitación, muro, mueble, cocina, alzado, hoja, PDF, cota, etiqueta, espacio, A-501
from: 1e3a70a8
---

## Qué hará

Elija una habitación y obtendrá una hoja que muestra sus cuatro muros tal como se verían estando de pie dentro. Está pensada para cocinas, baños y cualquier habitación en la que necesite ver los muebles, puertas y ventanas de cada muro.

## Haga la hoja

1. Elija la habitación. En la planta, con {{ui:Dibujo}} activado, haga clic dentro de la habitación. En la vista 3D o en el árbol del modelo, elija el espacio (un IfcSpace).
2. En **Propiedades**, haga clic en {{ui:Alzados interiores…}}.
3. Se abre el cuadro de diálogo con la hoja.
4. Haga clic en {{ui:Descargar PDF}} para guardarla. El archivo se llama "<file> — Interior elevations — <room>.pdf" y es un PDF vectorial.
5. Haga clic en {{ui:Cerrar}} cuando termine.

## Qué muestra la hoja

La hoja tiene cuatro vistas, dos por dos, a una sola escala: la escala estándar más grande que quepa. Son **Muro norte**, **Muro este**, **Muro sur** y **Muro oeste**. El cajetín lleva el número de hoja A-501, el título "Alzados interiores — " con el número y el nombre de la habitación, el proyecto y la fecha.

Cada vista se corta por la mitad de la habitación y muestra el muro de ese lado. Los muros laterales, y todo lo que esté cortado en ellos, como una ventana, se muestran con un sombreado gris de corte alrededor de la vista. La vista termina justo después de la cara del muro, así que no se ve nada detrás de él.

Cada vista incluye:

- el ancho de la habitación debajo de ella, de cara interior a cara interior;
- la altura de la habitación a un costado, desde el piso hasta el nivel superior;
- una etiqueta cuadrada en cada puerta y una etiqueta hexagonal en cada ventana de ese muro, con su marca (D1, W1 y así sucesivamente);
- una etiqueta circular con el número de elemento en cada elemento de la biblioteca colocado frente a ese muro: muebles, accesorios y equipos.

:::note
Las vistas se generan a partir del modelo cada vez que abre el cuadro de diálogo, así que siempre coinciden con él. Mueva un mueble y luego vuelva a abrir el cuadro de diálogo.
:::

## En sus propias hojas

Cada muro de cada habitación también es una vista que puede colocar en una hoja que usted cree: en el explorador del proyecto, haga clic en {{ui:Hoja nueva}} y luego, en **Alzados interiores**, agregue "101 Cocina — Muro norte" y los demás. Incluye las mismas cotas y etiquetas.

## Aún no disponible

Alzados interiores en el juego de dibujos generado (provienen de las **Propiedades** de la habitación o de sus propias hojas), habitaciones que no son en su mayoría rectangulares (la vista se ve cuadrada en cada lado de la caja de la habitación), anotaciones de dibujo, notas o cotas propias sobre ellos, y elegir qué muros mostrar. Vea [Lo que aún no está disponible](topic:not-built-yet).
