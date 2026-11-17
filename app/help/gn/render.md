---
title: Ojapo imagen modelo rehe
summary: Ojapo imagen día luz ramo 3D vista-gui: cielo, sol ita latitud-pe, sombra blanda, vidrio ventana-kuéra; WebGPU ndive, tarjeta gráfica-pe trazado de rayos cielo, cámara, luz mezcla, gradación, niebla ha render cola.
keywords: render, preset, presets, escena predefinida, interior, exterior, vista de corte, noche, un clic, renderizado, trazado de rayos, ray tracing, iluminación global, reflejos, refracción, alta calidad, foto, fotorrealista, realista, imagen, png, cielo, sol, luz de día, sombra, sombra blanda, oclusión ambiental, vidrio, ventanas, metal, materiales, exposición, brillo, nublado, atardecer, estudio, presentación, visualización, webgpu, reducir ruido, cielo físico, hdri, ies, profundidad de campo, panorama, balance de blancos, mezcla de luces, elementos de render, exr, png 16 bits, niebla, cáusticas, cola de render
from: beb74cc7
---

{{ui:Render}} barra de herramientas-pe ojapo imagen 3D vista-gui luz de día ramo: cielo, sol ita latitud-pe, sombra blanda, luz opa cielo-gui ha tono vidrio térã metal ramo. Modelo ha archivo ndoikóiva.

## Vista ojapo

