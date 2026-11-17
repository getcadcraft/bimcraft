---
title: Acabamentos de compartimentos e mapas de acabamentos
summary: Indique o que cobre o piso, as paredes e o teto de cada compartimento, acrescente zonas como um painel de proteção com azulejos, e obtenha mapas de acabamentos por compartimento, parede e zona, com áreas, contagens de azulejos incluindo cortes e volumes de suporte.
keywords: acabamento, acabamentos, mapa de acabamentos, acabamentos de compartimentos, acabamento de piso, acabamento de parede, acabamento de teto, rodapé, azulejo, azulejos, azulejos cortados, contagem de azulejos, desperdício, suporte, betonilha, placa de suporte, reboco, zona, painel de proteção, lambril, zona húmida, interior, quantidades
from: 8c30498c
---

## O que vai fazer

Indique ao BimCraft, uma única vez, com que acabamento fica cada compartimento. Os mapas de acabamentos indicam então as áreas, os azulejos a encomendar e os volumes de suporte, e mudam com o modelo.

## Passos

1. Ative {{ui:Draw}}, abra **Mapas** no painel esquerdo e clique em **Acabamentos de compartimentos**.
2. Em **Tipos de acabamento**, clique em **Adicionar um tipo de acabamento**. Dê-lhe um nome, um tipo (Azulejo, Folha, Demão ou Placa) e uma espessura. Para um azulejo, indique o comprimento e a largura do azulejo, a junta e uma margem de desperdício em percentagem. Se existir algo por baixo do acabamento (uma betonilha, uma placa de suporte, uma camada de reboco), indique-o em **Suporte** e dê-lhe a espessura.
3. Em **Compartimentos**, escolha o acabamento do piso, da parede e do teto de cada compartimento. Escreva o nome do rodapé e a respetiva altura, se o compartimento tiver rodapé.
4. Em **Zonas**, clique em **Adicionar uma zona** para uma parte de um compartimento que leva outro acabamento:
   - uma zona de **parede** é uma faixa entre duas alturas acima do piso (um painel de proteção com azulejos de 0 a 1200, um lambril). Fica em todas as paredes do compartimento, ou escolha as paredes desse compartimento no modelo e clique no botão **Ligado** para a limitar a essas;
   - uma zona de **piso** ou de **teto** é uma área que escreve. É retirada ao acabamento próprio do compartimento.
5. Clique em **Guardar**. É um único passo em Anular. Os comprimentos são escritos nas unidades do projeto.

## Os mapas

Quatro entradas juntam-se à lista de Mapas:

- **Acabamentos por compartimento**: cada compartimento com o seu acabamento de piso, de parede e de teto, as respetivas áreas e o rodapé com o seu comprimento.
- **Acabamentos por parede**: cada troço de parede do lado de um compartimento e a faixa dele coberta por um acabamento, com o seu comprimento, área bruta, deduções, área líquida e, para azulejos, azulejos inteiros, azulejos cortados e azulejos a encomendar.
- **Acabamentos por zona**: cada zona com o seu acabamento, área líquida, azulejos e volume de suporte.
- **Quantidades de acabamentos**: uma linha por acabamento: área líquida, azulejos inteiros e cortados, azulejos a encomendar, o suporte e o respetivo volume, e o volume do próprio acabamento.

Agrupe, calcule totais, guarde e exporte-os como qualquer mapa: ver [Configurar, guardar e exportar um mapa](topic:schedule-layouts). Clique num valor para selecionar a sua origem: as deduções de uma parede selecionam as portas e janelas dessa parede.

## Como se medem os acabamentos

- **Paredes**: cada troço de parede do lado do compartimento, o seu comprimento ao longo do compartimento vezes a altura coberta pelo acabamento, menos a parte de cada porta e janela dentro dessa altura. Uma parede mais baixa do que o compartimento é acabada até ao seu próprio topo. O método de medição do projeto decide que vãos são pequenos demais para deduzir ([Mapas](topic:plan-schedules-and-pdf)).
- **Pisos e tetos**: o compartimento dentro das faces das paredes, menos as ilhas que nele existam.
- **Rodapés**: o comprimento das paredes do compartimento menos a largura das portas.
- **Azulejos**: assentes numa grelha a partir de um canto da superfície, com uma junta entre azulejos. Um azulejo inteiramente sobre a superfície é um azulejo inteiro; um azulejo parcialmente sobre ela (numa borda, à volta de um vão) é um azulejo cortado. Os azulejos a encomendar são os inteiros mais os cortados, mais a margem de desperdício, arredondados por excesso. Cada azulejo cortado é contado como um azulejo novo: os recortes não são reutilizados.
- **Volume de suporte**: a área líquida vezes a espessura do suporte.
- Uma contagem marcada com **≈** é calculada a partir da área, em vez de ser traçada azulejo a azulejo: uma superfície da qual se retirou uma zona escrita, ou uma muito grande.

## Bom saber

- Os acabamentos ficam guardados no ficheiro do edifício (conjunto de propriedades `CadCraft_Finishes` no projeto). Cada compartimento que tem acabamento recebe também o conjunto de propriedades IFC padrão `Pset_SpaceCoveringRequirements`, para que outros programas leiam os nomes.
- O traçado dos azulejos começa num canto. Não são calculados um traçado centrado no compartimento, um padrão (espinha de peixe, aparelho de tijolo) nem a reutilização de recortes.
- Uma parede curva, e uma fronteira de compartimento que não é uma parede (um separador de compartimento), aparece como **Outra fronteira**, com o seu comprimento e sem vãos.
- A entrada **Acabamentos** que existia antes lista as camadas de acabamento dos tipos de parede; **Camadas: área e volume** lista cada camada de cada tipo com camadas. Os acabamentos de compartimento aqui são o que se aplica ao compartimento por cima dessas camadas.
- Um assistente pode definir acabamentos por si com `finishes_set`: ver [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
