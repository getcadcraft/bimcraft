---
title: Paquetes para el cliente, informes de etapa y comparación de opciones
summary: Haga un paquete para el cliente o un informe de etapa a partir del modelo, con las opciones de volumetría comparadas por área y costo, áreas de piso, los planos con sus revisiones y el historial de emisiones. Cada cifra conserva los elementos detrás de ella.
keywords: paquete para el cliente, presentación, informe de etapa, informe, comparación de opciones, opciones, comparar opciones, área y costo, costo por opción, sin tarifa, volumetría, áreas de piso, lista de planos, historial de emisiones, cifras, cifras vinculadas
from: f6679bf5
---

## Qué hará

Genere un paquete para el cliente o un informe de etapa a partir del modelo tal como está ahora, y compare lado a lado las opciones de volumetría guardadas por área y costo.

## Pasos

1. En el panel izquierdo, abra **Paquete para el cliente e informe de etapa**.
2. Elija **Abrir en Documentos** junto a Paquete para el cliente o Informe de etapa. El documento aparece en Documentos a partir del modelo, donde puede cambiar su texto.
3. En la vista previa, haga clic en una cifra para seleccionar los elementos detrás de ella.
4. Elija **Generar el paquete**. Se guarda un zip con: el documento en PDF, una imagen de la vista 3D y `figures.csv`, que enumera cada cifra con los GlobalIds de sus elementos.

## Los campos

Puede usar estos en cualquier documento.

| Campo | Qué imprime |
|---|---|
| `{{stage}}` | La etapa del proyecto según los datos del dibujo. |
| `{{options}}` | Las opciones de volumetría guardadas, lado a lado: niveles, altura, huella, área bruta de piso, envolvente y costo. |
| `{{areas}}` | Área de piso por nivel, a partir de los espacios. |
| `{{sheets}}` | Las hojas con la revisión en que están y la fecha en que se emitieron por última vez. |
| `{{issues}}` | El historial de emisiones y el registro de cambios del dibujo. |
| `{{changes}}` | Lo que cambió desde la última emisión, hoja por hoja. |

## Cómo se costean las opciones

El costo proviene solo de la tabla de precios de su proyecto (Energía/Costo, costo 5D). No se estima nada por usted.

- Una fila de precios valora una opción solo cuando sus clases mencionan `IfcBuildingElementProxy`.
- El área de piso se valora con una fila cuyas palabras mencionan el uso de la opción, como oficina. Si no hay ninguna, se usa una fila con las palabras área bruta de piso o masa del edificio. Una fila por m² usa el área bruta de piso. Una fila por m³ usa el volumen.
- La envolvente (perímetro por altura) se valora con una fila que tenga la palabra envolvente o fachada.
- Una opción sin fila correspondiente muestra **Sin tarifa**. Un total solo se muestra cuando todas las partes solicitadas tienen tarifa.

## Conviene saber

- Guarde las opciones con **Guardar como opción** en la lista de volumetría del programa arquitectónico. Vea Opciones de volumetría.
- Un PDF no puede seleccionar elementos. Fuera de BimCraft, `figures.csv` lleva el vínculo de cada cifra con sus elementos.

## Aún no incluido

- Las hojas y las vistas dibujadas no se colocan dentro del documento. El paquete contiene solo una imagen de la vista 3D.
