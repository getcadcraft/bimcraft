---
title: Novedades de la 0.9 (anteriores)
summary: Formas de muro, dividir, desfase, estirar y bloquear a la retícula, niveles bajo el terreno, acotación de retículas y Medir en la planta, vistas duplicadas con estilos de trabajo y tablas de plumas, Informar como, exportación Collada y Google Earth, Escanear a BIM, análisis de viento y sísmico, complementos de impresión en resina.
keywords: novedades 0.9, versión anterior, novedades, 0.9, notas de la versión, formas de muro, rectángulo, polígono, arco, elegir líneas, contorno de calco, desfase, unión, estirar con recuadro, alinear y bloquear, dividir muro, hueco, volver a unir, bloquear a la retícula, crecer desde, medir desde, añadir un nivel inferior, sótano, comando level, acotación de retícula, medir en la planta, estilo de trabajo, vista duplicada, copia propia, vista vinculada, tabla de plumas, imprimir como se ve, informar como, escala de tipo, importar svg, colocar en el plano, colocar en el modelo, collada, dae, kmz, google earth, escanear a BIM, carga de viento, sísmico, elementos finitos, panel de documentos, impresión en resina, novedades, qué hay de nuevo, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, calendarios, mover, alinear, distribuir, imagen, fondo, escanear a muros, emplazamiento desde CivilCraft, dibujos de paneles, entramado, solar, fv, split, vrf, fan coil, dimensionado de tuberías, bandeja de cables, iluminancia, hormigón, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, coste, energyplus, motor de renderizado, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, navegador de proyecto, diseño
from: 816df7f8
---

Estos son los cambios de BimCraft 0.9 respecto a la 0.8.1. Los dos grandes temas son una herramienta de muros real y vistas que se comportan como esperan quienes vienen de los grandes programas BIM. Alrededor de ellos llegan la exportación Collada, asistentes que pueden colocar dispositivos eléctricos, Escanear a BIM, y el trabajo de viento, sísmico y de elementos finitos en la pestaña {{ui:Análisis}}.

## Novedades

### Muros

- **Dibuje formas completas.** En {{ui:Dibujo}}, abra {{ui:Formas}} (o elija una forma en la lista Forma de la fila Muro) para un rectángulo, un rectángulo girado, un polígono de 3 a 64 lados, un arco por centro, un arco tangente, muros sobre líneas elegidas o muros alrededor de un área cerrada en la que haga clic. Un rectángulo son cuatro muros con cuatro esquinas unidas y un solo paso de deshacer. Consulte [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools).
- **Configure antes de dibujar, cambie después.** La fila Muro tiene {{ui:Desfase}} y {{ui:Unión}} (desmárquelo para dibujar muros independientes). Después use {{ui:Desfase}}, {{ui:Estirar con recuadro}} y {{ui:Alinear y bloquear}} en los muros dibujados. Un muro movido o estirado conserva sus puertas, ventanas y cotas. Cada receta es un solo paso de deshacer.
- **Cortar muros.** {{ui:Dividir}}, {{ui:Hueco}}, {{ui:Extremos libres}}, {{ui:Eliminar tramo}} y {{ui:Volver a unir}} cortan un muro con un clic o donde lo cruza otro muro. Un corte por una puerta se rechaza. Consulte [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools).
- **Bloquear muros a líneas de retícula.** Seleccione un muro sobre una línea de retícula y marque {{ui:Bloquear a la rejilla}} en {{ui:Propiedades}}. Con la herramienta de Retícula activa, escriba una distancia en {{ui:Mover en}} para una línea elegida, y los muros bloqueados la siguen en un solo paso de deshacer.
- **Dar forma a un muro.** En {{ui:Propiedades}} de un muro puede unir su parte superior o inferior a una cubierta, forjado o techo, editar su contorno de alzado, inclinarlo o practicar una abertura sin puerta ni ventana. Consulte [Forma del muro](topic:wall-shape).
- **La longitud indica qué extremo se mantiene.** {{ui:Crecer desde}} define si el inicio, el final o el centro permanecen fijos al cambiar la longitud.
- **La longitud y la cota en planta coinciden.** {{ui:Medir desde}} (eje, cara interior o cara exterior) controla tanto el campo Longitud como las cotas de muro en la planta. Empieza en el eje, así que las cotas de muro de la planta ahora leen el eje, donde antes leían la cara exterior. Cámbielo en la fila Muro, en {{ui:Propiedades}} o en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Muros}}.

