---
title: Opções de volumetria lado a lado
summary: Mantenha várias opções de volumetria no mesmo modelo, defina uma como opção atual, verifique-a contra os recuos e servidões do terreno, importe volumetrias do ModelCraft e desenvolva a opção escolhida em paredes e pisos.
keywords: volumetria, massa, opção, opções, conjunto de opções, esquema, conceito, projeto conceitual, etapa 2, alternativas, comparar opções, opção atual, volume do edifício, empurrar e puxar, modelcraft, civilcraft, área bruta de piso, projeção, volume, desenvolver volumetria, servidão, recuo, linha de recuo
from: 69a01459
---

## O que você vai fazer

Mantenha as opções de volumetria de um conceito em um único modelo, em vez de em arquivos separados: várias massas do edifício lado a lado, uma delas como **opção atual**, e as demais mantidas para comparação.

Uma opção de volumetria é uma massa do edifício: um contorno elevado a uma altura, com determinado número de pavimentos. Ainda não são paredes. Você pode manter quantas quiser, agrupadas em **conjuntos de opções** (as opções de um mesmo conjunto são alternativas entre si).

## Manter uma opção

1. Abra {{ui:Programa de ambientes para volumetria}}, digite o programa de ambientes e o contorno, e escolha {{ui:Buscar opções}}.
2. Selecione uma das opções listadas.
3. Em {{ui:Opções de volumetria no modelo}}, digite um nome para o {{ui:Conjunto de opções}}, se quiser, e escolha {{ui:Manter a opção selecionada}}.

A opção aparece no modelo como uma massa do edifício e na lista, com seus pavimentos, projeção, área bruta de piso e volume. Nada é construído. Mantenha outra da mesma forma.

A primeira opção de um conjunto é a sua opção atual. Cada etapa pode ser desfeita de uma vez.

## A opção atual

Uma opção de cada conjunto é a atual. Isso significa duas coisas:

- **Seus pavimentos contam como as áreas de piso do edifício.** A opção atual tem um ambiente por pavimento, com a área bruta desse pavimento; assim, tudo o que lê áreas de piso enxerga a opção em vigor, e nenhuma outra.
- **Ela é verificada contra o terreno.** Se estiver fora do limite do terreno, sobre uma linha de recuo ou sobre uma servidão, um aviso que a identifica aparece em {{ui:Problemas}}. É apenas um aviso: nada é recusado. As opções que não são atuais não são verificadas.

Escolha {{ui:Tornar atual}} em outra opção para trocá-la.

{{ui:Ocultar as opções que não são atuais}} oculta as demais na vista 3D. Isso vale somente para este navegador e não é salvo no arquivo.

## Volumetria do ModelCraft

No ModelCraft, {{ui:Exportar}} › {{ui:Volumetria para o BimCraft…}} envia cada grupo ou componente como uma opção. O BimCraft abre o arquivo com as opções listadas.

Para trazê-las para um modelo já aberto, escolha {{ui:Adicionar opções de volumetria de um arquivo}} e selecione o arquivo `.ifc`. As massas entram como opções de um conjunto, em uma única etapa de desfazer, no lugar onde foram modeladas. Um arquivo de massas de edifício do CivilCraft funciona da mesma forma.

Uma opção marcada como "(forma simplificada)" não era um bloco reto no ModelCraft (ela recua, tem inclinação ou não é fechada). Aqui, sua massa é o contorno da base elevado à sua altura; suas áreas de piso e seu volume são os medidos no próprio sólido.

## Desenvolver a opção escolhida

Escolha {{ui:Desenvolver}} em uma opção. Ela se torna níveis (somados até o número de pavimentos), paredes ao redor do contorno em cada pavimento e uma laje de piso em cada um, em uma única etapa de desfazer. A opção sai da lista; as demais permanecem como estavam. Ainda não há cobertura.

{{ui:Renomear}} altera o nome de uma opção; {{ui:Remover}} a tira do modelo. Ao remover a opção atual, a primeira das demais opções do conjunto passa a ser a atual.

## O que você deve ver

- Cada opção mantida como um bloco na vista 3D e uma linha na lista.
- "(atual)" ao lado de uma opção de cada conjunto.
- Um aviso em {{ui:Problemas}} quando a opção atual cruza o limite do terreno, uma linha de recuo ou uma servidão.

## Bom saber

- No arquivo IFC, uma opção é um proxy de elemento de construção com o conjunto de propriedades `CadCraft_SiteMass` (seu conjunto de opções, nome da opção e se é a atual estão nesse conjunto). Os pavimentos da opção atual são ambientes do tipo `MassingFloor`. Outros programas leem o proxy como um elemento genérico.
- Manter uma opção nunca adiciona níveis; desenvolvê-la, sim.
- Um assistente pode listar as opções mantidas, manter uma, torná-la atual, renomeá-la, desenvolvê-la ou removê-la.
