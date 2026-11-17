---
title: Trabajar en un modelo juntos con Live TeamWork
summary: Qué cambia en BimCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: las ediciones de todos en el mismo modelo IFC, su propio deshacer y cómo unirse desde un navegador en la misma red.
keywords: live, live teamwork, studio live, juntos, colaborar, sesión, compartir en vivo, unirse, ifc, propiedades, renombrar, cursor, puntero, verse, nombres, color, selección, deshacer, anfitrión
from: 32061b72
---

## Lo que aprenderá

Qué pasa con un modelo IFC cuando varias personas lo editan al mismo tiempo. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir, Unirse); esta página trata sobre el modelo en sí.

## Todos editan a la vez

El modelo del anfitrión llega a todos los que se unen. Renombre elementos, cambie los valores de sus propiedades, coloque, reemplace o quite elementos de biblioteca y elementos como de costumbre. Sus propias ediciones se muestran de inmediato; las de otras personas aparecen un momento después de hacerlas. Cuando una edición cambia lo que usted ve (un elemento colocado o quitado), BimCraft vuelve a dibujar el modelo y conserva su vista.

- **Dos personas cambian un mismo elemento:** gana el cambio posterior a la misma línea del modelo. Un conjunto de propiedades compartido por varios elementos se copia para el elemento que usted edita, como siempre, así que los demás conservan sus valores.
- **Un elemento que alguien acaba de quitar** ya no se puede editar: su edición se deshace y la barra de estado indica el motivo.
- Las líneas nuevas de cada persona en el modelo reciben números propios, así que dos personas nunca usan el mismo.

## Ver a los demás

Cada persona de la sesión tiene un color propio. En la vista 3D ve el puntero de cada persona como una flecha de su color con su nombre al lado, sobre el elemento que señala, y un recuadro punteado de su color alrededor de cada elemento que haya seleccionado.

Los punteros, nombres y selecciones solo existen durante la sesión: nunca se guardan en el archivo ni entran en el deshacer de nadie. Se desplazan suavemente hasta donde está cada persona, así que se ven fluidos incluso con una conexión lenta.

## Deshacer solo revierte su propio trabajo

{{ui:Deshacer}} deshace su última edición y deja intactas las de los demás. Si alguien cambió lo mismo después, no se deshace nada y la barra de estado indica quién lo hizo.

## Unirse desde un navegador

Un compañero de equipo sin Studio puede escanear la imagen que aparece debajo del código del anfitrión con un teléfono, tableta o computadora en la misma red. BimCraft se abre en el navegador y abre el modelo del anfitrión cuando este le permite entrar. Un enlace de invitación permite unirse desde otra red: el anfitrión necesita un asiento de Team Cloud Plan para la aplicación; los demás se unen gratis, y el enlace funciona solo mientras la sesión del anfitrión esté abierta.

## Al terminar la sesión

Solo el anfitrión guarda el modelo. Los demás conservan una copia sin guardar: si desea conservarla, guárdela con Guardar como IFC.

:::note
Solo se comparte el primer modelo de la escena. Abrir otro archivo durante una sesión deja la sesión en esa ventana.
:::
