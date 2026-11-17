---
title: Novedades de la versión 0.9
summary: Formas de muro, dividir, desfase, estirar, bloquear a la rejilla, niveles bajo rasante, cotas de rejilla y Medir en la planta, vistas duplicadas con estilos de trabajo y tablas de plumas, Informar como, exportación a Collada y Google Earth, Escaneo a BIM, análisis de viento y sísmico, complementos de impresión en resina.
keywords: novedades, 0.9, notas de la versión, formas de muro, rectángulo, polígono, arco, elegir líneas, contorno de calco, desfase, unión, estirar con recuadro, alinear y bloquear, dividir muro, hueco, volver a unir, bloquear a la rejilla, crecer desde, medir desde, añadir un nivel inferior, sótano, comando de nivel, cotas de rejilla, medir en la planta, estilo de trabajo, vista duplicada, copia propia, vista vinculada, tabla de plumas, imprimir como se ve, informar como, escribir una escala, importar SVG, colocar en la planta, colocar en el modelo, collada, dae, kmz, google earth, escaneo a BIM, carga de viento, sísmico, elementos finitos, panel de documentos, impresión en resina, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, tablas, mover, alinear, distribuir, imagen, fondo, escaneo a muros, emplazamiento desde CivilCraft, paneles de dibujo, estructura, solar, fotovoltaica, dividir, vrf, fan coil, dimensionado de tuberías, bandeja de cables, iluminancia, hormigón, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, coste, energyplus, motor de render, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, explorador de proyecto, disposición
from: 5624fe88
---

Esto es lo que cambió en BimCraft 0.9, en comparación con la 0.8.1. Los dos grandes temas son una herramienta de muro real y vistas que se comportan como esperan las personas que vienen de los grandes programas BIM. Alrededor vienen la exportación Collada, asistentes que pueden colocar dispositivos eléctricos, Escaneo a BIM, y el trabajo de viento, sismo y elementos finitos en la pestaña {{ui:Análisis}}.

## Novedades

### Muros

- **Dibujar formas completas.** En {{ui:Dibujo}}, abra {{ui:Formas}} (o elija una forma en la lista Forma de la fila de Muro) para un rectángulo, un rectángulo girado, un polígono de 3 a 64 lados, un arco por centro, un arco tangente, muros sobre líneas elegidas, o muros alrededor de un área cerrada en la que hace clic. Un rectángulo son cuatro muros con cuatro esquinas unidas y un solo paso de deshacer. Véase [Formas de muro, dividir, desfase, estirar y bloquear](topic:wall-tools).
- **Fijar antes de dibujar, cambiar después.** La fila de Muro tiene {{ui:Desfase}} y {{ui:Unión}} (desmárquelo para dibujar muros independientes). Después use {{ui:Desfase}}, {{ui:Estirar con recuadro}} y {{ui:Alinear y bloquear}} en los muros dibujados. Un muro movido o estirado conserva sus puertas, ventanas y cotas. Cada receta es un paso de deshacer.
- **Cortar muros.** {{ui:Dividir}}, {{ui:Hueco}}, {{ui:Extremos libres}}, {{ui:Eliminar tramo}} y {{ui:Volver a unir}} cortan un muro con un clic o donde lo cruza otro muro. Un corte a través de una puerta se rechaza. Véase [Formas de muro, dividir, desfase, estirar y bloquear](topic:wall-tools).
- **Bloquear muros a líneas de rejilla.** Seleccione un muro a lo largo de una línea de rejilla y marque {{ui:Bloquear a la rejilla}} en {{ui:Propiedades}}. Con la herramienta {{ui:Retícula}} activa, escriba una distancia en {{ui:Mover en}} para una línea elegida, y los muros bloqueados le siguen en un solo paso de deshacer.
- **Dar forma a un muro.** En {{ui:Propiedades}} de un muro puede acoplar su parte superior o su base a una cubierta, forjado o techo, editar su contorno de alzado, inclinarlo, o practicar un hueco sin puerta ni ventana. Véase [Forma de muro](topic:wall-shape).
- **La longitud indica qué extremo se mantiene.** {{ui:Crecer desde}} fija si el inicio, el final o el centro se quedan quietos cuando cambia la longitud.
- **La longitud y la cota de planta coinciden.** {{ui:Medir desde}} (eje, cara interior o cara exterior) rige tanto el campo Longitud como las cotas de muro de la planta. Empieza en el eje, por lo que las cotas de muro de la planta ahora leen el eje donde antes leían la cara exterior. Cámbielo en la fila de Muro, en {{ui:Propiedades}} o en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Muros}}.

