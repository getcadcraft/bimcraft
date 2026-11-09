---
title: Novedades de la 0.8 y la 0.8.1
summary: BimCraft añade personas que recorren el edificio, acústica de habitaciones que se puede escuchar, reproducción de inundaciones, viento y terremotos, una vista del ciclo de vida a cincuenta años, comprobaciones con un IDS, etiquetas y calendarios, Mover, Alinear y Distribuir, imágenes bajo la planta, muros a partir de un escaneo, dibujos de paneles, solar, sistemas split y VRF, dimensionado de tuberías y cables, comprobaciones de hormigón y sísmicas, cualquier proyección cartográfica, elección del motor de renderizado y deshacer en Studio; la 0.8.1 corrige las herramientas en gris de la distribución con cinta de opciones.
keywords: novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta al impulso, inundación, viento, terremoto, peligro, ciclo de vida, vida útil, ids, etiquetas, calendarios, mover, alinear, distribuir, imagen, fondo, escaneo a muros, emplazamiento desde civilcraft, dibujos de paneles, entramado, solar, fv, split, vrf, fan coil, dimensionado de tuberías, bandeja de cables, iluminancia, hormigón, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, coste, energyplus, motor de renderizado, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta de opciones, navegador de proyectos, presentación
from: 87b03056
---

Estos son los cambios de BimCraft 0.8 (01/11/2026) y 0.8.1 (02/11/2026), en comparación con la 0.7. BimCraft ya puede responder preguntas sobre un edificio y ponerlo a prueba, con personas, sonido, agua, viento y terremotos, y dibujarlo con más herramientas; la 0.8.1 es una versión de correcciones.

## Novedades

### Probar el edificio

- **Personas en el edificio.** La sección {{ui:Personas en el edificio}} del panel izquierdo hace recorrer por sus habitaciones, puertas y escaleras una evacuación o las llegadas de un día normal. Se ven las colas donde el edificio se estrecha, el recorrido más largo hasta una salida desde cada habitación y cuánto tarda la última persona. Marque {{ui:Cerrada}} en una puerta para ver qué cambia, y marque {{ui:Mostrar las personas en la vista 3D}} para ver a los caminantes. Los resultados van a Problemas. Es un modelo aproximado de multitudes para decisiones de diseño, no un certificado de protección contra incendios. Véase [Hacer recorrer a personas por el edificio](topic:people-in-the-building).
- **Acústica de habitaciones, y escucharla.** La sección {{ui:Acústica de habitaciones}} indica el tiempo de reverberación de cada habitación por bandas de octava (Sabine y Eyring) a partir de su tamaño y de los acabados que se elijan, y con un objetivo propio indica cuánta absorción cumpliría con él. {{ui:Reproducirlo en esta habitación}} reproduce una voz, un aplauso, notas pulsadas o un archivo de sonido propio a través de una respuesta al impulso calculada para la habitación. Los valores de absorción son valores publicados típicos que puede sustituir. Véase [Acústica de habitaciones](topic:room-acoustics).
- **Reproducción de inundaciones, viento y terremotos.** {{ui:Reproducción de peligros}} muestra el agua que sube por las habitaciones, la presión del viento en cada planta y un terremoto que sacude las plantas, en una planta o un alzado con un deslizador de tiempo. Son modelos sencillos, con sus supuestos en el panel; no es una comprobación normativa. Véase [Reproducir una inundación, viento o terremoto](topic:hazard-playback).
- **Qué se desgasta en cincuenta años.** {{ui:Vista del ciclo de vida}} enumera las ventanas, puertas, acabados y cubierta, con una vida útil cada uno, los años en que se sustituyen y, si se escribe un coste por unidad, el coste por año y su valor actual. {{ui:Guardar el calendario (CSV)}} lo exporta. Las vidas útiles son cifras de planificación. Véase [Ver qué se desgasta en cincuenta años](topic:life-cycle-view).
- **Comprobaciones de hormigón y sísmicas.** Los bloques {{ui:Elementos de hormigón}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} comprueban vigas y pilares de hormigón según ACI 318-19 y calculan fuerzas laterales equivalentes según ASCE 7-22 en forjados rígidos, con la deriva por planta. Para que lo revise un ingeniero. Véase [Comprobar elementos de hormigón y obtener cargas sísmicas](topic:concrete-and-seismic).

### Comprobar e informar

