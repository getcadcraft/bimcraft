---
title: Copiar, pegar e duplicar elementos da biblioteca
summary: Copie un elemento da biblioteca xa colocado e péguello onde faga clic, no mesmo sitio xunto ao orixinal ou noutro modelo; copie as propiedades de calquera outro elemento como texto; desfacer e refacer.
keywords: copiar, pegar, duplicar, portapapeis, pegar no mesmo sitio, cortar, eliminar, seleccionar todo, desfacer, refacer, menú editar, máis, elemento da biblioteca, colocación, repetir, matriz
from: 6ac15931
---

## Que vai facer

Coloque máis copias dun elemento que xa colocou: unha segunda mesa de traballo, unha fila de lavabos. Este tema trata dos **elementos da biblioteca xa colocados**, os elementos que BimCraft escribiu no modelo: un deles pódese pegar en calquera modelo, incluso noutra lapela. Os muros, as portas e os demais elementos cópianse, córtanse, pégase e elimínanse da mesma forma dentro do seu propio modelo: vexa [Eliminar, cortar, copiar e pegar elementos do edificio](topic:edit-elements).

Os comandos están na barra de ferramentas sobre o modelo: {{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}}, {{ui:Pegar}} e {{ui:Máis}}, un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar no mesmo sitio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} e {{ui:Non seleccionar nada}}. Un comando que non pode actuar neste momento aparece atenuado; sitúe o punteiro sobre el para ler o motivo, ou faga clic e a liña de estado indicará por que.

## Pasos

1. Abra un modelo IFC cun elemento da biblioteca, ou coloque antes un. Vexa [Colocar equipos e mobiliario desde a biblioteca](topic:place-from-library).
2. Faga clic no elemento na vista 3D. As súas propiedades mostran unha caixa **Elemento da biblioteca**.
3. Faga clic en {{ui:Copiar}} ou prema {{key:Mod+C}}.
4. Faga clic en {{ui:Pegar}} ou prema {{key:Mod+V}}. Ábrese a barra de colocación e unha caixa transparente segue o punteiro, xirada como o orixinal.
5. Prema {{key:R}} para xirar 90°, {{key:Tab}} para axustar a súa parte posterior a un muro, ou escriba X e Y na barra de colocación.
6. Faga clic onde vai a copia. Cada clic coloca outra copia; prema {{key:Esc}} para deter.
7. Faga clic en {{ui:Gardar como IFC}} para descargar a copia editada do modelo.

## Pegar no mesmo sitio

{{ui:Máis}}, {{ui:Pegar no mesmo sitio}} ou {{key:Mod+Shift+V}} pega sen facer clic, nas mesmas X e Y e xirado do mesmo xeito:

- **No mesmo modelo, no mesmo piso**: dous elementos nun mesmo lugar non servirían de nada, así que a copia vai xusto ao lado do orixinal, a anchura do elemento máis 100 mm ao longo da súa propia anchura. Volva pegar no mesmo sitio desde a nova copia para facer unha fila.
- **A outro piso ou a outro modelo**: as mesmas X, Y e xiro exactos. BimCraft usa o piso co mesmo nome; se non o hai, o da altura máis próxima. A liña de estado indica cal.

## Duplicar

{{ui:Máis}}, {{ui:Duplicar}} ou {{key:Mod+D}} copia o elemento seleccionado e comeza a pegalo de inmediato: un paso en lugar de dous.

## A outro modelo ou outra lapela

O que copia gárdase neste navegador, así que pode abrir outro modelo IFC, ou BimCraft noutra lapela, e pegar alí. O outro modelo precisa do propio elemento da biblioteca: BimCraft o ten cando o elemento se colocou, substituíu ou actualizou nesta lapela. Un elemento colocado nunha sesión anterior pódese pegar de novo só no seu propio modelo; noutro modelo, colóqueo desde a lapela {{ui:Biblioteca}}.

## O que debe ver

- A copia no modelo, seleccionada, co mesmo elemento da biblioteca, licenza, datos do equipo, cantidade e nota que o orixinal, e o **seguinte número de elemento libre**. Cambie o número en Propiedades, en `CadCraft_Placement`.
- "Colocado: *elemento* (elemento *n*)" na lista de cambios. {{key:Mod+Z}} desfai o cambio; {{key:Mod+Y}} volve a poñelo.

## Cousas que convén saber

- As copias comparten o tipo do orixinal, así que todas usan un mesmo conxunto de xeometría, como ocorre ao colocar dúas veces o mesmo elemento.
- {{ui:Desfacer}} e {{ui:Refacer}} abarcan todos os cambios: valores editados, colocacións, pegados, substitucións e actualizacións. Refacer devolve unha colocación ao mesmo lugar; un cambio novo borra o que se podía refacer.
- Na vista 2D dun debuxo non hai nada que seleccionar, polo que non hai nada que copiar. Use {{ui:Editar en CadCraft}} para cambiar o debuxo, cando aparece.

## Erros comúns

- **{{ui:Pegar}} indica que os elementos proceden doutro modelo.** O último que copiou foi un elemento do edificio, ou varios: estes pégase só no seu propio modelo. Seleccione un elemento da biblioteca colocado e cópieo.
- **{{ui:Pegar}} indica que a copia procede doutro modelo sen o seu elemento da biblioteca.** Coloque o elemento desde a lapela {{ui:Biblioteca}} unha vez nesta lapela, despois cópiao e péguello.
- **{{key:Mod+C}} copia texto da páxina.** Seleccionouse texto na páxina. Faga clic primeiro no modelo.

## Relacionados

- [Teclas e rato](topic:keyboard#edit)
- [Configuración de BimCraft](topic:settings)
