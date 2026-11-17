---
title: Superficies y límites de superficie
summary: Medí la superficie bruta del edificio o la superficie alquilable dentro de líneas límite que dibujás o tomás de los muros, y listá las superficies en una planilla.
keywords: superficie, superficies, límite de superficie, esquema de superficie, superficie bruta del edificio, superficie bruta de piso, GFA, alquilable, plano de superficies, planilla de superficies, elegir muros, sin cerrar
from: c79f96d2
---

## Mba'e ejapóta

Dibujá los límites de un esquema de superficies, ubicá superficies dentro de ellos y leé los totales.

## Dónde están las herramientas

- Diseño de cinta: {{ui:Architecture}} › **Ambiente y superficie** › {{ui:Area}} y {{ui:Area Boundary}}.
- Diseño clásico: la barra de Dibujar › menú {{ui:Rooms}}.

## Pasos

1. Elegí {{ui:Area Boundary}}. En la fila elegí el {{ui:Scheme}}: Gross building o Rentable. Cada esquema tiene sus propios límites.
2. Elegí cómo hacer las líneas en {{ui:Make by}}:
   - **Draw**: hacé clic punto por punto.
   - **Pick walls: centre line**: hacé clic en un muro, y su línea central es un límite.
   - **Pick walls: the face clicked**: hacé clic en un muro del lado que querés; esa cara es el límite. Para la superficie bruta del edificio, hacé clic en el exterior de los muros exteriores.
3. Elegí {{ui:Area}}. Elegí el mismo esquema, escribí un nombre, número o tipo si querés, y hacé clic dentro de los límites.
4. La superficie se mide de inmediato. Seleccionala para cambiar su nombre, número o tipo en Propiedades.

## Qué depende de qué

- Un límite hecho eligiendo un muro sigue a ese muro: si mové el muro, la superficie se vuelve a medir en el mismo paso.
- Un límite que dibujaste queda donde lo dibujaste.
- Las caras de muros que se encuentran en una esquina también se encuentran allí, así que cuatro muros elegidos cierran una superficie sin huecos.
- Los límites de superficie se muestran en el plano mientras tenés en mano una herramienta de ambiente o superficie, así que no ensucian el plano el resto del tiempo.

## Si los límites no cierran

La superficie igual queda ubicada. Dice **Not enclosed** y no mide nada hasta que los límites la cierren. Es solo un aviso: no se rechaza nada.

## La planilla

Panel izquierdo › {{ui:Schedules}} › **Areas**: esquema, número, nombre, tipo, nivel, superficie y perímetro, con un total. Un clic en una fila selecciona la superficie. {{ui:Download CSV}} da la misma tabla.

## En el IFC

Una superficie es un IfcSpace sin cuerpo: PredefinedType GFA para el esquema de superficie bruta del edificio, USERDEFINED con ObjectType Rentable para la alquilable. Lleva GrossFloorArea y GrossPerimeter, y no lleva superficie neta, para que no se confunda con un ambiente. Un límite es un IfcVirtualElement.

## Todavía no está hecho

- Esquemas propios (solo están Gross building y Rentable).
- Rellenos de color por tipo de superficie.
- Reglas que ubiquen el límite por vos, como "hasta la línea del vidrio".

Ver también [Ambientes y separadores de ambientes](topic:rooms-and-separators), [Etiquetas de ambiente y superficie](topic:room-and-area-tags).
