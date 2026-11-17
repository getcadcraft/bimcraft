---
title: Pintar materiais sobre muros, chans e cubertas
summary: Dea aos elementos un material como ladrillo, revestimento, tellas, madeira ou azulexo, no elemento completo ou nunha soa cara, gardado no IFC e amosado nas imaxes renderizadas.
keywords: pintar, material, materiais, acabado, acabados, textura, ladrillo, revestimento, tellas, cuberta, madeira, pedra, azulexo, formigón, estuco, herba, cascallo, vidro, metal, cara do muro, interior, exterior, acabado de chan, cuarto, estilo de superficie
from: fbfed676
---

{{ui:Pintar}} na barra de ferramentas abre a biblioteca de materiais sobre a vista 3D: ladrillo e bloque, revestimento, cubertas, madeira, pedra, azulexo, formigón, estuco, terreo, vidro e metal.

## Pintar elementos

1. Prema {{ui:Pintar}}.
2. Prema un material.
3. Prema os elementos na vista 3D. Cada clic pinta o elemento no que preme.

Para pintar moitos á vez, sélecciónos antes (clic, {{key:Ctrl}}+clic, ou unha [busca](topic:find)), e logo prema o material: cada elemento seleccionado recibe o material nun só paso.

O elemento mostra de inmediato a cor do material na vista 3D. A súa textura aparece nunha [imaxe renderizada](topic:render). {{key:Esc}} ou {{ui:Pechar}} termina a pintura.

## Pintar unha cara

Escolla {{ui:Só o lado premido}}, e logo prema a cara que quere: o exterior dun muro en revestimento e o seu interior con outro acabado, ou a parte superior dun chan en madeira coa parte inferior tal cal. O resto do elemento conserva o seu material.

Unha cara atópase a partir das propias direccións do elemento, así que segue sendo a mesma cara cando move ou xira o elemento.

Para pintar chans cuarto por cuarto, dea a cada cuarto o seu propio chan ({{ui:Debuxar}} › {{ui:Chan}} › **Este cuarto**, vexa [Cuartos, chans, tectos e cubertas](topic:floors-and-roofs)), e logo pinte a parte superior de cada chan.

## Quitar un material

Prema a mostra con raias ({{ui:Sen material}}) e logo prema o elemento. Sae todo material que teña, incluídas as súas caras.

## No ficheiro

Pintar cambia o IFC (un paso cada vez, e {{key:Ctrl+Z}} desfai) e segue sendo IFC simple:

- cada elemento pintado recibe o conxunto de propiedades `CadCraft_Render`, que nomea o seu material, e unha propiedade por cada cara pintada;
- o seu corpo recibe un estilo de superficie coa cor do material, para que outros programas BIM mostren a cor. En IFC4 o estilo tamén nomea a textura.

Cando BimCraft remodela un muro que pintou (por exemplo, move o seu extremo), o muro conserva o seu material e a súa cor, en BimCraft, nas imaxes e noutros programas.

:::note
As texturas debúxaas o propio BimCraft: funcionan sen conexión e son de uso libre para calquera fin (CC0). As súas propias texturas de imaxe aínda non están dispoñibles.
:::

## Texturas na vista 3D

Un muro pintado de ladrillo mostra os seus ladrillos, e un chan de madeira as súas tablas, ao seu tamaño real, en canto a pintura está posta. Desmarque **Mostrar as texturas na vista 3D** na paleta Pintar para ver cores planas (un modelo moi grande desactívaas por si mesmo e avísao). A cor por propiedade sempre mostra as súas propias cores. As texturas debúxaas o programa, así que non se descarga nada, e as renderizacións e o ficheiro glTF levan as texturas igualmente.
