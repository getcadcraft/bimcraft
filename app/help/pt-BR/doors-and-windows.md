---
title: Portas e janelas
summary: Coloque portas e janelas em paredes desenhadas: aponte para uma parede, veja o sentido de abertura e as distâncias até os cantos, clique; a abertura na parede se recorta sozinha.
keywords: porta, portas, janela, janelas, abertura, sentido de abertura, dobradiça, lado de abertura, inverter, porta de correr, porta embutida, porta de garagem, porta dupla, janela de abrir, janela de guilhotina simples, janela de guilhotina dupla, janela de correr, janela fixa, peitoril, verga, porta dobrável, portas francesas, porta celeiro, painéis laterais, porta de entrada, maxim-ar, janela panorâmica, bandeira
from: 4d8ac009
---

## O que você vai fazer

Coloque portas e janelas em paredes que você desenhou ([Desenhar paredes](topic:draw-walls)). Aponte para uma parede e a porta ou a janela mostra onde iria, para qual lado abre e a que distância está de cada canto. Clique, e a abertura se recorta sozinha na parede, na planta e no 3D.

## Colocar uma porta

1. Com {{ui:Desenhar}} ativado, clique em {{ui:Porta}} (ou pressione {{key:D}}).
2. Escolha o tipo: **Porta de abrir simples**, **Porta dupla de abrir**, **Porta de correr**, **Porta embutida**, **Porta de garagem**, **Porta dobrável de armário**, **Portas francesas**, **Porta de correr sobre a parede (tipo celeiro)** ou **Porta de entrada com painéis laterais**. Seu tamanho usual preenche **L** e **A**; escolha outro na lista de tamanhos ao lado, ou digite outros, por exemplo `2'-8"` ou `800`. A lista também oferece as famílias de portas deste modelo (veja [Famílias e seus tamanhos](topic:families)).
3. Aponte para uma parede. O símbolo da porta acompanha o ponteiro ao longo da parede, e a distância de cada extremidade dessa face aparece na planta.
4. A porta abre para o lado da parede em que o ponteiro está. Pressione {{key:H}} (ou clique em {{ui:Inverter}}) para pôr as dobradiças na outra extremidade.
5. Clique. A porta é colocada e a ferramenta continua ativa para a próxima. Aponte para o meio de uma parede e a porta se centraliza sozinha.

Para colocá-la a uma distância exata, aponte para a parede perto do canto de onde você mede, digite a distância (por exemplo `2'` ou `600`) e pressione {{key:Enter}}. A distância vai da extremidade mais próxima da face da parede até a borda da porta.

## Colocar uma janela

1. Clique em {{ui:Janela}} (ou pressione {{key:N}}).
2. Escolha o tipo: **Janela fixa**, **Janela de guilhotina simples**, **Janela de guilhotina dupla**, **Janela de abrir**, **Janela de correr**, **Maxim-ar**, **Janela panorâmica** ou **Bandeira**, e sua **L**, **A** e **Peitoril** (a altura da parte de baixo da janela acima do piso).
3. Aponte para uma parede e clique, ou digite uma distância e pressione {{key:Enter}}, como nas portas. Uma janela fica no lado externo da parede.

## Mover, inverter, excluir

- Com {{ui:Selecionar}} ativado, arraste uma porta ou janela ao longo da parede. Arraste-a para outra parede para movê-la para lá.
- {{key:Delete}} exclui as portas e janelas escolhidas; a parede se fecha.
- Mover ou excluir uma parede move ou exclui o que há nela. Quando o início de uma parede se move ao longo da própria linha, suas portas e janelas mantêm o lugar.
- {{ui:Desfazer}} e {{ui:Refazer}} desfazem e refazem cada colocação, movimento ou exclusão.

## O que é recusado

- **Não cabe nessa parede.** A porta ou janela é mais larga que a parede, ou sairia por uma das extremidades. Tente uma largura menor ou uma parede mais comprida.
- **É mais alta que a parede.** O peitoril mais a altura passam do topo da parede.

## O que é salvo

Cada porta ou janela é uma porta ou janela IFC com seu tamanho, operação (por exemplo, abrir simples à esquerda), seu tipo de tamanho (um tipo para cada tamanho da sua família), `Pset_DoorCommon` ou `Pset_WindowCommon` e quantidades base, preenchendo uma abertura IFC na sua parede. A área líquida lateral e o volume da parede deixam a abertura de fora. Outros programas BIM a abrem como uma porta em uma parede.

## Bom saber

- A planta mostra as portas abertas a 90° com seu sentido, portas de correr como dois painéis, portas embutidas deslizando para dentro da parede, portas de garagem como linha tracejada no alto, e janelas com seu caixilho e linhas de vidro.
- A largura é a largura total do caixilho; a folha da porta é a largura menos os dois batentes.
- Copiar portas e janelas desenhadas ainda não está implementado: coloque outra.

## Janela de saída de emergência do porão e poço

Escolha **Saída de emergência do porão com poço** na lista de tipos de janela. Ela começa como uma janela de abrir de 36 × 48 in, com peitoril 36 in acima do nível. O poço fica do lado externo da parede, com pelo menos 48 in de largura livre, 36 in de projeção e fundo 6 in abaixo do peitoril. Aparece como linhas tracejadas na planta e como três lados abertos no topo no 3D. O poço faz parte do corpo IFC da janela, então salvar, mover, redimensionar ou excluir a janela leva o poço junto. Ao redimensionar, mantêm-se pelo menos 6 in ao lado de cada batente.

Estes são padrões de modelagem, não uma certificação de conformidade de saída de emergência. Verifique separadamente a abertura livre real do fabricante, as exigências locais, o nível do terreno, a drenagem e qualquer escada necessária. A profundidade e a altura do poço são dimensões predefinidas; elas não acompanham o terreno.
