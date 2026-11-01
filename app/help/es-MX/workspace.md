---
title: La pantalla de BimCraft
summary: Un recorrido por cada barra, panel y botón, por su nombre en pantalla, y cómo cambia la pantalla según el tipo de archivo.
keywords: pantalla, diseño, paneles, barra de herramientas, interfaz, recorrido, panel de propiedades, navegador, barra de la aplicación
from: 2eb01ec2
---

La pantalla de BimCraft tiene una barra en la parte superior y tres áreas debajo: un panel a la izquierda, el escenario en el centro y el panel {{ui:Propiedades}} a la derecha. Lo que aparece en cada área depende de lo que abrió: un modelo IFC, un archivo de proyecto o de familia, un dibujo o una carpeta.

## La barra de la aplicación

La barra delgada de la parte superior pertenece al sitio de CadCraft, no a BimCraft. De izquierda a derecha:

- La marca de CadCraft: va a la página de inicio de CadCraft.
- El nombre de la aplicación y un menú de versiones. En la compilación del personal muestra qué compilación está usando y le permite cambiar a una versión publicada.
- {{ui:Acerca de BimCraft}}: la página de la aplicación en el sitio.
- {{ui:Configuración}}: la configuración propia de BimCraft y la que comparten todas las aplicaciones. Consulte [BimCraft settings](topic:settings).
- {{ui:Pantalla completa}}: recorre los modos de pantalla. Consulte [Screen modes](topic:workspace#screen-modes) más abajo.
- {{ui:Papel}} y {{ui:Modelo}}: los temas claro y oscuro. La vista 3D y los dibujos en 2D siguen el tema que elija.

## El panel izquierdo

El panel izquierdo siempre empieza con **Abrir un archivo o una carpeta**:

- El área para soltar, {{ui:Elija un archivo, o suelte aquí un archivo o una carpeta}}. Haga clic en ella para elegir un archivo, o suelte un archivo o una carpeta en ella (o en cualquier parte de la página).
- {{ui:Abrir una carpeta}}: elija una carpeta de proyecto completa. Consulte [Open a whole project folder](topic:open-project-folder).
- {{ui:Carpetas recientes}}: aparece en Chrome y Edge después de abrir una carpeta con el selector de carpetas o soltándola. Haga clic en {{ui:Reabrir}} y en el nombre de la carpeta para abrirla otra vez, o en la pequeña × para olvidarla.

Debajo aparecen secciones según corresponda:

| Sección | Cuándo se muestra | Qué contiene |
|---|---|---|
| {{ui:Cambios}} | Hay un modelo IFC abierto | Sus ediciones sin guardar, las más recientes primero, con {{ui:Deshacer}} y {{ui:Guardar como IFC}} |
| {{ui:Archivo}} | Hay un modelo o una ficha de archivo abierta | Datos del archivo: tamaño, esquema o versión, proyecto, autor, número de elementos |
| {{ui:Dibujo}} | Hay un DWG o DXF abierto | Formato, unidades, conteo de entidades y de capas, hojas, dibujos vinculados, equipos |
| {{ui:Carpeta}} | Hay una carpeta abierta | Conteo de archivos y modelos, tamaño, problemas encontrados |
| {{ui:Volver a la carpeta}} | Abrió un archivo desde una carpeta | Regresa al informe de la carpeta |
| {{ui:Capas}} | Hay un dibujo abierto | Una casilla por capa, con {{ui:Todas activadas}} y {{ui:Todas desactivadas}} |
| {{ui:Niveles}} | Hay un modelo IFC abierto | Una casilla por nivel, el nivel superior primero |
| {{ui:Elementos}} | Hay un modelo IFC abierto | Cuántos elementos de cada tipo contiene el modelo (los 30 más comunes) |

## El escenario

El centro de la pantalla muestra el archivo abierto.

- **Vacío**: "Abra un modelo de edificio." con {{ui:Elegir un archivo}} y {{ui:Abrir una carpeta}}, y una breve descripción de cada formato.
- **Modelo IFC**: la vista 3D con una barra de herramientas en su parte superior, en grupos con nombre como los de la aplicación de dibujo CadCraft, con el icono de cada herramienta sobre su nombre: {{ui:Vista}} ({{ui:Encuadrar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}, {{ui:Aristas}}, {{ui:Espacios}}); {{ui:Editar}} ({{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y {{ui:Más}}, consulte [Copy, paste and duplicate library items](topic:copy-paste)); {{ui:Modelo}} ({{ui:Unidades}} y {{ui:Dibujo}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipo}}, {{ui:Actualizaciones}}, {{ui:Créditos}}); {{ui:Revisión}} ({{ui:Mostrar}}, {{ui:Sección}}, {{ui:Recorrer}}, {{ui:Medir}}; consulte [Cut an IFC model with a section plane](topic:section-plane)); y {{ui:Salida}} (render, vista en vivo, RV, exportaciones, pintura y vistas guardadas). Con {{ui:Dibujo}} activado, la barra de dibujo que está debajo tiene el mismo aspecto: {{ui:Vista}} (el nivel y el tipo de planta), {{ui:Dibujo}}, {{ui:Editar}} y {{ui:Biblioteca}}. Un cubo de vistas está en la esquina inferior derecha. Consulte [Open an IFC model and look around in 3D](topic:open-ifc-model). {{ui:Configuración}}, {{ui:General}} elige si estos botones muestran iconos, rótulos o ambos, muestra u oculta los nombres de los grupos, y con clic derecho en la barra de herramientas puede acomodar sus herramientas y grupos. En una ventana baja, la barra de herramientas quita los nombres bajo sus iconos.
- **Archivo de proyecto o de familia**: la ficha del archivo, con la imagen de vista previa, la información del proyecto y los archivos vinculados. Consulte [Read a project or family file](topic:read-rvt-file).
- **DWG o DXF**: una fila de pestañas ({{ui:Modelo}}, luego una por hoja, luego {{ui:Equipo}} cuando el dibujo tiene equipos con etiquetas, {{ui:3D}}, {{ui:Encuadrar}} y {{ui:Vista de impresión}}), el dibujo, y coordenadas X e Y en vivo en una esquina. Consulte [View a DWG or DXF drawing](topic:view-dwg) y [See a DWG or DXF drawing in 3D](topic:dwg-in-3d).
- **Carpeta**: el informe de la carpeta, con el cuadro {{ui:Empiece aquí}} y tablas de modelos, vínculos, modelos IFC y dibujos. Consulte [Open a whole project folder](topic:open-project-folder).

La **línea de estado** en la parte inferior del escenario le dice qué está haciendo BimCraft ("Leyendo el modelo…", "Generando geometría: 1200 de 5400 elementos") y qué salió mal, en rojo, cuando algo falla. Los mensajes de éxito se desvanecen después de unos segundos.

## El panel Propiedades

El panel derecho muestra:

- Para un modelo IFC: el elemento en el que hizo clic, con su nombre, tipo, etiqueta, GlobalId y todos sus conjuntos de propiedades. Los valores que puede cambiar parecen botones. Consulte [Properties panel fields](topic:properties-panel).
- Para un dibujo: cómo moverse, los dibujos e imágenes vinculados del dibujo y si cada uno se encontró, y una lista de lo que está **Aún sin dibujar**.
- Para una ficha de archivo o una carpeta: una breve nota sobre qué abrir después.

## En una pantalla pequeña

Cuando la ventana es más angosta que la pantalla de una laptop, BimCraft apila sus áreas: el escenario arriba y los paneles debajo. Desplace la página para llegar a los paneles. En un teléfono forman una columna; en una tableta, dos.

## Modos de pantalla

El botón {{ui:Pantalla completa}} de la barra de la aplicación, o {{key:Ctrl+Shift+F}} en todas las plataformas, recorre tres modos:

1. Normal.
2. Pantalla completa, con las barras visibles.
3. Pantalla completa con la barra de la aplicación oculta. Mueva el puntero al borde superior, o toque ahí, para recuperarla.

Pulse {{key:Esc}} para volver a lo normal. Los navegadores sin compatibilidad con pantalla completa (como en un iPhone) solo alternan entre normal y barras ocultas.

## Relacionado

- [Keys and mouse](topic:keyboard)
- [Files BimCraft opens and saves](topic:files)
