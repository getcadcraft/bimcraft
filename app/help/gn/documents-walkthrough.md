---
title: Documentos ha revisiones (depósito)
summary: Peteĩ tembiapo real-pe paso-paso rapykuéra: proyecto carpeta IFC modelo-kuéra control-pe, modelo peteĩ retira, mbaʼe ojapo, devolvé nota ndive, revisión-pe ejerés, aprobá ha liberá, historial ha mbaʼe ojeporúva ecuchá, ombohasa ha otro persona mbaʼe ohechaukáva bloqueado jave, nube carpeta ndive mbaʼéichapa oñemboheryʼỹ.
keywords: depósito, documentos, recorrido, tutorial, retirar, devolver, revisión, liberar, aprobar, bloqueo, historial, dónde se usa, ifc, modelo, carpeta en la nube, carpeta de proyecto, dos personas, carpeta compartida
from: 0a753f25
---

## Mbaʼe reipuráta

Ana-ndaje (Riverside clínica), Ben colega ndive. Proyecto IFC modelo-kuéra peteĩ carpeta-pe oiko, ojeguerekóva ndéve ha Ben-pe (compartido unidad, sincronizado carpeta térã nube carpeta). Ojehasa rire, peteĩ archivo primera copia-gui liberado revisión **A**-pe ohóta, **B.1**-pe ojejapo jey, ndéve ojehecha quién ojapo mbaʼe, ha ecuchá Ben oha'ẽva jave nde archivo oguereko.

Opavave `.ccvault` oculto carpeta-pe oĩ archivo-kuéra rapykuéri: servidor ndaipóri, nada ndojeikeʼỹi (nube carpeta oñepyrũ, último paso ehecha). Botón-kuéra ha regla-kuéra opavave tema *Documentos: retirar, revisiones y liberación* aplicación-pe.

## 1. Proyecto carpeta oñemboheryʼỹ

1. Ejepe'a {{ui:Documents}} {{ui:Open a folder}} rembe pantalla-pe, térã {{ui:Documents…}} **Archivo** menú-pe.
2. Eiporavo {{ui:Choose the project folder}} ha eiporavo proyecto IFC modelo-kuéra oguereko carpeta. (Proyecto carpeta Studio-pe ha Chrome ha Edge carpeta ejejuhu navegador-pe oñemboheryʼỹ. Ambue navegador-pe panel ohechauka.)
3. Eiporavo {{ui:Change}} **Nde:** rembe ha emoĩ nde iñe'ẽ, `Ana` (oporandu jave, ko computadora iñe'ẽ avei). Panel ohechauka *Nde: Ana ko* ha nde computadora. Nde iñe'ẽ opavave ojapo mbaʼére ojehechaukáta.
4. Eiporavo {{ui:Start a vault in this folder}} ha emoĩ proyecto nombre, `Riverside clinic`. Panel ohechauka *Depósito oñepyrũ Riverside clinic-pe.*

## 2. Archivo control-pe

1. **Archivos fuera del depósito** ejepe'a ha eiporavo `models/House.ifc` rembe {{ui:Add}}.
2. **Archivos en el depósito** rembe ohechakuaa revisión **A.1**, estado **En curso**. A.1 primera copia; depósito opavave revisión copia oguereko.

## 3. Retira, ojapo, devolvé

1. `models/House.ifc` rembe eiporavo {{ui:Open}}. Modelo BimCraft-pe ojehecha ha panel ojekanuhẽ ehecha hag̃ua. {{ui:Documents}}-gui jey ejepe'a panel.
2. Panel jey ejepe'a ha eiporavo {{ui:Check out}}. Fila ohechauka **Nde-pe retirado**. Bloqueo archivo ojapo `.ccvault/locks`-pe; ndaipóri ótro retira ko archivo devolvere peve.
3. Modelo ojapo: muro omyengovi, puerta emoĩ. Guardar ndojejapo'ỹ modelo nde-pe retirado ndaipórive, ha ojehecha mbaʼére; Guardar como nde propia copia-pe oiko.
4. Panel ejepe'a, eiporavo {{ui:Check in}} ha emoĩ mbaʼe ojemoambue (`Moved the door`). Panel ohechauka *A.2-pe devuelto*. Proyecto carpeta archivo ko oñepyrũva modelo, bloqueo ojejoko. Ojapo'ỹ devolver revisión omano'ỹ.

Nde ndemoaʼẽri jave, {{ui:Undo check-out}} archivo devuelve revisión pyahu'ỹ.

## 4. Revisión ha liberación

