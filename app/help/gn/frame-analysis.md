---
title: Analizar marco estructural
summary: Fuerzas, reacciones y deflexiones de vigas, columnas y riostras del modelo bajo casos y combinaciones de carga que vos fijás, guardadas en el IFC. Ayuda para el análisis, no verificación de norma.
keywords: análisis, unidades, pies y pulgadas, unidad de visualización, análisis estructural, verificaciones de diseño, utilización, laminado, soldado, AISC 360, EN 1993-1-1, análisis de marco, modelo analítico, método de rigidez, cargas, caso de carga, combinación, carga muerta, carga viva, peso propio, reacciones, momento flector, cortante, fuerza axial, deflexión, forma deformada, apoyos, articulado, empotrado, liberación, informe, pdf, csv, craftscript, frame3d, vigas, columnas, piezas
from: b93b58c4
---

La pestaña {{ui:Análisis}} a la derecha ojuhu fuerzas viga, columna ha riostra modelo abierto-pe, reacciones columna pie-pe ha mba'éichapa oñemboguejy viga, ojeporavo carga rupi.

:::warning
Ha'e **ayuda para análisis, ndaha verificación de norma**. Análisis ndaipóri norma, ndoheka tamaño pieza ni capacidad, ha ndoeligi factor carga. Ingeniero modelo analítico, cargas ha apoyos ohecha, ha ohechakuaa mba'épa número omombe'ua. Bloque {{ui:Verificaciones de diseño}} gueteri omoĩ chupe verifica perfil I laminado acero AISC 360 térã EN 1993-1-1 rehe, ayuda añoite ingeniero oheka: eheka [Verificaciones de diseño](topic:frame-analysis#design-checks).
:::

## Ejecutar

1. Eabrí modelo IFC ha pestaña {{ui:Análisis}}.
2. Vista-pe peteĩ térã hetave viga, columna térã riostra eiporavo, eiporavo {{ui:Caso}}, {{ui:Carga}} ha {{ui:Dirección}}, emoĩ valor ha ekliki {{ui:Agregar carga}}: kN/m pieza rehe mboyve carga, kN puntual carga.
3. Ekliki {{ui:Ejecutar análisis}}.

Tabla omombe'u peteĩ-peteĩ pieza axial fuerza tuichave, cortante, momento flector, torsión ha deflexión; ekliki pieza réra vista-pe ojuhu haguã. Ári reacciones. {{ui:En el modelo}} omoĩ forma deformada, térã peteĩ acción diagrama peteĩ-peteĩ pieza ndive. Resultado oñemoĩ mavãmi modelo oñemoambue jave: ejecutá jey.

Peteĩ-peteĩ carga ha ajuste ha'e peteĩ cambio **{{ui:Cambios}}** lista-pe: {{ui:Deshacer}} oheja chupe, ha {{ui:Guardar como IFC}} oguarda archivo-pe (proyecto `CadCraft_Analysis` propiedad conjunto), upéicha modelo oñemoĩ jave cargas oikóta.

## Mba'éichapa oñemoĩ modelo analítico