### Niveles, retículas y medición

- **Añadir un nivel inferior.** {{ui:Añadir un nivel inferior}} en el panel {{ui:Niveles}} añade un nivel bajo el más bajo, de su misma altura, con elevación negativa (Nivel -1, Nivel -2). Nada más se mueve. {{ui:Agregar niveles…}} ahora acepta alturas negativas. Escribir LEVEL, LEVELS, STOREY o STOREYS en la línea de comandos abre {{ui:Agregar niveles…}}, y hay un botón {{ui:Niveles}} en los menús y en las pestañas de la cinta. Consulte [Emplazamientos, edificios y niveles](topic:site-building-and-levels).
- **Cotas de retícula en la planta.** Con la herramienta {{ui:Retícula}} activa, marque {{ui:Dimensiones}} para dibujar la separación entre líneas vecinas y el tamaño total más allá de las burbujas, en la planta de cada nivel. Consulte [Acotar una retícula](topic:grid-dimensions).
- **Medir en la planta.** {{ui:Medir}} en el grupo {{ui:Dibujo}} da una distancia con las diferencias X e Y entre dos clics. No se guarda nada en el modelo. Consulte [Medir en la planta](topic:measure-on-the-plan).
- **Cambiar varias columnas a la vez.** Seleccione columnas junto con un muro y la lista muestra cada tipo con {{ui:Mantener solo estos}}. Un clic mantiene las columnas y muestra sus campos comunes.
- **Una unidad de visualización en todas partes.** Coordenadas, mediciones, secciones, escalas de hoja, las cargas y resultados de la pestaña de marcos y el texto de Problemas siguen la unidad que elija. Las exportaciones permanecen en SI.

### Vistas, hojas e impresión

