---
title: Comprobar interferencias
summary: Atope onde os elementos dun conxunto chocan con elementos doutro (condutos a través de vigas, muros que entran nas lousas), nun modelo ou en varios, cunha tolerancia, e converta unha interferencia nunha incidencia.
keywords: interferencia, detección de interferencias, comprobación de interferencias, choque, colisión, coordinación, solapamento, tolerancia, mep, estrutura
from: 9cb12346
---

## Que vai facer

Atope os lugares onde dous conxuntos de elementos se atravesan, por exemplo todo o modelo de instalacións contra a estrutura, e despois revise cada un e conserve como incidencias os que importan.

## Pasos

1. Abra un modelo IFC e engada os demais con {{ui:Engadir un modelo…}} se compara entre modelos. Vexa [Ver varios modelos IFC xuntos](topic:several-models).
2. Abra {{ui:Comprobación de interferencias}} no panel esquerdo.
3. En {{ui:Comprobar}} e {{ui:Contra}}, escolla dous conxuntos: os elementos que seleccionou, unha clase (en todos os modelos abertos), un conxunto de busca gardado (vexa [Atopar elementos por clase, nome ou propiedade](topic:find)) ou todo.
4. Indique canta superposición ignorar, en metros. 0,01 ignora os elementos que apenas se tocan.
5. Prema {{ui:Executar}}. A comprobación execútase en segundo plano; {{ui:Cancelar}} detén a.
6. Prema un resultado para velo: os dous elementos seleccionanse e amósanse, o resto transparente, e a vista achégase a eles.
7. Prema {{ui:Crear unha incidencia}} baixo un resultado para redactalo na pestana {{ui:Incidencias}}. Vexa [Incidencias e ficheiros BCF](topic:issues-bcf).

## Que debe ver

- As interferencias listadas cos nomes de ambos elementos (e os seus ficheiros, cando hai varios modelos abertos) e canto se superpoñen, as máis profundas primeiro.
- As superficies que só se tocan, como un muro apoiado nunha laxe ou unha porta na súa abertura, non son interferencias.

## Boas a saber

- Esta é unha comprobación básica de interferencias duras: elementos cuxas superficies se cruzan. Un elemento oculto por completo dentro doutro (un tubo embebido nun muro) aínda non se atopa.
- A profundidade é o solapamento mínimo entre os límites dos dous elementos: é unha guía, non unha medida exacta.

## Seguinte

- [Medir distancias, superficies de caras e situacións en 3D](topic:measure)
- [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate)
