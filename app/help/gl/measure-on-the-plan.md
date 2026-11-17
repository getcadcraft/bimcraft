---
title: Medir na planta
summary: Prema en dous puntos da planta dun nivel para ler a distancia e as diferenzas en X e Y, encadee máis premas para un total acumulado, e non garda nada no modelo.
keywords: medir, planta, distancia, cota, cinta, total acumulado, encadear, dx, dy, recta, axuste, extremos dos muros, liñas de eixe, pilares, comprobar unha lonxitude
from: 7235633f
---

## O que vai facer

Comprobar unha lonxitude na planta dun nivel, como a largura dun cuarto ou a distancia entre dúas liñas de eixe, sen engadir nada ao modelo. Para medir na vista 3D, ver [Medir distancias, áreas das caras e localizacións en 3D](topic:measure).

## Pasos

1. Mostre a planta do nivel que quere: {{ui:Plan}} para só a planta, ou {{ui:Split}}.
2. No grupo {{ui:Draw}}, prema en {{ui:Measure}}. Con só a planta visible pode premer {{key:M}} no seu lugar.
3. Prema no primeiro punto. Os puntos axústanse aos muros, liñas de eixe e pilares.
4. Prema no segundo punto. Unha liña de cota mostra a distancia, e a liña de estado dá a distancia coas diferenzas en X e Y.
5. Para seguir medindo, prema nun terceiro punto. Cada tramo mídese e o total engádese.
6. Manteña {{key:Shift}} mentres preme para manter o tramo recto respecto ao anterior.
7. Prema {{key:Esc}} para limpar a medición, ou escolla outra ferramenta.

## Notas

- Non se escribe nada no modelo, e a cota desaparece ao limpala. Para cotas que se manteñan, ver [Conxuntos de muros e cotas de referencia](topic:wall-assemblies).
- Coa vista 3D na pantalla, {{key:M}} segue sendo Medir 3D. {{key:Shift+M}} é Mover.
- A distancia usa a unidade de visualización que escolleu en {{ui:Settings}}.
