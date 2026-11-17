---
title: Famílias e os seus tamanhos
summary: Portas, janelas e mobiliário vêm em famílias. Cada tamanho de uma família é um tipo no ficheiro IFC, por isso a lista de tipos fica curta no BimCraft enquanto os outros programas leem tipos simples.
keywords: família, famílias, tipo, tipos, tamanho, tamanhos, tipo de porta, tipo de janela, mobiliário, mesa, estante, armário, novo tamanho, duplicar, colocar família, ficheiro de família, ccfamily, biblioteca IFC, biblioteca de projeto, grupo, visibilidade, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## O que é uma família

Uma família é um tipo de objeto em vários tamanhos: uma porta de batente simples que existe com 32, 36 e 42 polegadas de largura, ou uma mesa que existe comprida e curta. No BimCraft vê-se a família uma vez, com os seus tamanhos por baixo, em vez de uma longa lista de tipos.

O IFC não tem famílias. No ficheiro, cada tamanho é um tipo normal (um tipo de porta, de janela, de mobiliário…), e a família é um grupo que lista os seus tamanhos. Outros programas BIM leem os tipos e o grupo tal como estão; o BimCraft reconstrói a família a partir deles.

## Onde encontrá-las

- O grupo **Famílias** do navegador do projeto lista as famílias deste modelo, com o número de tamanhos de cada uma e quantas estão colocadas. Por baixo estão as **Famílias iniciais**: as portas e janelas das ferramentas Porta e Janela, e uma mesa, uma estante e um armário de base.
- {{ui:Build}} › {{ui:Families…}} mostra a mesma lista numa janela.
- Clique numa família para a abrir: os seus tamanhos, os valores de cada tamanho e quantos elementos usa cada um.

## Portas e janelas

As ferramentas Porta e Janela listam as famílias desse tipo e, ao lado, uma **lista de tamanhos**. Escolha um tamanho ou escreva **W** e **H**: uma largura e uma altura que nenhum tamanho tem ainda tornam-se um novo tamanho da família quando coloca a porta. As portas do mesmo tamanho partilham um tipo.

Em {{ui:Properties}}, uma porta ou janela selecionada mostra a sua **Família** e o **Tamanho**. Escolha outro tamanho da lista, ou escreva uma nova largura ou altura. {{ui:Open the family}} abre a família a que pertence.

O aro de cada porta ou janela segue a espessura da sua própria parede, como antes das famílias. O tipo do tamanho também guarda a porta desenhada numa parede de 140 mm, para os programas que leem tipos.

## Novo tamanho desta família

1. Abra a família.
2. Em **Novo tamanho desta família**, escreva os seus valores (Largura, Altura e os restantes parâmetros da família) e, se quiser, um nome. Sem nome, é designado pelos seus valores.
3. Clique em {{ui:Make the size}}.

Dois tamanhos não podem ter os mesmos valores. **Renomear** muda o nome de um tamanho; **Remover** elimina um tamanho que ninguém usa; **Selecionar** escolhe os elementos desse tamanho.

## Colocar mobiliário

1. {{ui:Build}} › {{ui:Place family}}, ou {{ui:Place}} na janela de uma família.
2. Na barra, escolha a família e o seu tamanho.
3. Clique na planta para o colocar no piso. Prima {{key:R}} para o rodar 90° antes de clicar. {{key:Esc}} termina.

As {{ui:Properties}} de uma peça colocada mostram o seu tamanho, onde está e quanto está rodada; {{key:Delete}} remove-a. Todas as peças de um tamanho partilham a forma desse tamanho, por isso alterar a família altera todas elas.

## Tamanhos a partir de uma tabela

{{ui:Sizes from a table…}} na janela de uma família lê um ficheiro CSV (vírgula, ponto e vírgula ou tabulação). A primeira linha dá o nome às colunas: o nome ou rótulo de um parâmetro e, opcionalmente, `Name`. Os comprimentos estão em milímetros, a menos que escreva uma unidade (`1.2 m`, `36 in`). As colunas Sim / Não aceitam yes, no, true, false, 1 ou 0, e um parâmetro sem coluna mantém o seu valor predefinido. Cada linha torna-se um tamanho, num único passo que pode anular; um tamanho que já existe é ignorado. Uma linha que não se lê, ou que a família não consegue desenhar, recusa a tabela inteira e indica a sua linha. No máximo 200 linhas e 1 MB. {{ui:Save the sizes as a table}} escreve a mesma tabela de volta.

