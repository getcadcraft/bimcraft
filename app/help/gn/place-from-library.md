---
title: Colocar equipos y muebles desde la biblioteca
summary: Buscá un elemento en la Biblioteca, un archivo o el plano abierto, colocalo en un piso de un modelo IFC con una vista previa fantasma, giralo, ajustalo a un muro y guardá.
keywords: mover, rotar, girar, arrastrar, biblioteca, librarycraft, colocar, insertar, equipo, mueble, bloque, familia, elemento, catálogo, contenido, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## Mba'e pe ojapóta

Poné un elemento de la biblioteca en un modelo IFC: una pileta, una mesa de trabajo, una silla. BimCraft lo escribe como un elemento IFC correcto con su tipo, así que cada copia del mismo elemento comparte un solo juego de geometría, y sus datos, número de elemento y licencia viajan con él.

## Pasos

1. Abrí un modelo IFC.
2. Hacé clic en la pestaña {{ui:Library}} al lado de {{ui:Properties}}, a la derecha, o en {{ui:Library}} de la barra de herramientas sobre el modelo.
3. Elegí una fuente:
   - **Símbolos incorporados**: símbolos genéricos de planos de plomería que vienen con BimCraft bajo Apache-2.0, disponibles sin conexión. Verificá sus dimensiones antes de construir. Para símbolos eléctricos de plano y dispositivos eléctricos IFC, usá **Compilación › Eléctrico**.
   - **Biblioteca**: la biblioteca de CadCraft en este sitio. Los elementos públicos no requieren ingresar.
   - **Este archivo**: los bloques de un plano DWG o DXF abierto. Un bloque dinámico con estados de visibilidad se ofrece una vez por estado, con nombre "Sink: Double bowl", dibujado cada uno solo con los objetos de ese estado.
   - **Archivos…**: un archivo DWG, DXF, IFC, glTF/GLB, OBJ, RFA o CSV de tu computadora. Se lee en esta pestaña; no se sube nada.
   - **Otras fuentes**: otra biblioteca que habla el mismo formato de fuente. Agregá su dirección una vez; se guarda en este navegador.
4. Buscá o elegí una categoría, y hacé clic en una tarjeta. La tarjeta muestra una vista previa en planta, el nombre, el fabricante y el modelo, la licencia y la versión.
5. Hacé clic en {{ui:Place in plan}} (en la vista Planta) o en {{ui:Place in model}} (en la vista 3D). En {{ui:Split}}, donde el plano y la vista 3D se muestran juntos, el botón es un botón dividido: su acción principal es {{ui:Place in plan}}, y la flecha de su extremo derecho abre un menú con {{ui:Place in model}}. O arrastrá la tarjeta, o la imagen de los detalles del elemento, hacia el plano o la vista 3D: el elemento se coloca donde la soltés. Con lápiz o dedo, mantené presionada la tarjeta un momento y después arrastrala.
6. Elegí el piso en la barra de colocación. En la vista 3D, los pisos por encima se ocultan mientras colocás y la vista se pone arriba; en el plano, el plano ya muestra ese piso. Elegir {{ui:Place in model}} desde el plano solo abre la vista 3D a su lado.
7. Mové el puntero sobre el modelo: una caja transparente muestra dónde va el elemento.
8. Presioná {{key:R}} para girarlo 90°. Presioná {{key:Tab}} (o {{ui:Wall snap}}) para apoyar su parte trasera contra el muro más cercano, mirando hacia el ambiente.
9. Hacé clic para colocarlo. O escribí la posición en **X, Y (mm)**, por ejemplo `1200, 3400`, y presioná {{key:Enter}}.

Una luminaria u otra cosa colgada desde arriba: poné **Mount** en **En el cielorraso**. La parte superior del elemento queda entonces en la cara inferior del cielorraso sobre ese punto (o a la altura del nivel donde no hay cielorraso). Con un plano de cielorraso en la vista Planta, **Mount** empieza en **En el cielorraso**.
10. Respondé la única pregunta: el **número de elemento** (se completa el siguiente libre), la cantidad y una nota. Presioná {{key:Enter}}.
11. Colocá más, o presioná {{key:Esc}} para terminar.
12. Hacé clic en {{ui:Save as IFC}} para descargar la copia editada.

## Plano o modelo

El botón de colocar de la Biblioteca sigue la vista en la que estás, y cambia en cuanto cambiás la vista (los botones {{ui:Plan}}, {{ui:Split}} y {{ui:3D}}, el teclado, al abrir un archivo). Planta muestra un botón, {{ui:Place in plan}}; 3D muestra un botón, {{ui:Place in model}}; Emboyke muestra el botón dividido, con {{ui:Place in plan}} como acción principal y {{ui:Place in model}} en su menú. Ambos modos usan la misma barra de colocación y escriben el mismo elemento IFC: el puntero funciona en la vista de planta para uno y en la vista 3D para el otro. Presioná {{key:Esc}} en cualquier momento para detenerte.

