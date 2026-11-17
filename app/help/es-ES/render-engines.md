---
title: Elegir qué programa dibuja la imagen
summary: La opción Motor del cuadro de diálogo Renderizar: nuestros dos motores, otros programas en CadCraft Studio, y lo que hace la web en su lugar.
keywords: renderizar, motor, renderizador, motor de render, complemento, plugin, studio, programa externo, dibujado por, cola, motor de complemento
from: 44a1ef5e
---

{{ui:Render}} tiene una opción **Motor** encima de {{ui:Mode}}. Nuestros dos motores propios siempre están disponibles y funcionan en todas partes; los complementos pueden añadir más, y en CadCraft Studio la lista también incluye los programas que se hacen cargo de la escena.

| Motor | Qué hace | Dónde |
|---|---|---|
| Integrado: Rápido | La imagen fija rápida: luz de día, sombras suaves, aspectos de vidrio y metal, en segundos | El navegador y Studio |
| Integrado: Trazado de trayectorias | La luz que rebota entre superficies en su tarjeta gráfica o procesador, la cola de render y los demás equipos de su red | El navegador y Studio |
| Un motor de complemento | Dibuja la imagen y la devuelve: vea [Dibujar la imagen con otro programa](topic:render-other-program) | El navegador (un motor escrito en JavaScript) o Studio (un motor que ejecuta un programa) |
| Un programa que se hace cargo de la escena | Studio pone la escena en su carpeta y la mantiene sincronizada | Studio |
| Abrir en … | Guarda la escena y la abre en un programa; no vuelve nada: vea [Abrir la escena en otro programa](topic:render-open-in) | En la web se guarda el archivo |

## Cómo se comporta la elección

- Al elegir Rápido o el Trazado de trayectorias, {{ui:Mode}} cambia con él, y a la inversa. Nada más del cuadro de diálogo cambia para quien nunca usa otro motor.
- Un motor que no está disponible permanece en la lista con el motivo («no encontrado», «necesita una versión más reciente»); no puede seleccionarlo. En el navegador, un motor que solo funciona en Studio muestra «guarda un archivo»: entonces {{ui:Render}} guarda la escena y sus ajustes en un archivo que lleva a ese programa.
- La elección se guarda con los ajustes de render del archivo, y el último motor elegido es el motor inicial para los archivos que no tienen una elección propia.
- Una imagen de otro programa indica qué programa la dibujó y su versión, tanto en el cuadro de diálogo como en la cola de render. Las promesas de la página [Renderizar una imagen del modelo](topic:render) solo cubren **nuestros propios** motores: otro programa ilumina, ajusta el tono y muestrea a su manera, así que dos imágenes de una misma escena se parecen en cámara, sol, lámparas y exposición, pero no píxel a píxel.

## Lo que recibe cada motor

La escena llega a otro programa como un **paquete**: el modelo como archivo USD (el mismo archivo que escribe [Guardar como USD](topic:usd)), y un archivo de ajustes que contiene lo que un importador de USD no es fiable para llevar: los valores exactos de los materiales, las lámparas encendidas con su potencia y sus perfiles de luz, el sol, el cielo, la exposición y la cámara tal como la dibujaría el cuadro de diálogo. No se sube nada a ningún sitio.

## La cola de render

Una imagen para otro programa puede esperar en [la cola de render](topic:render#the-render-queue) como las nuestras; su trabajo recuerda para qué motor es.
