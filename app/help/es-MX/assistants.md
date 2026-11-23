---
title: Deje que un asistente de IA trabaje con su modelo
summary: Active los asistentes en Configuración para que un asistente en su computadora pueda buscar elementos, leer sus propiedades, aislarlos en la vista y dibujar muros, puertas, ventanas, pisos, niveles y rejillas, a través de CadCraft Studio. Desactivado hasta que usted lo active.
keywords: ia, asistente, mcp, script, automatización, studio, buscar elementos, aislar, propiedades, permisos, desconectar, actividad, dibujar muros, agregar puertas, agregar ventanas, niveles, rejillas, pisos, deshacer, guardar, línea de comandos, cli, sin ventana, usar con asistentes de ia
from: 66d72742
---

## Lo que aprenderá

Cómo dejar que un asistente de IA (cualquier asistente que hable MCP) revise el modelo IFC que tiene abierto y dibuje en él, qué puede y qué no puede hacer, y cómo detenerlo.

## Lo que un asistente puede hacer en BimCraft

| Solicita | Qué ocurre | Requiere |
|---|---|---|
| Buscar elementos | Obtiene una lista de elementos por clase, nivel, nombre o valor de propiedad, como lo hace **Buscar** | Lectura |
| Leer propiedades | Obtiene los atributos, el tipo, los conjuntos de propiedades y las cantidades de un elemento, tal como los muestra **Propiedades** | Lectura |
| Describir el modelo, listar muros | Obtiene los niveles, muros, puertas, ventanas, cuartos, pisos, rejillas y columnas, y el extremo, tipo y altura de cada muro | Lectura |
| Aislar, ver a través, ocultar o mostrar | La vista 3D cambia como si usted hubiera usado el menú {{ui:Show}} | Cambiar la vista y dibujar |
| Dibujar muros, puertas, ventanas, pisos, niveles o líneas de rejilla | El modelo cambia como si usted hubiera usado las herramientas de {{ui:Draw}}: los muros se unen, y los cuartos, pisos y techos siguen el cambio | Cambiar la vista y dibujar |
| Cambiar un nombre o un valor de propiedad | El Nombre, la Descripción, el Tipo de objeto o la Etiqueta de un elemento, o el valor de una propiedad. Un valor que comparten varios elementos se copia primero para él; un valor de su tipo cambia solo cuando el asistente lo indica, porque todos los elementos de ese tipo lo siguen | Cambiar la vista y dibujar |
| Mover, borrar, cambiar muros, puertas y ventanas | Los elementos se mueven o se borran junto con lo que los aloja; los muros dibujados con las herramientas de {{ui:Draw}} cambian por sus extremos o tipo, las puertas y ventanas por su lugar, tamaño o tipo, y los cuartos y uniones siguen el cambio | Cambiar la vista y dibujar |
| Preparar, ordenar y leer un programa | "Un programa de puertas por nivel, con clasificación de resistencia al fuego y herrajes": el asistente nombra el programa, sus columnas (una propiedad o etiqueta se convierte en columna) y su agrupación; BimCraft lo llena con datos del modelo y lo ordena, y toma de la norma de la oficina lo que el asistente no indique. La preparación se suma a su lista de Programas. Cada línea que recibe indica sus elementos, para que pueda seleccionarlos | Lectura para leer; Cambiar la vista y dibujar para guardar la preparación |
| Exportar un programa | CSV, Excel o texto separado por tabulaciones para pegar en Google Sheets (no se envía nada a Google) | Exportar |
| Leer y definir acabados de cuartos | Los tipos de acabado, el acabado de piso, muro y techo de cada cuarto, las zonas; las áreas, cantidades de azulejos y volúmenes de sustrato salen luego de los programas de acabados | Lectura; Cambiar la vista y dibujar para definirlos |
| Seleccionar elementos, deshacer sus propios pasos | Los elementos se eligen en la vista; se revierte su último paso | Cambiar la vista y dibujar |
| Guardar | Un archivo IFC nuevo con todos los cambios, como lo hace {{ui:Save as IFC}} (el original nunca se modifica) | Guardar |
| Exportar USD | Los modelos abiertos como OpenUSD (.usda, .usdc o .usdz), como lo escribe {{ui:USD}} en la barra de herramientas | Exportar |
| Renderizar una imagen, ejecutar la cola de renderizado | Una imagen de la vista 3D, como la genera el cuadro {{ui:Render}} con su configuración de renderizado, salvo que pida otras, o imágenes de alta calidad agregadas a la cola del cuadro y renderizadas una tras otra (la cola necesita WebGPU). Nada del modelo cambia ([Renderizar una imagen](topic:render)) | Exportar |

