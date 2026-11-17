---
title: Renderizar una imagen del modelo
summary: Haga una imagen con luz de día de la vista 3D: cielo, el sol en la latitud de su emplazamiento, sombras suaves, ventanas de vidrio; con WebGPU, trazado de trayectorias en la tarjeta gráfica con cielos, cámara, mezcla de luces, corrección, niebla y cola de render.
keywords: renderizar, preajuste, preajustes, preajuste de escena, interior, exterior, vista de sección, noche, un clic, renderizado, trazado de trayectorias, trazado de rayos, iluminación global, reflexiones, refracción, alta calidad, foto, fotorrealista, realista, imagen, png, fija, cielo, sol, luz de día, sombras, sombras suaves, oclusión ambiental, vidrio, ventanas, metal, materiales, exposición, brillo, nublado, atardecer, estudio, presentación, visualización, webgpu, reducir ruido, cielo físico, hdri, ies, profundidad de campo, panorámica, balance de blancos, mezcla de luces, elementos de render, exr, png de 16 bits, niebla, cáusticas, cola de render
from: beb74cc7
---

{{ui:Render}} en la barra de herramientas hace una imagen de la vista 3D con aspecto de luz de día: un cielo, el sol donde lo sitúa la latitud del emplazamiento, sombras suaves, luz de todo el cielo que oscurece los rincones, y colores que pueden parecer vidrio o metal. El modelo y el archivo no se modifican.

## Renderizar la vista

