---
title: "Copiar, pegar y duplicar elementos de la biblioteca"
summary: "Copie un elemento de biblioteca colocado y péguelo donde haga clic, en el mismo lugar junto al original o en otro modelo; copie las propiedades de cualquier otro elemento como texto; deshacer y rehacer."
keywords: copiar, pegar, duplicar, portapapeles, pegar en el mismo lugar, cortar, eliminar, seleccionar todo, deshacer, rehacer, menú Editar, más, elemento de biblioteca, colocación, repetir, matriz
from: 6ac15931
---

## Qué va a hacer

Coloque más copias de un elemento que ya colocó: una segunda mesa de trabajo, una fila de lavabos. Este tema trata de **elementos de biblioteca colocados**, los elementos que BimCraft ha escrito en el modelo: uno de ellos se puede pegar en cualquier modelo, incluso en otra pestaña. Los muros, las puertas y el resto de elementos se copian, cortan, pegan y eliminan del mismo modo dentro de su propio modelo: consulte [Eliminar, cortar, copiar y pegar elementos de construcción](topic:edit-elements).

Los comandos están en la barra de herramientas sobre el modelo: {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y {{ui:Más}}, un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}. Un comando que no puede actuar en ese momento aparece atenuado; sitúe el puntero sobre él para leer el motivo, o haga clic y la barra de estado le indicará por qué.

## Pasos

1. Abra un modelo IFC con un elemento de biblioteca, o coloque uno antes. Consulte [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library).
2. Haga clic en el elemento en la vista 3D. Sus propiedades muestran un cuadro **Elemento de biblioteca**.
3. Haga clic en {{ui:Copiar}} o pulse {{key:Mod+C}}.
4. Haga clic en {{ui:Pegar}} o pulse {{key:Mod+V}}. Se abre la barra de colocación y una caja transparente sigue al puntero, girada como el original.
5. Pulse {{key:R}} para girarlo 90°, {{key:Tab}} para ajustar su parte posterior a un muro, o escriba X e Y en la barra de colocación.
6. Haga clic donde debe ir la copia. Cada clic coloca otra copia; pulse {{key:Esc}} para parar.
7. Haga clic en {{ui:Guardar como IFC}} para descargar la copia editada del modelo.

## Pegar en el mismo lugar

{{ui:Más}}, {{ui:Pegar en el mismo lugar}} o {{key:Mod+Shift+V}} pega sin hacer clic, en la misma X e Y y con el mismo giro:

- **En el mismo modelo y en la misma planta**: dos elementos en un único punto no servirían de nada, así que la copia va justo al lado del original, a una anchura del elemento más 100 mm a lo largo de su propio ancho. Vuelva a pegar en el mismo lugar desde la copia nueva para hacer una fila.
- **En otra planta o en otro modelo**: exactamente la misma X, Y y giro. BimCraft usa la planta con el mismo nombre; si no existe, la de altura más cercana. La barra de estado indica cuál.

## Duplicar

{{ui:Más}}, {{ui:Duplicar}} o {{key:Mod+D}} copia el elemento seleccionado y empieza a pegarlo de inmediato: un paso en lugar de dos.

## En otro modelo o en otra pestaña

Lo que copie se guarda en este navegador, así que puede abrir otro modelo IFC, o BimCraft en otra pestaña, y pegarlo allí. El otro modelo necesita el propio elemento de biblioteca: BimCraft lo tiene cuando el elemento se colocó, se sustituyó o se actualizó en esta pestaña. Un elemento colocado en una sesión anterior solo se puede volver a pegar en su propio modelo; en otro modelo, colóquelo desde la pestaña {{ui:Biblioteca}}.

## Qué debe ver

- La copia en el modelo, seleccionada, con el mismo elemento de biblioteca, licencia, datos del equipo, cantidad y nota que el original, y el **siguiente número de elemento libre**. Cambie el número en **Propiedades**, en `CadCraft_Placement`.
- «Colocado: *elemento* (elemento *n*)» en la lista de cambios. {{key:Mod+Z}} lo deshace; {{key:Mod+Y}} lo vuelve a poner.

## Conviene saber

- Las copias comparten el tipo del original, así que todas usan un mismo conjunto de geometría, igual que ocurre al colocar dos veces el mismo elemento.
- {{ui:Deshacer}} y {{ui:Rehacer}} cubren todos los cambios: valores editados, colocaciones, pegados, sustituciones y actualizaciones. Rehacer vuelve a poner una colocación en el mismo sitio; un cambio nuevo borra lo que se podía rehacer.
- En la vista 2D de un plano no hay nada que seleccionar, así que no hay nada que copiar. Use {{ui:Editar en CadCraft}} para modificar el plano, cuando aparezca.

## Errores habituales

- **{{ui:Pegar}} indica que los elementos proceden de otro modelo.** Lo último que copió era un elemento de construcción, o varios: estos solo se pegan en su propio modelo. Seleccione un único elemento de biblioteca colocado y cópielo.
- **{{ui:Pegar}} indica que la copia procede de otro modelo sin su elemento de biblioteca.** Coloque el elemento desde la pestaña {{ui:Biblioteca}} una vez en esta pestaña, y después cópielo y péguelo.
- **{{key:Mod+C}} copia texto de la página.** Se había seleccionado texto en la página. Haga clic primero en el modelo.

## Relacionado

- [Teclas y ratón](topic:keyboard#edit)
- [Ajustes de BimCraft](topic:settings)
