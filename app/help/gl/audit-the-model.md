---
title: Auditar o modelo: cuartos, etiquetas, LOD, interferencias e interfaces
summary: Execute comprobacións listas para cuartos sen nome, etiquetas que faltan, elementos por debaixo do nivel de desenvolvemento que pide a fase do proxecto, interferencias entre disciplinas e interfaces LOD 350. Só consello: non se bloquea nada.
keywords: auditoría, comprobar, cuarto sen nome, etiqueta que falta, marca, lod, nivel de desenvolvemento, fito, fase, interferencia, disciplina, coordinación, interface, lod 350, oco, dintel, viga de cabezal, paso, manga, tubaxe, conduto, problemas, informe de comprobación, consultivo
from: cc83a14d
---

## O que vai facer

Revise todo o modelo dunha vez antes de emitilo. A auditoría executa os conxuntos de regras listos e coloca o que atopa na lista {{ui:Problemas}} como consello. Non se bloquea nada: corrixe un achado ou acéptao cun motivo, como calquera outro problema.

## Pasos

1. Abra {{ui:Comprobacións do modelo}} › {{ui:Auditoría}} no panel esquerdo, ou {{ui:Ferramentas}} › {{ui:Auditar o modelo…}} (escrito: `AUDIT`).
2. Escolla a {{ui:Fase do proxecto}}. É a mesma fase que nos detalles do debuxo.
3. Marque os conxuntos de regras que se van executar.
4. Prema en {{ui:Executar a auditoría}}.
5. Lea a liña de cada conxunto de regras e logo {{ui:Abrir a lista de Problemas}}. Un clic nun achado escolle o seu elemento.
6. {{ui:O informe de comprobación}} descarga o informe: cada achado, quen aceptou que e por que, e os conxuntos de regras que se executaron.

## Os conxuntos de regras

- **Cuartos sen nome**: un cuarto sen nome, ou que aínda se chama como o chamou o programa («Room 3»).
- **Etiquetas que faltan**: unha porta ou xanela sen marca, un cuarto sen número, un dispositivo eléctrico sen etiqueta.
- **Elementos por debaixo do LOD da fase**: cada muro, piso, teito, cuberta, porta e xanela cuxo LOD está por debaixo do que pide a fase. Un elemento lee a etiqueta LOD do seu tipo; un elemento verificado en obra é LOD 500. Os elementos sen etiqueta contanse nunha única nota, porque non se poden comprobar.
- **Interferencias entre disciplinas**: elementos de dúas disciplinas (arquitectura, estrutura, mecánica, fontanería, electricidade, pola clase IFC) que se atopan entre si. Unha cuberta apoiada nos seus muros non se conta.
- **Interfaces LOD 350**: cada porta e xanela está nun oco do seu muro, o oco cabe dentro do muro, dous ocos non se solapan, un oco máis ancho que o límite ten un dintel ou viga de cabezal (un elemento por riba, ou unha nota na porta ou xanela), e unha tubaxe, conduto ou bandexa de cables que atravesa un muro ou laxe ten alí un oco. Os achados contanse por cada par de disciplinas.
- **Elementos recoñecidos que ninguén comprobou**: muros, portas, xanelas e cuartos lidos dun PDF, un escaneado ou un debuxo que aínda non están verificados. Ver [Marcar elementos como comprobados ou verificados en obra](topic:verification).

## O LOD que pide cada fase

Abra {{ui:O LOD que pide cada fase}} para ver ou cambiar a táboa.

:::note
A táboa e a largura do dintel son os valores iniciais de CadCraft. Non se toman dunha norma: un proxecto fixa o LOD por fase no seu plan de execución BIM. Estableza os seus. Unha oficina pode fixar a táboa para todos en Configuración › Default Policies › Auditoría; un cambio na sección Auditoría consérvase neste ordenador.
:::

## Cousas que conviña saber

- Un dintel pode anotarse en lugar de modelarse: escolla a porta ou xanela e cubra {{ui:Nota de dintel ou viga de cabezal}} baixo {{ui:Verificación}} en Propiedades.
- Unha tubaxe que pasa por un oco real non atravesa ningunha superficie e non se informa. Unha que se modela atravesando o muro, si.
- A comprobación de interferencias para ao cabo duns segundos nun modelo moi grande e di iso. Para unha comprobación completa de dous conxuntos escollidos use [Atopar interferencias entre elementos](topic:clash-check).
- Execute de novo a auditoría despois de cambiar o modelo. Os achados aceptados seguen aceptados mentres non cambien os seus números.
- Lé o modelo. Non substitúe unha revisión de coordinación polas persoas responsables.

## Seguinte

- [Comprobar un modelo por problemas habituais](topic:model-checks)
- [Atopar interferencias entre elementos](topic:clash-check)
- [Marcar elementos como comprobados ou verificados en obra](topic:verification)
