---
title: Novedades en la 0.9 (anteriores)
summary: Formas de muro, dividir, desfase, estirar y bloquear a rejilla, niveles bajo tierra, cotas de rejilla y Medir en la planta, vistas duplicadas con estilos de trabajo y tablas de plumillas, Informar como, exportación a Collada y Google Earth, Escanear a BIM, análisis de viento y sismo, complementos de impresión en resina.
keywords: novedades 0.9, versión anterior, novedades, 0.9, notas de la versión, formas de muro, rectángulo, polígono, arco, elegir líneas, contorno de calco, desfase, unir, estirar por recuadro, alinear y bloquear, dividir muro, separación, volver a unir, bloquear a rejilla, crecer desde, medir desde, agregar un nivel debajo, sótano, comando nivel, cotas de rejilla, medir en la planta, estilo de trabajo, duplicar vista, copia propia, vista vinculada, tabla de plumillas, imprimir como se ve, informar como, tipo de escala, importar svg, colocar en planta, colocar en modelo, collada, dae, kmz, google earth, escanear a bim, carga de viento, sísmico, elementos finitos, panel de documentos, impresión en resina, novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, programas, mover, alinear, distribuir, imagen, fondo, escanear a muros, sitio desde civilcraft, dibujos de paneles, entramado, solar, fotovoltaico, fv, dividir, vrf, fan coil, dimensionado de tuberías, bandeja de cables, iluminancia, concreto, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, costo, energyplus, motor de render, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumillas, cinta, explorador de proyectos, presentación
from: 816df7f8
---

Esto es lo que cambió en BimCraft 0.9, comparado con 0.8.1. Los dos grandes temas son una herramienta real para muros y vistas que se comportan como esperan las personas que vienen de los grandes programas BIM. Además, están la exportación a Collada, asistentes que pueden colocar dispositivos eléctricos, Escanear a BIM, y el trabajo de viento, sismo y elementos finitos en la pestaña {{ui:Analysis}}.

## Nuevo

### Muros

