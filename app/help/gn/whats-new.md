---
title: Novedades en 0.9
summary: Formas de muro, dividir, desplazar, estirar y bloquear a grilla, niveles bajo tierra, cotas de grilla y Medir en la planta, vistas duplicadas con estilos de trabajo y tablas de plumas, Report as, exportación Collada y Google Earth, Scan to BIM, análisis de viento y sísmico, complementos de impresión en resina.
keywords: novedades, 0.9, notas de versión, formas de muro, rectángulo, polígono, arco, líneas elegidas, trazar contorno, desplazamiento, unión, estirar en caja, alinear y bloquear, dividir muro, hueco, reunir, bloquear a grilla, crecer desde, medir desde, agregar un nivel bajo, sótano, comando de nivel, cotas de grilla, medir en la planta, estilo de trabajo, duplicar vista, copia propia, vista vinculada, tabla de plumas, imprimir como se ve, report as, escribir una escala, importar svg, colocar en planta, colocar en modelo, collada, dae, kmz, google earth, scan to bim, carga de viento, sísmico, elementos finitos, panel de documentos, impresión en resina, novedades, qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, planillas, mover, alinear, distribuir, imagen, fondo, escaneo a muros, sitio desde civilcraft, paneles, marco, solar, fv, dividir, vrf, fan coil, dimensionado de caños, bandeja de cables, iluminancia, hormigón, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, costo, energyplus, motor de render, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, panel de proyecto, diseño
from: 5624fe88
---

Esto es lo que cambió en BimCraft 0.9, comparado con 0.8.1. Los dos temas grandes son una herramienta de muros real y vistas que se comportan como esperan las personas que vienen de los grandes programas BIM. Alrededor de ellos vienen la exportación Collada, asistentes que pueden colocar dispositivos eléctricos, Scan to BIM, y trabajo de viento, sismo y elementos finitos en la pestaña {{ui:Analysis}}.

## Nuevo

### Muros

