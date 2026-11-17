---
title: Famílias e seus tamanhos
summary: Portas, janelas e mobiliário vêm em famílias. Cada tamanho de uma família é um tipo no arquivo IFC, então a lista de tipos fica curta no BimCraft enquanto outros programas leem tipos simples.
keywords: família, famílias, tipo, tipos, tamanho, tamanhos, tipo de porta, tipo de janela, mobiliário, mesa, prateleira, armário, novo tamanho, duplicar, colocar família, arquivo de família, ccfamily, biblioteca IFC, biblioteca do projeto, grupo, visibilidade, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## O que é uma família

Uma família é um tipo de coisa em vários tamanhos: uma porta de giro simples que vem com 32, 36 e 42 in de largura, ou uma mesa que vem comprida e curta. No BimCraft você vê a família uma vez, com seus tamanhos abaixo dela, em vez de uma longa lista de tipos.

O IFC não tem famílias. No arquivo, cada tamanho é um tipo comum (um tipo de porta, de janela, de mobiliário…), e a família é um grupo que lista seus tamanhos. Outros programas BIM leem os tipos e o grupo como estão; o BimCraft lê a família de volta a partir deles.

## Onde encontrá-las

- O grupo **Famílias** do navegador de projeto lista as famílias deste modelo, com quantos tamanhos cada uma tem e quantas estão colocadas. Abaixo delas estão as **Famílias iniciais**: as portas e janelas das ferramentas Porta e Janela, e uma mesa, uma estante e um armário base.
- {{ui:Build}} › {{ui:Families…}} mostra a mesma lista em uma janela.
- Clique em uma família para abri-la: seus tamanhos, os valores de cada tamanho e quantos elementos usam cada um.

## Portas e janelas

As ferramentas Porta e Janela listam as famílias desse tipo e, ao lado delas, uma **lista de tamanhos**. Escolha um tamanho, ou digite **W** e **H**: uma largura e altura que nenhum tamanho tem ainda se torna um novo tamanho da família quando você coloca a porta. Portas do mesmo tamanho compartilham um tipo.

Nas {{ui:Properties}}, uma porta ou janela selecionada mostra sua **Família** e seu **Tamanho**. Escolha outro tamanho da lista, ou digite uma nova largura ou altura. {{ui:Open the family}} abre a família a que ela pertence.

A moldura de cada porta ou janela acompanha a espessura da própria parede, como antes das famílias. O tipo do tamanho também mantém a porta desenhada em uma parede de 140 mm, para programas que leem tipos.

## Novo tamanho a partir desta família

1. Abra a família.
2. Em **Novo tamanho a partir desta família**, digite os valores (Largura, Altura e os demais parâmetros da família) e, se quiser, um nome. Sem nome, ele recebe um nome a partir dos valores.
3. Clique em {{ui:Make the size}}.

Dois tamanhos não podem ter os mesmos valores. **Renomear** muda o nome de um tamanho; **Remover** retira um tamanho que ninguém usa; **Selecionar** escolhe os elementos daquele tamanho.

## Colocar mobiliário

1. {{ui:Build}} › {{ui:Place family}}, ou {{ui:Place}} na janela de uma família.
2. Na barra, escolha a família e o tamanho.
3. Clique na planta para colocá-lo no nível. Pressione {{key:R}} para girá-lo 90° antes de clicar. {{key:Esc}} encerra.

As **Propriedades** de uma peça colocada mostram seu tamanho, onde ela está e quanto está girada; {{key:Delete}} a remove. Cada peça de um tamanho compartilha a forma desse tamanho, então alterar a família altera todas elas.

## Tamanhos a partir de uma tabela

