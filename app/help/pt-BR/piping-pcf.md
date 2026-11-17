---
title: Enviar tubulação a um programa de análise de tensões ou isométricos, e ler de volta (PCF)
summary: Grave os trechos de tubulação do modelo como um arquivo de componentes de tubulação PCF, ou leia um arquivo PCF de um programa de análise de tensões ou de isométricos e desenhe a tubulação dele como trechos.
keywords: pcf, arquivo de componentes de tubulação, análise de tensão em tubulações, isométrico, isométricos, exportar, importar, tubulação, planta, tubo de aço, mover um trabalho, outro software
from: 24f91355
---

## O que você vai fazer

PCF é o arquivo de texto simples que programas de análise de tensões e de isométricos leem e gravam. Ele lista os componentes de cada linha de tubulação com os seus pontos finais e as suas bitolas.

## Exportar

1. Escolha a ferramenta Tubulação. A linha de opções mostra **Exportar PCF**.
2. Clique nele. Cada trecho de tubulação do modelo é gravado: tubo reto, curvas (uma virada de 90 graus; caso contrário, uma dobra), tês com o seu ponto de derivação, reduções e válvulas.
3. O arquivo usa milímetros. As bitolas são diâmetros nominais em milímetros. O ponto central de uma curva é o seu canto, onde suas duas pernas se encontram.

PCF é gravado para tubulação de aço com solda de topo. Um trecho de outro material também é gravado, com chaves de componente de aço, e registrado no painel Problemas.

## Importar

1. Escolha a ferramenta Tubulação e clique em **Importar PCF…**, depois escolha o arquivo.
2. Do tubo reto até curvas, dobras, válvulas e flanges, tudo vira um só trecho no nível atual. Uma mudança de diâmetro inicia um novo trecho. O ramal de um tê vira um trecho próprio, que começa no centro do tê.
3. O modelo monta as próprias conexões. Reduções e tês não são copiados: aparecem onde trechos de diâmetros diferentes, ou um ramal, se encontram.

:::note
As alturas no arquivo são lidas como alturas acima do nível atual. Cargas, restrições e a própria análise de tensões não estão em um arquivo PCF e não são trazidas.
:::

## Conferir o que foi importado

- O comprimento total da tubulação por linha deve coincidir com o da origem.
- O painel Problemas lista, uma vez cada, uma curva cujo ponto central não está à mesma distância das duas extremidades, tubulação sem comprimento e uma bitola que não é um tamanho padrão.

## Tubulação que já está em um arquivo IFC

Quando um arquivo IFC está aberto, **Exportar PCF** também grava os próprios segmentos, conexões e válvulas de tubulação dele, ao lado dos trechos que você desenhou. Um segmento recebe as suas extremidades de suas portas, ou das extremidades do seu corpo. Uma conexão sem portas fica de fora, e o painel Problemas avisa. Você pode exportar só do IFC quando o modelo não tem trechos desenhados.

Na importação, suportes, olets, flanges, juntas e tampões do arquivo não são desenhados. O painel Problemas lista quantos de cada foram deixados de fora, para que nada desapareça sem aviso.