1. Ajuste la vista 3D como quiera que aparezca la imagen: oriente y acerque, oculte las plantas o elementos que no desee, y establezca una [sección](topic:section-plane) si la imagen debe mostrar un corte.
2. Pulse {{ui:Render}} en la barra de herramientas.
3. Elija una {{ui:Scene}} si la pulsada no es la que quiere (vea [Preajustes de escena: una buena imagen en un clic](topic:render#scene-presets-a-good-picture-in-one-click)), elija el {{ui:Size}} y después pulse {{ui:Render}} en el cuadro de diálogo.

   La imagen se va completando mientras se renderiza y se suaviza con cada pasada. {{ui:Stop}} (o {{key:Esc}}) la detiene pronto y conserva la imagen hasta ese momento.

4. Pulse {{ui:Save}} para descargarla como PNG, o {{ui:Save as}} para otro formato (vea [Guardar la imagen](topic:render#save-the-picture)). Se nombra según el archivo del modelo.

:::tip
Empiece con {{ui:Draft}} en {{ui:The view's size}} para comprobar la cámara; después renderice con {{ui:Good}} o {{ui:Best}} a un tamaño mayor para la imagen final.
:::

## Preajustes de escena: una buena imagen en un clic

La parte superior del cuadro de diálogo tiene cuatro botones de {{ui:Scene}}. Cada uno ajusta el cielo, el brillo, el suelo, las líneas de borde, la calidad y el sol de una vez, así que no hay nada que aprender antes de la primera imagen. Pulse uno y después {{ui:Render}}.

| Escena | Qué ajusta | Para qué usarla |
|---|---|---|
| {{ui:Exterior}} | Cielo despejado, el sol propio del modelo, suelo activado | El edificio desde fuera |
| {{ui:Interior}} | Cielo nublado (luz uniforme, sin manchas duras de sol), medio paso más brillante | Una vista desde dentro de una habitación |
| {{ui:Section view}} | Estudio blanco, sin suelo, líneas de borde en el render rápido | Un modelo cortado por una sección |
| {{ui:Night}} | El sol bajo el horizonte (medianoche en pleno invierno para el hemisferio del emplazamiento), un paso más brillante | Lámparas que iluminan el modelo. Sin lámparas la imagen queda oscura |

- {{ui:Pick for this view}} elige por usted: {{ui:Section view}} cuando un corte de sección está activo, {{ui:Interior}} cuando la cámara está dentro del modelo, y en otro caso {{ui:Exterior}}. La primera vez que abre el cuadro de diálogo empieza así por sí solo.
- Todos los ajustes siguen debajo y se pueden cambiar. Cuando cambia uno, la escena deja de estar pulsada, ningún botón queda activo y la línea bajo los botones indica que los ajustes son suyos. Pulse la escena otra vez para restaurar sus valores.
- Una escena no toca el motor, el modo, el tamaño, los materiales, la cámara ni las lámparas.

:::note
Las escenas dan los mismos valores en ModelCraft y BimCraft. El aspecto final de la imagen depende de su modelo y de su tarjeta gráfica.
:::

## Lo que aparece en la imagen

Lo que la vista 3D muestra sólido: los elementos ocultos y transparentes, las plantas ocultas y los modelos ocultos se dejan fuera, y los espacios solo aparecen cuando {{ui:Spaces}} está activado. Un plano de sección o una caja de sección cortan la imagen igual que cortan la vista. Los elementos se muestran en sus propios colores: la colorización por propiedad (la pestaña {{ui:Color}}) no se usa.

## Ajustes

| Ajuste | Qué hace |
|---|---|
| {{ui:Size}} | El tamaño de la vista, el doble del tamaño de la vista, Full HD, 4K o cuadrado |
| {{ui:Mode}} | {{ui:Fast}}, o {{ui:High quality (path traced)}} (abajo) con su {{ui:Time limit}} |
| {{ui:Quality}} | Cuántas pasadas (o, en alta calidad, muestras) se promedian: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Más pasadas dan sombras y bordes más suaves, y tardan más |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} o {{ui:White studio}} (un fondo blanco liso) |
| {{ui:Sun}} | 21 de junio a las 15:00 en la latitud que el archivo indica para su emplazamiento (IfcSite), girado al norte verdadero del modelo. Marque {{ui:Use another date and time for this picture}} para otra hora |
| {{ui:Brightness}} | Más claro o más oscuro, en pasos (stops) |
| {{ui:Ground under the model}} | Un suelo en el punto más bajo del modelo que recibe las sombras y se desvanece en el horizonte |
| {{ui:Draw edges}} | Dibuja las aristas de los elementos finas sobre la imagen |

Cuando el sol está bajo el horizonte a la hora elegida es de noche: el cielo se oscurece y las lámparas del modelo lo iluminan.

## Lámparas

Cada luminaria del modelo es una lámpara en la imagen: las luminarias de un archivo IFC (IfcLightFixture, o un elemento tipificado como luminaria), incluidas las que coloque desde la biblioteca. Cada una emite hacia abajo desde justo debajo de la luminaria. Cuando el archivo indica la potencia en vatios de una luminaria, su brillo se calcula a partir de ella; si no, son 800 lúmenes, un blanco cálido.

El cuadro de diálogo enumera las lámparas bajo {{ui:Lamps}}: desmarque una para apagarla, o escriba su brillo en lúmenes. Estos cambios se guardan en el IFC (el conjunto de propiedades `CadCraft_Light` de la luminaria, donde también puede cambiarlos en Propiedades), y {{key:Ctrl+Z}} los deshace.

Cuando un archivo no indica dónde está su emplazamiento, el sol se sitúa a 40° norte, y el cuadro de diálogo lo indica. La hora es la hora de reloj del emplazamiento, calculada a partir de su longitud, así que puede estar una hora desfasada donde los relojes están configurados de otra forma.

Estos ajustes se conservan en este navegador para la siguiente imagen. No se guardan en el archivo IFC.

## Vidrio y otros materiales

Bajo {{ui:Materials}}, cada color en pantalla tiene un aspecto: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} o {{ui:Frosted glass}}. Los colores que el archivo IFC hace transparentes (por ejemplo, el acristalamiento de ventanas) empiezan como {{ui:Glass}}.

:::note
En el modo {{ui:Fast}}, el vidrio y el metal reflejan el cielo, no el resto del modelo, y la luz no se curva al atravesar el vidrio. El modo {{ui:High quality (path traced)}} de abajo hace ambas cosas.
:::

## Alta calidad

Elija {{ui:Mode}} › {{ui:High quality (path traced)}} para una imagen que sigue la luz tal como la ve una cámara:

- la luz rebota entre superficies, así que una habitación iluminada por una ventana o por una lámpara se ilumina por todos lados, y los colores se transmiten a sus vecinos;
- el vidrio es vidrio real: la luz se curva al atravesarlo y refleja el modelo;
- el metal y las superficies pulidas reflejan el resto del modelo;
- los paneles de luz iluminan como paneles, con sombras suaves.

Es mucho más lento que {{ui:Fast}}: cada pasada traza de nuevo la luz de cada píxel. La imagen empieza con grano y se aclara a medida que se acumulan muestras, así que empiece en pequeño ({{ui:The view's size}}, {{ui:Draft}}) y elija un {{ui:Time limit}}: cuando se agota, se conserva la imagen hasta ese momento. {{ui:Stop}} también la conserva. La primera pasada espera mientras el navegador prepara el trazador de trayectorias.

Donde el navegador tiene WebGPU, el trazador de trayectorias es el propio de CadCraft y se ejecuta en la tarjeta gráfica; la línea bajo la imagen lo indica. Tras {{ui:Stop}} o el límite de tiempo, {{ui:Resume}} continúa con la misma imagen hasta completar sus muestras; cambiar un ajuste o pulsar {{ui:Render}} de nuevo empieza desde cero. Sin WebGPU, la imagen se traza con WebGL (la línea lo indica) y {{ui:Resume}} no se ofrece.

:::linux
Firefox y la mayoría de configuraciones de Chrome en Linux todavía no tienen WebGPU, así que la alta calidad usa WebGL allí.
:::

En este modo no se dibujan los bordes, las texturas muestran su color y su rugosidad pero no sus relieves, y el corte de sección se aplica al modelo antes de empezar la imagen.

{{ui:Denoise (clears the grain left after the samples)}} está activado de forma predeterminada: cuando la imagen termina, o se detiene, el grano que queda se elimina con una red neuronal creada para ello (la red publicada de Intel Open Image Denoise, ejecutada en su propio equipo: en la tarjeta gráfica, si no, en el procesador). {{ui:Show}} › {{ui:The picture before denoising}} muestra la imagen tal como se renderizó.

## Cielos y perfiles de luz en la tarjeta gráfica

Con WebGPU, la alta calidad tiene dos cielos más:

- {{ui:Physical sky}} calcula la luz de día a partir de la altura del sol: un azul intenso en el cénit, una franja pálida en el horizonte, y un sol que se vuelve más cálido y más tenue al bajar. {{ui:Haze}} va de un día muy despejado (2) a uno brumoso (10).
- {{ui:Sky picture (HDRI)}} ilumina el modelo con una imagen panorámica de un lugar real. {{ui:Choose a picture…}} toma un archivo `.hdr` o `.exr` equirectangular; {{ui:Turn}} lo gira alrededor del modelo y {{ui:Picture brightness}} lo hace más claro u oscuro. La imagen lleva su propio sol, así que no se añade el sol del modelo. Solo se conserva mientras la página está abierta: al reabrirla, elíjala de nuevo.

Cada lámpara de la lista {{ui:Lamps}} puede tomar un perfil de luz del fabricante: {{ui:IES profile…}} lee un archivo IES (LM-63) y la lámpara entonces proyecta su luz como lo hace esa luminaria (un downlight estrecho, un bañador de pared). Todas las lámparas con ese nombre lo usan, y cada lámpara conserva su propio brillo. Pulse el nombre del perfil para dejar de usarlo.

Las ventanas de vidrio transparente ayudan a que la luz del cielo entre en una habitación.

El modo {{ui:Fast}} y el trazador de trayectorias en WebGL muestran {{ui:Physical sky}} y {{ui:Sky picture (HDRI)}} como un cielo despejado, e ignoran los perfiles de luz.

## La cámara

{{ui:Camera}} prepara la imagen como una fotografía:

- {{ui:Exposure}}: mantenga el {{ui:Brightness slider}}, o elija {{ui:Camera settings}} y ajuste la {{ui:Aperture (f-stop)}}, la {{ui:Shutter speed}} y el {{ui:ISO}} como en una cámara; el EV junto a ellos es el valor de exposición habitual. f/16 a 1/100 s e ISO 100 corresponde a un día soleado; una escena más oscura necesita una abertura más amplia, un obturador más lento o un ISO más alto. Esto funciona en todos los modos.
- {{ui:Depth of field}} desenfoca lo que está más cerca o más lejos de la {{ui:Focus distance (m)}}, como lo haría una lente de ese número f (déjelo vacío para enfocar lo que está en el centro de la vista); {{ui:Aperture shape}} da a los brillos fuera de foco una forma redonda o de láminas.
- {{ui:Two-point perspective (vertical lines stay vertical)}} nivela la cámara y desplaza la imagen, como lo hace un objetivo de desplazamiento arquitectónico, de modo que los muros no se inclinen al mirar hacia arriba o hacia abajo a un edificio.
- {{ui:White balance}} fija qué color de luz se ve como blanco: más bajo (por ejemplo, 3000 K) para la luz cálida de las lámparas, más alto para la sombra y los días nublados.
- {{ui:Projection}}: {{ui:360° panorama}} crea una imagen 2:1 de todo lo que rodea a la cámara, para visores de panorámicas; {{ui:360° stereo panorama}} apila una panorámica para el ojo izquierdo y otra para el derecho, para cascos; {{ui:Cube map (6 faces)}} crea seis vistas cuadradas en una cuadrícula de 3 × 2. El ancho viene de {{ui:Size}}.

La proyección, la profundidad de campo, la perspectiva de dos puntos y el balance de blancos necesitan el trazador de trayectorias en la tarjeta gráfica (WebGPU), así que solo aparecen en {{ui:High quality (path traced)}}.

## Terminar la imagen

{{ui:Picture}} corrige la imagen de alta calidad como una fotografía, y cada control cambia la imagen terminada de inmediato, sin renderizar de nuevo:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (la imagen como antes), {{ui:AgX}} (más suave, conserva el color en luz muy brillante), {{ui:Filmic}} (una curva de película suave) o {{ui:Standard}} (simple: la luz muy intensa se recorta a blanco).
- {{ui:Contrast}} y {{ui:Highlight compression}} (recupera detalle en las zonas muy brillantes).
- {{ui:Bloom}} (un resplandor suave alrededor de la luz intensa), {{ui:Glare}} con sus {{ui:Glare streaks}} (rayos de estrella desde los puntos más brillantes) y {{ui:Vignette}} (esquinas más oscuras).
- {{ui:Colour table (.cube)…}} aplica una corrección de color desde un archivo `.cube`, con su {{ui:Colour table strength}}; como una imagen de cielo, solo se conserva mientras la página está abierta.

## Guardar la imagen

{{ui:Save as}} junto a {{ui:Save}} elige el archivo: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} para compartir (JPEG y WebP solo donde el navegador puede escribirlos), y, después de una renderización de alta calidad en la tarjeta gráfica, también:

- {{ui:PNG, 16 bits}}: la imagen corregida con pasos más finos entre tonos, para imprimir o seguir editando.
- {{ui:EXR, every layer (32-bit float)}}: la imagen tal como se renderizó (luz lineal, sin corrección) con cada elemento de render y cada grupo de luces como capa propia, para programas de composición.
- {{ui:Render file (.ccrender, to grade again later)}}: todo lo que el cuadro de diálogo necesita para volver a mezclar y corregir la imagen. {{ui:Open a render file…}} la recupera, con su mezcla y su corrección, sin renderizar.

## Mezclar las luces después del render

Active {{ui:Light mixing (change each light's colour and brightness after the render)}} antes de pulsar {{ui:Render}}. Cuando la imagen termina (o se detiene), {{ui:Mix the picture}} enumera sus luces por grupos: el cielo, el sol y las lámparas por nombre (cada lámpara con el mismo nombre es un grupo). Desactive un grupo, asígnele un color o hágalo más claro u oscuro, y la imagen cambia de inmediato, sin renderizar de nuevo. {{ui:Save mix}} guarda la mezcla con un nombre para elegirla después; {{ui:As rendered}} vuelve a la imagen tal como se hizo. {{ui:Save}} guarda la imagen mezclada.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} conserva también las partes de la imagen. {{ui:Show}} cambia la vista a una de ellas: los colores de superficie (albedo), las normales, la profundidad, la luz difusa, especular y transmitida (cada una directa e indirecta), lo que emite luz y el cielo, y un color por objeto o por material para crear máscaras.

Ambas opciones guardan capas adicionales en la tarjeta gráfica. En tamaños grandes, una tarjeta gráfica puede no tener espacio; el cuadro de diálogo lo indica y un tamaño menor funciona.

## Niebla, humo, ruido y cáusticas

Estos se encuentran en {{ui:Fog, smoke and noise}} y funcionan en {{ui:High quality (path traced)}} con la tarjeta gráfica; los demás motores no los incluyen.

- {{ui:Fog and haze}} llena el aire hasta una altura con una neblina que iluminan el sol, el cielo y las lámparas. {{ui:How far you can see, in meters}} fija su espesor (unos 100 m es una bruma ligera, 20 m una niebla espesa), {{ui:Fog height above the ground, in meters}} es donde termina, y {{ui:Light shafts}} indica cuánto brilla la neblina hacia la luz. La luz del sol abandona la niebla por su parte superior, así que donde el sol entra por una ventana o entre edificios se ve como haces de luz.
- {{ui:Smoke or cloud}} añade un volumen de humo o nube iluminado como la niebla. {{ui:Kind}} es una {{ui:Cloud}}, una {{ui:Smoke column}} o {{ui:From a volume file (.ccvol)}}, el formato de malla propio de CadCraft. {{ui:Detail}} y {{ui:Variation}} cambian una nube o columna creada; {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} y {{ui:Turn}} la colocan (empieza en el centro del modelo); {{ui:Thickness}} la hace más densa, {{ui:Forward glow}} la hace más brillante hacia la luz, y {{ui:Color}} la tiñe. Un archivo de volumen solo se conserva mientras la página está abierta, igual que una imagen de cielo.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} no da más muestras a los píxeles que ya se han estabilizado. {{ui:Noise to accept}} es cuánto grano queda cuando un píxel se detiene. La línea bajo la imagen indica cuántas muestras recibió de media cada píxel.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} traza la luz de las lámparas y del sol, así que la mancha brillante bajo una bola de vidrio o la luz de un espejo en una pared salen limpias en lugar de granulosas. Está desactivada mientras la niebla, el humo, la mezcla de luces o los elementos de render están activos, y está pensada para imágenes, no para imágenes de 360°.

## La cola de render

{{ui:Render queue}} en el cuadro de diálogo: {{ui:Add this picture to the queue}} conserva los ajustes y la vista de la imagen, y {{ui:Start the queue}} renderiza lo que espera, uno tras otro, en este equipo. Al cerrar la página la cola se conserva; abra el mismo modelo para continuar. {{ui:Save}} descarga una terminada; {{ui:Remove}} y {{ui:Clear finished}} ordenan la lista. La cola renderiza en alta calidad, así que necesita WebGPU.

## Cuánto tarda

La imagen se genera en su propio equipo, con su tarjeta gráfica; no se sube nada. El tiempo crece con las pasadas y los píxeles: {{ui:Best}} tiene 16 veces las pasadas de {{ui:Draft}}, y una imagen 4K tiene unas cuatro veces los píxeles de Full HD. Los modelos grandes tardan más por pasada.