{{ui:Sizes from a table…}} na janela de uma família lê um arquivo CSV (vírgula, ponto e vírgula ou tabulação). A primeira linha nomeia as colunas: o nome ou rótulo de um parâmetro e, opcionalmente, `Name`. Comprimentos são em milímetros, a menos que você escreva uma unidade (`1.2 m`, `36 in`). Colunas Sim / Não aceitam yes, no, true, false, 1 ou 0, e um parâmetro sem coluna mantém seu padrão. Cada linha vira um tamanho, em um único passo que você pode desfazer; um tamanho que já existe é ignorado. Uma linha que não pode ser lida, ou que a família não consegue desenhar, recusa a tabela inteira e indica sua linha. No máximo 200 linhas e 1 MB. {{ui:Save the sizes as a table}} grava a mesma tabela de volta.

## Definido em cada elemento

Um parâmetro marcado como **Por elemento** no editor (um Sim / Não que adiciona uma bandeira, uma etiqueta ou um material) não faz parte de um tamanho: duas portas do mesmo tamanho podem ser diferentes. Escolha o elemento e as **Propriedades** mostram esses parâmetros; altere um e esse elemento é desenhado de novo com sua própria forma (mobiliário e louças ganham uma forma própria; portas e janelas são refeitas nas suas paredes). Redefina todos para o padrão e ele volta à forma do seu tamanho.

## Nível de detalhe

{{ui:Build}} › {{ui:Families…}} › **Nível de detalhe** define, para cada família do modelo, o que é salvo nos sólidos e desenhado nos símbolos de planta: **Fino** mantém tudo, **Médio** e **Grosso** deixam de fora as partes que o editor marca como mais finas (arquivos menores, vistas mais rápidas). **Automático** salva tudo e deixa a vista de uma folha escolher pela escala: 1:50 e maiores, finos; 1:100, médio; 1:200 e menores, grosso. Um passo que você pode desfazer.

## Duplicar uma família

Você não precisa começar do zero. {{ui:Duplicate}} copia uma família com seus parâmetros, sólidos e tamanhos, sob um novo nome. Altere a cópia no editor; a original permanece como estava.

## Arquivos de família

- {{ui:Save the family file}} salva um `.ccfamily.json`: os parâmetros, sólidos e tamanhos da família. Abra-o em outro modelo com {{ui:Open a family file…}} no grupo Famílias.
- {{ui:Save as IFC}} salva a família como um pequeno arquivo IFC: os tipos dos seus tamanhos e o seu grupo, declarados por uma biblioteca de projeto IFC. Outros programas o abrem como um conjunto de tipos; o BimCraft o abre de novo como a família.

Um arquivo de família aberto aqui é lido como dados e verificado antes que qualquer coisa seja gravada. Uma família cuja chave já está no modelo entra como uma família separada. Uma família que contém outras (veja Famílias internas, na ajuda do editor) traz as outras consigo: o arquivo as lista, e o modelo mantém as que já tem.

## Famílias na Biblioteca

Abra {{ui:Families…}} e escolha {{ui:From the Library…}} para ver as famílias compartilhadas na Biblioteca. {{ui:Add to this project}} lê uma delas como um arquivo de família: o BimCraft verifica cada campo antes de criar qualquer coisa, a família entra como uma família própria e abre no editor. Adicioná-la é um passo que você pode desfazer. Para compartilhar a sua, use {{ui:Save all as a library}} e envie o arquivo para a Biblioteca (a equipe da Biblioteca publica um arquivo de família com um comando, e cada família vira um item próprio com seus tamanhos). Se a Biblioteca não puder ser acessada, a lista informa isso e nada muda.

## Tipos de outros programas

Tipos criados por outros programas também aparecem no grupo Famílias, agrupados por uma estimativa: pela parte do nome dos seus elementos antes do primeiro dois-pontos, ou então por nomes de tipo que diferem apenas nos números. A janela da família diz qual estimativa foi usada. Eles são listados, e você pode selecionar seus elementos, mas não são editados aqui: não têm uma receita de família.

:::note
As portas e janelas iniciais são desenhadas exatamente como eram antes das famílias. Arquivos feitos antes das famílias abrem sem alterações: suas portas e janelas aparecem sob a família, com os tamanhos em uso, e passam para um tamanho próprio na primeira vez que você as altera.
:::

Veja também [Editar uma família](topic:family-editor) e [Portas e janelas](topic:doors-and-windows).
