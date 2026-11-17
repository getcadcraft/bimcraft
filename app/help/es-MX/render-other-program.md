---
title: Dibujar la imagen con otro programa
summary: Nuestro propio trazador de trayectorias dibuja la imagen de Renderizar; otro programa solo puede dibujarla mediante un complemento de motor de render en CadCraft Studio. Qué se transfiere y por qué algunos programas nunca se ofrecen.
keywords: render, motor, programa externo, motor de complemento, studio, segundo plano, cola, usd, gltf, dibujado por, blender, gpl
from: 652b413c
---

La imagen de {{ui:Renderizar}} la dibujan **nuestros propios motores**: Rápido y el Trazador de trayectorias, en el navegador y en CadCraft Studio. Otro programa solo puede dibujarla cuando un **complemento de motor de render** lo aporta: vea [Añadir un motor de render con un complemento](topic:render-engine-addons). Para llevar la escena a otro programa y seguir trabajando allí, use [Abrir la escena en otro programa](topic:render-open-in) o [Enviar la escena a un motor de juego](topic:render-unreal).

## Dibujar una imagen con el motor de un complemento

1. Active el complemento en Configuración › Complementos. Su motor aparece en la lista **Motor** de {{ui:Renderizar}}.
2. Elíjalo. Sus propios ajustes aparecen debajo de la lista Motor.
3. Haga clic en {{ui:Renderizar}}. En Studio, la primera vez que un complemento ejecuta un programa, Studio le pregunta en su propio cuadro de diálogo. El progreso se muestra mientras dibuja; {{ui:Detener}} lo termina. La imagen aparece marcada con el motor que la dibujó.

Un motor escrito en JavaScript también se ejecuta en el navegador. Un motor que ejecuta un programa en este equipo solo funciona en Studio; en el navegador aparece como un archivo para guardar.

## Lo que se transfiere

El motor recibe un **paquete**: el modelo como archivo USD (y un archivo glTF cuando lo pide), y un archivo de ajustes con los valores exactos de los materiales, el sol y el cielo, cada lámpara encendida con su potencia y su perfil de luz, la cámara y la exposición. Cada programa ilumina, tonifica y muestrea a su manera, así que las imágenes se parecen en cámara, sol, lámparas y exposición, pero no píxel por píxel.

## Programas que CadCraft nunca ejecuta

CadCraft nunca inicia un programa con licencia GNU GPL, y nunca lo muestra como motor ni como destino de Abrir en. Blender es uno de ellos, por eso no está en la lista Motor. Un archivo USD o glTF guardado desde {{ui:Renderizar}} se puede abrir en él como en cualquier programa que lea esos archivos.

:::note
Las cámaras panorámicas y estéreo, y una imagen de cielo (se usan en su lugar los colores del cielo), no se transfieren a otro programa. Nada que se haga en otro programa vuelve al modelo.
:::
