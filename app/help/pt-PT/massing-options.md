---
title: Opções de volumetria lado a lado
summary: Mantenha várias opções de volumetria no mesmo modelo, torne uma a opção atual, verifique-a contra as linhas de construção e as servidões do local, traga volumetria do ModelCraft e desenvolva a opção escolhida em paredes e pavimentos.
keywords: volumetria, massa, opção, opções, conjunto de opções, esquema, conceito, desenho conceptual, fase 2, alternativas, comparar opções, opção atual, massa do edifício, push pull, modelcraft, civilcraft, área bruta de pavimento, implantação, volume, desenvolver massa, servidão, linha de construção, recuo
from: 69a01459
---

## Objetivo

Mantenha as opções de volumetria de um conceito num só modelo, em vez de em ficheiros separados: várias massas de edifício lado a lado, uma delas a **opção atual**, as outras guardadas para comparação.

Uma opção de volumetria é uma massa de edifício: um contorno elevado a uma altura, com um número de pisos. Ainda não são paredes. Pode guardar quantas quiser, agrupadas em **conjuntos de opções** (as opções de um conjunto são alternativas entre si).

## Guardar uma opção

1. Abra {{ui:Programa de compartimentos para volumetria}}, escreva o programa de compartimentos e o contorno, e escolha {{ui:Procurar opções}}.
2. Escolha uma das opções listadas.
3. Em {{ui:Opções de volumetria no modelo}}, escreva um nome para o {{ui:Conjunto de opções}}, se quiser um, e escolha {{ui:Manter a opção selecionada}}.

A opção aparece no modelo como uma massa de edifício e na lista, com os seus pisos, a área de implantação, a área bruta de pavimento e o volume. Nada é construído. Guarde outra do mesmo modo.

A primeira opção de um conjunto é a sua opção atual. Cada passo é uma única anulação.

## A opção atual

Uma opção de cada conjunto é a atual. Isso significa duas coisas:

- **Os seus pisos contam como as áreas de pavimento do edifício.** A opção atual tem um espaço por piso com a área bruta desse piso, pelo que qualquer coisa que leia áreas de pavimento vê a opção em vigor e nenhuma outra.
- **É verificada contra o local.** Se ficar fora do limite do terreno, sobre uma linha de construção ou sobre uma servidão, aparece um aviso que a nomeia em {{ui:Problemas}}. É apenas um aviso: nada é recusado. As opções que não são atuais não são verificadas.

Escolha {{ui:Tornar atual}} noutra opção para a mudar.

{{ui:Ocultar as opções que não são atuais}} oculta as restantes na vista 3D. Isto vale apenas para este navegador e não é guardado no ficheiro.

## Volumetria do ModelCraft

No ModelCraft, {{ui:Exportar}} › {{ui:Volumetria para BimCraft…}} envia cada grupo ou componente como uma opção. O BimCraft abre o ficheiro com as opções listadas.

Para as trazer para um modelo já aberto, escolha {{ui:Acrescentar opções de volumetria a partir de um ficheiro}} e selecione o ficheiro `.ifc`. As suas massas entram como opções de um conjunto, num só passo de anulação, na posição em que foram modeladas. Um ficheiro de massas de edifício do CivilCraft funciona da mesma forma.

Uma opção marcada «(forma simplificada)» não era um bloco vertical simples no ModelCraft (recua, tem inclinações ou não está fechada). A sua massa aqui é o contorno da base elevado à altura; as áreas dos pisos e o volume são os medidos a partir do próprio sólido.

## Desenvolver a opção escolhida

Escolha {{ui:Desenvolver}} numa opção. Ela passa a ser níveis (somados até ao seu número de pisos), paredes ao longo do contorno em cada piso e uma laje de pavimento em cada um, num só passo de anulação. A opção sai da lista; as outras mantêm-se como estavam. Ainda não há cobertura.

{{ui:Mudar o nome}} altera o nome de uma opção; {{ui:Remover}} tira-a do modelo. Remover a opção atual torna atual a primeira das outras do conjunto.

## Resultado esperado

- Cada opção guardada como um bloco na vista 3D e uma linha na lista.
- «(atual)» ao lado de uma opção de cada conjunto.
- Um aviso em {{ui:Problemas}} quando a opção atual cruza o limite do terreno, uma linha de construção ou uma servidão.

## Bom saber

- No ficheiro IFC, uma opção é um proxy de elemento de construção com o conjunto de propriedades `CadCraft_SiteMass` (o seu conjunto de opções, o nome da opção e se é a atual estão nesse conjunto). Os pisos da opção atual são espaços do tipo `MassingFloor`. Outros programas leem o proxy como um elemento genérico.
- Guardar uma opção nunca acrescenta níveis; desenvolvê-la, sim.
- Um assistente pode listar as opções guardadas, guardar uma, tornar uma atual, mudar-lhe o nome, desenvolvê-la ou removê-la.
