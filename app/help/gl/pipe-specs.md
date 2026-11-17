---
title: Especificacións de tubaxe, válvulas, rexistros e familias de fabricantes
summary: Configure as súas propias especificacións de tubaxe (táboas de tamaños con material, unión e rugosidade), gardadas no ficheiro do modelo; coloque válvulas, un filtro e rexistros nas liñas; e importe un modelo de válvula ou de equipamento dun fabricante como familia con portos de conexión.
keywords: especificación de tubaxe, especificacións de tubaxe, especificación de tubaxe industrial, clase de tubaxe, tubaxe personalizada, táboa de tamaños, tubo, tubo hixiénico, inoxidable, cédula, diámetro exterior, espesor de parede, diámetro interior, rugosidade, clase de presión, csv, json, importar, exportar, folla de cálculo, norma, bpe, din, en 10357, en 10255, válvula, válvulas, válvula de mariposa, válvula de equilibrado, válvula de control, filtro, rexistro, rexistro de volume, rexistro cortafogos, oem, fabricante, familia, familias, portos, conexión, step, obj, gltf, ifc, radiador, converxector, panel radiante, unidade de tratamento de aire, difusor, reixa
from: bc2f7c4e
---

## O que vai facer

Debuxar tubaxe coa súa propia especificación, en lugar das táboas integradas de aceiro, cobre e plástico; colocar válvulas e rexistros nas liñas; e colocar o modelo dun fabricante con portos aos que se conectan as tubaxes.

:::note
Unha axuda de debuxo e coordinación. Unha especificación de tubaxe contén os números que vostede escribe ou importa: comprebe cada táboa coa súa norma de proxecto. As válvulas, filtros e rexistros integrados son formas esquemáticas dimensionadas segundo a liña, non a lonxitude dun fabricante ou dunha norma de válvulas.
:::

## Configurar unha especificación de tubaxe

1. Active {{ui:Debuxar}}, abra {{ui:Compilación}} e escolla {{ui:Especificacións de tubaxe}}. O mesmo botón está na barra da ferramenta de tubaxe.
2. Escolla {{ui:Novo}}, ou parta dun ficheiro, dunha pegada ou dunha especificación de partida (máis abaixo).
3. Escriba o seu nome, a norma ou a referencia que segue, o material e o tipo de extremo ou de unión.
4. Escriba unha fila por tamaño: o nome do tamaño, o diámetro exterior e a parede, en milímetros. Escriba o diámetro interior en lugar da parede se é o que ten: o outro valor énchese automaticamente. DN, clase de presión e peso son opcionais.
5. Opcional: a rugosidade en milímetros (o cálculo da perda de presión úsaa), un espesor de illamento co que comezan as liñas novas, o raio do cóbado como factor do diámetro exterior, se a especificación ten tes e reductores, e unha cor propia en 3D.
6. Marque os servizos cuxas liñas novas deben comezar con esta especificación, por exemplo auga xelada.
7. Prema {{ui:Gardar no modelo}}.

As especificacións gárdanse no ficheiro do modelo. Quen abra o ficheiro as terá, e {{ui:Desfacer}} retira un cambio.

Unha especificación, ou un dos seus tamaños, non se pode eliminar mentres haxa unha liña debuxada nela. Cambiar os números dun tamaño redebuxa as liñas dese tamaño.

## Reutilizar unha especificación noutro modelo

- {{ui:Exportar .json}} garda a especificación seleccionada como un ficheiro pequeno; {{ui:Exportar todas}} garda todas as especificacións do modelo. {{ui:Importar un ficheiro}} as le de novo.
- {{ui:Exportar .csv}} garda a táboa de tamaños para unha folla de cálculo. {{ui:Importar un ficheiro}} tamén le un `.csv`.
- {{ui:Pegar filas}} toma unha táboa copiada dunha folla de cálculo. A primeira fila nomea as columnas: `Size`, `OD` e `Wall` (ou `ID`), e opcionalmente `DN`, `Pressure`, `Weight`. Unha fila por tamaño. Os números son milímetros, salvo que escolla polegadas ou que unha celda indique a súa unidade (`0.065 in`).

## Especificacións de partida

{{ui:Engadir unha especificación de partida}} engade ao modelo unha destas como copia editable:

| Partida | Tamaños |
|---|---|
| Tubo ASME BPE | 1/4" a 6" |
| Tubo EN 10357 serie A (DIN 11850 fila 2) | DN10 a DN200 |
| Tubo de aceiro EN 10255, serie media | DN15 a DN150 |
| Tubo de aceiro EN 10255, serie pesada | DN15 a DN125 |

