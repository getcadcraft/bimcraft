---
title: Reproduzir um cronograma de construção no modelo
summary: Abra uma lista de tarefas como CSV, vincule cada tarefa a elementos por uma propriedade e avance pelas datas para ver o que está construído, em andamento e ainda não iniciado.
keywords: 4d, cronograma, sequência de construção, linha do tempo, fases, programação, gantt, tarefas, datas, simulação, progresso, construído, csv, etapa, fase, pacote de trabalho, wbs, grupo
from: 1b985a64
---

## O que você vai fazer

Acompanhe a construção do edifício: cada tarefa do cronograma vinculada aos elementos que ela constrói, mostrada dia a dia.

## Passos

1. Abra um modelo IFC e abra {{ui:Cronograma 4D}} no painel esquerdo.
2. Clique em {{ui:Baixar um modelo}} para obter uma lista de tarefas com uma semana por pavimento e altere-a em uma planilha. Ou escreva a sua.
3. Clique em {{ui:Abrir uma lista de tarefas…}} e escolha o CSV.
4. Arraste o controle deslizante de data ou clique em {{ui:Reproduzir}}.

## A lista de tarefas

Um CSV com linha de cabeçalho e as colunas **Task**, **Start**, **Finish**, **Field** e **Value**. Vírgulas ou ponto e vírgula funcionam.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Nível 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Cobertura | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Cobertura | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Escreva as datas como YYYY-MM-DD.
- Uma linha vincula a tarefa a cada elemento cujo **Field** tenha exatamente aquele **Value**. O campo é uma propriedade, como Storey, Class, Name, Type, Material, Tag ou GlobalId, ou qualquer propriedade escrita com seu conjunto e nome: `Pset_WallCommon.FireRating`.
- Repita uma tarefa em mais linhas, com as mesmas datas, para vincular mais elementos a ela.

## Etapas e pacotes de trabalho

Adicione uma coluna **Stage**, uma coluna **Package**, ou ambas, para agrupar tarefas em etapas e pacotes de trabalho. Phase e WBS também funcionam como nomes de coluna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Laje do nível 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Estrutura | Esqueleto |
| Paredes do nível 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Estrutura | Esqueleto |
| Portas | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Acabamento | Esquadrias |

- Uma tarefa pertence a uma etapa e a um pacote. Se uma linha posterior da mesma tarefa indicar outro, essa linha é listada com o número da linha e deixada de fora.
- O mesmo nome de pacote em duas etapas são dois pacotes.

Quando a lista tem grupos, uma lista {{ui:Exibir}} aparece acima da data. Escolha uma etapa ou um pacote e ele é reproduzido como um só:

- o controle deslizante e {{ui:Reproduzir}} vão do primeiro início ao último término do grupo,
- só as tarefas do grupo são listadas e pintadas, e tudo fora do grupo fica transparente,
- a linha abaixo da lista diz quantas de suas tarefas estão concluídas, em andamento e por vir naquela data,
- {{ui:Selecionar os elementos dele}} seleciona todos os elementos do grupo, para {{ui:Exibir}}, {{ui:Corte}} ou uma tabela.

Escolha **Todas as tarefas** para ver o cronograma inteiro de novo.

## O que você deve ver

- **Construído**: elementos cujas tarefas estão todas concluídas, nas cores próprias.
- **Em andamento**: elementos com uma tarefa em curso naquele dia, em ocre. Uma tarefa está em curso da data de início até a data de término.
- **Não iniciado**: transparente.
- Elementos em nenhuma tarefa permanecem como estão. A lista mostra quantos elementos cada tarefa encontrou. Linhas que não puderam ser lidas, ou que não encontraram nada, são listadas com seus números de linha.

## Vínculos, o gráfico de Gantt e o MS Project

- Abra um arquivo XML do Microsoft Project (`.xml`) ou um CSV que tenha uma coluna `Predecessors`. Os vínculos podem ser término para início, início para início, término para término ou início para término, cada um com antecipação ou atraso em dias.
- Abaixo da lista de tarefas, o gráfico de Gantt desenha cada tarefa como uma barra, com setas para os vínculos. Tarefas no caminho crítico ficam em vermelho. Um laço de vínculos ou um predecessor que não existe é listado no painel.
- {{ui:Salvar como XML do MS Project}} e {{ui:Salvar CSV com vínculos}} gravam o cronograma de volta com seus vínculos.

## Próximos passos

- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Colorir elementos por uma propriedade](topic:color-by-property)
