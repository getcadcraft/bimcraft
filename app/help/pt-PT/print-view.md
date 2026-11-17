---
title: Verificar um desenho na vista de impressão
summary: Mude um DWG ou DXF para a vista de impressão para o ver a preto sobre branco, com as suas espessuras de linha e sem as camadas que nunca são impressas.
keywords: impressão, plotar, pré-visualização, pré-visualização de impressão, espessura de linha, lineweight, monocromático, preto e branco, defpoints, sem impressão
from: 1a59c23e
---

## O que vai fazer

Ver como uma folha ficará no papel antes de a imprimir a partir do programa que a criou: a preto sobre branco, com as espessuras de linha na sua largura real e sem as camadas definidas para não imprimir.

## Passos

1. Abra um desenho DWG ou DXF.
2. Clique num separador de folha acima do desenho.
3. Clique em {{ui:Vista de impressão}} no fim dos separadores, ou prima {{key:P}}.
4. Aproxime-se de um pormenor para comparar linhas grossas e finas.
5. Clique de novo em {{ui:Vista de impressão}}, ou prima {{key:P}}, para voltar às cores normais.

## O que deve ver

- Papel branco sobre uma secretária cinzenta, com todas as linhas e textos a preto, qualquer que seja o tema.
- Espessuras de linha: numa folha, cada espessura é desenhada na sua largura real no papel, por isso uma linha de 0.5 mm é duas vezes mais grossa do que uma de 0.25 mm, em qualquer zoom. Uma linha nunca é desenhada mais fina do que a sua espessura no ecrã.
- As camadas definidas para não imprimir, e a camada DEFPOINTS, ficam ocultas.
- O botão {{ui:Vista de impressão}} fica premido. A vista de impressão mantém-se ativa ao mudar de folha ou ao abrir outro desenho, até a desligar.

Em {{ui:Modelo}}, a vista de impressão usa apenas espessuras de ecrã (linhas finas com um pixel, as mais grossas um pouco mais largas), porque o espaço do modelo não tem tamanho de papel.

## Erros comuns

- **Esperar que imprima.** A vista de impressão é uma pré-visualização. A impressão e a exportação para PDF ainda não estão incluídas no BimCraft; imprima a partir do programa que criou o desenho.
- **Esperar estilos de impressão.** As tabelas de canetas e as cores dos estilos de impressão não são lidas. Tudo é preto simples.
- **Premir P enquanto escreve.** {{key:F}} e {{key:P}} não fazem nada enquanto escreve num campo, ou quando a tabela de equipamento está visível.
