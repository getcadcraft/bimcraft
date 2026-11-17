---
title: Elegir un elemento y leer sus propiedades
summary: Haga clic en cualquier elemento del modelo 3D para resaltarlo y leer su nombre, tipo, etiqueta, GlobalId, conjuntos de propiedades y cantidades.
keywords: propiedades, elegir, designar, clic, elemento, parámetros, conjuntos de propiedades, pset, cantidades, globalid, guid, tipo, inspeccionar
from: 43b80aa8
---

## Qué hará

Designe elementos en un modelo IFC y lea todo lo que el archivo dice sobre ellos: atributos, conjuntos de propiedades, propiedades de tipo y cantidades.

## Pasos

1. Abra un modelo IFC.
2. Haga clic en un elemento, por ejemplo una puerta. Haga clic sin arrastrar: un arrastre de más de unos pocos píxeles produce una órbita en lugar de designar.
3. Mire el elemento: queda resaltado en azul.
4. Mire el panel {{ui:Propiedades}} a la derecha. Arriba están la clase del elemento (como "Door" o "WallStandardCase") y su nombre.
5. Lea el primer bloque: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** y **Line**.
6. Desplácese hacia abajo hasta los conjuntos de propiedades. Los tres primeros están abiertos; haga clic en el nombre de cualquier otro conjunto para abrirlo.
7. Haga clic en otro elemento para cambiar a él.
8. Pulse {{key:Esc}}, o haga clic en el fondo vacío, para quitar la selección.

## Qué debe ver

- El elemento resaltado y sus datos a la derecha.
- Conjuntos de propiedades en orden alfabético. Los conjuntos que vienen del **tipo** del elemento llevan " (tipo)" después de su nombre y la nota "Propiedad de tipo: un cambio aquí se aplica a todos los elementos de este tipo."
- Conjuntos de cantidades (como longitudes, áreas y volúmenes) listados junto con los demás conjuntos. Las cantidades son de solo lectura.
- Los valores que puede cambiar parecen botones. [Cambiar propiedades IFC y guardar una copia editada](topic:edit-ifc-properties) muestra cómo.

[Campos del panel de propiedades](topic:properties-panel) explica cada campo.

## Acceso a elementos ocultos

1. Para llegar a algo dentro del edificio, desmarque los niveles que están encima de él en la lista {{ui:Niveles}}.
2. Para llegar a un muro detrás de un volumen de habitación, desactive {{ui:Espacios}}.
3. Haga clic en el elemento.

## Errores comunes

- **Arrastrar un poco al hacer clic.** BimCraft lo trata como una órbita y no designa. Mantenga el ratón quieto.
- **Esperar unidades junto a los números.** Los valores se muestran tal como están guardados en el archivo, redondeados a cuatro decimales, sin símbolo de unidad. Las longitudes en una exportación métrica suelen estar en milímetros o metros; revise la configuración del exportador.
- **Buscar un parámetro por su nombre habitual.** Los exportadores renombran y reagrupan los parámetros en conjuntos de propiedades IFC como `Pset_WallCommon`. Revise cada conjunto; los parámetros personalizados suelen estar en un conjunto con el nombre del programa que los exportó o el de su empresa.
- **Esperar un cuadro de búsqueda.** Haga clic para designar un elemento; {{key:Mod}}+clic o {{key:Shift}}+clic designa más, y {{key:Mod+A}} designa todos los elementos mostrados. La lista {{ui:Elementos}} de la izquierda solo cuenta los elementos por clase; no es clicable.
- **Designar en una tarjeta de archivo de proyecto.** Una tarjeta de archivo no tiene elementos que designar: "Las propiedades de elementos requieren el modelo 3D. Abra una exportación IFC de este archivo para verlas."
