---
title: Enviar a cena para um motor de jogo
summary: O Studio pode gravar a cena em um projeto do Unreal Engine e mantê-la sincronizada a cada envio; suas próprias edições ficam em uma camada que o CadCraft nunca grava. O plug-in que a abre ainda não foi lançado.
keywords: unreal, unreal engine, motor de jogo, link, enviar, stage USD, projeto, live, câmera cine, fila de renderização de filme
from: 154d55ef
---

No CadCraft Studio, a lista Motor pode conter um **link** para um projeto do Unreal Engine. Em um sentido só: do CadCraft para o Unreal.

## Enviar a cena

1. Escolha a entrada do Unreal na lista Motor. Na primeira vez, o Studio pede que você escolha a pasta do seu projeto (a que tem o arquivo `.uproject`); ele a guarda.
2. Clique em {{ui:Enviar}}. O Studio grava `CadCraft/<file name>/` dentro do projeto: a cena como arquivo USD, o arquivo de configurações, os perfis de luz e dois pequenos arquivos de camada.
3. Altere o modelo, salve e envie de novo. Só a cena e o arquivo de configurações são substituídos.

## Suas edições estão seguras

O stage que o Unreal abre é uma pequena camada raiz criada uma vez, com duas camadas abaixo dela: **a sua** por cima (`<name>.user.usda`, vazia no início, nunca reescrita pelo CadCraft) e a cena do CadCraft abaixo. As edições que você salva na sua própria camada permanecem quando a cena é enviada de novo. Luzes e outros atores que você coloca no nível do Unreal estão fora do stage e também não são alterados.

## Sem o Studio

No navegador, ou em um computador onde o Studio não encontra o Unreal, escolha **Pasta de projeto Unreal (.zip)** na lista Motor e clique em {{ui:Renderizar}}. Ele salva a mesma pasta como um zip: descompacte-o na pasta `CadCraft` do seu projeto. Deixe **Incluir os arquivos de stage** marcado na primeira vez; desmarque-o nos salvamentos seguintes, para que o zip tenha só a cena e o arquivo de configurações e a sua própria camada nunca seja substituída.

:::note
O plug-in do Unreal que abre o stage, aplica o sol, as lâmpadas, as câmeras e a exposição, acompanha cada envio e renderiza uma câmera **ainda não foi lançado** e não foi executado no Unreal. Até lá, Enviar coloca os arquivos no projeto e as ferramentas USD do próprio Unreal podem abri-los. O Windows é o primeiro sistema; o macOS vem depois.
:::
