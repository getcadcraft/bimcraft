---
title: Novedades de la versión 0.9
summary: Formas de muro, dividir, desfasar, estirar y bloquear a rejilla, niveles bajo tierra, cotas de rejilla y Medir en la planta, vistas duplicadas con estilos de trabajo y tablas de plumillas, Reportar como, exportación Collada y Google Earth, Escaneo a BIM, análisis de viento y sísmico, complementos de impresión en resina.
keywords: novedades, 0.9, notas de la versión, formas de muro, rectángulo, polígono, arco, elegir líneas, calcar contorno, desfase, unión, estirar por recuadro, dividir muro, separación, volver a unir, bloquear a rejilla, crecer desde, medir desde, agregar un nivel debajo, sótano, comando de nivel, cotas de rejilla, medir en la planta, estilo de trabajo, duplicar vista, copia propia, vista vinculada, tabla de plumillas, imprimir como se ve, reportar como, escala, importar SVG, colocar en la planta, colocar en el modelo, collada, dae, kmz, google earth, escaneo a BIM, carga de viento, sísmico, elementos finitos, panel de documentos, impresión en resina, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, tablas, mover, alinear, distribuir, imagen, fondo, escaneo a muros, sitio desde civilcraft, dibujos de paneles, estructura, solar, fotovoltaico, dividir, vrf, fan coil, dimensionado de tubería, bandeja de cables, iluminancia, concreto, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, costo, energyplus, motor de render, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumillas, cinta, navegador del proyecto, presentación
from: 5624fe88
---

Esto es lo que cambió en BimCraft 0.9, comparado con 0.8.1. Los dos grandes temas son una herramienta de muro de verdad y vistas que se comportan como esperan las personas que vienen de los grandes programas BIM. A su alrededor vienen la exportación Collada, asistentes que pueden colocar dispositivos eléctricos, Escaneo a BIM, y el trabajo de viento, sismo y elementos finitos en la pestaña {{ui:Análisis}}.

## Nuevo

### Muros

- **Dibujar formas completas.** En {{ui:Dibujo}}, abra {{ui:Formas}} (o elija una forma en la lista Forma de la fila Muro) para un rectángulo, un rectángulo girado, un polígono de 3 a 64 lados, un arco por centro, un arco tangente, muros sobre líneas elegidas, o muros alrededor de un área cerrada en la que haga clic. Un rectángulo son cuatro muros con cuatro esquinas unidas y un paso de deshacer. Vea [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools).
- **Definir antes de dibujar, cambiar después.** La fila Muro tiene {{ui:Desfase}} y {{ui:Unión}} (desmárquelo para dibujar muros exentos). Después use {{ui:Desfase}}, {{ui:Estirar por recuadro}} y {{ui:Alinear y bloquear}} en los muros dibujados. Un muro movido o estirado conserva sus puertas, ventanas y cotas. Cada receta es un paso de deshacer.
- **Cortar muros.** {{ui:Dividir}}, {{ui:Separación}}, {{ui:Extremos libres}}, {{ui:Eliminar segmento}} y {{ui:Volver a unir}} cortan un muro con un clic o donde otro muro lo cruza. Un corte que atraviese una puerta se rechaza. Vea [Formas de muro, dividir, desfasar, estirar y bloquear](topic:wall-tools).
- **Bloquear muros a líneas de rejilla.** Elija un muro a lo largo de una línea de rejilla y marque {{ui:Bloquear a rejilla}} en {{ui:Propiedades}}. Con la herramienta Rejilla activa, escriba una distancia en {{ui:Mover en}} para una línea elegida, y los muros bloqueados la siguen en un paso de deshacer.
- **Dar forma a un muro.** En {{ui:Propiedades}} de un muro puede unir su parte superior o su base a una cubierta, piso o plafón, editar su contorno de alzado, inclinarlo, o cortar una abertura de muro sin puerta ni ventana. Vea [Dar forma a un muro](topic:wall-shape).
- **La longitud dice qué extremo se mantiene.** {{ui:Crecer desde}} define si el inicio, el final o el centro se quedan quietos cuando cambia la longitud.
- **La longitud y la cota de la planta coinciden.** {{ui:Medir desde}} (línea central, cara interior o cara exterior) controla tanto el campo Longitud como las cotas de muro de la planta. Empieza en la línea central, así que las cotas de muro de la planta ahora leen la línea central donde antes leían la cara exterior. Cámbielo en la fila Muro, en {{ui:Propiedades}} o en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Muros}}.

