---
title: Configuración de BimCraft
summary: Elegí si se muestran ambientes y espacios, si se dibujan bordes y en qué vista se abre un modelo, y empezá a colocar con el ajuste a muro activado.
keywords: configuración, preferencias, opciones, espacios, ambientes, ifcspace, bordes, líneas, rendimiento, modelo grande, vista de apertura, cámara, vista superior, ajuste a muro, ajuste
from: 4416e64f
---

Abrí {{ui:Settings}} con el engranaje de la barra de la app o con {{key:Mod+,}}. La primera pestaña, {{ui:BimCraft}}, tiene la configuración propia de esta app; {{ui:General}} tiene la que comparten todas las apps de CadCraft (tema, barra de herramientas, paneles). La configuración de BimCraft existe solo en la app: la cambiás acá, y este navegador la recuerda. {{ui:Restablecer configuración de BimCraft}}, al pie del diálogo, la vuelve al inicio, junto con la compartida.

## Menús, teclas y mouse

El estilo de menú (la barra de herramientas propia de BimCraft, una barra de menú de diseño de casas, una cinta BIM o una línea de comandos de dibujo), tus teclas y menús propios, y lo que hacen la rueda y los botones del mouse. Ver [Menús, teclas y mouse](topic:menus-keys-and-mouse).

## Cuando se abre un modelo

- **Mostrar ambientes y espacios** (apagado al inicio): los ambientes y espacios son cajas transparentes que pueden tapar los muros detrás de ellos, por eso empiezan ocultos. El botón {{ui:Spaces}} sobre el modelo los enciende y apaga igual, para el modelo abierto.
- **Bordes**: {{ui:Edges on}} (el inicio) dibuja las líneas de borde que dan el aspecto de dibujo técnico. {{ui:Small models only}} las dibuja solo en modelos de menos de 300,000 triángulos, lo que hace más rápido cambiarlas en modelos grandes. {{ui:Edges off}} inicia cada modelo sin ellas. El botón {{ui:Edges}} todavía las cambia para el modelo abierto. Por encima de 1.5 millones de triángulos, los bordes siempre están apagados.

## Los dibujos se abren en

Cómo se muestra primero un dibujo DWG o DXF: {{ui:3D (fastest)}} (el inicio) dibuja rápido incluso un dibujo grande, o {{ui:Model (2D)}} abre la vista plana del espacio modelo. Las pestañas sobre el dibujo cambian entre {{ui:Model}}, las hojas y {{ui:3D}} en cualquier momento. Un dibujo sin nada en el espacio modelo, o un navegador que no puede mostrar 3D, siempre se abre en 2D.

## Vista de apertura

La cámara con la que se abre un modelo: {{ui:Fit}} (el inicio, todo el modelo desde una esquina), {{ui:Top}}, {{ui:Front}} o {{ui:Side}}. Los botones sobre el modelo cambian la vista en cualquier momento.

**Un edificio girado en su sitio**: muchos modelos llegan con el edificio en ángulo respecto a los ejes del archivo (en coordenadas de relevamiento o compartidas). {{ui:Square to the building}} (el inicio) muestra ese edificio derecho: {{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, las caras del cubo de vista y cada corte nuevo siguen sus muros, y la brújula del cubo de vista todavía apunta al norte del modelo. {{ui:As placed in the site}} mantiene los ejes del archivo. Un edificio cuyos muros van sobre los ejes se ve igual de las dos maneras.

## Colocar elementos de la biblioteca

**Empezá con el ajuste a muro activado** (apagado al inicio): al colocar o pegar un elemento de la biblioteca, su parte trasera se ajusta al muro más cercano, mirando hacia el ambiente. {{key:Tab}} o {{ui:Wall snap}} en la barra de colocación lo apaga por el momento. Un piso sin muros empieza sin él.

## Caja de sección

{{ui:Room round the pick}} es cuánto espacio deja {{ui:Section box round the pick}} de cada lado de los elementos seleccionados, en milímetros: 300 al inicio, hasta 5000. Ver [Cortar un modelo IFC con un plano de corte](topic:section-plane).

## Ubicación

{{ui:Latitude and longitude in}} elige el sistema en el que {{ui:Measure}} › {{ui:Location}} da las latitudes y longitudes: WGS 84 (EPSG:4326, el inicio, como usan el GPS y los mapas web), {{ui:The file's own datum}}, o uno de ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 y CGCS2000. El sistema de mapa y el datum propios del archivo siempre se muestran también. Ver [Medir distancias, superficies de caras y ubicaciones en 3D](topic:measure).

## Indicador de esquina

Lo que aparece en la esquina inferior derecha de las vistas 3D (un modelo IFC, y un dibujo cambiado a 3D): {{ui:View cube}} (el inicio), {{ui:Axis icon}} (una pequeña X, Y y Z) o {{ui:None}}. Cambia al instante. La vista 2D del dibujo nunca muestra ninguno.

En el cubo de vista, hacé clic en una cara, un borde o una esquina para mirar desde ese lado, arrastrá el cubo para orbitar, arrastrá el anillo para girar, y hacé clic en la casa para la vista inicial.

## Tu nombre en los problemas

Con sesión iniciada, los problemas llevan el nombre de tu cuenta y BimCraft no pide nada: esta parte muestra {{ui:From your account (<name>)}}. {{ui:Use another name}} abre una casilla para otro nombre, que tiene prioridad hasta que elijas {{ui:Use my account name}}. Sin sesión, el formulario de problemas pide un nombre como antes. Ver [Problemas y archivos BCF](topic:issues-bcf).

## Asistentes

**Dejar que los asistentes de IA y los scripts usen BimCraft** (apagado al inicio) permite que un asistente de tu computadora llegue al modelo abierto a través de CadCraft Studio: **Read** encuentra elementos y lee sus propiedades, **Change the view** aísla, oculta y muestra. **Activity** lista sus llamadas. Ver [Dejar que un asistente de IA trabaje con tu modelo](topic:assistants).

:::note
Las demás configuraciones se aplican cuando se abre un modelo o empieza la colocación. Un modelo ya abierto mantiene su aspecto hasta que uses los botones de la barra de herramientas o lo abras de nuevo.
:::

## Relacionado

- [Copiar, pegar y duplicar elementos de la biblioteca](topic:copy-paste)
- [Colocar equipos y muebles desde la biblioteca](topic:place-from-library)
- [La pantalla de BimCraft](topic:workspace)
- [Dejar que un asistente de IA trabaje con tu modelo](topic:assistants)
