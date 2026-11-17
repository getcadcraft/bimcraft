---
title: Alzados interiores
summary: Cree una hoja que muestre desde dentro los cuatro muros de una habitación, con cotas y etiquetas, y guárdela como PDF.
keywords: alzado interior, habitación, muro, mueble, cocina, alzado, hoja, PDF, cota, etiqueta, espacio, A-501
from: 1e3a70a8
---

## Qué va a hacer

Elija una habitación y obtenga una hoja que muestre sus cuatro muros tal como se verían estando dentro. Está pensada para cocinas, baños y cualquier habitación en la que necesite ver los muebles, puertas y ventanas de cada muro.

## Crear la hoja

1. Elija la habitación. En el plano con {{ui:Dibujo}} activado, pulse dentro de la habitación. En la vista 3D o en el árbol del modelo, seleccione el espacio (un IfcSpace).
2. En **Propiedades**, pulse {{ui:Alzados interiores…}}.
3. Se abre el cuadro de diálogo con la hoja.
4. Pulse {{ui:Descargar PDF}} para guardarla. El archivo se llama "<archivo> — Alzados interiores — <habitación>.pdf" y es un PDF vectorial.
5. Pulse {{ui:Cerrar}} cuando termine.

## Qué muestra la hoja

La hoja tiene cuatro vistas, dos por dos, a una sola escala: la escala normalizada más grande que cabe. Son **Muro norte**, **Muro este**, **Muro sur** y **Muro oeste**. Un cajetín lleva el número de hoja A-501, el título "Alzados interiores — " con el número y el nombre de la habitación, el proyecto y la fecha.

Cada vista se corta por la mitad de la habitación y mira el muro de ese lado. Los muros laterales, y todo lo que esté cortado en ellos, como una ventana, se muestran en gris alrededor de la vista como poché de corte. La vista termina justo después de la cara del muro, de modo que no se ve nada detrás del muro.

Cada vista incluye:

- el ancho de la habitación debajo, de cara interior a cara interior;
- la altura de la habitación al lado, desde el suelo hasta el nivel superior;
- una etiqueta cuadrada en cada puerta y una etiqueta hexagonal en cada ventana de ese muro, con su marca (D1, W1, etc.);
- una etiqueta circular con el número de elemento en cada elemento de biblioteca colocado delante de ese muro: muebles, aparatos y equipos.

:::note
Las vistas se generan a partir del modelo cada vez que abre el cuadro de diálogo, así que siempre coinciden con él. Mueva un mueble y, a continuación, vuelva a abrir el cuadro de diálogo.
:::

## En sus propias hojas

Cada muro de cada habitación también es una vista que puede colocar en una hoja que cree: en el explorador del proyecto, pulse {{ui:Hoja nueva}}; después, en **Alzados interiores**, añada "101 Cocina — Muro norte" y los demás. Incluye las mismas cotas y etiquetas.

## Aún no está hecho

Alzados interiores en el conjunto de dibujos generado (proceden de las **Propiedades** de la habitación o de sus propias hojas), habitaciones que no son mayoritariamente rectangulares (la vista se ve cuadrada en cada lado de la caja de la habitación), delineación, notas o cotas propias sobre ellos, y elegir qué muros mostrar. Consulte [Lo que aún no está hecho](topic:not-built-yet).
