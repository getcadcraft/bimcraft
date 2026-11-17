---
title: Guardar vistas y recorridos
summary: Guarde vistas de cámara del modelo por nombre, regrese a ellas, reprodúzcalas una tras otra, y grabe un recorrido por el edificio para reproducirlo después.
keywords: vistas, vistas guardadas, cámara, cámaras, punto de vista, escena, escenas, recorrido, presentación, recorrido guiado, recorrer, grabar, reproducir, trayectoria, animación
from: 3af19a36
---

{{ui:Vistas}} en la barra de herramientas guarda cámaras de la vista 3D en el archivo del modelo, para que usted y quien se lo envíe puedan regresar directamente a ellas.

## Guardar una vista

1. Arme la vista 3D: oriente, haga zoom, oculte lo que no quiera.
2. Haga clic en {{ui:Vistas}}, escriba un nombre (o conserve el que se ofrece) y haga clic en {{ui:Guardar vista}} o presione {{key:Enter}}.

Guardar con un nombre que ya está en la lista actualiza esa vista. Haga clic en el nombre de una vista para regresar a ella; la cámara se mueve hasta allí de forma suave.

Las flechas cambian el orden, el lápiz renombra y la papelera elimina. Cada cambio es un paso, así que {{key:Ctrl+Z}} lo deshace.

## Reproducir las vistas

{{ui:Reproducir las vistas}} pasa de una vista a la siguiente en el orden de la lista, deteniéndose un momento en cada una. {{key:Esc}} o {{ui:Detener}} lo termina.

## Grabar un recorrido

1. Active [Caminar](topic:walk) y empiece a caminar dentro del edificio.
2. En {{ui:Vistas}}, haga clic en {{ui:Grabar un recorrido}}.
3. Camine con {{key:W}} {{key:A}} {{key:S}} {{key:D}} y mire alrededor con el ratón.
4. Haga clic en {{ui:Detener la grabación}}. El recorrido se guarda como "Recorrido 1", con su longitud.

Haga clic en un recorrido para reproducirlo como lo caminó. {{key:Esc}} lo detiene.

## Renderizar un recorrido como video

Haga clic en el ícono de película junto a un recorrido. El cuadro de video dibuja cada cuadro del recorrido con los ajustes de [Renderizar](topic:render) que eligió por última vez, al tamaño, velocidad de cuadros y calidad que elija aquí. Guárdelo como video WebM o MP4, o como ZIP con una imagen por cuadro. Los cuadros tardan lo mismo que las imágenes, así que empiece con {{ui:Rápido}}.

## Narrar un recorrido

Haga clic en el ícono de globo de diálogo junto a un recorrido. Escriba una línea por cada cosa dicha, y empiece cada línea con la hora en que comienza (`12`, `0:12` o `1:02.5`); una línea sin hora sigue a la línea de arriba, después del tiempo que tarda en decirse. Elija el idioma, en el del cliente si es quien lo verá. {{ui:Vista previa}} reproduce las palabras con la voz de esta computadora y las muestra como subtítulos; lo mismo ocurre cada vez que se reproduce el recorrido. {{ui:Guardar con el recorrido}} conserva la narración en el IFC junto con el recorrido.

Su asistente conectado puede escribir la narración por usted: pídale que revise el recorrido y las vistas guardadas, y colocará las líneas en el idioma que indique, como un solo paso de deshacer.

El video renderizado no tiene sonido propio, porque un navegador no puede grabar su propia voz. Guarde los subtítulos (`.srt` o `.vtt`) y agréguelos al video en su reproductor o editor de video. Qué voces puede elegir depende de la computadora: un idioma sin voz instalada aún obtiene los subtítulos.

## En el archivo

Las vistas y los recorridos se guardan en el IFC como el conjunto de propiedades `CadCraft_Views` en el proyecto: IFC simple que otros programas ignoran. Están en las coordenadas del primer modelo, así que siguen encajando después de recargar el modelo o agregar otro.

:::tip
Para renderizar una imagen de una vista guardada, vaya a la vista y luego haga clic en [Renderizar](topic:render).
:::
