---
title: Etiquetas de local y de área
summary: Coloque una etiqueta con el número, el nombre y el área en un local o un área. La etiqueta lo sigue y su tamaño se define por su altura en papel.
keywords: etiqueta, etiqueta de local, etiqueta de área, etiquetar local, etiquetar área, etiquetar todo, rótulo, altura del texto, altura en papel, anotación
from: 67059d8a
---

## Qué hará

Etiquete locales y áreas uno por uno o todos a la vez, y mueva una etiqueta a un lugar donde se lea bien.

## Dónde están las herramientas

- Diseños en cinta: {{ui:Arquitectura}} › **Local y área** › {{ui:Etiquetar local}} y {{ui:Etiquetar área}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}}.
- Un local o área seleccionado: Propiedades › {{ui:Agregar una etiqueta}}.

## Pasos

1. Elija {{ui:Etiquetar local}} y haga clic en un local, en el lugar donde debe quedar la etiqueta.
2. O presione {{ui:Etiquetar todo lo que no tiene etiqueta}} en la fila: a cada local de este nivel que no tenga etiqueta se le asigna una, en su centro. Es un solo paso de Deshacer.
3. Para mover una etiqueta, selecciónela con la herramienta Seleccionar y arrástrela. Propiedades tiene {{ui:Devolver al centro}}.
4. {{ui:Etiquetar área}} funciona igual para las áreas.

## Qué hace una etiqueta

- Indica el número, el nombre y el área, en sus unidades de visualización.
- Sigue a su local: si cambia el nombre del local o mueve un muro, las palabras y la posición de la etiqueta cambian en el mismo paso.
- Se define en papel: {{ui:Altura del texto en papel}} va en milímetros (2.5 para empezar). A una escala de vista de 1:50, una etiqueta de 2.5 mm mide 125 mm de alto en el modelo; a 1:100 mide 250 mm.
- Un local con etiqueta muestra la etiqueta en lugar de su rótulo simple.
- Cuando su local o área desaparece, la etiqueta desaparece con él. Deshacer restaura a ambos.

## En el IFC

Una etiqueta es un IfcAnnotation (ObjectType ROOMTAG o AREATAG) con su texto como literal de texto, y el GlobalId de lo que nombra. El texto del archivo indica el área en metros cuadrados.

## Aún no incluido

- Formas de etiqueta propias y una línea de directriz.
- Las etiquetas de puertas, ventanas y muros son una herramienta aparte (vea los estilos de etiqueta de las hojas).

Vea también [Locales y separadores de local](topic:rooms-and-separators).