- **Dibuje formas completas.** En {{ui:Draw}}, abra {{ui:Shapes}} (o elija una forma en la lista Forma de la fila Muro) para un rectángulo, un rectángulo girado, un polígono de 3 a 64 lados, un arco por centro, un arco tangente, muros sobre líneas elegidas, o muros alrededor de un área cerrada en la que haga clic. Un rectángulo son cuatro muros con cuatro esquinas unidas y un solo paso de deshacer. Vea [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools).
- **Defina antes de dibujar, cambie después.** La fila Muro tiene {{ui:Offset}} y {{ui:Join}} (desmarque para dibujar muros independientes). Después use {{ui:Offset}}, {{ui:Box stretch}} y {{ui:Align and lock}} en los muros dibujados. Un muro movido o estirado conserva sus puertas, ventanas y cotas. Cada receta es un paso de deshacer.
- **Corte muros.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} y {{ui:Rejoin}} cortan un muro con un clic o donde lo cruza otro muro. Un corte a través de una puerta se rechaza. Vea [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools).
- **Bloquee muros a líneas de rejilla.** Seleccione un muro sobre una línea de rejilla y marque {{ui:Lock to grid}} en {{ui:Properties}}. Con la herramienta Rejilla activa, escriba una distancia en {{ui:Move by}} para una línea elegida, y los muros bloqueados la siguen en un solo paso de deshacer.
- **Dé forma a un muro.** En {{ui:Properties}} de un muro puede unir su parte superior o su base a un techo, piso o cielo raso, editar su contorno de elevación, inclinarlo, o hacer una abertura en el muro sin puerta ni ventana. Vea [Forma del muro](topic:wall-shape).
- **La longitud indica qué extremo se mantiene.** {{ui:Grow from}} define si el inicio, el final o el centro se quedan fijos al cambiar la longitud.
- **La longitud y la cota en planta coinciden.** {{ui:Measure from}} (línea central, cara interior o cara exterior) controla tanto el campo Longitud como las cotas de muro en la planta. Empieza en la línea central, así que las cotas de muro en la planta ahora leen la línea central donde antes leían la cara exterior. Cámbielo en la fila Muro, en {{ui:Properties}} o en {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Niveles, rejillas y medición

- **Agregue un nivel debajo.** {{ui:Add a level below}} en el panel {{ui:Levels}} agrega un nivel bajo el más bajo, de la misma altura que él, con elevación negativa (Nivel -1, Nivel -2). Nada más se mueve. {{ui:Add levels…}} ahora acepta alturas negativas. Al escribir LEVEL, LEVELS, STOREY o STOREYS en la línea de comandos se abre {{ui:Add levels…}}, y hay un botón {{ui:Levels}} en los menús y en las pestañas de cinta. Vea [Sitios, edificios y niveles](topic:site-building-and-levels).
- **Cotas de rejilla en la planta.** Con la herramienta {{ui:Grid}} activa, marque {{ui:Dimensions}} para dibujar el espaciado entre líneas vecinas y el tamaño total más allá de los círculos, en la planta de cada nivel. Vea [Acotar una rejilla](topic:grid-dimensions).
- **Medir en la planta.** {{ui:Measure}} en el grupo {{ui:Draw}} da una distancia con las diferencias en X y Y entre dos clics. No se guarda nada en el modelo. Vea [Medir en la planta](topic:measure-on-the-plan).
- **Cambie varias columnas a la vez.** Elija columnas junto con un muro y la selección muestra cada tipo con {{ui:Keep only these}}. Un clic conserva las columnas y muestra sus campos comunes.
- **Una sola unidad de visualización en todas partes.** Coordenadas, mediciones, secciones, escalas de hoja, las cargas y resultados de la pestaña de marco y el texto de Problemas siguen la unidad que elija. Las exportaciones quedan en SI.

### Vistas, hojas e impresión

- **Estilo de trabajo.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} permite elegir entre que cada vista tenga sus propias anotaciones y tablas de plumillas, o que las comparta. Vea [Estilo de trabajo, vistas duplicadas, plumillas en papel, Informar como y plantillas](topic:working-style).
- **Duplique una vista.** Las plantas, planos de cielo raso, llamadas, elevaciones y secciones pueden duplicarse como {{ui:Own copy}} o {{ui:Linked}}; {{ui:Make own copy}} vuelve independiente una vinculada. Vea [Estilo de trabajo, vistas duplicadas, plumillas en papel, Informar como y plantillas](topic:working-style).
- **Imprima como se ve, o con una tabla de plumillas.** Los cambios de plumilla se guardan en el IFC con la vista, y las hojas y los PDF los dibujan como se ven en pantalla. El mismo tema cubre las tablas de plumillas.
- **Informar como.** {{ui:Report as}} en {{ui:Properties}} escribe una losa dibujada como camino, un muro como panel o un techo como rampa en el IFC, con la clase que elija, y lo cuenta así en los programas, Cantidades, Buscar, Colorear por y Problemas.
- **Edite en elevaciones y secciones.** Dibuje y mueva muros, aberturas, niveles, cotas y notas directamente en una elevación o sección, con sus propios tamaños de hoja y cajetines. Vea [Editar en elevaciones y secciones](topic:edit-in-elevations).
- **Hojas.** Cada hoja puede estar en horizontal o en vertical. Un cuadro {{ui:Type a scale}} está junto a la lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Puede arrastrar un dibujo colocado o moverlo con las teclas de flecha, y {{ui:Formats…}} › {{ui:Import SVG…}} convierte su propio diseño de hoja en un cajetín con campos que se escriben por hoja.
- **Créditos de la biblioteca en una hoja.** Un juego de dibujos con elementos de la biblioteca obtiene un programa de créditos de la biblioteca que puede colocar en cualquier hoja. Vea [Créditos de la biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar sigue a la vista.** En la vista Planta, la Biblioteca muestra {{ui:Place in plan}}; en 3D muestra {{ui:Place in model}}; en Dividida muestra un botón dividido con {{ui:Place in plan}} como acción principal. Ambas formas escriben el mismo elemento IFC. También puede arrastrar una tarjeta de la Biblioteca a la planta o a la vista 3D; con lápiz o dedo, mantenga presionado y luego arrastre. Vea [Colocar desde la Biblioteca](topic:place-from-library).

### Archivos y asistentes

- **Collada y Google Earth.** {{ui:Collada}} en la barra de herramientas (menú Archivo en los estilos de menú) escribe un .dae, o un .kmz colocado donde está el modelo en el mapa. Vea [Exportar el modelo como Collada o para Google Earth](topic:collada).
- **Los asistentes pueden colocar dispositivos eléctricos.** Su asistente conectado tiene herramientas nuevas para agregar, listar, cambiar y borrar dispositivos y para ajustar luces. Los asistentes siguen apagados hasta que los active en {{ui:Settings}}. Vea [Deje que un asistente de IA trabaje con su modelo](topic:assistants).
- **Escanear a BIM (complemento).** Desactivado por defecto y requiere el complemento Nubes de puntos. Propone losas, muros, puertas y ventanas a partir de un escaneo, con la desviación medida de cada una; aceptar todo es un solo paso de deshacer.

### Análisis

- **Datos de viento y sismo del sitio.** En la pestaña {{ui:Analysis}}: cargas de viento según ASCE 7-10 o 7-16 para un edificio rígido cerrado, con una fuerza en cada nivel como casos de carga, y datos sísmicos del sitio con consulta a USGS y el espectro de diseño.
- **Seguimiento estructural y elementos finitos.** Revisiones de concreto según ACI 318-19, fuerzas laterales equivalentes según ASCE 7-22, deriva de nivel, losas y muros como placas, y combinaciones de carga de ASCE 7 y EN 1990. Nuestro propio motor de elementos finitos resuelve cáscaras, tetraedros y análisis modal. Vea [Revisar elementos de concreto y crear cargas sísmicas](topic:concrete-and-seismic) y [Análisis de marcos](topic:frame-analysis).

### Otros complementos y documentos

- **Iluminación interior (complemento).** Coloca luminarias y escribe el lux como números en la planta de cada nivel, con una estimación de deslumbramiento y un informe imprimible.
- **Panel de documentos.** {{ui:File}} › {{ui:Documents…}} tiene salida y entrada con un archivo de bloqueo, letras de revisión, estados de liberación e historial.
- **Regiones y acero.** Paquetes de dibujo y de reglamento de construcción de Sudáfrica en el complemento de Reglamentos, y 976 medidas de acero del Reino Unido en la tabla de secciones compartida.
- **Complementos gratuitos de impresión en resina.** Laminador, soportes y base, prueba de exposición, y los formatos de archivo GOO, SL1, Chitubox y Anycubic, todos desactivados por defecto.

## En todas las aplicaciones

- Al pasar el cursor sobre un botón o control aparece una sugerencia de Bootstrap.
- La sugerencia de inicio en un área de dibujo vacía tiene un botón de cierre; BimCraft recuerda que se cerró.
- La franja de pestañas de un panel que no cabe ahora se desplaza en vez de cortarse.
- Con un documento abierto, la pestaña del navegador dice "<documento> - BimCraft | CadCraft".
- En {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} las disposiciones son una lista desplegable de opciones de dos líneas.
- La lista de idiomas en {{ui:Settings}} ofrece más idiomas que en la 0.8; los idiomas distintos del inglés son borradores de máquina.

## Corregido

- **Mover funciona en escaleras,** y en rampas, barandales, planos de techo, dispositivos independientes, imágenes y trayectorias.
- **Arrastrar un muro ya no deforma el cuarto.** El agarre central mueve el muro en escuadra consigo mismo y sus esquinas se deslizan a lo largo de los muros unidos. Mantenga presionada {{key:Mod}} para el movimiento libre anterior; {{ui:Square up}} devuelve los 90 grados.
- **Un cambio de espesor o tipo en un nodo unido** ahora mantiene cerrada la esquina en una L, en una T, en un nodo de tres muros y junto a un muro curvo.
- **Mover o copiar un grupo de cuartos** mantiene unidos los muros unidos fuera del grupo.
- **Redo conserva la identidad de una cota de muro.**
- **Elegir un muro con Draw desactivado** ya no produce un error en Properties.
- **Render usa WebGL** cuando la GPU no puede iniciar, en vez de detenerse.
- **La revisión con EnergyPlus** puede volver a activarse.
- **Documentos se abre como un diálogo centrado.** {{key:Esc}}, la X o un clic en la página atenuada lo cierran.
- **Los botones {{ui:Plan}}, {{ui:Split}} y {{ui:3D}} aparecen** en cuanto se abre un modelo, no solo después de activar Draw una vez.

## Límites reales

- Nada se imprimió en hardware real. Los soportes de resina son nuevos y no están probados.
- Los resultados de viento, sismo, concreto y elementos finitos son ayudas de revisión para un ingeniero, comparadas con formas cerradas, no con un edificio real.
- Escanear a BIM se probó con un edificio sintético, no con un escaneo real, y solo encuentra cuartos rectilíneos.
- Collada no se ha abierto aquí en Blender ni en Google Earth.
- La estimación de iluminación se comparó con nuestro propio trazado, no con otros programas de iluminación.
- Las cifras de Sudáfrica no están verificadas.
- Los estilos de unión de muros (a tope, a inglete, a escuadra) y la prioridad de capas no están construidos; las esquinas se hacen a inglete.
- Los idiomas distintos del inglés son borradores de máquina.

Todo lo demás está en [Lo que aún no está construido](topic:not-built-yet). Los cambios anteriores están en las notas de 0.8 y 0.8.1 más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en BimCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. BimCraft ya puede responder preguntas sobre un edificio y probarlo, con personas, sonido, agua, viento y terremotos, y dibujarlo con más herramientas; 0.8.1 es una versión de correcciones.

### Nuevo

**Pruebe el edificio**

- **Personas en el edificio.** La sección {{ui:People in the building}} del panel izquierdo lleva una evacuación o las llegadas de un día normal por sus cuartos, puertas y escaleras. Ve las colas donde el edificio se estrecha, la caminata más larga hasta una salida desde cada cuarto y cuánto tarda la última persona. Marque {{ui:Shut}} en una puerta para ver qué cambia, y marque {{ui:Show the people in the 3D view}} para ver a los que caminan. Los hallazgos pasan a Problemas. Es un modelo de multitudes grueso para decisiones de diseño, no un certificado de seguridad contra incendios. Vea [Recorrer el edificio con personas](topic:people-in-the-building).
- **Acústica de cuartos, y escúchela.** La sección {{ui:Room acoustics}} da el tiempo de reverberación de cada cuarto por banda de octava (Sabine y Eyring) a partir de su tamaño y los acabados que elija, y con una meta propia indica cuánta absorción cumpliría con ella. {{ui:Play it in this room}} reproduce una voz, un aplauso, notas pulsadas o su propio archivo de sonido a través de una respuesta al impulso calculada para el cuarto. Las cifras de absorción son valores típicos publicados que usted debe reemplazar. Vea [Acústica de cuartos](topic:room-acoustics).
- **Reproducción de inundación, viento y terremoto.** {{ui:Hazard playback}} muestra agua que sube por los cuartos, la presión del viento en cada nivel y un terremoto que sacude los niveles, en una planta o una elevación con un control de tiempo. Modelos simples con sus supuestos en el panel; no es una revisión de reglamento. Vea [Reproducir una inundación, viento o terremoto](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Life-cycle view}} enumera las ventanas, puertas, acabados y techo con su vida útil, los años en que se reemplazan y, cuando escriba un costo por unidad, el costo por año y su valor presente. {{ui:Save the schedule (CSV)}} lo escribe. Las vidas útiles son cifras de planeación. Vea [Vea qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Revisiones de concreto y sismo.** Los bloques {{ui:Concrete members}} y {{ui:Seismic loads}} de la pestaña {{ui:Analysis}} revisan vigas y columnas de concreto según ACI 318-19 y calculan fuerzas laterales equivalentes según ASCE 7-22 en pisos rígidos, con deriva de nivel. Para que un ingeniero las revise. Vea [Revisar elementos de concreto y crear cargas sísmicas](topic:concrete-and-seismic).

**Revise e informe**

- **Revisar con un IDS.** Cargue el archivo `.ids` que le entregó un cliente y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC. Abra {{ui:Check against an IDS}} en {{ui:Model checks}}. Vea [Revisar un modelo con el IDS del cliente](topic:check-against-ids).
- **Etiquetas y programas.** Defina sus propias etiquetas, asígnelas a muchos elementos a la vez y cree programas cuyas columnas, filtros y agrupaciones las usen; las etiquetas se guardan en el IFC. Vea [Etiquetas y programas](topic:tags-and-schedules).
- **Documentos desde el modelo.** {{ui:Documents from the model}} llena una plantilla de especificaciones desde el IFC abierto y la guarda como PDF, documento de Word o Markdown. Vea [Documentos desde el modelo](topic:documents-from-the-model).
- **Compare un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Compare}} juzga cada elemento como construido, parcialmente construido, faltante o no alcanzado, y muestra el porcentaje construido. Vea [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y costo.** El panel de Carbono suma el carbono incorporado a partir de una tabla de factores que usted puede editar, y el panel de Costo reparte precios sobre el programa 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no verificados. Vea [Carbono incorporado y costo](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección de mapa.** {{ui:Measure}} › {{ui:Coordinate system…}} acepta un número EPSG, una zona UTM, un nombre o su propia definición de proyección. Vea [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

**Dibuje y edite**

- **Mover, Alinear y Distribuir.** En {{ui:Build}}; {{key:Shift+M}} inicia Mover (la tecla {{key:M}} sola sigue siendo Medir). Mover copia mientras avanza con {{key:C}}, cada paso es un deshacer y se comparte en una sesión de Live TeamWork. Vea [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Build}} › {{ui:Picture}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Defina la escala con dos puntos, y mueva, gire, atenúe y bloquee la imagen. Un área copiada en MarkupCraft se pega a la escala de su hoja. Vea [Poner una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, los muros, puertas y cuartos llegan como propuestas que conserva o rechaza una por una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Vea [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calco, plumillas y escalera por croquis.** {{ui:Trace}} muestra otro nivel punteado bajo la planta, {{ui:Pens}} da a muros, puertas y ventanas su propio grosor de línea en una sola vista, y {{ui:Sketch stair}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Vea [Calcar un nivel, plumillas y una escalera desde un croquis](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y la parcela que encontró Dirección a sitio de CivilCraft llegan como sugerencias; marque las que quiera agregar. Vea [Empezar desde el sitio de CivilCraft](topic:site-from-civilcraft).
- **Dibujos de paneles.** {{ui:Build}} › {{ui:Panel drawings}} encuadra muros, pisos y techos en madera o acero ligero y guarda una lista de corte como CSV y los planos de taller como PDF. Son valores de partida, no un diseño estructural. Vea [Dibujos de paneles](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Build}} › {{ui:Symbol palette}} encuentra símbolos eléctricos y sanitarios por nombre; la fuente {{ui:Plants}} de la {{ui:Library}} enumera unas 400 plantas con símbolos de planta. Vea [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

**Tuberías, conductos y energía**

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y juegos de líneas dimensionados a partir de una tabla de valores típicos de ejemplo que puede cambiar. Vea [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel de Cálculos revisa el tamaño de tuberías de suministro y conductos con caída de presión, pasa cables por charolas y conduits y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores por defecto están marcados; escriba los valores de su código. Vea [Cálculos de tuberías, conductos, cables y luz](topic:mep-calculations).
- **Archivos PCF.** El **Exportar PCF** de la herramienta Tubería escribe los tramos para programas de esfuerzo en tuberías e isométricos, y un archivo PCF leído de nuevo dibuja su tubería. Vea [Archivos de componentes de tubería](topic:piping-pcf).
- **Energía solar fotovoltaica.** Coloque arreglos en techos o en el suelo, dé sombra desde el modelo, estime la energía anual, revise cadenas y genere datos de diagrama unifilar. El módulo de inicio y las pérdidas son genéricos. Vea [Solar fotovoltaica](topic:solar-pv).
- **Archivo de EnergyPlus.** El panel Revisar con EnergyPlus escribe el modelo como IDF para ejecutarlo en su propio EnergyPlus. Ejecutarlo en el navegador requiere una compilación que usted aloje y cuya dirección escriba; BimCraft no la incluye. Vea [Revisar calefacción y enfriamiento con EnergyPlus](topic:check-with-energyplus).

**Imágenes y archivos**

- **Elija el motor de render.** {{ui:Render}} tiene una opción {{ui:Engine}}. Nuestros dos motores integrados (Rápido y Trazado de rayos) siguen siendo los predeterminados. **Abrir en** guarda la escena como archivo USD o glTF, y una carpeta de proyecto de Unreal como .zip; en CadCraft Studio, un complemento puede agregar un motor. El complemento de Unreal que abre el proyecto no se ha publicado. Vea [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft informa a Studio cada paso terminado para que Studio pueda deshacer su último paso en la ventana que usó por última vez. Vea [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en su archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que le falten al abrirlo. Vea [Complementos en su archivo](topic:add-ons-in-your-file).

**En todas las aplicaciones**

- **Conecte su IA.** Su propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué cuartos están bajo cierta área. Studio no tiene IA propia. Vea [Deje que un asistente de IA trabaje con su modelo](topic:assistants).
- **Filas de la barra de herramientas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el predeterminado.
- **Dispositivos de entrada.** La configuración de trackpad, lápiz, mouse 3D, control y MIDI es compartida por todas las aplicaciones.
- **Problemas y Live.** El panel de advertencias y las sesiones de Live funcionan como antes, y las nuevas revisiones de arriba alimentan Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son borradores de máquina que todavía no ha leído un hablante nativo; los temas de ayuda son en su mayoría en inglés.

### Corregido en 0.8.1

- **Cinta + diseño del explorador de proyectos.** Insertar › Importar CAD, Insertar › Imagen y Administrar › Unidades del proyecto decían "Aún no construido en BimCraft". Imagen ahora abre la herramienta Imagen, Importar CAD abre {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF o un escaneo), y Unidades del proyecto abre {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Mover y Alinear ejecutan las herramientas Mover y Alinear, Nivel abre {{ui:Add levels…}}, Fases abre la sección de fases de renovación y Materiales abre la biblioteca de materiales.
- **Sección de clases de DWG.** Se leía como tipo incorrecto; corregido en BimCraft y en las demás aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas ahora pueden cambiar de idioma sin reiniciar. Esto aún no se probó en todas las plataformas; avísenos si el idioma no cambia.
- **Script de paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta hasta 20 segundos y reintenta junto al paquete.

### Aún no está en esta versión

- **Ayudas de seguridad y diseño.** Personas en el edificio no tiene un límite de distancia de recorrido de un reglamento (usted escribe el límite) y no se ha revisado a mano en un plano real. Las cifras de acústica, ciclo de vida y peligro son valores de planeación, no una revisión de reglamento.
- **Escenarios climáticos y EnergyPlus.** No hay escenarios climáticos integrados: puede cargar un archivo de escenario para la simulación de inundación. La ejecución de EnergyPlus en el navegador no forma parte de esta versión.
- **Diseño de la cinta.** Cuantificación de materiales sigue como "Sin construir" porque BimCraft no tiene una lista de cantidades de material, y otras 54 herramientas en gris de la cinta todavía no tienen una herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:More info}} y luego {{ui:Run anyway}}, y macOS requiere clic derecho y luego {{ui:Open}}. La compilación para iPad e iPhone no se recompiló para 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas antiguas del navegador de BimCraft siguen fallando en nuestra página de pruebas, como antes de 0.8.1.

Todo lo demás está en [Lo que aún no está construido](topic:not-built-yet). Los cambios anteriores están en [Novedades en la 0.7](topic:whats-new-0-7).
