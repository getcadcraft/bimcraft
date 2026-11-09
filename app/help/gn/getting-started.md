---
title: Ñepyrũ BimCraft-pe
summary: Mba'épa BimCraft oikuaa ko versión-pe, mba'éichapa ejeabri ne primera modelo, ehecha 3D-pe, peteĩ valor emoambue ha peteĩ copia guarda.
keywords: ñepyrũ, primera jey, abrir, ifc, rvt, dwg, rápido ñepyrũ, introducción, visor, bim
from: fc2dea19
---

BimCraft ha'e CadCraft familia-pe edificio modelo aplicación. Ko versión-pe **oabri, ohecha ha oexamina** edificio archivo, ha **IFC modelo datos oñemoambue** ikatu. Ndoikuaái jave modelo nuevo ojapo ni ojapo ndaikatúi. Ha'e modelo visor ha revisor, nombre, etiqueta ha propiedad valor ojemoambue ikatu IFC archivo-pe.

Oabri ikatúva:

| Archivo | Mba'épa ereguereko |
|---|---|
| IFC (`.ifc`) | Modelo 3D-pe tuichave: orbitar, pisos, elemento propiedades ha nombre ha valor ojemoambue |
| Archivo de proyecto ha familia (`.rvt`, `.rfa`, `.rte`, `.rft`) | Archivo ficha: versión ojeguarda, proyecto información, imagen vista previa ha vinculado archivo. 3D ndaiporiva. |
| DWG ha DXF | Plano 2D-pe: espacio modelo ha opa hoja, capas, vinculado planos, vista de impresión ha restaurante equipo planilla etiqueta ojehechaukáva |
| Proyecto carpeta | Carpeta ndive opa modelo informe: copias de seguridad, enlaces, dañado copias ha ndive ñepyrũ archivo mboyve |

Opa oiko navegador-pe, ne compútadora-pe. **Ndojejuhúi.** Ehecha [Files BimCraft opens and saves](topic:files) ambue.

## BimCraft oñemboguejy

1. BimCraft oñemboguejy navegador pyahu-pe. Chrome, Edge, Firefox ha Safari opa oiko; [Browsers, devices and memory](topic:platforms) mba'e ojuehe ohecha.
2. Agua'ẽ pantalla vacía "Open a building model." ojehechaukáva.

:::note
BimCraft navegador-pe oñemboguejy, ha escritorio-pe CadCraft Studio ndive ambue aplicación-pe. Nube guardado ndaiporiva jey: compútadora archivo oabri ha copia-pe guarda.
:::

## Ejeabri ne primera modelo

Ehecha mba'éichapa BimCraft ojapo IFC archivo ndive.

1. Oprimi {{ui:Elegir un archivo}} pantalla mbytepe.
2. Eheka peteĩ `.ifc` archivo {{pick:mac=Finder|windows=File Explorer|linux=your file manager}}-pe ha oconfirma.
3. Agua'ẽ tenonde pantalla ári ohechaukáva "Starting the IFC engine…", upéi "Building geometry".

Ehecha modelo 3D-pe mbytepe, {{ui:Archivo}} panel ha {{ui:Pisos}} lista ky'ai-pe, ha vacía {{ui:Propiedades}} panel ryepý-pe. Línea estado "Opened" ha elementos número ndive oñemopu'ã.

:::tip
Arkivo mbojere ikatu {{pick:mac=Finder|windows=File Explorer|linux=your file manager}}-gui páginá-pe ojere. Pantalla ohechauka "Drop to open" ojere jave.
:::

:::offline
IFC motor oñemboguejy sitio-gui primera jey IFC modelo ejeabrívo, BimCraft sin conexión guardado ndaha'éi. DWG ha DXF planos, proyecto archivo ha carpetas ndoikotevéi ambue: lectores aplicación-pe oiko. Aplicación barra botón {{ui:Listo para usar sin conexión}} he'ívo, opa oñeabri sin conexión. Ndaha'éi, IFC modelo ndaikatúi oñeabri reconectá peve, ko pestaña-pe ha'e jave oñeabri ndaha'éi. Ehecha [Online and offline](topic:online-offline).
:::

:::online
Ndereikéi conexión tenonde? Aplicación barra-pe oprimi {{ui:Guardar para usar sin conexión}} ha agua'ẽ {{ui:Listo para usar sin conexión}}. Guardado copia (~11 MB) IFC motor oguereko. Ehecha [Working offline](common:offline).
:::

## Ehecha

:::mouse
1. Mouse ky'ai botón-pe ejere modelo ryepý-pe orbitar.
2. Rueda eñemongotyrõ zoom-pe.
3. Mouse ryepý botón-pe ejere desplazar. Mac trackpad-pe, {{key:Shift}} ojuehe ejere.
4. Oprimi {{key:F}} térã {{ui:Ajustar}} opa modelo jey ehechá.
:::

:::touch
1. Peteĩ dedo-pe ejere orbitar.
2. Mokõi dedo-pe pinch zoom, ha mokõi dedo ojoaprovaicha desplazar.
3. Oprimi {{ui:Ajustar}} opa modelo jey ehechá.
:::

## Peteĩ mba'e ojapo: etiqueta ojemoambue

1. Oprimi peteĩ pared, puerta térã ambue elemento modelo-pe. Azul oñemoĩ, ha propiedades ryepý-pe ojehechauka.
2. {{ui:Propiedades}} panel-pe oprimi valor ojuehe **Tag**.
3. Emoĩ pyahu etiqueta ha oprimi {{key:Enter}}.
4. Ehecha {{ui:Cambios}} apartado ky'ai-pe ojepeeva: ne ñemoambue listado ha valor ryepý ha pyahu ndive.

## Copia guarda

1. Oprimi {{ui:Guardar como IFC}} {{ui:Cambios}} apartado-pe, térã {{key:Mod+S}}.
2. Eheka pyahu archivo descarga carpeta-pe. Nombre ojeguarda original ndive " (edited)" omoñepyrũva, ejemplo `Clinic (edited).ifc`.

Ne archivo original ndoñemboguejýi. [Change IFC properties and save an edited copy](topic:edit-ifc-properties) ojehechauka ojemoambue opa.

## Mba'éichapa ejupi

- [The BimCraft screen](topic:workspace): opa panel ha botón ojeporu ndive.
- [Coming from other BIM and drawing programs](topic:coming-from): Revit ojeporu jave mba'e ojehechakuaáva.
- [Open a whole project folder](topic:open-project-folder): proyecto carpeta ojeabri ha BimCraft archivos omoĩ.
- [View a DWG or DXF drawing](topic:view-dwg): hojas, capas ha vista de impresión.
