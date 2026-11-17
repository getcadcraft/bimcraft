---
title: Enviar a cena para um motor de jogo
summary: O Studio pode escrever a cena num projeto do Unreal Engine e mantê-la em sintonia a cada envio; as suas próprias edições ficam numa camada que o CadCraft nunca escreve. O plug-in que a abre ainda não foi lançado.
keywords: unreal, unreal engine, motor de jogo, ligação, enviar, stage USD, projeto, live, câmara cine, fila de renderização de filme
from: 154d55ef
---

No CadCraft Studio, a lista Motor pode conter uma **ligação** a um projeto do Unreal Engine. Num só sentido: do CadCraft para o Unreal.

## Enviar a cena

1. Escolha a entrada Unreal na lista Motor. Na primeira vez, o Studio pede-lhe que escolha a pasta do seu projeto (a que tem o ficheiro `.uproject`); fica registada.
2. Clique em {{ui:Send}}. O Studio escreve `CadCraft/<file name>/` dentro do projeto: a cena como ficheiro USD, o ficheiro de definições, perfis de luz e dois pequenos ficheiros de camada.
3. Altere o modelo, guarde e envie de novo. Só a cena e o ficheiro de definições são substituídos.

## As suas edições estão seguras

O stage que o Unreal abre é uma pequena camada raiz criada uma vez, com duas camadas por baixo: **a sua** por cima (`<name>.user.usda`, vazia no início, nunca reescrita pelo CadCraft) e a cena do CadCraft por baixo. As edições que guarda na sua própria camada mantêm-se quando a cena é enviada de novo. As luzes e outros atores que colocar no nível do Unreal estão fora do stage e também não são tocados.

## Sem o Studio

No navegador, ou num computador onde o Studio não encontra o Unreal, escolha **Pasta de projeto Unreal (.zip)** na lista Motor e clique em {{ui:Render}}. Guarda a mesma pasta num zip: descomprima-o na pasta `CadCraft` do seu projeto. Deixe **Incluir os ficheiros do stage** ativo na primeira vez; desative-o nas gravações seguintes, para que o zip contenha apenas a cena e o ficheiro de definições e a sua própria camada nunca seja substituída.

:::note
O plug-in do Unreal que abre o stage, aplica o sol, as lâmpadas, as câmaras e a exposição, acompanha cada envio e renderiza uma câmara **ainda não foi lançado** e não foi executado no Unreal. Até lá, Enviar coloca os ficheiros no projeto, e as ferramentas USD do próprio Unreal podem abri-los. O Windows é o primeiro sistema; o macOS segue-se.
:::
