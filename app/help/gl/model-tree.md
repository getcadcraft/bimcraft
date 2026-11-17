---
title: Oriéntese coa árbore do modelo
summary: Explore un modelo IFC por proxecto, terreo, edificio, piso e espazo, cos seus elementos agrupados por tipo; marque as caixas para amosar e ocultar, prema unha fila para escoller e faga dobre clic para facer zoom.
keywords: árbore do modelo, árbore, estrutura, estrutura espacial, navegador, esquema, piso, nivel, chan, espazo, cuarto, grupo, clase, ocultar, amosar, escoller, seleccionar, zoom
from: 69de4ab7
---

## Que vai facer

Ver como está montado un modelo e chegar a calquera elemento sen buscalo en 3D: o edificio, os seus pisos, os espazos de cada piso e os elementos neles, agrupados por tipo (muros, portas, laxes…).

## Pasos

1. Abra un modelo IFC. A {{ui:Árbore do modelo}} á esquerda ábrese ata os pisos.
2. Prema a frecha ao lado dunha fila para abrila ou pechala. Un piso ten primeiro os seus espazos, e despois os seus elementos por tipo, cun número de cada un. Un elemento formado por partes, como unha escaleira, contén as súas partes.
3. Desmarque a caixa dunha fila para ocultar todo o que contén; márqueaa para amosalo de novo. Unha caixa cun guion significa que só se amosa unha parte do que hai dentro.
4. Prema o nome dunha fila para escoller o que representa: un elemento, ou todos os elementos dun grupo, piso ou espazo. {{key:Mod}}+clic engade elementos á escolla ou os quita.
5. Prema o botón {{ui:i}} ao lado dun piso, espazo ou edificio para ver as súas propiedades.
6. Faga dobre clic nunha fila para facer zoom ata ela.

## Que debe ver

- Cando escolle un elemento na vista 3D, a árbore ábrese ata el e márcao.
- Os elementos ocultos aparecen riscados. As caixas da árbore e {{ui:Mostrar}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) traballan xuntas: véxase [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate).
- Os elementos que o modelo non sitúa en ningún piso están nun grupo ao final, **Non está na estrutura espacial**.
- Un grupo longo amosa 200 filas de cada vez; prema **Mostrar máis** debaixo del para ver o resto.

## Teclas

Co nome dunha fila enfocado: {{key:Up}} e {{key:Down}} moven, {{key:Right}} abre, {{key:Left}} pecha ou sobe, {{key:Space}} marca a caixa, {{key:Enter}} escolle.

## Erros habituais

- **A caixa dun piso está marcada pero non se ve nada.** A lista {{ui:Pisos}} debaixo da árbore apaga pisos enteiros por conta propia: márqueos tamén alí.
- **Unha fila non escolle nada.** Algunhas filas, como un espazo baleiro, non teñen elementos que se poidan debuxar; a liña de estado di iso.

## Seguinte

- [Eliminar, cortar, copiar e pegar elementos do edificio](topic:edit-elements)
- [Amosar e ocultar pisos, espazos e arestas](topic:storeys-and-spaces)
