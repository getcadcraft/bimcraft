---
title: Iniciar uma nova edificação
summary: Crie um modelo de edificação em branco com seus níveis, desenhe suas paredes, posicione itens da biblioteca e salve como IFC.
keywords: novo, nova edificação, em branco, vazio, começar do zero, modelo, pavimentos, níveis, andares, criar, modelo
from: 68786865
---

## O que você vai fazer

Comece um modelo de edificação do zero, em vez de abrir um existente. O BimCraft cria um modelo IFC em branco com um projeto, um terreno, a edificação e seus níveis. Você pode posicionar equipamentos e mobiliário nos níveis a partir da biblioteca e salvar o modelo como um arquivo IFC.

:::note
Paredes já podem ser desenhadas: veja [Desenhar paredes](topic:draw-walls). Portas, janelas, lajes e telhados estão sendo desenvolvidos a seguir.
:::

## Passos

1. Clique em {{ui:Nova edificação}} em **Abrir um arquivo ou pasta**, ou na página inicial.
2. Digite o **Nome da edificação**.
3. Escolha quantos **Níveis** ela tem (de 1 a 200).
4. Digite a **Altura do nível**, de piso a piso: por exemplo `10'-0"`, `10'6"` ou `3000 mm`. Um número simples é em pés nos EUA e em milímetros no restante do mundo.
5. Todos os campos já vêm preenchidos, então você pode deixá-los como estão. Abaixo deles, a caixa mostra com o que você começa: as unidades, o **Tipo de parede** que a ferramenta Parede desenha primeiro (escolha outro na lista, se quiser) e a primeira folha.
6. Clique em {{ui:Criar}}. Os níveis são empilhados a partir de 0, cada um a uma altura de nível acima do anterior, e recebem os nomes Nível 1, Nível 2 e assim por diante. Eles aparecem na {{ui:Árvore do modelo}}, e a planta do Nível 1 abre ao lado da vista 3D com {{ui:Desenhar}} ativado.
7. Desenhe as paredes: clique em {{ui:Parede}} e depois em dois pontos. Veja [Desenhar paredes](topic:draw-walls). Renomeie os níveis ou altere suas alturas no painel **Níveis**.
8. Posicione os itens: veja [Posicionar equipamentos e mobiliário da biblioteca](topic:place-from-library). A barra de posicionamento lista todos os níveis.
9. Clique em {{ui:Salvar como IFC}}. O arquivo recebe o nome da edificação, por exemplo `Smith's house.ifc`.

## Bom saber

- O modelo é salvo em milímetros, como IFC4. Outros programas BIM o abrem.
- Uma nova edificação vem com uma folha, **A-101**, que contém a planta do nível mais baixo: A3 na escala 1:100 quando você trabalha em unidades métricas, Tabloide em 1/8" = 1'-0" caso contrário. Ela fica vazia até a primeira parede e depois mostra a planta conforme você desenha. Abra-a em **Folhas** no navegador do projeto para alterar seu papel, sua escala ou sua legenda, adicionar vistas ou excluí-la. Uma edificação iniciada a partir de um modelo traz as folhas do modelo.
- Para mudar o que toda nova edificação começa com (o tipo de parede para projetos métricos, os níveis, a primeira folha, a ferramenta ativa após Criar), veja [Políticas padrão](topic:default-policies).
- Nada precisa ser configurado antes da primeira parede. O tipo de parede, as alturas dos níveis, as unidades e a folha podem ser alterados depois.
- **Pavimentos** no painel da esquerda lista apenas os níveis que têm algo neles; a árvore do modelo lista todos.
- Até você salvar, a nova edificação conta como trabalho não salvo. O BimCraft pergunta antes de abrir outro arquivo ou sair, e guarda uma cópia neste navegador caso a aba seja fechada.