- **Comprobar con un IDS.** Cargue el archivo `.ids` que le entregó un cliente y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC. Abra {{ui:Comprobar con un IDS}} en {{ui:Comprobaciones del modelo}}. Véase [Comprobar un modelo con el IDS de un cliente](topic:check-against-ids).
- **Etiquetas y calendarios.** Defina sus propias etiquetas, asígnelas a muchos elementos a la vez y cree calendarios cuyas columnas, filtros y agrupaciones las lean; las etiquetas se conservan en el IFC. Véase [Etiquetas y calendarios](topic:tags-and-schedules).
- **Documentos a partir del modelo.** {{ui:Documentos a partir del modelo}} rellena una plantilla de especificaciones con el IFC abierto y la guarda como PDF, documento de Word o Markdown. Véase [Documentos a partir del modelo](topic:documents-from-the-model).
- **Comparar un escaneo con el modelo.** Con una nube de puntos abierta, {{ui:Comparar}} juzga cada elemento como construido, parcialmente construido, que falta o no alcanzado, y muestra el porcentaje construido. Véase [Comparar un escaneo con el modelo](topic:compare-scan-with-model).
- **Carbono y coste.** El panel de carbono suma el carbono incorporado a partir de una tabla de factores que se puede editar, y el panel de coste reparte los precios sobre el calendario 4D. Los factores que incluye BimCraft son genéricos y están marcados como no comprobados. Véase [Carbono incorporado y coste](topic:embodied-carbon-and-5d-cost).
- **Cualquier proyección cartográfica.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, una zona UTM, un nombre o una definición de proyección propia. Véase [Georreferenciar con cualquier proyección](topic:georeference-any-projection).

### Dibujar y editar

- **Mover, Alinear y Distribuir.** En {{ui:Compilación}}; {{key:Shift+M}} inicia Mover ({{key:M}} sin más sigue siendo {{ui:Medir}}). Mover copia mientras avanza con {{key:C}}, cada paso es un único deshacer, y se transmite en una sesión de Live TeamWork. Véase [Mover, copiar, alinear y distribuir](topic:move-align-distribute).
- **Imágenes bajo la planta.** {{ui:Compilación}} › {{ui:Imagen}} coloca un PNG, JPEG o WebP bajo el plano de una planta o en un plano vertical. Se fija la escala con dos puntos, y se pueden mover, girar, atenuar y bloquear. Un área copiada desde MarkupCraft se pega a la escala de su hoja. Véase [Colocar una imagen bajo la planta](topic:pictures-as-backgrounds).
- **Muros a partir de un escaneo.** Con un escaneo abierto, los muros, puertas y habitaciones llegan como propuestas que se conservan o se rechazan una a una, en un solo paso de deshacer. Solo se encuentran muros en dos direcciones perpendiculares. Véase [Convertir un escaneo en muros](topic:scan-to-walls).
- **Calcar, plumas y croquizar escalera.** {{ui:Calcar}} muestra otra planta con trazos bajo el plano, {{ui:Plumas}} da a muros, puertas y ventanas su propio grosor de línea en una sola vista, y {{ui:Croquizar escalera}} convierte una línea de recorrido en una escalera. Se abre una malla OBJ de Wavefront. Véase [Calcar una planta, plumas y una escalera a partir de un croquis](topic:trace-pens-stairs-obj).
- **Edificios alrededor de una dirección.** Los edificios y la parcela que encontró Address to site de CivilCraft llegan como sugerencias; marque las que quiera añadir. Véase [Empezar desde el emplazamiento de CivilCraft](topic:site-from-civilcraft).
- **Dibujos de paneles.** {{ui:Compilación}} › {{ui:Dibujos de paneles}} dispone el entramado de muros, forjados y cubiertas de madera o de acero ligero conformado en frío, y guarda una lista de corte en CSV y planos de taller en PDF. Son valores de partida, no un diseño estructural. Véase [Dibujos de paneles](topic:panel-drawings).
- **Paleta de símbolos y plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} encuentra símbolos eléctricos y de fontanería por nombre; la fuente {{ui:Plantas}} de {{ui:Biblioteca}} lista unas 400 plantas con símbolos de planta. Véase [Paleta de símbolos](topic:symbol-palette) y [Colocar una planta](topic:plant-list).

### Tuberías, conductos y energía

