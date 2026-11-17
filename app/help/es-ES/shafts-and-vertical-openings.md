---
title: Patinillos y huecos a través de forjados
summary: Un patinillo es un único contorno que corta todos los forjados, techos y cubiertas entre dos niveles. Una abertura vertical corta uno de ellos. Hueco en muro corta un muro.
keywords: patinillo, hueco de ascensor, hueco de escalera, tabica, abertura vertical, abertura en forjado, abertura en techo, abertura en cubierta, claraboya, agujero en forjado, hueco en muro, IfcOpeningElement, deducción, área neta
from: 8e9e1641
---

## Qué hará

Corte un hueco de ascensor a través de un edificio con un solo croquis, haga un agujero en un forjado y lea lo que se ha quitado de las áreas.

## Dónde están las herramientas

- Diseños de cinta: {{ui:Arquitectura}} › **Abertura** › {{ui:Patinillo}}, {{ui:Abertura vertical}} y {{ui:Hueco en muro}}.
- Diseño clásico: la barra de Dibujo › menú {{ui:Habitaciones}} (Patinillo, Abertura vertical) y › menú {{ui:Muros}} (Hueco en muro).

## Un patinillo

1. Abra el plano de planta de la planta en la que empieza el patinillo. Elija {{ui:Patinillo}}.
2. En la fila elija la {{ui:Planta base}} y la {{ui:Planta superior}}, y los desfases si empieza o termina por encima o por debajo de ellas.
3. Haga clic en las esquinas del contorno. Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar.
4. Se corta cada forjado, techo y cubierta entre las dos alturas. La línea de estado indica cuántos.

Un patinillo es una sola cosa. Designe su contorno en cualquier planta que atraviese: **Propiedades** muestra su nombre, sus niveles y desfases, lo que corta y el área retirada. Si lo modifica, cada abertura se ajusta. Si lo borra, desaparece cada abertura. Cada acción es un único paso de Deshacer.

Sigue cortando: un forjado creado más tarde entre sus niveles se corta sin pedirlo, y un forjado que borre deja de cortarse.

El forjado sobre el que se apoya el patinillo no se corta (su cara superior es la base). Dé a la base un desfase negativo para cortarlo también. Dé a la planta superior un desfase positivo para atravesar la cubierta.

## Una abertura vertical

1. Elija {{ui:Abertura vertical}}. En la fila elija qué cortar: el forjado, el techo o la cubierta.
2. Haga clic en las esquinas del contorno y termine como se indicó arriba.
3. Se corta el forjado, techo o cubierta de esta planta bajo el contorno. Pertenece a ese único elemento: si borra el forjado, la abertura desaparece con él.

## Un hueco en muro

{{ui:Hueco en muro}} es la herramienta de [Dar forma a un muro](topic:wall-shape): haga clic en un muro del plano, o en dos esquinas de su cara en 3D.

## Cantidades

Según la regla de medición de forjados, el área neta de un elemento es su área bruta menos lo que se le retira. Un patinillo o una abertura vertical es una deducción en cada forjado y techo que corta; las tablas de {{ui:Forjados y acabados}} y las cantidades IFC muestran los mismos números. En una cubierta, la deducción es el área de la superficie de cubierta: el área en planta dividida entre el coseno de la pendiente.

Un contorno que sobresale del borde solo deduce la parte que está sobre el elemento.

## Si no se corta nada

Un patinillo sin nada en su camino se crea igualmente, y lo indica: cortará lo que se construya allí más tarde. Una abertura vertical necesita algo debajo; sin nada, la línea de estado lo indica y no se crea nada.

## En el IFC

Cada corte es un IfcOpeningElement con IfcRelVoidsElement hacia el elemento que corta, así que cualquier programa IFC muestra el hueco. Una cubierta se corta cara por cara. El propio patinillo es un IfcGroup de sus aberturas.

## Todavía no disponible

- Contornos curvos.
- Los muros de un patinillo: dibújelos con la herramienta Muro.
- Editar el contorno arrastrando sus esquinas (cámbielo en Propiedades, o borre y vuelva a croquizar).
- Las propiedades de un forjado dibujado muestran solo su área menos sus propias aberturas; las tablas y las cantidades IFC incluyen las del patinillo.

Consulte también [Habitaciones y separadores de habitación](topic:rooms-and-separators).
