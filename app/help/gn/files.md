---
title: Archivos que BimCraft abre ha guarda
summary: Opa formato BimCraft oñeabre, mba'épa oñeñongatu, mba'épa oñeguarda, moõ archivo guardado oho, ha mba'épa oñemoambue navegador ha sin conexión vove.
keywords: formatos, abrir, guardar, exportar, descargar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, subir, privacidad, tamaño de archivo
from: a7275dbf
---

BimCraft lee archivos ne compútadora-pe, navegador pestaña-pe. **Ndojejuhúi** CadCraft térã ambue ryepýpe. Guardá vove, BimCraft navegador-pe ome'ẽ peteĩ archivo pyahu descargá; ndoñemboguejýi jamo'ãi archivo oguejy vaekue.

## Mba'épa oñeabre

| Formato | Extensiones | Mba'épa ereguereko |
|---|---|---|
| IFC | `.ifc` | Modelo 3D-pe, pisos, elemento cantidad ha opa elemento propiedades. Nombres, etiquetas ha peteĩ valor propiedad oñemoambue ikatu. |
| Archivos de proyecto ha familia | `.rvt` `.rfa` `.rte` `.rft` | Archivo ficha: versión, build, trabajo compartido, información del proyecto, parámetros de familia, archivos vinculados ha imagen vista previa. 3D ndaiporiva. |
| DWG | `.dwg` | Plano 2D-pe: espacio modelo, opa hoja, capas, planos vinculados, imágenes ha vista de impresión. Espacio modelo 3D-pe avei. AutoCAD 2000 gui 2018 peve ojerevisa. |
| DXF | `.dxf` | Kóicha DWG-ichagua. |
| STEP | `.step` `.stp` | Peteĩ pieza, equipo térã proveedor modelo 3D-pe (AP203, AP214, AP242): solido peteĩ elemento (building element proxy) ohupytýva IFC modelo peteĩ piso-pe, triángulo-pe ojejuhu tamaño verdadero-pe, ojuehe conjunto opa pieza archivo omoĩvaicha. Ojeporu ikatu IFC-ichagua: propiedades, cortes, medir, guardar como IFC. Colores ha conjunto árbol ndojehechakuaái. |
| Nube de puntos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Escaneo 3D vista-pe, modelo rapykue térã mboyve: ehecha [Show a point cloud beside the model](topic:point-clouds). |
| Paquete de proyecto | `.ccbundle.zip` | Modelo ijehe vistas, diseños ha grupos de propiedades: ehecha [Open a project bundle](topic:open-project-bundle). |
| Carpeta | cualquiera | Opa modelo, plano ha paquete mbykýpe informe. Informe-pe oĩva IFC, modelo, plano térã paquete peteĩ clic-pe oñeabre. |

[What BimCraft reads from each format](topic:file-formats) oñeʼẽ detallada.

BimCraft ohechauka mba'e archivo la ijehe ha mboriahu ohecha ha sapy'ánte nombre; upévare proyecto extensión ojeasy pero aún oñeabre archivo ficha-pe.

### Ndojeabriva

- `.ifczip` ha `.ifcxml`: BimCraft he'i ".ifczip is not supported yet. Save or export the model as a plain .ifc file." Ejepe'a `.ifczip` (ohupytýva peteĩ `.ifc` simple) térã exporta jey IFC simple-pe.
- DGN planos carpeta informe-pe ojehechauka, ha ndoñeabriáiva.
- PDF, imagen ha oficina archivos noñeabriái iñambue: imagen DWG ndive peteĩ imagen-pe oñemoĩ, ha {{ui:Compilación}} › {{ui:Desde un plano…}} PDF páginas térã escaneo-gui paredes ojapo: ehecha [Walls from a set of plans](topic:walls-from-plans).

## Mba'épa oñeguarda

| Ejeguarda | Mba'épa jagueru | Moõ |
|---|---|---|
| {{ui:Guardar como IFC}} | Pyahu IFC archivo nde ñemoambue ndive, nombre "*original name* (edited).ifc" | Navegador descarga carpeta-pe |
| {{ui:Descargar CSV}} equipo planilla-pe | CSV elemento lista-gui, nombre "*drawing name* equipment.csv" | Navegador descarga carpeta-pe |

