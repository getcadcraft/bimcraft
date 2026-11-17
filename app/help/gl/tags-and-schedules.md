---
title: Etiquetar elementos e facer cadros por etiqueta
summary: Defina etiquetas propias (un nome, un tipo, os valores permitidos, as clases ás que se aplican), etiquete moitos elementos á vez e cree cadros cuxas columnas, filtros e grupos len as etiquetas. As etiquetas gárdanse no IFC.
keywords: etiquetas, etiqueta, etiquetado, propiedades personalizadas, parámetros, parámetros compartidos, conxunto de propiedades, pset, cadro, filtro, agrupar por, acabado, resistencia ao lume, edición en lote, csv
from: 9cc7c90d
---

## Que vai facer

Unha etiqueta é unha propiedade propia, como *Acabado* ou *Resistencia ao lume*. Defínea unha vez para o proxecto, asígnea a moitos elementos ao mesmo tempo, e todos os cadros de BimCraft poden lela: o cadro de etiquetas aquí, {{ui:Cantidades}}, Buscar, Colorear por propiedade e [Documentos do modelo](topic:documents-from-the-model).

## Pasos

1. Abra un modelo IFC, ou comece un edificio novo.
2. No panel esquerdo, debaixo de {{ui:Cantidades}}, abra {{ui:Etiquetas}}.
3. Prema {{ui:Engadir unha etiqueta}}. Dálle un nome, escolla o seu tipo e, se quere, indique os valores permitidos (separados por comas) e as clases ás que se aplica (`IfcDoor`, `IfcWall` …). Prema {{ui:Engadir a etiqueta}}.
4. Seleccione os elementos no modelo (Buscar axuda: seleccione todas as portas á vez).
5. Debaixo de {{ui:Etiquetar a selección}}, escolla ou escriba un valor para cada etiqueta que queira definir, deixe as demais como están e prema {{ui:Aplicar a … elementos seleccionados}}.
6. Debaixo de {{ui:Cadro de etiquetas}}, marque as columnas, engada filtros, escolla {{ui:Agrupar por}} e despois {{ui:Descargar CSV}}.

## Que debe ver

- Un paso na lista de cambios por cada definición gardada e cada etiquetado; {{ui:Desfacer}} desfai o paso.
- Os elementos dunha clase á que a etiqueta non se aplica quedan fóra desa etiqueta, e a liña de estado indica cantos son.
- O cadro de etiquetas lista unha fila por elemento, agrupada polo campo que escolleu; faga clic na primeira celda dunha fila para seleccionar ese elemento.
- {{ui:Cantidades}} lista as etiquetas en `CadCraft_Tags`, así que alí pode sumar superficies ou contidos por etiqueta.

## Tipos

Os tipos son a mesma lista que os parámetros de familia: Lonxitude (milímetros), Ángulo (graos), Número, Número enteiro, Sí / Non, Pluma (1–16), Texto, Material e Recheo. Un valor que non encaixa co seu tipo, ou que non está entre os valores permitidos, rexéitase cunha mensaxe e non cambia nada.

## Cousas que convén saber

- Todo é IFC simple, así que outros programas len os valores: as definicións están no conxunto de propiedades `CadCraft_TagDefs` do proxecto, e os valores no conxunto `CadCraft_Tags` de cada elemento (unha propiedade por etiqueta). As lonxitudes escríbense na unidade de lonxitude do ficheiro.
- `IfcWall` nas clases dunha etiqueta tamén inclúe os muros de caso estándar e os muros con elementos.
- Cambiar o nome dunha etiqueta cambia os seus valores en todos os elementos no mesmo paso. Eliminar unha etiqueta elimina só a súa definición: os valores xa asignados quedan nos elementos como propiedades simples. Límpeos primeiro (escolla {{ui:Limpar}}) para quitalos.
- As etiquetas da aplicación de debuxo CadCraft (atributos de bloque) aínda non están feitas.
