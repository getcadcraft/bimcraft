---
title: Abrir paquete de proyecto
summary: Paquete de proyecto ha'e peteĩ zip modelo, hi'a vista, hi'a presentación ha hi'a grupo de propiedades. Eabri, ehechauka vista piso ha capa-nguéva, eabri presentación, ha ehecha propiedades proyecto-pe.
keywords: paquete, paquete de proyecto, ccbundle, zip, vistas, mapa de vistas, presentaciones, libro de presentaciones, combinación de capas, grupos de propiedades, normas, pln, plantilla
from: b5b86e8f
---

## Mba'épa reñapo

Eabri **paquete de proyecto** (`.ccbundle.zip`) ha pe proyecto rejapo ohechapava: hi'a vista, hi'a presentación ha hi'a grupo de propiedades, modelo ári.

Peteĩ paquete oguereko:

- modelo IFC-pe,
- presentaciones PDF ha DWG-pe,
- lista oikuaáva IFC ndoguerekói: vistas (hína piso, combinación de capas ha escala), presentaciones ha plano hi'ava, propiedades grupo-pe, clasificaciones ha normas, peteĩ capas, juego de plumas, tipos de línea, sombreados, superficies ha compuestos.

Paquete ojapo script open-source Archicad-pe, ha Archicad iñandu ko'ã lista. BimCraft nahendúi directamente archivo `.pln` térã `.tpl`; ehecha [Abrir archivo de proyecto .pln y .pla](topic:pln-project-files).

## Ojapo paquete

Script heta preview: ndaha'éi oñeprobáva opa versión Archicad-pe. Eguereko [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Ojehepyme'ẽ Archicad 24 térã upe rire ha Python 3.8 térã upe rire; ndaipóri ambue ojeinstala.

1. Emoĩ `archicad_bundle.py` peteĩ carpeta-pe, por ejemplo `C:\cc-bundle`.
2. Archicad-pe, eabri proyecto ha ojapo peteĩ conjunto publicador hérava **CadCraft bundle**: vista 3D IFC-pe, opa presentación PDF-pe, ha opa presentación DWG-pe, archivo disco-pe peteĩ carpeta-pe.
3. Proyecto abierto rupi, ejecutar `python archicad_bundle.py --probe --out .` peteĩ jey. Oñeleer rupi ha ojapo `probe.json`.
4. Ejecutar `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (eiporu IFC traductor eiporavo). Archicad publica conjunto ha script ojapo `<project>.ccbundle.zip`.

Script oñemboguatamo publicar, publicá conjunto mano-pe ha ejecutar `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Repositorio README-pe opción opavave. Ndaikuaáiva oñemboguata, eabri issue upépe ha emoĩ `probe.json`.

## Eabri paquete

1. Ojeporu {{ui:Elegir un archivo}}, térã emoĩ `.ccbundle.zip` BimCraft-pe. Carpeta ojepyhy {{ui:Abrir una carpeta}} rupi, paquete ojehechauka **Paquetes de proyecto** ári; ojeporu hína rérape.
2. Modelo oñeabri IFC ramo, ha sección **Paquete de proyecto** oñemoĩ ñemuhápe, archivo mba'e hi'ava rapykuéri.

Ndaipóri oñemboguata: paquete oñeleer ne computadora-pe peteĩ archivo jey, upévare modelo tuicha ndoñemboguata mokõi jey.

## Ehechá vista

**Vistas** ári, vistas ojehechauka carpeta ha proyecto-pe guare. Ojeporu vista rérape:

- **Plano de piso** ehechauka hína piso, ojehechápa yvate-gui.
- **Combinación de capas** oñemboguata elementos capas ojehesakapáva. Línea de estado ohechauka cuántos elementos.
- **Escala** oho nombre rembe ha línea de estado-pe.
- **Vista 3D** ehechauka opa piso.

Tapykuepe ehechauka opa, ojeporu {{ui:Mostrar todo}} {{ui:Mostrar}} ári ha ejapo opa piso.

:::note
BimCraft oheka capas IFC archivo asignación rupive. IFC ndojapóri chupe, combinación de capas ndoñemboguatái nada, ha línea de estado oñe'ẽ 0 elementos ocultos.
:::

## Eabri presentación

**Presentaciones** ári, cada presentación ohechauka número, nombre, tamaño de papel ha vistas hi'ava.

- **PDF** oguarda presentación PDF paquete rupive.
- **DWG** oabri presentación dibujo vista 2D-pe. Ojeporu vista ojehechápa modelo-pe.
- **Abrir en …** ohemboguejy archivo presentación ojeporúva aplicación-pe, tab pyahu-pe: PDF MarkupCraft-pe, DWG CadCraft-pe. Ohechauka ramo aplicación BimCraft-pe ári oĩva. Archivo oleéva paquete rupive tab oñemboguahẽ jave, ha ndaipóri oñemboguejy.

Presentación ndoguerekói ni peteĩ, ohechauka **No hay archivo en el paquete**.

## Ehecha propiedades proyecto grupo-pe

Elige peteĩ elemento. **Grupos de propiedades** ohechauka propiedades proyecto ojapo grupo-pe, IFC nombre ha conjunto de propiedades rupi. Ambue ojeguerekova {{ui:Propiedades}}-pe. **Definiciones de propiedades** ohechauka opa definición grupo, tipo ha nombre IFC.

## Normas ha nota

- **Normas** ohechauka capas, combinación de capas, juego de plumas, tipos de línea, sombreados, superficies, compuestos ha materiales paquete-pe.
- **Notas** ohechauka mba'e script ndoikuaái Archicad versión-gui, campo BimCraft ndoikuaái ha archivo paquete oñe'ẽva ha ndoguerekóiva.

## Solución de problemas

- **"… ha'e zip pero ndaha'éi paquete de proyecto."** Zip-pe ndaguerekói `manifest.json`. Descomprimir ha eabri `.ifc` ojeguerekova.
- **"… ha'e paquete de proyecto ndoikuaáiva BimCraft-pe."** Actualizar BimCraft.
- **"… ndoguerekói modelo ohechaukava manifest-pe."** Zip ojeguasu térã ojehecha. Ejapo paquete ojehe'ỹva.
- **Vista ohechauka opa piso.** Piso ndoguerekói IFC modelo-pe (línea de estado ohechauka). Ehecha IFC exportación ha piso oguereko.

Ehecha avei [Trabajar entre dos programas BIM](topic:two-bim-programs) ha [Lo que BimCraft lee de cada formato](topic:file-formats).
