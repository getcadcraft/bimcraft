---
title: Reproduzir um planeamento de obra no modelo
summary: Abra uma lista de tarefas como CSV, ligue cada tarefa a elementos através de uma propriedade e avance pelas datas para ver o que está construído, em curso e ainda não iniciado.
keywords: 4d, planeamento, sequência de construção, cronograma, faseamento, programa de trabalhos, gantt, tarefas, datas, simulação, progresso, construído, csv, etapa, fase, pacote de trabalho, wbs, grupo
from: 1b985a64
---

## O que vai fazer

Acompanhe a construção do edifício: cada tarefa do planeamento ligada aos elementos que ela constrói, mostrada dia a dia.

## Passos

1. Abra um modelo IFC e abra {{ui:Planeamento 4D}} no painel esquerdo.
2. Clique em {{ui:Transferir um modelo}} para obter uma lista de tarefas com uma semana por piso, e altere-a numa folha de cálculo. Ou crie a sua.
3. Clique em {{ui:Abrir uma lista de tarefas…}} e escolha o CSV.
4. Arraste o deslizador de datas, ou clique em {{ui:Reproduzir}}.

## A lista de tarefas

Um CSV com uma linha de cabeçalho e as colunas **Task**, **Start**, **Finish**, **Field** e **Value**. Tanto vírgulas como pontos e vírgulas funcionam.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Escreva as datas no formato YYYY-MM-DD.
- Uma linha liga a tarefa a cada elemento cujo **Field** tem exatamente esse **Value**. O campo é uma propriedade como Storey, Class, Name, Type, Material, Tag ou GlobalId, ou qualquer propriedade escrita com o seu conjunto e nome: `Pset_WallCommon.FireRating`.
- Repita uma tarefa em mais linhas, com as mesmas datas, para ligar mais elementos a ela.

## Fases e pacotes de trabalho

Acrescente uma coluna **Stage**, uma coluna **Package**, ou ambas, para agrupar as tarefas em fases e pacotes de trabalho. Phase e WBS também são aceites como nomes de coluna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Uma tarefa pertence a uma só fase e a um só pacote. Se uma linha seguinte da mesma tarefa indicar outro, essa linha é listada com o seu número e ignorada.
- O mesmo nome de pacote em duas fases são dois pacotes.

Quando a lista tem grupos, aparece a lista {{ui:Mostrar}} acima da data. Escolha uma fase ou um pacote e reproduz-se como um só:

- o deslizador e {{ui:Reproduzir}} vão do primeiro início do grupo até ao último fim,
- só as tarefas do grupo são listadas e pintadas, e tudo o que está fora do grupo fica transparente,
- a linha abaixo da lista diz quantas das suas tarefas estão concluídas, em curso e por iniciar nessa data,
- {{ui:Selecionar os seus elementos}} seleciona todos os elementos do grupo, para {{ui:Mostrar}}, {{ui:Corte}} ou um mapa.

Escolha **Todas as tarefas** para voltar a ver o planeamento completo.

## O que deve ver

- **Construído**: elementos cujas tarefas estão todas concluídas, com as suas próprias cores.
- **Em curso**: elementos com uma tarefa em execução nesse dia, a ocre. Uma tarefa está em curso desde a data de início até à data de fim.
- **Não iniciado**: transparente.
- Os elementos sem tarefa mantêm-se como estão. A lista mostra quantos elementos cada tarefa encontrou. As linhas que não foi possível ler, ou que não encontraram nada, são listadas com os respetivos números de linha.

## Ligações, gráfico de Gantt e MS Project

- Abra um ficheiro XML do Microsoft Project (`.xml`) ou um CSV que tenha uma coluna `Predecessors`. As ligações podem ser fim a início, início a início, fim a fim ou início a fim, cada uma com um avanço (lead) ou um atraso (lag) em dias.
- Abaixo da lista de tarefas, o gráfico de Gantt desenha cada tarefa como uma barra, com setas para as ligações. As tarefas do caminho crítico são vermelhas. Um ciclo de ligações ou um predecessor que não existe é listado no painel.
- {{ui:Guardar como XML do MS Project}} e {{ui:Guardar CSV com ligações}} gravam o planeamento de volta com as suas ligações.

## A seguir

- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Atribuir cor a elementos por uma propriedade](topic:color-by-property)
