---
title: Reprodueix una planificació d'obra sobre el model
summary: Obriu una llista de tasques en CSV, enllaceu cada tasca amb els elements per una propietat, i avanceu per les dates per veure què està construït, en curs i encara no iniciat.
keywords: 4d, planificació, seqüència d'obra, línia de temps, fasament, programa, gantt, tasques, dates, simulació, progrés, construït, csv, etapa, fase, paquet de treball, wbs, grup
from: 1b985a64
---

## Què fareu

Veureu com s'aixeca l'edifici: cada tasca de la planificació enllaçada amb els elements que construeix, mostrada dia a dia.

## Passos

1. Obriu un model IFC i obriu {{ui:Planificació 4D}} al panell esquerre.
2. Cliqueu {{ui:Baixa una plantilla}} per obtenir una llista de tasques amb una setmana per planta, i canvieu-la en un full de càlcul. O escriviu-ne una de pròpia.
3. Cliqueu {{ui:Obre una llista de tasques…}} i trieu el CSV.
4. Arrossegueu el control lliscant de dates, o cliqueu {{ui:Reprodueix}}.

## La llista de tasques

Un CSV amb una fila de capçalera i les columnes **Task**, **Start**, **Finish**, **Field** i **Value**. Les comes o els punts i comes funcionen igual.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Escriviu les dates com a AAAA-MM-DD.
- Una fila enllaça la tasca amb cada element el **Field** del qual té exactament aquest **Value**. El camp és una propietat com Storey, Class, Name, Type, Material, Tag o GlobalId, o qualsevol propietat escrita amb el seu conjunt i nom: `Pset_WallCommon.FireRating`.
- Repetiu una tasca en més files, amb les mateixes dates, per enllaçar-hi més elements.

## Fases i paquets de treball

Afegiu una columna **Stage**, una columna **Package**, o totes dues, per agrupar les tasques en fases i paquets de treball. **Phase** i **WBS** també funcionen com a noms de columna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Una tasca pertany a una fase i a un paquet. Si una fila posterior de la mateixa tasca n'indica una altra, aquella fila es llista amb el seu número de línia i s'omet.
- El mateix nom de paquet en dues fases són dos paquets.

Quan la llista té grups, apareix una llista {{ui:Mostra}} sobre la data. Trieu una fase o un paquet i es reprodueix com un sol conjunt:

- el control lliscant i {{ui:Reprodueix}} van des de l'inici més primerenc del grup fins a l'acabament més tardà,
- només es llisten i es pinten les tasques del grup, i tot el que és fora del grup és transparent,
- la línia sota la llista indica quantes de les seves tasques estan fetes, en curs i pendents en aquella data,
- {{ui:Selecciona'n els elements}} selecciona tots els elements del grup, per a {{ui:Mostra}}, {{ui:Secció}} o un quadre.

Trieu **Totes les tasques** per tornar a veure tota la planificació.

## Què hauríeu de veure

- **Construït**: elements amb totes les tasques acabades, en els seus propis colors.
- **En curs**: elements amb una tasca en curs aquell dia, en ocre. Una tasca està en curs des de la data d'inici fins a la data de fi.
- **No iniciat**: transparent.
- Els elements que no són en cap tasca es queden com estan. La llista indica quants elements ha trobat cada tasca. Les files que no s'han pogut llegir, o que no han trobat res, es llisten amb els seus números de línia.

## Enllaços, el diagrama de Gantt i MS Project

- Obriu un fitxer XML de Microsoft Project (`.xml`) o un CSV que tingui una columna `Predecessors`. Els enllaços poden ser de fi a inici, d'inici a inici, de fi a fi o d'inici a fi, cadascun amb un avanç o un retard en dies.
- Sota la llista de tasques, el diagrama de Gantt dibuixa cada tasca com una barra, amb fletxes per als enllaços. Les tasques del camí crític són en vermell. Un bucle d'enllaços o un predecessor que no existeix es llista al panell.
- {{ui:Desa com a XML de MS Project}} i {{ui:Desa el CSV amb els enllaços}} escriuen la planificació de nou amb els seus enllaços.

## Següent

- [Cerca elements per classe, nom o propietat](topic:find)
- [Acoloreix els elements per una propietat](topic:color-by-property)
