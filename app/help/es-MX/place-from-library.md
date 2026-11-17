---
title: Colocar equipos y mobiliario desde la biblioteca
summary: Busque un elemento en la Biblioteca, en un archivo o en el dibujo abierto, colóquelo en un nivel de un modelo IFC con una vista previa fantasma, gírelo, ajústelo a un muro y guarde.
keywords: mover, rotar, girar, arrastrar, biblioteca, librarycraft, colocar, insertar, equipo, mobiliario, bloque, familia, elemento, catálogo, contenido, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## Qué hará

Coloque un elemento de la biblioteca en un modelo IFC: un fregadero, una mesa de trabajo, una silla. BimCraft lo escribe como un elemento IFC adecuado, con un tipo, de modo que cada copia del mismo elemento comparte un solo juego de geometría, y sus datos, su número de elemento y su licencia viajan con él.

## Pasos

1. Abra un modelo IFC.
2. Haga clic en la pestaña {{ui:Biblioteca}} junto a {{ui:Propiedades}}, a la derecha, o en {{ui:Biblioteca}} de la barra de herramientas sobre el modelo.
3. Elija una fuente:
   - **Símbolos integrados**: símbolos genéricos de planos de plomería incluidos con BimCraft bajo Apache-2.0, disponibles sin conexión. Verifique sus dimensiones antes de construir. Para símbolos eléctricos de planta y dispositivos eléctricos IFC, use **Compilación › Eléctrico**.
   - **Biblioteca**: la biblioteca de CadCraft en este sitio. Los elementos públicos no requieren inicio de sesión.
   - **Este archivo**: los bloques de un dibujo DWG o DXF abierto. Un bloque dinámico con estados de visibilidad se ofrece una vez por estado, con un nombre como "Fregadero: Doble tarja", cada uno dibujado solo con los objetos de ese estado.
   - **{{ui:Archivos…}}**: un archivo DWG, DXF, IFC, glTF/GLB, OBJ, RFA o CSV de su computadora. Se lee en esta pestaña; nada se sube.
   - **Otras fuentes**: otra biblioteca que use el mismo formato de fuente. Agregue su dirección una vez; se guarda en este navegador.
4. Busque o elija una categoría, luego haga clic en una tarjeta. La tarjeta muestra una vista previa en planta, el nombre, el fabricante y el modelo, la licencia y la versión.
5. Haga clic en {{ui:Colocar en el plano}} (en la vista Planta) o en {{ui:Colocar en el modelo}} (en la vista 3D). En {{ui:Dividir}}, donde se muestran el plano y la vista 3D, el botón es un botón dividido: su acción principal es {{ui:Colocar en el plano}}, y la flecha de su extremo derecho abre un menú con {{ui:Colocar en el modelo}}. También puede arrastrar la tarjeta, o la imagen de los detalles del elemento, sobre el plano o la vista 3D: el elemento se coloca donde la suelte. Con un lápiz o un dedo, mantenga presionada la tarjeta un momento y luego arrástrela.
6. Elija el nivel en la barra de colocación. En la vista 3D, los niveles superiores se ocultan mientras coloca y la vista pasa a ver desde arriba; en el plano, ya se muestra ese nivel. Elegir {{ui:Colocar en el modelo}} desde el plano solo abre la vista 3D a su lado.
7. Mueva el puntero sobre el modelo: una caja translúcida muestra dónde va el elemento.
8. Pulse {{key:R}} para girarlo 90°. Pulse {{key:Tab}} (o {{ui:Ajuste a muro}}) para poner su parte posterior contra el muro más cercano, mirando hacia el cuarto.
9. Haga clic para colocarlo. O escriba la posición en **X, Y (mm)**, por ejemplo `1200, 3400`, y pulse {{key:Enter}}.

Una lámpara o cualquier cosa colgada desde arriba: configure **Montaje** en **En el techo**. La parte superior del elemento queda entonces en la cara inferior del techo sobre ese punto (o a la altura del nivel donde no hay techo). Con un plano de techo en la vista de planta, **Montaje** empieza en **En el techo**.

10. Responda la única pregunta: el **número de elemento** (se completa el siguiente libre), la cantidad y una nota. Pulse {{key:Enter}}.
11. Coloque más, o pulse {{key:Esc}} para detenerse.
12. Haga clic en {{ui:Guardar como IFC}} para descargar la copia editada.

## Plano o modelo

El botón de colocar de la Biblioteca sigue la vista en la que está, y cambia en cuanto cambia la vista (los botones {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}}, el teclado, al abrir un archivo). Planta muestra un botón, {{ui:Colocar en el plano}}; 3D muestra un botón, {{ui:Colocar en el modelo}}; Dividir muestra el botón dividido, con {{ui:Colocar en el plano}} como acción principal y {{ui:Colocar en el modelo}} en su menú. Ambas formas usan la misma barra de colocación y escriben el mismo elemento IFC: el puntero trabaja en la vista de planta para una, y en la vista 3D para la otra. Pulse {{key:Esc}} en cualquier momento para detenerse.

