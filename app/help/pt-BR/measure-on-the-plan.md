---
title: Medir na planta
summary: Clique em dois pontos na planta de um nível para ler a distância e as diferenças em X e Y, encadeie mais cliques para um total acumulado e não guarde nada no modelo.
keywords: medir, planta, distância, cota, fita, total acumulado, encadear, dx, dy, reta, snap, extremidades de parede, linhas de grade, pilares, verificar um comprimento
from: 7235633f
---

## O que você vai fazer

Confira um comprimento na planta de um nível, como a largura de um ambiente ou a distância entre duas linhas de grade, sem adicionar nada ao modelo. Para medir na vista 3D, veja [Medir distâncias, áreas de faces e localizações em 3D](topic:measure).

## Etapas

1. Exiba a planta do nível desejado: {{ui:Planta}} para somente a planta, ou {{ui:Dividir}}.
2. No grupo {{ui:Desenhar}}, clique em {{ui:Medir}}. Com somente a planta exibida, você pode pressionar {{key:M}} em vez disso.
3. Clique no primeiro ponto. Os pontos fazem snap em paredes, linhas de grade e pilares.
4. Clique no segundo ponto. Uma linha de cota mostra a distância, e a barra de status informa a distância junto com as diferenças em X e Y.
5. Para continuar medindo, clique em um terceiro ponto. Cada trecho é medido e o total é somado.
6. Mantenha {{key:Shift}} pressionada ao clicar para manter o trecho reto em relação ao anterior.
7. Pressione {{key:Esc}} para limpar a medição, ou escolha outra ferramenta.

## Notas

- Nada é gravado no modelo, e a cota desaparece ao limpá-la. Para cotas que permanecem, veja [Conjuntos de parede e cotas de referência](topic:wall-assemblies).
- Com a vista 3D na tela, {{key:M}} continua sendo Medir em 3D. {{key:Shift+M}} é Mover.
- A distância usa a unidade de exibição escolhida em {{ui:Configurações}}.
