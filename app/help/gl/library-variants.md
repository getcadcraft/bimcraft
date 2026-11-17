---
title: Colocar e cambiar un elemento da biblioteca que ten variantes
summary: Algúns elementos da biblioteca vense en varios tamaños ou opcións. Escolla a variante antes de colocala, vexa cal é un elemento colocado, cámbiea por outra variante cun clic e consérvea cando se actualiza o elemento.
keywords: variante, variantes, tamaños, opcións, configuración, biblioteca, librarycraft, colocar, cambiar, configurador, familia, tipo, actualizar, conexións
from: c05f0af3
---

## Que vai facer

Coloque un elemento da biblioteca no tamaño ou opción que necesita, e cambie de idea despois sen colocalo de novo. Un elemento con variantes é un só elemento na biblioteca (un nome, unha licenza, unha versión) cunha táboa das variantes en que vén: por exemplo, unha placa de montaxe en Pequena, Mediana e Grande, ou a mesma placa sen buratos.

## Escoller a variante e colocala

1. Abra a lapela {{ui:Biblioteca}} e prema a tarxeta do elemento.
2. Baixo o nome, a escolla {{ui:Variante}} lista cada variante co seu tamaño. A predeterminada do elemento escóllese primeiro.
3. Escolla unha. A planta, o tamaño e o corpo 3D seguen a súa escolla.
4. Prema {{ui:Colocar na planta}} (ou {{ui:Colocar no modelo}} na vista 3D) e colóquea como calquera elemento: vexa [Colocar equipamento e mobiliario da biblioteca](topic:place-from-library).

O elemento colocado leva o nome do elemento e da variante, por exemplo *Placa de montaxe — Grande*, para que o cadro de {{ui:Equipamento}} e a árbore os distingan. Cada variante é o seu propio tipo IFC: colocar dúas veces a mesma variante comparte un tipo; unha variante distinta obtén o seu.

## Ver que variante é un elemento colocado

Escolla o elemento. En {{ui:Propiedades}}, a caixa **Elemento da biblioteca** ten unha liña **Variante**. O IFC gárdaa en `CadCraft_LibraryItem`: `Variant` (o identificador da variante), `VariantName` e `VariantValues` (os valores da opción, como texto), para que outros programas poidan lelos.

## Cambiar a outra variante

1. Escolla o elemento colocado e prema {{ui:Cambiar elemento…}} na caixa **Elemento da biblioteca**. Abrirase a lapela {{ui:Biblioteca}}.
2. Na parte superior, **Outras variantes de** *o elemento* lista cada variante co seu tamaño. A colocada está marcada e non se pode escoller.
3. Prema {{ui:Cambiar a …}} na variante que quere.

O elemento conserva o seu sitio, xiro, piso, número de elemento, cantidade e notas; o seu tipo, forma e datos cambian pola outra variante. {{key:Mod+Z}} devolve o primeiro. Aínda pode escoller calquera outro elemento da lista de abaixo, como antes: vexa [Cambiar un elemento colocado e actualizar elementos da biblioteca](topic:swap-and-update-library-items).

## Copiar, pegar e actualizacións

- Unha copia dunha variante colocada é a mesma variante: neste modelo e noutro modelo aberto na mesma lapela do navegador, con Copiar e Pegar.
- **As actualizacións** conservan a variante: se a nova versión do elemento aínda a ten, a colocación convértese nesa variante da nova versión. Se a nova versión xa non a ten, a colocación toma a variante predeterminada do elemento.

## Bo que saber

- Só algúns elementos da biblioteca teñen variantes. As tarxetas non o indican; vese a escolla {{ui:Variante}} ao abrir unha.
- Un elemento pode listar **portos** (puntos de conexión para tubaxes e condutos) por variante. A lapela Biblioteca amosa cantos ten unha variante. Aínda **non** se escriben no IFC cando o coloca desde a lapela Biblioteca.
- Unha variante sen corpo 3D colócase cunha caixa substitutiva, como calquera símbolo 2D.
- Os tamaños da escolla están en milímetros, tal como os escribe a biblioteca.
