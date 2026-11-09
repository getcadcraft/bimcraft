---
title: Mba'épa pyahu 0.8 ha 0.8.1-pe
summary: BimCraft omoĩ mba'ekuaaharã mbohapy modelo-pe, mba'eapopy ojehendúva, inundación, viento ha tembla ohecha, cincuenta año ciclo de vida vista, IDS verificación, etiqueta ha planilla, Mover, Alinear ha Distribuir, imagen plano-pe, paredes escaneo gui, panel planos, sol, división ha VRF sistemas, caño ha cable dimensionamiento, hormigón ha sísmico verificación, mapa proyección, render motor ojeporu ha Studio deshacer; 0.8.1 Cinta diseño-pe ndojeporúi herramienta ojeguahẽva ojeporu.
keywords: qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, evacuación, personas, colas, acústica, reverberación, respuesta impulsiva, inundación, viento, sismo, peligro, ciclo de vida, vida útil, ids, etiquetas, planillas, mover, alinear, distribuir, imagen, fondo, escaneo a paredes, sitio desde civilcraft, planos de paneles, encuadre, solar, fv, división, vrf, fan coil, dimensionamiento de caños, bandeja de cables, iluminancia, hormigón, sísmico, comparar escaneo, epsg, proyección, documentos, plantilla, carbono, costo, energyplus, motor de render, abrir en, usd, glb, unreal, deshacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, navegador de proyecto, diseño
from: 87b03056
---

Ko'ã 0.8 (2026-11-01) ha 0.8.1 (2026-11-02) BimCraft-pe ojemoambue, 0.7 ndive ojehechápe. BimCraft ko'ẽrõ ikatu edificio-pe ojapo pregunta ha ojekuaa, personas, sonido, yvy, viento ha tembla ndive, ha herramienta tuichave ndive ojapo; 0.8.1 ha'e arreglo.

## Pyahu

### Edificio ojekuaa

- **Personas en el edificio.** Panel izquierdo-pe {{ui:Personas en el edificio}} evacuación térã ára jevy llegada ojapo ne ambiente, puerta ha escalera-pe. Colas ohechauka edificio pyhy'ỹ jave, cada ambiente-gui salida-pe tuichave ruta ha últimos persona mboyve pe ohupa. {{ui:Cerrada}} puerta-pe emoĩ ojehecha mba'e ojemoambue, ha {{ui:Mostrar las personas en la vista 3D}} emoĩ ojehecha caminante. Hallazgos Problemas-pe ohupytýva. Diseño mboyve persona modelo ha'e, incendio certificado ndaha'éi. Ehecha [Walk people through the building](topic:people-in-the-building).
- **Acústica ambiente, ha oendu.** {{ui:Acústica de ambientes}} apartado oipe'a cada ambiente reverberación octava banda-pe (Sabine ha Eyring) tamaño ha terminación gui, ha ne meta ndive absorción mba'e oiko ojepe'a. {{ui:Reproducir en este ambiente}} voz, palmada, pulsado nota térã ne sonido archivo ambiente-pe respuesta impulsiva ndive oreproduci. Absorción valores ha'e típico publicado, nde ojeporu ramo. Ehecha [Room acoustics](topic:room-acoustics).
- **Inundación, viento ha tembla reproducción.** {{ui:Reproducción de peligro}} agua ambiente-pe oheja, viento presión piso-pe ha tembla piso-pe oñemotyrõ, plano térã elevación tiempo barra ndive. Modelo sencillo panel-pe suposiciones ndive; código verificación ndaha'éi. Ehecha [Play a flood, wind or an earthquake](topic:hazard-playback).
- **Cincuenta año-pe mba'e ojehu.** {{ui:Vista del ciclo de vida}} ventana, puerta, terminación ha techo lista cada vida útil, ojeporúva reemplazo año ha costo peteĩ unidad ojehecha, año ha valor presente costo. {{ui:Guardar la planilla (CSV)}} oguarda. Vida útil planificación cifra. Ehecha [See what wears out over fifty years](topic:life-cycle-view).
- **Hormigón ha sísmico verificación.** {{ui:Miembros de hormigón}} ha {{ui:Cargas sísmicas}} {{ui:Análisis}} pestaña-pe, ACI 318-19 hormigón viga ha columna verifica, ASCE 7-22 lateral fuerza ekivalente rígido piso-pe, piso deriva ndive. Ingeniero verifica. Ehecha [Check concrete members and make seismic loads](topic:concrete-and-seismic).

### Verificar ha informar

