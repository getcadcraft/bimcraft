---
title: Dejá que un asistente de IA trabaje con tu modelo
summary: Activá los asistentes en Configuración para que un asistente de tu computadora pueda encontrar elementos, leer sus propiedades, aislarlos en la vista y dibujar muros, puertas, ventanas, pisos, niveles y grillas, a través de CadCraft Studio. Apagado hasta que lo actives.
keywords: ia, asistente, mcp, script, automatización, studio, buscar elementos, aislar, propiedades, permisos, desconectar, actividad, dibujar muros, agregar puertas, agregar ventanas, niveles, grillas, pisos, deshacer, guardar, línea de comandos, cli, sin ventana, usar con asistentes de IA
from: c5ee595b
---

## Lo que vas a aprender

Cómo dejar que un asistente de IA (cualquier asistente que hable MCP) mire el modelo IFC que tenés abierto y dibuje en él, qué puede y qué no puede hacer, y cómo detenerlo.

## Lo que un asistente puede hacer en BimCraft

| Pide | Qué pasa | Necesita |
|---|---|---|
| Buscar elementos | Recibe una lista de elementos por clase, piso, nombre o valor de propiedad, como hace **Buscar** | Lectura |
| Leer propiedades | Recibe los atributos de un elemento, tipo, conjuntos de propiedades y cantidades, como muestra **Propiedades** | Lectura |
| Describir el modelo, listar muros | Recibe los niveles, muros, puertas, ventanas, ambientes, pisos, grillas y columnas, y los extremos, tipo y altura de cada muro | Lectura |
| Aislar, ver transparente, ocultar o mostrar | La vista 3D cambia como si hubieras usado el menú {{ui:Show}} | Cambiar la vista y dibujar |
| Dibujar muros, puertas, ventanas, pisos, niveles o líneas de grilla | El modelo cambia como si hubieras usado las herramientas de {{ui:Draw}}: los muros se unen, los ambientes, pisos y techos siguen | Cambiar la vista y dibujar |
| Cambiar un nombre o un valor de propiedad | El Name, Description, Object type o Tag de un elemento, o un valor de propiedad. Un valor que comparte con otros elementos se copia para él primero; un valor de su tipo cambia solo cuando el asistente lo indica, porque cada elemento de ese tipo lo sigue | Cambiar la vista y dibujar |
| Mover, borrar, cambiar muros, puertas y ventanas | Los elementos se mueven o se borran junto con lo que los aloja; los muros dibujados con las herramientas de {{ui:Draw}} cambian por sus extremos o tipo, las puertas y ventanas por su lugar, tamaño o tipo, y los ambientes y uniones siguen | Cambiar la vista y dibujar |
| Preparar, ordenar y leer una planilla | "Una planilla de puertas por piso, con resistencia al fuego y herrajes": el asistente nombra la planilla, sus columnas (una propiedad o etiqueta se convierte en columna) y su agrupación; BimCraft la llena a partir del modelo y la arma, tomando de la norma de la oficina lo que el asistente no indicó. La configuración se suma a tu lista de Planillas. Cada línea que recibe nombra sus elementos, así que puede seleccionarlos | Lectura para leer; Cambiar la vista y dibujar para guardar una configuración |
| Exportar una planilla | CSV, Excel o texto separado por tabulaciones para pegar en Google Sheets (no se envía nada a Google) | Exportar |
| Leer y fijar acabados de ambientes | Los tipos de acabado, el piso, muro y cielorraso de cada ambiente, zonas; las superficies, cantidades de baldosas y volúmenes de sustrato salen luego de las planillas de acabados | Lectura; Cambiar la vista y dibujar para fijar |
| Seleccionar elementos, deshacer sus propios pasos | Los elementos se eligen en la vista; su último paso se deshace | Cambiar la vista y dibujar |
| Guardar | Un archivo IFC nuevo con cada cambio, como lo hace {{ui:Save as IFC}} (el original nunca se modifica) | Guardar |
| Exportar USD | Los modelos abiertos como OpenUSD (.usda, .usdc o .usdz), como lo escribe {{ui:USD}} en la barra de herramientas | Exportar |
| Renderizar una imagen, ejecutar la cola de render | Una imagen de la vista 3D, como la hace el diálogo {{ui:Render}} con tu configuración de Render salvo que pida otras, o imágenes de alta calidad agregadas a la cola del diálogo y renderizadas una tras otra (la cola necesita WebGPU). Nada del modelo cambia ([Renderizar una imagen](topic:render)) | Exportar |

Cada cambio que hace un asistente es un paso en **Cambios**, con el nombre "Assistant: …" (por ejemplo "Assistant: add 4 walls"), así que {{key:Mod+Z}} deshace toda su acción, y podés ver de quién fue cada paso. En la ventana no puede abrir archivos: vos abrís el modelo; él trabaja con el que está abierto.

## Activarlo

Los asistentes llegan a BimCraft a través de CadCraft Studio en tu computadora; el navegador común no tiene forma de entrar.

1. Abrí {{ui:Settings}} y elegí la pestaña **BimCraft**.
2. En **Assistants**, marcá **Let AI assistants and scripts use BimCraft**.
3. **Read** ya está marcado para vos. Marcá también **Change the view and draw** si el asistente puede aislar y ocultar elementos y dibujar, y **Save** si puede guardar el modelo como archivo nuevo.
4. Conectá el asistente en Studio (Studio muestra la dirección y la configuración para pegar en él).

## Mientras un asistente está conectado

Una nota arriba del panel derecho indica qué asistente está conectado y qué puede hacer. Hacé clic en {{ui:Disconnect}} para terminar su sesión de inmediato; tiene que volver a conectarse para seguir.

**Activity**, debajo de **Assistants** en Configuración, lista cada llamada que hizo el asistente, la más nueva primero, con si funcionó o no.

:::tip
Pedí con palabras simples, por ejemplo "aislá los muros exteriores del Level 1", "¿qué puertas no tienen resistencia al fuego?" o "dibujá un ambiente de 6 por 4 metros en el Level 1 con una puerta en el muro sur". El asistente encuentra los elementos y los muestra en tu vista, o los dibuja.
:::

## Sin ventana: scripts y línea de comandos

Las mismas herramientas de dibujo funcionan con archivos IFC en carpetas que indiques, sin ventana abierta: el servidor MCP y la línea de comandos de CadCraft pueden crear un edificio nuevo o abrir un archivo IFC, describirlo, agregar muros, puertas, ventanas, pisos, niveles y grillas, deshacer y guardarlo como un archivo `.ifc` nuevo. Vos decidís qué carpetas puede usar y si puede cambiar o guardar algo.

## Apagarlo

Desmarcá **Let AI assistants and scripts use BimCraft**. Cada asistente se desconecta de inmediato, y la configuración se guarda para la próxima vez.

## Ver también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos con el paso a paso, cada uno con las herramientas que llama.
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Ocultar, aislar y ver transparente elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
