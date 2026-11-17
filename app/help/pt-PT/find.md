---
title: Procurar elementos por classe, nome ou propriedade
summary: Procure todos os elementos que correspondem a uma ou mais regras (a sua classe, nome, tipo, piso, material ou qualquer valor de propriedade), selecione-os todos e guarde as regras como um conjunto de pesquisa com nome.
keywords: procurar, pesquisar, filtrar, consulta, regra, conjunto de pesquisa, conjunto de seleção, pesquisa guardada, propriedade, valor, classe, material, selecionar tudo
from: 3d293bc2
---

## O que vai fazer

Selecione de uma só vez todos os elementos de um tipo ou com um determinado valor: todas as portas, todas as paredes do Nível 2, todos os elementos com resistência ao fogo EI60, todas as paredes que custam mais do que um determinado montante.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Procurar}} no painel esquerdo.
3. Na primeira regra, escolha uma propriedade (primeiro as próprias do elemento, como {{ui:Classe}} e {{ui:Piso}}, depois os conjuntos de propriedades do modelo), a forma de comparação e um valor. A caixa de valor sugere os valores que o modelo tem.
4. Para restringir a pesquisa, clique em {{ui:Adicionar uma regra}}. Escolha {{ui:Todas as regras}} para exigir todas, ou {{ui:Qualquer regra}} para exigir apenas uma delas.
5. Clique em {{ui:Procurar}} ou prima {{key:Enter}} numa caixa de valor. Os elementos que correspondem ficam selecionados.
6. Para guardar as regras, clique em {{ui:Guardar como conjunto}}, escreva um nome e clique de novo. Mais tarde, clique no nome de um conjunto para procurar com ele.

## O que deve ver

- Os elementos correspondentes selecionados na vista 3D e na árvore do modelo, e em {{ui:Propriedades}} indicação de quantos são, por classe. Prima {{key:I}} para mostrar apenas estes, {{key:H}} para os ocultar.
- As palavras correspondem sem distinguir maiúsculas de minúsculas. Os números comparam-se como números: «é mais do que 1000» refere-se ao valor, não ao texto.
- {{ui:tem valor}} e {{ui:não tem valor}} não precisam de valor; encontram o que está preenchido ou em falta.
- Os conjuntos guardados ficam neste navegador para todos os modelos que abrir.

## Erros comuns

- **Não se encontra nada.** Uma regra precisa de um valor que possa corresponder: veja as sugestões na caixa de valor.
- **Uma propriedade não aparece na lista.** Nenhum elemento com forma neste modelo a tem.

## Seguinte

- [Colorir elementos por uma propriedade](topic:color-by-property)
- [Ocultar, isolar e tornar transparentes os elementos](topic:hide-and-isolate)
