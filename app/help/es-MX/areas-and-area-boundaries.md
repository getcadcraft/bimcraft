---
title: Áreas y límites de área
summary: Mida el área bruta de edificación o el área rentable dentro de las líneas de límite que dibuje o tome de los muros, y liste las áreas en un cuadro.
keywords: área, áreas, límite de área, esquema de área, área bruta de edificación, área bruta de piso, GFA, rentable, plano de áreas, cuadro de áreas, seleccionar muros, sin cerrar
from: c79f96d2
---

## Qué hará

Dibuje los límites de un esquema de áreas, coloque áreas dentro de ellos y lea los totales.

## Dónde están las herramientas

- Diseños con cinta: {{ui:Arquitectura}} › **Habitación y área** › {{ui:Área}} y {{ui:Límite de área}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}}.

## Pasos

1. Elija {{ui:Límite de área}}. En la fila, elija el {{ui:Esquema}}: Bruto de edificación o Rentable. Cada esquema tiene sus propios límites.
2. Elija cómo hacer las líneas en {{ui:Crear por}}:
   - **Dibujar**: haga clic punto por punto.
   - **Seleccionar muros: línea central**: haga clic en un muro, y su línea central será un límite.
   - **Seleccionar muros: la cara pulsada**: haga clic en un muro del lado que quiera; esa cara será el límite. Para el área bruta de edificación, haga clic en el exterior de los muros exteriores.
3. Elija {{ui:Área}}. Elija el mismo esquema, escriba un nombre, número o tipo si lo desea, y haga clic dentro de los límites.
4. El área se mide de inmediato. Selecciónela para cambiar su nombre, número o tipo en Propiedades.

## Qué sigue a qué

- Un límite hecho al seleccionar un muro sigue a ese muro: si mueve el muro, el área se vuelve a medir en el mismo paso.
- Un límite que dibujó se queda donde lo dibujó.
- Las caras de muros que se encuentran en una esquina también se encuentran allí, así que cuatro muros seleccionados cierran un área sin huecos.
- Los límites de área se muestran en la planta mientras tiene en uso una herramienta de habitación o de área, así que no saturan la planta el resto del tiempo.

## Si los límites no cierran

El área igual queda colocada. Dice **No cerrada** y no mide nada hasta que los límites la cierren. Es un aviso: no se rechaza nada.

## El cuadro

Panel izquierdo › {{ui:Tablas}} › **Áreas**: esquema, número, nombre, tipo, nivel, área y perímetro, con un total. Un clic en una fila selecciona el área. {{ui:Descargar CSV}} entrega la misma tabla.

## En el IFC

Un área es un IfcSpace sin cuerpo: PredefinedType GFA para el esquema bruto de edificación, y USERDEFINED con ObjectType Rentable para el rentable. Lleva GrossFloorArea y GrossPerimeter, y no lleva área neta, para que no se confunda con una habitación. Un límite es un IfcVirtualElement.

## Aún no disponible

- Esquemas propios (solo Bruto de edificación y Rentable).
- Rellenos de color por tipo de área.
- Reglas que colocan el límite por usted, como "hasta la línea del vidrio".

Vea también [Habitaciones y separadores de habitación](topic:rooms-and-separators) y [Etiquetas de habitación y de área](topic:room-and-area-tags).
