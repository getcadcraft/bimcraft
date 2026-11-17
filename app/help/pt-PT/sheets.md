---
title: Alçados, cortes e folhas
summary: Desenhe linhas de corte na planta e depois abra Folhas para obter um conjunto pronto a imprimir, feito a partir do modelo: plantas de cada piso, os quatro alçados, cortes de edifício, mapas e estrutura de paredes, com legendas e escalas, num só PDF.
keywords: folhas, conjunto de desenhos, documentos de construção, imprimir, plotar, pdf, alçado, alçados, alçado norte, corte, corte de edifício, linha de corte, cortar, linhas ocultas, legenda, número da folha, escala, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, conjunto para licenciamento
from: 91ed0cde
---

## O que vai fazer

Faça um conjunto de desenhos a partir do modelo: a planta de cada nível, os alçados norte, este, sul e oeste, um corte de edifício por cada linha de corte, os mapas de portas, janelas, compartimentos e madeiramentos, e um alçado de cada parede com estrutura. O conjunto é desenhado de novo a partir do modelo sempre que o abre, por isso corresponde sempre ao que construiu.

## Desenhar uma linha de corte

1. Num nível, abra {{ui:Compilação}} e escolha {{ui:Linha de corte}}.
2. Clique onde a linha começa e onde termina. O traço curto a meio mostra o lado para onde o corte olha: a esquerda da linha, indo do primeiro clique para o segundo.
3. A linha aparece na planta com as suas cabeças e a sua letra (A, depois B, e assim por diante).

Escolha a linha para a alterar em **Propriedades**: a sua letra, **Inverter a vista** para olhar para o outro lado, e **Ver até** para parar a vista a uma distância definida atrás do corte (0 mostra tudo o que está atrás). Prima {{key:Delete}} para a remover.

## Abrir as folhas

1. Clique em {{ui:Folhas}} na barra do modelo (ao lado de {{ui:Imprimir}}).
2. As folhas estão listadas à esquerda: **A-101** e seguintes para plantas, **A-201** para alçados, **A-301** para cortes, **A-401** para mapas e **S-101** para estrutura de paredes. Clique numa para a ver.
3. Escolha o **Papel**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ou A1. O papel mantém o seu nome normalizado, e o seu tamanho é escrito nas {{ui:Unidades}} que escolheu, por exemplo *Letter · 8.5 × 11 in* ou *A3 · 297 × 420 mm*.
4. Clique em {{ui:Transferir o conjunto em PDF}}: uma página por folha.

## Notas-tipo de um conjunto de regulamentos

Numa folha, {{ui:Notas-tipo}} permite colocar notas de um conjunto de regulamentos (por especialidade) na coluna da direita da folha. Cada nota mantém o conjunto e a cláusula de onde veio, e a folha impressa indica quando esse conjunto não está verificado. As notas são um ponto de partida: a pessoa responsável pelo desenho decide o que dizem. Requerem o suplemento de Regulamentos de edifícios.

## O que está nas folhas

- **Plantas** mostram paredes, portas, janelas, compartimentos com as suas áreas, cotas e linhas de corte, à maior escala normalizada que caiba: 1/4" = 1'-0" ou menor (1:50 ou menor em milímetros).
- **Alçados** são desenhados a partir do modelo 3D, com as linhas ocultas removidas, dois por folha, todos à mesma escala, com uma linha de terreno por baixo. A cobertura, as fundações e o terreno mostram-se tal como estão modelados.
- **Cortes** preenchem o que o corte atravessa (paredes, pisos, cobertura) e desenham o que se vê para além dele.
- **Alçados e cortes levam as suas anotações:** uma marca para cada nível, com o seu nome e altura à direita, a altura entre níveis à esquerda, e, num alçado, a largura do edifício por baixo e uma etiqueta (D1, W1) em cada porta e janela de uma parede virada para si. Para as paredes interiores de um compartimento, veja [Alçados interiores](topic:interior-elevations).
- **Mapas** são as mesmas tabelas de {{ui:Mapas}} na barra do modelo.
- **Estrutura** mostra os montantes, os perfis de topo, as vergas e os peitoris de cada parede com estrutura, vistos do seu exterior, para que uma equipa os possa marcar. Veja [Estruturar paredes, pisos e coberturas](topic:framing).

Cada folha tem uma legenda com o seu número, o seu título, o nome do ficheiro e a data.

:::tip
As folhas vêm do modelo: para alterar um desenho, altere o modelo e volte a abrir {{ui:Folhas}}.
:::

:::note
Os alçados e os cortes mostram apenas linhas e preenchimentos: as cotas, as marcas de nível e as notas sobre eles ainda não estão implementadas.
:::