## Definir em cada elemento

Um parâmetro marcado como **Por elemento** no editor (um Sim / Não que acrescenta uma travessa, um rótulo, um material) não faz parte de um tamanho: duas portas do mesmo tamanho podem ser diferentes. Escolha o elemento e as {{ui:Properties}} mostram estes parâmetros; altere um deles e esse elemento é desenhado de novo com a sua própria forma (o mobiliário e os equipamentos fixos recebem uma forma própria; as portas e janelas são refeitas nas suas paredes). Se repuser todos para os valores predefinidos, volta à forma do seu tamanho.

## Nível de detalhe

{{ui:Build}} › {{ui:Families…}} › **Nível de detalhe** define, para todas as famílias do modelo, o que é guardado nos sólidos e desenhado nos símbolos de planta: **Fino** mantém tudo, **Médio** e **Grosso** deixam de fora as peças que o editor marca como mais finas (ficheiros menores, vistas mais rápidas). **Automático** guarda tudo e deixa a vista de uma folha escolher pela sua escala: 1:50 e maiores finos, 1:100 médio, 1:200 e menores grosso. Um passo que pode anular.

## Duplicar uma família

Não tem de começar do zero. {{ui:Duplicate}} copia uma família com os seus parâmetros, sólidos e tamanhos, com um novo nome. Altere a cópia no editor; a original fica como estava.

## Ficheiros de família

- {{ui:Save the family file}} guarda um `.ccfamily.json`: os parâmetros, sólidos e tamanhos da família. Abra-o noutro modelo com {{ui:Open a family file…}} no grupo Famílias.
- {{ui:Save as IFC}} guarda a família como um pequeno ficheiro IFC: os tipos dos seus tamanhos e o seu grupo, declarados por uma biblioteca de projeto IFC. Outros programas abrem-no como um conjunto de tipos; o BimCraft abre-o de novo como família.

Um ficheiro de família aberto aqui é lido como dados e verificado antes de se escrever qualquer coisa. Uma família cuja chave já existe no modelo entra como família separada. Uma família que contém outras (veja Famílias incluídas na ajuda do editor) traz consigo as outras: o ficheiro lista-as, e o modelo mantém as que já tem.

## Famílias na Biblioteca

Abra {{ui:Families…}} e escolha {{ui:From the Library…}} para ver as famílias partilhadas na Biblioteca. {{ui:Add to this project}} lê uma delas como um ficheiro de família: o BimCraft verifica cada campo antes de criar seja o que for, a família entra como família própria e abre-se no editor. Adicioná-la é um único passo de anulação. Para partilhar as suas, use {{ui:Save all as a library}} e envie o ficheiro para a Biblioteca (a equipa da Biblioteca publica um ficheiro de família com um comando, e cada família é um item próprio com os seus tamanhos). Se a Biblioteca não estiver acessível, a lista indica-o e nada muda.

## Tipos de outros programas

Os tipos feitos por outros programas também aparecem no grupo Famílias, agrupados por uma estimativa: pela parte dos nomes dos seus elementos antes do primeiro dois-pontos, ou então por nomes de tipo que diferem apenas nos números. A janela da família indica a estimativa usada. São listados e pode selecionar os seus elementos, mas não são editados aqui: não têm receita de família.

:::note
As portas e janelas iniciais são desenhadas exatamente como eram antes das famílias. Os ficheiros feitos antes das famílias abrem sem alterações: as suas portas e janelas aparecem sob a família com os tamanhos em uso, e passam para um tamanho próprio na primeira vez que as alterar.
:::

Veja também [Editar uma família](topic:family-editor) e [Portas e janelas](topic:doors-and-windows).
