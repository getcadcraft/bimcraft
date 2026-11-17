---
title: Colocar e trocar um item da biblioteca que tem variantes
summary: Alguns itens da biblioteca vêm em vários tamanhos ou opções. Escolha a variante antes de a colocar, veja qual é a de um item colocado, troque-a por outra variante com um clique e mantenha-a quando o item for atualizado.
keywords: variante, variantes, tamanhos, opções, configuração, biblioteca, librarycraft, colocar, trocar, configurador, família, tipo, atualização, portos
from: c05f0af3
---

## O que vai fazer

Coloque um item da biblioteca no tamanho ou na opção de que precisa, e mude de ideias mais tarde sem o voltar a colocar. Um item com variantes é um único item da biblioteca (um nome, uma licença, uma versão) com uma tabela das variantes em que vem: por exemplo, uma chapa de fixação em Pequena, Média e Grande, ou a mesma chapa sem furos.

## Escolher a variante e colocá-la

1. Abra o separador {{ui:Library}} e clique no cartão do item.
2. Por baixo do nome, a escolha {{ui:Variant}} lista cada variante com o seu tamanho. A predefinição do item é escolhida primeiro.
3. Escolha uma. A planta, o tamanho e o corpo 3D acompanham a sua escolha.
4. Clique em {{ui:Place in plan}} (ou {{ui:Place in model}} na vista 3D) e coloque-a como qualquer item: ver [Colocar equipamento e mobiliário da biblioteca](topic:place-from-library).

O elemento colocado tem o nome do item e da variante, por exemplo *Chapa de fixação — Grande*, para que o mapa de {{ui:Equipment}} e a árvore os distingam. Cada variante é o seu próprio tipo IFC: colocar a mesma variante duas vezes partilha um tipo, e uma variante diferente tem o seu.

## Ver qual é a variante de um item colocado

Selecione o elemento. Em {{ui:Properties}}, a caixa **Item da biblioteca** tem uma linha **Variant**. O IFC guarda-a em `CadCraft_LibraryItem`: `Variant` (o identificador da variante), `VariantName` e `VariantValues` (os valores da opção, como texto), para que outros programas a possam ler.

## Trocar para outra variante

1. Selecione o item colocado e clique em {{ui:Swap item…}} na caixa **Item da biblioteca**. Abre-se o separador {{ui:Library}}.
2. No topo, **Outras variantes de** *o item* lista cada variante com o seu tamanho. A que está colocada está assinalada e não pode ser escolhida.
3. Clique em {{ui:Swap to …}} na variante que pretende.

O elemento mantém o seu lugar, rotação, piso, número de item, quantidade e notas; o seu tipo, forma e dados mudam para a outra variante. {{key:Mod+Z}} repõe o primeiro. Pode continuar a escolher qualquer outro item da lista abaixo, como antes: ver [Trocar um item colocado e atualizar itens da biblioteca](topic:swap-and-update-library-items).

## Copiar, colar e atualizações

- Uma cópia de uma variante colocada é a mesma variante: neste modelo, e noutro modelo aberto no mesmo separador do navegador, através de Copiar e Colar.
- As **atualizações** mantêm a variante: se a nova versão do item ainda a tiver, a colocação passa a ser essa variante da nova versão. Se a nova versão já não a tiver, a colocação passa a ser a variante predefinida do item.

## Bom saber

- Só alguns itens da biblioteca têm variantes. Os cartões não o indicam; vê a escolha {{ui:Variant}} quando abre um.
- Um item pode indicar **portos** (pontos de ligação para tubagens e condutas) por variante. O separador Biblioteca mostra quantos tem uma variante. Ainda **não** são escritos no IFC quando coloca o item a partir do separador Biblioteca.
- Uma variante sem corpo 3D é colocada com uma caixa de substituição, como qualquer símbolo 2D.
- As medidas da escolha estão em milímetros, como a biblioteca as escreve.