1. Vista 3D ejapo ejedese imagen-pe: orbitá ha zoom, ocultá piso térã elemento ndeʼỹva, ha [corte](topic:section-plane) ejapo imagen corte ojehechauka oikotevẽ.
2. Ehakã {{ui:Render}} barra de herramientas-pe.
3. Ejeipapa {{ui:Escena}} ndejeipapái ojekuaava pe ijeʼe (ehecha [Escena predefinida](topic:render#scene-presets-a-good-picture-in-one-click)), ejeipapa {{ui:Tamaño}}, ha ehakã {{ui:Render}} diálogo-pe.

   Imagen ojejapo renderiza ramo ha mboyve pasada ndive iporãve. {{ui:Stop}} (térã {{key:Esc}}) peteĩ mboyve oñemoĩ ha imagen ojapóva oñongatu.

4. Ehakã {{ui:Save}} PNG-pe omboaguã, térã {{ui:Save as}} ambue formato-pe (ehecha [Imagen guarda](topic:render#save-the-picture)). Modelo archivo téra oguereko.

:::tip
Peteĩ {{ui:Borrador}} {{ui:Tamaño de la vista}}-pe ojapo kámara ojekuaa haguã, upe rire {{ui:Bueno}} térã {{ui:Mejor}} tamaño tuichavéva imagen final-pe.
:::

## Escena predefinida: peteĩ clic-pe imagen porã

Diálogo ñu-pe cuatro botón {{ui:Escena}} oguereko. Peteĩ opavave: cielo, brillo, suelo, aristas líneas, calidad ha sol peteĩ clic-pe omoĩ, upévare ndaikatúi ojapo ántes imagen primer jey. Ehakã peteĩ, upe rire {{ui:Render}}.

| Escena | Mbaʼe omoĩ | Mbaʼeichaite ojeporu |
|---|---|---|
| {{ui:Exterior}} | Cielo despejado, modelo sol, suelo ojeikuaaiterehe | Tenda ruguy modelo |
| {{ui:Interior}} | Cielo nublado (luz ojoguáta, sol mbiʼa ndoguerekói), medio punto tuichavéva | Mbytépe sala-gui vista |
| {{ui:Vista de corte}} | Estudio blanco, suelo ndoguerekói, aristas líneas render rápido-pe | Corte ojapo modelo |
| {{ui:Noche}} | Sol ohasa (medianoche invierno-pe sitio mitãrusúpe), peteĩ punto tuichavéva | Lámpara modelo ñemoĩ. Lámpara ndoguerekóiramo imagen oñemyĩ |

- {{ui:Elegir para esta vista}} ojeporu ndéve: {{ui:Vista de corte}} corte ojeikuaáramo, {{ui:Interior}} kámara modelo mbytépe oĩramo, ndaʼe {{ui:Exterior}}. Diálogo peteĩ jey ojepe, ha upéicha ojepyrũ.
- Opa configuración ohechaukáva oĩ ramo ojapo ha ojeikeha ikatu. Peteĩ ojeikeháramo escena ojapóva, botón ndojapóiva ha linea botón-kuéra rupi ohecha nde configuración-kuéra. Escena jeʼe ejapo jey valor-kuéra oñemoĩ haguã.
- Escena ndoiméi motor, modo, tamaño, material, cámara ha lámpara-kuéra.

:::note
Escena-kuéra ModelCraft ha BimCraft-pe valor mbohapykuéra oguereko. Imagen ojapóva oñemoĩ modelo ha nde tarjeta gráfica ndive.
:::

## Imagen-pe ojehechauka

3D vista-pe sólido ohechaukáva: oculto ha transparente elemento-kuéra, piso oculto ha modelo oculto ndojehechaukái, ha espacio-kuéra {{ui:Espacios}} oñemoĩramo ojehechauka. Corte plano térã corte caja vista-pe ohaʼaháicha imagen-pe avei. Elemento-kuéra propio color-pe ohechaukáva: {{ui:Color}} pestaña propiedad-kuéra ndojeporúi.

## Configuración

| Configuración | Mbaʼépa oja |
|---|---|
| {{ui:Tamaño}} | Vista tamaño, vista tamaño mokõi, Full HD, 4K térã cuadrado |
| {{ui:Modo}} | {{ui:Rápido}}, térã {{ui:Alta calidad (trazado de rayos)}} (ojapóva) ha {{ui:Límite de tiempo}} |
| {{ui:Calidad}} | Pasada heta (térã alta calidad-pe muestra) promedio: {{ui:Borrador}} 16, {{ui:Bueno}} 64, {{ui:Mejor}} 256. Pasada heta sombra ha borde blandoveve, ha ojoavéta tiempo |
| {{ui:Cielo}} | {{ui:Cielo despejado}}, {{ui:Nublado}}, {{ui:Atardecer}} térã {{ui:Estudio blanco}} (fondo blanco) |
| {{ui:Sol}} | Junio 21 15:00 horas latitud-pe archivo ohechauka sitio-pe (IfcSite), modelo norte verdadero-pe ojeikuaa. Ehakã {{ui:Usar otra fecha y hora para esta imagen}} ambue tiempo-pe |
| {{ui:Brillo}} | Tuichavéva térã ipyʼỹvéva, pasos-pe (stops) |
| {{ui:Suelo bajo el modelo}} | Modelo punto ipyʼỹvéva suelo, sombra ojapo ha horizonte-pe ojejoavéta |
| {{ui:Dibujar aristas}} | Elemento-kuéra aristas ipyʼỹva líneas imagen rupi |

Sol horizonte mboyve ojeʼéramo tiempo elegido-pe, pyharé: cielo pyharé ha modelo lámpara-kuéra ohesa.

## Lámparas

Modelo luz accesorio opavave imagen-pe lámpara: IFC archivo accesorio-kuéra (IfcLightFixture, térã luz accesorio tipo elemento), biblioteca-gui omoĩva avei. Opavave ojeʼe accesorio ipypegui ipyʼỹ. Archivo potencia omombe’úramo, brillo upegui oĩ; ndaipóri jave 800 lúmenes, cálido blanco.

Diálogo-pe lámpara-kuéra {{ui:Lámparas}} rehegua: ndejeikeha ojapóva, térã lúmenes brillo ejapo. Ko cambio-kuéra IFC-pe ojeguarda (accesorio `CadCraft_Light` propiedad conjunto, Propiedades-pe avei ikatu ojapo ha), ha {{key:Ctrl+Z}} ojeikeha.

Archivo ndoʼéi sitio-pe mávape oĩ ramo, sol 40° norte-pe omoĩ, diálogo ojehechauka. Tiempo sitio reloj tiempo, longitud-gui ojeʼe, upévare reloj ndoĩrõ maʼe-pe peteĩ hora mbytépe.

Configuración kóva navegador-pe oñongatu upe imagen ojapo-pe. IFC archivo-pe ndoguardáiva.

## Vidrio ha ambue material

{{ui:Materiales}} rupi, pantalla color opavave peteĩ apariencia oguereko: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidrio}} térã {{ui:Vidrio esmerilado}}. IFC archivo transparente ohechauka color (ventana vidrio, por ejemplo) {{ui:Vidrio}}-gui oñepyrũ.

:::note
{{ui:Rápido}} modo-pe, vidrio ha metal cielo ohechauka, modelo ambue parte ndohechauka, ha luz vidrio-pe ndoheja. {{ui:Alta calidad (trazado de rayos)}} modo ambos ojapo.
:::

## Alta calidad

Elegí {{ui:Modo}} › {{ui:Alta calidad (trazado de rayos)}} cámara ohecha haguã luz ojapo ramo imagen-pe:

- luz superficie-kuéra apopy, upévare ventana rupi ojeguahẽ térã lámpara ojapo sala opa rupi ohechauka ha color mbaʼeve ojoʼaprova;
- vidrio ojapo ramo: luz ohupyty ha modelo ohechauka;
- metal ha pulido superficie modelo ambue parte ohechauka;
- luz panel panel ramo ojapo, sombra blanda ndive.

Heta ohasa {{ui:Rápido}} gui: pasada peteĩ píxel luz peteĩ jey ojedhuʼẽ. Imagen ohechauka ojapo ramo jaʼeha, muestra ojejuntáramo ojeʼaprova; upévare peteĩ tamaño-pe ({{ui:Tamaño de la vista}}, {{ui:Borrador}}) ojapo ha peteĩ {{ui:Límite de tiempo}} ejeipapa: oimo mboyve, imagen ojapóva ojapo. {{ui:Detener}} avei ojapo. Pasada primer navegador trazado de rayos preparar peteĩ tiempo ohechauka.

WebGPU navegador-pe oguereko, trazado de rayos CadCraft propio, tarjeta gráfica-pe ojapo; línea imagen-pe ohechauka. {{ui:Detener}} térã tiempo límite rire, {{ui:Reanudar}} opa muestra ohechaukáramo oñeʼẽ; configuración cambio térã {{ui:Render}} ehakã jey, pyahu ojapo. WebGPU ndoguerekóiramo, WebGL-gui trazado de rayos ojapo (línea ohechauka) ha {{ui:Reanudar}} ndoikóiva.

:::linux
Linux-pe Firefox ha heta Chrome ndaiporimo WebGPU, upévare alta calidad WebGL-gui ojapo upépe.
:::

Modo kóva-pe aristas ndojapói, textura color ha aspereza ohechauka ha ndaʼeiva; corte modelo-pe imagen oñepyrũ rire ojapo.

{{ui:Reducir ruido (borra el grano que queda tras las muestras)}} omoĩ oñemoĩ: imagen oñemohuʼã térã oñemoĩ rire, grano ojekoʼẽva ojeikeha red neuronal rupi (Intel Open Image Denoise red publicado, nde computadora-pe ojapo: tarjeta gráfica térã procesador-pe). {{ui:Mostrar}} › {{ui:La imagen antes de reducir el ruido}} ohechauka render ojapo ramo.

## Cielo ha perfil de luz tarjeta gráfica-pe

WebGPU-pe alta calidad mokõi cielo ambue:

- {{ui:Cielo físico}} luz día sol altura-gui ojapo: mba'e tuvicha yvytu, horizonte-pe clarito faja, ha sol ohasa mbaʼeichápe hoʼu ha pyʼỹ. {{ui:Neblina}} ojeikuaa klaro día (2) ha neblina día (10).
- {{ui:Imagen de cielo (HDRI)}} modelo luz ojapo tenonde panorama imagen rupi. {{ui:Elegí una imagen…}} archivo `.hdr` térã `.exr` ohenói; {{ui:Girar}} modelo ojapo, {{ui:Brillo de la imagen}} tuichave térã pyʼỹvéva. Imagen sol ipropio oguereko, upévare modelo sol ndojaʼe. Página ojehuvaʼekue ramo oñongatu: ojejuhu jey, ehakã jey.

Lámpara-kuéra {{ui:Lámparas}} lísta-pe peteĩ-peteĩ ikatu omoĩ fabricante perfil de luz: {{ui:Perfil IES…}} IES (LM-63) archivo oléi, ha lámpara luz ojeʼeva accesorio ojapohaicha (estrecho downlight, muro lavador). Upe nombre-gui lámpara opavave upe ojeporu, ha lámpara brillo ipropio oguereko. Perfil nombre ehakã ojeikeha.

{{ui:Fast}} modo ha WebGL trazado de rayos {{ui:Cielo físico}} ha {{ui:Imagen de cielo (HDRI)}} cielo despejado ramo ohechauka ha perfil de luz ndojeporúi.

Cristal ventana-kuéra claro luz cielo-gui ketuha ojerreʼa mbytépe.

## Cámara

{{ui:Cámara}} imagen fotografía ramo omoĩ:

- {{ui:Exposición}}: {{ui:Control de brillo}} ojeguerohory, térã {{ui:Ajustes de cámara}} ehakã ha {{ui:Apertura (f-stop)}}, {{ui:Velocidad de obturación}} ha {{ui:ISO}} kámara-pe ramo omoĩ; EV ohechaukáva exposición valor. f/16 1/100 s ha ISO 100 día soleado-pe; ohasavevéva apertura amplio, obturador lento térã ISO tuichave oikotevẽ. Opa modo-pe ojapo.
- {{ui:Profundidad de campo}} {{ui:Distancia de enfoque (m)}} ndaʼe ojehechaukáva mbohapy lente f-stop-gui; (mbytépe vista enfoque ndeʼe jave hasy vacío); {{ui:Forma de la apertura}} ojapo ojehechauka hoʼu punto redondo térã cortado.
- {{ui:Perspectiva de dos puntos (las líneas verticales siguen verticales)}} kámara nivela ha imagen ojeʼe, arquitectura tilt-shift lente ramo, upévare muro ndoikói ndejepe'a ha ndejehuʼẽ edificio-pe.
- {{ui:Balance de blancos}} luz color blanco ohechauka: tuichavéva (3000 K) lámpara cálido-pe, mboyveve sombra ha nublado día-pe.
- {{ui:Proyección}}: {{ui:Panorama de 360°}} 2:1 imagen opavave kámara ruguy-pe panorama visor-pe; {{ui:Panorama estéreo de 360°}} mokõi ojoʼo ojeporu vincha-pe; {{ui:Mapa cúbico (6 caras)}} seis cuadrado 3 × 2 cuadrícula-pe. Ancho {{ui:Tamaño}}-gui.

Proyección, profundidad de campo, perspectiva de dos puntos ha balance de blancos tarjeta gráfica-pe trazado de rayos (WebGPU) oikotevẽ, upévare {{ui:Alta calidad (trazado de rayos)}} rire ohechauka.

## Imagen terminación

{{ui:Imagen}} alta calidad imagen fotografía ramo gradúa, ha opa control imagen terminada ojapo oñemyasãmi, render ndojapói jey:

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES filmic}} (imagen ántes ramo), {{ui:AgX}} (ipyʼỹvéva, luz tuichavéva color oñongatu), {{ui:Filmic}} (curva película ipyʼỹ) térã {{ui:Estándar}} (sencillo, luz tuichave blanco-pe oñemboʼe).
- {{ui:Contraste}} ha {{ui:Compresión de altas luces}} (detalle tuichave parte-pe oñemboguejy).
- {{ui:Bloom}} (luz tuichave rededor brillo ipyʼỹ), {{ui:Resplandor}} {{ui:Rayos de resplandor}}-gui (píxel tuichavéva rayo) ha {{ui:Viñeteado}} (ipyʼỹvéva rincón).
- {{ui:Tabla de color (.cube)…}} `.cube` archivo rupi color gradación, {{ui:Intensidad de la tabla de color}}-gui; cielo imagen ramo, página ojehuvaʼekue rire oñongatu.

