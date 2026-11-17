---
title: Luz natural peteĩ ambiente-pe oñemedi
summary: Factor de luz diurna promedio ambiente-kuéra-gui, ventana-kuéra, ijyvy superficie-kuéra ha cielo ojehecháva ventana-kuéra, cielo ángulo modelo-pe oñemedíva. Diseño tempranopegua estimación, ndaha'éi simulación térã código-pe verificación.
keywords: luz natural, factor de luz diurna, factor de luz diurna promedio, adf, componente de cielo vertical, vsc, ganancia solar, sol, valor g, grilla, flujo dividido, componente de cielo, componente reflejada internamente, luz natural, ventana, vidriado, ángulo de cielo, obstrucción, sombra, balcón, alero, reflectancia, transmitancia, diseño temprano, análisis, ambientes, espacios
from: 5f300a78
---

Pestaña {{ui:Daylight}} panel derecho-pe oñemedi ambiente peteĩteĩ **factor de luz diurna promedio**: mbaʼeichagua luz cielo nublado ojeapytáva ambiente-pe, promedio-pe, porcentaje-pe. Modelo IFC ojehechaukáva ambiente (espacio) ha ventana-kuéra oléi. Modelo-pe ndaipóri oñemoambue ha ndoupi ojeguenohẽ.

:::warning
Ko pestaña-pe opavave **diseño-pe mbohapy tembiapo, ndaha'éi cumplimiento cálculo**: diseño tempranopegua estimación método publicado-gui, **ndaha'éi simulación** ha **ndaha'éi verificación código-pe térã norma-pe**. BS EN 17037, LEED, BREEAM ha energía código-kuéra oikotevẽ luz natural simulación lugar clima ndive; upéva-rã eiporu luz natural simulación programa.
:::

## Mbaʼéichapa oñemedi

1. Ejepe'a modelo IFC ambiente (espacio) ha ventana-kuéra ndive. Ko modelo-pe peteĩ ambiente oĩ muro cerrado peteĩ-peteĩ rupi.
2. Ejepe'a pestaña {{ui:Daylight}} ha eclik-e {{ui:Calculate}}.
3. Ambiente peteĩteĩ ohechauka factor de luz diurna ha banda: 2 % gui mboyve, 2–5 %, 5 % térã mayor. Eclik-e ambiente-pe ohecha hag̃ua superficie-kuéra ha ventana peteĩteĩ área ha cielo ángulo; ambiente ha ijyvy ventana-kuéra modelo-pe oiporavo.

Peteĩ dato oñemoambue, número-kuéra oñemoambue enseguida; modelo oñemoambue rire, eclik-e {{ui:Calculate again}}. {{ui:CSV}} oñembosaraʼi ambiente opavave número ndive ha oiporavo datos.

## Fórmula

Factor de luz diurna promedio (%) = T × Ag × θ × M ÷ (A × (1 − R²)), ambiente ventana-kuéra-pe ojoaprovecha (Littlefair fórmula, BRE 209, BS 8206-2 ha CIBSE LG10 oipuru):

- **T**, vidrio luz transmitancia (0,7 kuerái: eiporu fabricante dato).
- **Ag**, vidrio área: ventana peteĩteĩ área (ancho entero × alto, térã modelo-pe tamaño) × **vidrio proporción** (0,75 kuerái: ambue ha marco).
- **θ**, cielo ángulo ventana ohecháva, grado-pe (ko kuehe).
- **M**, mantenimiento factor vidrio-pe mbakuʼi rehe (1 kuerái).
- **A**, ambiente opavave ryepy superficie: piso, muro-kuéra, techo ha ventana-kuéra, ambiente forma propiahápe.
- **R**, umi promedio reflectancia, área rehe ponderada: piso 0,2, muro 0,5, techo 0,7 kuerái; vidrio 0,1 ohechakuaa.

## Mbaʼéichapa oñemedi cielo ángulo

Ventana peteĩteĩ-pe BimCraft ojerasa modelo vertical plano-gui, ventana-pe cuadrado, vidrio cara externa-gui, ha horizonte-gui ojeho ryguasu: ventana mboyve corte oñepyrũ (ambue edificio, balcón térã alero, aleró) oculta 90° rovaʼekue. θ ojeguerekóva. Ventana ha muro ijyvy ojehasa. Ventana ancho rapykuéri mbohapy puntore ojapo ha promedio ojeikuaa, upévare poste delgado centro mboyve iparte oguereko, cielo opavave ndaha'éi.

Edificio 8,5 m ventana centro ári ha 9,9 m mboyve oculta 40,65° (ángulo tangente 8,5 ÷ 9,9), oguerekóva θ = 49,35°.

## Vertical cielo componente ventana peteĩteĩ-pe