### Niveles, rejillas y medición

- **Agregar un nivel debajo.** {{ui:Agregar un nivel debajo}} en el panel {{ui:Niveles}} agrega un nivel bajo el más bajo, de la misma altura que él, a una cota negativa (Nivel -1, Nivel -2). Nada más se mueve. {{ui:Agregar niveles…}} ahora acepta alturas negativas. Si escribe LEVEL, LEVELS, STOREY o STOREYS en la línea de comandos, se abre {{ui:Agregar niveles…}}, y hay un botón {{ui:Niveles}} en los menús y en las pestañas de cinta. Vea [Sitios, edificios y niveles](topic:site-building-and-levels).
- **Cotas de rejilla en la planta.** Con la herramienta {{ui:Retícula}} activa, marque {{ui:Dimensiones}} para dibujar la separación entre líneas vecinas y el tamaño total más allá de las burbujas, en la planta de cada nivel. Vea [Acotar una rejilla](topic:grid-dimensions).
- **Medir en la planta.** {{ui:Medir}} en el grupo {{ui:Dibujo}} da una distancia con las diferencias en X e Y entre dos clics. No se guarda nada en el modelo. Vea [Medir en la planta](topic:measure-on-the-plan).
- **Cambiar varias columnas a la vez.** Elija columnas junto con un muro, y la selección lista cada tipo con {{ui:Conservar solo estos}}. Un clic conserva las columnas y muestra sus campos comunes.
- **Una sola unidad de visualización en todas partes.** Las coordenadas, las mediciones, las secciones, las escalas de hoja, las cargas y resultados de la pestaña de marco y el texto de Problemas siguen la unidad que elija. Las exportaciones se quedan en SI.

### Vistas, hojas e impresión

