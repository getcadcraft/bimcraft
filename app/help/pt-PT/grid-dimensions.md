---
title: Cotar uma grelha
summary: Mostre o espaçamento entre linhas vizinhas da grelha e a dimensão total da grelha em cada planta de piso, guardados no IFC e a seguir a grelha quando as linhas mudam.
keywords: grelha, cotas da grelha, cota, espaçamento, vãos, dimensão total, bolhas, grelha de pilares, planta, folha
from: aaea5d08
---

## O que vai fazer

Coloque nas plantas o espaçamento entre as linhas da grelha e a dimensão total da grelha, para além das bolhas, para que as folhas feitas a partir delas incluam as cotas. Precisa primeiro de uma grelha: veja [Grelhas e pilares](topic:grids-and-columns).

## Passos

1. Mostre a planta de um piso e clique em {{ui:Grelha}} para ativar a ferramenta de grelha. Aparece a barra de opções da grelha.
2. Marque {{ui:Cotas}}. O espaçamento entre linhas numeradas vizinhas e entre linhas com letras vizinhas, e a dimensão total em cada sentido, são desenhados na planta.
3. Escolha outro piso: as mesmas cotas aparecem na respetiva planta.
4. Mova uma linha, mude o nome a uma ou acrescente uma. As cotas seguem a grelha.
5. Desmarque {{ui:Cotas}} para as retirar de novo.

## Notas

- Cada alteração é um passo de anulação: {{key:Mod+Z}} anula-a.
- A definição fica guardada no IFC com a grelha, e as plantas colocadas nas folhas incluem as cotas.
- Se o modelo não tiver uma grelha que possa alterar (uma grelha que veio de um ficheiro de outro programa não pode ser alterada aqui), a linha de estado indica "Não há nenhuma grelha para alterar."
