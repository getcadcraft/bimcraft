---
title: Ojeguenohẽ ambue BIM ha dibujo programa-kuérape
summary: Mba'éichapa BIM de escritorio ha DWG visor-pe ojeporu ojehasa BimCraft-pe, ha diferencia-kuéra ojehopeína.
keywords: cambio, migrar, familiar, bim de escritorio, familia, parámetros, explorador de proyecto, paleta de propiedades, cubo de vista, xref, administrador de capas, diferencias, comparar
from: 2de629af
---

Revit ojeikuaa rire, BimCraft-pe ojehechaukáta palabra-pe familiar, ha alcance-pe ndojeikuaa. Diferencia tuichaveve: **esta versión oléé ha ojehechaukáva modelo ha oñemoambue IFC dato. Ndoikóiva Revit háicha ojapo.** Ndaikatúi ojapo muro, familia ojoguáva, vista térã plano, térã proyecto archivo ñongatu. Oikotevẽ ojeabri edificio archivo kompu navegador-pe, ojehecha mba'épa oĩ, ojehecha proyecto carpeta opa, ha ojemoambue IFC modelo dato.

## Ojehasa habitus

| Ndeha'éva | BimCraft-pe |
|---|---|
| Revit-pe `.rvt` ojeabri modelo ojehecha hag̃ua | BimCraft ojeabri `.rvt` ficha ramo: versión, proyecto información, vínculo, vista previa. Modelo 3D-pe, ojeexporta IFC ha ojeabri uva. [Ojeabri proyecto térã familia archivo](topic:read-rvt-file) |
| Archivo mbohapy versión ojeabri mboyve ojehechakuaa | Ficha ohechauka "saved in Revit …" ñemboguejy, archivo ndojehejái ni ndojeporúi |
| Project Browser | Ndaipóri vista ha plano explorador. IFC modelo oguereko {{ui:Storeys}} ha {{ui:Elements}} lista; dibujo oguereko hoja pestaña |
| Properties paleta | Panel {{ui:Properties}} ñe'ẽ-pe, eklika elemento-pe. IFC propiedad conjunto parámetro grupo-pe ndaha'ei |
| Instancia ha tipo parámetro | Instancia propiedad conjunto, ha "(type)" marcado conjunto. Tipo ñemoambue opa tipo elemento-pe oguerekóva, Revit háicha. [Tipo propiedad ñemoambue opa tipo elemento-pe](topic:type-vs-instance) |
| Edit Type | Ndaipóri diálogo: eklika "(type)" conjunto valor ha ekrirí |
| Elemento hetave selección, filtros, Select All Instances | Peteĩ peteĩ elemento. Ndojapo kuri |
| Vista cubo ha navegación rueda | Vista cubo esquina ykua-pe, mbohapy botón ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}) ha órbita librе. Ndaipóri navegación rueda |
| Shift ha botón medio-pe arrastrar órbita, botón medio arrastrar desplazar | Botón izquierdo arrastra órbita, botón derecho (térã {{key:Shift}} ha arrastrar) desplaza, rueda zoom. {{ui:BIM ribbon}} menú estilo ojemoambue botón medio-pe desplazar ha {{key:Shift}} botón medio-pe órbita. [Menú, teclas ha mouse](topic:menus-keys-and-mouse) |
| Planta, corte, caja de corte | Peteĩ {{ui:Section}} plano jey ({{key:X}}); caja de corte ndaipóri ha 2D plano ndaipóri. [Corte IFC modelo plano sección-ndive](topic:section-plane) |
| Ocultar vista-pe, aislar, visibilidad/gráficos | {{ui:Storeys}} mbohapy ojehechaukáva térã ojehepyma, {{ui:Spaces}} ha {{ui:Edges}}. Elemento peteĩ peteĩ ojehepyma ndaipóri aja |
| Ambientes | IFC espacio-kuéra, ojehepyma ojepyrũ. Eklika {{ui:Spaces}} |
| Guardar, Guardar como, sincronizar central-ndive | {{ui:Save as IFC}} ojedescarga IFC archivo pyahu. Orígen ndojemoambue. Ndaipóri central, ndaipóri trabajo compartido |
| {{key:Mod+Z}} ojeisapy | IFC ñemoambue ndojekuaa peve guardar. [IFC propiedad ñemoambue ha ñongatu copia ojemoambuéva](topic:edit-ifc-properties) |
| Manage Links | Eabri proyecto carpeta: vínculo opa ojeikuaa ha ojemarka **En esta carpeta**, **Mismo nombre encontrado**, **Archivo de biblioteca** térã **No está en esta carpeta**. [Eabri proyecto carpeta entéra](topic:open-project-folder) |
| Auditar térã archivo ojeabri ojehechakuaa hasy ha ndaipóri | Carpeta informe ojehecha opa copia ha respaldo ojekortáva ha ndaipóri, segundo-pe. [Ojehechá carpeta copias dañadas-pe](topic:check-folder-health) |
| Archivo porã ojeiporavo carpeta ojehaivéva-gui | {{ui:Start here}} caja omombe'u peteĩ, mba'érepa rehe |

