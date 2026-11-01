---
title: La pantalla de BimCraft
summary: Un recorrido por cada barra, panel y botón, con su nombre en pantalla, y cómo cambia la pantalla según el tipo de archivo.
keywords: pantalla, disposición, paneles, barra de herramientas, interfaz, recorrido, panel de propiedades, navegador, barra de la aplicación
from: 2eb01ec2
---

La pantalla de BimCraft tiene una barra en la parte superior y tres zonas debajo: un panel a la izquierda, el escenario en el centro y el panel {{ui:Propiedades}} a la derecha. Lo que aparece en cada zona depende de lo que haya abierto: un modelo IFC, un archivo de proyecto o de familia, un dibujo o una carpeta.

## La barra de la aplicación

La barra fina de la parte superior pertenece al sitio de CadCraft, no a BimCraft. De izquierda a derecha:

- El logotipo de CadCraft: lleva a la página de inicio de CadCraft.
- El nombre de la aplicación y un menú de versiones. En la versión interna indica qué compilación está ejecutando y permite cambiar a una versión publicada.
- {{ui:Acerca de BimCraft}}: la página de la aplicación en el sitio.
- {{ui:Ajustes}}: los ajustes propios de BimCraft y los que comparten todas las aplicaciones. Consulte [Ajustes de BimCraft](topic:settings).
- {{ui:Pantalla completa}}: recorre los modos de pantalla. Consulte [Modos de pantalla](topic:workspace#modos-de-pantalla) más abajo.
- {{ui:Papel}} y {{ui:Modelo}}: los temas claro y oscuro. La vista 3D y los dibujos 2D siguen el tema que elija.

## El panel izquierdo

El panel izquierdo siempre empieza con **Abrir un archivo o una carpeta**:

- La zona para soltar, {{ui:Elija un archivo, o suelte aquí un archivo o una carpeta}}. Púlsela para elegir un archivo, o suelte sobre ella un archivo o una carpeta (o en cualquier parte de la página).
- {{ui:Abrir una carpeta}}: elija una carpeta de proyecto completa. Consulte [Abrir una carpeta de proyecto completa](topic:open-project-folder).
- {{ui:Carpetas recientes}}: aparece en Chrome y Edge después de abrir una carpeta con el selector de carpetas o soltándola. Pulse {{ui:Volver a abrir}} y el nombre de la carpeta para abrirla de nuevo, o la pequeña × para olvidarla.

Debajo aparecen secciones según corresponda:

| Sección | Cuándo se muestra | Qué contiene |
|---|---|---|
| {{ui:Cambios}} | Hay un modelo IFC abierto | Sus ediciones sin guardar, las más recientes primero, con {{ui:Deshacer}} y {{ui:Guardar como IFC}} |
| {{ui:Archivo}} | Hay un modelo o una ficha de archivo abiertos | Datos del archivo: tamaño, esquema o versión, proyecto, autor, número de elementos |
| {{ui:Dibujo}} | Hay un DWG o DXF abierto | Formato, unidades, número de entidades y de capas, hojas, dibujos vinculados, equipos |
| {{ui:Carpeta}} | Hay una carpeta abierta | Número de archivos y de modelos, tamaño, problemas encontrados |
| {{ui:Volver a la carpeta}} | Abrió un archivo desde una carpeta | Vuelve al informe de la carpeta |
| {{ui:Capas}} | Hay un dibujo abierto | Una casilla por capa, con {{ui:Todas activadas}} y {{ui:Todas desactivadas}} |
| {{ui:Niveles}} | Hay un modelo IFC abierto | Una casilla por nivel, con el nivel superior primero |
| {{ui:Elementos}} | Hay un modelo IFC abierto | Cuántos elementos de cada tipo contiene el modelo (los 30 más habituales) |

## El escenario

El centro de la pantalla muestra el archivo abierto.

- **Vacío**: "Abra un modelo de edificio." con {{ui:Elegir un archivo}} y {{ui:Abrir una carpeta}}, y una breve descripción de cada formato.
- **Modelo IFC**: la vista 3D con una barra de herramientas en la parte superior, en grupos con nombre como los de la aplicación de dibujo CadCraft, con el icono de cada herramienta sobre su nombre: {{ui:Vista}} ({{ui:Encuadrar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}, {{ui:Aristas}}, {{ui:Espacios}}); {{ui:Edición}} ({{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y {{ui:Más}}, consulte [Copiar, pegar y duplicar elementos de la biblioteca](topic:copy-paste)); {{ui:Modelo}} ({{ui:Unidades}} y {{ui:Dibujo}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipos}}, {{ui:Actualizaciones}}, {{ui:Créditos}}); {{ui:Revisión}} ({{ui:Mostrar}}, {{ui:Sección}}, {{ui:Recorrido}}, {{ui:Medir}}; consulte [Cortar un modelo IFC con un plano de sección](topic:section-plane)); y {{ui:Salida}} (renderizado, vista en directo, RV, exportaciones, pintura y vistas guardadas). Con {{ui:Dibujo}} activado, la barra de dibujo que hay debajo tiene el mismo aspecto: {{ui:Vista}} (el nivel y el tipo de planta), {{ui:Dibujo}}, {{ui:Edición}} y {{ui:Biblioteca}}. Un cubo de vista se encuentra en la esquina inferior derecha. Consulte [Abrir un modelo IFC y mirar alrededor en 3D](topic:open-ifc-model). En {{ui:Ajustes}}, {{ui:General}} elige iconos, etiquetas o ambos en estos botones, muestra u oculta los nombres de los grupos, y con el botón derecho sobre la barra de herramientas puede organizar sus herramientas y grupos. En una ventana baja, la barra de herramientas quita los nombres bajo sus iconos.
- **Archivo de proyecto o de familia**: la ficha del archivo, con la imagen de vista previa, la información del proyecto y los archivos vinculados. Consulte [Leer un archivo de proyecto o de familia](topic:read-rvt-file).
- **DWG o DXF**: una fila de pestañas ({{ui:Modelo}}, después una por hoja, después {{ui:Equipos}} cuando el dibujo tiene equipos etiquetados, {{ui:3D}}, {{ui:Encuadrar}} y {{ui:Vista de impresión}}), el dibujo y las coordenadas X e Y en vivo en una esquina. Consulte [Ver un dibujo DWG o DXF](topic:view-dwg) y [Ver un dibujo DWG o DXF en 3D](topic:dwg-in-3d).
- **Carpeta**: el informe de la carpeta, con el cuadro {{ui:Empiece aquí}} y tablas de modelos, vínculos, modelos IFC y dibujos. Consulte [Abrir una carpeta de proyecto completa](topic:open-project-folder).

La **línea de estado** de la parte inferior del escenario le dice lo que está haciendo BimCraft ("Leyendo el modelo…", "Generando geometría: 1200 de 5400 elementos") y lo que ha fallado, en rojo, cuando algo falla. Los mensajes de éxito se desvanecen tras unos segundos.

## El panel Propiedades

El panel derecho muestra:

- En un modelo IFC: el elemento que pulsó, con su nombre, tipo, etiqueta, GlobalId y todos los conjuntos de propiedades. Los valores que puede cambiar parecen botones. Consulte [Campos del panel Propiedades](topic:properties-panel).
- En un dibujo: cómo moverse, los dibujos e imágenes vinculados del dibujo y si se encontró cada uno, y una lista de lo que está **Aún sin dibujar**.
- En una ficha de archivo o una carpeta: una breve nota sobre qué abrir a continuación.

## En una pantalla pequeña

Cuando la ventana es más estrecha que la pantalla de un portátil, BimCraft apila sus zonas: el escenario arriba y los paneles debajo. Desplace la página para llegar a los paneles. En un teléfono forman una columna; en una tableta, dos.

## Modos de pantalla

El botón {{ui:Pantalla completa}} de la barra de la aplicación, o {{key:Ctrl+Shift+F}} en todas las plataformas, recorre tres modos:

1. Normal.
2. Pantalla completa, con las barras visibles.
3. Pantalla completa con la barra de la aplicación oculta. Mueva el puntero al borde superior, o toque ahí, para recuperarla.

Pulse {{key:Esc}} para volver al modo normal. Los navegadores sin compatibilidad con pantalla completa (como en un iPhone) alternan solo entre barras normales y ocultas.

## Relacionado

- [Teclas y ratón](topic:keyboard)
- [Archivos que BimCraft abre y guarda](topic:files)
