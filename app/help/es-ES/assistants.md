---
title: Deje que un asistente de IA trabaje con su modelo
summary: Active los asistentes en {{ui:Configuración}} para que un asistente de su equipo pueda encontrar elementos, leer sus propiedades, aislarlos en la vista y dibujar muros, puertas, ventanas, forjados, niveles y retículas, a través de CadCraft Studio. Desactivados hasta que usted los active.
keywords: ia, asistente, mcp, script, automatización, studio, encontrar elementos, aislar, propiedades, permisos, desconectar, actividad, dibujar muros, añadir puertas, añadir ventanas, niveles, retículas, forjados, deshacer, guardar, línea de comandos, cli, sin ventana, usar con asistentes de IA
from: 66d72742
---

## Lo que aprenderá

Cómo dejar que un asistente de IA (cualquier asistente que hable MCP) consulte el modelo IFC que tiene abierto y dibuje en él, qué puede y qué no puede hacer, y cómo detenerlo.

## Lo que puede hacer un asistente en BimCraft

| Lo que pide | Qué ocurre | Necesita |
|---|---|---|
| Encontrar elementos | Recibe una lista de elementos por clase, planta, nombre o valor de propiedad, como lo hace **Buscar** | Leer |
| Leer propiedades | Recibe los atributos de un elemento, su tipo, sus conjuntos de propiedades y cantidades, tal como los muestra **Propiedades** | Leer |
| Describir el modelo, listar muros | Recibe los niveles, muros, puertas, ventanas, habitaciones, forjados, retículas y pilares, y los extremos, el tipo y la altura de cada muro | Leer |
| Aislar, ver a través, ocultar o mostrar | La vista 3D cambia como si usted hubiera usado el menú {{ui:Mostrar}} | Cambiar la vista y dibujar |
| Dibujar muros, puertas, ventanas, forjados, niveles o líneas de retícula | El modelo cambia como si usted hubiera usado las herramientas de {{ui:Dibujo}}: los muros se unen, y las habitaciones, forjados y cubiertas se ajustan | Cambiar la vista y dibujar |
| Cambiar un nombre o un valor de propiedad | El Nombre, la Descripción, el Tipo de objeto o la Etiqueta de un elemento, o el valor de una propiedad. Un valor que comparte con otros elementos se copia primero para él; un valor de su tipo solo cambia cuando el asistente lo indica, porque cada elemento de ese tipo lo sigue | Cambiar la vista y dibujar |
| Mover, eliminar y cambiar muros, puertas y ventanas | Los elementos se mueven o se eliminan junto con lo que alojan; los muros dibujados con las herramientas de {{ui:Dibujo}} cambian por sus extremos o su tipo, las puertas y ventanas por su lugar, tamaño o tipo, y las habitaciones y uniones se ajustan | Cambiar la vista y dibujar |
| Preparar, organizar y leer un calendario | «Un calendario de puertas por planta, con resistencia al fuego y herrajes»: el asistente nombra el calendario, sus columnas (una propiedad o etiqueta se convierte en columna) y su agrupación; BimCraft lo rellena con datos del modelo y lo maqueta, tomando de la norma de la oficina lo que el asistente no indicó. La configuración se añade a su lista de Calendarios. Cada línea que recibe indica sus elementos, para que pueda seleccionarlos | Leer para leer; Cambiar la vista y dibujar para guardar una configuración |
| Exportar un calendario | CSV, Excel o texto separado por tabulaciones para pegar en Google Sheets (no se envía nada a Google) | Exportar |
| Leer y definir acabados de habitaciones | Los tipos de acabado, el acabado del suelo, de la pared y del techo de cada habitación, y las zonas; las superficies, el número de baldosas y los volúmenes de soporte salen después de los calendarios de acabados | Leer; Cambiar la vista y dibujar para definirlos |
| Seleccionar elementos, deshacer sus propios pasos | Los elementos se seleccionan en la vista; se deshace su último paso | Cambiar la vista y dibujar |
| Guardar | Un archivo IFC nuevo con todos los cambios, tal como lo genera {{ui:Guardar como IFC}} (el original nunca se modifica) | Guardar |
| Exportar USD | Los modelos abiertos como OpenUSD (.usda, .usdc o .usdz), tal como lo escribe {{ui:USD}} de la barra de herramientas | Exportar |
| Renderizar una imagen, ejecutar la cola de renderizado | Una imagen de la vista 3D, tal como la genera el cuadro de diálogo {{ui:Renderizar}} con su configuración de renderizado, salvo que pida otras, o imágenes de alta calidad añadidas a la cola del cuadro de diálogo y renderizadas una tras otra (la cola necesita WebGPU). No cambia nada del modelo ([Renderizar una imagen](topic:render)) | Exportar |

