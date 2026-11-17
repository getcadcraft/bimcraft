---
title: Muros a partir de un juego de planos (PDF o escaneo)
summary: Convertí las hojas de un PDF, o un plano escaneado, en muros, puertas y ventanas, un nivel por cada hoja, con la hoja guardada debajo de cada planta.
keywords: pdf, planos, juego de planos, escaneo, plano escaneado, tiff, calcar, muros desde un pdf, muros desde un escaneo, niveles, hojas, escala, puertas, ventanas, giro, antepecho, base
from: b70d9db7
---

## Mba'e rejapóta

Empezá un modelo a partir de los planos que tenés en papel: un PDF (dibujado como líneas, o un escaneo dentro de un PDF) o un escaneo (PNG, JPEG, TIFF de una o muchas páginas). Cada página se convierte en los muros, puertas y ventanas de un nivel.

## Pasos

1. Activá {{ui:Draw}}. Elegí {{ui:Build}} › {{ui:From a drawing…}}, luego {{ui:Choose a drawing…}} y elegí el PDF o el escaneo.
2. **Páginas y niveles.** Cada página aparece con lo que es (**line work**, o **a picture (traced)**) y el nivel al que va: uno de los niveles que tenés, **a new level above the others**, o **leave this page out**. Las páginas se emparejan con tus niveles en orden; cambiá cualquiera.
3. **Escala.** Para un PDF, indicá cómo fue dibujado (**1 : 100**, **1 : 50**…). Para cualquier otra cosa, o si no sabés, elegí **from a distance I know**: hacé clic en los dos extremos de una cota o de una barra de escala en la vista previa, luego escribí la distancia real. Todas las páginas usan la misma escala.
4. Elegí el **wall type** y la **height of a new level**. Dejá marcado **Keep each page under the plan of its level** para ver cada página como líneas finas debajo de su planta.
5. La línea debajo de las opciones dice cuántos muros, puertas y ventanas va a hacer, y en cuántos niveles. Hacé clic en {{ui:Make them}}.

## Cómo lee una página

- **Los muros** salen de pares de líneas paralelas separadas hasta 600 mm (las dos caras de un muro); el muro tiene el grosor del espacio. Los rayados y las letras se dejan afuera.
- **Puertas y ventanas.** Un hueco en un muro (de 500 a 2600 mm) con un arco de apertura dibujado al lado es una puerta, con bisagra en un extremo del hueco y abre hacia el lado del arco. Un hueco o un muro con líneas de antepecho dentro es una ventana. Un hueco sin ninguna de las dos cosas es una puerta de hasta 1300 mm y una ventana por encima de eso.
- **Un escaneo** se endereza primero cuando se escaneó torcido (el diálogo lo indica), se pasa a blanco y negro, se limpia de manchas y se calca; una **página de PDF que es una imagen** se dibuja primero y luego se trata igual. El calco encuentra el centro de cada trazo y ajusta líneas rectas y arcos a él; no usa red ni modelo entrenado.
- **Los ambientes** se siguen solos a partir de los bucles cerrados que forman los muros. Cuando el PDF tiene texto, un ambiente toma su nombre de la letra que está dentro (la más grande; una cota, una escala o un número de hoja no es un nombre). Un escaneo no tiene texto, así que sus ambientes conservan los nombres que les da el programa.
- **Todo lo que se lee de la página se marca como no verificado**: cada muro, puerta, ventana y ambiente tiene una caja punteada y un "?" en la planta hasta que lo controles. Elegí lo que ya revisaste y usá {{ui:Tools}} › {{ui:Mark as checked}}. Ver [Marcar elementos como verificados o verificados en obra](topic:verification).

## Qué deberías ver

- Los muros, puertas, ventanas y ambientes de cada nivel, y cualquier nivel nuevo, todo como un solo paso: {{key:Mod+Z}} lo deshace todo.
- Cada página como líneas finas debajo de la planta de su nivel, listada en {{ui:Build}} › {{ui:From a drawing…}} con {{ui:Remove}}.

:::note
Esto es lo que dieron las líneas, con la precisión de la página. Un escaneo puede perder un muro tenue, unir dos muros muy cercanos, o encontrar un muro en una mancha; un arco de apertura que el plano no muestra convierte un hueco en una puerta simple. Controlá cada nivel contra la hoja antes de confiar en él, y corregí lo que esté mal con las herramientas {{ui:Wall}}, {{ui:Door}} y {{ui:Window}}.
:::
