---
title: Ductos y vanos a través de losas
summary: Un ducto es un solo contorno que corta cada piso, techo y cubierta entre dos niveles. Un vano vertical corta uno de ellos. Vano en muro corta un muro.
keywords: ducto, ducto de elevador, hueco de elevador, abertura de escalera, contrahuella, vano vertical, abertura en piso, abertura en techo, abertura en cubierta, abertura de tragaluz, agujero en piso, vano en muro, IfcOpeningElement, deducción, área neta
from: 8e9e1641
---

## Lo que hará

Corte un ducto de elevador a través de un edificio con un solo croquis, haga un agujero en un piso y lea lo que se descontó de las áreas.

## Dónde están las herramientas

- Diseños de cinta: {{ui:Arquitectura}} › **Abertura** › {{ui:Ducto}}, {{ui:Vano vertical}} y {{ui:Vano en muro}}.
- Diseño clásico: la barra {{ui:Dibujo}} › menú {{ui:Habitaciones}} (Ducto, Vano vertical) y › menú {{ui:Muros}} (Vano en muro).

## Un ducto

1. Abra el plano del nivel donde empieza el ducto. Elija {{ui:Ducto}}.
2. En la fila elija el {{ui:Nivel base}} y el {{ui:Nivel superior}}, y los desfases si empieza o termina por encima o por debajo de ellos.
3. Haga clic en las esquinas del contorno. Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar.
4. Se corta cada piso, techo y cubierta entre las dos alturas. La línea de estado indica cuántos.

Un ducto es un solo objeto. Designe su contorno en cualquier nivel que atraviese: en **Propiedades** están su nombre, sus niveles y desfases, lo que corta y el área descontada. Si lo cambia, cada vano lo sigue. Si lo elimina, desaparecen todos los vanos. Cada acción es un paso de deshacer.

Sigue cortando: un piso creado después entre sus niveles se corta sin que se lo pida, y un piso que elimine deja de cortarse.

El piso sobre el que se apoya el ducto no se corta (su parte superior es la base). Dé a la base un desfase negativo para cortarlo también. Dé a la parte superior un desfase positivo para atravesar la cubierta.

## Un vano vertical

1. Elija {{ui:Vano vertical}}. En la fila elija qué cortar: el piso, el techo o la cubierta.
2. Haga clic en las esquinas del contorno y termine como se indicó arriba.
3. Se corta el piso, el techo o la cubierta de este nivel bajo el contorno. Pertenece a ese único elemento: si elimina el piso, el vano se va con él.

## Un vano en muro

{{ui:Vano en muro}} es la herramienta de [Dar forma a un muro](topic:wall-shape): haga clic en un muro en la planta, o en dos esquinas de su cara en 3D.

## Cantidades

Según la regla de medición para pisos, el área neta de un elemento es su área bruta menos lo que se corta de él. Un ducto o un vano vertical es una deducción en cada piso y techo que corta; las tablas de Pisos y acabados y las cantidades IFC muestran los mismos números. En una cubierta, la deducción es el área de la superficie de la cubierta: el área en planta dividida entre el coseno de la pendiente.

Un contorno que sobresale del borde descuenta solo la parte que está sobre el elemento.

## Si no se corta nada

Un ducto sin nada en su camino se crea igual y lo indica: cortará lo que se construya ahí después. Un vano vertical necesita algo debajo; si no hay nada, la línea de estado lo indica y no se crea nada.

## En el IFC

Cada corte es un IfcOpeningElement con IfcRelVoidsElement hacia el elemento que corta, así que cualquier programa IFC muestra el hueco. Una cubierta se corta cara por cara. El ducto en sí es un IfcGroup de sus vanos.

## Aún no disponible

- Contornos curvos.
- Los muros de un ducto: dibújelos con la herramienta Muro.
- Editar el contorno arrastrando sus esquinas (cámbielo en Propiedades, o elimínelo y croquice de nuevo).
- Las propiedades de un piso dibujado muestran su área menos solo sus propios vanos; las tablas y las cantidades IFC incluyen los del ducto.

Vea también [Habitaciones y separadores de habitación](topic:rooms-and-separators).