- **Dibujar formas completas.** En {{ui:Draw}}, abrí {{ui:Shapes}} (o elegí una forma en la lista Forma de la fila Muro) para un rectángulo, un rectángulo girado, un polígono de 3 a 64 lados, un arco por centro, un arco tangente, muros sobre líneas elegidas, o muros alrededor de un área cerrada en la que hacés clic. Un rectángulo son cuatro muros con cuatro esquinas unidas y un paso de deshacer. Ver [Formas de muro, dividir, desplazar, estirar y bloquear](topic:wall-tools).
- **Fijar antes de dibujar, cambiar después.** La fila Muro tiene {{ui:Offset}} y {{ui:Join}} (desmarcalo para dibujar muros independientes). Después usá {{ui:Offset}}, {{ui:Box stretch}} y {{ui:Align and lock}} en los muros dibujados. Un muro movido o estirado conserva sus puertas, ventanas y cotas. Cada receta es un paso de deshacer.
- **Cortar muros.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} y {{ui:Rejoin}} cortan un muro con un clic o donde otro muro lo cruza. Un corte a través de una puerta se rechaza. Ver [Formas de muro, dividir, desplazar, estirar y bloquear](topic:wall-tools).
- **Bloquear muros a líneas de grilla.** Elegí un muro a lo largo de una línea de grilla y marcá {{ui:Lock to grid}} en {{ui:Properties}}. Con la herramienta Grid activada, escribí una distancia en {{ui:Move by}} para una línea elegida, y los muros bloqueados la siguen en un paso de deshacer.
- **Dar forma a un muro.** En {{ui:Properties}} de un muro podés unir su parte superior o base a un techo, piso o cielorraso, editar su contorno de elevación, inclinarlo, o cortar una abertura de muro sin puerta ni ventana. Ver [Dar forma a un muro](topic:wall-shape).
- **El largo dice qué extremo se mantiene.** {{ui:Grow from}} fija si se queda quieto el inicio, el final o el centro cuando cambiás el largo.
- **El largo y la cota de planta coinciden.** {{ui:Measure from}} (eje, cara interior o cara exterior) controla tanto el campo Length como las cotas de muro de la planta. Empieza en el eje, así que las cotas de muro de la planta ahora leen el eje donde antes leían la cara exterior. Cambialo en la fila Muro, en {{ui:Properties}} o en {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Niveles, grillas y medición

- **Agregar un nivel bajo.** {{ui:Add a level below}} en el panel {{ui:Levels}} agrega un nivel debajo del más bajo, tan alto como él, con una elevación negativa (Level -1, Level -2). Nada más se mueve. {{ui:Add levels…}} ahora acepta alturas negativas. Si escribís LEVEL, LEVELS, STOREY o STOREYS en la línea de comandos se abre {{ui:Add levels…}}, y hay un botón {{ui:Levels}} en los menús y las pestañas de cinta. Ver [Sitios, edificios y niveles](topic:site-building-and-levels).
- **Cotas de grilla en la planta.** Con la herramienta {{ui:Grid}} activada, marcá {{ui:Dimensions}} para dibujar el espaciado entre líneas vecinas y el tamaño total más allá de las burbujas en la planta de cada nivel. Ver [Acotar una grilla](topic:grid-dimensions).
- **Medir en la planta.** {{ui:Measure}} en el grupo {{ui:Draw}} da una distancia con las diferencias X e Y entre dos clics. No se guarda nada en el modelo. Ver [Medir en la planta](topic:measure-on-the-plan).
- **Cambiar varias columnas a la vez.** Elegí columnas junto con un muro y la selección lista cada tipo con {{ui:Keep only these}}. Un clic mantiene las columnas y muestra sus campos comunes.
- **Una unidad de visualización en todas partes.** Las coordenadas, mediciones, cortes, escalas de hoja, las cargas y resultados de la pestaña de marco, y el texto de Problemas siguen la unidad que elegís. Las exportaciones quedan en SI.

### Vistas, hojas e impresión

- **Estilo de trabajo.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} elige entre que cada vista tenga sus propias anotaciones y tablas de plumas, o que las compartan. Ver [Estilo de trabajo, vistas duplicadas, plumas en papel, Report as y plantillas](topic:working-style).
- **Duplicar una vista.** Plantas, planos de cielorraso, llamadas, elevaciones y cortes se pueden duplicar como {{ui:Own copy}} o {{ui:Linked}}; {{ui:Make own copy}} convierte una vinculada en independiente. Ver [Estilo de trabajo, vistas duplicadas, plumas en papel, Report as y plantillas](topic:working-style).
- **Imprimir como se ve, o con una tabla de plumas.** Las sobrescrituras de plumas se guardan en el IFC con la vista, y las hojas y los PDF las dibujan como las dibuja la pantalla. El mismo tema cubre las tablas de plumas.
- **Report as.** {{ui:Report as}} en {{ui:Properties}} escribe una losa dibujada como camino, un muro como panel o un techo como rampa en el IFC como la clase que elijas, y lo cuenta así en planillas, Cantidades, Buscar, Color por y Problemas.
- **Editar en elevaciones y cortes.** Dibujá y moví muros, aberturas, niveles, cotas y notas directamente en una elevación o corte, con tus propios tamaños de hoja y cajetines. Ver [Editar en elevaciones y cortes](topic:edit-in-elevations).
- **Hojas.** Cada hoja puede ser horizontal o vertical. Una casilla {{ui:Type a scale}} está junto a la lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Podés arrastrar un dibujo colocado o moverlo con las teclas de flecha, y {{ui:Formats…}} › {{ui:Import SVG…}} convierte tu propio diseño de hoja en un cajetín con campos escritos por hoja.
- **Créditos de biblioteca en una hoja.** Un juego de dibujos con elementos de Biblioteca recibe una planilla de créditos de biblioteca que podés colocar en cualquier hoja. Ver [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar sigue a la vista.** En la vista de Planta, la Biblioteca muestra {{ui:Place in plan}}; en 3D muestra {{ui:Place in model}}; en Split muestra un botón dividido con {{ui:Place in plan}} como acción principal. Ambas formas escriben el mismo elemento IFC. También podés arrastrar una tarjeta de la Biblioteca a la planta o a la vista 3D; con lápiz o dedo, mantené presionado y después arrastrá. Ver [Colocar desde la Biblioteca](topic:place-from-library).

### Archivos y asistentes

- **Collada y Google Earth.** {{ui:Collada}} en la barra de herramientas (menú Archivo en los estilos de menú) escribe un .dae, o un .kmz ubicado donde está el modelo en el mapa. Ver [Exportar el modelo como Collada o para Google Earth](topic:collada).
- **Los asistentes pueden colocar dispositivos eléctricos.** Tu asistente conectado tiene herramientas nuevas para agregar, listar, cambiar y eliminar dispositivos y para fijar luces. Los asistentes quedan desactivados hasta que los actives en {{ui:Settings}}. Ver [Dejar que un asistente de IA trabaje con tu modelo](topic:assistants).
- **Scan to BIM (complemento).** Desactivado por defecto y necesita el complemento Point clouds. Propone pisos, muros, puertas y ventanas a partir de un escaneo con la desviación medida de cada uno; aceptar es un paso de deshacer.

### Análisis

- **Datos de viento y sismo del sitio.** En la pestaña {{ui:Analysis}}: cargas de viento según ASCE 7-10 o 7-16 para un edificio cerrado rígido, con una fuerza en cada piso como casos de carga, y datos de sismo del sitio con una consulta a USGS y el espectro de diseño.
- **Seguimiento estructural y elementos finitos.** Verificaciones de hormigón según ACI 318-19, fuerzas laterales equivalentes según ASCE 7-22, deriva de piso, losas y muros como placas, y combinaciones de cargas de ASCE 7 y EN 1990. Nuestro propio motor de elementos finitos hace cáscaras, tetraedros y análisis modal. Ver [Verificar elementos de hormigón y calcular cargas sísmicas](topic:concrete-and-seismic) y [Análisis de pórticos](topic:frame-analysis).

### Otros complementos y documentos

- **Iluminación interior (complemento).** Coloca luminarias y escribe el lux como números en la planta de cada nivel, con una estimación de deslumbramiento y un informe imprimible.
- **Panel de documentos.** {{ui:File}} › {{ui:Documents…}} tiene retirar y devolver con un archivo de bloqueo, letras de revisión, estados de liberación e historial.
- **Regiones y acero.** Paquetes de dibujo y reglamentos de construcción de Sudáfrica en el complemento Regulations, y 976 medidas de acero del Reino Unido en la tabla de secciones compartida.
- **Complementos gratuitos de impresión en resina.** Slicer, soportes y balsa, prueba de exposición, y los formatos de archivo GOO, SL1, Chitubox y Anycubic, todos desactivados por defecto.

## En todas las aplicaciones

- Pasar el mouse sobre un botón o control muestra una sugerencia de Bootstrap.
- La sugerencia de inicio en un área de dibujo vacía tiene un botón de cierre; BimCraft recuerda que se cerró.
- La barra de pestañas de un panel que no entra ahora se desplaza en lugar de cortarse.
- Con un documento abierto, la pestaña del navegador dice "<documento> - BimCraft | CadCraft".
- En {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} las disposiciones son una lista desplegable de opciones de dos líneas.
- La lista de idiomas en {{ui:Settings}} ofrece más idiomas que en 0.8; los idiomas distintos del inglés son borradores de máquina.

## Corregido

- **Mover funciona en escaleras,** y en rampas, barandas, planos de techo, dispositivos independientes, imágenes y trayectorias.
- **Arrastrar un muro ya no deforma el ambiente.** El agarre central mueve el muro en escuadra consigo mismo y sus esquinas se deslizan a lo largo de los muros unidos. Mantené {{key:Mod}} para el movimiento libre anterior; {{ui:Square up}} devuelve los 90 grados.
- **Un cambio de espesor o de tipo en un nodo unido** ahora mantiene cerrada la esquina en una L, una T, un nodo de tres muros y junto a un muro curvo.
- **Mover o copiar un grupo de ambientes** mantiene unidos fuera del grupo los muros unidos.
- **Redo mantiene la identidad de una cota de muro.**
- **Elegir un muro con Draw desactivado** ya no produce un error en Propiedades.
- **Render pasa a WebGL** cuando la GPU no puede iniciarse, en lugar de detenerse.
- **La comprobación de EnergyPlus puede volver a activarse.**
- **Documents se abre como un diálogo centrado.** {{key:Esc}}, la X o un clic en la página oscurecida lo cierran.
- **Los botones {{ui:Plan}}, {{ui:Split}} y {{ui:3D}} aparecen** en cuanto se abre un modelo, no solo después de haber activado Draw una vez.

## Límites honestos

- No se imprimió nada en hardware real. Los soportes de resina son nuevos y no están probados.
- Los resultados de viento, sismo, hormigón y elementos finitos son ayudas de verificación para un ingeniero, comparadas con soluciones cerradas, no con un edificio real.
- Scan to BIM se probó con un edificio sintético, no con un escaneo real, y solo encuentra ambientes rectilíneos.
- Collada no se abrió aquí en Blender ni en Google Earth.
- La estimación de iluminación se compara con nuestro propio trazado, no con otros programas de iluminación.
- Los números de Sudáfrica no están verificados.
- Los estilos de unión de muros (butt, mitre, square off) y la prioridad de capas no están hechos; las esquinas son a inglete.
- Los idiomas distintos del inglés son borradores de máquina.

Todo lo demás está en [Qué todavía no está hecho](topic:not-built-yet). Los cambios anteriores están en las notas de 0.8 y 0.8.1 más abajo en esta página.

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en BimCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. BimCraft ahora puede responder preguntas sobre un edificio y probarlo, con personas, sonido, agua, viento y terremotos, y dibujarlo con más herramientas; 0.8.1 es una versión de correcciones.

### Nuevo

**Probar el edificio**

- **Personas en el edificio.** La sección {{ui:People in the building}} del panel izquierdo recorre una evacuación o las llegadas de un día normal por tus ambientes, puertas y escaleras. Ves las colas donde el edificio se angosta, el recorrido más largo hasta una salida desde cada ambiente y cuánto tarda la última persona. Marcá {{ui:Shut}} en una puerta para ver qué cambia, y marcá {{ui:Show the people in the 3D view}} para ver a los caminantes. Los hallazgos van a Problemas. Es un modelo de multitud grueso para decisiones de diseño, no un certificado de seguridad contra incendios. Ver [Recorrer personas por el edificio](topic:people-in-the-building).
- **Acústica de ambientes, y escucharla.** La sección {{ui:Room acoustics}} da el tiempo de reverberación de cada ambiente por banda de octava (Sabine y Eyring) a partir de su tamaño y de los acabados que elegís, y con un objetivo propio dice cuánta absorción cumpliría con él. {{ui:Play it in this room}} reproduce una voz, un aplauso, notas punteadas o tu propio archivo de sonido a través de una respuesta al impulso calculada para el ambiente. Las cifras de absorción son valores publicados típicos para que los reemplaces. Ver [Acústica de ambientes](topic:room-acoustics).
- **Reproducción de inundación, viento y terremoto.** {{ui:Hazard playback}} reproduce agua subiendo por los ambientes, presión del viento en cada piso y un terremoto que sacude los pisos, en una planta o una elevación con un control de tiempo. Modelos simples con sus supuestos en el panel; no es una verificación de código. Ver [Reproducir una inundación, viento o terremoto](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Life-cycle view}} lista las ventanas, puertas, acabados y techo con una vida útil cada uno, los años en que se reemplazan y, cuando escribís un costo por unidad, el costo por año y su valor presente. {{ui:Save the schedule (CSV)}} lo escribe. Las vidas útiles son cifras de planificación. Ver [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Verificaciones de hormigón y sismo.** Los bloques {{ui:Concrete members}} y {{ui:Seismic loads}} de la pestaña {{ui:Analysis}} verifican vigas y columnas de hormigón según ACI 318-19 y calculan fuerzas laterales equivalentes según ASCE 7-22 en pisos rígidos, con deriva de piso. Para que lo revise un ingeniero. Ver [Verificar elementos de hormigón y calcular cargas sísmicas](topic:concrete-and-seismic).

**Verificar e informar**

- **Verificar contra un IDS.** Cargá el archivo `.ids` que te dio un cliente y mirá cada elemento que no cumple en Problemas, antes de entregar el IFC. Abrí {{ui:Check against an IDS}} bajo {{ui:Model checks}}. Ver [Verificar un modelo contra el IDS de un cliente](topic:check-against-ids).
- **Etiquetas y planillas.** Definí tus propias etiquetas, asignalas a muchos elementos a la vez y armá planillas cuyas columnas, filtros y grupos las leen; las etiquetas se guardan en el IFC. Ver [Etiquetas y planillas](topic:tags-and-schedules).
- **Documentos desde el modelo.** {{ui:Documents from the model}} completa una plantilla de especificación a partir del IFC abierto y la guarda como PDF, documento de Word o Markdown. Ver [Documentos desde el modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Compare}} juzga cada elemento como construido, parcialmente construido, faltante o no alcanzado, y muestra el porcentaje construido. Ver [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y costo.** El panel Carbon suma el carbono incorporado a partir de una tabla de factores que podés editar, y el panel Cost reparte los precios sobre el cronograma 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no verificados. Ver [Carbono incorporado y costo](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección de mapa.** {{ui:Measure}} › {{ui:Coordinate system…}} acepta un número EPSG, una zona UTM, un nombre o tu propia definición de proyección. Ver [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

**Dibujar y editar**

- **Move, Align y Distribute.** Bajo {{ui:Build}}; {{key:Shift+M}} inicia Move (la {{key:M}} simple sigue siendo Measure). Move copia mientras avanzás con {{key:C}}, cada paso es un deshacer, y viaja en una sesión de Live TeamWork. Ver [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Build}} › {{ui:Picture}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Fijá la escala con dos puntos, y movela, girala, desvanecela y bloqueala. Un área copiada en MarkupCraft se pega a la escala de su hoja. Ver [Poner una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, los muros, puertas y ambientes llegan como propuestas que conservás o rechazás una por una, en un paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Ver [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calco, plumas y escalera a mano alzada.** {{ui:Trace}} muestra otro nivel punteado bajo la planta, {{ui:Pens}} da a muros, puertas y ventanas su propio grosor de línea en una vista, y {{ui:Sketch stair}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Ver [Calcar un nivel, plumas y una escalera a partir de un boceto](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y la parcela que encontró Address to site de CivilCraft llegan como sugerencias; marcás las que querés agregar. Ver [Empezar desde el sitio de CivilCraft](topic:site-from-civilcraft).
- **Dibujos de paneles.** {{ui:Build}} › {{ui:Panel drawings}} arma muros, pisos y techos en madera o acero liviano y guarda una lista de corte en CSV y planos de taller en PDF. Valores de partida, no un diseño estructural. Ver [Dibujos de paneles](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Build}} › {{ui:Symbol palette}} encuentra símbolos eléctricos y sanitarios por nombre; la fuente {{ui:Plants}} de la {{ui:Library}} lista unas 400 plantas con símbolos de planta. Ver [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

**Caños, conductos y energía**

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y líneas de refrigerante dimensionadas a partir de una tabla de valores de ejemplo típicos que podés cambiar. Ver [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel Calculations verifica el tamaño de caños y conductos de alimentación con la caída de presión, enruta cables por bandejas y conductos y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores por defecto están rotulados; escribí los valores de tu código. Ver [Cálculos de caños, conductos, cables y luz](topic:mep-calculations).
- **Archivos PCF.** El **Export PCF** de la herramienta Pipe escribe los tramos para programas de tensiones de caños e isométricos, y un archivo PCF leído de vuelta dibuja su caño. Ver [Archivos de componentes de tuberías](topic:piping-pcf).
- **Energía solar fotovoltaica.** Colocá arreglos en techos o en el suelo, sombreálos con el modelo, estimá la energía anual, verificá los strings y creá datos de diagrama unifilar. El módulo de partida y las pérdidas son genéricos. Ver [Solar fotovoltaica](topic:solar-pv).
- **Archivo EnergyPlus.** El panel Check with EnergyPlus escribe el modelo como un IDF para correrlo en tu propio EnergyPlus. Ejecutarlo en el navegador necesita una compilación que alojes vos y cuya dirección escribas; BimCraft no la incluye. Ver [Verificar calefacción y refrigeración con EnergyPlus](topic:check-with-energyplus).

**Imágenes y archivos**

- **Elegir el motor de render.** {{ui:Render}} tiene una opción {{ui:Engine}}. Nuestros dos motores integrados (Fast y Path tracer) siguen siendo el predeterminado. **Open in** guarda la escena como archivo USD o glTF, y una carpeta de proyecto Unreal como .zip; en CadCraft Studio un complemento puede agregar un motor. El complemento de Unreal que abre el proyecto no está publicado. Ver [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft le informa a Studio cada paso terminado para que Studio pueda deshacer tu último paso en la ventana que usaste por última vez. Ver [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en tu archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que te faltan al abrirlo. Ver [Complementos en tu archivo](topic:add-ons-in-your-file).

**En todas las aplicaciones**

- **Conectá tu IA.** Tu propio asistente puede manejar BimCraft mediante la conexión de Studio y responder preguntas sobre el modelo, como qué ambientes están bajo una superficie dada. Studio no tiene IA propia. Ver [Dejar que un asistente de IA trabaje con tu modelo](topic:assistants).
- **Barras de herramientas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofrece Wrap, 2 rows o 1 row; Wrap sigue siendo el predeterminado.
- **Dispositivos de entrada.** La configuración de trackpad, lápiz, mouse 3D, control y MIDI es compartida por todas las aplicaciones.
- **Problemas y Live.** El panel de advertencias y las sesiones Live funcionan como antes, y las nuevas verificaciones de arriba alimentan Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son borradores de máquina que todavía no leyó un hablante nativo; los temas de ayuda son mayormente en inglés.

### Corregido en 0.8.1

- **Diseño de cinta + panel de proyecto.** Insert › Import CAD, Insert › Image y Manage › Project Units decían "Not built in BimCraft yet". Image ahora abre la herramienta Picture, Import CAD abre {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF o un escaneo), y Project Units abre {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Move y Align ejecutan las herramientas Move y Align, Level abre {{ui:Add levels…}}, Phases abre la sección de fases de renovación, y Materials abre la biblioteca de materiales.
- **Sección de clases DWG.** Se leía como el tipo equivocado; corregido en BimCraft y en las otras aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas ahora pueden cambiar de idioma sin reiniciar. Esto todavía no se probó en todas las plataformas; avisanos si el idioma no cambia.
- **Script de paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, observa la carpeta durante hasta 20 segundos y reintenta junto al paquete.

### Todavía no en esta versión

- **Herramientas de seguridad y diseño.** People in the building no tiene límite de distancia de recorrido de un código de edificación (lo escribís vos) y no se verificó a mano sobre un plano real. Las cifras de acústica, ciclo de vida y peligro son valores de planificación, no una verificación de código.
- **Futuros climáticos y EnergyPlus.** No hay futuros climáticos integrados: podés cargar un archivo de escenario para la corrida de inundación. La corrida de EnergyPlus en el navegador no es parte de esta versión.
- **Diseño de cinta.** Material Takeoff sigue como "Not built" porque BimCraft no tiene una lista de cantidades de materiales, y otras 54 herramientas de cinta en gris no tienen todavía una herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no tienen firma, así que SmartScreen muestra {{ui:More info}}, luego {{ui:Run anyway}}, y macOS necesita clic derecho y luego {{ui:Open}}. El build de iPad e iPhone no se recompiló para 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas más viejas del navegador de BimCraft siguen fallando en nuestra página de pruebas, como antes de 0.8.1.

Todo lo demás está en [Qué todavía no está hecho](topic:not-built-yet). Los cambios anteriores están en [Novedades en 0.7](topic:whats-new-0-7).
