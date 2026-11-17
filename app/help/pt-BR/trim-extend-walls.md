---
title: Aparar, estender e unir paredes
summary: Apare ou estenda paredes até outra parede, e una duas paredes no ponto onde se encontram, cada uma como um passo que você pode desfazer.
keywords: aparar, estender, canto, unir, encontrar, limpar, extremidade da parede, canto da parede, recortar, alongar, encurtar, modificar, TR
from: a6fb2e8b
---

## O que você vai fazer

Organize as paredes que você desenhou: recorte uma parede que passa de outra, alongue uma que para antes, ou feche um canto aberto.

## Passos

1. Ative {{ui:Draw}} e escolha o pavimento na lista de pavimentos da planta.
2. **Aparar ou estender até uma parede:** escolha {{ui:Modify}} › {{ui:Trim / extend}}. Clique na parede até a qual aparar ou estender (a borda), depois clique em cada parede que deseja alterar. Uma parede que passa da borda é recortada até ela, e a parte que você clica é a que permanece; uma parede que para antes é alongada até encontrar a borda. A borda continua escolhida, então você pode clicar em várias paredes uma após a outra. Pressione {{key:Esc}} para escolher outra borda.
3. **Unir duas paredes em um canto:** escolha {{ui:Modify}} › {{ui:Corner}}, clique na primeira parede e depois na segunda. Ambas se estendem até o ponto onde se encontram, e o BimCraft limpa o canto. Quando uma parede cruza a outra, a parte que você clicou permanece.
4. Pressione {{key:Esc}} para começar de novo, ou {{key:V}} para voltar a {{ui:Select}}.

## O que você deve ver

- Enquanto aponta para uma parede, a planta mostra onde ela ficaria, já unida às paredes com que se encontra, com seu novo comprimento.
- Cada alteração é um passo: {{key:Mod+Z}} a desfaz.
- Ambientes, pisos, forros, telhados e o que segue as paredes são refeitos, como após qualquer alteração nas paredes. Um ambiente fechado por um canto aparece com o número e a área.
- Uma porta ou janela em uma parte que foi cortada é excluída junto.

## Bom saber

- As paredes são desenhadas na linha de centro, então são aparadas e estendidas ao longo dela: uma parede encontra a linha de centro da outra, e a junção é limpa em forma de T ou L.
- O BimCraft informa o motivo quando não consegue fazer: as duas paredes são paralelas, a linha da parede passa ao lado da outra parede, uma porta ou janela está no caminho (mova-a ou exclua-a primeiro), ou não sobraria nada da parede (menos de 1 mm). Uma parede que fique com menos de 50 mm é criada, com um aviso em Problemas: veja [Dicas de desenho](topic:drawing-advice).
- Somente paredes desenhadas no BimCraft podem ser aparadas ou estendidas.

Veja também [Desenhar paredes](topic:draw-walls) e [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door).
