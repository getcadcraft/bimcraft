---
title: Guardar vistas y recorridos
summary: Guardá vistas de cámara del modelo por nombre, volvé a ellas, reprodúcelas una tras otra, y grabá un recorrido por el edificio para reproducirlo después.
keywords: vistas, vistas guardadas, cámara, cámaras, punto de vista, escena, escenas, recorrido, presentación, recorrer, atravesar, grabar, reproducir, trayectoria, animación
from: 3af19a36
---

{{ui:Views}} en la barra de herramientas guarda cámaras de la vista 3D en el archivo del modelo, para que vos y quien se lo envíes puedan volver directo a ellas.

## Guardar una vista

1. Armá la vista 3D: orbitá, hacé zoom, ocultá lo que no querés.
2. Hacé clic en {{ui:Views}}, escribí un nombre (o dejá el que se ofrece) y hacé clic en {{ui:Save view}} o presioná {{key:Enter}}.

Guardar con un nombre que ya está en la lista actualiza esa vista. Hacé clic en el nombre de una vista para volver a ella; la cámara se mueve suavemente hasta allí.

Las flechas cambian el orden, el lápiz renombra y el tacho borra. Cada cambio es un paso, así que {{key:Ctrl+Z}} lo deshace.

## Reproducir las vistas

{{ui:Play the views}} pasa de una vista a la siguiente en el orden de la lista, deteniéndose un momento en cada una. {{key:Esc}} o {{ui:Stop}} lo termina.

## Grabar un recorrido

1. Activá [Caminar](topic:walk) y empezá a caminar dentro del edificio.
2. En {{ui:Views}}, hacé clic en {{ui:Record a walk}}.
3. Caminá con {{key:W}} {{key:A}} {{key:S}} {{key:D}} y mirá alrededor con el mouse.
4. Hacé clic en {{ui:Stop recording}}. El recorrido se guarda como "Recorrido 1", con su longitud.

Hacé clic en un recorrido para reproducirlo tal como lo caminaste. {{key:Esc}} lo detiene.

## Renderizar un recorrido como video

Hacé clic en el ícono de película junto a un recorrido. El diálogo de video dibuja cada cuadro del recorrido con los ajustes de Render que elegiste por última vez, con el tamaño, la velocidad de cuadros y la calidad que elijas aquí. Guardalo como video WebM o MP4, o como ZIP con una imagen por cuadro. Los cuadros tardan lo mismo que las imágenes, así que empezá con {{ui:Quick}}.

## Narrar un recorrido

Hacé clic en el ícono de globo de diálogo junto a un recorrido. Escribí una línea por cada cosa dicha, y empezá cada línea con la hora en que empieza (`12`, `0:12` o `1:02.5`); una línea sin hora sigue a la línea de arriba después del tiempo que tarda en decirse. Elegí el idioma, en el idioma del cliente si es quien lo va a ver. {{ui:Preview}} reproduce las palabras con la voz de esta computadora y las muestra como subtítulos; lo mismo pasa cada vez que se reproduce el recorrido. {{ui:Save with the walk}} guarda la narración en el IFC junto con el recorrido.

Tu asistente conectado puede escribir la narración por vos: pedile que mire el recorrido y las vistas guardadas, y pondrá las líneas en el idioma que indiques, como un solo paso de deshacer.

El video renderizado no tiene sonido propio, porque un navegador no puede grabar su propia voz. Guardá los subtítulos (`.srt` o `.vtt`) y agregalos al video en tu reproductor o editor. Qué voces podés elegir depende de la computadora: un idioma sin voz instalada igual recibe los subtítulos.

## En el archivo

Las vistas y recorridos se guardan en el IFC como el conjunto de propiedades `CadCraft_Views` en el proyecto: IFC simple que otros programas ignoran. Están en las coordenadas del primer modelo, así que siguen encajando después de recargar el modelo o agregar otro.

:::tip
Para renderizar una imagen desde una vista guardada, andá a la vista y después hacé clic en [Render](topic:render).
:::
