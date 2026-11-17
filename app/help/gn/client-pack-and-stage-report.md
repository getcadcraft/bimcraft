---
title: Paquete para el cliente, informe de etapa y comparación de opciones
summary: Cree un paquete para el cliente o un informe de etapa a partir del modelo, con las opciones de volumen comparadas por área y costo, áreas de piso, los planos con sus revisiones y el historial de emisiones. Cada cifra conserva los elementos que la originan.
keywords: paquete para el cliente, presentación, informe de etapa, informe, comparación de opciones, opciones, comparar opciones, área y costo, costo por opción, sin tarifa, volumen, áreas de piso, lista de planos, historial de emisiones, cifras, cifras vinculadas
from: f6679bf5
---

## Mba'e rejapóta

Arme un paquete para el cliente o un informe de etapa a partir del modelo tal como está ahora, y compare lado a lado las opciones de volumen guardadas por área y costo.

## Pasos

1. En el panel izquierdo, abra **Paquete para el cliente e informe de etapa**.
2. Elija **Abrir en Documentos** junto a Paquete para el cliente o Informe de etapa. El documento aparece en Documentos a partir del modelo, donde puede cambiar su texto.
3. En la vista previa, haga clic en una cifra para seleccionar los elementos que la originan.
4. Elija **Armar el paquete**. Se guarda un zip: el documento como PDF, una imagen vista 3D y `figures.csv`, que lista cada cifra con los GlobalId de sus elementos.

## Los campos

Puede usar estos en cualquier documento.

| Campo | Lo que imprime |
|---|---|
| `{{stage}}` | La etapa del proyecto según los datos del plano. |
| `{{options}}` | Las opciones de volumen guardadas, lado a lado: pisos, altura, huella, superficie bruta de piso, envolvente y costo. |
| `{{areas}}` | Área de piso por nivel, a partir de los ambientes. |
| `{{sheets}}` | Las hojas con la revisión en que están y la fecha de su última emisión. |
| `{{issues}}` | El historial de emisiones y el registro de cambios de los planos. |
| `{{changes}}` | Lo que cambió desde la última emisión, hoja por hoja. |

## Cómo se calculan los costos

El costo viene solo de la tabla de precios de su proyecto (Energía/Costo, costo 5D). No se estima nada por usted.

- Una fila de precios valora una opción solo cuando sus clases nombran `IfcBuildingElementProxy`.
- La superficie de piso se valora con una fila cuyas palabras nombran el uso de la opción, como oficina. Si no hay ninguna, se usa una fila con las palabras superficie bruta de piso o volumen de edificio. Una fila por m² usa la superficie bruta de piso. Una fila por m³ usa el volumen.
- La envolvente (perímetro por altura) se valora con una fila que tenga la palabra envolvente o fachada.
- Una opción sin fila que coincida muestra **Sin tarifa**. Un total se muestra solo cuando todas las partes pedidas tienen tarifa.

## Aikuaa porã

- Guarde opciones con **Guardar como opción** en la lista de volúmenes del programa de ambientes. Ver Opciones de volumen.
- Un PDF no puede seleccionar elementos. Fuera de BimCraft, `figures.csv` lleva el vínculo de cada cifra con sus elementos.

## Todavía no está hecho

- Las hojas y las vistas dibujadas no se colocan dentro del documento. El paquete solo contiene una imagen de la vista 3D.
