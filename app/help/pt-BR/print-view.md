---
title: Verificar um desenho na vista de impressão
summary: Mude um DWG ou DXF para a vista de impressão para vê-lo em preto sobre branco, com as suas espessuras de linha e sem as camadas que nunca são impressas.
keywords: impressão, plotar, visualização, pré-visualização de plotagem, espessura de linha, monocromático, preto e branco, defpoints, não plotar
from: 1a59c23e
---

## O que você vai fazer

Ver como uma folha ficará no papel antes de imprimi-la pelo programa que a criou: em preto sobre branco, com as espessuras de linha na largura real e sem as camadas configuradas para não imprimir.

## Passos

1. Abra um desenho DWG ou DXF.
2. Clique em uma guia de folha acima do desenho.
3. Clique em {{ui:Vista de impressão}} no fim das guias, ou pressione {{key:P}}.
4. Aproxime o zoom em um detalhe para comparar linhas grossas e finas.
5. Clique em {{ui:Vista de impressão}} de novo, ou pressione {{key:P}}, para voltar às cores normais.

## O que você deve ver

- Papel branco sobre uma mesa cinza, com cada linha e texto em preto, qualquer que seja o tema.
- Espessuras de linha: em uma folha, cada espessura é desenhada na largura real no papel, então uma linha de 0.5 mm é duas vezes mais grossa que uma de 0.25 mm em qualquer zoom. Uma linha nunca é desenhada mais fina que a sua espessura na tela.
- Camadas configuradas para não imprimir e a camada DEFPOINTS ficam ocultas.
- O botão {{ui:Vista de impressão}} permanece pressionado. A vista de impressão continua ativa ao trocar de folha ou abrir outro desenho, até você desligá-la.

Em {{ui:Modelo}}, a vista de impressão usa apenas espessuras de tela (linhas finas com um pixel, as mais grossas um pouco mais espessas), porque o espaço modelo não tem tamanho de papel.

## Erros comuns

- **Esperar que ela imprima.** A vista de impressão é uma pré-visualização. Impressão e exportação para PDF ainda não estão implementadas no BimCraft; imprima pelo programa que criou o desenho.
- **Esperar estilos de plotagem.** Tabelas de canetas e cores de estilo de plotagem não são lidas. Tudo aparece em preto.
- **Pressionar P ao digitar.** {{key:F}} e {{key:P}} não fazem nada enquanto você digita em um campo, ou quando a tabela de equipamentos está exibida.
