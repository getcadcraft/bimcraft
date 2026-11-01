---
title: Iniciar uma edificação nova
summary: Crie um modelo de edificação em branco com seus níveis, desenhe as paredes, coloque itens da biblioteca e salve como IFC.
keywords: novo, nova edificação, em branco, vazio, começar do zero, modelo padrão, níveis, pavimentos, andares, criar, modelo
from: 546b8ae8
---

## O que você vai fazer

Iniciar um modelo de edificação do zero, em vez de abrir um. O BimCraft cria um modelo IFC em branco com um projeto, um terreno, a edificação e seus níveis. Você pode colocar equipamentos e mobiliário nos níveis a partir da biblioteca e salvar como arquivo IFC.

:::note
Já é possível desenhar paredes: veja [Desenhar paredes](topic:draw-walls). Portas, janelas, pisos e telhados são os próximos a ficar prontos.
:::

## Passos

1. Clique em {{ui:Nova edificação}} em **Abrir um arquivo ou pasta**, ou na página inicial.
2. Digite o **Nome da edificação**.
3. Escolha quantos **Níveis** ela tem (de 1 a 200).
4. Digite a **Altura do nível**, de piso a piso: por exemplo `10'-0"`, `10'6"` ou `3000 mm`. Um número simples é pés nos EUA e milímetros nos demais lugares.
5. Clique em {{ui:Criar}}. Os níveis são empilhados a partir de 0, cada um a uma altura de nível acima do anterior, e se chamam Nível 1, Nível 2 e assim por diante. Eles aparecem na árvore do modelo, e a planta do Nível 1 abre ao lado da vista 3D com {{ui:Desenhar}} ligado.
6. Desenhe as paredes: veja [Desenhar paredes](topic:draw-walls). Renomeie os níveis ou mude as alturas deles no painel **Níveis**.
7. Coloque itens: veja [Colocar equipamentos e mobiliário da biblioteca](topic:place-from-library). A barra de colocação lista todos os níveis.
8. Clique em {{ui:Salvar como IFC}}. O arquivo recebe o nome da edificação, por exemplo `Casa Silva.ifc`.

## Bom saber

- O modelo é salvo em milímetros, como IFC4. Outros programas BIM o abrem.
- **Pavimentos**, no painel esquerdo, lista somente os níveis que têm algo; a árvore do modelo lista todos.
- Até você salvar, a edificação nova conta como trabalho não salvo. O BimCraft pergunta antes de você abrir outro arquivo ou sair, e guarda uma cópia neste navegador caso a guia feche.