Estas táboas son os diámetros exteriores e as paredes que dúas ou máis páxinas publicadas de provedores indican para a norma e coinciden. Non se toman das propias normas. Os tamaños que só dá unha páxina quedan fóra. Cada partida mostra as súas páxinas de orixe e está marcada como «comprobar coa norma de proxecto». Non se dan rugosidade, clase de presión nin peso.

## Debuxar unha liña cunha especificación

1. Escolla {{ui:Tubaxe}}. Un servizo que marcou nunha especificación comeza con ela. Para calquera outra liña, escolla a especificación na lista de materiais: as especificacións aparecen despois dos materiais integrados como «Spec: nome».
2. A lista de tamaños contén agora só os tamaños desa especificación. Escolla un e debuxe a liña.

Para mover unha liña a unha especificación máis tarde, seleccione a liña e cambie o **Material** en Propiedades. O seu tamaño pasa a ser o tamaño da especificación máis próximo polo diámetro exterior.

No ficheiro IFC, a tubaxe leva o nome da especificación, a norma, o material, a unión e as dimensións (`CadCraft_PipeSpec` e `Pset_PipeSegmentTypeCommon`, na tubaxe e no seu tipo).

Os cálculos de dimensionamento e de perda de presión len o diámetro interior da especificación. Cando a especificación ten rugosidade, a fricción dunha liña calcúlase con ela (Darcy-Weisbach); sen ela, úsase o valor por defecto habitual do cálculo.

## Válvulas, filtro e rexistros

1. Escolla {{ui:Válvula}} e o tipo na barra: de compuerta, de bola, de mariposa, de globo, de retención, de equilibrado ou de control, ou un filtro, para tubaxes; un rexistro de volume ou un rexistro cortafogos, para condutos.
2. Faga clic na liña onde vai. A liña córtase ao seu redor e ambos lados seguen conectados. A válvula toma o tamaño da liña e móvese con ela.

Propiedades da liña enumera cada un con {{ui:Eliminar}}; a liña pecha de novo.

O cálculo da perda de presión conta unha perda de accesorio só para as válvulas de compuerta, de bola, de globo e de retención. Os outros tipos, os rexistros e as familias de fabricantes non engaden perda alí: teña en conta a súa perda na súa propia comprobación. Cóntanse na folla **Accesorios e válvulas** e na medición, e escríbense no IFC como válvulas, un filtro (o filtro) e rexistros con dous portos conectados.

## O modelo dun fabricante como familia

1. Abra {{ui:Compilación}} e escolla {{ui:Familias}}, despois {{ui:Importar un modelo}}. Lense ficheiros IFC, STEP, OBJ, STL, glTF e elementos da Biblioteca. Para OBJ e STL, configure primeiro as unidades e o eixe vertical do ficheiro.
2. No diálogo de portos, escriba o nome, o fabricante e o número de modelo.
3. Escolla se vai **En unha liña** (unha válvula, un filtro ou un rexistro) ou é **Equipamento**, e como se escribe.
4. Dálle os seus portos. Cada un ten un nome, tubaxe ou conduto, o servizo, o tamaño en milímetros (o diámetro exterior dunha tubaxe), o tamaño nominal tal como o nomea a súa especificación, o tipo de extremo, a súa posición e a dirección na que mira. {{ui:Nunha cara}} coloca un porto no centro dunha cara da caixa do modelo. A vista superior pequena mostra os portos.
5. Escolla {{ui:Gardar a familia no modelo}}.

Unha familia que vai nunha liña necesita exactamente dous portos que miren en sentidos opostos sobre unha mesma recta. Escóllaa na lista da ferramenta Válvula e prema nunha liña: colócase coa súa propia lonxitude e as tubaxes conéctanse aos seus portos.

Unha familia nunca se estira. Se os seus portos non teñen o tamaño da liña, avísase ao colocala, e {{ui:Comprobar conexións}} a enumera.

Unha familia de equipamento colócase con {{ui:Equipamento}}, tipo **Familia de fabricante**. As tubaxes e os condutos encaixan nos seus portos.

{{ui:Descargar como elemento da Biblioteca}} garda unha familia cos seus portos como ficheiro que pode enviar á Biblioteca.

## Radiadores e converxectores

{{ui:Equipamento}} tamén ten **Radiador** e **Converxector / panel radiante**: corpos xenéricos cunha conexión de ida e outra de retorno para auga de calefacción. Vexa [Equipamento MEP con portos](topic:mep-equipment).
