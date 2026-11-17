---
title: Elevações internas
summary: Crie uma folha que mostra as quatro paredes de um ambiente por dentro, com cotas e etiquetas, e salve-a como PDF.
keywords: elevação interna, ambiente, parede, armário, cozinha, elevação, folha, PDF, cota, etiqueta, espaço, A-501
from: 1e3a70a8
---

## O que você vai fazer

Escolha um ambiente e obtenha uma folha que mostra as quatro paredes como você as veria estando dentro dele. Ela é feita para cozinhas, banheiros e qualquer ambiente em que você precise ver os armários, portas e janelas de cada parede.

## Criar a folha

1. Escolha o ambiente. Na planta, com {{ui:Desenhar}} ativado, clique dentro do ambiente. Na vista 3D ou na árvore do modelo, selecione o espaço (um IfcSpace).
2. Em **Propriedades**, clique em {{ui:Elevações internas…}}.
3. A caixa de diálogo abre com a folha.
4. Clique em {{ui:Baixar PDF}} para salvá-la. O arquivo se chama "<file> — Interior elevations — <room>.pdf" e é um PDF vetorial.
5. Clique em {{ui:Fechar}} quando terminar.

## O que a folha mostra

A folha tem quatro vistas, duas por duas, todas na mesma escala: a maior escala padrão que cabe. São elas **Parede norte**, **Parede leste**, **Parede sul** e **Parede oeste**. A legenda traz o número da folha A-501, o título "Elevações internas — " com o número e o nome do ambiente, o projeto e a data.

Cada vista é cortada pelo meio do ambiente e olha a parede daquele lado. As paredes laterais, e tudo o que for cortado nelas, como uma janela, aparecem como poché cinza de corte ao redor da vista. A vista termina logo após a face da parede, então nada que está atrás dela aparece.

Cada vista traz:

- a largura do ambiente logo abaixo, da face interna até a face interna;
- a altura do ambiente ao lado, do piso até o nível acima;
- uma etiqueta quadrada em cada porta e uma etiqueta hexagonal em cada janela daquela parede, com a marca (D1, W1 e assim por diante);
- uma etiqueta circular com o número do item em cada item da biblioteca posicionado em frente àquela parede: armários, louças e equipamentos.

:::note
As vistas são criadas a partir do modelo toda vez que você abre a caixa de diálogo, então sempre correspondem a ele. Mova um armário e abra a caixa de diálogo de novo.
:::

## Em suas próprias folhas

Cada parede de cada ambiente também é uma vista que você pode colocar em uma folha que criar: no navegador do projeto, clique em {{ui:Nova folha}} e, em **Elevações internas**, adicione "101 Cozinha — Parede norte" e as demais. Ela vem com as mesmas cotas e etiquetas.

## Ainda não implementado

Elevações internas no conjunto de desenhos gerado (elas vêm das **Propriedades** do ambiente ou das suas próprias folhas), ambientes que não são em sua maioria retangulares (a vista fica quadrada em cada lado da caixa do ambiente), desenho, notas ou cotas próprias nelas, e a escolha de quais paredes mostrar. Veja [O que ainda não foi implementado](topic:not-built-yet).
