---
title: Mostrar nube de puntos modelo rapykére
summary: Ejeike láser escaneo (LAS, LAZ, E57, PLY, PCD, PTX, PTS térã XYZ) 3D vistape peteĩ térã IFC modelo ndive, ha'e color, peteĩ hendýva corte ojehepyta, puntokuéra peve medi, ha drafting app-pe emboguejy hagua as-built líneas calcar haguã.
keywords: nube de puntos, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, relevamiento, registro, corte, corte de planta, snap, medir, calcar, escaneo a BIM
from: d0a3e740
---

## Mba'épa ojapóta

Ehecha láser escaneo tembipota modelo rapykére: ehecha ojapo hína hag̃ua diseño ndive, medi escaneo puntokuéra apykére, ha ejapo peteĩ hendýva corte paredes, puertas ha columnas ojehecha haguã.

## Pasokuéra

1. Ejeike nube: {{ui:Open}} `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` térã `.xyz` archivo, térã emoĩ página-pe (ehecha formato tema ojeleeha haguã cada uno mba'épa ojapo ha mba'épa exportar scanner propio software-gui). Modelo ojeike jave, nube oĩ modelo ndive 3D vistape; nube ojeike ndojekañy modelo térã ndaipórivape ndojepyrũi cambio. Modelo ndojeike jave, nube oikóta peteĩ.
2. Nube barra oñeñongatu herramienta ndive. Ohechauka mbohapy puntokuéra ojehechaukáva ha archivo ohaínte.
3. Eiporavo {{ui:Color by}}: archivo colorkuéra (scanner ojesalvava ramo), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (LiDAR clasekuéra, tapykue, yvyra ha tendota) térã {{ui:One color}}. {{ui:Size}} ojapo puntokuéra tuichave térã michĩve.
4. Clic {{ui:Plan}} {{ui:Slice}} ryepýpe, ojeikuaáta peteĩ hendýva 1,2 m ijeitehápe yvate hendýgui: paredes, puerta ojehecha'ỹva ha columnas planta ojehechaseha. {{ui:Front}} ha {{ui:Side}} ojepapa tiémpo fachada ha corte haguã. Emyeñe hendýva {{ui:At}} ndive ha cambia {{ui:Thickness}} (metro). {{ui:Off}} ohechauka nube tapichakue jey.
5. Clic {{ui:Measure}} herramienta-pe. Puntero nube puntokuérare oñemoĩ (etiqueta ohechaukáta "point cloud"), upévare ikatu medi pared-gui pared-pe corte-pe, térã modelo elemento-gui escaneo-pe. Modelo esquina térã borde ojehupytýva ikatu pe'ũngue.
6. {{ui:Measure}} › {{ui:Location}} ndive, nube puntoma latitud ha longitud ohechauka nube coordenada sistema-gui, archivo heñoiva ramo.
7. {{ui:Hide}} ohapeña nube peteĩ mbykymi; {{ui:Remove}} ojeipe'a. {{ui:Show}} › {{ui:Point cloud}} ohechauka térã ohapeña barra.

## Mba'épa nube oho

Barra-pe {{ui:Place}} ohechauka mba'éichapa nube oñemoĩ modelo rendápe:

- **Modelo coordenadas**: nube numeroitape modelo rehegua ha'e (escaneo diseño coordenadas-pe registrado).
- **Mapa coordenadas**: modelo-pe mapa conversión (IfcMapConversion) oĩ ha nube proyectado sistema-pe: nube upégui oñemoĩ. Sistemakuéra ambue ha'e ramo, estado línea ohechauka.
- **Modelo centro-pe**: nube ndojeikóiramo modelo apytépe, nube mboyvegua modelo mboyvegua-pe ha puntoma hendápe modelo piso-pe. Ambue eiporavo ojapo ramo ohechauka.

Archivo ndoheñói unidadkuéra ramo, BimCraft metro-pe ojeleé ha barra-pe {{ui:Units}} ome'ẽ.

## Calcar as-built líneas

Clic {{ui:Trace in CadCraft}} nube emboguejy haguã drafting app-pe tenda pyahúpe. Upépe oike diseño rapykére, ha plan corte ha object snap ndive paredes escaneo-pe ojapo ikatu. Ehecha CadCraft tema nube de puntos rehegua.

## Mboyve puntokuéra

Escaneo ikatu oguereko cientos de millones de puntos. BimCraft jeýpe ojeleé puntokuéra ha ojeike proporción iguala oiporúva ojejapo haguã: {{ui:Show}} barra-pe ohechauka cuánto (1, 2, 5 térã 10 millón). Puntokuéra tuichave jave memoria ha tembipota tarjeta tuichave ojerekóta. LiDAR clasekuéra ohechaukáva oĩ archivo puntokuéra tapichakue rehegua.

:::note
Archivokuéra nde ordenador-pe ojeleéva; ndojepyteká ha'e. LAS 1.0–1.4 ha LAZ ojeleéta (LAZ 1 GB peve, ojeleévo memoria-pe); E57 6 millón puntos ha 512 MB peve ko'ágã (tuichave: LAS térã LAZ exportar); PLY, PCD ha PTX tapichakue; tekst nubekuéra ha'e `x y z`, color (`r g b`) ha intensidad columnakuéra oĩramo.
:::

## Escaneo mbohapykuéra

Mbohapy tenda gui oñemoñeʼẽva escaneo peteĩ marco-pe registrarse ikatu, ICP ndive afinarse ha LAS térã E57 peteĩ-pe exportarse: ehecha [Mbohapy escaneo peteĩ-pe registrar](topic:register-scans).
