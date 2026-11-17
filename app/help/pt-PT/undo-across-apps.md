---
title: Anular entre aplicações no CadCraft Studio
summary: No Studio, o BimCraft indica ao Studio cada passo concluído, para que o Studio possa anular o seu último passo na janela em que trabalhou por último.
keywords: anular, studio, entre aplicações, anulação do projeto, histórico, diário, janela
from: c66dd0c1
---

## O que faz

No CadCraft Studio, cada janela de aplicação indica ao Studio quando um passo está concluído (uma parede desenhada, um conjunto de paredes aceite a partir de uma digitalização). O Studio guarda esses passos pela ordem em que trabalhou e pode pedir à janela que criou o passo mais recente para o anular, usando a sua própria anulação. O Ctrl+Z dentro do BimCraft continua a ser próprio do BimCraft e também é comunicado ao Studio.

## O que saber

- O Studio só pede a uma janela que anule quando a sua lista de anulações está exatamente como o passo a deixou. Depois de Guardar (que inicia uma nova lista de alterações) ou depois de mudar o modelo que está a editar, o BimCraft responde que a lista mudou e o Studio ignora esta janela. Nada é forçado.
- Anular os efeitos de uma aplicação noutra ainda não está implementado.
- Fora do Studio nada muda.
- O item de menu do Studio que pede a anulação vem com uma versão do Studio; até lá, os passos são comunicados, mas nenhum item de menu os usa.

## Seguinte

- [Trabalhar em Live com outros](topic:work-live)
