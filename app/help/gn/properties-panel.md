---
title: Propiedades panel campokuéra
summary: Mba'épa oúva Propiedades panel-pe ha Archivo, Plano ha Carpeta panel-kuéra campo tapichakue, ha mbovýpa ikatu cambia.
keywords: propiedades, campos, atributos, globalid, guid, copiar, copiar valor, copiar todo, csv, portapapeles, número de serie, etiqueta, tipo de objeto, línea, express id, conjunto de propiedades, pset, cantidades, esquema, panel de archivo
from: fe55b435
---

## IFC elemento

{{ui:Properties}} panel-pe ohechauka elemento tipo "Ifc" prefijo ndoguerekóiva (ehechaukáva "Door", "WallStandardCase", "FurnishingElement") ha hese réra térã "Unnamed".

| Campo | Mba'épa oúva | Ikatu cambia |
|---|---|---|
| Nombre | Elemento hese, heta family ha tipo réra exportador-gui | Heẽ |
| Tipo | Elemento tipo réra, oguereko jave | Ndaha'éi |
| Tipo de objeto | Tekst libre tipo mba'éichapa ojapo exportador-gui | Heẽ |
| Etiqueta | Elemento etiqueta térã marca; heta exportador-kuéra ID ojeikekuaa ko'ápe | Heẽ |
| Descripción | Tekst libre | Heẽ |
| GlobalId | Elemento 22 mbohapyve IFC identificador tuicha, IFC tapichakue exportación-pe peteĩ | Ndaha'éi |
| Línea | Elemento línea número (`#1234`) IFC archivo-pe. Exportación-gui exportación ojehepyta | Ndaha'éi |

Upe rire **conjunto de propiedades**, réra-gui ordenados:

- Cada conjunto ojeipe'a ha ojeheja hese réra clic-gui. Mbohapy ojehechaporãva ojeipe'a.
- "(tipo)" ojehechaukáva conjunto ha'e elemento tipo rehegua: "Propiedad tipo: ko'ápe cambio oikóta tipo tapichakue elemento-pe."
- Cantidad conjuntokuéra (tuichave, superficie, volumen, mbohapy, peso) ndojeporiva ndojecambiái.
- Lista ha enumerado valor-kuéra ohechauka, ndojecambiái.
- Heẽ/Ndaha'éi valor-kuéra ohechauka **Heẽ** térã **Ndaha'éi**.
- Número ohechauka mbohapy decimal peve ohechaukáva. Tuichave (longitud propiedad térã cantidad longitud) ohechauka {{ui:Units}} barra-pe eiporavóva, unidad ipirapita; ikatu ojeporu eiporavóva unidad ha ambue unidad marca (2,4 m, 8'-0"): BimCraft archivo número jeporúpe jeguarýta. Ambue número archivo oguereko ramo.
- Mboyke valor ohechauka *mboyke*. Ojecambiáva valor ha'e mbarete ha ryvy-pe azul ojehechaukáva.

## Valor copia

{{ui:Properties}} cada valor-pe oĩ mikã copia botón: clic ha ohupa valor portapapeles-pe ohechaukaháicha, ejemplo GlobalId, número de serie térã conjunto valor. Copia ndoiporúi edición.

Ko'ápe {{ui:Copy all}} oñembopi elemento valor tapichakue tekstope, conjunto-gui conjunto; {{ui:Copy as CSV}} ohupa grupo, propiedad ha valor fila-pe planilla-pe pegar haguã; mboyke valor-kuéra oñeñongatu cada campo fila oguereko haguã. Otro modelo elemento-pe ojapo ndaipóri; modelo mbohapy ojeike jave, CSV ojepyrũ Modelo columna-pe archivo réra ndive.

## Archivo panel (IFC)

| Campo | Mba'épa oúva |
|---|---|
| Archivo, Tamaño | Ejeike archivo |
| Esquema | IFC versión, IFC2X3 térã IFC4 gui |
| Proyecto | Proyecto réra ha réra hetave |
| Fase | Proyecto fase, exportador-gui ojapo ramo |
| Exportado de | Exportador programa, archivo encabezado-gui |
| Autor | Encabezado-pe autor |
| Exportado | Encabezado-pe fecha ha ora |
| Elementos | Mboyve elemento forma ojehecha |
| Triángulos | Mboyve triángulo forma-kuéra oguereko; modelo pesado mboyve |

## Archivo panel (proyecto ha familia archivokuéra)

| Campo | Mba'épa oúva |
|---|---|
| Tipo | Proyecto, Proyecto plantilla, Familia térã Familia plantilla |
| Guardado en | Versión tenda ojeguardáva archivo |
| Build | Upe versión build exacto |
| Leído | Mboyve archivo BimCraft ojeleé, tamaño-gui |

## Plano panel (DWG ha DXF)

| Campo | Mba'épa oúva |
|---|---|
| Formato | Plano ojeguardáva versión, formato código-pe, AC1032 ichupe |
| Unidades | Plano insertion unidades, oñemoĩ jave |
| Entidades | Mboyve objeto ojeleéva |
| Capas | Mboyve capa |
| Hojas | Mboyve hoja (layout), térã Ninguna |
| Planos enlazados | Mboyve enlazado plano ojejuhúva ha ojeikeva |
| Equipo | Mboyve equipo etiqueta hoja-pe |

## Carpeta panel

| Campo | Mba'épa oúva |
|---|---|
| Carpeta, Archivos, Tamaño | Ejeike carpeta, mboyve archivo oguereko ha tamaño tapichakue |
| Modelos | Proyecto ha familia archivokuéra, cada uno copia de seguridad mboyve ojehecha peteĩ jey |
| Planos CAD, Modelos IFC | Mboyve cada peve |
| Problemas | Mboyve modelo kopia incompleta térã ndojeleéiva, térã Ninguna |
