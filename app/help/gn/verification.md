---
title: Marcar elementos como revisados o verificados en obra
summary: Un elemento leído de un PDF o de un escaneo está sin verificar hasta que lo revises. Marcá elementos como revisados, o como verificados en obra (LOD 500) con quién los midió, cuándo y cómo, y entregá un modelo as-built que indique cuál es cuál.
keywords: sin verificar, verificado, revisado, verificado en obra, as built, as-built, lod 500, cierre, entrega, medido en obra, cinta, láser, escaneo, relevamiento, edificio existente, modificación, marcar como revisado, verificación, etapa 7
from: df35d908
---

## Lo que vas a hacer

Llevar registro de lo que alguien realmente revisó en el modelo. Un elemento tiene una de tres marcas, o ninguna:

- **Sin verificar**: el programa lo reconoció desde un PDF, un plano escaneado, un plano calcado o un escaneo de nube de puntos. Nadie lo revisó todavía.
- **Revisado**: una persona lo comparó con el plano del que proviene.
- **Verificado en obra (LOD 500)**: una persona lo midió en obra. Quién, cuándo y cómo quedan guardados con él.
- **Sin marca**: dibujado por una persona. El modelo no afirma nada sobre él.

## Pasos

1. Elegí un elemento o varios (muros, puertas, ventanas, ambientes, cualquier elemento).
2. En {{ui:Properties}}, abrí {{ui:Verification}}.
3. Escribí quién lo revisó o lo midió. La fecha es hoy, salvo que la cambies.
4. Hacé clic en {{ui:Mark as checked}}. Para una medición en obra, elegí cómo se midió (cinta métrica, medidor láser de distancia, escaneo, relevamiento) y hacé clic en {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} y {{ui:Take the mark off}} vuelven atrás. Cada clic es un paso que podés deshacer, para toda la selección.

Para marcar una selección rápido: {{ui:Tools}} › {{ui:Mark as checked}} (escrito: `MARKCHECKED`) la marca como revisada por vos, hoy.

## Lo que deberías ver

- En la planta, un elemento sin verificar tiene un recuadro punteado y un "?"; uno verificado en obra tiene un tilde. Desmarcá {{ui:Show verification marks in the plan}} en la sección {{ui:Audit}} para ocultarlas.
- {{ui:Schedules}} › {{ui:Verification}} lista cada elemento marcado con su nivel, estado, quién, cuándo, cómo y de dónde proviene.
- La auditoría lista los elementos sin verificar, y cuenta un elemento verificado en obra como LOD 500. Ver [Auditar el modelo](topic:audit-the-model).

## Desde un escaneo

Cuando comparás un escaneo con el modelo, {{ui:Mark the matching elements as field-verified}} marca como verificado en obra cada elemento que el escaneo vio construido dentro de la tolerancia, con el método "escaneo" y la tolerancia en la nota. Ver [Comparar un escaneo con el modelo](topic:compare-scan-with-model).

:::warning
Esa comparación empareja la caja de cada elemento con puntos del escaneo. No es un relevamiento. Usala para elementos que también hayas revisado.
:::

## El modelo as-built y el paquete de entrega

{{ui:Build the handover package}} en la pestaña {{ui:Assets}} pone el modelo as-built en el zip, con:

- una declaración en el proyecto de cuántos elementos están verificados en obra, revisados, sin verificar y sin marca;
- `as-built/verified-elements.csv`: cada elemento y ambiente con su estado, quién, cuándo y cómo;
- `as-built/as-built-drawings.pdf`: el conjunto de planos tal como está ahora;
- el registro de cambios de planos, cuando el modelo tiene conjuntos emitidos.

Ver [Recursos y mantenimiento](topic:assets-and-maintenance).

## Cómo se guarda en el IFC

Cada elemento marcado lleva el conjunto de propiedades `CadCraft_Verification`: State, By, On, Method, Source, Note y LevelOfDevelopment (`LOD 500` mientras esté verificado en obra). Son propiedades de texto simple, así que otros programas las listan, y Buscar, Colorear por propiedad y las planillas por etiqueta pueden usarlas. La declaración as-built es el conjunto de propiedades `CadCraft_AsBuilt` en el proyecto. Un elemento sin ese conjunto no fue medido en obra.

## Seguir leyendo

- [Muros a partir de un juego de planos](topic:walls-from-plans)
- [Auditar el modelo](topic:audit-the-model)
