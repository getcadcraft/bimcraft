---
title: Cuadrículas e piares
summary: Trace liñas de cuadrícula con círculos numerados e con letras, por espazamento ou unha a unha, debuxe muros e piares ao longo delas e vexaos en plantas, alzados e seccións.
keywords: cuadrícula, cuadrículas, liña de cuadrícula, cuadrícula de piares, eixo, eixos, círculo, liña de cuadrícula, cuadrícula estrutural, 1 2 3, A B C, piar, piares, pilar, poste, axuste, IfcGrid, IfcColumn
from: bf99a8f7
---

## Que vai facer

Dispoña un edificio sobre unha cuadrícula e despois debuxe os muros e coloque os piares ao longo das súas liñas.

## Colocar unha cuadrícula completa

1. Active {{ui:Draw}} e logo escolla {{ui:Build}} › {{ui:Grid}}.
2. Prema en {{ui:Place a grid…}}. Indique cantas **liñas numeradas** (1, 2, 3…) e **liñas con letra** (A, B, C…) quere e a que distancia están. Escriba un espazamento, ou varios separados por comas para vans desiguais (por exemplo `20', 24', 20'`). {{ui:Past the last lines}} é canto se prolonga cada liña máis aló das liñas exteriores do outro tipo, e {{ui:Turned (degrees)}} xira toda a cuadrícula.
3. Prema en {{ui:Place it}} e logo na posición do primeiro cruce (1 / A). A vista previa segue o punteiro.

As liñas numeradas suben pola planta e distribúense por ela; as liñas con letra atravesan a planta e distribúense cara arriba. As letras omiten I e O, como nos debuxos, para que nunca se lean como 1 e 0.

## Debuxar liñas de cuadrícula unha a unha

Con {{ui:Grid}} activado, prema onde comeza unha liña e onde remata. Recibe a seguinte etiqueta das liñas ao longo das que corre (despois de 3 vén 4; despois de B vén C). Prema {{key:Esc}} para deixar de debuxar.

## Cambiar unha liña de cuadrícula

Con {{ui:Grid}} activado, prema nunha liña para seleccionala. Escriba unha nova {{ui:Label}} e prema {{key:Enter}}, ou prema {{ui:Delete this line}} (ou {{key:Delete}}). {{ui:Bubbles}} pon os círculos nos dous extremos, no inicio ou no final de cada liña, ou en ningún. Cada cambio é un paso: {{key:Mod+Z}} desfai o cambio.

## Debuxar seguindo a cuadrícula

As ferramentas {{ui:Wall}}, {{ui:Column}} e as demais ferramentas de debuxo axústanse ás liñas de cuadrícula e aos seus cruces (a marca de axuste é un pequeno círculo cunha cruz).

**Piares:** escolla {{ui:Build}} › {{ui:Column}}, seleccione a forma (rectangular ou redonda), o tamaño e se o piar vai **ata o piso superior** ou a unha altura fixa, e logo prema. {{ui:At every grid crossing}} coloca un piar en cada cruce que aínda non o teña. Prema nun piar para cambiar a súa forma, tamaño ou altura en {{ui:Properties}}; {{key:Delete}} elimínao. Os piares que chegan ao piso superior seguen a súa altura cando esta cambia.

## Que debe ver

- A cuadrícula na planta de cada piso, cun círculo e a súa etiqueta nos extremos de cada liña.
- Liñas de cuadrícula no conxunto de debuxos: nas plantas, e nos alzados e seccións onde unha liña se ve de canto, con o seu círculo por riba do edificio. Vexa [Alzados, seccións e follas](topic:sheets).
- No ficheiro IFC: unha cuadrícula para o edificio (IfcGrid, coas súas liñas numeradas nunha lista e as súas liñas con letra na outra), e os piares como IfcColumn coas súas dimensións, altura e cantidades. Outros programas BIM mostran as dúas cousas.

:::note
Unha cuadrícula que chegou nun ficheiro doutro programa móstrase, e as ferramentas axústanse a ela, pero as súas liñas non se poden cambiar aquí.
:::
