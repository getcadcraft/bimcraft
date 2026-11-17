---
title: Colorear elementos por unha propiedade
summary: Pinte cada elemento segundo o valor dunha propiedade, como a súa clase, tipo, piso, material, clasificación de resistencia ao lume ou custo, lea a lenda, prema un valor para amosar só eses elementos e garde as cores como esquema para usar noutros modelos.
keywords: cor, colorear, colorear por, lenda, vista intelixente, aspecto, propiedade, tipo, material, resistencia ao lume, filtro, illar, tema, valores, esquema, esquema de cores, gardar cores, reutilizar, equipo, json, mostra de cor
from: f081d343
---

## Que farás

Vexa de un vistazo como se reparte unha propiedade polo modelo: que muros son exteriores, que materiais se usan onde, que elementos non teñen resistencia ao lume. Cada elemento toma a cor do seu valor, e a lenda indica o que significa cada cor e cantos elementos a teñen.

## Pasos

1. Abra un modelo IFC.
2. Prema a lapela {{ui:Cor}} á dereita.
3. Escolla unha propiedade na lista. As primeiras pertencen a todos os elementos ({{ui:Clase}}, {{ui:Tipo}}, {{ui:Piso}}, {{ui:Material}}, {{ui:Nome}}…); as restantes veñen dos conxuntos de propiedades e dos conxuntos de cantidades do modelo, baixo o nome do conxunto. O número despois de cada unha é cantos elementos a teñen.
4. Lea a lenda: unha cor, o valor e cantos elementos o teñen.
5. Prema un valor para amosar só eses elementos. Manteña premida {{key:Mod}} e prema para engadir máis valores. Prema {{key:Shift+H}} para amosar de novo todo.
6. Prema {{ui:Desactivado}} para volver ás cores propias do modelo.

## Que debería ver

- Ata sete valores reciben cada un a súa cor, o máis frecuente primeiro. Os demais valores comparten un gris e aparecen listados como **outros valores**.
- Un número con moitos valores distintos divídese en seis intervalos iguais, do claro (baixo) ao escuro (alto).
- Os elementos sen a propiedade son un gris pálido, listados como **Sen valor**, para que destaquen os coloreados.
- As cores cambian co Papel e o Modelo, e mantéñense mentres edita o modelo.
- A propiedade dun tipo conta para todos os elementos dese tipo; cando un elemento ten o seu propio valor para a mesma propiedade, prevalece o seu valor.

## Cambiar as cores e gardalas como esquema

- Prema a mostra de cor dun valor na lenda para escoller outra cor. O modelo repíntase de inmediato.
- {{ui:Gardar esquema}} descarga as cores como un pequeno ficheiro `.json` co nome da propiedade, por exemplo `Class colors.json`.
- Noutro modelo, ou no ordenador dun compañeiro, prema {{ui:Abrir esquema…}} e escolla ese ficheiro. Cada valor do esquema recibe a súa cor, así que a mesma clasificación de resistencia ao lume ou o mesmo sistema teñen a mesma cor en todos os modelos.
- Un valor que o esquema non ten pinta en gris e listase como "non está no esquema"; os valores do esquema que este modelo non ten seguen listados con 0, para que vexa o esquema completo.
- Un esquema conserva as súas cores en ambos temas. Escoller unha propiedade na lista comeza de novo polas cores automáticas.

## Erros comúns

- **"Este modelo non ten valores de …".** O esquema gardouse para unha propiedade que este modelo non ten (outro nome de conxunto de propiedades, por exemplo). Abra un esquema feito para este tipo de modelo, ou escolla unha propiedade na lista.

- **Falta unha propiedade na lista.** Ningún elemento cunha forma no modelo a ten. As propiedades dos pisos e dos espazos en si non aparecen listadas.

- **Todo ten a mesma cor.** Todos os elementos teñen o mesmo valor, ou ningún: mire os números da lenda.

## Seguinte

- [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate)
- [Atopar o camiño coa árbore do modelo](topic:model-tree)
