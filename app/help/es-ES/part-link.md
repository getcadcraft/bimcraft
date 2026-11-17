---
title: Enviar un elemento a PartCraft y recuperarlo
summary: Seleccione un soporte, una escuadra, una barandilla o una pieza de equipamiento, diséñelo como pieza en PartCraft con el edificio alrededor y acepte la nueva forma de vuelta en el modelo.
keywords: partcraft, pieza, enviar, enlace, elemento, soporte, escuadra, valla, barandilla, equipo, diseñar, ida y vuelta, aceptar, modificado, enlaces de piezas
from: 4ce2f449
---

## Qué hará

Diseñe un elemento del edificio como pieza: envíelo a PartCraft, modifíquelo allí (cortar, añadir, taladrar, cambiar el tamaño) y traiga la nueva forma de vuelta al modelo.

## Pasos

1. Seleccione un elemento en el modelo: un elemento genérico, un equipo, un pilar, una viga, una barandilla o un mueble.
2. Elija {{ui:Enlaces de piezas}} en la barra de herramientas y, a continuación, {{ui:Enviar a PartCraft}}. PartCraft se abre en una pestaña nueva con el elemento como pieza. Los elementos a menos de 3 m se dibujan en gris junto a él, para que pueda diseñarlo en su contexto. No pueden modificarse allí.
3. Modifique la pieza en PartCraft. En PartCraft elija {{ui:Archivo}} › {{ui:Exportar}} › Volver a guardar en BimCraft. Puede volver a guardar tantas veces como quiera.
4. De vuelta en BimCraft, el botón {{ui:Enlaces de piezas}} muestra un contador, y la ficha lista el elemento como {{ui:Modificado en PartCraft}}, con el cambio de tamaño y de volumen expresado en palabras.
5. Elija {{ui:Mostrar}} para verlo y, después, {{ui:Aceptar}} para dar al elemento la nueva forma, o {{ui:Conservar la mía}} para dejarlo como estaba.

## Qué debe ver

- Aceptar es un paso para deshacer. El elemento conserva su lugar, su GlobalId, tipo, material y propiedades. Solo se sustituye su cuerpo.
- El elemento recibe un conjunto de propiedades {{ui:CadCraft_PartLink}} con el enlace, su estado y la revisión.
- {{ui:Volver a enviar}} abre de nuevo el mismo elemento en PartCraft, con el mismo enlace.

## Conviene saber

- Los muros, forjados, cubiertas, puertas, ventanas, escaleras, rampas y espacios se dibujan con las herramientas de construcción a partir de un contorno y se reconstruyen tras cada cambio. Un cuerpo procedente de otra aplicación sobrescribiría esos cambios, así que estos elementos se rechazan indicando el motivo.
- La forma vuelve como malla (una teselación IFC), no como las operaciones de la pieza. El historial de la pieza permanece en PartCraft.
- Si el elemento cambió en el modelo después de enviarlo, la ficha lo indica antes de aceptar: al aceptar se sustituyen esos cambios.
- No se sube nada. Las dos aplicaciones son páginas de un mismo sitio y se pasan el elemento a través de este navegador. Ambas deben estar abiertas en el mismo navegador.
- El elemento debe cerrarse como sólido en PartCraft. Un elemento cuya forma tenga grandes aberturas se rechaza allí, indicando el número de aristas abiertas.
- Para aceptar, haga activo el modelo que contiene el elemento.
