---
title: Mba'e pyahu 0.9-pe (ymáva)
summary: Muro forma-kuéra, división, desplazamiento, estirado y bloqueo a grilla, niveles debajo del suelo, cotas de grilla y Medir en el plano, vistas duplicadas con estilos de trabajo y tablas de plumas, Reportar como, exportación Collada y Google Earth, Escanear a BIM, análisis de viento y sísmico, complementos de impresión con resina.
keywords: novedades 0.9, versión anterior, novedades, 0.9, notas de versión, forma de muro, rectángulo, polígono, arco, elegir líneas, calcar contorno, desplazamiento, unir, estirado en caja, alinear y bloquear, dividir muro, hueco, volver a unir, bloquear a grilla, crecer desde, medir desde, agregar nivel abajo, subsuelo, comando nivel, cotas de grilla, medir en el plano, estilo de trabajo, vista duplicada, copia propia, vista vinculada, tabla de plumas, imprimir como se ve, reportar como, escribir escala, importar svg, colocar en plano, colocar en modelo, collada, dae, kmz, google earth, escanear a bim, carga de viento, sísmico, elementos finitos, panel de documentos, impresión con resina, novedades, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, planillas, mover, alinear, distribuir, imagen, fondo, escanear a muros, sitio desde civilcraft, paneles de dibujo, encuadre, solar, fv, dividir, vrf, fan coil, dimensionado de caños, bandeja de cables, iluminancia, hormigón, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, costo, energyplus, motor de render, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, navegador de proyecto, diseño
from: 816df7f8
---

Esta es la lista de lo que cambió en BimCraft 0.9, comparado con 0.8.1. Los dos temas principales son una herramienta de muro real y vistas que se comportan como esperan las personas que vienen de los grandes programas BIM. Alrededor de ellos vienen la exportación Collada, asistentes que pueden colocar dispositivos eléctricos, Escanear a BIM, y trabajo de viento, sísmico y elementos finitos en la pestaña {{ui:Análisis}}.

## Nuevo

### Muros

- **Dibujar formas completas.** En {{ui:Dibujar}}, abrí {{ui:Formas}} (o elegí una forma en la lista Forma de la fila Muro) para un rectángulo, un rectángulo girado, un polígono de 3 a 64 lados, un arco por centro, un arco tangente, muros sobre líneas elegidas, o muros alrededor de un área cerrada donde hacés clic adentro. Un rectángulo son cuatro muros con cuatro esquinas unidas y un solo paso de deshacer. Ver [Formas de muro, dividir, desplazar, estirar y bloquear](topic:wall-tools).
- **Definir antes de dibujar, cambiar después.** La fila Muro tiene {{ui:Desplazamiento}} y {{ui:Unir}} (destildar para dibujar muros independientes). Después usá {{ui:Desplazamiento}}, {{ui:Estirado en caja}} y {{ui:Alinear y bloquear}} sobre muros dibujados. Un muro movido o estirado conserva sus puertas, ventanas y cotas. Cada receta es un paso de deshacer.
- **Cortar muros.** {{ui:Dividir}}, {{ui:Hueco}}, {{ui:Puntas libres}}, {{ui:Eliminar tramo}} y {{ui:Volver a unir}} cortan un muro con un clic o donde otro muro lo cruza. Un corte por una puerta se rechaza. Ver [Formas de muro, dividir, desplazar, estirar y bloquear](topic:wall-tools).
- **Bloquear muros a líneas de grilla.** Elegí un muro sobre una línea de grilla y tildá {{ui:Bloquear a grilla}} en {{ui:Propiedades}}. Con la herramienta Grilla activa, escribí una distancia en {{ui:Mover por}} para una línea elegida, y los muros bloqueados lo siguen en un paso de deshacer.
- **Dar forma a un muro.** En {{ui:Propiedades}} de un muro podés unir su parte superior o base a un techo, piso o cielorraso, editar su contorno de elevación, inclinarlo, o hacer una abertura sin puerta ni ventana. Ver [Forma de muro](topic:wall-shape).
- **La longitud indica qué extremo queda fijo.** {{ui:Crecer desde}} define si el inicio, el final o el centro quedan fijos al cambiar la longitud.
- **Longitud y cota del plano coinciden.** {{ui:Medir desde}} (línea central, cara interior o cara exterior) controla tanto el campo Longitud como las cotas de muro del plano. Empieza en la línea central, así que las cotas de muro del plano ahora muestran la línea central donde antes mostraban la cara exterior. Cambialo en la fila Muro, en {{ui:Propiedades}} o en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Muro-kuéra}}.

