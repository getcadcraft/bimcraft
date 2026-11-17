---
title: Escolher um elemento e ler as suas propriedades
summary: Clique em qualquer elemento do modelo 3D para o realçar e ler o seu nome, tipo, etiqueta, GlobalId, conjuntos de propriedades e quantidades.
keywords: propriedades, escolher, selecionar, clique, elemento, parâmetros, conjuntos de propriedades, pset, quantidades, globalid, guid, tipo, inspecionar
from: 43b80aa8
---

## O que vai fazer

Escolha elementos num modelo IFC e leia tudo o que o ficheiro diz sobre eles: atributos, conjuntos de propriedades, propriedades de tipo e quantidades.

## Passos

1. Abra um modelo IFC.
2. Clique num elemento, por exemplo uma porta. Clique sem arrastar: um arrastar de mais de alguns pixéis roda a vista em vez de escolher.
3. Veja o elemento: fica realçado a azul.
4. Veja o painel {{ui:Propriedades}} à direita. No topo estão o tipo do elemento (como "Porta" ou "WallStandardCase") e o seu nome.
5. Leia o primeiro bloco: **Nome**, **Tipo**, **Tipo de objeto**, **Etiqueta**, **Descrição**, **GlobalId** e **Linha**.
6. Desloque-se para baixo até aos conjuntos de propriedades. Os três primeiros estão abertos; clique no nome de qualquer outro conjunto para o abrir.
7. Clique noutro elemento para passar a ele.
8. Prima {{key:Esc}}, ou clique num fundo vazio, para limpar a seleção.

## O que deve ver

- O elemento realçado e os seus dados à direita.
- Conjuntos de propriedades por ordem alfabética. Os conjuntos que vêm do **tipo** do elemento têm " (tipo)" depois do nome e a nota "Propriedade de tipo: uma alteração aqui aplica-se a todos os elementos deste tipo."
- Conjuntos de quantidades (como comprimentos, áreas e volumes) listados com os outros conjuntos. As quantidades são só de leitura.
- Os valores que pode alterar têm o aspeto de botões. [Alterar propriedades IFC e guardar uma cópia editada](topic:edit-ifc-properties) mostra como.

[Campos do painel de propriedades](topic:properties-panel) explica cada campo.

## Aceder a elementos ocultos

1. Para chegar a algo dentro do edifício, desmarque os pisos acima dele na lista {{ui:Pisos}}.
2. Para chegar a uma parede atrás de um volume de compartimento, desative {{ui:Espaços}}.
3. Clique no elemento.

## Erros comuns

- **Arrastar um pouco enquanto clica.** O BimCraft trata isso como uma rotação e não escolhe. Mantenha o rato parado.
- **Esperar unidades junto aos números.** Os valores são mostrados tal como estão guardados no ficheiro, arredondados a quatro casas decimais, sem símbolo de unidade. Os comprimentos numa exportação métrica costumam estar em milímetros ou metros; verifique as definições do exportador.
- **Procurar um parâmetro pelo nome que lhe é familiar.** Os exportadores renomeiam e reagrupam os parâmetros em conjuntos de propriedades IFC, como `Pset_WallCommon`. Percorra cada conjunto; os parâmetros personalizados costumam estar num conjunto com o nome do programa que exportou ou da sua empresa.
- **Esperar uma caixa de pesquisa.** Clique para escolher um elemento; {{key:Mod}}+clique ou {{key:Shift}}+clique escolhe mais, e {{key:Mod+A}} escolhe todos os elementos mostrados. A lista {{ui:Elementos}} à esquerda apenas conta os elementos por tipo; não é clicável.
- **Escolher num cartão de ficheiro de projeto.** Um cartão de ficheiro não tem elementos para escolher: "As propriedades dos elementos precisam do modelo 3D. Abra uma exportação IFC deste ficheiro para as ver."
