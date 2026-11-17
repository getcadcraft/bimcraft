---
title: Portas e janelas
summary: Coloque portas e janelas em paredes desenhadas: aponte para uma parede, veja o sentido de abertura e as distâncias aos cantos, clique; o vão da parede recorta-se sozinho.
keywords: porta, portas, janela, janelas, vão, sentido de abertura, dobradiça, sentido, inverter, porta de correr, porta de bolso, porta de garagem, porta dupla, janela de batente, janela de guilhotina simples, janela de guilhotina dupla, janela de correr, janela fixa, peitoril, padieira, porta dobrável, porta de armário, portas francesas, porta de celeiro, bandeiras laterais, porta de entrada, janela de toldo, janela panorâmica, bandeira
from: 4d8ac009
---

## O que vai fazer

Coloque portas e janelas em paredes que desenhou ([Desenhar paredes](topic:draw-walls)). Aponte para uma parede e a porta ou janela mostra onde ficaria, para que lado abre e a que distância está de cada canto. Clique, e o vão recorta-se sozinho na parede, na planta e em 3D.

## Colocar uma porta

1. Com {{ui:Desenhar}} ativo, clique em {{ui:Porta}} (ou prima {{key:D}}).
2. Escolha o tipo: **Porta de batente simples**, **Porta de batente dupla**, **Porta de correr**, **Porta de bolso**, **Porta de garagem**, **Porta dobrável de armário**, **Portas francesas**, **Porta de celeiro (na parede)** ou **Porta de entrada com bandeiras laterais**. O tamanho habitual preenche **W** e **H**; escolha outro na lista de tamanhos ao lado, ou escreva outros, por exemplo `2'-8"` ou `800`. A lista também oferece as famílias de portas deste modelo (veja [Famílias e os seus tamanhos](topic:families)).
3. Aponte para uma parede. O símbolo da porta segue o ponteiro ao longo da parede, e a distância de cada extremidade dessa face aparece na planta.
4. A porta abre para o lado da parede onde está o ponteiro. Prima {{key:H}} (ou clique em {{ui:Inverter}}) para pôr as dobradiças na outra extremidade.
5. Clique. A porta fica colocada e a ferramenta continua ativa para a seguinte. Aponte para o meio de uma parede e a porta centra-se sozinha.

Para a colocar a uma distância exata, aponte para a parede perto do canto de onde mede, escreva a distância (por exemplo `2'` ou `600`) e prima {{key:Enter}}. A distância vai da extremidade mais próxima da face da parede até à borda da porta.

## Colocar uma janela

1. Clique em {{ui:Janela}} (ou prima {{key:N}}).
2. Escolha o tipo: **Janela fixa**, **Janela de guilhotina simples**, **Janela de guilhotina dupla**, **Janela de batente**, **Janela de correr**, **Janela de toldo**, **Janela panorâmica** ou **Bandeira**, e os seus **W**, **H** e **Peitoril** (a altura da base da janela acima do chão).
3. Aponte para uma parede e clique, ou escreva uma distância e prima {{key:Enter}} como nas portas. Uma janela fica do lado de fora da parede.

## Mover, inverter, eliminar

- Com {{ui:Selecionar}} ativo, arraste uma porta ou janela ao longo da sua parede. Arraste-a para outra parede para a mover para lá.
- {{key:Delete}} elimina as portas e janelas escolhidas; a parede fecha-se.
- Mover ou eliminar uma parede move ou elimina o que nela está. Quando o início de uma parede se desloca ao longo da sua própria linha, as portas e janelas mantêm o seu lugar.
- {{ui:Anular}} e {{ui:Refazer}} recuam e avançam por cada colocação, movimento ou eliminação.

## O que é recusado

- **Não cabe nessa parede.** A porta ou janela é mais larga do que a parede, ou sairia por uma das extremidades. Experimente uma largura menor ou uma parede mais comprida.
- **É mais alta do que a parede.** O peitoril mais a altura estão acima do topo da parede.

## O que fica guardado

Cada porta ou janela é uma porta ou janela IFC com o seu tamanho, funcionamento (por exemplo, batente simples à esquerda), o seu tipo de tamanho (um tipo para cada tamanho da sua família), `Pset_DoorCommon` ou `Pset_WindowCommon` e quantidades de base, preenchendo um vão IFC na sua parede. A área lateral líquida e o volume da parede deixam o vão de fora. Outros programas BIM abrem-na como uma porta numa parede.

## Bom saber

- A planta mostra as portas abertas a 90° com o seu sentido de abertura, as portas de correr como dois painéis, as portas de bolso a deslizar para dentro da parede, as portas de garagem como linha tracejada por cima, e as janelas com a sua linha de caixilho e de vidro.
- A largura é a largura total do caixilho; a folha da porta é a largura menos as duas ombreiras.
- Copiar portas e janelas desenhadas ainda não está implementado: coloque outra.

## Janela de saída de emergência de cave e poço

Escolha **Saída de emergência de cave com poço** na lista de tipos de janela. Começa como uma janela de batente de 36 × 48 polegadas, com um peitoril a 36 polegadas acima do piso. O poço fica no exterior da parede, com pelo menos 48 polegadas de largura livre, 36 polegadas de projeção e um fundo 6 polegadas abaixo do peitoril. Aparece como linhas tracejadas na planta e como três lados abertos no topo em 3D. O poço faz parte do corpo IFC da janela, por isso guardar, mover, redimensionar ou eliminar a janela leva-o consigo. Ao redimensionar, mantêm-se pelo menos 6 polegadas junto a cada ombreira.

Estas são predefinições de modelação, não uma certificação de conformidade de saída de emergência. Verifique separadamente a abertura livre real do fabricante, os requisitos locais, o nível do terreno, a drenagem e qualquer escada obrigatória. A profundidade e a altura do poço são dimensões predefinidas; não seguem o terreno.
