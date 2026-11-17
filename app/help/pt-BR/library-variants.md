---
title: Posicionar e trocar um item da biblioteca que tem variantes
summary: Alguns itens da biblioteca vêm em vários tamanhos ou opções. Escolha a variante antes de posicioná-la, veja qual variante um item posicionado é, troque-a por outra com um clique e mantenha-a quando o item for atualizado.
keywords: variante, variantes, tamanhos, opções, configuração, biblioteca, librarycraft, posicionar, trocar, configurador, família, tipo, atualização, conexões
from: c05f0af3
---

## O que você vai fazer

Posicione um item da biblioteca no tamanho ou na opção de que você precisa, e mude de ideia depois sem posicioná-lo de novo. Um item com variantes é um único item da biblioteca (um nome, uma licença, uma versão) com uma tabela das variantes em que ele vem: por exemplo, uma placa de fixação em Pequena, Média e Grande, ou a mesma placa sem furos.

## Escolha a variante e posicione-a

1. Abra a guia {{ui:Biblioteca}} e clique no cartão do item.
2. Sob o nome, a escolha {{ui:Variante}} lista cada variante com seu tamanho. A variante padrão do item é escolhida primeiro.
3. Escolha uma. A planta, o tamanho e a linha do corpo 3D seguem a sua escolha.
4. Clique em {{ui:Posicionar na planta}} (ou {{ui:Posicionar no modelo}} na vista 3D) e posicione como qualquer item: veja [Posicionar equipamentos e móveis da biblioteca](topic:place-from-library).

O elemento posicionado recebe o nome do item e da variante, por exemplo *Placa de fixação — Grande*, para que a tabela de {{ui:Equipamentos}} e a árvore os distingam. Cada variante é seu próprio tipo IFC: posicionar a mesma variante duas vezes compartilha um tipo; uma variante diferente recebe o seu.

## Veja qual variante um item posicionado é

Selecione o elemento. Em {{ui:Propriedades}}, a caixa **Item da biblioteca** tem uma linha **Variante**. O IFC a guarda em `CadCraft_LibraryItem`: `Variant` (o id da variante), `VariantName` e `VariantValues` (os valores das opções, como texto), para que outros programas possam lê-la.

## Trocar para outra variante

1. Selecione o item posicionado e clique em {{ui:Trocar item…}} na caixa **Item da biblioteca**. A guia {{ui:Biblioteca}} se abre.
2. No topo, **Outras variantes de** *o item* lista cada variante com seu tamanho. A que está posicionada está marcada e não pode ser escolhida.
3. Clique em {{ui:Trocar para …}} na variante que você quer.

O elemento mantém seu lugar, giro, pavimento, número do item, quantidade e notas; seu tipo, forma e dados mudam para a outra variante. {{key:Mod+Z}} traz de volta a anterior. Você ainda pode escolher qualquer outro item da lista abaixo, como antes: veja [Trocar um item posicionado e atualizar itens da biblioteca](topic:swap-and-update-library-items).

## Copiar, colar e atualizações

- Uma cópia de uma variante posicionada é a mesma variante: neste modelo e em outro modelo aberto na mesma aba do navegador, por Copiar e Colar.
- As **atualizações** mantêm a variante: se a versão mais nova do item ainda a tiver, o posicionamento passa a ser essa variante da nova versão. Se a nova versão não a tiver mais, o posicionamento assume a variante padrão do item.

## Bom saber

- Apenas alguns itens da biblioteca têm variantes. Os cartões não dizem isso; você vê a escolha {{ui:Variante}} ao abrir um.
- Um item pode listar **conexões** (pontos de conexão para tubulações e dutos) por variante. A guia Biblioteca mostra quantas uma variante tem. Elas **ainda não** são gravadas no IFC quando você posiciona o item pela guia Biblioteca.
- Uma variante sem corpo 3D é posicionada com uma caixa substituta, como qualquer símbolo 2D.
- Os tamanhos na escolha estão em milímetros, como a biblioteca os escreve.