- **Estilo de trabajo.** {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Forma de trabajo}} elige si cada vista tiene sus propias anotaciones y tablas de plumillas, o si las comparte. Vea [Forma de trabajo, vistas duplicadas, plumillas en papel, Reportar como y plantillas](topic:working-style).
- **Duplicar una vista.** Las plantas, las plantas de cielo, las llamadas, los alzados y las secciones se pueden duplicar como {{ui:Copia propia}} o {{ui:Vinculada}}; {{ui:Hacerla copia propia}} vuelve independiente una vinculada. Vea [Forma de trabajo, vistas duplicadas, plumillas en papel, Reportar como y plantillas](topic:working-style).
- **Imprimir como se ve, o con una tabla de plumillas.** Los cambios de plumilla se guardan en el IFC con la vista, y las hojas y los PDF los dibujan como lo hace la pantalla. El mismo tema cubre las tablas de plumillas.
- **Reportar como.** {{ui:Reportar como}} en {{ui:Propiedades}} escribe una losa dibujada como carretera, un muro como panel o una cubierta como rampa en el IFC, con la clase que elija, y la cuenta así en tablas, cantidades, Buscar, Color por y Problemas.
- **Editar en alzados y secciones.** Dibuje y mueva muros, aberturas, niveles, cotas y notas directamente en un alzado o una sección, con sus propios tamaños de hoja y cajetines. Vea [Editar en alzados y secciones](topic:edit-in-elevations).
- **Hojas.** Cada hoja puede ser horizontal o vertical. Una casilla {{ui:Escribir una escala}} está junto a la lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Puede arrastrar un dibujo colocado o moverlo con las teclas de flecha, y {{ui:Formatos…}} › {{ui:Importar SVG…}} convierte su propio diseño de hoja en un cajetín con campos que se escriben por hoja.
- **Créditos de biblioteca en una hoja.** Un juego de dibujos con elementos de biblioteca recibe una tabla de créditos de biblioteca que puede colocar en cualquier hoja. Vea [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar según la vista.** En la vista de Planta, la Biblioteca muestra {{ui:Colocar en el plano}}; en 3D, muestra {{ui:Colocar en el modelo}}; en Dividir, muestra un botón dividido con {{ui:Colocar en el plano}} como acción principal. Ambas formas escriben el mismo elemento IFC. También puede arrastrar una tarjeta de la Biblioteca hasta la planta o la vista 3D; con lápiz o dedo, mantenga pulsado y luego arrastre. Vea [Colocar desde la Biblioteca](topic:place-from-library).

### Archivos y asistentes

- **Collada y Google Earth.** {{ui:Collada}} en la barra de herramientas (menú Archivo en los estilos de menú) escribe un .dae, o un .kmz colocado donde está el modelo en el mapa. Vea [Exportar el modelo como Collada o para Google Earth](topic:collada).
- **Los asistentes pueden colocar dispositivos eléctricos.** Su asistente conectado tiene nuevas herramientas para agregar, listar, cambiar y eliminar dispositivos, y para configurar luces. Los asistentes siguen apagados hasta que los active en {{ui:Configuración}}. Vea [Dejar que un asistente de IA trabaje con su modelo](topic:assistants).
- **Escaneo a BIM (complemento).** Apagado por defecto y necesita el complemento de nubes de puntos. Propone pisos, muros, puertas y ventanas a partir de un escaneo, con la desviación medida de cada uno; aceptarlos es un paso de deshacer.

### Análisis

- **Datos de viento y sismo del sitio.** En la pestaña {{ui:Análisis}}: cargas de viento según ASCE 7-10 o 7-16 para un edificio rígido cerrado, con una fuerza en cada piso como casos de carga, y datos sísmicos del sitio con una consulta a USGS y el espectro de diseño.
- **Seguimiento estructural y elementos finitos.** Revisiones de concreto según ACI 318-19, fuerzas laterales equivalentes según ASCE 7-22, deriva por nivel, losas y muros como placas, y combinaciones de carga de ASCE 7 y EN 1990. Nuestro propio motor de elementos finitos hace cáscaras, tetraedros y análisis modal. Vea [Revisar elementos de concreto y generar cargas sísmicas](topic:concrete-and-seismic) y [Análisis de marcos](topic:frame-analysis).

### Otros complementos y documentos

- **Iluminación interior (complemento).** Coloca luminarias y escribe el lux como números en la planta de cada nivel, con una estimación de deslumbramiento y un informe imprimible.
- **Panel de documentos.** {{ui:Archivo}} › {{ui:Documentos…}} tiene retiro y devolución con un archivo de bloqueo, letras de revisión, estados de liberación e historial.
- **Regiones y acero.** Paquetes de dibujo y de normativa de construcción de Sudáfrica en el complemento de Regulaciones, y 976 tamaños de acero del Reino Unido en la tabla de secciones compartida.
- **Complementos gratuitos de impresión en resina.** Cortador, soportes y balsa, prueba de exposición, y los formatos de archivo GOO, SL1, Chitubox y Anycubic, todos apagados por defecto.

## En todas las aplicaciones

- Al pasar el cursor sobre un botón o un control aparece una sugerencia de Bootstrap.
- La sugerencia de inicio en un área de dibujo vacía tiene un botón de cierre; BimCraft recuerda que la cerró.
- La franja de pestañas de un panel que no cabe ahora se desplaza en lugar de cortarse.
- Con un documento abierto, la pestaña del navegador dice "<documento> - BimCraft | CadCraft".
- En {{ui:Configuración}} › {{ui:General}} › {{ui:Diseño}}, los diseños son una lista desplegable de opciones de dos líneas.
- La lista de idiomas en {{ui:Configuración}} ofrece más idiomas que en la 0.8; los idiomas distintos del inglés son borradores de máquina.

## Corregido

- **Mover funciona en escaleras,** y en rampas, barandales, planos de cubierta, dispositivos sin soporte, imágenes y trayectorias.
- **Arrastrar un muro ya no deforma el cuarto.** El pinzamiento central mueve el muro en escuadra consigo mismo, y sus esquinas se deslizan a lo largo de los muros unidos. Mantenga {{key:Mod}} para el movimiento libre de antes; {{ui:Escuadrar}} devuelve los 90 grados.
- **Un cambio de espesor o de tipo en un nodo unido** ahora mantiene cerrada la esquina en una L, una T, un nodo de tres muros y junto a un muro curvo.
- **Mover o copiar un grupo de cuartos** mantiene unidos fuera del grupo los muros que estaban unidos.
- **Redo conserva la identidad de una cota de muro.**
- **Elegir un muro con Dibujo desactivado** ya no produce un error en Propiedades.
- **El render cambia a WebGL** cuando la GPU no puede iniciarse, en lugar de detenerse.
- **La revisión con EnergyPlus puede volver a activarse.**
- **Documentos se abre como un cuadro de diálogo centrado.** {{key:Esc}}, la X o un clic en la página atenuada lo cierran.
- **Los botones {{ui:Planta}}, {{ui:Dividir}} y {{ui:3D}} aparecen** en cuanto hay un modelo abierto, no solo después de haber activado Dibujo una vez.

## Límites honestos

- Nada se imprimió en hardware real. Los soportes para resina son nuevos y no están probados.
- Los resultados de viento, sismo, concreto y elementos finitos son ayudas de revisión para un ingeniero, verificadas contra formas cerradas, no contra un edificio real.
- Escaneo a BIM se probó con un edificio sintético, no con un escaneo real, y solo encuentra cuartos rectilíneos.
- Collada no se ha abierto aquí en Blender ni en Google Earth.
- La estimación de iluminación se verificó contra nuestro propio trazado, no contra otros programas de iluminación.
- Las cifras sudafricanas no están verificadas.
- Los estilos de unión de muros (a tope, inglete, a escuadra) y la prioridad de capa no están hechos; las esquinas llevan inglete.
- Los idiomas distintos del inglés son borradores de máquina.

Todo lo demás está en [Lo que aún no está hecho](topic:not-built-yet). Los cambios anteriores están en las notas de la 0.8 y la 0.8.1, más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en BimCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. BimCraft ya puede responder preguntas sobre un edificio y ponerlo a prueba, con personas, sonido, agua, viento y sismos, y dibujarlo con más herramientas; la 0.8.1 es una versión de correcciones.

### Nuevo

**Probar el edificio**

- **Personas en el edificio.** La sección {{ui:Personas en el edificio}} del panel izquierdo hace caminar una evacuación o las llegadas de un día normal a través de sus cuartos, puertas y escaleras. Ve las colas donde el edificio se estrecha, la caminata más larga hasta una salida desde cada cuarto y cuánto tarda la última persona. Marque {{ui:Cerrar}} en una puerta para ver qué cambia, y marque {{ui:Mostrar a las personas en la vista 3D}} para ver a los caminantes. Los hallazgos van a Problemas. Es un modelo de multitud grueso para decisiones de diseño, no un certificado de seguridad contra incendios. Vea [Recorrer personas por el edificio](topic:people-in-the-building).
- **Acústica de cuartos, y escucharla.** La sección {{ui:Acústica de cuartos}} da el tiempo de reverberación de cada cuarto por banda de octava (Sabine y Eyring) a partir de su tamaño y de los acabados que elija, y con una meta propia indica cuánta absorción cumpliría con ella. {{ui:Reproducir en este cuarto}} reproduce una voz, un aplauso, notas pulsadas o su propio archivo de sonido a través de una respuesta al impulso calculada para el cuarto. Las cifras de absorción son valores publicados típicos para que usted los reemplace. Vea [Acústica de cuartos](topic:room-acoustics).
- **Reproducción de inundación, viento y terremoto.** {{ui:Reproducción de amenazas}} reproduce agua que sube por los cuartos, la presión del viento en cada nivel y un terremoto que sacude los niveles, en una planta o un alzado con un control de tiempo. Modelos sencillos con sus supuestos en el panel; no es una revisión de código. Vea [Reproducir una inundación, viento o terremoto](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Vista del ciclo de vida}} lista las ventanas, puertas, acabados y la cubierta con una vida útil cada uno, los años en que se reemplazan y, cuando escribe un costo por unidad, el costo por año y su valor presente. {{ui:Guardar el programa (CSV)}} lo escribe. Las vidas útiles son cifras de planeación. Vea [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Revisiones de concreto y sísmicas.** Los bloques {{ui:Miembros de concreto}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} revisan vigas y columnas de concreto según ACI 318-19 y generan fuerzas laterales equivalentes según ASCE 7-22 en pisos rígidos, con deriva por nivel. Para que un ingeniero las revise. Vea [Revisar elementos de concreto y generar cargas sísmicas](topic:concrete-and-seismic).

**Revisar e informar**

- **Revisar contra un IDS.** Cargue el archivo `.ids` que le dio un cliente y vea cada elemento que no cumple en Problemas, antes de entregar el IFC. Abra {{ui:Revisar contra un IDS}} bajo {{ui:Revisiones del modelo}}. Vea [Revisar un modelo contra el IDS de un cliente](topic:check-against-ids).
- **Etiquetas y tablas.** Defina sus propias etiquetas, asígnelas a muchos elementos a la vez y cree tablas cuyas columnas, filtros y grupos las lean; las etiquetas se guardan en el IFC. Vea [Etiquetas y tablas](topic:tags-and-schedules).
- **Documentos desde el modelo.** {{ui:Documentos desde el modelo}} llena una plantilla de especificación a partir del IFC abierto y la guarda como PDF, documento de Word o Markdown. Vea [Documentos desde el modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Comparar}} juzga cada elemento como construido, parcialmente construido, faltante o no alcanzado, y muestra el porcentaje construido. Vea [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y costo.** El panel de Carbono suma el carbono incorporado a partir de una tabla de factores que puede editar, y el panel de Costo reparte los precios sobre el programa 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no revisados. Vea [Carbono incorporado y costo](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, una zona UTM, un nombre o su propia definición de proyección. Vea [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

**Dibujar y editar**

- **Mover, Alinear y Distribuir.** Bajo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (la tecla {{key:M}} sola sigue siendo Medir). Mover copia mientras avanza con {{key:C}}, cada paso es un deshacer, y viaja en una sesión de Live TeamWork. Vea [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Compilación}} › {{ui:Imagen}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Defina la escala con dos puntos, y mueva, gire, desvanezca y bloquee la imagen. Un área copiada en MarkupCraft se pega a la escala de su hoja. Vea [Poner una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, los muros, puertas y cuartos llegan como propuestas que conserva o rechaza una por una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Vea [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calcar, plumillas y escalera por croquis.** {{ui:Calcar}} muestra otro nivel punteado bajo la planta, {{ui:Plumillas}} da a los muros, puertas y ventanas su propio grosor de línea en una sola vista, y {{ui:Escalera por croquis}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Vea [Calcar un nivel, plumillas y una escalera a partir de un croquis](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y el predio que encontró Dirección a sitio de CivilCraft llegan como sugerencias; marque las que quiera agregar. Vea [Empezar desde el sitio de CivilCraft](topic:site-from-civilcraft).
- **Dibujos de paneles.** {{ui:Compilación}} › {{ui:Dibujos de paneles}} encuadra muros, pisos y cubiertas en madera o en acero liviano, y guarda una lista de corte en CSV y dibujos de taller en PDF. Son valores de partida, no un diseño estructural. Vea [Dibujos de paneles](topic:panel-drawings).
- **Plantilla de símbolos y plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} encuentra símbolos eléctricos y sanitarios por nombre; el origen {{ui:Plantas}} de la {{ui:Biblioteca}} lista unas 400 plantas con símbolos de planta. Vea [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

**Tuberías, ductos y energía**

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y tuberías de refrigerante dimensionadas a partir de una tabla de valores típicos de ejemplo que puede cambiar. Vea [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel de Cálculos revisa el dimensionado de tuberías y ductos de suministro con caída de presión, enruta cables por charolas y conduits y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores por defecto están marcados; escriba los valores de su código. Vea [Cálculos de tuberías, ductos, cables y luz](topic:mep-calculations).
- **Archivos PCF.** {{ui:Exportar PCF}} de la herramienta Tubería escribe los tramos para programas de esfuerzos en tuberías e isométricos, y un archivo PCF leído de vuelta dibuja su tubería. Vea [Archivos de componentes de tubería](topic:piping-pcf).
- **Energía solar fotovoltaica.** Coloque arreglos en techos o en el terreno, dé sombra desde el modelo, estime la energía anual, revise cadenas y genere datos de un diagrama unifilar. El módulo inicial y las pérdidas son genéricos. Vea [Energía solar fotovoltaica](topic:solar-pv).
- **Archivo de EnergyPlus.** El panel Revisar con EnergyPlus escribe el modelo como IDF para ejecutarlo en su propio EnergyPlus. Ejecutarlo en el navegador necesita una versión que usted aloje y cuya dirección escriba; BimCraft no la incluye. Vea [Revisar calefacción y enfriamiento con EnergyPlus](topic:check-with-energyplus).

**Imágenes y archivos**

- **Elegir el motor de render.** {{ui:Renderizar}} tiene una opción {{ui:Motor}}. Nuestros dos motores integrados (Rápido y Trazador de trayectorias) siguen siendo el valor predeterminado. {{ui:Abrir en}} guarda la escena como archivo USD o glTF, y una carpeta de proyecto de Unreal como .zip; en CadCraft Studio un complemento puede agregar un motor. El complemento de Unreal que abre el proyecto no se ha publicado. Vea [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft le indica a Studio cada paso terminado para que Studio pueda deshacer su último paso en la ventana que usó por última vez. Vea [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en su archivo.** Un IFC registra qué complementos escribieron en él, y le ofrece los que no tiene al abrirlo. Vea [Complementos en su archivo](topic:add-ons-in-your-file).

**En todas las aplicaciones**

- **Conecte su IA.** Su propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué cuartos están bajo cierta área. Studio no tiene IA propia. Vea [Dejar que un asistente de IA trabaje con su modelo](topic:assistants).
- **Barras de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el valor predeterminado.
- **Dispositivos de entrada.** Las configuraciones de trackpad, lápiz, mouse 3D, control y MIDI son compartidas por todas las aplicaciones.
- **Problemas y Live.** El panel de advertencias y las sesiones Live funcionan como antes, con las nuevas revisiones de arriba alimentando Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son borradores de máquina que todavía no lee un hablante nativo; los temas de ayuda están en su mayoría en inglés.

### Corregido en 0.8.1

- **Diseño de cinta + panel de Proyecto.** Insertar › Importar CAD, Insertar › Imagen y Gestionar › Unidades del proyecto decían "Todavía no está en BimCraft". Imagen ahora abre la herramienta Imagen, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un dibujo…}} (DWG, DXF, PDF o un escaneo), y Unidades del proyecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover y Alinear ejecutan las herramientas Mover y Alinear, Nivel abre {{ui:Agregar niveles…}}, Fases abre la sección de fases de renovación, y Materiales abre la biblioteca de materiales.
- **Sección de clases de DWG.** Se leía como el tipo equivocado; corregido en BimCraft y en las otras aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas ahora pueden cambiar de idioma sin reiniciar. Esto todavía no se ha probado en todas las plataformas; avísenos si el idioma no cambia.
- **Script de paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta hasta 20 segundos y reintenta junto al paquete.

### No incluido en esta versión todavía

- **Herramientas de seguridad y diseño.** Personas en el edificio no tiene un límite de distancia de recorrido según un código de construcción (usted escribe el límite) y no se ha revisado a mano en un plano real. Las cifras de acústica, de ciclo de vida y de peligros son valores de planeación, no una revisión de código.
- **Futuros climáticos y EnergyPlus.** No hay futuros climáticos integrados: puede cargar un archivo de escenario para la corrida de inundación. La corrida de EnergyPlus en el navegador no forma parte de esta versión.
- **Diseño de cinta.** Lista de materiales se queda "No construido" porque BimCraft no tiene una lista de cantidades de material, y 54 herramientas de cinta atenuadas más no tienen detrás una herramienta de BimCraft.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:Más información}}, luego {{ui:Ejecutar de todos modos}}, y macOS pide clic derecho y luego {{ui:Abrir}}. La versión para iPad y iPhone no se recompiló para la 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas antiguas del navegador de BimCraft siguen fallando en nuestra página de pruebas, como antes de la 0.8.1.

Todo lo demás está en [Lo que aún no está hecho](topic:not-built-yet). Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
