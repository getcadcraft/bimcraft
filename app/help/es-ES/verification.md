---
title: Marcar elementos como comprobados o verificados en obra
summary: Un elemento leído de un PDF o de un escaneado está sin verificar hasta que lo comprueba. Marcar elementos como comprobados, o como verificados en obra (LOD 500) con quién los midió, cuándo y cómo, y entregar un modelo como construido que indique cuál es cuál.
keywords: sin verificar, verificado, comprobado, verificado en obra, como construido, as-built, lod 500, cierre, entrega, medido en obra, cinta, láser, escaneado, levantamiento, edificio existente, reforma, marcar como comprobado, verificación, fase 7
from: df35d908
---

## Qué hará

Llevar el control de lo que alguien ha revisado realmente en el modelo. Un elemento tiene una de tres marcas, o ninguna:

- **Sin verificar**: el programa lo reconoció a partir de un PDF, un dibujo escaneado, un dibujo calcado o un escaneado de nube de puntos. Nadie lo ha comprobado todavía.
- **Comprobado**: una persona lo comparó con el dibujo del que procede.
- **Verificado en obra (LOD 500)**: una persona lo midió en obra. Quién, cuándo y cómo se guardan con él.
- **Sin marca**: dibujado por una persona. El modelo no afirma nada sobre él.

## Pasos

1. Seleccione un elemento o varios (muros, puertas, ventanas, espacios, cualquier elemento).
2. En {{ui:Properties}}, abra {{ui:Verification}}.
3. Escriba quién lo comprobó o lo midió. La fecha es hoy, a menos que la cambie.
4. Haga clic en {{ui:Mark as checked}}. Para una medición en obra, elija cómo se midió (cinta métrica, medidor de distancia láser, escaneado, levantamiento) y haga clic en {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} y {{ui:Take the mark off}} deshacen la marca. Cada clic es un paso que se puede deshacer, para toda la selección.

Para marcar una selección rápidamente: {{ui:Tools}} › {{ui:Mark as checked}} (escrito: `MARKCHECKED`) la marca como comprobada por usted, hoy.

## Qué debe ver

- En la planta, un elemento sin verificar tiene un recuadro discontinuo y un "?"; uno verificado en obra tiene una marca de visto. Desmarque {{ui:Show verification marks in the plan}} en la sección {{ui:Audit}} para ocultarlas.
- {{ui:Schedules}} › {{ui:Verification}} enumera cada elemento marcado con su nivel, estado, quién, cuándo, cómo y de dónde procede.
- La auditoría enumera los elementos sin verificar y cuenta un elemento verificado en obra como LOD 500. Véase [Auditar el modelo](topic:audit-the-model).

## Desde un escaneado

Al comparar un escaneado con el modelo, {{ui:Mark the matching elements as field-verified}} marca cada elemento que el escaneado vio como construido dentro de la tolerancia, con el método "escaneado" y la tolerancia en la nota. Véase [Comparar un escaneado con el modelo](topic:compare-scan-with-model).

:::warning
Esa comparación ajusta la caja de cada elemento con puntos del escaneado. No es un levantamiento. Úsela para elementos que también haya revisado.
:::

## El modelo como construido y el paquete de entrega

{{ui:Build the handover package}} en la pestaña {{ui:Assets}} pone el modelo como construido en el zip, con:

- una declaración en el proyecto de cuántos elementos están verificados en obra, comprobados, sin verificar y sin marca;
- `as-built/verified-elements.csv`: cada elemento y espacio con su estado, quién, cuándo y cómo;
- `as-built/as-built-drawings.pdf`: el juego de planos tal como está ahora;
- el registro de cambios de los planos, cuando el modelo ha emitido juegos.

Véase [Recursos y mantenimiento](topic:assets-and-maintenance).

## Cómo se guarda en el IFC

Cada elemento marcado lleva el conjunto de propiedades `CadCraft_Verification`: State, By, On, Method, Source, Note y LevelOfDevelopment (`LOD 500` mientras está verificado en obra). Son propiedades de texto plano, así que otros programas las enumeran, y Buscar, Colorear por propiedad y las tablas de etiquetas pueden usarlas. La declaración como construido es el conjunto de propiedades `CadCraft_AsBuilt` en el proyecto. Un elemento sin ese conjunto no se midió en obra.

## Siguiente

- [Muros a partir de un juego de planos](topic:walls-from-plans)
- [Auditar el modelo](topic:audit-the-model)
