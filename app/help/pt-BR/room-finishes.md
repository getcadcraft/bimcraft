---
title: Acabamentos de ambientes e tabelas de acabamentos
summary: Informe o que cobre o piso, as paredes e o forro de cada ambiente, acrescente zonas como um revestimento de bancada e obtenha tabelas de acabamentos por ambiente, parede e zona, com áreas, contagens de azulejos incluindo cortes e volumes de substrato.
keywords: acabamento, acabamentos, tabela de acabamentos, acabamentos de ambientes, acabamento de piso, acabamento de parede, acabamento de forro, rodapé, azulejo, azulejos, azulejos cortados, contagem de azulejos, perda, substrato, contrapiso, placa de base, reboco, zona, revestimento de bancada, meia-parede, área molhada, interior, quantitativos
from: 8c30498c
---

## O que você vai fazer

Informe ao BimCraft, uma vez, com o que cada ambiente é acabado. As tabelas de acabamentos então dão as áreas, os azulejos a encomendar e os volumes de substrato, e mudam junto com o modelo.

## Passos

1. Ative {{ui:Desenhar}}, abra **Tabelas** no painel esquerdo e clique em **Acabamentos de ambientes**.
2. Em **Tipos de acabamento**, clique em **Adicionar um tipo de acabamento**. Dê um nome, um tipo (Azulejo, Folha, Demão ou Placa) e uma espessura. Para um azulejo, informe o comprimento e a largura do azulejo, a junta e uma margem de perda em porcentagem. Se algo ficar sob o acabamento (um contrapiso, uma placa de base, uma demão de reboco), dê o nome dele em **Substrato** e informe a espessura.
3. Em **Ambientes**, escolha o acabamento de piso, de parede e de forro de cada ambiente. Digite um nome de rodapé e a altura dele, se o ambiente tiver um.
4. Em **Zonas**, clique em **Adicionar uma zona** para uma parte de um ambiente que recebe outro acabamento:
   - uma zona de **parede** é uma faixa entre duas alturas acima do piso (um revestimento de bancada de 0 a 1200, uma meia-parede). Ela fica em todas as paredes do ambiente, ou selecione paredes desse ambiente no modelo e clique no botão **Ativar** para restringi-la a elas;
   - uma zona de **piso** ou de **forro** é uma área que você digita. Ela é subtraída do próprio acabamento do ambiente.
5. Clique em **Salvar**. É uma etapa de Desfazer. Os comprimentos são digitados nas unidades do projeto.

## As tabelas

Quatro entradas se juntam à lista de Tabelas:

- **Acabamentos por ambiente**: cada ambiente com seu acabamento de piso, de parede e de forro, suas áreas, e o rodapé com o seu comprimento.
- **Acabamentos por parede**: cada trecho de parede do lado de um ambiente e a faixa dele coberta por um acabamento, com seu comprimento, área bruta, deduções, área líquida e, para azulejos, azulejos inteiros, azulejos cortados e azulejos a encomendar.
- **Acabamentos por zona**: cada zona com seu acabamento, área líquida, azulejos e volume de substrato.
- **Quantitativos de acabamentos**: uma linha por acabamento: área líquida, azulejos inteiros e cortados, azulejos a encomendar, o substrato e o seu volume, e o volume do próprio acabamento.

Agrupe, totalize, salve e exporte-as como qualquer tabela: veja [Organize, salve e exporte uma tabela](topic:schedule-layouts). Clique em um número para selecionar a sua origem: as deduções de uma parede selecionam suas portas e janelas.

## Como os acabamentos são medidos

- **Paredes**: cada trecho de parede do lado do ambiente, o seu comprimento ao longo do ambiente vezes a altura que o acabamento cobre, menos a parte de cada porta e janela dentro dessa altura. Uma parede mais baixa que o ambiente é acabada até a sua própria altura. O método de medição do projeto decide quais vãos são pequenos demais para deduzir ([Tabelas](topic:plan-schedules-and-pdf)).
- **Pisos e forros**: o ambiente dentro das faces das paredes, menos as ilhas que houver nele.
- **Rodapés**: o comprimento de parede do ambiente menos a largura das suas portas.
- **Azulejos**: assentados em uma grade a partir de um canto da superfície, com uma junta entre azulejos. Um azulejo totalmente na superfície é um azulejo inteiro; um azulejo parcialmente nela (em uma borda, ao redor de um vão) é um azulejo cortado. Os azulejos a encomendar são os inteiros mais os cortados, mais a margem de perda, arredondados para cima. Todo azulejo cortado é contado como um azulejo novo: as sobras não são reaproveitadas.
- **Volume de substrato**: a área líquida vezes a espessura do substrato.
- Uma contagem marcada com **≈** é calculada a partir da área, em vez de ser distribuída azulejo a azulejo: uma superfície com uma zona digitada subtraída dela, ou uma superfície muito grande.

## Bom saber

- Os acabamentos são guardados no arquivo do edifício (conjunto de propriedades `CadCraft_Finishes` no projeto). Cada ambiente que tem acabamento também recebe o conjunto de propriedades padrão do IFC `Pset_SpaceCoveringRequirements`, para que outros programas leiam os nomes.
- A distribuição dos azulejos começa em um canto. Uma distribuição centralizada no ambiente, um padrão (espinha de peixe, aparelho de tijolo) e o reaproveitamento de sobras não são calculados.
- Uma parede curva, e um limite de ambiente que não é uma parede (um separador de ambiente), aparecem como **Outro limite**, com o seu comprimento e sem vãos.
- A entrada **Acabamentos** que existia antes lista as camadas de acabamento dos tipos de parede; **Camadas: área e volume** lista cada camada de cada tipo com camadas. Os acabamentos de ambientes aqui são o que se aplica ao ambiente por cima dessas camadas.
- Um assistente pode definir acabamentos para você com `finishes_set`: veja [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
