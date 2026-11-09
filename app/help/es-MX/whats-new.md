---
title: Novedades en 0.8 y 0.8.1
summary: BimCraft agrega personas que recorren el edificio, acústica de cuartos que se puede escuchar, reproducción de inundación, viento y sismo, una vista de ciclo de vida de cincuenta años, verificaciones con IDS, etiquetas y programas, Desplazar, Alinear y Distribuir, imágenes bajo la planta, muros desde un escaneo, dibujos de paneles, solar, sistemas split y VRF, dimensionado de tuberías y charolas de cable, verificaciones de concreto y sísmicas, cualquier proyección cartográfica, una elección de motor de renderizado y deshacer en Studio; 0.8.1 corrige las herramientas en gris del diseño Ribbon.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, sismo, amenaza, ciclo de vida, vida útil, ids, etiquetas, programas, desplazar, alinear, distribuir, imagen, fondo, escaneo a muros, sitio desde civilcraft, dibujos de paneles, entramado, solar, fv, split, vrf, fan coil, dimensionado de tuberías, charola de cables, iluminancia, concreto, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, costo, energyplus, motor de renderizado, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumillas, ribbon, explorador de proyectos, presentación
from: 87b03056
---

Esto es lo que cambió en BimCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. BimCraft ahora puede responder preguntas sobre un edificio y probarlo, con personas, sonido, agua, viento y sismos, y dibujarlo con más herramientas; 0.8.1 es una versión de correcciones.

## Nuevo

### Pruebe el edificio

