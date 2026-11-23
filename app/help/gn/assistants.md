---
title: Emoĩ asistente IA omba'apo hag̃ua nde modelo-pe
summary: Emoĩ Configuración-pe asistente ha script-kuéra omba'apo hag̃ua BimCraft-pe, CadCraft Studio rupive: ohecha elementos, ohechauka propiedades, ohecha hendápe vista-pe, ha ojapo muro, puerta, ventana, piso, nivel ha grilla. Ndoĩmoʼãi, peẽ emoĩ peve.
keywords: ia, asistente, mcp, script, automatización, studio, buscar elementos, aislar, propiedades, permisos, desconectar, actividad, dibujar muros, agregar puertas, agregar ventanas, niveles, grillas, pisos, deshacer, guardar, línea de comandos, cli, sin ventana, usar con asistentes IA
from: 66d72742
---

## Mba'e ndekuaáta

Mba'éichapa emoĩ asistente IA (mba'eve asistente oñe'ẽva MCP) ohecha modelo IFC ojepyso ha omoĩ hendápe, mba'épa oiko'ẽva ha mba'épa ndaikatúi, ha mba'éichapa ojehejasa.

## Mba'épa asistente ikatu ojapo BimCraft-pe

| Ohaʼarõ | Mba'épa ojapo | Ohera'ãva |
|---|---|---|
| Buscar elementos | Oguerekógui lísta elementos-kuéra clase, nivel, téra térã propiedad valor rupive, **Buscar** ojapo háicha | Leer |
| Leer propiedades | Oguerekógui elemento peteĩ atributo, tipo, conjunto de propiedades ha cantidades, **Propiedades** ojehechauka háicha | Leer |
| Describir modelo, listar muros | Oguerekógui nivel-kuéra, muro, puerta, ventana, ambiente, piso, grilla ha columna-kuéra, ha muro peteĩ-peteĩ punta-kuéra, tipo ha altura | Leer |
| Aislar, ver a través, ocultar o mostrar | 3D vista ojeporu {{ui:Mostrar}} menú ojapo háicha | Cambiar vista y dibujar |
| Dibujar muros, puertas, ventanas, pisos, niveles o líneas de grilla | Modelo ojeporu {{ui:Dibujar}} herramienta ojapo háicha: muro-kuéra ojoaju, ambiente, piso ha techo ojeku'ejey | Cambiar vista y dibujar |
| Cambiar téra o valor de propiedad | Peteĩ elemento-pe Nombre, Descripción, Tipo de objeto térã Etiqueta, térã peteĩ valor de propiedad. Valor oñemoĩva ambue elemento-pe ojeikuaa vaekue ojapo mboyve; tipo-pe valor ojumbe asistente oje'éramo chupe, ksa elemento tipo oñemuĩ | Cambiar vista y dibujar |
| Mover, eliminar, cambiar muro, puerta ha ventana | Elemento-kuéra ojeity térã ojeeliminavo ha'e oñangareko vaekue; muro-kuéra {{ui:Dibujar}} herramienta rupive ojapo oñemudava punta térã tipo rupive; puerta ha ventana lugar, tamaño térã tipo rupive; ambiente ha unión ojeku'ejey | Cambiar vista y dibujar |
| Oñemoĩ, oñemoĩ ha leer planilla | "Puerta planilla piso rupive, fuego resistencia ha herrajes rupive": asistente oñe'ẽ planilla téra, columna-kuéra (propiedad térã etiqueta oiko columna) ha agrupación; BimCraft omopleno modelo rupive ha omoĩ, mba'e asistente nomombe'úi ojagarra oficina estándar-gui. Oñemoĩ planilla-kuéra Planillas lista-pe. Peteĩ-peteĩ línea oguerekóva oñe'ẽ hembiapo-kuéra téra, ojepyso chupe | Leer para leer; Cambiar vista y dibujar para guardar oñemoĩva |
| Exportar planilla | CSV, Excel térã tab-separado texto Google Sheets-pe ojeikoka (mba'eve ndoúi Google-pe) | Exportar |
| Leer ha oñemoĩ ambiente terminaciones | Terminación tipo-kuéra, peteĩ-peteĩ ambiente piso, muro ha techo terminación, zona-kuéra; superficie, baldosa cantidad ha sustrato volumen terminación planilla-gui oúva | Leer; Cambiar vista y dibujar para oñemoĩ |
| Seleccionar elementos, deshacer hembiapo propio | Elemento-kuéra ojepyŕa vista-pe; hembiapo pahápe ojejavy | Cambiar vista y dibujar |
| Guardar | IFC archivo pyahu cambio-kuéra opaite-gui, {{ui:Guardar como IFC}} ojapo háicha (ko'ẽ archivo nomoambuéi) | Guardar |
| Exportar USD | Modelo-kuéra ojeikuaa vaekue OpenUSD-pe (.usda, .usdc térã .usdz), {{ui:USD}} herramienta ojapo háicha | Exportar |
| Render peteĩ imagen, omba'apo render cola | 3D vista-gui imagen, {{ui:Render}} diálogo ojapo háicha nde Render configuración rupive, ndojerurõi ambue; térã imagen calidad alta diálogo cola-pe ojoaju ha ojapytyvõ peteĩ-peteĩ upéi (cola ojeporu WebGPU). Modelo-pe mba'eve ndojeporavéi ([Render peteĩ imagen](topic:render)) | Exportar |

Asistente ojapo cambio peteĩ-peteĩ ojapo **Cambios** pe peteĩ hapykuéra, téra "Asistente: …" (ehemplo "Asistente: emoĩ 4 muro"), upévare {{key:Mod+Z}} ojejavy hembiapo opaite, ha ikatu ehecha máva ojapo hapykuéra. Ventana-pe ndaikatúi ojepyso archivo-kuéra: nde ojepyso modelo; ojeporu ojepysóva.

## Emoĩ

Asistente-kuéra oike BimCraft-pe CadCraft Studio rupive nde compútadora-pe; navegador simple-pe ndaikatúi oike.

1. Ejepyso {{ui:Configuración}} ha eiporu **BimCraft** pestaña.
2. **Asistente** rembe'ýpe, eiporu **Emoĩ asistente IA ha script-kuéra omba'apo BimCraft-pe**.
3. **Leer** ojeiporu nde rehe. Eiporu **Cambiar vista y dibujar** avei, asistente aislar ha ocultar elemento-kuéra ha dibujar rehe ikatu jave, ha **Guardar** modelo archivo pyahu-pe guardar ikatu jave.
4. Emoĩ asistente Studio-pe (Studio omombe'u dirección ha configuración omoĩvaʼekue).

## Asistente oñemoĩ jave

Panel derecho-pe mba'e ohechauka mba'e asistente oñemoĩ ha mba'épa ikatu ojapo. Ejepyso {{ui:Desconectar}} asistente sesión ipahápe; oñemoĩ jey ojeikoka ohayhúvo.

**Actividad**, **Asistentes** rembe'ýpe Configuración-pe, ohechauka opaite asistente oñeprocesa-kuéra, pyahúgui ojehechakuaa, ha oiko porã térã nó.

:::tip
Eñe'ẽ ojepe'a-pe, ehemplo "aislar muro externo-kuéra Nivel 1-pe", "mba'ére puerta-kuéra ndaijeiporãi fuego resistencia?" térã "emoĩ 6 por 4 metro ambiente Nivel 1-pe puerta sur muro-pe". Asistente ohecha elemento-kuéra ha ohechauka nde vista-pe, térã ohecha chupe.
:::

## Ventana ndaipóri: script ha línea de comandos

Mismo dibujo herramienta-kuéra ojeporu IFC archivo-kuéra carpeta-kuéra-pe nde ñemoĩva, ventana ojepyso ndaipóri: CadCraft MCP servidor ha línea de comandos ikatu oñepyrũ modelo pyahu térã ojepyso IFC archivo, ohecha, omoĩ muro, puerta, ventana, piso, nivel ha grilla, ojejavy ha guardar ko'ẽ `.ifc` archivo pyahu-pe. Ambue mokõi herramienta ojeporu script-pe: `ifc_batch` ojapo 200 edición hapykuéra peteĩ-pe (opaite térã mba'eve: peteĩ deshacer ojejavy lote opaite, ha paso ojeikutu ojejavy ambue ha omombe'u mba'épa); `ifc_describe` oguerekógui nivel-kuéra ha muro peteĩ-peteĩ puerta ha ventana rehe; `ifc_render_png` ojapo peteĩ imagen chequeo modelo-pe ventana ndaipóri (material, textura ni sombra ndaipóri); `usd_export` ojapo `.usda`, `.usdc` térã `.usdz`. Línea de comandos-pe, `cadcraft bim script.json --from model.ifc -o out.ifc` ojapo peteĩ script hapykuéra, ha `--usd`, `--png` ha `--plan` ojapo USD archivo, imagen térã plano peteĩ jeheja-gui. Nde ejeaprobá mba'e carpeta ikatu oiporu ha ikatu ojerrevisa térã guardar.

## Emboriahu

Desmarca **Emoĩ asistente IA ha script-kuéra omba'apo BimCraft-pe**. Asistente opaite ojeikutu peteĩ jeheja, ha ajuste oñongatu upe jey rehe.

## Ambue ehecha

- [Asistente-kuéra receta](common:assistants-recipes): ehemplo-kuéra, peteĩ-peteĩ herramienta oñeikoka.
- [Buscar elementos clase, téra térã propiedad rupive](topic:find)
- [Ocultar, aislar ha ver a través elemento-kuéra](topic:hide-and-isolate)
- [BimCraft configuración](topic:settings)
