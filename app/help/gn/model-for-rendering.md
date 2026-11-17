---
title: Modelo rendering programa-pe omondo
summary: Eñongatu 3D vista oĩva glTF modelo (.glb) material, textura ha lámpara ndive, rendering ha visualización programa kuérape oñeʼẽva glTF.
keywords: glb, gltf, gl transmission format, exportar, rendering, render, visualización, tiempo real, archviz, materiales, texturas, lámparas, luces, activo, activo personalizado
from: e62d57dc
---

{{ui:Para render}} barra-pe oñongatu 3D vista oĩva peteĩ **.glb** archivo (glTF 2.0, Khronos Group-pe abierto formato). Rendering programa glTF oñeʼẽva oñeporu modelo material ha lámpara ndive; Twinmotion oñemoĩ glTF ha GLB geometría archivo kuéra ndive, luz ohupi (Epic documentación, "Importing geometry in Twinmotion"): ejapo {{ui:Para render}} ha emoĩ .glb upépe. Ndojehasái: archivo oñemboja ko computadora-pe.

## Oñongatu

1. Eñepyrũ IFC modelo ha emoĩ 3D vista: oculta piso, elemento térã enlazado modelo ndeikotevẽva, ha [pinta material](topic:paint-materials) ndeikotevẽva.
2. Ejepyta {{ui:Para render}} (térã eñeʼẽ `GLB`).
3. Archivo ojapóta "<modelo nombre>.glb". Estado barra ohechauka triángulo, material ha lámpara cantidad.

## Archivo mba'épa oguereko

- **Geometría** opa elemento 3D vista-pe, metro-pe, Y arriba (glTF eje ipópe). Peteĩ objeto piso ha material peteĩteĩ-pe, "Nivel 1 — Ladrillo, rojo" nombre-pe, ndaipóri rendering programa-pe material oiporavóva ojeambue hag̃ua.
- **Materiales:** peteĩteĩ color [Render](topic:render)-pe emoĩ aspecto (mate, satinado, brillante, metal, vidrio…), ha pintado biblioteca material peteĩteĩ color, rugosidad ha **textura** (imagen archivo-pe, tamaño real-pe escala: ladrillo ladrillo tamaño). Vidrio transparente.
- **Lámparas:** Render › Lámparas-pe encendido luminaria opa, punto térã foco luz, brillo (lumen candela-pe), color ha haz ángulo.
- **Ubicación:** sitio latitud ha longitud archivo-pe ohai referencia-pe. Rendering programa-kuéra imbaʼe sol; tenda emoĩ ha'e ojehecha.

## Mba'e ndoguerekói

- Sección corte (elemento opa oike) ha transparente elemento (oñemboguejy).
- Elemento peteĩteĩ objeto (piso ha material peteĩteĩ-pe ojapo), IFC propiedad, bump mapa, vista ha grabación camino.
- Borde ha fondo.

## Enscape ha ambue complemento renderizador

Enscape ojapo ambue diseño programa ryépe ha ndoguerekói archivo proyecto ojeporúva. Mokõi tape:

- Ehechakuaa modelo **IFC** (Archivo › Guardar) Enscape oñemoĩva programa-pe; heta IFC oñeʼẽ. Colores oike; biblioteca material color rupi.
- **Mboyve pieza** (mueble, accesorio) emoĩ activo personalizado: emboguejy hendapeha, upéi ejapo {{ui:Para Enscape (.gltf)}}. Enscape activo personalizado biblioteca oguereko .gltf, .obj ha .fbx, ndaha'éi .glb, upévare botón ko escena peteĩ **.gltf** archivo ojesalva (dato binario ha imagen ipype; ndaipóri ambue kopiar). Enscape omoĩ activo mboyve (20.000 triángulo mboyve).

:::note
CadCraft Studio-pe glTF archivo (ha USD) ojesalva {{ui:Render}} › Motor › **archivo glTF** / **archivo USD** rupi, térã programa ojepe'a computadora-pe: ehecha [Escena ambue programa-pe](topic:render-open-in). Enscape térã Twinmotion complemento térã enlace ndojapóiva. FBX ha Datasmith formato ndoguerekói publicado especificación, BimCraft ndojapói; glTF ha'e formato abierto.
:::
