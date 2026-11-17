---
title: Encontre seu caminho com a árvore do modelo
summary: Navegue por um modelo IFC por projeto, terreno, edificação, pavimento e espaço, com os elementos agrupados por tipo; marque as caixas para exibir e ocultar, clique em uma linha para escolher e dê clique duplo para aproximar.
keywords: árvore do modelo, árvore, estrutura, estrutura espacial, navegador, esquema, pavimento, nível, piso, espaço, ambiente, grupo, classe, ocultar, exibir, escolher, selecionar, zoom
from: 69de4ab7
---

## O que você vai fazer

Veja como um modelo é montado e chegue a qualquer elemento sem procurá-lo em 3D: a edificação, seus pavimentos, os espaços em cada pavimento e os elementos neles, agrupados por tipo (paredes, portas, lajes…).

## Passos

1. Abra um modelo IFC. A {{ui:Árvore do modelo}} à esquerda abre até os pavimentos.
2. Clique na seta ao lado de uma linha para abrir ou fechar. Um pavimento mostra primeiro os seus espaços, depois os seus elementos por tipo, com a quantidade de cada um. Um elemento formado por partes, como uma escada, mostra as suas partes.
3. Desmarque a caixa de uma linha para ocultar tudo o que há nela; marque-a para exibir de novo. Uma caixa com traço indica que só parte do que está nela é exibida.
4. Clique no nome de uma linha para escolher o que ela representa: um elemento, ou todos os elementos de um grupo, pavimento ou espaço. {{key:Mod}}+clique acrescenta-os à escolha, ou os tira dela.
5. Clique no botão {{ui:i}} ao lado de um pavimento, espaço ou edificação para ver as suas próprias propriedades.
6. Dê um clique duplo em uma linha para aproximar a vista dela.

## O que você deve ver

- Quando você escolhe um elemento na vista 3D, a árvore abre até ele e o marca.
- Elementos ocultos ficam riscados. As caixas da árvore e {{ui:Exibir}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) funcionam juntos: veja [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate).
- Elementos que o modelo não coloca em nenhum pavimento ficam em um grupo no fim, **Não na estrutura espacial**.
- Um grupo longo mostra 200 linhas por vez; clique em **Mostrar mais** abaixo dele para ver o restante.

## Teclas

Com o nome de uma linha em foco: {{key:Up}} e {{key:Down}} movem, {{key:Right}} abre, {{key:Left}} fecha ou sobe, {{key:Space}} marca a caixa, {{key:Enter}} escolhe.

## Erros comuns

- **A caixa de um pavimento está marcada, mas nada aparece.** A lista {{ui:Pavimentos}} abaixo da árvore desliga pavimentos inteiros por conta própria: marque-o também ali.
- **Uma linha não escolhe nada.** Algumas linhas, como um espaço vazio, não têm elementos que possam ser desenhados; a linha de status informa isso.

## Próximo

- [Excluir, recortar, copiar e colar elementos da edificação](topic:edit-elements)
- [Exibir e ocultar pavimentos, espaços e arestas](topic:storeys-and-spaces)