- **Personas en el edificio.** La sección {{ui:Personas en el edificio}} del panel izquierdo hace recorrer sus cuartos, puertas y escaleras a una evacuación o a las llegadas de un día normal. Usted ve las colas donde el edificio se estrecha, el recorrido más largo a una salida desde cada cuarto y cuánto tarda la última persona. Marque {{ui:Cerrar}} en una puerta para ver qué cambia, y marque {{ui:Mostrar a las personas en la vista 3D}} para ver a los peatones. Los hallazgos van a Problemas. Es un modelo de multitudes aproximado para decisiones de diseño, no un certificado de seguridad contra incendios. Vea [Hacer caminar personas por el edificio](topic:people-in-the-building).
- **Acústica de cuartos, y escúchela.** La sección {{ui:Acústica de cuartos}} da el tiempo de reverberación de cada cuarto por banda de octava (Sabine y Eyring) a partir de su tamaño y de los acabados que elija, y con una meta propia indica cuánta absorción la cumpliría. {{ui:Reproducir en este cuarto}} reproduce una voz, un aplauso, notas pulsadas o un archivo de sonido propio a través de una respuesta al impulso calculada para el cuarto. Las cifras de absorción son valores publicados típicos para que usted los reemplace. Vea [Acústica de cuartos](topic:room-acoustics).
- **Reproducción de inundación, viento y sismo.** {{ui:Reproducción de amenazas}} muestra el agua subiendo por los cuartos, la presión del viento en cada nivel y un sismo que sacude los niveles, en una planta o un alzado con un control deslizante de tiempo. Son modelos simples con sus supuestos en el panel; no es una verificación de norma. Vea [Reproducir una inundación, viento o un sismo](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Vista del ciclo de vida}} enumera las ventanas, puertas, acabados y la cubierta, con una vida útil cada uno, los años en que se reemplazan y, cuando escribe un costo por unidad, el costo por año y su valor presente. {{ui:Guardar el programa (CSV)}} lo escribe en un archivo. Las vidas útiles son cifras de planeación. Vea [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Verificaciones de concreto y sísmicas.** Los bloques {{ui:Miembros de concreto}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} verifican vigas y columnas de concreto según ACI 318-19, y calculan fuerzas laterales equivalentes según ASCE 7-22 en pisos rígidos, con deriva por nivel. Son para que las revise un ingeniero. Vea [Verificar miembros de concreto y calcular cargas sísmicas](topic:concrete-and-seismic).

### Verifique y reporte

- **Comprobar con un IDS.** Cargue el archivo `.ids` que le entregó su cliente y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC. Abra {{ui:Comprobar con un IDS}} en {{ui:Comprobaciones del modelo}}. Vea [Comprobar un modelo contra el IDS del cliente](topic:check-against-ids).
- **Etiquetas y programas.** Defina sus propias etiquetas, asígnelas a muchos elementos a la vez y cree programas cuyas columnas, filtros y grupos las lean; las etiquetas se guardan en el IFC. Vea [Etiquetas y programas](topic:tags-and-schedules).
- **Documentos desde el modelo.** {{ui:Documentos desde el modelo}} llena una plantilla de especificación con el IFC abierto y la guarda como PDF, como documento de Word o como Markdown. Vea [Documentos desde el modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Comparar}} juzga cada elemento como construido, parcialmente construido, faltante o no alcanzado, y muestra el porcentaje construido. Vea [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y costo.** El panel Carbono suma el carbono incorporado a partir de una tabla de factores que puede editar, y el panel Costo reparte los precios sobre el programa 4D. Los factores que vienen con BimCraft son genéricos y están marcados como no verificados. Vea [Carbono incorporado y costo](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección cartográfica.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, una zona UTM, un nombre o su propia definición de proyección. Vea [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

### Dibuje y edite

- **Desplazar, Alinear y Distribuir.** Bajo {{ui:Compilación}}; {{key:Shift+M}} inicia Desplazar (la tecla {{key:M}} sola sigue siendo Medir). Desplazar copia mientras avanza con {{key:C}}, cada paso es un solo deshacer y viaja en una sesión de Live TeamWork. Vea [Desplazar, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Compilación}} › {{ui:Imagen}} coloca un PNG, JPEG o WebP bajo la planta de un nivel o en un plano vertical. Fije la escala con dos puntos, y mueva, gire, atenúe y bloquee la imagen. Un área copiada en MarkupCraft se pega a la escala de su hoja. Vea [Coloque una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros desde un escaneo.** Con un escaneo abierto, muros, puertas y cuartos llegan como propuestas que usted conserva o rechaza una por una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Vea [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calcar, plumillas y escalera por croquis.** {{ui:Calcar}} muestra otro nivel punteado bajo la planta, {{ui:Plumillas}} da a muros, puertas y ventanas su propio grosor de línea en una sola vista, y {{ui:Escalera por croquis}} convierte una línea de recorrido en una escalera. Se abre una malla Wavefront OBJ. Vea [Calcar un nivel, plumillas y una escalera desde un croquis](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y el predio que encontró Dirección a sitio de CivilCraft llegan como sugerencias; marque los que quiera agregar. Vea [Iniciar desde el sitio de CivilCraft](topic:site-from-civilcraft).
- **Dibujos de paneles.** {{ui:Compilación}} › {{ui:Dibujos de paneles}} enmarca muros, pisos y cubiertas en madera o en acero ligero conformado en frío, y guarda una lista de corte como CSV y los planos de taller como PDF. Son valores iniciales, no un diseño estructural. Vea [Dibujos de paneles](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} encuentra símbolos eléctricos y de plomería por nombre; la fuente {{ui:Plantas}} de {{ui:Biblioteca}} enumera unas 400 plantas con sus símbolos de plano. Vea [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

### Tuberías, ductos y energía

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y juegos de tuberías de refrigerante dimensionados a partir de una tabla de valores típicos de ejemplo que puede cambiar. Vea [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel Cálculos verifica el dimensionado de tuberías y ductos de suministro con caída de presión, enruta cables por charolas y ductos de cables y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores por omisión están marcados; escriba los valores de su norma. Vea [Cálculos de tubería, ducto, cable e iluminación](topic:mep-calculations).
- **Archivos PCF.** **Exportar PCF** de la herramienta Tubería escribe los tramos para programas de análisis de esfuerzos en tuberías y para isométricos, y un archivo PCF que se vuelve a leer dibuja su tubería. Vea [Archivos de componentes de tubería](topic:piping-pcf).
- **Solar FV.** Coloque arreglos sobre cubiertas o en el suelo, sombréelos a partir del modelo, estime la energía anual, verifique cadenas de módulos y genere datos para el diagrama unifilar. El módulo de inicio y las pérdidas son genéricos. Vea [Solar FV](topic:solar-pv).
- **Archivo de EnergyPlus.** El panel Verificar con EnergyPlus escribe el modelo como un IDF para ejecutarlo en su propia instalación de EnergyPlus. Ejecutarlo en el navegador requiere una compilación que usted aloje y cuya dirección escriba; BimCraft no la incluye. Vea [Verificar calefacción y enfriamiento con EnergyPlus](topic:check-with-energyplus).

### Imágenes y archivos

- **Elija el motor de renderizado.** {{ui:Renderizar}} tiene una opción {{ui:Motor}}. Nuestros dos motores integrados (Fast y Path tracer) siguen siendo el valor por omisión. **Abrir en** guarda la escena como archivo USD o glTF, y una carpeta de proyecto de Unreal como .zip; en CadCraft Studio un complemento puede agregar un motor. El complemento de Unreal que abre el proyecto no se ha publicado. Vea [Elija qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft le informa a Studio cada paso terminado, para que Studio pueda deshacer su último paso en la ventana que usó por última vez. Vea [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en su archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que le faltan al abrirlo. Vea [Complementos en su archivo](topic:add-ons-in-your-file).

### En todas las aplicaciones

- **Conecte su IA.** Su propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué cuartos están bajo cierta área. Studio no tiene IA propia. Vea [Deje que un asistente de IA trabaje con su modelo](topic:assistants).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el valor por omisión.
- **Dispositivos de entrada.** La configuración de trackpad, lápiz, mouse 3D, controlador y MIDI es compartida por todas las aplicaciones.
- **Problemas y Live.** El panel de advertencias y las sesiones Live funcionan como antes, con las nuevas verificaciones de arriba alimentando Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los que no son inglés son traducciones automáticas preliminares que aún no revisa una persona nativa; los temas de ayuda están en su mayoría en inglés.

## Corregido en 0.8.1

- **Diseño Ribbon + Explorador de proyectos.** Insertar › Importar CAD, Insertar › Imagen y Gestionar › Unidades de proyecto decían "Aún no está disponible en BimCraft". Imagen ahora abre la herramienta Imagen, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un dibujo…}} (DWG, DXF, PDF o un escaneo), y Unidades de proyecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Desplazar y Alinear ejecutan las herramientas Desplazar y Alinear, Nivel abre {{ui:Agregar niveles…}}, Fases abre la sección Fases de renovación y Materiales abre la biblioteca de materiales.
- **Sección de clases de DWG.** Se leía como un tipo equivocado; corregido en BimCraft y en las otras aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas ahora pueden cambiar de idioma sin reiniciar. Esto todavía no se ha probado en todas las plataformas; avísenos si el idioma no cambia.
- **Script del paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta hasta 20 segundos y reintenta junto al paquete.

## Todavía no está en esta versión

- **Ayudas de seguridad y diseño.** Personas en el edificio no tiene un límite de distancia de recorrido de un código de construcción (usted escribe el límite) y no se ha verificado a mano en un plano real. Las cifras de acústica, ciclo de vida y amenazas son valores de planeación, no una verificación de norma.
- **Escenarios climáticos futuros y EnergyPlus.** No hay escenarios climáticos futuros integrados: puede cargar un archivo de escenario para la corrida de inundación. La corrida de EnergyPlus en el navegador no forma parte de esta versión.
- **Diseño Ribbon.** Cuantificación de materiales sigue como "No disponible", porque BimCraft no tiene una lista de cantidades de material, y otras 54 herramientas en gris del Ribbon todavía no tienen una herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:Más información}}, luego {{ui:Ejecutar de todas formas}}, y macOS requiere clic derecho y luego {{ui:Abierta}}. La versión para iPad e iPhone no se volvió a compilar para 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas anteriores del navegador de BimCraft siguen fallando en nuestra página de prueba, como antes de 0.8.1.

Todo lo demás está en [Lo que todavía no está disponible](topic:not-built-yet). Los cambios anteriores están en [Novedades en 0.7](topic:whats-new-0-7).
