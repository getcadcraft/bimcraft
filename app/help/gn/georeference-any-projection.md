---
title: Georreferenciar con cualquier proyección
summary: Omombe'u BimCraft-pe mba'e mapa sistema modelo coordenadas oiko, EPSG lista hetãva, UTM zona ojoguáva térã peteĩ proyección nde ojapóva, ha ojeporavo Ubicación, mapa capas ha nube de puntos-pe.
keywords: proyección, sistema de coordenadas, crs, epsg, utm, zona utm, proyección personalizada, proj4, cadena proj, prj, wkt, georreferenciar, georreferenciación, conversión de mapa, ifcprojectedcrs, mis proyecciones, latitud, longitud, este, norte, lambert, gauss-kruger, state plane, red nacional
from: 6894c1f2
---

Plano hetave oñemoĩ mapa sistema-pe ndaha lista pyahúpe: UTM zona, red nacional, térã proyección peteĩ texto definición oñemboguaáva. {{ui:Medir}} › {{ui:Sistema de coordenadas…}} oheka nde sistema modelo ojeporavo.

## Elegir el sistema para un modelo

1. Eabrí modelo, eiporavo {{ui:Medir}}, upéi {{ui:Sistema de coordenadas…}}.
2. Buscador-pe emoĩ. Ojeporavo ko'ã:
   - EPSG número: `32633` térã `EPSG:2277`;
   - UTM zona: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - réra palabra: `lambert 93`, `mga zone 56`, `texas central`;
   - proyección definición: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, mboyve réra ñeme'ẽ (`Mi red = +proj=…`);
   - `.prj` archivo texto, térã {{ui:Eguarda archivo .prj…}} ojeporavo.
3. Peteĩ resultado eiporavo, upéi {{ui:Usar este sistema}}.

Eligeha modelo-pe oguarda (propiedad conjunto `CadCraft_CRS` proyecto-pe), upéicha modelo oñeabrí jey. Modelo oguarda ajúrõ. {{ui:Quitarlo del modelo}} archivo mba'e ohechakuaáva omoĩ jey.

Tu definición ohechaukáramo mismo coordenada EPSG sistema lista-pe, BimCraft omombe'u ha oiporavo ko código; sistema lista hetãva matemática peteĩ ha'e jave, ambue réra ñeme'ẽ.

## Mis proyecciones

Definición nde pegado térã cargado `.prj` ikatu oñeguarda {{ui:Emoŋgue Mis proyecciones-pe}}. Lista ko dispositivo-pe oikóta (ko navegador-pe) ha ofrécese próxima vez elegidor abrirse.

## Mba'e ojeporavo

- {{ui:Medir}} › {{ui:Ubicación}} mbohapy punto latitud ha longitud-pe modelo sistema rupi. Ántes nota ojehai archivo mapa sistema réra EPSG código'ỹ jave; oguarda elección jave respuesta ome'ẽ.
- Mapa capas modelo raʼỹ mismo sistema ojeporavo. Otro sistema nube de puntos térã terreno archivo modelo sistema ofrécese (ambue ohechauka).
- {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Ubicación}} › {{ui:Elegir otro sistema…}} emoĩ mba'e {{ui:Ubicación}} ojehai: latitud ha longitud lista geográfica sistema-pe, térã este ha norte proyectado sistema-pe, modelo propio ndive.

## Modelo ndaha mapa-pe aún

Archivo mapa conversión'ỹ jave, sistema elegido ojehai {{ui:Ubicar este modelo en el mapa}}. Oñeabrí ikatu {{ui:Medir}} › {{ui:Origen mapa-pe…}} rupi.

