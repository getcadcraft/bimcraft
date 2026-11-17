---
title: Muros a partir de un juego de planos (PDF o escaneo)
summary: Convierta las páginas de un PDF, o un dibujo escaneado, en muros, puertas y ventanas, un nivel por cada página, con la página conservada bajo cada planta.
keywords: pdf, planos, juego de planos, escaneo, dibujo escaneado, tiff, calcar, muros desde un pdf, muros desde un escaneo, niveles, páginas, escala, puertas, ventanas, giro, antepecho, subyacente
from: b70d9db7
---

## Qué hará

Empiece un modelo a partir de los planos que tiene en papel: un PDF (dibujado como líneas, o un escaneo dentro de un PDF) o un escaneo (PNG, JPEG, TIFF con una o varias páginas). Cada página se convierte en los muros, puertas y ventanas de un nivel.

## Pasos

1. Active {{ui:Dibujo}}. Elija {{ui:Compilación}} › {{ui:Desde un dibujo…}}, después {{ui:Elegir un dibujo…}} y elija el PDF o el escaneo.
2. **Páginas y niveles.** Cada página aparece con lo que es (**trabajo de líneas**, o **una imagen (calcada)**) y el nivel al que va: uno de sus niveles, **un nivel nuevo sobre los demás**, o **dejar esta página fuera**. Las páginas se asignan a sus niveles en orden; cambie cualquiera de ellas.
3. **Escala.** Para un PDF, indique cómo se dibujó (**1 : 100**, **1 : 50**…). Para cualquier otro caso, o cuando no lo sepa, elija **a partir de una distancia que conozco**: haga clic en los dos extremos de una cota o de una barra de escala en la vista previa, y después escriba la distancia real. Todas las páginas usan la misma escala.
4. Elija el **tipo de muro** y la **altura de un nivel nuevo**. Deje marcado **Mantener cada página bajo la planta de su nivel** para ver cada página como líneas finas bajo su planta.
5. La línea bajo las opciones indica cuántos muros, puertas y ventanas va a crear, y en cuántos niveles. Haga clic en {{ui:Crearlos}}.

## Cómo lee una página

- **Los muros** provienen de pares de líneas paralelas separadas hasta 600 mm (las dos caras de un muro); el muro tiene el espesor de la separación. Las tramas y los rotulados se omiten.
- **Puertas y ventanas.** Un hueco en un muro (de 500 a 2600 mm) con un giro de puerta dibujado junto a él es una puerta, con bisagra en un extremo del hueco y que se abre hacia el lado del giro. Un hueco o un muro con líneas de antepecho es una ventana. Un hueco sin ninguna de las dos es una puerta de hasta 1300 mm y una ventana por encima de eso.
- **Un escaneo** primero se endereza si se escaneó torcido (el cuadro de diálogo lo indica), se pasa a blanco y negro, se limpia de manchas y se calca; una **página de PDF que es una imagen** se dibuja primero y después se trata igual. El calco encuentra el centro de cada trazo y ajusta líneas rectas y arcos a él; no usa red ni ningún modelo entrenado.
- **Las habitaciones** se siguen solas a partir de los bucles cerrados que forman los muros. Cuando el PDF tiene texto, una habitación toma su nombre del rotulado que hay dentro (el más grande; una cota, una escala o un número de hoja no es un nombre). Un escaneo no tiene texto, así que sus habitaciones conservan los nombres que les da el programa.
- **Todo lo leído de la página se marca como no verificado**: cada muro, puerta, ventana y habitación tiene un recuadro discontinuo y un «?» en la planta hasta que lo compruebe. Seleccione lo que ha comprobado y use {{ui:Herramientas}} › {{ui:Marcar como comprobado}}. Véase [Marcar elementos como comprobados o verificados en obra](topic:verification).

## Qué debe ver

- Los muros, puertas, ventanas y habitaciones de cada nivel, y los nuevos niveles, todo en un solo paso: {{key:Mod+Z}} lo deshace todo.
- Cada página como líneas finas bajo la planta de su nivel, listada en {{ui:Compilación}} › {{ui:Desde un dibujo…}} con {{ui:Quitar}}.

:::note
Esto es lo que dieron las líneas, con la precisión de la página. Un escaneo puede perder un muro tenue, unir dos muros muy próximos o encontrar un muro en una mancha; un giro que el dibujo no muestra convierte un hueco en una puerta sencilla. Compruebe cada nivel frente a la página antes de fiarse de él, y corrija lo que esté mal con las herramientas {{ui:Muro}}, {{ui:Puerta}} y {{ui:Ventana}}.
:::