## Imagen guarda

{{ui:Save as}} {{ui:Save}} ramo ojeiporã archivo: {{ui:PNG}}, {{ui:JPEG}} térã {{ui:WebP}} compartir haguã (JPEG ha WebP navegador ojapo ikatu jave), ha alta calidad tarjeta gráfica-pe render rire avei:

- {{ui:PNG, 16 bits}}: gradúa imagen mbytépe ipyʼỹvéva tono, imprimí térã ambue edición haguã.
- {{ui:EXR, todas las capas (punto flotante de 32 bits)}}: imagen ojapóicha (luz lineal, gradación ndaiporiva) elemento render ha luz grupo peteĩ-peteĩ capa-pe, composición programa-pe.
- {{ui:Archivo de render (.ccrender, para retocar después)}}: diálogo mezcla ha gradúa oikotevẽ opa mba'e. {{ui:Abrir un archivo de render…}} ojeguerúva mezcla ha gradación ndive, render ndojapóiva.

## Luz mezcla render rire

Ehakã {{ui:Mezcla de luces (cambiá el color y el brillo de cada luz después del render)}} {{ui:Render}} ehakã mboyve. Imagen ojapo rire (térã detenido), {{ui:Mezclá la imagen}} luz grupo-kuéra ohechauka: cielo, sol, ha lámpara nombre-gui (nombre peteĩ lámpara opavave peteĩ grupo). Grupo ojeikeha, color omoĩ, térã tuichave/pyʼỹ ejapo, imagen ojejapo, render ndojapóiva. {{ui:Guardar mezcla}} mezcla ojeguarda nombre-pe ambue jey ejeporu haguã; {{ui:Como se renderizó}} imagen ojapo ramo ojeguerúta. {{ui:Guardar}} mezcla imagen ojeguarda.

