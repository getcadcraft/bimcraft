---
title: Cuadros, cotas e un PDF da planta
summary: Cuadros de portas, xanelas, muros e cuartos que cambian segundo debuxa, cotas na planta, e a planta dun nivel gardada como PDF a unha escala estándar.
keywords: cadro, cadro de portas, cadro de xanelas, cadro de muros, cadro de cuartos, cantidades, medición, superficie, csv, folla de cálculo, cotas, cota, imprimir, pdf, trazar, escala, 1/4", 1:50, folla
from: d97cd16e
---

## O que vai facer

Ver o que suma o edificio que debuxou, mentres o debuxa: cantas portas e xanelas de cada tamaño, cantos muros de cada tipo, o tamaño de cada cuarto. Poña cotas na planta e gárdea como PDF para imprimir ou enviar.

## Cuadros

Con {{ui:Debuxar}} activo, **Cuadros** no panel esquerdo mostra unha táboa de cada vez:

- **Portas** e **Xanelas**: cada unha coa súa marca (D1, D2 … e W1 …, como as coloca), o seu tipo, ancho, altura (e peitoril), nivel e o muro no que está.
- **Muros por tipo**: para cada tipo de muro, cantos muros hai, o seu espesor, a súa lonxitude total e a súa superficie lateral como **Área bruta**, **Deducións** e **Área neta**, cun total.
- **Cuartos**: número, nome, nivel, área e perímetro, co total da área.
- **Pisos**: cada piso co seu nivel, tipo e espesor, e a súa área bruta, deducións e área neta.
- **Acabados**: cada capa de acabado dos tipos de muro (por material e cara do muro) e os teitos, co número de caras e o bruto, deducións e neto.
- **Tipos de muro: datos de medición**: o que se introduciu unha vez en cada tipo de muro (unidade, morteiro, taxa), co número de muros, a súa lonxitude e área neta, e a taxa multiplicada pola cantidade medida. Vexa [Conxuntos de muros](topic:wall-assemblies).
- **Acabados por cuarto**, **Acabados por muro**, **Acabados por zona** e **Cantidades de acabados**: o que cobre cada cuarto, con áreas, números de azulexos incluídos os cortes e volumes de soporte. Vexa [Acabados de cuartos e cuadros de acabados](topic:room-finishes).
- Os seus propios **axustes**: un cadro que agrupou, totalizou e gardou con nome. Vexa [Dispor, gardar e exportar un cadro](topic:schedule-layouts).

As táboas cambian con cada edición. Prema unha fila, ou unha única cifra, para escoller os elementos de onde proceden. {{ui:Descargar CSV}} garda a táboa, para abrila nunha folla de cálculo; {{ui:Descargar Excel}} e {{ui:Copiar para Google Sheets}} están debaixo. {{ui:Acabados de cuartos}} e a **Especificación** ([Escribir a especificación desde o modelo](topic:specification)) ábrense desde o mesmo lugar.

## Área e volume de cada capa

Escolla **Capas: área e volume** na lista de Cuadros. Ten unha fila para cada capa de cada tipo de muro, piso, cuberta e teito en uso: o elemento, o tipo e o seu LOD, a capa (contada desde a cara exterior dun muro, ou desde arriba dun piso, cuberta ou teito), o seu material e función, o seu espesor, cantos elementos hai, a **área neta** e o **volume**.

- A área é a área neta dos elementos dese tipo, medida exactamente como en Muros por tipo, Pisos e Acabados, polo método de medición do proxecto. Unha cuberta mídese sobre a pendente; ningún método de medición ten unha regra para cubertas.
- O volume é esa área multiplicada polo espesor propio da capa.
- Un piso, cuberta ou teito sen tipo é unha única fila: unha capa do seu propio espesor.
- Unha cámara de aire enumérase coa súa área e déixase fóra do volume total. Unha membrana ten área e non ten volume.

Prema unha fila para escoller os seus elementos. {{ui:Descargar CSV}} garda a táboa.

## Como se miden as áreas

Cada área son tres números que suman: o bruto menos as deducións é o neto. A regra escríbese enriba de cada unha destas táboas, e é unha única regra: os cuadros, as cantidades gardadas no ficheiro IFC e a medición enviada a TakeoffCraft usan todos a mesma.

