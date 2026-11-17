---
title: Incidencias, revisións e historial de cambios do debuxo
summary: Rexistre cada conxunto de follas que entrega, vexa que cambiou desde entón en cada folla e elemento, e garde as instrucións de obra, os debuxos de taller e os modelos ligados á incidencia a que pertencen.
keywords: incidencia, conxunto emitido, conxunto entregado, entrega, revisión, revisións, que cambiou, desde a incidencia, historial de cambios, rexistro de debuxos, documento de remisión, instrución de obra, debuxo de taller, modelo ligado, licitación, construción, instantánea, comparar
from: 4c732832
---

## Que vai facer

Rexistre unha incidencia: que follas saíron, en que data, para que propósito, cada unha coa súa revisión. Despois, pregunte que cambiou desde esa incidencia. Garde as instrucións de obra e os debuxos de taller devoltos asociados á incidencia.

## Pasos

1. No panel esquerdo, abra **Incidencias e revisións**.
2. Escolla **Rexistrar unha incidencia**. A revisión suxírese (A, despois B; unha revisión numerada, como P1, avanza). Escolla para que se emite, a quen vai, a data e as follas. Cando o proxecto ten unha fase definida, o propósito segue a fase. Cando o paquete de permiso ten unha lista de documentos de apoio, as follas ligadas a esa lista márcanse por vostede.
3. Deixe marcado **Gardar tamén unha copia do modelo como emitido** para conservar o modelo exactamente como saíu. A copia descárgase; o seu nome, tamaño e SHA-256 gárdanse coa incidencia.
4. Escolla **Rexistrar esta incidencia**. Unha folla que cambiou desde a última emisión toma a nova revisión. Unha folla que non cambiou mantén a revisión que ten. A cartela de cada folla amosa a súa revisión.
5. Para ver que cambiou, escolla **Cambios desde**, ao lado dunha incidencia. Cada folla aparece como Igual ou Cambiada, cos elementos engadidos, cambiados e eliminados nela. Prema un número para seleccionar eses elementos.
6. Escolla **Engadir un rexistro** para unha instrución de obra, un debuxo de taller, un conxunto de anotacións, un modelo ligado ou unha nota. Escolla a incidencia á que corresponde. Un ficheiro que escolla regístrase polo seu nome, tamaño e SHA-256; o ficheiro queda onde está.
7. **Historial de cambios do debuxo** amosa unha fila por cada folla e unha columna por cada incidencia. **Descargar o historial de cambios (CSV)** gárdao coas incidencias e os rexistros.
8. **Gardar o historial de incidencias** escribe un ficheiro `.issues.json`. MarkupCraft, TakeoffCraft e DetailCraft len ese ficheiro con **Ler un historial de incidencias**.

## Bo que saber

- O historial gárdase dentro do ficheiro IFC (conxunto de propiedades `CadCraft_Issues` no proxecto). Outros programas ignórano.
- Unha folla conta como cambiada cando cambia a súa propia configuración, ou cando cambia un elemento que mostra: unha planta mostra o seu nivel, un alzado ou unha sección mostra todo o modelo, e un cadro de portas ou xanelas, as súas portas ou xanelas.
- Un elemento conta como cambiado cando cambia unha propiedade, a súa posición, o seu tamaño ou a súa forma.
- Para ver exactamente que propiedade cambiou, abra a copia gardada do modelo emitido con **Comparar versións**.
- Eliminar unha incidencia conserva os seus rexistros, sen incidencia. Cada paso é un Desfacer.
- Un modelo con máis de 60.000 elementos non garda un rexistro de cada elemento con cada incidencia. As follas seguen comparándose.

## Non está feito aínda

- As follas non se gardan como PDF coa incidencia.
- Unha nube de revisión non se debuxa nas follas do propio BimCraft. Rexistre as nubes en MarkupCraft asociadas á incidencia.
