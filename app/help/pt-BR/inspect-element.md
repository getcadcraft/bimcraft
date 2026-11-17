---
title: Selecionar um elemento e ler suas propriedades
summary: Clique em qualquer elemento do modelo 3D para destacá-lo e ler seu nome, tipo, etiqueta, GlobalId, conjuntos de propriedades e quantidades.
keywords: propriedades, selecionar, clicar, elemento, parâmetros, conjuntos de propriedades, pset, quantidades, globalid, guid, tipo, inspecionar
from: 43b80aa8
---

## O que você vai fazer

Selecionar elementos em um modelo IFC e ler tudo o que o arquivo diz sobre eles: atributos, conjuntos de propriedades, propriedades de tipo e quantidades.

## Passos

1. Abra um modelo IFC.
2. Clique em um elemento, por exemplo uma porta. Clique sem arrastar: um arrasto de mais de alguns pixels orbita em vez de selecionar.
3. Observe o elemento: ele fica destacado em azul.
4. Observe o painel {{ui:Propriedades}} à direita. No topo estão o tipo do elemento (como "Door" ou "WallStandardCase") e seu nome.
5. Leia o primeiro bloco: **Nome**, **Tipo**, **Tipo de objeto**, **Etiqueta**, **Descrição**, **GlobalId** e **Linha**.
6. Role para baixo até os conjuntos de propriedades. Os três primeiros estão abertos; clique no nome de qualquer outro conjunto para abri-lo.
7. Clique em outro elemento para trocar para ele.
8. Pressione {{key:Esc}}, ou clique em um fundo vazio, para limpar a seleção.

## O que você deve ver

- O elemento destacado e seus dados à direita.
- Conjuntos de propriedades em ordem alfabética. Conjuntos que vêm do **tipo** do elemento têm " (tipo)" depois do nome e a nota "Propriedade de tipo: uma alteração aqui se aplica a todos os elementos deste tipo."
- Conjuntos de quantidades (como comprimentos, áreas e volumes) listados junto com os demais conjuntos. Quantidades são somente leitura.
- Valores que você pode alterar parecem botões. [Alterar propriedades IFC e salvar uma cópia editada](topic:edit-ifc-properties) mostra como.

[Campos do painel de propriedades](topic:properties-panel) explica cada campo.

## Acessando elementos ocultos

1. Para alcançar algo dentro do edifício, desmarque os pavimentos acima dele na lista {{ui:Pavimentos}}.
2. Para alcançar uma parede atrás de um volume de ambiente, desative {{ui:Espaços}}.
3. Clique no elemento.

## Erros comuns

- **Arrastar um pouco ao clicar.** O BimCraft trata isso como uma órbita e não seleciona. Mantenha o mouse parado.
- **Esperar unidades ao lado dos números.** Os valores são mostrados como estão gravados no arquivo, arredondados para quatro casas decimais, sem símbolo de unidade. Comprimentos em uma exportação métrica costumam ser milímetros ou metros; verifique as configurações do exportador.
- **Procurar um parâmetro pelo nome que você conhece.** Os exportadores renomeiam e reagrupam parâmetros em conjuntos de propriedades IFC como `Pset_WallCommon`. Examine cada conjunto; parâmetros personalizados costumam ficar em um conjunto com o nome do programa exportador ou da sua empresa.
- **Esperar uma caixa de busca.** Clique para selecionar um elemento; {{key:Mod}}+clique ou {{key:Shift}}+clique seleciona mais, e {{key:Mod+A}} seleciona todos os elementos exibidos. A lista {{ui:Elementos}} à esquerda apenas conta os elementos por tipo; ela não é clicável.
- **Selecionar em um cartão de arquivo de projeto.** Um cartão de arquivo não tem elementos para selecionar: "As propriedades do elemento precisam do modelo 3D. Abra uma exportação IFC deste arquivo para vê-las."
