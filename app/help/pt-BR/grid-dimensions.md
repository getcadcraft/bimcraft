---
title: Cotar os eixos
summary: Mostrar o espaçamento entre linhas de eixo vizinhas e o tamanho total da grade na planta de cada pavimento, salvo no IFC e acompanhando o eixo quando as linhas mudam.
keywords: eixos, cotas de eixos, cota, espaçamento, vãos, dimensão total, balões, grade de pilares, planta, folha
from: aaea5d08
---

## O que você vai fazer

Colocar o espaçamento entre as linhas de eixo e o tamanho total da grade nas plantas, além dos balões, para que as folhas feitas a partir delas tragam as cotas. Você precisa de um eixo primeiro: veja [Eixos e pilares](topic:grids-and-columns).

## Passos

1. Mostre a planta de um pavimento e clique em {{ui:Eixos}} para ativar a ferramenta de eixos. A linha de opções de eixos aparece.
2. Marque {{ui:Dimensões}}. O espaçamento entre linhas numeradas vizinhas e entre linhas com letras vizinhas, e o tamanho total em cada direção, são desenhados na planta.
3. Escolha outro pavimento: as mesmas dimensões aparecem na planta dele.
4. Mova uma linha, renomeie uma ou adicione uma. As cotas acompanham a grade.
5. Desmarque {{ui:Dimensões}} para removê-las novamente.

## Observações

- Cada alteração é uma etapa de desfazer: {{key:Mod+Z}} a desfaz.
- A configuração é salva no IFC junto com o eixo, e as plantas colocadas em folhas trazem as dimensões.
- Se o modelo não tiver um eixo que você possa alterar (um eixo que veio de um arquivo de outro programa não pode ser alterado aqui), a linha de status diz "Não há nenhum eixo para alterar."
