---
title: La paleta de símbolos
summary: Encontrá símbolos eléctricos y de plomería por nombre o imagen, marcá con estrella los que usás, y colocalos en el plano con un clic.
keywords: paleta de símbolos, botón de símbolos de la barra, muro que sigue, símbolos, símbolos eléctricos, símbolos de plomería, plano de plomería, inodoro, WC, lavatorio, lavabo, pileta, bañera, ducha, desagüe de piso, registro, canilla de manguera, calefón, válvula, válvula de compuerta, agua fría, agua caliente, desagüe, ventilación, estilo de línea, favoritos, búsqueda
from: 67f20bc0
---

## Mba'épa oñemboguáta

Abrí un panel que lista los símbolos eléctricos y los símbolos de plano de plomería con sus imágenes y nombres, encontrá el que querés y colocalo en el plano. Nada de esto necesita internet: los símbolos vienen con la aplicación.

## Abrilo y colocá un símbolo

1. Abrí un modelo y abrí {{ui:Compilación}} › {{ui:Paleta de símbolos}} (comando escrito: SYMBOLS). El mismo botón está en el menú Herramientas de la barra Dibujar y como **Símbolos** en el grupo Biblioteca de la barra de herramientas.
2. Elegí un juego: **Eléctrico** o **Plomería**, o **Todos los juegos**. Escribí en el cuadro de búsqueda para reducir la lista. Podés buscar por nombre o por abreviatura (WC, CW, HB).
3. Haga clic en un símbolo. El plano queda listo para colocarlo.
   - Un símbolo **eléctrico** inicia la herramienta Eléctrica con ese dispositivo elegido, así que todo lo de [The electrical plan](topic:electrical-plan) se aplica: haga clic en el plano, un paso de deshacer.
   - Un símbolo de **plomería** inicia la herramienta de símbolos de plano. Haga clic en el plano. Un artefacto que va sobre un muro (inodoro, lavatorio, bañera, pileta, canilla de manguera) se ajusta a la cara de muro más cercana con su espalda contra el muro; los desagües, las válvulas, el calefón y los estilos de línea van donde hagas clic.
4. Presioná {{key:R}} para girar el símbolo 90 grados ({{key:Shift}}+{{key:R}} lo gira al otro lado), o escribí un ángulo en **Rotación** en la barra de opciones. Presioná {{key:Esc}} para parar.

Un artefacto o canilla de manguera que se ajustó a una cara de muro recuerda ese muro: cuando el muro se mueve, el símbolo se mueve con él (misma cara, misma distancia a lo largo del muro) en el mismo paso de deshacer. Si borrás el muro, el símbolo queda donde estaba y Problemas lista "perdió su muro"; movelo o borralo. Los símbolos colocados lejos de muros no están atados a nada.

Cada símbolo que colocás es un paso de deshacer. Un símbolo colocado es una anotación de plano en el archivo IFC con su etiqueta (WC1, WC2, ...). Elegilo para cambiar su etiqueta o su giro en **Propiedades**, o presioná {{key:Delete}}.

## Qué tiene el juego de plomería

Artefactos (inodoro, mingitorio, lavatorio, bañera, ducha, pileta de cocina, pileta simple), un desagüe de piso, registros de piso y de muro, una canilla de manguera, un hidrante de muro, un calefón, válvulas (compuerta, globo, esférica, de retención, mariposa, reductora de presión) y estilos de línea con sus abreviaturas: agua fría (CW), agua caliente (HW), retorno de agua caliente (HWR), desagüe (W), ventilación (V), desagüe pluvial (SD) y gas (G). Los dibujos escalan con el plano, así que mantienen su tamaño en la hoja impresa. Un estilo de línea es un trazo corto que muestra el estilo en el plano; dibujá los recorridos de caño reales con las herramientas de caño.

:::note
Son convenciones comunes de planos de plomería, dibujadas por nosotros; no certificadas según ISO 4067-1 ni ASME Y32.4. Se compararon con leyendas de dibujo públicas y manuales de capacitación (la lista está en la nota de fuentes del juego, que indica dónde coincidimos y dónde nos diferenciamos), no se copiaron de ningún producto, y son de uso libre (Apache-2.0). Los juegos de dibujo difieren, así que revisá la leyenda de tu propio proyecto. Son símbolos de plano, no un diseño de plomería: no dimensionan caños ni verifican códigos.
:::

## Favoritos y teclado

- Haga clic en la estrella de un símbolo (o presioná {{key:F}} sobre él) para guardarlo como favorito. Los favoritos se listan primero y quedan en este navegador. **Solo favoritos** muestra únicamente esos.
- {{key:Down}} desde el cuadro de búsqueda pasa a los símbolos; las flechas, {{key:Home}} y {{key:End}} se mueven entre ellos; {{key:Enter}} elige el enfocado; {{key:Esc}} cierra la paleta.
- En un teléfono la paleta es una hoja en la parte de abajo de la pantalla; se corre a un lado cuando elegís un símbolo para que veas el plano. Abrila de nuevo desde el menú Compilación o el botón **Paleta** en la barra de opciones.

:::tip
Si un archivo usa un juego de símbolos que esta versión no tiene, el plano muestra una caja donde estaba el símbolo y Problemas lo lista.
:::

## Vincular un elemento colocado con un símbolo

Un artefacto de luz de la Biblioteca es un elemento 3D, pero un plano eléctrico lo muestra como su símbolo. Lo colocás **una vez** y lo vinculás:

1. Elegí Compilación › **Vínculo de símbolo** (o escribí SYMBOLLINK). Se abre una sección Vínculo de símbolo en el panel izquierdo.
2. Elegí los elementos colocados en el plano o en 3D. La sección dice cuántos están elegidos y a qué están vinculados.
3. Elegí el **Símbolo** (de cualquier juego de símbolos: Eléctrico, Plomería) y elegí **Vincular**.

El elemento sigue siendo un solo elemento, y cada planilla lo cuenta una vez:

- **3D** siempre muestra su cuerpo.
- Un **plano** muestra su forma de plano, como antes.
- Un plano cuyo **Esta vista muestra los elementos vinculados como** está en **Su símbolo (un plano de instalaciones)** muestra el símbolo en su lugar. Un clic en el símbolo elige el elemento. La elección queda guardada para esa vista (el plano de piso de un nivel, su plano de cielorraso, o una llamada) en el archivo.

**Girar el símbolo 90°** gira el símbolo respecto de su elemento. **Quitar el vínculo** lo saca; el elemento sigue. La planilla **Símbolos vinculados** lista cada elemento vinculado una vez, con su nivel y el ambiente en el que está.

No construido: la elección de una vista en una hoja es la elección del plano del nivel que muestra; los dispositivos colocados con la herramienta Eléctrica son símbolos en todos los planos, como antes.
