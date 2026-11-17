---
title: Mbohapy escaneo peteĩ-pe registrar
summary: Escaneo ojeheja ambue-gui oñemoĩ peteĩ marco-pe punto pareja ojeikuaáva térã tipeáva meta ndive, ICP ndive afinar, registro proyecto-pe guardar, ha registrado nube LAS térã E57-pe exportar.
keywords: registrar, registro, escaneos, nube de puntos, icp, iterative closest point, metas, pares de puntos, transformación rígida, alinear, combinar, e57, las, escaneo a BIM
from: e8e270db
---

## Mba'épa ojapóta

Mbohapy escaneo peteĩ tenda (cada uno ambue scanner posición-gui) hoʼa hese coordenadas-pe. Registrar: cada escaneo peteĩ emoĩ ha'e, peteĩ marco-pe oĩ haguã, upe rire proyecto-pe guardar ha registrado nube peteĩ LAS térã E57 archivo-pe escribir.

## Escaneokuéra emoĩ

1. Diálogo ejeike ({{ui:Register scans…}} inicio panel-pe, térã {{ui:Show}} › {{ui:Register scans…}} modelo ojeike jave). {{ui:Add scans…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS térã XYZ archivokuéra oikeha, térã diálogo-pe emboyke. Unidad ambue escaneokuéra ojedeclinahína nota-ndive: peteĩ-pe pyahu ojapo.
2. Eiporavo {{ui:Scan to move}} ha {{ui:Place against}}. Imagen ohechauka cada escaneo marco-pe ko'ágã, color peteĩ-peteĩ: {{ui:Plan}}, {{ui:Front}} térã {{ui:Side}}; rembiapo panorámica ha rueda zoom.
3. **Punto pareja ndive.** Clic {{ui:Pick a pair}}, upéi punto mboyve escaneo-pe, ha upe mismo lugar ambue escaneo-pe (esquina, meta, columna pie). Ojapo mboyve mokõi jey, ha punto noñeikotevẽi línea-pe ha ipiteve. Clic {{ui:Place by pairs}}: escaneo oñemoĩ mínimo cuadrado ajuste-pe, ha **Sobrante** ohechauka cada pareja mboyve ndoipotái. Número tuichave pareja ojapo vai: cruz ndive oipe'a ha emoĩ jey.
4. **Meta ndive.** Punto verdadero coordenadas ojeikuaa jave (ojeikuaa meta), clic {{ui:Pick, then type target}}, clic punto escaneo-pe, ha escribí meta X, Y, Z fila-pe. Parejas ha metas tipeadas ojeñombo'e iporã.

## ICP ndive afinar

Parejas ombojoapy aproximado emoĩ. {{ui:Refine}} escaneo omoĩ peteĩ ambue escaneo superficie-pe: ñepyrũ **punto a punto**, upe rire **punto a plano**. Tabla cada paso error ha punto ojehechaukáva ohechauka; tabla ryepýpe línea error ojehecha. {{ui:Stop}} oipe'a paso ojapova upe rire ojeguerekova ojejuhu. {{ui:Undo}} ojeipe'a ejecución completa (térã última emoĩ); {{ui:Reset}} escaneo archivo coordenadas-pe jeguahẽ.

Laptop-pe rapidito haguã, ICP punto ojeporu'ỹva oporoporúva ojepe'a ({{ui:Points used}}, 5.000 ha 60.000 peve) ha {{ui:Largest match distance}} tuichave jave oñeñongatu (oñepyrũ 5% escaneo tamaño, upe rire michĩ). Emoĩ aproximado oñepyrũ ojeikotevẽ: escaneo ndojoaporãiva ojehechaukáta ndojejoaporã. Superficie ojeporu plano térã línea jave, iñemoĩ ndaikatuirõ; pareja ojapo upéicha jave.

## Guardar ha exportar

- {{ui:Save project}} peteĩ michĩ `.ccscans.json` archivo oha: cada escaneo réra, tamaño ha 64 KB ñepyrũ huella, transform ndive. Punto ndoguerekói. {{ui:Open project…}} escaneo archivokuéra referencia-gui ohupyty (archivo ojeikeva'erã ojehepyre) ha transform-kuéra jeguahẽ.
- {{ui:Export LAS}} ha {{ui:Export E57}} peteĩ archivo oha registrado lugar-pe cada escaneo ndive. Punto originalidad-pe ndojejapói; transform oñemoĩ ojeitýpe. {{ui:Read every point from the files}} ojehecha jave, cada archivo cada punto-pe jey jeikuaa (escaneo-pe 20 millón peve); ndojehechaukáiramo, viewer-pe ohechauka puntokuéra añónte ohai.
- {{ui:Show registered cloud}} (BimCraft) LAS ohai ha 3D vista-pe modelo rapykére ohechauka, nube ambue-icha.

:::note
Ndojeupéi. Registro archivo propia unidad-pe ojapo ha milímetro ojeguerohory: LAS ojehai escala ojeporúva (0,1 mm peve), E57 double-pe. Coordenada sistema LAS-pe oikóta tenda escaneo ha'e EPSG código peteĩ rehegua; E57 escritor ñande ha'e; ojeleéva ojehecha libE57Format-pe.
:::
