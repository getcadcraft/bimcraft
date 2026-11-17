---
title: Renderizar una imagen del modelo
summary: Haga una imagen con luz diurna de la vista 3D: cielo, el sol a la latitud de su sitio, sombras suaves, ventanas de vidrio; con WebGPU, trazada por trayectorias en la tarjeta gráfica, con cielos, una cámara, mezcla de luces, gradación de color, niebla y una cola de render.
keywords: render, preajuste, preajustes, preajuste de escena, interior, exterior, vista de sección, noche, un clic, renderizado, trazado de trayectorias, trazado de rayos, iluminación global, reflexiones, refracción, alta calidad, foto, fotorrealista, realista, imagen, png, fija, cielo, sol, luz diurna, sombras, sombras suaves, oclusión ambiental, vidrio, ventanas, metal, materiales, exposición, brillo, nublado, atardecer, estudio, presentación, visualización, webgpu, quitar ruido, cielo físico, hdri, ies, profundidad de campo, panorama, balance de blancos, mezcla de luces, elementos de render, exr, png de 16 bits, niebla, cáusticas, cola de render
from: beb74cc7
---

{{ui:Renderizar}} en la barra de herramientas hace una imagen de la vista 3D que parece luz diurna: un cielo, el sol donde la latitud del sitio lo ubica, sombras suaves, luz de todo el cielo que oscurece las esquinas, y colores que pueden parecer vidrio o metal. El modelo y el archivo no se modifican.

## Renderizar la vista