- **Estilo de trabajo.** {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Estilo de trabajo}} permite elegir entre que cada vista tenga sus propias anotaciones y tablas de plumas, o que las comparta. Consulte [Estilo de trabajo, vistas duplicadas, plumas en papel, Informar como y plantillas](topic:working-style).
- **Duplicar una vista.** Las plantas, planos de techo, llamadas, alzados y secciones se pueden duplicar como {{ui:Copia propia}} o {{ui:Vinculado}}; {{ui:Hacer copia propia}} convierte una vinculada en independiente. Consulte [Estilo de trabajo, vistas duplicadas, plumas en papel, Informar como y plantillas](topic:working-style).
- **Imprimir tal como se ve, o a través de una tabla de plumas.** Los reemplazos de plumas se guardan en el IFC con la vista, y las hojas y los PDF los dibujan como se ven en pantalla. El mismo tema trata las tablas de plumas.
- **Informar como.** {{ui:Informar como}} en {{ui:Propiedades}} escribe en el IFC una losa dibujada como carretera, un muro como panel o una cubierta como rampa, con la clase que elija, y lo cuenta así en calendarios, Mediciones, Buscar, Colorear por y Problemas.
- **Editar en alzados y secciones.** Dibuje y mueva muros, huecos, niveles, cotas y notas directamente en un alzado o en una sección, con sus propios tamaños de hoja y cajetines. Consulte [Editar en alzados y secciones](topic:edit-in-elevations).
- **Hojas.** Cada hoja puede estar en horizontal o en vertical. Un cuadro {{ui:Escriba una escala}} está junto a la lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Puede arrastrar un dibujo colocado o desplazarlo ligeramente con las teclas de flecha, y {{ui:Formatos…}} › {{ui:Importar SVG…}} convierte su propio diseño de hoja en un cajetín con campos escritos por hoja.
- **Créditos de biblioteca en una hoja.** Un juego de dibujos con elementos de la Biblioteca obtiene un calendario de créditos de biblioteca que puede colocar en cualquier hoja. Consulte [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar sigue a la vista.** En la vista de Planta, la Biblioteca muestra {{ui:Colocar en el plano}}; en 3D muestra {{ui:Colocar en el modelo}}; en Dividir muestra un botón dividido con {{ui:Colocar en el plano}} como acción principal. Ambas formas escriben el mismo elemento IFC. También puede arrastrar una tarjeta de la Biblioteca hasta el plano o la vista 3D; con lápiz o dedo, mantenga pulsado y luego arrastre. Consulte [Colocar desde la Biblioteca](topic:place-from-library).

### Archivos y asistentes

- **Collada y Google Earth.** {{ui:Collada}} en la barra de herramientas (menú Archivo en los estilos de menú) escribe un .dae, o un .kmz colocado donde está el modelo en el mapa. Consulte [Exportar el modelo como Collada o para Google Earth](topic:collada).
- **Los asistentes pueden colocar dispositivos eléctricos.** Su asistente conectado tiene nuevas herramientas para añadir, listar, cambiar y eliminar dispositivos y para configurar luces. Los asistentes siguen desactivados hasta que los active en {{ui:Configuración}}. Consulte [Deje que un asistente de IA trabaje con su modelo](topic:assistants).
- **Escanear a BIM (complemento).** Desactivado de forma predeterminada y necesita el complemento Nubes de puntos. Propone forjados, muros, puertas y ventanas a partir de un escaneo, con la desviación medida de cada uno; aceptar es un solo paso de deshacer.

### Análisis

- **Datos de viento y de emplazamiento sísmico.** En la pestaña {{ui:Análisis}}: cargas de viento según ASCE 7-10 o 7-16 para un edificio cerrado rígido, con una fuerza en cada planta como casos de carga, y datos sísmicos del emplazamiento con una consulta a USGS y el espectro de diseño.
- **Seguimiento estructural y elementos finitos.** Comprobaciones de hormigón según ACI 318-19, fuerzas laterales equivalentes según ASCE 7-22, deriva de planta, losas y muros como placas, y combinaciones de carga de ASCE 7 y EN 1990. Nuestro propio motor de elementos finitos calcula cáscaras, tetraedros y análisis modal. Consulte [Comprobar elementos de hormigón y calcular cargas sísmicas](topic:concrete-and-seismic) y [Análisis de marcos](topic:frame-analysis).

### Otros complementos y documentos

- **Iluminación interior (complemento).** Coloca luminarias y escribe el lux como números en la planta de cada nivel, con una estimación de deslumbramiento y un informe imprimible.
- **Panel de documentos.** {{ui:Archivo}} › {{ui:Documentos…}} tiene retirar y devolver con un archivo de bloqueo, letras de revisión, estados de publicación e historial.
- **Regiones y acero.** Paquetes de dibujo y de normativa de construcción sudafricanos en el complemento de Normativa, y 976 perfiles de acero británicos en la tabla de secciones compartida.
- **Complementos gratuitos de impresión en resina.** Programa de corte (slicer), soportes y base, prueba de exposición, y los formatos de archivo GOO, SL1, Chitubox y Anycubic, todos desactivados de forma predeterminada.

## En todas las aplicaciones

- Al pasar el ratón sobre un botón o control aparece una información emergente de Bootstrap.
- La sugerencia inicial en un área de dibujo vacía tiene un botón de cierre; BimCraft recuerda que se cerró.
- La barra de pestañas de un panel que no cabe ahora se desplaza en lugar de cortarse.
- Con un documento abierto, la pestaña del navegador dice «<documento> - BimCraft | CadCraft».
- En {{ui:Configuración}} › {{ui:General}} › {{ui:Diseño}}, los diseños son una lista desplegable con opciones de dos líneas.
- La lista de idiomas de {{ui:Configuración}} ofrece más idiomas que en la 0.8; los idiomas distintos del inglés son borradores de traducción automática.

## Corregido

- **Mover funciona en escaleras**, y en rampas, barandillas, planos de cubierta, dispositivos independientes, imágenes y trazados.
- **Arrastrar un muro ya no deforma la habitación.** El agarre central mueve el muro en escuadra consigo mismo, y sus esquinas se deslizan a lo largo de los muros unidos. Mantenga pulsado {{key:Mod}} para el antiguo movimiento libre; {{ui:Cuadrar}} devuelve los 90 grados.
- **Un cambio de espesor o de tipo en un nodo unido** ahora mantiene cerrada la esquina en una L, en una T, en un nodo de tres muros y junto a un muro curvo.
- **Mover o copiar un grupo de habitaciones** mantiene unidos fuera del grupo los muros que estaban unidos.
- **Rehacer conserva la identidad de una cota de muro.**
- **Elegir un muro con Dibujo desactivado** ya no produce un error en Propiedades.
- **Renderizar recurre a WebGL** cuando la GPU no puede iniciarse, en lugar de detenerse.
- **La comprobación de EnergyPlus puede volver a activarse.**
- **Documentos se abre como un cuadro de diálogo centrado.** {{key:Esc}}, la X o un clic en la página atenuada lo cierran.
- **Los botones {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}} aparecen** en cuanto hay un modelo abierto, no solo después de haber activado Dibujo una vez.

