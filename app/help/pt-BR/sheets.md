---
title: Elevações, cortes e folhas
summary: Desenhe linhas de corte na planta e depois abra Folhas para um conjunto pronto para impressão feito a partir do modelo: plantas de cada nível, as quatro elevações, cortes de edificação, tabelas e estrutura de paredes, com legendas e escalas, em um único PDF.
keywords: folhas, conjunto de desenhos, documentos de construção, imprimir, plotar, pdf, elevação, elevações, elevação norte, corte, corte de edificação, linha de corte, linhas ocultas, legenda, número da folha, escala, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, conjunto para licenciamento
from: 91ed0cde
---

## O que você vai fazer

Fazer um conjunto de desenhos a partir do modelo: a planta de cada nível, as elevações norte, leste, sul e oeste, um corte de edificação para cada linha de corte, as tabelas de portas, janelas, ambientes e madeiramento, e uma elevação de cada parede com estrutura. O conjunto é desenhado de novo a partir do modelo sempre que você o abre, então sempre corresponde ao que você construiu.

## Desenhar uma linha de corte

1. Em um nível, abra {{ui:Build}} e escolha {{ui:Linha de corte}}.
2. Clique onde a linha começa e onde termina. O traço curto no meio dela mostra o lado para o qual o corte olha: a esquerda da linha, indo do primeiro clique ao segundo.
3. A linha aparece na planta com suas pontas e sua letra (A, depois B, e assim por diante).

Selecione a linha para alterá-la em **Propriedades**: a letra dela, **Inverter a vista** para olhar para o outro lado, e **Olhar até** para parar a vista a uma distância definida atrás do corte (0 mostra tudo o que há atrás dele). Pressione {{key:Delete}} para removê-la.

## Abrir as folhas

1. Clique em {{ui:Folhas}} na barra do modelo (ao lado de {{ui:Imprimir}}).
2. As folhas aparecem listadas à esquerda: **A-101** e seguintes para plantas, **A-201** para elevações, **A-301** para cortes, **A-401** para tabelas e **S-101** para estrutura de paredes. Clique em uma para vê-la.
3. Escolha o **Papel**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ou A1. O papel mantém o nome padrão e o tamanho dele é escrito na {{ui:Unidades}} escolhida, por exemplo *Letter · 8.5 × 11 in* ou *A3 · 297 × 420 mm*.
4. Clique em {{ui:Baixar o conjunto como PDF}}: uma página por folha.

## Notas padrão de um pacote de normas

Em uma folha, {{ui:Notas padrão}} permite colocar notas de um pacote de normas (por disciplina) na coluna da direita da folha. Cada nota guarda o pacote e a cláusula de onde veio, e a folha impressa informa quando esse pacote não foi verificado. As notas são um ponto de partida: o responsável pelo desenho decide o que elas dizem. Elas exigem o complemento Regulamentos de edificações.

## O que há nas folhas

- **Plantas** mostram paredes, portas, janelas, ambientes com suas áreas, cotas e linhas de corte, na maior escala padrão que caiba: 1/4" = 1'-0" ou menor (1:50 ou menor em milímetros).
- **Elevações** são desenhadas a partir do modelo 3D, com linhas ocultas removidas, duas por folha, todas na mesma escala, com uma linha de terreno embaixo. O telhado, as fundações e o terreno aparecem como foram modelados.
- **Cortes** preenchem o que o corte atravessa (paredes, pisos, o telhado) e desenham o que se vê além dele.
- **Elevações e cortes levam suas anotações:** uma marca para cada nível com nome e altura à direita, a altura entre níveis à esquerda e, em uma elevação, a largura da edificação abaixo dela e uma etiqueta (D1, W1) em cada porta e janela de uma parede voltada para você. Para as paredes internas de um ambiente, veja [Elevações internas](topic:interior-elevations).
- **Tabelas** são as mesmas de {{ui:Tabelas}} na barra do modelo.
- **Estrutura** mostra os montantes, as travessas, as vergas e os peitoris de cada parede com estrutura, como vistos do lado externo, para que uma equipe consiga marcá-los. Veja [Estrutura de paredes, pisos e telhados](topic:framing).

Cada folha tem uma legenda com seu número, seu título, o nome do arquivo e a data.

:::tip
As folhas vêm do modelo: para mudar um desenho, mude o modelo e abra {{ui:Folhas}} de novo.
:::

:::note
Elevações e cortes mostram somente linhas e preenchimentos: cotas, marcas de nível e notas sobre eles ainda não estão implementadas.
:::
