---
title: Seleccionar un elemento y leer sus propiedades
summary: Haga clic en cualquier elemento del modelo 3D para resaltarlo y leer su nombre, tipo, etiqueta, GlobalId, conjuntos de propiedades y cantidades.
keywords: propiedades, seleccionar, elegir, clic, elemento, parámetros, conjuntos de propiedades, pset, cantidades, globalid, guid, tipo, inspeccionar
from: 43b80aa8
---

## Qué va a hacer

Seleccione elementos de un modelo IFC y lea todo lo que el archivo dice sobre ellos: atributos, conjuntos de propiedades, propiedades de tipo y cantidades.

## Pasos

1. Abra un modelo IFC.
2. Haga clic en un elemento, por ejemplo una puerta. Haga clic sin arrastrar: un arrastre de más de unos píxeles orbita en lugar de seleccionar.
3. Mire el elemento: se resalta en azul.
4. Mire el panel {{ui:Propiedades}} de la derecha. Arriba aparecen la clase del elemento (como «Door» o «WallStandardCase») y su nombre.
5. Lea el primer bloque: **Nombre**, **Tipo**, **Tipo de objeto**, **Etiqueta**, **Descripción**, **GlobalId** y **Línea**.
6. Desplácese hasta los conjuntos de propiedades. Los tres primeros aparecen abiertos; haga clic en el nombre de cualquier otro conjunto para abrirlo.
7. Haga clic en otro elemento para cambiar a él.
8. Pulse {{key:Esc}}, o haga clic en el fondo vacío, para quitar la selección.

## Qué debe ver

- El elemento resaltado y sus datos a la derecha.
- Los conjuntos de propiedades en orden alfabético. Los conjuntos que proceden del **tipo** del elemento llevan « (tipo)» tras su nombre y la nota «Propiedad de tipo: un cambio aquí se aplica a todos los elementos de este tipo.»
- Los conjuntos de cantidades (como longitudes, superficies y volúmenes) listados junto a los demás conjuntos. Las cantidades son de solo lectura.
- Los valores que puede cambiar parecen botones. [Cambiar propiedades IFC y guardar una copia editada](topic:edit-ifc-properties) explica cómo.

[Campos del panel de propiedades](topic:properties-panel) explica cada campo.

## Acceder a elementos ocultos

1. Para llegar a algo dentro del edificio, desmarque las plantas situadas encima en la lista {{ui:Niveles}}.
2. Para llegar a un muro detrás de un volumen de habitación, desactive {{ui:Espacios}}.
3. Haga clic en el elemento.

## Errores frecuentes

- **Arrastrar un poco mientras hace clic.** BimCraft lo trata como una órbita y no selecciona. Mantenga el ratón quieto.
- **Esperar unidades junto a los números.** Los valores se muestran tal como están guardados en el archivo, redondeados a cuatro decimales, sin símbolo de unidad. Las longitudes en una exportación métrica suelen estar en milímetros o en metros; compruebe la configuración del exportador.
- **Buscar un parámetro por su nombre habitual.** Los exportadores renombran y reagrupan los parámetros en conjuntos de propiedades IFC como `Pset_WallCommon`. Revise cada conjunto: los parámetros personalizados suelen estar en un conjunto con el nombre del programa que exporta o de su empresa.
- **Esperar un cuadro de búsqueda.** Haga clic para seleccionar un elemento; {{key:Mod}}+clic o {{key:Shift}}+clic selecciona más, y {{key:Mod+A}} selecciona todos los elementos mostrados. La lista {{ui:Elementos}} de la izquierda solo cuenta los elementos por clase; no se puede hacer clic en ella.
- **Seleccionar en una ficha de archivo de proyecto.** Una ficha de archivo no tiene elementos que seleccionar: «Las propiedades de los elementos necesitan el modelo 3D. Abra una exportación IFC de este archivo para verlas.»