Cada cambio que hace un asistente es un paso en **Cambios**, llamado «Asistente: …» (por ejemplo, «Asistente: añadir 4 muros»), de modo que {{key:Mod+Z}} deshace toda su acción y usted puede ver de quién es cada paso. En la ventana no puede abrir archivos: usted abre el modelo y el asistente trabaja con el que esté abierto.

## Activarlo

Los asistentes llegan a BimCraft a través de CadCraft Studio en su equipo; el navegador normal no tiene acceso.

1. Abra {{ui:Configuración}} y elija la pestaña **BimCraft**.
2. En **Asistentes**, marque **Permitir que los asistentes de IA y los scripts usen BimCraft**.
3. **Leer** ya está marcado para usted. Marque también **Cambiar la vista y dibujar** si el asistente puede aislar y ocultar elementos y dibujar, y **Guardar** si puede guardar el modelo como un archivo nuevo.
4. Conecte el asistente en Studio (Studio muestra la dirección y los ajustes que debe pegar en él).

## Mientras hay un asistente conectado

Una nota en la parte superior del panel derecho indica qué asistente está conectado y qué puede hacer. Haga clic en {{ui:Desconectar}} para terminar su sesión de inmediato; tendrá que volver a conectarse para continuar.

**Actividad**, bajo **Asistentes** en Configuración, muestra cada llamada que hizo el asistente, de la más reciente a la más antigua, e indica si funcionó.

:::tip
Pida con palabras sencillas, por ejemplo: «aísla los muros exteriores del Nivel 1», «¿qué puertas no tienen resistencia al fuego?» o «dibuja una habitación de 6 por 4 metros en el Nivel 1 con una puerta en el muro sur». El asistente encuentra los elementos y los muestra en su vista, o los dibuja.
:::

## Sin ventana: scripts y línea de comandos

Las mismas herramientas de dibujo funcionan con archivos IFC de las carpetas que usted indique, sin ventana abierta: el servidor MCP y la línea de comandos de CadCraft pueden crear un edificio nuevo o abrir un archivo IFC, describirlo, añadir muros, puertas, ventanas, forjados, niveles y retículas, deshacer y guardarlo como un archivo `.ifc` nuevo. Otras cuatro herramientas sirven para scripts: `ifc_batch` ejecuta hasta 200 pasos de edición como uno solo (todo o nada: un deshacer revierte todo el lote, y un paso rechazado deshace el resto e indica cuál es); `ifc_describe` lista los niveles y cada muro con sus puertas y ventanas; `ifc_render_png` escribe una imagen de comprobación con sombreado plano del modelo (sin materiales, texturas ni sombras) sin ventana; `usd_export` escribe `.usda`, `.usdc` o `.usdz`. En la línea de comandos, `cadcraft bim script.json --from model.ifc -o out.ifc` ejecuta un script de pasos, y `--usd`, `--png` y `--plan` escriben un archivo USD, una imagen o un plano de la misma ejecución. Usted decide qué carpetas puede usar y si puede cambiar o guardar algo.

## Desactivarlo

Desmarque **Permitir que los asistentes de IA y los scripts usen BimCraft**. Todos los asistentes se desconectan de inmediato, y el ajuste se conserva para la próxima vez.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
- [Encontrar elementos por clase, nombre o propiedad](topic:find)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