## Limitaciones

- No se ha imprimido nada en equipos reales. Los soportes de resina son nuevos y no están probados.
- Los resultados de viento, sísmicos, de hormigón y de elementos finitos son ayudas de comprobación para un ingeniero, contrastadas con fórmulas cerradas, no con un edificio real.
- Escanear a BIM se probó con un edificio sintético, no con un escaneo real, y solo encuentra habitaciones de planta rectilínea.
- Collada no se ha abierto aquí en Blender ni en Google Earth.
- La estimación de iluminación se contrasta con nuestro propio trazado, no con otros programas de iluminación.
- Las cifras sudafricanas no están verificadas.
- Los estilos de unión de muros (a tope, a inglete y a escuadra) y la prioridad de capas no están implementados; las esquinas son a inglete.
- Los idiomas distintos del inglés son borradores de traducción automática.

Todo lo demás está en [Lo que aún no está implementado](topic:not-built-yet). Los cambios anteriores están en las notas de las versiones 0.8 y 0.8.1, más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Estos son los cambios de BimCraft 0.8 (01/11/2026) y 0.8.1 (02/11/2026), respecto a la 0.7. BimCraft ya puede responder preguntas sobre un edificio y ponerlo a prueba, con personas, sonido, agua, viento y terremotos, y dibujarlo con más herramientas; la 0.8.1 es una versión de correcciones.

### Novedades

**Poner a prueba el edificio**

