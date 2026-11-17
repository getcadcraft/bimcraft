---
title: Eliminar, cortar, copiar y pegar elementos de construcción
summary: Seleccione muros, puertas, muebles o cualquier otro elemento de un modelo IFC; elimínelos, córtelos, o cópielos y péguelos donde haga clic, en el mismo lugar o en otro nivel.
keywords: eliminar, quitar, borrar, cortar, copiar, pegar, duplicar, desplazar, seleccionar todo, elemento de construcción, muro, puerta, ventana, escalera, hueco, deshacer
from: d9eec37f
---

## Qué hará

Cambie lo que hay en un modelo IFC: quite los elementos que no quiera, copie un muro o un conjunto de muebles a otro lugar, o mueva elementos cortándolos y pegándolos. Cada cambio es un paso que puede deshacer, y al guardar se escribe un archivo nuevo, así que su original permanece igual.

## Pasos

1. Abra un modelo IFC. Consulte [Abrir un modelo IFC y recorrerlo en 3D](topic:open-ifc-model).
2. Seleccione lo que quiere cambiar: haga clic en un elemento, mantenga presionada {{key:Mod}} o {{key:Shift}} y haga clic para seleccionar más, o presione {{key:Mod+A}} ({{ui:Más}}, {{ui:Seleccionar todo}}) para seleccionar todos los elementos visibles.
3. Después:
   - **Eliminar:** presione {{key:Delete}}, o {{ui:Más}}, {{ui:Eliminar}}.
   - **Copiar:** presione {{key:Mod+C}} o haga clic en {{ui:Copiar}}.
   - **Cortar:** presione {{key:Mod+X}}, o {{ui:Más}}, {{ui:Cortar}}. Los elementos desaparecen y puede pegarlos.
4. Para pegar, presione {{key:Mod+V}} o haga clic en {{ui:Pegar}}. Un cuadro transparente del tamaño de lo copiado sigue al puntero sobre el nivel elegido en la barra de colocación. Presione {{key:R}} para girarlo 90°, y haga clic donde debe ir. Cada clic coloca otra copia; presione {{key:Esc}} para terminar.
5. O presione {{key:Mod+Shift+V}} ({{ui:Más}}, {{ui:Pegar en el mismo lugar}}): después de un corte, los elementos regresan exactamente a donde estaban; después de una copia, la copia queda justo al lado de los originales.
6. Haga clic en {{ui:Guardar como IFC}} para descargar el modelo editado.

## Lo que va junto con un elemento

- **Partes:** una escalera incluye sus tramos, un muro cortina incluye sus paneles; cualquier elemento formado por partes las incluye todas.
- **Huecos:** un muro incluye los huecos practicados en él. Al eliminar una puerta o ventana también se elimina el hueco que ocupaba, de modo que el muro se cierra, como ocurre en un programa de modelado. Al eliminar un muro dibujado en BimCraft también se eliminan sus puertas y ventanas, y se unen los muros restantes. Al eliminar un muro de un archivo creado en otra aplicación, sus puertas y ventanas permanecen donde estaban.
- **Datos:** una copia tiene el mismo tipo, materiales, conjuntos de propiedades y cantidades que el original, y un nuevo GlobalId. Si después cambia un valor de la copia, el original no se modifica.
- **Elementos de biblioteca** conservan sus datos de biblioteca; una copia recibe el siguiente número de elemento libre, y un elemento cortado que se pega de nuevo conserva el suyo.

## Lo que debe ver

- "Eliminado: …" o "Pegado: …" en la lista de {{ui:Cambios}}. {{key:Mod+Z}} deshace el último cambio; {{key:Mod+Y}} lo vuelve a aplicar.
- Después de eliminar, la línea de estado indica cuántas partes y huecos también se eliminaron.
- Los elementos pegados quedan seleccionados, así que puede volver a pegar en el mismo lugar para formar una fila, o eliminarlos.

## Conviene saber

- Las copias usan la misma geometría que el original (IFC permite que los elementos la compartan), así que el archivo crece muy poco.
- Los elementos de construcción se pegan en el modelo del que se copiaron, en la misma pestaña. Para usar elementos de biblioteca colocados en otro modelo, copie un elemento a la vez: consulte [Copiar, pegar y duplicar elementos de biblioteca](topic:copy-paste).
- Los niveles, espacios, edificios y el terreno no se pueden eliminar ni copiar. Seleccione en su lugar los elementos que contienen. Un local dibujado en BimCraft se forma con los muros que lo rodean: elimine un muro para unir dos locales.
- Los muros, puertas y ventanas dibujados con las herramientas propias de muro, puerta y ventana de BimCraft todavía no se pueden copiar, cortar ni duplicar; la línea de estado lo indica. Vuelva a dibujarlos. Eliminar sí funciona.
- Copiar también coloca los nombres y propiedades de lo copiado en el portapapeles como texto, para pegarlos en una hoja de cálculo o en un correo electrónico.

## Errores comunes

- **{{ui:Eliminar}} aparece atenuado.** No hay nada seleccionado, o solo hay niveles o espacios. Coloque el puntero sobre él para leer el motivo.
- **Pegar indica que los elementos vienen de otro modelo.** Abrió otro modelo después de copiarlos. Vuelva a abrir el primer modelo y cópielos allí.
- **La copia pegada está en otro nivel.** El {{ui:Nivel}} de la barra de colocación decide dónde va; elija el nivel antes de hacer clic.

## Temas relacionados

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Teclas y ratón](topic:keyboard#edit)