### Niveles, grillas y medición

- **Agregar nivel abajo.** {{ui:Agregar nivel abajo}} en el panel {{ui:Niveles}} agrega un nivel debajo del más bajo, de la misma altura, con elevación negativa (Nivel -1, Nivel -2). Nada más se mueve. {{ui:Agregar niveles…}} ahora acepta alturas negativas. Escribir LEVEL, LEVELS, STOREY o STOREYS en la línea de comandos abre {{ui:Agregar niveles…}}, y hay un botón {{ui:Niveles}} en los menús y las pestañas de cinta. Ver [Sitios, edificios y niveles](topic:site-building-and-levels).
- **Cotas de grilla en el plano.** Con la herramienta {{ui:Cuadrícula}} activa, tildá {{ui:Cotas}} para dibujar la separación entre líneas vecinas y el tamaño total más allá de las burbujas, en el plano de cada nivel. Ver [Acotar una grilla](topic:grid-dimensions).
- **Medir en el plano.** {{ui:Medir}} en el grupo {{ui:Dibujar}} da una distancia con las diferencias X e Y entre dos clics. No se guarda nada en el modelo. Ver [Medir en el plano](topic:measure-on-the-plan).
- **Cambiar varias columnas a la vez.** Elegí columnas junto con un muro y la selección muestra cada tipo con {{ui:Mantener solo estos}}. Un clic mantiene las columnas y muestra sus campos comunes.
- **Una unidad de visualización en todas partes.** Coordenadas, mediciones, cortes, escalas de hoja, cargas y resultados de la pestaña de marco y el texto de Problemas siguen la unidad que elijas. Las exportaciones quedan en SI.

### Vistas, hojas e impresión

