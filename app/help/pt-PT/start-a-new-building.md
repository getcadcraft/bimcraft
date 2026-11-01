---
title: Iniciar um edifício novo
summary: Criar um modelo de edifício em branco com os seus níveis, desenhar as paredes, colocar itens da biblioteca e guardá-lo como IFC.
keywords: novo, novo edifício, em branco, vazio, começar do zero, modelo de documento, níveis, pisos, pavimentos, criar, modelo
from: 546b8ae8
---

## O que vai fazer

Começar um modelo de edifício do nada, em vez de abrir um existente. O BimCraft cria um modelo IFC em branco com um projeto, um terreno, o edifício e os seus níveis. Pode colocar equipamento e mobiliário nos níveis a partir da biblioteca e guardar o resultado como ficheiro IFC.

:::note
Já é possível desenhar paredes: consulte [Desenhar paredes](topic:draw-walls). As portas, as janelas, os pavimentos e as coberturas são o passo seguinte.
:::

## Passos

1. Clique em {{ui:Novo edifício}} em **Abrir um ficheiro ou pasta**, ou na página inicial.
2. Escreva o **Nome do edifício**.
3. Escolha o número de **Níveis** (1 a 200).
4. Escreva a **Altura do nível**, de pavimento a pavimento: por exemplo `10'-0"`, `10'6"` ou `3000 mm`. Um número simples são pés nos EUA e milímetros nos restantes países.
5. Clique em {{ui:Criar}}. Os níveis são empilhados a partir de 0, cada um à altura de um nível acima do anterior, e chamam-se Nível 1, Nível 2 e assim por diante. Aparecem na árvore do modelo, e a planta do Nível 1 abre-se ao lado da vista 3D com {{ui:Desenhar}} ligado.
6. Desenhe as paredes: consulte [Desenhar paredes](topic:draw-walls). Mude o nome dos níveis ou as suas alturas no painel **Níveis**.
7. Coloque itens: consulte [Colocar equipamento e mobiliário a partir da biblioteca](topic:place-from-library). A barra de colocação lista todos os níveis.
8. Clique em {{ui:Guardar como IFC}}. O ficheiro tem o nome do edifício, por exemplo `Casa Smith.ifc`.

## Bom saber

- O modelo é guardado em milímetros, como IFC4. Outros programas BIM abrem-no.
- **Pisos** no painel da esquerda lista apenas os níveis que têm algo; a árvore do modelo lista-os todos.
- Até guardar, o edifício novo conta como trabalho não guardado. O BimCraft pergunta antes de abrir outro ficheiro ou de sair, e mantém uma cópia neste navegador caso o separador se feche.