### Niveles, rejillas y medición

- **Añadir un nivel inferior.** {{ui:Añadir un nivel inferior}} en el panel {{ui:Niveles}} añade un nivel bajo el más bajo, tan alto como él, a una cota negativa (Nivel -1, Nivel -2). Nada más se mueve. {{ui:Añadir niveles…}} acepta ahora alturas negativas. Escribir LEVEL, LEVELS, STOREY o STOREYS en la línea de comandos abre {{ui:Añadir niveles…}}, y hay un botón {{ui:Niveles}} en los menús y en las pestañas de la cinta. Véase [Emplazamientos, edificios y niveles](topic:site-building-and-levels).
- **Cotas de rejilla en la planta.** Con la herramienta {{ui:Retícula}} activa, marque {{ui:Dimensiones}} para dibujar el espaciado entre líneas vecinas y el tamaño total más allá de los globos, en la planta de cada nivel. Véase [Acotar una rejilla](topic:grid-dimensions).
- **Medir en la planta.** {{ui:Medir}} en el grupo {{ui:Dibujo}} da una distancia con las diferencias X e Y entre dos clics. No se guarda nada en el modelo. Véase [Medir en la planta](topic:measure-on-the-plan).
- **Cambiar varias columnas a la vez.** Elija columnas junto con un muro y la selección enumera cada tipo con {{ui:Mantener solo estos}}. Un clic mantiene las columnas y muestra sus campos comunes.
- **Una sola unidad de visualización en todas partes.** Coordenadas, mediciones, secciones, escalas de hoja, las cargas y resultados de la pestaña de marco y el texto de Problemas siguen la unidad que elija. Las exportaciones siguen en SI.

### Vistas, hojas e impresión

