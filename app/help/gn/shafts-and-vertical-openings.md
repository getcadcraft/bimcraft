---
title: Pozos y aberturas a través de pisos
summary: Un pozo es un solo contorno que corta cada piso, cielorraso y techo entre dos niveles. Una abertura vertical corta uno de ellos. Abertura de muro corta un muro.
keywords: pozo, pozo de ascensor, pozo de elevador, abertura de escalera, contrahuella, abertura vertical, abertura de piso, abertura de cielorraso, abertura de techo, abertura de claraboya, agujero en piso, abertura de muro, IfcOpeningElement, deducción, superficie neta
from: 8e9e1641
---

## Lo que vas a hacer

Cortar un pozo de ascensor a través de un edificio con un solo boceto, hacer un agujero en un piso y leer qué se sacó de las superficies.

## Dónde están las herramientas

- Diseños en cinta: {{ui:Architecture}} › **Abertura** › {{ui:Shaft}}, {{ui:Vertical Opening}} y {{ui:Wall Opening}}.
- Diseño clásico: la barra Dibujar › menú {{ui:Rooms}} (Shaft, Vertical Opening) y › menú {{ui:Walls}} (Wall opening).

## Un pozo

1. Abrí el plano del nivel donde empieza el pozo. Elegí {{ui:Shaft}}.
2. En la fila elegí el {{ui:Base level}} y el {{ui:Top level}}, y los desplazamientos si empieza o termina por encima o por debajo de ellos.
3. Hacé clic en las esquinas del contorno. Volvé a hacer clic en la primera esquina, hacé doble clic o apretá {{key:Enter}} para terminar.
4. Se corta cada piso, cielorraso y techo entre las dos alturas. La línea de estado dice cuántos.

Un pozo es una sola cosa. Seleccioná su contorno en cualquier nivel por el que pasa: Propiedades tiene su nombre, sus niveles y desplazamientos, lo que corta y la superficie que se saca. Si lo cambiás, cada abertura lo sigue. Si lo eliminás, desaparece cada abertura. Cada uno es un paso de deshacer.

Sigue cortando: un piso hecho después entre sus niveles se corta sin que se lo pidas, y un piso que eliminás queda libre.

El piso sobre el que se apoya el pozo no se corta (su parte superior es la base). Dale a la base un desplazamiento negativo para cortarla también. Dale a la parte superior un desplazamiento positivo para atravesar el techo.

## Una abertura vertical

1. Elegí {{ui:Vertical Opening}}. En la fila elegí qué cortar: el piso, el cielorraso o el techo.
2. Hacé clic en las esquinas del contorno y terminá como se indicó arriba.
3. Se corta el piso, cielorraso o techo de este nivel que queda bajo el contorno. Pertenece a ese único elemento: si eliminás el piso, la abertura desaparece con él.

## Una abertura de muro

{{ui:Wall Opening}} es la herramienta de [Dar forma a un muro](topic:wall-shape): hacé clic en un muro sobre el plano, o en dos esquinas de su cara en 3D.

## Cantidades

Según la regla de medición para pisos, la superficie neta de un elemento es su superficie bruta menos lo que se corta de él. Un pozo o una abertura vertical es una deducción en cada piso y cielorraso que corta; las planillas de Pisos y Acabados y las cantidades IFC muestran los mismos números. En un techo, la deducción es la superficie de la cubierta: la superficie en planta dividida por el coseno de la pendiente.

Un contorno que sobresale del borde deduce solo la parte que queda sobre el elemento.

## Si no se corta nada

Un pozo sin nada en su camino igual se hace, y lo indica: cortará lo que se construya ahí más adelante. Una abertura vertical necesita algo debajo; sin nada, la línea de estado lo dice y no se crea nada.

## En el IFC

Cada corte es un IfcOpeningElement con IfcRelVoidsElement hacia el elemento que corta, así cualquier programa IFC muestra el agujero. Un techo se corta cara por cara. El pozo en sí es un IfcGroup de sus aberturas.

## Todavía no disponible

- Contornos curvos.
- Los muros de un pozo: dibujalos con la herramienta Muro.
- Editar el contorno arrastrando sus esquinas (cambialo en Propiedades, o eliminá y volvé a bosquejar).
- Las propiedades de un piso dibujado muestran su superficie menos sus propias aberturas solamente; las planillas y las cantidades IFC incluyen las del pozo.

Ver también [Ambientes y separadores de ambientes](topic:rooms-and-separators).