1. Ajuste la vista 3D como quiera la imagen: oriente y haga zoom, oculte los niveles o elementos que no quiera, y ponga una [sección](topic:section-plane) si la imagen debe mostrar un corte.
2. Haga clic en {{ui:Renderizar}} en la barra de herramientas.
3. Elija una {{ui:Escena}} si la que aparece no es la que quiere (vea [Preajustes de escena](topic:render#scene-presets-a-good-picture-in-one-click)), elija el {{ui:Tamaño}} y luego haga clic en {{ui:Renderizar}} en el cuadro.

   La imagen se va completando mientras se renderiza y se suaviza con cada pasada. {{ui:Detener}} (o {{key:Esc}}) la termina antes y conserva la imagen hasta ese momento.

4. Haga clic en {{ui:Guardar}} para descargarla como PNG, o en {{ui:Guardar como}} para otro formato (vea [Guardar la imagen](topic:render#save-the-picture)). Se nombra según el archivo del modelo.

:::tip
Empiece con {{ui:Borrador}} en el {{ui:Tamaño de la vista}} para revisar la cámara, y luego renderice con {{ui:Buena}} o {{ui:Mejor}} en un tamaño mayor para la imagen final.
:::

## Preajustes de escena: una buena imagen con un clic

La parte superior del cuadro tiene cuatro botones de {{ui:Escena}}. Cada uno ajusta el cielo, el brillo, el suelo, las líneas de borde, la calidad y el sol con un solo clic, así que no hay nada que aprender antes de la primera imagen. Haga clic en uno y luego en {{ui:Renderizar}}.

| Escena | Qué ajusta | Para qué sirve |
|---|---|---|
| {{ui:Exterior}} | Cielo despejado, el sol propio del modelo, suelo activado | El edificio desde fuera |
| {{ui:Interior}} | Cielo nublado (luz uniforme, sin manchas de sol directo), medio paso más brillante | Una vista desde dentro de un cuarto |
| {{ui:Vista de sección}} | Estudio blanco, sin suelo, líneas de borde en el render rápido | Un modelo cortado por una sección |
| {{ui:Noche}} | El sol bajo el horizonte (medianoche en pleno invierno para el hemisferio del sitio), un paso más brillante | Lámparas que iluminan el modelo. Sin lámparas la imagen queda oscura |

- {{ui:Elegir para esta vista}} elige por usted: {{ui:Vista de sección}} cuando hay un corte de sección activo, {{ui:Interior}} cuando la cámara está dentro del modelo, y si no, {{ui:Exterior}}. La primera vez que abre el cuadro, empieza así por sí solo.
- Todos los ajustes quedan debajo y se pueden cambiar. Cuando cambia uno, la escena deja de coincidir, ningún botón queda marcado, y la línea bajo los botones indica que los ajustes son propios. Haga clic de nuevo en la escena para devolver sus valores.
- Una escena no toca el motor, el modo, el tamaño, los materiales, la cámara ni las lámparas.

:::note
Las escenas dan los mismos valores en ModelCraft y BimCraft. El aspecto de la imagen final depende de su modelo y de su tarjeta gráfica.
:::

## Qué aparece en la imagen

Lo que la vista 3D muestra sólido se muestra en la imagen: los elementos ocultos y transparentes, los niveles ocultos y los modelos ocultos se excluyen, y los espacios aparecen solo cuando {{ui:Espacios}} está activado. Un plano de sección o una caja de sección corta la imagen igual que corta la vista. Los elementos aparecen en sus propios colores: la coloración por propiedad (la pestaña {{ui:Color}}) no se usa.

## Ajustes

| Ajuste | Qué hace |
|---|---|
| {{ui:Tamaño}} | El tamaño de la vista, el doble del tamaño de la vista, Full HD, 4K o uno cuadrado |
| {{ui:Modo}} | {{ui:Rápido}}, o {{ui:Alta calidad (trazado de trayectorias)}} (abajo) con su {{ui:Límite de tiempo}} |
| {{ui:Calidad}} | Cuántas pasadas (o, en alta calidad, muestras) se promedian: {{ui:Borrador}} 16, {{ui:Buena}} 64, {{ui:Mejor}} 256. Más pasadas dan sombras y bordes más suaves y tardan más |
| {{ui:Cielo}} | {{ui:Cielo despejado}}, {{ui:Nublado}}, {{ui:Atardecer}} o {{ui:Estudio blanco}} (un fondo blanco liso) |
| {{ui:Sol}} | 21 de junio a las 15:00 en la latitud que indica el archivo para su sitio (IfcSite), girado hacia el norte verdadero del modelo. Marque {{ui:Usar otra fecha y hora para esta imagen}} para otra hora |
| {{ui:Brillo}} | Más claro o más oscuro, en pasos (stops) |
| {{ui:Suelo bajo el modelo}} | Un suelo en el punto más bajo del modelo que recibe las sombras y se difumina en el horizonte |
| {{ui:Dibujar aristas}} | Dibuja las aristas de los elementos, en fino, sobre la imagen |

Cuando el sol está bajo el horizonte a la hora elegida, es de noche: el cielo se oscurece y las lámparas del modelo lo iluminan.

## Lámparas

Cada luminaria del modelo es una lámpara en la imagen: las luminarias de un archivo IFC (IfcLightFixture, o un elemento tipificado como luminaria), incluidas las que coloque desde la biblioteca. Cada una emite hacia abajo desde justo debajo de la luminaria. Cuando el archivo indica la potencia de una luminaria, su brillo se deduce de ella; si no, son 800 lúmenes, blanco cálido.

El cuadro lista las lámparas bajo {{ui:Lámparas}}: desmarque una para apagarla, o escriba su brillo en lúmenes. Estos cambios se guardan en el IFC (el conjunto de propiedades `CadCraft_Light` de la luminaria, donde también puede cambiarlos en Propiedades), y {{key:Ctrl+Z}} los deshace.

Cuando un archivo no indica dónde está su sitio, el sol se coloca a 40° norte, y el cuadro lo indica. La hora es la hora local del sitio, calculada a partir de su longitud, así que puede estar una hora desfasada donde los relojes están configurados de otra forma.

Estos ajustes se guardan en este navegador para la siguiente imagen. No se guardan en el archivo IFC.

## Vidrio y otros materiales

En {{ui:Materiales}}, cada color en pantalla tiene un aspecto: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidrio}} o {{ui:Vidrio esmerilado}}. Los colores que el archivo IFC vuelve transparentes (por ejemplo, el acristalamiento de las ventanas) empiezan como {{ui:Vidrio}}.

:::note
En el modo {{ui:Rápido}}, el vidrio y el metal reflejan el cielo, no el resto del modelo, y la luz no se curva al atravesar el vidrio. El modo {{ui:Alta calidad (trazado de trayectorias)}} de abajo hace ambas cosas.
:::

## Alta calidad

Elija {{ui:Modo}} › {{ui:Alta calidad (trazado de trayectorias)}} para una imagen que sigue la luz tal como la ve una cámara:

- la luz rebota entre superficies, así que un cuarto iluminado por una ventana o por una lámpara queda iluminado por todos lados, y los colores se contagian a sus vecinos;
- el vidrio es vidrio real: la luz se curva al atravesarlo y refleja el modelo;
- los metales y las superficies pulidas reflejan el resto del modelo;
- los paneles de luz iluminan como paneles, con sombras suaves.

Es mucho más lento que {{ui:Rápido}}: cada pasada vuelve a trazar la luz de cada píxel. La imagen empieza granulada y se aclara a medida que se suman las muestras, así que empiece en pequeño ({{ui:Tamaño de la vista}}, {{ui:Borrador}}) y elija un {{ui:Límite de tiempo}}: cuando se agota, se conserva la imagen hasta ese momento. {{ui:Detener}} también la conserva. La primera pasada espera mientras el navegador prepara el trazador de trayectorias.

Donde el navegador tiene WebGPU, el trazador de trayectorias es el propio de CadCraft y se ejecuta en la tarjeta gráfica; la línea bajo la imagen lo indica. Después de {{ui:Detener}} o del límite de tiempo, {{ui:Reanudar}} continúa con la misma imagen hasta completar sus muestras; cambiar un ajuste o presionar {{ui:Renderizar}} otra vez empieza de cero. Sin WebGPU, la imagen se traza con WebGL (la línea lo indica) y {{ui:Reanudar}} no se ofrece.

:::linux
Firefox y la mayoría de las configuraciones de Chrome en Linux todavía no tienen WebGPU, así que la alta calidad usa WebGL allí.
:::

En este modo no se dibujan aristas, las texturas muestran su color y su rugosidad pero no sus relieves, y el corte de sección se aplica al modelo antes de empezar la imagen.

{{ui:Quitar ruido (limpia el grano que queda tras las muestras)}} está activado por defecto: cuando la imagen termina, o se detiene, el grano que queda se elimina con una red neuronal hecha para esto (la red publicada de Intel Open Image Denoise, ejecutada en su propio equipo: en la tarjeta gráfica o, si no, en el procesador). {{ui:Mostrar}} › {{ui:La imagen antes de quitar el ruido}} la muestra tal como se renderizó.

## Cielos y perfiles de luz en la tarjeta gráfica

Con WebGPU, la alta calidad tiene dos cielos más:

- {{ui:Cielo físico}} calcula la luz diurna según la altura del sol: un azul intenso en el cenit, una franja pálida en el horizonte, y un sol que se vuelve más cálido y más tenue al bajar. {{ui:Bruma}} va de un día muy claro (2) a uno brumoso (10).
- {{ui:Imagen de cielo (HDRI)}} ilumina el modelo con una imagen panorámica de un lugar real. {{ui:Elegir una imagen…}} toma un archivo `.hdr` o `.exr` equirectangular; {{ui:Girar}} lo gira alrededor del modelo y {{ui:Brillo de la imagen}} lo hace más claro u oscuro. La imagen trae su propio sol, así que no se suma el sol del modelo. Solo se conserva mientras la página está abierta: al reabrirla, vuelva a elegirla.

Cada lámpara de la lista {{ui:Lámparas}} puede tomar un perfil de luz del fabricante: {{ui:Perfil IES…}} lee un archivo IES (LM-63) y la lámpara proyecta entonces su luz como lo hace esa luminaria (un downlight estrecho, un bañador de muro). Todas las lámparas con ese nombre lo usan, y cada una conserva su propio brillo. Haga clic en el nombre del perfil para dejar de usarlo.

Las ventanas de vidrio transparente ayudan a que la luz del cielo entre en un cuarto.

El modo {{ui:Rápido}} y el trazador de trayectorias en WebGL muestran {{ui:Cielo físico}} y {{ui:Imagen de cielo (HDRI)}} como un cielo despejado y no usan los perfiles de luz.

## La cámara

{{ui:Cámara}} prepara la imagen como una fotografía:

- {{ui:Exposición}}: mantenga el {{ui:Control de brillo}}, o elija {{ui:Ajustes de cámara}} y ajuste la {{ui:Apertura (número f)}}, la {{ui:Velocidad de obturación}} y el {{ui:ISO}} como en una cámara; el EV junto a ellos es el valor de exposición habitual. f/16 a 1/100 s e ISO 100 corresponde a un día soleado; una escena más oscura pide una apertura más abierta, un obturador más lento o un ISO más alto. Esto funciona en todos los modos.
- {{ui:Profundidad de campo}} desenfoca lo que está más cerca o más lejos que la {{ui:Distancia de enfoque (m)}}, como lo haría un lente con ese número f (déjelo vacío para enfocar lo que está en el centro de la vista); {{ui:Forma de la apertura}} da a los reflejos fuera de foco una forma redonda o de aspas.
- {{ui:Perspectiva de dos puntos (las verticales siguen verticales)}} nivela la cámara y desplaza la imagen, como lo hace un lente de inclinación y desplazamiento arquitectónico, para que los muros no se inclinen al mirar hacia arriba o hacia abajo a un edificio.
- {{ui:Balance de blancos}} define qué color de luz se ve como blanco: más bajo (por ejemplo 3000 K) para la luz cálida de las lámparas, más alto para sombra y días nublados.
- {{ui:Proyección}}: {{ui:Panorama 360°}} hace una imagen 2:1 de todo lo que rodea la cámara, para visores de panoramas; {{ui:Panorama estéreo de 360°}} apila un panorama para el ojo izquierdo y otro para el derecho, para cascos; {{ui:Mapa de cubo (6 caras)}} hace seis vistas cuadradas en una cuadrícula de 3 × 2. El ancho sale de {{ui:Tamaño}}.

La proyección, la profundidad de campo, la perspectiva de dos puntos y el balance de blancos necesitan el trazador de trayectorias en la tarjeta gráfica (WebGPU), así que solo aparecen en {{ui:Alta calidad (trazado de trayectorias)}}.

## Terminar la imagen

{{ui:Imagen}} gradúa la imagen de alta calidad como una fotografía, y cada control cambia la imagen terminada al instante, sin renderizar de nuevo:

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES fílmico}} (la imagen como antes), {{ui:AgX}} (más suave, conserva el color con luz muy intensa), {{ui:Fílmico}} (una curva de película suave) o {{ui:Estándar}} (sin cambios; la luz muy intensa se recorta a blanco).
- {{ui:Contraste}} y {{ui:Compresión de luces altas}} (recupera detalle en las partes muy brillantes).
- {{ui:Resplandor}} (un brillo suave alrededor de las luces intensas), {{ui:Destello}} con sus {{ui:Rayos del destello}} (rayos en forma de estrella desde los puntos más brillantes) y {{ui:Viñeta}} (esquinas más oscuras).
- {{ui:Tabla de color (.cube)…}} aplica una gradación de color desde un archivo `.cube`, con su {{ui:Intensidad de la tabla de color}}; como una imagen de cielo, solo se conserva mientras la página está abierta.

