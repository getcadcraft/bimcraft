---
title: Eliminar, cortar, copiar y pegar elementos de construcción
summary: Seleccione muros, puertas, muebles u otro elemento de un modelo IFC; elimínelos, córtelos, o cópielos y péguelos donde haga clic, en el mismo lugar o en otra planta.
keywords: eliminar, quitar, borrar, cortar, copiar, pegar, duplicar, mover, seleccionar todo, elegir todo, elemento de construcción, muro, puerta, ventana, escalera, hueco, deshacer
from: d9eec37f
---

## Qué hará

Modifique lo que contiene un modelo IFC: quite los elementos que no desee, copie un muro o un conjunto de muebles a otro lugar, o mueva elementos cortándolos y pegándolos. Cada cambio es un paso que puede deshacer, y al guardar se escribe un archivo nuevo, así que el original permanece como estaba.

## Pasos

1. Abra un modelo IFC. Consulte [Abrir un modelo IFC y explorarlo en 3D](topic:open-ifc-model).
2. Seleccione lo que quiere modificar: haga clic en un elemento, mantenga pulsado {{key:Mod}} o {{key:Shift}} y haga clic para seleccionar más, o pulse {{key:Mod+A}} ({{ui:Más}}, {{ui:Seleccionar todo}}) para seleccionar todos los elementos visibles.
3. A continuación:
   - **Eliminar:** pulse {{key:Delete}}, o {{ui:Más}}, {{ui:Eliminar}}.
   - **Copiar:** pulse {{key:Mod+C}} o haga clic en {{ui:Copiar}}.
   - **Cortar:** pulse {{key:Mod+X}}, o {{ui:Más}}, {{ui:Cortar}}. Los elementos desaparecen y puede pegarlos.
4. Para pegar, pulse {{key:Mod+V}} o haga clic en {{ui:Pegar}}. Un recuadro transparente del tamaño de lo copiado sigue al puntero sobre la planta elegida en la barra de colocación. Pulse {{key:R}} para girarlo 90° y haga clic donde deba ir. Cada clic coloca otra copia; pulse {{key:Esc}} para parar.
5. O pulse {{key:Mod+Shift+V}} ({{ui:Más}}, {{ui:Pegar en el mismo lugar}}): tras un corte, los elementos vuelven exactamente a donde estaban; tras una copia, la copia se sitúa justo al lado de los originales.
6. Haga clic en {{ui:Guardar como IFC}} para descargar el modelo editado.

## Qué va con un elemento

- **Partes:** una escalera incluye sus tramos, un muro cortina sus paneles; cualquier elemento formado por partes las incluye todas.
- **Huecos:** un muro incluye los huecos practicados en él. Al eliminar una puerta o una ventana se elimina también el hueco que ocupaba, de modo que el muro se cierra, como ocurre en un programa de autoría. Al eliminar un muro dibujado en BimCraft se eliminan también sus puertas y ventanas, y se vuelven a unir los muros restantes. Al eliminar un muro de un archivo creado en otra aplicación, sus puertas y ventanas permanecen donde estaban.
- **Datos:** una copia tiene el mismo tipo, materiales, conjuntos de propiedades y cantidades que el original, y un GlobalId nuevo. Si después cambia un valor de la copia, el original no se ve afectado.
- **Elementos de biblioteca** conservan sus datos de biblioteca; una copia recibe el siguiente número de elemento libre, y un elemento cortado y pegado de nuevo conserva el suyo.

## Qué debe ver

- "Eliminado: …" o "Pegado: …" en la lista {{ui:Cambios}}. {{key:Mod+Z}} deshace el último cambio; {{key:Mod+Y}} lo vuelve a aplicar.
- Tras eliminar, la línea de estado indica cuántas partes y huecos también se han eliminado.
- Los elementos pegados quedan seleccionados, así que puede volver a pegar en el mismo lugar para crear una fila, o eliminarlos.

## Conviene saber

- Las copias usan la misma geometría que el original (IFC permite que los elementos compartan geometría), así que el archivo crece muy poco.
- Los elementos de construcción se pegan en el modelo del que se copiaron, en la misma pestaña. Para usar elementos de biblioteca colocados en otro modelo, copie un elemento cada vez: consulte [Copiar, pegar y duplicar elementos de biblioteca](topic:copy-paste).
- Las plantas, los espacios, los edificios y la parcela no pueden eliminarse ni copiarse. Seleccione en su lugar los elementos que contienen. Una habitación dibujada en BimCraft se forma a partir de los muros que la rodean: elimine un muro para unir dos habitaciones.
- Los muros, puertas y ventanas dibujados con las herramientas propias de muro, puerta y ventana de BimCraft todavía no se pueden copiar, cortar ni duplicar; la línea de estado lo indica. Vuelva a dibujarlos. Eliminar sí funciona.
- Copiar también coloca los nombres y las propiedades de lo copiado en el portapapeles como texto, para pegarlos en una hoja de cálculo o en un correo electrónico.

## Errores frecuentes

- **{{ui:Eliminar}} aparece atenuado.** No hay nada seleccionado, o solo hay plantas o espacios. Sitúe el puntero sobre él para leer el motivo.
- **Pegar indica que los elementos proceden de otro modelo.** Ha abierto otro modelo desde que los copió. Abra de nuevo el primer modelo y cópielos allí.
- **La copia pegada está en otra planta.** El campo {{ui:Nivel}} de la barra de colocación decide dónde va; seleccione la planta antes de hacer clic.

## Relacionado

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Teclas y ratón](topic:keyboard#edit)