Ambue mba'e oñeguardava oñemoĩ ojapóva, opa tema-pe ohechauka: {{ui:USD}} ([Export the model as USD](topic:usd)), {{ui:Collada}} (.dae ha Google Earth .kmz: [Export the model as Collada or for Google Earth](topic:collada)), {{ui:Para render}} .glb, render imagen, hoja ha plano PDF, planilla ha lista CSV, BCF cuestiones, COBie planilla, familia archivo ha registrado escaneo LAS térã E57. BimCraft ndoguardái DWG, DXF ni proyecto archivo, ha ndoñemoambuei oñeabri archivo.

:::chromium
Chrome ha Edge descargas ojeguarda carpeta-pe configuración-pe ojeporu, ordinariamente Downloads. Ojeporúpa cada guardar mboyve, navegador descarga configuración-pe "Ask where to save each file before downloading" emboguejy.
:::

:::firefox
Firefox Downloads carpeta-pe guarda, "Always ask you where to save files" configuración-pe ndojepuréi ramo.
:::

:::safari
Safari Downloads-pe guarda, **Safari > Settings > General > File download location** ruguái ambue carpeta eiporu ramo.
:::

## Ojuehe guardar

Cada guardar opa modelo descarga **opa ñemoambue ojapo vaekue ndive** ndaha'éi tenonde ñemoambue ojapo guardar ramo rire. {{ui:Cambios}} lista ojepeeha pe guardar rire, upévare guardar rire ndaikatúi ñemboguejy. Ojepyrũ jey tenonde oñeabri jamo'ãi archivo.

## Archivo tuicha ha memoria

- **IFC** archivo opa oñeluka pestaña memoria-pe, 3D geometría ojapo-pe memoria ojeporu. Millones de gramo modelo laptop-pe ndaikatúi. 1,5 millones triángulo mboyve, bordes ojepe'a memoria ahorrá ("Edges are off for very large models").
- **Archivo de proyecto** opa ndoheúi. BimCraft ojeporúva parte iñimba ojejuhu, 40 KB gui 100 KB ndaha'éi archivo ojuehe tuichave; upévare 500 MB modelo central red carpeta-pe pyahu ojeabri.
- **DWG ha DXF** archivo opa oñeluka. Plano tuicha "This drawing is very large; only part of it is shown."
- **Carpeta** 20.000 archivo peve oñeabri. Peteĩ modelo ficha ojeporúva kilobyte pocos.

Ehecha [Browsers, devices and memory](topic:platforms) ambue.

## Conexión ndive ha sin conexión

Archivo abri ndoikotevéi internet. Peteĩ lector ojejuhu sitio gui primera jey ojeporúva: IFC motor, IFC modelo primera jey oñeabri vove ("Starting the IFC engine…"). DWG ha DXF lectores aplicación-pe ogueru.

:::offline
Ndereikéi conexión. Aplicación barra botón {{ui:Listo para usar sin conexión}} he'ívo, opa formato oñeabri ojapóva. Ndaha'éi, IFC modelo ndaikatúi oñeabri, ojeabri ko pestaña-pe ha'e jave ojeporúva: reconectá primero. Ehecha [Online and offline](topic:online-offline).
:::

Ndereikéi conexión BimCraft-pe, aplicación barra-pe ejeprimeroma conectado vove oprimi {{ui:Guardar para usar sin conexión}} ha agua'ẽ {{ui:Listo para usar sin conexión}}. Guardado copia ~33 MB; IFC motor oguereko, upévare IFC modelo sin conexión avei oñeabri. [Working offline](common:offline) guardado copia ojeporu.

## Guardado nube

Guardado nube ndaiporiva jey. Guarda ne copia editada ne compútadora térã ne oficina archivo servidor-pe, opa ambue archivo-icha. Ehecha [Your files](common:your-files).
