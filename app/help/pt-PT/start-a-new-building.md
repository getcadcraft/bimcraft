---
title: Iniciar um novo edifício
summary: Crie um modelo de edifício em branco com os seus níveis, desenhe as suas paredes, coloque itens da biblioteca e guarde-o como IFC.
keywords: novo, novo edifício, em branco, vazio, começar do zero, modelo, níveis, pisos, andares, lajes, criar, modelo
from: 68786865
---

## O que vai fazer

Comece um modelo de edifício a partir do zero, em vez de abrir um. O BimCraft cria um modelo IFC em branco com um projeto, um terreno, o edifício e os seus níveis. Pode colocar equipamento e mobiliário nos níveis a partir da biblioteca e guardar o modelo como ficheiro IFC.

:::note
As paredes já podem ser desenhadas: veja [Desenhar paredes](topic:draw-walls). Portas, janelas, lajes e coberturas serão as próximas.
:::

## Passos

1. Clique em {{ui:New building}} em **Abrir um ficheiro ou pasta**, ou na página inicial.
2. Escreva o **Nome do edifício**.
3. Escolha quantos **Níveis** tem (de 1 a 200).
4. Escreva a **Altura do nível**, de piso a piso: por exemplo `10'-0"`, `10'6"` ou `3000 mm`. Um número simples é em pés nos EUA e em milímetros nos outros locais.
5. Todos os campos já estão preenchidos, por isso pode deixá-los como estão. Por baixo, a caixa indica com o que começa: as unidades, o **Tipo de parede** que a ferramenta Parede desenha primeiro (escolha outro da lista, se quiser) e a primeira folha.
6. Clique em {{ui:Create}}. Os níveis são empilhados a partir de 0, cada um a uma altura de nível acima do anterior, e chamam-se Nível 1, Nível 2 e assim por diante. Aparecem na árvore do modelo, e a planta do Nível 1 abre ao lado da vista 3D com {{ui:Draw}} ativo.
7. Desenhe as paredes: clique em {{ui:Wall}} e depois em dois pontos. Veja [Desenhar paredes](topic:draw-walls). Pode mudar o nome dos níveis ou as suas alturas no painel **Níveis**.
8. Coloque os itens: veja [Colocar equipamento e mobiliário a partir da biblioteca](topic:place-from-library). A barra de colocação lista todos os níveis.
9. Clique em {{ui:Save as IFC}}. O ficheiro toma o nome do edifício, por exemplo `Smith's house.ifc`.

## Bom saber

- O modelo é guardado em milímetros, como IFC4. Outros programas BIM conseguem abri-lo.
- Um novo edifício vem com uma folha, **A-101**, com a planta do nível mais baixo: A3 à escala 1:100 quando trabalha em unidades métricas, Tabloid a 1/8" = 1'-0" nos outros casos. Fica vazia até à primeira parede e depois mostra a planta à medida que desenha. Abra-a em **Folhas** no navegador do projeto para alterar o seu formato, escala ou legenda, acrescentar vistas ou eliminá-la. Um edifício iniciado a partir de um modelo traz, em vez disso, as folhas desse modelo.
- Para alterar o que todo o novo edifício começa com (o tipo de parede em projetos métricos, os níveis, a primeira folha, a ferramenta ativa depois de Criar), veja [Políticas predefinidas](topic:default-policies).
- Não é preciso configurar nada antes da primeira parede. O tipo de parede, as alturas dos níveis, as unidades e a folha podem ser alterados mais tarde.
- **Pisos** no painel da esquerda lista apenas os níveis com algo neles; a árvore do modelo lista-os todos.
- Até guardar, o novo edifício conta como trabalho não guardado. O BimCraft pergunta antes de abrir outro ficheiro ou sair, e guarda uma cópia neste navegador caso o separador feche.
