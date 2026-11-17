---
title: Configuración de BimCraft
summary: Elija si se muestran habitaciones y espacios, si se dibujan las aristas y con qué vista se abre un modelo, y empiece a colocar con el ajuste a muro activado.
keywords: configuración, preferencias, opciones, espacios, habitaciones, ifcspace, aristas, líneas, rendimiento, modelo grande, vista de apertura, cámara, vista superior, ajuste a muro, ajuste
from: 4416e64f
---

Abra {{ui:Configuración}} con el engranaje de la barra de aplicaciones o con {{key:Mod+,}}. La primera pestaña, {{ui:BimCraft}}, contiene la configuración propia de esta aplicación; {{ui:General}} contiene la que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). La configuración de BimCraft existe solo en la aplicación: aquí la cambia y este navegador la recuerda. {{ui:Restablecer la configuración de BimCraft}} al pie del cuadro la devuelve, junto con la compartida, a los valores iniciales.

## Menús, teclas y ratón

El estilo de menús (la barra de herramientas propia de BimCraft, una barra de menús de diseño de viviendas, una cinta BIM o una línea de comandos de dibujo), sus propias teclas y menús, y lo que hacen la rueda y los botones del ratón. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).

## Al abrir un modelo

- **Mostrar habitaciones y espacios** (desactivado al inicio): las habitaciones y los espacios son cajas transparentes que pueden ocultar los muros detrás de ellos, así que empiezan ocultos. El botón {{ui:Espacios}} sobre el modelo aún los activa o desactiva para el modelo abierto.
- **Aristas**: {{ui:Aristas activadas}} (el inicial) dibuja las líneas de arista que dan el aspecto de dibujo técnico. {{ui:Solo modelos pequeños}} las dibuja solo en modelos de menos de 300,000 triángulos, lo que mantiene más rápido el cambio en modelos grandes. {{ui:Aristas desactivadas}} inicia cada modelo sin ellas. El botón {{ui:Aristas}} aún las activa o desactiva para el modelo abierto. Por encima de 1.5 millones de triángulos, las aristas siempre están desactivadas.

## Los dibujos se abren en

Cómo se muestra al principio un dibujo DWG o DXF: {{ui:3D (lo más rápido)}} (el inicial) dibuja incluso un dibujo grande con rapidez, o {{ui:Modelo (2D)}} abre la vista plana del espacio modelo. Las pestañas sobre el dibujo cambian en cualquier momento entre {{ui:Modelo}}, las hojas y {{ui:3D}}. Un dibujo sin nada en el espacio modelo, o un navegador que no puede mostrar 3D, siempre se abre en 2D.

## Vista de apertura

La cámara con la que se abre un modelo: {{ui:Encuadrar}} (el inicial, todo el modelo desde una esquina), {{ui:Superior}}, {{ui:Frontal}} o {{ui:Lateral}}. Los botones sobre el modelo cambian la vista en cualquier momento.

**Un edificio girado en su terreno**: muchos modelos llegan con el edificio en un ángulo respecto a los ejes del archivo (en coordenadas de levantamiento o compartidas). {{ui:A escuadra con el edificio}} (el inicial) muestra dicho edificio en escuadra: {{ui:Encuadrar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}, las caras del cubo de vistas y cada sección nueva siguen sus muros, y la brújula del cubo de vistas sigue apuntando al norte del modelo. {{ui:Como está en el terreno}} conserva los ejes del archivo. Un edificio cuyos muros siguen los ejes se ve igual de ambas formas.

## Colocar elementos de biblioteca

**Empiece con el ajuste a muro activado** (desactivado al inicio): al iniciar la colocación o el pegado de un elemento de biblioteca, su parte posterior se ajusta al muro más cercano, mirando hacia la habitación. {{key:Tab}} o {{ui:Ajuste a muro}} en la barra de colocación lo desactivan por el momento. Un nivel sin muros empieza sin él.

## Caja de sección

{{ui:Holgura alrededor de lo designado}} es el espacio que deja {{ui:Caja de sección alrededor de lo designado}} en cada lado de los elementos designados, en milímetros: 300 al inicio, hasta 5000. Vea [Corte un modelo IFC con un plano de sección](topic:section-plane).

## Ubicación

{{ui:Latitud y longitud en}} elige el sistema en el que {{ui:Medir}} › {{ui:Ubicación}} da las latitudes y longitudes: WGS 84 (EPSG:4326, el inicial, como lo usan el GPS y los mapas web), {{ui:El datum propio del archivo}}, o uno de ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 y CGCS2000. El sistema de mapa y el datum propios del archivo también se muestran siempre. Vea [Mida distancias, áreas de caras y ubicaciones en 3D](topic:measure).

## Indicador de esquina

Lo que aparece en la esquina inferior derecha de las vistas 3D (un modelo IFC, y un dibujo cambiado a 3D): {{ui:Cubo de vistas}} (el inicial), {{ui:Icono de ejes}} (una pequeña X, Y y Z) o {{ui:Ninguno}}. Cambia de inmediato. La vista de dibujo 2D nunca muestra ninguno.

En el cubo de vistas, haga clic en una cara, una arista o una esquina para ver desde ese lado, arrastre el cubo para orbitar, arrastre el anillo para girar, y haga clic en la casa para la vista inicial.

## Su nombre en las incidencias

Con la sesión iniciada, las incidencias llevan el nombre de su cuenta y BimCraft no pide nada: esta parte muestra {{ui:Desde su cuenta (<name>)}}. {{ui:Usar otro nombre}} abre un cuadro para escribir un nombre distinto, que prevalece hasta que elija {{ui:Usar el nombre de mi cuenta}}. Sin sesión iniciada, el formulario de incidencias pide un nombre como antes. Vea [Incidencias y archivos BCF](topic:issues-bcf).

## Asistentes

**Permitir que asistentes de IA y scripts usen BimCraft** (desactivado al inicio) permite que un asistente de su computadora llegue al modelo abierto a través de CadCraft Studio: **Leer** busca elementos y lee sus propiedades, **Cambiar la vista** los aísla, oculta y muestra. **Actividad** enumera sus llamadas. Vea [Permita que un asistente de IA trabaje con su modelo](topic:assistants).

:::note
Los demás ajustes se aplican cuando se abre un modelo o empieza la colocación. Un modelo ya abierto conserva su aspecto hasta que use los botones de la barra de herramientas o lo vuelva a abrir.
:::

## Relacionados

- [Copiar, pegar y duplicar elementos de biblioteca](topic:copy-paste)
- [Coloque equipos y muebles desde la biblioteca](topic:place-from-library)
- [La pantalla de BimCraft](topic:workspace)
- [Permita que un asistente de IA trabaje con su modelo](topic:assistants)
