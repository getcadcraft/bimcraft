---
title: Localizar elementos por classe, nome ou propriedade
summary: Localize todos os elementos que correspondem a uma ou mais regras — sua classe, nome, tipo, pavimento, material ou qualquer valor de propriedade —, selecione todos e mantenha as regras como um conjunto de pesquisa nomeado.
keywords: localizar, pesquisar, filtrar, consulta, regra, conjunto de pesquisa, conjunto de seleção, pesquisa salva, propriedade, valor, classe, material, selecionar tudo
from: 3d293bc2
---

## O que você vai fazer

Selecione, em uma única etapa, todos os elementos de um tipo ou com um determinado valor: todas as portas, todas as paredes do Nível 2, todos os elementos cuja resistência ao fogo é EI60, todas as paredes cujo custo seja maior que um valor definido.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Find}} no painel esquerdo.
3. Na primeira regra, escolha uma propriedade (primeiro as próprias do elemento, como {{ui:Class}} e {{ui:Storey}}, depois os conjuntos de propriedades do modelo), como comparar e um valor. A caixa de valor sugere os valores que o modelo tem.
4. Para restringir, clique em {{ui:Add a rule}}. Escolha {{ui:Every rule}} para exigir todas, ou {{ui:Any rule}} para exigir uma delas.
5. Clique em {{ui:Find}}, ou pressione {{key:Enter}} em uma caixa de valor. Os elementos encontrados ficam selecionados.
6. Para manter as regras, clique em {{ui:Save as a set}}, digite um nome e clique nele de novo. Depois, clique no nome de um conjunto para localizar com ele.

## O que você deve ver

- Os elementos encontrados ficam selecionados na visualização 3D e na árvore do modelo, e {{ui:Properties}} informa quantos há por classe. Pressione {{key:I}} para mostrar somente eles, e {{key:H}} para ocultá-los.
- As palavras são encontradas sem diferenciar maiúsculas de minúsculas. Números são comparados como números: "é maior que 1000" compara o valor, não o texto.
- {{ui:has a value}} e {{ui:has no value}} não precisam de valor; encontram o que está preenchido ou o que falta.
- Os conjuntos salvos ficam neste navegador para todos os modelos que você abrir.

## Erros comuns

- **Nada é encontrado.** Uma regra precisa de um valor que possa corresponder: veja as sugestões na caixa de valor.
- **Uma propriedade não aparece na lista.** Nenhum elemento com forma neste modelo a possui.

## Próximos passos

- [Colorir elementos por uma propriedade](topic:color-by-property)
- [Ocultar, isolar e tornar elementos transparentes](topic:hide-and-isolate)
