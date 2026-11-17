---
title: Colorir elementos por uma propriedade
summary: Pinte cada elemento pelo valor de uma propriedade, como classe, tipo, pavimento, material, classificação de resistência ao fogo ou custo, leia a legenda, clique em um valor para mostrar só esses elementos e salve as cores como um esquema para usar em outros modelos.
keywords: cor, colorir, colorir por, legenda, vista inteligente, aparência, propriedade, tipo, material, resistência ao fogo, filtro, isolar, tema, valores, esquema, esquema de cores, salvar cores, reutilizar, equipe, json, amostra
from: f081d343
---

## O que você vai fazer

Veja de relance como uma propriedade se distribui pelo modelo: quais paredes são externas, quais materiais são usados onde, quais elementos não têm resistência ao fogo. Cada elemento recebe a cor do seu valor, e a legenda diz o que cada cor significa e quantos elementos a têm.

## Passos

1. Abra um modelo IFC.
2. Clique na guia {{ui:Cor}} à direita.
3. Escolha uma propriedade na lista. As primeiras pertencem a todo elemento ({{ui:Classe}}, {{ui:Tipo}}, {{ui:Pavimento}}, {{ui:Material}}, {{ui:Nome}}…); as demais vêm dos conjuntos de propriedades e de quantidades do modelo, sob o nome do conjunto. O número depois de cada uma é quantos elementos a têm.
4. Leia a legenda: uma cor, o valor e quantos elementos o têm.
5. Clique em um valor para mostrar só esses elementos. Segure {{key:Mod}} e clique para acrescentar mais valores. Pressione {{key:Shift+H}} para mostrar tudo de novo.
6. Clique em {{ui:Desligado}} para voltar às cores próprias do modelo.

## O que você deve ver

- Até sete valores recebem cada um a sua cor, o mais comum primeiro. Mais valores do que isso dividem um cinza, listados como **outros valores**.
- Um número com muitos valores diferentes é dividido em seis faixas iguais, do claro (baixo) ao escuro (alto).
- Elementos sem a propriedade ficam em cinza claro, listados como **Sem valor**, para que os coloridos se destaquem.
- As cores mudam com Papel e Modelo, e permanecem enquanto você edita o modelo.
- A propriedade de um tipo vale para todo elemento daquele tipo; quando um elemento tem valor próprio para a mesma propriedade, o valor próprio prevalece.

## Mudar cores e guardá-las como esquema

- Clique na amostra de um valor na legenda para escolher outra cor para ele. O modelo é repintado na hora.
- {{ui:Salvar esquema}} baixa as cores como um pequeno arquivo `.json` com o nome da propriedade, por exemplo `Class colors.json`.
- Em outro modelo, ou no computador de um colega, clique em {{ui:Abrir esquema…}} e escolha esse arquivo. Cada valor do esquema recebe a sua cor, então a mesma classificação de resistência ao fogo ou o mesmo sistema tem a mesma cor em todo modelo.
- Um valor que o esquema não tem é pintado de cinza e listado como "não está no esquema"; valores do esquema que este modelo não tem continuam listados com 0, para que você veja o esquema inteiro.
- Um esquema mantém as cores nos dois temas. Escolher uma propriedade na lista volta às cores automáticas.

## Erros comuns

- **"Este modelo não tem valores de …".** O esquema foi salvo para uma propriedade que este modelo não tem (outro nome de conjunto de propriedades, por exemplo). Abra um esquema feito para este tipo de modelo, ou escolha uma propriedade na lista.

- **Uma propriedade não aparece na lista.** Nenhum elemento com forma no modelo a tem. As propriedades dos próprios pavimentos e espaços não são listadas.
- **Tudo tem a mesma cor.** Todo elemento tem o mesmo valor, ou nenhum: veja as contagens da legenda.

## Próximo

- [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate)
- [Encontrar o caminho pela árvore do modelo](topic:model-tree)
