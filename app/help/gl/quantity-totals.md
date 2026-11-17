---
title: Sumar cantidades, listar elementos e programar espazos
summary: Conte elementos e sume as súas lonxitudes, superficies, volumes ou calquera propiedade numérica, agrupados por calquera propiedade; liste unha fila por elemento; ou faga un cadro dos espazos cos seus áreas e volumes. Cada un descárgase como CSV.
keywords: cantidade, cantidades, medición, totais, suma, cadro, orzamento, lista de cantidades, boq, qto, csv, agrupar por, contar, lonxitude, superficie, volume, espazos, salas, cadro de salas, cadro de superficies, lista de elementos
from: e2e7210c
---

## Que farás

Obteña totais dun modelo: lonxitudes de muros por piso, contas de portas por tipo, volume de lousas por material, o custo de cada zona.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Quantity totals}} no panel esquerdo.
3. En {{ui:Count}}, escolla {{ui:Every element}} ou só os elementos seleccionados.
4. Baixo {{ui:Group by}}, escolla unha propiedade, como {{ui:Class}}. Prema {{ui:Add a group}} para dividir máis, ata tres, por exemplo por {{ui:Storey}}.
5. Baixo {{ui:Add up}}, marque os números que sumar. As series de cantidades do modelo están marcadas ao principio.
6. Prema {{ui:Download CSV}} para abrir a táboa nunha folla de cálculo.

## Que debe ver

- Unha fila por grupo, con cantos elementos ten e cada total, e unha fila de total.
- Os elementos sen valor cóntanse pero non suman nada. Cando pasa, o CSV engade unha columna "deixado fóra" xunto ao total para que vexa cantos son.
- Os números están nas unidades propias do ficheiro, tal como os garda, a miúdo milímetros para as lonxitudes.

## Unha fila por elemento, ou os espazos

Cambie {{ui:Show}}:

- **Unha fila por elemento**: cada elemento nunha fila propia, coas propiedades baixo {{ui:Columns}} e os números baixo {{ui:Add up}}. O CSV comeza co GlobalId de cada elemento. Prema o primeiro valor dunha fila para seleccionar ese elemento.
- **Espazos**: cada sala co seu número, nome, piso, superficie e volume, e os seus totais. As superficies e os volumes proceden das cantidades do espazo tal como as declara o ficheiro. Cando o ficheiro non as ten, mídense a partir da forma do espazo en m² e m³ e mostranse en cursiva; o CSV indica cal é cal.

## Seguinte

- [Buscar elementos por clase, nome ou propiedade](topic:find)
- [Colorear elementos por unha propiedade](topic:color-by-property)

## Infraestrutura (IFC 4.3)

Escolla **Infraestrutura (IFC 4.3)** na lista de vistas para ver estradas, ferrocarrís, pontes e obras mariñas totalizados por clase e tipo, coa lonxitude, superficie e volume que o propio ficheiro declara. Unha cantidade que o ficheiro non declara déixase en branco, nunca se calcula. **Enviar cantidades de infraestrutura a TakeoffCraft** garda un ficheiro `.quantities.json` que TakeoffCraft abre como cantidades tipadas.
