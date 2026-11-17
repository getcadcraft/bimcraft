---
title: Ojeexporta modelo Collada térã Google Earth-pe
summary: Ojeexporta modelo IFC ojeabrivaꞌỹva Collada (.dae) archivo-pe Blender ha ambue 3D programa-kuérape, térã Google Earth paquete (.kmz) mapa-pe modelo oĩva háicha.
keywords: collada, dae, kmz, kml, google earth, blender, exportar, geolocalización, georreferencia, latitud, longitud, ubicación, programas 3d
from: 81cfec09
---

{{ui:Collada}} tembipapo mbovy-pe (térã {{ui:Exportar Collada (.dae, .kmz)…}} menú Archivo-pe, menú ha cinta estilo-kuérape) ojeexporta oñemoĩva Collada 1.4.1-pe: opa modelo ojehechaukáva, federado-kuéra oñemoĩva jave hendápe.

## Exportación

1. Eiporavo {{ui:Collada}}.
2. Eiporavo formato:
   - {{ui:Archivo Collada (.dae), para Blender y otros programas 3D}}.
   - {{ui:Paquete de Google Earth (.kmz): el modelo ubicado donde está en el mapa}}. Ojeofrece añete modelo-pe ubicación oĩ jave.
3. Eiporavo opciones, upéi {{ui:Exportar}}. Archivo ojedescarga, ha barra de estado omombe'u mboépa elemento oike.

| Opción | Mba'épa ojapo |
|---|---|
| {{ui:Escribir la ubicación en el archivo}} | Ohenda latitud, longitud, altura ha rumbo archivo orígen .dae-pe |
| {{ui:Altura}} | {{ui:Sobre el terreno: el nivel 0 del modelo se apoya en el terreno}}, térã {{ui:La altura propia del modelo sobre el nivel del mar}} |
| {{ui:Incluir ambientes y espacios}} | Espacio-kuéra avei oike (ndojeikeha ojejapóva) |
| {{ui:Incluir elementos ocultos}} | Elemento ojehepyma-kuéra avei oñemoĩ (akóinte ojehechaháva añónte) |

## Mba'épa oĩ archivo-pe

| Modelo-pe | Collada archivo-pe |
|---|---|
| Edificio, pisos | Nodo-kuéra mbohapy, pisos elevación tenonderã; elemento ndaipóri piso-pe "Sin ubicar" |
| Elemento peteĩ peteĩ | Peteĩ nodo malla ijeheguínte, modelo-pe omombe'úva háicha (ijeroviapy térã ijeikepy ha etiqueta) |
| Clase, GlobalId, tipo predefinido | Nodo-pe datos extra (perfil IFC), nombre exacto (perfil ModelCraft) |
| Colores | Materiales, transparencia-ndive |
| Unidades y ejes | Metro, Z arriba. Modelo ñemoĩ 0 nivel 0 altura 0-pe |

Modelo oĩ origen-pe suelo rehe, upévare programa-kuéra ojapóva precisión simple-pe ohechauka ndaipóri temblor. ModelCraft oha'arõ Collada archivo mismo escritor-ndive, ha oñeabri ko archivo-kuéra elemento nombre-kuéra-ndive.

## Mba'éichapa ojejuhu ubicación

Modelo ojeporiahúva ome'ẽ ubicación, ojapo haháicha {{ui:Medir}} punto latitud ha longitud ojejuhúpe:

- Mapa conversión (IFC4 IfcMapConversion térã IFC2X3 property sets) modelo coordenadas sistema rupive. Sistema eiporavóva modelo-pe ojepyta archivo omombe'úva rehe.
- Ndaipóri jave, sitio latitud ha longitud (aproximado: sitio-pe porã).

Rumbo ojemedi, ndojepe'a: oikuaa mapa rotación, norte verdadero ha mapa convergencia. Modelo-pe ubicación ome'ẽ hag̃ua, eiporavo {{ui:Map origin…}} Medir-pe.

## Ambue programa-kuérape

- **Google Earth** oñandu .kmz: modelo oĩ ubicación-pe, norte rehe ojeguerovia. Pe simple .dae-pe ndaipóri lugar Google Earth ohechakuaa hag̃ua ubicación; eiporavo .kmz.
- **Blender** (4.x ha ymaguare): File, Import, Collada (.dae). Elemento peteĩ peteĩ objeto ojeike ha ijehegui material-ndive. Ubicación oñongatu archivo datos extra-pe, Blender ndohechakuaái. Blender 5.0 ojepe'a iñ Collada importador; upépe eiporavo {{ui:USD}} térã glTF exportación, térã eabri .dae Blender 4.5-pe ha eguarda .blend.

Ñane ñemboja ojehechaukáva opa archivo Collada 1.4.1 esquema-pe ha ojeskeha lector independiente-ndive. Ndojehai Blender-pe térã Google Earth-pe.
