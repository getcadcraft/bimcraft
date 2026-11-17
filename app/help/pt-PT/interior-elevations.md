---
title: Alçados interiores
summary: Faça uma folha que mostra as quatro paredes de um compartimento vistas do interior, com cotas e marcas, e guarde-a como PDF.
keywords: alçado interior, compartimento, parede, armário, cozinha, alçado, folha, PDF, cota, marca, espaço, A-501
from: 1e3a70a8
---

## O que vai fazer

Escolha um compartimento e obtenha uma folha que mostra as suas quatro paredes tal como as veria se estivesse lá dentro. Foi feita para cozinhas, casas de banho e qualquer compartimento onde precise de ver os armários, portas e janelas de cada parede.

## Fazer a folha

1. Escolha o compartimento. Na planta, com {{ui:Draw}} ativo, clique dentro do compartimento. Na vista 3D ou na árvore do modelo, selecione o espaço (um IfcSpace).
2. Em **Propriedades**, clique em {{ui:Interior elevations…}}.
3. A caixa de diálogo abre-se com a folha.
4. Clique em {{ui:Download PDF}} para a guardar. O ficheiro tem o nome "<file> — Interior elevations — <room>.pdf" e é um PDF vetorial.
5. Clique em {{ui:Close}} quando terminar.

## O que a folha mostra

A folha tem quatro vistas, duas a duas, à mesma escala: a maior escala padrão que cabe. São **Parede norte**, **Parede este**, **Parede sul** e **Parede oeste**. A legenda tem o número da folha A-501, o título "Interior elevations — " com o número e o nome do compartimento, o projeto e a data.

Cada vista é feita por um corte a meio do compartimento e mostra a parede desse lado. As paredes laterais, e tudo o que nelas está cortado, como uma janela, aparecem a cinzento, em poché de corte, à volta da vista. A vista termina logo após a face da parede, para que nada que esteja atrás da parede apareça.

Cada vista tem:

- a largura do compartimento por baixo, de face interior a face interior;
- a altura do compartimento ao lado, do pavimento até ao nível superior;
- uma marca quadrada em cada porta e uma marca hexagonal em cada janela dessa parede, com a respetiva marca (D1, W1 e assim por diante);
- uma marca circular com o número do item em cada item da biblioteca colocado em frente a essa parede: armários, acessórios e equipamento.

:::note
As vistas são feitas a partir do modelo sempre que abre a caixa de diálogo, por isso coincidem sempre com ele. Mova um armário e volte a abrir a caixa de diálogo.
:::

## Nas suas próprias folhas

Cada parede de cada compartimento é também uma vista que pode colocar numa folha que faça: no navegador de projeto, clique em {{ui:New sheet}} e, em **Alçados interiores**, acrescente "101 Cozinha — Parede norte" e as restantes. Vem com as mesmas cotas e marcas.

## Ainda não implementado

Alçados interiores no conjunto de desenhos gerado (vêm das **Propriedades** do compartimento ou das suas próprias folhas), compartimentos que não são maioritariamente retangulares (a vista é quadrada em cada lado da caixa do compartimento), desenho, notas ou cotas próprias nestes alçados, e a escolha das paredes a mostrar. Ver [O que ainda não está implementado](topic:not-built-yet).
