---
title: Pintar materiais em paredes, pavimentos e coberturas
summary: Dê aos elementos um material como tijolo, revestimento, telhas, madeira ou ladrilho, em todo o elemento ou só num lado, guardado no IFC e mostrado nas imagens renderizadas.
keywords: pintar, material, materiais, acabamento, acabamentos, textura, tijolo, revestimento, telhas, cobertura, madeira, pedra, ladrilho, betão, reboco, relva, cascalho, vidro, metal, lado da parede, interior, exterior, acabamento de pavimento, compartimento, estilo de superfície
from: fbfed676
---

{{ui:Pintar}} na barra de ferramentas abre a biblioteca de materiais sobre a vista 3D: tijolo e bloco, revestimento, cobertura, madeira, pedra, ladrilho, betão, reboco, terreno, vidro e metal.

## Pintar elementos

1. Clique em {{ui:Pintar}}.
2. Clique num material.
3. Clique em elementos na vista 3D. Cada clique pinta o elemento em que clicou.

Para pintar muitos de uma vez, selecione-os primeiro (clique, {{key:Ctrl}}+clique, ou uma [pesquisa](topic:find)) e depois clique no material: cada elemento selecionado recebe-o num só passo.

O elemento mostra logo a cor do material na vista 3D. A textura aparece numa [imagem renderizada](topic:render). {{key:Esc}} ou {{ui:Fechar}} termina a pintura.

## Pintar um lado

Escolha {{ui:Só o lado clicado}} e clique no lado que quer: o exterior de uma parede com revestimento e o interior com outro acabamento, ou a face de cima de um pavimento em madeira, deixando a face de baixo como está. O resto do elemento mantém o seu material.

Um lado é encontrado a partir das direções do próprio elemento, por isso continua a ser o mesmo lado quando move ou roda o elemento.

Para pintar pavimentos compartimento a compartimento, dê a cada compartimento o seu próprio pavimento ({{ui:Desenhar}} › {{ui:Pavimento}} › **Este compartimento**, veja [Compartimentos, pavimentos, tetos e coberturas](topic:floors-and-roofs)) e depois pinte a face de cima de cada pavimento.

## Retirar um material

Clique na amostra listrada ({{ui:Sem material}}) e depois no elemento. Saem todos os materiais do elemento, incluindo os dos lados.

## No ficheiro

Pintar altera o IFC (um passo de cada vez, e {{key:Ctrl+Z}} anula-o) e continua a ser IFC simples:

- cada elemento pintado recebe o conjunto de propriedades `CadCraft_Render`, que indica o seu material, e uma propriedade por cada lado pintado;
- o seu corpo recebe um estilo de superfície com a cor do material, para que outros programas BIM mostrem a cor. No IFC4, o estilo indica também a textura.

Quando o BimCraft remodela uma parede que pintou (por exemplo, quando move uma das suas extremidades), a parede mantém o seu material e a sua cor, no BimCraft, nas imagens e noutros programas.

:::note
As texturas são desenhadas pelo próprio BimCraft: funcionam offline e são de uso livre para qualquer fim (CC0). As suas próprias texturas de imagem ainda não estão implementadas.
:::

## Texturas na vista 3D

Uma parede de tijolo pintada mostra os seus tijolos, e um pavimento de madeira as suas tábuas, à escala real, assim que a tinta é aplicada. Desmarque **Mostrar as texturas na vista 3D** na paleta Pintar para ver cores planas (um modelo muito grande desliga-as automaticamente e avisa). A **Cor por propriedade** mostra sempre as suas próprias cores. As texturas são desenhadas pelo programa, por isso nada é transferido, e as renderizações e o ficheiro glTF incluem-nas de qualquer forma.