- **Personas en el edificio.** La sección {{ui:Personas en el edificio}} del panel izquierdo hace recorrer una evacuación o las llegadas de un día normal por sus habitaciones, puertas y escaleras. Ve las colas donde el edificio se estrecha, el recorrido más largo hasta una salida desde cada habitación y cuánto tarda la última persona. Marque {{ui:Cerrada}} en una puerta para ver qué cambia, y marque {{ui:Mostrar las personas en la vista 3D}} para ver a los peatones. Los resultados van a Problemas. Es un modelo de multitudes aproximado para decisiones de diseño, no un certificado de protección contra incendios. Consulte [Hacer recorrer el edificio a personas](topic:people-in-the-building).
- **Acústica de habitaciones, y escucharla.** La sección {{ui:Acústica de habitaciones}} da el tiempo de reverberación de cada habitación por banda de octava (Sabine y Eyring) a partir de su tamaño y de los acabados que elija, y, con un objetivo propio, indica cuánta absorción cumpliría con él. {{ui:Reproducirlo en esta habitación}} reproduce una voz, un aplauso, notas pulsadas o su propio archivo de sonido a través de una respuesta al impulso calculada para la habitación. Las cifras de absorción son valores publicados típicos que puede sustituir. Consulte [Acústica de habitaciones](topic:room-acoustics).
- **Reproducción de inundación, viento y terremoto.** {{ui:Reproducción de peligros}} reproduce el agua subiendo por las habitaciones, la presión del viento en cada planta y un terremoto que sacude las plantas, en una planta o en un alzado, con un deslizador de tiempo. Modelos sencillos con sus supuestos en el panel; no es una comprobación normativa. Consulte [Reproducir una inundación, el viento o un terremoto](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Vista del ciclo de vida}} enumera las ventanas, puertas, acabados y la cubierta, con una vida útil cada uno, los años en que se reemplazan y, cuando escribe un coste por unidad, el coste por año y su valor actual. {{ui:Guardar el calendario (CSV)}} lo escribe en un archivo. Las vidas útiles son cifras de planificación. Consulte [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Comprobaciones de hormigón y sísmicas.** Los bloques {{ui:Elementos de hormigón}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} comprueban vigas y pilares de hormigón según ACI 318-19 y calculan fuerzas laterales equivalentes según ASCE 7-22 en forjados rígidos, con deriva de planta. Para que las revise un ingeniero. Consulte [Comprobar elementos de hormigón y calcular cargas sísmicas](topic:concrete-and-seismic).

**Comprobar e informar**

- **Comprobar con un IDS.** Cargue el archivo `.ids` que le entregó un cliente y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC. Abra {{ui:Comprobar con un IDS}} bajo {{ui:Comprobaciones del modelo}}. Consulte [Comprobar un modelo con el IDS de un cliente](topic:check-against-ids).
- **Etiquetas y calendarios.** Defina sus propias etiquetas, asígnelas a muchos elementos a la vez y cree calendarios cuyas columnas, filtros y agrupaciones las lean; las etiquetas se guardan en el IFC. Consulte [Etiquetas y calendarios](topic:tags-and-schedules).
- **Documentos a partir del modelo.** {{ui:Documentos a partir del modelo}} rellena una plantilla de especificación con el IFC abierto y la guarda como PDF, documento de Word o Markdown. Consulte [Documentos a partir del modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Comparar}} juzga cada elemento como construido, parcialmente construido, que falta o no alcanzado, y muestra el porcentaje construido. Consulte [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y coste.** El panel de Carbono suma el carbono incorporado a partir de una tabla de factores que puede editar, y el panel de Coste reparte los precios a lo largo del calendario 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no verificados. Consulte [Carbono incorporado y coste](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección cartográfica.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, una zona UTM, un nombre o su propia definición de proyección. Consulte [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

**Dibujar y editar**

- **Mover, Alinear y Distribuir.** Bajo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (la tecla {{key:M}} sola sigue siendo Medir). Mover copia mientras avanza con {{key:C}}, cada paso es un deshacer, y funciona en una sesión de Live TeamWork. Consulte [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Compilación}} › {{ui:Imagen}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Defina la escala con dos puntos, y mueva, gire, atenúe y bloquee la imagen. Un área copiada desde MarkupCraft se pega a la escala de su hoja. Consulte [Colocar una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, muros, puertas y habitaciones llegan como propuestas que usted conserva o rechaza una a una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Consulte [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calcar, plumas y escalera a partir de un croquis.** {{ui:Calcar}} muestra otro nivel en trazos discontinuos bajo la planta, {{ui:Plumas}} da a muros, puertas y ventanas su propio grosor de línea en una sola vista, y {{ui:Croquizar escalera}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Consulte [Calcar un nivel, plumas y una escalera a partir de un croquis](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y la parcela que encontró Dirección a emplazamiento de CivilCraft llegan como sugerencias; marque las que quiera añadir. Consulte [Partir del emplazamiento de CivilCraft](topic:site-from-civilcraft).
- **Planos de paneles.** {{ui:Compilación}} › {{ui:Planos de paneles}} encuadra muros, forjados y cubiertas en madera o en acero ligero conformado, y guarda una lista de corte como CSV y los planos de taller como PDF. Son valores de partida, no un diseño estructural. Consulte [Planos de paneles](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} encuentra símbolos eléctricos y de fontanería por nombre; la fuente {{ui:Plantas}} de la {{ui:Biblioteca}} lista unas 400 plantas con sus símbolos de planta. Consulte [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

**Tuberías, conductos y energía**

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y líneas de tubos dimensionadas a partir de una tabla de valores típicos de ejemplo que puede cambiar. Consulte [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel de Cálculos comprueba los tamaños de tubería de suministro y de conducto con caída de presión, encamina cables por bandejas y tubos y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores predeterminados están etiquetados; escriba los valores de su normativa. Consulte [Cálculos de tuberías, conductos, cables e iluminación](topic:mep-calculations).
- **Archivos PCF.** El **Exportar PCF** de la herramienta Tubería escribe los tramos para programas de tensiones en tuberías e isométricos, y un archivo PCF leído de nuevo dibuja su tubería. Consulte [Archivos de componentes de tubería](topic:piping-pcf).
- **Fotovoltaica solar.** Coloque matrices en cubiertas o en el suelo, dé sombra desde el modelo, estime la energía anual, compruebe los strings y genere datos de esquema unifilar. El módulo de partida y las pérdidas son genéricos. Consulte [Fotovoltaica solar](topic:solar-pv).
- **Archivo de EnergyPlus.** El panel Comprobar con EnergyPlus escribe el modelo como IDF para ejecutarlo en su propio EnergyPlus. Ejecutarlo en el navegador necesita una versión que usted aloje y cuya dirección escriba; BimCraft no la incluye. Consulte [Comprobar calefacción y refrigeración con EnergyPlus](topic:check-with-energyplus).

**Imágenes y archivos**

- **Elegir el motor de renderizado.** {{ui:Renderizar}} tiene una opción {{ui:Motor}}. Nuestros dos motores integrados (Rápido y Trazado de caminos) siguen siendo los predeterminados. **Abrir en** guarda la escena como archivo USD o glTF, y una carpeta de proyecto de Unreal como .zip; en CadCraft Studio, un complemento puede añadir un motor. El complemento de Unreal que abre el proyecto no se ha publicado. Consulte [Elegir el programa que dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft informa a Studio de cada paso terminado, para que Studio deshaga su último paso en la ventana que usó por última vez. Consulte [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en su archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que le faltan al abrirlo. Consulte [Complementos en su archivo](topic:add-ons-in-your-file).

**En todas las aplicaciones**

- **Conecte su IA.** Su propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué habitaciones están bajo una superficie dada. Studio no tiene IA propia. Consulte [Deje que un asistente de IA trabaje con su modelo](topic:assistants).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el predeterminado.
- **Dispositivos de entrada.** Los ajustes de trackpad, lápiz, ratón 3D, mando y MIDI se comparten entre todas las aplicaciones.
- **Problemas y Live.** El panel de avisos y las sesiones Live funcionan como antes, y las nuevas comprobaciones de arriba alimentan Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son borradores de traducción automática que aún no ha revisado un hablante nativo; los temas de ayuda están sobre todo en inglés.

### Corregido en 0.8.1

- **Diseño de cinta + Navegador de proyecto.** Insertar › Importar CAD, Insertar › Imagen y Gestionar › Unidades del proyecto decían «Aún no implementado en BimCraft». Imagen ahora abre la herramienta Imagen, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un dibujo…}} (DWG, DXF, PDF o escaneo), y Unidades del proyecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover y Alinear ejecutan las herramientas Mover y Alinear, Nivel abre {{ui:Agregar niveles…}}, Fases abre la sección de fases de renovación, y Materiales abre la biblioteca de materiales.
- **Sección de clases DWG.** Se leía como un tipo incorrecto; corregido en BimCraft y en las otras aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas pueden cambiar de idioma sin reiniciar. Esto aún no se ha probado en todas las plataformas; díganos si el idioma no cambia.
- **Script de paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta durante hasta 20 segundos y reintenta junto al paquete.

### Todavía no en esta versión

- **Ayudas de seguridad y de diseño.** Personas en el edificio no tiene un límite de recorrido de un código de edificación (usted escribe el límite) y no se ha comprobado a mano en un plano real. Las cifras de acústica, ciclo de vida y peligros son valores de planificación, no una comprobación normativa.
- **Escenarios climáticos y EnergyPlus.** No hay escenarios climáticos integrados: puede cargar un archivo de escenario para la simulación de inundación. La ejecución de EnergyPlus en el navegador no forma parte de esta versión.
- **Diseño de cinta.** Cómputo de materiales sigue como «No implementado», porque BimCraft no tiene una lista de cantidades de material, y otras 54 herramientas de la cinta en gris aún no tienen una herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:Más información}} y después {{ui:Ejecutar de todos modos}}, y macOS requiere clic derecho y luego {{ui:Abierta}}. La versión para iPad e iPhone no se recompiló para la 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas antiguas del navegador de BimCraft siguen fallando en nuestra página de pruebas, como ocurría antes de la 0.8.1.

Todo lo demás está en [Lo que aún no está implementado](topic:not-built-yet). Los cambios anteriores están en [Novedades de la 0.7](topic:whats-new-0-7).
