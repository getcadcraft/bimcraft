---
title: Colorir elementos por uma propriedade
summary: Pintar cada elemento pelo valor de uma propriedade, como a sua classe, tipo, piso, material, classificação de resistência ao fogo ou custo, ler a legenda, clicar num valor para mostrar apenas esses elementos e guardar as cores como esquema para usar noutros modelos.
keywords: cor, colorir, colorir por, legenda, vista inteligente, aspeto, propriedade, tipo, material, classificação ao fogo, filtro, isolar, tema, valores, esquema, esquema de cores, guardar cores, reutilizar, equipa, json, amostra de cor
from: f081d343
---

## O que vai fazer

Ver de relance como uma propriedade se distribui pelo modelo: que paredes são exteriores, que materiais são usados onde, que elementos não têm classificação de resistência ao fogo. Cada elemento toma a cor do seu valor, e a legenda diz o que significa cada cor e quantos elementos a têm.

## Passos

1. Abra um modelo IFC.
2. Clique no separador {{ui:Cor}} à direita.
3. Escolha uma propriedade na lista. As primeiras pertencem a todos os elementos ({{ui:Classe}}, {{ui:Tipo}}, {{ui:Piso}}, {{ui:Material}}, {{ui:Nome}}…); as restantes vêm dos conjuntos de propriedades e dos conjuntos de quantidades do modelo, com o nome do conjunto. O número a seguir a cada uma indica quantos elementos a têm.
4. Leia a legenda: uma cor, o valor e quantos elementos o têm.
5. Clique num valor para mostrar apenas esses elementos. Mantenha {{key:Mod}} premido e clique para acrescentar mais valores. Prima {{key:Shift+H}} para voltar a mostrar tudo.
6. Clique em {{ui:Desligado}} para voltar às cores do próprio modelo.

## O que deve ver

- Até sete valores recebem cada um a sua cor, começando pelo mais comum. Mais valores do que isso partilham um cinzento, listados como **outros valores**.
- Um número com muitos valores diferentes é dividido em seis intervalos iguais, do claro (baixo) ao escuro (alto).
- Os elementos sem a propriedade ficam a cinzento pálido, listados como **Sem valor**, para que os coloridos se destaquem.
- As cores mudam com Papel e Modelo, e mantêm-se enquanto edita o modelo.
- A propriedade de um tipo conta para todos os elementos desse tipo; quando um elemento tem valor próprio para a mesma propriedade, o seu valor próprio prevalece.

## Alterar cores e guardá-las como esquema

- Clique na amostra de cor de um valor na legenda para escolher outra cor. O modelo é repintado de imediato.
- {{ui:Guardar esquema}} transfere as cores como um pequeno ficheiro `.json` com o nome da propriedade, por exemplo `Class colors.json`.
- Noutro modelo, ou no computador de um colega da equipa, clique em {{ui:Abrir esquema…}} e escolha esse ficheiro. Cada valor do esquema recebe a sua cor, pelo que a mesma classificação de resistência ao fogo ou o mesmo sistema tem a mesma cor em todos os modelos.
- Um valor que o esquema não tem é pintado de cinzento e listado como "não está no esquema"; os valores do esquema que este modelo não tem continuam listados com 0, para que veja o esquema completo.
- Um esquema guarda as suas cores nos dois temas. Escolher uma propriedade na lista volta a partir das cores automáticas.

## Erros comuns

- **"Este modelo não tem valores de …".** O esquema foi guardado para uma propriedade que este modelo não tem (um nome de conjunto de propriedades diferente, por exemplo). Abra um esquema feito para este tipo de modelo, ou escolha uma propriedade na lista.
- **Falta uma propriedade na lista.** Nenhum elemento com forma no modelo a tem. As propriedades dos próprios pisos e espaços não são listadas.
- **Tudo tem a mesma cor.** Todos os elementos têm o mesmo valor, ou nenhum: veja as contagens da legenda.

## Seguinte

- [Ocultar, isolar e tornar transparentes os elementos](topic:hide-and-isolate)
- [Orientar-se com a árvore do modelo](topic:model-tree)