1. Eiporavo {{ui:Send for review}}. Estado **Para revisión**-pe oveve, archivo solo lectura.
2. Aprobación mboyve, {{ui:Project settings}} ejepe'a ha oporandu máva aprobar (peteĩ iñe'ẽ línea-pe), ehai `Ben` ha `Carla`, ha regla: aprobador autor ndaha'éi. {{ui:Save settings}} eiporavo. Ko vez depósito iñambuepe ndojapói.
3. Ben (térã Carla) eiporavo {{ui:Approve}} ha aprobador iñe'ẽ emoĩ. Estado **Liberado** ha revisión **A**, *aprobado por* ha iñe'ẽ ndive. Liberado archivo solo lectura. {{ui:Send back}} **En curso**-pe ombojevéta mbaʼére ndive.

Aprobador iñe'ẽ panel-pe emoĩva; quién oñemboty registro ha ndaha'éi identidad prueba.

## 5. Pyahu revisión

1. Liberado archivo-pe eiporavo {{ui:New revision}}. Ejeguereko próxima letra-pe.
2. Ojapo, upéi {{ui:Check in}}. Revisión **B.1**, en curso. Upéicha liberá ha **B**-pe ohóta. Primera devolución mboyve {{ui:Undo check-out}} **A**-pe omano.

Revisión letra-kuéra A, B … Z, AA, AB. Norma ojekeha letra-kuéra, proyecto configuración *Usar ASME Y14.35 secuencia* I, O, Q, S, X ha Z ojeheja próxima revisión-pe.

## 6. Mbaʼe ojapo ecuchá

Archivo nombre eiporavo detalle-pe:

- **{{ui:History}}**: evento opavave, pyahuvéva ryepy, quién, mbaʼe computadora ha mboyve: *A.2-pe devuelto* Ana-gui, *Liberado* Ben-gui, ha ambue.
- **{{ui:Revisions}}**: revisión tabla: opavave revisión, árapy, quién devolvió, nota ha quién aprobó. Depósito copia `.ccvault/revs`-pe.
- **{{ui:Uses}}**: IFC modelo ohechaukáva documento-kuéra.
- **{{ui:Used by}}**: archivo ohechaukáva depósito modelo-kuéra opavave.

## Modelo ohechaukáva ambue documento-kuéra

IFC modelo carpeta-pe ambue documento (dibujo, planilla) ohechaukáva **Uses** rembe, ha peteĩteĩ **Used by** rembe modelo ohechauka. Documento devuelve jave, mávapa modelo ohechauka ecuchá.

## 7. Ben ecuchá nde archivo oguereko jave

Archivo jey retira ha Ben-pe pedí proyecto carpeta ejepe'a ko computadora-pe ha panel ejepe'a. Fila-pe ohecha **Ana-pe retirado** nde computadora **desde** hora, {{ui:Check out}} botón ndaipóri. Ha ojapo jepe vaʼerã, depósito ndojejapo'ỹ: bloqueo archivo peteĩ jey ojapo'ỹva, upévare mokõi persona ndaikatúi oguereko, mismo momento-pe ni, carpeta disco-pe Studio-pe. (Navegador-pe carpeta mejor esfuerzo; panel **Carpeta** rembe ohechauka.)

Ana ndaipóri ha Ben archivo oikotevẽ jave, {{ui:Break check-out}} ojeheja. Motivo emoĩ ojeikotevẽ; registro-pe ohechauka quién retirado. Proyecto administrador lista oguerekóramo, hína oikotevẽ. Límite (14 árapy ndaha'eño) rire retiro *mucho tiempo* ohechauka. Ojeheja rire, Ana devolución ojejapo'ỹ, upévare mokõi ndojehupytýi.

## 8. Nube carpeta

Nube carpeta proyecto carpeta equipo nube almacenamiento-pe, upévare equipo compartido unidad ndoikotevẽi. Studio-pe, CadCraft cuenta-pe ojeike, panel ohechauka {{ui:Open a cloud folder}} {{ui:Choose the project folder}} rembe. Eiporavo ha carpeta eiporavo, espacio de trabajo / carpeta-pe ohechauka. Espacio de trabajo dueño carpeta primero ojapo, equipo nube almacenamiento vigente oikotevẽ. Opavave ko ndive mbaʼéichapa oiko; servidor bloqueo ojapo, personas-kuéra rapykuéri estricto. Ndeikeʼỹi jave, panel ikeʼỹ ohecha. Navegador ordinario-pe nube botón ndaipóri; Studio eiporu.

## Ejapo

Ocho paso ko ojapo archivo real copia ndive. Dos persona paso-pe ótra persona térã dos ventana dos iñe'ẽ ndive oikotevẽ. Carpeta compartida real ndive ejapo jave, Community testing página-pe ojapo verificación ko pregunta ojeikotevẽva, resultado ojeguerahaʼa.