## Guardar la imagen

{{ui:Guardar como}} junto a {{ui:Guardar}} elige el archivo: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} para compartir (JPEG y WebP solo donde el navegador puede escribirlos), y después de un render de alta calidad en la tarjeta gráfica también:

- {{ui:PNG, 16 bits}}: la imagen graduada, con pasos más finos entre tonos, para imprimir o seguir editando.
- {{ui:EXR, todas las capas (flotante de 32 bits)}}: la imagen tal como se renderizó (luz lineal, sin gradación), con cada elemento de render y cada grupo de luces como capa propia, para programas de composición.
- {{ui:Archivo de render (.ccrender, para volver a ajustarlo después)}}: todo lo que el cuadro necesita para mezclar y graduar la imagen de nuevo. {{ui:Abrir un archivo de render…}} la recupera, con su mezcla y su gradación, sin renderizar.

## Mezclar las luces después del render

Active {{ui:Mezcla de luces (cambia el color y el brillo de cada luz después del render)}} antes de presionar {{ui:Renderizar}}. Cuando la imagen termina (o se detiene), {{ui:Mezclar la imagen}} lista sus luces en grupos: el cielo, el sol y las lámparas por nombre (todas las lámparas con el mismo nombre forman un grupo). Desactive un grupo, asígnele un color o hágalo más claro u oscuro, y la imagen cambia al instante, sin renderizar de nuevo. {{ui:Guardar mezcla}} guarda la mezcla con un nombre para elegirla después; {{ui:Como se renderizó}} vuelve a la imagen tal como se hizo. {{ui:Guardar}} guarda la imagen mezclada.

