---
title: Enviar un elemento a PartCraft e devolvelo
summary: Seleccione un soporte, unha escuadra, unha barandilla ou un equipo, deséñeo como peza en PartCraft co edificio ao seu redor e acepte de volta no modelo a nova forma.
keywords: partcraft, peza, enviar, ligazón, elemento, soporte, escuadra, valado, barandilla, equipo, deseño, ida e volta, aceptar, modificado, ligazóns de pezas
from: 4ce2f449
---

## Que vai facer

Deseñar un elemento do edificio como peza: envíeo a PartCraft, cámbieo alí (cortar, engadir, perforar, redimensionar) e leve a nova forma de volta ao modelo.

## Pasos

1. Seleccione un elemento do modelo: un elemento xenérico, un equipo, unha columna, unha viga, unha barandilla ou mobiliario.
2. Escolla {{ui:Ligazóns de pezas}} na barra de ferramentas e logo {{ui:Enviar a PartCraft}}. PartCraft ábrese nunha pestana nova co elemento como peza. Os elementos a menos de 3 m debúxanse en gris ao seu lado, para que poida deseñalo no seu sitio. Non se poden cambiar alí.
3. Cambie a peza en PartCraft. En PartCraft escolla {{ui:Ficheiro}} › {{ui:Exportar}} › {{ui:Gardar de volta en BimCraft}}. Pode gardar de volta tantas veces como queira.
4. De volta en BimCraft, o botón {{ui:Ligazóns de pezas}} mostra un contador, e a tarxeta indica o elemento como {{ui:Modificado en PartCraft}}, coa variación de tamaño e volume expresada en palabras.
5. Escolla {{ui:Mostrar}} para velo e logo {{ui:Aceptar}} para dar ao elemento a nova forma, ou {{ui:Manter o meu}} para deixalo como estaba.

## O que debe ver

- Aceptar é un só paso de desfacer. O elemento conserva o seu lugar, GlobalId, tipo, material e propiedades. Só se substitúe o seu corpo.
- O elemento recibe un conxunto de propiedades {{ui:CadCraft_PartLink}} coa ligazón, o seu estado e a revisión.
- {{ui:Enviar de novo}} abre o mesmo elemento en PartCraft outra vez, coa mesma ligazón.

## Cousas útiles

- Os muros, pisos, cubertas, portas, xanelas, escaleiras, rampas e espazos debúxanse coas ferramentas de construción a partir dun contorno e reconstrúense despois de cada cambio. Un corpo doutra aplicación sobrescribiríase, polo que estes elementos se rexeitan indicando o motivo.
- A forma volve como malla (unha teselación IFC), non como as características da peza. O historial da peza queda en PartCraft.
- Se o elemento cambiou no modelo despois de envialo, a tarxeta indícao antes de aceptar: aceptar substitúe eses cambios.
- Non se sobe nada. As dúas aplicacións son páxinas dun mesmo sitio e pasan o elemento entre elas neste navegador. Ambas deben estar abertas no mesmo navegador.
- O elemento ten que pecharse nun sólido en PartCraft. Alí se rexeita un elemento cuxa forma teña grandes buratos abertos, e indícase o número de arestas abertas.
- Para aceptar, faga activo o modelo que contén o elemento.