1. Modelo origen este ha norte sistema-pe ome'ẽ, térã latitud ha longitud emoĩ ha {{ui:Convertir Este y Norte-pe}} eiporavo.
2. Rotación norte de cuadrícula-pe ome'ẽ (grado, contrarreloj; 0 modelo Y eje norte cuadrícula-pe) ha origen altura.
3. Escala modelo ha mapa unidad diferencia-gui oñepyrũ (0.001 metro cuadrícula milímetro modelo-pe). Oñemoambue ramo solo suelo-cuadrícula factor combinado.
4. Eiporavo {{ui:Ubicar-pe mapa}}. Peteĩ paso de deshacer oguarda IfcProjectedCRS ha IfcMapConversion (IFC4). Modelo mismo ndomoveí.

IFC2X3 archivo ndaguerekói ambue entidad: BimCraft oguarda número ko estándar ojeporúva rehe: buildingSMART propiedad conjunto `ePSet_MapConversion` ha `ePSet_ProjectedCRS` proyecto-pe, sitio latitud ha longitud ha norte verdadero. Diálogo omombe'u. Modelo oguarda ajúrõ.

## Modelo ya mapa-pe

Archivo ya mapa-pe ojehecha ha ambue sistema eligeha, BimCraft pregunta:

- {{ui:Cambiar solo lo que Ubicación informa}} archivo georreferencia oñeguarda ha nde elección ojeporavo {{ui:Ubicación}}, mapa capas ha nube de puntos-pe (modelo número nuevo sistema-pe leeha).
- {{ui:Mover modelo ko sistema-pe}} georreferencia oñemoambue: origen proyección rupi (este, norte, altura, rotación ha escala) ha IfcProjectedCRS (réra, datum, proyección, zona, unidad) oñemoambue, IFC guardado nuevo sistema omombe'u. Lugar tierra mismo; origen latitud ha longitud oñeguarda. Modelo elementos ndomoambuéi; georreferencia ñ.

Diálogo elección ántes viejo ha nuevo origen ohechauka. Ida ha vuelta origen milímetro barrera-pe ojeporavo.

## Nube de puntos y terreno en otro sistema

Nube térã estudio archivo nde sistema (LAS, LAZ, E57, GeoTIFF) térã ninguno. Modelo sistema ndahasýi jave, BimCraft ofrece {{ui:Reproyectar modelo sistema-pe}}. Puntos lotes-pe oñemoveva (oñeʼẽ hetave jave worker-pe, página pytyvõ oikóva), archivo ordenador-pe ndojejapói, estado línea omombe'u mba'e ojejapo. Archivo oñeabrí jey own sistema-pe ojejavy. Nube ya abierto jave, nube barra-pe {{ui:Reproyectar modelo-pe…}} upéicha.

Archivo sistema réra ndojehai jave, BimCraft pregunta {{ui:¿Mávapa sistema-pe ko archivo?}}: {{ui:Eligé sistema…}} ndive elegí, ha respuesta archivo ko dispositivo-pe oñemanduʼa. {{ui:Mantener archivo-pe sistema propio}} puntos oguejy ha'e haguéicha.

## Cuando algo es aproximado

Problemas diálogo-pe ha Problemas panel-pe oñemombe'u, ndaha oñemboty:

- Sistema ojapóva área ndaha lugar: número oikóta, distorsión oguejy.
- Datum cambio grilla archivo oikotevẽ (NADCON, NTv2 ha ambue) ndojejapóiva. Datum ambue sistema grilla'ỹ cambio EPSG registro omombe'u rupi oñemoveva, resultado aproximado; mensaje metro-pe omombe'u.
- Proyectable ndaha punto ha'e pe ndojejapói, cuenta; tamaño límite archivo ojeporavo jave, límite omombe'u.

:::tip
Mapa coordenadas conversión oikotevẽ. Conversión'ỹ archivo {{ui:Origen mapa-pe…}} ndive mapa-pe oñemoĩ.
:::

:::note
Datum entre oñemoambue grilla archivo'ỹ jave, buena peteĩ metro pyahu; Ubicación resultado omombe'u cuánto, catálogo ohechakuaa jave.
:::
