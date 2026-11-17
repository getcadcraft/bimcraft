---
title: Pintar materiais em paredes, pisos e telhados
summary: Dê aos elementos um material como tijolo, revestimento, telha, madeira ou cerâmica, no elemento inteiro ou em um lado só, salvo no IFC e mostrado nas imagens renderizadas.
keywords: pintar, material, materiais, acabamento, acabamentos, textura, tijolo, revestimento, telhas, cobertura, madeira, pedra, cerâmica, concreto, reboco, grama, cascalho, vidro, metal, lado da parede, interno, externo, acabamento de piso, ambiente, estilo de superfície
from: fbfed676
---

{{ui:Paint}} na barra de ferramentas abre a biblioteca de materiais sobre a vista 3D: tijolo e bloco, revestimentos, coberturas, madeira, pedra, cerâmica, concreto, reboco, terreno, vidro e metal.

## Pintar elementos

1. Clique em {{ui:Paint}}.
2. Clique em um material.
3. Clique em elementos na vista 3D. Cada clique pinta o elemento clicado.

Para pintar vários de uma vez, selecione-os antes (clique, {{key:Ctrl}}+clique, ou uma [busca](topic:find)) e depois clique no material: todos os elementos selecionados recebem o material em uma só etapa.

O elemento mostra a cor do material na vista 3D imediatamente. A textura aparece em uma [imagem renderizada](topic:render). {{key:Esc}} ou {{ui:Close}} encerra a pintura.

## Pintar um lado

Escolha {{ui:Only the side clicked}} e depois clique no lado que você quer: o exterior de uma parede em revestimento e o interior em outro acabamento, ou a face superior de um piso em madeira com a face inferior mantida como está. O restante do elemento mantém seu material.

Um lado é encontrado pelas direções do próprio elemento, então continua sendo o mesmo lado quando você move ou gira o elemento.

Para pintar pisos ambiente por ambiente, dê a cada ambiente o próprio piso ({{ui:Draw}} › {{ui:Floor}} › **Este ambiente**, veja [Ambientes, pisos, forros e telhados](topic:floors-and-roofs)) e depois pinte a face superior de cada piso.

## Remover um material

Clique na amostra listrada ({{ui:No material}}) e depois clique no elemento. Todos os materiais dele, inclusive os dos lados, são removidos.

## No arquivo

Pintar altera o IFC (uma etapa por vez, {{key:Ctrl+Z}} desfaz) e continua sendo IFC comum:

- cada elemento pintado recebe o conjunto de propriedades `CadCraft_Render`, que indica o nome do material, e uma propriedade por lado pintado;
- o corpo dele recebe um estilo de superfície com a cor do material, para que outros programas BIM mostrem a cor. No IFC4, o estilo também indica a textura.

Quando o BimCraft redesenha uma parede que você pintou (por exemplo, ao mover a extremidade dela), a parede mantém seu material e sua cor: no BimCraft, nas imagens e em outros programas.

:::note
As texturas são desenhadas pelo próprio BimCraft: funcionam offline e são livres para qualquer uso (CC0). Suas próprias texturas de imagem ainda não estão implementadas.
:::

## Texturas na vista 3D

Uma parede de tijolo pintada mostra os tijolos, e um piso de madeira mostra as tábuas, em tamanho real, assim que a pintura é aplicada. Desmarque **Mostrar as texturas na vista 3D** na paleta Pintar para ver cores chapadas (um modelo muito grande desliga as texturas sozinho e avisa). A cor por propriedade sempre mostra as próprias cores. As texturas são desenhadas pelo programa, então nada é baixado, e as renderizações e o arquivo glTF as incluem de qualquer forma.
