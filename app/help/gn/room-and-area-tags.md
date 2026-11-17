---
title: Etiquetas de ambientes y superficies
summary: Colocá una etiqueta con el número, el nombre y la superficie en un ambiente o una superficie. La etiqueta lo sigue y su tamaño depende de su altura en papel.
keywords: etiqueta, etiqueta de ambiente, etiqueta de superficie, etiquetar ambiente, etiquetar superficie, etiquetar todo, rótulo, altura del texto, altura en papel, anotación
from: 67059d8a
---

## Lo que vas a hacer

Etiquetá ambientes y superficies uno por uno o todos juntos, y mové una etiqueta a un lugar donde se lea bien.

## Dónde están las herramientas

- Diseños de cinta: {{ui:Arquitectura}} › **Ambiente y Superficie** › {{ui:Etiquetar ambiente}} y {{ui:Etiquetar superficie}}.
- Diseño clásico: la barra de {{ui:Dibujar}} › menú {{ui:Ambientes}}.
- Un ambiente o superficie seleccionado: Propiedades › {{ui:Agregar una etiqueta}}.

## Pasos

1. Elegí {{ui:Etiquetar ambiente}} y hacé clic en un ambiente, donde debe quedar la etiqueta.
2. O presioná {{ui:Etiquetar todos los no etiquetados}} en la fila: cada ambiente de este nivel que no tenga etiqueta recibe una en su centro. Es un solo paso de Deshacer.
3. Para mover una etiqueta, selecciónala con Seleccionar y arrastrala. Propiedades tiene {{ui:Volver a ponerla en el medio}}.
4. {{ui:Etiquetar superficie}} funciona igual para las superficies.

## Lo que hace una etiqueta

- Muestra el número, el nombre y la superficie, en tus unidades de visualización.
- Sigue a su ambiente: si renombrás el ambiente, mové un muro, las palabras y el lugar de la etiqueta cambian en el mismo paso.
- Su tamaño se define en papel: {{ui:Altura del texto en papel}} va en milímetros (2,5 para empezar). A una escala de vista 1:50, una etiqueta de 2,5 mm mide 125 mm de alto en el modelo; a 1:100 mide 250 mm.
- Un ambiente con etiqueta muestra la etiqueta en lugar de su rótulo simple.
- Cuando su ambiente o superficie desaparece, la etiqueta se va con él. Deshacer las vuelve a poner a las dos.

## En el IFC

Una etiqueta es un IfcAnnotation (ObjectType ROOMTAG o AREATAG) con su texto como literal de texto, y el GlobalId de lo que nombra. El texto del archivo indica la superficie en metros cuadrados.

## Todavía no está hecho

- Formas de etiqueta propias y una línea de referencia.
- Las etiquetas de puertas, ventanas y muros son una herramienta aparte (ver los estilos de etiqueta de las hojas).

Ver también [Ambientes y separadores de ambientes](topic:rooms-and-separators).
