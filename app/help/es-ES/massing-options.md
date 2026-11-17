---
title: Opciones de volumetría una al lado de otra
summary: Mantenga varias opciones de volumetría en el mismo modelo, haga actual una de ellas, compárela con las líneas de edificación y las servidumbres de la parcela, incorpore volumetría de ModelCraft y desarrolle la opción elegida en muros y forjados.
keywords: volumetría, masa, opción, opciones, conjunto de opciones, esquema, concepto, diseño conceptual, etapa 2, alternativas, comparar opciones, opción actual, masa de edificio, empujar tirar, modelcraft, civilcraft, superficie bruta, huella, volumen, desarrollar masa, servidumbre, línea de edificación, retranqueo
from: 69a01459
---

## Qué va a hacer

Mantener las opciones de volumetría de un concepto en un solo modelo, en lugar de en archivos separados: varias masas de edificio una al lado de otra, una de ellas la **opción actual** y las demás guardadas para comparar.

Una opción de volumetría es una masa de edificio: un contorno elevado a una altura, con un número de plantas. Todavía no son muros. Puede guardar todas las que quiera, agrupadas en **conjuntos de opciones** (las opciones de un mismo conjunto son alternativas entre sí).

## Guardar una opción

1. Abra {{ui:Programa de habitaciones a volumetría}}, escriba el programa de habitaciones y el contorno, y elija {{ui:Buscar opciones}}.
2. Elija una de las opciones listadas.
3. En {{ui:Opciones de volumetría en el modelo}}, escriba un nombre para el {{ui:Conjunto de opciones}} si lo quiere, y elija {{ui:Conservar la opción seleccionada}}.

La opción aparece en el modelo como masa de edificio y en la lista, con sus plantas, huella, superficie bruta y volumen. No se construye nada. Guarde otra del mismo modo.

La primera opción de un conjunto es su opción actual. Cada paso es un paso de deshacer.

## La opción actual

Una opción de cada conjunto es la actual. Eso significa dos cosas:

- **Sus plantas cuentan como superficies del edificio.** La opción actual tiene un espacio por planta con la superficie bruta de esa planta, de modo que cualquier cosa que lea superficies de planta ve la opción vigente y ninguna otra.
- **Se comprueba contra la parcela.** Si queda fuera del límite de la parcela, sobre una línea de edificación o sobre una servidumbre, aparece en {{ui:Problemas}} un aviso que la nombra. Es solo un aviso: no se rechaza nada. Las opciones que no son actuales no se comprueban.

Elija {{ui:Hacer actual}} en otra opción para cambiarla.

{{ui:Ocultar las opciones que no son actuales}} oculta las demás en la vista 3D. Solo afecta a este navegador y no se guarda en el archivo.

## Volumetría desde ModelCraft

En ModelCraft, {{ui:Exportar}} › {{ui:Volumetría a BimCraft…}} envía cada grupo o componente como una opción. BimCraft abre el archivo con las opciones listadas.

Para incorporarlas a un modelo que ya está abierto, elija {{ui:Añadir opciones de volumetría desde un archivo}} y seleccione el archivo `.ifc`. Sus masas entran como opciones de un conjunto, en un solo paso de deshacer, y se colocan donde se modelaron. Un archivo de masas de edificio de CivilCraft funciona igual.

Una opción marcada como "(forma simplificada)" no era un bloque vertical simple en ModelCraft (se retranquea, tiene pendientes o no está cerrada). Su masa aquí es el contorno de su base elevado a su altura; sus superficies de planta y su volumen son los medidos en el propio sólido.

## Desarrollar la opción elegida

Elija {{ui:Desarrollar}} en una opción. Se convierte en niveles (sumados hasta su número de plantas), con muros alrededor de su contorno en cada planta y una losa de forjado en cada una, en un solo paso de deshacer. La opción sale de la lista; las demás se quedan como estaban. Todavía no hay cubierta.

{{ui:Cambiar nombre}} cambia el nombre de una opción; {{ui:Quitar}} la saca del modelo. Quitar la opción actual hace actual la primera de las demás del conjunto.

## Qué debe ver

- Cada opción guardada como un bloque en la vista 3D y una fila en la lista.
- "(actual)" junto a una opción de cada conjunto.
- Un aviso en {{ui:Problemas}} cuando la opción actual cruza el límite de la parcela, una línea de edificación o una servidumbre.

## Conviene saber

- En el archivo IFC, una opción es un proxy de elemento de edificio con el conjunto de propiedades `CadCraft_SiteMass` (su conjunto de opciones, su nombre y si es la actual figuran en ese conjunto). Las plantas de la opción actual son espacios de tipo `MassingFloor`. Otros programas leen el proxy como un elemento genérico.
- Guardar una opción nunca añade niveles; desarrollarla sí.
- Un asistente puede listar las opciones guardadas, guardar una, hacer actual una, cambiarle el nombre, desarrollarla o quitarla.