- **IDS verificación.** Cliente-gui ome'ẽva `.ids` archivo emboguejy ha IFC entrega rire ndojehu elemento Problemas-pe ohechauka. {{ui:Verificar contra un IDS}} {{ui:Controles del modelo}} ári oprimi. Ehecha [Check a model against a client's IDS](topic:check-against-ids).
- **Etiquetas ha planillas.** Ne etiqueta emoĩ, opa elemento-pe jeheʼa emoĩ, planilla columna, filtro ha grupo ojekuaa etiqueta; etiqueta IFC-pe ojeguarda. Ehecha [Tags and schedules](topic:tags-and-schedules).
- **Modelo gui documentos.** {{ui:Documentos del modelo}} abierto IFC gui especificación plantilla omoĩ ha PDF, Word documento térã Markdown-pe guarda. Ehecha [Documents from the model](topic:documents-from-the-model).
- **Escaneo ha modelo comparación.** Nube de puntos abierto vove, {{ui:Comparar}} elemento cada construido, parcialmente construido, faltante térã no alcanzado mbohechauka, ha porcentaje construido ohechauka. Ehecha [Compare a scan with the model](topic:compare-scan-with-model).
- **Carbono ha costo.** Carbono panel incorporado carbono ojehechakuaáva tabla gui ojapo, editable factores ndive, ha Costo panel precio 4D planificación ndive. BimCraft ndive factores genérico ha no verificado marcado. Ehecha [Embodied carbon and cost](topic:embodied-carbon-and-5d-cost).
- **Mapa proyección cualquiera.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} EPSG número, UTM zona, nombre térã ne proyección definición omoĩ. Ehecha [Georeference with any projection](topic:georeference-any-projection).

### Dibujar ha editar

- **Mover, Alinear ha Distribuir.** {{ui:Compilación}} ári; {{key:Shift+M}} Mover oñepyrũ (ndaha'éi {{key:M}} ojeporu Medir). Mover {{key:C}} ndive copia ojapo, peteĩ paso peteĩ deshacer, ha Live TeamWork sesión-pe ohupa. Ehecha [Move, copy, align and distribute](topic:move-align-distribute).
- **Imagen plano ári.** {{ui:Compilación}} › {{ui:Imagen}} PNG, JPEG térã WebP nivel plano térã vertical plano ári omoĩ. Escala peteĩ punto ary dos punto ndive, mover, girar, desvanecer ha trabar. MarkupCraft-gui copiado área, hoja escala-pe omoĩ. Ehecha [Put a picture under the plan](topic:pictures-as-backgrounds).
- **Escaneo gui paredes.** Escaneo abierto vove, paredes, puertas ha habitaciones propuesta-pe ohechauka; peteĩ peteĩ ndive oguarda térã ndoguarda, peteĩ deshacer paso-pe. Dos perpendicular dirección paredes ojuhu. Ehecha [Turn a scan into walls](topic:scan-to-walls).
- **Calcar, plumas ha bosquejo escalera.** {{ui:Calcar}} ambue nivel plano ári guión-pe ohechauka, {{ui:Plumas}} paredes, puertas ha ventanas peteĩ vista-pe línea ancho ojehecha, ha {{ui:Bosquejar escalera}} línea caminata escalera-pe ojapo. Wavefront OBJ malla ojeabri. Ehecha [Trace a level, pens and a stair from a sketch](topic:trace-pens-stairs-obj).
- **Dirección ári edificio.** CivilCraft-pe **Dirección a predio** ojuhu edificio ha parcela sugerencia-pe ohechauka; marca ojeporúva oñemoĩ. Ehecha [Start from CivilCraft's site](topic:site-from-civilcraft).
- **Paneles planos.** {{ui:Compilación}} › {{ui:Dibujos de paneles}} madera térã liviano acero pared, piso ha techo marco, corte lista CSV ha taller planos PDF-pe oguarda. Punto de partida valores, estructural diseño ndaha'éi. Ehecha [Panel drawings](topic:panel-drawings).
- **Símbolos ha plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} eléctrico ha caño símbolos nombre gui ojuhu; {{ui:Biblioteca}} {{ui:Plantas}} fuente 400 planta plano símbolo ndive. Ehecha [Symbol palette](topic:symbol-palette) ha [Place a plant](topic:plant-list).

### Caños, conductos ha energía

- **Split, VRF ha fan coil.** Interior ha exterior unidades conexiones ndive, línea juego tabla gui ojapo ejemplo valores típico ndive, ojemoambue ikatu. Ehecha [Split, VRF and fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** Cálculos panel suministro caño ha conducto tamaño presión caída ndive verifica, cable bandeja ha conducto-pe ruta ojapo ha llenado ohechauka, IES térã EULUMDAT archivo gui iluminancia ojapo. Predeterminado etiqueta; ne código valores emoĩ. Ehecha [Pipe, duct, cable and light calculations](topic:mep-calculations).
- **PCF archivo.** Caño herramienta **Exportar PCF** tubería corrida tensión programa ha isométrico-pe oguarda; PCF archivo ojeabri caño omoĩ. Ehecha [Piping component files](topic:piping-pcf).
- **Solar PV.** Matriz techo térã suelo-pe omoĩ, modelo gui sombra, año energía estimá, cadena verifica ha línea diagrama datos ojapo. Inicial módulo ha pérdida genérico. Ehecha [Solar PV](topic:solar-pv).
- **EnergyPlus archivo.** EnergyPlus verificación panel modelo IDF-pe oguarda, ne EnergyPlus-pe ojeporu. Navegador-pe ojeporu jave ne ohupyty build ha dirección emoĩ; BimCraft noipyrei. Ehecha [Check heating and cooling with EnergyPlus](topic:check-with-energyplus).

### Imágenes ha archivos

- **Render motor elección.** {{ui:Render}} {{ui:Motor}} elección ohechauka. Ñande mbohapy motor (Fast ha Path tracer) predeterminado. **Abrir en** escena USD térã glTF-pe, Unreal proyecto carpeta .zip-pe oguarda; CadCraft Studio-pe complemento motor omoĩ ikatu. Unreal complemento ndojejapói. Ehecha [Choose which program draws the picture](topic:render-engines).
- **Studio deshacer.** CadCraft Studio-pe, BimCraft Studio-pe opa paso ojapo ohechauka, ha Studio ne últimogui ojeporu ventana-pe ne último paso deshacer ikatu. Ehecha [Undo across apps](topic:undo-across-apps).
- **Complementos ne archivo-pe.** IFC ojeporu complemento ohechauka, ha ojeabri jave ndereguereko ojehu. Ehecha [Add-ons in your file](topic:add-ons-in-your-file).

### Opa aplicación-pe

- **Ne IA conectá.** Ne asistente BimCraft ojerovia Studio conexión-gui, modelo ojeporu pregunta ojapo; ejemplo mávape habitación área peteĩ rehe. Studio ndoguereko IA propia. Ehecha [Let an AI assistant work with your model](topic:assistants).
- **Herramienta barra filas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}}: Envolver, 2 filas térã 1 fila; Envolver predeterminado.
- **Entrada dispositivos.** Trackpad, lápiz, 3D mouse, control ha MIDI configuración opa aplicación ojeporu.
- **Problemas ha Live.** Advertencias panel ha Live sesiones ojapo ko'ẽrõ, nuevo verificación Problemas-pe.
- **Idiomas.** 54 idioma, mbohapy nuevo. Inglés ndaha'éi ojeporu ndojejapóva ndive peteĩ nativo hablante ndojehechakuaáva; ayuda tema tuichave inglés.

