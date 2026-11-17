---
title: Orientar-se com a árvore do modelo
summary: Navegue num modelo IFC por projeto, terreno, edifício, piso e espaço, com os elementos agrupados por tipo; marque as caixas para mostrar e ocultar, clique numa linha para a escolher e faça duplo clique para fazer zoom.
keywords: árvore do modelo, árvore, estrutura, estrutura espacial, navegador, esquema, piso, nível, pavimento, espaço, compartimento, grupo, classe, ocultar, mostrar, escolher, selecionar, zoom
from: 69de4ab7
---

## O que vai fazer

Veja como um modelo está construído e chegue a qualquer elemento sem o procurar em 3D: o edifício, os seus pisos, os espaços em cada piso e os elementos neles, agrupados por tipo (paredes, portas, lajes…).

## Passos

1. Abra um modelo IFC. A {{ui:Árvore do modelo}} à esquerda abre até aos pisos.
2. Clique na seta ao lado de uma linha para a abrir ou fechar. Um piso tem primeiro os seus espaços, depois os seus elementos por tipo, com quantos são. Um elemento feito de partes, como uma escada, tem as suas partes.
3. Desmarque a caixa de uma linha para ocultar tudo o que ela contém; marque-a para o mostrar de novo. Uma caixa com um traço indica que só parte do que contém está a ser mostrada.
4. Clique no nome de uma linha para escolher o que ela representa: um elemento, ou todos os elementos de um grupo, piso ou espaço. {{key:Mod}}+clique acrescenta-os à escolha, ou retira-os dela.
5. Clique no botão {{ui:i}} ao lado de um piso, espaço ou edifício para ver as suas próprias propriedades.
6. Faça duplo clique numa linha para fazer zoom até ela.

## O que deve ver

- Ao escolher um elemento na vista 3D, a árvore abre até ele e assinala-o.
- Os elementos ocultos ficam riscados. As caixas da árvore e {{ui:Mostrar}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) funcionam em conjunto: veja [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate).
- Os elementos que o modelo não coloca em nenhum piso ficam num grupo no fim, **Fora da estrutura espacial**.
- Um grupo longo mostra 200 linhas de cada vez; clique em **Mostrar mais** por baixo dele para ver o resto.

## Teclas

Com o nome de uma linha em foco: {{key:Up}} e {{key:Down}} movem, {{key:Right}} abre, {{key:Left}} fecha ou sobe, {{key:Space}} marca a caixa, {{key:Enter}} escolhe.

## Erros comuns

- **A caixa de um piso está marcada, mas nada aparece.** A lista {{ui:Pisos}} por baixo da árvore desliga pisos inteiros por si: marque-o também aí.
- **Uma linha não escolhe nada.** Algumas linhas, como um espaço vazio, não têm elementos que possam ser desenhados; a linha de estado diz isso.

## Seguinte

- [Eliminar, cortar, copiar e colar elementos do edifício](topic:edit-elements)
- [Mostrar e ocultar pisos, espaços e arestas](topic:storeys-and-spaces)