- **Estilo de trabajo.** {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Estilo de trabajo}} elige entre que cada vista tenga sus propias anotaciones y tablas de plumas, o que las compartan. Ver [Estilo de trabajo, vistas duplicadas, plumas en papel, Reportar como y plantillas](topic:working-style).
- **Duplicar una vista.** Plantas, planos de cielorraso, llamadas, elevaciones y cortes pueden duplicarse como {{ui:Copia propia}} o {{ui:Vinculado}}; {{ui:Hacer copia propia}} vuelve independiente una vinculada. Ver [Estilo de trabajo, vistas duplicadas, plumas en papel, Reportar como y plantillas](topic:working-style).
- **Imprimir como se ve, o con tabla de plumas.** Las sobrescrituras de plumas se guardan en el IFC con la vista, y las hojas y los PDF las dibujan igual que la pantalla. El mismo tema cubre las tablas de plumas.
- **Reportar como.** {{ui:Reportar como}} en {{ui:Propiedades}} escribe una losa dibujada como camino, un muro como panel o un techo como rampa en el IFC con la clase que elijas, y la cuenta así en planillas, cantidades, Buscar, Color por y Problemas.
- **Editar en elevaciones y cortes.** Dibujá y movés muros, aberturas, niveles, cotas y notas directamente en una elevación o corte, con tus propios tamaños de hoja y cajetines. Ver [Editar en elevaciones y cortes](topic:edit-in-elevations).
- **Hojas.** Cada hoja puede ser horizontal o vertical. Una casilla {{ui:Escribir una escala}} está junto a la lista de escalas en cada vista colocada (1:64, 2:1, 1/4" = 1'). Podés arrastrar un dibujo colocado o moverlo con las flechas del teclado, y {{ui:Formatos…}} › {{ui:Importar SVG…}} convierte tu propio diseño de hoja en un cajetín con campos escritos por hoja.
- **Créditos de biblioteca en una hoja.** Un juego de planos con elementos de Biblioteca obtiene una planilla de créditos de biblioteca que podés colocar en cualquier hoja. Ver [Créditos de biblioteca](topic:library-credits).

### Biblioteca: colocar

- **Colocar sigue a la vista.** En la vista Plano, la Biblioteca muestra {{ui:Colocar en plano}}; en 3D muestra {{ui:Colocar en modelo}}; en Dividido muestra un botón dividido con {{ui:Colocar en plano}} como acción principal. Ambas formas escriben el mismo elemento IFC. También podés arrastrar una tarjeta de la Biblioteca al plano o a la vista 3D; con lápiz o dedo, mantené presionado y luego arrastrá. Ver [Colocar desde la Biblioteca](topic:place-from-library).

### Archivos y asistentes

- **Collada y Google Earth.** {{ui:Collada}} en la barra de herramientas (menú Archivo en los estilos de menú) escribe un .dae, o un .kmz ubicado donde está el modelo en el mapa. Ver [Exportar el modelo como Collada o para Google Earth](topic:collada).
- **Los asistentes pueden colocar dispositivos eléctricos.** Tu asistente conectado tiene nuevas herramientas para agregar, listar, cambiar y eliminar dispositivos y para configurar luces. Los asistentes quedan apagados hasta que los actives en {{ui:Configuración}}. Ver [Dejá que un asistente de IA trabaje con tu modelo](topic:assistants).
- **Escanear a BIM (complemento).** Desactivado por defecto y necesita el complemento Nubes de puntos. Propone pisos, muros, puertas y ventanas a partir de un escaneo con la desviación medida de cada uno; aceptar es un paso de deshacer.

### Análisis

- **Datos de sitio de viento y sísmicos.** En la pestaña {{ui:Análisis}}: cargas de viento según ASCE 7-10 o 7-16 para un edificio cerrado rígido, con una fuerza en cada piso como casos de carga, y datos de sitio sísmico con búsqueda USGS y el espectro de diseño.
- **Seguimiento estructural y elementos finitos.** Verificaciones de hormigón según ACI 318-19, fuerzas laterales equivalentes según ASCE 7-22, deriva de piso, losas y muros como placas, y combinaciones de carga de ASCE 7 y EN 1990. Nuestro propio motor de elementos finitos hace láminas, tetraedros y análisis modal. Ver [Verificar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic) y [Análisis de pórticos](topic:frame-analysis).

### Otros complementos y documentos

- **Iluminación interior (complemento).** Coloca luminarias y escribe el lux como números en el plano de cada nivel, con una estimación de deslumbramiento y un informe imprimible.
- **Panel de documentos.** {{ui:Archivo}} › {{ui:Documentos…}} tiene retirar y devolver con archivo de bloqueo, letras de revisión, estados de emisión e historial.
- **Regiones y acero.** Paquetes de dibujo y normativa de construcción sudafricanos en el complemento Regulaciones, y 976 tamaños de acero británicos en la tabla de secciones compartida.
- **Complementos gratuitos de impresión con resina.** Slicer, soportes y balsa, prueba de exposición, y los formatos de archivo GOO, SL1, Chitubox y Anycubic, todos desactivados por defecto.

## En todas las apps

- Al pasar el cursor sobre un botón o control aparece una sugerencia Bootstrap.
- La sugerencia inicial en un área de dibujo vacía tiene un botón de cierre; BimCraft recuerda que se cerró.
- La barra de pestañas de un panel que no entra ahora se desplaza en vez de cortarse.
- Con un documento abierto, la pestaña del navegador dice "<documento> - BimCraft | CadCraft".
- En {{ui:Configuración}} › {{ui:General}} › {{ui:Diseño}} los diseños son una lista desplegable de opciones de dos líneas.
- La lista de idiomas en {{ui:Configuración}} ofrece más idiomas que en 0.8; los idiomas distintos del inglés son borradores de máquina.

## Corregido

- **Mover funciona en escaleras,** y en rampas, barandas, planos de techo, dispositivos independientes, imágenes y caminos.
- **Arrastrar un muro ya no deforma la habitación.** El agarre central mueve el muro en escuadra consigo mismo y sus esquinas se deslizan por los muros unidos. Mantené {{key:Mod}} para el movimiento libre anterior; {{ui:Escuadrar}} devuelve los 90 grados.
- **Un cambio de espesor o tipo en un nodo unido** ahora mantiene cerrada la esquina en una L, una T, un nodo de tres muros y junto a un muro curvo.
- **Mover o copiar un grupo de habitaciones** mantiene unidos los muros unidos fuera del grupo.
- **Rehacer conserva la identidad de una cota de muro.**
- **Elegir un muro con Dibujar desactivado** ya no genera un error en Propiedades.
- **Render pasa a WebGL** cuando la GPU no puede iniciar, en vez de detenerse.
- **La verificación de EnergyPlus puede volver a activarse.**
- **Documentos se abre como diálogo centrado.** {{key:Esc}}, la X o un clic en la página oscurecida lo cierran.
- **Los botones {{ui:Plano}}, {{ui:Dividido}} y {{ui:3D}} aparecen** en cuanto hay un modelo abierto, no solo después de activar Dibujar una vez.

## Límites honestos

- No se imprimió nada en hardware real. Los soportes de resina son nuevos y no están probados.
- Los resultados de viento, sísmicos, de hormigón y de elementos finitos son herramientas de control para un ingeniero, verificadas contra fórmulas cerradas, no contra un edificio real.
- Escanear a BIM se probó con un edificio sintético, no con un escaneo real, y solo encuentra ambientes rectilíneos.
- Collada no se abrió aquí en Blender ni en Google Earth.
- La estimación de iluminación se verificó contra nuestro propio trazado, no contra otros programas de iluminación.
- Las cifras sudafricanas no están verificadas.
- Los estilos de unión de muros (a tope, a inglete, a escuadra) y la prioridad de capas no están construidos; las esquinas son a inglete.
- Los idiomas distintos del inglés son borradores de máquina.

Todo lo demás está en [Lo que todavía no está construido](topic:not-built-yet). Los cambios anteriores están en las notas de 0.8 y 0.8.1 más abajo en esta página.

## Anterior: 0.8 y 0.8.1

Esta es la lista de lo que cambió en BimCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. BimCraft ahora puede responder preguntas sobre un edificio y probarlo, con personas, sonido, agua, viento y terremotos, y dibujarlo con más herramientas; 0.8.1 es una versión de correcciones.

### Nuevo

**Probar el edificio**

- **Personas en el edificio.** La sección {{ui:Personas en el edificio}} del panel izquierdo recorre una evacuación o las llegadas de un día normal por tus ambientes, puertas y escaleras. Ves las colas donde el edificio se angosta, el recorrido más largo hasta una salida desde cada ambiente y cuánto tarda la última persona. Tildá {{ui:Cerrada}} en una puerta para ver qué cambia, y tildá {{ui:Mostrar las personas en la vista 3D}} para ver a los peatones. Los hallazgos van a Problemas. Es un modelo de multitud aproximado para decisiones de diseño, no un certificado de seguridad contra incendios. Ver [Recorrer el edificio con personas](topic:people-in-the-building).
- **Acústica de ambientes, y escucharla.** La sección {{ui:Acústica de ambientes}} da el tiempo de reverberación de cada ambiente por banda de octava (Sabine y Eyring) según su tamaño y los acabados que elijas, y con un objetivo propio indica cuánta absorción cumpliría con él. {{ui:Reproducir en este ambiente}} reproduce una voz, un aplauso, notas pulsadas o tu propio archivo de sonido a través de una respuesta al impulso calculada para el ambiente. Las cifras de absorción son valores publicados típicos para que las reemplaces. Ver [Acústica de ambientes](topic:room-acoustics).
- **Reproducción de inundación, viento y terremoto.** {{ui:Reproducción de peligro}} reproduce agua subiendo por los ambientes, presión de viento en cada piso y un terremoto que sacude los pisos, en una planta o una elevación con un control deslizante de tiempo. Modelos simples con sus supuestos en el panel; no es una verificación de código. Ver [Reproducir una inundación, viento o terremoto](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Vista del ciclo de vida}} lista las ventanas, puertas, acabados y techo con una vida útil cada uno, los años en que se reemplazan y, si escribís un costo por unidad, el costo por año y su valor presente. {{ui:Guardar la planilla (CSV)}} la escribe. Las vidas útiles son cifras de planificación. Ver [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Verificaciones de hormigón y sísmicas.** Los bloques {{ui:Miembros de hormigón}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} verifican vigas y columnas de hormigón según ACI 318-19 y generan fuerzas laterales equivalentes según ASCE 7-22 en pisos rígidos, con deriva de piso. Para que las revise un ingeniero. Ver [Verificar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic).

**Verificar e informar**

- **Verificar contra un IDS.** Cargá el archivo `.ids` que te entregó un cliente y ve en Problemas cada elemento que no lo cumple, antes de entregar el IFC. Abrí {{ui:Verificar contra un IDS}} bajo {{ui:Controles del modelo}}. Ver [Verificar un modelo contra el IDS de un cliente](topic:check-against-ids).
- **Etiquetas y planillas.** Definí tus propias etiquetas, asignalas a muchos elementos a la vez y creá planillas cuyas columnas, filtros y agrupaciones las lean; las etiquetas se guardan en el IFC. Ver [Etiquetas y planillas](topic:tags-and-schedules).
- **Documentos a partir del modelo.** {{ui:Documentos a partir del modelo}} completa una plantilla de especificación con el IFC abierto y la guarda como PDF, documento de Word o Markdown. Ver [Documentos a partir del modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Comparar}} juzga cada elemento como construido, parcialmente construido, faltante o no alcanzado, y muestra el porcentaje construido. Ver [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y costo.** El panel de Carbono suma el carbono incorporado a partir de una tabla de factores que podés editar, y el panel de Costo distribuye precios sobre la planificación 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no verificados. Ver [Carbono incorporado y costo](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, una zona UTM, un nombre o tu propia definición de proyección. Ver [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

**Dibujar y editar**

- **Mover, Alinear y Distribuir.** Bajo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (M sola sigue siendo Medir). Mover copia mientras avanzás con {{key:C}}, cada paso es un deshacer, y viaja en una sesión de Live TeamWork. Ver [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo el plano.** {{ui:Compilación}} › {{ui:Imagen}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Fijá la escala con dos puntos, y movela, girala, desvanecela y bloqueala. Un área copiada en MarkupCraft se pega a la escala de su hoja. Ver [Poner una imagen bajo el plano](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, los muros, puertas y ambientes llegan como propuestas que conservás o rechazás una por una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Ver [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calcar, plumas y escalera a partir de un boceto.** {{ui:Calcar}} muestra otro nivel punteado bajo el plano, {{ui:Plumas}} da a muros, puertas y ventanas su propio grosor de línea en una sola vista, y {{ui:Bosquejar escalera}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Ver [Calcar un nivel, plumas y una escalera a partir de un boceto](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y la parcela que encontró Dirección a sitio de CivilCraft llegan como sugerencias; tildás las que querés agregar. Ver [Comenzar desde el sitio de CivilCraft](topic:site-from-civilcraft).
- **Dibujos de paneles.** {{ui:Compilación}} › {{ui:Dibujos de paneles}} encuadra muros, pisos y techos en madera o acero liviano y guarda una lista de corte como CSV y planos de taller como PDF. Valores iniciales, no un diseño estructural. Ver [Dibujos de paneles](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} encuentra símbolos eléctricos y sanitarios por nombre; la fuente {{ui:Plantas}} de la {{ui:Biblioteca}} lista unas 400 plantas con símbolos de plano. Ver [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

**Caños, ductos y energía**

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y líneas dimensionadas a partir de una tabla de valores típicos de ejemplo que podés cambiar. Ver [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel de Cálculos verifica tamaños de caños y ductos de suministro con caída de presión, enruta cables por bandejas y conduits y muestra su llenado, y calcula iluminancia a partir de archivos IES o EULUMDAT. Los valores predeterminados están rotulados; escribí los valores de tu código. Ver [Cálculos de caños, ductos, cables y luz](topic:mep-calculations).
- **Archivos PCF.** **Exportar PCF** de la herramienta Caño escribe los tramos para programas de tensión de caños e isométricos, y un archivo PCF leído de vuelta dibuja su caño. Ver [Archivos de componentes de caños](topic:piping-pcf).
- **Solar FV.** Coloca conjuntos en techos o en el suelo, los sombrea a partir del modelo, estima la energía anual, verifica strings y genera datos de diagrama unifilar. El módulo inicial y las pérdidas son genéricos. Ver [Solar FV](topic:solar-pv).
- **Archivo EnergyPlus.** El panel Verificar con EnergyPlus escribe el modelo como IDF para ejecutarlo en tu propio EnergyPlus. Ejecutarlo en el navegador necesita una compilación que alojes vos y escribas la dirección; BimCraft no la incluye. Ver [Verificar calefacción y refrigeración con EnergyPlus](topic:check-with-energyplus).

**Imágenes y archivos**

- **Elegir el motor de render.** {{ui:Render}} tiene una opción {{ui:Motor}}. Nuestros dos motores integrados (Rápido y Trazado de rayos) siguen siendo el predeterminado. **Abrir en** guarda la escena como archivo USD o glTF, y una carpeta de proyecto Unreal como .zip; en CadCraft Studio un complemento puede agregar un motor. El complemento de Unreal que abre el proyecto no está publicado. Ver [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft le informa a Studio cada paso terminado para que Studio pueda deshacer tu último paso en la ventana que usaste por última vez. Ver [Deshacer entre apps](topic:undo-across-apps).
- **Complementos en tu archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que te faltan al abrirlo. Ver [Complementos en tu archivo](topic:add-ons-in-your-file).

**En todas las apps**

- **Conectá tu IA.** Tu propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué ambientes están bajo una superficie dada. Studio no tiene IA propia. Ver [Dejá que un asistente de IA trabaje con tu modelo](topic:assistants).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el predeterminado.
- **Dispositivos de entrada.** Las configuraciones de trackpad, lápiz, mouse 3D, control y MIDI son compartidas por todas las apps.
- **Problemas y Live.** El panel de advertencias y las sesiones Live funcionan como antes, con las nuevas verificaciones de arriba alimentando Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son borradores de máquina que aún no leyó un hablante nativo; los temas de ayuda son mayormente en inglés.

### Corregido en 0.8.1

- **Diseño de cinta + navegador de proyecto.** Insertar › Importar CAD, Insertar › Imagen y Administrar › Unidades del proyecto decían "Todavía no está construido en BimCraft". Imagen ahora abre la herramienta Imagen, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un plano…}} (DWG, DXF, PDF o un escaneo), y Unidades del proyecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover y Alinear ejecutan las herramientas Mover y Alinear, Nivel abre {{ui:Agregar niveles…}}, Fases abre la sección Fases de renovación, y Materiales abre la biblioteca de materiales.
- **Sección de clases DWG.** Se leía como tipo incorrecto; corregido en BimCraft y en las demás apps que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas ahora pueden cambiar de idioma sin reiniciar. Esto todavía no se probó en todas las plataformas; avisanos si el idioma no cambia.
- **Script del paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta hasta 20 segundos y reintenta junto al paquete.

### Todavía no en esta versión

- **Herramientas de seguridad y diseño.** Personas en el edificio no tiene un límite de distancia de recorrido de un código de edificación (lo escribís vos) y no se verificó a mano en un plano real. Las cifras de acústica, ciclo de vida y peligro son valores de planificación, no una verificación de código.
- **Clima futuro y EnergyPlus.** No hay clima futuro integrado: podés cargar un archivo de escenario para la corrida de inundación. La corrida de EnergyPlus en el navegador no forma parte de esta versión.
- **Diseño de cinta.** Cómputo de materiales sigue como "No construido" porque BimCraft no tiene lista de cantidades de materiales, y otras 54 herramientas de cinta en gris todavía no tienen una herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:Más información}}, luego {{ui:Ejecutar igual}}, y macOS necesita clic derecho y luego {{ui:Abrir}}. La compilación para iPad e iPhone no se recompiló para 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas más antiguas del navegador de BimCraft siguen fallando en nuestra página de prueba, como antes de 0.8.1.

Todo lo demás está en [Lo que todavía no está construido](topic:not-built-yet). Los cambios anteriores están en [Novedades en 0.7](topic:whats-new-0-7).
