---
title: Opciones de volumetría una al lado de otra
summary: Conserve varias opciones de volumetría en el mismo modelo, haga actual una de ellas, verifíquela contra las líneas de edificación y servidumbres del sitio, incorpore volumetría desde ModelCraft y desarrolle la opción elegida en muros y pisos.
keywords: volumetría, volumen, opción, opciones, conjunto de opciones, esquema, concepto, diseño conceptual, etapa 2, alternativas, comparar opciones, opción actual, volumen de edificación, empujar y jalar, modelcraft, civilcraft, área bruta de piso, huella, volumen, desarrollar volumen, servidumbre, línea de edificación, retiro
from: 69a01459
---

## Qué hará

Conserve las opciones de volumetría de un concepto en un solo modelo en lugar de en archivos separados: varios volúmenes de edificio uno al lado del otro, uno de ellos la **opción actual**, y los demás guardados para comparar.

Una opción de volumetría es un volumen de edificio: un contorno elevado a una altura, con cierto número de pisos. Todavía no son muros. Puede conservar todas las que quiera, agrupadas en **conjuntos de opciones** (las opciones de un mismo conjunto son alternativas entre sí).

## Conserve una opción

1. Abra {{ui:Programa de espacios a volumetría}}, escriba el programa de espacios y el contorno, y elija {{ui:Buscar opciones}}.
2. Elija una de las opciones listadas.
3. En {{ui:Opciones de volumetría en el modelo}}, escriba un nombre para el {{ui:Conjunto de opciones}} si lo quiere, y elija {{ui:Conservar la opción seleccionada}}.

La opción aparece en el modelo como un volumen de edificio y en la lista, con sus pisos, huella, área bruta de piso y volumen. No se construye nada. Conserve otra de la misma manera.

La primera opción de un conjunto es su opción actual. Cada paso es un paso de deshacer.

## La opción actual

Una opción de cada conjunto es la actual. Eso significa dos cosas:

- **Sus pisos cuentan como las áreas de piso del edificio.** La opción actual tiene un espacio por piso con el área bruta de ese piso, de modo que todo lo que lea áreas de piso ve la opción vigente y ninguna otra.
- **Se verifica contra el sitio.** Si queda fuera del límite del sitio, sobre una línea de edificación o sobre una servidumbre, aparece en {{ui:Problemas}} una advertencia que la nombra. Es solo una advertencia: no se rechaza nada. Las opciones que no son actuales no se verifican.

Elija {{ui:Hacer actual}} en otra opción para cambiarla.

{{ui:Ocultar las opciones que no son actuales}} oculta las demás en la vista 3D. Eso es solo para este navegador y no se guarda en el archivo.

## Volumetría desde ModelCraft

En ModelCraft, {{ui:Exportar}} › {{ui:Volumetría a BimCraft…}} envía cada grupo o componente como una opción. BimCraft abre el archivo con las opciones listadas.

Para incorporarlas a un modelo que ya está abierto, elija {{ui:Agregar opciones de volumetría desde un archivo}} y seleccione el archivo `.ifc`. Sus volúmenes entran como opciones de un conjunto, en un solo paso de deshacer, en el lugar donde se modelaron. Un archivo de volúmenes de edificio de CivilCraft funciona de la misma manera.

Una opción marcada "(forma simplificada)" no era un bloque vertical sencillo en ModelCraft (tiene retrocesos, pendientes o no está cerrada). Su volumen aquí es el contorno de su base elevado a su altura; sus áreas de piso y su volumen son los medidos del propio sólido.

## Desarrolle la opción elegida

Elija {{ui:Desarrollar}} en una opción. Se convierte en niveles (sumados hasta su número de pisos), muros alrededor de su contorno en cada piso y una losa de piso en cada uno, en un solo paso de deshacer. La opción sale de la lista; las demás opciones se quedan como estaban. Todavía no hay techo.

{{ui:Cambiar nombre}} cambia el nombre de una opción; {{ui:Quitar}} la saca del modelo. Quitar la opción actual hace actual la primera de las otras opciones del conjunto.

## Qué debe ver

- Cada opción conservada como un bloque en la vista 3D y una fila en la lista.
- "(actual)" junto a una opción de cada conjunto.
- Una advertencia en {{ui:Problemas}} cuando la opción actual cruza el límite del sitio, una línea de edificación o una servidumbre.

## Conviene saber

- En el archivo IFC, una opción es un elemento proxy de edificio con el conjunto de propiedades `CadCraft_SiteMass` (su conjunto de opciones, nombre de la opción y si es actual están en ese conjunto). Los pisos de la opción actual son espacios de tipo `MassingFloor`. Otros programas leen el proxy como un elemento genérico.
- Conservar una opción nunca agrega niveles; desarrollarla sí.
- Un asistente puede listar las opciones conservadas, conservar una, hacer actual una, cambiarle el nombre, desarrollarla o quitarla.
