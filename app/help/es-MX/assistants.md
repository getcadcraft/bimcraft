---
title: Deje que un asistente de IA trabaje con su modelo
summary: Active los asistentes en Configuración para que un asistente en su computadora pueda encontrar elementos, leer sus propiedades, aislarlos en la vista y dibujar muros, puertas, ventanas, pisos, niveles y rejillas, a través de CadCraft Studio. Desactivado hasta que usted lo active.
keywords: ia, asistente, mcp, script, automatización, studio, buscar elementos, aislar, propiedades, permisos, desconectar, actividad, dibujar muros, agregar puertas, agregar ventanas, niveles, rejillas, pisos, deshacer, guardar, línea de comandos, cli, sin ventana, usar con asistentes de IA
from: c5ee595b
---

## Lo que aprenderá

Cómo permitir que un asistente de IA (cualquier asistente que hable MCP) revise el modelo IFC que tiene abierto y dibuje en él, qué puede y qué no puede hacer, y cómo detenerlo.

## Lo que un asistente puede hacer en BimCraft

| Solicita | Qué sucede | Requiere |
|---|---|---|
| Buscar elementos | Recibe una lista de elementos por clase, piso, nombre o valor de propiedad, como lo hace **Buscar** | Lectura |
| Leer propiedades | Recibe los atributos de un elemento, su tipo, sus conjuntos de propiedades y sus cantidades, tal como los muestra **Propiedades** | Lectura |
| Describir el modelo, listar muros | Recibe los niveles, muros, puertas, ventanas, habitaciones, pisos, rejillas y columnas, y los extremos, el tipo y la altura de cada muro | Lectura |
| Aislar, ver a través, ocultar o mostrar | La vista 3D cambia como si hubiera usado el menú {{ui:Mostrar}} | Cambiar la vista y dibujar |
| Dibujar muros, puertas, ventanas, pisos, niveles o líneas de rejilla | El modelo cambia como si hubiera usado las herramientas de {{ui:Dibujo}}: los muros se unen, y las habitaciones, pisos y cubiertas siguen | Cambiar la vista y dibujar |
| Cambiar un nombre o un valor de propiedad | El Name, Description, Object type o Tag de un elemento, o un valor de propiedad. Un valor que comparte con otros elementos se copia para él primero; un valor de su tipo cambia solo cuando el asistente lo indica, porque cada elemento de ese tipo lo sigue | Cambiar la vista y dibujar |
| Mover, borrar, cambiar muros, puertas y ventanas | Los elementos se mueven o se borran junto con lo que alojan; los muros dibujados con las herramientas de {{ui:Dibujo}} cambian por sus extremos o su tipo, y las puertas y ventanas por su lugar, tamaño o tipo; las habitaciones y las uniones siguen | Cambiar la vista y dibujar |
| Configurar, ordenar y leer un cuadro | "Un cuadro de puertas por piso, con clasificación de fuego y herrajes": el asistente nombra el cuadro, sus columnas (una propiedad o etiqueta se convierte en una columna) y su agrupación; BimCraft lo llena a partir del modelo y lo ordena, tomando de la norma de la oficina lo que el asistente no indicó. La configuración se une a su lista de Tablas. Cada línea que recibe nombra sus elementos, así que puede seleccionarlos | Lectura para leer; Cambiar la vista y dibujar para guardar una configuración |
| Exportar un cuadro | CSV, Excel o texto separado por tabulaciones para pegar en Google Sheets (nada se envía a Google) | Exportar |
| Leer y definir acabados de habitaciones | Los tipos de acabado, el acabado de piso, muro y techo de cada habitación, y las zonas; las áreas, los conteos de azulejos y los volúmenes de sustrato salen después de los cuadros de acabados | Lectura; Cambiar la vista y dibujar para definirlos |
| Seleccionar elementos, deshacer sus propios pasos | Los elementos se seleccionan en la vista; se deshace su último paso | Cambiar la vista y dibujar |
| Guardar | Un archivo IFC nuevo con todos los cambios, como lo hace {{ui:Guardar como IFC}} (el original nunca se modifica) | Guardar |
| Exportar USD | Los modelos abiertos como OpenUSD (.usda, .usdc o .usdz), como lo escribe {{ui:USD}} en la barra de herramientas | Exportar |
| Renderizar una imagen, ejecutar la cola de renderizado | Una imagen de la vista 3D, como la hace el cuadro {{ui:Renderizar}} con su configuración de renderizado, salvo que pida otras; o imágenes de alta calidad agregadas a la cola del cuadro y renderizadas una tras otra (la cola necesita WebGPU). Nada cambia en el modelo ([Renderizar una imagen](topic:render)) | Exportar |

Cada cambio que hace un asistente es un paso en **Cambios**, con el nombre "Asistente: …" (por ejemplo, "Asistente: agregar 4 muros"), así que {{key:Mod+Z}} deshace toda su acción, y usted puede ver de quién fue cada paso. En la ventana no puede abrir archivos: usted abre el modelo, y el asistente trabaja con el que está abierto.

## Actívelo

Los asistentes llegan a BimCraft a través de CadCraft Studio en su computadora; el navegador normal no tiene acceso.

1. Abra {{ui:Configuración}} y elija la pestaña **BimCraft**.
2. En **Asistentes**, marque **Permitir que los asistentes de IA y los scripts usen BimCraft**.
3. **Leer** ya viene marcado para usted. Marque también **Cambiar la vista y dibujar** si el asistente puede aislar y ocultar elementos y dibujar, y **Guardar** si puede guardar el modelo como un archivo nuevo.
4. Conecte el asistente en Studio (Studio muestra la dirección y la configuración que debe pegar en él).

## Mientras un asistente está conectado

Una nota en la parte superior del panel derecho indica qué asistente está conectado y qué puede hacer. Haga clic en {{ui:Desconectar}} para terminar su sesión de inmediato; tendrá que volver a conectarse para continuar.

**Actividad**, bajo **Asistentes** en Configuración, lista cada llamada que hizo el asistente, la más reciente primero, e indica si funcionó.

:::tip
Pregunte con palabras sencillas, por ejemplo: "aísle los muros exteriores del Nivel 1", "¿qué puertas no tienen clasificación de fuego?" o "dibuje una habitación de 6 por 4 metros en el Nivel 1 con una puerta en el muro sur". El asistente encuentra los elementos y los muestra en su vista, o los dibuja.
:::

## Sin ventana: scripts y línea de comandos

Las mismas herramientas de dibujo funcionan con archivos IFC en las carpetas que usted indique, sin ventana abierta: el servidor MCP y la línea de comandos de CadCraft pueden crear un edificio nuevo o abrir un archivo IFC, describirlo, agregar muros, puertas, ventanas, pisos, niveles y rejillas, deshacer y guardarlo como un archivo `.ifc` nuevo. Usted decide qué carpetas puede usar y si puede modificar o guardar algo.

## Desactívelo

Desmarque **Permitir que los asistentes de IA y los scripts usen BimCraft**. Cada asistente se desconecta de inmediato, y la configuración se conserva para la próxima vez.

## Vea también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