{{ui:Calculate}} oñemedi avei peteĩteĩ ventana cielo opavave ohechakuaa: mismo corte vertical, ventana cara-pe opavave dirección-pe oporojehe (2° peteĩteĩ, peteĩ lado gui ambue lado-pe), upévare edificio peteĩ lado, aleta térã hondo marco iparte. Upegui BimCraft ojapo **componente de cielo vertical (VSC)**: cielo nublado luz mbaʼépa ojeapy vidrio-pe, techo plano abierto ojehupytýva rehegua proporción-pe. Ventana ndaipóri ohechéva mbaʼe **39,6 %**, vertical ventana rehe ojeguerekóva hetaiterei; edificio 25° ventana ári oñembotuichave ohejáva apytépe **27 %**, BRE 209 guía británica regla práctica. Ambiente detalle-pe ventana peteĩteĩ ohechauka VSC ha **obstrucción ángulo** (mbaʼépa ojeguenohẽ ventana mboyve).

Cielo CIE estándar nublado, horizonte-gui tres vez ymaguare, ha corte exacto: ndaipóri muestreo.

## Sol ventana-kuéra-gui peteĩ fecha-pe

Eclik-e {{ui:Sun through the windows on a date}} ha eiporavo fecha. BimCraft sol araʼype cuarto de hora-pe ojejapo ha ventana peteĩteĩ-pe ohupi hi'ũ vidrio-gui ojegueru:

- **sol directo**, ventana mboyve oĩhápe ha modelo ndojeheséi (corte exacto, sol rehe ojeguerahaukáva: balcón ojekuaáva ka'aru sol verano-pe, invierno sol kuarahy-pe oike).
- **cielo luz** vidrio-pe, ventana ndojehecháiva rembe.
- **tierra-gui ojeguerahaʼa luz** (reflectancia: 0,2 kuerái).
- opavave vidrio **g-value**-gui (sol energía ojeguerahaʼaráva: 0,6 kuerái; fabricante dato eiporu) ha vidrio proporción.

Ambiente peteĩteĩ ohechauka día total kWh-pe ha ápe pico vatio-pe hora ndive; ambiente detalle día gráfico-pe. Cielo ndaipóri nubes, Hottel modelo-gui (Duffie ha Beckman, *Solar Engineering of Thermal Processes*), lugar ha estación verano térã invierno dato ndive, sitio altura; sol ojeguenohẽ NOAA-gui. Sitio latitud ha longitud IFC sitio-gui ojegueru, norte modelo verdadero norte-gui; modelo-pe sitio ndaipóri, latitud ha longitud emoĩ. Hora estándar (verano hora ndaipóri) emoĩ zona horaria-pe ejeporu, térã longitud ohechaukáva.

Ndojeikuaái: nubes (día despejado), vidrio ojegueru menos ángulo ro'y-pe, marco sombra vidrio-pe, persiana-kuéra, muro ha techo ojegueraha. Pestaña ojoavy enfriamiento estimación pico oporavo.

## Factor de luz diurna grilla-pe

Eclik-e {{ui:Daylight factor on a grid}} ha {{ui:Work out the grid}}: BimCraft grilla piso ambiente-pe ojapo plano de trabajo altura-pe (0,85 m kuerái), medio metro muro-gui adentro, ha punto peteĩteĩ-pe factor de luz diurna BRE split-flux método-gui:

- **cielo componente**: punto-gui ojehecha cielo nublado ventana abertura rupi, marco ndive.
- **externamente reflejado componente**: punto ojehecha edificio externo ventana rupi, cielo atrás décima parte-pe ñemimbyre (obstrucción brillo emoĩ, tuichaiterei claro térã oscuro ikatu).
- **internamente reflejado componente**: ambiente rupi ojeguahẽva luz, superficie-kuéra ha reflectancia-gui, ventana área ha oĩva ruguépe (BRE fórmula, vidrio transmitancia ndive, clara vidrio oñeikuaava rãgui).

Ambiente peteĩteĩ ohechauka promedio, punto mboyvéva ha 2 % térã mayor oguerekóva; ambiente detalle plano-pe punto peteĩteĩ factor de luz diurna-pe mbyreha ha ventana-kuéra mborayhu-pe. Computadora-pe rapidez-pe, ambiente-pe **400 punto** ojapo ko guasu: ambiente guasuvéva espaciado ojeagranda (espaciado escribí ejepapa'ỹ).

## Mbaʼe ndojehechái

- Techo ventana-kuéra (vidrio ojapo plano térã inclinado) listado ojerechapa, ndojehesaʼỹi: fórmula-kuéra muro ventana-kuéra-pe.
- Ventana ndaipóri ambiente rupi (ko hall ambiente-ndaipóri, por ejemplo) listado aparte.
- Ventana retranqueo (abertura cara externa-pe), deslumbramiento, sol horas ha clima luz natural. BS EN 17037, LEED térã BREEAM-pe eiporu luz natural simulación programa.
- Banda-kuéra británico guía ñemimbyre (BS 8206-2) gui, orientación-pe ohechauka, ndaha'éi aprobado térã reprobado.
