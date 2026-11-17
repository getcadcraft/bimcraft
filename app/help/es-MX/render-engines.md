---
title: Elegir qué programa dibuja la imagen
summary: La opción Motor del cuadro Renderizar: nuestros dos motores, otros programas en CadCraft Studio y lo que hace la web en su lugar.
keywords: render, motor, renderizador, motor de render, plug-in, plugin, studio, programa externo, dibujado por, cola, motor de complemento
from: 44a1ef5e
---

{{ui:Renderizar}} tiene una opción **Motor** encima de {{ui:Modo}}. Nuestros dos motores siempre están disponibles y funcionan en todas partes; los complementos pueden añadir más, y en CadCraft Studio la lista también incluye los programas que toman la escena.

| Motor | Qué hace | Dónde |
|---|---|---|
| Integrado: Rápido | La imagen fija rápida: luz diurna, sombras suaves, aspecto de vidrio y metal, en segundos | El navegador y Studio |
| Integrado: Trazador de trayectorias | La luz que rebota entre superficies en su tarjeta gráfica o procesador, la cola de render y los otros equipos de su red | El navegador y Studio |
| El motor de un complemento | Dibuja la imagen y la devuelve: vea [Dibujar la imagen con otro programa](topic:render-other-program) | El navegador (un motor escrito en JavaScript) o Studio (un motor que ejecuta un programa) |
| Un programa que toma la escena | Studio coloca la escena en su carpeta y la mantiene sincronizada | Studio |
| Abrir en … | Guarda la escena y la abre en un programa; no vuelve nada: vea [Abrir la escena en otro programa](topic:render-open-in) | La web guarda el archivo |

## Cómo se comporta la elección

- Elegir Rápido o el Trazador de trayectorias cambia también el Modo, y viceversa. Nada más del cuadro cambia para quienes nunca usan otro motor.
- Un motor que no está disponible se queda en la lista con el motivo ("no encontrado", "necesita una versión más nueva"); no se puede elegir. En el navegador, un motor que solo funciona en Studio muestra "guarda un archivo": {{ui:Renderizar}} entonces guarda la escena y sus ajustes en un archivo que usted lleva a ese programa.
- La elección se guarda con los ajustes de render del archivo, y el último motor que eligió es el motor inicial para los archivos que no tienen una elección propia.
- Una imagen de otro programa indica qué programa la dibujó y su versión, en el cuadro y en la cola de render. Lo que promete la página [Renderizar](topic:render) cubre solo **nuestros** motores: otro programa ilumina, tonifica y muestrea a su manera, así que dos imágenes de una misma escena se parecen en cámara, sol, lámparas y exposición, pero no píxel por píxel.

## Lo que recibe cada motor

La escena llega a otro programa como un **paquete**: el modelo como archivo USD (el mismo archivo que escribe [Guardar como USD](topic:usd)), y un archivo de ajustes que contiene lo que un importador de USD no puede manejar con seguridad: los valores exactos de los materiales, las lámparas encendidas con su potencia y sus perfiles de luz, el sol, el cielo, la exposición y la cámara tal como la dibujaría el cuadro. No se sube nada a ningún sitio.

## La cola de render

Una imagen para otro programa puede esperar en [la cola de render](topic:render#the-render-queue) como las nuestras; su trabajo recuerda para qué motor es.
