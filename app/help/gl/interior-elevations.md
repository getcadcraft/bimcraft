---
title: Alzados interiores
summary: Crea unha folla que mostra os catro muros dun cuarto desde dentro, con cotas e etiquetas, e gárdaa en PDF.
keywords: alzado interior, cuarto, muro, armario, cociña, alzado, folla, PDF, cota, etiqueta, espazo, A-501
from: 1e3a70a8
---

## Que vai facer

Escolla un cuarto e obteña unha folla que mostra os seus catro muros tal como se verían estando dentro. Está feita para cociñas, baños e calquera cuarto onde precise ver os armarios, as portas e as xanelas de cada muro.

## Crear a folla

1. Escolla o cuarto. Na planta, con {{ui:Debuxar}} activado, prema dentro do cuarto. Na vista 3D ou na árbore do modelo, escolla o espazo (un IfcSpace).
2. En **Propiedades**, prema {{ui:Alzados interiores…}}.
3. Abrirase o diálogo coa folla.
4. Prema {{ui:Descargar PDF}} para gardala. O ficheiro chámase « <file> — Alzados interiores — <room>.pdf » e é un PDF vectorial.
5. Prema {{ui:Pechar}} cando remate.

## Que mostra a folla

A folla ten catro vistas, dúas por dúas, a unha mesma escala: a maior escala normalizada que cabe. Son **Muro norte**, **Muro leste**, **Muro sur** e **Muro oeste**. Un cadro de títulos leva o número de folla A-501, o título « Alzados interiores — » co número e o nome do cuarto, o proxecto e a data.

Cada vista corta o cuarto pola metade e mira o muro dese lado. Os muros laterais, e o que queda cortado neles, como unha xanela, móstranse en trama de corte gris ao redor da vista. A vista para xusto despois da cara do muro, así que non se ve nada detrás del.

Cada vista leva:

- o ancho do cuarto debaixo dela, de cara interior a cara interior;
- a altura do cuarto ao lado, desde o chan ata o nivel superior;
- unha etiqueta cadrada en cada porta e unha etiqueta hexagonal en cada xanela dese muro, coa súa marca (D1, W1 e así sucesivamente);
- unha etiqueta circular co número de elemento en cada elemento da biblioteca colocado diante dese muro: armarios, accesorios e equipamento.

:::note
As vistas fanse a partir do modelo cada vez que abre o diálogo, así que sempre coinciden con el. Mova un armario e logo abra de novo o diálogo.
:::

## Nas súas propias follas

Cada muro de cada cuarto tamén é unha vista que pode pór nunha folla que cree: no navegador de proxectos prema {{ui:Nova folla}} e, baixo **Alzados interiores**, engada « 101 Cociña — Muro norte » e os demais. Vén coas mesmas cotas e etiquetas.

## Non está feito aínda

Alzados interiores no conxunto de debuxos xerado (vénen das **Propiedades** do cuarto ou das súas propias follas), cuartos que non son en boa parte rectangulares (a vista ve cadrada en cada lado da caixa do cuarto), debuxo, notas ou cotas propias sobre eles, e escoller que muros mostrar. Vexa [O que aínda non está feito](topic:not-built-yet).