{{ui:Elementos de render (albedo, normales, profundidad, difuso, especular, transmisión, emisión, IDs)}} conserva además las partes de la imagen. {{ui:Mostrar}} cambia la vista a una de ellas: los colores de superficie (albedo), las normales, la profundidad, la luz difusa, especular y transmitida (cada una directa e indirecta), lo que emite luz y el cielo, y un color por objeto o por material para crear máscaras.

Ambas opciones guardan capas adicionales en la tarjeta gráfica. En tamaños grandes, una tarjeta gráfica puede no tener espacio; el cuadro lo indica y un tamaño menor funciona.

## Niebla, humo, ruido y cáusticas

Estos ajustes están en {{ui:Niebla, humo y ruido}} y funcionan en {{ui:Alta calidad (trazado de trayectorias)}} con la tarjeta gráfica; los demás motores no los incluyen.

- {{ui:Niebla y bruma}} llena el aire hasta una altura con una neblina que iluminan el sol, el cielo y las lámparas. {{ui:Hasta dónde se ve, en metros}} fija qué tan densa es (unos 100 m es una bruma ligera, 20 m una niebla espesa), {{ui:Altura de la niebla sobre el suelo, en metros}} es donde termina, y {{ui:Haces de luz}} indica cuánto brilla la neblina hacia la luz. La luz del sol sale de la niebla por su parte superior, así que donde el sol entra por una ventana o entre edificios se ve como haces de luz.
- {{ui:Humo o nube}} añade un volumen de humo o de nube iluminado igual que la niebla. {{ui:Clase}} es una {{ui:Nube}}, una {{ui:Columna de humo}} o {{ui:De un archivo de volumen (.ccvol)}}, el formato de cuadrícula propio de CadCraft. {{ui:Detalle}} y {{ui:Variación}} cambian una nube o columna creada; {{ui:Tamaño de su lado más largo, en metros (0 = el tamaño del modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} y {{ui:Girar}} la colocan (empieza en el centro del modelo); {{ui:Espesor}} la hace más densa, {{ui:Brillo hacia adelante}} la hace más brillante hacia la luz, y {{ui:Color}} la tiñe. Un archivo de volumen solo se conserva mientras la página está abierta, igual que una imagen de cielo.
- {{ui:Detenerse antes donde la imagen ya está limpia (muestreo adaptativo)}} no da más muestras a los píxeles que ya se estabilizaron. {{ui:Ruido aceptado}} es cuánto grano queda cuando un píxel se detiene. La línea bajo la imagen indica cuántas muestras recibió un píxel en promedio.
- {{ui:Cáusticas (luz desviada por el vidrio o reflejada por espejos)}} traza la luz de las lámparas y del sol, así que la mancha brillante bajo una esfera de vidrio o el reflejo de un espejo sobre un muro salen limpios en lugar de granulados. Está desactivada mientras la niebla, el humo, la mezcla de luces o los elementos de render están activos, y está hecha para imágenes, no para imágenes de 360°.

## La cola de render

{{ui:Cola de render}} en el cuadro: {{ui:Añadir esta imagen a la cola}} guarda los ajustes y la vista de la imagen, e {{ui:Iniciar la cola}} renderiza lo que está en espera, una tras otra, en este equipo. Al cerrar la página la cola se conserva; abra el mismo modelo para continuar. {{ui:Guardar}} descarga una terminada; {{ui:Quitar}} y {{ui:Borrar las terminadas}} ordenan la lista. La cola renderiza en alta calidad, así que necesita WebGPU.

## Cuánto tarda

La imagen se hace en su propio equipo, con su tarjeta gráfica; no se sube nada. El tiempo crece con las pasadas y los píxeles: {{ui:Mejor}} tiene 16 veces las pasadas de {{ui:Borrador}}, y una imagen 4K tiene unas cuatro veces los píxeles de Full HD. Los modelos grandes tardan más por pasada.