- **Split, VRF y fan coils.** Unidades interiores y exteriores con sus conexiones, y juegos de tuberías de refrigerante dimensionados a partir de una tabla de valores típicos de ejemplo que se puede cambiar. Véase [Split, VRF y fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** El panel de cálculos comprueba el dimensionado de tuberías y conductos con la pérdida de presión, encamina cables por bandejas y conductos y muestra su llenado, y calcula la iluminancia a partir de archivos IES o EULUMDAT. Los valores predeterminados están marcados; escriba los valores de su normativa. Véase [Cálculos de tuberías, conductos, cables e iluminación](topic:mep-calculations).
- **Archivos PCF.** La herramienta de tubería, con **Exportar PCF**, escribe los tramos para programas de tensiones en tuberías e isométricos, y un archivo PCF leído de nuevo dibuja su tubería. Véase [Archivos de componentes de tubería](topic:piping-pcf).
- **Solar fotovoltaica.** Coloque matrices de módulos en cubiertas o en el suelo, dé sombra desde el modelo, estime la energía anual, compruebe las cadenas y genere los datos del esquema unifilar. El módulo inicial y las pérdidas son genéricos. Véase [Solar fotovoltaica](topic:solar-pv).
- **Archivo de EnergyPlus.** El panel Comprobar con EnergyPlus escribe el modelo como un IDF para ejecutarlo en su propio EnergyPlus. Ejecutarlo en el navegador necesita una compilación que aloje usted mismo y cuya dirección escribe usted; BimCraft no la incluye. Véase [Comprobar calefacción y refrigeración con EnergyPlus](topic:check-with-energyplus).

### Imágenes y archivos

- **Elija el motor de renderizado.** {{ui:Renderizar}} tiene una opción {{ui:Motor}}. Nuestros dos motores integrados (Rápido y Trazador de trayectorias) siguen siendo los predeterminados. **Abrir en** guarda la escena como archivo USD o glTF, y una carpeta de proyecto de Unreal como .zip; en CadCraft Studio, un complemento puede añadir un motor. El complemento de Unreal que abre el proyecto no se ha publicado. Véase [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Deshacer en Studio.** Dentro de CadCraft Studio, BimCraft comunica a Studio cada paso terminado, para que Studio pueda deshacer el último paso en la ventana que se usó por última vez. Véase [Deshacer entre aplicaciones](topic:undo-across-apps).
- **Complementos en su archivo.** Un IFC registra qué complementos escribieron en él, y ofrece los que le falten al abrirlo. Véase [Complementos en su archivo](topic:add-ons-in-your-file).

### En todas las aplicaciones

- **Conecte su IA.** Su propio asistente puede manejar BimCraft a través de la conexión de Studio y responder preguntas sobre el modelo, como qué habitaciones están bajo una superficie dada. Studio no tiene IA propia. Véase [Permita que un asistente de IA trabaje con su modelo](topic:assistants).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila; Ajustar sigue siendo el predeterminado.
- **Dispositivos de entrada.** Los ajustes del panel táctil, el lápiz, el ratón 3D, el mando y MIDI se comparten entre todas las aplicaciones.
- **Problemas y Live.** El panel de advertencias y las sesiones Live funcionan como antes, y las nuevas comprobaciones alimentan Problemas.
- **Idiomas.** 54 idiomas, diez de ellos nuevos. Los distintos del inglés son traducciones automáticas que aún no ha revisado un hablante nativo; los temas de ayuda están en su mayoría en inglés.

## Corregido en la 0.8.1

- **Distribución con cinta y Navegador de proyectos.** Insertar › Importar CAD, Insertar › Imagen y Gestionar › Unidades del proyecto decían «Todavía no integrado en BimCraft». Imagen ahora abre la herramienta Imagen, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un dibujo…}} (DWG, DXF, PDF o un escaneo), y Unidades del proyecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover y Alinear ejecutan las herramientas Mover y Alinear, Nivel abre {{ui:Agregar niveles…}}, Fases abre la sección de fases de renovación y Materiales abre la biblioteca de materiales.
- **Sección de clases DWG.** Se leía como un tipo incorrecto; corregido en BimCraft y en las demás aplicaciones que leen DWG.
- **Idioma en tiempo de ejecución.** Studio y las ediciones empaquetadas ya pueden cambiar de idioma sin reiniciar. Esto aún no se ha probado en todas las plataformas; díganos si el idioma no cambia.
- **Script de paquete de Archicad.** `archicad_bundle.py`, una descarga aparte, ahora encuentra la ruta de Archicad, vigila la carpeta durante hasta 20 segundos y reintenta junto al paquete.

## Aún no en esta versión

- **Ayudas de seguridad y diseño.** Personas en el edificio no tiene un límite de distancia de recorrido de un código de edificación (lo escribe usted) y no se ha comprobado a mano en un plano real. Las cifras de acústica, ciclo de vida y peligros son valores de planificación, no una comprobación normativa.
- **Escenarios climáticos futuros y EnergyPlus.** No hay escenarios climáticos futuros integrados: puede cargar un archivo de escenario para la simulación de inundación. La ejecución de EnergyPlus en el navegador no forma parte de esta versión.
- **Distribución con cinta.** Cómputo de materiales sigue como «No integrado», porque BimCraft no tiene una lista de cantidades de materiales, y otras 54 herramientas en gris de la cinta no tienen aún ninguna herramienta de BimCraft detrás.
- **Firma y plataformas.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que SmartScreen muestra {{ui:Más información}}, después {{ui:Ejecutar de todas formas}}, y macOS necesita clic con el botón derecho y luego {{ui:Abierta}}. La versión para iPad e iPhone no se recompiló para la 0.8.1.
- **Pruebas en páginas reales.** Algunas pruebas antiguas del navegador de BimCraft siguen fallando en nuestra página de prueba, como antes de la 0.8.1.

Todo lo demás está en [Qué no está integrado todavía](topic:not-built-yet). Los cambios anteriores están en [Novedades de la 0.7](topic:whats-new-0-7).