- **Estilo de trabajo.** {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Estilo de trabajo}} elige entre que cada vista tenga sus propias anotaciones y tablas de plumas, o que las comparta. Véase [Estilo de trabajo, vistas duplicadas, plumas en papel, Informar como y plantillas](topic:working-style).
- **Duplicar una vista.** Las plantas, los planos de techo, las llamadas, los alzados y las secciones pueden duplicarse como {{ui:Copia propia}} o {{ui:Vinculada}}; {{ui:Hacer copia propia}} vuelve independiente una vinculada. Véase [Estilo de trabajo, vistas duplicadas, plumas en papel, Informar como y plantillas](topic:working-style).
- **Imprimir como se ve, o mediante una tabla de plumas.** Las sustituciones de pluma se guardan en el IFC con la vista, y las hojas y los PDF las dibujan como lo hace la pantalla. El mismo tema trata las tablas de plumas.
- **Informar como.** {{ui:Informar como}} en {{ui:Propiedades}} escribe en el IFC un forjado dibujado como carretera, un muro como panel o una cubierta como rampa, con la clase que elija, y lo cuenta así en las tablas, Cantidades, Buscar, Color por y Problemas.
- **Editar en alzados y secciones.** Dibuje y mueva muros, huecos, niveles, cotas y notas directamente en un alzado o una sección, con sus propios tamaños de hoja y cajetines. Véase [Editar en alzados y secciones](topic:edit-in-elevations).
- **Hojas.** Cada hoja puede ser apaisada o vertical. Un cuadro {{ui:Escriba una escala}} está junto a la lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Puede arrastrar un dibujo colocado o moverlo con las teclas de flecha, y {{ui:Formatos…}} › {{ui:Importar SVG…}} convierte su propio diseño de hoja en un cajetín con campos escritos por hoja.
- **Créditos de biblioteca en una hoja.** Un juego de dibujos con elementos de biblioteca obtiene una tabla de créditos de biblioteca que puede colocar en cualquier hoja. Véase [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar sigue a la vista.** En la vista de planta, la Biblioteca muestra {{ui:Colocar en la planta}}; en 3D muestra {{ui:Colocar en el modelo}}; en Dividir muestra un botón partido con {{ui:Colocar en la planta}} como acción principal. Ambas formas escriben el mismo elemento IFC. También puede arrastrar una tarjeta de la Biblioteca hasta la planta o la vista 3D; con lápiz o dedo, mantenga pulsado y después arrastre. Véase [Colocar desde la Biblioteca](topic:place-from-library).

### Archivos y asistentes

- **Collada y Google Earth.** {{ui:Collada}} en la barra de herramientas (menú Archivo en los estilos de menú) escribe un .dae, o un .kmz colocado donde está el modelo en el mapa. Véase [Exportar el modelo como Collada o para Google Earth](topic:collada).
- **Los asistentes pueden colocar dispositivos eléctricos.** Su asistente conectado tiene nuevas herramientas para añadir, listar, cambiar y eliminar dispositivos, y para fijar luces. Los asistentes están desactivados hasta que los active en {{ui:Configuración}}. Véase [Dejar que un asistente de IA trabaje con su modelo](topic:assistants).
- **Escaneo a BIM (complemento).** Viene desactivado y necesita el complemento de nubes de puntos. Propone forjados, muros, puertas y ventanas a partir de un escaneo, con la desviación medida de cada uno; aceptar es un paso de deshacer.

### Análisis

- **Datos de viento y sísmicos del emplazamiento.** En la pestaña {{ui:Análisis}}: cargas de viento según ASCE 7-10 o 7-16 para un edificio cerrado y rígido, con una fuerza en cada planta como casos de carga, y datos sísmicos del emplazamiento con una consulta USGS y el espectro de diseño.
- **Seguimiento estructural y elementos finitos.** Comprobaciones de hormigón según ACI 318-19, fuerzas laterales equivalentes según ASCE 7-22, deriva de planta, forjados y muros como placas, y combinaciones de cargas de ASCE 7 y EN 1990. Nuestro propio motor de elementos finitos calcula láminas, tetraedros y análisis modal. Véase [Comprobar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic) y [Análisis de marcos](topic:frame-analysis).

### Otros complementos y documentos

- **Iluminación interior (complemento).** Coloca luminarias y escribe la iluminancia en lux como números en la planta de cada nivel, con una estimación de deslumbramiento y un informe imprimible.
- **Panel de documentos.** {{ui:Archivo}} › {{ui:Documentos…}} tiene retirada y devolución con un archivo de bloqueo, letras de revisión, estados de publicación e historial.
- **Regiones y acero.** Paquetes sudafricanos de dibujo y normativa de edificación en el complemento Regulations, y 976 tamaños de acero del Reino Unido en la tabla de secciones compartida.
- **Complementos gratuitos de impresión en resina.** Laminador (slicer), soportes y base (raft), prueba de exposición, y los formatos de archivo GOO, SL1, Chitubox y Anycubic, todos desactivados por defecto.

## En todas las aplicaciones

- Al pasar el cursor sobre un botón o control aparece una sugerencia de Bootstrap.
- La sugerencia de inicio en un área de dibujo vacía tiene un botón de cierre; BimCraft recuerda que se cerró.
- La franja de pestañas de un panel que no cabe ahora se desplaza en lugar de cortarse.
- Con un documento abierto, la pestaña del navegador dice «<documento> - BimCraft | CadCraft».
- En {{ui:Configuración}} › {{ui:General}} › {{ui:Disposición}}, las disposiciones son una lista desplegable de opciones de dos líneas.
- La lista de idiomas en {{ui:Configuración}} ofrece más idiomas que en la 0.8; los idiomas distintos del inglés son borradores de máquina.

## Corregido

- **Mover funciona en escaleras,** y en rampas, barandillas, planos de cubierta, dispositivos independientes, imágenes y trayectorias.
- **Arrastrar un muro ya no deforma la habitación.** El pinzamiento central mueve el muro en escuadra consigo mismo, y sus esquinas se deslizan a lo largo de los muros unidos. Mantenga pulsado {{key:Mod}} para el antiguo movimiento libre; {{ui:Cuadrar}} devuelve los 90 grados.
- **Un cambio de espesor o de tipo en un nudo unido** ahora mantiene cerrada la esquina en una L, en una T, en un nudo de tres muros y junto a un muro curvo.
- **Mover o copiar un grupo de habitaciones** mantiene unidos fuera del grupo los muros que estaban unidos.
- **Rehacer conserva la identidad de una cota de muro.**
- **Elegir un muro con Dibujo desactivado** ya no produce un error en Propiedades.
- **Render pasa a WebGL** cuando la GPU no puede arrancar, en lugar de detenerse.
- **La comprobación de EnergyPlus** puede volver a activarse.
- **Documentos se abre como un cuadro de diálogo centrado.** {{key:Esc}}, la X o un clic en la página atenuada lo cierran.
- **Los botones {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}} aparecen** en cuanto hay un modelo abierto, no solo después de activar Dibujo una vez.

