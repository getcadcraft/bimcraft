---
title: Reproducir un cronograma de obra sobre o modelo
summary: Abra unha lista de tarefas como CSV, ligue cada tarefa a elementos por unha propiedade e percorra as datas para ver o que está construído, en curso e sen comezar.
keywords: 4d, cronograma, secuencia de construción, liña temporal, fases, programa, gantt, tarefas, datas, simulación, progreso, construído, csv, etapa, fase, paquete de traballo, wbs, grupo
from: 1b985a64
---

## O que vai facer

Vexa como sobe o edificio: cada tarefa do cronograma ligada aos elementos que constrúe, mostrada día a día.

## Pasos

1. Abra un modelo IFC e abra {{ui:Cronograma 4D}} no panel da esquerda.
2. Prema en {{ui:Descargar un modelo}} para obter unha lista de tarefas cunha semana por piso, e cámbiea nunha folla de cálculo. Ou escriba a súa propia.
3. Prema en {{ui:Abrir unha lista de tarefas…}} e escolla o CSV.
4. Arrastre o control deslizante de datas ou prema en {{ui:Reproducir}}.

## A lista de tarefas

Un CSV cunha fila de cabeceira e as columnas **Task**, **Start**, **Finish**, **Field** e **Value**. Funcionan tanto as comas como os punto e coma.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Escriba as datas como AAAA-MM-DD.
- Unha fila liga a tarefa a cada elemento cuxo **Field** teña exactamente ese **Value**. O campo é unha propiedade como Storey, Class, Name, Type, Material, Tag ou GlobalId, ou calquera propiedade escrita co seu conxunto e nome: `Pset_WallCommon.FireRating`.
- Repita unha tarefa en máis filas, coas mesmas datas, para ligarlle máis elementos.

## Etapas e paquetes de traballo

Engada unha columna **Stage**, unha columna **Package** ou ambas, para agrupar as tarefas en etapas e paquetes de traballo. Phase e WBS funcionan tamén como nomes de columna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Unha tarefa pertence a unha etapa e a un paquete. Se unha fila posterior da mesma tarefa indica outro, esa fila aparece listada co seu número de liña e déixase fóra.
- O mesmo nome de paquete en dúas etapas son dous paquetes.

Cando a lista ten grupos, aparece unha lista {{ui:Mostrar}} enriba da data. Escolla unha etapa ou un paquete e reprodúcese como un só:

- o control deslizante e {{ui:Reproducir}} van desde o primeiro inicio do grupo ata o último fin,
- só se listan e pintan as tarefas do grupo, e todo o que queda fóra do grupo se ve transparente,
- a liña debaixo da lista indica cantas tarefas do grupo están feitas, en curso e por vir nesa data,
- {{ui:Seleccionar os seus elementos}} selecciona todos os elementos do grupo, para {{ui:Mostrar}}, {{ui:Sección}} ou un cadro.

Escolla **Todas as tarefas** para ver de novo todo o cronograma.

## O que debe ver

- **Construído**: elementos cuxas tarefas están todas rematadas, coas súas propias cores.
- **En curso**: elementos cunha tarefa en marcha ese día, en ocre. Unha tarefa está en marcha desde a súa data de inicio ata a súa data de fin.
- **Sen comezar**: transparentes.
- Os elementos sen tarefa quedan como están. A lista indica cantos elementos atopou cada tarefa. As filas que non se puideron ler, ou que non atoparon nada, listanse cos seus números de liña.

## Ligazóns, o diagrama de Gantt e MS Project

- Abra un ficheiro XML de Microsoft Project (`.xml`) ou un CSV que teña unha columna `Predecessors`. As ligazóns poden ser fin a inicio, inicio a inicio, fin a fin ou inicio a fin, cada unha cun adianto ou atraso en días.
- Debaixo da lista de tarefas, o diagrama de Gantt debuxa cada tarefa como unha barra, con frechas para as ligazóns. As tarefas do camiño crítico son vermellas. Un bucle de ligazóns ou un predecesor que non existe lístase no panel.
- {{ui:Gardar como XML de MS Project}} e {{ui:Gardar CSV con ligazóns}} escriben de novo o cronograma coas súas ligazóns.

## Seguinte

- [Atopar elementos por clase, nome ou propiedade](topic:find)
- [Colorear elementos por unha propiedade](topic:color-by-property)