## Arreglado 0.8.1-pe

- **Cinta + Navegador de proyecto diseño.** Insert › Import CAD, Insert › Image ha Manage › Project Units "Not built in BimCraft yet" ohechauka. Image Imagen herramienta oabri, Import CAD {{ui:Compilación}} › {{ui:Desde un plano…}} (DWG, DXF, PDF térã escaneo) oabri, ha Project Units {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}} oabri. Move ha Align Mover ha Alinear herramienta ojeporu, Level {{ui:Emoñe nivel…}} oabri, Phases Renovation phases apartado oabri ha Materials material biblioteca oabri.
- **DWG clases apartado.** Mba'e tipo-pe ojeporu jave ojehecha; BimCraft ha DWG ojeporu aplicación-pe arreglado.
- **Idioma ejecución-pe.** Studio ha paquete edición reinicio ndive idioma ojemoambue ikatu. Opa plataforma-pe ndojehechahá; idioma ndojemoambuéi jave ñane ho'a.
- **Archicad paquete script.** `archicad_bundle.py`, aparte descarga, Archicad ruta ojuhu, carpeta 20 segundo peve oheja ha paquete ryepý-pe ojeporu.

## Ko versión-pe ndaiporiva

- **Seguridad ha diseño ayuda.** Personas en el edificio-pe código gui viaje distancia límite ndaiporiva (ne límite emoĩ), ha plano real-pe ndoverificahái. Acústica, ciclo de vida ha peligro cifra planificación valores, código verificación ndaha'éi.
- **Clima futuro ha EnergyPlus.** Clima futuro ndaiporiva: inundación corrida-pe escenario archivo ojeporu ikatu. EnergyPlus navegador-pe ko versión-pe ndoguereko.
- **Cinta diseño.** Material Takeoff "Not built" oñemoĩ, BimCraft-pe material cantidad lista ndaiporiva, ha 54 cinta herramienta ambue BimCraft-pe herramienta ndaiporiva.
- **Firma ha plataformas.** Windows instalador ha macOS .dmg firmá noñemoĩ, SmartScreen {{ui:Más información}} ohechauka, upéi {{ui:Ejecutar igual}}; macOS-pe derecho clic ha upéi {{ui:Abierta}}. iPad ha iPhone build 0.8.1-pe ndojejapói.
- **Real página prueba.** BimCraft navegador prueba tuichavéva ñane prueba página-pe oñemboguejýi, 0.8.1 rire avei.

Opa ambue [What is not built yet](topic:not-built-yet)-pe. Mboyve cambio [What's new in 0.7](topic:whats-new-0-7)-pe.
