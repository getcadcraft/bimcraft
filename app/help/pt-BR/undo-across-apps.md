---
title: Desfazer entre aplicativos no CadCraft Studio
summary: No Studio, o BimCraft informa ao Studio cada passo concluído, para que o Studio possa desfazer seu último passo na janela em que você trabalhou por último.
keywords: desfazer, studio, entre aplicativos, desfazer do projeto, histórico, registro, janela
from: c66dd0c1
---

## O que faz

No CadCraft Studio, cada janela de aplicativo informa ao Studio quando um passo foi concluído (uma parede desenhada, um conjunto de paredes aceito a partir de um escaneamento). O Studio mantém esses passos na ordem em que você trabalhou e pode pedir à janela que criou o passo mais recente para desfazê-lo, usando o próprio desfazer dessa janela. O Ctrl+Z dentro do BimCraft continua sendo do próprio BimCraft e também é informado ao Studio.

## O que saber

- O Studio só pede a uma janela que desfaça quando a lista de desfazer dela está exatamente como o passo a deixou. Depois de Salvar (que inicia uma nova lista de alterações) ou depois de trocar o modelo que você edita, o BimCraft responde que a lista foi alterada, e o Studio ignora esta janela. Nada é forçado.
- Desfazer os efeitos de um aplicativo em outro ainda não está implementado.
- Fora do Studio, nada muda.
- O item de menu do Studio que pede o desfazer vem com uma versão do Studio; até lá, os passos são informados, mas nenhum item de menu os usa.

## Próximos passos

- [Trabalhar ao vivo com outras pessoas](topic:work-live)
