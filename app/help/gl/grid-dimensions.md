---
title: Acotar unha cuadrícula
summary: Mostre a distancia entre liñas contiguas da cuadrícula e o tamaño total da cuadrícula en cada planta de piso, gardadas no IFC e que seguen a cuadrícula cando cambian as liñas.
keywords: cuadrícula, cuadrícula de cotas, cota, espazamento, vans, tamaño total, círculos, cuadrícula de piares, planta, folla
from: aaea5d08
---

## Que vai facer

Coloque o espazamento entre as liñas da cuadrícula e o tamaño total da cuadrícula nas plantas, máis aló dos círculos, para que as follas feitas a partir delas leven as cotas. Primeiro necesita unha cuadrícula: vexa [Cuadrícula e piares](topic:grids-and-columns).

## Pasos

1. Mostre a planta dun piso e prema en {{ui:Grid}} para activar a ferramenta de cuadrícula. Mostrarase a fila de opcións da cuadrícula.
2. Marque {{ui:Dimensions}}. Na planta debuxaranse a distancia entre as liñas numeradas contiguas e entre as liñas con letra contiguas, e o tamaño total en cada sentido.
3. Escolla outro piso: as mesmas cotas aparecen na súa planta.
4. Mova unha liña, cambie o nome dunha ou engada unha. As cotas seguen a cuadrícula.
5. Desmarque {{ui:Dimensions}} para quitalas de novo.

## Notas

- Cada cambio é un paso de desfacer: {{key:Mod+Z}} desfai o cambio.
- O axuste gárdase no IFC coa cuadrícula, e as plantas colocadas en follas levan as cotas.
- Se o modelo non ten unha cuadrícula que poida cambiar (unha cuadrícula que chegou nun ficheiro doutro programa non se pode cambiar aquí), a liña de estado di: "Non hai cuadrícula para cambiar."
