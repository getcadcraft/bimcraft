---
title: Marcar elementos como revisados o verificados en obra
summary: Un elemento leído de un PDF o de un escaneo está sin verificar hasta que lo revisa. Marque elementos como revisados, o como verificados en obra (LOD 500) con quién los midió, cuándo y cómo, y entregue un modelo as-built que indique cuál es cuál.
keywords: sin verificar, verificado, revisado, verificado en obra, as-built, lod 500, cierre, entrega, medido en obra, cinta, láser, escaneo, levantamiento, edificio existente, modificación, marcar como revisado, verificación, etapa 7
from: df35d908
---

## Qué hará

Lleve el control de lo que alguien ha revisado realmente en el modelo. Un elemento tiene una de tres marcas, o ninguna:

- **Sin verificar**: el programa lo reconoció de un PDF, un plano escaneado, un dibujo calcado o una nube de puntos de un escaneo. Nadie lo ha revisado todavía.
- **Revisado**: una persona lo comparó con el dibujo del que proviene.
- **Verificado en obra (LOD 500)**: una persona lo midió en el sitio. Quién, cuándo y cómo se guardan con él.
- **Sin marca**: dibujado por una persona. El modelo no afirma nada sobre él.

## Pasos

1. Elija un elemento o varios (muros, puertas, ventanas, cuartos, cualquier elemento).
2. En {{ui:Propiedades}}, abra {{ui:Verificación}}.
3. Escriba quién lo revisó o lo midió. La fecha es la de hoy, salvo que la cambie.
4. Haga clic en {{ui:Marcar como revisado}}. Para una medición en obra, elija cómo se midió (cinta métrica, medidor láser de distancia, escaneo, levantamiento topográfico) y haga clic en {{ui:Marcar como verificado en obra (LOD 500)}}.
5. {{ui:Marcar como sin verificar}} y {{ui:Quitar la marca}} lo regresan. Cada clic es un paso que puede deshacer, para toda la selección.

Para marcar una selección rápidamente: {{ui:Herramientas}} › {{ui:Marcar como revisado}} (escrito: `MARKCHECKED`) la marca como revisada por usted, hoy.

## Qué debe ver

- En la planta, un elemento sin verificar tiene un recuadro punteado y un "?"; uno verificado en obra tiene una palomita. Desmarque {{ui:Mostrar las marcas de verificación en la planta}} en la sección {{ui:Auditoría}} para ocultarlas.
- {{ui:Tablas}} › {{ui:Verificación}} enumera cada elemento marcado con su nivel, estado, quién, cuándo, cómo y de dónde proviene.
- La auditoría enumera los elementos sin verificar y cuenta un elemento verificado en obra como LOD 500. Vea [Auditar el modelo](topic:audit-the-model).

## Desde un escaneo

Al comparar un escaneo con el modelo, {{ui:Marcar los elementos coincidentes como verificados en obra}} marca cada elemento que el escaneo vio como construido, dentro de la tolerancia, con el método "escaneo" y la tolerancia en la nota. Vea [Comparar un escaneo con el modelo](topic:compare-scan-with-model).

:::warning
Esa comparación empareja la caja de cada elemento con puntos del escaneo. No es un levantamiento. Úsela para elementos que también haya revisado usted.
:::

## El modelo as-built y el paquete de entrega

{{ui:Generar el paquete de entrega}} en la pestaña {{ui:Recursos}} pone el modelo as-built en el archivo ZIP, con:

- una declaración en el proyecto de cuántos elementos están verificados en obra, revisados, sin verificar y sin marca;
- `as-built/verified-elements.csv`: cada elemento y cuarto con su estado, quién, cuándo y cómo;
- `as-built/as-built-drawings.pdf`: el juego de planos tal como está ahora;
- el registro de cambios de los dibujos, cuando el modelo tiene juegos emitidos.

Vea [Recursos y mantenimiento](topic:assets-and-maintenance).

## Cómo se guarda en el IFC

Cada elemento marcado lleva el conjunto de propiedades `CadCraft_Verification`: State, By, On, Method, Source, Note y LevelOfDevelopment (`LOD 500` mientras está verificado en obra). Son propiedades de texto simple, así que otros programas las listan, y Buscar, Colorear por propiedad y las tablas con etiquetas pueden usarlas. La declaración as-built es el conjunto de propiedades `CadCraft_AsBuilt` del proyecto. Un elemento sin ese conjunto no se midió en obra.

## Siguiente

- [Muros a partir de un juego de planos](topic:walls-from-plans)
- [Auditar el modelo](topic:audit-the-model)
