---
title: Deje que un asistente de IA trabaje con su modelo
summary: Active los asistentes en Configuración para que un asistente de su ordenador pueda encontrar elementos, leer sus propiedades, aislarlos en la vista y dibujar muros, puertas, ventanas, forjados, plantas y ejes, a través de CadCraft Studio. Desactivado hasta que lo active.
keywords: ia, asistente, mcp, script, automatización, studio, buscar elementos, aislar, propiedades, permisos, desconectar, actividad, dibujar muros, añadir puertas, añadir ventanas, plantas, ejes, forjados, deshacer, guardar, línea de comandos, cli, sin interfaz, usar con asistentes de IA
from: c5ee595b
---

## Qué aprenderá

Cómo dejar que un asistente de IA (cualquiera que hable MCP) mire el modelo IFC que tiene abierto y dibuje en él, qué puede y qué no puede hacer, y cómo detenerlo.

## Qué puede hacer un asistente en BimCraft

| Solicita | Qué ocurre | Requiere |
|---|---|---|
| Buscar elementos | Recibe una lista de elementos por clase, planta, nombre o valor de propiedad, como lo hace **Buscar** | Lectura |
| Leer propiedades | Recibe los atributos, el tipo, los conjuntos de propiedades y las cantidades de un elemento, tal como los muestra **Propiedades** | Lectura |
| Describir el modelo, listar muros | Recibe las plantas, muros, puertas, ventanas, espacios, forjados, ejes y pilares, y los extremos, el tipo y la altura de cada muro | Lectura |
| Aislar, ver a través, ocultar o mostrar | La vista 3D cambia como si hubiera usado el menú {{ui:Mostrar}} | Cambiar la vista y dibujar |
| Dibujar muros, puertas, ventanas, forjados, plantas o líneas de eje | El modelo cambia como si hubiera usado las herramientas de {{ui:Dibujo}}: los muros se unen, y los espacios, forjados y cubiertas siguen | Cambiar la vista y dibujar |
| Cambiar un nombre o un valor de propiedad | El Nombre, la Descripción, el Tipo de objeto o la Etiqueta de un elemento, o un valor de propiedad. Un valor que comparte con otros elementos se copia primero para él; un valor de su tipo cambia solo cuando el asistente lo indica, porque todos los elementos de ese tipo lo siguen | Cambiar la vista y dibujar |
| Mover, borrar, cambiar muros, puertas y ventanas | Los elementos se mueven o se borran con lo que alojan; los muros dibujados con las herramientas de {{ui:Dibujo}} cambian por sus extremos o su tipo, las puertas y ventanas por su lugar, tamaño o tipo, y los espacios y las uniones siguen | Cambiar la vista y dibujar |
| Preparar, organizar y leer una tabla | «Una tabla de puertas por planta, con clasificación al fuego y herrajes»: el asistente nombra la tabla, sus columnas (una propiedad o etiqueta se convierte en columna) y su agrupación; BimCraft la rellena a partir del modelo y la dispone, tomando de la norma de la oficina lo que el asistente no indicó. La preparación se añade a su lista de Tablas. Cada línea que recibe nombra sus elementos, así que puede seleccionarlos | Lectura para leer; Cambiar la vista y dibujar para guardar una preparación |
| Exportar una tabla | CSV, Excel o texto separado por tabulaciones para pegar en Google Sheets (no se envía nada a Google) | Exportar |
| Leer y definir acabados de espacios | Los tipos de acabado, el acabado del suelo, del muro y del techo de cada espacio, y las zonas; las superficies, el número de baldosas y los volúmenes de soporte se obtienen después de las tablas de acabados | Lectura; Cambiar la vista y dibujar para definirlos |
| Seleccionar elementos, deshacer sus propios pasos | Los elementos se eligen en la vista; se deshace su último paso | Cambiar la vista y dibujar |
| Guardar | Un archivo IFC nuevo con todos los cambios, como lo hace {{ui:Guardar como IFC}} (el original nunca se modifica) | Guardar |
| Exportar USD | Los modelos abiertos como OpenUSD (.usda, .usdc o .usdz), como lo escribe {{ui:USD}} en la barra de herramientas | Exportar |
| Renderizar una imagen, ejecutar la cola de renderizado | Una imagen de la vista 3D, como la genera el cuadro {{ui:Renderizar}} con sus ajustes de renderizado, salvo que pida otros; o imágenes de alta calidad añadidas a la cola del cuadro y renderizadas una tras otra (la cola necesita WebGPU). El modelo no cambia ([Renderizar una imagen](topic:render)) | Exportar |

Cada cambio que hace un asistente es un paso en **Cambios**, con el nombre «Asistente: …» (por ejemplo, «Asistente: añadir 4 muros»), así que {{key:Mod+Z}} deshace toda su acción, y puede ver de quién es cada paso. En la ventana no puede abrir archivos: usted abre el modelo y el asistente trabaja con el que esté abierto.

## Actívelo

Los asistentes llegan a BimCraft a través de CadCraft Studio en su ordenador; el navegador normal no tiene acceso.

1. Abra {{ui:Configuración}} y elija la pestaña **BimCraft**.
2. Bajo **Asistentes**, marque **Permitir que los asistentes de IA y los scripts usen BimCraft**.
3. **Leer** ya viene marcado. Marque también **Cambiar la vista y dibujar** si el asistente puede aislar y ocultar elementos y dibujar, y **Guardar** si puede guardar el modelo como archivo nuevo.
4. Conecte el asistente en Studio (Studio muestra la dirección y los ajustes que hay que pegar en él).

## Mientras un asistente está conectado

Una nota en la parte superior del panel derecho indica qué asistente está conectado y qué puede hacer. Haga clic en {{ui:Desconectar}} para terminar su sesión de inmediato; tendrá que volver a conectarse para continuar.

**Actividad**, bajo **Asistentes** en Configuración, lista cada llamada que hizo el asistente, la más reciente primero, con indicación de si funcionó.

:::tip
Pregunte con palabras sencillas, por ejemplo: «aísle los muros exteriores de la planta 1», «¿qué puertas no tienen clasificación al fuego?» o «dibuje un espacio de 6 por 4 metros en la planta 1 con una puerta en el muro sur». El asistente encuentra los elementos y los muestra en su vista, o los dibuja.
:::

## Sin ventana: scripts y línea de comandos

Las mismas herramientas de dibujo funcionan sobre archivos IFC de las carpetas que indique, sin ninguna ventana abierta: el servidor MCP y la línea de comandos de CadCraft pueden crear un edificio nuevo o abrir un archivo IFC, describirlo, añadir muros, puertas, ventanas, forjados, plantas y ejes, deshacer y guardarlo como un nuevo archivo `.ifc`. Usted decide qué carpetas puede usar y si puede modificar o guardar algo.

## Desactívelo

Desmarque **Permitir que los asistentes de IA y los scripts usen BimCraft**. Todos los asistentes se desconectan de inmediato, y el ajuste se conserva para la próxima vez.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
