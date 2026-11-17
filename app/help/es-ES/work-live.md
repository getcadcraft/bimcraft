---
title: Trabajar en un mismo modelo con Live TeamWork
summary: Qué cambia en BimCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: las ediciones de todos en el mismo modelo IFC, su propio deshacer y unirse desde un navegador en la misma red.
keywords: live, live teamwork, studio live, juntos, colaborar, sesión, compartir en vivo, unirse, ifc, propiedades, renombrar, cursor, puntero, verse unos a otros, nombres, color, selección, deshacer, anfitrión
from: 32061b72
---

## Qué aprenderá

Qué ocurre con un modelo IFC cuando varias personas lo editan al mismo tiempo. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir, Unirse); esta página trata del modelo en sí.

## Todos editan a la vez

El modelo del anfitrión llega a todos los que se unen. Renombre elementos, cambie sus valores de propiedad, coloque, sustituya o elimine elementos y elementos de biblioteca como de costumbre. Sus propias ediciones se muestran de inmediato; las de los demás aparecen un momento después de hacerlas. Cuando una edición cambia lo que ve (un elemento colocado o eliminado), BimCraft vuelve a dibujar el modelo y mantiene su vista.

- **Dos personas cambian un mismo elemento:** gana el cambio posterior en la misma línea del modelo. Un conjunto de propiedades compartido por varios elementos se copia para el elemento que edita, como siempre, así que los demás conservan sus valores.
- **Un elemento que alguien acaba de eliminar** ya no se puede editar: su edición se deshace y la barra de estado indica el motivo.
- Las nuevas líneas de cada persona en el modelo reciben números propios, de modo que dos personas nunca obtienen el mismo.

## Ver a los demás

Cada persona de la sesión tiene un color propio. En la vista 3D ve el puntero de cada persona como una flecha de su color con su nombre al lado, sobre el elemento que señala, y un recuadro discontinuo de su color alrededor de cada elemento que ha seleccionado.

Los punteros, los nombres y las selecciones solo existen durante la sesión: nunca se guardan en el archivo ni entran en el deshacer de nadie. Se desplazan suavemente hasta donde está cada persona, para que se vean fluidos también con una conexión lenta.

## Deshacer deshace su propio trabajo

{{ui:Deshacer}} deshace su última edición y no toca las de los demás. Si alguien ha cambiado después la misma cosa, no se deshace nada y la barra de estado indica quién lo hizo.

## Unirse desde un navegador

Un compañero sin Studio puede escanear con un teléfono, una tableta o un ordenador de la misma red la imagen que aparece bajo el código del anfitrión. BimCraft se abre en el navegador y abre el modelo del anfitrión en cuanto este le deja entrar. Un enlace de invitación permite unirse desde otra red: el anfitrión necesita una licencia del Team Cloud Plan para la aplicación; los demás se unen gratis, y el enlace solo funciona mientras la sesión del anfitrión esté abierta.

## Al terminar la sesión

Solo el anfitrión guarda el modelo. Los demás conservan una copia sin guardar: use Guardar como IFC si quiere conservarla.

:::note
Solo se comparte el primer modelo de la escena. Abrir otro archivo durante una sesión deja la sesión en esa ventana.
:::