Arrastrar una tarjeta no tiene una tecla propia: el botón dividido, o el botón simple, hace lo mismo con el teclado.

## Mover o girar un elemento colocado

En {{ui:Dibujo}}, elija el elemento en el plano. Aparece un agarre cuadrado en su punto de inserción y un agarre redondo junto a él.

- Arrastre el elemento, o su agarre cuadrado, para moverlo. Se ajusta como la herramienta Muro (extremos y caras de muros); {{key:Shift}} lo mantiene cuadrado respecto a donde estaba.
- Arrastre el agarre redondo para girarlo en pasos de 15°. Mantenga {{key:Shift}} para pasos de 1°.
- Pulse {{key:R}} para girarlo 90°.
- En **Propiedades** (también en la vista 3D), escriba **X**, **Y** y **Rotación (°)**, o haga clic en **Girar 90°**.

Cada movimiento es un paso de deshacer y viaja en el trabajo en equipo en vivo. El elemento conserva su número, sus datos de biblioteca y su altura sobre el nivel. Todavía no está disponible: arrastrarlo en la vista 3D.

## Lo que debe ver

- El elemento en el modelo, seleccionado, con sus propiedades a la derecha: un cuadro **Elemento de biblioteca** con su licencia y atribución, y los conjuntos `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` y, para elementos de dibujos etiquetados, `CadCraft_SourceAttributes`.
- "Colocado: *elemento* (elemento *n*)" en la lista de cambios. {{key:Mod+Z}} lo deshace.
- La línea de estado: "Colocado *elemento* como elemento *n*."

## Conviene saber

- Algunos elementos vienen en varios tamaños u opciones: la tarjeta entonces tiene una opción **Variante**, y la que elija es la que se coloca. Vea [Colocar y cambiar un elemento de biblioteca que tiene variantes](topic:library-variants).
- Un elemento sin cuerpo 3D (un símbolo 2D) se coloca con una caja provisional; usted indica su altura cuando se le pregunta.
- Para más copias: elija un elemento colocado y use {{ui:Copiar}} y {{ui:Pegar}}, o {{key:Mod+D}}. Vea [Copiar, pegar y duplicar elementos de biblioteca](topic:copy-paste).
- Para que cada colocación empiece con el ajuste a muro activado, marque **Iniciar con ajuste a muro** en [Configuración de BimCraft](topic:settings).
- Las longitudes se convierten a las unidades propias del modelo, sean cuales sean.
- **Entourage** (árboles, arbustos, personas, autos) también está en la biblioteca: busque "tree", "person" o "car". Los dibuja CadCraft (CC0) y conservan sus colores al colocarse (un tronco café, hojas verdes, las ventanas de un auto transparentes), en BimCraft y en otros programas BIM. Aparecen en [imágenes renderizadas](topic:render).
- En un archivo IFC2X3, el cuerpo se escribe como sólido facetado; en IFC4, como conjunto de caras triangulado. Ambos se abren en otras herramientas IFC.
- Un dibujo (DWG o DXF) no puede guardarse aquí, así que los elementos solo se colocan en modelos IFC. Use **Este archivo** en un dibujo para ver en qué se convertirían sus bloques.

## Elementos en su idioma

Un elemento puede tener su nombre, su descripción y su tipo en otros idiomas. Cuando los tiene en el idioma en que está configurado BimCraft (Configuración › General › Idioma), la página del elemento los muestra, con el nombre que le dio su fabricante debajo, y **Colocar** escribe en el modelo el nombre en su idioma, de modo que la tabla de {{ui:Equipos}} lo enumera así. El elemento sigue siendo el mismo: la búsqueda de actualizaciones y los cambios se hacen por el elemento mismo, nunca por su nombre. Los elementos sin traducción conservan sus propias palabras.

## Errores comunes

- **Falta el botón de colocar.** No hay ningún modelo IFC abierto. Abra uno primero.
- **El fantasma no sigue al puntero.** El puntero está fuera del área del modelo, o el plano del nivel no está a la vista. Haga clic en {{ui:Superior}}.
- **{{ui:Ajuste a muro}} indica que no hay muros.** El nivel no tiene muros en el IFC (algunas exportaciones ponen los muros en otro nivel). Elija ese nivel, o escriba X e Y.
- **Los elementos de un archivo tienen el tamaño incorrecto.** El archivo no tiene unidades, o indica unas incorrectas. En {{ui:Archivos…}} elija las unidades y vuelva a leerlo.

:::tip
Colocar el mismo elemento dos veces comparte un solo tipo IFC, así que un modelo con cuarenta sillas guarda la silla una sola vez.
:::