- Opavave IfcBeam, IfcColumn ha IfcMember peteĩ recta extrusión forma ha'e pieza sección centroide línea-pe. Sección propiedad forma rehe: I, U, L ha T forma, rectángulos ha tubos, círculos ha tubos redondos, térã peteĩ contorno cerrado (torsión constante estimación, informe-pe oñe'ẽ). Ambue ndoikóiva omboykéva ha ojehecha.
- Modelo-pe, viga columna cara-pe oñemboguejy ha piso raʼỹ omoĩ. Peteĩ-peteĩ pieza extremo ojogua iñe'ẽ línea rehe pieza eje-pe, eje ojoapy jave (tamaño sección rehe), ha pieza upe-pe ojapo. Informe omombe'u extremo hetave oñemboguejy.
- **Pies de columna** ndaipóri nada raʼỹ, apoyo: empotrado (ñepyrũ) térã articulado (ojeapytaha ha omotenonde'ỹ, ojeguerojái).
- **Extremos de viga** ha'e rígido térã articulado {{ui:Extremos de vigas sin conexión}} regla rupi; **riostras** (IfcMember) peteĩ extremo articulado. Peteĩ pieza eiporavo extremo térã columna pie peteĩ regla propia.
- Material réra rupi: hormigón (E = 30 GPa), madera (E = 11 GPa), ambue jave acero (E = 200 GPa).

Estructura peteĩ oñemboguejy ndaha ñemboguejy — mecanismo — ejecución oñemboty ha omombe'u mba'épa ha mba'éichapa.

## Casos, combinaciones, signos e informe

Análisis ñepyrũ **Permanente** (peso propio), **Sobrecarga** ha **Permanente + sobrecarga**; agrega casos ha combinaciones factores ndive oikotevẽ norma rupi. N > 0 tracción; My > 0 pieza local −z lado tracción-pe (viga caída gravedad rehe My > 0). {{ui:Informe (PDF)}} ha {{ui:Informe (CSV)}} oguarda suposiciones, secciones, casos, reacciones suma ndive, fuerzas pieza, desplazamientos ha envolvente. {{ui:Exportar como CraftScript}} oheja estructura PartCraft Script espacio-pe, biblioteca función `frame3d` ohechakuaa código legible-pe.

Método ha'e rigidez directa, lineal ha primer orden, marcá *Segundo orden (P-Delta)* ndejapóramo, textbook casos rehe ojeporavo. **Segundo orden (P-Delta).** Marcá *Segundo orden (P-Delta)* Ejecutar apytépe: peteĩ-peteĩ combinación ojejapo jey pieza axial fuerzas deformada marco ári (pieza 4 pedazo ojoaju, pieza ryepe ñe'ẽ oñemoĩ), axial fuerzas ojaho peve. Resultado línea pasos número ha balanceo ojeyvy oñemomba'e; momentos, deflexiones, verificaciones ha informe ko resultado rehe. Marco elástico crítico carga yvatégui ejecución oñemboty ha omombe'u. Elástico pequeño rotación ndive, solo flexión, ndaha rigidez reducción ni carga notional (ndaha AISC método análisis directo peteĩ). Losa, pared ha piso rígido ojogua primer orden.

**Presión de piso sobre losas.** Losa hormigón rehe (análisis losa placas ohecha material hormigón ramo), Cargas bloque-pe oguerekó {{ui:Presión en cada losa}}: kN/m² emoĩ, caso ári eiporavo ha ekliki {{ui:Agregar a las losas}}. Opavave losa análisis ojuhúva rehe ojeporavo, yvategua, Eliminar enlace ndive omombe'u. Peteĩ presión opavave losa-pe, ndaha losa-pe; ndaha norma carga: emoĩ valor ingeniero ome'ẽva.

**Frecuencias naturales (elementos finitos).** Bloque {{ui:Elementos finitos: frecuencias naturales}} resultado ári ohecha modo ipyahúva mismo modelo elemento finito motor rupi: vigas extremo liberación ndive, losas ha paredes plano cuatro nodos shell, pisos rígidos, apoyos. Eiporavo modo número (3, 6, 10 térã 20) ha losa elemento (cuatro nodos shell losa gruesa térã fina ára, térã losa fina) ha ekliki {{ui:Calcular las frecuencias}}. Tabla omombe'u peteĩ modo frecuencia Hz-pe, período segundo-pe ha masa modal efectiva X, Y, Z-pe porcentaje masa oñemoveva rehe. {{ui:Mostrar en el modelo}} dibuja modo forma deformada-icha. Masa ha'e material densidad ha volumen; cargas ndoheka masa, densidad'ỹ material ndaguerekóiva. Informe (PDF, CSV) tabla oguarda. Elástico pequeño movimiento ndive, sísmica térã viento carga ndojejapóiva norma-pe. Ndaha verificación de norma; ingeniero resultado revisa.

**Espectro de respuesta, historia en el tiempo y empuje monotónico.** Mokõi bloque ambue frecuencias raʼỹ, elemento finito modelo mbojoaju. Masa opavave ha'e material densidad ha peteĩ caso permanente carga marcado, ha emoĩva factor ojeporavo (ejemplo Permanente 1 ha Sobrecarga masa ohecha tuichave).

{{ui:Espectro de respuesta}} peteĩ modo espectro rupi emoĩva (período ha aceleración tabla, térã ASCE 7 forma SDS, SD1 ha TL ndive; {{ui:Usar valores del bloque Sísmica}} botón Sísmica bloque-gui valor oguarda), modos CQC, SRSS, diez por ciento regla térã absoluta suma ndive, X, Y, Z dirección ndive (100 % + 30 % térã SRSS). Base cortante, piso deriva, extremo fuerzas ha modos tabla omombe'u; modos ohechakuaa 90 % masa-pe ndoiko jave advertencia. Resultado factor ndive escala térã base cortante emoĩva ndive; bloque ndoheka base cortante. Resultado sin signo.

