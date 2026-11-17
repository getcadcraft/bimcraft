---
title: Enviar un elemento a PartCraft y traerlo de vuelta
summary: Elija un soporte, una ménsula, un barandal o una pieza de equipo, diséñelo como pieza en PartCraft con el edificio alrededor y acepte la nueva forma de regreso en el modelo.
keywords: partcraft, pieza, enviar, vínculo, elemento, soporte, ménsula, cerca, barandal, equipo, diseñar, ida y vuelta, aceptar, modificado, vínculos de pieza
from: 4ce2f449
---

## Qué hará

Diseñe un elemento del edificio como pieza: envíelo a PartCraft, cámbielo allí (cortar, agregar, perforar, cambiar tamaño) y traiga la nueva forma de regreso al modelo.

## Pasos

1. Seleccione un elemento en el modelo: un elemento genérico, un equipo, una columna, una viga, un barandal o un mueble.
2. Elija {{ui:Vínculos de pieza}} en la barra de herramientas y luego {{ui:Enviar a PartCraft}}. PartCraft se abre en una pestaña nueva con el elemento como pieza. Los elementos a menos de 3 m se dibujan en gris junto a él para que pueda diseñarlo en su lugar. Allí no se pueden modificar.
3. Cambie la pieza en PartCraft. En PartCraft elija {{ui:Archivo}} › {{ui:Exportar}} › Guardar de vuelta en BimCraft. Puede guardar de vuelta las veces que quiera.
4. De regreso en BimCraft, el botón {{ui:Vínculos de pieza}} muestra un conteo, y la tarjeta lista el elemento como {{ui:Modificado en PartCraft}} con el cambio de tamaño y de volumen descrito en palabras.
5. Elija {{ui:Mostrar}} para verlo, luego {{ui:Aceptar}} para dar al elemento la nueva forma, o {{ui:Conservar mío}} para dejarlo como estaba.

## Lo que debe ver

- Aceptar es un paso de deshacer. El elemento conserva su lugar, GlobalId, tipo, material y propiedades. Solo se reemplaza su cuerpo.
- El elemento recibe un conjunto de propiedades {{ui:CadCraft_PartLink}} con el vínculo, su estado y la revisión.
- {{ui:Enviar de nuevo}} abre el mismo elemento en PartCraft una vez más, con el mismo vínculo.

## Conviene saber

- Los muros, pisos, cubiertas, puertas, ventanas, escaleras, rampas y espacios se dibujan con las herramientas de construcción a partir de un contorno y se reconstruyen después de cada cambio. Un cuerpo de otra aplicación se sobrescribiría, así que estos se rechazan indicando el motivo.
- La forma regresa como malla (una teselación IFC), no como las operaciones de la pieza. El historial de la pieza permanece en PartCraft.
- Si el elemento cambió en el modelo después de que lo envió, la tarjeta lo indica antes de aceptar: al aceptar se reemplazan esos cambios.
- No se sube nada. Las dos aplicaciones son páginas de un mismo sitio y se pasan el elemento en este navegador. Ambas deben estar abiertas en el mismo navegador.
- El elemento debe cerrarse como sólido en PartCraft. Un elemento cuya forma tenga grandes huecos abiertos se rechaza allí, indicando el número de aristas abiertas.
- Para aceptar, haga activo el modelo que contiene el elemento.
