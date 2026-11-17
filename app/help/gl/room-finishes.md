---
title: Acabados dos cuartos e cuadros de acabados
summary: Indique o que cobre o chan, as paredes e o teito de cada cuarto, engada zonas como un salpicadeiro de azulexos, e obteña cuadros de acabados por cuarto, muro e zona, con superficies, recontos de azulexos incluídos os cortes e volumes de substrato.
keywords: acabado, acabados, cuadro de acabados, acabados dos cuartos, acabado de chan, acabado de muro, acabado de teito, rodapé, azulexo, azulexos, azulexos cortados, reconto de azulexos, desperdicio, substrato, capa de nivelación, placa de soporte, revoco, zona, salpicadeiro, friso, zona húmida, interior, cantidades
from: 8c30498c
---

## O que vai facer

Diga a BimCraft unha vez con que se acaba cada cuarto. Os cuadros de acabados dan entón as superficies, os azulexos que hai que pedir e os volumes de substrato, e cambian co modelo.

## Pasos

1. Active {{ui:Draw}}, abra **Cuadros** no panel esquerdo e prema en **Acabados dos cuartos**.
2. Baixo **Tipos de acabado**, prema en **Engadir un tipo de acabado**. Escriba un nome, un tipo (Azulexo, Folla, Capa ou Taboleiro) e un espesor. Para un azulexo, indique o largo e o ancho, a xunta e unha porcentaxe de desperdicio. Se hai algo debaixo do acabado (unha capa de nivelación, unha placa de soporte, unha capa de revoco), escriba o seu nome en **Substrato** e indique o seu espesor.
3. Baixo **Cuartos**, escolla o acabado do chan, das paredes e do teito de cada cuarto. Escriba o nome do rodapé e a súa altura se o cuarto o ten.
4. Baixo **Zonas**, prema en **Engadir unha zona** para unha parte dun cuarto que leva outro acabado:
   - unha zona de **muro** é unha banda entre dúas alturas sobre o chan (un salpicadeiro de azulexos de 0 a 1200, un friso). Está en todos os muros do cuarto, ou escolla os muros dese cuarto no modelo e prema no botón **Activar** para limitala a eles;
   - unha zona de **chan** ou de **teito** é unha superficie que escribe. Descóntase do propio acabado do cuarto.
5. Prema en **Gardar**. É un só paso de Desfacer. As lonxitudes escríbense nas unidades do proxecto.

## Os cuadros

Catro entradas únense á lista de Cuadros:

- **Acabados por cuarto**: cada cuarto co seu acabado de chan, de paredes e de teito, as súas superficies, e o rodapé coa súa lonxitude.
- **Acabados por muro**: cada tramo de muro do lado dun cuarto e a banda del que cobre un acabado, coa súa lonxitude, superficie bruta, descontos, superficie líquida e, para os azulexos, azulexos enteiros, azulexos cortados e azulexos a pedir.
- **Acabados por zona**: cada zona co seu acabado, superficie líquida, azulexos e volume de substrato.
- **Cantidades de acabados**: unha fila por acabado: superficie líquida, azulexos enteiros e cortados, azulexos a pedir, o substrato e o seu volume, e o volume propio do acabado.

Agrupe, totalice, garde e exporte os cuadros como calquera outro: vexa [Dispor, gardar e exportar un cuadro](topic:schedule-layouts). Prema nunha cifra para seleccionar a súa orixe: os descontos dun muro seleccionan as súas portas e xanelas.

## Como se miden os acabados

- **Muros**: cada tramo de muro do lado do cuarto, a súa lonxitude ao longo do cuarto por a altura que cobre o acabado, menos a parte de cada porta e xanela dentro desa altura. Un muro máis baixo que o cuarto acábase ata o seu propio alto. O método de medición do proxecto decide que aberturas son demasiado pequenas para descontar ([Cuadros](topic:plan-schedules-and-pdf)).
- **Chans e teitos**: o cuarto dentro das caras interiores dos muros, menos as illas que haxa nel.
- **Rodapés**: a lonxitude de muro do cuarto menos o ancho das súas portas.
- **Azulexos**: colocados nunha cuadrícula desde unha esquina da superficie, cunha xunta entre azulexos. Un azulexo totalmente sobre a superficie é un azulexo enteiro; un azulexo parcialmente sobre ela (nun bordo, arredor dunha abertura) é un azulexo cortado. Os azulexos a pedir son os enteiros máis os cortados, máis a porcentaxe de desperdicio, redondeados cara arriba. Cada azulexo cortado conta como un novo: os recortes non se reutilizan.
- **Volume de substrato**: a superficie líquida por o espesor do substrato.
- Un reconto marcado con **≈** calcúlase a partir da superficie, en lugar de dispoñer azulexo a azulexo: unha superficie á que se lle restou unha zona escrita, ou unha moi grande.

## Bo saber

- Os acabados gárdanse no ficheiro do edificio (conxunto de propiedades `CadCraft_Finishes` no proxecto). Cada cuarto que ten un acabado recibe tamén o conxunto de propiedades IFC estándar `Pset_SpaceCoveringRequirements`, para que outros programas lean os nomes.
- A disposición dos azulexos comeza nunha esquina. Non se calculan unha disposición centrada no cuarto, un padrón (espiña, aparello) nin a reutilización de recortes.
- Un muro curvo, e un límite de cuarto que non é un muro (un separador de cuarto), aparece como **Outro límite** coa súa lonxitude e sen aberturas.
- A entrada **Acabados** que había antes lista as capas de acabado dos tipos de muro; **Capas: superficie e volume** lista cada capa de cada tipo con capas. Os acabados de cuarto aquí son os que se aplican ao cuarto por riba desas.
- Un asistente pode fixar os acabados por vostede con `finishes_set`: vexa [Deixe que un asistente de IA traballe co seu modelo](topic:assistants).