## Límites honestos

- No se imprimió nada en hardware real. Los soportes de resina son nuevos y no están probados.
- Los resultados de viento, sismo, hormigón y elementos finitos son ayudas de comprobación para un ingeniero, contrastadas con fórmulas cerradas, no con un edificio real.
- La estimación de iluminación se contrasta con nuestro propio trazado, no con otros programas de iluminación.
- Las cifras sudafricanas no están verificadas.
- Los estilos de unión de muros (a tope, inglete, cortar a escuadra) y la prioridad de capas no están construidos; las esquinas se hacen a inglete.
- Los idiomas distintos del inglés son borradores de máquina.

Todo lo demás está en [Lo que aún no está disponible](topic:not-built-yet). Los cambios anteriores están en las notas de la 0.8 y la 0.8.1 más abajo de esta página.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en BimCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), en comparación con la 0.7. BimCraft ya puede responder preguntas sobre un edificio y probarlo, con personas, sonido, agua, viento y terremotos, y dibujarlo con más herramientas; la 0.8.1 es una versión de correcciones.

### Novedades

**Probar el edificio**

- **Personas en el edificio.** La sección {{ui:Personas en el edificio}} del panel izquierdo recorre una evacuación o las llegadas de un día normal por sus habitaciones, puertas y escaleras. Ve las colas donde el edificio se estrecha, el recorrido más largo hasta una salida desde cada habitación y cuánto tarda la última persona. Marque {{ui:Cerrada}} en una puerta para ver qué cambia, y marque {{ui:Mostrar las personas en la vista 3D}} para ver a los caminantes. Los resultados van a Problemas. Es un modelo grueso de multitudes para decisiones de diseño, no un certificado de seguridad contra incendios. Véase [Hacer recorrer a las personas por el edificio](topic:people-in-the-building).
- **Acústica de habitaciones, y oírla.** La sección {{ui:Acústica de habitaciones}} da el tiempo de reverberación de cada habitación por bandas de octava (Sabine y Eyring) a partir de su tamaño y de los acabados que elija, y con un objetivo propio indica cuánta absorción cumpliría con él. {{ui:Reproducirlo en esta habitación}} reproduce una voz, un aplauso, notas pulsadas o su propio archivo de sonido a través de una respuesta al impulso calculada para la habitación. Las cifras de absorción son valores publicados típicos para que los sustituya. Véase [Acústica de habitaciones](topic:room-acoustics).
- **Reproducción de inundación, viento y terremoto.** {{ui:Reproducción de peligros}} reproduce el agua subiendo por las habitaciones, la presión del viento en cada planta y un terremoto que sacude las plantas, en una planta o un alzado con un deslizador de tiempo. Son modelos simples con sus supuestos en el panel; no es una comprobación normativa. Véase [Reproducir una inundación, viento o terremoto](topic:hazard-playback).
- **Lo que se desgasta en cincuenta años.** {{ui:Vista del ciclo de vida}} enumera las ventanas, puertas, acabados y cubierta con una vida útil cada uno, los años en que se reemplazan y, cuando escribe un coste por unidad, el coste por año y su valor actual. {{ui:Guardar el calendario (CSV)}} lo escribe en un archivo. Las vidas útiles son cifras de planificación. Véase [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Hormigón y comprobaciones sísmicas.** Los bloques {{ui:Elementos de hormigón}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} comprueban vigas y pilares de hormigón según ACI 318-19, y generan fuerzas laterales equivalentes según ASCE 7-22 en forjados rígidos, con deriva de planta. Son para que las revise un ingeniero. Véase [Comprobar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic).

**Comprobar e informar**

- **Comprobar con un IDS.** Cargue el archivo `.ids` que le entregó un cliente y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC. Abra {{ui:Comprobar con un IDS}} en {{ui:Comprobaciones del modelo}}. Véase [Comprobar un modelo con el IDS de un cliente](topic:check-against-ids).
- **Etiquetas y tablas.** Defina sus propias etiquetas, asígnelas a muchos elementos a la vez y cree tablas cuyas columnas, filtros y grupos las lean; las etiquetas se guardan en el IFC. Véase [Etiquetas y tablas](topic:tags-and-schedules).
- **Documentos a partir del modelo.** {{ui:Documentos a partir del modelo}} rellena una plantilla de especificación desde el IFC abierto y la guarda como PDF, documento de Word o Markdown. Véase [Documentos a partir del modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Comparar}} juzga cada elemento como construido, parcialmente construido, que falta o no alcanzado, y muestra el porcentaje construido. Véase [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y coste.** El panel Carbono suma el carbono incorporado a partir de una tabla de factores que puede editar, y el panel Coste reparte los precios sobre la programación 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no comprobados. Véase [Carbono incorporado y coste](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, una zona UTM, un nombre o su propia definición de proyección. Véase [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

**Dibujar y editar**

- **Mover, Alinear y Distribuir.** Bajo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (la tecla {{key:M}} sola sigue siendo Medir). Mover copia mientras avanza con {{key:C}}, cada paso es un deshacer, y viaja en una sesión de Live TeamWork. Véase [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Compilación}} › {{ui:Imagen}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Fije la escala con dos puntos, y mueva, gire, desvanezca y bloquee la imagen. Un área copiada en MarkupCraft se pega a la escala de su hoja. Véase [Poner una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, los muros, puertas y habitaciones llegan como propuestas que conserva o rechaza una a una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Véase [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calcar, plumas y escalera de boceto.** {{ui:Calcar}} muestra otro nivel discontinuo bajo la planta; {{ui:Plumas}} da a muros, puertas y ventanas su propio grosor de línea en una vista; y {{ui:Croquizar escalera}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Véase [Calcar un nivel, plumas y una escalera a partir de un boceto](topic:trace-pens-stairs-obj).
- **Emplazamientos alrededor de una dirección.** Los edificios y la parcela que encontró Dirección a emplazamiento de CivilCraft llegan como sugerencias; marque las que quiere añadir. Véase [Empezar desde el emplazamiento de CivilCraft](topic:site-from-civilcraft).
- **Paneles de dibujo.** {{ui:Compilación}} › {{ui:Paneles de dibujo}} encuadra muros, forjados y cubiertas en madera o en acero conformado en frío, y guarda una lista de corte en CSV y planos de taller en PDF. Son valores de partida, no un diseño estructural. Véase [Paneles de dibujo](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} encuentra símbolos eléctricos y de fontanería por nombre; el origen {{ui:Plantas}} de la {{ui:Biblioteca}} enumera unas 400 plantas con símbolos de planta. Véase [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

**Tuberías, conductos y energía**

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y líneas de refrigerante dimensionadas a partir de una tabla de valores de ejemplo típicos que puede cambiar. Véase [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel Cálculos comprueba el dimensionado de tuberías y conductos de impulsión con la pérdida de presión, encamina cables por bandejas y conducciones y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores por defecto están etiquetados; escriba los valores de su normativa. Véase [Cálculos de tuberías, conductos, cables y luz](topic:mep-calculations).
- **Archivos PCF.** El comando **Exportar PCF** de la herramienta Tubería escribe los recorridos para programas de tensiones en tuberías y de isométricos, y un archivo PCF leído de nuevo dibuja su tubería. Véase [Archivos de componentes de tubería](topic:piping-pcf).
- **Fotovoltaica.** Coloque matrices en cubiertas o en el suelo, sombréelas a partir del modelo, estime la energía anual, compruebe las cadenas y genere datos de un esquema unifilar. El módulo de inicio y las pérdidas son genéricos. Véase [Fotovoltaica](topic:solar-pv).
- **Archivo EnergyPlus.** El panel Comprobar con EnergyPlus escribe el modelo como IDF para ejecutarlo en su propio EnergyPlus. Ejecutarlo en el navegador necesita una versión que aloje usted y cuya dirección escriba; BimCraft no la incluye. Véase [Comprobar calefacción y refrigeración con EnergyPlus](topic:check-with-energyplus).

**Imágenes y archivos**

- **Elegir el motor de render.** {{ui:Renderizar}} tiene una opción {{ui:Motor}}. Nuestros dos motores integrados (Rápido y Trazador de trayectorias) siguen siendo el valor por defecto. **Abrir en** guarda la escena como archivo USD o glTF, y una carpeta de proyecto Unreal como .zip; en CadCraft Studio un complemento puede añadir un motor. El complemento de Unreal que abre el proyecto no está publicado. Véase [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft comunica a Studio cada paso terminado para que Studio pueda deshacer su último paso en la ventana que usó por última vez. Véase [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en su archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que le faltan al abrirlo. Véase [Complementos en su archivo](topic:add-ons-in-your-file).

**En todas las aplicaciones**

- **Conecte su IA.** Su propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué habitaciones están bajo una superficie dada. Studio no tiene IA propia. Véase [Dejar que un asistente de IA trabaje con su modelo](topic:assistants).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el valor por defecto.
- **Dispositivos de entrada.** La configuración de trackpad, lápiz, ratón 3D, mando y MIDI es común a todas las aplicaciones.
- **Problemas y Live.** El panel de avisos y las sesiones Live funcionan como antes, y las nuevas comprobaciones de arriba alimentan Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son borradores de máquina aún no leídos por una persona nativa; los temas de ayuda están en su mayoría en inglés.

### Corregido en 0.8.1

- **Diseño de la cinta y explorador de proyecto.** Insertar › Importar CAD, Insertar › Imagen y Gestionar › Unidades de proyecto decían «Aún no disponible en BimCraft». Ahora Imagen abre la herramienta Imagen, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un dibujo…}} (DWG, DXF, PDF o escaneo), y Unidades de proyecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover y Alinear ejecutan las herramientas Mover y Alinear, Nivel abre {{ui:Añadir niveles…}}, Fases abre la sección de fases de renovación, y Materiales abre la biblioteca de materiales.
- **Sección de clases DWG.** Se leía como un tipo incorrecto; corregido en BimCraft y en las demás aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma ahora sin reiniciar. Aún no se ha probado en todas las plataformas; díganos si el idioma no cambia.
- **Script del paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta hasta 20 segundos y reintenta junto al paquete.

### No incluido en esta versión

- **Ayudas de seguridad y de diseño.** Personas en el edificio no tiene límite de distancia de recorrido de un código de edificación (lo escribe usted) y no se ha comprobado a mano en un plano real. Las cifras de acústica, ciclo de vida y peligros son valores de planificación, no una comprobación normativa.
- **Clima futuro y EnergyPlus.** No hay clima futuro integrado: puede cargar un archivo de escenario para la ejecución de inundación. La ejecución de EnergyPlus en el navegador no forma parte de esta versión.
- **Disposición de la cinta.** Cubicación de materiales sigue «Sin construir», porque BimCraft no tiene lista de cantidades de materiales, y 54 herramientas de la cinta en gris aún no tienen herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:Más información}}, después {{ui:Ejecutar de todos modos}}, y macOS necesita clic con el botón derecho y después {{ui:Abierta}}. La versión para iPad y iPhone no se recompiló para la 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas antiguas del navegador de BimCraft siguen fallando en nuestra página de prueba, como antes de la 0.8.1.

Todo lo demás está en [Lo que aún no está disponible](topic:not-built-yet). Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