Modelo ojehechapáva ojehechaukáicha, ojehecha programa-háicha modelo-pe, eiporavo {{ui:Viewer}} menú estilo: ojehecha ha ojehechaukáva tembipapo ojeguerohory, edificio tembipapo peteĩ menú-pe oñemoĩ. Ehecha [Menú, teclas ha mouse](topic:menus-keys-and-mouse).

## DWG ojehechágui

Eabri DWG AutoCAD-pe térã DWG visor-pe jave:

| Ndeha'éva | BimCraft-pe |
|---|---|
| Modelo ha diseño pestaña ryepýpe | Dibujo ruguápe pestaña: {{ui:Model}} ha hoja peteĩ-peteĩ |
| ZOOM Extents, rueda doble klik | Doble klik, {{key:F}} térã {{ui:Fit}} |
| Botón medio-pe desplazar | Arrastrar mbohapy botón-gui |
| Capa administrador | {{ui:Layers}} lista: marcá ojehechaukáva, desmarcá ojehepyma, {{ui:All on}} ha {{ui:All off}} |
| xref administrador | **Linked drawings** ñe'ẽ-pe, **Shown** térã **Not found**, ha {{ui:Add linked drawings…}} |
| Plot vista previa | {{ui:Print view}} térã {{key:P}}: yvytu ha yvate linea grosor-ndive. Ndoimprimíi |
| Bloque atributo dato ojehecha | {{ui:Equipment}} pestaña comida servicio plano-pe etiquetado, {{ui:Download CSV}}-ndive |
| Medir, dibujar, editar, guardar como | BimCraft-pe ndaipóri. CadCraft dibujo app ojapo ha ojemoambue |

## Diferencia ojekangyhýva

- **Navegador-pe ojapo, navegador oñangareko ne archivo-kuérare.** BimCraft oikuaa archivo ha carpeta ne'ẽva, ojeporavóva térã ojehasa jave. Ndaikatúi ojeabri iñimporãva, ndaikatúi ojeguarda archivo ári. Opa guardar ojedescarga.
- **Ndojeuploadi ni peteĩ.** "Upload" ñe'ẽ navegador carpeta diálogo-pe navegador ñe'ẽ. Archivo kompu-pe oĩ.
- **IFC modelo formato.** Proyecto archivo ojeabri ficha-pe, 3D mba'e ndojehechakuaáiva. IFC-pe ojepyta modelo BimCraft-pe.
- **Ñemoambue copy-on-write.** Peteĩ elemento valor ñemoambue ndoñemoambuéi vecino-kuéra, exportador ojepyta jave. Tipo propiedad ha ojekorapyhápe.
- **Proyecto ndaipóri, vista ndaipóri.** BimCraft peteĩ archivo ojehecha ha ndohechakuaái pestaña ojepe'a rire, Chrome ha Edge carpeta jeporavo ñe'ẽ-kuéra ndaha'éi.
- **Mac teclas.** Revit Windows atajo Ctrl ojeporu, BimCraft atajo {{key:Mod}} ojeporu: Mac-pe Command.
- **Mouse tembiapo.** Órbita botón izquierdo, Shift ha botón medio ndaha'éi, eiporavo {{ui:BIM ribbon}} menú estilo térã ejapo botónes [Menú, teclas ha mouse](topic:menus-keys-and-mouse)-pe.

Ehecha [Ndojapóiva ko'ẽrõ](topic:not-built-yet) ojeporuva ko'ẽrõ.
