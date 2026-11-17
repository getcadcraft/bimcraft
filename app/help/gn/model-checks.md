---
title: Revisar un modelo por problemas comunes
summary: Ojuhu elemento ndaguereko propiedad ohekávava, GlobalId mokõi jey ojapóva, elemento piso ndaipóriva ha copia peteĩ ambue ári ojoapñáva.
keywords: revisar, control de modelo, validación, qa, calidad, propiedad faltante, obligatorio, duplicado, globalid, guid, piso, apilado, superposición
from: 4d835513
---

## Mba'e ojapóta

Revisá modelo ántes de ho'a: problemas oñemboguejýva planilla, cantidad ha ambue programa-kuéra.

## Pasos

1. Abrí IFC modelo.
2. Abrí {{ui:Controles del modelo}} panel izquierdo-pe.
3. {{ui:Propiedades obligatorias}} pe regla oĩ ja (cualquier clase, Nombre). Emoambue clase (térã {{ui:Cualquier clase}}) ha propiedad, térã clic {{ui:Agregar una propiedad}} ambue regla-pe; x omboguejy peteĩ. Elemento oinfrinja regla propiedad ndaipóri térã vacío rire. Regla-kuéra oñemoaña ko navegador-pe modelo opavave-pe.
4. Clic {{ui:Ejecutar controles}}.
5. Clic peteĩ resultado elemento-kuéra elegi ha ojehechavo chugui.

## Mba'épa ohecha

- **Propiedad obligatoria ndaipóri**: regla peteĩ-peteĩ elemento-kuéra ndaguereko valor.
- **GlobalId mokõi jey ojapóva**: elemento-kuéra oguereko peteĩ GlobalId. Ambue programa oikuaa chupekuéra peteĩ elemento.
- **Piso ndaipóri**: elemento forma piso ndaiporãiva.
- **Copia peteĩ ambue ári**: clase ha tipo mesma, forma mesma lugar mesmápe, oikuaáva mokõi jey cantidad-pe.

Línea resultado peteĩ botón: clic elegi ha ojehechavo elemento-kuéra. Peteĩ chek-pe primer 50 grupo-kuéra ojehechauka. Mba'e hechakuaa umíva oiko avei {{ui:Problemas}} panel-pe.

## Ojekuaa porã

- Controles ohecha modelo activo, oĩ mokõi térã mbohapy abierto. Ehecha [Ver varios modelos IFC juntos](topic:several-models).
- Edición rire, controles jey ejapo.
- {{ui:Problemas}} panel-pe, longitud, superficie ha volumen problema-pe ojehu {{ui:Unidades}} barra-pe elegido-gui (puerta "800 mm" oje'e 2'-7 1/2" pie ha pulgada-pe); unidad mboguejy, panel ombojuaja jey.

## Oñemoañete

- [Auditar el modelo: ambientes, etiquetas, LOD, choques e interfaces](topic:audit-the-model)
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Eliminar, cortar, copiar y pegar elementos](topic:copy-paste)
