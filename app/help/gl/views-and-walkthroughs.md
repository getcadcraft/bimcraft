---
title: Gardar vistas e percorridos
summary: Conserva vistas de cámara do modelo polo nome, volve a elas, reprodúceas unha tras outra e grava un percorrido polo edificio para reproducilo.
keywords: vistas, vistas gardadas, cámara, cámaras, punto de vista, escena, escenas, visita, presentación, percorrido, percorrer, sobrevoo, gravar, reproducir, traxecto, animación
from: 3af19a36
---

{{ui:Vistas}} na barra de ferramentas conserva cámaras da vista 3D no ficheiro do modelo, para que ti e quen lle envíes poidas volver directamente a elas.

## Gardar unha vista

1. Prepara a vista 3D: orbita, achega, oculta o que non queiras.
2. Fai clic en {{ui:Vistas}}, escribe un nome (ou mantén o que se ofrece) e fai clic en {{ui:Gardar vista}} ou preme {{key:Enter}}.

Gardar cun nome que xa está na lista actualiza esa vista. Fai clic no nome dunha vista para volver a ela; a cámara se move até alí suavemente.

As frechas cambian a orde, o lapis renomea, a papeleira elimina. Cada cambio é un paso, así que {{key:Ctrl+Z}} o desfai.

## Reproducir as vistas

{{ui:Reproducir as vistas}} pasa dunha vista á seguinte na orde da lista, detendo un momento en cada unha. {{key:Esc}} ou {{ui:Parar}} o rematan.

## Gravar un percorrido

1. Activa [Percorrer](topic:walk) e comeza a camiñar dentro do edificio.
2. En {{ui:Vistas}}, fai clic en {{ui:Gravar un percorrido}}.
3. Camiña con {{key:W}} {{key:A}} {{key:S}} {{key:D}} e mira ao redor co rato.
4. Fai clic en {{ui:Deixar de gravar}}. O percorrido gárdase como "Percorrido 1", coa súa lonxitude.

Fai clic nun percorrido para reproducilo como o camiñaches. {{key:Esc}} o detén.

## Renderizar un percorrido como vídeo

Fai clic na icona de película xunto a un percorrido. O diálogo de vídeo debuxa cada fotograma do percorrido cos axustes de render que escolleches por última vez, co tamaño, a taxa de fotogramas e a calidade que escolles aquí. Gárdao como vídeo WebM ou MP4, ou como ZIP con unha imaxe por fotograma. Os fotogramas tardan o mesmo que as imaxes, así que comeza con {{ui:Rápido}}.

## Narrar un percorrido

Fai clic na icona de bocadillo xunto a un percorrido. Escribe unha liña por cada cousa que se diga, e comeza cada liña coa hora en que empeza (`12`, `0:12` ou `1:02.5`); unha liña sen hora segue á liña de arriba despois do tempo que tarda en dicirse. Escolle a lingua, na lingua do cliente se é el quen o verá. {{ui:Vista previa}} reproduce as palabras coa voz deste computador e mostra subtítulos; o mesmo ocorre sempre que se reproduce o percorrido. {{ui:Gardar co percorrido}} conserva a narración no IFC co percorrido.

O teu asistente conectado pode escribir a narración por ti: pídelle que mire o percorrido e as vistas gardadas, e fixará as liñas na lingua que indiques, como un só paso de desfacer.

O vídeo renderizado non ten son propio, porque un navegador non pode gravar a súa propia voz. Garda os subtítulos (`.srt` ou `.vtt`) e engádeos ao vídeo no teu reproductor ou editor. As voces que podes escoller dependen do computador: unha lingua sen voz instalada aínda obtén os subtítulos.

## No ficheiro

As vistas e os percorridos consérvanse no IFC como o conxunto de propiedades `CadCraft_Views` no proxecto: IFC plano que outros programas ignoran. Están nas coordenadas do primeiro modelo, así que seguen encaixando despois de recargar o modelo ou engadir outro.

:::tip
Para renderizar unha imaxe dunha vista gardada, vai á vista e fai clic en [Render](topic:render).
:::
