---
title: Etiquetas de habitaciones y áreas
summary: Coloque una etiqueta con el número, el nombre y la superficie en una habitación o en un área. La etiqueta la sigue y su tamaño depende de su altura en papel.
keywords: etiqueta, etiqueta de habitación, etiqueta de área, etiquetar habitación, etiquetar área, etiquetar todo, etiquetar todas las sin etiqueta, rótulo, altura del texto, altura en papel, anotación
from: 67059d8a
---

## Qué hará

Etiquete habitaciones y áreas una a una o todas a la vez, y mueva una etiqueta hasta un lugar donde se lea bien.

## Dónde están las herramientas

- Diseños de cinta: {{ui:Arquitectura}} › **Habitación y área** › {{ui:Etiquetar habitación}} y {{ui:Etiquetar superficie}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}}.
- Una habitación o área elegida: Propiedades › {{ui:Añadir una etiqueta}}.

## Pasos

1. Elija {{ui:Etiquetar habitación}} y haga clic en una habitación, donde debe ir la etiqueta.
2. O pulse {{ui:Etiquetar todas las sin etiqueta}} en la fila: cada habitación de esta planta que no tenga etiqueta recibe una, en su centro. Es un solo paso de Deshacer.
3. Para mover una etiqueta, selecciónela con Seleccionar y arrástrela. Propiedades tiene {{ui:Devolver al centro}}.
4. {{ui:Etiquetar superficie}} funciona igual para las áreas.

## Qué hace una etiqueta

- Indica el número, el nombre y la superficie, en sus unidades de visualización.
- Sigue a su habitación: si cambia el nombre de la habitación o mueve un muro, las palabras y la posición de la etiqueta cambian en el mismo paso.
- Su tamaño se define en el papel: {{ui:Altura del texto en papel}} se indica en milímetros (2.5 para empezar). En una vista a escala 1:50, una etiqueta de 2.5 mm mide 125 mm de alto en el modelo; a 1:100, 250 mm.
- Una habitación con etiqueta muestra la etiqueta en lugar de su rótulo simple.
- Cuando desaparece su habitación o área, la etiqueta desaparece con ella. Deshacer devuelve ambas.

## En el IFC

Una etiqueta es un IfcAnnotation (ObjectType ROOMTAG o AREATAG) con su texto como literal de texto, y el GlobalId de aquello que nombra. El texto del archivo indica la superficie en metros cuadrados.

## Todavía no disponible

- Formas de etiqueta propias y línea de referencia.
- Las etiquetas de puertas, ventanas y muros son una herramienta aparte (véanse los estilos de etiqueta de las hojas).

Véase también [Etiquetas de habitaciones y áreas](topic:rooms-and-separators).
