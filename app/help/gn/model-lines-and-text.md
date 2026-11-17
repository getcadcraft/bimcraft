---
title: Líneas y texto del modelo: dibujados en el modelo, sobre el plano de trabajo
summary: Peteĩ línea del modelo ha línea, polilínea térã arco oikóva modelo-pe ha ohechaukáva opavave vistakuérape ohecháva. Texto del modelo ha tembiasakue 3D profundidad realdiferente. Ambue oñemboguejýva plano de trabajo-pe.
keywords: línea del modelo, texto del modelo, texto 3D, tembiasakue, señal, cartelería, línea en 3D, arco, polilínea, plano de trabajo, texto extruido, fuente, profundidad, línea de detalle, línea de dibujo, anotación, IfcAnnotation
from: fc9cccb5
---

## Mba'épa rejapóta

Ejapo línea ha tembiasakue oĩva modelo-pe, ndaha'éi peteĩ vista-pe.

## Tapykue

1. Emoĩ primero plano de trabajo (ehecha **El plano de trabajo**). Nivel plano planta-pe ojejapo; plano vertical Work Plane Viewer-pe.
2. Línea-pe eiporavo **Línea del modelo** menú **Build**-pe ha eporavo **Línea**, **Polilínea** térã **Arco (tres puntos)**:
   - línea: mokõi clic;
   - polilínea: clic peteĩ punto-pe, upe rire Enter térã doble clic. Clic punto primero-pe ojerrema;
   - arco: mbohapy clic: comienzo, punto oguahéva ryepýpe, final.
3. Texto-pe eiporavo **Texto del modelo**. Emoĩ tembiasakue, emoĩ altura de mayúscula ha profundidad, upe rire ejapo clic onde texto oñepyrũ (izquierda del baseline).
4. Eporavo línea térã texto **Propiedades**-pe ehecha hag̃ua. Tembiasakue, altura ha profundidad oñekambia upégui. Eliminar omboguejy.

## Mba'épa ohechauka

- Línea del modelo ohechauka nivel planta-pe, 3D vista-pe, elevación ha sección panel-pe ha Work Plane Viewer-pe plano de trabajo-pe oĩramo. Línea de dibujo (Annotate, Line) peteĩ vista añónte oĩ.
- Texto del modelo sólido geometría: ohechauka opavave modelo ohechaukáva-pe, planta-pe, 3D-pe, elevación ha sección-pe ha hoja-kuéra-pe.
- Línea del modelo ndojeimprimíi hojas-pe ko'ã. Texto del modelo ojeimprimi.

## Fuente

Texto del modelo oiporu fuente hoja ha PDF-kuéra ndive: Liberation Sans, SIL Open Font License rupive. Letra fuente ndoguerekóiva ohechauka signo de interrogación ha ojehechauka mbaʼépa. Peteĩ fuente ha peteĩ peso. Letra-kuéra espacio ojejapo fuente anchura-gui, kerning ndaiporiva.

## IFC archivo-pe

- Línea del modelo oĩ IfcAnnotation tipo de objeto ModelLine ndive. Forma peteĩ curva 3D: polilínea, térã círculo recortado arco-pe.
- Texto del modelo oĩ IfcBuildingElementProxy tipo de objeto ModelText ndive. Forma peteĩ sólido extruido letra pieza ndive, letra O ha B-icha agujero ndive. Cantidades: área de cara ha volumen (área de cara jeitépe profundidad).

## Mba'e porã ecuaaséva

- Tamaño opavave ojapóva ejerokýva. Línea ndaiporiva largo, arco mbohapy punto peteĩ línea-pe, térã texto ndaiporiva letra ojejapo'ỹva; upéva ndojejapóiva.
- Línea opavave, texto térã ojekambiáva peteĩ paso Undo-pe.