Arrastrar una tarjeta no tiene tecla propia: el botón dividido, o el botón simple, hace lo mismo con el teclado.

## Mover o girar un elemento colocado

En {{ui:Draw}}, elegí el elemento en el plano. Aparece un agarre cuadrado en su punto de inserción y un agarre redondo al lado.

- Arrastrá el elemento, o su agarre cuadrado, para moverlo. Se ajusta como la herramienta Muro (extremos y caras de muro); {{key:Shift}} lo mantiene a escuadra con respecto a donde estaba.
- Arrastrá el agarre redondo para girarlo en pasos de 15°. Mantené {{key:Shift}} para pasos de 1°.
- Presioná {{key:R}} para girarlo 90°.
- En **Properties** (también en la vista 3D), escribí **X**, **Y** y **Rotation (°)**, o hacé clic en **Turn 90°**.

Cada movimiento es un paso de {{ui:Undo}} y viaja en Live TeamWork. El elemento conserva su número de elemento, sus datos de biblioteca y su altura sobre el nivel. Todavía no está hecho: arrastrarlo en la vista 3D.

## Lo que deberías ver

- El elemento en el modelo, seleccionado, con sus propiedades a la derecha: un recuadro **Library item** con su licencia y atribución, y los conjuntos `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` y, para elementos de planos etiquetados, `CadCraft_SourceAttributes`.
- "Placed: *item* (item *n*)" en la lista de cambios. {{key:Mod+Z}} lo deshace.
- La línea de estado: "Placed *item* as item *n*."

## Para tener en cuenta

- Algunos elementos vienen en varios tamaños u opciones: la tarjeta tiene entonces una elección **Variant**, y se coloca la que elegiste. Ver [Colocar y cambiar un elemento de biblioteca que tiene variantes](topic:library-variants).
- Un elemento sin cuerpo 3D (un símbolo 2D) se coloca con una caja provisoria; indicás su altura cuando se pregunta.
- Más del mismo: elegí un elemento colocado y usá {{ui:Copy}} y {{ui:Paste}}, o {{key:Mod+D}}. Ver [Copiar, pegar y duplicar elementos de biblioteca](topic:copy-paste).
- Para empezar cada colocación con ajuste a muro activado, activá **Start with wall snap on** en [Configuración de BimCraft](topic:settings).
- Las longitudes se convierten a las unidades propias del modelo, sean cuales sean.
- **Entourage** (árboles, arbustos, personas, autos) también está en la biblioteca: buscá "tree", "person" o "car". Los dibuja CadCraft (CC0) y mantienen sus colores al colocarlos (un tronco marrón, hojas verdes, las ventanas de un auto transparentes), en BimCraft y en otros programas BIM. Aparecen en [imágenes renderizadas](topic:render).
- En un archivo IFC2X3 el cuerpo se escribe como sólido facetado; en IFC4, como conjunto de caras triangulado. Ambos se abren en otras herramientas IFC.
- Un plano (DWG o DXF) no se puede guardar aquí, así que los elementos se colocan solo en modelos IFC. Usá **Este archivo** en un plano para ver en qué se convertirían sus bloques.

## Elementos en tu idioma

Un elemento puede tener su nombre, descripción y tipo en otros idiomas. Cuando los tiene en el idioma en que está configurado BimCraft (Configuración › General › Idioma), la página del elemento muestra esos, con el nombre que le dio su fabricante debajo, y **Place** escribe el nombre en tu idioma en el modelo, así que la planilla de {{ui:Equipment}} lo lista de esa forma. El elemento sigue siendo el mismo: la verificación de actualizaciones y los cambios se hacen por el elemento mismo, nunca por su nombre. Los elementos sin traducción conservan sus propias palabras.

## Errores comunes

- **Falta el botón de colocar.** No hay ningún modelo IFC abierto. Abrí uno primero.
- **La vista previa fantasma no sigue al puntero.** El puntero está fuera del área del modelo, o el plano del piso no está a la vista. Hacé clic en {{ui:Top}}.
- **{{ui:Wall snap}} dice que no hay muros.** El piso no tiene muros en el IFC (algunas exportaciones ponen los muros en otro piso). Elegí ese piso, o escribí X e Y.
- **Los elementos de un archivo tienen un tamaño incorrecto.** El archivo no tiene unidades, o dice unidades equivocadas. En {{ui:Files…}} elegí las unidades y leelo de nuevo.

:::tip
Colocar dos veces el mismo elemento comparte un solo tipo IFC, así que un modelo con cuarenta sillas guarda la silla una sola vez.
:::
