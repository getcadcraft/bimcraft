---
title: Copiar, pegar y duplicar elementos de biblioteca
summary: Copie un elemento de biblioteca colocado y péguelo donde haga clic, en el mismo lugar junto al original o en otro modelo; copie las propiedades de cualquier otro elemento como texto; deshaga y rehaga.
keywords: copiar, pegar, duplicar, portapapeles, pegar en el mismo lugar, cortar, eliminar, seleccionar todo, deshacer, rehacer, menú Editar, más, elemento de biblioteca, colocación, repetir, matriz
from: 6ac15931
---

## Qué hará

Coloque más copias de un elemento que ya colocó: una segunda mesa de trabajo, una fila de lavabos. Este tema trata de **elementos de biblioteca colocados**, los elementos que BimCraft escribió en el modelo: uno de ellos puede pegarse en cualquier modelo, incluso en otra pestaña. Los muros, las puertas y todos los demás elementos se copian, cortan, pegan y eliminan de la misma forma dentro de su propio modelo: vea [Eliminar, cortar, copiar y pegar elementos de construcción](topic:edit-elements).

Los comandos están en la barra de herramientas sobre el modelo: {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y {{ui:Más}}, un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}. Un comando que no puede actuar en ese momento aparece atenuado; señálelo para leer el motivo, o haga clic en él y la línea de estado le dirá por qué.

## Pasos

1. Abra un modelo IFC con un elemento de biblioteca, o coloque uno primero. Vea [Colocar equipos y muebles desde la biblioteca](topic:place-from-library).
2. Haga clic en el elemento en la vista 3D. Sus propiedades muestran un cuadro **Elemento de biblioteca**.
3. Haga clic en {{ui:Copiar}} o presione {{key:Mod+C}}.
4. Haga clic en {{ui:Pegar}} o presione {{key:Mod+V}}. Se abre la barra de colocación y un cuadro translúcido sigue al puntero, girado igual que el original.
5. Presione {{key:R}} para girarlo 90°, {{key:Tab}} para ajustar su parte trasera a un muro, o escriba X e Y en la barra de colocación.
6. Haga clic donde debe ir la copia. Cada clic coloca otra copia; presione {{key:Esc}} para terminar.
7. Haga clic en {{ui:Guardar como IFC}} para descargar la copia editada del modelo.

## Pegar en el mismo lugar

{{ui:Más}}, {{ui:Pegar en el mismo lugar}} o {{key:Mod+Shift+V}} pega sin hacer clic, en la misma X e Y y con el mismo giro:

- **En el mismo modelo, en el mismo nivel**: dos elementos en exactamente el mismo sitio no servirían de nada, así que la copia va justo al lado del original, a un ancho del elemento más 100 mm a lo largo de su propio ancho. Vuelva a usar Pegar en el mismo lugar desde la nueva copia para formar una fila.
- **A otro nivel o a otro modelo**: exactamente la misma X, Y y giro. BimCraft usa el nivel con el mismo nombre; si no hay ninguno, el de altura más cercana. La línea de estado indica cuál.

## Duplicar

{{ui:Más}}, {{ui:Duplicar}} o {{key:Mod+D}} copia el elemento elegido y comienza a pegarlo de inmediato: un paso en lugar de dos.

## A otro modelo o a otra pestaña

Lo que copia se guarda en este navegador, así que puede abrir otro modelo IFC, o BimCraft en otra pestaña, y pegar allí. El otro modelo necesita el propio elemento de biblioteca: BimCraft lo tiene cuando el elemento se colocó, se cambió o se actualizó en esta pestaña. Un elemento colocado en una sesión anterior solo puede volver a pegarse en su propio modelo; en otro modelo, colóquelo desde la pestaña {{ui:Biblioteca}}.

## Lo que debe ver

- La copia en el modelo, seleccionada, con el mismo elemento de biblioteca, licencia, datos de equipo, cantidad y nota que el original, y el **siguiente número de elemento libre**. Cambie el número en Propiedades, en `CadCraft_Placement`.
- "Colocado: *elemento* (elemento *n*)" en la lista de cambios. {{key:Mod+Z}} lo deshace; {{key:Mod+Y}} lo vuelve a poner.

## Cosas que conviene saber

- Las copias comparten el tipo del original, así que todas usan un mismo conjunto de geometría, como sucede al colocar dos veces el mismo elemento.
- {{ui:Deshacer}} y {{ui:Rehacer}} cubren todos los cambios: valores editados, colocaciones, pegados, cambios de elemento y actualizaciones. Rehacer vuelve a colocar un elemento en el mismo lugar; un cambio nuevo borra lo que podía rehacerse.
- En la vista 2D de un dibujo no hay nada que seleccionar, así que no hay nada que copiar. Use {{ui:Editar en CadCraft}} para cambiar el dibujo, cuando aparezca.

## Errores comunes

- **{{ui:Pegar}} dice que los elementos vienen de otro modelo.** Lo último que copió era un elemento de construcción, o varios elementos: estos solo se pegan en su propio modelo. Elija un elemento de biblioteca colocado y cópielo.
- **{{ui:Pegar}} dice que la copia viene de otro modelo sin su elemento de biblioteca.** Coloque el elemento desde la pestaña {{ui:Biblioteca}} una vez en esta pestaña, luego cópielo y péguelo.
- **{{key:Mod+C}} copia texto de la página.** Había texto seleccionado en la página. Haga clic primero en el modelo.

## Temas relacionados

- [Teclas y ratón](topic:keyboard#edit)
- [Configuración de BimCraft](topic:settings)