{{ui:Historia en el tiempo}} suelo aceleración ojejapo modal superposición (registro línea recta exacta puntos ndive) térã integración directa (Newmark promedio aceleración ha Rayleigh amortiguamiento ndive). Entrada: sinusoide térã pulso inventado (siempre sintético etiqueta), registro pegado térã texto archivo (tiempo ha aceleración, peteĩ aceleración línea paso ndive, térã PEER estilo archivo DT= encabezado; g térã m/s²). Techo desplazamiento ha base cortante tiempo rehe, piso deriva ha extremo fuerzas envolvente omombe'u. Registro largo modelo sesión ndive guarda.

{{ui:Empuje monotónico}} techo lateral pasos chiquito-pe (modo primero patrón ichupe, térã uniforme), I forma pieza extremo plástica articulación-pe. Articulación plástico momento-pe ceder, axial fuerza ojeguasu jave bajo (dibujo forma rupi, filete ndohechái); endurecimiento opcional, P-delta opcional, gravedad combinación primero aplicable. Capacidad curva (base cortante contra techo desplazamiento), primera articulación, cada articulación estado ha plástico rotación omombe'u. {{ui:Ejecutar la historia en el tiempo no lineal}} registro Historia bloque-pe articulación ndive pequeño modelo-pe. Articulación pieza extremo-pe solamente; pieza ambos extremo liberado ndoguerekói; riostra ceder pandeo ndojejapóiva; losa ha pared elástico. Ingeniero resultado revisa; ajuste modelo ndive oguarda, informe tabla ndive.

Aún ndojejapóiva: pandeo, masa faltante corrección espectro-pe, registro escala, articulación aceptación criterio, losa carga ambue área carga opavave losa presión peteĩ ha'e, pieza offset, solo tracción riostra, pared ha losa marco-pe, welded forma norma verificación ha ndaha perfil I laminado sección. Eheka [Aún no construido](topic:not-built-yet).

## Unidades

Longitud oñemoĩ mboyve unidad herramienta {{ui:Unidades}} rehe, ambue BimCraft-icha: carga posición ({{ui:Desde}}, {{ui:A}}, {{ui:En}}), nodo carga ha reacción punto, piso altura {{ui:Sísmica}}-pe, deflexión ha deriva columna (pies ha pulgadas pequeño longitud pulgada decimal-pe ohechauka). Unidad cambia jey; tab redibuja. Fuerzas kN ha kN·m-pe, informe (PDF, CSV) ha CraftScript archivo milímetro unidad escrito-pe. Sección tamaño, barra diámetro ha recubrimiento {{ui:Hormigón}} bloque-pe milímetro-pe, réra ojehecha'ỹva.

## Verificaciones de diseño

Bloque {{ui:Verificaciones de diseño}} (DetailCraft ndive igual) oguerekó {{ui:Código de diseño}}, ASCE 7 + AISC 360 térã EN 1990 + EN 1993-1-1, ha {{ui:Grado del acero}}. Peteĩ-peteĩ caso carga clase (permanente, sobrecarga, viento …) emoĩ, ha {{ui:Armar combinaciones}} oheja código carga combinaciones casos-gui; análisis ojejapo peteĩ combinación ojejapo'ỹ jey.

{{ui:Verificar piezas}} upéi verifica peteĩ-peteĩ **perfil I de acero laminado** DetailCraft verificaciones ndive (tracción, compresión pandeo ndive, flexión pandeo lateral-torsional ndive, cortante, flexión axial fuerza ndive, deflexión; cláusulas informe-pe) ha ohechauka capacidad mbovy ojejapo, modelo-pe color. **Ayuda hasta que ingeniero revise.**

**Pieza verificada ojejapóva.** IFC perfil ndaipóri ohechauka I-forma laminado térã soldado; BimCraft laminado ha'e jave perfil réra (térã elemento tipo réra) AISC W térã S tabla térã EN 10365 IPE, HEA térã HEB tabla tamaño (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **ha** profundidad, ancho, alma ha ala archivo-pe tamaño 1 % rango-pe. Ambue I-forma (placa viga, ambue réra tamaño, editado tamaño) soldado ohecha ha **sin verificar** oguejy, tubos, ángulos, canales ha ambue sección, esbelta parte ha torsión ndive. Pieza upe-pe ingeniero ndive verifica.
