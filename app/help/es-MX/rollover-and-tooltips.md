---
title: Descripciones emergentes en dos etapas, e información al pasar el cursor sobre el plano
summary: Señale una herramienta para ver de inmediato su nombre y su atajo, y un momento después qué hace. Repose el puntero sobre un muro, puerta, ventana, espacio o cota para leerlo sin seleccionarlo.
keywords: descripción emergente, sugerencia, atajo, tecla, comando escrito, descripción, al pasar, señalar, tipo de muro, nivel, tamaño, recto, oblicuo, no escuadrado, curvo, puerta, ventana, espacio, área, cota, sin seleccionar
from: 2e701f08
---

## Qué hará

Aprenda el atajo de una herramienta señalándola, y lea lo que es algo del plano sin elegirlo.

## Pasos

1. Señale una herramienta, por ejemplo {{ui:Muro}} en la barra Dibujo. Casi de inmediato aparece una descripción emergente con su nombre y su atajo (**Muro**, **W**).
2. Mantenga el puntero ahí. Un momento después, una línea debajo indica lo que hace la herramienta.
3. Abra un plano, con la herramienta {{ui:Seleccionar}} activa. Repose el puntero sobre un muro. Una descripción junto al puntero muestra su tipo, su nivel, su longitud y su espesor, y si es recto u oblicuo.
4. Pase a una puerta, una ventana, un espacio o una cota para leer ese elemento en su lugar. No se selecciona nada.

## Qué muestra la descripción de una herramienta

- **Etapa 1**: el nombre del comando en el estilo de menú que usa, y sus teclas en ese estilo. Con una línea de comandos en pantalla, también muestra la palabra que se escribe cuando el comando no tiene tecla.
- **Etapa 2**: una línea de descripción. Es el texto del propio botón del comando, así que en cada lugar donde aparece (la barra Dibujo, una cinta, un estilo de menú, las filas de herramientas de una presentación) dice lo mismo.
- Una herramienta desactivada muestra el motivo en su lugar.

## Qué muestra al pasar el cursor

- **Muro**: tipo, nivel, longitud y espesor, y **Recto**, **Oblicuo** (con el ángulo) o **Curvo**. Recto significa perpendicular a la dirección principal de los muros a los que se une: un edificio girado en la página sigue siendo recto. Un muro aislado es recto.
- **Puerta o ventana**: tipo, nivel, ancho y alto, la altura del antepecho de una ventana, y el muro en el que está.
- **Espacio**: nombre y número, nivel, y el área tal como la indica el plano.
- **Cota**: su longitud, si es la longitud total del muro o la parte entre huecos, desde qué cara se mide, y el muro al que pertenece.

## Lo que conviene saber

- La información al pasar el cursor funciona con la herramienta Seleccionar. Mientras una herramienta de dibujo está activa, esa herramienta muestra sus propias marcas.
- Desaparece al alejarse del objeto, al presionar un botón del ratón, al girar la rueda o al presionar una tecla.
- Las descripciones emergentes nunca aparecen en pantallas táctiles.
