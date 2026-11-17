---
title: Paquetes para el cliente, informes de fase y comparación de opciones
summary: Genere un paquete para el cliente o un informe de fase a partir del modelo, con las opciones de volumetría comparadas por superficie y coste, superficies de planta, los planos con sus revisiones y el historial de emisiones. Cada cifra conserva los elementos en los que se basa.
keywords: paquete para el cliente, presentación, informe de fase, informe, comparación de opciones, opciones, comparar opciones, superficie y coste, coste por opción, sin tarifa, volumetría, lista de planos, historial de emisiones, cifras, cifras vinculadas
from: f6679bf5
---

## Qué hará

Genere un paquete para el cliente o un informe de fase a partir del modelo tal como está ahora, y compare lado a lado las opciones de volumetría guardadas por superficie y coste.

## Pasos

1. En el panel izquierdo, abra **Paquete para el cliente e informe de fase**.
2. Elija **Abrir en Documentos** junto a Paquete para el cliente o Informe de fase. El documento aparece en Documentos a partir del modelo, donde puede cambiar su texto.
3. En la vista previa, haga clic en una cifra para seleccionar los elementos en los que se basa.
4. Elija **Generar el paquete**. Se guarda un zip con el documento en PDF, una imagen de la vista 3D y `figures.csv`, que enumera cada cifra con los GlobalId de sus elementos.

## Los campos

Puede usar estos en cualquier documento.

| Campo | Lo que imprime |
|---|---|
| `{{stage}}` | La fase del proyecto según los datos del plano. |
| `{{options}}` | Las opciones de volumetría guardadas, lado a lado: plantas, altura, huella, superficie construida bruta, envolvente y coste. |
| `{{areas}}` | Superficie de planta por nivel, a partir de los espacios. |
| `{{sheets}}` | Los planos con la revisión en la que están y la fecha de su última emisión. |
| `{{issues}}` | El historial de emisiones y el registro de cambios de los planos. |
| `{{changes}}` | Lo que ha cambiado desde la última emisión, plano a plano. |

## Cómo se calculan los costes

El coste procede solo de la tabla de precios de su proyecto (Energía/Coste, coste 5D). No se estima nada por usted.

- Una fila de precios solo asigna precio a una opción cuando sus clases mencionan `IfcBuildingElementProxy`.
- La superficie de planta se valora con una fila cuyas palabras mencionen el uso de la opción, como oficina. Si no hay ninguna, se usa una fila con las palabras superficie construida bruta o masa del edificio. Una fila por m² usa la superficie construida bruta. Una fila por m³ usa el volumen.
- La envolvente (perímetro por altura) se valora con una fila que tenga la palabra envolvente o fachada.
- Una opción sin fila correspondiente muestra **Sin tarifa**. Solo se muestra un total cuando todas las partes solicitadas tienen tarifa.

## Conviene saber

- Conserve opciones con **Guardar como opción** en la lista de volumetría del programa de necesidades. Véase Opciones de volumetría.
- Un PDF no permite seleccionar elementos. Fuera de BimCraft, `figures.csv` conserva el vínculo de cada cifra con sus elementos.

## Aún no disponible

- Los planos y las vistas dibujadas no se colocan dentro del documento. El paquete solo contiene una imagen de la vista 3D.