{{ui:Elementos de render (albedo, normales, profundidad, difusa, especular, transmisión, emisión, IDs)}} imagen parte-kuéra avei ojeguarda. {{ui:Mostrar}} vista peteĩ-pe ojeikuaa: superficie color (albedo), normales, profundidad, difusa, especular ha transmitido luz (direkta ha indirekta), mboʼe ojehechauka ha cielo, ha objeto térã material color máscara-pe.

Ambos tarjeta gráfica-pe capa ambue ojeguarda. Tamaño tuichavéva-pe tarjeta gráfica ndoguerekói espacio; diálogo ohechauka ha tamaño ipyʼỹvéva ojeporu.

## Niebla, humo, ruido ha cáusticas

Ko-kuéra {{ui:Niebla, humo y ruido}}-pe ojeikuaa ha alta calidad trazado de rayos tarjeta gráfica-pe ojapo; ambue motor-kuéra ndojapóri.

- {{ui:Niebla y bruma}} aire mbytépe omoĩ niebla altura peve, sol, cielo ha lámpara ojapo. {{ui:Distancia visible en metros}} ojapo hasy (100 m ipyʼỹ neblina, 20 m hasy niebla), {{ui:Altura de la niebla sobre el suelo, en metros}} oñemboʼe, {{ui:Rayos de luz}} niebla luz ojeʼẽ ha ko luz peteĩ ojapo. Sol niebla pyharéicha, ventana térã edificio mbytépe ojeʼe rayo luz-pe ojehechauka.
- {{ui:Humo o nube}} peteĩ volumen humo térã nube ojapo, niebla ramo luz. {{ui:Tipo}} {{ui:Nube}}, {{ui:Columna de humo}} térã {{ui:Desde un archivo de volumen (.ccvol)}}, CadCraft propio formato. {{ui:Detalle}} ha {{ui:Variación}} ojapo nube térã columna ojapóva, {{ui:Tamaño de su lado más largo, en metros (0 = el tamaño del modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} ha {{ui:Girar}} omoĩ (modelo mbytépe oñepyrũ), {{ui:Espesor}} hasyvéva ojapo, {{ui:Brillo hacia adelante}} luz-pe ipyʼỹvéva ojapo, ha {{ui:Color}} tiñe. Volumen archivo página ojehuvaʼekue rire oñongatu, cielo imagen-icha.
- {{ui:Parar antes donde la imagen ya está limpia (muestreo adaptativo)}} ojehechaukáva ndojapói heta muestra píxel-kuéra ndojoʼaprovaʼekue. {{ui:Ruido aceptable}} grano oñemoĩ píxel oñemoĩmi jave. Imagen ohechauka línea píxel promedio muestra ohechauka.
- {{ui:Cáusticas (luz que se curva por el vidrio o rebota en espejos)}} lámpara sol luz ojeʼe, upévare vidrio bola térã espejo luz muro-pe mboyve ohechauka clarito, grano ndoguerekóiva. {{ui:Niebla, humo, mezcla de luces o elementos de render}} oñemoĩ ramo ndaipóri, ha 360° imagen ndaipóri; imagen-kuéra añónte.

## Render cola

{{ui:Cola de renderizado}} diálogo-pe: {{ui:Agregar esta imagen a la cola}} imagen configuración ha vista oñongatu, {{ui:Iniciar la cola}} ojapo omoʼã peteĩ-peteĩ, computadora-pe. Página ojejoavaʼekue cola oñongatu; modelo tenonde ejeipapa ojapo jey. {{ui:Guardar}} ojapo rire omboaguã; {{ui:Quitar}} ha {{ui:Borrar terminados}} lista ohaʼaháicha. Cola alta calidad-pe ojapo, upévare WebGPU oikotevẽ.

## Mbaʼe tiempo oikotevẽ

Imagen nde computadora-pe tarjeta gráfica ojapo; ndojejuhuséi ningún lugar-pe. Tiempo pasada ha píxel-kuéra ndive heta: {{ui:Mejor}} {{ui:Borrador}} pasada 16 jey heta, 4K imagen Full HD píxel mbohapy jey. Modelo tuichavéva pasada peteĩ-peteĩ ojoavéta.