Cada cambio que hace un asistente es un paso en **Cambios**, con el nombre "Asistente: …" (por ejemplo, "Asistente: agregar 4 muros"), así que {{key:Mod+Z}} deshace toda su acción, y usted puede ver de quién fue cada paso. En la ventana no puede abrir archivos: usted abre el modelo y él trabaja con el que esté abierto.

## Actívelo

Los asistentes llegan a BimCraft a través de CadCraft Studio en su computadora; el navegador normal no tiene forma de entrar.

1. Abra {{ui:Settings}} y elija la pestaña **BimCraft**.
2. En **Asistentes**, marque **Permitir que los asistentes de IA y los scripts usen BimCraft**.
3. **Lectura** ya está marcada para usted. Marque también **Cambiar la vista y dibujar** si el asistente puede aislar y ocultar elementos y dibujar, y **Guardar** si puede guardar el modelo como archivo nuevo.
4. Conecte el asistente en Studio (Studio muestra la dirección y la configuración que debe pegar en él).

## Mientras un asistente está conectado

Una nota en la parte superior del panel derecho indica qué asistente está conectado y qué puede hacer. Haga clic en {{ui:Disconnect}} para terminar su sesión de inmediato; tendrá que volver a conectarse para continuar.

**Actividad**, en **Asistentes** dentro de Configuración, enumera cada llamada que hizo el asistente, de la más reciente a la más antigua, e indica si funcionó.

:::tip
Pida en palabras sencillas, por ejemplo: "aísle los muros exteriores del Nivel 1", "¿qué puertas no tienen resistencia al fuego?" o "dibuje un cuarto de 6 por 4 metros en el Nivel 1 con una puerta en el muro sur". El asistente encuentra los elementos y los muestra en su vista, o los dibuja.
:::

## Sin ventana: scripts y línea de comandos

Las mismas herramientas de dibujo funcionan con archivos IFC en carpetas que usted indique, sin ventana abierta: el servidor MCP y la línea de comandos de CadCraft pueden iniciar un edificio nuevo o abrir un archivo IFC, describirlo, agregar muros, puertas, ventanas, pisos, niveles y rejillas, deshacer y guardarlo como archivo `.ifc` nuevo. Cuatro herramientas más sirven para scripts: `ifc_batch` ejecuta hasta 200 pasos de edición como uno solo (todo o nada: un deshacer revierte todo el lote, y un paso rechazado deshace el resto e indica cuál fue); `ifc_describe` lista los niveles y cada muro con sus puertas y ventanas; `ifc_render_png` escribe una imagen de revisión con sombreado plano del modelo (sin materiales, texturas ni sombras) sin ventana; `usd_export` escribe `.usda`, `.usdc` o `.usdz`. En la línea de comandos, `cadcraft bim script.json --from model.ifc -o out.ifc` ejecuta un script de pasos, y `--usd`, `--png` y `--plan` escriben un archivo USD, una imagen o un plano de la misma ejecución. Usted decide qué carpetas puede usar y si puede cambiar o guardar algo.

## Apáguelo

Desmarque **Permitir que los asistentes de IA y los scripts usen BimCraft**. Todos los asistentes se desconectan de inmediato, y la configuración se conserva para la próxima vez.

## Vea también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
