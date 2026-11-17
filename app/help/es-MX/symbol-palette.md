---
title: La paleta de símbolos
summary: Busque símbolos eléctricos y de plomería por nombre o imagen, marque con estrella los que usa y colóquelos en la planta con un clic.
keywords: paleta de símbolos, botón de símbolos, el muro lo sigue, símbolos, símbolos eléctricos, símbolos de plomería, planta de plomería, taza de baño, inodoro, WC, lavabo, fregadero, tina, regadera, coladera de piso, registro, llave para manguera, hidrante de muro, calentador de agua, válvula, válvula de compuerta, agua fría, agua caliente, desagüe, ventilación, estilo de línea, favoritos, buscar
from: 67f20bc0
---

## Qué hará

Abra un solo panel que enumera los símbolos eléctricos y los símbolos de planta de plomería con sus imágenes y nombres, encuentre el que quiere y colóquelo en la planta. Nada de esto necesita internet: los símbolos vienen con la aplicación.

## Abrirla y colocar un símbolo

1. Abra un modelo y abra {{ui:Compilación}} › {{ui:Paleta de símbolos}} (comando escrito: SYMBOLS). El mismo botón está en el menú Herramientas de la barra Dibujo, y como **Símbolos** en el grupo Biblioteca de la barra de herramientas.
2. Elija un conjunto: **Eléctrico** o **Plomería**, o **Todos los conjuntos**. Escriba en el cuadro de búsqueda para reducir la lista. Puede buscar por nombre o por abreviatura (WC, CW, HB).
3. Haga clic en un símbolo. La planta queda lista para colocarlo.
   - Un símbolo **eléctrico** inicia la herramienta Eléctrico con ese dispositivo elegido, así que todo lo que aplica en [La planta eléctrica](topic:electrical-plan) también aplica: haga clic en la planta; es un paso de {{ui:Deshacer}}.
   - Un símbolo de **plomería** inicia la herramienta de símbolos de planta. Haga clic en la planta. Un aparato que va sobre un muro (inodoro, lavabo, tina, fregadero, llave para manguera) se ajusta a la cara del muro más cercana con su parte posterior contra el muro; los desagües, las válvulas, el calentador de agua y los estilos de línea van donde haga clic.
4. Presione {{key:R}} para girar el símbolo 90 grados ({{key:Shift}}+{{key:R}} lo gira en sentido contrario), o escriba un ángulo en **Rotación** en la barra de opciones. Presione {{key:Esc}} para detener.

Un aparato o una llave para manguera que se ajustó a una cara de muro recuerda ese muro: cuando el muro se mueve, el símbolo se mueve con él (misma cara, misma distancia a lo largo del muro) en el mismo paso de deshacer. Si elimina el muro, el símbolo permanece donde estaba y **Problemas** indica que "perdió su muro"; muévalo o elimínelo. Los símbolos colocados lejos de muros no están vinculados a nada.

Cada símbolo que coloca es un paso de deshacer. Un símbolo colocado es una anotación de planta en el archivo IFC con su etiqueta (WC1, WC2, ...). Selecciónelo para cambiar su etiqueta o su giro en **Propiedades**, o presione {{key:Delete}}.

## Qué incluye el conjunto de plomería

Aparatos sanitarios (inodoro, mingitorio, lavabo, tina, regadera, fregadero de cocina, fregadero sencillo), una coladera de piso, registros de piso y de muro, una llave para manguera, un hidrante de muro, un calentador de agua, válvulas (de compuerta, de globo, de bola, de retención, de mariposa, reductora de presión) y estilos de línea con sus abreviaturas: agua fría (CW), agua caliente (HW), retorno de agua caliente (HWR), desagüe (W), ventilación (V), drenaje pluvial (SD) y gas (G). Los dibujos escalan con la planta, así que conservan su tamaño en la hoja impresa. Un estilo de línea es un tramo corto que muestra el estilo en la planta; dibuje los tramos reales de tubería con las herramientas de tubería.

:::note
Estas son convenciones comunes de planta de plomería, dibujadas por nosotros; no están certificadas según ISO 4067-1 ni ASME Y32.4. Se compararon con leyendas de dibujo públicas y manuales de capacitación (la lista está en la nota de fuentes del conjunto, que indica dónde coincidimos y dónde diferimos), no se copiaron de ningún producto, y son de uso libre (Apache-2.0). Los conjuntos de dibujo difieren, así que revise la leyenda de su propio proyecto. Son símbolos de planta, no un diseño de plomería: no dimensionan tuberías ni revisan códigos.
:::

## Favoritos y teclado

- Haga clic en la estrella de un símbolo (o presione {{key:F}} sobre él) para guardarlo como favorito. Los favoritos aparecen primero y se conservan en este navegador. **Sólo favoritos** muestra únicamente esos.
- {{key:Down}} desde el cuadro de búsqueda pasa a los símbolos; las teclas de flecha, {{key:Home}} y {{key:End}} se mueven entre ellos; {{key:Enter}} elige el enfocado; {{key:Esc}} cierra la paleta.
- En un teléfono, la paleta es una hoja en la parte inferior de la pantalla; se corre a un lado cuando elige un símbolo para que vea la planta. Ábrala de nuevo desde el menú Compilación o con el botón **Paleta** en la barra de opciones.

:::tip
Si un archivo usa un conjunto de símbolos que esta versión no tiene, la planta muestra un recuadro donde estaba el símbolo, y **Problemas** lo enumera.
:::

## Vincular un elemento colocado a un símbolo

Una luminaria de la biblioteca es un elemento 3D, pero un plano eléctrico la muestra como su símbolo. La coloca **una vez** y la vincula:

1. Elija Compilación › **Vínculo de símbolo** (o escriba SYMBOLLINK). Se abre una sección Vínculo de símbolo en el panel izquierdo.
2. Elija los elementos colocados en la planta o en 3D. La sección indica cuántos están elegidos y a qué están vinculados.
3. Elija el **Símbolo** (de cualquier conjunto: Eléctrico, Plomería) y elija **Vincular**.

El elemento sigue siendo uno solo, y cada tabla lo cuenta una vez:

- El **3D** siempre muestra su cuerpo.
- Una **planta** muestra su forma de planta, como antes.
- Una planta cuya opción **Esta vista muestra los elementos vinculados como** está en **Su símbolo (un plano de servicios)** muestra el símbolo en su lugar. Un clic sobre el símbolo elige el elemento. La opción se conserva en el archivo para esa vista (la planta de un nivel, su plano de techo o una llamada).

**Girar el símbolo 90°** lo gira respecto a su elemento. **Quitar el vínculo** lo retira; el elemento permanece. La tabla **Símbolos vinculados** enumera cada elemento vinculado una vez, con su nivel y la habitación en la que se encuentra.

Aún no implementado: la elección de una vista en una hoja es la elección de la planta del nivel que muestra; los dispositivos colocados con la herramienta Eléctrico son símbolos en todas las plantas, como antes.