- **Un muro**: o bruto é unha cara do muro, a súa lonxitude sobre o eixe multiplicada pola súa altura (a cara real para un muro cunha parte superior ou inferior con forma). Descóntase cada porta, xanela e outro furado, ancho por alto, cada un unha vez.
- **Un piso ou un teito**: o bruto é a área dentro do seu contorno. Descóntase unha vez cada furado e cada recorte que hai dentro.
- **Un acabado de muro**: cada capa de acabado do tipo de muro cobre unha cara do muro, medida como o muro, coas mesmas aberturas descontadas. Un acabado é unha capa do muro: enumérase en Acabados e non se engade á área do muro, polo que un muro cunha porta nunca se conta dúas veces.

Esa é a **regra por defecto de CadCraft**: descóntase cada furado, sexa cal for o seu tamaño; as lonxitudes dos muros van sobre o eixe; os retranqueos non se miden. É o que usa todo proxecto ata que escolla outro método.

## Escoller un método de medición

Enriba do cadro, **Método de medición** enumera os métodos que trae BimCraft, e **Cargar un ficheiro de método** toma o do seu propio despacho. A escolla gárdase no ficheiro IFC, como un paso de desfacer, e tres cousas seguen esa escolla á vez: os cuadros, as cantidades netas gardadas no ficheiro e a medición enviada a TakeoffCraft. A regra enriba de cada táboa comeza entón co método, a súa fonte, a data en que se leu a fonte e as palabras **Sen revisar por un aparelador**.

Un método é un pequeno ficheiro de datos, non código de programa. Para cada cantidade indica:

- **o menor furado descontado**: por exemplo, un furado de 0,5 m² ou menos queda na área do muro;
- **como se miden as xuntas de muros**: sobre o eixe; ou cun muro que remata contra outro, medido ata a cara dese muro; ou con cada extremo de muro que se une a outro muro medido ata a cara máis próxima;
- **se se miden os retranqueos** dun acabado (as voltas do acabado nos furados), como área ou, cando son pouco fondos, como lonxitude. A profundidade dun retranqueo tómase como a metade do espesor do muro;
- **o que di sobre a alvenaría**: como se mide, e calquera marxe de desperdicio ou de morteiro que indique.

Os métodos que trae BimCraft:

| Método | Muros: menor furado descontado | Acabados de muros | Teitos | Alvenaría |
|---|---|---|---|---|
| CadCraft por defecto | cada furado | cada furado | cada recorte | sen marxes |
| RICS NRM 2 (Reino Unido), 2.ª edición 2021 | 0,5 m² ou menos queda dentro | 1 m² ou menos queda dentro | 1 m² ou menos queda dentro | por área; sen porcentaxes indicadas |
| AAQS Standard Method for Africa 2015 | 0,5 m² ou menos queda dentro | 0,5 m² ou menos queda dentro | 0,5 m² ou menos queda dentro | por área; medida neta, 0 % de desperdicio |
| IS 1200 (India), 1976, alvenaría | 0,1 m² ou menos queda dentro | por defecto (vexa máis abaixo) | por defecto | por volume |
| BIA Technical Note 10 (Estados Unidos), 2009 | cada furado | por defecto | por defecto | 5 % de desperdicio nas unidades, 15 % no morteiro |

Lea estes límites antes de confiar nun método:

- **Ningún aparelador revisou ningún deles.** Cada un foi feito lendo a fonte indicada e rexistrando os seus números coa cláusula da que proceden. Se vostede é aparelador e pode revisar un, os creadores da aplicación gustaríalles saber.
- Cando unha regra non se puido ler da fonte, o método di **non confirmada** para ela e úsase a regra por defecto de CadCraft. Ningún método que trae BimCraft ten unha regra confirmada para as xuntas de muros, os retranqueos ou os pisos, así que esas miden do modo por defecto en todos.
- A IS 1200 descontan os furados en revestimento en tres franxas. Un ficheiro de método aínda non pode conter franxas, polo que os acabados de muro usan o valor por defecto baixo ese método, e a regra di iso.
- O South African Standard System of Measuring Building Work **non** está entre eles: o seu texto non se pudo ler. O método AAQS para África di que se baseou na edición de 1991 dese sistema, pero é un documento distinto.
- BIA Technical Note 10 é unha nota industrial de estimación, non un método estándar de medición.
- Un furado que é exactamente o tamaño mínimo segue as propias palabras do método («non superior a», «menor que»). Os tamaños dentro de 2 partes en 10 000 del contan como exactamente ese.
- Baixo un método, a área lateral neta dun muro e a área neta dun piso ou teito do ficheiro seguen o método, e o axuste de cantidades indica o nome. As áreas brutas e os volumes do ficheiro quedan como se debuxaron.

