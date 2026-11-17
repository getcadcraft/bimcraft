---
title: Guardar vistas y recorridos
summary: Guardar vistas de cámara del modelo por nombre, volver a ellas, reproducirlas una tras otra, y grabar un recorrido por el edificio para reproducirlo después.
keywords: vistas, vistas guardadas, cámara, cámaras, punto de vista, escena, escenas, recorrido virtual, presentación, recorrer, sobrevuelo, grabar, reproducir, trayectoria, animación
from: 3af19a36
---

{{ui:Views}} de la barra de herramientas guarda cámaras de la vista 3D en el archivo del modelo, para que usted y cualquiera a quien lo envíe pueda volver a ellas directamente.

## Guardar una vista

1. Prepare la vista 3D: oriéntela, acérquela o aléjela, oculte lo que no quiera.
2. Haga clic en {{ui:Views}}, escriba un nombre (o conserve el que se propone) y haga clic en {{ui:Save view}} o pulse {{key:Enter}}.

Guardar con un nombre que ya está en la lista actualiza esa vista. Haga clic en el nombre de una vista para volver a ella; la cámara se desplaza hasta allí con suavidad.

Las flechas cambian el orden, el lápiz renombra y la papelera elimina. Cada cambio es un paso, así que {{key:Ctrl+Z}} lo deshace.

## Reproducir las vistas

{{ui:Play the views}} pasa de una vista a la siguiente en el orden de la lista, deteniéndose un momento en cada una. {{key:Esc}} o {{ui:Stop}} lo terminan.

## Grabar un recorrido

1. Active [Recorrido](topic:walk) y empiece a recorrer el interior del edificio.
2. En {{ui:Views}}, haga clic en {{ui:Record a walk}}.
3. Camine con {{key:W}} {{key:A}} {{key:S}} {{key:D}} y mire alrededor con el ratón.
4. Haga clic en {{ui:Stop recording}}. El recorrido se guarda como "Recorrido 1", con su longitud.

Haga clic en un recorrido para reproducirlo tal como lo recorrió. {{key:Esc}} lo detiene.

## Renderizar un recorrido como vídeo

Haga clic en el icono de película junto a un recorrido. El cuadro de diálogo de vídeo dibuja cada fotograma del recorrido con los ajustes de renderizado que eligió por última vez, con el tamaño, la frecuencia de fotogramas y la calidad que elija aquí. Guárdelo como vídeo WebM o MP4, o como ZIP con una imagen por fotograma. Los fotogramas tardan tanto como las imágenes, así que empiece con {{ui:Quick}}.

## Narrar un recorrido

Haga clic en el icono de globo de diálogo junto a un recorrido. Escriba una línea por cada cosa que se diga, y empiece cada línea con la hora en que empieza (`12`, `0:12` o `1:02.5`); una línea sin hora sigue a la línea anterior, tras el tiempo que tarda en decirse. Elija el idioma; si lo verá el cliente, en el idioma del cliente. {{ui:Preview}} reproduce las palabras con la voz propia de este equipo y las muestra como subtítulos; lo mismo ocurre cada vez que se reproduce el recorrido. {{ui:Save with the walk}} guarda la narración en el IFC junto con el recorrido.

Su propio asistente conectado puede escribir la narración por usted: pídale que mire el recorrido y las vistas guardadas, y pondrá las líneas en el idioma que indique, como un único paso de deshacer.

El vídeo renderizado no tiene sonido propio, porque un navegador no puede grabar su propia voz. Guarde los subtítulos (`.srt` o `.vtt`) y añádalos al vídeo en su reproductor o editor de vídeo. Qué voces puede elegir depende del equipo: un idioma sin voz instalada igualmente obtiene los subtítulos.

## En el archivo

Las vistas y los recorridos se guardan en el IFC como el conjunto de propiedades `CadCraft_Views` en el proyecto: IFC normal que otros programas ignoran. Están en las coordenadas del primer modelo, así que siguen encajando después de recargar el modelo o añadir otro.

:::tip
Para renderizar una imagen de una vista guardada, vaya a la vista y haga clic en [Renderizar](topic:render).
:::
