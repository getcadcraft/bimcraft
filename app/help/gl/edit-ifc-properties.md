---
title: Cambiar propiedades IFC e gardar unha copia editada
summary: Cambie o nome, a etiqueta, a descrición ou un valor de propiedade dun elemento, desfaga, e descargue un ficheiro IFC novo mentres o orixinal queda como estaba.
keywords: editar, cambiar, propiedades, parámetros, etiqueta, nome, renomear, marca, gardar como, descargar, desfacer, copiar, ifc, escribir
from: f8035d62
---

## Que vai facer

Corrixa datos nun modelo IFC: renomee un elemento, arranxe a súa etiqueta, cambie un valor de propiedade. Despois garde un ficheiro IFC novo cos seus cambios. O ficheiro que abriu nunca se toca.

## Que pode cambiar

| Campo | Editable |
|---|---|
| Nome, Tipo de obxecto, Etiqueta, Descrición | Si |
| Valores de propiedade individuais (texto, números, Sí/Non) | Si |
| Propiedades de tipo (conxuntos marcados «(tipo)») | Si, e o cambio aplícase a todos os elementos dese tipo |
| Tipo, GlobalId, Liña | Non |
| Cantidades (lonxitudes, superficies, volumes, recontos) | Non |
| Listas, enumeracións e outros valores de varias partes | Non |
| Xeometría, posición, engadir ou eliminar elementos | Non |

## Pasos

1. Abra un modelo IFC e faga clic no elemento que quere cambiar.
2. No panel {{ui:Propiedades}}, faga clic no valor que quere cambiar. Convértese nunha caixa de texto. Un valor baleiro aparece como *baleiro*.
3. Escriba o novo valor.
4. Prema {{key:Enter}}, ou faga clic noutro sitio, para conservalo. Prema {{key:Esc}} para cancelar.
5. Mire o valor: agora está en negriña cunha barra azul ao lado, que marca un valor editado.
6. Mire a sección {{ui:Cambios}} á esquerda: o cambio aparece listado como *elemento*: *campo*, valor antigo a valor novo.
7. Repita para outros valores ou outros elementos.
8. Faga clic en {{ui:Gardar como IFC}} (mostra cantos cambios agardan, por exemplo «Gardar como IFC (3)»), ou prema {{key:Mod+S}}.
9. Busque «*nome orixinal* (editado).ifc» na súa cartafol de descargas.

## Que debe ver

A liña de estado indica «Gardado *nome* (editado).ifc con *n* cambios (… bytes). O seu ficheiro orixinal non cambiou.» A lista {{ui:Cambios}} vacíase, lista para a seguinte ronda.

## Tipos de valores

- **Texto**: o que escriba consérvase tal cal. Baleirar Nome, Tipo de obxecto, Etiqueta ou Descrición elimina o valor.
- **Números**: escriba un número simple, como `2.4` ou `1200`, nas unidades propias do ficheiro. Sen símbolos de unidade. Calquera outra cousa mostra «Use un número.».
- **Números enteiros** (recontos, enteiros): «Use un número enteiro.» se escribe un decimal.
- **Sí/Non**: o valor convértese nun menú con Sí e Non.

Cada valor conserva o seu tipo IFC, así que un número segue sendo un número e outros programas o len correctamente.

## Desfacer

1. Faga clic en {{ui:Desfacer}} na sección {{ui:Cambios}}, ou prema {{key:Mod+Z}} mentres non está escribindo nun campo.
2. Repita para desfacer máis. Cada desfacer retira o cambio máis recente.

Non se pode desfacer máis atrás dun gardado: despois de gardar, a lista volve empezar. O ficheiro gardado conserva todo.

## Por que o seu cambio afecta só a un elemento

Os exportadores aforran espazo compartindo datos. Un conxunto de propiedades pode ser compartido por vinte portas, e un valor («Resistencia ao lume: 60 min») pode aparecer en noventa conxuntos. Se BimCraft cambiase simplemente o valor compartido, todos os elementos que o comparten cambiarían tamén.

Por iso BimCraft copia antes de escribir:

- Se o conxunto de propiedades que edita está compartido con outros elementos, o seu elemento recibe unha copia propia do conxunto, e só cambia a copia.
- Se o valor está compartido con outros conxuntos, o seu conxunto recibe unha copia propia do valor.

Os veciños conservan os seus datos antigos. Isto chámase *copy-on-write*. Engade algunhas entradas pequenas ao ficheiro, que todos os programas IFC len con normalidade.

**As propiedades de tipo son a excepción de propósito.** Un conxunto marcado «(tipo)» pertence ao tipo do elemento, e en IFC cada elemento dese tipo o lee desde alí. Cambialo muda o tipo, así que todos os elementos dese tipo mostran o novo valor. A lista {{ui:Cambios}} marca estas edicións con «(tipo)». Vexa [Cambiar unha propiedade de tipo para todos os elementos dun tipo](topic:type-vs-instance).

## Avisos antes de perder traballo

- Abrir outro ficheiro con cambios sen gardar pregunta «Ten *n* cambios sen gardar en *ficheiro*. Descartalos?». Faga clic en Cancelar para seguir traballando, e logo garde.
- Pechar ou recargar a lapela con cambios sen gardar fai que o navegador pregunte se quere saír.

## Erros habituais

- **Escribir unidades.** `2400 mm` non se acepta. Escriba `2400`.
- **Cambiar unha propiedade de tipo cando quería cambiar un só elemento.** Busque a nota «(tipo)» antes de escribir. Se quere que un elemento sexa distinto, cambie unha propiedade da instancia, ou a súa Etiqueta ou Nome.
- **Esperar que cambie o ficheiro orixinal.** Gardar descarga sempre un ficheiro novo. Substitúa vostede o orixinal se é o que quere, e garde unha copia.
- **Prema {{key:Mod+S}} sen cambios.** BimCraft só garda cando hai algo que gardar; se non, pode abrirse o «Gardar a páxina» propio do navegador. Péchello.
- **Gardar dúas veces e esperar dous ficheiros pequenos.** Cada gardado contén todas as edicións desde que abriu o modelo.
- **Esperar que as edicións volvan a un ficheiro de proxecto.** BimCraft só escribe IFC. Leve o IFC editado ao seu programa de autoría como importa calquera IFC.