**Notas sobre este método**, baixo o selector, di o que cada fonte deixa aberto. **Abrir a fonte** vai ao documento.

### O método propio do seu despacho

Un ficheiro de método é JSON no formato `cadcraft-measurement-method`. Cada valor nomea a cláusula da que procede; un valor sen cláusula recházase. O ficheiro compróbase ao cargalo, un campo incorrecto indícase polo nome e non se usa nada dun ficheiro que non pase a comprobación. Unha vez escollido, o ficheiro gárdase dentro do proxecto, para que o proxecto se abra igual noutro ordenador. O seu identificador é un nome sinxelo de vostede (pode non ser o identificador dun método que trae a aplicación).

## Ladrillos, bloques e morteiro

**Tipos de muro: datos de medición** conta as unidades e o morteiro de cada tipo de muro cuxa unidade ten lonxitude e altura (vexa [Dar ao tipo os seus datos de medición](topic:wall-assemblies#give-a-type-its-takeoff-data)). Estas son as fórmulas, tal como se calculan:

- **Unidades por área dunha folla** = 1 / ((lonxitude da unidade + xunta) × (altura da unidade + xunta)). Un ladrillo de 215 × 65 mm cunha xunta de 10 mm: 1 / (225 × 75 mm) = 59,26 por m².
- **Unidades de ancho a través dunha folla** = (espesor da folla + xunta) / (ancho da unidade + xunta), redondeado a un número enteiro, polo menos 1. Unha folla de 102,5 mm de ladrillos de 102,5 mm é 1; un muro de 215 mm cos mesmos ladrillos é 2.
- **Unidades** = unidades por área × unidades de ancho a través × a área neta da cara do muro, sumadas sobre as follas de alvenaría do tipo.
- **Unidades a pedir** = unidades × (1 + desperdicio % / 100), redondeado cara arriba a unha unidade enteira. O desperdicio é o que se introduciu no tipo; sen ningún introducido, o do método, se o indica; en caso contrario, 0 %.
- **Morteiro** = área neta × espesor da folla, menos o volume das unidades (unidades × lonxitude × altura × ancho), máis a porcentaxe extra introducida no tipo para as ranuras ou perforacións, máis a marxe do método se a indica. Necesita o ancho da unidade.

O que se supón: cada folla de alvenaría dun tipo está feita da única unidade dese tipo; unha folla máis grosa que un ancho de unidade conta como ese número de anchos de unidade, cada un como unha folla colocada a lo longo, polo que as unidades cortadas, os peches e as formas especiais non se contan á parte; cando non hai ningunha capa marcada como feita da unidade, tómanse as capas do núcleo como follas, e a nota enriba da táboa así o di. **Cantidade** é a taxa multiplicada pola base da taxa, que agora tamén pode ser unha unidade a pedir, 1000 unidades a pedir ou un m³ de morteiro.

As marcas son a etiqueta IFC dos elementos: cambie unha en **Propiedades** (Etiqueta) e o cadro sígueo. Para todo modelo IFC, desenhado ou non, [Sumar cantidades, enumerar elementos e cadro de espazos](topic:quantity-totals) suma calquera propiedade.

## Cotas

A planta mostra a lonxitude de cada muro debuxado ao longo da súa cara exterior (un muro interior: ao longo dunha cara) e, para un muro con portas ou xanelas, unha cadea desde as esquinas até cada furado. {{ui:Cotas}} na barra do modelo oculta e volve mostrar estas.

## Gardar a planta como PDF

1. Mostre o nivel que quere e configure as unidades no panel **Niveis**.
2. Prema {{ui:Imprimir}} na barra do modelo.
3. BimCraft garda «<ficheiro> — <nivel>.pdf»: a planta en branco e negro á maior escala estándar que cabe na páxina (1/4" = 1'-0", 1/8" = 1'-0" … en Letter en pés e polgadas; 1:50, 1:100 … en A4 en milímetros), cos muros recheos, portas, xanelas, nomes e áreas dos cuartos, cotas, e unha franxa de títulos co nivel, o ficheiro, a altura do corte, a data e a escala.

O PDF debúxase como liñas e texto, polo que se mantén nítido a calquera zoom e o seu texto pódese buscar.

## Cousas que convén saber

- Os cuadros enumeran o que fixeron as ferramentas de debuxo. As portas e as xanelas doutro programa aparecen en Cantidades totais.
- Para cotizar a obra, entregue as cantidades a TakeoffCraft: vexa [Cantidades para TakeoffCraft](topic:takeoff). A descarga CSV queda para unha folla de cálculo.
