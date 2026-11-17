---
title: Elegir un elemento y leer sus propiedades
summary: Clickeá cualquier elemento del modelo 3D para resaltarlo y leer su nombre, tipo, etiqueta, GlobalId, conjuntos de propiedades y cantidades.
keywords: propiedades, elegir, seleccionar, clic, elemento, parámetros, conjuntos de propiedades, pset, cantidades, globalid, guid, tipo, inspeccionar
from: 43b80aa8
---

## Mba'épa reipapáta

Elegí elementos de un modelo IFC y leé todo lo que el archivo dice sobre ellos: atributos, conjuntos de propiedades, propiedades de tipo y cantidades.

## Tape

1. Abrí un modelo IFC.
2. Clickeá un elemento, por ejemplo una puerta. Clickeá sin arrastrar: un arrastre de más de unos pocos píxeles orbita en vez de elegir.
3. Mirá el elemento: queda resaltado en azul.
4. Mirá el panel {{ui:Propiedades}} a la derecha. Arriba están el tipo del elemento (como "Door" o "WallStandardCase") y su nombre.
5. Leé el primer bloque: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** y **Line**.
6. Bajá hasta los conjuntos de propiedades. Los tres primeros están abiertos; clickeá el nombre de cualquier otro conjunto para abrirlo.
7. Clickeá otro elemento para cambiar a él.
8. Apretá {{key:Esc}}, o clickeá el fondo vacío, para borrar la selección.

## Mba'épa reikuaa

- El elemento resaltado y sus datos a la derecha.
- Conjuntos de propiedades en orden alfabético. Los conjuntos que vienen del **tipo** del elemento tienen " (type)" después de su nombre y la nota "Type property: un cambio aquí se aplica a cada elemento de este tipo."
- Conjuntos de cantidades (como longitudes, superficies y volúmenes) listados junto a los demás conjuntos. Las cantidades son de solo lectura.
- Los valores que podés cambiar parecen botones. [Cambiar propiedades IFC y guardar una copia editada](topic:edit-ifc-properties) muestra cómo.

[Campos del panel Propiedades](topic:properties-panel) explica cada campo.

## Llegar a elementos ocultos

1. Para llegar a algo dentro del edificio, desmarcá los pisos de arriba en la lista {{ui:Pisos}}.
2. Para llegar a un muro detrás de un volumen de ambiente, apagá {{ui:Espacios}}.
3. Clickeá el elemento.

## Errores comunes

- **Arrastrar un poco mientras clickeás.** BimCraft lo toma como una órbita y no elige. Mantené el mouse quieto.
- **Esperar unidades junto a los números.** Los valores se muestran tal como están guardados en el archivo, redondeados a cuatro decimales, sin símbolo de unidad. Las longitudes en una exportación métrica suelen ser milímetros o metros; revisá la configuración del exportador.
- **Buscar un parámetro por su nombre conocido.** Los exportadores renombran y reagrupan los parámetros en conjuntos de propiedades IFC como `Pset_WallCommon`. Mirá cada conjunto; los parámetros personalizados suelen estar en un conjunto con el nombre del programa que exporta o de tu empresa.
- **Esperar un cuadro de búsqueda.** Clickeá para elegir un elemento; {{key:Mod}}+clic o {{key:Shift}}+clic elige más, y {{key:Mod+A}} elige cada elemento mostrado. La lista {{ui:Elementos}} de la izquierda solo cuenta los elementos por tipo; no se puede clickear.
- **Elegir sobre una tarjeta de archivo de proyecto.** Una tarjeta de archivo no tiene elementos para elegir: "Las propiedades de elementos necesitan el modelo 3D. Abrí una exportación IFC de este archivo para verlas."
