---
title: Aparar, prolongar e unir paredes
summary: Aparar ou prolongar paredes até outra parede, e unir duas paredes no ponto onde se encontram, cada uma como um passo que pode anular.
keywords: aparar, prolongar, canto, unir, encontrar, limpar, extremidade da parede, canto da parede, cortar, alongar, encurtar, modificar, TR
from: a6fb2e8b
---

## O que vai fazer

Arrumar as paredes que desenhou: cortar uma parede que passa além de outra, alongar uma que fica curta, ou fechar um canto aberto.

## Passos

1. Ativar {{ui:Draw}} e escolher o piso na lista de pisos da planta.
2. **Aparar ou prolongar até uma parede:** escolher {{ui:Modify}} › {{ui:Trim / extend}}. Clicar na parede até à qual se apara ou prolonga (a aresta) e depois em cada parede que se quer alterar. Uma parede que passa além da aresta é cortada até ela, e a parte em que se clica é a que fica; uma parede que fica curta é alongada até encontrar a aresta. A aresta mantém-se escolhida, por isso podem clicar-se várias paredes uma após a outra. Premir {{key:Esc}} para escolher outra aresta.
3. **Unir duas paredes num canto:** escolher {{ui:Modify}} › {{ui:Corner}}, clicar na primeira parede e depois na segunda. Ambas prolongam-se até ao ponto onde se encontram, e o BimCraft limpa o canto. Quando uma parede atravessa a outra, a parte em que se clicou fica.
4. Premir {{key:Esc}} para recomeçar, ou {{key:V}} para voltar a {{ui:Select}}.

## O que deve ver

- Enquanto aponta para uma parede, a planta mostra onde ficaria, já unida às paredes com que se encontra, com o seu novo comprimento.
- Cada alteração é um passo: {{key:Mod+Z}} anula-a.
- Os compartimentos, pisos, tetos, coberturas e tudo o que segue as paredes são refeitos, como após qualquer alteração às paredes. Um compartimento fechado por um canto aparece com o seu número e área.
- Uma porta ou janela numa parte que é cortada é eliminada com ela.

## Bom saber

- As paredes são desenhadas pelo eixo, por isso são aparadas e prolongadas ao longo dele: uma parede encontra o eixo da outra, e a junta fica limpa em T ou em L.
- O BimCraft indica porque não o consegue fazer: as duas paredes são paralelas, a linha da parede passa ao lado da outra, uma porta ou janela está no caminho (mova-a ou elimine-a primeiro), ou não sobraria nada da parede (menos de 1 mm). Uma parede com menos de 50 mm é criada, com um aviso em Problemas: ver [Conselhos de desenho](topic:drawing-advice).
- Só as paredes desenhadas no BimCraft podem ser aparadas ou prolongadas.

Ver também [Desenhar paredes](topic:draw-walls) e [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door).
