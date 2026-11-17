---
title: Muros desde un juego de planos (PDF o escaneo)
summary: Convierta las páginas de un PDF, o un dibujo escaneado, en muros, puertas y ventanas, con un nivel por cada página y la página conservada bajo cada planta.
keywords: pdf, planos, juego de planos, escaneo, dibujo escaneado, tiff, calcar, muros desde un pdf, muros desde un escaneo, niveles, páginas, escala, puertas, ventanas, giro, antepecho, subyacente
from: b70d9db7
---

## Qué hará

Comience un modelo a partir de los planos que tiene en papel: un PDF (dibujado como líneas, o un escaneo dentro de un PDF) o un escaneo (PNG, JPEG, TIFF de una o varias páginas). Cada página se convierte en los muros, puertas y ventanas de un nivel.

## Pasos

1. Active {{ui:Dibujo}}. Elija {{ui:Compilación}} › {{ui:Desde un dibujo…}}, luego {{ui:Elegir un dibujo…}} y elija el PDF o el escaneo.
2. **Páginas y niveles.** Cada página aparece con lo que es (**trabajo de líneas**, o **una imagen (calcada)**) y el nivel al que va: uno de sus niveles, **un nivel nuevo sobre los demás**, o **dejar esta página fuera**. Las páginas se asignan a sus niveles en orden; cambie cualquiera de ellas.
3. **Escala.** Para un PDF, indique cómo se dibujó (**1 : 100**, **1 : 50**…). Para cualquier otro caso, o si no lo sabe, elija **desde una distancia que conozco**: haga clic en los dos extremos de una cota o de una barra de escala en la vista previa, luego escriba la distancia real. Todas las páginas usan una sola escala.
4. Elija el **tipo de muro** y la **altura de un nivel nuevo**. Deje marcado **Mantener cada página bajo la planta de su nivel** para ver cada página como líneas finas bajo su planta.
5. La línea bajo las opciones dice cuántos muros, puertas y ventanas va a crear, y en cuántos niveles. Haga clic en {{ui:Crearlos}}.

## Cómo lee una página

- **Los muros** salen de pares de líneas paralelas separadas hasta 600 mm (las dos caras de un muro); el muro tiene el grosor de la separación. Los rayados y las letras se dejan fuera.
- **Puertas y ventanas.** Un hueco en un muro (de 500 a 2600 mm) con un giro de puerta dibujado a su lado es una puerta, con bisagra en un extremo del hueco, y abre hacia el lado del giro. Un hueco, o un muro, con líneas de antepecho es una ventana. Un hueco sin ninguna de las dos cosas es una puerta hasta 1300 mm y una ventana por encima de eso.
- **Un escaneo** primero se endereza si se escaneó torcido (el cuadro de diálogo lo dice), se pasa a blanco y negro, se limpia de manchas y se calca; una **página de PDF que es una imagen** se dibuja primero y luego se trata igual. El calco encuentra el centro de cada trazo y ajusta líneas rectas y arcos a él; no usa red ni un modelo entrenado.
- **Los cuartos** se siguen solos a partir de los circuitos cerrados que forman los muros. Cuando el PDF tiene texto, un cuarto toma su nombre de la rotulación que hay dentro (la más grande; una cota, una escala o un número de plano no son un nombre). Un escaneo no tiene texto, así que sus cuartos conservan los nombres que les da el programa.
- **Todo lo leído de la página se marca como no verificado**: cada muro, puerta, ventana y cuarto tiene una caja punteada y un "?" en la planta hasta que lo revise. Elija lo que ya revisó y use {{ui:Herramientas}} › {{ui:Marcar como revisado}}. Vea [Marcar elementos como revisados o verificados en campo](topic:verification).

## Qué debe ver

- Los muros, puertas, ventanas y cuartos de cada nivel, y los niveles nuevos, todo en un paso: {{key:Mod+Z}} lo revierte todo.
- Cada página como líneas finas bajo la planta de su nivel, listada en {{ui:Compilación}} › {{ui:Desde un dibujo…}} con {{ui:Quitar}}.

:::note
Esto es lo que dieron las líneas, con la precisión de la página. Un escaneo puede perder un muro tenue, unir dos muros muy cercanos, o encontrar un muro en una mancha; un giro que el dibujo no muestra convierte un hueco en una puerta simple. Revise cada nivel contra la página antes de confiar en él, y corrija lo que esté mal con las herramientas {{ui:Muro}}, {{ui:Puerta}} y {{ui:Ventana}}.
:::
