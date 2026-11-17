---
title: Medir na planta
summary: Clique em dois pontos na planta de um piso para ler a distância e as diferenças em X e Y, encadeie mais cliques para um total acumulado, e não guarde nada no modelo.
keywords: medir, planta, distância, cota, fita, total acumulado, encadear, dx, dy, reta, snap, extremidades de paredes, linhas de grelha, colunas, verificar um comprimento
from: 7235633f
---

## Objetivo

Verificar um comprimento na planta de um piso, como a largura de um compartimento ou a distância entre duas linhas de grelha, sem acrescentar nada ao modelo. Para medir na vista 3D, ver [Medir distâncias, áreas de faces e localizações em 3D](topic:measure).

## Passos

1. Mostre a planta do piso pretendido: {{ui:Planta}} para só a planta, ou {{ui:Dividir}}.
2. No grupo {{ui:Desenhar}}, clique em {{ui:Medir}}. Com só a planta visível, pode premir {{key:M}}.
3. Clique no primeiro ponto. Os pontos fazem snap a paredes, linhas de grelha e colunas.
4. Clique no segundo ponto. Uma linha de cota mostra a distância, e a linha de estado indica a distância com as diferenças em X e Y.
5. Para continuar a medir, clique num terceiro ponto. Cada troço é medido e o total é somado.
6. Mantenha {{key:Shift}} premida ao clicar para manter o troço alinhado com o anterior.
7. Prima {{key:Esc}} para limpar a medição, ou escolha outra ferramenta.

## Notas

- Nada é escrito no modelo, e a cota desaparece ao limpar. Para cotas que permaneçam, ver [Conjuntos de paredes e cotas de referência](topic:wall-assemblies).
- Com a vista 3D no ecrã, {{key:M}} continua a ser Medir (3D). {{key:Shift+M}} é Mover.
- A distância usa a unidade de visualização que escolheu em {{ui:Definições}}.
