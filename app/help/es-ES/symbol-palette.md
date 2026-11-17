---
title: La paleta de símbolos
summary: Busque símbolos eléctricos y de fontanería por nombre o por imagen, marque con estrella los que usa y colóquelos en la planta con un clic.
keywords: paleta de símbolos, botón de símbolos, seguir muro, símbolos, símbolos eléctricos, símbolos de fontanería, planta de fontanería, inodoro, WC, taza, lavabo, fregadero, bañera, ducha, sumidero, registro, grifo de manguera, calentador de agua, válvula, válvula de compuerta, agua fría, agua caliente, desagüe, ventilación, estilo de línea, favoritos, búsqueda
from: 67f20bc0
---

## Qué hará

Abra un panel que enumera los símbolos eléctricos y los símbolos de planta de fontanería con sus imágenes y sus nombres, encuentre el que quiere y colóquelo en la planta. Aquí no hace falta internet: los símbolos vienen con la aplicación.

## Abrirlo y colocar un símbolo

1. Abra un modelo y abra {{ui:Compilación}} › {{ui:Paleta de símbolos}} (comando escrito: SYMBOLS). El mismo botón está en el menú Herramientas de la barra Dibujo y como **Símbolos** en el grupo Biblioteca de la barra de herramientas.
2. Elija un conjunto: **Eléctrico** o **Fontanería**, o **Todos los conjuntos**. Escriba en el cuadro de búsqueda para reducir la lista. Puede buscar por nombre o por abreviatura (WC, CW, HB).
3. Haga clic en un símbolo. La planta queda lista para colocarlo.
   - Un símbolo **eléctrico** inicia la herramienta Eléctrico con ese dispositivo seleccionado, así que se aplica todo lo que figura en [El plano eléctrico](topic:electrical-plan): haga clic en la planta, con un paso de deshacer.
   - Un símbolo de **fontanería** inicia la herramienta de símbolos de planta. Haga clic en la planta. Un aparato que va en un muro (inodoro, lavabo, bañera, fregadero, grifo de manguera) se ajusta a la cara del muro más cercana, con la parte trasera contra el muro; los sumideros, las válvulas, el calentador de agua y los estilos de línea van donde haga clic.
4. Pulse {{key:R}} para girar el símbolo 90 grados ({{key:Shift}}+{{key:R}} lo gira en sentido contrario), o escriba un ángulo en **Rotación** en la barra de opciones. Pulse {{key:Esc}} para dejar de colocar.

Un aparato o un grifo de manguera que se ajustó a una cara de muro recuerda ese muro: cuando el muro se mueve, el símbolo se mueve con él (misma cara, misma distancia a lo largo del muro) en el mismo paso de deshacer. Si elimina el muro, el símbolo se queda donde estaba y Problemas indica «perdió su muro»; muévalo o elimínelo. Los símbolos colocados lejos de los muros no están vinculados a nada.

Cada símbolo que coloca es un paso de deshacer. Un símbolo colocado es una anotación de planta en el archivo IFC, con su etiqueta (WC1, WC2, ...). Selecciónelo para cambiar su etiqueta o su giro en **Propiedades**, o pulse {{key:Delete}}.

## Qué contiene el conjunto de fontanería

Aparatos (inodoro, urinario, lavabo, bañera, ducha, fregadero de cocina, fregadero sencillo), un sumidero de suelo, registros de suelo y de pared, un grifo de manguera, un hidrante de pared, un calentador de agua, válvulas (de compuerta, de asiento, de bola, de retención, de mariposa, reductora de presión) y estilos de línea con sus abreviaturas: agua fría (CW), agua caliente (HW), retorno de agua caliente (HWR), desagüe (W), ventilación (V), drenaje pluvial (SD) y gas (G). Los dibujos escalan con la planta, así que conservan su tamaño en la hoja impresa. Un estilo de línea es un tramo corto que muestra el estilo en la planta; dibuje los tramos de tubería reales con las herramientas de tuberías.

:::note
Son símbolos habituales de planos de fontanería, dibujados por nosotros; no están certificados según ISO 4067-1 ni ASME Y32.4. Se compararon con leyendas de dibujo públicas y con manuales de formación (la lista está en la nota de fuentes del conjunto, que indica dónde coincidimos y dónde nos diferenciamos), no se copiaron de ningún producto, y son de uso libre (Apache-2.0). Los conjuntos de dibujo difieren, así que compruebe la leyenda de su propio proyecto. Son símbolos de planta, no un diseño de fontanería: no dimensionan tuberías ni comprueban normativas.
:::

## Favoritos y teclado

- Haga clic en la estrella de un símbolo (o pulse {{key:F}} sobre él) para guardarlo como favorito. Los favoritos aparecen primero y se conservan en este navegador. **Solo favoritos** muestra solo esos.
- {{key:Down}} desde el cuadro de búsqueda pasa a los símbolos; las flechas, {{key:Home}} y {{key:End}} se mueven entre ellos; {{key:Enter}} elige el símbolo enfocado; {{key:Esc}} cierra la paleta.
- En un teléfono, la paleta es una hoja en la parte inferior de la pantalla; se aparta cuando elige un símbolo para que vea la planta. Vuelva a abrirla desde el menú Compilación o desde el botón **Paleta** de la barra de opciones.

:::tip
Si un archivo usa un conjunto de símbolos que esta versión no tiene, la planta muestra un recuadro donde iba el símbolo, y Problemas lo indica.
:::

## Vincular un elemento colocado a un símbolo

Un accesorio de luz de la biblioteca es un elemento 3D, pero un plano de instalaciones lo muestra como su símbolo. Lo coloca **una vez** y lo vincula:

1. Elija Compilación › **Vincular símbolo** (o escriba SYMBOLLINK). Se abre una sección Vincular símbolo en el panel izquierdo.
2. Seleccione los elementos colocados en la planta o en 3D. La sección indica cuántos están seleccionados y a qué están vinculados.
3. Elija el **Símbolo** (de cualquier conjunto: Eléctrico, Fontanería) y elija **Vincular**.

El elemento sigue siendo un solo elemento, y cada tabla lo cuenta una vez:

- **3D** muestra siempre su cuerpo.
- Una **planta** muestra su forma de planta, como antes.
- Una planta cuya opción **Esta vista muestra los elementos vinculados como** está en **Su símbolo (un plano de instalaciones)** muestra el símbolo en su lugar. Un clic en el símbolo selecciona el elemento. La elección se guarda en el archivo para esa vista (la planta de un nivel, su plano de techos o una llamada).

**Girar el símbolo 90°** gira el símbolo respecto a su elemento. **Quitar el vínculo** lo elimina; el elemento permanece. La tabla **Símbolos vinculados** enumera cada elemento vinculado una vez, con su nivel y la habitación en la que se encuentra.

Pendiente de implementar: la elección de una vista en una hoja es la del plano del nivel que muestra; los dispositivos colocados con la herramienta Eléctrico son símbolos en todas las plantas, como antes.
